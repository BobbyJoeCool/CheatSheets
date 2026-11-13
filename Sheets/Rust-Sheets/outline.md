# Rust Reference Guide Outline (107 sheets)

## Metadata

- **Group it belongs to:** Languages
- **Folder Directory:** `Sheets/Rust-Sheets/rs-###-[slug].html`
- **PDF Name:** `Rust Reference Guide.pdf`
- **Groups:** 19
- **Sheets:** 107
- **Drafted Date:** 2026-11-12
- **Verified-Finalized Date:**

## Basic Information

Rust, a compiled systems language that gives memory safety without a garbage collector, for intermediate readers who already know at least one other language. Targets the 2024 edition on current stable Rust and tags features stabilized after 1.80 so readers on older toolchains know what they can use. Version tags should be re-checked against the Rust release notes when each sheet is built.

The set follows the standard language groups, but Ownership & Borrowing is pulled forward to Group 7 because every later group (errors, closures, collections, structs, threads) depends on it. OOP is replaced by Structs, Enums & Traits, and a Smart Pointers group follows it. After the standard groups come Concurrency & Async, Common Crates (reqwest, Axum, tracing, sqlx) and Advanced (macros, unsafe, FFI). It ends with two quick-reference pages, the second a compiler-error table (E-code → cause → fix), since borrow-checker errors are the main thing readers look up.

## Differences in Layout from Basic Structure

- **Extra boxes:** **Coming From…** (`section-notes section-compare`, `id="compare"`) and **The Rust Way** (`section-notes section-idiom`, `id="idiom"`) under Code Explained on every sheet except the quick references (107–108) · **Under the Hood** (`section-notes section-hood`, `id="hood"`) in Row 1 on 22 selected sheets. Details below.
- Numbers are three digits throughout (`rs-001` to `rs-108`) because the set passes 99.
- Ownership & Borrowing (Group 7) sits before Error Handling instead of with the language-specific groups.
- Error Handling is built around `Option` / `Result` and `?`; `panic!` gets one sheet.
- OOP is replaced by Structs, Enums & Traits (Group 11) and Smart Pointers (Group 12). Rust has no classes or inheritance.
- Sheet 107 are table-only quick-reference pages with no code row. 107 uses Syntax · Does · Sheet #; 108 uses Error Code · Message · Cause · Fix · Sheet #.

### Coming From… box (every sheet except 107–108)

- 2–3 `note-item` lines comparing the sheet's topic to C++, Go, Python and Java / JavaScript, whichever is the closer match: `C++ — a move leaves the source unusable; there is no moved-from state`.

### The Rust Way box (every sheet except 107–108)

- Prefer / Avoid pairs, Clippy-style: `Avoid: for i in 0..v.len() { v[i] } · Prefer: for x in &v`.

### Under the Hood box (Row 1, selected sheets)

- What the compiler and runtime actually do: memory layout, fat pointers, niche optimization, monomorphization, vtables, state machines, desugaring.
- Sheets: 011, 014, 017, 021, 034, 036, 038, 042, 043, 048, 052, 053, 055, 059, 064, 068, 070, 072, 073, 094, 096, 102.

## Groups

### Group 1: Introduction & Setup (Sheets 001–005)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 001 | `rs-001-introduction-history.html` | Introduction & History | Mozilla Research, 2010 · Graydon Hoare · 1.0 in May 2015 · Rust Foundation (2021) · memory safety without GC · zero-cost abstractions · 6-week release train |
| 002 | `rs-002-installing-rustup.html` | Installing with rustup | `rustup-init` · `rustup update` · stable / beta / nightly · `rustup default` · `rustup toolchain install` · `rust-toolchain.toml` · `rustup component add` |
| 003 | `rs-003-cargo-basics.html` | Cargo Basics | `cargo new` / `cargo init` · `cargo build` / `--release` · `cargo run` · `cargo check` · `target/` · `Cargo.toml` & `Cargo.lock` · `cargo add` |
| 004 | `rs-004-program-structure.html` | Program Structure | `fn main()` · statements vs expressions · trailing expression & `;` · blocks `{}` · `main` returning `Result` · `main.rs` / `lib.rs` crate roots |
| 005 | `rs-005-rustfmt-clippy-editions.html` | rustfmt, Clippy & Editions | `cargo fmt` · `rustfmt.toml` · `cargo clippy` · `#[allow]` / `#[warn]` / `#[deny]` · `cargo fix --edition` · rust-analyzer · editions 2015 / 2018 / 2021 / 2024 |

