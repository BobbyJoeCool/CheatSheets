# Mermaid Reference Guide Outline (46 sheets)

## Metadata

- **Group it belongs to:** Markup & Notation
- **Folder Directory:** `Sheets/Mermaid-Sheets/mmd-##-[slug].html`
- **Groups:** 15
- **Sheets:** 46
- **Drafted Date:** 2026-10-23
- **Verified-Finalized Date:**

## Basic Information

Mermaid diagram syntax for intermediate users who already write Markdown and want diagrams as code. It targets Mermaid 12.x (12.2.0 was current when drafted) and covers all 31 diagram types in the official docs. Code-first throughout: every diagram sheet shows the Mermaid source next to a live render of that exact source, with the keywords for that diagram type called out.

The eight diagram types people use most (Flowchart, Sequence, ER, State, Class, Gantt/Timeline, Mindmap, Git Graph) get two sheets each. Styling gets two sheets. Every other diagram type gets one sheet. Many of the newer types still need a `-beta` suffix on the declaration line (`architecture-beta`, `venn-beta`, `ishikawa-beta`, `treeView-beta` and others), and their syntax may change; sheets label these as beta. Scope is the diagram language plus enough rendering and tooling to get a diagram on screen. Writing plugins and custom layout engines is out of scope.

This set replaces the earlier 14-sheet Mermaid set (12 topic sheets + 2 quick references).

## Differences in Layout from Basic Structure

- **Code | Rendered Output row.** On every sheet with a Mermaid example, Row 2 is `row-code-render`: the code on the left and a live render of that same code on the right (`section-render` > `.render-box[data-mmd-src="code"]`). `mmd-render.js` (in the set folder) reads the code block's text, renders it with Mermaid 12.2.0 from jsDelivr using a light print theme, and sizes the SVG to the box (`--render-h` caps the height per sheet). Sheet 03 (HTML code) keeps the standard Code | Code Explained row; sheet 04 has no code row.
- **Prism grammar.** Prism 1.29 has no Mermaid language, so `mmd-prism.js` (in the set folder) adds `language-mermaid`. Sheets load it right after `prism.min.js`.
- **Two-page spreads for the major diagram types.** The intro is an even number of sheets (4), so each major diagram type starts on an odd sheet and its two sheets face each other when printed and bound. Sheets 05–20 must stay in pairs: if a sheet is added or removed in Groups 1–9, add or remove a second one too.
- **The standard group template doesn't apply.** Mermaid is a set of diagram languages, so groups follow diagram type instead of the general-purpose language order.
- **Sheet 04 is a "when to use what" lookup page.** Three tables match goals to diagram declarations, with the sheet number for each. It has no code row.
- **Beta label.** Sheets for diagram types that still need the `-beta` suffix carry a `.beta-badge` in the `<h1>`.
- **print-all.html** strips sheet scripts like every set, then calls `renderAll()` from `mmd-render.js` so the printed pages include the diagrams.

## Groups

### Group 1: Introduction (Sheets 01–04)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `mmd-01-introduction-where-it-runs.html` | Introduction & Where Mermaid Runs | diagrams as code · ```mermaid · Mermaid 12 · GitHub / GitLab · Obsidian · mermaid.live · mmdc |
| 02 | `mmd-02-diagram-anatomy-common-syntax.html` | Diagram Anatomy & Common Syntax | declaration line · -beta · %% comments · --- front matter · accTitle / accDescr · #quot; · markdown strings |
| 03 | `mmd-03-rendering-tooling.html` | Rendering & Tooling | mermaid.initialize() · startOnLoad · mermaid.run() · mermaid.render() · mmdc · MkDocs / Docusaurus |
| 04 | `mmd-04-choosing-a-diagram-type.html` | Choosing a Diagram Type | when to use what · process · interactions · data model · lifecycle · schedule · charts · sheet lookup |

### Group 2: Flowchart (Sheets 05–06)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 05 | `mmd-05-flowchart-nodes-shapes.html` | Flowchart — Nodes, Shapes & Direction | flowchart TD / LR · id[text] · {decision} · [(database)] · @{ shape: } |
| 06 | `mmd-06-flowchart-links-subgraphs.html` | Flowchart — Links, Subgraphs & Interaction | --> · -.-> · ==> · \|label\| · a --> b & c · subgraph · e1@ edge IDs |

