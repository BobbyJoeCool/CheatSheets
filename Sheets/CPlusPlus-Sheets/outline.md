# C++ Reference Guide Outline (123 sheets)

## Metadata

- **Group it belongs to:** C Family
- **Folder Directory:** `Sheets/Cpp-Sheets/cpp-###-[slug].html`
- **Groups:** 18
- **Sheets:** 123
- **Drafted Date:** 2026-10-10
- **Verified-Finalized Date:**

## Basic Information

Modern C++ as a compiled, multi-paradigm systems language, for intermediate readers who have programmed before and may be new to C++ or coming back to it after the C++98 era. C++23 is the baseline (`std::print`, `std::expected`, `import std;`, deducing `this`, `std::ranges::to`, `std::flat_map`, `std::generator`, `std::mdspan`), C++20 features are treated as standard, and C++26 additions (reflection, contracts, `std::execution`, pack indexing, `#embed`, `std::inplace_vector`) are flagged where they matter. Pre-C++11 idioms appear only as "what you'll see in old code" notes.

The deep areas are pointers and memory, special member functions (copy / move / RAII), the STL (containers, iterators, algorithms, ranges), templates and concepts, and concurrency. At 123 sheets the set is above the guide's 70–100 systems range: C++ has the depth of C plus a Java-sized OOP model plus a template system plus the STL. Library support for C++23 / C++26 features still varies between libstdc++, libc++ and MSVC, so sheets 7, 39, 59, 81, 83, 96, 99, 100, 113 and 123 should be checked against cppreference when built.

## Differences in Layout from Basic Structure

- Numbers are three digits throughout (`cpp-001` to `cpp-123`) because the set passes 99.
- Output & Comments becomes Input, Output & Comments (Group 2), covering both iostream and `std::print` / `std::format`.
- Data Structures is the STL containers group (Group 9).
- Modules & Packages becomes Headers, Modules & Standard Library (Group 12).
- Language-specific groups follow the 14 standard groups: Pointers & References (15), Memory Management (16), Templates & Generic Programming (17), and STL Iterators, Algorithms & Ranges (18). Pointers and Memory come after OOP even though copy / move semantics lean on them.

## Groups

### Group 1: Introduction & Setup (Sheets 001–005)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 001 | `cpp-001-introduction.html` | Introduction & Standards | Bjarne Stroustrup · C with Classes · C++98 → C++26 · ISO WG21 · zero-overhead principle · C++ Core Guidelines |
| 002 | `cpp-002-compilers-flags.html` | Compilers & Common Flags | g++ · clang++ · MSVC cl · -std=c++23 · -Wall -Wextra -Werror · -O0 / -O2 / -O3 · -g · Compiler Explorer |
| 003 | `cpp-003-program-structure.html` | Program Structure | int main() · argc / argv · return 0 · #include · std:: · statements & blocks · semicolons & braces |
| 004 | `cpp-004-compilation-model.html` | Compilation Model & Linking | preprocess → compile → link · translation units · object files · ODR · static .a/.lib vs shared .so/.dll · "undefined reference" |
| 005 | `cpp-005-cmake-basics.html` | CMake Basics | CMakeLists.txt · project() · add_executable · add_library · target_link_libraries · target_compile_features · cmake -B build · cmake --build |

### Group 2: Input, Output & Comments (Sheets 006–009)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 006 | `cpp-006-iostream-output.html` | Output with iostream | std::cout · << chaining · '\n' vs std::endl · std::cerr · &lt;iomanip&gt; · std::setw · std::setprecision · std::fixed |
| 007 | `cpp-007-print-format.html` | std::print & std::format | std::print · std::println · std::format · {} placeholders · format spec {:>10.2f} · std::format_to · formatter&lt;T&gt; |
| 008 | `cpp-008-console-input.html` | Console Input | std::cin · >> extraction · std::getline · cin.fail() · cin.clear() · cin.ignore() · input validation loop |
| 009 | `cpp-009-comments.html` | Comments | // · /* */ · Doxygen /** */ · @param · @return · @brief · #if 0 blocks |

