# Apple iWork & Mail Reference Guide Outline (28 sheets)

## Metadata

- **Group it belongs to:** Office Tools (new index section, added at the very bottom of the root index.html, after DevOps & Containers)
- **Folder Directory:** `Sheets/AppleiWork-Sheets/iw-##-[slug].html`
- **PDF Name:** `Apple iWork & Mail Reference Guide.pdf`
- **Groups:** 7
- **Sheets:** 28
- **Drafted Date:** 2026-11-13
- **Verified-Finalized Date:**

## Basic Information

A working reference for Apple's own productivity apps: Pages, Numbers and Keynote first, then Apple Mail, with one sheet on Calendar, Notes and Reminders. Aimed at Mac users who want to work faster: shortcuts, templates and styles, Numbers formulas, AppleScript and Shortcuts automation, and the Apple Intelligence writing tools. Numbers gets the most space because formulas are the biggest efficiency win, and because its table-on-a-canvas model trips up people coming from Excel.

Covers the Mac apps first, with notes for the iPad / iPhone apps and iWork for iCloud (the web versions at icloud.com). The apps themselves are free; Apple Creator Studio (announced January 2026) adds premium templates, content and some intelligent features by subscription, and sheets note where a feature needs it. Targets macOS 26 and the current iWork releases (late 2026). Shortcuts are Mac only (`⌘B`), with iPad keyboard shortcuts noted where they differ. Shortcut keys, function names and Creator Studio features should be re-checked against Apple Support and the Numbers Functions Browser when each sheet is built.

Ends with a 3-page quick reference: Pages & Keynote shortcuts, Numbers & Mail shortcuts, and Numbers formulas. Parallel sets: Microsoft 365 and Google Workspace (same section, same box layout).

## Differences in Layout from Basic Structure

- **Extra boxes:** **Other Suites** (`section-notes section-suites`, `id="suites"`) in Row 2 under Code Explained on 01–25 · **Platform Differences** (`section-notes section-platform`, `id="platform"`) in Row 2 under Code Explained on 01–25 · **Automate It** (`section-notes section-automate`, `id="automate"`) in Row 1 as a third column on selected sheets (table below). None on the quick references (26–28).
- Most sheets are about an app, not code. The Code block holds a shortcut table, a Numbers formula block (plain text, one formula per line with a trailing comment), or an AppleScript / JXA snippet (Prism `applescript` / `javascript`). Sheets with nothing for a code block use the GitHub set's **Steps | Where to Find It** layout in place of Code | Code Explained.
- Shortcuts are written inline with Mac symbols (`⌥⌘P`) everywhere, never in a box.
- Groups follow the apps (shared basics → Pages → Numbers → Keynote → Mail & companions → automation & AI → quick reference) instead of the standard language group order.
- `iw-cheatsheet.css` adds `.section-suites`, `.section-platform` and `.section-automate` styles, using the same class names as the other two Office Tools sets.

### Other Suites box (`id="suites"`, 01–25)

- Title **Other Suites**. Exactly two lines, always in this order: **Microsoft 365** · **Google Workspace**. Each names the equivalent menu, shortcut or function, or says plainly that there isn't one (`Excel — Table1[Col] structured refs; Numbers uses header names`).

### Platform Differences box (`id="platform"`, 01–25)

- Title **Platform Differences**. Up to three lines, in this order: **Mac** · **iPad / iPhone** · **iCloud (web)**. Only list what differs; write `Same everywhere.` when nothing does.

### Automate It box (`id="automate"`, Row 1, selected sheets)

- Title **Automate It**, Row 1 as a third column (`col-1-3`). One or two ways to stop doing the sheet's task by hand: a saved template, a Text Replacement, a Shortcuts action, an AppleScript, or a Mail rule.

| # | Automate It content |
|---|---|
| 04 | Save as Template and add it to the template chooser · Text Replacements for repeated phrases |
| 06 | Paragraph styles + TOC instead of manual formatting and page lists |
| 07 | Pages mail merge from a Numbers table or Contacts |
| 10 | Pop-up menus and checkboxes instead of typed status values |
| 12 | Categories / pivot table instead of manual subtotal rows |
| 13 | AppleScript that fills a column across every table on a sheet |
| 15 | Column-wide highlight rules · interactive chart instead of 12 charts |
| 17 | Custom theme with master slides instead of copying old decks |
| 18 | Magic Move between duplicated slides instead of building animations by hand |
| 20 | Smart Mailboxes and VIPs instead of manual searching |
| 21 | Mail rules that file, flag or run a Shortcut |
| 24 | Finder Quick Action "Make PDF" · Text Replacements |

