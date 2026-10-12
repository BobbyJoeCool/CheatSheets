# C# Reference Guide Outline (128 sheets)

## Metadata

- **Group it belongs to:** C Family
- **Folder Directory:** `Sheets/CSharp-Sheets/cs-###-[slug].html`
- **Groups:** 16
- **Sheets:** 128
- **Drafted Date:** 2026-10-10
- **Verified-Finalized Date:**

## Basic Information

C# on .NET as a typed, enterprise general-purpose language, for intermediate readers with balanced coverage across all groups. Targets C# 14 / .NET 10 (LTS). C# 15 / .NET 11 is in preview and ships in November 2026; its features are flagged *(C# 15 preview)* where they appear. The deep areas are value vs reference types and nullability, pattern matching, collections, OOP (records, structs, generics), async/await and LINQ.

At 128 sheets the set is above the guide's 90–120 typed/enterprise range because LINQ (6) and EF Core (3) are C#-specific groups a Java set would not need. The C# 15 preview sheets (43, 60, 63, 119) and the newer C# 14 / .NET 10 sheets (6, 32, 33, 55, 60, 78, 80, 116, 124) should be checked against Microsoft Learn when built, along with the FluentAssertions licensing note on sheet 107.

## Differences in Layout from Basic Structure

- Numbers are three digits throughout (`cs-001` to `cs-128`) because the set passes 99.
- Output & Comments becomes Output, Input & Comments (Group 2).
- Functions becomes Methods & Functions (Group 8), including delegates, events and extension members.
- Modules & Packages becomes Namespaces, Packages & the Base Class Library (Group 12).
- Language-specific groups follow the standard ones: LINQ (15) and Entity Framework Core (16).
- Generic type names in the tables are written with `&lt;` / `&gt;` (e.g. `List&lt;T&gt;`) so they render in Markdown.

## Groups

### Group 1: Introduction & Setup (Sheets 001–007)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 001 | `cs-001-introduction.html` | Introduction & History | Anders Hejlsberg · .NET Framework vs .NET · CLR · managed code · C# version timeline · LTS vs STS releases |
| 002 | `cs-002-installation-setup.html` | Installing the .NET SDK | SDK vs runtime · dotnet --info · global.json · Visual Studio · VS Code C# Dev Kit · Rider |
| 003 | `cs-003-dotnet-cli.html` | The dotnet CLI | dotnet new · dotnet run · dotnet build · dotnet test · dotnet add package · dotnet publish · dotnet watch |
| 004 | `cs-004-projects-solutions.html` | Projects & Solutions | .csproj · .slnx · TargetFramework · LangVersion · Nullable · ImplicitUsings · Directory.Build.props |
| 005 | `cs-005-program-structure.html` | Program Structure | top-level statements · static void Main · string[] args · namespace · file-scoped namespace · global using |
| 006 | `cs-006-file-based-apps.html` | File-Based Apps | dotnet run app.cs · #:package · #:sdk · #:property · shebang · converting to a project |
| 007 | `cs-007-compilation-runtime.html` | Compilation & the Runtime | Roslyn · IL · JIT · tiered compilation · assemblies · ReadyToRun · Native AOT |

### Group 2: Output, Input & Comments (Sheets 008–010)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 008 | `cs-008-console-output.html` | Console Output | Console.WriteLine · Console.Write · Console.Error · Debug.WriteLine · ForegroundColor · Console.Clear |
| 009 | `cs-009-console-input.html` | Console Input | Console.ReadLine · Console.ReadKey · int.Parse · int.TryParse · null input · command-line args |
| 010 | `cs-010-comments-xml-docs.html` | Comments & XML Docs | // · /* */ · /// · &lt;summary&gt; · &lt;param&gt; · &lt;returns&gt; · &lt;inheritdoc/&gt; · #region |

