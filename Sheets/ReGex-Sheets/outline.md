# RegEx Reference Guide Outline (25 sheets)

## Metadata

- **Group it belongs to:** Concepts & Tools
- **Folder Directory:** `Sheets/ReGex-Sheets/regex-##-[slug].html`
- **Groups:** 10
- **Sheets:** 25
- **Drafted Date:** 2026-10-10
- **Verified-Finalized Date:**

## Basic Information

Regular expressions for intermediate readers who have used `\d+` and `.*` and want patterns that are correct, portable and fast. Groups 1–5 teach the syntax flavor-neutrally (PCRE-style). Groups 6–9 cover how each language or tool hosts regex: the API, escaping, replacement syntax and gotchas, with dedicated sheets for Python, Java and JavaScript and a combined page for the rest.

Bash `=~` and PowerShell `-match` are covered in those sets (bash-15, ps-33), and pc-029 in Programming Concepts points here.

## Differences in Layout from Basic Structure

- The standard groups (OOP, Data Structures, Files & I/O and so on) don't apply. The set uses syntax groups followed by language-integration groups.
- Anything not universal carries a flavor tag (e.g. `✗ JS`, `✗ Go`, `Java 9+`, `ES2018`).
- The last two sheets are copy-ready pattern references with no tutorial text.

## Groups

### Group 1: Foundations (Sheets 01–03)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `regex-01-introduction-flavors.html` | Introduction & Flavors | what a regex is · PCRE / PCRE2 · POSIX BRE vs ERE · ECMAScript (JS) · Java / .NET / Python `re` · RE2 (Go) & Rust `regex` · regex101 / testing tools · picking the right flavor |
| 02 | `regex-02-literals-metacharacters-escaping.html` | Literals, Metacharacters & Escaping | the metacharacters `\ ^ $ . \| ? * + ( ) [ {` · `\.` / `\\` · `\t` `\n` `\r` · `\xhh` / `\uhhhh` / `\x{hhhh}` · `\Q…\E` · double escaping in string literals · raw strings `r""` / `@""` / backticks · `re.escape` / `Pattern.quote` / `RegExp.escape` |
| 03 | `regex-03-how-matching-works.html` | How the Engine Matches | leftmost match wins · backtracking NFA step-through · alternation is ordered (first, not longest) · POSIX leftmost-longest · DFA / RE2 linear-time engines · search vs anchored vs full match · zero-length matches · no overlapping matches by default |

### Group 2: Character Classes (Sheets 04–05)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 04 | `regex-04-character-classes-shorthands.html` | Character Classes & Shorthands | `[abc]` · `[^abc]` negation · `[a-z0-9]` ranges · `]` `-` `^` `\` inside a class · `\d` `\w` `\s` · `\D` `\W` `\S` · `.` and newlines · `[\s\S]` any-char trick |
| 05 | `regex-05-posix-classes-unicode.html` | POSIX Classes & Unicode | `[[:alpha:]]` `[[:digit:]]` `[[:space:]]` · `\p{L}` / `\p{Lu}` / `\P{…}` · `\p{Script=Greek}` · `\X` grapheme cluster · ASCII vs Unicode `\d` / `\w` by flavor · intersection `[a-z&&[^aeiou]]` (Java) · subtraction `[a-z-[aeiou]]` (.NET) · JS `v`-flag set operations |

### Group 3: Quantifiers & Anchors (Sheets 06–08)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 06 | `regex-06-quantifiers.html` | Quantifiers | `*` `+` `?` · `{n}` · `{n,}` · `{n,m}` · `{,m}` (flavor-dependent) · quantifying groups `(ab)+` · repeated capture keeps only the last · `{` as a literal |
| 07 | `regex-07-greedy-lazy-possessive.html` | Greedy, Lazy & Possessive | greedy by default · lazy `*?` `+?` `??` `{n,m}?` · `".*"` vs `".*?"` vs `"[^"]*"` · possessive `*+` `++` `?+` · atomic groups `(?>…)` · Python 3.11+ support · not in JS / Go |
| 08 | `regex-08-anchors-boundaries.html` | Anchors & Word Boundaries | `^` `$` · multiline-mode effect · `\A` `\z` `\Z` · `$` matches before a final `\n` · `\Z` differs in Python vs PCRE · `\b` / `\B` · `\<` `\>` (GNU) · `\G` continue-at-last-match |

