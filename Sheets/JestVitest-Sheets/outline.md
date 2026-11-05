# Jest & Vitest Reference Guide Outline (27 sheets)

## Metadata

- **Group it belongs to:** Testing
- **Folder Directory:** `Sheets/JestVitest-Sheets/jv-##-[slug].html`
- **PDF Name:** `Jest & Vitest Reference Guide.pdf`
- **Groups:** 8
- **Sheets:** 27
- **Drafted Date:** 2026-11-03
- **Verified-Finalized Date:**

## Basic Information

One set for both JavaScript test runners, because their APIs are nearly the same (`describe` / `it` / `expect`, mock functions, snapshots). **Vitest is the primary syntax** on every sheet, since the Vite, Vue and React sets build on Vite and new projects default to it. Jest gets a comparison box on every sheet and its own group (23–25) for Jest-only setup, migration, and React Native, where Jest is still the default.

Targets **Vitest 5.x** and **Jest 30.x**. Aimed at intermediate readers who know JavaScript (the JS/TS set) and want to test functions, modules and UI components. Code examples are JavaScript (ESM); the TypeScript box on each sheet covers typing tests, typed mocks and type tests.

Scope limits: end-to-end browser testing is the Playwright set's job; sheet 19 covers only Vitest's browser mode and points there. Testing concepts (test doubles, TDD, strategy) live in the Testing set.

## Differences in Layout from Basic Structure

- **Extra boxes:** **Jest ↔ Vitest** (`id="jest"`), **TypeScript** (`id="ts"`) and **Prefer / Avoid** (`id="idiom"`) in Row 2 under Code Explained on 01–25 · **Under the Hood** (`id="hood"`) in Row 1 as a third column on selected sheets. None on the quick references (26–27). Details below.
- Four extra boxes is one more than most sets. If a sheet doesn't fit on one page, cut Under the Hood to 2 items first, then Prefer / Avoid, then TypeScript, then Jest ↔ Vitest, before touching the main content.
- The standard language group template does not apply. Groups follow how a test suite grows: setup → writing tests → matchers → mocking → snapshots and the DOM → coverage and CI → Jest-specific → quick reference.
- On the Jest group (23–25) the main code is Jest, and the Jest ↔ Vitest box flips to show the Vitest form.
- **Set links:** sheet 18 links to the React set, sheet 19 to the Playwright set, sheet 25 to the React Native set, and sheet 02 to the Vite set.
- `jv-cheatsheet.css` adds `.section-jest`, `.section-ts`, `.section-idiom` and `.section-hood` styles with their own accent colors. `.section-ts` matches the JS/TS set's TypeScript box.

### Jest ↔ Vitest box (`id="jest"`, 01–25)

- `<section class="section-notes section-jest" id="jest">`, title **Jest ↔ Vitest**.
- 2–4 lines showing the Jest form of what's on the sheet, or the behavior difference: `vi.fn()` → `jest.fn()` · `vi.mock` factory must return every export used · Jest needs `globals` by default, Vitest imports from `vitest` · config key names.
- When the two are identical, say so in one line and use the rest of the box for the one real difference.

### TypeScript box (`id="ts"`, 01–25)

- `<section class="section-notes section-ts" id="ts">`, title **TypeScript**, same style as the JS/TS set's box.
- 2–3 lines on writing the sheet's code in TypeScript: `vi.mocked()` for typed mocks · `MockedFunction` / `Mock<…>` types · `expectTypeOf` / `assertType` · `satisfies` in test data · `types: ["vitest/globals"]` · `ts-jest` vs `@swc/jest` on the Jest sheets.

### Prefer / Avoid box (`id="idiom"`, 01–25)

- `<section class="section-notes section-idiom" id="idiom">`, title **Prefer / Avoid**.
- 2–4 lines in `avoid` → `prefer` form, each a real idiom for the sheet's topic (`toBe` on objects → `toEqual` · `getByTestId` → `getByRole` · a `done` callback → `async` / `await` · manual `mockClear` in every test → `restoreMocks: true` in config). Never a restatement of the main code block or a Common Mistakes item.

