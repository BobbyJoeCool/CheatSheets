# JavaScript & TypeScript Reference — Outline

Generated from `manifest.json`; keep the two in sync when sheets are added, renamed or reordered.

## Profile

- **Collection section:** Web Technologies
- **Status:** Complete
- **Sheets:** 131 across 20 groups
- **File prefix:** `js` (`js-###-[slug].html`)
- **Folder:** `Sheets/JS-Sheets/`
- **Coverage:** output & comments, variables & data types, strings, operators, control flow, error handling, functions, data structures, OOP, files & I/O, modules & packages, tooling, advanced topics, async, DOM, browser APIs, Node.js, TypeScript fundamentals & type system

---

## Group 1 — Introduction & Setup (001–004)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 001 | `js-001-introduction.html` | Introduction &amp; History | ECMAScript · TC39 · yearly releases · V8 / SpiderMonkey · .js / .mjs / .cjs · Hello, World |
| 002 | `js-002-runtimes-setup.html` | Runtimes &amp; Project Setup | browser · Node.js · Deno · Bun · nvm · npm init · "type": "module" |
| 003 | `js-003-program-structure.html` | Program Structure | scripts vs modules · statements · semicolons &amp; ASI · blocks · "use strict" · top-level await |
| 004 | `js-004-running-debugging.html` | Running &amp; Debugging | node file.js · node --watch · REPL · DevTools · debugger · breakpoints · source maps |

## Group 2 — Output & Comments (005–006)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 005 | `js-005-console-output.html` | Console Output | console.log · error · warn · table · dir · group · time / timeEnd · %s %o %c |
| 006 | `js-006-comments.html` | Comments &amp; JSDoc | // · /* */ · /** */ · @param · @returns · @type · @deprecated |

## Group 3 — Variables & Data Types (007–015)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 007 | `js-007-variables.html` | Variables &amp; Declarations | let · const · var · hoisting · TDZ · naming conventions · const ≠ immutable |
| 008 | `js-008-numbers.html` | Numbers | Number · 1_000 · 0x 0b 0o · NaN · Infinity · MAX_SAFE_INTEGER · EPSILON · float precision |
| 009 | `js-009-bigint.html` | BigInt | BigInt · 10n · BigInt() · mixing with Number · typeof "bigint" · JSON limits |
| 010 | `js-010-booleans-truthiness.html` | Booleans &amp; Truthiness | true / false · falsy values · Boolean() · !! · truthy objects · empty arrays |
| 011 | `js-011-null-undefined.html` | null &amp; undefined | null · undefined · typeof null · void 0 · missing vs empty · == null idiom |
| 012 | `js-012-symbols.html` | Symbols | Symbol() · description · Symbol.for · well-known symbols · symbol keys · non-enumerable |
| 013 | `js-013-type-conversion.html` | Type Conversion &amp; Coercion | String() · Number() · parseInt · parseFloat · unary + · implicit coercion · Boolean() |
| 014 | `js-014-type-checking.html` | Type Checking | typeof · instanceof · Array.isArray · Number.isNaN · Number.isInteger · Object.prototype.toString |
| 015 | `js-015-user-input.html` | User Input | prompt() · readline/promises · process.argv · process.stdin · parse &amp; validate · Number.isNaN |

## Group 4 — Strings (016–021)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 016 | `js-016-string-basics.html` | String Basics | '' · "" · \\ · length · immutability · escapes · concatenation · surrogate pairs |
| 017 | `js-017-template-literals.html` | Template Literals | ${} · multiline · nesting · tagged templates · String.raw |
| 018 | `js-018-string-search.html` | String Methods — Search | indexOf · lastIndexOf · includes · startsWith · endsWith · search · match |
| 019 | `js-019-string-transform.html` | String Methods — Transform | replace · replaceAll · split · trim · toUpperCase · padStart · repeat · normalize |
| 020 | `js-020-string-slicing.html` | Slicing &amp; Indexing | slice · substring · at() · charAt · [i] · codePointAt · for...of over characters |
| 021 | `js-021-number-formatting.html` | Number &amp; Locale Formatting | toFixed · toPrecision · toLocaleString · Intl.NumberFormat · currency · compact notation |

