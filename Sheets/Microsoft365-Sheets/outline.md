# Microsoft 365 Reference Guide Outline (39 sheets)

## Metadata

- **Group it belongs to:** Office Tools (new index section, added at the very bottom of the root index.html, after DevOps & Containers)
- **Folder Directory:** `Sheets/Microsoft365-Sheets/ms-##-[slug].html`
- **PDF Name:** `Microsoft 365 Reference Guide.pdf`
- **Groups:** 7
- **Sheets:** 39
- **Drafted Date:** 2026-11-13
- **Verified-Finalized Date:**

## Basic Information

A working reference for getting things done faster in Microsoft 365: Word, Excel and PowerPoint first, then Outlook, with a short pass over OneDrive, Teams, OneNote and Loop. Aimed at people who already use Office every day and want to stop reaching for the mouse: shortcuts, templates, styles, formulas, macros and automation. Excel gets the most space because formulas are the biggest efficiency win.

Covers both the desktop apps (Windows and Mac) and the web apps. Targets the current Microsoft 365 subscription (late 2026), including modern Excel functions (dynamic arrays, `LET`/`LAMBDA`, `GROUPBY`/`PIVOTBY`, the `REGEX` functions) and Copilot. Office 2024 perpetual and older versions get a note only where a feature is missing. Shortcuts are written macOS first, then Windows (`⌘B` / `Ctrl+B`); web-app shortcuts are called out where they differ. Shortcut keys and new-function availability should be re-checked against Microsoft Support when each sheet is built.

Ends with a 3-page quick reference: app shortcuts, Excel shortcuts, and Excel formulas. Parallel sets: Google Workspace and Apple iWork & Mail (same section, same box layout).

## Differences in Layout from Basic Structure

- **Extra boxes:** **Other Suites** (`section-notes section-suites`, `id="suites"`) in Row 2 under Code Explained on 01–36 · **Platform Differences** (`section-notes section-platform`, `id="platform"`) in Row 2 under Code Explained on 01–36 · **Automate It** (`section-notes section-automate`, `id="automate"`) in Row 1 as a third column on selected sheets (table below). None on the quick references (37–39).
- Most sheets are about an app, not code. The Code block holds a shortcut table, a formula block (plain text, one formula per line with a trailing comment), or a VBA / Office Scripts snippet (Prism `visual-basic` / `typescript`). Sheets with nothing for a code block use the GitHub set's **Steps | Where to Find It** layout in place of Code | Code Explained.
- Shortcuts are written inline as `⌘B` / `Ctrl+B` (macOS first) everywhere, never in a box.
- Groups follow the apps (shared basics → Word → Excel → PowerPoint → Outlook & Teams → automation & AI → quick reference) instead of the standard language group order.
- `ms-cheatsheet.css` adds `.section-suites`, `.section-platform` and `.section-automate` styles with their own accent colors. The three Office Tools sets share these class names so the boxes look the same across the section.

### Other Suites box (`id="suites"`, 01–36)

- Title **Other Suites**. Exactly two lines, always in this order: **Google Workspace** · **Apple iWork**. Each names the equivalent menu, shortcut or function, or says plainly that there isn't one (`Google Sheets — XLOOKUP works the same` · `Numbers — no PIVOTBY; use a pivot table`).

### Platform Differences box (`id="platform"`, 01–36)

- Title **Platform Differences**. Up to three lines, in this order: **Windows** · **Mac** · **Web**. Only list the platforms that differ; write `Same on all three.` when nothing differs (common for formulas).

### Automate It box (`id="automate"`, Row 1, selected sheets)

- Title **Automate It**, Row 1 as a third column (`col-1-3`). One or two ways to stop doing the sheet's task by hand: a template, a macro, an Office Script, a Power Automate flow, or a Copilot prompt.

