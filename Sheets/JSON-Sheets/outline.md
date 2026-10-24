# JSON Reference Guide Outline (15 sheets)

## Metadata

- **Group it belongs to:** Markup & Notation
- **Folder Directory:** `Sheets/JSON-Sheets/json-##-[slug].html`
- **Groups:** 1
- **Sheets:** 15
- **Drafted Date:** 2026-09-27 (re-drafted after the sheets were live)
- **Verified-Finalized Date:** 2026-09-27
- **Expanded:** 2026-10-23 (new topic sheets added before the quick references; quick references renumbered)

## Basic Information

A short set covering JSON syntax and data types, objects and arrays, JSON Schema, parsing and serialization across languages, JSONPath and jq, JSON in REST APIs, and related formats (JSON5, JSONC, NDJSON, BSON, JWT, GeoJSON).

## Differences in Layout from Basic Structure

Most sheets use the standard four-row layout (Description | Notes, Code | Explain, Tables, Mistakes | Tips | Summary).

New sheets 09–11 combine rows 1–2 to fit (left: Description → Notes → Explain; right: Code).

The set is small enough to be a single group.

## Groups

### Group 1: All Sheets (Sheets 01–15)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `json-01-syntax.html` | Syntax & Structure | spec overview · key-value pairs · nesting · whitespace · encoding · escape sequences |
| 02 | `json-02-values.html` | Values & Data Types | string · number · boolean · null · array · object · type rules · edge cases |
| 03 | `json-03-objects.html` | Objects & Arrays | object syntax · array syntax · nested structures · mixed types · empty values · ordering |
| 04 | `json-04-schema.html` | JSON Schema | type validation · required · properties · $ref · $defs · allOf · anyOf · oneOf |
| 05 | `json-05-parsing.html` | Parsing & Serialization | parse · stringify · pretty-print · error handling · JS · Python · PHP · Ruby · Go |
| 06 | `json-06-paths.html` | JSONPath & Querying | JSONPath syntax · dot notation · wildcards · filters · recursive descent · jq |
| 07 | `json-07-apis.html` | JSON in APIs & HTTP | REST conventions · Content-Type · request/response shapes · pagination · RFC 7807 errors |
| 08 | `json-08-advanced.html` | Advanced & Related Formats | JSON5 · JSONC · NDJSON · BSON · JWT · GeoJSON · format selection guide |
| 09 | `json-09-schema-in-practice.html` | JSON Schema in Practice | $schema drafts · if / then / else · dependentRequired · unevaluatedProperties · Ajv · jsonschema |
| 10 | `json-10-typed-validation.html` | Typed Validation in Code | z.object · safeParse · z.infer · BaseModel · model_validate_json · ValidationError |
| 11 | `json-11-openapi.html` | OpenAPI & JSON Bodies | openapi: 3.1 · requestBody · responses · components/schemas · $ref · readOnly · examples |
| 12 | `json-12-patch.html` | JSON Patch & Merge Patch | RFC 6902 · op · path · add · remove · replace · move · copy · test · RFC 7396 merge patch |
| 13 | `json-13-gotchas.html` | Gotchas & Interop | Number.MAX_SAFE_INTEGER · BigInt · dates · NaN · undefined · duplicate keys · BOM · key order |
| 14 | `json-14-quick-reference-syntax-schema.html` | Quick Reference — Syntax & Schema | syntax rules · value types · escapes · JSON Schema types · object & array keywords · composition · formats · common errors |
| 15 | `json-15-quick-reference-parsing-apis.html` | Quick Reference — Parsing, Querying & APIs | parse & serialize by language · JSON.stringify options · JSONPath · jq · Pointer & Patch · HTTP & APIs · related formats |