## Groups

### Group 1: Getting Started & Shared Basics (Sheets 01–04)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `iw-01-introduction.html` | Introduction to iWork | Pages / Numbers / Keynote · Mac, iPad, iPhone & iCloud web · Apple Creator Studio vs the free apps · `.pages` `.numbers` `.key` · opening Office files · when iWork is (and isn't) the right tool |
| 02 | `iw-02-interface-shortcuts.html` | Interface & Shortcuts That Work Everywhere | toolbar customization · Format / Document / Organize sidebars · Help menu search (`⇧⌘/`) · Paste and Match Style `⌥⇧⌘V` · Copy / Paste Style `⌥⌘C` / `⌥⌘V` · System Settings › Keyboard Shortcuts for menu items |
| 03 | `iw-03-icloud-sharing-versions.html` | iCloud, Collaboration & Versions | iCloud Drive · Share › Collaborate · permissions & activity list · Revert To › Browse All Versions · password protection · export to Word / Excel / PowerPoint / PDF |
| 04 | `iw-04-templates-styles.html` | Templates & Styles | template chooser · File › Save as Template · My Templates · paragraph, character & list styles · object styles (shapes, tables, charts) · Creator Studio premium templates |

### Group 2: Pages (Sheets 05–08)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 05 | `iw-05-pages-documents-layout.html` | Word Processing vs Page Layout | document types & converting · sections & section breaks · text boxes & linked text boxes · inline vs floating objects · text wrap · facing pages |
| 06 | `iw-06-pages-long-documents.html` | Styles & Long Documents | paragraph styles & update style · table of contents · headers / footers · page numbers by section · footnotes & endnotes · bookmarks & cross-links |
| 07 | `iw-07-pages-tables-merge.html` | Tables, Charts & Mail Merge | tables in Pages · charts · media placeholders · mail merge from Numbers / Contacts · merge fields · ePub & PDF export |
| 08 | `iw-08-pages-review-editing.html` | Review & Editing | Track Changes · comments & highlights · Find & Replace (with options) · word count · Text Replacements · dictation · Writing Tools (Apple Intelligence) |

### Group 3: Numbers (Sheets 09–16)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 09 | `iw-09-numbers-canvas-model.html` | The Numbers Canvas Model | sheets vs tables · many tables per sheet · header rows / columns · footer rows · table names · why this differs from an Excel grid |
| 10 | `iw-10-numbers-entry-formats.html` | Navigation, Entry & Cell Formats | add row / column `⌥↓` / `⌥→` · fill handle & autofill · data formats (number, currency, duration, date) · checkboxes · star ratings · sliders & steppers · pop-up menus |
| 11 | `iw-11-numbers-formula-basics.html` | Formula Basics | `=` formula editor · references by header name · `Table 1::B2` cross-table refs · `Sheet 1::Table 1::B2` · preserve row / column (`$`) · Functions Browser · error triangles |
| 12 | `iw-12-numbers-sort-filter-pivot.html` | Sort, Filter, Categories & Pivot Tables | sort rules · filters · categories & summary rows · pivot tables · refresh pivot data · smart categories by date |
| 13 | `iw-13-numbers-logic-math-lookup.html` | Logic, Math & Lookup Functions | `IF` · `IFS` · `SWITCH` · `IFERROR` · `SUMIFS` · `COUNTIFS` · `AVERAGEIFS` · `XLOOKUP` · `XMATCH` · `INDEX` / `MATCH` · `VLOOKUP` |
| 14 | `iw-14-numbers-text-date-regex.html` | Text, Date & Regex Functions | `TEXTJOIN` · `TEXTBEFORE` / `TEXTAFTER` · `REGEX` inside `COUNTIF` / `MATCH` · `REGEX.EXTRACT` · `COUNTMATCHES` · `DATEDIF` · `EOMONTH` · `NETWORKDAYS` · duration functions |
| 15 | `iw-15-numbers-charts-highlighting.html` | Charts & Conditional Highlighting | chart types · interactive charts · edit chart references · conditional highlighting rules · highlight with a formula-free rule · copy rules between cells |
| 16 | `iw-16-numbers-vs-excel.html` | Numbers ↔ Excel | what survives export / import · functions that exist in only one app · no VBA / Power Query · macros don't carry over · when to hand a file off to Excel or Sheets |

