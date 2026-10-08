# CSS Reference — Outline

Generated from `manifest.json`; keep the two in sync when sheets are added, renamed or reordered.

## Profile

- **Collection section:** Web Technologies
- **Status:** In progress
- **Sheets:** 77 across 15 groups
- **File prefix:** `css` (`css-##-[slug].html`)
- **Folder:** `Sheets/CSS-Sheets/`
- **Coverage:** introduction & setup, cascade & inheritance (specificity, layers, nesting & @scope), selectors, values, units & functions, custom properties, color (oklch, color-mix, light-dark), box model & sizing, typography, backgrounds & visual effects, layout fundamentals, flexbox, grid, responsive design & print, transforms, transitions & animation (scroll-driven, view transitions), UI & interaction, organization, accessibility & quick reference; every sheet adds Accessibility and Browser Support sections

## Approach

- **Category:** stylesheet language, so the outline skips output, operators, control flow, error handling, OOP, files and modules. Their nearest CSS equivalents get their own groups: the cascade (how conflicts resolve), values & functions, and conditional rules (`@media`, `@supports`, `@container`).
- **Audience:** intermediate / reference. Basic syntax is short; the cascade, selectors, layout (flexbox, grid, positioning) and modern features get the most sheets.
- **Deep areas:** the cascade (6 sheets), selectors (8), grid (5), typography (6) and animation (6). These were each one or two sheets in the old set and were the most overcrowded pages.
- **Overlap:**
  - **CSS Systems** owns frameworks, preprocessors, CSS-in-JS and methodologies (ITCSS, BEM in Sass). Sheets 73–74 here cover plain-CSS organization and naming only, and point to CSS Systems for the rest.
  - **HTML** owns element semantics, forms markup, `dialog` and `popover` behavior. This set covers how to style them (sheets 16, 70, 72).
  - **JavaScript** owns the CSSOM and `element.style` APIs. This set mentions `setProperty()` only on the custom-properties sheet.

## Sheet Layout (CSS set)

CSS code samples are short but usually need a rendered result next to them, so the set keeps the HTML set's three-row layout:

1. **Row 1:** column 1 stacks Description → Notes → Accessibility → Browser Support → Code Explained; column 2 holds the code block.
2. **Row 2:** tables (2–3 side by side).
3. **Row 3:** Common Mistakes | Tips | Summary.

Two sections are added to every sheet:

- **Accessibility** (`section-a11y`, `id="a11y"`): what the properties on that sheet do to readability, focus, motion and forced-colors users.
- **Browser Support** (`section-support`, `id="support"`): Baseline status (Widely available / Newly available / Limited) for each feature on the sheet, plus the fallback to use when it is Limited.

## Mapping From the Previous 25-Sheet Set

| Old sheet | New sheet(s) |
|---|---|
| 01 Architecture & Organization | 03, 05, 06, 73 |
| 02 Naming Conventions | 74 |
| 03 Selectors: Basic & Combinators | 11, 12 |
| 04 Selectors: Pseudo-Classes | 14, 15, 16 |
| 05 Selectors: Pseudo-Elements & Attribute | 13, 18 |
| 06 The Box Model | 28, 29, 30 |
| 07 Borders & Outlines | 32, 33 |
| 08 Typography: Font Properties | 34, 35, 36 |
| 09 Typography: Text Properties | 37, 38, 39 |
| 10 Colors | 25, 26, 27 |
| 11 Backgrounds | 40 |
| 12 Gradients | 41, 42 |
| 13 Flexbox: Container | 50 |
| 14 Flexbox: Items | 51 |
| 15 Grid: Container | 53 |
| 16 Grid: Items & Placement | 54, 55 |
| 17 Positioning | 47, 48 |
| 18 Display & Overflow | 45, 46, 49 |
| 19 Transitions | 65 |
| 20 Animations & Keyframes | 66 |
| 21 Transform | 63, 64 |
| 22 Responsive: Media Queries | 58, 59, 61 |
| 23 Responsive: Fluid Units & Functions | 20, 21, 22 |
| 24 CSS Variables | 23, 24 |
| 25 Modern CSS | 08, 09, 17, 56, 60 |

---

## Group 1 — Introduction & Setup (01–04)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `css-01-introduction-history.html` | Introduction &amp; History | CSSWG · modules &amp; levels · CSS snapshots · Baseline · browser engines · caniuse |
| 02 | `css-02-adding-css.html` | Adding CSS to a Page | link rel="stylesheet" · style element · style attribute · @import · media attribute · load order · render-blocking |
| 03 | `css-03-syntax-rules.html` | Syntax &amp; Rule Structure | rule · selector · declaration block · property: value · at-rules · shorthand vs longhand · invalid declarations ignored |
| 04 | `css-04-comments-formatting.html` | Comments &amp; Formatting | /* */ · no // comments · section banners · property order · Prettier · Stylelint · minification |