## Group 5 — Operators (022–029)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 022 | `js-022-arithmetic.html` | Arithmetic Operators | + - * / % · ** · ++ -- · unary + - · + with strings · precedence |
| 023 | `js-023-comparison.html` | Comparison Operators | == vs === · != !== · &lt; > &lt;= >= · Object.is · string comparison · NaN |
| 024 | `js-024-logical.html` | Logical Operators | &amp;&amp; · \|\| · ! · short-circuit · returns an operand · \|\| defaults |
| 025 | `js-025-nullish-optional.html` | Nullish Coalescing &amp; Optional Chaining | ?? · ?. · ?.[] · ?.() · ?? vs \|\| |
| 026 | `js-026-assignment.html` | Assignment &amp; Compound Assignment | = · += -= *= **= · ??= · \|\|= · &amp;&amp;= · chained assignment |
| 027 | `js-027-bitwise.html` | Bitwise Operators | &amp; · \| · ^ · ~ · &lt;&lt; >> >>> · 32-bit conversion · flags &amp; masks |
| 028 | `js-028-spread-rest.html` | Spread &amp; Rest | ... in arrays · objects · calls · rest params · rest in destructuring |
| 029 | `js-029-other-operators.html` | Other Operators &amp; Precedence | typeof · delete · in · void · comma · instanceof · precedence table |

## Group 6 — Control Flow (030–036)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 030 | `js-030-if-else.html` | if / else if / else | if · else if · else · truthiness in conditions · guard clauses · block scope |
| 031 | `js-031-conditional-expressions.html` | Ternary &amp; Conditional Expressions | ? : · nested ternaries · &amp;&amp; short-circuit · ?? defaults · expression vs statement |
| 032 | `js-032-switch.html` | switch | switch · case · default · fall-through · strict === matching · switch (true) |
| 033 | `js-033-for-loops.html` | for Loops | for · counters · multiple variables · nested loops · reverse loops · let in loop closures |
| 034 | `js-034-for-of-for-in.html` | for...of &amp; for...in | for...of · for...in · entries() · Object.entries() · iterables vs enumerable keys |
| 035 | `js-035-while-loops.html` | while &amp; do...while | while · do...while · sentinel loops · infinite loops · condition placement |
| 036 | `js-036-loop-controls.html` | Loop Controls | break · continue · labeled statements · return from loops · can't break forEach |

## Group 7 — Error Handling (037–040)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 037 | `js-037-try-catch.html` | try / catch / finally | try · catch · finally · optional catch binding · built-in Error types · finally return |
| 038 | `js-038-throwing-errors.html` | Throwing Errors | throw · new Error() · cause · rethrow · AggregateError · throwing non-Errors |
| 039 | `js-039-custom-errors.html` | Custom Errors | class extends Error · name · instanceof · extra fields · cause chains |
| 040 | `js-040-error-patterns.html` | Global Handlers &amp; Error Patterns | window.onerror · unhandledrejection · process.on('uncaughtException') · error-first callbacks · result objects |

## Group 8 — Functions (041–049)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 041 | `js-041-function-declarations.html` | Declarations &amp; Expressions | function · return · hoisting · implicit undefined · function expressions · IIFE |
| 042 | `js-042-parameters.html` | Parameters &amp; Defaults | positional · default values · arguments object · options-object pattern · pass-by-sharing |
| 043 | `js-043-rest-parameters.html` | Rest Parameters &amp; Spread Arguments | ...args · spread into calls · arguments vs rest · Math.max(...arr) |
| 044 | `js-044-scope.html` | Variable Scope | global · function · block · lexical · shadowing · var leaking |
| 045 | `js-045-closures.html` | Closures | closure · counter factory · module pattern · loop closure bug · private state |
| 046 | `js-046-arrow-functions.html` | Arrow Functions | => · implicit return · returning ({}) · no own this / arguments · not constructible |
| 047 | `js-047-this-binding.html` | this &amp; Binding | this · call · apply · bind · lost method context · globalThis · strict-mode this |
| 048 | `js-048-higher-order-functions.html` | Higher-Order Functions | callbacks · returning functions · compose · pipe · currying · partial application |
| 049 | `js-049-recursion.html` | Recursion | base case · factorial · fibonacci · tree traversal · stack size · no TCO |

