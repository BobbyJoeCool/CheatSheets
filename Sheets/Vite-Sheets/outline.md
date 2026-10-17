# Vite Reference Guide Outline (39 sheets)

## Metadata

- **Group it belongs to:** JavaScript / TypeScript
- **Folder Directory:** `Sheets/Vite-Sheets/vite-##-[slug].html`
- **Groups:** 10
- **Sheets:** 39
- **Drafted Date:** 2026-10-16
- **Verified-Finalized Date:**

## Basic Information

Vite for intermediate developers who already know JavaScript, npm and at least one front-end framework. Targets Vite 8.x (Rolldown bundler, Oxc compiler, Node 20.19+ / 22.12+, ESM-only), with Vite 8.1 experimental features (Bundled Dev Mode, Wasm ESM, Chunk Import Map) marked as experimental. Config examples use `vite.config.ts` and the Vite 8 option names (`build.rolldownOptions`, `oxc`, `optimizeDeps.rolldownOptions`); the old Rollup/esbuild names appear only on the migration sheet and as "formerly" notes.

Scope: the dev server, config, assets, CSS, production builds, plugins, SSR and the JavaScript API. Framework-specific content (React, Vue, Svelte) is limited to the plugin setup sheet; Vitest gets one sheet as the standard companion test runner. Built under a 40-sheet cap, ending with a two-sheet quick reference.

## Differences in Layout from Basic Structure

- The standard language group template (Groups 2–13 of Outline_guide.md) does not apply. Groups follow the Vite workflow: setup → config → dev server → imports → CSS → build → plugins → SSR/advanced → testing and migration.
- Sheets that cover an option renamed in Vite 8 carry a small "Formerly (Vite 7)" note in the Notes box.
- Sheets 38–39 are quick-reference sheets: dense tables of commands, options and import suffixes with no Description, Mistakes or Tips boxes.
- 9 sheets (03, 08, 09, 18, 20, 24, 32, 35, 37) use a Code | Code row for side-by-side examples (config + usage, before vs after) instead of Code | Explain.
- Sheets 32 and 37 drop code to 9px in `vite-cheatsheet.css` to fit side-by-side config blocks.

## Groups

### Group 1: Introduction & Setup (Sheets 01–04)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `vite-01-introduction.html` | Introduction & How Vite Works | native ESM dev server · Rolldown · Oxc · dev vs build · dependency pre-bundling · Vite 8 |
| 02 | `vite-02-create-vite.html` | Creating a Project | npm create vite@latest · --template react-ts · templates · package.json scripts · Node 20.19+ / 22.12+ |
| 03 | `vite-03-project-structure.html` | Project Structure & index.html | index.html as entry · &lt;script type="module"> · public/ · src/ · root · vite-env.d.ts |
| 04 | `vite-04-cli.html` | CLI Commands | vite · vite build · vite preview · --host · --port · --mode · --force · --config |

### Group 2: Configuration (Sheets 05–09)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 05 | `vite-05-config-file.html` | Config File Basics | vite.config.ts · defineConfig · ({ command, mode }) · async config · mergeConfig · --configLoader |
| 06 | `vite-06-shared-options.html` | Shared Options | root · base · mode · define · publicDir · cacheDir · logLevel · clearScreen |
| 07 | `vite-07-resolve-alias.html` | Resolve & Path Aliases | resolve.alias · resolve.tsconfigPaths · extensions · conditions · dedupe · mainFields |
| 08 | `vite-08-env-modes.html` | Env Variables & Modes | import.meta.env · VITE_ prefix · .env.[mode].local · loadEnv · envPrefix · MODE / DEV / PROD / BASE_URL |
| 09 | `vite-09-typescript.html` | TypeScript in Vite | transpile only · tsc --noEmit · isolatedModules · vite/client types · ImportMetaEnv · oxc options |

### Group 3: Dev Server (Sheets 10–13)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 10 | `vite-10-server-options.html` | Dev Server Options | server.host · port · strictPort · open · https · allowedHosts · forwardConsole |
| 11 | `vite-11-proxy-cors.html` | Proxy, CORS & Headers | server.proxy · changeOrigin · rewrite · ws · server.cors · server.headers |
| 12 | `vite-12-hmr.html` | Hot Module Replacement | import.meta.hot · accept() · dispose() · hot.data · invalidate() · server.hmr · full reload |
| 13 | `vite-13-dep-prebundling.html` | Dependency Pre-Bundling | optimizeDeps.include · exclude · optimizeDeps.rolldownOptions · --force · node_modules/.vite · linked packages |

### Group 4: Assets & Imports (Sheets 14–17)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 14 | `vite-14-static-assets.html` | Static Assets | import url · ?url · ?raw · ?inline · public/ · assetsInlineLimit · new URL(path, import.meta.url) |
| 15 | `vite-15-glob-imports.html` | Glob Imports | import.meta.glob · eager · import: 'default' · query · caseSensitive · !negative patterns |
| 16 | `vite-16-json-wasm-workers.html` | JSON, WebAssembly & Web Workers | named JSON imports · .wasm?init · Wasm ESM import · ?worker · new Worker(new URL()) · worker.format |
| 17 | `vite-17-dynamic-imports.html` | Dynamic Imports & Preloading | import() · variables in import() · /* @vite-ignore */ · modulepreload · build.modulePreload · vite:preloadError |