## Group 2 — Cascade & Inheritance (05–10)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 05 | `css-05-cascade.html` | The Cascade | origins · user-agent · author · !important · cascade order · source order · inline styles |
| 06 | `css-06-specificity.html` | Specificity | (a, b, c) weights · id · class · type · :is()/:not()/:has() weight · :where() zero · specificity wars |
| 07 | `css-07-inheritance-global-keywords.html` | Inheritance &amp; Global Keywords | inherited vs non-inherited · inherit · initial · unset · revert · revert-layer · all |
| 08 | `css-08-cascade-layers.html` | Cascade Layers | @layer · layer order · anonymous layers · nested layers · @import layer() · unlayered styles · !important reversal |
| 09 | `css-09-nesting-scope.html` | Nesting &amp; @scope | native nesting · &amp; · nested at-rules · @scope · scope root · scope limit · proximity |
| 10 | `css-10-ua-styles-resets.html` | User-Agent Styles &amp; Resets | UA stylesheet · normalize.css · modern reset · box-sizing reset · margin defaults · all: unset |

## Group 3 — Selectors (11–18)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 11 | `css-11-basic-selectors.html` | Basic Selectors | type · .class · #id · * · selector lists · compound selectors · case sensitivity |
| 12 | `css-12-combinators.html` | Combinators | descendant · > child · + next-sibling · ~ subsequent-sibling · combinators in nesting |
| 13 | `css-13-attribute-selectors.html` | Attribute Selectors | [attr] · [attr=v] · ~= · \|= · ^= · $= · *= · i/s flags |
| 14 | `css-14-pseudo-classes-user-action.html` | Pseudo-Classes: User Action &amp; Links | :hover · :active · :focus · :focus-visible · :focus-within · :link · :visited · :target |
| 15 | `css-15-pseudo-classes-structural.html` | Pseudo-Classes: Structural | :first-child · :last-child · :nth-child(An+B) · :nth-of-type · :only-child · :empty · :root · of S |
| 16 | `css-16-pseudo-classes-form-state.html` | Pseudo-Classes: Form &amp; State | :checked · :disabled · :required · :valid · :user-invalid · :placeholder-shown · :open · :popover-open |
| 17 | `css-17-logical-pseudo-classes.html` | Logical Pseudo-Classes | :is() · :where() · :not() · :has() · forgiving selector lists · parent-selector patterns |
| 18 | `css-18-pseudo-elements.html` | Pseudo-Elements | ::before · ::after · content · ::first-line · ::first-letter · ::marker · ::selection · ::backdrop |

## Group 4 — Values, Units & Functions (19–24)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 19 | `css-19-values-data-types.html` | Values &amp; Data Types | &lt;length> · &lt;percentage> · &lt;number> · &lt;string> · url() · keywords · specified/computed/used values |
| 20 | `css-20-length-units.html` | Length Units | px · em · rem · % · ch · lh · rlh · print units |
| 21 | `css-21-viewport-container-units.html` | Viewport &amp; Container Units | vw · vh · vmin · vmax · svh · lvh · dvh · cqi |
| 22 | `css-22-math-functions.html` | Math Functions | calc() · min() · max() · clamp() · fluid type · round() · mod() · abs() |
| 23 | `css-23-custom-properties.html` | Custom Properties | --name · var() · fallback · :root · inheritance &amp; scope · invalid at computed-value time |
| 24 | `css-24-custom-properties-advanced.html` | Custom Properties: Advanced | @property · syntax · inherits · initial-value · animating variables · theming · setProperty() |

## Group 5 — Color (25–27)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 25 | `css-25-color-syntax.html` | Color Syntax | named colors · hex · rgb() · hsl() · alpha · opacity · currentColor · transparent |
| 26 | `css-26-modern-color-spaces.html` | Modern Color Spaces | oklch() · oklab() · lch() · lab() · color() · display-p3 · gamut · @media (color-gamut) |
| 27 | `css-27-color-functions-schemes.html` | Color Functions &amp; Schemes | color-mix() · relative color (from) · light-dark() · color-scheme · accent-color · system colors |

