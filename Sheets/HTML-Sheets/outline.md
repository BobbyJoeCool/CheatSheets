# HTML Reference Guide Outline (56 sheets)

## Metadata

- **Group it belongs to:** Web Design
- **Folder Directory:** `Sheets/HTML-Sheets/html-##-[slug].html`
- **Groups:** 15
- **Sheets:** 56
- **Drafted Date:** 2026-10-08 (re-drafted after the sheets were live; date the outline was committed)
- **Verified-Finalized Date:**

## Basic Information

HTML for intermediate and reference use. Basics are short; forms, accessibility, media and metadata get the most sheets. As a markup language, the set skips OOP, operators, control flow and functions and uses HTML-specific groups instead. It replaced an earlier 15-sheet set.

DOM methods, events, forms-in-JS and storage live in the JavaScript set; the scripting group here covers only the HTML side.

## Differences in Layout from Basic Structure

- Three-row layout instead of four, because HTML samples run long:
  1. Row 1: column 1 stacks Description → Notes → Accessibility → Pairing with CSS → Code Explained; column 2 holds the code block.
  2. Row 2: tables (2–3 side by side).
  3. Row 3: Mistakes | Tips | Summary.
- Every sheet adds an Accessibility section (`section-a11y`, `id="a11y"`) for the elements on that sheet.
- Every sheet adds a Pairing with CSS section (`section-css`, `id="css"`): selectors, pseudo-classes and UA defaults for those elements.

## Groups

### Group 1: Introduction & Document Basics (Sheets 01–05)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `html-01-introduction-history.html` | Introduction & History | HTML Living Standard · WHATWG · W3C · .html · browser rendering · Live Server |
| 02 | `html-02-document-structure.html` | Document Structure | &lt;!doctype html> · html · head · body · lang · charset · boilerplate |
| 03 | `html-03-elements-attributes-syntax.html` | Elements, Attributes & Syntax | start/end tags · void elements · boolean attributes · attribute quoting · case-insensitivity · parser error recovery |
| 04 | `html-04-global-attributes.html` | Global Attributes | title · hidden · tabindex · contenteditable · draggable · spellcheck · inert · autocapitalize |
| 05 | `html-05-classes-ids-data-attributes.html` | Classes, IDs & data-* | class · id · uniqueness · data-* · dataset · naming conventions · fragment targets |

### Group 2: Comments & Characters (Sheets 06–07)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 06 | `html-06-comments-whitespace.html` | Comments & Whitespace | &lt;!-- --> · comment rules · -- pitfall · whitespace collapsing · inter-element whitespace · &nbsp; vs CSS spacing |
| 07 | `html-07-character-references.html` | Character References | &lt; · &amp; · &quot; · named references · &#decimal; · &#xhex; · UTF-8 · escaping rules |

### Group 3: Head & Metadata (Sheets 08–12)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 08 | `html-08-title-meta.html` | Title & Meta Tags | title · meta charset · viewport · description · robots · theme-color · color-scheme · http-equiv |
| 09 | `html-09-link-resource-hints.html` | Link & Resource Hints | link rel · stylesheet · preload · preconnect · dns-prefetch · prefetch · modulepreload · media |
| 10 | `html-10-scripts-styles-loading.html` | Script & Style Loading | script · defer · async · type="module" · nomodule · style · noscript · render-blocking |
| 11 | `html-11-seo-social-metadata.html` | SEO & Social Metadata | canonical · hreflang · og:title · og:image · twitter:card · JSON-LD · schema.org |
| 12 | `html-12-favicons-app-manifest.html` | Favicons & App Manifest | rel="icon" · sizes · SVG favicon · apple-touch-icon · manifest.webmanifest · base |

### Group 4: Page Structure & Semantics (Sheets 13–16)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 13 | `html-13-landmark-elements.html` | Landmark Elements | header · nav · main · footer · aside · search · implicit landmark roles |
| 14 | `html-14-sectioning-headings.html` | Sectioning & Headings | section · article · h1–h6 · heading levels · hgroup · address · document outline |
| 15 | `html-15-generic-containers.html` | Generic Containers | div · span · block vs inline · when to use div · div soup · wrapper patterns |
| 16 | `html-16-content-categories-nesting.html` | Content Categories & Nesting | flow · phrasing · interactive · transparent · implied &lt;/p> · invalid nesting |

### Group 5: Text Content (Sheets 17–21)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 17 | `html-17-paragraphs-breaks.html` | Paragraphs & Breaks | p · br · hr · wbr · pre · line-break misuse |
| 18 | `html-18-inline-semantics.html` | Inline Text Semantics | strong · em · b · i · u · s · mark · small |
| 19 | `html-19-code-technical-text.html` | Code & Technical Text | code · pre code · kbd · samp · var · sub · sup |
| 20 | `html-20-quotes-citations-edits.html` | Quotes, Citations & Edits | blockquote · q · cite · abbr · dfn · time · ins · del |
| 21 | `html-21-international-text.html` | International Text | lang · dir · bdi · bdo · ruby · rt · rp · translate |

### Group 6: Lists (Sheets 22–23)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 22 | `html-22-unordered-ordered-lists.html` | Unordered & Ordered Lists | ul · ol · li · start · reversed · type · value · nested lists |
| 23 | `html-23-description-lists-menus.html` | Description Lists & Menus | dl · dt · dd · div grouping in dl · menu · nav list pattern |

