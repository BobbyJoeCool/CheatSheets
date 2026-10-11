# Markdown Reference Guide Outline (22 sheets)

## Metadata

- **Group it belongs to:** Markup & Notation
- **Folder Directory:** `Sheets/Markdown-Sheets/md-##-[slug].html`
- **Groups:** 7
- **Sheets:** 22
- **Drafted Date:** 2026-10-04
- **Verified-Finalized Date:** 2026-10-04

## Basic Information

Markdown for intermediate users. CommonMark is the baseline, and every other piece of syntax is labeled by flavor (GFM, Pandoc, Obsidian, MkDocs and others). It covers core syntax, lists, links, images, code blocks, tables, footnotes, math, front matter and callouts, then platforms, tooling and pitfalls.

The set was condensed to about 20 topic sheets plus a 2-page quick reference, below the guide's 30–50 range for markup languages on purpose. It was cut from a 48-sheet draft; MDX, chat apps and accessibility survive as items on merged sheets.

## Differences in Layout from Basic Structure

- The two quick-reference sheets at the end are table-only lookup pages (syntax, what it does, sheet #) with no code row and no Description/Notes row.
- Sheet 22 ends with a flavor support matrix (CommonMark / GFM / Pandoc / Obsidian / MkDocs) showing which extensions work where.

## Groups

### Group 1: Basics (Sheets 01–03)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `md-01-introduction-flavors.html` | Introduction & Flavors | Gruber 2004 · CommonMark · GFM · Pandoc · MultiMarkdown · Obsidian · editors & preview |
| 02 | `md-02-paragraphs-breaks-escaping.html` | Paragraphs, Line Breaks & Escaping | blank line · trailing spaces · \ break · &lt;br> · backslash escapes · HTML entities · &lt;!-- --> comments |
| 03 | `md-03-text-formatting.html` | Text Formatting | *italic* · **bold** · ***both*** · ~~strike~~ · ==highlight== · H~2~O / x^2^ · intraword rules |

### Group 2: Document Structure (Sheets 04–07)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 04 | `md-04-headings-anchors.html` | Headings & Anchors | # to ###### · setext === / --- · auto IDs · slug rules · {#custom-id} · [link](#heading) |
| 05 | `md-05-unordered-ordered-lists.html` | Unordered & Ordered Lists | - * + · 1. / 1) · start number · all-1. numbering · tight vs loose · escaping 1986\. |
| 06 | `md-06-nested-task-definition-lists.html` | Nested, Task & Definition Lists | indent width · multi-paragraph items · code in lists · - [ ] · - [x] · Term + : definition |
| 07 | `md-07-blockquotes-callouts-rules.html` | Blockquotes, Callouts & Rules | > · nested >> · > [!NOTE] · [!TIP] · [!WARNING] · Obsidian callouts · --- *** · page breaks |

### Group 3: Links, Images & Code (Sheets 08–11)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 08 | `md-08-links.html` | Links | [text](url "title") · [text][id] · [id]: url · &lt;https://…> · GFM bare URLs · mailto: · file.md#section |
| 09 | `md-09-images.html` | Images | ![alt](src) · ![alt][id] · linked image · &lt;img width> · &lt;picture> dark mode · Pandoc {width=50%} |
| 10 | `md-10-inline-code-code-blocks.html` | Inline Code & Code Blocks | `code` · double backticks · ``` · ~~~ · nested fences · 4-space indent · &lt;kbd> |
| 11 | `md-11-syntax-highlighting-diagrams.html` | Syntax Highlighting & Diagrams | language IDs · diff · console · line highlight {2-4} · ```mermaid · flowchart · sequenceDiagram |

### Group 4: Tables (Sheets 12–13)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 12 | `md-12-table-basics-alignment.html` | Table Basics & Alignment | \| pipes · delimiter row · :--- · :---: · ---: · escaping \\| · &lt;br> in cells |
| 13 | `md-13-complex-tables.html` | Complex Tables | HTML &lt;table> · colspan · rowspan · Pandoc grid tables · multiline tables · table generators |

### Group 5: Extended Syntax (Sheets 14–16)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 14 | `md-14-footnotes-math.html` | Footnotes & Math | [^1] · [^1]: · inline ^[note] · $inline$ · $$block$$ · ```math · KaTeX / MathJax |
| 15 | `md-15-front-matter-attributes.html` | Front Matter & Attributes | --- YAML · +++ TOML · title / tags / draft · {.class #id} · ::: fenced divs · *[HTML]: abbreviations |
| 16 | `md-16-raw-html-collapsible.html` | Raw HTML & Collapsible Sections | block vs inline HTML · blank-line rule · &lt;details> · &lt;summary> · markdown="1" · sanitized tags |

### Group 6: Platforms, Tools & Practices (Sheets 17–20)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 17 | `md-17-github-markdown-readmes.html` | GitHub Markdown & READMEs | @mention · #123 · commit SHAs · :emoji: · badges · table of contents · relative links |
| 18 | `md-18-obsidian-chat-apps.html` | Obsidian & Chat-App Markdown | [[wikilink]] · ![[embed]] · ^block-id · %% %% · Slack mrkdwn · Discord · Jira wiki markup |
| 19 | `md-19-tooling.html` | Tooling: Pandoc, Linters & Site Generators | pandoc -o · --toc · markdownlint · Prettier · MkDocs · Hugo / Jekyll · MDX |
| 20 | `md-20-best-practices-pitfalls.html` | Best Practices & Pitfalls | one sentence per line · alt & link text · blank lines around blocks · snake_case emphasis · accidental lists · flavor mismatches |

### Group 7: Quick Reference (Sheets 21–22)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 21 | `md-21-quick-reference-core.html` | Quick Reference — Core Syntax | headings · emphasis · lists · links · images · code · blockquotes · tables |
| 22 | `md-22-quick-reference-extended.html` | Quick Reference — Extended & Flavors | task lists · footnotes · math · Mermaid · alerts · front matter · &lt;details> · flavor matrix |