## Group 6 — Box Model & Sizing (28–33)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 28 | `css-28-box-model.html` | The Box Model | content · padding · border · margin · box-sizing · content-box vs border-box · DevTools box view |
| 29 | `css-29-margin-padding.html` | Margin &amp; Padding | 1–4 value shorthand · auto margins · negative margins · margin collapsing · percentage padding |
| 30 | `css-30-sizing.html` | Sizing | width · height · min-/max- · min-content · max-content · fit-content · aspect-ratio |
| 31 | `css-31-logical-properties.html` | Logical Properties | inline vs block axis · margin-inline · padding-block · inset-inline · inline-size · writing-mode · direction |
| 32 | `css-32-borders-outlines.html` | Borders &amp; Outlines | border shorthand · border-style · border-radius · outline · outline-offset · border-image |
| 33 | `css-33-shadows.html` | Shadows | box-shadow · inset · spread · layered shadows · text-shadow · drop-shadow() · elevation scales |

## Group 7 — Typography (34–39)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 34 | `css-34-font-properties.html` | Font Properties | font-family · font stacks · system-ui · font-size · font-weight · font-style · font shorthand |
| 35 | `css-35-web-fonts.html` | Web Fonts | @font-face · src · woff2 · font-display · unicode-range · preload · size-adjust |
| 36 | `css-36-variable-fonts-features.html` | Variable Fonts &amp; Features | font-variation-settings · wght/wdth axes · font-optical-sizing · font-feature-settings · tabular-nums · ligatures |
| 37 | `css-37-text-styling.html` | Text Styling | text-align · text-decoration · text-underline-offset · text-transform · text-indent · text-overflow · line-clamp |
| 38 | `css-38-spacing-wrapping.html` | Spacing &amp; Wrapping | line-height · letter-spacing · word-spacing · white-space · overflow-wrap · word-break · hyphens · text-wrap |
| 39 | `css-39-lists-counters.html` | Lists &amp; Counters | list-style-type · list-style-position · ::marker · @counter-style · counter-reset · counter-increment · counters() |

## Group 8 — Backgrounds & Visual Effects (40–44)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 40 | `css-40-backgrounds.html` | Backgrounds | background-image · background-size · cover/contain · background-position · background-repeat · background-clip · multiple backgrounds |
| 41 | `css-41-linear-radial-gradients.html` | Linear &amp; Radial Gradients | linear-gradient() · angles · color stops · hard stops · radial-gradient() · shape &amp; position · fades |
| 42 | `css-42-conic-repeating-gradients.html` | Conic &amp; Repeating Gradients | conic-gradient() · from · at · pie charts · repeating-linear-gradient() · stripes · in oklch interpolation |
| 43 | `css-43-filters-blend-modes.html` | Filters &amp; Blend Modes | filter · blur() · brightness() · grayscale() · backdrop-filter · mix-blend-mode · background-blend-mode · isolation |
| 44 | `css-44-clipping-masking-images.html` | Clipping, Masking &amp; Images | clip-path · circle()/polygon()/inset() · mask-image · mask-size · object-fit · object-position · image-rendering |

## Group 9 — Layout Fundamentals (45–49)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 45 | `css-45-display.html` | Display &amp; Formatting Contexts | display · block · inline · inline-block · none · contents · flow-root · two-value syntax |
| 46 | `css-46-normal-flow-floats.html` | Normal Flow &amp; Floats | block vs inline flow · float · clear · clearfix · block formatting context · shape-outside |
| 47 | `css-47-positioning.html` | Positioning | static · relative · absolute · fixed · sticky · inset · containing block · sticky gotchas |
| 48 | `css-48-z-index-stacking.html` | Z-Index &amp; Stacking Contexts | z-index · stacking context triggers · isolation: isolate · opacity &amp; transform contexts · top layer |
| 49 | `css-49-overflow-visibility.html` | Overflow &amp; Visibility | overflow · overflow-x/y · hidden vs clip · scrollbar-gutter · visibility · display:none vs opacity: 0 · content-visibility |

## Group 10 — Flexbox (50–52)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 50 | `css-50-flexbox-container.html` | Flexbox: Container | display: flex · flex-direction · flex-wrap · flex-flow · justify-content · align-items · align-content · gap |
| 51 | `css-51-flexbox-items.html` | Flexbox: Items | flex-grow · flex-shrink · flex-basis · flex shorthand · align-self · order · min-width: 0 |
| 52 | `css-52-flexbox-patterns.html` | Flexbox Patterns | centering · nav bar · media object · sticky footer · equal-height cards · margin-left: auto · wrapping toolbars |