### Group 3: Variables & Data Types (Sheets 010–017)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 010 | `cpp-010-variables-initialization.html` | Variables & Initialization | declaration · copy init = · direct init () · brace init {} · narrowing errors · default init · uninitialized reads |
| 011 | `cpp-011-integer-types.html` | Integer Types | short / int / long / long long · signed vs unsigned · &lt;cstdint&gt; int32_t · std::size_t · 0x / 0b / ' separators · u / ll suffixes · overflow UB |
| 012 | `cpp-012-floating-point.html` | Floating-Point Types | float · double · long double · 1e-3 / f suffix · std::numeric_limits · NaN & inf · epsilon comparisons · &lt;stdfloat&gt; |
| 013 | `cpp-013-bool-char-types.html` | bool & Character Types | bool · true / false · char signedness · char8_t / char16_t / char32_t · wchar_t · escape sequences · std::byte |
| 014 | `cpp-014-auto-type-deduction.html` | auto, decltype & Type Aliases | auto · const auto& · auto&& · decltype · decltype(auto) · using aliases · typedef · sizeof / alignof |
| 015 | `cpp-015-constants.html` | Constants: const, constexpr, constinit | const · constexpr variables · constinit · top-level vs low-level const · static_assert · magic numbers |
| 016 | `cpp-016-casts-conversions.html` | Conversions & Casts | implicit conversions · integral promotion · static_cast · const_cast · reinterpret_cast · C-style casts · std::bit_cast |
| 017 | `cpp-017-enumerations.html` | Enumerations | enum · enum class · underlying type : uint8_t · using enum · std::to_underlying · enum flags pattern |

### Group 4: Strings (Sheets 018–023)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 018 | `cpp-018-c-strings.html` | C-Style Strings | char[] · '\0' terminator · const char* literals · strlen · strcpy / strncpy · strcmp · buffer overflows |
| 019 | `cpp-019-string-basics.html` | std::string Basics | construction · size() / length() · operator[] · at() · += · comparison · empty() · c_str() · SSO |
| 020 | `cpp-020-string-search.html` | std::string — Search | find · rfind · find_first_of · find_last_not_of · npos · contains · starts_with · ends_with |
| 021 | `cpp-021-string-modify.html` | std::string — Modify & Substring | substr · insert · erase · replace · append · resize · std::transform + toupper · trimming |
| 022 | `cpp-022-string-view.html` | std::string_view | std::string_view · "abc"sv · remove_prefix / remove_suffix · substr · non-owning · dangling-view pitfalls |
| 023 | `cpp-023-string-conversions.html` | String Conversions | std::to_string · std::stoi / stod · std::from_chars · std::to_chars · std::stringstream · std::format |

### Group 5: Operators (Sheets 024–028)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 024 | `cpp-024-arithmetic-operators.html` | Arithmetic Operators | + - * / % · integer division & truncation · ++ / -- prefix vs postfix · mixed-type arithmetic · overflow |
| 025 | `cpp-025-comparison-spaceship.html` | Comparison & Three-Way (<=>) | == != < > <= >= · <=> · std::strong_ordering · std::partial_ordering · = default comparisons · std::cmp_less |
| 026 | `cpp-026-logical-operators.html` | Logical Operators | && · \|\| · ! · short-circuit evaluation · and / or / not tokens · pointer & stream truthiness |
| 027 | `cpp-027-bitwise-operators.html` | Bitwise Operators | & \| ^ ~ · << >> · signed shift pitfalls · std::bitset · &lt;bit&gt; std::popcount · std::bit_width · std::rotl |
| 028 | `cpp-028-assignment-misc-operators.html` | Assignment & Other Operators | = · += -= *= /= · comma operator · :: · . and -> · sizeof · precedence table |

### Group 6: Control Flow (Sheets 029–034)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 029 | `cpp-029-if-else.html` | if / else & Conditional Operator | if · else if · else · ?: · if with initializer · [[likely]] / [[unlikely]] · if consteval |
| 030 | `cpp-030-switch.html` | switch | switch · case · default · fallthrough · [[fallthrough]] · switch with initializer · -Wswitch with enums |
| 031 | `cpp-031-for-loops.html` | for Loops | classic for · multiple loop variables · unsigned countdown pitfall · std::views::iota · nested loops |
| 032 | `cpp-032-range-for.html` | Range-Based for | for (auto x : c) · auto& · const auto& · auto&& · structured bindings · views::enumerate · views::reverse |
| 033 | `cpp-033-while-do-while.html` | while & do-while | while · do-while · while (std::cin >> x) · sentinel loops · infinite loops |
| 034 | `cpp-034-loop-controls.html` | Loop Controls & goto | break · continue · goto · labels · breaking nested loops · early return |