Sheets 13–14 are the formula core and should stay formula-first: every row in the Code block is a working formula with a one-line comment. Checked against Apple's Functions list at build time (2026-11-13): current Numbers includes XLOOKUP, FILTER, SORT, UNIQUE, TAKE, VSTACK, LET, LAMBDA, TEXTSPLIT and REGEX.EXTRACT, so sheet 16 focuses on feature gaps rather than missing formulas.

### Group 4: Keynote (Sheets 17–19)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 17 | `iw-17-keynote-masters-themes.html` | Themes & Master Slides | Edit Master Slides · layouts & placeholders · custom themes · Save Theme · change theme on an existing deck · Creator Studio themes |
| 18 | `iw-18-keynote-building-slides.html` | Building Slides & Animations | Magic Move · build in / build out · Action builds · Animate sidebar & build order · alignment guides · Instant Alpha · shapes & object styles |
| 19 | `iw-19-keynote-presenting.html` | Presenting & Exporting | Play `⌥⌘P` · presenter display & notes · `X` swap displays · `B` / `W` blank screen · slide number + `↩` to jump · Rehearse Slideshow · iPhone as remote · export to video / PDF / PowerPoint |

### Group 5: Mail & Companion Apps (Sheets 20–22)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 20 | `iw-20-apple-mail.html` | Apple Mail Efficiency | new / reply / reply all / forward (`⌘N` `⌘R` `⇧⌘R` `⇧⌘F`) · send `⇧⌘D` · search tokens (`from:` `subject:` `date:`) · Smart Mailboxes · VIPs · Send Later · Remind Me · Follow Up · categories |
| 21 | `iw-21-mail-rules-accounts.html` | Rules, Signatures & Accounts | Mail rules & conditions · run rules on selected mail · signatures per account · Gmail / Exchange / iCloud accounts · Mail Privacy Protection · Hide My Email · block & mute threads |
| 22 | `iw-22-calendar-notes-reminders.html` | Calendar, Notes & Reminders | Calendar quick event · shared calendars · Notes tags & smart folders · Quick Note · Reminders lists, sections & smart lists · creating reminders from Mail |

Mail categories came to the Mac in macOS Sequoia 15.4 (checked at build time).

### Group 6: Automation & AI (Sheets 23–25)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 23 | `iw-23-applescript-jxa.html` | AppleScript & JXA for iWork | Script Editor · `tell application "Numbers"` · tables, rows & cell values · export a batch of files · JXA (JavaScript for Automation) version · Script menu in the menu bar |
| 24 | `iw-24-shortcuts-automator.html` | Shortcuts, Quick Actions & Text Replacements | Shortcuts app iWork actions · Quick Actions in Finder · Mail rule › run a Shortcut · Text Replacements · Automator (legacy) · Folder Actions |
| 25 | `iw-25-apple-intelligence.html` | Apple Intelligence & Creator Studio Features | Writing Tools (rewrite, proofread, summarize) · Mail summaries & smart replies · Image Playground / Image Wand · ChatGPT extension · Creator Studio intelligent features · what to verify after AI edits |

Sheet 25 points to the Agentic Coding set for prompting in general. Apple Intelligence and Creator Studio features vary by device, region and subscription, so the sheet notes requirements per feature.

### Group 7: Quick Reference (Sheets 26–28)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 26 | `iw-26-quick-ref-pages-keynote.html` | Quick Ref — Pages & Keynote | shared editing · text & styles · objects & arrange · Pages · Keynote editing · Keynote while presenting |
| 27 | `iw-27-quick-ref-numbers-mail.html` | Quick Ref — Numbers & Mail | Numbers navigation · rows & columns · entry & formulas · tables · Mail reading · composing · organizing |
| 28 | `iw-28-quick-ref-numbers-formulas.html` | Quick Ref — Numbers Formulas | reference syntax · logic · math & aggregation · lookup · text & regex · date & duration · error messages |

Dense tables, no explanations; every row points back to the sheet with details.
