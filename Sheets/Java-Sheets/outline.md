# Java Reference — Outline

Generated from `manifest.json`; keep the two in sync when sheets are added, renamed or reordered.

## Profile

- **Collection section:** Languages
- **Status:** Complete
- **Sheets:** 134 across 13 groups
- **File prefix:** `java` (`java-###-[slug].html`)
- **Folder:** `Sheets/Java-Sheets/`
- **Coverage:** control flow, methods & functions, data structures, OOP, files & I/O, modules & packages, standard library, external libraries, concurrency, database, Swing, JavaFX

---

## Group 1 — Basics (001–020)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 001 | `java-01-introduction.html` | Introduction to Java | history · JVM · JDK · JRE · LTS releases · .java · .class |
| 002 | `java-02-program-structure.html` | Program Structure | package · import · class · main · static void · String[] args · braces |
| 003 | `java-03-output.html` | Output Statements | System.out.println · print · printf · System.err · escape sequences · %n |
| 004 | `java-04-comments.html` | Comments &amp; Javadoc | // · /* */ · /** */ · @param · @return · @throws · javadoc tool |
| 005 | `java-05-variables.html` | Variables &amp; Constants | declaration · initialization · var · final · static final · camelCase · scope |
| 006 | `java-06-data-types.html` | Primitive Data Types | byte · short · int · long · float · double · char · boolean · literals |
| 007 | `java-07-type-conversion.html` | Type Conversion &amp; Casting | widening · narrowing · (int) cast · parseInt · valueOf · String.valueOf · promotion |
| 008 | `java-08-autoboxing.html` | Autoboxing &amp; Wrapper Types | Integer · Double · Boolean · Character · valueOf · unboxing · Integer cache · null |
| 009 | `java-09-arithmetic.html` | Arithmetic Operators | + · - · * · / · % · ++ · -- · integer division · precedence |
| 010 | `java-10-comparison.html` | Comparison Operators | == · != · &lt; · > · &lt;= · >= · equals() · compareTo · reference vs value |
| 011 | `java-11-logical.html` | Logical Operators | &amp;&amp; · \|\| · ! · short-circuit · &amp; · \| · ^ · De Morgan |
| 012 | `java-12-bitwise.html` | Bitwise Operators | &amp; · \| · ^ · ~ · &lt;&lt; · >> · >>> · masks · flags |
| 013 | `java-13-assignment.html` | Assignment Operators | = · += · -= · *= · /= · %= · compound assignment · implicit cast |
| 014 | `java-14-strings-basics.html` | String Basics | String literal · immutability · + concat · length() · string pool · text blocks · null vs "" |
| 015 | `java-15-strings-methods.html` | String Methods | charAt · substring · indexOf · contains · replace · split · trim · strip · startsWith |
| 016 | `java-16-strings-formatting.html` | String Formatting | String.format · formatted() · %s · %d · %f · %n · width · flags · padding |
| 017 | `java-17-scanner.html` | Scanner Input | Scanner · System.in · nextLine · nextInt · nextDouble · hasNextInt · close |
| 018 | `java-18-bufferedreader.html` | BufferedReader Input | BufferedReader · InputStreamReader · readLine · lines() · parseInt · IOException · StringTokenizer |
| 019 | `java-19-strings-advanced.html` | Advanced Strings | StringBuffer · intern · compareTo · compareToIgnoreCase · matches · chars · codePoints · String.valueOf |
| 020 | `java-20-arrays-1d.html` | Arrays — 1D | int[] · new · length · index · array literal · for-each · ArrayIndexOutOfBounds · default values |