### Group 2: Output & Comments (Sheets 006–008)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 006 | `rs-006-printing-macros.html` | Printing Macros | `println!` / `print!` · `eprintln!` / `eprint!` · `format!` · `write!` / `writeln!` · `dbg!` · `io::Write` & `flush()` |
| 007 | `rs-007-format-syntax.html` | Format Syntax | `{}` Display vs `{:?}` Debug · `{:#?}` pretty · inline args `{name}` · positional `{0}` · width / fill / align `{:>8}` `{:08.2}` · `{:x}` `{:b}` `{:e}` · `{{` escaping |
| 008 | `rs-008-comments-doc-comments.html` | Comments & Doc Comments | `//` · `/* */` (nestable) · `///` item docs · `//!` crate / module docs · `# Examples` / `# Panics` / `# Errors` · `cargo doc --open` |

### Group 3: Variables & Data Types (Sheets 009–016)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 009 | `rs-009-variables-mutability-shadowing.html` | Variables, Mutability & Shadowing | `let` · `let mut` · shadowing with `let` · block scope · unused `_x` · destructuring `let (a, b)` · must initialize before use |
| 010 | `rs-010-constants-statics.html` | Constants & Statics | `const` · `static` · `static mut` (unsafe) · SCREAMING_CASE · compile-time evaluation · `LazyLock` / `OnceLock` |
| 011 | `rs-011-integers.html` | Integers | `i8`…`i128` · `u8`…`u128` · `isize` / `usize` · literals `0x` `0o` `0b` `1_000` `10u8` · `i32::MAX` · debug panics vs release wraps |
| 012 | `rs-012-floating-point.html` | Floating-Point Numbers | `f32` / `f64` · `f64::NAN` / `INFINITY` · `is_nan()` · `total_cmp` · `round` / `floor` / `ceil` / `trunc` · `powi` / `powf` / `sqrt` · `f64::EPSILON` |
| 013 | `rs-013-booleans-char.html` | Booleans & char | `bool` · `char` is a 4-byte Unicode scalar · `'a'` vs `"a"` · `is_alphabetic()` / `is_ascii_digit()` · `to_digit(10)` · `char::from_u32` |
| 014 | `rs-014-tuples-unit.html` | Tuples & the Unit Type | `(i32, &str)` · `.0` / `.1` · destructuring · unit `()` · returning multiple values · never type `!` |
| 015 | `rs-015-type-conversion.html` | Type Conversion | `as` casts (truncation, sign) · `From` / `Into` · `TryFrom` / `TryInto` · `parse::<T>()` · `to_string()` · lossless vs lossy |
| 016 | `rs-016-type-inference-aliases.html` | Type Inference & Aliases | inference from usage · annotations `let x: u64` · turbofish `::<T>` · `type Alias = …` · `_` placeholder `Vec<_>` · `std::mem::size_of` |

### Group 4: Strings (Sheets 017–021)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 017 | `rs-017-string-vs-str.html` | String vs &str | `String` (owned, heap) · `&str` (borrowed slice) · literals are `&'static str` · `&String` → `&str` deref · `as_str()` · take `&str` params |
| 018 | `rs-018-building-strings.html` | Building Strings | `String::new()` · `String::from` / `to_string()` / `to_owned()` · `push` / `push_str` · `+` and `format!` · `with_capacity` · raw `r#"…"#` · byte strings `b"…"` |
| 019 | `rs-019-string-methods-search.html` | String Methods — Search & Inspect | `len()` (bytes) · `is_empty()` · `contains` · `starts_with` / `ends_with` · `find` / `rfind` · `matches` · `strip_prefix` / `strip_suffix` |
| 020 | `rs-020-string-methods-transform.html` | String Methods — Transform & Split | `to_uppercase` / `to_lowercase` · `trim` family · `replace` / `replacen` · `split` / `split_whitespace` / `lines` · `split_once` · `repeat` · `join` / `concat` |
| 021 | `rs-021-utf8-chars-bytes.html` | UTF-8, chars & bytes | UTF-8 guarantee · no `s[0]` indexing · byte-range slices & panics · `chars()` / `char_indices()` · `bytes()` · `is_char_boundary` · `String::from_utf8_lossy` |

