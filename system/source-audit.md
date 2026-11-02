# Source audit and design decisions

Inspected 2 November 2026. This is a bounded brand-system study of the homepage and existing brand guidance, not an audit of every page on opptra.com.

| Area | Live website observation | Existing Opptra guidance | Handoff decision |
| --- | --- | --- | --- |
| Identity | eCommerce operations and brand growth; practical language about marketplace work | Navy for structure and authority | Propose a voice centered on clear ownership, useful next steps and evidence-backed outcomes |
| Typography | Spectral large headings, Raleway body/navigation; some h3 elements use Raleway | Spectral for headings; Raleway for body and controls | Standardize semantic headings on Spectral; keep compact UI labels in Raleway |
| Color | Orange #FF5800, pale yellow #FFFCE8, text #22221F, white | Navy #131A48, orange #FF5800, pale yellow #FFFCE8, body #5A5A5A | Carry orange/yellow and typography forward; use existing navy as the product structure |
| Actions | Pill CTAs with white text on orange | Orange emphasis; navy structure; no small orange text on white | Propose navy text on orange and a dark-orange text/link token; document the accessibility reason |
| Geometry | Rounded hero imagery and pills; generous whitespace | Adequate logo clear space | Use expressive rounding for brand imagery and smaller, consistent radii for business controls |
| Logo | Current SVG from the live homepage | Older logo CDN reference | Use the current observed logo asset with source attribution; no new logo or inferred lockup |
| Product states | Homepage is not evidence for a complete business UI system | No complete state library in branding guidance | New tokens for statuses, borders, focus, density and component states are proposals |

## Primary source references

- [Live homepage](https://www.opptra.com/), observed through rendered browser and computed styles at 1280 × 720.
- [Observed stylesheet](https://cdn.prod.website-files.com/6933cd7135f6e590ffef0761/css/opptra---dev.webflow.shared.84794a841.css).
- [Observed current logo](https://cdn.prod.website-files.com/6933cd7135f6e590ffef0761/6937f6a9040488e80b8e30b0_logo.svg).
- Existing internal baseline: `/Users/vijaybabu/.codex/skills/opptra-branding/SKILL.md`, read on the inspection date.
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) and [contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html), checked on the inspection date.

## Initial contrast measurements

Ratios calculated from the specified sRGB colors, using the WCAG relative-luminance formula. Rounded for display; tests must use unrounded values.

| Pair | Ratio | Decision |
| --- | ---: | --- |
| White / brand orange | 3.16:1 | Avoid for normal-size CTA text |
| Navy / brand orange | 5.24:1 | Proposed orange CTA treatment |
| White / navy | 16.55:1 | Structural dark surfaces and primary actions |
| Body gray #5A5A5A / white | 6.90:1 | Body copy on white |
| Light gray #CECECE / white | 1.57:1 | Decorative separators only when boundary conveys no essential information |
| Live dark orange #D74A00 / white | 4.31:1 | Still below the 4.5:1 normal-text threshold |
| Proposed dark orange #B53F00 / white | 5.71:1 | Proposed links and small accent text |

These measurements cover color pairs only. They do not establish accessibility conformance, final font rendering, keyboard behavior or screen-reader compatibility. Actual gallery verification is recorded in `validation.md`.

## Evidence limits

No stakeholder interviews, user research, logo-rights review, complete website audit, adoption baseline or production-system inspection was conducted. Marketing claims on the public site were not independently verified and are not used as synthetic business values. New guidelines and component behavior need stakeholder adoption and implementation validation.
