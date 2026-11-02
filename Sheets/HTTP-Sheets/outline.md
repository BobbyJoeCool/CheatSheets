# HTTP & REST APIs Reference Guide Outline (30 sheets)

## Metadata

- **Group it belongs to:** Server & Full-Stack
- **Folder Directory:** `Sheets/HTTP-Sheets/http-##-[slug].html`
- **PDF Name:** `HTTP & REST APIs Reference Guide.pdf`
- **Groups:** 8
- **Sheets:** 30
- **Drafted Date:** 2026-11-02
- **Verified-Finalized Date:**

## Basic Information

Language-agnostic HTTP and web API reference for intermediate readers who build or consume backends. It covers the protocol (methods, status codes, headers, caching, cookies), authentication (sessions, API keys, JWT, OAuth 2.0 with PKCE, OpenID Connect), CORS, REST API design, and a GraphQL section. It is the shared foundation under the Node, Next, Django, Spring, Rails and other backend sets, so those sets can point here instead of re-explaining HTTP.

Targets HTTP semantics as defined in RFC 9110 (HTTP/1.1, HTTP/2 and HTTP/3 share the same semantics), OAuth 2.0 with PKCE as the default for every client (the OAuth 2.1 direction), problem details per RFC 9457, OpenAPI 3.1, and the current GraphQL spec. Scope is the wire and the design rules, not any one framework: no server code in a specific language outside the In Your Stack box. WebSockets and gRPC are mentioned only in passing.

Kept intentionally small (30 sheets), with a 2-page quick reference at the end.

## Differences in Layout from Basic Structure

- **Extra boxes:** **In Your Stack** (`id="stack"`) and **Debug It** (`id="debug"`) in Row 2 under Code Explained · **Security Check** (`id="security"`) in Row 1 as a third column. In Your Stack is on 01–28; the other two are on selected sheets. None on the quick references (29–30). Details below.
- Code blocks show what actually goes over the wire, never a server framework: raw HTTP request/response messages (request line, headers, blank line, body, Prism `http`), `curl` commands (Prism `bash`), JSON bodies, GraphQL SDL and operations (Prism `graphql`), and YAML for OpenAPI. Sheet 03 sets the house style (`>` request lines and `<` response lines in `curl -v` style, `...` for trimmed bodies). Framework code appears only in the In Your Stack box.
- Status code and header sheets lean on compact tables (code · name · when to use · common mistake) rather than long prose.
- Groups replace the standard language template: the set follows the order a request travels (protocol → methods → status → headers → auth → design), then GraphQL, then quick reference.
- Quick-reference sheets (29–30) are dense tables with no Description, footer trio or extra boxes; every row points back to the sheet with details.
- `http-cheatsheet.css` gives the sheet-number badge a teal accent and adds `.section-stack`, `.section-debug` and `.section-security` styles with their own accent colors.

### In Your Stack box (`id="stack"`)

- `<section class="section-notes section-stack" id="stack">`, title **In Your Stack**, Row 2 under Code Explained.
- Exactly six one-line entries, always in this order: **Express** (Node) · **Django** (Django REST Framework where it applies) · **Spring** (Spring Boot) · **Rails** · **ASP.NET** (ASP.NET Core) · **Go** (`net/http`). Each line names the API, setting or idiom that handles the sheet's topic, e.g. `res.status(201).location(url)` · `Response(status=201, headers={...})` · `ResponseEntity.created(uri)` · `head :created, location: url` · `Results.Created(url, obj)` · `w.WriteHeader(http.StatusCreated)`.
- GraphQL sheets (25–28) use each stack's usual GraphQL library: Apollo Server · Strawberry / Graphene · Spring for GraphQL · graphql-ruby · Hot Chocolate · gqlgen.
- On: 01–28

### Debug It box (`id="debug"`)