### Group 5: Operators (Sheets 022–026)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 022 | `rs-022-arithmetic-overflow.html` | Arithmetic & Overflow | `+ - * / %` · integer division truncates · `rem_euclid` · `pow` · `checked_add` / `wrapping_add` / `saturating_add` / `overflowing_add` · no `++` |
| 023 | `rs-023-comparison-ordering.html` | Comparison & Ordering | `== != < > <= >=` · `PartialEq` / `Eq` · `PartialOrd` / `Ord` · `Ordering` · `cmp` / `partial_cmp` · `max` / `min` / `clamp` |
| 024 | `rs-024-logical-bitwise.html` | Logical & Bitwise | `&& \|\| !` short-circuit · `& \| ^ !` on integers · `<< >>` · `count_ones` / `leading_zeros` · `rotate_left` · bool `&` vs `&&` |
| 025 | `rs-025-assignment-ranges.html` | Assignment & Ranges | `=` · compound `+= -= *= /= %= &= \|= ^= <<= >>=` · `a..b` / `a..=b` / `..` / `a..` · `contains` · `step_by` / `rev` |
| 026 | `rs-026-operator-overloading.html` | Operator Overloading | `std::ops::Add` / `Sub` / `Mul` · `Neg` / `Not` · `AddAssign` · `Index` / `IndexMut` · `type Output` · derived comparisons |

### Group 6: Control Flow (Sheets 027–033)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 027 | `rs-027-if-else-expressions.html` | if / else as Expressions | `if` / `else if` / `else` · condition must be `bool` · `let x = if …` · arms must match types · no ternary |
| 028 | `rs-028-loop-break-values.html` | loop & Break Values | `loop` · `break` / `continue` · `break value` · labels `'outer:` · `break 'outer` · infinite loops & `!` |
| 029 | `rs-029-while-while-let.html` | while & while let | `while cond` · `while let Some(x) = stack.pop()` · counters vs iterators · `continue` · avoiding index loops |
| 030 | `rs-030-for-loops.html` | for Loops | `for x in iter` · `&v` / `&mut v` / `v` (into_iter) · ranges `0..n` · `.iter().enumerate()` · `.rev()` · `.zip()` |
| 031 | `rs-031-match-basics.html` | match Basics | `match` · exhaustiveness · `_` wildcard · `\|` multiple patterns · ranges `1..=5` · match as an expression · matching `Option` / `Result` |
| 032 | `rs-032-patterns-in-depth.html` | Patterns in Depth | destructuring structs / tuples / enums · `..` rest · `@` bindings · match guards · `ref` / `ref mut` · slice patterns `[first, .., last]` |
| 033 | `rs-033-if-let-let-else-chains.html` | if let, let else & let Chains | `if let` · `if let … else` · `let … else { return }` · let chains (2024 edition) · `matches!` · `while let` |

### Group 7: Ownership & Borrowing (Sheets 034–040)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 034 | `rs-034-ownership-moves.html` | Ownership & Moves | three ownership rules · move on assignment · move into functions · drop at scope end · E0382 use after move · stack vs heap |
| 035 | `rs-035-copy-clone.html` | Copy vs Clone | `Copy` types (ints, bool, char, `&T`) · `Clone` / `.clone()` · `#[derive(Copy, Clone)]` · cost of cloning · `to_owned()` · when cloning is fine |
| 036 | `rs-036-references-borrowing.html` | References & Borrowing | `&T` shared borrow · `*` deref · auto-deref on method calls · the borrowing rules · references must stay valid · passing `&` to functions |
| 037 | `rs-037-mutable-references.html` | Mutable References | `&mut T` · one mutable OR many shared · E0499 / E0502 · non-lexical lifetimes (NLL) · reborrowing · `mem::swap` / `take` / `replace` |
| 038 | `rs-038-slices.html` | Slices | `&[T]` / `&mut [T]` · `&v[1..3]` · `&str` as a slice · `split_at` · `chunks` / `windows` · `first()` / `last()` |
| 039 | `rs-039-lifetimes-basics.html` | Lifetimes — Basics | `'a` syntax · why lifetimes exist · E0106 / E0597 · functions returning references · `'static` · lifetimes describe, they don't extend |
| 040 | `rs-040-lifetimes-structs-elision.html` | Lifetimes — Structs & Elision | structs holding `&'a T` · `impl<'a>` · three elision rules · `'_` anonymous lifetime · `T: 'a` bounds · own instead of borrow |

