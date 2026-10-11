# Playwright Reference Guide Outline (67 sheets)

## Metadata

- **Group it belongs to:** Concepts & Tools
- **Folder Directory:** `Sheets/Playwright-Sheets/pw-##-[slug].html`
- **Groups:** 19
- **Sheets:** 67
- **Drafted Date:** 2026-10-10
- **Verified-Finalized Date:** 2026-10-10

## Basic Information

Playwright for intermediate readers who know JS/TS and have a web app to test. Targets Playwright 1.64 (Chromium 156, Firefox 157, WebKit 27.2). Scope runs from `@playwright/test` itself through web-app frameworks, language bindings, other runners, CI and AI tooling (test agents, MCP).

At 67 sheets it is above the guide's 25–50 framework range, by request. It was cut from a 76-sheet draft by merging related sheets (CSS/XPath into filtering, ARIA snapshots into accessibility, HAR into routing, the three non-React frameworks onto one sheet, and so on).

## Differences in Layout from Basic Structure

- TypeScript is the code language on every sheet except 55–59, which give the Python, Java and .NET equivalents. Sheet 62 is a side-by-side API map across the four languages.
- Language Bindings is one group rather than one per language, so Java's single sheet doesn't break the 2-sheet group minimum.

## Groups

### Group 1: Introduction & Setup (Sheets 01–05)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `pw-01-introduction.html` | Introduction & Architecture | Chromium · Firefox · WebKit · browser → context → page · library vs test runner · auto-waiting |
| 02 | `pw-02-installation.html` | Installation | npm init playwright@latest · npx playwright install · --with-deps · install-deps · install --no-remove · system requirements |
| 03 | `pw-03-project-structure.html` | Project Structure | playwright.config.ts · tests/ · tests-examples/ · test-results/ · playwright-report/ · .gitignore |
| 04 | `pw-04-cli-basics.html` | CLI Essentials | npx playwright test · show-report · codegen · trace · --project · --headed · --ui |
| 05 | `pw-05-vscode-extension.html` | VS Code Extension | Test Explorer · run/debug gutter · Pick locator · Record new · Show browser · trace in editor |

### Group 2: Writing Tests (Sheets 06–09)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 06 | `pw-06-test-structure.html` | Test Structure | test() · test.describe() · beforeEach · afterEach · beforeAll · afterAll · { page } |
| 07 | `pw-07-annotations-tags.html` | Annotations & Tags | test.skip · test.fixme · test.fail · test.slow · test.only · { tag: '@smoke' } · --grep / -G |
| 08 | `pw-08-steps-info.html` | Test Steps & Test Info | test.step() · box · subtitle · testInfo.attach() · testInfo.annotations · outputPath() · test.abort() |
| 09 | `pw-09-parameterized.html` | Parameterized Tests | for…of test loops · data files · project-level options · test.use() · describe.configure({ mode }) |

### Group 3: Locators (Sheets 10–13)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 10 | `pw-10-getbyrole.html` | getByRole | ARIA roles · name · exact · checked / pressed / expanded · level · description |
| 11 | `pw-11-getby-locators.html` | Other Built-in Locators | getByText · getByLabel · getByPlaceholder · getByAltText · getByTitle · getByTestId · testIdAttribute |
| 12 | `pw-12-filter-chain-raw.html` | Filtering, Chaining & Raw Locators | filter({ hasText, has, hasNot }) · and() / or() · nth() / first() / last() · within() · visible() · locator() CSS / XPath · >> chaining |
| 13 | `pw-13-frames-shadow.html` | Frames, Shadow DOM & Lists | frameLocator() · contentFrame() · shadow piercing · count() · all() · strictness errors |

### Group 4: Actions (Sheets 14–17)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 14 | `pw-14-input-actions.html` | Clicks & Text Input | click() · dblclick() · fill() · pressSequentially() · clear() · force · position · modifiers |
| 15 | `pw-15-forms.html` | Forms & Files | check() · setChecked() · selectOption() · setInputFiles() · filechooser · locator.drop() |
| 16 | `pw-16-keyboard-mouse.html` | Keyboard, Mouse & Drag | press() · keyboard.down/up · mouse.move/wheel · hover() · dragTo() · focus() · scroll option |
| 17 | `pw-17-dialogs-popups.html` | Dialogs, Downloads & New Pages | page.on('dialog') · accept() · waitForEvent('download') · saveAs() · popups · context.waitForEvent('page') |

### Group 5: Assertions (Sheets 18–20)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 18 | `pw-18-locator-assertions.html` | Web-First Locator Assertions | toBeVisible · toHaveText · toContainText · toHaveValue · toBeEnabled · toHaveCount · toHaveAttribute · toHaveCSS |
| 19 | `pw-19-page-generic-assertions.html` | Page & Generic Assertions | toHaveURL · toHaveTitle · toEqual · toMatchObject · .not · expect.configure · timeout |
| 20 | `pw-20-soft-poll-custom.html` | Soft, Polling & Custom Assertions | expect.soft · expect.poll · expect.soft.poll · toPass() · expect.extend · custom message |

