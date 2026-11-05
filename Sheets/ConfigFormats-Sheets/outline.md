# Config Formats Reference Guide Outline (22 sheets)

## Metadata

- **Group it belongs to:** Markup & Notation
- **Folder Directory:** `Sheets/ConfigFormats-Sheets/cfg-##-[slug].html`
- **PDF Name:** `Config Formats Reference Guide.pdf`
- **Groups:** 7
- **Sheets:** 22
- **Drafted Date:** 2026-11-03
- **Verified-Finalized Date:**

## Basic Information

A reference for the files that configure projects and tools. It covers the formats without a set of their own (TOML, INI, `.properties`, `.env`), how environment variables and config layering work, the real-world config files a developer edits every week (`package.json`, `tsconfig.json`, `pyproject.toml`, Compose files, workflow files, dotfiles), and how to validate and convert config. Aimed at intermediate developers.

JSON, YAML and XML already have their own sets in Markup & Notation, so this set does not re-teach them. Sheets 11–12 are one-page "for config" primers that cover only what matters in config files (comments, JSONC / JSON5, `$schema`, YAML's type traps) and point to those sets for depth. Targets TOML 1.1.0 (multi-line inline tables, new escapes), with notes where tools still only read TOML 1.0.

Kept small (22 sheets) with a 2-page quick reference at the end.

## Differences in Layout from Basic Structure

- **Extra boxes:** **Same Data In…** (`id="same"`) and **Gotcha** (`id="gotcha"`) in Row 2 under Code Explained on 01–20 · **Parse It** (`id="parse"`) in Row 1 as a third column on selected sheets. None on the quick references (21–22). Details below.
- Groups replace the standard language template: choosing a format → TOML → the simple key/value formats → JSON / YAML for config → real-world files → validation and tooling → quick reference.
- Code blocks use the format itself with the matching Prism language (`toml`, `ini`, `properties`, `bash` for `.env`, `json`, `yaml`).
- Primer sheets (11–12) end their Notes with links to the JSON and YAML sets (`../JSON-Sheets/…`, `../YAML-Sheets/…`). Real-world file sheets (13–18) link to the set that owns the tool (Node, JS/TS, Python, Docker, GitHub).
- `cfg-cheatsheet.css` adds `.section-same`, `.section-gotcha` and `.section-parse` styles with their own accent colors.

### Same Data In… box (`id="same"`, 01–20)

- `<section class="section-notes section-same" id="same">`, title **Same Data In…**.
- The sheet's main example (or a key part of it) rewritten in 2–3 other formats, as short code snippets: TOML ↔ YAML ↔ JSON ↔ INI / `.properties` / `.env` as they apply.
- On the real-world file sheets (13–18) the box shows the same job in another ecosystem instead (`package.json` scripts ↔ `pyproject.toml` ↔ Maven `pom.xml` / Gradle).

### Gotcha box (`id="gotcha"`, 01–20)

- `<section class="section-notes section-gotcha" id="gotcha">`, title **Gotcha**.
- 1–3 traps specific to the sheet's topic, each with the fix: YAML reading `NO` as `false` · TOML not allowing a table to be defined twice · `.env` values not being exported to child processes · `.properties` files read as ISO-8859-1 by older Java.
- Not a repeat of Common Mistakes: Gotcha is about the format or tool surprising you, Mistakes is about what people write wrong.

### Parse It box (`id="parse"`, Row 1, selected sheets)

- `<section class="section-notes section-parse" id="parse">`, title **Parse It**, Row 1 as a third column (`col-1-3`).
- Exactly three one-line entries, always in this order: **Python** · **JavaScript** · **Java**, each showing the standard or most common way to load that format (`tomllib.load` · `smol-toml` / `@iarna/toml` · `tomlj` / Jackson TOML).

| # | Parse It content |
|---|---|
| 03 | TOML: `tomllib` (3.11+, read-only) · `smol-toml` · Jackson `TomlMapper` |
| 07 | INI: `configparser` · `ini` package · `ini4j` |
| 08 | `.properties`: `jproperties` · `properties-reader` · `java.util.Properties.load` |
| 09 | `.env`: `python-dotenv` · Node `--env-file` / `process.loadEnvFile()` · `dotenv-java` |
| 11 | JSON with comments: `json5` / `commentjson` · `jsonc-parser` / `JSON5.parse` · Jackson `ALLOW_COMMENTS` |
| 12 | YAML safely: `yaml.safe_load` · `yaml` (eemeli) `parse` · SnakeYAML `SafeConstructor` |
| 15 | `pyproject.toml` from a script: `tomllib` · `smol-toml` · `tomlj` |

## Groups

### Group 1: Choosing a Format (Sheets 01–02)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `cfg-01-config-formats-overview.html` | Config Formats at a Glance | JSON · YAML · TOML · INI · `.properties` · `.env` · XML · who uses which |
| 02 | `cfg-02-choosing-a-format.html` | Choosing & Comparing Formats | human-edited vs machine-written · typed vs strings-only · comments · deep nesting · tooling support · decision table |

### Group 2: TOML (Sheets 03–06)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 03 | `cfg-03-toml-basics.html` | TOML Basics | key = value · bare / quoted / dotted keys · strings · integers / floats · booleans · comments `#` · UTF-8 |
| 04 | `cfg-04-toml-tables.html` | TOML Tables & Inline Tables | `[table]` · dotted-key tables · `[a.b.c]` · inline `{ }` tables · multi-line inline tables (1.1) · defining a table once |
| 05 | `cfg-05-toml-arrays.html` | TOML Arrays & Arrays of Tables | arrays · mixed-type arrays · trailing commas · `[[array.of.tables]]` · nested arrays of tables · when to use which |
| 06 | `cfg-06-toml-strings-dates.html` | TOML Strings, Dates & Versions | basic vs literal strings · multi-line `"""` / `'''` · escapes (`\e`, `\xHH` in 1.1) · offset / local date-time · TOML 1.0 vs 1.1 |

### Group 3: INI, Properties & Environment (Sheets 07–10)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 07 | `cfg-07-ini.html` | INI Files | `[section]` · `key = value` / `key: value` · `;` and `#` comments · no standard spec · interpolation · `setup.cfg` · `.gitconfig` |
| 08 | `cfg-08-properties.html` | Java .properties Files | `key=value` · `:` and space separators · `\` line continuation · escapes · encoding (UTF-8 vs ISO-8859-1) · Spring `application.properties` |
| 09 | `cfg-09-dotenv.html` | .env Files | `KEY=value` · quoting · `export` prefix · variable expansion · `.env.example` · never commit secrets · loaders per stack |
| 10 | `cfg-10-env-vars-layering.html` | Environment Variables & Config Layering | defaults → file → env → CLI flags · 12-factor config · `NODE_ENV` / profiles · naming (`APP_DB__HOST`) · secrets managers · precedence tables |

### Group 4: JSON & YAML for Config (Sheets 11–12)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 11 | `cfg-11-json-for-config.html` | JSON for Config (JSONC & JSON5) | no comments in JSON · JSONC (`tsconfig`, VS Code) · JSON5 · trailing commas · `$schema` key · when JSON is the wrong choice |
| 12 | `cfg-12-yaml-for-config.html` | YAML for Config — Traps | implicit typing (`NO`, `on`, `010`, `1e3`) · YAML 1.1 vs 1.2 · quoting rules · indentation · anchors for DRY config · safe loading |

Primers only. Both point to the JSON and YAML sets for the full syntax.

### Group 5: Real-World Config Files (Sheets 13–18)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 13 | `cfg-13-package-json.html` | package.json | `name` / `version` · `type: "module"` · `scripts` · `dependencies` vs `devDependencies` · semver ranges · `engines` · `exports` |
| 14 | `cfg-14-tsconfig-json.html` | tsconfig.json & jsconfig.json | `compilerOptions` · `target` / `module` / `moduleResolution` · `strict` · `paths` · `include` / `exclude` · `extends` |
| 15 | `cfg-15-pyproject-toml.html` | pyproject.toml | `[project]` · `dependencies` · `[build-system]` · `[project.scripts]` · `[tool.*]` (ruff · pytest · mypy) · dependency groups |
| 16 | `cfg-16-compose-yaml.html` | compose.yaml (Docker Compose) | `services` · `image` / `build` · `ports` · `environment` / `env_file` · `volumes` · `depends_on` · `profiles` |
| 17 | `cfg-17-workflow-yaml.html` | GitHub Actions Workflow Files | `on` triggers · `jobs` · `runs-on` · `steps` · `uses` / `with` · `${{ }}` expressions · `env` / `secrets` |
| 18 | `cfg-18-dotfiles.html` | Project Dotfiles | `.editorconfig` · `.gitignore` patterns · `.gitattributes` · `.npmrc` · `.nvmrc` / `.python-version` · `.prettierrc` |

Each sheet covers the file's structure and most-used keys, then links to the set that owns the tool (Node, JS/TS, Python, Docker, GitHub, Git).

### Group 6: Validation & Tooling (Sheets 19–20)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 19 | `cfg-19-validation-schemas.html` | Validating Config | JSON Schema for any format · SchemaStore · `$schema` / `# yaml-language-server` comments · yamllint · Taplo · `check-jsonschema` · editor validation |
| 20 | `cfg-20-converting-querying.html` | Converting & Querying Config | `jq` · `yq` · `dasel` · `taplo` · format conversion · reading a key in scripts · round-tripping and comments loss |

### Group 7: Quick Reference (Sheets 21–22)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 21 | `cfg-21-quick-ref-syntax.html` | Quick Reference — Syntax Side by Side | scalars · null · lists · maps · comments · multi-line text · JSON / YAML / TOML side by side · INI / `.properties` / `.env` |
| 22 | `cfg-22-quick-ref-files.html` | Quick Reference — Common Config Files | file → format → owning tool → key settings · where each file lives · which set covers it |

Dense tables, no explanations; every row points back to the sheet with details.