### Group 3: Variables & Data Types (Sheets 011–020)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 011 | `cs-011-variables-constants.html` | Variables & Constants | var · explicit types · const · readonly · definite assignment · default · naming conventions |
| 012 | `cs-012-integer-types.html` | Integer Types | byte · short · int · long · unsigned types · nint / nuint · Int128 · 0x / 0b / _ literals |
| 013 | `cs-013-floating-decimal.html` | Floating-Point & Decimal | float · double · decimal · f / d / m suffixes · NaN · Infinity · precision · Half |
| 014 | `cs-014-bool-char.html` | bool & char | bool · char · 'A' · escape sequences · \e · char.IsDigit · char.IsLetter · Rune |
| 015 | `cs-015-value-reference-types.html` | Value vs Reference Types | stack vs heap · struct vs class · copy semantics · boxing · unboxing · ValueType |
| 016 | `cs-016-nullable-value-types.html` | Nullable Value Types | int? · Nullable&lt;T&gt; · HasValue · Value · GetValueOrDefault · lifted operators |
| 017 | `cs-017-nullable-reference-types.html` | Nullable Reference Types | #nullable enable · string? · ! null-forgiving · CS8600 warnings · [NotNullWhen] · [MaybeNull] |
| 018 | `cs-018-type-conversion.html` | Type Conversion & Casting | implicit · explicit (cast) · Convert.ToInt32 · Parse · TryParse · checked · unchecked |
| 019 | `cs-019-type-checking.html` | Type Checking & Inspection | typeof · GetType() · is · as · nameof · sizeof · default(T) |
| 020 | `cs-020-enums.html` | Enums | enum · underlying type · [Flags] · HasFlag · Enum.Parse · Enum.GetValues&lt;T&gt; · ToString |