### Group 7: Error Handling (Sheets 035–039)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 035 | `cpp-035-exceptions-basics.html` | Exception Basics | try · catch · throw · catch by const& · catch (...) · rethrow with throw; · stack unwinding |
| 036 | `cpp-036-standard-exceptions.html` | Standard Exception Hierarchy | std::exception · what() · std::logic_error · std::runtime_error · std::out_of_range · std::bad_alloc · &lt;stdexcept&gt; |
| 037 | `cpp-037-custom-exceptions-noexcept.html` | Custom Exceptions & noexcept | deriving from std::runtime_error · noexcept · noexcept(expr) · std::terminate · basic / strong / nothrow guarantees |
| 038 | `cpp-038-optional-expected.html` | std::optional & std::expected | std::optional · std::nullopt · value_or · std::expected · std::unexpected · and_then / transform / or_else |
| 039 | `cpp-039-assertions-error-codes.html` | Assertions & Error Codes | assert · NDEBUG · static_assert · std::error_code · errno · contracts: pre / post / contract_assert (C++26) |

### Group 8: Functions (Sheets 040–048)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 040 | `cpp-040-functions-basics.html` | Defining & Calling Functions | declaration vs definition · prototypes · return · void · trailing return type · auto return · recursion |
| 041 | `cpp-041-parameter-passing.html` | Parameter Passing | by value · by reference & · by const& · by pointer · out-parameters · choosing the right form |
| 042 | `cpp-042-overloading-defaults.html` | Overloading & Default Arguments | function overloading · overload resolution · ambiguous calls · default arguments · name mangling |
| 043 | `cpp-043-linkage-inline.html` | Linkage, inline & static | inline · static functions · extern · extern "C" · anonymous namespace · internal vs external linkage |
| 044 | `cpp-044-constexpr-consteval-functions.html` | constexpr & consteval Functions | constexpr functions · consteval · if constexpr · std::is_constant_evaluated · constexpr std::vector / std::string |
| 045 | `cpp-045-lambdas-basics.html` | Lambdas — Basics | [](){} · capture by value / reference · [=] [&] · [this] · mutable · explicit return type |
| 046 | `cpp-046-lambdas-advanced.html` | Lambdas — Advanced | generic lambdas (auto) · init capture [x = std::move(y)] · template lambdas []&lt;typename T&gt; · IIFE · recursive lambdas (this auto&) |
| 047 | `cpp-047-callables-std-function.html` | Callables & std::function | function pointers · std::function · std::move_only_function · std::invoke · std::bind_front · member function pointers |
| 048 | `cpp-048-attributes-specifiers.html` | Attributes & Specifiers | [[nodiscard]] · [[maybe_unused]] · [[deprecated]] · [[noreturn]] · [[assume]] · = delete on functions |

### Group 9: Data Structures: STL Containers (Sheets 049–059)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 049 | `cpp-049-arrays.html` | C-Style Arrays & std::array | int a[5] · array-to-pointer decay · std::array&lt;T, N&gt; · at() · std::size · std::to_array · multidimensional |
| 050 | `cpp-050-vector-basics.html` | std::vector — Basics | construction · push_back · emplace_back · [] vs at() · size() vs capacity() · reserve · iteration |
| 051 | `cpp-051-vector-operations.html` | std::vector — Operations | insert · erase · std::erase_if · resize · clear · shrink_to_fit · iterator invalidation |
| 052 | `cpp-052-pair-tuple.html` | std::pair & std::tuple | std::pair · std::make_pair · std::tuple · std::get · std::tie · structured bindings · std::apply |
| 053 | `cpp-053-map.html` | std::map & std::multimap | operator[] · insert · try_emplace · insert_or_assign · find · contains · erase · ordered iteration |
| 054 | `cpp-054-unordered-map.html` | std::unordered_map | hashing · buckets & load factor · reserve · std::hash · custom hash · ordered vs unordered |
| 055 | `cpp-055-sets.html` | Sets | std::set · std::unordered_set · std::multiset · insert · contains · erase · custom comparator |
| 056 | `cpp-056-deque-list.html` | std::deque & std::list | std::deque · std::list · std::forward_list · splice · push_front · cache-locality tradeoffs |
| 057 | `cpp-057-container-adaptors.html` | Stacks, Queues & Priority Queues | std::stack · std::queue · std::priority_queue · push / pop / top · std::greater · min-heap |
| 058 | `cpp-058-span-mdspan.html` | std::span & std::mdspan | std::span · static vs dynamic extent · subspan · first / last · std::mdspan · passing arrays safely |
| 059 | `cpp-059-choosing-container.html` | Choosing a Container | Big-O table · contiguous vs node-based · std::flat_map / flat_set · std::inplace_vector (C++26) · invalidation rules · decision chart |