### Group 3: Sequence Diagram (Sheets 07–08)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 07 | `mmd-07-sequence-participants-messages.html` | Sequence — Participants & Messages | sequenceDiagram · participant / actor · as alias · ->> · -->> · create / destroy · autonumber |
| 08 | `mmd-08-sequence-activations-blocks.html` | Sequence — Activations, Notes & Control Blocks | activate / +- · Note over · loop · alt / else · opt · par / and · critical · break · rect |

### Group 4: Entity Relationship (Sheets 09–10)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 09 | `mmd-09-er-entities-attributes.html` | ER — Entities & Attributes | erDiagram · ENTITY { type name } · PK / FK / UK · "comment" · alias · direction |
| 10 | `mmd-10-er-relationships-cardinality.html` | ER — Relationships & Cardinality | \|o · \|\| · }o · }\| · crow's foot · -- identifying · .. non-identifying · : label |

### Group 5: State Diagram (Sheets 11–12)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 11 | `mmd-11-state-states-transitions.html` | State — States & Transitions | stateDiagram-v2 · [*] · state "…" as s1 · s1 --> s2 : event · note · direction |
| 12 | `mmd-12-state-composite-choice-concurrency.html` | State — Composite, Choice & Concurrency | state X { } · <<choice>> · <<fork>> / <<join>> · -- concurrency · classDef / ::: |

### Group 6: Class Diagram (Sheets 13–14)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 13 | `mmd-13-class-classes-members.html` | Class — Classes & Members | classDiagram · class Name { } · + - # ~ · $ static / * abstract · ~T~ · <<interface>> |
| 14 | `mmd-14-class-relationships.html` | Class — Relationships & Cardinality | <\|-- · *-- · o-- · --> · ..> · ..\|> · "1" "*" · note for · lollipop |

### Group 7: Gantt & Timeline (Sheets 15–16)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 15 | `mmd-15-gantt-tasks-sections-dates.html` | Gantt — Tasks, Sections & Dates | gantt · dateFormat · axisFormat · section · task : id, start, 3d · after · done / crit · milestone |
| 16 | `mmd-16-gantt-scheduling-timeline.html` | Gantt Scheduling & Timeline | excludes weekends · tickInterval · todayMarker · vert · timeline · section · period : event |

Timeline is small enough to share sheet 16 with advanced Gantt scheduling. Gantt gets the full first sheet.

### Group 8: Mindmap (Sheets 17–18)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 17 | `mmd-17-mindmap-structure-shapes.html` | Mindmap — Structure & Shapes | mindmap · indentation · root · [square] · (rounded) · ((circle)) · ))bang(( · )cloud( · {{hex}} |
| 18 | `mmd-18-mindmap-icons-classes-layout.html` | Mindmap — Icons, Classes & Layout | ::icon(fa fa-book) · :::class · markdown strings · colorBy · tidy-tree · indentation |

### Group 9: Git Graph (Sheets 19–20)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 19 | `mmd-19-gitgraph-commits-branches.html` | Git Graph — Commits & Branches | gitGraph · commit id: / tag: · type: · branch · checkout / switch · order: |
| 20 | `mmd-20-gitgraph-merges-options.html` | Git Graph — Merges, Cherry-Picks & Options | merge · cherry-pick id: parent: · mainBranchName · showBranches · rotateCommitLabel · parallelCommits |

### Group 10: Styling Diagrams (Sheets 21–22)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 21 | `mmd-21-themes-looks-configuration.html` | Themes, Looks & Configuration | config: · theme · look: classic / handDrawn / neo · layout: dagre / elk · %%{init}%% · priority |
| 22 | `mmd-22-styling-elements-theme-variables.html` | Styling Elements & Theme Variables | classDef · class · ::: · style · linkStyle · themeVariables · primaryColor · hex only |

