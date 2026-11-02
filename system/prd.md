# Opptra brand language and component library

PRD version 1 · 2026-11-02 · Design handoff

## 1. Summary

Define one recognizable Opptra identity and a reusable component reference for marketing and business products. Build from the live [Opptra website](https://www.opptra.com/) and existing brand guidance; distinguish observed traits from recommended extensions. Deliver a reviewable local package, including tokens, documentation, a responsive gallery and a composed business screen. [S1–S4]

## 2. Contacts

Vijay owns the request and subsequent brand/adoption decisions. The PM and UX workforce prepare and independently review this handoff; their agreement does not establish stakeholder approval.

## 3. Background

The public site uses Spectral and Raleway, vivid orange, soft yellow, generous space, rounded imagery and pill actions. Existing internal guidance also defines navy for structure. The system should reconcile these sources explicitly: preserve the website's personality while giving dense business tasks clear hierarchy and behavior. Current-site treatments, including white text on orange, are evidence to evaluate rather than defaults to copy. There is no measured inconsistency, adoption baseline or completed user research in this brief. [S2–S4]

## 4. Objective

Make it possible for a designer, PM or engineer to select consistent language, tokens and components without having to infer rules from individual website sections.

Handoff acceptance measures, not measured business results:

- Every requirement below maps to a reviewed artifact or an explicit design exception.
- All recommended tokens exist in CSS and JSON with matching semantic names and values.
- Each catalog component specifies when to use it, variants, states and accessibility expectations; the reference includes a complete synthetic business task and recorded verification limits.

## 5. Market segments

**Designers and PMs:** need to choose a clear brand expression and describe reusable behavior when preparing marketing or product work.

**Engineers implementing Opptra interfaces:** need unambiguous tokens, component anatomy, states and responsive rules to turn designs into interfaces. Framework integration and production certification remain outside this handoff.

Both segments are working audience assumptions from the brief, pending Vijay's adoption decisions. [S1]

## 6. Value propositions

**Designers and PMs.** Who: people defining Opptra experiences. Why: express the same identity across different tasks. What before: infer choices from the website, internal guidance and individual artifacts; this current workflow is an assumption. How: a sourced visual/verbal guide with examples and component selection rules. What after: make and review a design choice against named rules. Alternatives: copying a website section or using an unrelated UI kit. **Value:** recognizable Opptra expression with practical guidance for both storytelling and daily work.

**Engineers.** Who: people implementing those experiences. Why: resolve styling and behavior without guessing. What before: translate isolated screens and request missing states; this workflow is an assumption. How: semantic CSS/JSON tokens, component contracts and inspectable compositions. What after: identify the intended value and behavior, including edge cases, from one package. Alternatives: framework defaults or repeated local decisions. **Value:** a portable design reference that makes implementation decisions explicit without prescribing a production framework.

## 7. Solution

### 7.1 Reference experience

Use a local HTML gallery with stable section/screen anchors. A visitor can understand the brand, inspect foundations, compare components and inspect a synthetic business composition. Include a compact marketing example to show the same identity at a different density. Link final files from the design artifact. [S1–S4]

### 7.2 Requirements and acceptance criteria

**R1 — Identity and provenance.** Define visual principles, logo rules, imagery/icon guidance and marketing/product application rules. Attribute live observations, existing guidance and proposals separately. Accept when the current logo source is linked; Spectral/Raleway, orange, yellow and navy reconciliation is explicit; no unverified performance claim or invented logo variant is presented as approved. [S1–S4]

**R2 — Verbal language.** Define personality, voice, message hierarchy and practical copy. Accept when examples cover a marketing headline/body/CTA and product labels, empty, error, success and permission messages; claims remain evidence-based, and synthetic examples are labelled. [S1, S2]

**R3 — Portable foundations.** Specify color, typography, spacing, grid, radius, elevation, motion and focus, using semantic tokens. Accept when CSS and JSON exports match in names and values, original brand colors remain identifiable, new status/action colors are labelled proposals, and accessible orange usage is explicit. [S3–S5]

**R4 — Core component contracts.** Cover actions/links; text input, select, checkbox, radio and switch; badge/status, alert/toast, card; table, tabs, pagination; dialog and navigation. Accept when every family has usage, variants/sizes as applicable, anatomy, content rules, states, behavior and accessibility notes, with a visible reference example. Group related controls to keep the library manageable. [S1, S4, S5]

**R5 — State completeness.** Define default, hover, focus, disabled, loading, selected and validation states where applicable. Accept when the contract marks inapplicable states explicitly and covers empty, loading, error, success and restricted-access business states; destructive actions require clear confirmation, and simulated actions never imply a live change. [S1, S5]

**R6 — Composition and traceability.** Demonstrate a coherent business task with navigation, filtering/search, a table, a detail/action surface and feedback, plus a compact marketing expression. Accept when all values and actions are synthetic, component/token reuse is visible, and stable screen/section IDs map back to requirements. [S1–S4]

**R7 — Responsive behavior.** Define wide and narrow layout/density rules for the gallery, navigation, forms, overlays and data tables. Accept when the reference is inspected at a 1280px desktop viewport and a 390px mobile viewport, no page-wide horizontal overflow obscures content, and any intentional table scrolling is contained and documented. [S1, S5]

**R8 — Accessibility expectations.** Design toward WCAG 2.2 AA with documented keyboard order, focus, names/labels, validation, status announcements, contrast and non-color cues. Accept when token contrast checks and keyboard/reference behavior checks are recorded with actual results and limits; target size/reflow decisions are documented; design intent is never called blanket conformance. [S5]

**R9 — Inspectable, honest reference.** Deliver a navigable gallery and component/state index with local assets where practical. Accept when included links and controls work to the documented demo extent; unavailable network fonts/assets have usable fallbacks; inert, illustrative and simulated elements are distinguished; file paths and validation evidence are included in the handoff. [S1]

**R10 — Adoption and change rules.** Explain how to apply tokens, select components, request additions and version changes. Accept when the package defines proposed ownership, stable naming, semantic version/change-log guidance, migration expectations and a first adoption checklist; proposal status and remaining validation are clear. No adoption benefit is represented as measured. [S1, S4]

### 7.3 Delivery format

Markdown specifications, CSS and JSON token exports, and an HTML reference are framework-neutral design artifacts. HTML/CSS/JavaScript may demonstrate behavior, but this is not a production component package or a commitment to a framework.

### 7.4 Assumptions and open questions

Working defaults: one brand across marketing and business products, light mode first, English examples, and desktop business tasks that remain usable on mobile. Navy is retained from existing guidance; semantic status colors, component shapes and dense layouts are recommendations. Vijay may revise these defaults during adoption. Actual user task priorities, repository/framework, final system owner, font distribution rights, supported browsers and implementation/accessibility testing need confirmation before production use; none blocks this bounded handoff. [S1–S5]

## 8. Release

Version 1 includes the brand guide, foundations, core component contracts, responsive reference, synthetic compositions, adoption notes and independent PM/UX package reviews. Complete after shared-package review and recorded verification; no delivery estimate is inferred from this request.

Later work may include framework packages, dark mode, multilingual patterns and additional domain components, following a real adoption need. This scope excludes live website edits, publishing, product development, production QA and externally represented brand approval.