## Group 9 — Data Structures (050–062)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 050 | `js-050-arrays-basics.html` | Arrays — Basics | [] · length · index · at() · Array.from · Array.of · holes · nested arrays |
| 051 | `js-051-array-mutating.html` | Array Methods — Mutating | push · pop · shift · unshift · splice · sort · reverse · fill |
| 052 | `js-052-array-transform.html` | Array Methods — Transform | map · filter · reduce · slice · concat · flat · flatMap · toSorted / toSpliced / with |
| 053 | `js-053-array-search.html` | Array Methods — Search &amp; Test | find · findIndex · findLast · includes · indexOf · some · every |
| 054 | `js-054-objects-basics.html` | Objects — Basics | {} · dot vs bracket · shorthand · computed keys · methods · delete · in / Object.hasOwn |
| 055 | `js-055-object-static-methods.html` | Object Static Methods | Object.keys · values · entries · fromEntries · assign · freeze · groupBy |
| 056 | `js-056-destructuring.html` | Destructuring | array &amp; object patterns · defaults · renaming · nested · swapping · in parameters |
| 057 | `js-057-copying-cloning.html` | Copying &amp; Equality | spread copy · structuredClone · shallow vs deep · JSON round-trip · reference equality |
| 058 | `js-058-map-weakmap.html` | Map &amp; WeakMap | Map · set / get / has / delete · insertion order · Map vs object · WeakMap · Map.groupBy |
| 059 | `js-059-set-weakset.html` | Set &amp; WeakSet | Set · add / has / delete · dedupe · union · intersection · difference · WeakSet |
| 060 | `js-060-sorting-searching.html` | Sorting &amp; Searching | sort() string default · comparators · localeCompare · stability · toSorted · binary search |
| 061 | `js-061-iterators.html` | Iterators &amp; Iterables | iterable protocol · Symbol.iterator · next() · done · iterator helpers · Iterator.from |
| 062 | `js-062-generators.html` | Generators | function* · yield · yield* · return() · lazy / infinite sequences · async generators |

## Group 10 — OOP (063–070)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 063 | `js-063-prototypes.html` | Prototypes | prototype chain · __proto__ · Object.create · getPrototypeOf · constructor functions · new |
| 064 | `js-064-classes.html` | Classes &amp; Objects | class · new · methods · instanceof · class expressions · not hoisted |
| 065 | `js-065-constructors.html` | Constructors | constructor · field initializers · init order · super() before this · returning objects |
| 066 | `js-066-fields-private-static.html` | Fields, Static &amp; Private Members | public fields · #private · static · static blocks · #x in obj |
| 067 | `js-067-getters-setters.html` | Getters &amp; Setters | get · set · computed properties · Object.defineProperty · validation in setters |
| 068 | `js-068-inheritance.html` | Inheritance | extends · super() · super.method() · overriding · extending built-ins |
| 069 | `js-069-polymorphism-mixins.html` | Polymorphism, Duck Typing &amp; Mixins | duck typing · overriding · mixin functions · Object.assign mixins · composition over inheritance |
| 070 | `js-070-protocol-methods.html` | Protocol Methods &amp; Well-Known Symbols | toString · valueOf · toJSON · Symbol.toPrimitive · Symbol.iterator · Symbol.hasInstance · Symbol.dispose |

## Group 11 — Files & I/O (071–075)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 071 | `js-071-json.html` | JSON | JSON.parse · JSON.stringify · indent · replacer · reviver · toJSON · unsupported values |
| 072 | `js-072-reading-files.html` | Reading Files (Node) | fs/promises · readFile · encoding · readline line-by-line · createReadStream · sync vs async |
| 073 | `js-073-writing-files.html` | Writing &amp; Appending Files (Node) | writeFile · appendFile · flags · mkdir recursive · rm · createWriteStream |
| 074 | `js-074-file-paths.html` | File Paths (Node) | node:path · join · resolve · basename · extname · import.meta.dirname · fileURLToPath |
| 075 | `js-075-browser-files.html` | File &amp; Blob APIs (Browser) | input type="file" · File · Blob · FileReader · file.text() · URL.createObjectURL · downloads |

## Group 12 — Modules & Packages (076–081)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 076 | `js-076-es-modules.html` | ES Modules | import · export · default vs named · as · import * as · re-export · import() · import.meta |
| 077 | `js-077-commonjs.html` | CommonJS &amp; Interop | require · module.exports · exports · .cjs / .mjs · "type" field · require(esm) |
| 078 | `js-078-npm-package-json.html` | npm &amp; package.json | npm install · -D · scripts · semver ^ ~ · package-lock.json · npx · exports field |
| 079 | `js-079-math-random.html` | Math &amp; Random | round / floor / ceil / trunc · min / max · abs · pow · random ints · crypto.randomUUID · getRandomValues |
| 080 | `js-080-dates.html` | Date | new Date() · Date.now() · getters / setters · 0-based months · toISOString · Intl.DateTimeFormat |
| 081 | `js-081-temporal.html` | Temporal | PlainDate · ZonedDateTime · Instant · Duration · add / subtract · until / since |