- `<section class="section-notes section-debug" id="debug">`, title **Debug It**, Row 2 after In Your Stack.
- What the problem looks like in `curl -v` or the DevTools Network tab and how to read it (a CORS preflight failure, 401 vs 403, a stale cached response).
- On: 02, 04, 05, 08, 09, 10, 11, 12, 13, 14, 15, 17, 18, 23, 27, 28

### Security Check box (`id="security"`)

- `<section class="section-notes section-security" id="security">`, title **Security Check**, Row 1 as a third column (`col-1-3`).
- One to three concrete risks for the sheet's topic and the fix (mass assignment on PATCH, stack traces in 500s, `no-store` on authenticated responses, unbounded `limit`, unsigned webhooks, introspection and query depth in production).
- On: 01, 05, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 21, 23, 25, 28

## Groups

### Group 1: Getting Started (Sheets 01–03)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `http-01-how-http-works.html` | How HTTP Works | client / server · request / response · stateless · TCP + TLS · HTTP/1.1 vs HTTP/2 vs HTTP/3 · HTTPS · HSTS |
| 02 | `http-02-request-response-anatomy.html` | Anatomy of a Request & Response | URL parts (scheme · host · port · path · query · fragment) · percent-encoding · request line · status line · headers · body |
| 03 | `http-03-curl-and-api-tools.html` | Testing APIs with curl & Tools | curl -X / -H / -d / -i / -v · --json · -u · HTTPie · Postman / Bruno · browser DevTools Network tab · copy as cURL |

### Group 2: Methods (Sheets 04–06)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 04 | `http-04-get-head-options.html` | Reading: GET, HEAD & OPTIONS | GET with query params · no request body · HEAD for metadata · OPTIONS · Allow header · conditional GET |
| 05 | `http-05-post-put-patch-delete.html` | Writing: POST, PUT, PATCH & DELETE | POST to create · PUT full replace · PATCH partial update · JSON Merge Patch · JSON Patch ops · DELETE · 201 + Location |
| 06 | `http-06-safety-idempotency.html` | Safe, Idempotent & Cacheable Methods | safe vs idempotent vs cacheable table · retries · Idempotency-Key header · POST vs PUT for create · double-submit |

### Group 3: Status Codes (Sheets 07–10)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 07 | `http-07-status-1xx-2xx.html` | 1xx Informational & 2xx Success | 100 Continue · 101 Switching Protocols · 200 OK · 201 Created · 202 Accepted · 204 No Content · 206 Partial Content |
| 08 | `http-08-status-3xx.html` | 3xx Redirects & Not Modified | 301 vs 308 · 302 vs 307 · 303 See Other · Post/Redirect/Get · Location · 304 Not Modified · redirect loops |
| 09 | `http-09-status-4xx.html` | 4xx Client Errors | 400 · 401 vs 403 · 404 vs 410 · 405 · 409 Conflict · 415 · 422 · 429 Too Many Requests |
| 10 | `http-10-status-5xx-error-bodies.html` | 5xx Server Errors & Error Bodies | 500 · 502 vs 504 · 503 + Retry-After · application/problem+json · type / title / status / detail · validation error lists · don't leak stack traces |

### Group 4: Headers & Cookies (Sheets 11–13)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 11 | `http-11-core-headers-content-negotiation.html` | Core Headers & Content Negotiation | Host · Content-Type · Content-Length · Accept · Accept-Encoding / Content-Encoding · JSON vs form-urlencoded vs multipart/form-data · 406 / 415 · X- prefix deprecated |
| 12 | `http-12-caching-headers.html` | Caching Headers | Cache-Control (max-age · no-cache · no-store · private / public) · ETag · If-None-Match · Last-Modified · Vary · CDN caching |
| 13 | `http-13-cookies-sessions.html` | Cookies & Sessions | Set-Cookie · HttpOnly · Secure · SameSite Lax / Strict / None · Domain / Path · Max-Age · session IDs · CSRF tokens |