### Under the Hood box (`id="hood"`, Row 1, selected sheets)

- `<section class="section-notes section-hood" id="hood">`, title **Under the Hood**, Row 1 as a third column (`col-1-3`).
- 2–4 items on how the runner does what the sheet shows.

| # | Under the Hood content |
|---|---|
| 01 | Vitest runs tests through Vite's transform pipeline · Jest uses its own transformer and module registry |
| 03 | watch mode reruns only tests whose import graph changed · how `--changed` decides |
| 05 | each test file runs in its own isolated module graph · setup files run before every file |
| 06 | `.concurrent` tests share one file's worker · why shared state breaks them |
| 10 | async matchers and unawaited promises · why a missing `await` passes silently |
| 13 | `vi.mock` is hoisted above imports · `vi.hoisted` for variables the factory needs · ESM vs CJS mocking |
| 14 | fake timers replace `setTimeout` / `Date` globals · which APIs `toFake` covers |
| 17 | jsdom and happy-dom are JavaScript re-implementations of the DOM, not a browser · what they can't do |
| 19 | browser mode runs tests in a real browser through a provider (Playwright) · the test runner talks to it over a connection |
| 20 | v8 coverage reads the engine's native counters · istanbul instruments code first · why their numbers differ |
| 21 | `pool: 'threads'` vs `'forks'` · `isolate` · how sharding splits files |

## Groups

### Group 1: Introduction & Setup (Sheets 01–03)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `jv-01-introduction.html` | Introduction: Vitest & Jest | what a test runner does · Vitest vs Jest · Jest-compatible API · when to pick each · `npm i -D vitest` · first test |
| 02 | `jv-02-installation-config.html` | Installation & Config | `vitest.config.ts` · `test` key in `vite.config` · `defineConfig` · `environment` · `globals` · `include` / `exclude` · `setupFiles` |
| 03 | `jv-03-running-watch.html` | Running Tests & Watch Mode | `vitest` vs `vitest run` · filters by name / file · `-t` · `--last-failed` · `--changed` · `--ui` · `--project` |

### Group 2: Writing Tests (Sheets 04–06)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 04 | `jv-04-describe-it-test.html` | describe, it & test | `describe` · `it` vs `test` · nesting · test names · `import { test, expect } from 'vitest'` · file naming `*.test.ts` |
| 05 | `jv-05-hooks-setup.html` | Hooks, Setup Files & Test Context | `beforeEach` / `afterEach` · `beforeAll` / `afterAll` · cleanup return functions · `setupFiles` · `globalSetup` · `test.extend` fixtures |
| 06 | `jv-06-each-modifiers.html` | Parameterized Tests & Modifiers | `test.each` · `test.for` · `.only` / `.skip` / `.todo` · `.fails` · `.concurrent` · `skipIf` / `runIf` · tags |

### Group 3: Matchers (Sheets 07–10)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 07 | `jv-07-equality-truthiness.html` | Equality & Truthiness | `toBe` · `toEqual` · `toStrictEqual` · `toBeNull` / `toBeUndefined` / `toBeDefined` · `toBeTruthy` / `toBeFalsy` · `.not` |
| 08 | `jv-08-numbers-strings-collections.html` | Numbers, Strings & Collections | `toBeCloseTo` · `toBeGreaterThan` · `toMatch` · `toContain` · `toContainEqual` · `toHaveLength` · `toHaveProperty` · `toMatchObject` |
| 09 | `jv-09-asymmetric-custom.html` | Asymmetric, Soft & Custom Matchers | `expect.any` · `expect.objectContaining` · `arrayContaining` · `stringMatching` · `expect.soft` · `expect.poll` · `expect.extend` |
| 10 | `jv-10-errors-async.html` | Errors & Async Code | `toThrow` / `toThrowError` · `.rejects` / `.resolves` · `async` tests · `expect.assertions(n)` · `expect.hasAssertions` · unhandled rejections |

