# Swift Reference Guide Outline (108 sheets)

## Metadata

- **Group it belongs to:** Languages
- **Folder Directory:** `Sheets/Swift-Sheets/swift-###-[slug].html`
- **Groups:** 17
- **Sheets:** 108
- **Drafted Date:** 2026-10-26
- **Verified-Finalized Date:**

## Basic Information

A full Swift language reference. Groups 1–16 cover the language (types, optionals, closures, protocols, generics, concurrency, memory), and Group 17 is a 2-sheet quick reference. SwiftUI is its own separate set; this set links to it but does not teach it. Aimed at intermediate developers who already know at least one other language and want to build Apple-platform apps.

Code-first: every sheet leads with runnable Swift, then explains it. Targets the Swift 6 language mode (strict concurrency on). Older patterns (completion handlers, `ObservableObject`) appear only as side notes so readers can recognize them in existing code.

Scope limits: no UI frameworks (SwiftUI has its own set; UIKit is out of scope). App Store submission, signing, and provisioning are out of scope.

## Differences in Layout from Basic Structure

- **"The Swifty Way" box** on every sheet, placed under Code Explained. Avoid/prefer pairs showing idiomatic Swift (for example, avoid `if x != nil { use(x!) }`, prefer `if let x { use(x) }`).
- **"Coming From…" box** on every sheet, placed under Code Explained. Three short comparisons, usually Kotlin, TypeScript, Java or Python; Rust, C++, C# or Go where they are the closer match.
- **"Swift Versions" box** on selected sheets, placed under Code Explained. Says which Swift version added or changed the feature. Sheets that get the box: 012, 016, 031, 039, 044, 045, 050, 067, 074, 087, 093, 095, 096, 098, 101, 102, 103, 106.
- **"In SwiftUI" box** on selected sheets, placed under Code Explained. It shows where that language feature shows up in SwiftUI code and ends with a link to the SwiftUI set sheet that covers it (`../SwiftUI-Sheets/swiftui-NN-….html`) (for example, the result builders sheet shows that `body` is a `@ViewBuilder`). Sheets that get the box: 044, 045, 046, 050, 060, 063, 065, 069, 071, 074, 094, 095, 096, 098, 101.
- **Types & OOP (Group 10)** replaces the standard OOP group. Swift leans on structs, enums, and protocols more than class inheritance, so enums live here instead of in Data Structures, and inheritance is one sheet.
- **Memory Management (Group 16)** is a language-specific group placed after Concurrency.
- **Quick Reference (Group 17)** is exactly 2 dense table sheets at the end: no Row 1, no code, and no set boxes (Swifty Way, Coming From…, Swift Versions, In SwiftUI). Rows of 2–3 tables, then the footer trio.
- **Row 2 left column** may stack a reference table under the code block to balance the boxes on the right; the remaining tables form Row 3.
- Bitwise operators get one sheet with a pointer to the Bitwise set; regex gets one sheet with a pointer to the RegEx set.

## Groups

### Group 1: Introduction & Setup (Sheets 001–005)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 001 | `swift-001-introduction-history.html` | Introduction & History | Chris Lattner · 2014 · open source · Swift Evolution · ABI stability · Swift 6 |
| 002 | `swift-002-xcode-toolchain.html` | Xcode & Toolchain | Xcode · swiftc · Command Line Tools · simulators · SDKs · swiftly |
| 003 | `swift-003-running-swift.html` | Running Swift | Playgrounds · swift repl · swift file.swift · swift run · #!/usr/bin/env swift |
| 004 | `swift-004-program-structure.html` | Program Structure | main.swift · @main · top-level code · import · semicolons · statements |
| 005 | `swift-005-swift-beyond-apple.html` | Swift Beyond Apple | Linux · Windows · server-side Swift · Vapor · Embedded Swift · WebAssembly |

### Group 2: Output & Comments (Sheets 006–007)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 006 | `swift-006-print-debug-output.html` | Print & Debug Output | print · separator: · terminator: · debugPrint · dump · CustomStringConvertible |
| 007 | `swift-007-comments-documentation.html` | Comments & Documentation | // · /* */ nesting · /// · - Parameters: · // MARK: · DocC |

