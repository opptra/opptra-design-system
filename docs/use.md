# Use the Opptra design system

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