### Group 5: Authentication & CORS (Sheets 14–18)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 14 | `http-14-authentication-basics.html` | Authentication Basics | authentication vs authorization · Authorization header · Basic · Bearer · API keys · WWW-Authenticate · sessions vs tokens |
| 15 | `http-15-jwt.html` | JSON Web Tokens (JWT) | header.payload.signature · Base64URL · claims (iss · sub · aud · exp · iat) · HS256 vs RS256 · verify, don't just decode · cookie vs localStorage · short expiry |
| 16 | `http-16-oauth2-concepts.html` | OAuth 2.0 Concepts | resource owner · client · authorization server · resource server · scopes · access vs refresh tokens · grant types · client credentials |
| 17 | `http-17-oauth-pkce-oidc.html` | OAuth Flows: Authorization Code + PKCE & OpenID Connect | /authorize redirect · state · code_verifier / code_challenge · /token exchange · refresh rotation · OIDC id_token · userinfo · implicit flow deprecated |
| 18 | `http-18-cors.html` | CORS | same-origin policy · Origin header · simple vs preflight request · Access-Control-Allow-Origin / -Methods / -Headers · credentials + wildcard rule · Max-Age · reading CORS errors |

### Group 6: REST API Design (Sheets 19–24)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 19 | `http-19-rest-principles.html` | REST Principles | resources & representations · uniform interface · statelessness · client-server · HATEOAS · Richardson maturity model · REST vs RPC |
| 20 | `http-20-resource-url-design.html` | Resource & URL Design | plural nouns · /users/{id} · nested resources (one level) · method × URL table · non-CRUD actions · kebab-case paths · consistent JSON field casing |
| 21 | `http-21-pagination-filtering-sorting.html` | Pagination, Filtering & Sorting | limit / offset · cursor pagination · Link header · total counts · ?status=active filters · ?sort=-created_at · sparse fields |
| 22 | `http-22-versioning-evolution.html` | Versioning & Evolving APIs | /v1 path vs header vs media type · breaking vs non-breaking changes · additive fields · Deprecation / Sunset headers · changelogs · tolerant readers |
| 23 | `http-23-rate-limits-async-webhooks.html` | Rate Limits, Async Jobs & Webhooks | 429 + Retry-After · RateLimit headers · exponential backoff + jitter · 202 + status URL polling · webhooks · HMAC signatures · webhook retries |
| 24 | `http-24-openapi.html` | Documenting with OpenAPI | OpenAPI 3.1 · paths & operations · parameters · requestBody · components/schemas · $ref · securitySchemes · Swagger UI / codegen |

### Group 7: GraphQL (Sheets 25–28)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 25 | `http-25-graphql-vs-rest.html` | GraphQL Basics & GraphQL vs REST | single endpoint · POST /graphql · query / mutation / subscription · over- and under-fetching · introspection · when to pick each |
| 26 | `http-26-graphql-schema-types.html` | GraphQL Schema & Types (SDL) | type · scalars · ! non-null · [List] · enum · input · interface / union · Query / Mutation root types |
| 27 | `http-27-graphql-operations.html` | GraphQL Queries, Mutations & Variables | operation names · arguments · $variables · aliases · fragments · @include / @skip · mutation payloads |
| 28 | `http-28-graphql-resolvers-errors.html` | GraphQL Resolvers, Errors & Performance | resolver (parent · args · context) · N+1 + DataLoader · errors array with 200 OK · connection pagination · auth in context · depth / complexity limits |

### Group 8: Quick Reference (Sheets 29–30)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 29 | `http-29-quick-ref-methods-status.html` | Quick Reference — Methods & Status Codes | method properties table · CRUD → method → status map · 2xx · 3xx · 4xx · 5xx · which code when |
| 30 | `http-30-quick-ref-headers-auth-cors.html` | Quick Reference — Headers, Auth & CORS | common request / response headers · cache recipes · cookie flags · auth scheme picker · OAuth flow picker · CORS header checklist |

Dense, no explanations; every row points back to the sheet with details.
