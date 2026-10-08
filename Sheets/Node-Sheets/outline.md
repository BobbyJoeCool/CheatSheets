# Node.js Reference — Outline

Generated from `manifest.json`; keep the two in sync when sheets are added, renamed or reordered.

## Profile

- **Collection section:** Web Technologies
- **Status:** Complete
- **Sheets:** 68 across 15 groups
- **File prefix:** `node` (`node-##-[slug].html`)
- **Folder:** `Sheets/Node-Sheets/`
- **Coverage:** introduction & setup, modules & packages, event loop & async, process & environment, CLI tools, file system, buffers & streams, networking & HTTP, errors & debugging, testing, concurrency & performance, security, built-in utilities, web frameworks & libraries, deployment

---

## Group 1 — Introduction & Setup (01–05)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `node-01-introduction.html` | Introduction &amp; Architecture | V8 · libuv · single thread + thread pool · non-blocking I/O · use cases · release schedule &amp; LTS |
| 02 | `node-02-installation.html` | Installation &amp; Version Managers | nodejs.org installers · nvm · fnm · .nvmrc · node -v · npm -v · engines field |
| 03 | `node-03-running-node.html` | Running Node | node file.js · REPL · -e / -p · --watch · --env-file · shebang · node --run |
| 04 | `node-04-node-vs-browser.html` | Node vs the Browser | globalThis · process · no window / DOM · import.meta.dirname · import.meta.filename · Web APIs in Node · node: prefix |
| 05 | `node-05-typescript-in-node.html` | TypeScript in Node | type stripping · erasable syntax only · --experimental-transform-types · .ts / .mts imports · tsx · tsconfig for Node |

## Group 2 — Modules & Packages (06–11)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 06 | `node-06-commonjs.html` | CommonJS Modules | require() · module.exports · exports shorthand · require.cache · require.resolve() · __dirname |
| 07 | `node-07-es-modules.html` | ES Modules | import / export · "type": "module" · .mjs / .cjs · import.meta · top-level await · dynamic import() |
| 08 | `node-08-module-interop.html` | CJS ↔ ESM Interop | require(esm) · createRequire() · default export interop · dual packages · module.register · file extensions in imports |
| 09 | `node-09-package-json.html` | package.json | name / version · scripts · "exports" conditions · "imports" #aliases · engines · bin · dependencies vs devDependencies |
| 10 | `node-10-npm-cli.html` | npm CLI | npm install · npm ci · update · outdated · audit · npx · package-lock.json · semver ranges ^ ~ |
| 11 | `node-11-package-managers-workspaces.html` | pnpm, Yarn &amp; Workspaces | pnpm · yarn · workspaces · npm link · overrides · monorepo layout |

## Group 3 — Event Loop & Async (12–17)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 12 | `node-12-event-loop.html` | The Event Loop | phases · timers / poll / check / close · microtask queue · process.nextTick() · blocking the loop |
| 13 | `node-13-timers.html` | Timers | setTimeout · setInterval · setImmediate · timers/promises · ref() / unref() · AbortSignal.timeout() |
| 14 | `node-14-callbacks.html` | Callbacks &amp; Error-First Style | (err, data) => {} · util.promisify() · util.callbackify() · callback hell · returning early on err |
| 15 | `node-15-promise-apis.html` | Promise-Based Core APIs | fs/promises · stream/promises · timers/promises · Promise.all · allSettled · unhandledRejection |
| 16 | `node-16-async-patterns.html` | Async Patterns &amp; Cancellation | sequential vs parallel await · for await...of · AbortController · signal option · concurrency limits · events.on() |
| 17 | `node-17-eventemitter.html` | EventEmitter | on() · once() · emit() · off() · 'error' event · events.once() · setMaxListeners · captureRejections |

## Group 4 — Process & Environment (18–21)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 18 | `node-18-process-object.html` | The process Object | process.argv · env · exit() · exitCode · cwd() · pid · platform · memoryUsage() |
| 19 | `node-19-signals-shutdown.html` | Signals &amp; Graceful Shutdown | SIGINT · SIGTERM · process.on('exit') · beforeExit · server.close() · shutdown timeout |
| 20 | `node-20-env-config.html` | Environment Variables &amp; Config | --env-file · process.loadEnvFile() · util.parseEnv() · NODE_ENV · NODE_OPTIONS · dotenv |
| 21 | `node-21-os-module.html` | The os Module | os.cpus() · availableParallelism() · totalmem() · freemem() · homedir() · tmpdir() · EOL · platform() |

