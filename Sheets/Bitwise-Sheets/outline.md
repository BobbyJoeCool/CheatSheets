# Bitwise Operations Reference Guide Outline (23 sheets)

## Metadata

- **Group it belongs to:** Concepts & Tools
- **Folder Directory:** `Sheets/Bitwise-Sheets/bit-##-[slug].html`
- **Groups:** 5
- **Sheets:** 23
- **Drafted Date:** 2026-10-10
- **Verified-Finalized Date:**

## Basic Information

A cross-language set for beginner-to-intermediate readers. It starts at binary and two's complement, then spends most of its pages on what bit manipulation is actually used for: flags, masks, packed data, colors, endianness, subnets, hashing and bitsets. The language sheets cover syntax and, more importantly, each language's traps.

It expands the one-page primer at Programming Concepts Sheet 007. Bitmask DP is only touched on Sheet 11; the full pattern lives in Programming Concepts.

## Differences in Layout from Basic Structure

- Sheets 01–15 (language-agnostic) use pseudocode in the Programming Concepts house style (`←` assigns, `=` compares, `div` / `mod`, C-style `& | ^ ~ << >>`, plus `>>>` for logical shift). Never a real language.
- Sheets 16–22 use real code in that language, with output comments, and carry an extra row of code examples (flags, binary parsing, bitsets).
- Binary examples default to 8-bit values written `0b1011_0010`; 32-bit is used only where width matters and is labeled.
- Technique sheets (05–15) follow a fixed block order: Idea · Bit diagram · Pseudocode · Gotchas · Seen in.
- Language sheets (16–22) use: operator table (Operator | Name | Example | Result), integer model box, built-in helpers table, idioms code block, and a Traps table.
- Sheet 23 is a single-page quick reference, so Group 5 is a one-sheet group by design.

## Groups

### Group 1: Foundations (Sheets 01–04)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `bit-01-binary-hex-octal.html` | Binary, Hex & Octal | positional notation · bit / nibble / byte / word · `0b` / `0x` / `0o` literals · 0–15 conversion table · hex ↔ binary by nibble · MSB / LSB · bit numbering from 0 · `_` digit separators |
| 02 | `bit-02-twos-complement.html` | Signed Integers & Two's Complement | unsigned vs signed · sign bit · `-x = ~x + 1` · ranges for 8 / 16 / 32 / 64 bits · overflow & wraparound · sign extension · `MIN` has no positive twin · one's complement (historical) |
| 03 | `bit-03-bitwise-operators.html` | AND, OR, XOR & NOT | truth tables · 8-bit worked examples · `&` vs `&&` (bitwise vs logical) · no short-circuit · `~x = -x - 1` (signed) · precedence trap: `x & 1 = 0` · identities (`x & 0`, `x \| 0`, `x ^ x`) · De Morgan for bits |
| 04 | `bit-04-shifts-rotations.html` | Shifts & Rotations | `<<` as × 2ⁿ · arithmetic `>>` (sign-filling) · logical `>>>` (zero-filling) · `>>` rounds toward −∞ (−7 >> 1 = −4) · bits shifted out are lost · shift ≥ width pitfall · rotate left / right · `(x << n) \| (x >>> (w - n))` |