### Group 10: OOP (Sheets 060–074)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 060 | `cpp-060-classes-objects.html` | Classes & Objects | class vs struct · data members · member functions · this · out-of-class definitions with :: · header/source split |
| 061 | `cpp-061-constructors.html` | Constructors | default ctor · parameterized ctor · member initializer list · delegating ctors · explicit · = default |
| 062 | `cpp-062-destructors.html` | Destructors | ~Class() · destruction order · virtual destructors · scope exit · = default · never throw from a destructor |
| 063 | `cpp-063-access-control.html` | Access Control & friend | public · private · protected · friend functions · friend classes · encapsulation · getters / setters |
| 064 | `cpp-064-member-functions-const.html` | const & Qualified Member Functions | const member functions · mutable · ref-qualifiers & / && · explicit object parameter (deducing this) · const overloads |
| 065 | `cpp-065-static-members.html` | Static Members | static data members · static member functions · inline static · static constexpr · per-class counters · singleton |
| 066 | `cpp-066-aggregates-designated-init.html` | Aggregates & Designated Initializers | aggregate types · brace initialization · .x = 1 designated init · default member initializers · trivial / standard-layout |
| 067 | `cpp-067-copy-semantics.html` | Copy Semantics | copy constructor · copy assignment · shallow vs deep copy · rule of three · = delete · copy elision |
| 068 | `cpp-068-move-semantics.html` | Move Semantics | rvalue references && · std::move · move constructor · move assignment · noexcept moves · rule of five / zero |
| 069 | `cpp-069-inheritance.html` | Inheritance | : public Base · protected / private inheritance · base ctor calls · using Base::Base · final classes · object slicing |
| 070 | `cpp-070-polymorphism-virtual.html` | Virtual Functions & Polymorphism | virtual · override · final · vtable · base pointers & references · dynamic_cast · typeid |
| 071 | `cpp-071-abstract-interfaces.html` | Abstract Classes & Interfaces | pure virtual = 0 · abstract base classes · interface pattern · virtual destructor · NVI idiom |
| 072 | `cpp-072-multiple-inheritance.html` | Multiple & Virtual Inheritance | multiple bases · diamond problem · virtual base classes · name ambiguity · mixins |
| 073 | `cpp-073-operator-overloading-basics.html` | Operator Overloading — Basics | arithmetic operators · member vs non-member · operator<< / >> · operator== / <=> · operator[] · hidden friends |
| 074 | `cpp-074-operator-overloading-advanced.html` | Operator Overloading — Advanced | operator() · conversion operators · explicit operator bool · ++ prefix / postfix · copy-and-swap · user-defined literals |

### Group 11: Files & I/O (Sheets 075–079)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 075 | `cpp-075-reading-files.html` | Reading Files | std::ifstream · is_open() · std::getline loop · >> extraction · good / fail / eof · the while (!eof()) pitfall |
| 076 | `cpp-076-writing-files.html` | Writing & Appending Files | std::ofstream · std::ios::app · std::fstream · open modes · flush · std::print to a file |
| 077 | `cpp-077-binary-files.html` | Binary Files | std::ios::binary · read() · write() · seekg / tellg · reinterpret_cast&lt;char*&gt; · endianness · std::byteswap |
| 078 | `cpp-078-filesystem.html` | std::filesystem | fs::path · operator/ · exists · create_directories · directory_iterator · file_size · copy / remove |
| 079 | `cpp-079-parsing-text-csv.html` | Parsing Text & CSV | std::getline with delimiter · std::stringstream · std::views::split · std::from_chars · quoted fields · std::quoted |

