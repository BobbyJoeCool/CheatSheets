# Express Reference Guide Outline (57 sheets)

## Metadata

- **Group it belongs to:** Server & Full-Stack
- **Folder Directory:** `Sheets/Express-Sheets/ex-##-[slug].html`
- **PDF Name:** `Express Reference Guide.pdf`
- **Groups:** 16
- **Sheets:** 57
- **Drafted Date:** 2026-11-14
- **Verified-Finalized Date:**

## Basic Information

Express as a full framework set: routing, the request and response objects, middleware, error handling, views, REST APIs, databases, authentication, security, real-time, TypeScript, testing and production. For intermediate readers who know JavaScript and the basics of Node and want to build web servers and APIs. Node itself (modules, npm, the event loop, streams, `http`) lives in the Node.js set, which keeps its two Express primer sheets (node-61, node-62) and should point here. HTTP status codes and headers are covered in depth in the HTTP set.

Targets Express 5.x (5.2 current at drafting; 5.0 shipped 2024-09-09, 5.1 became the npm `latest` tag 2025-03-31) on Node 18+, using ES modules (`import express from "express"`) throughout. Express 5 behavior comes first everywhere: async handlers that reject are passed to error middleware automatically, path-to-regexp 8 route syntax (`/*splat`, `{/:id}`), and the removed Express 4 APIs appear only in the Express 4 → 5 box and the migration sheet. Version tags should be re-checked against the Express changelog and History.md when each sheet is built.

Teaching is code-first: every sheet has a working example with inline notes, then reference tables. Third-party packages are limited to ones that are near-universal in Express codebases (cors, helmet, morgan, multer, express-session, passport, zod, supertest, pino-http).

## Differences in Layout from Basic Structure

