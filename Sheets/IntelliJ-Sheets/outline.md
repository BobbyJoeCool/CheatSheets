# IntelliJ IDEA Reference Guide Outline (32 sheets)

## Metadata

- **Group it belongs to:** Java
- **Index position:** 3rd card in the Java section, right after Maven (order: Java · Maven · IntelliJ IDEA · …). Maven moves up to 2nd when this set is added.
- **Folder Directory:** `Sheets/IntelliJ-Sheets/idea-##-[slug].html`
- **PDF Name:** `IntelliJ IDEA Reference Guide.pdf`
- **Groups:** 9
- **Sheets:** 32
- **Drafted Date:** 2026-11-05
- **Verified-Finalized Date:** 2026-11-10

## Basic Information

A working reference for IntelliJ IDEA, aimed at intermediate Java developers who already open projects in it but still reach for the mouse. It covers projects and SDKs, editing and code generation, navigation, inspections and refactoring, run configurations, debugging and profiling, testing, Maven and Gradle, framework support (Spring, Jakarta EE), the HTTP Client and database tools, Git, and the built-in AI features.

Targets IntelliJ IDEA 2026.2.x, the single distribution that replaced the separate Community and Ultimate downloads: the core IDE is free and some features need a subscription. Sheets that rely on subscription features get a small tag (below). Shortcuts are given for the default macOS and Windows/Linux keymaps on every sheet. Scope limits: Java-first, with Kotlin only where the IDE treats it differently; no plugin development; other JetBrains IDEs (PyCharm, WebStorm) are mentioned once on sheet 01 since most of the set applies to them too.

Kept small (32 sheets) with a 2-page quick reference at the end, parallel to the VS Code set.

## Differences in Layout from Basic Structure

- **Extra boxes:** **Where in Settings** (`id="settings"`) and **In VS Code** (`id="vscode"`) in Row 2 under Code Explained on 01–30 · **Plugin Pick** (`id="plugin"`) in Row 1 as a third column on selected sheets. None on the quick references (31–32). Details below.
- Most sheets are about the IDE rather than code. The Code block holds a shortcut table, a Java snippet showing what an action produces (before/after for refactorings and generators), a `.http` file, or a run configuration. Sheets with nothing to put in a code block use the GitHub set's **Steps | Where to Find It** layout in place of Code | Code Explained.
- Shortcuts are written inline as `⌘B` / `Ctrl+B` (macOS first) everywhere, never in a box. Action names are given alongside so readers on a custom keymap can use Find Action (`⇧⌘A` / `Ctrl+Shift+A`).
- A **Subscription** tag in the sheet header (`<span class="tag-sub">`) marks sheets whose main feature needs a paid subscription. Which sheets get it is checked against JetBrains' single-distribution feature list at build time; likely candidates are 22, 25 and 26. Built with the tag on 22, 25, 26 and 30.
- Groups replace the standard language template: setup → editing → navigation → analysis and refactoring → run, debug and test → build tools and frameworks → version control → AI and remote → quick reference.
- `idea-cheatsheet.css` adds `.section-settings`, `.section-vscode`, `.section-plugin` and `.tag-sub` styles with their own accent colors.

### Where in Settings box (`id="settings"`, 01–30)

- `<section class="section-notes section-settings" id="settings">`, title **Where in Settings**.
- 2–4 settings behind the sheet's features, each as a path from Settings (`⌘,` / `Ctrl+Alt+S`) plus a one-line note: `Editor › General › Auto Import › Optimize imports on the fly` · `Tools › Actions on Save › Reformat code`.
- Note when a setting is per-project (stored in `.idea/`) vs IDE-wide, since that decides whether it gets committed.

### In VS Code box (`id="vscode"`, 01–30)

- `<section class="section-notes section-vscode" id="vscode">`, title **In VS Code**.
- 2–3 lines giving the VS Code equivalent of this sheet's main actions (shortcut, command or extension), or saying plainly that there isn't one. Mirrors the VS Code set's In Other Editors box so the two sets cross-reference.
- End with a pointer to the matching VS Code sheet (`See VS Code 13`).

### Plugin Pick box (`id="plugin"`, Row 1, selected sheets)

- `<section class="section-notes section-plugin" id="plugin">`, title **Plugin Pick**, Row 1 as a third column (`col-1-3`).
- One or two widely used plugins for the sheet's area: name, vendor, and one line on what it adds that the IDE doesn't do on its own. Skip plugins whose features are now built in.

| # | Plugin Pick content |
|---|---|
| 05 | Key Promoter X (learn shortcuts) · a popular theme |
| 07 | String Manipulation |
| 09 | Lombok (bundled; how to enable annotation processing) |
| 10 | CheckStyle-IDEA · Google Java Format |
| 13 | Rainbow Brackets |
| 14 | SonarQube for IDE |
| 21 | JUnit 5 Mockito Code Generator |
| 22 | VisualVM Launcher (the built-in profiler covers most needs) |
| 27 | GitToolBox |
| 29 | Claude Code (JetBrains plugin) · GitHub Copilot |