| # | Automate It content |
|---|---|
| 02 | Add top commands to the QAT (`Alt+1…5`) · export ribbon customizations |
| 04 | Save a styled file as `.dotx` / `.xltx` / `.potx` and set the personal templates folder |
| 08 | Record a macro that rebuilds the TOC and updates all fields |
| 10 | AutoText / Quick Parts for repeated blocks · AutoCorrect for long phrases |
| 12 | Mail merge from an Excel table instead of copy-paste letters |
| 14 | Flash Fill vs a recorded macro for repeated cleanup |
| 16 | Tables + structured references so formulas extend themselves |
| 22 | Refresh all PivotTables on open (one-line VBA event) |
| 23 | Office Script that applies the same cleanup to every new export |
| 24 | Power Query instead of repeated manual import steps |
| 25 | Save the master as `.potx` · picture placeholders |
| 26 | Reuse Slides / Designer instead of rebuilding layouts |
| 30 | Quick Steps and rules for repeat mail actions |
| 31 | Bookings page or Scheduling Assistant instead of back-and-forth email |
| 35 | Scheduled / triggered Power Automate flow that runs a script |

## Groups

### Group 1: Getting Started & Shared Basics (Sheets 01–05)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `ms-01-introduction.html` | Introduction to Microsoft 365 | M365 subscription vs Office 2024 · desktop vs web vs mobile · Microsoft 365 Copilot app · Windows vs Mac feature gaps · file formats (`.docx` `.xlsx` `.pptx`) |
| 02 | `ms-02-ribbon-search.html` | Ribbon, Search & KeyTips | Simplified vs Classic ribbon · Quick Access Toolbar · Alt KeyTips (Windows) · Microsoft Search box · customize ribbon · collapse ribbon `⌘⌥R` / `Ctrl+F1` |
| 03 | `ms-03-onedrive-autosave-sharing.html` | OneDrive, AutoSave & Sharing | AutoSave · Version History · share links & permissions · co-authoring · comments & @mentions · Files On-Demand · SharePoint libraries |
| 04 | `ms-04-templates-themes.html` | Templates & Themes | File › New templates · personal templates folder · `.dotx` `.xltx` `.potx` · document themes (colors, fonts, effects) · organization templates · Normal.dotm / Book.xltx defaults |
| 05 | `ms-05-universal-shortcuts.html` | Shortcuts That Work Everywhere | Paste Special `⌃⌘V` / `Ctrl+Alt+V` · paste as text · Repeat `⌘Y` / `F4` · Format Painter · spelling `F7` · Dictate · Undo history · Save As `⌘⇧S` / `F12` |

### Group 2: Word (Sheets 06–12)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 06 | `ms-06-word-navigation-selection.html` | Word Navigation & Selection | Navigation pane · Go To `F5` · extend selection `F8` · word / paragraph jumps · select sentence / paragraph · Read Mode · Focus mode |
| 07 | `ms-07-word-styles.html` | Styles & Formatting | Styles gallery · Heading 1–3 shortcuts (Windows `Ctrl+Alt+1`) · clear formatting · modify / update style to match · Style Inspector · Reveal Formatting · style sets |
| 08 | `ms-08-word-long-documents.html` | Long Documents | heading-based TOC · captions & cross-references · section breaks · different first page / odd-even headers · page numbering by section · footnotes & endnotes · update fields `F9` |
| 09 | `ms-09-word-tables-lists-layout.html` | Tables, Lists & Layout | convert text ↔ table · table styles · repeat header row · multilevel lists linked to headings · columns · tab stops & leaders · margins & orientation per section |
| 10 | `ms-10-word-find-replace-quickparts.html` | Find & Replace, Quick Parts & AutoText | Advanced Find · wildcards · `^p` `^t` `^&` special codes · replace formatting · Quick Parts / Building Blocks · AutoText · AutoCorrect entries |
| 11 | `ms-11-word-review.html` | Review & Collaboration | Track Changes `⌘⇧E` / `Ctrl+Shift+E` · accept / reject · comments & resolve · Compare / Combine · Restrict Editing · Editor · Read Aloud |
| 12 | `ms-12-word-mail-merge-fields.html` | Mail Merge & Fields | Mailings tab · Excel data source · merge fields · Rules (If…Then…Else) · labels & envelopes · field codes `⌥F9` / `Alt+F9` · DATE / PAGE / REF fields |

