"""Check portable references, token parity and the recorded design acceptance."""
import hashlib
import json
import re
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlparse

ROOT = Path(__file__).resolve().parents[1]
SYSTEM = ROOT / 'system'


class HTMLReferences(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids, self.idrefs, self.links = [], [], []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            self.ids.append(attrs['id'])
        for key in ('for', 'aria-labelledby', 'aria-describedby', 'aria-controls'):
            self.idrefs.extend(attrs.get(key, '').split())
        self.links.extend(attrs[key] for key in ('href', 'src') if key in attrs)


def check_path(base, value):
    link = urlparse(value.strip('<>'))
    if link.scheme or link.netloc or not link.path:
        return
    path = (base / unquote(link.path)).resolve()
    assert path.is_relative_to(ROOT) and path.is_file(), f'Invalid local target: {value}'


def main():
    css = dict(re.findall(r'(--[\w-]+):\s*([^;]+);', (SYSTEM / 'wireframes/tokens.css').read_text()))
    data = json.loads((SYSTEM / 'wireframes/tokens.json').read_text())
    exported = {key: item['value'] for key, item in data['tokens'].items()}
    assert css == exported, 'CSS/JSON token mismatch'
    for path in ROOT.rglob('*.md'):
        if any(part in ('.git', 'dist') for part in path.relative_to(ROOT).parts):
            continue
        for link in re.findall(r'\]\(([^)]+)\)', path.read_text()):
            check_path(path.parent, link)
    html = HTMLReferences()
    html.feed((SYSTEM / 'wireframes/index.html').read_text())
    assert len(html.ids) == len(set(html.ids)), 'Duplicate HTML IDs'
    assert set(html.idrefs) <= set(html.ids), 'Missing HTML ID reference'
    for link in html.links:
        check_path(SYSTEM / 'wireframes', link)
        parsed = urlparse(link)
        if not parsed.scheme and not parsed.path and parsed.fragment:
            assert parsed.fragment in html.ids, f'Missing anchor: {link}'
    state = json.loads((SYSTEM / 'state.json').read_text())
    paths = {'brief.md', 'decisions.md'}
    paths.update(item['path'] for item in state['artifacts'].values())
    paths.update(item['path'] for item in state['screens'])
    paths.update(str(path.relative_to(SYSTEM)) for path in (SYSTEM / 'wireframes').rglob('*') if path.is_file())
    fields = ('schema_version', 'feature_id', 'title', 'artifacts', 'sources', 'requirements',
              'screens', 'questions', 'blockers', 'review_round', 'review_budget')
    payload = {key: state.get(key) for key in fields}
    payload['files'] = {path: hashlib.sha256((SYSTEM / path).read_bytes()).hexdigest() for path in sorted(paths)}
    fingerprint = hashlib.sha256(json.dumps(payload, sort_keys=True, ensure_ascii=False).encode()).hexdigest()
    for role in ('pm', 'ux'):
        review = state['signoffs'][role]
        assert review['package_sha256'] == fingerprint, f'Stale {role} acceptance: obtain a fresh review'
        assert hashlib.sha256((SYSTEM / review['review_path']).read_bytes()).hexdigest() == review['review_sha256'], f'Changed {role} review evidence'
    print(json.dumps({'version': data['version'], 'tokens': len(css), 'unique_html_ids': len(html.ids),
                      'id_references': len(html.idrefs), 'design_acceptance': 'current',
                      'package_sha256': fingerprint}, indent=2))


if __name__ == '__main__':
    main()
