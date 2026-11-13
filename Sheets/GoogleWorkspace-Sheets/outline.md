# Google Workspace Reference Guide Outline (32 sheets)

## Metadata

- **Group it belongs to:** Office Tools (new index section, added at the very bottom of the root index.html, after DevOps & Containers)
- **Folder Directory:** `Sheets/GoogleWorkspace-Sheets/gws-##-[slug].html`
- **PDF Name:** `Google Workspace Reference Guide.pdf`
- **Groups:** 7
- **Sheets:** 32
- **Drafted Date:** 2026-11-13
- **Verified-Finalized Date:**

## Basic Information

A working reference for Google Drive and the apps around it: Docs, Sheets and Slides first, then Gmail and Calendar, with a short pass over Forms, Keep and Meet. Aimed at people who already use Google's apps and want to work faster: shortcuts, templates, smart chips, formulas, macros and Apps Script. Sheets gets the most space because formulas (`QUERY`, `ARRAYFORMULA`, `IMPORTRANGE`, `LAMBDA`) are the biggest efficiency win.

Google's editors are web apps, so "desktop" here means the browser plus Drive for desktop, offline mode and the mobile apps. Covers both free Google accounts and paid Workspace plans, with a note on sheets where a feature is Workspace-only (for example Gemini features, eSignature, appointment booking extras). Targets the apps as of late 2026. Shortcuts are written macOS first, then Windows / ChromeOS (`⌘B` / `Ctrl+B`). Shortcut keys and feature availability should be re-checked against Google's Help Center when each sheet is built.

Ends with a 3-page quick reference: app shortcuts, Sheets shortcuts, and Sheets formulas. Parallel sets: Microsoft 365 and Apple iWork & Mail (same section, same box layout).

## Differences in Layout from Basic Structure

- **Extra boxes:** **Other Suites** (`section-notes section-suites`, `id="suites"`) in Row 2 under Code Explained on 01–29 · **Platform Differences** (`section-notes section-platform`, `id="platform"`) in Row 2 under Code Explained on 01–29 · **Automate It** (`section-notes section-automate`, `id="automate"`) in Row 1 as a third column on selected sheets (table below). None on the quick references (30–32).
- Most sheets are about an app, not code. The Code block holds a shortcut table, a formula block (plain text, one formula per line with a trailing comment), or an Apps Script snippet (Prism `javascript`). Sheets with nothing for a code block use the GitHub set's **Steps | Where to Find It** layout in place of Code | Code Explained.
- Shortcuts are written inline as `⌘B` / `Ctrl+B` (macOS first) everywhere, never in a box.
- Groups follow the apps (Drive & shared basics → Docs → Sheets → Slides → Gmail & Calendar → automation & AI → quick reference) instead of the standard language group order.
- `gws-cheatsheet.css` adds `.section-suites`, `.section-platform` and `.section-automate` styles, using the same class names as the other two Office Tools sets.

### Other Suites box (`id="suites"`, 01–29)

- Title **Other Suites**. Exactly two lines, always in this order: **Microsoft 365** · **Apple iWork**. Each names the equivalent menu, shortcut or function, or says plainly that there isn't one (`Excel — no QUERY; use FILTER + GROUPBY or Power Query`).

### Platform Differences box (`id="platform"`, 01–29)

- Title **Platform Differences**. Up to three lines, in this order: **Browser** · **Offline / Drive for desktop** · **Mobile**. Only list what differs; write `Same everywhere.` when nothing does.

### Automate It box (`id="automate"`, Row 1, selected sheets)

- Title **Automate It**, Row 1 as a third column (`col-1-3`). One or two ways to stop doing the sheet's task by hand: a template, a recorded macro, an Apps Script, a Gmail filter, or a Gemini prompt.

| # | Automate It content |
|---|---|
| 04 | Shared template link with `/copy` or `/template/preview` so people always start from the master |
| 07 | Building blocks and dropdown chips instead of retyping project fields |
| 09 | Docs mail merge (Workspace) or an Apps Script merge from a Sheet |
| 11 | Data cleanup suggestions and Smart Fill instead of manual fixes |
| 13 | Tables + filter views so shared sheets don't fight over filters |
| 17 | One `QUERY` instead of a chain of helper columns |
| 19 | `IMPORTRANGE` to keep a summary sheet in sync with source files |
| 21 | Scheduled pivot + chart refresh with a time-driven trigger |
| 22 | Master slides + "Import slides" instead of rebuilding decks |
| 24 | Filters that label, archive and forward automatically · templates for canned replies |
| 25 | Appointment schedules instead of email back-and-forth |
| 26 | Form responses to Sheets, then an `onFormSubmit` trigger |
| 28 | Time-driven reminder email · `onFormSubmit` routing |

## Groups