## Groups

### Group 1: Setup & Interface (Sheets 01–05)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `idea-01-introduction-install.html` | Introduction & Installation | single distribution (free core + subscription features) · Toolbox App · `idea` command-line launcher · other JetBrains IDEs · EAP builds |
| 02 | `idea-02-projects-modules-sdks.html` | Projects, Modules & SDKs | open vs import · Project Structure `⌘;` · modules · JDK download · language level · `.idea/` folder and what to commit · `.iml` files |
| 03 | `idea-03-ui-tour.html` | The Interface | new UI · main toolbar · tool windows (`⌘1` Project, `⌘9` Git) · Search Everywhere `⇧⇧` · Find Action `⇧⌘A` · editor tabs · Distraction-Free mode |
| 04 | `idea-04-settings-keymaps.html` | Settings & Keymaps | Settings `⌘,` · IDE vs project settings · keymap presets · assign a shortcut · Backup and Sync · export / import settings · Registry (sparingly) |
| 05 | `idea-05-plugins-themes.html` | Plugins, Themes & Appearance | Plugins `Marketplace` / `Installed` · bundled plugins · disable unused plugins · themes · editor fonts & ligatures · Presentation / Zoom mode |

### Group 2: Editing & Code Generation (Sheets 06–10)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 06 | `idea-06-code-completion.html` | Code Completion | basic `⌃Space` · type-matching `⌃⇧Space` · postfix completion (`.var`, `.for`, `.nn`) · Complete Current Statement `⇧⌘⏎` · full-line completion · parameter info `⌘P` |
| 07 | `idea-07-live-templates.html` | Live Templates & Surround With | `psvm` / `main` · `sout` · `fori` / `iter` · Insert Live Template `⌘J` · Surround With `⌥⌘T` · custom templates & variables |
| 08 | `idea-08-editing-shortcuts.html` | Editing Shortcuts & Multi-Caret | duplicate line `⌘D` · delete line `⌘⌫` · move statement `⇧⌘↑` · Extend Selection `⌥↑` · multiple carets `⌃G` · column selection · comment `⌘/` · paste from history `⇧⌘V` |
| 09 | `idea-09-generate-code.html` | Generating Code | Generate `⌘N` · constructors · getters / setters · `equals()` / `hashCode()` / `toString()` · override / implement `⌃O` / `⌃I` · convert class to record · Lombok |
| 10 | `idea-10-formatting-code-style.html` | Formatting, Imports & Code Style | Reformat Code `⌥⌘L` · Optimize Imports `⌃⌥O` · code style schemes · `.editorconfig` · Actions on Save · import on demand thresholds |

Sheet 09 points to Jakarta EE sheet 05 (JavaBeans conventions) for what the getter/setter generators should produce.

### Group 3: Navigation & Search (Sheets 11–13)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 11 | `idea-11-code-navigation.html` | Code Navigation | Go to Declaration `⌘B` · Implementations `⌥⌘B` · Super Method `⌘U` · Type Hierarchy `⌃H` · Call Hierarchy `⌃⌥H` · File Structure `⌘F12` · Recent Files `⌘E` · Back / Forward |
| 12 | `idea-12-find-usages-search.html` | Find Usages & Search | Find Usages `⌥F7` · Show Usages `⌥⌘F7` · Find in Files `⇧⌘F` · Replace in Files · regex · scopes · Go to Class / File / Symbol |
| 13 | `idea-13-bookmarks-history-todo.html` | Bookmarks, Local History & TODO | bookmarks `F3` / mnemonic `⌥F3` · Local History (restore deleted code) · TODO tool window & patterns · Recent Locations `⇧⌘E` · scratch files `⇧⌘N` |

### Group 4: Code Analysis & Refactoring (Sheets 14–17)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 14 | `idea-14-inspections-intentions.html` | Inspections & Intentions | Show Context Actions `⌥⏎` · inspection severities · inspection profiles · Problems tool window · Inspect Code · suppress with `@SuppressWarnings` / comments · next error `F2` |
| 15 | `idea-15-rename-extract.html` | Rename & Extract Refactorings | Rename `⇧F6` · Extract Variable `⌥⌘V` · Method `⌥⌘M` · Constant `⌥⌘C` · Field `⌥⌘F` · Parameter `⌥⌘P` · Refactor This `⌃T` |
| 16 | `idea-16-signature-move-inline.html` | Change Signature, Move & Inline | Change Signature `⌘F6` · Move `F6` · Inline `⌥⌘N` · Safe Delete `⌘⌫` · Pull Members Up / Push Down · introduce parameter object · refactoring preview |
| 17 | `idea-17-structural-search-migration.html` | Structural Search & Migrations | Structural Search / Replace · search templates · Migrate (javax → jakarta) · Java language-level upgrades · inspections with bulk Fix All |