## Group 13 — External Libraries & Tooling (082–085)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 082 | `js-082-vitest.html` | Testing with Vitest | describe · it · expect · toBe / toEqual · vi.fn · vi.mock · watch mode |
| 083 | `js-083-eslint-prettier.html` | ESLint &amp; Prettier | eslint.config.js · flat config · rules · --fix · Prettier · .prettierrc · editor integration |
| 084 | `js-084-vite-build.html` | Vite &amp; Build Tools | npm create vite · dev server · HMR · vite build · import.meta.env · esbuild / Rollup |
| 085 | `js-085-zod.html` | Runtime Validation with Zod | z.object · z.string · parse · safeParse · refine · error formatting |

## Group 14 — Advanced Topics (086–091)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 086 | `js-086-regex-syntax.html` | Regular Expressions — Syntax | /pattern/flags · RegExp() · character classes · quantifiers · anchors · groups · flags g i m s u v y |
| 087 | `js-087-regex-methods.html` | Regular Expressions — Methods | test · exec · match · matchAll · replace with $1 / fn · named groups · lookarounds |
| 088 | `js-088-proxy-reflect.html` | Proxy &amp; Reflect | new Proxy · get / set / has traps · Reflect.* · validation proxies · observable objects |
| 089 | `js-089-typed-arrays.html` | Typed Arrays &amp; Binary Data | ArrayBuffer · Uint8Array · DataView · TextEncoder · TextDecoder · endianness |
| 090 | `js-090-workers.html` | Workers &amp; Parallelism | Web Workers · postMessage · worker_threads · transferables · SharedArrayBuffer · Atomics |
| 091 | `js-091-memory-resources.html` | Memory &amp; Resource Management | garbage collection · common leaks · WeakRef · FinalizationRegistry · using · Symbol.dispose |

## Group 15 — Asynchronous JavaScript (092–096)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 092 | `js-092-event-loop.html` | The Event Loop &amp; Timers | call stack · task queue · microtasks · setTimeout · setInterval · queueMicrotask · ordering |
| 093 | `js-093-promises.html` | Promises | new Promise · resolve / reject · then · catch · finally · chaining · Promise.resolve |
| 094 | `js-094-async-await.html` | async / await | async · await · try / catch · sequential vs parallel · top-level await · for await |
| 095 | `js-095-promise-combinators.html` | Promise Combinators | Promise.all · allSettled · race · any · withResolvers · Promise.try |
| 096 | `js-096-cancellation.html` | Cancellation, Timeouts &amp; Debouncing | AbortController · signal · AbortSignal.timeout · cleanup · debounce · throttle |

## Group 16 — DOM (097–102)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 097 | `js-097-dom-selecting.html` | Selecting &amp; Traversing | querySelector · querySelectorAll · getElementById · closest · parent / children · NodeList vs HTMLCollection |
| 098 | `js-098-dom-content.html` | Content, Attributes &amp; Classes | textContent · innerHTML · getAttribute · dataset · classList · style |
| 099 | `js-099-dom-creating.html` | Creating &amp; Removing Elements | createElement · append · prepend · before / after · remove · replaceWith · template · DocumentFragment |
| 100 | `js-100-dom-events.html` | Events | addEventListener · event object · target vs currentTarget · once / passive · removeEventListener · preventDefault |
| 101 | `js-101-event-delegation.html` | Propagation &amp; Delegation | capture · bubble · stopPropagation · delegation with closest() · CustomEvent · dispatchEvent |
| 102 | `js-102-dom-forms.html` | Forms &amp; Input | form.elements · FormData · submit event · input / change events · constraint validation · checkValidity |

## Group 17 — Browser APIs (103–106)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 103 | `js-103-fetch.html` | fetch &amp; HTTP | fetch · method / headers / body · response.ok · json() · error handling · JSON POST |
| 104 | `js-104-web-storage.html` | Storage &amp; Cookies | localStorage · sessionStorage · JSON storage · storage event · document.cookie · IndexedDB |
| 105 | `js-105-url-history.html` | URL &amp; History | URL · URLSearchParams · location · history.pushState · popstate · hash routing |
| 106 | `js-106-observers.html` | Observers &amp; Animation Frames | IntersectionObserver · MutationObserver · ResizeObserver · requestAnimationFrame |

