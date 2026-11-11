# JUnit Reference Guide Outline (25 sheets)

## Metadata

- **Group it belongs to:** Testing
- **Folder Directory:** `Sheets/JUnit-Sheets/ju-##-[slug].html`
- **PDF Name:** `JUnit Reference Guide.pdf`
- **Groups:** 9
- **Sheets:** 25
- **Drafted Date:** 2026-11-03
- **Verified-Finalized Date:**

## Basic Information

A reference for testing Java code with JUnit (the Jupiter API on the JUnit Platform), for intermediate readers who know Java (the Java set) and build with Maven or Gradle. It covers setup, the test lifecycle, assertions (JUnit's own and AssertJ), assumptions and conditions, parameterized and dynamic tests, the extension model, parallel execution, Mockito, Spring Boot testing, Testcontainers, migration from older versions, and reports in CI.

Targets **JUnit 6.1** (Java 17+ baseline), with notes where 5.x differs, since most existing projects are still on JUnit 5. Mockito 5 and AssertJ are taught as the standard companions. Code-first: every sheet leads with a runnable test class.

Scope limits: Playwright for Java lives in the Playwright set (sheet 57), Spring Boot's app side lives in the Spring set, and testing concepts live in the Testing set. TestNG is covered only in the comparison box.

## Differences in Layout from Basic Structure

- **Extra boxes:** **JUnit 4 / TestNG Equivalent** (`id="legacy"`) and **Prefer / Avoid** (`id="idiom"`) in Row 2 under Code Explained on 01–23 · **In Spring Boot** (`id="spring"`) in Row 1 as a third column on selected sheets. None on the quick references (24–25). Details below.
- The standard language group template does not apply. Groups follow how a test suite grows: setup → writing tests → assertions → parameterized and dynamic tests → extensions → mocking → Spring Boot and integration → migration and CI → quick reference.
- **Set links:** sheets that need build setup link to the Maven and Gradle sets; Spring sheets (19–21) link to the Spring set; language features (lambdas, streams for `@MethodSource`, records) end Notes with a "Java set:" line.
- If a sheet doesn't fit on one page, cut In Spring Boot to 2 items first, then Prefer / Avoid, then JUnit 4 / TestNG Equivalent, before touching the main content.
- `ju-cheatsheet.css` adds `.section-legacy`, `.section-idiom` and `.section-spring` styles with their own accent colors.

### JUnit 4 / TestNG Equivalent box (`id="legacy"`, 01–23)

- `<section class="section-notes section-legacy" id="legacy">`, title **JUnit 4 / TestNG Equivalent**.
- Two labeled lines, always in this order: **JUnit 4** · **TestNG**, each naming the equivalent annotation, class or approach: `@BeforeEach` → `@Before` · `@BeforeMethod` · `assertThrows` → `@Test(expected=…)` · `expectedExceptions`.
- When one has no equivalent (`@Nested` in TestNG), say so and name the nearest approach.

### Prefer / Avoid box (`id="idiom"`, 01–23)

- `<section class="section-notes section-idiom" id="idiom">`, title **Prefer / Avoid**, same spirit as the Java set's box.
- 2–4 lines in `avoid` → `prefer` form, each a real JUnit idiom for the sheet's topic (`public` test methods → package-private · `try/catch` + `fail()` → `assertThrows` · `assertTrue(a.equals(b))` → `assertEquals` / AssertJ · `@MockBean` → `@MockitoBean`). Never a restatement of the main code block or a Common Mistakes item.

### In Spring Boot box (`id="spring"`, Row 1, selected sheets)

- `<section class="section-notes section-spring" id="spring">`, title **In Spring Boot**, Row 1 as a third column (`col-1-3`).
- 2–4 items on how the sheet's feature works inside a Spring Boot test, or what Spring adds on top.

| # | In Spring Boot content |
|---|---|
| 02 | `spring-boot-starter-test` brings JUnit, AssertJ, Mockito and Hamcrest · don't pin JUnit versions by hand |
| 05 | `@SpringBootTest` context is cached across test classes · `@DirtiesContext` breaks the cache |
| 06 | `@Nested` classes inherit the Spring context config · `@ActiveProfiles` per class |
| 09 | AssertJ helpers in `MockMvcTester` and `JsonContent` |
| 11 | parameterized tests work with injected beans · constructor injection in tests with `@Autowired` |
| 14 | `SpringExtension` is the extension behind `@SpringBootTest` · ordering with other extensions |
| 15 | `@TempDir` with `@DynamicPropertySource` for file paths |
| 16 | parallel tests and a shared context · when to keep Spring tests serial |
| 17 | `@MockitoBean` / `@MockitoSpyBean` replace beans in the context · vs plain `@Mock` |
| 18 | `@MockitoBean` resets after each test · strict stubs inside a context |

## Groups

### Group 1: Introduction & Setup (Sheets 01–03)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `ju-01-introduction-architecture.html` | Introduction & Architecture | JUnit Platform · Jupiter · Vintage · test engines · JUnit 5 vs 6 · Java 17 baseline · first test class |
| 02 | `ju-02-setup-maven-gradle.html` | Setup with Maven & Gradle | `junit-bom` · `junit-jupiter` · Surefire · `useJUnitPlatform()` · `junit-platform-launcher` · test source folders |
| 03 | `ju-03-running-tests.html` | Running Tests | IDE gutter · `mvn test -Dtest=` · `gradle test --tests` · Failsafe for integration tests · ConsoleLauncher · `junit-platform.properties` |

### Group 2: Writing Tests (Sheets 04–06)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 04 | `ju-04-test-classes-methods.html` | Test Classes & Methods | `@Test` · package-private visibility · naming conventions · `@DisplayName` · `@DisplayNameGeneration` · test class layout |
| 05 | `ju-05-lifecycle.html` | Lifecycle | `@BeforeEach` / `@AfterEach` · `@BeforeAll` / `@AfterAll` · static requirement · `@TestInstance(PER_CLASS)` · execution order |
| 06 | `ju-06-organizing-tests.html` | Nested, Tagged & Ordered Tests | `@Nested` · `@Tag` · `@Disabled` · `@TestMethodOrder` · `@Order` · `@Suite` · tag filtering in Maven / Gradle |

### Group 3: Assertions & Conditions (Sheets 07–10)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 07 | `ju-07-core-assertions.html` | Core Assertions | `assertEquals` · `assertTrue` / `assertFalse` · `assertNull` · `assertSame` · `assertArrayEquals` · `assertIterableEquals` · message suppliers |
| 08 | `ju-08-exceptions-groups-timeouts.html` | Exceptions, Grouped Assertions & Timeouts | `assertThrows` · `assertThrowsExactly` · `assertDoesNotThrow` · `assertAll` · `assertTimeout` · `assertTimeoutPreemptively` · `@Timeout` |
| 09 | `ju-09-assertj.html` | AssertJ | `assertThat` · `isEqualTo` · `containsExactly` · `extracting` · `satisfies` · `assertThatThrownBy` · `SoftAssertions` |
| 10 | `ju-10-assumptions-conditions.html` | Assumptions & Conditional Tests | `assumeTrue` · `assumingThat` · `@EnabledOnOs` · `@EnabledForJreRange` · `@EnabledIfEnvironmentVariable` · `@EnabledIf` · `@DisabledIf` |

### Group 4: Parameterized & Dynamic Tests (Sheets 11–13)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 11 | `ju-11-parameterized-sources.html` | Parameterized Tests — Sources | `@ParameterizedTest` · `@ValueSource` · `@CsvSource` · `@CsvFileSource` · `@EnumSource` · `@NullAndEmptySource` · `name =` patterns |
| 12 | `ju-12-method-source-providers.html` | Method Sources & Argument Providers | `@MethodSource` · `Stream<Arguments>` · `@FieldSource` · `ArgumentsProvider` · `ArgumentsAccessor` · `@AggregateWith` · converters |
| 13 | `ju-13-dynamic-repeated.html` | Dynamic & Repeated Tests | `@TestFactory` · `DynamicTest.dynamicTest` · `DynamicContainer` · `@RepeatedTest` · `RepetitionInfo` · `failureThreshold` |

### Group 5: Extensions & Execution (Sheets 14–16)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 14 | `ju-14-extension-model.html` | The Extension Model | `@ExtendWith` · `@RegisterExtension` · lifecycle callbacks · `ParameterResolver` · `ExtensionContext.Store` · writing a small extension |
| 15 | `ju-15-builtin-extensions.html` | Built-in Parameters & Extensions | `@TempDir` (cleanup modes) · `TestInfo` · `TestReporter` · `@DefaultLocale` · `@DefaultTimeZone` · system property extension (6.1) |
| 16 | `ju-16-parallel-execution.html` | Parallel Execution | `junit.jupiter.execution.parallel.enabled` · `mode.default` · `@Execution` · `@ResourceLock` · `@Isolated` · thread-safety |

### Group 6: Mocking with Mockito (Sheets 17–18)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 17 | `ju-17-mockito-basics.html` | Mockito Basics | `MockitoExtension` · `@Mock` · `@InjectMocks` · `when(…).thenReturn` · `verify` · `any()` / `eq()` · `times()` / `never()` |
| 18 | `ju-18-mockito-advanced.html` | Mockito Advanced | `ArgumentCaptor` · `@Spy` · `doThrow` / `doAnswer` · BDDMockito `given` / `then` · strict stubs · `mockStatic` |

### Group 7: Spring Boot & Integration Tests (Sheets 19–21)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 19 | `ju-19-spring-boot-test.html` | Spring Boot Test Basics | `@SpringBootTest` · `webEnvironment` · `@MockitoBean` · `@TestConfiguration` · `@ActiveProfiles` · context caching |
| 20 | `ju-20-spring-test-slices.html` | Spring Test Slices | `@WebMvcTest` · `MockMvc` / `MockMvcTester` · `@DataJpaTest` · `@JsonTest` · `@RestClientTest` · `@WebFluxTest` |
| 21 | `ju-21-testcontainers.html` | Testcontainers | `@Testcontainers` · `@Container` · `PostgreSQLContainer` · `@ServiceConnection` · `@DynamicPropertySource` · container reuse |

These sheets don't carry the In Spring Boot box, since the whole sheet is Spring.

### Group 8: Migration & CI (Sheets 22–23)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 22 | `ju-22-migrating.html` | Migrating from JUnit 4 & 5 | `@Before` → `@BeforeEach` · `@Rule` → extensions · `expected=` → `assertThrows` · `@RunWith` → `@ExtendWith` · Vintage engine · 5 → 6 changes |
| 23 | `ju-23-reports-ci.html` | Reports, Coverage & CI | Surefire XML reports · Open Test Reporting · JaCoCo · coverage thresholds · GitHub Actions · test result publishing |

### Group 9: Quick Reference (Sheets 24–25)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 24 | `ju-24-quick-ref-annotations-assertions.html` | Quick Reference — Annotations & Assertions | lifecycle annotations · organizing annotations · conditions · parameter sources · assertions · AssertJ |
| 25 | `ju-25-quick-ref-mockito-build.html` | Quick Reference — Mockito, Build & Config | Mockito API · Spring test annotations · Maven / Gradle commands · `junit-platform.properties` keys |

Dense tables, no explanations; every row points back to the sheet with details.