## Group 2 — Control Flow (021–033)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 021 | `java-21-if-else.html` | If / Else | if · else if · else · nested if · braces · guard clause · pattern matching instanceof |
| 022 | `java-22-ternary.html` | Ternary Operator | ?: · conditional expression · nested ternary · type promotion · null default |
| 023 | `java-23-switch-classic.html` | Switch — Classic | switch · case · break · default · fall-through · String switch · enum switch |
| 024 | `java-24-switch-modern.html` | Switch — Expressions (Java 14+) | -> arrow · yield · switch expression · exhaustiveness · pattern matching · when guard · case null |
| 025 | `java-25-for-loop.html` | For Loop | for · init · condition · update · nested loops · counting down · step · multiple variables |
| 026 | `java-26-while-loop.html` | While Loop | while · condition · sentinel · infinite loop · while(true) · input loop · iterator loop |
| 027 | `java-27-do-while.html` | Do-While Loop | do · while · post-test loop · menu loop · input validation · retry |
| 028 | `java-28-enhanced-for.html` | Enhanced For Loop | for-each · Iterable · arrays · collections · Map.entrySet · ConcurrentModificationException · var |
| 029 | `java-29-break-continue.html` | Break &amp; Continue | break · continue · labeled break · labeled continue · return · early exit |
| 030 | `java-30-try-catch.html` | Try / Catch | try · catch · Exception · getMessage · multi-catch · printStackTrace · exception hierarchy |
| 031 | `java-31-throws-checked.html` | Throws &amp; Checked Exceptions | throw · throws · checked · unchecked · RuntimeException · IOException · rethrow · cause chaining |
| 032 | `java-32-custom-exceptions.html` | Custom Exceptions | extends Exception · extends RuntimeException · constructors · cause · custom fields · serialVersionUID |
| 033 | `java-33-finally-twr.html` | Finally &amp; Try-with-Resources | finally · try-with-resources · AutoCloseable · close() · suppressed exceptions · resource cleanup |

## Group 3 — Methods & Functions (034–043)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 034 | `java-34-methods-basics.html` | Defining &amp; Calling Methods | method signature · return type · void · static · access modifier · calling · naming |
| 035 | `java-35-parameters.html` | Parameters &amp; Arguments | parameters · arguments · pass-by-value · reference types · final params · defensive copy |
| 036 | `java-36-overloading.html` | Method Overloading | overloading · signature · parameter types · arity · type promotion · ambiguity · constructors |
| 037 | `java-37-return-values.html` | Return Values | return · void · early return · returning objects · returning multiple values · record · Optional |
| 038 | `java-38-scope.html` | Variable Scope | local · block · parameter · instance field · static field · shadowing · effectively final · lifetime |
| 039 | `java-39-static-instance.html` | Static vs Instance Methods | static · instance · this · utility class · factory method · static context · state |
| 040 | `java-40-lambda.html` | Lambda Expressions | -> · functional interface · Predicate · Function · Consumer · Supplier · BiFunction · @FunctionalInterface |
| 041 | `java-41-method-references.html` | Method References | :: · static reference · bound instance · unbound instance · constructor reference · Comparator.comparing |
| 042 | `java-42-recursion.html` | Recursion | base case · recursive case · call stack · StackOverflowError · factorial · fibonacci · memoization |
| 043 | `java-43-varargs.html` | Varargs | ... · variable arguments · array parameter · last parameter · overload resolution · String.format · @SafeVarargs |