### Group 4: Groups, Backreferences & Lookaround (Sheets 09–11)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 09 | `regex-09-groups-alternation.html` | Groups & Alternation | `( … )` capture · `\|` has lowest precedence · `^a\|b$` pitfall · `(?:…)` non-capturing · numbering by opening `(` · nested groups · groups that didn't participate · `(cat\|dog)s?` |
| 10 | `regex-10-named-groups-backreferences.html` | Named Groups & Backreferences | `(?<name>…)` · `(?P<name>…)` (Python) · `\1` `\2` · `\k<name>` / `(?P=name)` · `\g{-1}` relative refs · branch reset `(?\|…)` · duplicate names · doubled-word example |
| 11 | `regex-11-lookahead-lookbehind.html` | Lookahead & Lookbehind | `(?=…)` · `(?!…)` · `(?<=…)` · `(?<!…)` · zero-width (consumes nothing) · fixed vs variable-length lookbehind by flavor · `\K` keep-out · stacked lookaheads `^(?=.*\d)(?=.*[a-z])` |

### Group 5: Flags, Replacement & Advanced (Sheets 12–15)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 12 | `regex-12-flags-inline-modifiers.html` | Flags & Inline Modifiers | `i` case-insensitive · `m` multiline · `s` dotall · `x` verbose + `#` comments · `u` / `v` Unicode · `g` global · `y` sticky · inline `(?i)` / `(?i:…)` / `(?-i)` |
| 13 | `regex-13-substitution-replacement.html` | Substitution & Replacement Syntax | `$1` vs `\1` vs `\g<1>` · `${name}` / `\g<name>` / `$<name>` · `$&` / `$0` / `\0` / `&` whole match · `` $` `` / `$'` · `$$` literal dollar · `\U` `\L` `\E` case conversion · `${1}0` ambiguity · flavor table |
| 14 | `regex-14-advanced-constructs.html` | Advanced Constructs | conditionals `(?(1)yes\|no)` · recursion `(?R)` / `(?1)` · balanced parentheses · subroutines `(?&name)` · `(*SKIP)(*FAIL)` · PCRE verbs `(*UCP)` `(*CRLF)` · .NET balancing groups `(?<-open>)` · `(?#comment)` |
| 15 | `regex-15-performance-redos.html` | Performance & Catastrophic Backtracking | ReDoS · nested quantifiers `(a+)+` · overlapping alternation `(a\|a)*` · fix with atomic / possessive / tighter classes · anchor and fail fast · precompile & cache · timeouts (.NET `matchTimeout`, Python `regex`) · linear engines (RE2, .NET `NonBacktracking`) |

### Group 6: Python (Sheets 16–17)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 16 | `regex-16-python-re-core.html` | Python `re` — Core Functions | raw strings `r"\d+"` · `search` vs `match` vs `fullmatch` · `findall` (groups change the return) · `finditer` · `split` (captured delimiters kept) · `re.compile` + `re.I \| re.M \| re.X` · Match `.group()` / `.groups()` / `.groupdict()` · `.span()` / `.start()` / `.end()` |
| 17 | `regex-17-python-substitution-regex-module.html` | Python — Substitution & the `regex` Module | `re.sub` / `re.subn` · `\g<1>` / `\g<name>` · function replacements · `count=` / `flags=` as keywords (3.13+) · `re.VERBOSE` layouts · 3.11 atomic & possessive · third-party `regex`: `\p{}`, variable lookbehind · `regex` `timeout=` & fuzzy matching |