### Group 6: Navigation & Waiting (Sheets 21–22)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 21 | `pw-21-navigation.html` | Navigation & Load States | goto() · waitUntil · baseURL · waitForURL() · waitForLoadState() · reload() · goBack() |
| 22 | `pw-22-autowait-timeouts.html` | Auto-Waiting & Timeouts | actionability checks · test timeout · expect timeout · actionTimeout · navigationTimeout · signal (AbortSignal) · timeout: 0 |

### Group 7: Fixtures & Page Objects (Sheets 23–26)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 23 | `pw-23-builtin-fixtures.html` | Built-in Fixtures | page · context · browser · browserName · request · mount · testInfo |
| 24 | `pw-24-custom-fixtures.html` | Custom Fixtures | test.extend() · use() · { scope: 'worker' } · { auto: true } · { option: true } · mergeTests() |
| 25 | `pw-25-page-object-model.html` | Page Object Model | class with Locator fields · constructor(page) · action methods · fixtures for POMs · component objects |
| 26 | `pw-26-global-setup.html` | Global Setup & Project Dependencies | setup projects · dependencies · teardown · globalSetup · globalTeardown · test locks |

### Group 8: Authentication (Sheets 27–28)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 27 | `pw-27-auth-storage-state.html` | Auth with storageState | auth.setup.ts · storageState() · playwright/.auth · setStorageState() · reuse across projects |
| 28 | `pw-28-auth-patterns.html` | Multi-Role & Advanced Auth | multiple roles · per-worker accounts · API login · sessionStorage · passkeys (context.credentials) · httpCredentials |

### Group 9: Network (Sheets 29–31)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 29 | `pw-29-route-mock-har.html` | Routing, Mocking & HAR | page.route() · route.fulfill() · route.continue() · route.abort() · route.fetch() · routeFromHAR() · tracing.startHar() |
| 30 | `pw-30-network-events.html` | Waiting on Network Traffic | waitForResponse() · waitForRequest() · on('request') · response.json() · apiResponse.timing() · routeWebSocket() |
| 31 | `pw-31-api-testing.html` | API Testing | request fixture · request.get/post · apiRequestContext · extraHTTPHeaders · storageState sharing · cookie methods |

### Group 10: Browsers, Contexts & Emulation (Sheets 32–34)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 32 | `pw-32-browsers-channels.html` | Browsers & Channels | projects per browser · channel: 'chrome' / 'msedge' · headless shell · launchOptions · connectOverCDP() |
| 33 | `pw-33-emulation.html` | Devices & Emulation | devices['iPhone 15'] · viewport · locale · timezoneId · geolocation · colorScheme · reducedMotion · forcedColors |
| 34 | `pw-34-clock-permissions.html` | Clock, Permissions & Storage | page.clock · install() · setFixedTime() · runFor() · grantPermissions() · page.localStorage · addInitScript() |

### Group 11: Visual & Accessibility Testing (Sheets 35–36)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 35 | `pw-35-visual-comparisons.html` | Visual Comparisons & Snapshots | toHaveScreenshot() · maxDiffPixels · mask · animations: 'disabled' · --update-snapshots · snapshotPathTemplate · OS baselines / Docker |
| 36 | `pw-36-accessibility-aria.html` | Accessibility & ARIA Snapshots | @axe-core/playwright · AxeBuilder · withTags · violations · toMatchAriaSnapshot · ariaSnapshot() · YAML template |

### Group 12: Configuration & Running Tests (Sheets 37–41)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 37 | `pw-37-config-file.html` | playwright.config.ts | defineConfig · testDir · use · projects · testProject.default · outputDir · expect options |
| 38 | `pw-38-parallelism-sharding.html` | Parallelism & Sharding | workers · fullyParallel · --shard=1/4 · merge-reports · mergeFiles · describe.configure({ mode: 'serial' }) |
| 39 | `pw-39-retries-flaky.html` | Retries & Flaky Tests | retries · retryStrategy · testInfo.retry · --fail-on-flaky-tests · --repeat-each · --shuffle |
| 40 | `pw-40-reporters.html` | Reporters | list · line · dot · html · json · junit · blob · --add-reporter · custom reporter API |
| 41 | `pw-41-cli-filtering.html` | CLI Filtering & Flags | file:line · --grep · --grep-invert · --project · --last-failed · --only-changed · --list · --max-failures |

### Group 13: Debugging & Tooling (Sheets 42–46)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 42 | `pw-42-ui-mode.html` | UI Mode | --ui · watch mode · timeline · pick locator · filters · --ui-host / --ui-port |
| 43 | `pw-43-trace-viewer.html` | Trace Viewer | trace: 'on-first-retry' · show-trace · trace.playwright.dev · snapshots option · npx playwright trace actions |
| 44 | `pw-44-inspector-debug.html` | Inspector & Debug Mode | --debug · --debug=cli · PWDEBUG=1 · page.pause() · DEBUG=pw:api · locator.highlight() |
| 45 | `pw-45-codegen.html` | Codegen | npx playwright codegen · --target · --device · --save-storage · assertions toolbar · page.pickLocator() |
| 46 | `pw-46-video-screencast.html` | Screenshots, Video & Screencast | screenshot option · video modes · fps · recordVideo · page.screencast · showActions · chapters |