## Group 4 — Data Structures (044–057)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 044 | `java-44-arrays-2d.html` | Arrays — 2D &amp; Multi | int[][] · rows · columns · nested loops · jagged arrays · deepToString · matrix |
| 045 | `java-45-arraylist.html` | ArrayList | ArrayList · add · get · set · remove · size · contains · List.of · generics |
| 046 | `java-46-linkedlist.html` | LinkedList | LinkedList · addFirst · addLast · removeFirst · getFirst · poll · peek · doubly linked |
| 047 | `java-47-hashmap.html` | HashMap | HashMap · put · get · getOrDefault · containsKey · remove · entrySet · merge · computeIfAbsent |
| 048 | `java-48-hashset.html` | HashSet | HashSet · add · contains · remove · uniqueness · retainAll · removeAll · Set.of · LinkedHashSet |
| 049 | `java-49-treemap-treeset.html` | TreeMap &amp; TreeSet | TreeMap · TreeSet · sorted order · firstKey · floorKey · ceiling · headMap · tailSet · descending |
| 050 | `java-50-stack-queue.html` | Stack &amp; Queue | Stack · Queue · push · pop · peek · offer · poll · LIFO · FIFO · PriorityQueue |
| 051 | `java-51-deque.html` | Deque | ArrayDeque · Deque · addFirst · addLast · offerFirst · pollLast · peekFirst · double-ended · sliding window |
| 052 | `java-52-generics.html` | Generics | &lt;T> · type parameter · generic class · generic method · bounded type · ? extends · ? super · type erasure |
| 053 | `java-53-streams.html` | Streams | stream() · pipeline · intermediate · terminal · lazy evaluation · IntStream · Stream.of · toList |
| 054 | `java-54-map-filter.html` | map &amp; filter | map · filter · flatMap · distinct · limit · skip · mapToInt · takeWhile · mapMulti |
| 055 | `java-55-reduce-collectors.html` | reduce &amp; Collectors | reduce · collect · Collectors.toList · groupingBy · counting · joining · partitioningBy · toMap · summingInt |
| 056 | `java-56-sorting.html` | Sorting &amp; Searching | Collections.sort · List.sort · Arrays.sort · Comparator · reverseOrder · binarySearch · stable sort |
| 057 | `java-57-iterators.html` | Iterators &amp; Iterables | Iterator · hasNext · next · remove · ListIterator · Iterable · forEachRemaining · fail-fast |

## Group 5 — Object-Oriented Programming (058–075)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 058 | `java-58-classes-objects.html` | Classes &amp; Objects | class · object · new · fields · methods · reference · null · toString |
| 059 | `java-59-constructors.html` | Constructors | constructor · default constructor · parameterized · this() · super() · overloading · initialization order |
| 060 | `java-60-this-keyword.html` | The this Keyword | this · field shadowing · this() · method chaining · fluent API · passing this |
| 061 | `java-61-instance-static.html` | Instance vs Static Members | static field · instance field · static block · static nested · class variable · shared state · memory |
| 062 | `java-62-inheritance.html` | Inheritance | extends · subclass · superclass · is-a · Object · protected · single inheritance · final class |
| 063 | `java-63-super.html` | The super Keyword | super · super() · super.method() · super.field · constructor chaining · multi-level inheritance |
| 064 | `java-64-overriding.html` | Method Overriding | @Override · override rules · covariant return · dynamic dispatch · final method · hiding · equals/hashCode |
| 065 | `java-65-polymorphism.html` | Polymorphism | polymorphism · upcasting · downcasting · instanceof · dynamic dispatch · ClassCastException · pattern matching |
| 066 | `java-66-encapsulation.html` | Encapsulation | private · public · protected · package-private · access modifiers · data hiding · invariants |
| 067 | `java-67-getters-setters.html` | Getters &amp; Setters | getter · setter · get/is prefix · validation · immutability · final fields · records |
| 068 | `java-68-abstract.html` | Abstract Classes | abstract class · abstract method · partial implementation · template method · constructor · cannot instantiate |
| 069 | `java-69-interfaces.html` | Interfaces | interface · implements · abstract methods · default methods · static methods · private methods · constants |
| 070 | `java-70-implements-extends.html` | implements vs extends | extends · implements · multiple interfaces · diamond problem · interface extends interface · composition |
| 071 | `java-71-enums.html` | Enums | enum · constants · values() · valueOf · ordinal · fields · constructor · EnumMap · EnumSet · switch |
| 072 | `java-72-records.html` | Records (Java 16+) | record · components · accessor · compact constructor · immutability · equals · hashCode · toString |
| 073 | `java-73-sealed-classes.html` | Sealed Classes (Java 17+) | sealed · permits · non-sealed · final · exhaustive switch · algebraic data types · pattern matching |
| 074 | `java-74-annotations.html` | Annotations &amp; Reflection | @interface · @Retention · @Target · @Override · Class&lt;?> · getDeclaredFields · getMethods · invoke |
| 075 | `java-75-inner-classes.html` | Inner &amp; Anonymous Classes | static nested · inner class · local class · anonymous class · Outer.this · lambda vs anonymous |

