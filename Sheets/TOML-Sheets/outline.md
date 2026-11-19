# TOML Reference Guide Outline (14 sheets)

## Metadata

- **Group it belongs to:** Markup & Notation
- **Folder Directory:** `Sheets/TOML-Sheets/toml-##-[slug].html`
- **PDF Name:** `TOML Reference Guide.pdf`
- **Groups:** 1
- **Sheets:** 14
- **Drafted Date:** 2026-11-19
- **Verified-Finalized Date:**

## Basic Information

TOML syntax rules, keys, value types, string styles and escapes, dates and times, tables, inline tables, arrays and arrays of tables, real-world TOML files (`pyproject.toml`, `Cargo.toml` and others), parsing and writing TOML in code, gotchas, and tooling. Targets TOML 1.1.0 (multi-line inline tables with trailing commas, `\e` and `\xHH` escapes, optional seconds in times), with notes wherever a tool still only reads TOML 1.0.

The Config Formats set gives TOML a four-sheet primer (cfg 03–06) and a `pyproject.toml` sheet (cfg 15). This set is the full reference: each topic those sheets touch gets its own page here, plus parsing, gotchas and tooling, matching the JSON, YAML and XML sets.

## Differences in Layout from Basic Structure

- **Extra boxes:** **Same Data In…** (`id="same"`) and **Gotcha** (`id="gotcha"`) in Row 2 under Code Explained on 01–12. None on the quick references (13–14). Details below.
Most sheets use the standard four-row layout (Description | Notes, Code | Explain + Same Data In… + Gotcha, Tables, Mistakes | Tips | Summary).

Code blocks use Prism's `toml` language. Sheets 09–10 also use `python`, `javascript`, `rust`, `go` and `java` for the loader snippets.

`toml-cheatsheet.css` adds `.section-same` and `.section-gotcha` styles with the same accents as the Config Formats set.

### Same Data In… box (`id="same"`, 01–12)

- `<section class="section-notes section-same" id="same">`, title **Same Data In…**.
- The sheet's main example (or a key part of it) rewritten in 2–3 other formats as short one-line snippets: JSON and YAML always, INI or `.env` where they can hold the data.
- On 09 the box shows the same job in another ecosystem (`Cargo.toml` ↔ `package.json` ↔ `pom.xml`). On 10 it shows the value each loader hands back.

### Gotcha box (`id="gotcha"`, 01–12)

- `<section class="section-notes section-gotcha" id="gotcha">`, title **Gotcha**.
- 1–3 traps specific to the sheet's topic, each with the fix: a table defined twice · keys after an inline table · 1.1 syntax in a 1.0 parser · local date-times with no zone.
- Not a repeat of Common Mistakes: Gotcha is the format or a parser surprising you, Mistakes is what people write wrong. On 11 the box holds parser-specific surprises the main tables don't cover.

The set is small enough to be a single group.

## Groups

### Group 1: All Sheets (Sheets 01–14)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `toml-01-basics.html` | Basics & Syntax Rules | key = value · `#` comments · case sensitivity · UTF-8 · one pair per line · whitespace · `.toml` files · TOML 1.0 vs 1.1 · TOML vs JSON / YAML |
| 02 | `toml-02-keys.html` | Keys — Bare, Quoted & Dotted | bare keys `A-Za-z0-9_-` · basic / literal quoted keys · dotted keys · whitespace around dots · empty quoted key · duplicate keys forbidden · key naming conventions |
| 03 | `toml-03-values.html` | Values & Data Types | string · integer (`0x` / `0o` / `0b`, `_` separators) · float (exponent · `inf` · `nan`) · boolean · date-time · array · inline table · 64-bit limits · no null |
| 04 | `toml-04-strings.html` | String Styles & Escapes | basic `"…"` · literal `'…'` · multi-line `"""` / `'''` · line-ending backslash · first-newline trimming · `\n` `\t` `\u` `\U` · `\e` and `\xHH` (1.1) · Windows paths and regex |
| 05 | `toml-05-dates-times.html` | Dates & Times | offset date-time · local date-time · local date · local time · `T` or space separator · fractional seconds · optional seconds (1.1) · RFC 3339 · how each parser maps them |
| 06 | `toml-06-tables.html` | Tables | `[table]` · `[a.b.c]` · implicit super-tables · dotted keys vs headers · define each table once · keys belong to the last header · ordering and readability |
| 07 | `toml-07-inline-tables.html` | Inline Tables | `{ key = value }` · nesting · multi-line inline tables and trailing commas (1.1) · inline tables are closed (no adding keys later) · inline vs `[table]` · 1.0-only parsers |
| 08 | `toml-08-arrays.html` | Arrays & Arrays of Tables | `[ ]` arrays · mixed types · multi-line and trailing commas · `[[array]]` · nested `[[a.b]]` · sub-tables under an array entry · array of inline tables vs `[[ ]]` |
| 09 | `toml-09-real-world.html` | Real-World TOML Files | `pyproject.toml` · `Cargo.toml` · `ruff.toml` · `uv.toml` · Hugo `hugo.toml` · `netlify.toml` · `wrangler.toml` · Starship · `.cargo/config.toml` |
| 10 | `toml-10-parsing.html` | Parsing & Writing TOML in Code | Python `tomllib` (3.11+, read-only) · `tomli-w` · `tomlkit` (keeps comments) · JS `smol-toml` · Rust `toml` / `toml_edit` · Go `BurntSushi/toml` · Java `tomlj` / Jackson `TomlMapper` · type mapping |
| 11 | `toml-11-gotchas.html` | Gotchas & Common Errors | redefining a table · dotted keys clashing with headers · extending an inline table · `[[ ]]` vs `[ ]` mix-ups · integers past 64-bit · no null (omit the key) · local date-times have no zone · 1.1 syntax in 1.0 parsers |
| 12 | `toml-12-tooling.html` | Tooling, Validation & Formatting | Taplo (`taplo fmt` · `taplo lint`) · Even Better TOML (VS Code) · `#:schema` directive · SchemaStore · `toml-sort` · `yq -p toml` · `dasel` · pre-commit hooks · toml-test suite |
| 13 | `toml-13-quick-reference-syntax-types.html` | Quick Reference — Syntax & Types | keys · strings and escapes · numbers · booleans · dates and times · arrays · tables · inline tables · arrays of tables · 1.0 vs 1.1 differences |
| 14 | `toml-14-quick-reference-files-tooling.html` | Quick Reference — Files & Tooling | `pyproject.toml` · `Cargo.toml` · other common files · parsers by language · Taplo commands · converting to JSON / YAML · common errors and fixes |