### Group 1: Drive & Shared Basics (Sheets 01–05)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `gws-01-introduction.html` | Introduction to Google Workspace | free account vs Workspace plans · the apps and what replaces what · `docs.new` / `sheets.new` / `slides.new` · offline mode · Drive for desktop · mobile apps · Office file editing |
| 02 | `gws-02-drive-organization-search.html` | Drive Organization & Search | My Drive vs Shared drives · Drive shortcuts vs copies · search operators (`type:` `owner:` `before:` `is:starred`) · Priority & Activity · color-coded folders · storage cleanup |
| 03 | `gws-03-sharing-comments-versions.html` | Sharing, Comments & Version History | Viewer / Commenter / Editor · link sharing · expiring access · comments & action items (`+name`) · version history & named versions · Approvals · Make a copy / download as Office |
| 04 | `gws-04-templates-smart-chips.html` | Templates & Smart Chips | Template gallery · custom templates (Workspace) · `/copy` and `/template/preview` links · `@` smart chips (people, files, dates, places) · dropdown chips · building blocks |
| 05 | `gws-05-universal-shortcuts.html` | Shortcuts That Work Everywhere | shortcut list `⌘/` / `Ctrl+/` · search the menus `⌥/` / `Alt+/` · paste without formatting `⌘⇧V` / `Ctrl+Shift+V` · paint format · voice typing `⌘⇧S` / `Ctrl+Shift+S` · Explore / Gemini side panel |

### Group 2: Docs (Sheets 06–09)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 06 | `gws-06-docs-styles-formatting.html` | Styles & Formatting | paragraph styles `⌘⌥1–6` / `Ctrl+Alt+1–6` · Update heading to match · save as my default styles · clear formatting `⌘\` / `Ctrl+\` · paint format · page vs pageless |
| 07 | `gws-07-docs-long-documents.html` | Long Documents & Document Tabs | document outline · document tabs · table of contents · headers / footers & different first page · section breaks · footnotes · bookmarks & heading links |
| 08 | `gws-08-docs-writing-faster.html` | Writing Faster | `@` insert menu · automatic substitutions · Markdown auto-detect · find & replace with regex · personal dictionary · word count `⌘⇧C` / `Ctrl+Shift+C` · line numbers |
| 09 | `gws-09-docs-review-export.html` | Review, Mail Merge & Export | Suggesting mode · comment `⌘⌥M` / `Ctrl+Alt+M` · Compare documents · eSignature (Workspace) · mail merge (Workspace) · download as `.docx` / PDF / Markdown · publish to web |

### Group 3: Sheets (Sheets 10–21)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 10 | `gws-10-sheets-navigation-selection.html` | Sheets Navigation & Selection | `⌘↓` / `Ctrl+↓` jump to edge · `⇧` to extend · select row / column · go to range (Name Box) · freeze rows / columns · switch sheets `⌥↓` / `Ctrl+Shift+PgDn` · hide / group |
| 11 | `gws-11-sheets-entry-cleanup.html` | Data Entry, Validation & Cleanup | Smart Fill `⌘⇧Y` / `Ctrl+Shift+Y` · fill down `⌘D` / `Ctrl+D` · `⌘↩` / `Ctrl+Enter` fill selection · dropdowns & data validation · checkboxes · split text to columns · remove duplicates · trim whitespace |
| 12 | `gws-12-sheets-formula-basics.html` | Formula Basics | operators · relative vs absolute `$` (`F4`) · cross-sheet refs `'Sheet 2'!A1` · named ranges · error values · formula suggestions & autocomplete · show formulas `⌃~` / `Ctrl+~` |
| 13 | `gws-13-sheets-tables-filter-views.html` | Tables & Filter Views | Convert to table `⌘⌥T` / `Ctrl+Alt+T` · column types · table references `Table1[Column]` · group-by views · filter vs filter view · slicers · protected ranges |
| 14 | `gws-14-sheets-logic-math.html` | Logic & Math Functions | `IF` · `IFS` · `SWITCH` · `AND` / `OR` / `NOT` · `IFERROR` / `IFNA` · `SUMIFS` · `COUNTIFS` · `AVERAGEIFS` · `ROUND` · `SUMPRODUCT` |
| 15 | `gws-15-sheets-lookup.html` | Lookup Functions | `XLOOKUP` · `INDEX` / `MATCH` · `VLOOKUP` / `HLOOKUP` (legacy) · `XMATCH` · `FILTER` as a lookup · approximate & wildcard matches · two-way lookups |
| 16 | `gws-16-sheets-arrays.html` | Array Formulas | `ARRAYFORMULA` · `{ }` array literals (`,` and `;`) · `FILTER` · `SORT` / `SORTN` · `UNIQUE` · `SEQUENCE` · `CHOOSECOLS` · `VSTACK` / `HSTACK` · `TOCOL` · `FLATTEN` |
| 17 | `gws-17-sheets-query.html` | The QUERY Function | `QUERY(range, "select … where … group by …")` · `Col1` vs `A` column names · `order by` · `pivot` · `label` / `format` · headers argument · dates in queries |
| 18 | `gws-18-sheets-text-date-regex.html` | Text, Date & Regex Functions | `SPLIT` · `JOIN` / `TEXTJOIN` · `TEXT` formats · `REGEXMATCH` / `REGEXEXTRACT` / `REGEXREPLACE` · `TODAY` · `EOMONTH` · `NETWORKDAYS` · `DATEDIF` |
| 19 | `gws-19-sheets-import-live-data.html` | Import & Live Data | `IMPORTRANGE` & access prompts · `IMPORTHTML` · `IMPORTXML` · `IMPORTDATA` · `GOOGLEFINANCE` · `GOOGLETRANSLATE` · `IMAGE` · recalculation settings |
| 20 | `gws-20-sheets-let-lambda.html` | LET, LAMBDA & Named Functions | `LET` · `LAMBDA` · `MAP` / `BYROW` / `BYCOL` · `REDUCE` / `SCAN` · `MAKEARRAY` · Named functions (create, import from another file) |
| 21 | `gws-21-sheets-pivots-charts-cf.html` | Pivot Tables, Charts & Conditional Formatting | pivot tables & suggested pivots · calculated fields · charts & chart editor · `SPARKLINE` · conditional formatting with custom formulas · color scales · Connected Sheets (BigQuery) |