### Group 8: Error Handling (Sheets 041–045)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 041 | `rs-041-panic.html` | panic! & Unrecoverable Errors | `panic!` · `unwrap()` / `expect()` · `unreachable!` / `todo!` / `unimplemented!` · `assert!` / `assert_eq!` / `debug_assert!` · `RUST_BACKTRACE=1` · `panic = "abort"` |
| 042 | `rs-042-option.html` | Option&lt;T&gt; | `Some` / `None` · `unwrap_or` / `unwrap_or_else` / `unwrap_or_default` · `map` / `and_then` / `filter` · `ok_or` · `?` on Option · `take()` / `is_some_and` |
| 043 | `rs-043-result-question-mark.html` | Result&lt;T, E&gt; & the ? Operator | `Ok` / `Err` · `?` propagation · `map_err` · `ok()` / `err()` · `Box<dyn Error>` · `main() -> Result` |
| 044 | `rs-044-custom-errors.html` | Custom Error Types | error enums · `impl Display` · `impl std::error::Error` · `source()` · `From` for `?` conversion · `#[non_exhaustive]` |
| 045 | `rs-045-thiserror-anyhow.html` | thiserror & anyhow | `#[derive(Error)]` · `#[error("…")]` · `#[from]` · `anyhow::Result` · `.context()` / `with_context` · `bail!` / `ensure!` · library vs application rule |

### Group 9: Functions & Closures (Sheets 046–051)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 046 | `rs-046-defining-functions.html` | Defining Functions | `fn name(x: i32) -> i32` · implicit return · early `return` · unit return · snake_case · functions are items (order doesn't matter) |
| 047 | `rs-047-parameters.html` | Parameters & Arguments | by value (move) · `&T` / `&mut T` params · `mut` bindings · `impl Trait` params · no default args or overloading · `Option` / builder instead |
| 048 | `rs-048-closures.html` | Closures | `\|x\| x + 1` · type inference · capture by ref / mut ref / value · `move` closures · closures in variables · closures in iterators |
| 049 | `rs-049-fn-traits.html` | Fn, FnMut & FnOnce | `Fn` · `FnMut` · `FnOnce` · how captures pick the trait · `F: Fn(i32) -> i32` · `where` clauses · `fn` pointers vs closures |
| 050 | `rs-050-higher-order-functions.html` | Higher-Order Functions | closures as arguments · returning `impl Fn` · `Box<dyn Fn>` · `fn(i32) -> i32` pointers · composing functions · callbacks |
| 051 | `rs-051-const-fn-recursion.html` | const fn, Recursion & Attributes | `const fn` · recursion & stack depth · no guaranteed tail calls · `#[inline]` · `#[must_use]` · diverging `-> !` |