### Group 12: Headers, Modules & Standard Library (Sheets 080–086)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 080 | `cpp-080-headers-include-guards.html` | Headers & Include Guards | #include <> vs "" · #pragma once · include guards · forward declarations · what goes in a header |
| 081 | `cpp-081-preprocessor.html` | The Preprocessor | #define · function-like macros · #if / #ifdef · __FILE__ / __LINE__ · #error · std::source_location · #embed (C++26) |
| 082 | `cpp-082-namespaces.html` | Namespaces | namespace · :: · using declarations · using namespace pitfalls · nested a::b · inline namespaces · namespace aliases |
| 083 | `cpp-083-modules.html` | C++20 Modules | export module · import · import std; · module partitions · .cppm / .ixx · build system support |
| 084 | `cpp-084-package-managers.html` | Package Managers | vcpkg · vcpkg.json · Conan · find_package · FetchContent · manifest mode |
| 085 | `cpp-085-math-random.html` | Math & Random | &lt;cmath&gt; · std::numbers::pi · std::abs / pow / sqrt · &lt;random&gt; · std::mt19937 · uniform_int_distribution · std::random_device |
| 086 | `cpp-086-chrono.html` | Dates, Times & std::chrono | durations · time_point · steady_clock vs system_clock · chrono literals 5s / 10ms · year_month_day · time zones |

### Group 13: External Libraries (Sheets 087–090)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 087 | `cpp-087-googletest.html` | GoogleTest | TEST · TEST_F · EXPECT_EQ · ASSERT_TRUE · fixtures · gMock · gtest_discover_tests |
| 088 | `cpp-088-catch2.html` | Catch2 | TEST_CASE · SECTION · REQUIRE · CHECK · generators · BENCHMARK |
| 089 | `cpp-089-fmt-spdlog.html` | {fmt} & spdlog | fmt::format · fmt::print · spdlog::info · log levels · sinks · patterns |
| 090 | `cpp-090-nlohmann-json.html` | nlohmann/json | json::parse · j["key"] · get&lt;T&gt;() · dump() · to_json / from_json · NLOHMANN_DEFINE_TYPE_INTRUSIVE |

### Group 14: Advanced Topics (Sheets 091–100)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 091 | `cpp-091-threads.html` | Threads | std::thread · join / detach · std::jthread · std::stop_token · passing arguments · hardware_concurrency |
| 092 | `cpp-092-mutexes-locks.html` | Mutexes & Locks | std::mutex · std::lock_guard · std::unique_lock · std::scoped_lock · std::shared_mutex · deadlock avoidance |
| 093 | `cpp-093-condition-variables-sync.html` | Condition Variables & Sync Primitives | std::condition_variable · wait with predicate · notify_one / all · std::latch · std::barrier · std::counting_semaphore |
| 094 | `cpp-094-atomics.html` | Atomics & the Memory Model | std::atomic · load / store · fetch_add · compare_exchange · memory_order · data races = UB |
| 095 | `cpp-095-futures-async.html` | Futures & std::async | std::async · std::future · std::promise · std::packaged_task · launch policies · std::shared_future |
| 096 | `cpp-096-coroutines.html` | Coroutines | co_await · co_yield · co_return · promise_type · std::coroutine_handle · std::generator |
| 097 | `cpp-097-variant-any.html` | std::variant & std::any | std::variant · std::visit · overloaded lambdas pattern · std::holds_alternative · std::get_if · std::any / any_cast |
| 098 | `cpp-098-regex.html` | Regular Expressions | std::regex · regex_match · regex_search · regex_replace · std::smatch · sregex_iterator · performance caveats |
| 099 | `cpp-099-ub-sanitizers-debugging.html` | UB, Sanitizers & Debugging | common UB · signed overflow · dangling · ASan / UBSan / TSan · gdb / lldb · valgrind · std::stacktrace |
| 100 | `cpp-100-cpp26-preview.html` | C++26 Preview | static reflection ^^ · contracts · std::execution · pack indexing · #embed · std::inplace_vector |