### Group 7: Links (Sheets 24–25)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 24 | `html-24-link-basics.html` | Link Basics | a · href · absolute vs relative · fragment #id · target · download |
| 25 | `html-25-link-schemes-rel.html` | Link Schemes & rel | mailto: · tel: · sms: · rel="noopener" · noreferrer · nofollow · hreflang · ping |

### Group 8: Images & Graphics (Sheets 26–29)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 26 | `html-26-images.html` | Images | img · src · alt · width/height · loading="lazy" · decoding · figure · figcaption |
| 27 | `html-27-responsive-images.html` | Responsive Images | srcset · sizes · w descriptor · x descriptor · picture · source · media · type |
| 28 | `html-28-svg-in-html.html` | SVG in HTML | inline svg · viewBox · path · use · symbol · title · role="img" |
| 29 | `html-29-canvas-image-maps.html` | Canvas & Image Maps | canvas · getContext · fallback content · map · area · shape · coords · usemap |

### Group 9: Audio, Video & Embeds (Sheets 30–32)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 30 | `html-30-video.html` | Video | video · source · controls · autoplay · muted · loop · poster · playsinline |
| 31 | `html-31-audio-captions.html` | Audio & Captions | audio · preload · track · kind · srclang · default · WebVTT |
| 32 | `html-32-iframes-embeds.html` | Iframes & Embeds | iframe · sandbox · allow · srcdoc · loading · referrerpolicy · embed · object |

### Group 10: Tables (Sheets 33–35)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 33 | `html-33-table-basics.html` | Table Basics | table · tr · td · th · caption · thead · tbody · tfoot |
| 34 | `html-34-table-spanning-grouping.html` | Spanning & Column Groups | colspan · rowspan · colgroup · col · span · irregular grids |
| 35 | `html-35-accessible-tables.html` | Accessible Tables | scope · headers · id · caption · data vs layout tables · scroll wrapper |

### Group 11: Forms (Sheets 36–43)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 36 | `html-36-form-element.html` | The Form Element | form · action · method · enctype · name · novalidate · autocomplete · target |
| 37 | `html-37-text-inputs.html` | Text Inputs | text · email · password · search · tel · url · number · placeholder |
| 38 | `html-38-choice-inputs.html` | Choice Inputs | checkbox · radio · name groups · checked · select · option · optgroup · multiple |
| 39 | `html-39-date-color-range-file.html` | Date, Color, Range & File | date · time · datetime-local · color · range · file · accept · capture |
| 40 | `html-40-textarea-datalist-output.html` | Textarea, Datalist & Output | textarea · rows · wrap · datalist · output · progress · meter |
| 41 | `html-41-buttons-submission.html` | Buttons & Submission | button · type · formaction · formmethod · formnovalidate · input type="hidden" · form attribute |
| 42 | `html-42-labels-grouping.html` | Labels & Grouping | label · for · fieldset · legend · autocomplete tokens · inputmode · enterkeyhint |
| 43 | `html-43-constraint-validation.html` | Constraint Validation | required · pattern · min · max · step · minlength · :invalid · setCustomValidity() |

### Group 12: Interactive Elements (Sheets 44–46)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 44 | `html-44-details-summary.html` | Details & Summary | details · summary · open · name (exclusive accordion) · toggle event · ::marker |
| 45 | `html-45-dialog.html` | Dialog | dialog · showModal() · show() · close() · ::backdrop · method="dialog" · returnValue · closedby |
| 46 | `html-46-popover.html` | Popover API | popover · auto vs manual · popovertarget · popovertargetaction · showPopover() · :popover-open |

### Group 13: Accessibility (Sheets 47–50)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 47 | `html-47-accessibility-fundamentals.html` | Accessibility Fundamentals | semantic HTML · alt text · heading order · lang · WCAG · accessible name |
| 48 | `html-48-aria-roles.html` | ARIA Roles | role · first rule of ARIA · implicit roles · landmark roles · widget roles · presentation |
| 49 | `html-49-aria-states-properties.html` | ARIA States & Properties | aria-label · aria-labelledby · aria-describedby · aria-expanded · aria-hidden · aria-live · aria-current |
| 50 | `html-50-keyboard-focus.html` | Keyboard & Focus | tabindex · focus order · autofocus · inert · skip link · :focus-visible · accesskey |

### Group 14: Scripting & Components (Sheets 51–53)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 51 | `html-51-markup-to-dom.html` | Markup to DOM | DOM tree · attributes vs properties · getElementById · document.forms · form.elements · DOMContentLoaded |
| 52 | `html-52-template-slot.html` | Template & Slot | template · content · cloneNode · slot · named slots · slotchange |
| 53 | `html-53-custom-elements-shadow-dom.html` | Custom Elements & Shadow DOM | customElements.define · connectedCallback · observedAttributes · attachShadow · shadowrootmode · :host · ::part |

### Group 15: Best Practices & Quick Reference (Sheets 54–56)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 54 | `html-54-validation-best-practices.html` | Validation & Best Practices | W3C validator · html-validate · Lighthouse · deprecated elements · Emmet · Prettier |
| 55 | `html-55-quick-reference-elements.html` | Quick Reference — Elements | document · metadata · sectioning · text · media · forms · interactive |
| 56 | `html-56-quick-reference-attributes.html` | Quick Reference — Attributes | global · link · media · form · validation · ARIA |
