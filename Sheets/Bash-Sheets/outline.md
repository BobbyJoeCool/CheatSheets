# Bash Reference — Outline

Generated from `manifest.json`; keep the two in sync when sheets are added, renamed or reordered.

## Profile

- **Collection section:** Concepts & Tools
- **Status:** Complete
- **Sheets:** 27 across 9 groups
- **File prefix:** `bash` (`bash-##-[slug].html`)
- **Folder:** `Sheets/Bash-Sheets/`
- **Coverage:** setup & configuration (startup files, shell options), the command line (output & quoting, redirection & pipes, history, readline & completion), variables & parameters, indexed & associative arrays, globbing & expansion, tests, arithmetic & control flow, functions & scripting (input, getopts, errors & debugging), processes & interactive use, quick reference

---

## Group 1 — Setup & Configuration (01–02)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `bash-01-introduction-startup-files.html` | Introduction &amp; Startup Files | $BASH_VERSION · ~/.bash_profile · ~/.bashrc · login vs interactive · BASH_ENV · source |
| 02 | `bash-02-shell-options.html` | Shell Options (set &amp; shopt) | set -o · set +o · shopt -s · shopt -u · globstar · nullglob · $- |

## Group 2 — The Command Line (03–06)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 03 | `bash-03-output-quoting.html` | Output, Quoting &amp; Escaping | echo · printf · 'single' · "double" · $'…' · printf %q |
| 04 | `bash-04-redirection-pipes.html` | Redirection &amp; Pipes | > >> &lt; · 2>&amp;1 · &amp;> · &lt;&lt;EOF · &lt;&lt;&lt; · \|&amp; · exec 3> |
| 05 | `bash-05-history.html` | History &amp; History Expansion | HISTSIZE · HISTCONTROL · !! · !$ · ^old^new · history · fc |
| 06 | `bash-06-readline-completion.html` | Readline, Key Bindings &amp; Completion | Ctrl-R · Alt-. · ~/.inputrc · bind · set -o vi · complete · compgen |

## Group 3 — Variables & Parameters (07–10)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 07 | `bash-07-variables-declare.html` | Variables &amp; declare | name=value · declare · local · readonly · export · declare -n · unset |
| 08 | `bash-08-special-parameters.html` | Special Parameters &amp; Environment | $0 $1 $# · "$@" · $? · $$ $! · PIPESTATUS · RANDOM · PATH |
| 09 | `bash-09-parameter-expansion-defaults.html` | Parameter Expansion — Defaults &amp; Length | ${var:-def} · ${var:=val} · ${var:?msg} · ${var:+alt} · ${#var} · ${!var} |
| 10 | `bash-10-parameter-expansion-strings.html` | Parameter Expansion — Substrings &amp; Transforms | ${v:off:len} · ${v#pat} · ${v%pat} · ${v/a/b} · ${v^^} · ${v,,} · ${v@Q} |

## Group 4 — Arrays (11–12)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 11 | `bash-11-indexed-arrays.html` | Indexed Arrays | arr=(a b c) · "${arr[@]}" · ${#arr[@]} · +=() · ${arr[@]:1:2} · ${!arr[@]} |
| 12 | `bash-12-associative-arrays.html` | Associative Arrays | declare -A · h[key]=val · "${!h[@]}" · "${h[@]}" · [[ -v h[key] ]] · unset |

## Group 5 — Globbing & Expansion (13–14)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 13 | `bash-13-globbing.html` | Globbing &amp; Extended Globs | * ? [...] · [[:digit:]] · extglob · !(…) @(…) · ** · nullglob |
| 14 | `bash-14-brace-tilde-word-splitting.html` | Brace, Tilde &amp; Word Splitting | {a,b} · {1..10} · ~ · expansion order · IFS · word splitting · "$var" |

## Group 6 — Tests, Arithmetic & Control Flow (15–18)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 15 | `bash-15-test-expressions.html` | Test Expressions | [[ ]] vs [ ] · -f -d -e · -z -n · == · =~ · -eq -lt · -v |
| 16 | `bash-16-if-case-select.html` | if, case &amp; select | if / elif / else / fi · case / esac · ;; ;&amp; ;;&amp; · select · PS3 |
| 17 | `bash-17-arithmetic.html` | Arithmetic | $(( )) · (( )) · let · ** · ++ += · 16#ff · ? : · bc |
| 18 | `bash-18-loops.html` | Loops | for … in · for (( )) · while · until · while IFS= read -r · break · continue |

## Group 7 — Functions & Scripting (19–22)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 19 | `bash-19-functions.html` | Functions | name() { } · local · "$@" · return · $(fn) · local -n · declare -f |
| 20 | `bash-20-reading-input.html` | Reading Input | read -r · -p · -s · -t · -n · -a · IFS=, read · mapfile -t |
| 21 | `bash-21-script-arguments-getopts.html` | Script Arguments &amp; getopts | #!/usr/bin/env bash · shift · getopts · $OPTARG · $OPTIND · -- · long options |
| 22 | `bash-22-errors-debugging.html` | Errors, Traps &amp; Debugging | set -euo pipefail · trap … EXIT · trap … ERR · set -x · PS4 · bash -n · exit |

## Group 8 — Processes & Interactive Use (23–25)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 23 | `bash-23-jobs-subshells-process-substitution.html` | Jobs, Subshells &amp; Process Substitution | &amp; · jobs · fg / bg · disown · wait -n · ( ) vs { } · &lt;(cmd) · coproc |
| 24 | `bash-24-aliases-prompt-navigation.html` | Aliases, Prompt &amp; Navigation | alias · \cmd · PS1 · \u \h \w · PROMPT_COMMAND · pushd / popd · CDPATH |
| 25 | `bash-25-portability-best-practices.html` | Portability &amp; Best Practices | ShellCheck · bashisms vs POSIX sh · bash 3.2 · command -v · printf · mktemp · quoting |

## Group 9 — Quick Reference (26–27)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 26 | `bash-26-quick-reference-syntax.html` | Quick Reference — Syntax &amp; Expansion | quoting · redirection · parameters · expansion · arrays · globs · tests · arithmetic |
| 27 | `bash-27-quick-reference-scripting.html` | Quick Reference — Scripting &amp; Interactive | control flow · functions · read · getopts · trap · jobs · keys · history · versions |
