# HCL Reference Guide Outline (16 sheets)

## Metadata

- **Group it belongs to:** Markup & Notation
- **Folder Directory:** `Sheets/HCL-Sheets/hcl-##-[slug].html`
- **PDF Name:** `HCL Reference Guide.pdf`
- **Groups:** 1
- **Sheets:** 16
- **Drafted Date:** 2026-11-19
- **Verified-Finalized Date:**

## Basic Information

HCL (HashiCorp Configuration Language) as a language: attributes and blocks, identifiers and literals, collections and types, string templates and heredocs, operators and conditionals, `for` expressions and splats, references and function calls, the HCL JSON syntax, HCL in tools other than Terraform, parsing and generating HCL in code, gotchas, and tooling. Targets HCL 2 (`hashicorp/hcl/v2`), with notes where HCL 1 syntax differs.

This set is kept separate from Terraform. It teaches what the HCL spec itself defines. Things the application supplies (variables, the function library, which block types exist) are explained as "the app decides", with Terraform named only to point out where it adds something. Terraform's providers, resources, modules, state and built-in functions belong in a Terraform set of their own. Examples use neutral configs plus Packer, Nomad, Vault and Docker Bake files.

## Differences in Layout from Basic Structure

- **Extra boxes:** **Same Data In…** (`id="same"`) and **Gotcha** (`id="gotcha"`) in Row 2 under Code Explained on 01–14. None on the quick references (15–16). Details below.
Most sheets use the standard four-row layout (Description | Notes, Code | Explain + Same Data In… + Gotcha, Tables, Mistakes | Tips | Summary).

Code blocks use Prism's `hcl` language. Sheet 10 also uses `json`, and sheet 12 uses `go`, `python` and `javascript` for the loader snippets.

`hcl-cheatsheet.css` adds `.section-same` and `.section-gotcha` styles with the same accents as the Config Formats set.

### Same Data In… box (`id="same"`, 01–14)

- `<section class="section-notes section-same" id="same">`, title **Same Data In…**.
- The sheet's main example (or a key part of it) as short one-line snippets in HCL's own JSON syntax plus YAML or TOML. Where a template, `for` expression or function call has no static equivalent, the box shows the value it produces.
- On 10 (JSON syntax) the box shows YAML and TOML instead. On 11 it shows the same job in a non-HCL tool (Nomad job ↔ Kubernetes YAML, `docker-bake.hcl` ↔ `compose.yaml`). On 12 it shows what the decoder hands back.

### Gotcha box (`id="gotcha"`, 01–14)

- `<section class="section-notes section-gotcha" id="gotcha">`, title **Gotcha**.
- 1–3 traps specific to the sheet's topic, each with the fix: `tags = { }` vs `tags { }` · `"${var}"` keeping its original type (it doesn't become a string) · errors in the unselected branch of a conditional · `<<-` heredocs with tabs.
- Not a repeat of Common Mistakes: Gotcha is the language or an app surprising you, Mistakes is what people write wrong. On 13 the box holds app-specific surprises the main tables don't cover.

The set is small enough to be a single group.

## Groups

### Group 1: All Sheets (Sheets 01–16)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `hcl-01-basics.html` | Basics & Syntax Rules | what HCL is · native syntax vs JSON syntax · HCL 1 vs HCL 2 · `#` `//` `/* */` comments · `.hcl` files · UTF-8 · newlines end attributes · tools that use HCL |
| 02 | `hcl-02-attributes-blocks.html` | Attributes & Blocks | `name = expression` · each attribute once per body · block type · quoted and bare labels · nested bodies · one-line blocks · repeated blocks · attribute vs block |
| 03 | `hcl-03-identifiers-literals.html` | Identifiers & Literal Values | identifier rules · dashes allowed, underscores idiomatic · no reserved words · numbers (decimal, exponent, arbitrary precision) · `true` / `false` · `null` · strings only as templates |
| 04 | `hcl-04-collections-types.html` | Collections & Types | tuples `[ ]` · objects `{ }` · `=` or `:` in objects · bare vs `(expr)` keys · list · set · map · object · tuple · type conversion and unification · type constraints `list(string)` |
| 05 | `hcl-05-strings-templates.html` | Strings & Templates | quoted strings · escapes `\n` `\"` `\uNNNN` · `${ }` interpolation · `$${` and `%%{` escapes · `%{ if }` / `%{ for }` directives · `~` strip markers · single-interpolation unwrap keeps the type |
| 06 | `hcl-06-heredocs.html` | Heredocs & Multi-line Text | `<<EOF` · `<<-EOF` indent stripping · templates inside heredocs · embedding JSON, YAML and scripts · trailing newline · choosing a delimiter |
| 07 | `hcl-07-operators-conditionals.html` | Operators & Conditionals | arithmetic `* / % + -` · comparison · `==` / `!=` · `&&` `\|\|` `!` · precedence table · `cond ? a : b` · branches must unify to one type · errors in the unselected branch |
| 08 | `hcl-08-for-splat.html` | For Expressions & Splats | `[for x in xs : …]` · `{for k, v in m : k => v}` · index and value variables · `if` filter · `...` grouping · `.*` attribute-only splat · `[*]` full splat · splat on a single value |
| 09 | `hcl-09-references-functions.html` | References, Indexing & Function Calls | variables come from the app · scopes and shadowing · `.attr` · `[key]` · legacy `.0` index · function calls · `...` argument expansion · function table defined by the app · common extensions (`try` / `can`, `dynamic` blocks, type expressions) |
| 10 | `hcl-10-json-syntax.html` | HCL JSON Syntax | `.hcl.json` files · blocks as nested objects · labels as keys · strings read as templates · arrays for repeated blocks · comment keys (`"//"` in Terraform) · when to generate JSON instead |
| 11 | `hcl-11-in-the-wild.html` | HCL Beyond Terraform | Packer `.pkr.hcl` · Nomad job specs `.nomad.hcl` · Vault server config · Consul agent config · Boundary · Docker Buildx `docker-bake.hcl` · what each tool adds on top of HCL |
| 12 | `hcl-12-parsing.html` | Parsing & Generating HCL in Code | Go `hclsimple.DecodeFile` · `gohcl` struct tags · `hclparse` · `hclwrite` (keeps comments) · `cty` values · Python `python-hcl2` (`hcl2.load`) · JS `@cdktf/hcl2json` · diagnostics |
| 13 | `hcl-13-gotchas.html` | Gotchas & Common Errors | `tags = { }` vs `tags { }` · duplicate attribute names · single quotes not allowed · needless `"${var}"` wrapping · `null` removes an attribute · type mismatch in conditionals · splat on `null` · HCL 1 syntax in HCL 2 · tabs in `<<-` heredocs |
| 14 | `hcl-14-tooling.html` | Formatting, Editing & Tooling | `hclfmt` · `packer fmt` / `nomad fmt` · `hcledit` · `hcl2json` · VS Code HashiCorp HCL extension · `.editorconfig` · pre-commit hooks · converting to and from JSON |
| 15 | `hcl-15-quick-reference-syntax-expressions.html` | Quick Reference — Syntax & Expressions | comments · attributes and blocks · literals · collections · types · operators and precedence · conditionals · `for` expressions · splats · indexing |
| 16 | `hcl-16-quick-reference-templates-json-tooling.html` | Quick Reference — Templates, JSON & Tooling | interpolation and directives · strip markers · heredocs · native vs JSON side by side · tools by file type · parsers by language · formatters · common errors and fixes |
