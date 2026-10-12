# C Reference Guide Outline (98 sheets)

## Metadata

- **Group it belongs to:** C Family
- **Folder Directory:** `Sheets/C-Sheets/c-##-[slug].html`
- **Groups:** 18
- **Sheets:** 98
- **Drafted Date:** 2026-10-10
- **Verified-Finalized Date:**

## Basic Information

C as a systems language, for intermediate readers who know at least one other language and want to write and read real C. Targets C17 as the baseline, with a `(C23)` tag on anything newer. Examples assume `gcc` / `clang` on macOS or Linux, and POSIX-only APIs are tagged `(POSIX)`. It ends with a 2-page quick reference.

The total is held at 98 so filenames stay two digits. Adding more than one sheet later pushes the set past 99 and means re-padding every number to three digits.

## Differences in Layout from Basic Structure

- Pointers and Memory Management come right after Functions (Groups 9–10) instead of at the end with the other language-specific groups, because arrays, strings-as-data, structs and every data structure depend on them.
- OOP is replaced by Structs, Unions & Enums (Group 12). Its last sheet covers the C patterns that stand in for classes (opaque types, function-pointer vtables).
- Modules & Packages becomes Preprocessor, Headers & Builds (Group 14), since C has no module system or package manager.
- Error Handling is 3 sheets: C has no exceptions, only return codes, `errno` and cleanup patterns.
- Sheets 97–98 are table-only quick-reference pages (syntax, what it does, sheet #) with no code row.

## Groups

### Group 1: Introduction & Setup (Sheets 01–05)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `c-01-introduction-history.html` | Introduction & History | K&R C · C89/C90 · C99 · C11 · C17 · C23 · `__STDC_VERSION__` · "trust the programmer" philosophy |
| 02 | `c-02-compilers-toolchain.html` | Compilers & Toolchain | `gcc` · `clang` · MSVC · `xcode-select --install` · `cc --version` · `-std=c17` / `-std=c23` · editor + LSP (`clangd`) |
| 03 | `c-03-compiling-running.html` | Compiling & Running | `gcc main.c -o app` · `./app` · preprocess → compile → assemble → link · `-E` / `-S` / `-c` · `.o` object files · `-I` / `-L` / `-l` |
| 04 | `c-04-compiler-flags-warnings.html` | Compiler Flags & Warnings | `-Wall -Wextra -Wpedantic` · `-Werror` · `-Wconversion` / `-Wshadow` · `-O0`…`-O3` / `-Os` · `-g` · `-D NAME=val` · `-fsanitize=address,undefined` |
| 05 | `c-05-program-structure.html` | Program Structure | `int main(void)` · `int main(int argc, char *argv[])` · `return 0` / `EXIT_SUCCESS` · `#include` · statements & semicolons · blocks `{ }` · declare before use |

### Group 2: Output & Comments (Sheets 06–08)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 06 | `c-06-printf-basics.html` | printf & Basic Output | `printf` · `%d` `%u` `%ld` `%lld` `%zu` · `%f` `%e` `%g` · `%c` `%s` `%p` · `%%` · `puts` · `putchar` · `fprintf(stderr, …)` |
| 07 | `c-07-printf-format-specifiers.html` | printf Format Specifiers | width `%5d` · precision `%.2f` / `%.3s` · flags `-` `+` `0` `#` space · `%*d` · `%x` `%X` `%o` · `PRId64` / `PRIu32` · mismatched specifier = UB |
| 08 | `c-08-comments.html` | Comments | `/* block */` · `// line` (C99) · no nesting · `#if 0 … #endif` · Doxygen `/** @param @return */` · file header comments |

### Group 3: Variables & Data Types (Sheets 09–16)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 09 | `c-09-variables-declarations.html` | Variables & Declarations | declaration vs definition · initialization · uninitialized = indeterminate · `int *a, b` gotcha · identifier rules · reserved `_X` / `__x` names · `auto` (C23) |
| 10 | `c-10-integer-types.html` | Integer Types | `char` `short` `int` `long` `long long` · `signed` / `unsigned` · `<limits.h>` `INT_MAX` · sizes are platform-dependent · `42u` `42L` `0x2A` `052` · `0b101` (C23) · `1'000'000` (C23) |
| 11 | `c-11-fixed-width-integers.html` | Fixed-Width Integers | `<stdint.h>` · `int8_t`…`int64_t` · `uint32_t` · `int_fast16_t` / `int_least16_t` · `intptr_t` · `size_t` / `ptrdiff_t` · `SIZE_MAX` · `<inttypes.h>` |
| 12 | `c-12-floating-point.html` | Floating-Point Types | `float` `double` `long double` · `1.0f` / `1e-3` · `<float.h>` `DBL_EPSILON` · `NAN` / `INFINITY` · `isnan` / `isinf` · never compare with `==` · rounding error |
| 13 | `c-13-char-type.html` | The char Type | `char` signedness is implementation-defined · `'a'` is an `int` · ASCII values · escapes `\n` `\t` `\0` `\x41` · `char` as small integer · `unsigned char` for bytes |
| 14 | `c-14-booleans-truthiness.html` | Booleans & Truthiness | `_Bool` · `<stdbool.h>` · `bool` / `true` / `false` keywords (C23) · zero is false, nonzero is true · comparisons return `int` · `!!x` |
| 15 | `c-15-type-conversion.html` | Type Conversion & Casting | implicit conversion · integer promotion · usual arithmetic conversions · `(int)x` · signed vs unsigned comparison trap · truncation · `-Wconversion` |
| 16 | `c-16-qualifiers-sizeof.html` | const, volatile & sizeof | `const` · `volatile` · `sizeof` (operator, not function) · `alignof` / `_Alignof` · `typeof` (C23) · `constexpr` (C23) · `const` vs `#define` |

### Group 4: Strings (Sheets 17–21)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 17 | `c-17-strings-basics.html` | String Basics | `char` arrays · `'\0'` terminator · `char s[] = "hi"` vs `char *s = "hi"` · literals are read-only · `strlen` vs `sizeof` · arrays of strings |
| 18 | `c-18-string-copy-concat.html` | Copying & Concatenating | `strcpy` / `strncpy` · `strcat` / `strncat` · buffer overflows · `snprintf` as safe copy · `strdup` / `strndup` (C23) · `strlcpy` (BSD) |
| 19 | `c-19-string-compare-search.html` | Comparing & Searching | `strcmp` / `strncmp` · `strchr` / `strrchr` · `strstr` · `strspn` / `strcspn` · `strpbrk` · `strtok` / `strtok_r` · `strcasecmp` (POSIX) |
| 20 | `c-20-string-conversion.html` | String ↔ Number Conversion | `atoi` (and why to avoid it) · `strtol` / `strtoul` / `strtoll` · `strtod` · `endptr` + `errno` checks · `snprintf` · `sscanf` |
| 21 | `c-21-characters-unicode.html` | Character Classes & Unicode | `<ctype.h>` `isalpha` `isdigit` `isspace` · `toupper` / `tolower` · cast to `unsigned char` · `wchar_t` / `L""` · `u8""` `u""` `U""` · `setlocale` · UTF-8 as bytes |

### Group 5: Operators (Sheets 22–26)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 22 | `c-22-arithmetic-operators.html` | Arithmetic Operators | `+ - * / %` · integer division truncates toward zero · `%` with negatives · `++x` vs `x++` · signed overflow is UB · unsigned wraparound · `ckd_add` / `<stdckdint.h>` (C23) |
| 23 | `c-23-comparison-logical.html` | Comparison & Logical Operators | `==` `!=` `<` `>` `<=` `>=` · `&&` `\|\|` `!` · short-circuit evaluation · results are `0` / `1` · `=` vs `==` bug · pointer comparisons |
| 24 | `c-24-bitwise-operators.html` | Bitwise Operators | `&` `\|` `^` `~` · `<<` `>>` · set / clear / toggle / test a bit · masks · use `unsigned` for bits · shifting negatives / past width is UB · `<stdbit.h>` (C23) |
| 25 | `c-25-assignment-misc-operators.html` | Assignment, Comma & Other Operators | `=` · `+=` `-=` `<<=` `&=` … · assignment is an expression · comma operator · cast `(T)` · `.` / `->` · `&` / `*` (see Group 9) |
| 26 | `c-26-precedence-evaluation-order.html` | Precedence & Evaluation Order | precedence table · associativity · unsequenced `i = i++` (UB) · argument evaluation order unspecified · `*p++` vs `(*p)++` · when to parenthesize |

### Group 6: Control Flow (Sheets 27–32)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 27 | `c-27-if-else.html` | if / else if / else | `if` · `else if` · `else` · always use braces · dangling `else` · `if (ptr)` truthiness · `if ((x = f()) != 0)` idiom |
| 28 | `c-28-ternary-operator.html` | Ternary Operator | `cond ? a : b` · result type rules · nesting (and when not to) · ternary in initializers · ternary inside macros · vs `if` |
| 29 | `c-29-switch.html` | switch | `switch` / `case` / `default` · `break` · fallthrough · `[[fallthrough]]` (C23) · integer constant labels only · `switch` on `enum` · `-Wswitch` · declarations inside cases |
| 30 | `c-30-for-loops.html` | for Loops | `for (init; cond; step)` · loop variable in init (C99) · multiple variables with `,` · `for (;;)` · iterating arrays with `size_t` · off-by-one |
| 31 | `c-31-while-do-while.html` | while & do-while | `while` · `do { } while (cond);` · sentinel loops · `while ((c = getchar()) != EOF)` · `do { } while (0)` in macros · infinite loops |
| 32 | `c-32-jump-statements.html` | break, continue & goto | `break` · `continue` · `goto label` · breaking out of nested loops · `return` early · when `goto` is acceptable |

### Group 7: Error Handling (Sheets 33–35)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 33 | `c-33-return-codes-errno.html` | Return Codes & errno | return-code conventions (`0` / `-1` / `NULL`) · `<errno.h>` · `errno` · `EINVAL` / `ENOMEM` / `ENOENT` · `perror` · `strerror` · check every call |
| 34 | `c-34-assert-static-assert.html` | assert, static_assert & exit | `assert` · `NDEBUG` · `static_assert` / `_Static_assert` · `abort` · `exit` / `EXIT_FAILURE` · `atexit` · `quick_exit` |
| 35 | `c-35-error-handling-patterns.html` | Error Handling Patterns | `goto cleanup` · reverse-order cleanup · out-parameters for results · status `enum` returns · `setjmp` / `longjmp` · `[[nodiscard]]` (C23) |

### Group 8: Functions (Sheets 36–43)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 36 | `c-36-functions-basics.html` | Defining & Calling Functions | prototype vs definition · `void` return · `f(void)` vs `f()` (C23 change) · prototypes in headers · `return` · implicit declaration error |
| 37 | `c-37-parameters.html` | Parameters & Pass-by-Value | everything is pass-by-value · pointer params to modify caller · arrays decay to pointers · `const` params · `int a[static 10]` · multiple results via pointers |
| 38 | `c-38-variadic-functions.html` | Variadic Functions | `...` · `<stdarg.h>` · `va_list` · `va_start` / `va_arg` / `va_end` · `va_copy` · default argument promotions · `va_start(ap)` one-arg form (C23) |
| 39 | `c-39-scope-linkage.html` | Scope & Linkage | block scope · file scope · `static` (internal linkage) · `extern` · shadowing · one definition per program · globals in headers pitfall |
| 40 | `c-40-storage-duration.html` | Storage Duration & Lifetime | automatic · `static` locals · allocated (heap) · `thread_local` · lifetime vs scope · returning a pointer to a local · `register` |
| 41 | `c-41-function-pointers.html` | Function Pointers | `int (*fp)(int)` · `typedef` for readability · callbacks · arrays of function pointers · dispatch tables · `qsort` comparator |
| 42 | `c-42-recursion.html` | Recursion | base case · stack frames · stack overflow · tail calls not guaranteed · factorial / Fibonacci · recursion → iteration |
| 43 | `c-43-inline-attributes.html` | inline & Attributes | `inline` semantics in C · `static inline` in headers · `_Noreturn` / `[[noreturn]]` · `[[nodiscard]]` · `[[maybe_unused]]` · `[[deprecated]]` · `__attribute__((…))` |

### Group 9: Pointers (Sheets 44–49)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 44 | `c-44-pointer-basics.html` | Pointer Basics | `int *p` · `&x` address-of · `*p` dereference · `NULL` · `nullptr` (C23) · `%p` · uninitialized pointers · `int *a, b` again |
| 45 | `c-45-pointer-arithmetic.html` | Pointer Arithmetic | `p + 1` scales by type · `p[i] == *(p + i)` · `ptrdiff_t` · comparing within one array · one-past-the-end · no arithmetic on `void *` |
| 46 | `c-46-pointers-and-arrays.html` | Pointers & Arrays | array-to-pointer decay · `sizeof` in caller vs callee · `arr` vs `&arr` · `int (*p)[10]` vs `int *p[10]` · string literals as `char *` |
| 47 | `c-47-pointers-to-pointers.html` | Pointers to Pointers | `int **pp` · changing the caller's pointer · `argv` · `char **` string lists · jagged 2D arrays · pointer-to-pointer list deletion |
| 48 | `c-48-const-void-pointers.html` | const & void Pointers | `const int *p` vs `int *const p` · read declarations right-to-left · `void *` generic pointers · implicit `void *` conversion · `restrict` · cdecl |
| 49 | `c-49-pointer-pitfalls.html` | Pointer Pitfalls | dangling pointers · wild pointers · `NULL` deref · use-after-free · double free · strict aliasing · out-of-bounds |

### Group 10: Memory Management (Sheets 50–54)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 50 | `c-50-malloc-free.html` | malloc & free | `malloc` · `free` · `p = malloc(n * sizeof *p)` · check for `NULL` · don't cast in C · `free(NULL)` is safe · set to `NULL` after free |
| 51 | `c-51-calloc-realloc.html` | calloc, realloc & Aligned Allocation | `calloc` (zeroed) · `realloc` growth · temp-pointer pattern · `realloc(NULL, n)` · `aligned_alloc` · `free_sized` (C23) · overflow in `n * size` |
| 52 | `c-52-memory-functions.html` | Memory Functions | `memcpy` · `memmove` (overlap-safe) · `memset` · `memcmp` · `memchr` · `memccpy` · `memset_explicit` (C23) |
| 53 | `c-53-memory-layout.html` | Memory Layout | stack · heap · `.data` / `.bss` · `.text` / read-only data · stack size limits · alignment · `alignas` · lifetimes diagram |
| 54 | `c-54-memory-debugging.html` | Memory Debugging | AddressSanitizer · UBSan · Valgrind (Linux) · `leaks` (macOS) · `MallocStackLogging` · ownership conventions · common leak patterns |

### Group 11: Arrays & Data Structures (Sheets 55–62)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 55 | `c-55-arrays-basics.html` | Array Basics | `int a[5]` · `= {0}` · `= {}` (C23) · designated `[3] = 7` · `sizeof a / sizeof a[0]` · no bounds checking · arrays can't be assigned |
| 56 | `c-56-multidimensional-arrays.html` | Multidimensional Arrays | `int m[3][4]` · row-major layout · passing to functions · `int (*m)[cols]` · VLAs (optional in C11+) · flattened `m[r * cols + c]` |
| 57 | `c-57-dynamic-arrays.html` | Dynamic Arrays | `struct { T *data; size_t len, cap; }` · push · capacity doubling · `realloc` · pop / remove · free |
| 58 | `c-58-linked-lists.html` | Linked Lists | node `struct` · insert at head / tail · delete with `**` trick · traverse · doubly linked · free the whole list |
| 59 | `c-59-stacks-queues.html` | Stacks, Queues & Ring Buffers | array-backed stack · linked queue · circular buffer · head / tail indices · `% cap` wrap · full vs empty |
| 60 | `c-60-hash-tables.html` | Hash Tables | hash functions (djb2, FNV-1a) · buckets & chaining · open addressing · load factor · resize & rehash · string keys & ownership |
| 61 | `c-61-trees-heaps.html` | Trees & Heaps | BST node · insert / search · in- / pre- / post-order · delete · free a tree · array-backed binary heap |
| 62 | `c-62-sorting-searching.html` | Sorting & Searching | `qsort` · `int cmp(const void *, const void *)` · not stable · `bsearch` · insertion sort · hand-written binary search |

### Group 12: Structs, Unions & Enums (Sheets 63–69)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 63 | `c-63-structs-basics.html` | Struct Basics | `struct point { int x, y; };` · `.` member access · initializers · designated `.x = 1` · copy by assignment · no `==` on structs |
| 64 | `c-64-struct-pointers-typedef.html` | Struct Pointers & typedef | `->` · `typedef struct { … } Point;` · self-referential structs · pass by pointer · returning structs · compound literals `(Point){1, 2}` |
| 65 | `c-65-struct-layout.html` | Struct Layout & Padding | padding · alignment · `offsetof` · member ordering to save space · `#pragma pack` · flexible array member `int data[]` |
| 66 | `c-66-unions.html` | Unions | `union` · size = largest member · type punning · tagged unions · anonymous structs / unions (C11) · reading the inactive member |
| 67 | `c-67-enums.html` | Enums | `enum color { RED, GREEN }` · explicit values · enums are `int` · `enum` + `switch` · fixed underlying type `enum : uint8_t` (C23) · flag values `1 << n` |
| 68 | `c-68-bit-fields.html` | Bit-Fields | `unsigned flags : 3` · packing · implementation-defined order · can't take address · hardware registers · bit-fields vs masks |
| 69 | `c-69-opaque-types-oop-patterns.html` | Opaque Types & OOP Patterns | `struct Foo;` opaque pointer · create / destroy functions · encapsulation via `.c` files · vtable of function pointers · "inheritance" via first member · `container_of` |

### Group 13: Files & I/O (Sheets 70–75)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 70 | `c-70-console-input.html` | Console Input | `scanf` · width limits `%99s` · check the return value · `fgets` + `sscanf` · `getchar` · clearing leftover input · `EOF` |
| 71 | `c-71-opening-closing-files.html` | Opening & Closing Files | `FILE *` · `fopen` modes `"r"` `"w"` `"a"` `"r+"` · `"b"` · `"wx"` (C11) · `fclose` · `stdin` / `stdout` / `stderr` · `freopen` |
| 72 | `c-72-reading-text-files.html` | Reading Text Files | `fgets` · `fgetc` · `fscanf` · `getline` (POSIX) · the `while (!feof(f))` bug · `ferror` · line-by-line loops |
| 73 | `c-73-writing-text-files.html` | Writing Text Files | `fprintf` · `fputs` · `fputc` · `fflush` · buffering & `setvbuf` · append mode · checking write errors |
| 74 | `c-74-binary-files.html` | Binary Files | `fread` · `fwrite` · `fseek` / `ftell` / `rewind` · `SEEK_SET` / `SEEK_END` · writing structs (portability) · endianness |
| 75 | `c-75-files-directories-posix.html` | Files & Directories (POSIX) | `remove` · `rename` · `tmpfile` · `open` / `read` / `write` / `close` · `stat` · `opendir` / `readdir` · `access` |

### Group 14: Preprocessor, Headers & Builds (Sheets 76–82)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 76 | `c-76-includes-headers.html` | #include & Header Files | `<…>` vs `"…"` · include guards `#ifndef` · `#pragma once` · what goes in `.h` vs `.c` · `extern` declarations · `-I` paths |
| 77 | `c-77-macros.html` | Macros | object-like `#define` · function-like macros · parenthesize everything · `do { } while (0)` · double-evaluation trap · `#undef` · `__VA_ARGS__` |
| 78 | `c-78-conditional-compilation.html` | Conditional Compilation | `#if` / `#ifdef` / `#elif` · `#elifdef` (C23) · `defined()` · `__APPLE__` / `__linux__` / `_WIN32` · `#error` / `#warning` (C23) · `__has_include` (C23) |
| 79 | `c-79-advanced-preprocessor.html` | Advanced Preprocessor | `#` stringify · `##` token paste · X-macros · `__FILE__` / `__LINE__` / `__func__` · `__DATE__` · `#embed` (C23) · `gcc -E` to debug |
| 80 | `c-80-multi-file-libraries.html` | Multi-File Projects & Libraries | splitting `.c` / `.h` · compile then link · static libs `ar rcs` · shared libs `.so` / `.dylib` · `-fPIC` · `pkg-config` · `nm` / `otool -L` / `ldd` |
| 81 | `c-81-makefiles.html` | Makefiles | target / prereqs / recipe · tab requirement · `CC` / `CFLAGS` / `LDFLAGS` · `$@` `$<` `$^` · `%.o: %.c` · `.PHONY` · `-MMD -MP` deps |
| 82 | `c-82-cmake.html` | CMake | `cmake_minimum_required` · `project` · `add_executable` / `add_library` · `target_include_directories` · `target_compile_options` · `cmake -B build` · `cmake --build build` |

### Group 15: Standard Library (Sheets 83–85)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 83 | `c-83-stdlib-utilities.html` | stdlib.h Utilities | `abs` / `labs` · `div` · `rand` / `srand` / `RAND_MAX` · `getenv` · `system` · `exit` / `atexit` · `qsort` / `bsearch` (see 62) |
| 84 | `c-84-math.html` | Math | `<math.h>` · `sqrt` `pow` `fabs` · `floor` `ceil` `round` · `fmod` · trig & `M_PI` (not standard) · link with `-lm` · `<tgmath.h>` / `<complex.h>` |
| 85 | `c-85-time-dates.html` | Time & Dates | `<time.h>` · `time_t` / `time` · `clock` / `CLOCKS_PER_SEC` · `difftime` · `localtime` / `gmtime` · `strftime` · `timespec_get` |

### Group 16: Tools & External Libraries (Sheets 86–89)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 86 | `c-86-debugging-gdb-lldb.html` | Debugging with gdb & lldb | `-g -O0` · `break` / `b` · `run` · `next` / `step` / `finish` · `print` / `p` · `bt` · `watch` · core dumps |
| 87 | `c-87-unit-testing.html` | Unit Testing | minimal `assert` harness · Unity · Criterion · CMocka · `ctest` · test layout & `make test` |
| 88 | `c-88-static-analysis-formatting.html` | Static Analysis & Formatting | `clang-tidy` · `cppcheck` · `scan-build` · `gcc -fanalyzer` · `clang-format` / `.clang-format` · `compile_commands.json` |
| 89 | `c-89-popular-libraries.html` | Popular C Libraries | cJSON · libcurl · SQLite C API · zlib · raylib / SDL · installing with Homebrew / apt |

### Group 17: Advanced Topics (Sheets 90–96)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 90 | `c-90-undefined-behavior.html` | Undefined Behavior | UB vs unspecified vs implementation-defined · signed overflow · out-of-bounds · uninitialized reads · strict aliasing · how optimizers exploit UB · UBSan |
| 91 | `c-91-c11-threads.html` | C11 Threads | `<threads.h>` · `thrd_create` / `thrd_join` · `mtx_t` · `cnd_t` · `thread_local` · `call_once` · not available on every platform (check macOS) |
| 92 | `c-92-pthreads.html` | POSIX Threads | `pthread_create` / `pthread_join` · `pthread_mutex_t` · condition variables · `pthread_detach` · read-write locks · `-pthread` |
| 93 | `c-93-atomics.html` | Atomics | `<stdatomic.h>` · `_Atomic` · `atomic_fetch_add` · `memory_order` · `atomic_flag` spinlock · data races are UB |
| 94 | `c-94-signals-processes.html` | Signals & Processes | `signal` / `sigaction` (POSIX) · `SIGINT` / `SIGTERM` · `volatile sig_atomic_t` · `raise` · `fork` / `exec` / `waitpid` · exit status |
| 95 | `c-95-generic-programming.html` | Generic Programming | `_Generic` · `void *` containers · element-size parameters · macro-generated types · `typeof` (C23) · comparator callbacks |
| 96 | `c-96-c23-features.html` | C23 at a Glance | `nullptr` · `bool` keywords · `constexpr` · `typeof` / `auto` · `[[attributes]]` · `#embed` · binary literals & digit separators · `<stdbit.h>` / `<stdckdint.h>` |

### Group 18: Quick Reference (Sheets 97–98)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 97 | `c-97-quick-reference-language.html` | Quick Reference — Language & Syntax | types & limits · `printf` specifiers · operator precedence · control flow · declarations (cdecl) · pointers · structs / unions / enums · preprocessor |
| 98 | `c-98-quick-reference-library-tools.html` | Quick Reference — Library & Tools | string functions · memory functions · file I/O · `errno` codes · compiler flags · gdb / lldb commands · Make variables · standards matrix |

A compact syntax → meaning lookup that condenses Sheets 01–96, with no explanations. Sheet 98 ends with a standards matrix (C89 / C99 / C11 / C17 / C23) showing when key features arrived: `//` comments, `stdint.h`, `stdbool.h`, VLAs, designated initializers, `inline` (C99); `_Static_assert`, `_Generic`, `<threads.h>`, `<stdatomic.h>`, anonymous structs (C11); `nullptr`, `constexpr`, `typeof`, `#embed`, `[[attributes]]` (C23).