### Group 3: Variables & Data Types (Sheets 008–015)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 008 | `swift-008-constants-variables.html` | Constants & Variables | let · var · type annotation · type inference · naming rules · shadowing |
| 009 | `swift-009-integers.html` | Integers | Int · Int8…Int64 · UInt · .min / .max · overflow trap · 0x 0b 1_000 |
| 010 | `swift-010-floating-point.html` | Floating-Point & Decimal | Double · Float · Decimal · .infinity · .nan · rounded() · truncatingRemainder |
| 011 | `swift-011-booleans.html` | Booleans | Bool · true / false · toggle() · Bool.random() · no implicit truthiness |
| 012 | `swift-012-optionals-basics.html` | Optionals — Basics | Optional · nil · T? · force unwrap ! · if let · guard let |
| 013 | `swift-013-optionals-chaining-coalescing.html` | Optionals — Chaining & Coalescing | ?. chaining · ?? · map / flatMap · if let x shorthand · implicitly unwrapped T! |
| 014 | `swift-014-type-conversion.html` | Type Conversion & Casting | Int(_:) · Double(_:) · failable String init · as · as? · as! |
| 015 | `swift-015-type-aliases-checking.html` | Type Aliases & Type Checking | typealias · type(of:) · is · Any · AnyObject · Self |

### Group 4: Strings (Sheets 016–021)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 016 | `swift-016-string-basics.html` | String Basics | String literals · """ multiline · #"raw"# · isEmpty · count · value semantics |
| 017 | `swift-017-string-interpolation-formatting.html` | String Interpolation & Formatting | \\() · custom interpolation · .formatted() · FormatStyle · String(format:) |
| 018 | `swift-018-characters-unicode.html` | Characters & Unicode | Character · grapheme clusters · unicodeScalars · utf8 · utf16 · isLetter |
| 019 | `swift-019-string-indices-substrings.html` | String Indices & Substrings | String.Index · startIndex · index(_:offsetBy:) · Substring · prefix · suffix |
| 020 | `swift-020-string-methods-search.html` | String Methods — Search | contains · hasPrefix · hasSuffix · firstIndex(of:) · range(of:) · starts(with:) |
| 021 | `swift-021-string-methods-transform.html` | String Methods — Transform | uppercased · replacing · trimmingCharacters · split · joined · reversed |

### Group 5: Operators (Sheets 022–028)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 022 | `swift-022-arithmetic-operators.html` | Arithmetic Operators | + − * / % · integer division · &+ &− &* · no ++ / −− |
| 023 | `swift-023-comparison-operators.html` | Comparison Operators | == · != · < > <= >= · === · !== · tuple comparison |
| 024 | `swift-024-logical-operators.html` | Logical Operators | && · \|\| · ! · short-circuit · precedence · grouping with () |
| 025 | `swift-025-range-operators.html` | Range Operators | ... · ..< · one-sided ranges · ClosedRange · stride(from:to:by:) · ~= |
| 026 | `swift-026-bitwise-operators.html` | Bitwise Operators | & · \| · ^ · ~ · << >> · &<< &>> |
| 027 | `swift-027-assignment-compound.html` | Assignment & Compound Assignment | = · += −= *= /= · no value returned · tuple assignment · swap |
| 028 | `swift-028-custom-operators.html` | Operator Overloading & Custom Operators | static func + · prefix · postfix · infix · precedencegroup |

### Group 6: Control Flow (Sheets 029–036)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 029 | `swift-029-if-else.html` | if / else | if · else if · else · no parentheses · braces required · comma conditions |
| 030 | `swift-030-guard.html` | guard | guard · else · early exit · guard let · unwrapped scope |
| 031 | `swift-031-conditional-expressions.html` | Conditional Expressions | ?: ternary · if expressions · switch expressions · let x = if … |
| 032 | `swift-032-switch-basics.html` | switch — Basics | switch · case · default · exhaustiveness · no implicit fallthrough · fallthrough |
| 033 | `swift-033-pattern-matching.html` | Pattern Matching | case let · where · tuple patterns · range patterns · if case · for case |
| 034 | `swift-034-for-in-loops.html` | for-in Loops | for-in · ranges · stride · enumerated() · zip · where clause |
| 035 | `swift-035-while-repeat-while.html` | while & repeat-while | while · repeat { } while · condition checks · infinite loops |
| 036 | `swift-036-loop-control-labels.html` | Loop Control & Labels | break · continue · labeled statements · break outer · return |

