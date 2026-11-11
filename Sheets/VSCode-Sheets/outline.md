# VS Code Reference Guide Outline (29 sheets)

## Metadata

- **Group it belongs to:** Concepts & Tools
- **Folder Directory:** `Sheets/VSCode-Sheets/vsc-##-[slug].html`
- **PDF Name:** `VS Code Reference Guide.pdf`
- **Groups:** 8
- **Sheets:** 29
- **Drafted Date:** 2026-11-03
- **Verified-Finalized Date:**

## Basic Information

A working reference for Visual Studio Code, aimed at intermediate developers who already use it daily but want to stop reaching for the mouse. It covers the workbench, editing and navigation, code intelligence, the terminal, debugging (`launch.json`), tasks, the Testing view, source control, extensions, workspaces, remote development and the built-in AI features (Copilot chat and agent mode, MCP servers).

Targets the current stable VS Code (late 2026). Shortcuts are given for macOS and Windows/Linux on every sheet. Scope limits: no extension development, and language-specific setup stays brief because each language set covers its own tooling. VS Code forks (Cursor, Windsurf, VSCodium) are mentioned once on sheet 01; almost everything here applies to them too.

Kept small (29 sheets) with a 2-page quick reference at the end.

## Differences in Layout from Basic Structure

- **Extra boxes:** **settings.json** (`id="settings"`) and **In Other Editors** (`id="editors"`) in Row 2 under Code Explained on 01–27 · **Extension Pick** (`id="ext"`) in Row 1 as a third column on selected sheets. None on the quick references (28–29). Details below.
- Most sheets are about the editor rather than code. The Code block holds a shortcut table, a `settings.json` / `launch.json` / `tasks.json` snippet, or a `code` CLI command. Sheets with nothing to put in a code block use the GitHub set's **Steps | Where to Find It** layout in place of Code | Code Explained.
- Shortcuts are written inline as `⌘D` / `Ctrl+D` (macOS first) everywhere, never in a box.
- Groups replace the standard language template: setup → editing → code intelligence → running and debugging → source control → extensions and workspaces → AI → quick reference.
- `vsc-cheatsheet.css` adds `.section-settings`, `.section-editors` and `.section-ext` styles with their own accent colors.

### settings.json box (`id="settings"`, 01–27)

- `<section class="section-notes section-settings" id="settings">`, title **settings.json**.
- 2–4 setting keys behind the sheet's features, ready to paste, each with a one-line comment: `"editor.formatOnSave": true` · `"files.autoSave": "onFocusChange"` · `"terminal.integrated.defaultProfile.osx": "zsh"`.
- On sheets about a different file (`launch.json`, `tasks.json`, `devcontainer.json`, `mcp.json`), the box gives the related user settings instead.

### In Other Editors box (`id="editors"`, 01–27)

- `<section class="section-notes section-editors" id="editors">`, title **In Other Editors**.
- Exactly two lines, always in this order: **JetBrains** (IntelliJ / PyCharm / WebStorm) · **Vim / Neovim**. Each names the equivalent shortcut, command or plugin, or says plainly that there isn't one.

### Extension Pick box (`id="ext"`, Row 1, selected sheets)

- `<section class="section-notes section-ext" id="ext">`, title **Extension Pick**, Row 1 as a third column (`col-1-3`).
- One or two widely used extensions for the sheet's area: name, publisher, and one line on what it adds that VS Code doesn't do on its own.

| # | Extension Pick content |
|---|---|
| 05 | Material Icon Theme · a high-contrast or popular color theme |
| 09 | Todo Tree (find TODO/FIXME across the workspace) |
| 10 | Auto Rename Tag · language snippet packs |
| 12 | Error Lens (inline diagnostics) · language packs from the language sets |
| 14 | Prettier · ESLint · Ruff |
| 16 | Python Debugger · Debugger for Java · JavaScript debugger (built in) |
| 19 | Python · Vitest · Test Runner for Java · Playwright Test |
| 20 | GitLens · Git Graph |
| 22 | GitHub Pull Requests |
| 23 | EditorConfig · Code Spell Checker |
| 25 | Remote Development pack · Dev Containers |
| 27 | Claude Code for VS Code · GitHub Copilot Chat |

## Groups

### Group 1: Setup & Interface (Sheets 01–05)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `vsc-01-introduction-install.html` | Introduction & Installation | Stable vs Insiders · `code` CLI on PATH · `code .` · `code -d` · `code -g file:line` · VS Code forks |
| 02 | `vsc-02-workbench.html` | The Workbench Layout | Activity Bar · Primary / Secondary Side Bar · Panel · Status Bar · editor groups · Zen Mode · toggling views |
| 03 | `vsc-03-command-palette-quick-open.html` | Command Palette & Quick Open | ⇧⌘P / Ctrl+Shift+P · ⌘P / Ctrl+P · `>` `@` `:` `#` `?` prefixes · recent files · keybinding lookup |
| 04 | `vsc-04-settings.html` | Settings | Settings editor vs `settings.json` · User / Workspace / Folder scope · `[python]` language overrides · `@modified` · Settings Sync |
| 05 | `vsc-05-profiles-themes.html` | Profiles, Themes & Keybindings | profiles per language / task · export / import profile · color & icon themes · fonts & ligatures · `keybindings.json` · `when` clauses |