### Group 2: Core Techniques (Sheets 05–09)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 05 | `bit-05-single-bit-operations.html` | Single-Bit Operations | test `(x >> i) & 1` · set `x \| (1 << i)` · clear `x & ~(1 << i)` · toggle `x ^ (1 << i)` · write bit to `v` · `1 << i` overflow at 32+ (needs a 64-bit 1) · odd/even `x & 1` |
| 06 | `bit-06-masks-bit-fields.html` | Masks & Bit Fields | low mask `(1 << n) - 1` · range mask `[lo, hi]` · extract field `(x >> lo) & mask` · insert field · clear a range · keep vs zero out · all-ones `~0` · mask naming conventions |
| 07 | `bit-07-lowest-bit-powers-of-two.html` | Lowest Set Bit & Powers of Two | clear lowest `x & (x - 1)` · isolate lowest `x & -x` · set lowest zero `x \| (x + 1)` · power-of-two test · round up to next power of two · `x mod 2ⁿ = x & (2ⁿ - 1)` · align up / down to boundary · why `-x` works (two's complement) |
| 08 | `bit-08-counting-scanning-bits.html` | Counting & Scanning Bits | popcount · Kernighan's loop · SWAR popcount · trailing zeros (ctz) · leading zeros (clz) · bit length / floor log₂ · parity · CPU instructions (POPCNT, LZCNT, TZCNT) |
| 09 | `bit-09-xor-tricks.html` | XOR Tricks | `x ^ x = 0` / `x ^ 0 = x` · find the single non-duplicate · missing number in 1..n · XOR swap (and why not to use it) · XOR of 1..n pattern · Hamming distance `popcount(a ^ b)` · toggle between two values · "did these bits change?" |

### Group 3: Real-World Uses (Sheets 10–15)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 10 | `bit-10-flags-permissions.html` | Flags & Permissions | flag constants `1 << n` · combine with `\|` · test with `&` · remove with `& ~` · Unix `rwx` / `0o755` / `chmod` · `umask` · OS open flags (`O_CREAT \| O_WRONLY`) · feature-flag / options words |
| 11 | `bit-11-bitsets-subsets.html` | Bitsets & Subset Enumeration | integer as a small set · union / intersection / difference · iterate set bits (`x & (x - 1)` loop) · all 2ⁿ subsets `for m ← 0 to 2ⁿ - 1` · submasks `s ← (s - 1) & m` · Gosper's hack (next k-subset) · bitmask DP state (n ≤ 20 rule) · bitmaps / bit arrays for large sets |
| 12 | `bit-12-colors-packed-data.html` | Colors & Packed Data | `0xRRGGBB` / `0xAARRGGBB` · extract channels `(c >> 16) & 0xFF` · pack channels · RGB565 · packing two 32-bit ints into a 64-bit key `(a << 32) \| b` · Morton / Z-order codes · fixed-point numbers (Q16.16) · IEEE-754 float bit layout |
| 13 | `bit-13-bytes-endianness.html` | Bytes, Endianness & Binary Formats | big- vs little-endian · network byte order · extract byte n `(x >> 8n) & 0xFF` · build a u32 from 4 bytes · byte swap · sign extension when reading bytes · header bit fields (e.g. IPv4 version / IHL nibble) · UTF-8 leading-bit patterns |
| 14 | `bit-14-ip-addresses-subnets.html` | IP Addresses, Subnets & CIDR | IPv4 as a 32-bit int · `/24` → mask `~0 << (32 - p)` · network `ip & mask` · broadcast `ip \| ~mask` · "is IP in subnet?" · host count `2^(32 - p) - 2` · wildcard masks · IPv6 128-bit note |
| 15 | `bit-15-hashing-randomness-misc.html` | Hashing, Randomness & Branchless Tricks | hash table index `h & (cap - 1)` · hash mixing `h ^ (h >> 16)` · FNV-1a · xorshift PRNG · Gray code `x ^ (x >> 1)` · parity / checksum bits · branchless abs / min / sign · when the compiler already does it for you |

### Group 4: Language Guides (Sheets 16–22)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 16 | `bit-16-python.html` | Bitwise in Python | arbitrary-precision `int` (no overflow) · `~x == -x - 1` · no `>>>` · emulate 32-bit with `& 0xFFFFFFFF` · `bin()` / `hex()` / `format(x, '08b')` / `int(s, 2)` · `int.bit_length()` / `int.bit_count()` (3.10+) · `to_bytes` / `from_bytes` / `struct` · `enum.Flag` / `IntFlag` |
| 17 | `bit-17-java.html` | Bitwise in Java | fixed `int` (32) / `long` (64) · `>>>` unsigned shift · `byte` sign extension → `b & 0xFF` · shift count masked (`& 31` / `& 63`) · `1L << 40` · `Integer.bitCount` / `numberOfTrailingZeros` / `highestOneBit` / `rotateLeft` / `reverse` · `toBinaryString` / `toUnsignedString` · `BitSet` / `EnumSet` |
| 18 | `bit-18-javascript.html` | Bitwise in JavaScript | operands converted to 32-bit signed int · `x >>> 0` to unsigned · `x \| 0` truncation (and its 2³¹ limit) · `Math.clz32` · `toString(2)` / `parseInt(s, 2)` / `0b` literals · `BigInt` ops (`1n << 64n`, no `>>>`) · typed arrays & `DataView` endianness · TypeScript note: `const enum` flags |
| 19 | `bit-19-c-cpp.html` | Bitwise in C & C++ | use unsigned / `uint32_t` (`<stdint.h>`) · UB: signed overflow, negative shift, shift ≥ width · `>>` of negatives (implementation-defined in C, arithmetic since C++20) · struct bit fields `unsigned x : 3` · `__builtin_popcount` / `_ctz` / `_clz` · C++20 `<bit>`: `std::popcount` / `countr_zero` / `rotl` / `has_single_bit` / `bit_cast` · `std::bitset` · C23 `<stdbit.h>` & `0b` literals |
| 20 | `bit-20-csharp-go.html` | Bitwise in C# & Go | C#: `>>>` (C# 11) · `[Flags]` enums & `HasFlag` · `BitOperations.PopCount` / `LeadingZeroCount` / `RotateLeft` · `checked` / `unchecked` · Go: `&^` AND NOT · unary `^x` is NOT · `math/bits` (`OnesCount`, `LeadingZeros`, `Len`, `RotateLeft`) · `iota` flag constants |
| 21 | `bit-21-rust-kotlin-ruby-sql.html` | Bitwise in Rust, Kotlin, Ruby & SQL | Rust: `!x` is NOT · `count_ones` / `leading_zeros` / `rotate_left` / `to_be_bytes` · overflow panics in debug, `wrapping_shl` · Kotlin: infix `and` / `or` / `xor` / `inv` / `shl` / `ushr` · Ruby: `x[i]` bit read / `bit_length` / `anybits?` / `to_s(2)` · SQL: `&` `\|` `<<`, XOR as `#` (PostgreSQL) vs `^` (MySQL) · `BIT_COUNT` |
| 22 | `bit-22-cli-shells.html` | Bitwise on the Command Line | bash / zsh `$(( a & b ))` · base literals `2#1010` / `16#ff` · zsh `$(( [##2] x ))` binary output · `printf '%x' / '%o'` · `bc` with `obase=2` · PowerShell `-band` / `-bor` / `-bxor` / `-bnot` / `-shl` / `-shr` · `chmod` / `umask` octal · `xxd -b` / `ipcalc` / `python3 -c` one-liners |

### Group 5: Quick Reference (Sheet 23)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 23 | `bit-23-quick-reference.html` | Quick Reference & Language Matrix | operator truth tables · single-bit recipes · mask recipes · lowest-bit & power-of-two tricks · popcount / ctz / clz names · language matrix · common traps |

A dense one-page lookup that condenses Sheets 01–22, with no explanations. It ends with a language matrix (Python, Java, JavaScript, C/C++, C#, Go, Rust, Kotlin, Ruby, bash, PowerShell × integer width, NOT operator, unsigned right shift, popcount, leading zeros, binary literal syntax).