### Group 7: Error Handling (Sheets 037–041)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 037 | `swift-037-error-basics.html` | Error Handling Basics | Error · throw · throws · do / catch · try · try? · try! |
| 038 | `swift-038-custom-errors.html` | Custom Errors | enum errors · associated values · LocalizedError · errorDescription · catch patterns |
| 039 | `swift-039-typed-throws-result.html` | Typed Throws & Result | throws(MyError) · Result · get() · mapError · rethrows |
| 040 | `swift-040-defer-cleanup.html` | defer & Cleanup | defer · execution order · scope exit · defer with guard · resource cleanup |
| 041 | `swift-041-assertions-preconditions.html` | Assertions & Preconditions | assert · precondition · fatalError · assertionFailure · debug vs release |

### Group 8: Functions & Closures (Sheets 042–050)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 042 | `swift-042-defining-calling-functions.html` | Defining & Calling Functions | func · -> · return · implicit return · Void · @discardableResult |
| 043 | `swift-043-argument-labels-parameters.html` | Argument Labels & Parameters | argument labels · _ · default values · inout · & · parameter names |
| 044 | `swift-044-variadic-overloading-function-types.html` | Variadics, Overloading & Function Types | Int... · overloading by label · function types · (Int) -> Int · functions as values |
| 045 | `swift-045-closures-basics.html` | Closures — Basics | { (x) in } · trailing closures · $0 shorthand · implicit return · multiple trailing closures |
| 046 | `swift-046-closures-capturing-escaping.html` | Closures — Capturing & Escaping | capture lists · [weak self] · @escaping · @autoclosure · non-escaping default |
| 047 | `swift-047-higher-order-functions.html` | Higher-Order Functions | map · filter · reduce · compactMap · flatMap · sorted(by:) · forEach |
| 048 | `swift-048-nested-functions-scope.html` | Nested Functions & Scope | nested func · local scope · global functions · captured state · shadowing |
| 049 | `swift-049-recursion.html` | Recursion | recursive functions · base case · indirect enum · memoization · stack depth |
| 050 | `swift-050-result-builders.html` | Result Builders | @resultBuilder · buildBlock · buildOptional · buildEither · DSLs · @ViewBuilder |

### Group 9: Data Structures (Sheets 051–059)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 051 | `swift-051-arrays-basics.html` | Arrays — Basics | [Int] · literals · append · insert(_:at:) · remove(at:) · count · subscripts |
| 052 | `swift-052-arrays-methods.html` | Arrays — Methods | sort · sorted · contains · first(where:) · firstIndex(of:) · shuffled · removeAll(where:) |
| 053 | `swift-053-arrays-slicing.html` | Arrays — Slicing & Ranges | ArraySlice · arr[1...3] · prefix · suffix · dropFirst · dropLast |
| 054 | `swift-054-tuples.html` | Tuples | (a, b) · named elements · destructuring · multiple return values · _ ignore |
| 055 | `swift-055-dictionaries-basics.html` | Dictionaries — Basics | [K: V] · optional subscript · default: · updateValue · removeValue · keys / values |
| 056 | `swift-056-dictionaries-methods.html` | Dictionaries — Methods | mapValues · compactMapValues · Dictionary(grouping:by:) · uniquingKeysWith · merge · filter |
| 057 | `swift-057-sets.html` | Sets | Set · insert · contains · union · intersection · subtracting · Hashable |
| 058 | `swift-058-sequence-collection-protocols.html` | Sequence & Collection Protocols | Sequence · IteratorProtocol · Collection · lazy · indices · makeIterator |
| 059 | `swift-059-sorting-searching-stacks-queues.html` | Sorting, Searching, Stacks & Queues | sort(by:) · key path sorting · min / max(by:) · array as stack · popLast · Deque |