## Group 5 — Building CLI Tools (22–24)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 22 | `node-22-cli-arguments.html` | Command-Line Arguments | util.parseArgs() · process.argv.slice(2) · options / positionals · "bin" field · #!/usr/bin/env node · npm link |
| 23 | `node-23-readline-stdin.html` | Reading Input | readline/promises · rl.question() · process.stdin · piped input · isTTY · line-by-line input |
| 24 | `node-24-console-output.html` | Console &amp; Terminal Output | console.log / error / table / dir · util.styleText() · process.stdout.write() · exit codes · NO_COLOR |

## Group 6 — File System (25–30)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 25 | `node-25-fs-api-styles.html` | fs API Styles | fs/promises · callback fs · *Sync methods · when sync is fine · FileHandle · error codes ENOENT / EACCES |
| 26 | `node-26-reading-files.html` | Reading Files | readFile() · encoding · JSON.parse(readFile) · createReadStream() · readline over files · read large files |
| 27 | `node-27-writing-files.html` | Writing &amp; Appending | writeFile() · appendFile() · flags 'w' / 'a' / 'wx' · createWriteStream() · atomic write via rename · mode |
| 28 | `node-28-directories.html` | Directories &amp; Globbing | mkdir({ recursive }) · readdir({ withFileTypes }) · rm({ recursive, force }) · cp() · fs.glob() · opendir() |
| 29 | `node-29-file-info-watching.html` | File Info &amp; Watching | stat() · lstat() · access() · existence checks · fs.watch() · chmod() · utimes() |
| 30 | `node-30-path-module.html` | The path Module | path.join() · resolve() · basename() · extname() · dirname() · parse() · sep · fileURLToPath() |

## Group 7 — Buffers & Streams (31–36)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 31 | `node-31-buffer-basics.html` | Buffer Basics | Buffer.from() · alloc() · toString(encoding) · concat() · subarray() · byteLength · utf8 / base64 / hex |
| 32 | `node-32-binary-data.html` | Binary Data | TypedArray · DataView · readUInt32LE() · writeInt16BE() · Blob · TextEncoder / TextDecoder |
| 33 | `node-33-stream-concepts.html` | Stream Concepts | Readable · Writable · Duplex · Transform · backpressure · highWaterMark · objectMode |
| 34 | `node-34-readable-writable.html` | Readable &amp; Writable Streams | 'data' / 'end' events · async iteration · Readable.from() · write() return value · 'drain' · end() |
| 35 | `node-35-pipeline-transform.html` | pipeline() &amp; Transforms | stream/promises pipeline() · Transform · zlib gzip / brotli · error propagation · finished() |
| 36 | `node-36-web-streams.html` | Web Streams | ReadableStream · WritableStream · TransformStream · Readable.toWeb() / fromWeb() · TextDecoderStream · compose() |

## Group 8 — Networking & HTTP (37–42)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 37 | `node-37-http-server.html` | HTTP Server Basics | http.createServer() · req / res · writeHead() · setHeader() · end() · listen() · keep-alive |
| 38 | `node-38-requests-bodies-urls.html` | Requests, Bodies &amp; URLs | new URL() · URLSearchParams · req.method · collecting the body · JSON bodies · body size limits |
| 39 | `node-39-fetch-undici.html` | fetch &amp; Undici | fetch() · Request / Response / Headers · FormData · AbortSignal.timeout() · undici Agent · ProxyAgent · NODE_USE_ENV_PROXY |
| 40 | `node-40-https-tls.html` | HTTPS &amp; TLS | https.createServer() · key / cert · tls options · self-signed certs · NODE_EXTRA_CA_CERTS · http2 |
| 41 | `node-41-websockets.html` | WebSockets | global WebSocket client · open / message / close · ws library server · upgrade event · heartbeats |
| 42 | `node-42-tcp-udp-dns.html` | TCP, UDP &amp; DNS | net.createServer() · net.connect() · socket events · dgram · dns.lookup() vs dns.resolve() · dns/promises |

## Group 9 — Errors & Debugging (43–46)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 43 | `node-43-error-patterns.html` | Error Patterns in Node | err.code · system errors · error.cause · AggregateError · operational vs programmer errors · custom error classes |
| 44 | `node-44-uncaught-errors.html` | Uncaught Errors &amp; Rejections | uncaughtException · unhandledRejection · --unhandled-rejections · crash-and-restart design · error in streams / emitters |
| 45 | `node-45-debugger.html` | Debugging | --inspect · --inspect-brk · chrome://inspect · VS Code launch.json · debugger statement · --watch + inspect |
| 46 | `node-46-diagnostics.html` | Diagnostics &amp; Tracing | util.inspect() · util.debuglog() · NODE_DEBUG · --trace-warnings · diagnostics_channel · process.report |