## Group 18 — Node.js Essentials (107–110)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 107 | `js-107-node-process.html` | process &amp; Environment | process.argv · process.env · --env-file · process.exit · exit codes · stdin / stdout |
| 108 | `js-108-node-events-streams.html` | EventEmitter &amp; Streams | EventEmitter · on / once / emit · Readable · Writable · pipeline · backpressure |
| 109 | `js-109-node-http.html` | HTTP Server (node:http) | createServer · req / res · routing · JSON responses · status codes · listen |
| 110 | `js-110-node-utility-modules.html` | Node Utility Modules | node:os · node:util · node:crypto · node:child_process · util.parseArgs · util.styleText |

## Group 19 — TypeScript Fundamentals (111–121)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 111 | `js-111-ts-introduction.html` | TypeScript: Introduction &amp; Compiler | tsc · type checking vs type erasure · .ts / .tsx / .d.ts · tsc --noEmit · type stripping · erasableSyntaxOnly |
| 112 | `js-112-tsconfig.html` | tsconfig.json | strict · target · module · moduleResolution · lib · noUncheckedIndexedAccess · verbatimModuleSyntax · include |
| 113 | `js-113-basic-types.html` | Basic Types | string · number · boolean · arrays · tuples · any · unknown · never |
| 114 | `js-114-inference.html` | Inference, Widening &amp; satisfies | inference · widening · literal types · as const · satisfies · contextual typing |
| 115 | `js-115-aliases-interfaces.html` | Type Aliases &amp; Interfaces | type · interface · extends · declaration merging · type vs interface |
| 116 | `js-116-object-types.html` | Object Types | optional ? · readonly · index signatures · excess property checks · Record |
| 117 | `js-117-unions-intersections.html` | Unions &amp; Intersections | \| · &amp; · discriminated unions · exhaustiveness · never |
| 118 | `js-118-narrowing.html` | Narrowing &amp; Type Guards | typeof · instanceof · in · equality · type predicates is · asserts · control-flow analysis |
| 119 | `js-119-function-types.html` | Function Types &amp; Overloads | signatures · optional / default params · overloads · this parameter · void vs undefined · call signatures |
| 120 | `js-120-enums-literals.html` | Enums &amp; Literal Unions | enum · const enum · string enums · literal unions · as const objects · erasableSyntaxOnly |
| 121 | `js-121-ts-classes.html` | Classes in TypeScript | public / private / protected · readonly · parameter properties · abstract · implements · override |

## Group 20 — TypeScript Type System (122–131)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 122 | `js-122-generics.html` | Generics | &lt;T> · constraints extends · defaults · generic functions · generic classes · type-argument inference |
| 123 | `js-123-keyof-typeof-indexed.html` | keyof, typeof &amp; Indexed Access | keyof · typeof · T[K] · T[number] · lookup types |
| 124 | `js-124-utility-types-objects.html` | Utility Types — Objects | Partial · Required · Readonly · Pick · Omit · Record |
| 125 | `js-125-utility-types-unions-functions.html` | Utility Types — Unions &amp; Functions | Exclude · Extract · NonNullable · ReturnType · Parameters · Awaited · InstanceType |
| 126 | `js-126-conditional-types.html` | Conditional Types | T extends U ? X : Y · infer · distributive conditionals · filtering with never |
| 127 | `js-127-mapped-template-types.html` | Mapped &amp; Template Literal Types | [K in keyof T] · +/- modifiers · as remapping · template literal types · Capitalize / Uppercase |
| 128 | `js-128-declaration-files.html` | Declaration Files | .d.ts · declare · @types · ambient modules · global augmentation · module augmentation |
| 129 | `js-129-assertions-escape-hatches.html` | Assertions &amp; Escape Hatches | as · as unknown as · ! · @ts-expect-error · @ts-ignore · any vs unknown |
| 130 | `js-130-decorators.html` | Decorators | class / method / field decorators · context object · accessor · metadata · experimentalDecorators (legacy) |
| 131 | `js-131-adopting-typescript.html` | Adopting TypeScript | allowJs · checkJs · // @ts-check · incremental strictness · project references · tsc -b |