Sheet 17's javax → jakarta migration points to Jakarta EE sheet 02.

### Group 5: Run, Debug, Test & Profile (Sheets 18–22)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 18 | `idea-18-run-configurations.html` | Run Configurations | Run `⌃R` / Debug `⌃D` · Run Anything `⌃⌃` · Application config · program args / VM options / env vars · before-launch tasks · store as project file · Services tool window |
| 19 | `idea-19-debugger-basics.html` | Debugger Basics | breakpoints `⌘F8` · Step Over `F8` / Into `F7` / Out `⇧F8` · Run to Cursor `⌥F9` · Resume `⌥⌘R` · Variables · Watches · Frames · inline values |
| 20 | `idea-20-advanced-debugging.html` | Advanced Debugging | conditional & logging breakpoints · exception breakpoints · Evaluate Expression `⌥F8` · Java Stream Debugger · HotSwap / reload changed classes · drop frame · remote JVM debug (`-agentlib:jdwp`) |
| 21 | `idea-21-testing-coverage.html` | Testing & Coverage | Create / Go to Test `⇧⌘T` · run from gutter · rerun failed · test runner tree · run with coverage · JUnit 5 / TestNG · Testcontainers support |
| 22 | `idea-22-profiler-jvm-tools.html` | Profiler & JVM Tools | built-in profiler (CPU & allocation flame graphs) · attach to running JVM · memory snapshots · thread dumps · inline CPU hints · Java Flight Recorder |

Sheet 21 points to the JUnit set for JUnit itself.

### Group 6: Build Tools & Frameworks (Sheets 23–26)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 23 | `idea-23-maven.html` | Maven in IntelliJ | Maven tool window · reload project · run goals & lifecycle · profiles checkboxes · dependency analyzer · offline mode · Maven wrapper settings |
| 24 | `idea-24-gradle.html` | Gradle in IntelliJ | Gradle tool window · sync · build & run using Gradle vs IntelliJ · tasks · Gradle JVM · dependency analyzer · Kotlin DSL support |
| 25 | `idea-25-spring-jakarta-support.html` | Spring & Jakarta EE Support | Spring bean navigation & gutter icons · Endpoints tool window · `application.properties` completion · Jakarta EE / CDI injection checks · app server run configs (WildFly, Tomcat) · JPA Buddy-style entity tools |
| 26 | `idea-26-http-client-database.html` | HTTP Client & Database Tools | `.http` / `.rest` files · `###` requests · environments (`http-client.env.json`) · response handlers · Database tool window · data sources · SQL console · query results |

Sheets 23–24 cover the IDE side only and point to the Maven and Gradle sets. Sheet 25 points to the Spring and Jakarta EE sets; sheet 26 to the HTTP & REST APIs and SQL sets.

### Group 7: Version Control (Sheets 27–28)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 27 | `idea-27-git-basics.html` | Git in IntelliJ | Commit `⌘K` · Push `⇧⌘K` · Update Project `⌘T` · changelists · partial commits · branches popup · shelve vs stash · VCS Operations `⌃V` |
| 28 | `idea-28-diff-merge-history.html` | Diff, Merge & History | diff viewer `⌘D` · three-way merge · resolve conflicts · Annotate with Git Blame · file / selection history · interactive rebase · cherry-pick · pull requests |

Sheet 28 points to the Git and GitHub sets.

### Group 8: AI & Remote Development (Sheets 29–30)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 29 | `idea-29-ai-assistant-agents.html` | AI Assistant & Agents | AI chat · inline AI prompts · code completion with AI · Junie agent · third-party agents in AI chat · MCP servers · commit message generation · project rules / guidelines |
| 30 | `idea-30-remote-collaboration.html` | Remote Development & Collaboration | remote development over SSH · Dev Containers · WSL · Code With Me · shared run configurations · project settings to commit |

Sheet 29 covers the IDE side only; the Agentic Coding set covers prompting, workflows and the tools themselves. AI feature names get rechecked at build time since they change between releases.

### Group 9: Quick Reference (Sheets 31–32)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 31 | `idea-31-quickref-shortcuts.html` | Quick Reference: Keyboard Shortcuts | macOS and Windows / Linux columns · general · editing · completion · navigation · search · refactoring · run & debug · VCS |
| 32 | `idea-32-quickref-actions-files.html` | Quick Reference: Actions, Templates & Files | must-know Find Action names · built-in live templates & postfix completions · `.idea/` files (what to commit vs ignore) · `.http` syntax · VM option cheat list |

No explanation boxes. Dense tables; every row points back to the sheet with details.
