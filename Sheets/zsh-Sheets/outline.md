# Zsh Reference — Outline

Generated from `manifest.json`; keep the two in sync when sheets are added, renamed or reordered.

## Profile

- **Collection section:** Concepts & Tools
- **Status:** Complete
- **Sheets:** 27 across 9 groups
- **File prefix:** `zsh` (`zsh-##-[slug].html`)
- **Folder:** `Sheets/zsh-Sheets/`
- **Coverage:** setup & configuration, the command line (ZLE & key bindings), variables & parameters (typeset, expansion flags), arrays, globbing (qualifiers & modifiers), tests, arithmetic & control flow, functions & scripting, interactive customization (prompt & hooks, completion system, plugins & frameworks), quick reference

---

## Group 1 — Setup & Configuration (01–02)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `zsh-01-introduction-startup-files.html` | Introduction &amp; Startup Files | macOS default since Catalina · chsh -s $(which zsh) · $ZSH_VERSION · zsh -f · .zshenv → .zprofile → .zshrc → .zlogin · .zlogout · $ZDOTDIR · login vs interactive |
| 02 | `zsh-02-shell-options.html` | Shell Options | setopt / unsetopt · NO_ prefix · emulate -L zsh · LOCAL_OPTIONS · EXTENDED_GLOB · NO_CLOBBER · emulate sh / ksh |

## Group 2 — The Command Line (03–06)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 03 | `zsh-03-output-quoting.html` | Output, Quoting &amp; Escaping | echo · print -l / print -P · printf · 'single' vs "double" · $'\n' ANSI-C quoting · \ escapes · ${(q)var} |
| 04 | `zsh-04-redirection-pipes.html` | Redirection &amp; Pipes | > >> &lt; · 2>&amp;1 / &amp;> · >\| with noclobber · MULTIOS > a > b · &lt;&lt;EOF here-doc · &lt;&lt;&lt; here-string · \|&amp; |
| 05 | `zsh-05-history.html` | History &amp; History Expansion | HISTFILE / HISTSIZE / SAVEHIST · SHARE_HISTORY · HIST_IGNORE_DUPS · !! !$ !* · ^old^new · fc · history -i |
| 06 | `zsh-06-zle-key-bindings.html` | Line Editor (ZLE) &amp; Key Bindings | bindkey -e / -v · bindkey '^R' · zle -N custom widgets · edit-command-line · $BUFFER / $CURSOR · KEYTIMEOUT |