Sheets 14–20 are the formula core and should stay formula-first: every row in the Code block is a working formula with a one-line comment. Sheet 17 points to the SQL set for readers who want the full query language.

### Group 4: Slides (Sheets 22–23)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 22 | `gws-22-slides-master-building.html` | Themes, Master & Building Slides | Edit theme (master & layouts) · import theme · Import slides · duplicate `⌘D` / `Ctrl+D` · align & distribute · group `⌘⌥G` / `Ctrl+Alt+G` · linked Sheets charts · transitions & animations pane |
| 23 | `gws-23-slides-presenting.html` | Presenting | present `⌘↩` / `Ctrl+Enter` · Presenter view & speaker notes · audience Q&A · laser pointer `L` · captions `⌘⇧C` / `Ctrl+Shift+C` · present in Meet · publish to web & export |

### Group 5: Gmail, Calendar & Forms (Sheets 24–26)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 24 | `gws-24-gmail.html` | Gmail Efficiency | turn on keyboard shortcuts · `j` / `k` / `e` / `r` / `a` / `c` · search operators (`from:` `has:attachment` `older_than:` `label:`) · labels & filters · templates · snooze · schedule send · multiple inboxes |
| 25 | `gws-25-calendar-meet.html` | Calendar & Meet | Calendar shortcuts (`c` `t` `d` `w` `m`) · find a time · appointment schedules · working hours & location · time insights · Meet shortcuts (mute, camera, hand raise) · meeting notes |
| 26 | `gws-26-forms-keep-tasks.html` | Forms, Keep & Tasks | Forms question types · quizzes · send responses to Sheets · Keep notes, labels & reminders · Tasks from Gmail / Docs · assigning action items |

### Group 6: Automation & AI (Sheets 27–29)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 27 | `gws-27-macros-apps-script-basics.html` | Macros & Apps Script Basics | Extensions › Macros › Record · macro shortcuts `⌘⌥⇧1` / `Ctrl+Alt+Shift+1` · `macros.gs` · Extensions › Apps Script · custom functions (`@customfunction`) · authorization prompts |
| 28 | `gws-28-apps-script-recipes.html` | Apps Script Recipes | `SpreadsheetApp` ranges & values · `onOpen` custom menu · `onEdit` · time-driven & form triggers · `GmailApp` / `DocumentApp` · Workspace Flows / AppSheet for no-code automation |
| 29 | `gws-29-gemini.html` | Gemini in Workspace | Gemini side panel · Help me write · `AI()` function in Sheets · help me organize / formula help · Gemini in Gmail & Slides · what to verify after AI edits · plan availability |

Sheet 29 points to the Agentic Coding set for prompting in general.

### Group 7: Quick Reference (Sheets 30–32)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 30 | `gws-30-quick-ref-app-shortcuts.html` | Quick Ref — Drive, Docs, Slides & Gmail | macOS and Windows / ChromeOS columns · shared · Drive · Docs · Slides (editing + presenting) · Gmail · Calendar |
| 31 | `gws-31-quick-ref-sheets-shortcuts.html` | Quick Ref — Sheets Shortcuts | macOS and Windows / ChromeOS columns · navigation · selection · entry & fill · formatting · formulas · rows / columns / sheets |
| 32 | `gws-32-quick-ref-sheets-formulas.html` | Quick Ref — Sheets Formulas | logic · math & aggregation · lookup · arrays · `QUERY` clauses · text & regex · date · import functions · `LAMBDA` helpers |

Dense tables, no explanations; every row points back to the sheet with details.
