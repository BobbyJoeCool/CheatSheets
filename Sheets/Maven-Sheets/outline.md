# Maven Reference Guide Outline (24 sheets)

## Metadata

- **Group it belongs to:** Java
- **Folder Directory:** `Sheets/Maven-Sheets/mvn-##-[slug].html`
- **Groups:** 8
- **Sheets:** 24
- **Drafted Date:** 2026-10-25
- **Verified-Finalized Date:**

## Basic Information

Apache Maven as a build tool for intermediate developers who already know Java and have opened a Maven project in an IDE. Targets Maven 3.9.x / 3.10.x (3.10.0 released 2026-09-27, runs on Java 8+) with `maven.compiler.release`, the Maven Wrapper, BOMs and pinned plugin versions as the default style. Maven 4 is still at release candidate (4.0.0-rc-7, 2026-09-24, Java 17+ to run), so it gets one sheet of its own plus short "Maven 4" notes where behavior changes. If 4.0.0 goes GA before the set is built, sheet 21 gets updated and the notes stay.

Scope: install and wrapper, the POM, dependencies, lifecycle and plugins, testing, multi-module builds, releasing, CI and troubleshooting. Built under a 25-sheet cap, ending with a two-sheet quick reference. Java sheet 086 (Maven) stays as the one-page primer inside the Java set and points here for depth; the Spring set covers `spring-boot-maven-plugin` usage beyond packaging.

## Differences in Layout from Basic Structure

