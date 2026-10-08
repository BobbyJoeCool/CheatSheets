# CSS Systems Reference — Outline

Generated from `manifest.json`; keep the two in sync when sheets are added, renamed or reordered.

## Profile

- **Collection section:** Web Technologies
- **Status:** Complete
- **Sheets:** 46 across 6 groups
- **File prefix:** `csys` (`csys-##-[slug].html`)
- **Folder:** `Sheets/CSYS-Sheets/`
- **Coverage:** utility-first (Tailwind, UnoCSS), component frameworks (Bootstrap, Bulma, Foundation), CSS-in-JS (Styled Components, CSS Modules), preprocessors (Sass/SCSS, PostCSS), design tokens & architecture (Open Props, ITCSS), comparisons & migration

---

## Group 1 — Utility-First (01–08)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `csys-01-tailwind-setup.html` | Tailwind Setup &amp; Config | install · tailwind.config.js · @tailwind directives · JIT · CLI |
| 02 | `csys-02-tailwind-layout.html` | Tailwind Layout &amp; Spacing | flex · grid · gap · padding · margin · sizing |
| 03 | `csys-03-tailwind-typography.html` | Tailwind Typography &amp; Colors | font-size · font-weight · text-color · bg-color · opacity |
| 04 | `csys-04-tailwind-states.html` | Tailwind States &amp; Responsive | hover: · focus: · sm: · md: · lg: · dark: · group |
| 05 | `csys-05-tailwind-customization.html` | Tailwind Customization &amp; Plugins | extend · @apply · theme() · plugin() · arbitrary values |
| 06 | `csys-06-unocss-setup.html` | UnoCSS Setup &amp; Presets | uno.config.ts · presetUno · presetMini · Vite plugin |
| 07 | `csys-07-unocss-utilities.html` | UnoCSS Utilities &amp; Shortcuts | shortcuts · variants · presetIcons · attributify |
| 08 | `csys-08-unocss-customization.html` | UnoCSS Custom Rules &amp; Theming | rules · theme · presetAttributify · safelist |

## Group 2 — Component Frameworks (09–19)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 09 | `csys-09-bootstrap-setup.html` | Bootstrap Setup &amp; Grid | CDN · npm · container · row · col-* · breakpoints |
| 10 | `csys-10-bootstrap-components.html` | Bootstrap Core Components | btn · card · modal · navbar · alert · badge |
| 11 | `csys-11-bootstrap-utilities.html` | Bootstrap Utility Classes | d-* · m-* · p-* · text-* · flex · gap |
| 12 | `csys-12-bootstrap-forms.html` | Bootstrap Forms &amp; Validation | form-control · form-check · is-valid · is-invalid · floating labels |
| 13 | `csys-13-bootstrap-customize.html` | Bootstrap Sass Customization | $primary · $enable-* · @import partial · maps |
| 14 | `csys-14-bulma-setup.html` | Bulma Setup &amp; Columns | columns · column · is-* · is-offset-* · is-gapless |
| 15 | `csys-15-bulma-components.html` | Bulma Components &amp; Elements | button · card · navbar · modal · message · tag |
| 16 | `csys-16-bulma-customize.html` | Bulma Theming &amp; Modifiers | $primary · is-light · is-dark · CSS vars · dark mode |
| 17 | `csys-17-foundation-setup.html` | Foundation Setup &amp; XY Grid | grid-container · grid-x · cell · small-* · medium-* |
| 18 | `csys-18-foundation-components.html` | Foundation UI Components | button · callout · reveal · off-canvas · sticky · motion-ui |
| 19 | `csys-19-foundation-settings.html` | Foundation Sass Settings | _settings.scss · $breakpoints · $global-* · component vars |

