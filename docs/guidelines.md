# Opptra brand language and component library

Design artifact version 1 · Proposed reference release 0.1.0 · 02 Nov 2026

This package defines a website-informed Opptra identity, reusable foundations and 27 component families for designers, PMs and engineers. It is a framework-neutral design handoff with interactive reference examples. Independent PM–UX agreement is internal artifact acceptance; brand approval, user validation, implementation feasibility and production accessibility testing remain separate.

Open the [responsive reference gallery](index.html). Supporting files: [semantic CSS tokens](tokens.css), [JSON tokens](tokens.json), [gallery styles](gallery.css) and [local demonstration interactions](gallery.js). See the [source audit](source-audit.md), [validation record](validation.md) and [usage guide](use.md).

## Source authority and reconciliation

| Source | What it establishes | How the proposal uses it |
|---|---|---|
| S1 · Design-system brief, 02 Nov 2026 | Define Opptra brand language and component library using opptra.com | A bounded design reference; audience and product patterns are working assumptions |
| S2 · [Current public website](https://www.opptra.com/), inspected 02 Nov 2026 | Positioning around operational ownership, marketplace execution and brand growth | Direct, outcome-led voice; the guide avoids reusing unverified quantitative claims |
| S3 · Computed homepage styles/visual inspection recorded in the brief | Spectral/Raleway, #FF5800, #FFFCE8, #22221F, open spacing, rounded imagery, pill CTAs; some live headings use Raleway | Preserve the recognizable expressive vocabulary; distinguish observed details from recommended product rules |
| S4 · Existing Opptra branding skill, read 02 Nov 2026 | Navy #131A48 structure, orange accent, soft yellow, Spectral headings, Raleway body/UI | Retain navy as the structural color and standardize headings to Spectral |
| S5 · [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/) | Design expectations for contrast, keyboard operation, reflow, names, errors and status | Specifies design intent; the validation record states actual checks and limits |

The current website logo is the [official SVG asset referenced by the inspected site](https://cdn.prod.website-files.com/6933cd7135f6e590ffef0761/6937f6a9040488e80b8e30b0_logo.svg). The older branding skill points to an older asset; this guide uses the current reference. No logo redraw, variant or lockup is proposed as approved.

Observed website traits are not proof of an approved design system or accessibility. In particular, observed white text on orange is not adopted for ordinary-size action labels. #22221F is retained in the audit as a live-site neutral; navy and readable neutral grays are the proposed product text system. Semantic statuses, layouts, radii, component contracts and all business UI in this package are **proposed extensions**, not an inventory of existing Opptra product components.

## Brand language

### Personality and visual principles

**Confident:** establish a clear hierarchy and a decisive next step. Navy creates structure; Spectral brings an assured, human voice. Avoid filling every available area with controls.

**Grounded:** use real work, concrete language and attributed data. Show permission, source freshness and the difference between zero and unknown. Do not decorate incomplete information into certainty.

**In motion:** help a person move through a task. Orange signals emphasis and active position. Changes are brief and purposeful; motion never carries essential information alone.

### Voice and message hierarchy

Lead with the task or outcome, add the useful context, then name the next action. In marketing, connect a brand's goal to the operational work Opptra takes on. In product UI, describe the current state and the next step. Use active verbs and ordinary English. Explain the practical work performed by automation rather than relying on AI language as evidence of value.

| Context | Proposed or synthetic example | Rule |
|---|---|---|
| Marketing headline | “Your next market. A clear path forward.” | One idea, sentence case, no unsupported superlative |
| Marketing support | “Bring your brand to new marketplaces with an operating partner for launch, daily execution and growth.” | Explain the work; no invented quantity or guaranteed result |
| Marketing CTA | “Explore Opptra” | Specific destination; website link is real |
| Task title | “Review listing changes” | Use a verb + object |
| Action label | “Save demo draft” | Explain the effect; distinguish save from publish |
| Empty | “No listings match these filters. Clear a filter to see more.” | Explain the scope; give a recovery action |
| Error | “We couldn't load the latest data. Try again. Your saved changes are safe.” | Say what failed and what remains safe only when implementation guarantees it |
| Validation | “Enter a brand name to save this example.” | Identify the field and correction |
| Success | “Your draft is saved. Review it before publishing.” | Confirm the precise result; no false completion |
| Permission | “You can view this brand. Ask an administrator for editing access.” | Explain capability and a real request route when implemented |
| Missing | “Not available — source not connected.” | Explain unknown; never substitute zero |
| Freshness | “Last synced 01 Nov 2026, 18:00 IST. Review the source before acting.” | Absolute timestamp with timezone and implication |

Copy above is proposed language. All examples involving brands, listings, people, permissions and figures are synthetic. Validate recovery/safety promises against the actual implementation before reuse. Keep required and optional field labels explicit; do not rely on asterisks or placeholder text alone. Use sentence case for headings, labels and actions. Use abbreviations only where the intended audience understands them; expand unfamiliar ones on first use. Avoid exclamation marks in system messages, blaming users and vague labels such as “Submit” when the result can be named.

### Logo, imagery and icons

Use the supplied SVG at its intrinsic aspect ratio. Do not recolor, skew, rotate, crop or rebuild it. Proposed minimum display width: 96px, subject to brand-owner review. Proposed clear space: at least one capital “O” height on every side, including mobile headers. Place it on a plain light surface; obtain an approved inverse asset for dark surfaces. The dark product header in the synthetic composition uses plain “OPPTRA / WORKSPACE” text to avoid inventing an inverse mark.

Photography should show real products, people or local market context with one clear subject and natural color. Use wide, quiet crops in marketing with 24px rounded corners; avoid generic AI imagery as evidence of capability. Product screens prioritize information over decorative imagery. Supporting geometric circles in the gallery are proposed decorative graphics, hidden from assistive technology, and are not a logo treatment. No supplied photography was downloaded or repackaged.

Use one consistent outline icon set: a 20px box and 1.5px stroke as the proposed baseline, scaling to 16px in compact contexts. Match corner/stroke behavior across the set. Decorative icons use `aria-hidden="true"`; standalone action icons require an accessible name and, where unclear, a visible label. Never encode status, permission or freshness through an icon or color alone. Do not mix arbitrary filled, outline and emoji icons in a production interface; gallery text symbols indicate prototype meaning.

### Marketing and product application

Marketing uses display typography, a 42rem reading width, broad imagery and 64–96px section spacing. Product work uses the same colors/typefaces at 14–16px UI sizes, 24–32px task spacing and 16px table-cell padding. Product metrics use Raleway with tabular numerals. Both contexts use one prominent action per task, orange accents, dark navy structure, and warm yellow callouts. Large orange background slabs and multiple competing CTA colors weaken the hierarchy and are not recommended.

## Foundations and layout

The complete 84-token registry is exported with identical keys and raw values in CSS and JSON. Tokens beginning `--opptra-` preserve the established primitives. Semantic tokens encode purpose so implementations can change a value without renaming every use. Every exported entry records `origin` as `existing-guidance` or `proposed-extension`; existing type/color values also observed on the website are noted in the JSON metadata. `var()` aliases are preserved as explicit strings, not flattened.

| Foundation | Tokens / values | Application |
|---|---|---|
| Brand | `--opptra-navy` #131A48; `--opptra-orange` #FF5800; `--opptra-orange-hover` #FF8C4F; `--opptra-yellow` #FFFCE8 | Established identity values |
| Text | `--color-ink` navy; `--color-text` #323642; `--color-text-muted` #5A5A5A; `--color-text-inverse` white | Hierarchy on light surfaces; white only on strong dark fills |
| Surface | `--color-canvas` #FAFAF7; `--color-surface` white; `--color-surface-subtle` #F2F3F5; accent yellow | Page / card / subtle group / contextual callout |
| Action | Primary navy, primary hover #252F65; accent orange, hover light orange; link #B53F00 | Orange action labels use navy; underlined links use the darker proposed orange |
| Borders | Decorative #DDDEE4; control #76767D; width 1px | Decorative lines do not carry essential control boundaries. Fields use the stronger token |
| Semantics | Success #226644 / #EDF7F0; warning #815700 / #FFF6D6; danger #B42331 / #FFF0F0; info #304B88 / #EDF2FD | Proposed text/foreground and surface pairs; pair with an explicit label |
| Disabled | #6A6D78 on #EDEEF1 | Explain why an unavailable action matters nearby; do not rely solely on muted color |
| Typefaces | Spectral, Georgia, serif; Raleway, Segoe UI, sans-serif | All semantic headings use Spectral; controls/body use Raleway |
| Type scale | Caption 12; small 14; body 16; lead 18; H3 24; H2 36; display clamp 48–80px | Display 300 weight, headings 600, body 400/500, UI 600; body line-height 1.6, heading 1.1 |
| Spacing | 4, 8, 12, 16, 24, 32, 48, 64, 96px | Tight within controls, 24px card padding, 32px task spacing, 64–96px storytelling sections |
| Grid | Wide 12 columns; narrow 4; content max 76rem; reading max 42rem; gallery rail 12.5rem | 24px standard gaps. Gallery's documentation layout uses a rail plus content; nested preview grids use 2 or 3 columns |
| Radius | 6px small; 12px medium; 24px large; 999px pill | Fields / operational cards / large editorial panels / buttons and badges |
| Elevation | Raised 0 8px 28px #131A4812; overlay 0 24px 80px #131A4833 | Flat by default; elevation distinguishes floating overlays or a full composition |
| Motion | 120ms fast; 180ms standard; cubic-bezier(.2,0,0,1) | Color/state transition. Reduced-motion preference removes transitions/animations and smooth scrolling |
| Focus | 3px navy outline, 3px offset, 2px white halo; orange-hover on `.dark` inverse areas | White halo separates outline from dark surfaces; inset/double ring may be needed in clipped production containers |
| Controls | Small 36px; default 44px; large 52px | 44px is a usability default. This exceeds WCAG 2.2's 24px minimum target where that AA criterion applies; 44px is not described as the AA requirement |

Color calculations provided by the coordinator: white/navy 16.55:1; navy/orange 5.24:1; white/orange 3.16:1; #B53F00/white 5.71:1; #5A5A5A/white 6.90:1. White/brand orange fails ordinary text contrast. Darkened live-site #D74A00 is still 4.31:1, so it is not a normal-text fallback. The previous #CECECE light gray is retained as a primitive, but at 1.57:1 against white it cannot carry an essential control outline. See the coordinator's final validation for the checked semantic pairs. These calculations do not establish complete conformance.

### Responsive rules

| Viewport | Gallery/layout behavior | Data and controls |
|---|---|---|
| Above 1100px | Sticky 12.5rem side rail; max-width documentation container; two-column component panels; three-column metrics | 44px default actions, 16px table cells; no hover-only content |
| 851–1100px | Rail narrows to 10rem; gaps/padding reduce; table toolbar stacks | Full content labels remain; no truncation of important state or units |
| 601–850px | Rail becomes a sticky horizontal section list below the 76px header; content fills width | Navigation scrolls locally; touch and keyboard links remain available |
| Up to 600px; checked target 390px | Single-column component panels, two-column palette, 4-column conceptual grid, 24px card padding, 5% page gutters | Metric cards become rows; forms remain full width; dialog is viewport minus 32px; buttons wrap rather than clip; tables retain column meaning and scroll inside their region |

Breakpoint custom properties in the token export document the media-query thresholds; CSS custom properties cannot be substituted directly into media queries. Keep implementation media queries in sync with the registry. Sticky navigation reserves scroll offset so anchored headings remain visible. No page-wide horizontal scrolling is intended. Table regions are intentional horizontal scroll containers with a name and keyboard focus; do not force every data table into unrelated mobile cards. At 200% text size or long translated content, let labels and descriptions wrap, retain critical data, and test actual implementations before release.

## Component library

The following 27 families are the proposed initial library. C26 groups loading skeleton and progress as one loading family; C27 groups permission/freshness notices as one contextual-state pattern. They are reusable design contracts, not a published framework API. Names below are suggested API names; properties specify behavior for a future implementation.

### Shared anatomy and state contract

Controls use a native element where possible, a persistent visible name, an optional leading icon, and supporting text when needed. Buttons never communicate a state solely through color. Inputs have label → control → hint → error anatomy. Product data has value → unit/scope → source/freshness anatomy. Status and alert labels use words as well as color.

For all **interactive** components: provide a visible hover treatment for pointer users; pressed feedback where applicable; the prescribed visible focus treatment; keyboard operation; and a disabled/reason treatment when the task supports unavailability. Focus never changes a value without an intentional action. Disabled controls do not receive events; read-only fields remain focusable and selectable. Do not replace a normal action label with an unexplained spinner.

During an **asynchronous action**, retain the control width, expose busy state (`aria-busy` on the affected area), provide a visible progress phrase, prevent duplicate submission and keep the context. Announce completion or failure without moving focus unless a new focused task or blocking error requires it. Avoid indefinite skeletons: after an implementation-defined timeout, show a recoverable failure with the last known timestamp if data exists. The reference's spinner/skeleton are explicitly illustrative, not actual requests.

For **static components**, hover, pressed, focus and disabled are inapplicable unless the component contains an explicit interactive element. Do not make an entire informational card or badge focusable. Loading, validation and selected states are inapplicable unless named below. Unknown or missing data never uses a numeric zero, blank cell or unexplained dash.

### Actions

| ID / API | Use, anatomy and content | Variants / sizing | State and behavior | Accessibility expectations |
|---|---|---|---|---|
| C01 `Button` | Perform a task. Label + optional decorative icon. Verb + object; aim for 1–3 short words, wrap on narrow screens if necessary | Primary navy; accent orange/navy for a prominent brand CTA; outlined secondary; ghost; destructive red. 36/44/52px | Default/hover/pressed/focus/disabled/loading; success/error delivered by feedback, not a permanently recolored button. One primary per task. Action does not navigate | Native `button`, explicit type; Enter/Space; accessible name matches visible label; busy phrase and duplicate-submit prevention |
| C02 `TextLink` | Navigate to a resource or location. Meaningful text + optional direction icon | Default underlined dark orange; inverse white; inline 14/16px. Link style does not depend on hover | Default/hover/focus/visited where useful. Disabled/loading/validation/selected are inapplicable; remove an unavailable destination or explain nearby | Native anchor with real href; Enter activates; no empty/hash-only placeholder destinations |
| C03 `IconButton` | A familiar repeated action with limited space. One icon; visible tooltip can clarify but does not replace accessible name | Primary/secondary/ghost/destructive; default 44px target; icon 20px | Same applicable states as Button. No unlabeled mystery actions; destructive operation opens confirmation | Native button with `aria-label`; decorative SVG hidden; tooltip, if added in production, opens on keyboard focus and pointer hover and can be dismissed |

### Inputs and choices

| ID / API | Use, anatomy and content | Variants / sizing | State and behavior | Accessibility expectations |
|---|---|---|---|---|
| C04 `TextField` | Short single-line input. Visible label, control, hint, inline error. Placeholder is an example, never the label | Default/error/read-only/disabled; 44px high, full available width. Example brand name max 80 characters | Default/hover/focus/filled/invalid/disabled/read-only. Validate on submit; after error, correct as the person edits. Preserve values after failure. Loading lives at form level; selected is native text selection | Native input with correct type/autocomplete, `required` as applicable; label `for`; hint/error IDs in `aria-describedby`; invalid sets `aria-invalid`; focus first invalid after submit |
| C05 `Select` | One choice from a known list; label + native select + hint/error | Native single select, 44px; avoid custom menu unless search/scale requires it | Default/hover/focus/selected/invalid/disabled; async options show loading/error outside menu; preserve previous valid selection | Native select and option elements; platform keyboard behavior; label tied to select; required/error association when applicable |
| C06 `TextArea` | Multiline context. Visible label, optional qualifier, field, helper | Default/error/read-only/disabled; min 90px, vertical resize. Example max 240 characters | C04 states; selected text is native. Never truncate typed content. Add a count when near a strict limit, not a false progress metric | Native textarea; associated label/hint/error; keyboard Tab exits normally; preserve line breaks |
| C07 `Checkbox` | Independent or multiple choices. Box + clickable label; optional help | Default/checked/mixed/error/disabled. 18px visual inside minimum 32px labelled row | Default/hover/focus/checked/mixed/disabled; group validation if at least one is required. No loading state unless whole group is busy. Reference uses native checked state; mixed is documented for implementation | Native checkbox and label; Space toggles; indeterminate state requires property and accessible mixed state; fieldset/legend for a related group |
| C08 `RadioGroup` | One mutually exclusive choice; legend + options + hint/error | Vertical default, horizontal only for short choices; 18px visual inside 32px label row | Default/hover/focus/selected/invalid/disabled. Selection doesn't submit the surrounding form. Loading inapplicable to static choices | Native same-name radios in fieldset with legend; Arrow keys choose, Space selects; include visible group error and description |
| C09 `Switch` | Immediately enable/disable a simple setting; binary state + persistent label | 40×24px track in 44px row; off gray/on navy; optional state description | Default/hover/focus/on/off/disabled; error restores prior state and explains failure. Selected means on. Loading only for remote persistence; demo toggles local state and announces it | Checkbox with `role="switch"`; Space toggles; accessible name remains stable, checked conveys state. Never use for choosing a pending form option |
| C10 `SearchField` | Find content in a stated scope; visible label or accessible name, query, optional search icon/results status | Component index uses Enter; listing search filters on input. 44px; clear via native search behavior or explicit clear action | Default/hover/focus/filled/no-results; async loading/error only when wired to source. No selected/disabled unless source/task unavailable. Keep query after empty results | Native search input; label names scope; result count uses polite status; typing does not move focus; Enter search may move to matched section heading in this guide |

### Navigation

| ID / API | Use, anatomy and content | Variants / sizing | State and behavior | Accessibility expectations |
|---|---|---|---|---|
| C11 `NavigationShell` | Orient a product or reference. Header, identity, section links, current marker | Wide rail; narrow horizontal strip. Gallery link targets ≥40px high, default actions 44px | Default/hover/focus/current; current uses both background and orange marker. Loading/validation inapplicable; permissions can omit inaccessible destinations with context when necessary | Named nav landmarks, skip link, real anchors, `aria-current="location"`; DOM order: skip → header → rail → main; no focus traps |
| C12 `Breadcrumb` | Show hierarchy above a detail surface. Ancestor links + separators + current label | 12px, wrapping row, generous link spacing. Keep useful ancestors; do not ellipsize critical context | Links default/hover/focus; current is text, not another duplicate link. Loading/disabled/validation inapplicable | Named breadcrumb nav; current `aria-current="page"`; visual separators hidden; link text meaningful |
| C13 `Tabs` | Switch among related, mutually exclusive views at one level. Tablist, tab buttons, panel | Underlined tabs; 44px minimum tab height; wrap or local scroll if many | Default/hover/focus/selected/disabled if documented; selected has orange underline and navy text. Automatic activation for instant local panels; loading/error/empty belong inside panel | `tablist`/`tab`/`tabpanel`; IDs connect tab to panel; roving tabindex; Left/Right, Home/End; Tab enters active panel; preserve logical focus |
| C14 `Stepper` | Inform about a bounded sequence. Ordered steps, numbers/completion text, current | Horizontal for 3 short steps; vertical for long labels. Gallery is informational | Upcoming/current/complete/error if actual task failed; hover/focus/disabled/loading/selected inapplicable to informational steps. Do not invent percent complete | Ordered list with `aria-current="step"`; completion stated in accessible text. If navigation is supported later, use explicit links and preserve data |
| C15 `Pagination` | Move through a known paginated result set. Previous, page buttons, next, result summary | 36px compact page controls; current navy; visible range; ellipsis for long lists with a direct route | Default/hover/focus/current/boundary-disabled/loading. Reset to first page after a filter changes scope. Reference only changes local page number/range; no real dataset is fetched | Named nav; page accessible names; `aria-current="page"`; boundary buttons disabled; announce result range; actual implementations keep focus on the activation control |

### Data and status

| ID / API | Use, anatomy and content | Variants / sizing | State and behavior | Accessibility expectations |
|---|---|---|---|---|
| C16 `StatusBadge` | Short categorical state. Label + optional decorative dot | Neutral/info/success/warning/danger; 11px UI, 4×9px padding. Prefer 1–3 words | Static semantic states. Hover/focus/pressed/disabled/loading/validation/selection inapplicable. Do not imply clickability | Text names status; color is supplementary; never put interactive controls inside a badge |
| C17 `Avatar` | Identify a person beside a name; image or initials | 36px default, initials fallback; proposed larger 44px. Group with accompanying names if needed | Image/initials/fallback; hover/focus/disabled/validation/selection/loading inapplicable unless an explicit profile link wraps it | Visible text identifies the person; accessible name or decorative treatment when adjacent name duplicates it; initials do not communicate a role/permission |
| C18 `Card` | Group one coherent object or task. Heading, context, optional status, one explicit action | Default outlined 12px radius; feature panel 24px; padding 24px | Static default; loading/error/empty belong to its content. Container hover/focus/disabled/selected inapplicable; nested action has its own states | Semantic article/section where appropriate; heading level fits page; explicit link/button rather than click handler on whole card; preserve reading order |
| C19 `Metric` | Communicate one value with context. Label, value/unit, source, timestamp, comparison if valid | Standard 36px value; compact 27px; missing state uses readable phrase | Known positive/negative/zero; unavailable; stale; loading/error via content. Hover/focus/disabled/validation/selected inapplicable. Comparisons must state period/baseline; no invented positive change | Text/units readable in source order; tabular numbers; trends use words/symbols with explanation, not color alone. Data must not be supplied solely by a chart |
| C20 `DataTable` | Compare items across stable attributes. Caption, header row, body rows, optional row action | Standard 16px cells; compact 12px only when target sizes survive; numeric right alignment. Local horizontal scroll on narrow screens | Loaded/empty/loading/error/stale/permission. Optional sort/row selection only when explicitly implemented; current reference has neither. Row hover can aid tracking without implying whole-row action | Native table, caption, scope=col, appropriate row header where needed; named focusable scroll region; unique accessible row-action names; never use table role for unrelated layout |

### Feedback and recovery

| ID / API | Use, anatomy and content | Variants / sizing | State and behavior | Accessibility expectations |
|---|---|---|---|---|
| C21 `Alert` | A persistent issue, warning or result that affects current task. Symbol, title, explanation, optional action | Info/success/warning/danger, 16px padding, leading status line | Default informational; loading/retry/success/failure as task states. Container hover/focus/selected/disabled/validation inapplicable; nested action owns these. Keep failure until resolved/dismissed appropriately | Static examples aren't announced on page load. Newly injected urgent failure may use alert; normal updates use status. Role choice follows urgency; actionable text is keyboard reachable |
| C22 `Toast` | Supplementary confirmation after an explicit action. Short title, one sentence, close | Navy inverse; max 400px; viewport inset 16–24px; persistent until dismissed in reference | Shown/hidden; close hover/focus. No loading/selected/validation/disabled state for container. Don't rely on toast for an unresolved error or important content that must remain discoverable | Polite atomic status; do not steal focus; close has name and visible focus. On explicit dismissal restore focus to valid trigger if dismissal held focus. No auto-dismiss timer in reference |
| C23 `Dialog` | Focus one review or consequential decision. Context, title, explanation, summary, cancel, explicit action | Standard 480px max, viewport minus32px; review or destructive confirmation; 24–32px padding | Closed/open/busy/error/success. Hover/focus/disabled apply to controls, not shell. Cancel/Escape preserve data. Destructive opens with safest action focused, states consequence, never uses a vague “Yes” | Native `dialog.showModal()`, labelled/described; background inert while open; Tab stays in modal; Escape closes; close restores opener; production long dialogs keep heading and actions reachable |
| C24 `Accordion` | Optional explanatory content; visible question + disclosure + answer | Native details, 16–18px padding; multiple open sections allowed | Collapsed/expanded, summary hover/focus. Loading/validation/disabled/selected inapplicable; do not hide required errors or the only main CTA inside it | Native details/summary; Enter/Space; full question is clickable; document outline remains coherent; essential task instructions remain visible |
| C25 `EmptyState` | Explain no objects or no results. Title, reason/scope, meaningful recovery | Inline/table/card; icon optional; 24px padding | First-use/no-results/cleared; loading/error/permission are separate meanings, not empty aliases. Container hover/focus/disabled/selected/validation inapplicable | Text conveys state, decorative illustration hidden, action native and named; empty query results do not imply objects were deleted |
| C26 `LoadingState` | Convey a known wait without changing layout. Skeleton + visible loading phrase, or progress label + value | Static skeleton for content shape; indeterminate spinner for action; determinate progress only if denominator known | Indeterminate/determinate/complete/error via surrounding feedback. Hover/focus/disabled/selected/validation inapplicable to indicator. Demo progress60% is static synthetic, not a running import | Real loading region uses `aria-busy`; visible phrase; avoid noisy repeated announcements. Native progress with label/value; skeleton decorative. Reduced motion turns off spinning/shimmer |
| C27 `ContextNotice` | Prevent incorrect action caused by access or source quality. State, capability/freshness, next step | Permission uses info; stale uses warning; inherited 16px alert anatomy | Restricted/stale/disconnected/current; loading/error via source state. Container hover/focus/disabled/selected/validation inapplicable; action only when a real route is provided | Explain capability in words; do not expose restricted values. Timestamp includes date/timezone; human guidance is not a connected access request. Production needs agreed role rules/freshness thresholds |

## Flows, screens and interaction details

| Screen ID | Actual file and stable anchor | Relevant states | Requirement coverage |
|---|---|---|---|
| DS00 | [Overview](index.html#overview) | Proposal provenance, synthetic-data notice, compact brand expression | R1, R2, R6, R9 |
| DS01 | [Brand language](index.html#language) | Voice examples, current logo and network fallback, imagery/icon rules | R1, R2 |
| DS02 | [Foundations](index.html#foundations) | Palette, contrast warning, type/rhythm, token links | R1, R3, R8 |
| DS03 | [Actions](index.html#actions) | Default, hover/focus, disabled, loading illustration, feedback, destructive confirmation | R4, R5, R8, R9 |
| DS04 | [Inputs and choices](index.html#inputs) | Empty/filled/invalid/valid, read-only/disabled, checked/radio/on-off, component search | R4, R5, R8, R9 |
| DS05 | [Navigation](index.html#navigation) | Current/complete/upcoming, tabs selected, page boundaries | R4, R5, R7, R8, R9 |
| DS06 | [Data/status](index.html#data) | Known zero, missing, stale, semantic statuses, action card | R4, R5, R8 |
| DS07 | [Feedback](index.html#feedback) | Error/retry, success, toast, native dialog, accordion, empty, illustrative loading/progress, permission | R4, R5, R8, R9 |
| DS08 | [Synthetic workspace](index.html#composition) | Search/filter, no matches/clear, row detail, review/save/cancel, activity, freshness, draft permission | R5, R6, R7, R8, R9 |
| DS09 | [Adoption](index.html#adoption) | Use/adopt/version guidance, production gates, local file links | R9, R10 |

### Find a rule and inspect a component

Overview → brand language → foundations → relevant component section → composed example → adoption. The rail links use real anchors and current position; native browser navigation remains available. Component search accepts a component name and Enter, jumps to the relevant section and focuses its heading; a no-match message preserves the query. Input typing never triggers an unexpected jump.

### Complete a synthetic business task

1. Open the workspace. Read freshness and permission notices before reviewing data.
2. Select “Needs review” or type a listing name. Matching rows and an announced result count update locally; the query and filter can be combined.
3. If no row matches, show an explicit empty state. “Clear filters” resets both query and status and returns focus to search.
4. Review the “Everyday carry bag” change from its row or the screen's “Review 3 changes” action. The native dialog describes the synthetic change and includes cancellation.
5. Cancel or Escape closes without effect. Save demo draft closes the dialog, restores focus to its opener and announces a local confirmation. Nothing publishes or changes a system.
6. The Activity tab demonstrates related historical context, not a live audit feed. View actions on the cup and lamp rows open a context-specific, read-only detail dialog with stock, status and source freshness. The save action is absent because no edit is proposed for those rows. Zero stock is explicit; the unrelated return-rate metric is missing, not zero.

The reference intentionally models a single simple task rather than introducing a full marketplace permission, publishing, sync or approval engine. The bulk review dialog summarizes three sample changes and shows one example in detail; the bag row opens its single proposed title change. Cup/lamp row views show only their matching listing context. This is not a full change-diff experience.

### Form, pagination and destructive examples

Submitting the brand form with a blank/whitespace name shows a field-specific error, preserves the selected market and focuses the invalid name. Filling a name clears its error; submission confirms a local example. Values are not stored, sent or restored after reload. The select, textarea, checkbox, radio and switch use native inputs and can be changed locally. “Demo notifications” changes only its label/state message.

The pagination example changes a local page number and visible item range, with previous/next disabled at boundaries. It does not paginate the three workspace rows; those belong to the separate live-filter example. The “Discard demo draft” action opens a separate native dialog with Keep draft focused by default. Confirmation announces that the example completed and no real draft was removed.

### Demo extent and network dependency

All buttons either operate local state, open/close a local dialog or produce an explicitly synthetic explanation. The loading skeleton, 60% progress, stepper and static status notices are labelled illustrations. The guide has no storage, tracking, fetch/XHR or network writes. The real external destination is opptra.com; local document/token links open files in the package.

The current official SVG is referenced remotely. Asset download was not available under the active browser policy, so no local copy or extracted inline version is included. The guide shows a text wordmark when the image errors. Google Fonts is a remote stylesheet; Georgia/Segoe UI/system fonts provide fallback. Both dependencies need licensed distribution and availability decisions before production deployment. A blocked network can change the exact typography/logo rendering, while the content and local interactions remain usable.

## Accessibility and validation limits

Design target: [WCAG 2.2 AA](https://www.w3.org/TR/WCAG22/). Relevant expectations include text/non-text contrast, keyboard operation, visible/unobscured focus, labelled controls and descriptive errors, status announcements, meaningful sequence, reflow and minimum targets. Reference controls generally use 44px default height, with 36px compact actions; [SC2.5.8](https://www.w3.org/TR/WCAG22/#target-size-minimum) sets a 24×24 CSS-pixel AA minimum with exceptions. Do not mislabel the 44px enhanced target as an AA minimum.

Focus order follows the visible DOM: header and section nav, then page content, form controls and explicit actions. A skip link bypasses repeated navigation. Tabs use roving tabindex and Arrow/Home/End keys; panels are labelled and focusable. Native dialogs provide modality with labelled titles, Escape cancellation and opener restoration. Native selects, radios, checkboxes and disclosures retain platform semantics. Errors associate with the field and use specific correction text. Toast and result-count updates use polite status; static examples avoid assertive announcements during initial page load.

Recommended color pairs were measured numerically by the coordinator; actual final checks, browser dimensions and outcomes belong in [validation.md](validation.md). The reference intentionally does not claim screen-reader testing, user testing, a physical-device check, production behavior, complete conformance or implementation feasibility. CSS focus intent is not proof that every host application, embedded container or browser will preserve it. Production review must cover disabled/busy announcements, zoom/reflow, high contrast, font fallback, live permissions/data, keyboard focus after asynchronous updates and screen readers in supported browser/OS combinations.

## Adoption, ownership and versioning

Proposed steward model: Opptra appoints a design owner for identity/components and an engineering maintainer for implementation. Product/domain owners supply task needs, permissions, data definitions and acceptance criteria. These are proposed responsibilities, not assigned commitments.

Apply the system in this order: understand the task → use the existing pattern → reference semantic tokens → specify applicable states → inspect a full composition → validate in the target product. Begin with one real form/table workflow and one marketing section; review actual content and user needs before wider migration.

Use stable component IDs and names; prefer capability-neutral names such as Button, TextField and StatusBadge over a page-specific name. Add a new component only when an existing component cannot meet a demonstrated need without confusing behavior. An addition request should include the task, evidence, related component, proposed API/states, content, responsive behavior, accessibility expectations and an actual composition. The steward records the decision and why reuse was insufficient.

Reference release **0.1.0** means the first proposed package. This is distinct from durable PRD/design artifact version1 used for content-bound review. Adopt semantic versioning for a future library: patch for a correction that preserves the contract; minor for a compatible component/token addition; major for removal/rename or changed behavior that requires product migration. During 0.x, record every breaking change explicitly and avoid silent renames. Each release records changed tokens/components, source decision, migration before/after, affected products and validation limits.

First-adoption checklist:

- Confirm stakeholder brand approval, product scope, system owners and the live-logo authority.
- Agree font license/distribution and supported browser/OS combinations.
- Build native, tested component implementations in the chosen framework; do not ship this gallery as a production package.
- Validate real data definitions, permissions, async behavior, empty/error recovery and content with domain owners.
- Review desktop/narrow/zoom layouts, keyboard behavior and supported assistive technology; document actual findings.
- Migrate incrementally with token aliases and deprecation notices where an old contract already exists.

## Alternatives considered and remaining questions

Copying the public site literally would preserve familiar visual traits but does not supply business-product states and would repeat unsafe ordinary-size white/orange contrast. An unrelated dashboard kit would provide dense controls while losing Opptra's type and expressive spacing. The chosen approach retains the website vocabulary and reconciles it with established navy product structure, then labels the operational patterns as proposals.

Light mode, English copy, marketing plus business-product use and desktop-first business density are accepted working assumptions for this bounded handoff. Confirm the first product to adopt, framework, real-user task priorities, final steward, supported browsers, font distribution and future dark/multilingual needs before production work. No user research, adoption benefit or system-wide migration commitment is inferred.
