# Opptra design system

Website-informed brand language, semantic tokens and component reference for Opptra. **Reference version 0.1.0** includes 27 component families, 84 CSS/JSON tokens and a responsive interactive gallery.

## For designers and product teams

- [Brand language and component contracts](system/design.md)
- [Visual reference source](system/wireframes/index.html)
- [CSS tokens](system/wireframes/tokens.css) · [JSON tokens](system/wireframes/tokens.json)
- [Source audit](system/source-audit.md) · [Validation evidence](system/validation.md)

To view the gallery locally, run this from the repository root:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8000/`. The root page leads to the reference gallery. Keep the adjacent files in place when copying the gallery.

## For a UX skill or coding agent

Load [the Opptra design-system skill](skills/opptra-design-system/SKILL.md). In this checkout, it points to the canonical files under `system/`. It supplies the brand and component rules; your UX workflow continues to own the actual user task, flows and review.

To make a self-contained skill package for another environment:

```sh
python3 scripts/package_skill.py
```

This writes `dist/opptra-design-system-skill-0.1.0.zip`. Install the extracted `opptra-design-system` folder through the target environment's skill workflow, or attach it and explicitly ask the agent to read its `SKILL.md`.

Example request after installation:

> Use $opptra-design-system to mock up [flow] for [user]. Reuse existing components and list any extensions. Record the design-system version in the handoff.

## Source and releases

`system/` is the single editable design reference. The skill uses it directly; portable packages are generated from it. Update the JSON and CSS exports together and run:

```sh
python3 scripts/check.py
node --check system/wireframes/gallery.js
```

Use one release version across guidelines, tokens and skill packages. The original design-package acceptance records are retained with their content fingerprint; changes to covered design files require fresh review before claiming current mutual acceptance. Repository packaging is separate from that original design acceptance.

## Hosting

The static files are ready to serve from the repository root. A future hosted release can use this gallery and render the Markdown specifications as readable web pages. Hosting, custom-domain configuration and Figma publication are separate follow-up work; this repository does not configure or trigger a deployment.

Google Fonts and the official website logo load over the network, with usable font/text fallbacks. All people, figures and product actions in the examples are synthetic. This is a proposed design reference and handoff; stakeholder adoption and production validation remain separate.
