# Validation record

Executed 2 November 2026 for proposed reference 0.1.0. These are targeted design-reference checks, not production QA or a full accessibility-conformance assessment.

## Rendered reference

| Check | Executed result |
| --- | --- |
| Desktop browser | 1280 × 720 CSS-pixel viewport; document scroll width 1280px. Overview and business composition inspected visually |
| Narrow layout | Same-origin iframe with a 390 × 844 CSS-pixel viewport, inside the desktop browser. Document client width, document scroll width and body scroll width all 390px after the fix. This is a real narrow browsing context, not physical-device or mobile-browser validation |
| Table containment | Channel table: 301px container / 557px contents. Listing table: 309px container / 617px contents. Both use local horizontal scrolling; no page-wide overflow remains |
| Anchored heading | Desktop composition heading measured at y=223.98px below an 85px header, after navigation settled |
| Typography and assets | Computed sampled headings use Spectral; body/control declarations use Raleway. Browser font status loaded. Both official logo images loaded in this session |
| Token parity | 84 CSS custom properties and 84 JSON entries; exact names and raw values match, including aliases. See [token-parity.json](evidence/token-parity.json) |
| Static structure | UX checked 73 unique HTML IDs, all 35 ID references, all ten section anchors, and JavaScript syntax. The coordinator checked the delivered source and reference behavior |

## Executed interactions

- An empty brand-name submission shows a specific correction, sets `aria-invalid` and focuses the field. A valid submission shows a local synthetic success result.
- ArrowRight from the Summary tab selects History, updates the visible panel and moves focus to its tab.
- Searching sample listings for an unmatched query produces zero rows and a recovery action. Clear filters restores all three rows.
- Bag review shows the selected listing's proposed title change and a draft action. Cup details show its live state, 128 units and stale timestamp without a save action. Lamp details show a known zero and no invented edit/save action.
- Saving the bag's demo draft closes the dialog and shows a confirmation explicitly stating that no live data changed. Dismissing that toast returns focus to the originating row action.
- Opening the review dialog initially focuses Cancel. Tab moves to Save. Escape closes the modal and returns focus to its opener. Native modal semantics are used; this was a focused keyboard walkthrough, not an exhaustive browser or assistive-technology test.
- The illustrative busy button is disabled and exposes `aria-busy="true"`; the sample cannot accept duplicate clicks.

## Color measurements

The coordinator calculated fifteen prescribed foreground/background pairs using the WCAG sRGB relative-luminance formula. All fifteen meet the selected threshold: 4.5:1 for ordinary text and 3:1 for the control boundary. Full values and thresholds: [contrast.json](evidence/contrast.json).

Examples: navy/orange 5.2386:1; white/navy 16.5482:1; dark-orange link/white 5.7131:1; control border/white 4.5085:1. The website's white/orange pair is 3.1589:1 and is intentionally replaced for ordinary-size action labels. These results apply to the specified pairs, not every possible token combination or complete rendered-page conformance. The underlying threshold references are [W3C contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) and [WCAG 2.2](https://www.w3.org/TR/WCAG22/).

## Findings resolved during review

1. The loading sample accepted clicks despite describing duplicate-submit prevention. It is now a disabled busy illustration with an explicit phrase.
2. Absolutely positioned hidden text in wide table actions escaped its scroll container at 390px. Positioned table/button containers now keep it contained; measured page scroll width changed from 596px to 390px. No root-overflow masking was applied.
3. Row details needed to reflect the selected listing. Contextual detail/review content now distinguishes the bag, cup and lamp; only a defined proposal offers Save.
4. Toast dismissal needed a valid focus destination after its dialog closed. It now remembers the originating control; the final flow was retested.

## Evidence

Public numerical evidence is available in the linked JSON files. Original review records and screenshots are retained with the private source.

## Limits and adoption work

No physical-device, screen-reader, cross-browser, 200%-zoom, font-failure, long-translation, real-data or production-permission testing was conducted. The CSS specifies reduced-motion behavior; the OS preference was not toggled in this review. Fallback fonts and a logo error handler were inspected in source; the successful network session did not exercise a forced failure.

The guide retains the official logo URL, provenance and a text fallback; network fonts and logo remain external dependencies. No stakeholder approval, user research or adoption outcomes are inferred from the PM/UX reviews. Framework choice, ongoing owner and stakeholder adoption remain nonblocking follow-up decisions for this handoff.