### Group 4: Strings (Sheets 021–026)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 021 | `cs-021-string-basics.html` | String Basics | string vs String · immutability · Length · indexer · @"" verbatim · """ raw literals · string.IsNullOrWhiteSpace |
| 022 | `cs-022-string-formatting.html` | Interpolation & Formatting | $"" · {x,10} alignment · :N2 :C :D4 :X · string.Format · ToString("F2") · CultureInfo · $$""" |
| 023 | `cs-023-string-search.html` | String Methods — Search | Contains · IndexOf · LastIndexOf · StartsWith · EndsWith · IndexOfAny · StringComparison |
| 024 | `cs-024-string-transform.html` | String Methods — Transform | ToUpper · ToLower · Trim · Replace · Split · string.Join · PadLeft · Substring |
| 025 | `cs-025-string-ranges-spans.html` | Indexing, Ranges & Spans | s[^1] · s[1..4] · Index · Range · AsSpan() · ReadOnlySpan&lt;char&gt; · Slice |
| 026 | `cs-026-stringbuilder-comparison.html` | StringBuilder & Comparison | StringBuilder · Append · AppendLine · string.Equals · string.Compare · StringComparer · Encoding.UTF8 |

### Group 5: Operators (Sheets 027–033)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 027 | `cs-027-arithmetic.html` | Arithmetic Operators | + - * / % · integer division · ++ / -- · Math.DivRem · overflow · precedence |
| 028 | `cs-028-comparison-equality.html` | Comparison & Equality Operators | == · != · &lt; &gt; &lt;= &gt;= · Equals · ReferenceEquals · string vs object equality |
| 029 | `cs-029-logical.html` | Logical Operators | && · \|\| · ! · & \| ^ non-short-circuit · bool? three-valued logic · De Morgan |
| 030 | `cs-030-bitwise-shift.html` | Bitwise & Shift Operators | & · \| · ^ · ~ · &lt;&lt; · &gt;&gt; · &gt;&gt;&gt; · BitOperations |
| 031 | `cs-031-assignment-compound.html` | Assignment & Compound Assignment | = · += -= *= /= %= · &= \|= ^= · (a, b) = (b, a) swap · ref locals · chained assignment |
| 032 | `cs-032-null-operators.html` | Null Operators | ?. · ?[] · ?? · ??= · null-conditional assignment (C# 14) · is null · is not null |
| 033 | `cs-033-operator-overloading.html` | Operator Overloading | operator + · operator == · implicit / explicit operator · checked operators · user-defined compound assignment (C# 14) · true / false |

### Group 6: Control Flow (Sheets 034–043)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 034 | `cs-034-if-else.html` | if / else if / else | if · else if · else · braces · nested ifs · guard clauses · is checks in conditions |
| 035 | `cs-035-ternary-conditional.html` | Ternary & Conditional Expressions | ?: · nested ternary · target-typed conditional · ref conditional · ?? as fallback |
| 036 | `cs-036-switch-statement.html` | switch Statement | switch · case · break · default · goto case · case guards (when) · no implicit fall-through |
| 037 | `cs-037-switch-expressions.html` | switch Expressions | switch => · _ discard · tuple switch · exhaustiveness warnings · throw expressions · returning values |
| 038 | `cs-038-patterns-basics.html` | Pattern Matching — Basics | type pattern · constant pattern · relational &lt; &gt; · and / or / not · var pattern · is not null |
| 039 | `cs-039-patterns-advanced.html` | Pattern Matching — Advanced | property pattern { } · extended property a.b.c · positional (Deconstruct) · list patterns [1, .., var x] · slice pattern · recursive patterns |
| 040 | `cs-040-for-loops.html` | for Loops | for · counter variables · multiple variables · reverse loops · nested loops · for (;;) |
| 041 | `cs-041-foreach.html` | foreach Loops | foreach · IEnumerable · var · ref foreach · deconstruction in foreach · collection modified exception |
| 042 | `cs-042-while-do-while.html` | while & do-while | while · do-while · sentinel loops · condition-at-end · input validation loops · infinite loops |
| 043 | `cs-043-loop-control.html` | Loop Control & Jumps | break · continue · labeled break / continue (C# 15 preview) · goto · return · yield break |

### Group 7: Error Handling (Sheets 044–048)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 044 | `cs-044-exception-basics.html` | Exception Basics | try · catch · finally · Exception · Message · StackTrace · catch order |
| 045 | `cs-045-throwing.html` | Throwing Exceptions | throw · throw; (rethrow) · throw expressions · InnerException · ArgumentNullException.ThrowIfNull · ThrowIfNegative |
| 046 | `cs-046-exception-types-filters.html` | Exception Types & Filters | catch when · ArgumentException · InvalidOperationException · NullReferenceException · KeyNotFoundException · AggregateException |
| 047 | `cs-047-custom-exceptions.html` | Custom Exceptions | : Exception · standard constructors · extra properties · naming · when to create one · exception hierarchy |
| 048 | `cs-048-using-dispose.html` | using & IDisposable | using statement · using declaration · IDisposable · Dispose pattern · IAsyncDisposable · await using |

### Group 8: Methods & Functions (Sheets 049–060)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 049 | `cs-049-methods-basics.html` | Defining & Calling Methods | return types · void · expression-bodied => · static vs instance · access modifiers · calling |
| 050 | `cs-050-parameters.html` | Parameters & Arguments | named arguments · optional / default · ref · out · in · ref readonly · out var |
| 051 | `cs-051-params.html` | params & Variadic Methods | params T[] · params Span&lt;T&gt; · params IEnumerable&lt;T&gt; · zero arguments · passing an array |
| 052 | `cs-052-overloading.html` | Method Overloading | overload rules · overload resolution · optional params vs overloads · ambiguity errors · OverloadResolutionPriority |
| 053 | `cs-053-local-functions-scope.html` | Local Functions & Scope | local functions · static local functions · block scope · shadowing · lifetime · recursion in local functions |
| 054 | `cs-054-delegates.html` | Delegates | delegate · Func&lt;&gt; · Action&lt;&gt; · Predicate&lt;T&gt; · method groups · multicast · Invoke |
| 055 | `cs-055-lambdas.html` | Lambda Expressions | x => · statement lambdas · natural type · default parameters · static lambdas · parameter modifiers (C# 14) · _ discards |
| 056 | `cs-056-closures.html` | Closures & Captured Variables | captured variables · lifetime extension · loop capture gotcha · static lambda prevents capture · closure allocations |
| 057 | `cs-057-events.html` | Events | event · EventHandler&lt;T&gt; · EventArgs · += / -= · ?.Invoke · unsubscribe leaks · custom add / remove |
| 058 | `cs-058-recursion.html` | Recursion | base case · call stack · StackOverflowException · no guaranteed tail calls · memoization · iterative rewrite |
| 059 | `cs-059-iterators-yield.html` | Iterators & yield | yield return · yield break · IEnumerable&lt;T&gt; · deferred execution · infinite sequences · IAsyncEnumerable&lt;T&gt; |
| 060 | `cs-060-extension-members.html` | Extension Methods & Members | this T · static class · extension blocks (C# 14) · extension properties · static extension members · extension indexers (C# 15 preview) |

### Group 9: Data Structures & Collections (Sheets 061–074)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 061 | `cs-061-arrays.html` | Arrays — Basics | T[] · new int[5] · initializers · Length · multidimensional [,] · jagged [][] · Array.Resize |
| 062 | `cs-062-array-methods.html` | Arrays — Methods | Array.Sort · Array.BinarySearch · Array.IndexOf · Array.Reverse · Array.Fill · Array.Copy · Array.Clear |
| 063 | `cs-063-collection-expressions.html` | Collection Expressions | [1, 2, 3] · .. spread · [] empty · target typing · with(...) arguments (C# 15 preview) · CollectionBuilder |
| 064 | `cs-064-list-basics.html` | List&lt;T&gt; — Basics | new List&lt;T&gt; · Add · Insert · indexer · Count · Capacity · Remove · RemoveAt |
| 065 | `cs-065-list-methods.html` | List&lt;T&gt; — Methods | Find · FindAll · Exists · Sort(Comparison) · ConvertAll · AsReadOnly · RemoveAll · CollectionsMarshal.AsSpan |
| 066 | `cs-066-dictionary-basics.html` | Dictionary — Basics | Dictionary&lt;K,V&gt; · Add · indexer · TryGetValue · ContainsKey · Remove · KeyValuePair iteration |
| 067 | `cs-067-dictionary-advanced.html` | Dictionary — Advanced Patterns | GetValueOrDefault · TryAdd · counting / grouping pattern · custom comparers · SortedDictionary · OrderedDictionary&lt;K,V&gt; · GetValueRefOrAddDefault |
| 068 | `cs-068-sets.html` | Sets | HashSet&lt;T&gt; · SortedSet&lt;T&gt; · UnionWith · IntersectWith · ExceptWith · IsSubsetOf · comparers |
| 069 | `cs-069-stacks-queues.html` | Stacks, Queues & Linked Lists | Stack&lt;T&gt; · Push / Pop / Peek · Queue&lt;T&gt; · Enqueue / Dequeue · PriorityQueue&lt;T,P&gt; · LinkedList&lt;T&gt; |
| 070 | `cs-070-tuples-deconstruction.html` | Tuples & Deconstruction | (int, string) · named elements · ValueTuple · Deconstruct method · discards _ · tuple equality |
| 071 | `cs-071-immutable-frozen.html` | Immutable & Frozen Collections | ImmutableArray · ImmutableList · ImmutableDictionary · builders · FrozenDictionary · FrozenSet · IReadOnlyList |
| 072 | `cs-072-concurrent-collections.html` | Concurrent Collections | ConcurrentDictionary · GetOrAdd · AddOrUpdate · ConcurrentQueue · ConcurrentBag · BlockingCollection |
| 073 | `cs-073-collection-interfaces.html` | Collection Interfaces | IEnumerable&lt;T&gt; · ICollection&lt;T&gt; · IList&lt;T&gt; · IReadOnlyCollection&lt;T&gt; · IDictionary&lt;K,V&gt; · choosing parameter / return types |
| 074 | `cs-074-sorting-searching.html` | Sorting & Searching | Sort · IComparable&lt;T&gt; · IComparer&lt;T&gt; · Comparer&lt;T&gt;.Create · BinarySearch · stable vs unstable sort |

### Group 10: Object-Oriented Programming (Sheets 075–090)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 075 | `cs-075-classes-objects.html` | Classes & Objects | class · new · fields · methods · this · object initializers · target-typed new() |
| 076 | `cs-076-constructors.html` | Constructors | constructor overloads · : this() · : base() · primary constructors · static constructors · required members |
| 077 | `cs-077-access-modifiers.html` | Access Modifiers | public · private · protected · internal · protected internal · private protected · file |
| 078 | `cs-078-properties.html` | Properties | get / set · auto-properties · init · required · field keyword (C# 14) · computed properties · expression-bodied |
| 079 | `cs-079-static-members.html` | Static Members & Classes | static fields · static methods · static classes · const vs static readonly · static constructor · singleton pattern |
| 080 | `cs-080-indexers-partial.html` | Indexers & Partial Types | this[int i] · multi-parameter indexers · partial class · partial methods · partial properties · partial constructors / events (C# 14) |
| 081 | `cs-081-inheritance.html` | Inheritance | : Base · base. · virtual · override · sealed · new (hiding) · protected members |
| 082 | `cs-082-polymorphism.html` | Polymorphism & Casting | virtual dispatch · upcasting · downcasting · is / as · override vs new · covariant return types |
| 083 | `cs-083-abstract-classes.html` | Abstract Classes | abstract class · abstract members · partial implementation · template method pattern · abstract vs interface |
| 084 | `cs-084-interfaces.html` | Interfaces | interface · multiple implementation · explicit implementation · default interface methods · static abstract members · I- naming |
| 085 | `cs-085-structs.html` | Structs | struct · readonly struct · ref struct · parameterless constructors · defensive copies · when to choose a struct |
| 086 | `cs-086-records.html` | Records | record · positional records · with expressions · value equality · record struct · generated ToString · record inheritance |
| 087 | `cs-087-equality-object-members.html` | Equality & Object Members | Equals override · GetHashCode · HashCode.Combine · IEquatable&lt;T&gt; · operator == pairing · ToString override |
| 088 | `cs-088-generics-basics.html` | Generics — Basics | generic classes · generic methods · type inference · default(T) · generic interfaces · nameof(List&lt;&gt;) (C# 14) |
| 089 | `cs-089-generic-constraints.html` | Generic Constraints | where T : class · struct · new() · notnull · unmanaged · base / interface constraints · allows ref struct |
| 090 | `cs-090-variance.html` | Covariance & Contravariance | out T · in T · IEnumerable&lt;out T&gt; · Func / Action variance · array covariance pitfall · variant interfaces |

### Group 11: Files & I/O (Sheets 091–097)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 091 | `cs-091-reading-files.html` | Reading Files | File.ReadAllText · File.ReadAllLines · File.ReadLines · StreamReader · ReadLineAsync · File.Exists |
| 092 | `cs-092-writing-files.html` | Writing & Appending Files | File.WriteAllText · File.AppendAllText · StreamWriter · FileStream · FileMode · async variants |
| 093 | `cs-093-paths-directories.html` | Paths & Directories | Path.Combine · Path.Join · GetFileName · GetExtension · Directory.CreateDirectory · EnumerateFiles · FileInfo |
| 094 | `cs-094-json-serialization.html` | JSON — Serialization | JsonSerializer.Serialize · Deserialize · JsonSerializerOptions · [JsonPropertyName] · [JsonIgnore] · JsonSerializerContext |
| 095 | `cs-095-json-dom.html` | JSON — DOM & Readers | JsonDocument · JsonElement · JsonNode · JsonObject · Utf8JsonReader · Newtonsoft.Json differences |
| 096 | `cs-096-xml.html` | XML | XDocument · XElement · Descendants · Attribute · LINQ to XML · XmlSerializer |
| 097 | `cs-097-streams-binary.html` | Streams & Binary Files | Stream · MemoryStream · BinaryReader · BinaryWriter · CopyToAsync · BufferedStream |

### Group 12: Namespaces, Packages & the Base Class Library (Sheets 098–104)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 098 | `cs-098-namespaces-using.html` | Namespaces & using | namespace · using · using static · using aliases · global using · InternalsVisibleTo |
| 099 | `cs-099-nuget.html` | NuGet Packages | dotnet add package · PackageReference · Directory.Packages.props · version ranges · dotnet pack · nuget.org |
| 100 | `cs-100-math-random.html` | Math & Random | Math.Round · MidpointRounding · Math.Clamp · Math.Pow · Random.Shared · GetItems / Shuffle · RandomNumberGenerator |
| 101 | `cs-101-dates-times.html` | Dates & Times | DateTime · DateTimeOffset · DateOnly · TimeOnly · TimeSpan · TimeProvider · format strings · TimeZoneInfo |
| 102 | `cs-102-environment-process.html` | Environment & Processes | Environment.GetEnvironmentVariable · Environment.Exit · Process.Start · ProcessStartInfo · Stopwatch · RuntimeInformation |
| 103 | `cs-103-configuration.html` | Configuration | appsettings.json · ConfigurationBuilder · environment variables · IOptions&lt;T&gt; · user secrets · Bind |
| 104 | `cs-104-dependency-injection.html` | Generic Host & Dependency Injection | Host.CreateApplicationBuilder · IServiceCollection · AddSingleton · AddScoped · AddTransient · constructor injection · IHostedService |

### Group 13: External Libraries (Sheets 105–109)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 105 | `cs-105-xunit.html` | xUnit | [Fact] · [Theory] · [InlineData] · Assert.Equal · Assert.Throws · IClassFixture · xUnit v3 |
| 106 | `cs-106-nunit-mstest.html` | NUnit & MSTest | [Test] · [TestCase] · Assert.That · [SetUp] · [TestMethod] · [DataRow] · Microsoft.Testing.Platform |
| 107 | `cs-107-mocking-assertions.html` | Mocking & Assertion Libraries | NSubstitute · Moq · Substitute.For · Returns · Received · Shouldly · AwesomeAssertions / FluentAssertions licensing |
| 108 | `cs-108-logging.html` | Logging | ILogger&lt;T&gt; · LogInformation · log levels · message templates · [LoggerMessage] · Serilog |
| 109 | `cs-109-httpclient.html` | HttpClient | HttpClient · IHttpClientFactory · GetFromJsonAsync · PostAsJsonAsync · EnsureSuccessStatusCode · Microsoft.Extensions.Http.Resilience |

### Group 14: Advanced Topics (Sheets 110–119)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 110 | `cs-110-regex.html` | Regular Expressions | Regex.IsMatch · Match · Groups · named groups · Regex.Replace · RegexOptions · [GeneratedRegex] |
| 111 | `cs-111-async-basics.html` | async / await — Basics | async · await · Task · Task&lt;T&gt; · ValueTask · async Main · how await resumes |
| 112 | `cs-112-async-patterns.html` | async / await — Patterns | Task.WhenAll · Task.WhenAny · Task.WhenEach · CancellationToken · Task.Run · WaitAsync timeouts |
| 113 | `cs-113-async-pitfalls.html` | async / await — Pitfalls | async void · .Result / .Wait() deadlocks · ConfigureAwait(false) · fire-and-forget · WhenAll exceptions · await foreach |
| 114 | `cs-114-threading-sync.html` | Threads & Synchronization | Thread · ThreadPool · lock · System.Threading.Lock · Interlocked · SemaphoreSlim · volatile |
| 115 | `cs-115-parallel-channels.html` | Parallelism & Channels | Parallel.For · Parallel.ForEachAsync · PLINQ AsParallel · Channel&lt;T&gt; · bounded channels · producer / consumer |
| 116 | `cs-116-span-memory.html` | Span, Memory & Performance | Span&lt;T&gt; · Memory&lt;T&gt; · stackalloc · ArrayPool&lt;T&gt; · implicit span conversions (C# 14) · BenchmarkDotNet |
| 117 | `cs-117-garbage-collection.html` | Garbage Collection & Finalizers | generations 0/1/2 · Large Object Heap · finalizers ~T() · GC.SuppressFinalize · WeakReference · event-handler leaks |
| 118 | `cs-118-reflection-attributes.html` | Reflection & Attributes | Type · GetProperties · Activator.CreateInstance · custom attributes · [AttributeUsage] · GetCustomAttribute&lt;T&gt; |
| 119 | `cs-119-unions-closed.html` | Union Types & Closed Hierarchies | union keyword (C# 15 preview) · case types · closed modifier · exhaustive switch · IUnion · sealed-record workaround for C# 14 |

### Group 15: LINQ (Sheets 120–125)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 120 | `cs-120-linq-basics.html` | LINQ — Basics | method syntax · query syntax · deferred execution · ToList / ToArray · IEnumerable vs IQueryable · multiple enumeration |
| 121 | `cs-121-linq-filter-project.html` | LINQ — Filtering & Projection | Where · Select · SelectMany · OfType · Cast · Distinct · DistinctBy |
| 122 | `cs-122-linq-order-page.html` | LINQ — Ordering & Paging | OrderBy · ThenBy · OrderDescending · Reverse · Skip · Take · Chunk · Index() |
| 123 | `cs-123-linq-aggregation.html` | LINQ — Aggregation | Count · Sum · Average · MinBy / MaxBy · Aggregate · CountBy · AggregateBy |
| 124 | `cs-124-linq-group-join.html` | LINQ — Grouping & Joining | GroupBy · ToLookup · Join · GroupJoin · LeftJoin / RightJoin · Zip · ToDictionary |
| 125 | `cs-125-linq-element-set.html` | LINQ — Elements, Quantifiers & Sets | First / FirstOrDefault · Single · ElementAt · Any · All · Contains · Union / Intersect / Except |

### Group 16: Entity Framework Core (Sheets 126–128)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 126 | `cs-126-efcore-dbcontext.html` | EF Core — DbContext & Setup | DbContext · DbSet&lt;T&gt; · AddDbContext · providers (SQL Server, PostgreSQL, SQLite) · connection strings · dotnet ef |
| 127 | `cs-127-efcore-modeling-migrations.html` | EF Core — Modeling & Migrations | conventions · data annotations · Fluent API · relationships · migrations add · database update |
| 128 | `cs-128-efcore-querying-saving.html` | EF Core — Querying & Saving | LINQ to Entities · Include / ThenInclude · AsNoTracking · Add / Update / Remove · SaveChangesAsync · ExecuteUpdate / ExecuteDelete |

EF Core could move to its own set later, the way Prisma has one; keep it here only if this set is meant to stand alone.