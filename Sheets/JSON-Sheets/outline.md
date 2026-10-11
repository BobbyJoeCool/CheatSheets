# JSON Reference Guide Outline (8 sheets)

## Metadata

- **Group it belongs to:** Markup & Notation
- **Folder Directory:** `Sheets/JSON-Sheets/json-##-[slug].html`
- **Groups:** 1
- **Sheets:** 8
- **Drafted Date:** 2026-09-27 (re-drafted after the sheets were live)
- **Verified-Finalized Date:** 2026-09-27

## Basic Information

A short set covering JSON syntax and data types, objects and arrays, JSON Schema, parsing and serialization across languages, JSONPath and jq, JSON in REST APIs, and related formats (JSON5, JSONC, NDJSON, BSON, JWT, GeoJSON).

## Differences in Layout from Basic Structure

None. Uses the standard four-row layout (Description | Notes, Code | Explain, Tables, Mistakes | Tips | Summary).

The set is small enough to be a single group.

## Groups

### Group 1: All Sheets (Sheets 01–08)

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
