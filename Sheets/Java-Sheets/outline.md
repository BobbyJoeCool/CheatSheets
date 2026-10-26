# Java Reference Guide Outline (136 sheets)

## Metadata

- **Group it belongs to:** Java
- **Folder Directory:** `Sheets/Java-Sheets/java-###-[slug].html`
- **Groups:** 14
- **Sheets:** 136
- **Drafted Date:** 2026-10-02 (re-drafted after the sheets were live)
- **Verified-Finalized Date:** 2026-10-02

## Basic Information

Java from syntax basics through the standard library and the wider ecosystem: control flow, methods, collections and streams, OOP, file I/O, modules and packages, Maven and Gradle, JUnit and popular libraries, concurrency, JDBC and Hibernate, and the Swing and JavaFX GUI toolkits.

## Differences in Layout from Basic Structure

- Numbers are three digits throughout (`java-001` to `java-136`) because the set passes 99.
- Three extra boxes, described below: **Java Versions** and **Idiomatic Java** on every sheet, and **Under the JVM** on the sheets listed in the table.
- Sheets 135–136 are table-only quick-reference pages and skip all three boxes.

### Java Versions box (every sheet)

- `<section class="section-version" id="version">`, title **Java Versions**.
- 2–4 `note-item` lines, oldest first, each starting with the release in `<strong>`: the release each API or syntax on the sheet arrived in, and what it replaced (`var` — 10 · replaces explicit local types). Mark LTS releases (8, 11, 17, 21, 25) and preview features (`21 preview`).
- When nothing on the sheet changed since 1.0, say so in one line and name the nearest related addition (`Unchanged since 1.0 · Math.floorMod — 8 · Math.clamp — 21`).
- Stays factual: *when* something arrived. *Why* the new form is better belongs in Idiomatic Java.

### Idiomatic Java box (every sheet)

- `<section class="section-idiom" id="idiom">`, title **Idiomatic Java**.
- 2–4 avoid/prefer pairs in the spirit of *Effective Java*. Use a small code block with `// avoid` / `// prefer` comments, or `note-item` lines when one-liners are enough: `<span class="idiom-avoid">avoid</span> → <span class="idiom-prefer">prefer</span>` (✗ + strike vs ✓ + bold, so the halves read apart in black and white).
- Every pair must be a real idiom for this sheet's topic (`Arrays.asList(a, b)` → `List.of(a, b)`; `finally { in.close(); }` → try-with-resources), never a restatement of the main code block or a Common Mistakes item.
- When the preferred form is newer, the Java Versions box already says when it arrived; don't repeat the version here.

### Under the JVM box (selected sheets)

- `<section class="section-jvm" id="jvm">`, title **Under the JVM**.
- 2–4 items on what the code actually does at runtime: bytecode it compiles to, memory layout, JIT behavior, GC impact, or a cost that isn't visible in the source (`Integer` cache −128…127 · `+` in a loop allocates · lambdas via `invokedynamic`).
- Each item should change how someone writes or debugs the code. Skip trivia.
- If a sheet doesn't fit on one page, cut Under the JVM to 2 items first, then Idiomatic Java, then Java Versions, before touching the main content.

### Placement

| Sheet has | Row 1 | col-2-2 (beside the code) |
|---|---|---|
| No Under the JVM box | Description · Notes | Code Explained, then Java Versions, then Idiomatic Java |
| Under the JVM box | Description · Notes · Under the JVM (`col-1-3`) | Code Explained, then Java Versions, then Idiomatic Java |

`java-cheatsheet.css` gets `.section-version`, `.section-idiom` and `.section-jvm` styles with their own accent colors, so none of them reads as part of Code Explained (same approach as the Ruby Way and In Rails boxes).

### Sheets with an Under the JVM box (85)