### Group 3: Excel (Sheets 13–24)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 13 | `ms-13-excel-navigation-selection.html` | Excel Navigation & Selection | `⌘↓` / `Ctrl+↓` jump to edge · `⇧` to extend · `Ctrl+Home` / `End` · Name Box · Go To Special (blanks, formulas, visible cells) · Freeze Panes · select row / column |
| 14 | `ms-14-excel-data-entry.html` | Data Entry, Fill & Validation | Flash Fill `Ctrl+E` · Fill Down `⌘D` / `Ctrl+D` · fill series & custom lists · `Ctrl+Enter` fill selection · today's date `Ctrl+;` · Data Validation dropdowns · checkboxes |
| 15 | `ms-15-excel-formula-basics.html` | Formula Basics | operators & order · relative vs absolute `$` · toggle refs `⌘T` / `F4` · cross-sheet refs · named ranges · error values (`#N/A` `#VALUE!` `#SPILL!` `#REF!`) · Evaluate Formula · trace precedents / dependents |
| 16 | `ms-16-excel-tables.html` | Tables & Structured References | Format as Table `⌃T` / `Ctrl+T` · `Table1[Column]` · `[@Column]` · Total Row · auto-expanding ranges · slicers · table vs plain range |
| 17 | `ms-17-excel-logic-math.html` | Logic & Math Functions | `IF` · `IFS` · `SWITCH` · `AND` / `OR` / `NOT` · `IFERROR` / `IFNA` · `SUMIFS` · `COUNTIFS` · `AVERAGEIFS` · `ROUND` · `SUMPRODUCT` |
| 18 | `ms-18-excel-lookup.html` | Lookup Functions | `XLOOKUP` · `XMATCH` · `INDEX` / `MATCH` · `VLOOKUP` (legacy, and why to stop) · approximate & wildcard matches · two-way lookups · `CHOOSECOLS` |
| 19 | `ms-19-excel-dynamic-arrays.html` | Dynamic Arrays | spilling · `#` spill reference · `FILTER` · `SORT` / `SORTBY` · `UNIQUE` · `SEQUENCE` · `TAKE` / `DROP` · `VSTACK` / `HSTACK` · `TOCOL` |
| 20 | `ms-20-excel-text-date.html` | Text, Date & Regex Functions | `TEXTSPLIT` · `TEXTBEFORE` / `TEXTAFTER` · `TEXTJOIN` · `TEXT` formats · `REGEXTEST` / `REGEXEXTRACT` / `REGEXREPLACE` · `TODAY` · `EOMONTH` · `NETWORKDAYS` · `DATEDIF` |
| 21 | `ms-21-excel-let-lambda-groupby.html` | LET, LAMBDA & GROUPBY | `LET` · `LAMBDA` · named LAMBDAs in Name Manager · `MAP` / `BYROW` / `REDUCE` · `GROUPBY` · `PIVOTBY` · `TRIMRANGE` and the trim-ref dot operator |
| 22 | `ms-22-excel-pivots-charts.html` | PivotTables & Charts | Insert PivotTable · rows / columns / values / filters · group dates · show values as % · calculated fields · PivotCharts · recommended charts · sparklines |
| 23 | `ms-23-excel-cleanup-formatting.html` | Conditional Formatting & Data Tools | rule types · formula-based rules · Remove Duplicates · Text to Columns · sort & filter `⌘⇧F` / `Ctrl+Shift+L` · Goal Seek · Data Tables (what-if) · custom number formats |
| 24 | `ms-24-excel-power-query.html` | Power Query | Get Data (file, folder, web) · Query Editor applied steps · unpivot · merge vs append · data types · Close & Load To · Refresh All · M formula bar glimpse |

Sheets 17–21 are the formula core and should stay formula-first: every row in the Code block is a working formula with a one-line comment. Sheet 21 notes which functions need a current M365 build.