## Group 6 — Files & I/O (076–083)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 076 | `java-76-filereader-writer.html` | FileReader &amp; FileWriter | FileReader · FileWriter · append mode · character streams · charset · read() · write() · close |
| 077 | `java-77-buffered-io.html` | Buffered I/O | BufferedReader · BufferedWriter · readLine · newLine · lines() · PrintWriter · flush · Files.newBufferedReader |
| 078 | `java-78-files-nio.html` | Files &amp; NIO | Files · Path · Path.of · readString · writeString · readAllLines · write · lines · StandardOpenOption |
| 079 | `java-79-file-paths.html` | File Paths &amp; Directories | Path · resolve · relativize · normalize · toAbsolutePath · createDirectories · list · walk · DirectoryStream |
| 080 | `java-80-json-overview.html` | JSON in Java | JSON · objects · arrays · data types · serialization · Gson (Sheet 108) · Jackson (Sheet 109) · org.json |
| 081 | `java-81-csv-overview.html` | CSV in Java | CSV · delimiter · quoting · header row · split pitfalls · OpenCSV (Sheet 111) · Files.lines |
| 082 | `java-82-serialization.html` | Serialization | Serializable · ObjectOutputStream · ObjectInputStream · serialVersionUID · transient · writeObject · readObject |
| 083 | `java-83-streams-io.html` | Byte Streams &amp; I/O Streams | InputStream · OutputStream · FileInputStream · DataOutputStream · binary files · transferTo · readAllBytes |

## Group 7 — Modules & Packages (084–087)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 084 | `java-84-packages-imports.html` | Packages &amp; Imports | package · import · wildcard import · static import · fully qualified name · java.lang · classpath |
| 085 | `java-85-creating-packages.html` | Creating Packages &amp; Modules | directory structure · reverse domain · module-info.java · JPMS · exports · requires · opens |
| 086 | `java-86-maven.html` | Maven | pom.xml · groupId · artifactId · dependencies · scope · lifecycle · mvn clean package · plugins |
| 087 | `java-87-gradle.html` | Gradle | build.gradle.kts · build.gradle · Kotlin DSL · Groovy DSL · implementation · testImplementation · tasks · gradlew |

## Group 8 — Standard Library (088–101)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 088 | `java-88-math.html` | Math Class | Math.abs · pow · sqrt · round · floor · ceil · max · min · random · PI · floorMod · addExact |
| 089 | `java-89-random.html` | Random Numbers | Random · nextInt · nextDouble · bounds · seed · ThreadLocalRandom · SecureRandom · Math.random |
| 090 | `java-90-stringbuilder.html` | StringBuilder | StringBuilder · append · insert · delete · reverse · setCharAt · capacity · toString · chaining |
| 091 | `java-91-localdate.html` | LocalDate | LocalDate · of · now · parse · plusDays · getDayOfWeek · isBefore · Period · ChronoUnit · leap year |
| 092 | `java-92-localtime.html` | LocalTime | LocalTime · of · now · parse · plusHours · truncatedTo · Duration · isBefore · MIDNIGHT · NOON |
| 093 | `java-93-localdatetime.html` | LocalDateTime &amp; Zones | LocalDateTime · ZonedDateTime · Instant · ZoneId · OffsetDateTime · atZone · DST · epoch |
| 094 | `java-94-datetimeformatter.html` | DateTimeFormatter | DateTimeFormatter · ofPattern · format · parse · ISO formats · Locale · FormatStyle · pattern letters |
| 095 | `java-95-collections-util.html` | Collections Utility Class | Collections.sort · reverse · shuffle · max · min · frequency · unmodifiableList · synchronizedList · nCopies |
| 096 | `java-96-arrays-util.html` | Arrays Utility Class | Arrays.toString · sort · fill · copyOf · copyOfRange · asList · equals · stream · binarySearch · deepToString |
| 097 | `java-97-optional.html` | Optional | Optional · of · ofNullable · empty · isPresent · ifPresent · orElse · orElseGet · orElseThrow · map · flatMap |
| 098 | `java-98-system.html` | System Class | System.out · System.in · System.err · currentTimeMillis · nanoTime · getenv · getProperty · exit · arraycopy · lineSeparator |
| 099 | `java-99-regex.html` | Regex — Pattern &amp; Matcher | Pattern · Matcher · compile · find · matches · group · named groups · replaceAll · flags · split |
| 100 | `java-100-scanner-advanced.html` | Scanner — Advanced | useDelimiter · findInLine · Scanner(File) · Scanner(String) · tokens() · Locale · hasNext(pattern) · nextLine pitfalls |
| 101 | `java-101-comparable-comparator.html` | Comparable &amp; Comparator | Comparable · compareTo · Comparator · compare · comparing · thenComparing · reversed · nullsFirst · natural order |

