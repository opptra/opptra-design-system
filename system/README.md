# Opptra brand language and component library

Proposed reference **0.1.0** · 2 November 2026 · Design handoff

Start with **[the visual library](wireframes/index.html)**. Open it in a browser with its adjacent CSS and JavaScript files in place. The gallery demonstrates brand voice, visual foundations, 27 component families and a synthetic brand workspace.

## Included

- [Design specification and component contracts](design.md): language, visual rules, component anatomy, variants, states, interaction/accessibility expectations and adoption guidance.
- [CSS tokens](wireframes/tokens.css) and [JSON tokens](wireframes/tokens.json): matching reusable names and values.
- [Requirements](prd.md), [source audit](source-audit.md), [decisions](decisions.md) and [validation evidence](validation.md).
- `state.json` and `reviews/`: durable requirement mapping and independent, content-bound PM/UX review records.

## Direction

Clear ownership and calm confidence. Use Spectral for headings, Raleway for body and controls, navy for structure, orange for deliberate emphasis and soft yellow for gentle differentiation. Pair the website's editorial expression with practical product density. Product copy names the action, consequence and next step.

The live [Opptra homepage](https://www.opptra.com/) informed this proposal. Existing internal guidance supplies the navy structure; semantic status colors, component dimensions and interaction rules are proposed additions. The source audit records the distinction.

## Use and limits

All people, product values and actions in the business examples are synthetic. The HTML demonstrates behavior locally. This is a framework-neutral design reference; a production component package requires implementation and validation in the chosen product.

Google Fonts and the official website logo load over the network. Georgia, Segoe UI and an accessible text wordmark provide fallbacks. The official SVG URL is retained with provenance.

The validation record describes the executed color, browser, interaction and responsive checks. It distinguishes a desktop browser's 390px iframe viewport from physical-device testing, and does not claim full accessibility conformance. Internal PM/UX acceptance is separate from Vijay's stakeholder adoption and production release decisions.