### Group 10: Collections & Iterators (Sheets 052–061)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 052 | `rs-052-arrays.html` | Arrays | `[i32; 5]` · `[0; 100]` · fixed size on the stack · `len()` · arrays vs slices vs `Vec` · `array::map` · 2-D arrays |
| 053 | `rs-053-vec-basics.html` | Vec — Basics | `Vec::new()` / `vec![]` · `push` / `pop` · `v[i]` panics · `get(i)` → Option · `len` / `capacity` · `with_capacity` |
| 054 | `rs-054-vec-methods.html` | Vec — Methods | `insert` / `remove` / `swap_remove` · `extend` / `append` · `retain` / `dedup` · `truncate` / `clear` · `drain` · `contains` · `split_off` |
| 055 | `rs-055-hashmap-basics.html` | HashMap — Basics | `HashMap::new()` · `insert` / `get` / `remove` · `contains_key` · random iteration order · `HashMap::from([…])` · key / value ownership |
| 056 | `rs-056-entry-api-btreemap.html` | Entry API & BTreeMap | `entry().or_insert()` · `or_insert_with` / `or_default` · `and_modify` · word-count pattern · `BTreeMap` sorted keys · `range()` · `first_key_value` |
| 057 | `rs-057-sets.html` | HashSet & BTreeSet | `HashSet` · `BTreeSet` · `insert` returns bool · `union` / `intersection` / `difference` / `symmetric_difference` · `is_subset` · dedup via `collect` |
| 058 | `rs-058-vecdeque-binaryheap.html` | VecDeque, BinaryHeap & Choosing | `VecDeque` `push_front` / `pop_back` · queues & stacks · `BinaryHeap` max-heap · `Reverse` for min-heap · `LinkedList` (rarely) · choosing a collection |
| 059 | `rs-059-iterators.html` | Iterators | `Iterator` & `next()` · `iter()` / `iter_mut()` / `into_iter()` · laziness · `IntoIterator` · implementing `Iterator` · `iter::from_fn` / `successors` |
| 060 | `rs-060-iterator-adapters.html` | Iterator Adapters & Consumers | `map` / `filter` / `filter_map` · `enumerate` / `zip` / `chain` · `take` / `skip` / `take_while` · `flat_map` / `flatten` · `peekable` · `fold` / `sum` / `count` · `collect::<Vec<_>>()` |
| 061 | `rs-061-sorting-searching.html` | Sorting & Searching | `sort` / `sort_unstable` · `sort_by` / `sort_by_key` · `cmp::Reverse` · `binary_search` · `position` / `find` / `any` / `all` · `max_by_key` / `min_by` |

### Group 11: Structs, Enums & Traits (Sheets 062–071)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 062 | `rs-062-structs.html` | Structs | named-field structs · tuple structs · unit structs · field init shorthand · struct update `..other` · `#[derive(Debug)]` |
| 063 | `rs-063-methods-impl.html` | Methods & impl Blocks | `impl` · `&self` / `&mut self` / `self` · associated functions `new()` · `Self` · multiple impl blocks · auto-ref on method calls |
| 064 | `rs-064-enums.html` | Enums with Data | variants with data · struct-like variants · `impl` on enums · `Option` & `Result` are enums · C-like enums & discriminants · `match` on enums |
| 065 | `rs-065-traits-basics.html` | Traits — Basics | `trait` definitions · `impl Trait for Type` · trait methods · orphan rule · `impl Trait` params · `&dyn Trait` preview |
| 066 | `rs-066-default-impl-derive.html` | Default Methods, derive & Supertraits | default method bodies · overriding defaults · `#[derive(…)]` · supertraits `trait A: B` · blanket impls · marker traits |
| 067 | `rs-067-common-std-traits.html` | Common Standard Traits | `Debug` / `Display` · `Clone` / `Copy` · `PartialEq` / `Eq` / `Hash` · `PartialOrd` / `Ord` · `Default` · `From` / `Into` · `AsRef` / `Borrow` |
| 068 | `rs-068-generics.html` | Generics | generic functions `fn largest<T>` · generic structs & enums · `impl<T>` · monomorphization · const generics `[T; N]` · `PhantomData` |
| 069 | `rs-069-trait-bounds-where.html` | Trait Bounds & where | `T: Display + Clone` · `where` clauses · `impl Trait` in argument & return position · conditional impls · `?Sized` |
| 070 | `rs-070-trait-objects.html` | Trait Objects & dyn | `dyn Trait` · `Box<dyn Trait>` / `&dyn Trait` · dynamic dispatch & vtables · dyn compatibility · `Vec<Box<dyn Shape>>` · generics vs trait objects |
| 071 | `rs-071-associated-types-consts.html` | Associated Types & Consts | `type Item` · associated consts · `Iterator<Item = T>` · generic trait vs associated type · `<T as Trait>::f` · default type parameters |