### Group 10: Types & OOP (Sheets 060–075)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 060 | `swift-060-structs.html` | Structs | struct · stored properties · memberwise init · mutating · value semantics |
| 061 | `swift-061-classes.html` | Classes | class · reference semantics · deinit · identity === · final |
| 062 | `swift-062-struct-vs-class.html` | Struct vs Class | when to use each · copy vs share · copy-on-write · actors preview · Apple guidance |
| 063 | `swift-063-enums-basics.html` | Enums — Basics | enum · case · rawValue · init?(rawValue:) · CaseIterable · switch over enum |
| 064 | `swift-064-enums-associated-values.html` | Enums — Associated Values | associated values · indirect · methods on enums · computed properties · Optional is an enum |
| 065 | `swift-065-properties.html` | Properties | stored · computed · lazy · willSet / didSet · static · get / set |
| 066 | `swift-066-initializers.html` | Initializers | init · designated · convenience · init? · required · two-phase initialization |
| 067 | `swift-067-access-control.html` | Access Control | open · public · package · internal · fileprivate · private · private(set) |
| 068 | `swift-068-inheritance.html` | Inheritance | subclassing · override · super · final · class vs static methods |
| 069 | `swift-069-protocols-basics.html` | Protocols — Basics | protocol · conformance · method requirements · property requirements · protocols as types |
| 070 | `swift-070-protocol-extensions.html` | Protocol Extensions & POP | extension Protocol · default implementations · where Self · protocol-oriented design |
| 071 | `swift-071-common-protocols.html` | Common Standard Protocols | Equatable · Hashable · Comparable · Codable · Identifiable · Sendable · synthesis |
| 072 | `swift-072-extensions.html` | Extensions | extension · computed properties · methods · adding conformance · nested types |
| 073 | `swift-073-generics.html` | Generics | <T> · constraints · where clauses · generic types · associatedtype |
| 074 | `swift-074-opaque-existential-types.html` | Opaque & Existential Types | some · any · primary associated types · type erasure · some View |
| 075 | `swift-075-subscripts-callables.html` | Subscripts & Callables | subscript · static subscript · callAsFunction · @dynamicMemberLookup |

### Group 11: Files & I/O (Sheets 076–080)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 076 | `swift-076-filemanager-paths.html` | FileManager & Paths | URL · FileManager · URL.documentsDirectory · appending(path:) · fileExists · createDirectory |
| 077 | `swift-077-reading-writing-files.html` | Reading & Writing Files | String(contentsOf:) · write(to:atomically:) · Data · FileHandle · options |
| 078 | `swift-078-codable-json.html` | Codable & JSON | Codable · JSONEncoder · JSONDecoder · CodingKeys · keyDecodingStrategy · dateDecodingStrategy |
| 079 | `swift-079-codable-custom.html` | Codable — Custom Coding | init(from:) · encode(to:) · containers · nestedContainer · PropertyListEncoder |
| 080 | `swift-080-userdefaults-keychain.html` | UserDefaults & Keychain | UserDefaults · set(_:forKey:) · suites · Keychain Services · SecItemAdd · what not to store |

### Group 12: Modules & Packages (Sheets 081–086)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 081 | `swift-081-modules-imports.html` | Modules & Imports | import · modules · Foundation · @testable import · import struct · access across modules |
| 082 | `swift-082-swift-package-manager.html` | Swift Package Manager | Package.swift · swift package init · targets · products · dependencies · swift build |
| 083 | `swift-083-packages-in-xcode.html` | Packages in Xcode | Add Package Dependencies · Package.resolved · version rules · local packages |
| 084 | `swift-084-foundation-dates-times.html` | Foundation — Dates & Times | Date · Calendar · DateComponents · .formatted() · Duration · ISO8601 |
| 085 | `swift-085-foundation-math-random.html` | Foundation — Math & Random | Int.random(in:) · randomElement() · abs · pow · min / max · Measurement |
| 086 | `swift-086-foundation-urls-system.html` | Foundation — URLs & System | URL · URLComponents · URLQueryItem · ProcessInfo · Bundle · Locale |