### Group 5: CSS & Styling (Sheets 18–20)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 18 | `vite-18-css-modules.html` | CSS & CSS Modules | import './x.css' · *.module.css · ?inline · @import inlining · url() rebasing · css.modules |
| 19 | `vite-19-preprocessors-lightningcss.html` | Preprocessors, PostCSS & Lightning CSS | sass-embedded · less · postcss.config.js · css.transformer: 'lightningcss' · css.preprocessorOptions · css.devSourcemap |
| 20 | `vite-20-tailwind-css-build.html` | Tailwind & CSS Build Options | @tailwindcss/vite · @import "tailwindcss" · build.cssCodeSplit · build.cssMinify · cssTarget |

### Group 6: Building for Production (Sheets 21–26)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 21 | `vite-21-build-basics.html` | Build Basics | vite build · outDir · assetsDir · emptyOutDir · build.sourcemap · build.manifest · build.target |
| 22 | `vite-22-rolldown-options.html` | Rolldown Options & Chunking | build.rolldownOptions · input (multi-page) · output.codeSplitting · chunkFileNames · external · manualChunks (deprecated) |
| 23 | `vite-23-minify-bundle-size.html` | Minification & Bundle Size | build.minify (Oxc) · minify.compress.drop · treeshake · chunkSizeWarningLimit · bundle analysis · build.chunkImportMap |
| 24 | `vite-24-library-mode.html` | Library Mode | build.lib · entry · formats · fileName · external · peerDependencies · package.json exports |
| 25 | `vite-25-preview-deploy.html` | Preview & Static Deployment | vite preview · preview.port · base for subpaths · SPA fallback · GitHub Pages · Netlify / Vercel · cache headers |
| 26 | `vite-26-browser-support.html` | Browser Support & Legacy Builds | 'baseline-widely-available' · build.target · @vitejs/plugin-legacy · modulePreload polyfill · no ES5 output |

### Group 7: Plugins (Sheets 27–30)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 27 | `vite-27-using-plugins.html` | Using Plugins | plugins array · enforce: 'pre' / 'post' · apply: 'build' · conditional plugins · Rollup plugin compatibility · plugin order |
| 28 | `vite-28-framework-plugins.html` | Framework Plugins | @vitejs/plugin-react v6 · reactCompilerPreset · @vitejs/plugin-vue · @sveltejs/vite-plugin-svelte · vite-plugin-solid |
| 29 | `vite-29-writing-plugins.html` | Writing Plugins: Core Hooks | name · resolveId · load · transform · virtual modules (\0) · config · configResolved |
| 30 | `vite-30-plugin-server-hooks.html` | Writing Plugins: Server & HTML Hooks | configureServer · server.middlewares · transformIndexHtml · hotUpdate · this.environment · vite-plugin-inspect |

### Group 8: SSR & Advanced (Sheets 31–34)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 31 | `vite-31-ssr.html` | Server-Side Rendering | middlewareMode · ssrLoadModule · entry-server / entry-client · vite build --ssr · ssr.noExternal · ssrManifest |
| 32 | `vite-32-environment-api.html` | Environment API | environments · client / ssr · createRunnableDevEnvironment · ModuleRunner · per-environment config · experimental status |
| 33 | `vite-33-javascript-api.html` | JavaScript API | createServer() · build() · preview() · resolveConfig() · mergeConfig() · loadEnv() · transformWithOxc() |
| 34 | `vite-34-performance.html` | Performance & Bundled Dev Mode | experimental.bundledDev · --experimental-bundle · server.warmup · barrel files · --profile · Vite Devtools |

### Group 9: Testing, Debugging & Migration (Sheets 35–37)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 35 | `vite-35-vitest.html` | Testing with Vitest | vitest · test block in vite.config · vitest/config types · environment: 'jsdom' · vi.mock · coverage |
| 36 | `vite-36-troubleshooting.html` | Debugging & Troubleshooting | --debug · DEBUG=vite:* · server.forwardConsole · CJS default import · legacy.inconsistentCjsInterop · BundleError |
| 37 | `vite-37-migrating-vite8.html` | Migrating to Vite 8 | rollupOptions → rolldownOptions · esbuild → oxc · esbuildOptions → rolldownOptions · manualChunks → codeSplitting · minify defaults · target bump |

### Group 10: Quick Reference (Sheets 38–39)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 38 | `vite-38-quickref-cli-config.html` | Quick Reference: CLI & Config | CLI flags · config skeleton · server options · build options · resolve / css options · defaults |
| 39 | `vite-39-quickref-imports-api.html` | Quick Reference: Imports, Env & Plugin API | import suffixes · import.meta.glob · import.meta.env · import.meta.hot · plugin hooks · JS API functions |

Dense tables only. Sheet 38 covers what you type and configure; sheet 39 covers what you write in source and plugin code.