## Group 11 — Grid (53–57)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 53 | `css-53-grid-tracks-templates.html` | Grid: Tracks &amp; Templates | display: grid · grid-template-columns · grid-template-rows · fr · repeat() · minmax() · auto-fill vs auto-fit · gap |
| 54 | `css-54-grid-line-placement.html` | Grid: Line-Based Placement | grid-column · grid-row · span · negative line numbers · named lines · grid-area shorthand |
| 55 | `css-55-grid-areas-auto-placement.html` | Grid: Areas &amp; Auto-Placement | grid-template-areas · grid-auto-flow · dense · grid-auto-rows · grid-auto-columns · implicit grid |
| 56 | `css-56-grid-alignment-subgrid.html` | Grid: Alignment &amp; Subgrid | justify-items · align-items · place-items · justify-self · place-content · subgrid |
| 57 | `css-57-grid-patterns.html` | Grid Patterns | auto-fit card grid · holy grail · full-bleed layout · overlapping items · grid vs flexbox |

## Group 12 — Responsive Design & Print (58–62)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 58 | `css-58-media-queries.html` | Media Queries | @media · media types · range syntax · min-width · orientation · and/or/not · breakpoints · mobile-first |
| 59 | `css-59-preference-feature-queries.html` | Preference &amp; Feature Queries | prefers-color-scheme · prefers-reduced-motion · prefers-contrast · forced-colors · hover · pointer · @supports |
| 60 | `css-60-container-queries.html` | Container Queries | container-type · container-name · container shorthand · @container · size queries · style() queries |
| 61 | `css-61-print-styles.html` | Print Styles | @media print · @page · size · page margins · break-before · break-inside · orphans/widows · print-color-adjust |
| 62 | `css-62-responsive-patterns.html` | Responsive Patterns | intrinsic layouts · fluid type · responsive media · max-width: 100% · viewport meta · layout shifts |

## Group 13 — Transforms, Transitions & Animation (63–68)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 63 | `css-63-2d-transforms.html` | 2D Transforms | transform · translate() · rotate() · scale() · skew() · transform-origin · individual transform properties · order of functions |
| 64 | `css-64-3d-transforms.html` | 3D Transforms | perspective · perspective-origin · rotateX/Y · translateZ · transform-style: preserve-3d · backface-visibility · card flip |
| 65 | `css-65-transitions.html` | Transitions | transition-property · duration · timing functions · delay · cubic-bezier() · steps() · transition-behavior · @starting-style |
| 66 | `css-66-keyframe-animations.html` | Keyframe Animations | @keyframes · animation-name · iteration-count · direction · fill-mode · play-state · animation shorthand · multiple animations |
| 67 | `css-67-scroll-driven-animations.html` | Scroll-Driven Animations | animation-timeline · scroll() · view() · animation-range · scroll-timeline · view-timeline · reduced-motion fallback |
| 68 | `css-68-view-transitions.html` | View Transitions | @view-transition · view-transition-name · ::view-transition-old · ::view-transition-new · ::view-transition-group · startViewTransition() |

## Group 14 — UI & Interaction (69–72)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 69 | `css-69-cursors-pointer-interaction.html` | Cursors &amp; Pointer Interaction | cursor · pointer-events · user-select · touch-action · caret-color · resize · appearance |
| 70 | `css-70-styling-form-controls.html` | Styling Form Controls | appearance: none · accent-color · ::placeholder · ::file-selector-button · field-sizing · custom checkboxes · :user-invalid styling |
| 71 | `css-71-scrolling-scroll-snap.html` | Scrolling &amp; Scroll Snap | scroll-behavior · scroll-margin · scroll-padding · scroll-snap-type · scroll-snap-align · overscroll-behavior · scrollbar-color |
| 72 | `css-72-anchor-positioning-top-layer.html` | Anchor Positioning &amp; Top Layer | anchor-name · position-anchor · anchor() · position-area · position-try · dialog &amp; popover styling · ::backdrop |

## Group 15 — Organization, Best Practices & Quick Reference (73–77)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 73 | `css-73-organizing-stylesheets.html` | Organizing Stylesheets | file structure · base/layout/components/utilities · @layer order · @import vs bundling · DRY tokens |
| 74 | `css-74-naming-conventions.html` | Naming Conventions | BEM · block__element--modifier · utility classes · state classes (.is-) · js- hooks · data-attribute state |
| 75 | `css-75-accessible-css.html` | Accessible CSS | focus indicators · .visually-hidden · contrast ratios · prefers-reduced-motion · forced-colors · visual vs DOM order |
| 76 | `css-76-debugging-performance.html` | Debugging &amp; Performance | DevTools Styles/Computed · layout shift · will-change · contain · content-visibility · expensive properties · Stylelint |
| 77 | `css-77-quick-reference.html` | Quick Reference | selectors · at-rules · units · layout properties · functions · global keywords |
