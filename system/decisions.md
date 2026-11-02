# Decision log

Record date, decision owner, source, rationale, and affected requirement or screen IDs. Supersede old decisions explicitly.
# Decision log

## 2026-11-02 — D1 Scope and source authority
Coordinator, under Vijay's request. Define the system from the live public website and existing Opptra brand guidance. Deliver a local, reviewable design handoff. Website facts and proposed extensions must be distinguishable. Audience scope (PM/design/engineering across marketing and business products) is an explicit working assumption, open to Vijay's revision.

## 2026-11-02 — D2 Reconcile current website and established product guidance
Coordinator. Retain live-site Spectral/Raleway, orange, soft yellow, generous space, rounded imagery and current logo. Retain #131A48 navy from existing Opptra guidance as structural product color. Standardize heading typography to the existing guidance. Document the website's #22221F and white-on-orange CTAs as observations; do not copy low-contrast treatments into component recommendations.

## 2026-11-02 — D3 Contrast-safe action and status extensions
Coordinator and UX, within the requested component-library scope. Keep original brand orange as an accent and use navy text on orange CTAs (calculated 5.24:1). Introduce proposed #B53F00 for small accent links (5.71:1 on white), stronger control boundaries, and independently named semantic success/warning/error/info pairs. Do not treat orange as a universal status indicator. Color-pair calculations are recorded separately from browser and assistive-technology validation.

## 2026-11-02 — D4 Reference format and adoption boundary
Coordinator. Deliver framework-neutral CSS/JSON tokens and a responsive HTML reference. Native HTML/JavaScript demonstrate interactions in a synthetic task. The files are a design handoff; production framework choice, supported-browser testing, stakeholder brand approval and implementation release remain adoption work. Owner and framework questions are nonblocking for this definition task.

## 2026-11-02 — D5 Resolve reference-review findings
PM identified the enabled loading illustration; coordinator identified narrow-view overflow, row-detail context and focus recovery. UX corrected the reference. The coordinator retested disabled/busy state, measured 390px page containment, inspected all three contextual row details, and verified draft-toast dismissal returns to the originating row. Validation evidence is recorded in validation.md. These fixes complete the first authored design version before fingerprint-bound peer acceptance.
