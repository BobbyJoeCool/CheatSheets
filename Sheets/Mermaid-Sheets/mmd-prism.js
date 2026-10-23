/* ============================================================
   MMD-PRISM.JS
   Prism.js grammar for Mermaid, shared by every sheet in the
   Mermaid set. Prism 1.29 ships no Mermaid language, so this
   adds one. Load it right after prism.min.js and before the
   page finishes parsing (Prism highlights on DOMContentLoaded).
   Use it with <code class="language-mermaid">.
   ============================================================ */
(function (Prism) {
	if (!Prism) return;

	Prism.languages.mermaid = {
		// --- front matter block: title / config (YAML)
		"front-matter": {
			pattern: /^---[ \t]*\n[\s\S]*?\n---[ \t]*$/m,
			inside: {
				punctuation: /^---|---$/m,
				string: /"[^"\n]*"|'[^'\n]*'/,
				property: /^[ \t]*[\w-]+(?=:)/m,
				number: /\b\d+(?:\.\d+)?\b/,
			},
		},
		// %%{init: …}%% directive (older per-diagram config)
		directive: {
			pattern: /%%\{[\s\S]*?\}%%/,
			alias: "property",
		},
		comment: /%%.*/,
		string: /"(?:[^"\\\n]|\\.)*"|`[^`\n]*`/,
		// diagram declaration on its own line
		keyword: [
			{
				pattern:
					/^[ \t]*(?:flowchart|graph|sequenceDiagram|classDiagram(?:-v2)?|stateDiagram(?:-v2)?|erDiagram|journey|gantt|pie|quadrantChart|requirementDiagram|gitGraph|C4Context|C4Container|C4Component|C4Dynamic|C4Deployment|mindmap|timeline|zenuml|sankey(?:-beta)?|xychart(?:-beta)?|block(?:-beta)?|packet(?:-beta)?|kanban|architecture-beta|radar-beta|treemap-beta|venn-beta|ishikawa-beta|wardley-beta|cynefin-beta|treeView-beta|usecase-beta|swimlane-beta|eventmodeling)\b/m,
				greedy: true,
			},
			// statement keywords at the start of a line (avoids matching words inside labels)
			{
				pattern:
					/^([ \t]*)(?:subgraph|end|direction|participant|actor|activate|deactivate|autonumber|loop|alt|else|opt|par|and|critical|break|rect|box|create|destroy|note|Note|state|class|classDef|style|linkStyle|click|namespace|section|title|dateFormat|axisFormat|tickInterval|excludes|includes|todayMarker|weekday|commit|branch|checkout|switch|merge|cherry-pick|accTitle|accDescr|x-axis|y-axis|quadrant-[1-4]|bar|line|columns|space|block|group|service|junction|set|union|text|component|anchor|evolve|pipeline|note|requirement|functionalRequirement|interfaceRequirement|performanceRequirement|physicalRequirement|designConstraint|element|axis|curve|tf|timeframe|rf|resetframe|data|systemBoundary|showData|vert|complex|complicated|clear|chaotic|confusion|size|evolution|Person|Person_Ext|System|System_Ext|SystemDb|Container|ContainerDb|Component|Boundary|Enterprise_Boundary|System_Boundary|Container_Boundary|Rel|BiRel|Rel_U|Rel_D|Rel_L|Rel_R|UpdateElementStyle|UpdateRelStyle|UpdateLayoutConfig|if|while|try|catch|finally|return|@Actor|@Database|@Boundary|@Control|@Entity)\b/m,
				lookbehind: true,
			},
		],
		// arrows and links: -->  -.->  ==>  ->>  <|--  *--  o--  }o--||
		operator:
			/<<|>>|<\|--|--\|>|\.\.\|>|[|}][o|]--[o|][|{]|[|}][o|]\.\.[o|][|{]|<?[-=.]{2,}[>xo)|]?|-[x)>]{1,2}|:::|::/,
		number: /\b\d+(?:\.\d+)?%?\b/,
		punctuation: /[[\](){}:;,@]/,
	};

	Prism.languages.mmd = Prism.languages.mermaid;
})(window.Prism);
