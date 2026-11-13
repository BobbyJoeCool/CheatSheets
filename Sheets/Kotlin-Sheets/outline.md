# Kotlin Reference Guide Outline (95 sheets)

## Metadata

- **Group it belongs to:** Java
- **Folder Directory:** `Sheets/Kotlin-Sheets/kt-##-[slug].html`
- **PDF Name:** `Kotlin Reference Guide.pdf`
- **Groups:** 16
- **Sheets:** 95
- **Drafted Date:** 2026-11-12
- **Verified-Finalized Date:**

## Basic Information

Kotlin on the JVM, for intermediate readers who know Java or another typed language. Targets the current Kotlin 2.x release (K2 compiler) and tags features newer than 2.0 so readers know what their toolchain supports. Version tags should be re-checked against kotlinlang.org "What's new" when each sheet is built.

The set parallels the Java set: the standard language groups first, with Java comparisons throughout, then Kotlin-specific groups for Java interop, coroutines and Flow, and the ecosystem (DSLs, Ktor, Spring Boot with Kotlin, Multiplatform). Builds use Gradle with the Kotlin DSL; the Gradle and Maven sets cover the build tools in depth. Android gets an overview sheet only, since Jetpack Compose is planned as its own set. Ends with a 2-page quick reference.

## Differences in Layout from Basic Structure