### Group 4: Mocking (Sheets 11–15)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 11 | `jv-11-mock-functions.html` | Mock Functions | `vi.fn()` · `mockReturnValue` · `mockResolvedValue` · `mockImplementation` · `.mock.calls` · `toHaveBeenCalledWith` · `toHaveBeenCalledTimes` |
| 12 | `jv-12-spies-reset.html` | Spies & Resetting Mocks | `vi.spyOn` · spying on getters · `mockClear` vs `mockReset` vs `mockRestore` · `restoreMocks` / `clearMocks` config · `vi.restoreAllMocks` |
| 13 | `jv-13-module-mocking.html` | Module Mocking | `vi.mock(path, factory)` · hoisting · `importOriginal` · partial mocks · `__mocks__` folders · `vi.doMock` · `vi.hoisted` |
| 14 | `jv-14-timers-dates.html` | Fake Timers & Dates | `vi.useFakeTimers` · `advanceTimersByTime` · `runAllTimers` · `runOnlyPendingTimers` · `vi.setSystemTime` · `useRealTimers` |
| 15 | `jv-15-network-globals.html` | Mocking Network, Globals & Env | MSW `setupServer` · `http.get` handlers · `server.use` overrides · `vi.stubGlobal('fetch')` · `vi.stubEnv` · `unstubAll` |

### Group 5: Snapshots & the DOM (Sheets 16–19)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 16 | `jv-16-snapshots.html` | Snapshot Testing | `toMatchSnapshot` · `toMatchInlineSnapshot` · `toMatchFileSnapshot` · `-u` to update · obsolete snapshots · serializers · when not to snapshot |
| 17 | `jv-17-dom-environments.html` | DOM Environments | `environment: 'jsdom'` vs `'happy-dom'` · per-file `@vitest-environment` comment · `document` / `window` in tests · what's missing vs a browser |
| 18 | `jv-18-testing-library.html` | Testing Library | `render` · `screen` · `getByRole` / `findBy*` / `queryBy*` · `userEvent` · `@testing-library/jest-dom` matchers · `cleanup` |
| 19 | `jv-19-browser-mode.html` | Vitest Browser Mode | `browser.enabled` · Playwright provider · `page` locators · `expect.element` · visual regression · when to use Playwright Test instead |

### Group 6: Coverage, Performance & CI (Sheets 20–22)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 20 | `jv-20-coverage.html` | Coverage | `--coverage` · `provider: 'v8'` vs `'istanbul'` · `thresholds` · `include` / `exclude` · reporters (`text` · `html` · `lcov`) · ignore comments |
| 21 | `jv-21-projects-performance.html` | Projects & Performance | `projects` config · `pool` threads / forks · `isolate` · `--shard` · `maxWorkers` · `--changed` in CI · slow-test reporting |
| 22 | `jv-22-reporters-ci.html` | Reporters & CI | `--reporter` · `default` / `verbose` / `dot` · `junit` · `json` · `github-actions` reporter · `--bail` · `CI` env behavior |

### Group 7: Jest-Specific (Sheets 23–25)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 23 | `jv-23-jest-setup-config.html` | Jest Setup & Config | `jest.config.js` · `testEnvironment` · `transform` (`babel-jest` · `ts-jest` · `@swc/jest`) · `moduleNameMapper` · `setupFilesAfterEnv` · ESM support |
| 24 | `jv-24-jest-to-vitest.html` | Migrating Jest → Vitest | `jest.*` → `vi.*` · `globals: true` · `done` callbacks · mock factory differences · snapshot header · config mapping |
| 25 | `jv-25-jest-react-native.html` | Jest in React Native | `preset: 'react-native'` · `@testing-library/react-native` · mocking native modules · `transformIgnorePatterns` · timers & animations |

### Group 8: Quick Reference (Sheets 26–27)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 26 | `jv-26-quick-ref-matchers-mocks.html` | Quick Reference — Matchers & Mocks | matchers by category · asymmetric matchers · `vi` / `jest` mock API · clear / reset / restore table |
| 27 | `jv-27-quick-ref-cli-config.html` | Quick Reference — CLI & Config | Vitest CLI flags · Jest CLI flags · config keys side by side · environments · coverage options |

Dense tables, no explanations; every row points back to the sheet with details.
