// Explicit public-file allowlist. Never publish system/ or the repository root.
import { readFile, writeFile, mkdir, rm, copyFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { marked } from 'marked';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'docs');
const source = name => readFile(path.join(root, name), 'utf8');
const write = (name, content) => writeFile(path.join(output, name), content);
// Official browser and home-screen marks observed on opptra.com, 03 Nov 2026.
// Reference the supplied assets without redrawing or altering the brand mark.
const faviconLinks = '<link rel="icon" type="image/png" href="https://cdn.prod.website-files.com/6933cd7135f6e590ffef0761/693836051c4d45d5e901e5cb_opptra%20-%20favicon.png"><link rel="apple-touch-icon" href="https://cdn.prod.website-files.com/6933cd7135f6e590ffef0761/693836a5c918774d78c1cb48_opptra%20-%20webclip.png">';
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await write('.nojekyll', '');
for (const name of ['tokens.css', 'tokens.json', 'gallery.css', 'gallery.js']) {
  await copyFile(path.join(root, 'system/wireframes', name), path.join(output, name));
}
await copyFile(path.join(root, 'scripts/site.css'), path.join(output, 'site.css'));

let gallery = await source('system/wireframes/index.html');
gallery = gallery.replaceAll('../design.md', 'guidelines.html')
  .replaceAll('../source-audit.md', 'source-audit.html')
  .replaceAll('../validation.md', 'validation.html')
  .replace('<a href="../prd.md">Requirements</a>', '<a href="use.html">Use in a mockup</a>')
  .replace('appointed by Vijay', 'appointed by Opptra')
  .replace('</head>', `${faviconLinks}\n</head>`);
await write('index.html', gallery);

let guidelines = await source('system/design.md');
guidelines = guidelines.replaceAll('wireframes/', '')
  .replace('The coordinator maintains the [source audit](source-audit.md), [validation record](validation.md) and [requirements](prd.md).', 'See the [source audit](source-audit.md), [validation record](validation.md) and [usage guide](use.md).')
  .replace("S1 · Vijay's request, current chat, 02 Nov 2026", 'S1 · Design-system brief, 02 Nov 2026')
  .replace('A bounded, local design handoff;', 'A bounded design reference;')
  .replace('Vijay appoints', 'Opptra appoints');
let audit = (await source('system/source-audit.md'))
  .replace('- Existing internal baseline: `/Users/vijaybabu/.codex/skills/opptra-branding/SKILL.md`, read on the inspection date.', '- Established Opptra brand guidance, reviewed on the inspection date.')
  .replace('recorded in `validation.md`', 'recorded in [validation](validation.md)');