### Group 11: Process & Behavior (Sheets 23–28)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 23 | `mmd-23-swimlanes.html` | Swimlanes | swimlane-beta · subgraph lanes · flowchart shapes · --> edges · cross-lane handoffs · LR / TB |
| 24 | `mmd-24-user-journey.html` | User Journey | journey · title · section · task : score : actors · 1–5 scores |
| 25 | `mmd-25-use-case.html` | Use Case Diagram | usecase-beta · actor · (use case) · systemBoundary · include / extend · --\|> · note for |
| 26 | `mmd-26-requirement-diagram.html` | Requirement Diagram | requirementDiagram · requirement types · id / text / risk / verifymethod · element · satisfies / verifies |
| 27 | `mmd-27-zenuml.html` | ZenUML | zenuml · @Actor / @Database · A.method() · A->B: msg · if / while / try · return · plugin |
| 28 | `mmd-28-event-modeling.html` | Event Modeling | eventmodeling · tf / timeframe · ui · cmd · evt · rmo · pcr · rf · ->> · data |

### Group 12: Charts & Data (Sheets 29–35)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 29 | `mmd-29-pie-chart.html` | Pie Chart | pie · showData · title · "label" : value · donutHole · textPosition · pie1–pie12 |
| 30 | `mmd-30-quadrant-chart.html` | Quadrant Chart | quadrantChart · x-axis Low --> High · y-axis · quadrant-1 … 4 · Point: [x, y] · radius / color |
| 31 | `mmd-31-xy-chart.html` | XY Chart | xychart · x-axis [categories] · y-axis min --> max · bar · line · horizontal · showDataLabel |
| 32 | `mmd-32-sankey.html` | Sankey | sankey · source,target,value · CSV · quoted names · linkColor · nodeAlignment · showValues |
| 33 | `mmd-33-radar.html` | Radar | radar-beta · axis · curve name{ } · max / min · graticule circle / polygon · ticks · showLegend |
| 34 | `mmd-34-treemap.html` | Treemap | treemap-beta · indentation · "Section" · "Leaf": value · :::class · valueFormat |
| 35 | `mmd-35-venn.html` | Venn | venn-beta · set · union · text · :N size · ["label"] · style fill-opacity |

### Group 13: Architecture & Structure (Sheets 36–40)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 36 | `mmd-36-c4.html` | C4 Diagram | C4Context · C4Container · C4Component · Person / System / Container · Boundary · Rel |
| 37 | `mmd-37-architecture.html` | Architecture | architecture-beta · group · service · junction · (icon) · L / R / T / B edges · registerIconPacks |
| 38 | `mmd-38-block-diagram.html` | Block Diagram | block · columns · id:3 width · space · nested block … end · arrow blocks · --> links |
| 39 | `mmd-39-packet.html` | Packet | packet · 0-15: "field" · +16 bit counts · bitsPerRow · bitOrder · title |
| 40 | `mmd-40-tree-view.html` | Tree View | treeView-beta · indentation · trailing / dirs · ├── input · ## descriptions · icon() · :::highlight |

### Group 14: Planning & Strategy (Sheets 41–44)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 41 | `mmd-41-kanban.html` | Kanban | kanban · column[Title] · task[Text] · @{ assigned, ticket, priority } · ticketBaseUrl |
| 42 | `mmd-42-ishikawa.html` | Ishikawa (Fishbone) | ishikawa-beta · problem line · indented causes · sub-causes · 6M categories |
| 43 | `mmd-43-wardley-map.html` | Wardley Map | wardley-beta · component [vis, evo] · anchor · -> links · evolve · pipeline · (build) / (buy) |
| 44 | `mmd-44-cynefin.html` | Cynefin | cynefin-beta · complex / complicated · clear / chaotic · confusion · --> transitions |

### Group 15: Quick Reference (Sheets 45–46)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 45 | `mmd-45-quick-reference-syntax-core.html` | Quick Reference — Core Syntax | skeleton · flowchart · sequence · ER · state · class · gantt · git |
| 46 | `mmd-46-quick-reference-types-config.html` | Quick Reference — Types & Config | declarations · syntax per type · themes · styling · mmdc |
