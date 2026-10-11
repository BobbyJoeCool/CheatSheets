# YAML Reference Guide Outline (8 sheets)

## Metadata

- **Group it belongs to:** Markup & Notation
- **Folder Directory:** `Sheets/YAML-Sheets/yaml-##-[slug].html`
- **Groups:** 1
- **Sheets:** 8
- **Drafted Date:** 2026-10-02 (re-drafted after the sheets were live)
- **Verified-Finalized Date:** 2026-10-02

## Basic Information

YAML syntax rules, scalars and collections, multiline strings, anchors and merges, tags and schemas, CI/CD and Kubernetes patterns, and tooling, validation and language integration.

## Differences in Layout from Basic Structure

None. Uses the standard four-row layout (Description | Notes, Code | Explain, Tables, Mistakes | Tips | Summary).

The set is small enough to be a single group.

## Groups

### Group 1: All Sheets (Sheets 01–08)

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