## Group 10 — Testing (47–49)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 47 | `node-47-test-runner.html` | node:test Basics | test() · describe() / it() · node --test · before / after hooks · skip / only / todo · --watch |
| 48 | `node-48-assert.html` | The assert Module | assert.strictEqual() · deepStrictEqual() · throws() · rejects() · match() · assert/strict · partialDeepStrictEqual() |
| 49 | `node-49-mocking-coverage.html` | Mocking, Snapshots &amp; Coverage | mock.fn() · mock.method() · mock.timers · t.assert.snapshot() · --experimental-test-coverage · reporters |

## Group 11 — Concurrency & Performance (50–54)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 50 | `node-50-child-process.html` | Child Processes | spawn() · exec() · execFile() · fork() · stdio options · shell injection risk · exit codes |
| 51 | `node-51-worker-threads.html` | Worker Threads | new Worker() · parentPort · workerData · postMessage() · MessageChannel · SharedArrayBuffer · Atomics |
| 52 | `node-52-cluster.html` | Cluster &amp; Scaling | cluster.fork() · isPrimary · load balancing · sticky sessions · PM2 cluster mode · when to use workers instead |
| 53 | `node-53-performance.html` | Measuring Performance | perf_hooks · performance.now() · mark() / measure() · monitorEventLoopDelay() · --cpu-prof · flame graphs |
| 54 | `node-54-memory-gc.html` | Memory &amp; Garbage Collection | heap vs RSS · --max-old-space-size · heap snapshots · common leaks · WeakRef / FinalizationRegistry · v8.getHeapStatistics() |

## Group 12 — Security (55–57)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 55 | `node-55-permission-model.html` | Permission Model | --permission · --allow-fs-read · --allow-fs-write · --allow-child-process · --allow-net · process.permission.has() |
| 56 | `node-56-crypto.html` | Crypto | randomUUID() · randomBytes() · createHash() · createHmac() · scrypt() · timingSafeEqual() · crypto.subtle |
| 57 | `node-57-supply-chain-hardening.html` | Supply Chain &amp; Hardening | npm audit · lockfiles · --ignore-scripts · provenance · minimal dependencies · security release lines |

## Group 13 — Built-in Utilities (58–60)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 58 | `node-58-util-module.html` | The util Module | util.promisify() · inspect() · format() · types · deprecate() · isDeepStrictEqual() · aborted() |
| 59 | `node-59-async-local-storage.html` | AsyncLocalStorage | AsyncLocalStorage · run() · getStore() · request context · logging correlation IDs · enterWith() |
| 60 | `node-60-sqlite.html` | node:sqlite | DatabaseSync · prepare() · run() · get() · all() · named parameters · transactions · :memory: |

## Group 14 — Web Frameworks & Libraries (61–65)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 61 | `node-61-express-basics.html` | Express Basics | express() · app.get() / post() · req.params · req.query · res.json() · express.json() · Express 5 async errors |
| 62 | `node-62-express-middleware.html` | Express Middleware &amp; Routers | app.use() · next() · express.Router() · error middleware (err, req, res, next) · express.static() · cors |
| 63 | `node-63-fastify.html` | Fastify | fastify() · route schemas · reply.send() · plugins · register() · hooks · built-in validation |
| 64 | `node-64-databases.html` | Databases from Node | pg Pool · parameterized queries · mysql2 · Prisma · Drizzle · connection pooling · transactions |
| 65 | `node-65-logging.html` | Logging | pino · log levels · child loggers · structured JSON logs · pino-pretty · redaction |

## Group 15 — Deployment (66–68)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 66 | `node-66-production-config.html` | Running in Production | NODE_ENV=production · PM2 · systemd unit · health checks · graceful shutdown · reverse proxy |
| 67 | `node-67-docker.html` | Docker for Node | node:XX-slim / alpine · multi-stage builds · npm ci --omit=dev · USER node · .dockerignore · signal handling (PID 1) |
| 68 | `node-68-single-executable-bundling.html` | Single Executables &amp; Bundling | Single Executable Applications · sea-config.json · esbuild · bundling for deploy · compile cache · node --run |
