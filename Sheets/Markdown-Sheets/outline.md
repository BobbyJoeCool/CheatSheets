# Markdown Reference — Outline

Generated from `manifest.json`; keep the two in sync when sheets are added, renamed or reordered.

## Profile

- **Collection section:** Markup & Notation
- **Status:** Complete
- **Sheets:** 22 across 7 groups
- **File prefix:** `md` (`md-##-[slug].html`)
- **Folder:** `Sheets/Markdown-Sheets/`
- **Coverage:** flavors (CommonMark, GFM, Pandoc, Obsidian), paragraphs, line breaks & escaping, text formatting, headings & anchors, unordered & ordered lists, nested, task & definition lists, blockquotes, callouts & rules, links, images, inline code & code blocks, syntax highlighting & Mermaid diagrams, table basics & alignment, complex tables, footnotes & math, front matter & attributes, raw HTML & collapsible sections, GitHub Markdown & READMEs, Obsidian & chat-app Markdown, tooling (Pandoc, linters & site generators), best practices & pitfalls, quick reference (core & extended)

---

## Group 1 — Basics (01–03)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `md-01-introduction-flavors.html` | Introduction &amp; Flavors | Gruber 2004 · CommonMark · GFM · Pandoc · MultiMarkdown · Obsidian · editors &amp; preview |
| 02 | `md-02-paragraphs-breaks-escaping.html` | Paragraphs, Line Breaks &amp; Escaping | blank line · trailing spaces · \ break · &lt;br> · backslash escapes · HTML entities · &lt;!-- --> comments |
| 03 | `md-03-text-formatting.html` | Text Formatting | *italic* · **bold** · ***both*** · ~~strike~~ · ==highlight== · H~2~O / x^2^ · intraword rules |

## Group 2 — Document Structure (04–07)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 04 | `md-04-headings-anchors.html` | Headings &amp; Anchors | # to ###### · setext === / --- · auto IDs · slug rules · {#custom-id} · [link](#heading) |
| 05 | `md-05-unordered-ordered-lists.html` | Unordered &amp; Ordered Lists | - * + · 1. / 1) · start number · all-1. numbering · tight vs loose · escaping 1986\. |
| 06 | `md-06-nested-task-definition-lists.html` | Nested, Task &amp; Definition Lists | indent width · multi-paragraph items · code in lists · - [ ] · - [x] · Term + : definition |
| 07 | `md-07-blockquotes-callouts-rules.html` | Blockquotes, Callouts &amp; Rules | > · nested >> · > [!NOTE] · [!TIP] · [!WARNING] · Obsidian callouts · --- *** · page breaks |

## Group 3 — Links, Images & Code (08–11)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 08 | `md-08-links.html` | Links | [text](url "title") · [text][id] · [id]: url · &lt;https://…> · GFM bare URLs · mailto: · file.md#section |
| 09 | `md-09-images.html` | Images | ![alt](src) · ![alt][id] · linked image · &lt;img width> · &lt;picture> dark mode · Pandoc {width=50%} |
| 10 | `md-10-inline-code-code-blocks.html` | Inline Code &amp; Code Blocks | `code` · double backticks · ``` · ~~~ · nested fences · 4-space indent · &lt;kbd> |
| 11 | `md-11-syntax-highlighting-diagrams.html` | Syntax Highlighting &amp; Diagrams | language IDs · diff · console · line highlight {2-4} · ```mermaid · flowchart · sequenceDiagram |

## Group 4 — Tables (12–13)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 12 | `md-12-table-basics-alignment.html` | Table Basics &amp; Alignment | \| pipes · delimiter row · :--- · :---: · ---: · escaping \\| · &lt;br> in cells |
| 13 | `md-13-complex-tables.html` | Complex Tables | HTML &lt;table> · colspan · rowspan · Pandoc grid tables · multiline tables · table generators |

## Group 5 — Extended Syntax (14–16)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 14 | `md-14-footnotes-math.html` | Footnotes &amp; Math | [^1] · [^1]: · inline ^[note] · $inline$ · $$block$$ · ```math · KaTeX / MathJax |
| 15 | `md-15-front-matter-attributes.html` | Front Matter &amp; Attributes | --- YAML · +++ TOML · title / tags / draft · {.class #id} · ::: fenced divs · *[HTML]: abbreviations |
| 16 | `md-16-raw-html-collapsible.html` | Raw HTML &amp; Collapsible Sections | block vs inline HTML · blank-line rule · &lt;details> · &lt;summary> · markdown="1" · sanitized tags |

## Group 6 — Platforms, Tools & Practices (17–20)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 17 | `md-17-github-markdown-readmes.html` | GitHub Markdown &amp; READMEs | @mention · #123 · commit SHAs · :emoji: · badges · table of contents · relative links |
| 18 | `md-18-obsidian-chat-apps.html` | Obsidian &amp; Chat-App Markdown | [[wikilink]] · ![[embed]] · ^block-id · %% %% · Slack mrkdwn · Discord · Jira wiki markup |
| 19 | `md-19-tooling.html` | Tooling: Pandoc, Linters &amp; Site Generators | pandoc -o · --toc · markdownlint · Prettier · MkDocs · Hugo / Jekyll · MDX |
| 20 | `md-20-best-practices-pitfalls.html` | Best Practices &amp; Pitfalls | one sentence per line · alt &amp; link text · blank lines around blocks · snake_case emphasis · accidental lists · flavor mismatches |

## Group 7 — Quick Reference (21–22)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 21 | `md-21-quick-reference-core.html` | Quick Reference — Core Syntax | headings · emphasis · lists · links · images · code · blockquotes · tables |
| 22 | `md-22-quick-reference-extended.html` | Quick Reference — Extended &amp; Flavors | task lists · footnotes · math · Mermaid · alerts · front matter · &lt;details> · flavor matrix |