## Group 9 — External Libraries (102–111)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 102 | `java-102-junit-basics.html` | JUnit 5 — Basics | @Test · assertEquals · assertTrue · assertThrows · @BeforeEach · @AfterEach · @DisplayName · test lifecycle |
| 103 | `java-103-junit-advanced.html` | JUnit 5 — Advanced | @ParameterizedTest · @ValueSource · @CsvSource · @MethodSource · @Nested · @Tag · assumptions · @TempDir |
| 104 | `java-104-mockito.html` | Mockito | mock · when · thenReturn · verify · @Mock · @InjectMocks · ArgumentCaptor · spy · any() |
| 105 | `java-105-logging.html` | Logging — SLF4J &amp; Log4j | SLF4J · Logger · LoggerFactory · levels · {} placeholders · Logback · Log4j 2 · MDC · configuration |
| 106 | `java-106-httpclient.html` | HttpClient (Built-in) | HttpClient · HttpRequest · HttpResponse · GET · POST · BodyHandlers · sendAsync · timeouts · headers |
| 107 | `java-107-okhttp.html` | OkHttp | OkHttpClient · Request.Builder · Response · RequestBody · MediaType · enqueue · Callback · interceptors |
| 108 | `java-108-gson.html` | Gson | Gson · toJson · fromJson · GsonBuilder · TypeToken · @SerializedName · @Expose · JsonParser · pretty printing |
| 109 | `java-109-jackson.html` | Jackson | ObjectMapper · readValue · writeValueAsString · TypeReference · @JsonProperty · @JsonIgnore · JsonNode · JavaTimeModule |
| 110 | `java-110-lombok.html` | Lombok | @Getter · @Setter · @Data · @Value · @Builder · @NoArgsConstructor · @AllArgsConstructor · @Slf4j · annotation processing |
| 111 | `java-111-opencsv.html` | OpenCSV | CSVReader · CSVWriter · CSVReaderBuilder · CsvToBeanBuilder · @CsvBindByName · StatefulBeanToCsv · quoting · separators |

## Group 10 — Concurrency (112–116)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 112 | `java-112-threads.html` | Threads | Thread · Runnable · start · run · join · sleep · interrupt · daemon · thread states · race condition |
| 113 | `java-113-executorservice.html` | ExecutorService | Executors · newFixedThreadPool · submit · Future · invokeAll · shutdown · awaitTermination · Callable · ScheduledExecutorService |
| 114 | `java-114-completablefuture.html` | CompletableFuture | supplyAsync · thenApply · thenCompose · thenCombine · allOf · exceptionally · handle · join · async pipelines |
| 115 | `java-115-synchronized.html` | Synchronization &amp; Locks | synchronized · volatile · ReentrantLock · ReadWriteLock · AtomicInteger · ConcurrentHashMap · deadlock · happens-before |
| 116 | `java-116-virtual-threads.html` | Virtual Threads (Java 21) | virtual threads · Thread.ofVirtual · newVirtualThreadPerTaskExecutor · carrier thread · pinning · blocking I/O · structured concurrency |