- **Extra boxes:** **Prefer / Avoid** (`section-notes section-idiom`, `id="idiom"`) under Code Explained on every sheet except the quick references (56–57) · **Express 4 → 5** (`section-notes section-version`, `id="v4v5"`) under Prefer / Avoid on the sheets where Express 5 changed behavior: 01, 05, 06, 07, 08, 09, 11, 13, 14, 15, 16, 17, 23, 24, 26, 55.
- As a framework set it skips the language-basics groups; JavaScript lives in the JavaScript & TypeScript set and Node in the Node.js set.
- Groups follow the life of a request (routing → request → response → middleware → errors) before views, APIs, data, auth, security, real-time, structure, testing and production.
- Prefer / Avoid: 3 `note-item` lines, `<span class="idiom-avoid">…</span> → <span class="idiom-prefer">…</span>`, same markup as the Node set. Examples: `body-parser` package → `express.json()`; `try` / `catch` + `next(err)` in every handler → let Express 5 catch rejected promises; `res.send(JSON.stringify(x))` → `res.json(x)`.
- Express 4 → 5: 1–3 `note-item` lines, each `<strong>4.x</strong> old way → <strong>5.x</strong> new way`, e.g. `app.get("/*")` → `app.get("/*splat")`; `res.redirect("back")` → `res.redirect(req.get("Referrer") || "/")`. Don't repeat what the Notes box says.
- If a sheet doesn't fit, cut Express 4 → 5 to 1 line first, then Prefer / Avoid to 2 items, before touching the main content.
- Sheet 55 is a comparison sheet (Express vs Fastify vs Koa vs Hono vs NestJS) with tables instead of a single code block.
- Sheet CSS is `Sheets/CSS/ex-cheatsheet.css`.
- Sheets 56–57 are table-only quick-reference pages (Syntax · Does · Sheet #) with no code row.

## Groups

### Group 1: Introduction & Setup (Sheets 01–04)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `ex-01-introduction.html` | Introduction & History | TJ Holowaychuk, 2010 · minimal & unopinionated · built on `node:http` · middleware stack · OpenJS Foundation · Express 5 & LTS timeline |
| 02 | `ex-02-installation.html` | Installation & Project Setup | `npm init -y` · `npm install express` · `"type": "module"` · `engines` · `express-generator` · `.gitignore` · `node --watch` |
| 03 | `ex-03-first-app.html` | First App & the app Object | `import express from "express"` · `const app = express()` · `app.get("/", …)` · `app.listen(port, cb)` · listen error callback · `app.set()` / `app.get()` settings |
| 04 | `ex-04-project-structure.html` | Project Layout & Scripts | `app.js` vs `server.js` split · `routes/` · `controllers/` · `middleware/` · `public/` · npm scripts · `--env-file` |

### Group 2: Routing (Sheets 05–10)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 05 | `ex-05-route-methods.html` | Route Methods | `app.get` / `post` / `put` / `patch` / `delete` · `app.all()` · `app.options` · handler signature `(req, res, next)` · route order matters · first match wins |
| 06 | `ex-06-route-paths.html` | Route Paths & Patterns | string paths · named wildcard `/*splat` · optional segments `{/:id}` · regex routes · reserved characters · `case sensitive routing` · `strict routing` |
| 07 | `ex-07-route-parameters.html` | Route Parameters | `/users/:id` · `req.params` · multiple params `/:from-:to` · always strings · validating ids · `app.param()` |
| 08 | `ex-08-query-strings.html` | Query Strings | `req.query` · `query parser` setting · `"simple"` vs `"extended"` (`qs`) · arrays `?tag=a&tag=b` · read-only getter in 5 · defaults & coercion |
| 09 | `ex-09-express-router.html` | express.Router | `express.Router()` · `app.use("/api", router)` · `mergeParams: true` · nested routers · one router per resource · `app.router` |
| 10 | `ex-10-route-chaining.html` | app.route & Multiple Handlers | `app.route("/books").get().post()` · handler arrays · `next("route")` · `next("router")` · route-specific middleware |

### Group 3: The Request Object (Sheets 11–13)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 11 | `ex-11-request-properties.html` | Request Properties | `req.method` · `req.path` · `req.originalUrl` · `req.baseUrl` · `req.hostname` · `req.ip` / `req.ips` · `req.protocol` / `req.secure` |
| 12 | `ex-12-request-headers.html` | Headers & Content Negotiation | `req.get()` · `req.is("json")` · `req.accepts()` · `req.acceptsLanguages()` · `req.fresh` / `req.stale` · `req.xhr` |
| 13 | `ex-13-request-body.html` | Parsing the Request Body | `express.json()` · `express.urlencoded()` · `express.text()` · `express.raw()` · `limit` · `req.body` undefined without a parser · `type` option |

### Group 4: The Response Object (Sheets 14–17)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 14 | `ex-14-sending-responses.html` | Sending Responses | `res.send()` · `res.json()` · `res.end()` · `res.sendStatus()` · `res.format()` · one response per request · `res.headersSent` |
| 15 | `ex-15-status-headers.html` | Status Codes & Headers | `res.status()` · invalid codes throw in 5 · `res.set()` / `res.get()` · `res.type()` · `res.vary()` · `res.location()` · `res.links()` |
| 16 | `ex-16-redirects-files.html` | Redirects, Files & Downloads | `res.redirect(301, url)` · `res.sendFile()` with `root` · `res.download()` · `res.attachment()` · path traversal · `dotfiles` option |
| 17 | `ex-17-cookies.html` | Cookies | `res.cookie()` · `httpOnly` / `secure` / `sameSite` / `maxAge` · `res.clearCookie()` · `cookie-parser` · `req.cookies` · signed cookies `req.signedCookies` |

### Group 5: Middleware (Sheets 18–22)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 18 | `ex-18-middleware-basics.html` | Middleware Basics | `(req, res, next)` · `next()` · ending vs passing on · order of `app.use()` · `res.locals` · `req` augmentation |
| 19 | `ex-19-app-router-middleware.html` | App-Level & Router-Level Middleware | `app.use(fn)` · `app.use("/path", fn)` · `router.use()` · per-route middleware · middleware arrays · skipping with `next("route")` |
| 20 | `ex-20-built-in-middleware.html` | Built-in Middleware | `express.json` · `express.urlencoded` · `express.static` · `express.raw` · `express.text` · what Express no longer bundles |
| 21 | `ex-21-third-party-middleware.html` | Essential Third-Party Middleware | `cors` · `helmet` · `morgan` · `compression` · `cookie-parser` · `express-rate-limit` · install & mount order |
| 22 | `ex-22-writing-middleware.html` | Writing Configurable Middleware | factory functions `(opts) => (req, res, next)` · async middleware · `res.on("finish")` · timing / request-id middleware · publishing as a package |

### Group 6: Error Handling (Sheets 23–25)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 23 | `ex-23-error-middleware.html` | Error-Handling Middleware | four args `(err, req, res, next)` · `next(err)` · placed last · default error handler · `NODE_ENV` and stack traces · `res.headersSent` check |
| 24 | `ex-24-async-errors.html` | Async Errors in Express 5 | rejected promises → error middleware · `async` handlers · `throw` in handlers · callback APIs still need `next(err)` · `express-async-errors` no longer needed |
| 25 | `ex-25-custom-errors-404.html` | Custom Errors & 404 Handling | `class HttpError extends Error` · `err.status` / `err.statusCode` · `http-errors` · catch-all 404 middleware · JSON error envelope · `process.on("unhandledRejection")` |

### Group 7: Static Files & Views (Sheets 26–28)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 26 | `ex-26-static-files.html` | Serving Static Files | `express.static("public")` · virtual prefix `/static` · `maxAge` / `immutable` · `index` · `dotfiles` default `"ignore"` · multiple static dirs · SPA fallback |
| 27 | `ex-27-template-engines.html` | Template Engines | `app.set("view engine", "ejs")` · `app.set("views", …)` · EJS · Pug · Handlebars (`express-handlebars`) · `app.engine()` |
| 28 | `ex-28-rendering-views.html` | Rendering Views & Locals | `res.render("page", data)` · `res.locals` · `app.locals` · partials & layouts · escaping `<%= %>` vs `<%- %>` · `view cache` |

### Group 8: Building REST APIs (Sheets 29–32)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 29 | `ex-29-rest-design.html` | REST API Design | resource routes · CRUD ↔ HTTP methods · `201` + `Location` · `204` · idempotency · consistent JSON shape · pointer to HTTP set |
| 30 | `ex-30-validation.html` | Request Validation | `zod` `schema.safeParse(req.body)` · validation middleware factory · `express-validator` `body()` / `validationResult()` · `400` vs `422` · sanitizing |
| 31 | `ex-31-file-uploads.html` | File Uploads with Multer | `multer` · `upload.single()` / `.array()` / `.fields()` · `req.file` / `req.files` · `diskStorage` · `memoryStorage` · `limits` · `fileFilter` |
| 32 | `ex-32-pagination-versioning.html` | Pagination, Filtering & Versioning | `?page=&limit=` · cursor pagination · `?sort=` / filter params · `/api/v1` routers · `ETag` / `etag` setting · OpenAPI with `swagger-ui-express` |

### Group 9: Databases (Sheets 33–36)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 33 | `ex-33-postgres-pg.html` | PostgreSQL with pg | `new Pool()` · `pool.query(text, values)` · `$1` parameters · `RETURNING` · transactions with `client` · pool on startup / close on shutdown |
| 34 | `ex-34-orm-prisma-drizzle.html` | ORMs: Prisma & Drizzle | `PrismaClient` singleton · `findMany` / `create` · `P2002` → `409` · Drizzle `db.select().from()` · migrations · pointer to Prisma set |
| 35 | `ex-35-mongodb-mongoose.html` | MongoDB with Mongoose | `mongoose.connect()` · `Schema` · `model()` · `find` / `findById` · `CastError` → `400` · `lean()` · `timestamps` |
| 36 | `ex-36-redis-caching.html` | Caching with Redis | `redis` / `ioredis` client · cache-aside middleware · `EX` TTL · cache keys from `req.originalUrl` · invalidation · `Cache-Control` headers |

### Group 10: Authentication & Sessions (Sheets 37–40)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 37 | `ex-37-sessions.html` | Sessions with express-session | `session({ secret, resave, saveUninitialized })` · `req.session` · cookie options · `connect-redis` store · `req.session.regenerate()` · `destroy()` |
| 38 | `ex-38-password-hashing.html` | Password Hashing & Login | `bcrypt` / `argon2` hash & verify · signup / login routes · timing-safe compare · never return hashes · `requireAuth` middleware |
| 39 | `ex-39-jwt.html` | JWT Authentication | `jsonwebtoken` `sign()` / `verify()` · `Authorization: Bearer` · `expiresIn` · refresh tokens · httpOnly cookie vs header · `401` vs `403` |
| 40 | `ex-40-passport-rbac.html` | Passport & Role-Based Access | `passport.use(new LocalStrategy())` · `passport.authenticate()` · `serializeUser` · OAuth strategies · `requireRole("admin")` · `req.user` |

### Group 11: Security (Sheets 41–43)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 41 | `ex-41-security-headers.html` | Helmet & Security Headers | `helmet()` · Content-Security-Policy · HSTS · `x-powered-by` off · `app.disable("x-powered-by")` · per-route CSP |
| 42 | `ex-42-cors-rate-limiting.html` | CORS & Rate Limiting | `cors({ origin, credentials })` · origin allowlist function · preflight `OPTIONS` · `express-rate-limit` `windowMs` / `limit` · `trust proxy` for real IPs |
| 43 | `ex-43-input-security.html` | Input Security & CSRF | SQL / NoSQL injection · prototype pollution via `qs` · XSS escaping · CSRF tokens (`csrf-csrf`) · `sameSite` cookies · `npm audit` |

### Group 12: Real-Time & Streaming (Sheets 44–45)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 44 | `ex-44-socket-io.html` | WebSockets with Socket.IO | `http.createServer(app)` · `new Server(server)` · `io.on("connection")` · `socket.emit` / `on` · rooms · `ws` package alternative |
| 45 | `ex-45-sse-streaming.html` | Server-Sent Events & Streaming | `text/event-stream` · `res.write()` · `res.flushHeaders()` · `req.on("close")` · `stream.pipeline(src, res)` · streaming large files |

### Group 13: TypeScript & Architecture (Sheets 46–47)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 46 | `ex-46-typescript.html` | Express with TypeScript | `@types/express` · `Request<Params, ResBody, ReqBody, Query>` · typed handlers · declaration merging `req.user` · `tsx` · Node type stripping |
| 47 | `ex-47-app-architecture.html` | Application Architecture | routes → controllers → services → data layer · dependency injection by hand · `createApp()` factory · config module · feature folders |

### Group 14: Testing (Sheets 48–49)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 48 | `ex-48-supertest.html` | Testing Routes with Supertest | `request(app).get("/")` · `.expect(200)` · `.send()` / `.set()` · test without `listen()` · `node:test` / Vitest / Jest · pointer to Jest & Vitest set |
| 49 | `ex-49-integration-mocking.html` | Integration Tests & Mocking | test database · seeding & cleanup · mocking services · testing middleware alone · auth in tests · `supertest.agent()` for cookies |

### Group 15: Production & Deployment (Sheets 50–53)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 50 | `ex-50-config-environment.html` | Configuration & Environments | `NODE_ENV=production` · `process.env` · `--env-file` · validating config with zod · `app.get("env")` · secrets out of git |
| 51 | `ex-51-logging-monitoring.html` | Logging & Monitoring | `pino-http` · `morgan` formats · request ids · log levels · `/health` & `/ready` routes · OpenTelemetry |
| 52 | `ex-52-performance.html` | Performance | `compression` · caching headers · avoid sync calls · `cluster` / PM2 cluster mode · `view cache` · load testing with `autocannon` |
| 53 | `ex-53-deployment.html` | Deployment | `trust proxy` behind Nginx · graceful shutdown `server.close()` · `SIGTERM` · Dockerfile · PM2 · HTTPS termination · serverless adapters |

### Group 16: Migration, Comparison & Quick Reference (Sheets 54–57)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 54 | `ex-54-express-4-to-5.html` | Migrating from Express 4 to 5 | path syntax changes · removed `app.del` / `req.param()` / `res.sendfile` · `res.json(obj, status)` removed · `req.body` / `req.query` defaults · `@expressjs/codemod` |
| 55 | `ex-55-framework-comparison.html` | Express vs Fastify, Koa, Hono & NestJS | middleware model · schema validation · performance · TypeScript story · ecosystem size · when to pick each |
| 56 | `ex-56-quick-reference-api.html` | Quick Reference — app, req & res | `app` methods & settings · `req` properties & methods · `res` methods · route path syntax · `Router` options |
| 57 | `ex-57-quick-reference-middleware.html` | Quick Reference — Middleware & Packages | built-in middleware options · common packages & mount order · error handler shape · status codes · npm commands |

Group 16 groups the end-of-set pages: one migration sheet, one comparison sheet (tables, no single code block) and two table-only quick references.
