"""Build a self-contained skill from the repository's single reference source."""
import json
import shutil
import tempfile
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def main():
    version = json.loads((ROOT / 'system/wireframes/tokens.json').read_text())['version']
    output = ROOT / 'dist'
    output.mkdir(exist_ok=True)
    archive = output / f'opptra-design-system-skill-{version}.zip'
    with tempfile.TemporaryDirectory(prefix='opptra-skill-') as temporary:
        skill = Path(temporary) / 'opptra-design-system'
        (skill / 'references').mkdir(parents=True)
        shutil.copytree(ROOT / 'system', skill / 'references/system')
        instructions = (ROOT / 'skills/opptra-design-system/SKILL.md').read_text()
        instructions = instructions.replace('../../system/', 'references/system/')
        instructions = instructions.replace(
            'In this repository, the canonical design resources live in references/system/. Run python3 scripts/package_skill.py from the repository root to generate a self-contained skill ZIP with bundled references.',
            'All required design resources are bundled below this directory.')
        (skill / 'SKILL.md').write_text(instructions)
        with zipfile.ZipFile(archive, 'w', zipfile.ZIP_DEFLATED) as bundle:
            for path in sorted(skill.rglob('*')):
                if path.is_file():
                    bundle.write(path, path.relative_to(Path(temporary)))
    with zipfile.ZipFile(archive) as bundle:
        assert bundle.testzip() is None, 'Invalid skill archive'
    print(archive)


if __name__ == '__main__':
    main()