let validation = (await source('system/validation.md'))
  .replace('for PRD v1 / Design v1 / proposed reference 0.1.0', 'for proposed reference 0.1.0')
  .replace(/## Visual evidence[\s\S]*?(?=## Limits and adoption work)/, '## Evidence\n\nPublic numerical evidence is available in the linked JSON files. Original review records and screenshots are retained with the private source.\n\n')
  .replace('The browser blocked downloading the official logo asset. The guide retains its official URL, provenance and a text fallback;', 'The guide retains the official logo URL, provenance and a text fallback;');
await mkdir(path.join(output, 'evidence'));
for (const name of ['token-parity.json', 'contrast.json']) {
  await copyFile(path.join(root, 'system/evidence', name), path.join(output, 'evidence', name));
}

const usage = `# Use the Opptra design system

Reference version **0.1.0**. Share this website with anyone creating an Opptra mockup. The gallery shows the visual language; the guidelines define component behavior and the tokens supply exact values.

## For a designer or mockup builder

1. Read [brand language and component contracts](guidelines.html).
2. Explore the [interactive gallery](index.html), then choose the components that fit the task.
3. Reuse [CSS tokens](tokens.css) or [JSON tokens](tokens.json). Map them to variables in the design tool.
4. Include relevant loading, empty, error, permission and success states. Label invented data as synthetic.
5. Record version 0.1.0 and any proposed extensions in the handoff.

This is a framework-neutral reference. A native Figma library and a production component SDK are separate implementation work.

## For a UX skill or coding agent

Read [SKILL.md](SKILL.md), the [Markdown guidelines](guidelines.md) and [JSON tokens](tokens.json). These public files can be fetched without repository access. The [manifest](manifest.json) identifies this release and the file hashes.

Example task instruction:

> Use Opptra design system 0.1.0 at https://opptra.github.io/opptra-design-system/. Read SKILL.md, guidelines.md and tokens.json before designing. Build a mockup for [user and task]. Reuse the component contracts, cover relevant states and list any extensions in the handoff.

For a self-contained installable skill package, a repository collaborator can run the packaging command documented in the private source repository.

## Reference status

This is a proposed design reference. Consult the [source audit](source-audit.html) and [validation limits](validation.html) before making approval or accessibility claims. Gallery actions are local demonstrations with synthetic data. Google Fonts and the official logo load from external services with fallbacks.
`;
let skill = await source('skills/opptra-design-system/SKILL.md');
skill = skill.replaceAll('../../system/wireframes/', '').replaceAll('../../system/design.md', 'guidelines.md')
  .replaceAll('../../system/source-audit.md', 'source-audit.md').replaceAll('../../system/validation.md', 'validation.md');
skill = skill.slice(0, skill.indexOf('\nIn this repository,')) + '\n\nThis public reference is version 0.1.0. Use the adjacent guidelines, token files and gallery. This skill grants no permission to publish, send messages or modify external design systems.\n';
await write('SKILL.md', skill);

const pages = { guidelines, 'source-audit': audit, validation, use: usage };
const titles = { guidelines: 'Brand language and components', 'source-audit': 'Source audit', validation: 'Validation record', use: 'Use in a mockup' };
const escape = text => text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('"', '&quot;');
const slug = text => text.replace(/<[^>]*>/g, '').toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');
for (const [name, markdown] of Object.entries(pages)) {
  await write(`${name}.md`, markdown);
  let body = marked.parse(markdown, { gfm: true });
  const used = new Map();
  body = body.replace(/<h([1-6])>(.*?)<\/h\1>/g, (_, level, text) => {
    const base = slug(text), count = used.get(base) || 0;
    used.set(base, count + 1);
    return `<h${level} id="${base}${count ? `-${count}` : ''}">${text}</h${level}>`;
  }).replace(/href="(guidelines|source-audit|validation|use)\.md/g, 'href="$1.html')
    .replace('href="guidelines.html">Markdown guidelines', 'href="guidelines.md">Markdown guidelines')
    .replaceAll('<table>', '<div class="table-wrap" role="region" aria-label="Reference table, scroll horizontally if needed" tabindex="0"><table>')
    .replaceAll('</table>', '</table></div>');
  await write(`${name}.html`, `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">${faviconLinks}<title>${escape(titles[name])} · Opptra design system</title><meta name="description" content="Opptra design system 0.1.0: brand language, component contracts and semantic tokens."><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Spectral:wght@300;600;700&family=Raleway:wght@400;500;600&display=swap"><link rel="stylesheet" href="tokens.css"><link rel="stylesheet" href="site.css"></head><body><a class="skip" href="#content">Skip to content</a><header><a href="index.html">Opptra design system</a><nav aria-label="Documentation"><a href="index.html">Gallery</a><a href="guidelines.html">Guidelines</a><a href="use.html">Use in a mockup</a><a href="tokens.json">JSON tokens</a></nav></header><main id="content"><p class="meta">PROPOSED REFERENCE · 0.1.0 · 02 NOV 2026</p><article>${body}</article><p class="notice"><a href="${name}.md">Read the Markdown source</a> · <a href="SKILL.md">Agent instructions</a></p></main><footer>Opptra design language · Proposed reference 0.1.0 · Synthetic demonstrations</footer></body></html>\n`);
}

// Check every generated HTML and Markdown local destination before deployment.
const files = (await readdir(output, { recursive: true })).filter(name => /\.(html|md)$/.test(name));
for (const name of files) {
  const text = await readFile(path.join(output, name), 'utf8');
  if (/\/Users\/|state\.json|prd\.md|pm-proposal|ux-proposal/.test(text)) throw new Error(`Private reference leaked in ${name}`);
  const links = name.endsWith('.html') ? [...text.matchAll(/(?:href|src)="([^"]+)"/g)].map(x => x[1]) : [...text.matchAll(/\]\(([^)]+)\)/g)].map(x => x[1]);
  for (const link of links) {
    if (/^(https?:|mailto:|data:)/.test(link)) continue;
    const [target, fragment] = link.split('#');
    const destination = path.resolve(output, path.dirname(name), decodeURIComponent(target || path.basename(name)));
    if (!destination.startsWith(output + path.sep)) throw new Error(`Escaped output: ${link}`);
    if (target === 'manifest.json') continue; // Written after file verification.
    const content = await readFile(destination, 'utf8');
    if (fragment && destination.endsWith('.html') && !content.includes(`id="${fragment}"`)) throw new Error(`Missing anchor: ${name} -> ${link}`);
  }
}
const hashes = {};
for (const name of (await readdir(output, { recursive: true })).sort()) {
  if (!path.extname(name) && name !== '.nojekyll') continue;
  hashes[name] = createHash('sha256').update(await readFile(path.join(output, name))).digest('hex');
}
await write('manifest.json', JSON.stringify({ version: '0.1.0', status: 'proposed-reference', published_files: hashes, resources: { gallery: 'index.html', guidelines: 'guidelines.md', skill: 'SKILL.md', css_tokens: 'tokens.css', json_tokens: 'tokens.json' } }, null, 2) + '\n');
console.log(`Built public library in docs/: ${Object.keys(hashes).length + 1} files. Local links and output boundary checked.`);