### Group 12: Smart Pointers (Sheets 072–076)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 072 | `rs-072-box.html` | Box&lt;T&gt; | `Box::new` · heap allocation · recursive types · `Box<dyn Trait>` · `Box<[T]>` · moving out of a box |
| 073 | `rs-073-rc-weak.html` | Rc&lt;T&gt; & Weak | `Rc::new` · `Rc::clone` · `strong_count` · single-thread shared ownership · `Weak` / `upgrade()` · reference cycles · parent pointers |
| 074 | `rs-074-refcell-cell.html` | Cell, RefCell & Interior Mutability | interior mutability · `Cell` `get` / `set` · `RefCell` `borrow()` / `borrow_mut()` · runtime borrow panics · `Rc<RefCell<T>>` · `OnceCell` |
| 075 | `rs-075-deref-drop.html` | Deref & Drop | `Deref` / `DerefMut` · deref coercion · `Drop` · RAII · `drop(x)` early · drop order |
| 076 | `rs-076-cow-choosing.html` | Cow & Choosing a Pointer | `Cow<'a, str>` · `to_mut()` / `into_owned()` · Box vs Rc vs Arc · `Rc<RefCell>` vs `Arc<Mutex>` · `Pin` preview |

### Group 13: Files & I/O (Sheets 077–082)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 077 | `rs-077-reading-files.html` | Reading Files | `fs::read_to_string` · `File::open` · `BufReader` & `lines()` · `read_to_end` · `io::Result` · `?` in file code |
| 078 | `rs-078-writing-files.html` | Writing Files | `fs::write` · `File::create` · `OpenOptions` (append, create) · `BufWriter` · `write!` / `writeln!` · `flush()` / `sync_all` |
| 079 | `rs-079-paths-directories.html` | Paths & Directories | `Path` / `PathBuf` · `join` / `extension` / `file_name` · `fs::create_dir_all` · `read_dir` · `metadata` · `remove_file` / `rename` |
| 080 | `rs-080-stdin-stdout.html` | stdin & stdout | `io::stdin().read_line` · `lines()` · `lock()` · `io::stdout()` / `stderr()` · `BufRead` · `trim().parse()` |
| 081 | `rs-081-serde-json.html` | Serde & JSON | `#[derive(Serialize, Deserialize)]` · `serde_json::to_string_pretty` · `from_str` · `Value` / `json!` · `#[serde(rename_all, default, skip)]` · TOML / CSV via serde |
| 082 | `rs-082-cli-args-env.html` | CLI Arguments & Environment | `env::args()` · `env::var` · `clap` `#[derive(Parser)]` · `#[arg(short, long)]` · subcommands · `ExitCode` / `process::exit` |

### Group 14: Modules, Crates & Cargo (Sheets 083–088)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 083 | `rs-083-modules.html` | Modules | `mod` · inline vs file modules (`foo.rs`, `foo/mod.rs`) · `use` · `crate::` / `super::` / `self::` · `pub use` re-exports · glob imports |
| 084 | `rs-084-visibility.html` | Visibility | private by default · `pub` · `pub(crate)` / `pub(super)` · struct field visibility · public enum variants · API surface design |
| 085 | `rs-085-cargo-dependencies.html` | Cargo Dependencies | `[dependencies]` · semver `"1.0"` / `"=1.2.3"` · `cargo add` / `remove` / `update` · `Cargo.lock` · `[dev-dependencies]` · git & path deps |
| 086 | `rs-086-workspaces-features.html` | Workspaces, Features & Profiles | `[workspace]` · `members` · shared lock & `target/` · `[features]` · optional deps · `--features` / `--all-features` · `[profile.release]` |
| 087 | `rs-087-publishing-docs.html` | Publishing & Documentation | `cargo publish` · crates.io & docs.rs · `cargo doc` · `#![warn(missing_docs)]` · package metadata · `cargo semver-checks` · yanking |
| 088 | `rs-088-std-library-tour.html` | Standard Library Tour | `time::{Instant, Duration}` · `SystemTime` · `chrono` / `jiff` dates · `rand` crate · `process::Command` · `std::env` |

### Group 15: Testing & Tooling (Sheets 089–091)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 089 | `rs-089-unit-tests.html` | Unit Tests | `#[cfg(test)] mod tests` · `#[test]` · `assert_eq!` / `assert_ne!` · `#[should_panic]` · tests returning `Result` · `cargo test name` · `-- --nocapture` |
| 090 | `rs-090-integration-doc-tests.html` | Integration & Doc Tests | `tests/` directory · `tests/common/mod.rs` · doc tests in `///` · `no_run` / `ignore` / `should_panic` · `#[ignore]` · `cargo test --doc` |
| 091 | `rs-091-benchmarks-debugging.html` | Benchmarks & Debugging | `criterion` · `cargo bench` · `dbg!` · lldb / gdb · `cargo expand` · Miri · `cargo-nextest` |

