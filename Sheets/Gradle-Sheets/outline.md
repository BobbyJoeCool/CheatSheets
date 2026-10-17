# Gradle Reference Guide Outline (27 sheets)

## Metadata

- **Group it belongs to:** Full Stack
- **Folder Directory:** `Sheets/Gradle-Sheets/gradle-##-[slug].html`
- **Groups:** 8
- **Sheets:** 27
- **Drafted Date:** 2026-10-16
- **Verified-Finalized Date:**

## Basic Information

Gradle as a build tool for intermediate developers who already know Java or Kotlin and have built a project from an IDE or with Maven. Targets Gradle 9.x (9.8, released 2026-09-24): Java 17+ to run Gradle, Kotlin DSL (`build.gradle.kts`) as the default, version catalogs, toolchains, and the configuration cache as the preferred execution mode. Groovy DSL appears as a side-by-side comparison on sheet 05 and as short "Groovy" notes where the syntax differs in a way that trips people up.

Scope: the wrapper and CLI, build scripts, tasks, dependencies, JVM builds and tests, multi-project builds, performance, custom tasks, publishing and CI. Framework plugins (Spring Boot, Kotlin, Android) get one shared sheet; Android build specifics stay in the React Native set and any future Android set. Kept short on purpose, ending with a two-sheet quick reference.

## Differences in Layout from Basic Structure

- The standard language group template (Groups 2–13 of Outline_guide.md) does not apply. Groups follow how a Gradle build is put together: setup → build scripts → dependencies → JVM builds → multi-project → performance and custom logic → integration.
- Code blocks are Kotlin DSL (Prism `kotlin`), with TOML for version catalogs, `properties` for `gradle.properties`, and Bash for CLI commands. Sheet 05 stacks Kotlin and Groovy versions of the same script in two code rows.
- Sheets 26–27 are quick-reference sheets with no Description, Mistakes or Tips boxes. Sheet 26 is dense tables; sheet 27 is a 2 × 3 grid of short code blocks (script snippets read better as code than as table cells).
- `gradle-cheatsheet.css` gives the sheet-number badge a Gradle-teal accent; everything else uses the shared styles.

## Groups

### Group 1: Introduction & Setup (Sheets 01–04)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `gradle-01-introduction.html` | Introduction & How Gradle Works | build tool · tasks & task graph · initialization / configuration / execution phases · daemon · incremental builds · Gradle vs Maven |
| 02 | `gradle-02-install-wrapper.html` | Installing Gradle & the Wrapper | gradlew / gradlew.bat · gradle-wrapper.properties · gradle wrapper --gradle-version · distributionUrl · SDKMAN / Homebrew · Java 17+ to run |
| 03 | `gradle-03-project-structure.html` | Project Structure & gradle init | gradle init · settings.gradle.kts · build.gradle.kts · gradle.properties · gradle/libs.versions.toml · src/main · src/test · .gradle/ & build/ |
| 04 | `gradle-04-cli-running-tasks.html` | Running Tasks from the CLI | ./gradlew build · tasks --all · task abbreviations · -x exclude · --continue · --dry-run · :sub:task paths · --rerun-tasks |

### Group 2: Build Scripts & Tasks (Sheets 05–08)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 05 | `gradle-05-kotlin-vs-groovy-dsl.html` | Kotlin DSL vs Groovy DSL | .gradle.kts vs .gradle · type-safe accessors · quotes & parentheses · `=` assignment · named arguments · migrating Groovy to Kotlin |
| 06 | `gradle-06-plugins.html` | Applying Plugins | plugins { } block · id("java") · core vs community plugins · version · apply false · alias(libs.plugins.x) · pluginManagement |
| 07 | `gradle-07-tasks-basics.html` | Tasks: Registering & Configuring | tasks.register · tasks.named · doFirst / doLast · dependsOn · finalizedBy · mustRunAfter · group & description · lazy vs eager (create) |
| 08 | `gradle-08-properties-providers.html` | Properties & Providers | Property&lt;T> · Provider · .set() / .get() · providers.gradleProperty · -Pname=value · ext / extra · environment variables · lazy wiring |