- The standard language group template (Groups 2–13 of Outline_guide.md) does not apply. Groups follow how a Maven build is put together: setup → POM → dependencies → lifecycle and plugins → testing → multi-module and releasing → integration.
- Code blocks are XML (Prism `markup`) for `pom.xml`, `settings.xml` and `toolchains.xml`, `properties` for `maven-wrapper.properties`, and Bash for CLI commands.
- Three extra boxes, modeled on the Java set and described below: **Gradle Equivalent** and **Idiomatic Maven** on every sheet, and **Under the Hood** in Row 1 on the sheets listed in the table.
- Sheets 23–24 are quick-reference sheets with no Description, Mistakes or Tips boxes, and they skip all three extra boxes. Sheet 23 is dense tables; sheet 24 is a 2 × 3 grid of short XML snippets (POM fragments read better as code than as table cells).
- `mvn-cheatsheet.css` gives the sheet-number badge a Maven-red accent and adds `.section-gradle`, `.section-idiom` and `.section-hood` styles with their own accent colors, so none of them reads as part of Code Explained (same approach as the Java set's boxes).

### Gradle Equivalent box (every sheet, 01–22)

- `<section class="section-gradle" id="gradle">`, title **Gradle Equivalent**.
- 2–4 `note-item` lines, each mapping something on this sheet to its Gradle form, Maven first: `<scope>provided</scope>` → `compileOnly` · `<dependencyManagement>` → `platform()` · `mvn install` → `./gradlew publishToMavenLocal`.
- End with a pointer to the matching Gradle sheet (`See Gradle 09`). The table below lists the pointer for each sheet.
- When Gradle has no direct equivalent (profiles, the Maven 4 POM changes), say so in one line and name the nearest Gradle approach instead of forcing a match.
- Gradle snippets are Kotlin DSL, written inline in `<code>`. No full code blocks; this box is a translation table, not a second lesson.

| Maven sheet | Gradle sheet | Maven sheet | Gradle sheet |
|---|---|---|---|
| 01 | 01 | 12 | 10 |
| 02 | 02 | 13 | 01, 07 (task graph) |
| 03 | 03 | 14 | 06 |
| 04 | 04, 26 | 15 | 13, 14 |
| 05 | 03, 09 | 16 | 15 |
| 06 | 08 | 17 | 16 |
| 07 | 18 (convention plugins) | 18 | 06 (no direct sheet) |
| 08 | 08 (no profiles in Gradle) | 19 | 17 |
| 09 | 09 | 20 | 23 |
| 10 | 12 | 21 | 23 (Gradle Module Metadata) |
| 11 | 11, 12 | 22 | 25 |

### Idiomatic Maven box (every sheet, 01–22)

- `<section class="section-idiom" id="idiom">`, title **Idiomatic Maven**.
- 2–4 avoid/prefer pairs, same format as the Java set's Prefer / Avoid box: a small XML or Bash block with `<!-- avoid -->` / `<!-- prefer -->` (or `# avoid` / `# prefer`) comments, or `note-item` lines (`avoid` → `prefer`) when one-liners are enough.
- Every pair must be a real Maven idiom for this sheet's topic (`<source>`/`<target>` → `<release>` · unpinned plugins → versions in `<pluginManagement>` · `mvn install` in CI → `mvn verify` · `system` scope → install to a repository), never a restatement of the main code block or a Common Mistakes item.

### Under the Hood box (selected sheets)

- `<section class="section-hood" id="hood">`, title **Under the Hood**.
- 2–4 items on what Maven actually does when the sheet's code runs: which plugin goal a phase triggers, how the effective POM is merged, how resolution picks a version, what gets written to `~/.m2` or `target/`.
- Each item should change how someone writes or debugs a build. Skip trivia.
- If a sheet doesn't fit on one page, cut Under the Hood to 2 items first, then Idiomatic Maven, then Gradle Equivalent, before touching the main content.

### Placement

| Sheet has | Row 1 | col-2-2 (beside the code) |
|---|---|---|
| No Under the Hood box | Description · Notes | Code Explained, then Gradle Equivalent, then Idiomatic Maven |
| Under the Hood box | Description · Notes · Under the Hood (`col-1-3`) | Code Explained, then Gradle Equivalent, then Idiomatic Maven |

### Sheets with an Under the Hood box (12)

| # | Under the Hood content |
|---|---|
| 01 | `mvn` launcher → classworlds → Maven core → resolver → plugin mojos · plugins download on first use (why the first build is slow) |
| 04 | invoking a phase runs every earlier phase · `plugin:goal` runs only that goal · `-T` builds reactor modules in parallel, not steps inside one module · `.mvn/maven.config` and `jvm.config` read at startup |
| 07 | effective POM = Super POM + parent chain + active profiles, merged then interpolated · plugins merge by `groupId:artifactId`, not appended · `combine.children` / `combine.self` |
| 10 | mediation picks the nearest, then the first declared, never the highest · `optional`, `test` and `provided` dependencies don't propagate · a transitive dependency's scope comes from its parent's scope |
| 11 | BOM imports are merged when the model is built; the first import wins a tie · `dependencyManagement` also pins transitive versions |
| 12 | lookup order: local repo → mirror → repositories · `_remote.repositories` and `*.lastUpdated` files · SNAPSHOT update policy defaults to daily · `maven-metadata.xml` |
| 13 | packaging decides the default bindings (jar vs pom vs war) · phases are names, goals do the work · `clean` is its own lifecycle |
| 14 | each goal is a Mojo class · `@Parameter` fields receive the `<configuration>` XML · executions with the same id merge across inheritance · `default-compile` style execution ids |
| 15 | the compiler plugin runs `javac` in-process through `javax.tools` · change detection is coarse, so a stale `target/` can hide errors · resource filtering replaces `${}` during `process-resources` |
| 17 | Surefire forks a test JVM (`forkCount`, `reuseForks`) · `argLine` and the JaCoCo agent · Failsafe runs tests in `integration-test` but fails the build in `verify`, so `post-integration-test` cleanup still runs |
| 19 | the reactor sorts modules by their dependency graph, not `<modules>` order · `-am` adds upstream modules · in-build artifacts win over copies in `~/.m2` |
| 20 | `deploy` uploads the artifact, POM, checksums and `maven-metadata.xml` · SNAPSHOTs get timestamped unique versions on the remote · `install` only copies to `~/.m2` |

## Groups

### Group 1: Introduction & Setup (Sheets 01–04)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `mvn-01-introduction.html` | Introduction & How Maven Works | convention over configuration · POM · lifecycles & phases · plugins & goals · local vs remote repository · Maven vs Gradle |
| 02 | `mvn-02-install-wrapper.html` | Installing Maven & the Wrapper | SDKMAN / Homebrew · JAVA_HOME · mvn -v · mvnw / mvnw.cmd · .mvn/wrapper/maven-wrapper.properties · mvn wrapper:wrapper |
| 03 | `mvn-03-project-layout.html` | Project Layout & Archetypes | archetype:generate · maven-archetype-quickstart · src/main/java · src/test/java · src/main/resources · target/ · .mvn/ |
| 04 | `mvn-04-cli.html` | Running Maven from the CLI | phases vs plugin:goal · mvn clean install · -D properties · -P profiles · -o offline · -q / -X · -B batch mode · -T threads |

### Group 2: The POM (Sheets 05–08)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 05 | `mvn-05-pom-basics.html` | POM Basics & Coordinates | modelVersion · groupId · artifactId · version · packaging · SNAPSHOT vs release · name / description |
| 06 | `mvn-06-properties.html` | Properties & Interpolation | &lt;properties> · ${project.version} · ${env.NAME} · maven.compiler.release · project.build.sourceEncoding · -Dname=value · ${revision} |
| 07 | `mvn-07-parent-inheritance.html` | Parent POMs & Inheritance | &lt;parent> · relativePath · Super POM · what gets inherited · help:effective-pom · spring-boot-starter-parent |
| 08 | `mvn-08-profiles.html` | Build Profiles | &lt;profiles> · &lt;activation> (jdk, os, property, file) · activeByDefault · -P id / -P !id · help:active-profiles · profiles in settings.xml |

### Group 3: Dependencies (Sheets 09–12)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 09 | `mvn-09-dependencies-scopes.html` | Declaring Dependencies & Scopes | &lt;dependency> · compile · provided · runtime · test · system (avoid) · &lt;optional> · classifier / type |
| 10 | `mvn-10-transitive-conflicts.html` | Transitive Dependencies & Conflicts | nearest-wins mediation · &lt;exclusions> · dependency:tree · -Dverbose · dependency:analyze · enforcer dependencyConvergence |
| 11 | `mvn-11-dependency-management-boms.html` | Dependency Management & BOMs | &lt;dependencyManagement> · version alignment · scope import · type pom · junit-bom · spring-boot-dependencies · versions:display-dependency-updates |
| 12 | `mvn-12-repositories-settings.html` | Repositories & settings.xml | Maven Central · ~/.m2/repository · &lt;repositories> · &lt;mirrors> · &lt;servers> credentials · encrypted passwords · .mvn/maven.config |

### Group 4: Lifecycle & Plugins (Sheets 13–16)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 13 | `mvn-13-lifecycle-phases.html` | Build Lifecycles & Phases | clean / default / site · validate → compile → test → package → verify → install → deploy · bindings by packaging · install vs verify |
| 14 | `mvn-14-configuring-plugins.html` | Configuring Plugins | &lt;build>&lt;plugins> · &lt;pluginManagement> · &lt;configuration> · &lt;executions> · binding a goal to a phase · pinning versions · help:describe |
| 15 | `mvn-15-compiler-resources.html` | Compiler & Resources | maven-compiler-plugin · &lt;release> · compilerArgs -Xlint · annotationProcessorPaths · resource filtering · toolchains.xml |
| 16 | `mvn-16-packaging-jars.html` | Packaging & Running JARs | maven-jar-plugin · manifest Main-Class · exec:java · maven-shade-plugin (uber JAR) · maven-assembly-plugin · war packaging · source / javadoc JARs |

### Group 5: Testing & Quality (Sheets 17–18)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 17 | `mvn-17-surefire-failsafe.html` | Testing with Surefire & Failsafe | maven-surefire-plugin · JUnit 5 · -Dtest=Class#method · -DskipTests vs -Dmaven.test.skip · failsafe *IT classes · integration-test / verify · test reports |
| 18 | `mvn-18-quality-enforcer.html` | Code Quality & Enforcer | maven-enforcer-plugin · requireMavenVersion · requireJavaVersion · JaCoCo coverage · Spotless / Checkstyle · versions-maven-plugin |

Sheet 17 covers the build side only. JUnit and Mockito themselves are Java sheets 102–104.

### Group 6: Multi-Module & Releasing (Sheets 19–20)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 19 | `mvn-19-multi-module.html` | Multi-Module Projects | &lt;modules> · aggregator vs parent · packaging pom · reactor build order · -pl :app -am / -amd · -rf resume · CI-friendly ${revision} |
| 20 | `mvn-20-deploy-release.html` | Deploying & Releasing | mvn deploy · &lt;distributionManagement> · snapshot vs release repositories · Central Portal publishing · GPG signing · versions:set · maven-release-plugin |

### Group 7: Maven 4, CI & Troubleshooting (Sheets 21–22)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 21 | `mvn-21-maven-4.html` | What's Changing in Maven 4 | Java 17 to run · modelVersion 4.1.0 · build POM vs consumer POM · &lt;subprojects> · inferred parent version · mvnup check / apply |
| 22 | `mvn-22-ci-troubleshooting.html` | CI & Troubleshooting | actions/setup-java cache: maven · -B -ntp · -U force updates · -e / -X · dependency:purge-local-repository · build cache extension · mvnd |

### Group 8: Quick Reference (Sheets 23–24)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 23 | `mvn-23-quickref-cli.html` | Quick Reference: CLI & Lifecycle | common commands · CLI flags · lifecycle phases · plugin:goal cheat list · reactor flags · wrapper commands |
| 24 | `mvn-24-quickref-pom.html` | Quick Reference: POM Snippets | minimal pom.xml · properties block · dependency scopes · BOM import · plugin with executions · settings.xml mirror & server |

No explanation boxes. Sheet 23 covers what you type at the terminal; sheet 24 covers what you write in the POM and settings files.