### Group 14: AI Agents & MCP (Sheets 47–48)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 47 | `pw-47-test-agents.html` | Test Agents | init-agents · --loop=claude/vscode · planner · generator · healer · seed test · specs/ |
| 48 | `pw-48-mcp-cli.html` | Playwright MCP & playwright-cli | npx playwright mcp · @playwright/mcp · browser.bind() · npx playwright cli · attach / show · webmcp-call · init-skills |

### Group 15: Web App Frameworks (Sheets 49–54)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 49 | `pw-49-webserver.html` | webServer & baseURL | webServer.command · url · reuseExistingServer · timeout · multiple servers · env · gracefulShutdown |
| 50 | `pw-50-react-vite.html` | React (Vite) Apps | npm run dev vs preview · port 5173 · data-testid strategy · React Router · mocking fetch · StrictMode double render |
| 51 | `pw-51-nextjs.html` | Next.js Apps | next build && next start · server actions · route handlers via request · proxy.ts · next/image · env vars |
| 52 | `pw-52-vue-angular-svelte.html` | Vue, Angular & Svelte Apps | Vue / Nuxt · @nuxt/test-utils/playwright · Angular ng serve :4200 · Protractor migration · SvelteKit vite preview :4173 · hydration waits |
| 53 | `pw-53-component-setup.html` | Component Testing — Setup | stories model · playwright/gallery/ · window.mount() · components project · reuseContext · migrating from experimental-ct |
| 54 | `pw-54-component-stories.html` | Component Testing — Stories & mount | *.story.tsx · story IDs · mount<typeof Story>() · component.update() · providers · recorded callbacks |

Sheets 50–52 are framework-specific setup and gotchas, not full test suites. Port numbers and dev/preview commands come from each framework's current scaffolding.

### Group 16: Language Bindings (Sheets 55–59)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 55 | `pw-55-python-api.html` | Python — Setup, Sync & Async API | pip install pytest-playwright · playwright install · sync_playwright · async_playwright · snake_case API · expect |
| 56 | `pw-56-python-pytest.html` | Python — pytest Plugin | page fixture · browser_context_args · --browser · --headed · --tracing · conftest.py · pytest-xdist · pytest-playwright-asyncio |
| 57 | `pw-57-java.html` | Java — Setup, JUnit & TestNG | Maven / Gradle · Playwright.create() · try-with-resources · assertThat() · @UsePlaywright · @Options · TestNG lifecycle |
| 58 | `pw-58-dotnet-setup.html` | .NET — Setup & API | dotnet add package Microsoft.Playwright · playwright.ps1 install · async/await · PascalCase API · Expect() |
| 59 | `pw-59-dotnet-runners.html` | .NET — NUnit, MSTest & xUnit | PageTest base class · ContextOptions() · .runsettings · BROWSER env var · Microsoft.Playwright.Xunit · parallelism |

### Group 17: Other Runners & Cross-Language (Sheets 60–62)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 60 | `pw-60-library-mode.html` | Library Mode (No Test Runner) | playwright package · chromium.launch() · newContext() · await using · scripts & scraping · close() cleanup |
| 61 | `pw-61-jest-vitest-bdd.html` | Jest, Vitest & BDD | Vitest browser mode · @vitest/browser-playwright · jest-playwright status · playwright-bdd · Gherkin features · step defs |
| 62 | `pw-62-cross-language.html` | Cross-Language API Map | TS vs Python vs Java vs C# naming · getByRole / get_by_role / GetByRole · expect forms · config locations |

### Group 18: CI & Remote Execution (Sheets 63–65)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 63 | `pw-63-github-actions.html` | GitHub Actions | generated playwright.yml · install --with-deps · upload-artifact · sharded matrix · merge-reports job · caching |
| 64 | `pw-64-docker-other-ci.html` | Docker & Other CI | mcr.microsoft.com/playwright · --ipc=host · Azure Pipelines · GitLab CI · Jenkins · CI env var |
| 65 | `pw-65-remote-browsers.html` | Remote & Cloud Browsers | launchServer() · connect() · wsEndpoint · Azure Playwright Workspaces · @azure/playwright · BrowserStack/LambdaTest |

### Group 19: Quick Reference (Sheets 66–67)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 66 | `pw-66-quickref-locators-assertions.html` | Quick Reference — Locators, Actions & Assertions | getBy* · filter · click/fill · toBeVisible · toHaveText · toHaveURL · expect.soft |
| 67 | `pw-67-quickref-cli-config.html` | Quick Reference — CLI & Config | test flags · codegen · show-report · trace · defineConfig keys · use options · env vars |
