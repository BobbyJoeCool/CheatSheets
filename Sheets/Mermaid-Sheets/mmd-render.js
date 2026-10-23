/* ============================================================
   MMD-RENDER.JS
   Draws the "Rendered Output" box on every Mermaid sheet.

   Each render box names the code section it draws from:
     <div class="render-box" data-mmd-src="code"></div>
   The script reads that section's <code> text (the exact source
   shown on the sheet), renders it with Mermaid, and puts the SVG
   in the box. The box is matched to its code inside the same
   <main>, so print-all.html (every sheet on one page) works too.

   Load as a module:  <script type="module" src="mmd-render.js"></script>
   Pages that inject sheets later (print-all.html) set
   data-mmd-manual on <body> and call renderAll() themselves.
   window.mmdReady resolves when every box has finished.
   ============================================================ */
import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@12.2.0/dist/mermaid.esm.min.mjs";

const ZENUML_URL =
	"https://cdn.jsdelivr.net/npm/@mermaid-js/mermaid-zenuml@1.0.1/dist/mermaid-zenuml.esm.min.mjs";

// Light, print-friendly palette. A diagram's own front matter
// (config: theme / look / themeVariables) still wins over this.
mermaid.initialize({
	startOnLoad: false,
	securityLevel: "strict",
	theme: "base",
	fontFamily: '"DM Sans", sans-serif',
	themeVariables: {
		darkMode: false,
		background: "#ffffff",
		fontFamily: '"DM Sans", sans-serif',
		fontSize: "12px",
		primaryColor: "#eef0f8",
		primaryTextColor: "#111111",
		primaryBorderColor: "#8a8fb8",
		secondaryColor: "#f3eefa",
		tertiaryColor: "#f8f8fc",
		lineColor: "#555577",
		noteBkgColor: "#fff8dc",
		noteBorderColor: "#c9b458",
		gridColor: "#dddddd",
		// chart series colors (pie, xychart, radar, treemap …)
		pie1: "#8fb3e8", pie2: "#f2b48c", pie3: "#9bd3ae", pie4: "#e8a0b4",
		pie5: "#c7b3e8", pie6: "#f0d98c", pie7: "#9fd6dc", pie8: "#d4b8a0",
	},
});

let zenuml = null;
const needsZenuml = (src) => /^\s*(?:---[\s\S]*?---\s*)?zenuml\b/.test(src);
const loadZenuml = () =>
	(zenuml ??= import(ZENUML_URL).then((m) => mermaid.registerExternalDiagrams([m.default])));

let counter = 0;

export async function renderAll(root = document) {
	const boxes = [...root.querySelectorAll(".render-box[data-mmd-src]")];
	for (const box of boxes) {
		if (box.dataset.status) continue; // already drawn
		const scope = box.closest("main") || root;
		const codeEl = scope.querySelector(`#${box.dataset.mmdSrc} code`);
		if (!codeEl) {
			box.dataset.status = "error";
			box.textContent = `No code section #${box.dataset.mmdSrc}`;
			continue;
		}
		const src = codeEl.textContent;
		try {
			if (needsZenuml(src)) await loadZenuml();
			const { svg } = await mermaid.render(`mmd-render-${++counter}`, src);
			box.innerHTML = svg;
			const el = box.querySelector("svg");
			if (el) {
				// let CSS size the drawing: full box width, height from the
				// drawing's own proportions, capped by --render-h
				const vb = el.viewBox?.baseVal;
				el.removeAttribute("width");
				el.removeAttribute("height");
				el.style.removeProperty("max-width");
				if (vb?.width && vb?.height) el.style.aspectRatio = `${vb.width} / ${vb.height}`;
			}
			box.dataset.status = "ok";
		} catch (err) {
			box.dataset.status = "error";
			box.textContent = "Render error: " + (err?.message || err);
			console.error(err);
		}
	}
}

window.mmdReady = document.body.hasAttribute("data-mmd-manual")
	? Promise.resolve()
	: renderAll(document);