### Group 7: Java (Sheets 18–19)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 18 | `regex-18-java-pattern-matcher.html` | Java — Pattern & Matcher | `Pattern.compile` · `CASE_INSENSITIVE` / `MULTILINE` / `DOTALL` / `COMMENTS` · `UNICODE_CHARACTER_CLASS` · `matches()` vs `find()` vs `lookingAt()` · `group(n)` / `group("name")` · `start()` / `end()` · `while (m.find())` · `results()` stream (Java 9+) · `Pattern` thread-safe, `Matcher` not |
| 19 | `regex-19-java-strings-replacement.html` | Java — String Methods, Replacement & Gotchas | `"\\d+"` double escaping & text blocks · `String.matches()` = whole string · `replaceAll` / `replaceFirst` · `split` (trailing empties dropped, `limit`) · `$1` / `${name}` & `Matcher.quoteReplacement` · `replaceAll(Function<MatchResult,String>)` · `Pattern.quote` · Kotlin `Regex` / `toRegex()` |

### Group 8: JavaScript (Sheets 20–21)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 20 | `regex-20-javascript-regexp-basics.html` | JavaScript — RegExp Basics | `/pattern/flags` literal · `new RegExp(str, flags)` · `test()` · `exec()` & `lastIndex` with `g` / `y` (stateful gotcha) · `str.match()` with vs without `g` · `str.matchAll()` · `str.search()` · `str.split(/re/)` |
| 21 | `regex-21-javascript-replace-modern.html` | JavaScript — Replace & Modern Features | `replace` / `replaceAll` · `$1` `$<name>` `$&` · replacer `(match, p1, …, offset, str, groups)` · named groups & `.groups` (ES2018) · lookbehind & `s` flag (ES2018) · `d` flag & `.indices` (ES2022) · `v` flag (ES2024) · `RegExp.escape()` & `(?i:…)` modifiers (ES2025) |

### Group 9: Other Languages & Command-Line Tools (Sheets 22–23)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 22 | `regex-22-other-languages.html` | Other Languages — Go, C#, Ruby & More | Go `regexp` (RE2: no lookaround / backrefs) · C# `Regex` / `RegexOptions` / `[GeneratedRegex]` · Ruby `=~` / `match?` / `scan` / `gsub` / `%r{}` · Ruby `^` `$` are always line anchors (use `\A` `\z`) · C++ `std::regex` (ECMAScript default, slow) · C POSIX `regcomp` / `regexec` & PCRE2 · Rust `regex` crate · PHP `preg_*` delimiters & Perl `s///` |
| 23 | `regex-23-command-line-tools.html` | Command-Line Tools — grep, sed, awk & rg | BRE vs ERE: `\( \)` `\{ \}` `\+` · `grep -E` / `-P` / `-o` / `-w` / `-i` / `-v` · `sed -E 's/re/rep/g'` & `\1` · `awk '/re/'` & `$2 ~ /re/` · `rg` (Rust regex, `-P` for PCRE2) · GNU vs BSD/macOS (`sed -i ''`, no `grep -P`) · `find -regex` / `-regextype` · vim `\v` very magic |

Sheet 22 is the densest in the set: one compact block per language (compile → test → find all → replace → one gotcha), in two columns.

### Group 10: Quick Reference — Common Patterns (Sheets 24–25)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 24 | `regex-24-quick-reference-validation.html` | Quick Reference — Validation Patterns | email (pragmatic) · URL · IPv4 / IPv6 · UUID / GUID · ISO 8601 dates & times · phone (E.164 / NANP) & ZIP · hex color & semver · password-strength lookaheads |
| 25 | `regex-25-quick-reference-text-processing.html` | Quick Reference — Text Processing & Extraction | trim / collapse whitespace · blank & duplicate lines · repeated words `\b(\w+)\s+\1\b` · quoted strings with escapes · numbers (int / float / scientific / thousands) · key=value & log-line parsing · comments `//` `/* */` `#` · camelCase ↔ snake_case |

Copy-ready patterns with no tutorial text. Each row has the pattern (PCRE-style), what it matches, a one-line example, and a flavor caveat tag where needed. Patterns favor "good enough and readable" over RFC-complete, and each sheet says so. Sheet 25 ends with a "Don't use regex for this" box (HTML/XML parsing, nested JSON, full RFC email validation, calendar-checked dates) naming the tool to use instead.
