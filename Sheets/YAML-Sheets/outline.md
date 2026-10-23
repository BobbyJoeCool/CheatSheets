# YAML Reference Guide Outline (14 sheets)

## Metadata

- **Group it belongs to:** Markup & Notation
- **Folder Directory:** `Sheets/YAML-Sheets/yaml-##-[slug].html`
- **Groups:** 1
- **Sheets:** 14
- **Drafted Date:** 2026-10-02 (re-drafted after the sheets were live)
- **Verified-Finalized Date:** 2026-10-02
- **Expanded:** 2026-10-23 (new topic sheets added before the quick references; quick references renumbered)

## Basic Information

YAML syntax rules, scalars and collections, multiline strings, anchors and merges, tags and schemas, CI/CD and Kubernetes patterns, and tooling, validation and language integration.

## Differences in Layout from Basic Structure

Most sheets use the standard four-row layout (Description | Notes, Code | Explain, Tables, Mistakes | Tips | Summary).

New sheets 09–12 combine rows 1–2 to fit (left: Description → Notes → Explain; right: Code).

The set is small enough to be a single group.

## Groups

### Group 1: All Sheets (Sheets 01–14)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `yaml-01-basics.html` | Basics & Syntax Rules | syntax · indentation · document markers · comments · whitespace |
| 02 | `yaml-02-scalars.html` | Scalars & Data Types | string · integer · float · boolean · null · timestamp · !! tags |
| 03 | `yaml-03-collections.html` | Collections — Sequences & Mappings | sequences · mappings · nesting · block style · flow style |
| 04 | `yaml-04-strings.html` | String Styles & Multiline | plain · quoted · literal block \| · folded block > · chomping · escape sequences |
| 05 | `yaml-05-anchors.html` | Anchors, Aliases & Merges | & anchor · * alias · &lt;&lt; merge key · DRY config · override · multiple merges |
| 06 | `yaml-06-schema.html` | Schema, Tags & Directives | !! tags · %YAML · %TAG · core schema · custom tags · multi-document · Norway problem |
| 07 | `yaml-07-real-world.html` | Real-World YAML Patterns | GitHub Actions · Docker Compose · Kubernetes · Ansible · OpenAPI · env config |
| 08 | `yaml-08-tooling.html` | Tooling, Validation & Language Integration | yamllint · PyYAML · js-yaml · SnakeYAML · YAML↔JSON · validation · editors |
| 09 | `yaml-09-gotchas.html` | Type Gotchas & Quoting | Norway problem · yes / no / on / off · octal · sexagesimal · version strings · when to quote |
| 10 | `yaml-10-templating.html` | Templating & Config Layering | ${VAR:-default} · .env · compose override · Helm {{ .Values }} · -f values.yaml · Kustomize overlays |
| 11 | `yaml-11-yq.html` | yq — Query & Edit YAML | yq eval · select() · = · \|= · del() · -i · -o=json · ea · * merge · strenv() |
| 12 | `yaml-12-editor-schemas-ci.html` | Editor Schemas & CI Linting | # yaml-language-server: $schema · SchemaStore · yaml.schemas · .yamllint · pre-commit · check-jsonschema |
| 13 | `yaml-13-quick-reference-syntax-types.html` | Quick Reference — Syntax & Types | structure · scalars · collections · quoting · block scalars · anchors & merges · tags · type gotchas |
| 14 | `yaml-14-quick-reference-patterns-tooling.html` | Quick Reference — Patterns & Tooling | Docker Compose · GitHub Actions · Kubernetes · yq · yamllint · parsers by language · schemas · YAML vs JSON |