## Group 11 — Database (117–122)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 117 | `java-117-jdbc-basics.html` | JDBC Basics | JDBC · DriverManager · Connection · Statement · ResultSet · JDBC URL · driver · SQLException · try-with-resources |
| 118 | `java-118-jdbc-crud.html` | JDBC CRUD Operations | INSERT · SELECT · UPDATE · DELETE · executeUpdate · generated keys · transactions · commit · rollback · batch |
| 119 | `java-119-prepared-statement.html` | PreparedStatement | PreparedStatement · ? placeholders · setString · setInt · SQL injection · batching · setNull · IN clause |
| 120 | `java-120-connection-pooling.html` | Connection Pooling (HikariCP) | HikariCP · DataSource · HikariConfig · maximumPoolSize · connectionTimeout · leak detection · pool sizing |
| 121 | `java-121-hibernate-basics.html` | Hibernate &amp; JPA Basics | JPA · @Entity · @Id · @GeneratedValue · @Column · EntityManager · persistence.xml · ORM · relationships |
| 122 | `java-122-hibernate-crud.html` | Hibernate CRUD &amp; JPQL | EntityManager · persist · find · merge · remove · JPQL · TypedQuery · CriteriaBuilder · transactions · N+1 |

## Group 12 — GUI — Swing (123–125)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 123 | `java-123-swing-basics.html` | Swing Basics | JFrame · JPanel · JLabel · JButton · JTextField · SwingUtilities.invokeLater · EDT · look and feel |
| 124 | `java-124-swing-layouts.html` | Swing Layout Managers | FlowLayout · BorderLayout · GridLayout · BoxLayout · GridBagLayout · nested panels · setLayout |
| 125 | `java-125-swing-events.html` | Swing Event Handling | ActionListener · addActionListener · MouseListener · MouseAdapter · KeyListener · DocumentListener · SwingWorker · lambdas |

## Group 13 — GUI — JavaFX (126–134)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 126 | `java-126-javafx-basics.html` | JavaFX Basics | Application · start · Stage · Scene · Parent · launch · OpenJFX · module setup · Platform.runLater |
| 127 | `java-127-javafx-layouts.html` | JavaFX Layouts | VBox · HBox · BorderPane · GridPane · StackPane · FlowPane · AnchorPane · Insets · alignment · grow priority |
| 128 | `java-128-javafx-controls.html` | JavaFX Controls | Button · Label · TextField · CheckBox · ComboBox · ListView · TableView · Slider · DatePicker · Alert |
| 129 | `java-129-javafx-events.html` | JavaFX Events &amp; Threading | setOnAction · EventHandler · setOnKeyPressed · setOnMouseClicked · event filters · consume · Task · Platform.runLater |
| 130 | `java-130-javafx-binding.html` | Properties &amp; Binding | StringProperty · IntegerProperty · bind · bindBidirectional · Bindings · addListener · ObservableValue · computed bindings |
| 131 | `java-131-javafx-fxml.html` | FXML | FXML · FXMLLoader · fx:controller · fx:id · onAction · Scene Builder · layout markup · resources |
| 132 | `java-132-javafx-controllers.html` | FXML Controllers | @FXML · initialize · fx:id fields · event methods · controller factory · passing data · MVC |
| 133 | `java-133-javafx-css.html` | JavaFX CSS Styling | stylesheets · -fx- properties · styleClass · id selectors · pseudo-classes · setStyle · looked-up colors · Modena |
| 134 | `java-134-javafx-charts.html` | JavaFX Charts &amp; Media | LineChart · BarChart · PieChart · XYChart.Series · NumberAxis · CategoryAxis · Media · MediaPlayer · MediaView |