### Group 4: PowerPoint (Sheets 25–28)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 25 | `ms-25-ppt-slide-master.html` | Slide Master & Layouts | Slide Master view · layouts & placeholders · theme fonts / colors · footers & slide numbers · save as `.potx` · apply / reset layout |
| 26 | `ms-26-ppt-building-slides.html` | Building Slides Fast | Designer · Reuse Slides · duplicate `⌘D` / `Ctrl+D` · Outline view · Align & Distribute · Selection Pane · group `⌘⌥G` / `Ctrl+G` · Smart Guides |
| 27 | `ms-27-ppt-animation-transitions.html` | Animations, Morph & Zoom | Morph transition · Animation Pane · triggers · Animation Painter · Summary / Slide / Section Zoom · timing & delays |
| 28 | `ms-28-ppt-presenting.html` | Presenting & Exporting | start `⌘⇧↩` / `F5` · from current slide · Presenter View · `B` / `W` blank screen · number + `Enter` to jump · Rehearse Timings · Speaker Coach · live subtitles · export to video / PDF |

### Group 5: Outlook, Teams & Companion Apps (Sheets 29–32)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 29 | `ms-29-outlook-mail.html` | Outlook Mail Efficiency | new Outlook vs classic · Focused Inbox · search operators (`from:` `subject:` `hasattachments:`) · flags & categories · Sweep · Undo Send · Schedule Send · reading-pane shortcuts |
| 30 | `ms-30-outlook-rules-templates.html` | Rules, Quick Steps & Templates | Rules · Quick Steps · My Templates · signatures · Quick Parts in mail · auto-replies · conditional formatting of the inbox |
| 31 | `ms-31-outlook-calendar.html` | Calendar & Scheduling | Scheduling Assistant · meeting room finder · shared calendars · time zones · Bookings · calendar view shortcuts · drag mail to calendar |
| 32 | `ms-32-teams-onenote-loop.html` | Teams, OneNote & Loop | Teams search `⌘E` / `Ctrl+E` · mute `⌘⇧M` / `Ctrl+Shift+M` · chat vs channels · meeting recap · OneNote tags & search · Loop components in chat and mail |

### Group 6: Automation & AI (Sheets 33–36)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 33 | `ms-33-vba-macro-basics.html` | Macros & VBA Basics | Developer tab · macro recorder · relative references · `.xlsm` / `.docm` · Personal Macro Workbook · VBA editor `⌥F11` / `Alt+F11` · Trust Center & macro security |
| 34 | `ms-34-vba-recipes.html` | VBA Recipes | `Range` / `Cells` / `Offset` · loops over rows · `MsgBox` / `InputBox` · workbook & sheet events · buttons & shortcut keys · Word `Selection.Find` · error handling |
| 35 | `ms-35-office-scripts-power-automate.html` | Office Scripts & Power Automate | Automate tab · Action Recorder · TypeScript `main(workbook)` · run from a button · Power Automate flows · scheduled runs · VBA vs Office Scripts |
| 36 | `ms-36-copilot-python.html` | Copilot & Python in Excel | Copilot in Word / Excel / PowerPoint / Outlook · prompt patterns · `COPILOT()` function · Python in Excel `=PY()` · what to verify after AI edits |

Sheet 36 points to the Agentic Coding set for prompting in general. Copilot features vary by license, so this sheet notes which need a Copilot add-on.

### Group 7: Quick Reference (Sheets 37–39)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 37 | `ms-37-quick-ref-app-shortcuts.html` | Quick Ref — Word, PowerPoint & Outlook | macOS and Windows columns · shared · Word · PowerPoint (editing + presenting) · Outlook |
| 38 | `ms-38-quick-ref-excel-shortcuts.html` | Quick Ref — Excel Shortcuts | macOS and Windows columns · navigation · selection · entry & fill · formatting · formulas · tables & filters |
| 39 | `ms-39-quick-ref-excel-formulas.html` | Quick Ref — Excel Formulas | logic · math & aggregation · lookup · dynamic arrays · text & regex · date · LET / LAMBDA · error values |

Dense tables, no explanations; every row points back to the sheet with details.