### Group 3: Dependencies (Sheets 09–12)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 09 | `gradle-09-declaring-dependencies.html` | Declaring Dependencies & Configurations | implementation · api (java-library) · compileOnly · runtimeOnly · testImplementation · project(":lib") · group:name:version |
| 10 | `gradle-10-repositories.html` | Repositories | mavenCentral() · google() · maven { url } · mavenLocal() · credentials · dependencyResolutionManagement · repository content filtering |
| 11 | `gradle-11-version-catalogs.html` | Version Catalogs | gradle/libs.versions.toml · [versions] · [libraries] · [bundles] · [plugins] · libs.x.y accessors · version.ref |
| 12 | `gradle-12-conflicts-platforms.html` | Conflicts, Constraints & Platforms | highest-version wins · constraints { } · platform() / BOMs · enforcedPlatform · exclude · strictly / require / prefer · dependency locking |

### Group 4: Java & JVM Builds (Sheets 13–16)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 13 | `gradle-13-java-plugin-source-sets.html` | Java Plugin & Source Sets | java / java-library plugins · sourceSets · main / test · resources · compileJava · JavaCompile options · -Xlint |
| 14 | `gradle-14-toolchains.html` | Java Toolchains | java { toolchain { } } · JavaLanguageVersion.of(21) · vendor · foojay resolver plugin · auto-provisioning · daemon JVM criteria |
| 15 | `gradle-15-application-jars.html` | Application Plugin & JARs | application plugin · mainClass · ./gradlew run · jar task · manifest attributes · distZip / installDist · fat JARs (Shadow plugin) |
| 16 | `gradle-16-testing.html` | Testing | test task · useJUnitPlatform() · testing.suites (jvm-test-suite) · --tests filter · testLogging · maxParallelForks · test reports |

### Group 5: Multi-Project Builds (Sheets 17–19)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 17 | `gradle-17-multi-project.html` | Multi-Project Builds | include(":app", ":lib") · rootProject.name · project(":lib") dependency · subproject layout · :app:build · avoid allprojects / subprojects |
| 18 | `gradle-18-convention-plugins.html` | Convention Plugins (build-logic) | buildSrc · build-logic included build · kotlin-dsl plugin · precompiled script plugins · java-conventions.gradle.kts · sharing config |
| 19 | `gradle-19-composite-builds.html` | Composite Builds | includeBuild · substituting a library with local source · pluginManagement includeBuild · --include-build · composite vs multi-project |

### Group 6: Performance & Custom Logic (Sheets 20–23)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 20 | `gradle-20-build-cache-config-cache.html` | Build Cache & Configuration Cache | --build-cache · org.gradle.caching · --configuration-cache · org.gradle.configuration-cache · problems report · up-to-date vs FROM-CACHE |
| 21 | `gradle-21-daemon-tuning.html` | Daemon & Build Tuning | org.gradle.daemon · org.gradle.jvmargs · org.gradle.parallel · --stop / --status · offline mode · build scans (--scan) · --profile |
| 22 | `gradle-22-custom-tasks.html` | Writing Custom Tasks | abstract class : DefaultTask() · @TaskAction · @Input / @InputFile / @OutputDirectory · @get: annotations · incremental tasks · registering with config |
| 23 | `gradle-23-publishing.html` | Publishing Libraries | maven-publish · publications { create&lt;MavenPublication> } · withSourcesJar / withJavadocJar · publishToMavenLocal · repository credentials · signing |

### Group 7: Integration & Troubleshooting (Sheets 24–25)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 24 | `gradle-24-framework-plugins.html` | Spring Boot, Kotlin & Android Plugins | org.springframework.boot · bootRun / bootJar · io.spring.dependency-management vs platform() · kotlin("jvm") · com.android.application · AGP version pairing |
| 25 | `gradle-25-ci-troubleshooting.html` | CI & Troubleshooting | gradle/actions/setup-gradle · caching in CI · dependencies / dependencyInsight · --info / --debug / --stacktrace · --refresh-dependencies · clearing ~/.gradle caches |

Sheet 24 points to the Spring set for Spring Boot itself and stays on the build side only.

### Group 8: Quick Reference (Sheets 26–27)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 26 | `gradle-26-quickref-cli.html` | Quick Reference: CLI & gradle.properties | common tasks · CLI flags · task path syntax · gradle.properties keys · wrapper commands · cache & daemon commands |
| 27 | `gradle-27-quickref-scripts.html` | Quick Reference: Build Script Snippets | settings skeleton · build skeleton · dependency configurations · libs.versions.toml skeleton · task registration · toolchain & test setup |

Dense tables only. Sheet 26 covers what you type at the terminal; sheet 27 covers what you write in the build files.
