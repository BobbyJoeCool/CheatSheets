# Software Testing Reference Guide Outline (40 sheets)

## Metadata

- **Group it belongs to:** Testing
- **Folder Directory:** `Sheets/Testing-Sheets/tst-##-[slug].html`
- **PDF Name:** `Software Testing Reference Guide.pdf`
- **Groups:** 12
- **Sheets:** 40
- **Drafted Date:** 2026-11-03
- **Verified-Finalized Date:**

## Basic Information

A language-agnostic reference for how to test software well, in the same spirit as the Programming Concepts and HTTP sets. It covers test types and the test pyramid, writing good tests, test doubles, TDD and BDD, integration and contract testing, UI and end-to-end strategy, flaky tests, property-based / mutation / fuzz testing, coverage, testing in CI, performance / accessibility / security testing, and testing in practice (legacy code, time and async, a project's test strategy, AI-written code). Aimed at intermediate developers who can already write a basic test and want to write better ones and explain their choices, including in interviews.

Code blocks are short pseudocode-style tests that read like any xUnit framework (`test "…"`, `assert`, `given / when / then`). Real syntax lives in the In Your Stack box, which links to the pytest, Jest & Vitest, JUnit and Playwright sets. This set is the overview for the Testing section; the four tool sets go deep on their own frameworks.

## Differences in Layout from Basic Structure

- **Extra boxes:** **In Your Stack** (`id="stack"`) and **Smell Check** (`id="smell"`) in Row 2 under Code Explained on 01–38 · **Interview Angle** (`id="interview"`) in Row 1 as a third column on selected sheets. None on the quick references (39–40). Details below.
- Code blocks use pseudocode that looks like a generic xUnit test, with the house style set on sheet 05 (AAA comments, `test "name":`, `assert`, `fake` / `stub` / `mock` objects named for their role). No framework imports outside the In Your Stack box.
- Groups replace the standard language template: foundations → writing tests → test doubles → TDD and BDD → integration → UI and end-to-end → beyond example tests → coverage → CI → non-functional → testing in practice → quick reference.
- If a sheet doesn't fit on one page, cut Interview Angle to 2 items first, then Smell Check, then In Your Stack, before touching the main content.
- `tst-cheatsheet.css` adds `.section-stack`, `.section-smell` and `.section-interview` styles with their own accent colors. `.section-stack` matches the HTTP set's box.

### In Your Stack box (`id="stack"`, 01–38)

- `<section class="section-notes section-stack" id="stack">`, title **In Your Stack**, same style as the HTTP set's box.
- Exactly four one-line entries, always in this order: **pytest** · **Vitest** · **JUnit** · **Playwright**. Each names the API or tool that handles the sheet's topic and links to the sheet that teaches it (`../Pytest-Sheets/pyt-06-….html`).
- When a tool has nothing for the topic, the line says so and names the usual add-on (Hypothesis · fast-check · jqwik for property-based tests).

### Smell Check box (`id="smell"`, 01–38)

- `<section class="section-notes section-smell" id="smell">`, title **Smell Check**.
- 1–3 test smells or anti-patterns tied to the sheet's topic, each as "you see → it means → do instead" (a test that mocks the class it tests · `sleep(2)` before an assertion · coverage at 100% with no assertions).
- Not a repeat of Common Mistakes: Smell Check is about what an existing suite looks like when the topic is done badly.

### Interview Angle box (`id="interview"`, Row 1, selected sheets)

- `<section class="section-notes section-interview" id="interview">`, title **Interview Angle**, Row 1 as a third column (`col-1-3`).
- One or two common interview questions on the topic and the points a strong answer hits, in 2–4 short lines.

| # | Interview Angle content |
|---|---|
| 02 | "Describe the test pyramid" · why it's shaped that way · when the trophy fits better |
| 03 | "Unit vs integration vs end-to-end?" · where the boundary sits in your stack |
| 04 | "What makes a good unit test?" · FIRST · testing behavior, not implementation |
| 09 | "How do you spot a bad test?" · two or three named smells |
| 10 | "Mock vs stub vs fake?" · a one-line definition each and an example |
| 11 | "When shouldn't you mock?" · don't mock what you don't own · test at the boundary |
| 13 | "Do you practice TDD?" · red-green-refactor · an honest answer about when it helps |
| 17 | "How do you test code that uses a database?" · Testcontainers vs in-memory fakes |
| 19 | "What is contract testing?" · consumer-driven contracts · why not just E2E |
| 22 | "How do you handle flaky tests?" · find the cause, quarantine, never just add retries |
| 25 | "Is 100% coverage a good goal?" · mutation score as the better signal |
| 27 | "What does code coverage tell you?" · line vs branch · what it can't tell you |
| 32 | "How would you load-test an API?" · p95 / p99 · ramp-up · a pass/fail threshold |
| 35 | "How do you add tests to legacy code?" · characterization tests · seams |
| 37 | "How would you test this feature?" · a walk-through using risk and the pyramid |

## Groups

### Group 1: Foundations (Sheets 01–04)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `tst-01-why-test.html` | Why We Test & What a Test Is | confidence to change code · regression safety · tests as documentation · cost of a bug by stage · anatomy of a test |
| 02 | `tst-02-test-pyramid.html` | The Test Pyramid & Its Alternatives | unit / integration / E2E layers · speed vs confidence · testing trophy · honeycomb · ice-cream cone anti-pattern |
| 03 | `tst-03-types-of-tests.html` | Types of Tests | unit · integration · end-to-end · contract · smoke · regression · acceptance · exploratory |
| 04 | `tst-04-good-tests.html` | What Makes a Good Test | FIRST (fast, isolated, repeatable, self-validating, timely) · deterministic · readable · behavior over implementation · one reason to fail |

### Group 2: Writing Tests (Sheets 05–09)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 05 | `tst-05-arrange-act-assert.html` | Arrange-Act-Assert & Given-When-Then | AAA structure · Given-When-Then · one act per test · setup vs test body · house style for this set |
| 06 | `tst-06-naming-organizing.html` | Naming & Organizing Tests | naming patterns (`should…when…`) · one behavior per test · grouping by unit / feature · file layout · test-to-code mapping |
| 07 | `tst-07-assertions.html` | Writing Useful Assertions | exact vs loose assertions · assertion messages · approximate equality · collections & order · assertion roulette · custom matchers |
| 08 | `tst-08-test-data.html` | Test Data | literal data · builders · object mother · factories · fixtures · randomized data & seeds · golden files |
| 09 | `tst-09-test-smells.html` | Test Smells | fragile tests · slow tests · mystery guest · logic in tests · eager test · over-specification · shared mutable state |

### Group 3: Test Doubles (Sheets 10–12)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 10 | `tst-10-test-doubles.html` | Dummy, Stub, Fake, Spy & Mock | the five doubles · state vs interaction verification · which to reach for · naming doubles by role |
| 11 | `tst-11-when-to-mock.html` | When (and When Not) to Mock | mock at boundaries · don't mock what you don't own · ports & adapters · over-mocking · mocks that test the mock |
| 12 | `tst-12-designing-for-testability.html` | Designing for Testability | seams · dependency injection · injecting a clock · injecting randomness · pure functions · functional core, imperative shell |

### Group 4: TDD & BDD (Sheets 13–15)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 13 | `tst-13-tdd-red-green-refactor.html` | TDD: Red, Green, Refactor | write a failing test · simplest pass · refactor on green · baby steps · triangulation · test list |
| 14 | `tst-14-tdd-styles.html` | TDD Styles | classicist (Chicago) vs mockist (London) · outside-in · inside-out · when TDD helps · when it doesn't |
| 15 | `tst-15-bdd-gherkin.html` | BDD & Gherkin | specification by example · `Feature` / `Scenario` · `Given` / `When` / `Then` · step definitions · Cucumber · behave · playwright-bdd |

### Group 5: Integration & API Testing (Sheets 16–19)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 16 | `tst-16-integration-basics.html` | Integration Testing Basics | what "integration" covers · real vs fake dependencies · in-memory database pitfalls · test isolation · speed budget |
| 17 | `tst-17-databases-in-tests.html` | Databases in Tests | transaction rollback per test · Testcontainers · running migrations · seeding · cleanup strategies · parallel-safe data |
| 18 | `tst-18-testing-apis.html` | Testing HTTP APIs | status · headers · body · schema validation · auth in tests · error cases · test clients vs real HTTP |
| 19 | `tst-19-contract-testing.html` | Contract Testing | consumer-driven contracts · Pact · provider verification · broker · OpenAPI-based contracts · contract vs E2E |

Sheet 18 links to the HTTP set for status codes, headers and auth.

### Group 6: UI & End-to-End Testing (Sheets 20–22)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 20 | `tst-20-component-vs-e2e.html` | Component Tests vs End-to-End Tests | what each catches · Testing Library philosophy · query by role · component test boundaries · cost per test |
| 21 | `tst-21-e2e-strategy.html` | End-to-End Test Strategy | critical user journeys · stable selectors · auth & test data setup · environments · keeping the suite small |
| 22 | `tst-22-flaky-tests.html` | Flaky Tests | causes (timing · order · shared state · network) · detecting flakes · quarantine · retries policy · fixing vs deleting |

### Group 7: Beyond Example-Based Tests (Sheets 23–26)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 23 | `tst-23-property-based.html` | Property-Based Testing | properties vs examples · generators · shrinking · round-trip · invariants · Hypothesis · fast-check · jqwik |
| 24 | `tst-24-snapshot-approval.html` | Snapshot & Approval Testing | snapshot files · approval testing · reviewing diffs · when snapshots rot · inline snapshots · golden master |
| 25 | `tst-25-mutation-testing.html` | Mutation Testing | mutants · killed vs survived · mutation score · mutmut · Stryker · PIT · cost and scoping |
| 26 | `tst-26-fuzz-testing.html` | Fuzz Testing | random vs coverage-guided fuzzing · corpus · crashes as bugs · Atheris · Jazzer · `go test -fuzz` |

### Group 8: Coverage & Suite Health (Sheets 27–28)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 27 | `tst-27-code-coverage.html` | Code Coverage | line · branch · condition · function coverage · thresholds · coverage on changed code · what coverage misses |
| 28 | `tst-28-suite-health.html` | Test Suite Health | suite speed · flake rate · pyramid shape · dead tests · reviewing tests in PRs · test ownership |

### Group 9: Testing in CI (Sheets 29–31)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 29 | `tst-29-tests-in-pipeline.html` | Tests in the Pipeline | pre-commit hooks · PR checks · stages (fast → slow) · fail fast · required checks · nightly suites |
| 30 | `tst-30-parallel-sharding.html` | Parallelism & Sharding | isolation requirements · splitting by file vs timing · sharding across machines · merging reports · shared resources |
| 31 | `tst-31-reports-triage.html` | Test Reports & Failure Triage | JUnit XML · artifacts (traces · screenshots · logs) · reading a CI failure · reproduce locally · rerun only failed |

### Group 10: Non-Functional Testing (Sheets 32–34)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 32 | `tst-32-performance-load.html` | Performance & Load Testing | load · stress · soak · spike · p50 / p95 / p99 · throughput · k6 · thresholds in CI |
| 33 | `tst-33-accessibility-testing.html` | Accessibility Testing | automated checks (axe) · what automation misses · keyboard-only pass · screen reader spot checks · WCAG levels |
| 34 | `tst-34-security-testing.html` | Security Testing Basics | SAST · DAST · SCA / dependency scanning · secrets scanning · OWASP ZAP · security tests for auth rules |

### Group 11: Testing in Practice (Sheets 35–38)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 35 | `tst-35-legacy-code.html` | Testing Legacy Code | characterization tests · finding seams · sprout & wrap · golden master · refactor under test |
| 36 | `tst-36-time-async.html` | Testing Time, Async & Concurrency | fake clocks · fake timers · awaiting vs polling · eventual consistency · race conditions · never `sleep` |
| 37 | `tst-37-test-strategy.html` | A Test Strategy for a Project | risk-based testing · what to test where · web app example · API example · library example · writing it down |
| 38 | `tst-38-tests-and-ai.html` | Tests & AI Coding Agents | tests as the spec for an agent · reviewing generated tests · tests that pass for the wrong reason · test-first prompts · guardrails in CI |

Sheet 38 links to the Agentic Coding set.

### Group 12: Quick Reference (Sheets 39–40)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 39 | `tst-39-quick-ref-types-doubles.html` | Quick Reference — Test Types & Doubles | test types table · pyramid layers · five doubles · when to mock · tool per layer in each stack |
| 40 | `tst-40-quick-ref-techniques-smells.html` | Quick Reference — Techniques & Smells | technique picker (property · snapshot · mutation · fuzz · contract) · smell → fix table · CI checklist |

Dense tables, no explanations; every row points back to the sheet with details.