## Group 3 — Variables & Parameters (07–10)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 07 | `zsh-07-variables-typeset.html` | Variables &amp; typeset | name=value · typeset / local · -i integer · -F float · -r readonly · -x export · -U unique · -l / -u case |
| 08 | `zsh-08-special-parameters.html` | Special Parameters | $0 $1 $# · $@ vs $* · $? · $$ / $! · $argv · $PWD / $OLDPWD · $path ↔ $PATH tied arrays |
| 09 | `zsh-09-parameter-expansion.html` | Parameter Expansion | ${var:-default} · ${var:=val} · ${var:?msg} · ${var:+alt} · ${#var} · ${var#pat} / ${var%pat} · ${var/old/new} · ${var:off:len} |
| 10 | `zsh-10-expansion-flags.html` | Parameter Expansion Flags | ${(U)var} / (L) · (s:,:) split · (j:,:) join · (f) lines · (o) / (O) sort · (u) unique · (P) indirect · nested ${${var#x}%y} |

## Group 4 — Arrays (11–12)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 11 | `zsh-11-arrays.html` | Arrays | arr=(a b c) · 1-based indexing · $arr[-1] · $arr[2,3] slices · += append · ${#arr} · ${arr[(i)x]} search · KSH_ARRAYS |
| 12 | `zsh-12-associative-arrays.html` | Associative Arrays | typeset -A · h[key]=val · ${(k)h} / ${(v)h} / ${(kv)h} · ${+h[key]} exists · unset 'h[key]' · for k v in ${(kv)h} |

## Group 5 — Globbing (13–14)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 13 | `zsh-13-globbing-basics.html` | Globbing Basics | * ? [...] · **/ recursive · ***/ follows symlinks · &lt;1-10> numeric ranges · {a,b} / {1..5} braces · ^ ~ # with EXTENDED_GLOB · NULL_GLOB |
| 14 | `zsh-14-glob-qualifiers-modifiers.html` | Glob Qualifiers &amp; Modifiers | (.) (/) (@) · (om[1]) newest · (Lk+100) size · (mh-1) mtime · (D) dotfiles · (N) · :h :t :r :e :a |

## Group 6 — Tests, Arithmetic & Control Flow (15–18)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 15 | `zsh-15-test-expressions.html` | Test Expressions | [[ ]] vs [ ] · -f -d -e · -z / -n · == pattern match · =~ with $match / $MATCH · -nt / -ot · &amp;&amp; / \|\| |
| 16 | `zsh-16-if-case-select.html` | if, case &amp; select | if / elif / else / fi · short form if [[ ]] { } · case / esac · a\|b) patterns · ;; ;&amp; ;\| · select / PS3 / $REPLY |
| 17 | `zsh-17-arithmetic.html` | Arithmetic | $(( )) · (( )) as a test · integer vs float division · ** power · ++ / += · 16#ff / [#16] bases · zmodload zsh/mathfunc |
| 18 | `zsh-18-loops.html` | Loops | for x in … · for x ($list) short form · for ((i=0; i&lt;n; i++)) · while / until · repeat N · break / continue N · for line in ${(f)"$(cmd)"} |

## Group 7 — Functions & Scripting (19–21)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 19 | `zsh-19-functions.html` | Functions | name() { } · function name { } · $1 / $@ · local · return vs printed output · anonymous () { } · autoload -Uz · $fpath |
| 20 | `zsh-20-scripts-errors-debugging.html` | Scripts, Errors &amp; Debugging | #!/usr/bin/env zsh · ERR_EXIT / ERR_RETURN · trap / TRAPEXIT · { } always { } · setopt XTRACE / zsh -x · zparseopts |
| 21 | `zsh-21-jobs-process-substitution.html` | Jobs &amp; Process Substitution | &amp; · jobs / fg / bg · disown / &amp;! · $(cmd) · &lt;(cmd) · =(cmd) temp file · wait · coproc |

## Group 8 — Interactive Customization (22–25)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 22 | `zsh-22-aliases-directory-navigation.html` | Aliases &amp; Directory Navigation | alias · alias -g global · alias -s suffix · AUTO_CD · AUTO_PUSHD / dirs -v · cd -&lt;Tab> · hash -d named dirs · cd old new |
| 23 | `zsh-23-prompt-hooks.html` | Prompt &amp; Hooks | PROMPT / RPROMPT · %n %m %~ %# · %F{color} / %B · %(?..) conditionals · PROMPT_SUBST · vcs_info · add-zsh-hook precmd / chpwd |
| 24 | `zsh-24-completion-system.html` | Completion System | autoload -Uz compinit &amp;&amp; compinit · zstyle ':completion:*' · menu select · case-insensitive matcher-list · compdef · _arguments · completion $fpath |
| 25 | `zsh-25-plugins-frameworks-performance.html` | Plugins, Frameworks &amp; Performance | Oh My Zsh · antidote / zinit · zsh-autosuggestions · zsh-syntax-highlighting · Powerlevel10k / Starship · zmodload zsh/zprof · zcompile |

## Group 9 — Quick Reference (26–27)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 26 | `zsh-26-quick-reference-core.html` | Quick Reference — Core Syntax | startup files · options · quoting · redirection · history · variables · expansion · arrays |
| 27 | `zsh-27-quick-reference-advanced.html` | Quick Reference — Advanced | glob qualifiers · modifiers · tests · arithmetic · loops · functions · prompt escapes · completion |