### Group 16: Concurrency & Async (Sheets 092–097)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 092 | `rs-092-threads.html` | Threads | `thread::spawn` · `JoinHandle::join` · `move` closures · `thread::scope` · `thread::sleep` · `available_parallelism` |
| 093 | `rs-093-channels.html` | Channels | `mpsc::channel` · `Sender` / `Receiver` · `send` / `recv` / `try_recv` · cloning senders · `sync_channel` · iterating a receiver |
| 094 | `rs-094-shared-state.html` | Shared State: Arc, Mutex & Atomics | `Arc<T>` · `Mutex<T>` / `lock()` · `RwLock` · poisoning · `AtomicUsize` & `Ordering` · avoiding deadlocks |
| 095 | `rs-095-send-sync.html` | Send & Sync | `Send` · `Sync` · why `Rc` isn't `Send` · auto traits · opting out · compile-time data-race freedom |
| 096 | `rs-096-async-await.html` | async / await & Futures | `async fn` · `.await` · `Future` trait · futures are lazy · async blocks · executors · async closures · async fn in traits |
| 097 | `rs-097-tokio.html` | Tokio | `#[tokio::main]` · `tokio::spawn` · `join!` / `select!` · `tokio::time::sleep` · `tokio::sync::Mutex` / `mpsc` · `spawn_blocking` |

### Group 17: Common Crates (Sheets 098–101)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 098 | `rs-098-reqwest-http.html` | HTTP Clients with reqwest | `reqwest::get` · `Client` · `.json()` / `.text()` · POST `.json(&body)` · headers & timeouts · `reqwest::blocking` |
| 099 | `rs-099-axum-web.html` | Web Servers with Axum | `Router::new().route()` · handlers · extractors `Path` / `Query` / `Json` / `State` · `IntoResponse` · `TcpListener` · tower middleware |
| 100 | `rs-100-logging-tracing.html` | Logging with log & tracing | `log` facade · `env_logger` · `tracing` · `#[instrument]` · spans & events · `tracing-subscriber` · `RUST_LOG` |
| 101 | `rs-101-databases-sqlx.html` | Databases with sqlx | `PgPool` · `query!` / `query_as!` compile-time checks · `sqlx migrate` · `rusqlite` · Diesel / SeaORM |

### Group 18: Advanced Topics (Sheets 102–106)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 102 | `rs-102-declarative-macros.html` | Declarative Macros | `macro_rules!` · `$x:expr` / `$t:ty` / `$i:ident` · repetition `$(…),*` · hygiene · `#[macro_export]` · when to use a macro |
| 103 | `rs-103-procedural-macros.html` | Procedural Macros | derive macros · attribute macros · function-like macros · `proc-macro` crate · `syn` / `quote` · reading `cargo expand` output |
| 104 | `rs-104-unsafe-rust.html` | Unsafe Rust | `unsafe` blocks & fns · the five unsafe superpowers · `*const T` / `*mut T` · `unsafe impl` · `unsafe extern` (2024) · `// SAFETY:` comments |
| 105 | `rs-105-ffi-c.html` | FFI & Calling C | `extern "C"` · `#[unsafe(no_mangle)]` (2024) · `CString` / `CStr` · `bindgen` / `cbindgen` · `build.rs` · `cc` crate |
| 106 | `rs-106-idiomatic-patterns.html` | Idiomatic Patterns | newtype · builder · typestate · RAII guards · `impl From` conversions · iterator-returning APIs |

### Group 19: Quick Reference (Sheet 107)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 107 | `rs-107-quick-reference-syntax.html` | Quick Reference — Syntax, Std & Compiler Errors | syntax · ownership · `Option` / `Result` combinators · iterator methods · collections · cargo commands |

Sheet 108 is the borrow-checker survival page: each error code with its message, the usual cause and the usual fix.