| # | Under the JVM content |
|---|---|
| 001 | `javac` → bytecode → class loading → interpreter → JIT · JDK vs runtime image |
| 002 | how the launcher finds `main` · lazy class loading · static initializer order |
| 003 | `System.out` is a synchronized `PrintStream` · autoflush on `println` · cost in hot loops |
| 005 | `var` is compile-time only · locals live in the stack frame, fields on the heap · `final` locals vanish from bytecode |
| 006 | `int` is 32-bit two's complement · `long`/`double` writes not atomic without `volatile` · `char` is a UTF-16 code unit |
| 007 | widening/narrowing bytecodes (`i2l`, `l2i` truncates) · reference casts compile to `checkcast` |
| 008 | `Integer` cache −128…127 · boxing allocates · unboxing `null` throws NPE |
| 009 | integer overflow wraps silently · `/ 0` throws for ints, gives `Infinity` for doubles · all FP strict since 17 |
| 010 | `==` compares references · string pool makes literal `==` look like it works |
| 012 | shift distance masked to 5 bits (`int`) / 6 bits (`long`) · `byte`/`short` promoted to `int` before shifting |
| 013 | compound assignment hides a narrowing cast (`b += 1` compiles, `b = b + 1` doesn't) |
| 014 | string pool · compact strings (Latin-1 bytes, 9) · `+` compiles to `invokedynamic` `StringConcatFactory` (9) |
| 015 | `substring` copies (since 7u6) · `split` fast path for single-char patterns |
| 016 | `String.format` re-parses the pattern every call · `Formatter` allocation cost |
| 017 | `Scanner` tokenizes with regex · 1024-char buffer · why it's slow for big input |
| 018 | 8192-char buffer · one syscall per buffer fill, not per line |
| 019 | `intern` uses the heap string table (7+) · `StringBuffer` lock cost vs `StringBuilder` |
| 020 | arrays are objects (header + length) · zeroed on allocation · bounds check, removed by JIT in simple loops |
| 021 | pattern-matching `instanceof` compiles to `instanceof` + `checkcast` + local store |
| 023 | `tableswitch` vs `lookupswitch` · String switch = `hashCode` + `equals` · enum switch via synthetic `$SwitchMap` |
| 024 | pattern switch uses `invokedynamic` `SwitchBootstraps` · exhaustiveness adds a hidden `MatchException` default |
| 028 | for-each over arrays → indexed loop, over `Iterable` → `Iterator` · `modCount` drives the CME |
| 030 | exception table makes `try` free · cost is `fillInStackTrace` at construction |
| 031 | checked exceptions are a compiler rule only · the JVM doesn't enforce `throws` |
| 033 | try-with-resources desugaring · `addSuppressed` · null-check on the resource |
| 034 | `invokestatic` / `invokevirtual` · small methods inlined by the JIT (~35 bytecodes) |
| 035 | the reference is copied, the object isn't · each call pushes a stack frame |
| 036 | overload chosen at compile time from static types · override chosen at runtime |
| 037 | escape analysis can scalar-replace a returned record · returning `null` vs `Optional` cost |
| 038 | lambdas capture locals by copy (why "effectively final") · slot reuse in the frame |
| 039 | `invokestatic` has no `this` · static calls are trivially inlinable |
| 040 | lambdas via `invokedynamic` `LambdaMetafactory` · non-capturing lambdas are singletons · no `$1.class` files |
| 041 | method references use the same metafactory · bound refs capture the receiver |
| 042 | no tail-call optimization · depth limited by `-Xss` · `StackOverflowError` |
| 043 | every varargs call allocates an array · heap pollution with generic varargs |
| 044 | 2D arrays are arrays of arrays, not contiguous · row-major loops for cache locality |
| 045 | backing `Object[]` grows 1.5× · elements are boxed · `ensureCapacity` / initial size |
| 046 | 24+ bytes of node per element · pointer chasing kills cache locality |
| 047 | buckets + hash spreading · treeify at 8 per bucket (8) · resize doubles and rehashes |
| 048 | `HashSet` is a `HashMap` with a dummy value |
| 049 | red-black tree · O(log n) with pointer overhead · `compareTo` consistency with `equals` |
| 050 | `Stack` extends `Vector` (every call synchronized) · `PriorityQueue` is an array heap |
| 051 | `ArrayDeque` is a circular array · no per-element nodes · no `null` allowed |
| 052 | type erasure · bridge methods · no `List<int>` · casts inserted at call sites |
| 053 | lazy, fused single-pass pipeline · boxing in `Stream<Integer>` vs `IntStream` |
| 054 | `mapToInt` avoids boxing · `flatMap` allocates a stream per element |
| 055 | parallel streams use the common `ForkJoinPool` · `groupingBy` builds `HashMap`s |
| 056 | TimSort for objects (stable) · dual-pivot quicksort for primitives |
| 057 | fail-fast via `modCount` · best-effort, not a thread-safety guarantee |
| 058 | object header 12–16 bytes · TLAB bump allocation · young-gen GC makes short-lived objects cheap |
| 059 | constructors compile to `<init>` · field defaults → initializers → constructor body order |
| 061 | static state lives with the class · class init runs once and is thread-safe (holder idiom) |
| 062 | single inheritance via the vtable · `Object` is every class's root |
| 064 | dynamic dispatch through the vtable · JIT devirtualizes monomorphic calls · identity `hashCode` in the header |
| 065 | `checkcast` and `ClassCastException` · inline caches: mono / bi / megamorphic call sites |
| 067 | trivial getters are inlined to a field read |
| 069 | interface calls use `invokeinterface` · default methods live in the interface class file |
| 071 | an enum is a final class with one instance per constant · `EnumMap` is array-backed |
| 072 | records are final classes · `equals`/`hashCode`/`toString` generated via `invokedynamic` `ObjectMethods` |
| 073 | `PermittedSubclasses` attribute enforced by the JVM at class load |
| 074 | reflection cost · `setAccessible` blocked by strong module encapsulation (17) · `MethodHandle` alternative |
| 075 | inner classes hold a hidden `Outer.this` (memory leaks) · `Outer$Inner.class` · nestmates (11) |
| 082 | deserialization skips constructors · serialization filters (9) · why it's a security risk |
| 083 | `FileInputStream.read()` is one syscall per call · `transferTo` · direct vs heap buffers |
| 084 | imports are compile-time only · classes load on first use · the classpath search |
| 085 | module path vs classpath · strong encapsulation · `opens` for reflection |
| 088 | `Math` methods are JIT intrinsics · `StrictMath` · `*Exact` throws instead of wrapping |
| 089 | `Random` uses CAS on a shared seed (contention) · `ThreadLocalRandom` per thread |
| 090 | backing array doubles (+2) on growth · presize with capacity · javac already uses it for simple `+` |
| 097 | `Optional` is a heap allocation (often removed by escape analysis) · not `Serializable` |
| 098 | `nanoTime` is monotonic, `currentTimeMillis` isn't · `arraycopy` intrinsic · `exit` runs shutdown hooks |
| 099 | `Pattern.compile` cost · catastrophic backtracking · `Pattern` is immutable and thread-safe |
| 110 | Lombok runs in `javac` as an annotation processor · nothing at runtime · `delombok` |
| 112 | platform threads are OS threads (~1 MB stack each) · thread states in a thread dump |
| 113 | worker threads reused · unbounded queues in `newFixedThreadPool` · why `shutdown` matters |
| 114 | `*Async` without an executor uses the common `ForkJoinPool` · blocking in it starves other tasks |
| 115 | Java Memory Model · happens-before · `volatile` visibility · monitors · CAS in `Atomic*` |
| 116 | virtual threads mount on carrier threads · continuations · `synchronized` pinning (fixed in 24) |
| 117 | drivers found via `ServiceLoader` (no more `Class.forName`) · sockets behind `Connection` |
| 120 | pooled connections are reused, not closed · `close()` returns to the pool |
| 121 | Hibernate generates proxy subclasses at runtime (ByteBuddy) for lazy loading |
| 122 | first-level cache · dirty checking at flush · where N+1 queries come from |
| 123 | Swing is single-threaded on the EDT · long work freezes the UI |
| 126 | the JavaFX Application Thread · `launch` boots the toolkit · module path requirements |
| 129 | `Task` runs off the FX thread · `Platform.runLater` queues back onto it |

## Groups

### Group 1: Basics (Sheets 001–020)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 001 | `java-001-introduction.html` | Introduction to Java | history · JVM · JDK · JRE · LTS releases · .java · .class |
| 002 | `java-002-program-structure.html` | Program Structure | package · import · class · main · static void · String[] args · braces |
| 003 | `java-003-output.html` | Output Statements | System.out.println · print · printf · System.err · escape sequences · %n |
| 004 | `java-004-comments.html` | Comments & Javadoc | // · /* */ · /** */ · @param · @return · @throws · javadoc tool |
| 005 | `java-005-variables.html` | Variables & Constants | declaration · initialization · var · final · static final · camelCase · scope |
| 006 | `java-006-data-types.html` | Primitive Data Types | byte · short · int · long · float · double · char · boolean · literals |
| 007 | `java-007-type-conversion.html` | Type Conversion & Casting | widening · narrowing · (int) cast · parseInt · valueOf · String.valueOf · promotion |
| 008 | `java-008-autoboxing.html` | Autoboxing & Wrapper Types | Integer · Double · Boolean · Character · valueOf · unboxing · Integer cache · null |
| 009 | `java-009-arithmetic.html` | Arithmetic Operators | + · - · * · / · % · ++ · -- · integer division · precedence |
| 010 | `java-010-comparison.html` | Comparison Operators | == · != · &lt; · > · &lt;= · >= · equals() · compareTo · reference vs value |
| 011 | `java-011-logical.html` | Logical Operators | && · \|\| · ! · short-circuit · & · \| · ^ · De Morgan |
| 012 | `java-012-bitwise.html` | Bitwise Operators | & · \| · ^ · ~ · &lt;&lt; · >> · >>> · masks · flags |
| 013 | `java-013-assignment.html` | Assignment Operators | = · += · -= · *= · /= · %= · compound assignment · implicit cast |
| 014 | `java-014-strings-basics.html` | String Basics | String literal · immutability · + concat · length() · string pool · text blocks · null vs "" |
| 015 | `java-015-strings-methods.html` | String Methods | charAt · substring · indexOf · contains · replace · split · trim · strip · startsWith |
| 016 | `java-016-strings-formatting.html` | String Formatting | String.format · formatted() · %s · %d · %f · %n · width · flags · padding |
| 017 | `java-017-scanner.html` | Scanner Input | Scanner · System.in · nextLine · nextInt · nextDouble · hasNextInt · close |
| 018 | `java-018-bufferedreader.html` | BufferedReader Input | BufferedReader · InputStreamReader · readLine · lines() · parseInt · IOException · StringTokenizer |
| 019 | `java-019-strings-advanced.html` | Advanced Strings | StringBuffer · intern · compareTo · compareToIgnoreCase · matches · chars · codePoints · String.valueOf |
| 020 | `java-020-arrays-1d.html` | Arrays — 1D | int[] · new · length · index · array literal · for-each · ArrayIndexOutOfBounds · default values |

### Group 2: Control Flow (Sheets 021–033)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 021 | `java-021-if-else.html` | If / Else | if · else if · else · nested if · braces · guard clause · pattern matching instanceof |
| 022 | `java-022-ternary.html` | Ternary Operator | ?: · conditional expression · nested ternary · type promotion · null default |
| 023 | `java-023-switch-classic.html` | Switch — Classic | switch · case · break · default · fall-through · String switch · enum switch |
| 024 | `java-024-switch-modern.html` | Switch — Expressions (Java 14+) | -> arrow · yield · switch expression · exhaustiveness · pattern matching · when guard · case null |
| 025 | `java-025-for-loop.html` | For Loop | for · init · condition · update · nested loops · counting down · step · multiple variables |
| 026 | `java-026-while-loop.html` | While Loop | while · condition · sentinel · infinite loop · while(true) · input loop · iterator loop |
| 027 | `java-027-do-while.html` | Do-While Loop | do · while · post-test loop · menu loop · input validation · retry |
| 028 | `java-028-enhanced-for.html` | Enhanced For Loop | for-each · Iterable · arrays · collections · Map.entrySet · ConcurrentModificationException · var |
| 029 | `java-029-break-continue.html` | Break & Continue | break · continue · labeled break · labeled continue · return · early exit |
| 030 | `java-030-try-catch.html` | Try / Catch | try · catch · Exception · getMessage · multi-catch · printStackTrace · exception hierarchy |
| 031 | `java-031-throws-checked.html` | Throws & Checked Exceptions | throw · throws · checked · unchecked · RuntimeException · IOException · rethrow · cause chaining |
| 032 | `java-032-custom-exceptions.html` | Custom Exceptions | extends Exception · extends RuntimeException · constructors · cause · custom fields · serialVersionUID |
| 033 | `java-033-finally-twr.html` | Finally & Try-with-Resources | finally · try-with-resources · AutoCloseable · close() · suppressed exceptions · resource cleanup |

### Group 3: Methods & Functions (Sheets 034–043)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 034 | `java-034-methods-basics.html` | Defining & Calling Methods | method signature · return type · void · static · access modifier · calling · naming |
| 035 | `java-035-parameters.html` | Parameters & Arguments | parameters · arguments · pass-by-value · reference types · final params · defensive copy |
| 036 | `java-036-overloading.html` | Method Overloading | overloading · signature · parameter types · arity · type promotion · ambiguity · constructors |
| 037 | `java-037-return-values.html` | Return Values | return · void · early return · returning objects · returning multiple values · record · Optional |
| 038 | `java-038-scope.html` | Variable Scope | local · block · parameter · instance field · static field · shadowing · effectively final · lifetime |
| 039 | `java-039-static-instance.html` | Static vs Instance Methods | static · instance · this · utility class · factory method · static context · state |
| 040 | `java-040-lambda.html` | Lambda Expressions | -> · functional interface · Predicate · Function · Consumer · Supplier · BiFunction · @FunctionalInterface |
| 041 | `java-041-method-references.html` | Method References | :: · static reference · bound instance · unbound instance · constructor reference · Comparator.comparing |
| 042 | `java-042-recursion.html` | Recursion | base case · recursive case · call stack · StackOverflowError · factorial · fibonacci · memoization |
| 043 | `java-043-varargs.html` | Varargs | ... · variable arguments · array parameter · last parameter · overload resolution · String.format · @SafeVarargs |

### Group 4: Data Structures (Sheets 044–057)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 044 | `java-044-arrays-2d.html` | Arrays — 2D & Multi | int[][] · rows · columns · nested loops · jagged arrays · deepToString · matrix |
| 045 | `java-045-arraylist.html` | ArrayList | ArrayList · add · get · set · remove · size · contains · List.of · generics |
| 046 | `java-046-linkedlist.html` | LinkedList | LinkedList · addFirst · addLast · removeFirst · getFirst · poll · peek · doubly linked |
| 047 | `java-047-hashmap.html` | HashMap | HashMap · put · get · getOrDefault · containsKey · remove · entrySet · merge · computeIfAbsent |
| 048 | `java-048-hashset.html` | HashSet | HashSet · add · contains · remove · uniqueness · retainAll · removeAll · Set.of · LinkedHashSet |
| 049 | `java-049-treemap-treeset.html` | TreeMap & TreeSet | TreeMap · TreeSet · sorted order · firstKey · floorKey · ceiling · headMap · tailSet · descending |
| 050 | `java-050-stack-queue.html` | Stack & Queue | Stack · Queue · push · pop · peek · offer · poll · LIFO · FIFO · PriorityQueue |
| 051 | `java-051-deque.html` | Deque | ArrayDeque · Deque · addFirst · addLast · offerFirst · pollLast · peekFirst · double-ended · sliding window |
| 052 | `java-052-generics.html` | Generics | &lt;T> · type parameter · generic class · generic method · bounded type · ? extends · ? super · type erasure |
| 053 | `java-053-streams.html` | Streams | stream() · pipeline · intermediate · terminal · lazy evaluation · IntStream · Stream.of · toList |
| 054 | `java-054-map-filter.html` | map & filter | map · filter · flatMap · distinct · limit · skip · mapToInt · takeWhile · mapMulti |
| 055 | `java-055-reduce-collectors.html` | reduce & Collectors | reduce · collect · Collectors.toList · groupingBy · counting · joining · partitioningBy · toMap · summingInt |
| 056 | `java-056-sorting.html` | Sorting & Searching | Collections.sort · List.sort · Arrays.sort · Comparator · reverseOrder · binarySearch · stable sort |
| 057 | `java-057-iterators.html` | Iterators & Iterables | Iterator · hasNext · next · remove · ListIterator · Iterable · forEachRemaining · fail-fast |

### Group 5: Object-Oriented Programming (Sheets 058–075)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 058 | `java-058-classes-objects.html` | Classes & Objects | class · object · new · fields · methods · reference · null · toString |
| 059 | `java-059-constructors.html` | Constructors | constructor · default constructor · parameterized · this() · super() · overloading · initialization order |
| 060 | `java-060-this-keyword.html` | The this Keyword | this · field shadowing · this() · method chaining · fluent API · passing this |
| 061 | `java-061-instance-static.html` | Instance vs Static Members | static field · instance field · static block · static nested · class variable · shared state · memory |
| 062 | `java-062-inheritance.html` | Inheritance | extends · subclass · superclass · is-a · Object · protected · single inheritance · final class |
| 063 | `java-063-super.html` | The super Keyword | super · super() · super.method() · super.field · constructor chaining · multi-level inheritance |
| 064 | `java-064-overriding.html` | Method Overriding | @Override · override rules · covariant return · dynamic dispatch · final method · hiding · equals/hashCode |
| 065 | `java-065-polymorphism.html` | Polymorphism | polymorphism · upcasting · downcasting · instanceof · dynamic dispatch · ClassCastException · pattern matching |
| 066 | `java-066-encapsulation.html` | Encapsulation | private · public · protected · package-private · access modifiers · data hiding · invariants |
| 067 | `java-067-getters-setters.html` | Getters & Setters | getter · setter · get/is prefix · validation · immutability · final fields · records |
| 068 | `java-068-abstract.html` | Abstract Classes | abstract class · abstract method · partial implementation · template method · constructor · cannot instantiate |
| 069 | `java-069-interfaces.html` | Interfaces | interface · implements · abstract methods · default methods · static methods · private methods · constants |
| 070 | `java-070-implements-extends.html` | implements vs extends | extends · implements · multiple interfaces · diamond problem · interface extends interface · composition |
| 071 | `java-071-enums.html` | Enums | enum · constants · values() · valueOf · ordinal · fields · constructor · EnumMap · EnumSet · switch |
| 072 | `java-072-records.html` | Records (Java 16+) | record · components · accessor · compact constructor · immutability · equals · hashCode · toString |
| 073 | `java-073-sealed-classes.html` | Sealed Classes (Java 17+) | sealed · permits · non-sealed · final · exhaustive switch · algebraic data types · pattern matching |
| 074 | `java-074-annotations.html` | Annotations & Reflection | @interface · @Retention · @Target · @Override · Class&lt;?> · getDeclaredFields · getMethods · invoke |
| 075 | `java-075-inner-classes.html` | Inner & Anonymous Classes | static nested · inner class · local class · anonymous class · Outer.this · lambda vs anonymous |

### Group 6: Files & I/O (Sheets 076–083)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 076 | `java-076-filereader-writer.html` | FileReader & FileWriter | FileReader · FileWriter · append mode · character streams · charset · read() · write() · close |
| 077 | `java-077-buffered-io.html` | Buffered I/O | BufferedReader · BufferedWriter · readLine · newLine · lines() · PrintWriter · flush · Files.newBufferedReader |
| 078 | `java-078-files-nio.html` | Files & NIO | Files · Path · Path.of · readString · writeString · readAllLines · write · lines · StandardOpenOption |
| 079 | `java-079-file-paths.html` | File Paths & Directories | Path · resolve · relativize · normalize · toAbsolutePath · createDirectories · list · walk · DirectoryStream |
| 080 | `java-080-json-overview.html` | JSON in Java | JSON · objects · arrays · data types · serialization · Gson (Sheet 108) · Jackson (Sheet 109) · org.json |
| 081 | `java-081-csv-overview.html` | CSV in Java | CSV · delimiter · quoting · header row · split pitfalls · OpenCSV (Sheet 111) · Files.lines |
| 082 | `java-082-serialization.html` | Serialization | Serializable · ObjectOutputStream · ObjectInputStream · serialVersionUID · transient · writeObject · readObject |
| 083 | `java-083-streams-io.html` | Byte Streams & I/O Streams | InputStream · OutputStream · FileInputStream · DataOutputStream · binary files · transferTo · readAllBytes |

### Group 7: Modules & Packages (Sheets 084–087)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 084 | `java-084-packages-imports.html` | Packages & Imports | package · import · wildcard import · static import · fully qualified name · java.lang · classpath |
| 085 | `java-085-creating-packages.html` | Creating Packages & Modules | directory structure · reverse domain · module-info.java · JPMS · exports · requires · opens |
| 086 | `java-086-maven.html` | Maven | pom.xml · groupId · artifactId · dependencies · scope · lifecycle · mvn clean package · plugins |
| 087 | `java-087-gradle.html` | Gradle | build.gradle.kts · build.gradle · Kotlin DSL · Groovy DSL · implementation · testImplementation · tasks · gradlew |

### Group 8: Standard Library (Sheets 088–101)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 088 | `java-088-math.html` | Math Class | Math.abs · pow · sqrt · round · floor · ceil · max · min · random · PI · floorMod · addExact |
| 089 | `java-089-random.html` | Random Numbers | Random · nextInt · nextDouble · bounds · seed · ThreadLocalRandom · SecureRandom · Math.random |
| 090 | `java-090-stringbuilder.html` | StringBuilder | StringBuilder · append · insert · delete · reverse · setCharAt · capacity · toString · chaining |
| 091 | `java-091-localdate.html` | LocalDate | LocalDate · of · now · parse · plusDays · getDayOfWeek · isBefore · Period · ChronoUnit · leap year |
| 092 | `java-092-localtime.html` | LocalTime | LocalTime · of · now · parse · plusHours · truncatedTo · Duration · isBefore · MIDNIGHT · NOON |
| 093 | `java-093-localdatetime.html` | LocalDateTime & Zones | LocalDateTime · ZonedDateTime · Instant · ZoneId · OffsetDateTime · atZone · DST · epoch |
| 094 | `java-094-datetimeformatter.html` | DateTimeFormatter | DateTimeFormatter · ofPattern · format · parse · ISO formats · Locale · FormatStyle · pattern letters |
| 095 | `java-095-collections-util.html` | Collections Utility Class | Collections.sort · reverse · shuffle · max · min · frequency · unmodifiableList · synchronizedList · nCopies |
| 096 | `java-096-arrays-util.html` | Arrays Utility Class | Arrays.toString · sort · fill · copyOf · copyOfRange · asList · equals · stream · binarySearch · deepToString |
| 097 | `java-097-optional.html` | Optional | Optional · of · ofNullable · empty · isPresent · ifPresent · orElse · orElseGet · orElseThrow · map · flatMap |
| 098 | `java-098-system.html` | System Class | System.out · System.in · System.err · currentTimeMillis · nanoTime · getenv · getProperty · exit · arraycopy · lineSeparator |
| 099 | `java-099-regex.html` | Regex — Pattern & Matcher | Pattern · Matcher · compile · find · matches · group · named groups · replaceAll · flags · split |
| 100 | `java-100-scanner-advanced.html` | Scanner — Advanced | useDelimiter · findInLine · Scanner(File) · Scanner(String) · tokens() · Locale · hasNext(pattern) · nextLine pitfalls |
| 101 | `java-101-comparable-comparator.html` | Comparable & Comparator | Comparable · compareTo · Comparator · compare · comparing · thenComparing · reversed · nullsFirst · natural order |

### Group 9: External Libraries (Sheets 102–111)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 102 | `java-102-junit-basics.html` | JUnit 5 — Basics | @Test · assertEquals · assertTrue · assertThrows · @BeforeEach · @AfterEach · @DisplayName · test lifecycle |
| 103 | `java-103-junit-advanced.html` | JUnit 5 — Advanced | @ParameterizedTest · @ValueSource · @CsvSource · @MethodSource · @Nested · @Tag · assumptions · @TempDir |
| 104 | `java-104-mockito.html` | Mockito | mock · when · thenReturn · verify · @Mock · @InjectMocks · ArgumentCaptor · spy · any() |
| 105 | `java-105-logging.html` | Logging — SLF4J & Log4j | SLF4J · Logger · LoggerFactory · levels · {} placeholders · Logback · Log4j 2 · MDC · configuration |
| 106 | `java-106-httpclient.html` | HttpClient (Built-in) | HttpClient · HttpRequest · HttpResponse · GET · POST · BodyHandlers · sendAsync · timeouts · headers |
| 107 | `java-107-okhttp.html` | OkHttp | OkHttpClient · Request.Builder · Response · RequestBody · MediaType · enqueue · Callback · interceptors |
| 108 | `java-108-gson.html` | Gson | Gson · toJson · fromJson · GsonBuilder · TypeToken · @SerializedName · @Expose · JsonParser · pretty printing |
| 109 | `java-109-jackson.html` | Jackson | ObjectMapper · readValue · writeValueAsString · TypeReference · @JsonProperty · @JsonIgnore · JsonNode · JavaTimeModule |
| 110 | `java-110-lombok.html` | Lombok | @Getter · @Setter · @Data · @Value · @Builder · @NoArgsConstructor · @AllArgsConstructor · @Slf4j · annotation processing |
| 111 | `java-111-opencsv.html` | OpenCSV | CSVReader · CSVWriter · CSVReaderBuilder · CsvToBeanBuilder · @CsvBindByName · StatefulBeanToCsv · quoting · separators |

### Group 10: Concurrency (Sheets 112–116)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 112 | `java-112-threads.html` | Threads | Thread · Runnable · start · run · join · sleep · interrupt · daemon · thread states · race condition |
| 113 | `java-113-executorservice.html` | ExecutorService | Executors · newFixedThreadPool · submit · Future · invokeAll · shutdown · awaitTermination · Callable · ScheduledExecutorService |
| 114 | `java-114-completablefuture.html` | CompletableFuture | supplyAsync · thenApply · thenCompose · thenCombine · allOf · exceptionally · handle · join · async pipelines |
| 115 | `java-115-synchronized.html` | Synchronization & Locks | synchronized · volatile · ReentrantLock · ReadWriteLock · AtomicInteger · ConcurrentHashMap · deadlock · happens-before |
| 116 | `java-116-virtual-threads.html` | Virtual Threads (Java 21) | virtual threads · Thread.ofVirtual · newVirtualThreadPerTaskExecutor · carrier thread · pinning · blocking I/O · structured concurrency |

### Group 11: Database (Sheets 117–122)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 117 | `java-117-jdbc-basics.html` | JDBC Basics | JDBC · DriverManager · Connection · Statement · ResultSet · JDBC URL · driver · SQLException · try-with-resources |
| 118 | `java-118-jdbc-crud.html` | JDBC CRUD Operations | INSERT · SELECT · UPDATE · DELETE · executeUpdate · generated keys · transactions · commit · rollback · batch |
| 119 | `java-119-prepared-statement.html` | PreparedStatement | PreparedStatement · ? placeholders · setString · setInt · SQL injection · batching · setNull · IN clause |
| 120 | `java-120-connection-pooling.html` | Connection Pooling (HikariCP) | HikariCP · DataSource · HikariConfig · maximumPoolSize · connectionTimeout · leak detection · pool sizing |
| 121 | `java-121-hibernate-basics.html` | Hibernate & JPA Basics | JPA · @Entity · @Id · @GeneratedValue · @Column · EntityManager · persistence.xml · ORM · relationships |
| 122 | `java-122-hibernate-crud.html` | Hibernate CRUD & JPQL | EntityManager · persist · find · merge · remove · JPQL · TypedQuery · CriteriaBuilder · transactions · N+1 |

### Group 12: GUI — Swing (Sheets 123–125)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 123 | `java-123-swing-basics.html` | Swing Basics | JFrame · JPanel · JLabel · JButton · JTextField · SwingUtilities.invokeLater · EDT · look and feel |
| 124 | `java-124-swing-layouts.html` | Swing Layout Managers | FlowLayout · BorderLayout · GridLayout · BoxLayout · GridBagLayout · nested panels · setLayout |
| 125 | `java-125-swing-events.html` | Swing Event Handling | ActionListener · addActionListener · MouseListener · MouseAdapter · KeyListener · DocumentListener · SwingWorker · lambdas |

### Group 13: GUI — JavaFX (Sheets 126–134)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 126 | `java-126-javafx-basics.html` | JavaFX Basics | Application · start · Stage · Scene · Parent · launch · OpenJFX · module setup · Platform.runLater |
| 127 | `java-127-javafx-layouts.html` | JavaFX Layouts | VBox · HBox · BorderPane · GridPane · StackPane · FlowPane · AnchorPane · Insets · alignment · grow priority |
| 128 | `java-128-javafx-controls.html` | JavaFX Controls | Button · Label · TextField · CheckBox · ComboBox · ListView · TableView · Slider · DatePicker · Alert |
| 129 | `java-129-javafx-events.html` | JavaFX Events & Threading | setOnAction · EventHandler · setOnKeyPressed · setOnMouseClicked · event filters · consume · Task · Platform.runLater |
| 130 | `java-130-javafx-binding.html` | Properties & Binding | StringProperty · IntegerProperty · bind · bindBidirectional · Bindings · addListener · ObservableValue · computed bindings |
| 131 | `java-131-javafx-fxml.html` | FXML | FXML · FXMLLoader · fx:controller · fx:id · onAction · Scene Builder · layout markup · resources |
| 132 | `java-132-javafx-controllers.html` | FXML Controllers | @FXML · initialize · fx:id fields · event methods · controller factory · passing data · MVC |
| 133 | `java-133-javafx-css.html` | JavaFX CSS Styling | stylesheets · -fx- properties · styleClass · id selectors · pseudo-classes · setStyle · looked-up colors · Modena |
| 134 | `java-134-javafx-charts.html` | JavaFX Charts & Media | LineChart · BarChart · PieChart · XYChart.Series · NumberAxis · CategoryAxis · Media · MediaPlayer · MediaView |

### Group 14: Quick Reference (Sheets 135–136)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 135 | `java-135-quick-reference-syntax-oop.html` | Quick Reference — Syntax, Types & OOP | program structure · types & casting · strings · operators · control flow & switch · exceptions · methods & lambdas · classes, records, sealed |
| 136 | `java-136-quick-reference-collections-apis.html` | Quick Reference — Collections, Streams & APIs | collections · maps & sets · generics · streams & collectors · sorting · Optional · dates · files · build tools · testing · concurrency · JDBC |