### Group 2: Editing & Navigation (Sheets 06–11)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 06 | `vsc-06-multi-cursor-selection.html` | Multi-Cursor & Selection | ⌥Click / Alt+Click · ⌘D / Ctrl+D · ⇧⌘L select all · column selection · expand / shrink selection · undo cursor |
| 07 | `vsc-07-line-editing.html` | Line Editing Shortcuts | move line ⌥↑ · copy line ⇧⌥↓ · delete line · toggle comment ⌘/ · indent / outdent · join lines · transform case |
| 08 | `vsc-08-code-navigation.html` | Code Navigation | Go to Definition F12 · Peek ⌥F12 · Find All References · Go to Symbol ⇧⌘O / ⌘T · breadcrumbs · Go Back / Forward · Go to Line |
| 09 | `vsc-09-search-replace.html` | Search & Replace | find / replace in file · Search view ⇧⌘F · regex & capture groups · files to include / exclude · preserve case · Search Editor |
| 10 | `vsc-10-snippets-emmet.html` | Snippets & Emmet | user snippets JSON · `prefix` / `body` · `$1` tab stops · `${1:placeholder}` · snippet variables · Emmet abbreviations |
| 11 | `vsc-11-editor-layout-folding.html` | Split Editors, Folding & View Options | split right ⌘\\ · editor groups · preview vs pinned tabs · fold / unfold regions · sticky scroll · word wrap ⌥Z · minimap |

### Group 3: Code Intelligence (Sheets 12–14)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 12 | `vsc-12-intellisense.html` | IntelliSense & Language Servers | trigger suggest ⌃Space · parameter hints · hover · inlay hints · language servers (LSP) · Problems panel ⇧⌘M |
| 13 | `vsc-13-refactoring-code-actions.html` | Refactoring & Code Actions | Rename Symbol F2 · Quick Fix ⌘. · extract function / variable · organize imports · source actions · refactor preview |
| 14 | `vsc-14-formatting-linting.html` | Formatting & Linting | Format Document ⇧⌥F · `editor.formatOnSave` · `editor.defaultFormatter` · `codeActionsOnSave` · Prettier / ESLint / Ruff · `.editorconfig` |

### Group 4: Running, Debugging & Testing (Sheets 15–19)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 15 | `vsc-15-integrated-terminal.html` | Integrated Terminal | toggle ⌃\` · new / split terminal · terminal profiles · shell integration · run selected text · terminal links · move to editor area |
| 16 | `vsc-16-debugging-basics.html` | Debugging Basics | breakpoints F9 · conditional breakpoints · logpoints · step over / into / out · Variables · Watch · Call Stack · Debug Console |
| 17 | `vsc-17-launch-json.html` | launch.json Configurations | `configurations` · `launch` vs `attach` · `program` · `args` · `env` / `envFile` · `${workspaceFolder}` variables · `preLaunchTask` · compounds |
| 18 | `vsc-18-tasks.html` | Tasks | `tasks.json` · `shell` / `process` tasks · build & test groups · ⇧⌘B · `dependsOn` · problem matchers · Run Task |
| 19 | `vsc-19-testing-view.html` | The Testing View | Test Explorer · run / debug from the gutter · test output peek · rerun failed · coverage view · continuous run |

Sheet 19 points to the pytest, Jest/Vitest, JUnit and Playwright sets for each framework's own setup.

### Group 5: Source Control (Sheets 20–22)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 20 | `vsc-20-git-in-vscode.html` | Git in VS Code | Source Control view ⌃⇧G · stage hunks / lines · commit · branch picker · sync / pull / push · gutter indicators · Timeline view |
| 21 | `vsc-21-diff-merge-editor.html` | Diff & Merge Editor | compare files · inline vs side-by-side diff · `code -d` · 3-way merge editor · accept incoming / current · resolve conflicts |
| 22 | `vsc-22-github-integration.html` | GitHub Integration | publish to GitHub · Pull Requests view · review & comment · check out a PR · Issues · github.dev (`.` key) |

### Group 6: Extensions, Workspaces & Remote (Sheets 23–25)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 23 | `vsc-23-extensions.html` | Managing Extensions | Extensions view ⇧⌘X · `code --install-extension` · `.vscode/extensions.json` recommendations · disable per workspace · Extension Bisect · extension settings |
| 24 | `vsc-24-workspaces.html` | Workspaces & Multi-Root | folder vs workspace · `.code-workspace` file · multi-root folders · workspace settings · Workspace Trust · `.vscode/` folder contents |
| 25 | `vsc-25-remote-development.html` | Remote Development | Remote - SSH · WSL · Dev Containers · `devcontainer.json` · Codespaces · Remote Tunnels · port forwarding |

### Group 7: AI in the Editor (Sheets 26–27)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 26 | `vsc-26-copilot-chat.html` | Copilot Completions & Chat | inline suggestions · next edit suggestions · Chat view ⌃⌘I · inline chat ⌘I · ask / edit / agent modes · `#` context · `.github/copilot-instructions.md` |
| 27 | `vsc-27-agents-mcp.html` | Agent Mode, MCP & Other AI Tools | agent mode tools · tool approval · `.vscode/mcp.json` · MCP servers · prompt files · Claude Code extension · other AI extensions |

These two sheets cover the editor side only. The Agentic Coding set covers prompting, workflows and the tools themselves.

### Group 8: Quick Reference (Sheets 28–29)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 28 | `vsc-28-quick-ref-shortcuts.html` | Quick Reference — Keyboard Shortcuts | macOS and Windows / Linux columns · general · editing · multi-cursor · navigation · search · debug · terminal |
| 29 | `vsc-29-quick-ref-settings-cli.html` | Quick Reference — Settings, CLI & Files | top settings keys · `code` CLI flags · `.vscode/` files (`settings` · `launch` · `tasks` · `extensions` · `mcp`) · variables reference |

Dense tables, no explanations; every row points back to the sheet with details.
