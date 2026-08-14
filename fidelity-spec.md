# SmartStaker — SSPilot Visual Parity Specification

## Objective

Recreate the public SSPilot information architecture and visual presentation as **SmartStaker**, preserving the reference’s layout sequence, typography hierarchy, component density, navigation model, and interaction cadence. Replace all SSPilot names and references to Stake with **SmartStaker** and neutral platform language, respectively.

## Global rules

| Reference behavior | SmartStaker parity requirement |
|---|---|
| Dark, almost-black background with subtle teal-blue depth | Use `#111416` / `#15191c` surfaces and low-opacity grid lines in every hero and article surface. |
| Small green wordmark at left, utility controls at right | Use an outlined SmartStaker logotype at left, icon-only theme toggle, an outlined **Platform** utility link, gradient **Download** primary action, and a square hamburger control. |
| Pale editorial display type with one teal-emphasized phrase | Use a high-contrast serif display face in headings, clean sans body type, and teal only to highlight a word or phrase. |
| Bright aqua-to-green download CTA | Use a low-radius linear-gradient button with dark text, download icon, and compact horizontal padding. |
| Faint construction grid inside hero fields | Use 60px grid lines masked into the dark hero. Avoid the previous lime-forward Terminal Ledger treatment. |
| Long scroll-based marketing pages | Preserve generous vertical rhythm, full-width feature sections, long-form prose, repeated conversion moments, FAQ accordions, and a final centered CTA. |

## Route templates

### Homepage `/`

1. Header overlays the dark page and remains compact.
2. Centered hero eyebrow between two short rules, two-line display headline, 2–3 line centered paragraph, two CTAs, and 4-value metadata row.
3. *What is SmartStaker?* explanatory block with a right-side 2-by-2 capability grid.
4. *Sleek. Powerful. Intuitive.* carousel-style application showcase.
5. Alternating split feature blocks: multi-session control, bonus workspace, analytics, and claim monitoring.
6. Referral callout, scrolling **Original Games** and **Supported Providers** text bands.
7. Feedback/testimonial-style carousel is not included; replace it with an **Interface notes** capability carousel, avoiding fabricated user endorsements.
8. Mid-page download band, SmartStaker Relay secondary-product block, numbered FAQ, latest guide cards, and final centered CTA.

### Product pages `/stake-bot`, `/ssprf`, `/stake-slots`, `/stake-strategy`, `/stake-stats`, `/stake-code-claimer`, `/stake-reload-claimer`

1. Left-aligned hero on a faint grid field: badge, large serif title, descriptive copy, filled download CTA and outlined secondary CTA.
2. Long explanatory text block and short benefit checklist.
3. Six-card feature grid, affiliate-style platform callout, relevant support/setting grid, long secondary explanation, highlights list, related-feature rail, FAQ, and final CTA.
4. `/ssprf` uses companion-product content but keeps the same page choreography.

### Game pages `/stake-dice`, `/stake-limbo`, `/stake-mines`, `/stake-plinko`

1. Faint-grid hero with a small game glyph, compact category badge, teal-highlighted game title, explanatory text, and dual CTAs.
2. Long game explainer followed by a two-column settings table.
3. Six-card feature grid, platform callout, numbered four-step guide, compact FAQ list, related games/feature grid, and final CTA.

### Blog `/blog` and `/blog/:slug`

1. Blog index uses a grid-field hero, **BLOG** badge, large serif title, intro line, and bordered download bar.
2. Guides appear in a readable single-column rhythm with category labels, serif titles, descriptions, and green text links.
3. Article pages use a narrow, long-form reading column with hero badge, title, subtitle, metadata, section headings, lists, and a related-guides footer.

### Legal `/privacy`, `/terms`

1. Grid-field hero with **LEGAL** badge, title, updated date.
2. Single dark bordered article slab with numbered serif sections, gray paragraphs, and compact lists.
3. Retain only SmartStaker and neutral-platform wording in the policy text.

## Fidelity acceptance criteria

- The reference site and SmartStaker share the same visible header shape, hero geometry, font hierarchy, dark grid treatment, teal highlight behavior, action-button treatment, and page template sequence.
- Every declared public SmartStaker route resolves and conforms to one of the four route templates above.
- Existing generic preview language and the previous asymmetric Terminal Ledger composition are removed from all visible content.
- Responsive navigation collapses into a working menu panel below 768px, and the desktop layout matches the reference’s compact upper-right utility layout.
