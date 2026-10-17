# Go Reference Guide Outline (112 sheets)

## Metadata

- **Group it belongs to:** Languages
- **Folder Directory:** `Sheets/Go-Sheets/go-###-[slug].html`
- **Groups:** 18
- **Sheets:** 112
- **Drafted Date:** 2026-10-10
- **Verified-Finalized Date:**

## Basic Information

Go, a compiled, statically typed general-purpose language with a small spec and a large standard library, for intermediate readers who already know at least one other language. Targets Go 1.27 (August 2026) and tags any feature newer than Go 1.21 so readers on older toolchains know what they can use. It follows the standard language groups, then adds Go-specific groups for concurrency, testing and tooling, and web and networking, and ends with a 2-page quick reference.

External Libraries is kept small (4 sheets) because Go culture leans on the standard library, so most "library" ground is covered in the Files, Packages and Web groups. Version tags (1.22–1.27) should be re-checked against the go.dev release notes when each sheet is built.

## Differences in Layout from Basic Structure

- Numbers are three digits throughout (`go-001` to `go-112`) because the set passes 99.
- Error Handling is built around errors as values, not exceptions; `panic` / `recover` gets one sheet.
- OOP is replaced by Types, Methods & Interfaces: Go has no classes or inheritance, only methods, embedding, implicit interfaces and generics.
- Pointers sit in the Operators group because methods (Group 10) depend on them.
- Sheets 111–112 are table-only quick-reference pages (syntax, what it does, sheet #) with no code row.

## Groups

### Group 1: Introduction & Setup (Sheets 001–004)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 001 | `go-001-introduction-history.html` | Introduction & History | Google, 2009 · Griesemer / Pike / Thompson · Go 1 compatibility promise · 6-month release cycle · Go 1.27 (Aug 2026) · simplicity, composition, concurrency · `go.dev` / pkg.go.dev |
| 002 | `go-002-installation-toolchain.html` | Installation & Toolchain | go.dev/dl installer · `brew install go` · `go version` · `go env` / `go env -w` · `GOROOT` / `GOPATH` / `GOBIN` · `toolchain` directive & `GOTOOLCHAIN` · gopls editor setup |
| 003 | `go-003-go-command.html` | The go Command | `go run` · `go build -o` · `go install pkg@version` · `go fmt` · `go vet` · `go doc` (incl. `pkg@version`, `-ex`) · `go clean -cache` · `go help` |
| 004 | `go-004-program-structure.html` | Program Structure | `package main` · `func main()` · `import ( … )` · Capitalized = exported · braces & automatic semicolons · gofmt is the style guide · unused imports/variables are compile errors · exit codes |

### Group 2: Output & Comments (Sheets 005–007)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 005 | `go-005-fmt-printing.html` | Printing with fmt | `fmt.Println` / `Print` / `Printf` · `Sprintf` / `Sprint` / `Sprintln` · `Fprintf(os.Stderr, …)` · `fmt.Appendf` · `println` builtin (debug only) · fmt vs `log` |
| 006 | `go-006-format-verbs.html` | Format Verbs | `%v` `%+v` `%#v` · `%T` · `%d` `%b` `%o` `%x` `%X` · `%f` `%.2f` `%e` `%g` · `%s` `%q` · `%p` · width & flags `%-10s` `%05d` `%*d` · `%%` |
| 007 | `go-007-comments-doc-comments.html` | Comments & Doc Comments | `//` line · `/* */` block · doc comment on declarations · package comment & `doc.go` · `[pkg.Name]` doc links · `Deprecated:` · `//go:` directives · `// Output:` in examples |

### Group 3: Variables & Data Types (Sheets 008–015)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 008 | `go-008-variables-declarations.html` | Variables & Declarations | `var x int` · `var x = 1` · `x := 1` · multiple `a, b := 1, 2` · `var ( … )` blocks · zero values · `_` blank identifier · package vs local vars |
| 009 | `go-009-constants-iota.html` | Constants & iota | `const` · typed vs untyped constants · arbitrary-precision constant math · `iota` enums · skipping with `_` · `1 << iota` bit flags · `stringer` for `String()` |
| 010 | `go-010-integers.html` | Integers | `int` / `uint` (platform size) · `int8`…`int64` · `uint8`…`uint64` · `uintptr` · literals `0x` `0b` `0o` `1_000_000` · wraparound overflow · `math.MaxInt64` / `MinInt64` |
| 011 | `go-011-floats-complex.html` | Floats & Complex Numbers | `float32` / `float64` · `math.NaN()` / `math.Inf(1)` / `IsNaN` · equality & epsilon · `math.Round` / `Floor` / `Trunc` · `complex128` / `real` / `imag` · `big.Float` / `big.Rat` |
| 012 | `go-012-booleans-zero-values.html` | Booleans & Zero Values | `bool` / `true` / `false` · no truthiness (no int → bool) · zero-value table · `nil` for pointer/slice/map/chan/func/interface · "make the zero value useful" · `var buf bytes.Buffer` ready to use |
| 013 | `go-013-type-conversion.html` | Type Conversion | `T(v)` explicit only · int ↔ float truncation · narrowing overflow · `string(rune)` vs `strconv.Itoa` pitfall · `[]byte(s)` / `string(b)` copy · `[]rune(s)` · slice → array `[4]int(s)` |
| 014 | `go-014-type-definitions-aliases.html` | Type Definitions & Aliases | `type Celsius float64` · underlying types · named vs unnamed types · `type A = B` alias · generic aliases (1.24) · assignability rules · methods only on defined types · `time.Duration` example |
| 015 | `go-015-bytes-runes.html` | Bytes & Runes | `byte` = `uint8` · `rune` = `int32` · rune literals `'a'` `'\n'` `'é'` · `unicode.IsLetter` / `IsDigit` / `ToUpper` · `utf8.RuneLen` · `utf8.RuneError` · Unicode 17 (1.27) |

### Group 4: Strings (Sheets 016–021)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 016 | `go-016-string-basics.html` | String Basics | `"interpreted"` vs `` `raw` `` · immutable byte sequences · `len(s)` counts bytes · `s[i]` returns a byte · `s[a:b]` slicing · `+` / `+=` concat · `==` / `<` comparison · escape sequences |
| 017 | `go-017-strings-utf8.html` | Strings & UTF-8 | `for i, r := range s` · byte index vs rune · `utf8.RuneCountInString` · `[]rune(s)` · `utf8.DecodeRuneInString` · `utf8.ValidString` · invalid bytes → `U+FFFD` · `strings.ToValidUTF8` |
| 018 | `go-018-strings-search-split.html` | strings Package — Search & Split | `Contains` / `ContainsAny` / `ContainsRune` · `Index` / `LastIndex` · `HasPrefix` / `HasSuffix` · `Cut` / `CutPrefix` / `CutLast` (1.27) · `Count` · `EqualFold` · `Split` / `SplitN` / `Fields` · `Lines` / `SplitSeq` iterators (1.24) |
| 019 | `go-019-strings-transform-join.html` | strings Package — Transform & Join | `ToUpper` / `ToLower` · `TrimSpace` / `Trim` / `TrimPrefix` / `TrimFunc` · `Replace` / `ReplaceAll` · `strings.NewReplacer` · `Join` · `Repeat` · `Map` · `Title` deprecated → `x/text/cases` |
| 020 | `go-020-strings-builder-bytes.html` | strings.Builder & bytes | `strings.Builder` / `WriteString` / `String()` · `Grow` · `bytes.Buffer` · `bytes` mirrors `strings` · `bytes.Equal` · `[]byte` ↔ `string` cost · `fmt.Fprintf(&b, …)` · `strings.NewReader` |
| 021 | `go-021-strconv.html` | strconv | `Itoa` / `Atoi` · `ParseInt(s, 10, 64)` / `ParseUint` · `ParseFloat` / `FormatFloat` · `ParseBool` / `FormatBool` · `Quote` / `Unquote` · `AppendInt` · `*strconv.NumError` / `ErrRange` / `ErrSyntax` |

### Group 5: Operators & Pointers (Sheets 022–026)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 022 | `go-022-arithmetic-operators.html` | Arithmetic Operators | `+ - * / %` · integer division truncates toward zero · `%` sign follows dividend · `x++` / `x--` are statements · no `**` (use `math.Pow`) · integer overflow wraps · int divide-by-zero panics vs float `+Inf` |
| 023 | `go-023-comparison-logical.html` | Comparison & Logical Operators | `==` `!=` `<` `<=` `>` `>=` · comparable types (struct, array, pointer, chan, interface) · slices/maps/funcs compare only to `nil` · `&&` `\|\|` `!` short-circuit · no ternary · `cmp.Compare` · `min` / `max` builtins |
| 024 | `go-024-bitwise-operators.html` | Bitwise Operators | `&` `\|` `^` · `&^` AND NOT (bit clear) · `<<` / `>>` (arithmetic for signed) · unary `^x` NOT · flags with `1 << iota` · `math/bits` `OnesCount` / `LeadingZeros` / `RotateLeft` · shift count rules |
| 025 | `go-025-assignment-precedence.html` | Assignment & Precedence | `=` vs `:=` · `+=` `-=` `&^=` `<<=` · tuple assignment `a, b = b, a` · `:=` needs ≥ 1 new variable · 5-level precedence table · `<-` receive operator · evaluation order |
| 026 | `go-026-pointers.html` | Pointers | `*T` type · `&x` address-of · `*p` dereference · `new(T)` / `new(expr)` (1.26) · nil-pointer deref panic · no pointer arithmetic · auto-deref `p.Field` · returning `&local` is safe (escapes to heap) |

### Group 6: Control Flow (Sheets 027–032)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 027 | `go-027-if-else.html` | if / else | `if cond { }` (no parens, braces required) · `else if` / `else` · init statement `if v, ok := m[k]; ok` · `if err := f(); err != nil` · init-variable scope · guard clauses & early return · no ternary operator |
| 028 | `go-028-switch.html` | switch | `switch x { case 1, 2: }` · no implicit fallthrough · `fallthrough` · tagless `switch { case x > 0: }` · init statement · `default` · `break` inside switch · type switch → see 059 |
| 029 | `go-029-for-loops.html` | for Loops | three-clause `for i := 0; i < n; i++` · while-style `for cond` · infinite `for { }` · per-iteration loop variables (1.22) · multiple vars `i, j := 0, n-1` · `for range 10` (1.22) |
| 030 | `go-030-for-range.html` | for range | slices & arrays `i, v` · maps (random order) · strings (by rune) · channels · integers `range n` · functions / iterators (1.23) · `_` to skip · `v` is a copy |
| 031 | `go-031-labels-break-continue-goto.html` | Labels, break, continue & goto | `break` / `continue` · labeled `break outer` · `continue outer` · breaking out of `select` / `switch` inside loops · `goto` rules · `return` from nested loops |
| 032 | `go-032-defer.html` | defer | LIFO order · arguments evaluated immediately · `defer f.Close()` · `defer mu.Unlock()` · defer-in-loop pitfall · modifying named results · `defer func() { … }()` |

### Group 7: Error Handling (Sheets 033–037)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 033 | `go-033-errors-as-values.html` | Errors as Values | `error` interface `Error() string` · `if err != nil { return err }` · `errors.New` · `fmt.Errorf` · return `(T, error)` · error last · zero value alongside error · never discard with `_` |
| 034 | `go-034-error-wrapping.html` | Wrapping & Inspecting Errors | `fmt.Errorf("…: %w", err)` · `errors.Unwrap` · `errors.Is` · `errors.As` · `errors.AsType[T]` (1.26) · multiple `%w` · `errors.Join` · `Unwrap() []error` |
| 035 | `go-035-custom-sentinel-errors.html` | Custom & Sentinel Errors | `var ErrNotFound = errors.New(…)` · custom `type MyErr struct` · `Is(target)` method · pointer vs value receivers · typed-nil error trap · `io.EOF` · `fs.ErrNotExist` |
| 036 | `go-036-panic-recover.html` | panic & recover | `panic(v)` · runtime panics (index, nil map, nil deref) · `recover()` in a deferred func · re-panic · `Must…` helpers · panic vs return error · a goroutine panic crashes the program |
| 037 | `go-037-error-patterns.html` | Error Handling Patterns | add context at each layer · handle once (log *or* return) · errors at API boundaries · `errgroup` · error from deferred `Close` · opaque vs inspectable errors · `slog` with an `err` attribute |

### Group 8: Functions (Sheets 038–044)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 038 | `go-038-functions-basics.html` | Defining & Calling Functions | `func name(a, b int) int` · shared-type params · pass by value · multiple returns `(int, error)` · named results · naked `return` · no overloading / no default args |
| 039 | `go-039-variadic.html` | Variadic Functions | `func f(nums ...int)` · `nums` is `[]int` · spread `f(s...)` · `...any` like `fmt.Println` · must be the last param · aliasing the caller's slice · variadic vs slice param |
| 040 | `go-040-function-values.html` | Function Values & Types | first-class functions · `type HandlerFunc func(…)` · funcs as params & returns · anonymous `func() { … }()` · method values `t.M` / method expressions `T.M` · nil func check · `slices.SortFunc` callbacks |
| 041 | `go-041-closures.html` | Closures | capture by reference · counter / generator pattern · loop-variable capture (fixed in 1.22) · closures in goroutines · memoization · `sync.OnceValue` · deferred closures |
| 042 | `go-042-scope-shadowing.html` | Scope & Shadowing | universe / package / file / function / block scope · `:=` shadowing outer `err` · shadowing in `if` / `for` init · shadowed builtins (`len`, `new`) · package-level vars · shadow analyzer |
| 043 | `go-043-package-initialization.html` | Package Initialization | package var init order (dependency-based) · `func init()` · multiple `init` per file · import-order init · side-effect imports `import _ "…"` · avoid heavy `init` · `sync.Once` lazy init |
| 044 | `go-044-functional-options.html` | Functional Options & Function Patterns | `type Option func(*Server)` · `WithTimeout(d) Option` · `NewServer(addr, opts...)` · config-struct alternative · decorator / middleware wrapping · recursion (no tail-call optimization) · callback hooks |

### Group 9: Data Structures (Sheets 045–054)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 045 | `go-045-arrays.html` | Arrays | `[5]int` (length is part of the type) · `[...]int{1, 2, 3}` · value semantics (copy on assign) · comparable with `==` · `[3][3]int` · arrays as map keys · when to prefer slices |
| 046 | `go-046-slices-basics.html` | Slices — Basics | `[]int{…}` · `make([]T, len, cap)` · `s[low:high]` · `append` · `len` / `cap` · nil vs empty slice · `for i, v := range s` · 2D slices |
| 047 | `go-047-slices-internals.html` | Slices — Internals & Gotchas | header (ptr, len, cap) · shared backing array · `append` reallocation & growth · full slice expr `s[a:b:c]` · `copy(dst, src)` · `slices.Clone` · sub-slice memory retention · passing slices to funcs |
| 048 | `go-048-slices-package.html` | slices Package | `Contains` / `Index` / `IndexFunc` · `Insert` / `Delete` / `Replace` · `Compact` · `Reverse` · `Max` / `Min` · `Equal` · `Concat` / `Repeat` · `Chunk` / `Collect` / `Values` |
| 049 | `go-049-maps-basics.html` | Maps — Basics | `map[string]int{}` · `make(map[K]V, hint)` · `m[k] = v` · comma-ok `v, ok := m[k]` · `delete(m, k)` · `clear(m)` · random iteration order · writing to a nil map panics |
| 050 | `go-050-maps-sets-patterns.html` | Maps — Sets & Patterns | `maps.Keys` / `Values` / `Collect` · sorted iteration `slices.Sorted(maps.Keys(m))` · sets as `map[T]struct{}` · counting & grouping · struct keys · `maps.Clone` / `Equal` · not concurrency-safe (`sync.Map`) |
| 051 | `go-051-structs.html` | Structs | `type User struct { … }` · named-field literals · anonymous structs · nested structs · field tags `` `json:"name"` `` · `==` comparison · `&User{}` · field-selector keys in literals (1.27) |
| 052 | `go-052-sorting-searching.html` | Sorting & Searching | `slices.Sort` · `slices.SortFunc` · `SortStableFunc` · `cmp.Compare` · multi-key sort with `cmp.Or` · `slices.BinarySearch` / `BinarySearchFunc` · `slices.IsSorted` · legacy `sort.Slice` |
| 053 | `go-053-stacks-queues-heaps.html` | Stacks, Queues & Heaps | stack via `append` / `s[:len(s)-1]` · queue via slice or ring buffer · `container/heap` interface · priority queue · `container/list` · `container/ring` · buffered `chan` as a bounded queue |
| 054 | `go-054-iterators.html` | Iterators | `iter.Seq[V]` / `iter.Seq2[K, V]` · `func(yield func(V) bool)` · range-over-func (1.23) · `break` → `yield` returns false · `slices.All` / `Backward` · `maps.All` · `iter.Pull` · writing custom iterators |

### Group 10: Types, Methods & Interfaces (Sheets 055–064)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 055 | `go-055-methods-receivers.html` | Methods & Receivers | `func (u User) Name()` · pointer receiver `(u *User)` · when to use pointer receivers · automatic `&` / `*` on calls · method sets · receiver consistency · methods on non-struct types |
| 056 | `go-056-struct-embedding.html` | Embedding & Composition | embedded fields · promoted fields & methods · shadowing promoted names · embedding pointers · embedding interfaces in structs · composition over inheritance · not "is-a" |
| 057 | `go-057-encapsulation-constructors.html` | Encapsulation & Constructors | exported vs unexported (package-level privacy) · `NewThing(…) *Thing` · getters without `Get` prefix · zero-value-ready types · `internal/` packages · validation in constructors |
| 058 | `go-058-interfaces-basics.html` | Interfaces | `type Reader interface { Read(p []byte) (int, error) }` · implicit satisfaction · small `-er` interfaces · accept interfaces, return structs · interface embedding · `var _ I = (*T)(nil)` check · interface value = (type, value) |
| 059 | `go-059-type-assertions-switches.html` | any, Type Assertions & Type Switches | `any` = `interface{}` · `v := x.(T)` (panics) · `v, ok := x.(T)` · `switch v := x.(type)` · multiple types per case · asserting to an interface · assertions vs `reflect` |
| 060 | `go-060-interface-gotchas.html` | Interface Gotchas | nil interface vs interface holding a nil pointer · pointer vs value method sets satisfying interfaces · comparing interfaces (panic on uncomparable) · interface pollution · define interfaces at the consumer · return concrete types |
| 061 | `go-061-standard-interfaces.html` | Standard Library Interfaces | `fmt.Stringer` · `error` · `io.Reader` / `Writer` / `Closer` · `sort.Interface` · `json.Marshaler` / `Unmarshaler` · `encoding.TextMarshaler` · `http.Handler` · `context.Context` |
| 062 | `go-062-generics-basics.html` | Generics — Basics | type parameters `func Map[T, U any](…)` · `any` / `comparable` · instantiation & inference · generic types `type Stack[T any] struct` · `var zero T` · when (not) to use generics |
| 063 | `go-063-generics-constraints.html` | Generics — Constraints | interface constraints · unions `int \| float64` · `~int` approximation · `cmp.Ordered` · `x/exp/constraints` · methods in constraints · core-type rules |
| 064 | `go-064-generic-methods.html` | Generic Methods & Advanced Generics | methods on generic types `func (s *Stack[T]) Push(v T)` · generic methods with own type params (1.27) · limits (not in interfaces, can't satisfy interface methods) · generic type aliases · `rand.N[Int]` · inference on func assignment (1.27) · self-referential constraints |

### Group 11: Files & I/O (Sheets 065–071)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 065 | `go-065-io-readers-writers.html` | io.Reader & io.Writer | `Read(p)` contract · `io.EOF` · `io.Copy` / `CopyN` · `io.ReadAll` · `TeeReader` / `MultiWriter` / `MultiReader` · `io.LimitReader` · `io.Pipe` · `io.Discard` |
| 066 | `go-066-reading-files.html` | Reading Files | `os.ReadFile` · `os.Open` + `defer f.Close()` · `bufio.Scanner` by line · `scanner.Buffer` for long lines · `bufio.Reader.ReadString` · chunked `f.Read` · `os.Stdin` · `fs.ErrNotExist` |
| 067 | `go-067-writing-files.html` | Writing Files | `os.WriteFile(name, data, 0o644)` · `os.Create` · `os.OpenFile` with `O_APPEND\|O_CREATE\|O_WRONLY` · `bufio.Writer` + `Flush` · `fmt.Fprintf(f, …)` · `f.Sync` · check the `Close` error · atomic write via temp + `os.Rename` |
| 068 | `go-068-paths-filesystem.html` | Paths & the Filesystem | `filepath.Join` / `Dir` / `Base` / `Ext` / `Abs` · `filepath.WalkDir` / `Glob` · `os.Stat` / `Lstat` · `os.MkdirAll` / `RemoveAll` · `os.ReadDir` · `os.CreateTemp` / `MkdirTemp` · `os.Root` (1.24) · `path` vs `path/filepath` |
| 069 | `go-069-embed-io-fs.html` | embed & io/fs | `//go:embed file.txt` · `string` / `[]byte` / `embed.FS` · glob patterns & `all:` · `fs.FS` interface · `fs.ReadFile` / `fs.WalkDir` · `os.DirFS` · `http.FileServerFS` · `fstest.MapFS` |
| 070 | `go-070-json.html` | JSON | `json.Marshal` / `MarshalIndent` · `json.Unmarshal` · tags `json:"name,omitempty"` / `omitzero` (1.24) · `json.Decoder` / `Encoder` · `map[string]any` · `json.RawMessage` · `encoding/json/v2` & `jsontext` (1.27) |
| 071 | `go-071-csv-xml-encodings.html` | CSV, XML & Other Encodings | `csv.NewReader` / `Read` / `ReadAll` · `csv.NewWriter` + `Flush` · `xml.Marshal` / `Unmarshal` tags · `encoding/base64` · `encoding/hex` · `encoding/gob` · `encoding/binary` |

### Group 12: Packages, Modules & Standard Library (Sheets 072–080)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 072 | `go-072-packages-imports.html` | Packages & Imports | one package per directory · import paths · aliased `import f "fmt"` · blank `_` & dot imports · `internal/` visibility · `cmd/` layout for multiple binaries · no import cycles · package naming conventions |
| 073 | `go-073-modules-go-mod.html` | Modules & go.mod | `go mod init example.com/app` · `module` / `go` / `toolchain` · `require` & `// indirect` · `replace` for local dev · `exclude` / `retract` · `tool` directive (1.24) · `/v2` major-version paths |
| 074 | `go-074-dependencies-workspaces.html` | Dependencies & Workspaces | `go get pkg@latest` / `@v1.2.3` / `@none` · `go mod tidy` · `go.sum` · `go list -m -u all` · `GOPROXY` / `GOPRIVATE` · `go mod vendor` · `go work init` / `use` · `govulncheck` |
| 075 | `go-075-math-rand.html` | math & math/rand/v2 | `math.Sqrt` / `Pow` / `Abs` / `Mod` · `math.Pi` / `MaxInt` · `rand.IntN` / `Float64` / `Shuffle` / `Perm` · generic `rand.N` · seeded `rand.New(rand.NewPCG(…))` · `crypto/rand.Text` · `math/big` |
| 076 | `go-076-time.html` | time | `time.Now` / `Since` / `Until` · `time.Duration` (`5 * time.Second`) · reference layout `"2006-01-02 15:04:05"` · `Format` / `Parse` / `time.RFC3339` · `Add` / `Sub` / `AddDate` · `LoadLocation` / `UTC` · `Timer` / `Ticker` / `time.After` · monotonic clock |
| 077 | `go-077-os-exec-signals.html` | os, exec & Signals | `os.Args` · `os.Getenv` / `LookupEnv` / `Setenv` · `os.Exit` (skips defers) · `exec.Command` / `CommandContext` / `CombinedOutput` · `signal.NotifyContext` · `os.Getwd` / `Hostname` · `runtime.GOOS` / `NumCPU` |
| 078 | `go-078-flag-cli.html` | Command-Line Flags | `flag.String` / `Int` / `Bool` / `Duration` · `flag.StringVar` · `flag.Parse` / `flag.Args` · `flag.Func` / custom `flag.Value` · `flag.NewFlagSet` subcommands · `flag.Usage` · `-h` help |
| 079 | `go-079-logging-slog.html` | Logging: log & slog | `log.Println` / `Printf` / `Fatal` · `log.SetFlags` / `SetPrefix` · `slog.Info` key-value pairs · `slog.NewJSONHandler` / `TextHandler` · levels & `HandlerOptions` · `slog.With` / `Group` · `slog.SetDefault` · `LogValuer` |
| 080 | `go-080-hashing-crypto-uuid.html` | Hashing, Crypto & UUIDs | `sha256.Sum256` · `hex.EncodeToString` · `crypto/hmac` · `crypto/rand` · `x/crypto/bcrypt` · `hash/fnv` / `hash/maphash` · `uuid` package (1.27) · `subtle.ConstantTimeCompare` |

### Group 13: External Libraries (Sheets 081–084)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 081 | `go-081-testify.html` | testify | `assert.Equal` · `require.NoError` · `assert.ErrorIs` · `assert.ElementsMatch` · assert vs require · `suite.Suite` · `mock.Mock` / `On` / `Return` |
| 082 | `go-082-cobra-viper.html` | Cobra & Viper (CLIs) | `cobra.Command` · `Use` / `Short` / `RunE` · `Flags()` / `PersistentFlags()` · `AddCommand` subcommands · `cobra-cli init` · `viper.SetConfigFile` / `ReadInConfig` · `AutomaticEnv` · shell completion |
| 083 | `go-083-web-routers.html` | Web Routers: chi, Gin & Echo | when stdlib `ServeMux` is enough · chi `r.Get` / `r.Route` / `r.Use` · `chi.URLParam` · Gin `gin.Context` / `c.JSON` / `ShouldBindJSON` · Echo `echo.Context` · choosing a router |
| 084 | `go-084-database-libraries.html` | Database Libraries: pgx, sqlx, sqlc & GORM | `pgxpool.New` · `pgx.CollectRows` · sqlx `Get` / `Select` / `db:` tags · sqlc generated queries · GORM `First` / `Create` / `Where` · migrations (goose, golang-migrate) · choosing an approach |

### Group 14: Advanced Topics (Sheets 085–090)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 085 | `go-085-regexp.html` | Regular Expressions | RE2 syntax (no backrefs or lookaround) · `regexp.MustCompile` · `MatchString` · `FindString` / `FindAllString` · `FindStringSubmatch` · named groups `(?P<name>…)` / `SubexpNames` · `ReplaceAllString` / `ReplaceAllStringFunc` · raw-string patterns |
| 086 | `go-086-reflection.html` | Reflection | `reflect.TypeOf` / `ValueOf` · `Kind` vs `Type` · struct fields & `Tag.Get` · `CanSet` / `Elem()` · `reflect.DeepEqual` · `reflect.TypeFor[T]` · laws of reflection · cost & when to avoid |
| 087 | `go-087-database-sql.html` | database/sql | `sql.Open(driver, dsn)` + blank driver import · `QueryContext` / `rows.Next` / `Scan` · `QueryRowContext` · `ExecContext` / `RowsAffected` · `?` vs `$1` placeholders · `BeginTx` / `Commit` / `Rollback` · `sql.Null[T]` · pool settings |
| 088 | `go-088-build-tags-cross-compile.html` | Build Tags & Cross-Compilation | `//go:build linux && amd64` · `_linux.go` / `_test.go` suffixes · `GOOS=windows GOARCH=arm64 go build` · `CGO_ENABLED=0` static binaries · `-ldflags "-s -w -X main.version=…"` · `-trimpath` · `go generate` · `debug.ReadBuildInfo` |
| 089 | `go-089-memory-gc.html` | Memory & Garbage Collection | stack vs heap · escape analysis `-gcflags=-m` · `GOGC` / `GOMEMLIMIT` · Green Tea GC · `sync.Pool` · `runtime.AddCleanup` / `weak.Pointer` · `runtime.MemStats` · preallocating slices & maps |
| 090 | `go-090-unsafe-cgo.html` | unsafe & cgo | `unsafe.Pointer` / `Sizeof` / `Alignof` / `Offsetof` · `unsafe.String` / `StringData` / `Slice` · `import "C"` preamble · `C.CString` + `C.free` · cgo call cost · cross-compiling with cgo · `go vet` unsafeptr |

### Group 15: Concurrency (Sheets 091–098)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 091 | `go-091-goroutines.html` | Goroutines | `go f()` · `go func() { … }()` · cheap (KB-sized stacks) · `main` returning kills all goroutines · `GOMAXPROCS` (container-aware, 1.25) · `runtime.NumGoroutine` · "share memory by communicating" · unrecovered panic crashes the process |
| 092 | `go-092-channels.html` | Channels | `make(chan T)` unbuffered · `make(chan T, n)` buffered · send `ch <- v` / receive `<-ch` · `v, ok := <-ch` · `close(ch)` (sender closes) · `for v := range ch` · directional `chan<-` / `<-chan` · nil channels block forever |
| 093 | `go-093-select.html` | select | `select { case v := <-a: … }` · `default` for non-blocking · timeouts with `time.After` · `ctx.Done()` case · random choice among ready cases · disabling a case with a nil channel · `for { select { … } }` · `time.NewTimer` reuse |
| 094 | `go-094-sync-primitives.html` | sync Primitives | `sync.Mutex` / `RWMutex` · `sync.WaitGroup` & `wg.Go` (1.25) · `sync.Once` / `OnceFunc` / `OnceValue` · `sync.Cond` · `sync.Map` · `sync.Pool` · never copy locks (vet copylocks) |
| 095 | `go-095-atomic.html` | sync/atomic | `atomic.Int64` / `Int32` / `Uint64` / `Bool` · `atomic.Pointer[T]` · `atomic.Value` · `Load` / `Store` / `Add` / `Swap` · `CompareAndSwap` · counters & flags · atomics vs mutexes |
| 096 | `go-096-context.html` | context | `context.Background` / `TODO` · `WithCancel` / `WithTimeout` / `WithDeadline` · `ctx.Done()` / `ctx.Err()` · `WithCancelCause` / `context.Cause` · `WithValue` (unexported key types) · `AfterFunc` / `WithoutCancel` · `ctx` as the first param |
| 097 | `go-097-concurrency-patterns.html` | Concurrency Patterns | worker pool · fan-out / fan-in · pipelines · semaphore via buffered channel · `errgroup.Group` / `SetLimit` · rate limiting (`time.Ticker`, `x/time/rate`) · graceful shutdown |
| 098 | `go-098-races-deadlocks-leaks.html` | Races, Deadlocks & Leaks | `go test -race` / `go run -race` · data-race examples · "all goroutines are asleep - deadlock!" · goroutine leaks (blocked sends) · `goroutineleak` pprof profile (1.27) · `testing/synctest` (1.25) · `GOTRACEBACK` |

### Group 16: Testing & Tooling (Sheets 099–104)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 099 | `go-099-testing-basics.html` | Testing — Basics | `_test.go` files · `func TestX(t *testing.T)` · `t.Error` / `Errorf` / `Fatal` · `go test ./...` · `-run` / `-v` / `-count=1` · table-driven tests · `t.Run` subtests · `package foo_test` black-box tests |
| 100 | `go-100-testing-helpers-fixtures.html` | Testing — Helpers & Fixtures | `t.Helper` · `t.Cleanup` · `t.Parallel` · `t.TempDir` / `t.Setenv` / `t.Chdir` · `t.Context` (1.24) · `testdata/` & golden files · `TestMain` · `httptest.NewRecorder` / `NewServer` |
| 101 | `go-101-benchmarks-fuzzing.html` | Benchmarks, Fuzzing & Examples | `func BenchmarkX(b *testing.B)` · `b.Loop()` (1.24) · `-bench=. -benchmem` · `benchstat` · `func FuzzX(f *testing.F)` / `f.Add` / `f.Fuzz` · `ExampleX` with `// Output:` · `-cover` / `-coverprofile` |
| 102 | `go-102-profiling-tracing.html` | Profiling & Tracing | `-cpuprofile` / `-memprofile` · `runtime/pprof` · `net/http/pprof` `/debug/pprof/` · `go tool pprof -http=:8080` · flame graphs · `go tool trace` · `trace.FlightRecorder` (1.25) · PGO with `default.pgo` |
| 103 | `go-103-formatting-vet-linters.html` | Formatting, Vet & Linters | `gofmt -l -w` · `goimports` · `go vet` analyzers · `staticcheck` · `golangci-lint run` · `go fix` modernizers · `govulncheck` · gopls diagnostics |
| 104 | `go-104-debugging-delve.html` | Debugging with Delve | `dlv debug` / `dlv test` / `dlv attach` · `break` / `continue` / `next` / `step` · `print` / `locals` / `goroutines` · conditional breakpoints · VS Code / GoLand integration · `-gcflags=all="-N -l"` · printf debugging with `%+v` |

### Group 17: Web & Networking (Sheets 105–110)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 105 | `go-105-http-server-basics.html` | HTTP Server — Basics | `http.HandleFunc` · `http.ListenAndServe` · `http.ResponseWriter` / `*http.Request` · `http.NewServeMux` · method & wildcard patterns `"GET /items/{id}"` (1.22) · `r.PathValue("id")` · `{path...}` / `{$}` · `http.Error` |
| 106 | `go-106-handlers-middleware.html` | Handlers & Middleware | `http.Handler` interface · `http.HandlerFunc` adapter · `func(http.Handler) http.Handler` · logging / recovery / auth middleware · chaining · `r.Context()` values · `http.StripPrefix` / `FileServer` |
| 107 | `go-107-json-apis.html` | Building JSON APIs | `json.NewDecoder(r.Body)` · `http.MaxBytesReader` · `DisallowUnknownFields` · write JSON + `Content-Type` · `w.WriteHeader` status codes · `r.URL.Query()` · consistent error responses · `r.FormValue` |
| 108 | `go-108-http-client.html` | HTTP Client | `http.Get` / `Post` · `http.Client{Timeout: …}` · `http.NewRequestWithContext` · `req.Header.Set` · always `defer resp.Body.Close()` · check `resp.StatusCode` · `Transport` tuning · `url.Parse` / `url.Values` |
| 109 | `go-109-http-production.html` | Production HTTP Servers | `http.Server` timeouts (`ReadHeaderTimeout`, `IdleTimeout`…) · `srv.Shutdown(ctx)` graceful stop · `signal.NotifyContext` · `ListenAndServeTLS` / `autocert` · health & readiness endpoints · `http.CrossOriginProtection` (1.25) · HTTP/2 by default |
| 110 | `go-110-tcp-udp-net.html` | TCP, UDP & net | `net.Listen("tcp", ":8080")` · `Accept` loop + goroutine per conn · `net.Dial` / `DialTimeout` · `SetDeadline` on `net.Conn` · `net.ListenPacket` (UDP) · `net/netip` · `net.LookupHost` · `bufio` over connections |

### Group 18: Quick Reference (Sheets 111–112)


| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 111 | `go-111-quick-reference-syntax-types.html` | Quick Reference — Syntax & Types | declarations · types & zero values · format verbs · operators & precedence · control flow · slice / map / string idioms · methods & interfaces · generics |
| 112 | `go-112-quick-reference-concurrency-tooling.html` | Quick Reference — Concurrency, Stdlib & Tooling | goroutines / channels / select · sync & context · error idioms · common stdlib calls · `go` command · test flags · build & cross-compile flags · version matrix |

A compact syntax → meaning lookup that condenses Sheets 001–110, with no explanations. Each row has the syntax, what it does, and the sheet number for details.

Sheet 112 ends with a version matrix answering "can I use this on my toolchain?":

| Version | Key additions |
|---|---|
| 1.18 | generics, fuzzing, workspaces |
| 1.21 | `min` / `max` / `clear`, `slices` / `maps` / `cmp`, `log/slog`, `toolchain` |
| 1.22 | per-iteration loop vars, `range` over int, ServeMux method & wildcard patterns, `math/rand/v2` |
| 1.23 | range-over-func iterators, `iter` package |
| 1.24 | generic type aliases, `b.Loop`, `t.Context`, `os.Root`, `omitzero`, `tool` directive |
| 1.25 | `WaitGroup.Go`, `testing/synctest`, `trace.FlightRecorder`, container-aware `GOMAXPROCS`, `CrossOriginProtection` |
| 1.26 | `new(expr)`, `errors.AsType`, Green Tea GC on by default |
| 1.27 | generic methods, `encoding/json/v2`, `uuid`, `goroutineleak` profile, `strings.CutLast` |