### Group 13: Testing & Common Libraries (Sheets 087–092)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 087 | `swift-087-swift-testing.html` | Swift Testing | import Testing · @Test · #expect · #require · @Suite · arguments: · tags |
| 088 | `swift-088-xctest.html` | XCTest | XCTestCase · XCTAssertEqual · setUp · tearDown · expectations · measure |
| 089 | `swift-089-logging-oslog.html` | Logging with OSLog | Logger · subsystem · category · log levels · privacy: · Console.app |
| 090 | `swift-090-networking-urlsession.html` | Networking with URLSession | URLSession · data(from:) · URLRequest · httpMethod · HTTPURLResponse · decoding |
| 091 | `swift-091-swift-collections-algorithms.html` | Swift Collections & Algorithms | Deque · OrderedSet · OrderedDictionary · Heap · chunks(ofCount:) · uniqued() |
| 092 | `swift-092-swiftlint-swift-format.html` | SwiftLint & swift-format | .swiftlint.yml · rules · disable comments · swift-format · build phase · CI |

### Group 14: Advanced Topics (Sheets 093–097)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 093 | `swift-093-regex.html` | Regex | /pattern/ literals · Regex · RegexBuilder · wholeMatch · firstMatch · captures |
| 094 | `swift-094-key-paths.html` | Key Paths | KeyPath · \\.name · WritableKeyPath · key paths as functions · sorting by key path |
| 095 | `swift-095-property-wrappers.html` | Property Wrappers | @propertyWrapper · wrappedValue · projectedValue · $ prefix · init(wrappedValue:) |
| 096 | `swift-096-macros.html` | Macros | #Preview · @Observable · freestanding · attached · Expand Macro · swift-syntax |
| 097 | `swift-097-objc-c-interop.html` | Objective-C & C Interop | @objc · NSObject · bridging header · C functions · UnsafePointer · C++ interop |

### Group 15: Concurrency (Sheets 098–103)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 098 | `swift-098-async-await.html` | async / await | async · await · suspension points · async let · async properties · Task { } |
| 099 | `swift-099-tasks-task-groups.html` | Tasks & Task Groups | Task · withTaskGroup · withThrowingTaskGroup · Task.sleep · priority · detached |
| 100 | `swift-100-cancellation.html` | Task Cancellation | Task.isCancelled · checkCancellation() · cancel() · CancellationError · withTaskCancellationHandler |
| 101 | `swift-101-actors-mainactor.html` | Actors & @MainActor | actor · isolation · nonisolated · reentrancy · @MainActor · global actors |
| 102 | `swift-102-sendable-strict-concurrency.html` | Sendable & Strict Concurrency | Sendable · @Sendable · Swift 6 language mode · data-race errors · sending · @unchecked Sendable |
| 103 | `swift-103-asyncsequence-continuations.html` | AsyncSequence & Continuations | AsyncSequence · for await · AsyncStream · withCheckedContinuation · bridging callbacks |

### Group 16: Memory Management (Sheets 104–106)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 104 | `swift-104-arc-basics.html` | ARC Basics | ARC · strong references · reference counting · deinit · value types and ARC |
| 105 | `swift-105-retain-cycles-weak-unowned.html` | Retain Cycles, weak & unowned | retain cycles · weak · unowned · [weak self] · Memory Graph Debugger · Instruments Leaks |
| 106 | `swift-106-ownership-noncopyable.html` | Ownership & Noncopyable Types | ~Copyable · borrowing · consuming · consume · discard self |

### Group 17: Quick Reference (Sheets 107–108)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 107 | `swift-107-quick-reference-syntax.html` | Quick Reference — Syntax | let / var · optionals · if / guard / switch · loops · func · closures · struct / class / enum / protocol |
| 108 | `swift-108-quick-reference-stdlib-idioms.html` | Quick Reference — Standard Library & Idioms | Array / Dictionary / Set methods · String methods · error handling · async / await · Codable · common idioms |

Dense tables, no explanations. Each row points to the full sheet number.
