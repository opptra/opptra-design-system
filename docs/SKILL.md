---
name: opptra-design-system
description: Applies Opptra design system 0.1.0 — brand language, semantic tokens, and 27 component contracts — to mockups, wireframes, prototypes, HTML dashboards, and product UI. Use when someone asks to mock up a screen, change a page, design a dashboard, review UI, or make product UI look like Opptra. For presentations, documents, emails, and charts, use opptra-branding instead.
---

# Opptra design system

Use the bundled **0.1.0** reference when this skill is invoked. It combines the public website's identity with established Opptra guidance and proposed product patterns. The reference has internal PM/UX design acceptance; stakeholder adoption and production validation remain separate. Follow the user's explicit scope and design decisions.

## Load the relevant source

- Read [the specification](guidelines.md), especially Brand language and Foundations and layout, then the component families needed for the task. It contains 27 families with usage, anatomy, suggested properties, state behavior and accessibility expectations.
- Read [CSS tokens](tokens.css) for exact values and aliases; use [JSON tokens](tokens.json) when a token pipeline needs structured input. Both contain 84 matching entries.
- Inspect [the visual gallery](index.html) for visual relationships. The synthetic workspace is a composition example; design the user's actual task rather than reproducing its content.
- Read [the source audit](source-audit.md) when provenance or an older brand instruction conflicts, and [validation](validation.md) before reporting what was tested.

Public copies (use these when the `system/` files are not in the checkout):

- https://opptra.github.io/opptra-design-system/manifest.json
- https://opptra.github.io/opptra-design-system/guidelines.md
- https://opptra.github.io/opptra-design-system/tokens.json
- https://opptra.github.io/opptra-design-system/tokens.css
- https://opptra.github.io/opptra-design-system/

## Apply the system

Use Spectral headings, Raleway body/controls, navy structure, restrained orange emphasis and soft-yellow callouts. Marketing can use more editorial space; product tasks use the same tokens with tighter grouping. Keep copy direct: state the task or outcome, useful context and next action.

Reuse the relevant component contract before introducing a new pattern. Use semantic token names and reference the component IDs in the handoff where useful. For HTML prototypes, carry the CSS token file into the artifact; adapt the gallery styles to the actual flow. For Figma or other design tools, map tokens and variants to that tool's native variables/components. The supplied HTML is a reference, not a native Figma library or framework SDK.

Preserve these task-specific distinctions:

- Brand-orange actions use navy labels. Small accent links use proposed dark orange #B53F00. Light decorative dividers do not replace essential control boundaries.
- Status has words and a semantic meaning; orange emphasis is not a universal success/warning indicator.
- Zero, missing, stale and restricted data are distinct states. Attribute data, periods and sources; label invented examples as synthetic.
- Specify relevant loading, empty, error, disabled, permission, cancellation and success behavior. Omit inapplicable states explicitly rather than adding meaningless interactions.
- A row's detail and action refer to that selected object. Saving and publishing have different consequences. Focus returns to a valid control after an overlay closes.

The bundle refines older Opptra defaults for logo provenance, accessible action/link treatment and control boundaries. Use these versioned component rules for the assigned mockup; do not mix values from different versions silently. Refreshing the design system is a separate requested task, not a requirement for every mockup.

For presentations, documents, emails, and charts, use `opptra-branding`. Do not add those recipes here.

## Handoff and review

State the reference version used, identify reused families/tokens, and list proposed additions or deviations with their reason. Provide inspectable screens with responsive and relevant task states. Review actual rendered artifacts when tools permit; describe the checks performed and remaining limits. Do not infer full accessibility conformance, live data changes or stakeholder approval from reference checks.


This public reference is version 0.1.0. Fetch https://opptra.github.io/opptra-design-system/guidelines.md, https://opptra.github.io/opptra-design-system/tokens.json, https://opptra.github.io/opptra-design-system/tokens.css, and https://opptra.github.io/opptra-design-system/manifest.json. This skill grants no permission to publish, send messages or modify external design systems.