- **Extra boxes:** **Java Equivalent** (`section-notes section-java`, `id="java"`) and **Idiomatic Kotlin** (`section-notes section-idiom`, `id="idiom"`) under Code Explained on every sheet except the quick references (95–96) · **Under the JVM** (`section-notes section-jvm`, `id="jvm"`) in Row 1 on 23 selected sheets. Details below. Mirrors the Java set's Java Versions / Idiomatic Java / Under the JVM boxes.
- Null safety gets a sheet in Variables & Data Types (12) and its operators get their own sheet in Operators (24).
- OOP is named Classes & Objects and adds Kotlin-only sheets: data, sealed, value and object classes, and delegation.
- A Java Interop group (Packages & Interop, 75–79) sits after Files & I/O.
- Sheet 95 are table-only quick-reference pages (Syntax · Does · Sheet #) with no code row.

### Java Equivalent box (every sheet except 95–96)

- 2–3 `note-item` lines showing the same idea in modern Java (17–25): `Java — record Point(int x, int y) {}` beside a data class.

### Idiomatic Kotlin box (every sheet except 95–96)

- Prefer / Avoid pairs: `Avoid: if (x != null) x.length else 0 · Prefer: x?.length ?: 0`.

### Under the JVM box (Row 1, selected sheets)

- What the Kotlin compiler emits, or how the feature maps to bytecode and Java types.
- Sheets: 09, 12, 15, 16, 22, 34, 39, 40, 41, 43, 51, 55, 61, 63, 64, 65, 67, 69, 77, 78, 83, 88, 90.

## Groups

### Group 1: Introduction & Setup (Sheets 01–05)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `kt-01-introduction-history.html` | Introduction & History | JetBrains, 2011 · 1.0 in 2016 · Android's preferred language (2019) · Kotlin 2.0 & K2 compiler (2024) · Kotlin Foundation · concise, safe, interoperable |
| 02 | `kt-02-installation-tooling.html` | Installation & Tooling | IntelliJ IDEA · `kotlinc` · SDKMAN! / Homebrew · Kotlin Playground · `.kt` vs `.kts` · REPL |
| 03 | `kt-03-building-with-gradle.html` | Building with Gradle | `kotlin("jvm")` plugin · `jvmToolchain(21)` · `application` plugin · `./gradlew run` / `build` · `src/main/kotlin` · Maven plugin note |
| 04 | `kt-04-program-structure.html` | Program Structure | `fun main()` · `main(args: Array<String>)` · top-level functions · `package` · no semicolons · file vs class naming |
| 05 | `kt-05-kotlin-targets.html` | Kotlin Targets | Kotlin/JVM · Android · Kotlin/JS · Kotlin/Wasm · Kotlin/Native · Kotlin Multiplatform |

### Group 2: Output & Comments (Sheets 06–07)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 06 | `kt-06-output-input.html` | Output & Input | `println` / `print` · `System.err.println` · string templates `$x` / `${expr}` · `readln()` · `readlnOrNull()` · `String.format` |
| 07 | `kt-07-comments-kdoc.html` | Comments & KDoc | `//` · `/* */` (nestable) · `/** */` KDoc · `@param` / `@return` / `@throws` · `[Name]` links · Dokka |

### Group 3: Variables & Data Types (Sheets 08–15)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 08 | `kt-08-val-var.html` | val & var | `val` (read-only) · `var` (mutable) · type inference · explicit types · read-only ≠ immutable · top-level & local variables |
| 09 | `kt-09-integers.html` | Integers | `Int` / `Long` / `Short` / `Byte` · literals `1_000` `0xFF` `0b1010` `10L` · `UInt` / `ULong` unsigned · `Int.MAX_VALUE` · overflow wraps |
| 10 | `kt-10-floating-point.html` | Floating-Point Numbers | `Double` / `Float` · `1.5f` · `NaN` / `POSITIVE_INFINITY` · `roundToInt()` · `kotlin.math` · `BigDecimal` for money |
| 11 | `kt-11-boolean-char.html` | Boolean & Char | `Boolean` · `Char` literals · `isDigit()` / `isLetter()` · `digitToInt()` · `code` · `Char` isn't a number |
| 12 | `kt-12-null-safety.html` | Null Safety Basics | `String` vs `String?` · compile-time null checks · `?.` · `?:` · `!!` · `NullPointerException` causes |
| 13 | `kt-13-type-conversion.html` | Type Conversion | no implicit widening · `toInt()` / `toLong()` / `toDouble()` · `toIntOrNull()` · `toString()` · `toBigDecimal()` |
| 14 | `kt-14-type-checks-smart-casts.html` | Type Checks & Smart Casts | `is` / `!is` · smart casts · `as` / `as?` · `Any` · smart casts with `when` · stable vals only |
| 15 | `kt-15-const-lateinit-lazy.html` | const, lateinit & lazy | `const val` · `lateinit var` · `::x.isInitialized` · `by lazy { }` · `companion object` constants · initialization order |

### Group 4: Strings (Sheets 16–20)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 16 | `kt-16-string-basics.html` | String Basics | immutable `String` · templates `$name` / `${obj.prop}` · raw strings `"""` · `trimIndent()` / `trimMargin()` · `length` · indexing `s[0]` |
| 17 | `kt-17-building-strings.html` | Building Strings | `buildString { }` · `StringBuilder` · `joinToString()` · `padStart` / `padEnd` · `"%.2f".format(x)` · `repeat()` |
| 18 | `kt-18-string-methods-search.html` | String Methods — Search | `contains` · `startsWith` / `endsWith` · `indexOf` / `lastIndexOf` · `isBlank()` / `isEmpty()` / `isNullOrBlank()` · `equals(ignoreCase = true)` · `count { }` |
| 19 | `kt-19-string-methods-transform.html` | String Methods — Transform | `uppercase()` / `lowercase()` · `trim()` · `replace` · `split` / `lines()` · `substring` / `substringBefore` / `substringAfter` · `take` / `drop` · `reversed()` |
| 20 | `kt-20-regex.html` | Regex & Parsing | `Regex("…")` / `toRegex()` · `matches` · `find` / `findAll` · `MatchResult.groupValues` · `destructured` · `replace` with lambda |

### Group 5: Operators (Sheets 21–25)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 21 | `kt-21-arithmetic.html` | Arithmetic | `+ - * / %` · integer division · `rem` vs `mod` · `++` / `--` · `+=` compound · `coerceIn` |
| 22 | `kt-22-comparison-equality.html` | Comparison & Equality | `==` structural (`equals`) · `===` referential · `compareTo` · `< > <= >=` · `in` / `!in` · `compareValues` |
| 23 | `kt-23-logical-bitwise.html` | Logical & Bitwise | `&& \|\| !` · infix `and` / `or` / `xor` · `shl` / `shr` / `ushr` · `inv()` · `countOneBits()` · bit flags |
| 24 | `kt-24-null-safety-operators.html` | Null-Safety Operators | safe call `?.` · Elvis `?:` · `?: return` / `?: throw` · `!!` · `?.let { }` · safe cast `as?` · `filterNotNull()` |
| 25 | `kt-25-operator-overloading.html` | Operator Overloading | `operator fun plus` · `get` / `set` indexers · `invoke` · `contains` (`in`) · `compareTo` · `rangeTo` / `rangeUntil` · `component1()` |

### Group 6: Control Flow (Sheets 26–31)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 26 | `kt-26-if-expression.html` | if as an Expression | `if` / `else if` / `else` · `val x = if (…) a else b` · no ternary · last expression is the value · block bodies |
| 27 | `kt-27-when.html` | when | `when (x)` · `when` without subject · `is` / `in` branches · multiple values `1, 2 ->` · exhaustive `when` · guard conditions `if` in branches |
| 28 | `kt-28-for-loops.html` | for Loops | `for (x in list)` · `..` / `..<` / `until` · `downTo` · `step` · `withIndex()` · `indices` |
| 29 | `kt-29-while-do-while.html` | while & do-while | `while` · `do { } while` · `repeat(n) { }` · loop variables · `forEach` vs loops |
| 30 | `kt-30-break-continue-labels.html` | break, continue & Labels | `break` / `continue` · labels `outer@` · `break@outer` · `return@forEach` · non-local returns from inline lambdas |
| 31 | `kt-31-ranges-progressions.html` | Ranges & Progressions | `IntRange` · `CharRange` · `in` checks · `reversed()` · `step` · `first` / `last` · `coerceIn` |

### Group 7: Error Handling (Sheets 32–35)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 32 | `kt-32-try-catch-expression.html` | try / catch / finally | `try` as an expression · multiple `catch` · `finally` · `Exception` hierarchy · catch order |
| 33 | `kt-33-throw-nothing-preconditions.html` | throw, Nothing & Preconditions | `throw` as an expression · `Nothing` type · `require` / `requireNotNull` · `check` / `checkNotNull` · `error()` · `TODO()` |
| 34 | `kt-34-custom-exceptions.html` | Custom Exceptions & No Checked Exceptions | `class MyException : Exception()` · no checked exceptions · `@Throws` for Java callers · exception chaining `cause` · sealed error types |
| 35 | `kt-35-runcatching-result.html` | runCatching & Result | `runCatching { }` · `Result<T>` · `getOrNull` / `getOrElse` / `getOrDefault` · `onSuccess` / `onFailure` · `fold` · `use { }` for resources |

### Group 8: Functions (Sheets 36–45)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 36 | `kt-36-defining-functions.html` | Defining Functions | `fun` · single-expression `= …` · return types · `Unit` · top-level vs member functions · `Nothing` returns |
| 37 | `kt-37-default-named-arguments.html` | Default & Named Arguments | default values · named arguments · mixing positional & named · `@JvmOverloads` · replacing overloads & builders |
| 38 | `kt-38-vararg-spread.html` | vararg & Spread | `vararg` · spread `*array` · `vararg` with other params · `Array<out T>` · `listOf(*arr)` |
| 39 | `kt-39-extension-functions.html` | Extension Functions & Properties | `fun String.shout()` · `this` receiver · extension properties · nullable receivers · resolved statically · extensions on companions |
| 40 | `kt-40-infix-local-tailrec.html` | Infix, Local & tailrec Functions | `infix fun` · `to` pairs · local functions · `tailrec` · recursion · `Nothing`-returning helpers |
| 41 | `kt-41-lambdas.html` | Lambdas | `{ x -> x * 2 }` · implicit `it` · trailing lambda syntax · `_` unused params · return value of a lambda · destructuring params |
| 42 | `kt-42-higher-order-function-types.html` | Higher-Order Functions & Function Types | `(Int) -> Int` · nullable function types · `::functionRef` · returning functions · `T.() -> Unit` receivers · `typealias` for function types |
| 43 | `kt-43-inline-reified.html` | inline & reified | `inline fun` · `noinline` · `crossinline` · non-local returns · `reified T` · how `filterIsInstance<T>()` works |
| 44 | `kt-44-scope-functions.html` | Scope Functions | `let` · `run` · `with` · `apply` · `also` · `takeIf` / `takeUnless` · choosing one (receiver vs `it`, result vs object) |
| 45 | `kt-45-function-references-sam.html` | Function References & SAM Conversions | `::method` · bound references `obj::method` · constructor references `::Person` · `fun interface` · SAM conversion for Java interfaces |

### Group 9: Collections (Sheets 46–55)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 46 | `kt-46-lists.html` | Lists | `listOf` / `mutableListOf` · read-only vs mutable · `list[i]` · `getOrNull` / `getOrElse` · `indices` / `lastIndex` · `emptyList()` |
| 47 | `kt-47-list-operations.html` | List Operations | `add` / `addAll` · `removeAt` / `removeIf` · `subList` · `plus` / `minus` · `buildList { }` · `toMutableList()` |
| 48 | `kt-48-sets.html` | Sets | `setOf` / `mutableSetOf` · `union` / `intersect` / `subtract` · `contains` · `LinkedHashSet` order · `sortedSetOf` · `toSet()` dedup |
| 49 | `kt-49-maps-basics.html` | Maps — Basics | `mapOf("a" to 1)` · `mutableMapOf` · `map[key]` · `getValue` · `getOrDefault` · `entries` / `keys` / `values` · `for ((k, v) in map)` |
| 50 | `kt-50-map-operations.html` | Map Operations | `getOrPut` · `mapValues` / `mapKeys` · `filterKeys` / `filterValues` · `+` / `-` · `buildMap { }` · `withDefault` |
| 51 | `kt-51-arrays.html` | Arrays | `Array<T>` · `arrayOf` · `IntArray` / `DoubleArray` (primitives) · `Array(n) { it }` · `contentEquals` / `contentToString` · `toList()` |
| 52 | `kt-52-collection-transformations.html` | Transformations | `map` / `mapNotNull` / `mapIndexed` · `filter` / `filterIsInstance` · `flatMap` / `flatten` · `zip` · `associate` / `associateBy` · `chunked` / `windowed` |
| 53 | `kt-53-aggregation-grouping.html` | Aggregation & Grouping | `sum` / `sumOf` · `count` · `fold` / `reduce` · `groupBy` · `partition` · `maxByOrNull` / `minOf` · `groupingBy().eachCount()` |
| 54 | `kt-54-sorting-searching.html` | Sorting & Searching | `sorted` / `sortedDescending` · `sortedBy` / `sortedWith` · `compareBy` / `thenBy` · `first` / `firstOrNull` / `find` · `any` / `all` / `none` · `binarySearch` |
| 55 | `kt-55-sequences.html` | Sequences | `asSequence()` · lazy vs eager · `sequence { yield() }` · `generateSequence` · terminal operations · when sequences pay off |

### Group 10: Classes & Objects (Sheets 56–70)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 56 | `kt-56-classes-constructors.html` | Classes & Constructors | `class Person(val name: String)` · primary constructor · `init` blocks · secondary `constructor` · default params instead of overloads · no `new` |
| 57 | `kt-57-properties.html` | Properties | `val` / `var` properties · custom `get()` / `set()` · `field` backing field · `private set` · backing properties `_items` · computed properties |
| 58 | `kt-58-visibility-modifiers.html` | Visibility Modifiers | `public` (default) · `private` · `protected` · `internal` & modules · top-level visibility · constructor visibility |
| 59 | `kt-59-inheritance.html` | Inheritance | `open` · final by default · `override` · `super` · calling the superclass constructor · `final override` |
| 60 | `kt-60-abstract-interfaces.html` | Abstract Classes & Interfaces | `abstract class` · `interface` with default methods · properties in interfaces · multiple interfaces · `super<A>.foo()` |
| 61 | `kt-61-data-classes.html` | Data Classes | `data class` · generated `equals` / `hashCode` / `toString` · `copy()` · `componentN` & destructuring · rules & limits |
| 62 | `kt-62-enum-classes.html` | Enum Classes | `enum class` · properties & methods on enums · `entries` · `valueOf` · exhaustive `when` · interfaces on enums |
| 63 | `kt-63-sealed-classes.html` | Sealed Classes & Interfaces | `sealed class` / `sealed interface` · exhaustive `when` · state & result modeling · `data object` subclasses · same-package rule |
| 64 | `kt-64-objects-companions.html` | Objects & Companion Objects | `object` singletons · `companion object` · `@JvmStatic` · factory methods · object expressions (anonymous) · `data object` |
| 65 | `kt-65-value-classes.html` | Value Classes | `@JvmInline value class` · wrapping primitives without overhead · type-safe IDs · boxing rules · name mangling |
| 66 | `kt-66-nested-inner-classes.html` | Nested, Inner & Anonymous Classes | nested (static by default) · `inner` · `this@Outer` · anonymous objects · local classes |
| 67 | `kt-67-delegation.html` | Delegation | class delegation `by` · delegated properties · `lazy` · `Delegates.observable` / `vetoable` · map-backed properties · `ReadWriteProperty` |
| 68 | `kt-68-generics.html` | Generics | `class Box<T>` · `fun <T> f()` · upper bounds `T : Comparable<T>` · `where` clauses · type inference · `reified` (pointer to 43) |
| 69 | `kt-69-variance.html` | Variance | `out` (covariant) · `in` (contravariant) · declaration-site variance · use-site projections · star projection `*` · `List` vs `MutableList` |
| 70 | `kt-70-type-hierarchy-aliases.html` | Any, Unit, Nothing & Type Aliases | `Any` / `Any?` · `Unit` · `Nothing` · `typealias` · platform types `T!` preview · type hierarchy diagram |

### Group 11: Files & I/O (Sheets 71–74)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 71 | `kt-71-reading-files.html` | Reading Files | `File("x").readText()` · `readLines()` · `useLines { }` · `bufferedReader()` · `kotlin.io.path` `Path.readText()` · charsets |
| 72 | `kt-72-writing-files-paths.html` | Writing Files & Paths | `writeText` / `appendText` · `printWriter().use { }` · `Path("a") / "b"` · `createDirectories()` · `walk()` · `deleteIfExists()` |
| 73 | `kt-73-kotlinx-serialization.html` | JSON with kotlinx.serialization | `@Serializable` · `Json.encodeToString` · `decodeFromString` · `Json { ignoreUnknownKeys = true }` · `@SerialName` · plugin setup |
| 74 | `kt-74-resources-use.html` | Resources & use | `use { }` · `AutoCloseable` · classpath resources · `this::class.java.getResource` · `Properties` files |

### Group 12: Packages & Java Interop (Sheets 75–79)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 75 | `kt-75-packages-imports.html` | Packages & Imports | `package` · `import` · `import … as` alias · default imports · top-level declarations · file-level annotations |
| 76 | `kt-76-dependencies-version-catalogs.html` | Dependencies & Version Catalogs | `implementation(…)` · `testImplementation` · `libs.versions.toml` · Kotlin compiler plugins · BOMs · pointer to the Gradle set |
| 77 | `kt-77-calling-java.html` | Calling Java from Kotlin | platform types `T!` · getters/setters as properties · nullability annotations · SAM conversions · Java collections · checked exceptions ignored |
| 78 | `kt-78-calling-kotlin-from-java.html` | Calling Kotlin from Java | `@JvmStatic` · `@JvmOverloads` · `@JvmField` · `@JvmName` / `@file:JvmName` · `Companion` access · `@Throws` |
| 79 | `kt-79-standard-library-tour.html` | Standard Library Tour | `kotlin.math` · `kotlin.random.Random` · `kotlin.time.Duration` · `measureTime { }` · `kotlinx-datetime` · `java.time` interop |

### Group 13: Testing & Tooling (Sheets 80–82)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 80 | `kt-80-testing-kotlin-test-junit.html` | kotlin.test & JUnit | `kotlin.test` · `@Test` · `assertEquals` / `assertFailsWith` · JUnit Jupiter · backtick test names · `runTest` for coroutines |
| 81 | `kt-81-kotest-mockk.html` | Kotest & MockK | Kotest specs (`StringSpec`, `FunSpec`) · `shouldBe` matchers · `mockk<T>()` · `every { }` / `verify { }` · `coEvery` · `relaxed` mocks |
| 82 | `kt-82-tooling-lint-docs.html` | Lint, Docs & Scripting | ktlint · detekt · Dokka · Kotlin scripts `.main.kts` · `@file:DependsOn` · IntelliJ Java-to-Kotlin converter |

### Group 14: Coroutines & Flow (Sheets 83–89)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 83 | `kt-83-coroutine-basics.html` | Coroutine Basics | `suspend fun` · `runBlocking` · `launch` · `delay` · `kotlinx-coroutines-core` · coroutines vs threads |
| 84 | `kt-84-async-structured-concurrency.html` | async & Structured Concurrency | `async` / `await` · `awaitAll` · `coroutineScope` · `Job` · parent-child cancellation · `CoroutineScope` |
| 85 | `kt-85-dispatchers-context.html` | Dispatchers & Context | `Dispatchers.Default` / `IO` / `Main` · `withContext` · `CoroutineContext` · `CoroutineName` · `limitedParallelism` |
| 86 | `kt-86-cancellation-timeouts.html` | Cancellation & Timeouts | `cancel()` · `isActive` / `ensureActive()` · `withTimeout` / `withTimeoutOrNull` · `CancellationException` · `NonCancellable` |
| 87 | `kt-87-coroutine-exceptions.html` | Exceptions in Coroutines | propagation in `launch` vs `async` · `CoroutineExceptionHandler` · `supervisorScope` · `SupervisorJob` · rethrowing cancellation |
| 88 | `kt-88-flow.html` | Flow | `flow { emit() }` · `collect` · `map` / `filter` / `take` · cold streams · `flowOn` · `catch` / `onCompletion` |
| 89 | `kt-89-stateflow-sharedflow-channels.html` | StateFlow, SharedFlow & Channels | `MutableStateFlow` · `SharedFlow` · `stateIn` / `shareIn` · `Channel` · `produce` · hot vs cold |

### Group 15: Advanced & Ecosystem (Sheets 90–94)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 90 | `kt-90-annotations-reflection.html` | Annotations & Reflection | `annotation class` · `@Target` / `@Retention` · use-site targets `@get:` · `::class` / `KClass` · `kotlin-reflect` · `::prop` references |
| 91 | `kt-91-type-safe-builders-dsls.html` | Type-Safe Builders & DSLs | lambdas with receiver · `@DslMarker` · `buildList` / `buildString` · HTML builder example · Gradle Kotlin DSL as a DSL |
| 92 | `kt-92-ktor.html` | Ktor | `embeddedServer(Netty)` · `routing { get("/") }` · `call.respond` · `ContentNegotiation` · plugins · Ktor client |
| 93 | `kt-93-spring-boot-kotlin.html` | Spring Boot with Kotlin | `kotlin("plugin.spring")` (all-open) · constructor injection · data classes as DTOs · `kotlin("plugin.jpa")` · coroutines in controllers · `runApplication<App>()` |
| 94 | `kt-94-multiplatform-android.html` | Multiplatform & Android Overview | `commonMain` / `jvmMain` / `iosMain` · `expect` / `actual` · Compose Multiplatform · Android Studio · Jetpack Compose pointer |

### Group 16: Quick Reference (Sheet 95)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 95 | `kt-95-quick-reference-syntax.html` | Quick Reference — Syntax, Collections & Coroutines | declarations · null-safety operators · `when` · classes · scope functions · Java ↔ Kotlin syntax |
