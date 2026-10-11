# Bash Reference Guide Outline (27 sheets)

## Metadata

- **Group it belongs to:** Command Line Interface
- **Folder Directory:** `Sheets/Bash-Sheets/bash-##-[slug].html`
- **Groups:** 9
- **Sheets:** 27
- **Drafted Date:** 2026-10-06
- **Verified-Finalized Date:** 2026-10-07

## Basic Information

Bash as both an interactive shell and a scripting language, for intermediate users who are comfortable at a terminal and want to write real scripts. Targets bash 5.x and tags any feature that needs 4.0+, since macOS still ships bash 3.2 at `/bin/bash`.

The set was capped at 25 topic sheets plus 2 quick-reference pages, so sheets are consolidated and dense. OOP, data structures beyond arrays and external libraries don't apply to a shell. External tools (grep, sed, awk, find, xargs) are out of scope.

## Differences in Layout from Basic Structure

- Groups follow shell topics instead of the standard language groups.
- The two quick-reference sheets at the end are table-only lookup pages (syntax, what it does, sheet #) with no code row and no Description/Notes row.
- Sheet 27 ends with a version matrix (3.2 / 4.0 / 4.3 / 4.4 / 5.x) showing when key features arrived.

## Groups

### Group 1: Setup & Configuration (Sheets 01–02)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `bash-01-introduction-startup-files.html` | Introduction & Startup Files | $BASH_VERSION · ~/.bash_profile · ~/.bashrc · login vs interactive · BASH_ENV · source |
| 02 | `bash-02-shell-options.html` | Shell Options (set & shopt) | set -o · set +o · shopt -s · shopt -u · globstar · nullglob · $- |

### Group 2: The Command Line (Sheets 03–06)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 03 | `bash-03-output-quoting.html` | Output, Quoting & Escaping | echo · printf · 'single' · "double" · $'…' · printf %q |
| 04 | `bash-04-redirection-pipes.html` | Redirection & Pipes | > >> &lt; · 2>&1 · &> · &lt;&lt;EOF · &lt;&lt;&lt; · \|& · exec 3> |
| 05 | `bash-05-history.html` | History & History Expansion | HISTSIZE · HISTCONTROL · !! · !$ · ^old^new · history · fc |
| 06 | `bash-06-readline-completion.html` | Readline, Key Bindings & Completion | Ctrl-R · Alt-. · ~/.inputrc · bind · set -o vi · complete · compgen |

### Group 3: Variables & Parameters (Sheets 07–10)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 07 | `bash-07-variables-declare.html` | Variables & declare | name=value · declare · local · readonly · export · declare -n · unset |
| 08 | `bash-08-special-parameters.html` | Special Parameters & Environment | $0 $1 $# · "$@" · $? · $$ $! · PIPESTATUS · RANDOM · PATH |
| 09 | `bash-09-parameter-expansion-defaults.html` | Parameter Expansion — Defaults & Length | ${var:-def} · ${var:=val} · ${var:?msg} · ${var:+alt} · ${#var} · ${!var} |
| 10 | `bash-10-parameter-expansion-strings.html` | Parameter Expansion — Substrings & Transforms | ${v:off:len} · ${v#pat} · ${v%pat} · ${v/a/b} · ${v^^} · ${v,,} · ${v@Q} |

### Group 4: Arrays (Sheets 11–12)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 11 | `bash-11-indexed-arrays.html` | Indexed Arrays | arr=(a b c) · "${arr[@]}" · ${#arr[@]} · +=() · ${arr[@]:1:2} · ${!arr[@]} |
| 12 | `bash-12-associative-arrays.html` | Associative Arrays | declare -A · h[key]=val · "${!h[@]}" · "${h[@]}" · [[ -v h[key] ]] · unset |

### Group 5: Globbing & Expansion (Sheets 13–14)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 13 | `bash-13-globbing.html` | Globbing & Extended Globs | * ? [...] · [[:digit:]] · extglob · !(…) @(…) · ** · nullglob |
| 14 | `bash-14-brace-tilde-word-splitting.html` | Brace, Tilde & Word Splitting | {a,b} · {1..10} · ~ · expansion order · IFS · word splitting · "$var" |

### Group 6: Tests, Arithmetic & Control Flow (Sheets 15–18)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 15 | `bash-15-test-expressions.html` | Test Expressions | [[ ]] vs [ ] · -f -d -e · -z -n · == · =~ · -eq -lt · -v |
| 16 | `bash-16-if-case-select.html` | if, case & select | if / elif / else / fi · case / esac · ;; ;& ;;& · select · PS3 |
| 17 | `bash-17-arithmetic.html` | Arithmetic | $(( )) · (( )) · let · ** · ++ += · 16#ff · ? : · bc |
| 18 | `bash-18-loops.html` | Loops | for … in · for (( )) · while · until · while IFS= read -r · break · continue |

### Group 7: Functions & Scripting (Sheets 19–22)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 19 | `bash-19-functions.html` | Functions | name() { } · local · "$@" · return · $(fn) · local -n · declare -f |
| 20 | `bash-20-reading-input.html` | Reading Input | read -r · -p · -s · -t · -n · -a · IFS=, read · mapfile -t |
| 21 | `bash-21-script-arguments-getopts.html` | Script Arguments & getopts | #!/usr/bin/env bash · shift · getopts · $OPTARG · $OPTIND · -- · long options |
| 22 | `bash-22-errors-debugging.html` | Errors, Traps & Debugging | set -euo pipefail · trap … EXIT · trap … ERR · set -x · PS4 · bash -n · exit |

### Group 8: Processes & Interactive Use (Sheets 23–25)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 23 | `bash-23-jobs-subshells-process-substitution.html` | Jobs, Subshells & Process Substitution | & · jobs · fg / bg · disown · wait -n · ( ) vs { } · &lt;(cmd) · coproc |
| 24 | `bash-24-aliases-prompt-navigation.html` | Aliases, Prompt & Navigation | alias · \cmd · PS1 · \u \h \w · PROMPT_COMMAND · pushd / popd · CDPATH |
| 25 | `bash-25-portability-best-practices.html` | Portability & Best Practices | ShellCheck · bashisms vs POSIX sh · bash 3.2 · command -v · printf · mktemp · quoting |

### Group 9: Quick Reference (Sheets 26–27)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 26 | `bash-26-quick-reference-syntax.html` | Quick Reference — Syntax & Expansion | quoting · redirection · parameters · expansion · arrays · globs · tests · arithmetic |
| 27 | `bash-27-quick-reference-scripting.html` | Quick Reference — Scripting & Interactive | control flow · functions · read · getopts · trap · jobs · keys · history · versions |