### Group 15: Pointers & References (Sheets 101–104)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 101 | `cpp-101-pointer-basics.html` | Pointer Basics | * and & · dereferencing · nullptr · pointer to pointer · const T* vs T* const · void* |
| 102 | `cpp-102-pointer-arithmetic.html` | Pointer Arithmetic & Arrays | p + 1 · array decay · std::ptrdiff_t · iterating with pointers · one-past-the-end · out-of-bounds UB |
| 103 | `cpp-103-references.html` | References | lvalue references · const references · reference vs pointer · dangling references · reference members · std::reference_wrapper |
| 104 | `cpp-104-value-categories.html` | Value Categories & Forwarding | lvalue · prvalue · xvalue · forwarding references T&& · std::forward · reference collapsing |

### Group 16: Memory Management (Sheets 105–109)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 105 | `cpp-105-storage-duration.html` | Stack, Heap & Storage Duration | automatic · static · thread_local · dynamic · object lifetime · stack overflow · alignas |
| 106 | `cpp-106-new-delete.html` | new & delete | new · delete · new[] / delete[] · placement new · memory leaks · double free · std::nothrow |
| 107 | `cpp-107-unique-ptr.html` | std::unique_ptr | std::make_unique · exclusive ownership · std::move · reset / release · custom deleters · unique_ptr&lt;T[]&gt; |
| 108 | `cpp-108-shared-weak-ptr.html` | std::shared_ptr & std::weak_ptr | std::make_shared · use_count · control block · std::weak_ptr · lock() · reference cycles · enable_shared_from_this |
| 109 | `cpp-109-ownership-raii.html` | RAII & Ownership Guidelines | RAII · rule of zero · owning vs non-owning · raw pointers as observers · smart pointer parameters · Core Guidelines R.* |

### Group 17: Templates & Generic Programming (Sheets 110–116)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 110 | `cpp-110-function-templates.html` | Function Templates | template&lt;typename T&gt; · argument deduction · explicit template args · instantiation · abbreviated templates (auto params) |
| 111 | `cpp-111-class-templates.html` | Class Templates | template class · out-of-class member definitions · CTAD · deduction guides · default template arguments |
| 112 | `cpp-112-nttp-specialization.html` | Non-Type Parameters & Specialization | template&lt;int N&gt; · auto NTTPs · class-type NTTPs · full specialization · partial specialization |
| 113 | `cpp-113-variadic-fold.html` | Variadic Templates & Fold Expressions | typename... Args · sizeof... · fold expressions (... + args) · perfect forwarding · pack indexing (C++26) |
| 114 | `cpp-114-concepts-requires.html` | Concepts & requires | concept · requires clause · requires expression · std::integral · constrained auto · subsumption |
| 115 | `cpp-115-type-traits-sfinae.html` | Type Traits & SFINAE | &lt;type_traits&gt; · std::is_integral_v · std::is_same_v · std::conditional_t · std::decay_t · std::enable_if · std::declval |
| 116 | `cpp-116-template-idioms.html` | Template Idioms | CRTP · policy-based design · tag dispatch · type erasure · template template parameters |

### Group 18: STL Iterators, Algorithms & Ranges (Sheets 117–123)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 117 | `cpp-117-iterators.html` | Iterators | begin / end · cbegin · rbegin · iterator categories · std::next / std::prev · std::distance · back_inserter |
| 118 | `cpp-118-algorithms-nonmodifying.html` | Algorithms — Non-Modifying | find · find_if · count_if · all_of / any_of / none_of · search · equal · mismatch |
| 119 | `cpp-119-algorithms-modifying.html` | Algorithms — Modifying | copy · transform · fill · replace_if · remove / erase idiom · unique · reverse |
| 120 | `cpp-120-sort-search.html` | Sorting & Searching | sort · stable_sort · partial_sort · nth_element · binary_search · lower_bound / upper_bound · custom comparators |
| 121 | `cpp-121-numeric-algorithms.html` | Numeric Algorithms | &lt;numeric&gt; · accumulate · reduce · transform_reduce · iota · partial_sum · std::gcd / lcm · execution policies |
| 122 | `cpp-122-ranges-basics.html` | Ranges — Basics | std::ranges::sort · std::ranges::find · projections · range concepts · views vs containers · dangling iterators |
| 123 | `cpp-123-views-adaptors.html` | Range Views & Adaptors | views::filter · views::transform · views::take / drop · \| pipes · std::ranges::to · views::zip · views::chunk |