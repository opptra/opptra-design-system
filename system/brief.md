# Feature brief

## Problem and users

## Current workflow and evidence

## Desired outcome

## Scope and non-goals

## Constraints and source references

## Decisions needed
# Opptra brand language and component library

Owner: Vijay. Assigned 2026-11-02. Source of direction: "Define a clear brand language and component library for Opptra. Go with opptra website opptra.com."

## Outcome and audience
Create a usable design handoff for Opptra designers, product managers and engineers: a clear verbal/visual language, reusable semantic tokens, a documented component catalog and an inspectable responsive HTML reference gallery. Treat these audiences as a working scope assumption. Cover public-facing brand expression and practical business-product UI with one identity and different density. No production application, external publishing or live website edits are requested.

## Evidence
- S1 Stakeholder request above, current chat, 2026-11-02.
- S2 https://www.opptra.com/ inspected live through browser on 2026-11-02. Page title: "Opptra: Your AI-Operated eCommerce Distributor". Hero and service content support ownership of eCommerce operations and brand growth. Do not reproduce performance claims or quantities as independently verified evidence.
- S3 Browser computed styles of the homepage at 1280px: main headings Spectral (300/500, ~67–88px), body/navigation Raleway (500/600, ~15–17px); orange #FF5800, soft yellow #FFFCE8, text #22221F; rounded hero imagery and pill CTAs. Observed white text on orange CTA is a current-site fact, not an accessibility endorsement. Current logo URL: https://cdn.prod.website-files.com/6933cd7135f6e590ffef0761/6937f6a9040488e80b8e30b0_logo.svg . CSS URL: https://cdn.prod.website-files.com/6933cd7135f6e590ffef0761/css/opptra---dev.webflow.shared.84794a841.css . Some live h3 elements use Raleway; the proposed system should intentionally standardize headings to Spectral per S4.
- S4 /Users/vijaybabu/.codex/skills/opptra-branding/SKILL.md, read 2026-11-02: navy #131A48 for structure, orange #FF5800 for accents, soft yellow #FFFCE8, body #5A5A5A, light gray #CECECE; Spectral for headings, Raleway for body and controls. This existing guidance remains the baseline; clearly identify extensions as proposals. Live site neutrals and logo differ from older guidance; use the live logo with provenance, retain navy as the existing product structure, and document the reconciliation.
- S5 https://www.w3.org/TR/WCAG22/ for current design expectations; check exact criteria before criterion-level claims. No blanket accessibility conformance claim. Font and logo availability, browser, keyboard, contrast and screen-reader checks must be described according to actual evidence.

## Deliverables
1. Lean requirement document with stable IDs and observable acceptance criteria.
2. Brand language: personality, voice, message hierarchy, useful copy examples, logo/imagery/icon rules and marketing/product application rules.
3. Color, typography, spacing, grid, radius, elevation, motion, focus and semantic tokens, exported as CSS + JSON.
4. Inspectable HTML gallery with components and a composed business screen, plus default/interaction/feedback/permission states documented. Use synthetic examples; do not imply live Opptra metrics or connected actions.
5. Component usage/variant/size/state/behavior/accessibility documentation and adoption/versioning guidance. Reference examples are design handoff, not a published production-ready package.
6. Independent PM/UX reviews bound to the same final package and validation notes. Export the reviewable package to the current chat outputs directory for the user.

## Decisions available to the team
Choose sensible defaults within this scope without waiting for optional user preferences. Distinguish observed website traits, existing internal guidance, and new recommendations. Keep proposed semantic colors and contrast-safe orange treatment explicit. Do not fabricate brand approvals, user research, measured adoption benefits or business baselines. Stop at design handoff.