## Group 3 — CSS-in-JS (20–26)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 20 | `csys-20-styled-setup.html` | Styled Components Setup &amp; Basics | styled.div · css · createGlobalStyle · keyframes |
| 21 | `csys-21-styled-props.html` | Styled Components Props &amp; Dynamic Styles | props interpolation · $transient · shouldForwardProp · attrs |
| 22 | `csys-22-styled-theming.html` | Styled Components Theming &amp; Global | ThemeProvider · useTheme · createGlobalStyle · dark mode |
| 23 | `csys-23-styled-advanced.html` | Styled Components Advanced Patterns | as · component selector · ServerStyleSheet · object syntax |
| 24 | `csys-24-modules-basics.html` | CSS Modules Basics &amp; Scoping | styles.className · :local · :global · composes · .module.css |
| 25 | `csys-25-modules-composition.html` | CSS Modules Composition &amp; Values | composes: from · @value · CSS variables · Sass modules |
| 26 | `csys-26-modules-config.html` | CSS Modules Config &amp; Tooling | localIdentName · camelCase · Vite cssModules · TypeScript |

## Group 4 — Preprocessors (27–34)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 27 | `csys-27-sass-setup.html` | Sass/SCSS Setup &amp; Syntax | dart sass · $variable · &amp; · @use · interpolation · CLI |
| 28 | `csys-28-sass-variables.html` | Sass/SCSS Variables &amp; Data Types | $var · !default · maps · lists · colors · numbers |
| 29 | `csys-29-sass-nesting.html` | Sass/SCSS Nesting &amp; BEM | &amp; · &amp;__ · &amp;-- · @at-root · nesting rules · @media |
| 30 | `csys-30-sass-mixins.html` | Sass/SCSS Mixins &amp; Functions | @mixin · @include · @function · @return · @content · @each |
| 31 | `csys-31-sass-modules.html` | Sass/SCSS Module System | @use · @forward · namespace · private · index files |
| 32 | `csys-32-postcss-setup.html` | PostCSS Setup &amp; Config | postcss.config.js · plugins · autoprefixer · preset-env · Vite |
| 33 | `csys-33-postcss-plugins.html` | PostCSS Essential Plugins | autoprefixer · preset-env · cssnano · purgecss · stylelint |
| 34 | `csys-34-postcss-authoring.html` | PostCSS Writing Plugins | postcss() · Declaration · walkDecls · replaceWith · plugin API |

## Group 5 — Design Tokens & Architecture (35–40)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 35 | `csys-35-openprops-setup.html` | Open Props Setup &amp; Import | open-props · @import · normalize · postcss-jit-props · CDN |
| 36 | `csys-36-openprops-tokens.html` | Open Props Token Reference | --size · --font-size · --color · --shadow · --radius · --ease |
| 37 | `csys-37-openprops-adaptive.html` | Open Props Adaptive &amp; Dark Mode | --surface-* · --text-* · semantic tokens · prefers-color-scheme |
| 38 | `csys-38-itcss-architecture.html` | ITCSS Architecture &amp; Layers | settings · tools · generic · elements · objects · components · utilities |
| 39 | `csys-39-itcss-implementation.html` | ITCSS Implementation Patterns | @layer · o- · c- · u- · BEM + ITCSS · main.scss |
| 40 | `csys-40-itcss-at-scale.html` | ITCSS Scaling &amp; Team Workflow | decision tree · Stylelint · token pipeline · ADR · style guide |

## Group 6 — Crosswalk Comparisons (41–46)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 41 | `csys-41-compare-utility.html` | Utility Class Comparison | Tailwind vs UnoCSS · class syntax · config · JIT · DX |
| 42 | `csys-42-compare-component.html` | Component Framework Comparison | Bootstrap vs Bulma vs Foundation · grid · JS · Sass |
| 43 | `csys-43-compare-cssinjs.html` | CSS-in-JS Comparison | styled-components vs Emotion vs Vanilla Extract vs CSS Modules |
| 44 | `csys-44-compare-preprocessor.html` | Preprocessor Comparison | Sass vs PostCSS vs Less · variables · nesting · pipeline |
| 45 | `csys-45-toolchain-integration.html` | Toolchain Integration Reference | Vite · Next.js · webpack · Astro · SvelteKit · Nuxt |
| 46 | `csys-46-migration-guide.html` | Migration &amp; Interop Guide | Bootstrap→Tailwind · Sass→CSS vars · @import→@use · @layer |
