# COBOL Reference Guide Outline (64 sheets)

## Metadata

- **Group it belongs to:** Mainframe (new index section; add it to the root index.html when this set is built, with the JCL & z/OS set beside it)
- **Folder Directory:** `Sheets/COBOL-Sheets/cbl-##-[slug].html`
- **PDF Name:** `COBOL Reference Guide.pdf`
- **Groups:** 15
- **Sheets:** 64
- **Drafted Date:** 2026-11-12
- **Verified-Finalized Date:**

## Basic Information

COBOL for readers who know a modern language (Python, Java or JavaScript) and want to read, maintain and write business COBOL. Production examples target IBM Enterprise COBOL for z/OS (6.x); every example also compiles under GnuCOBOL 3.x so readers can practice on a Mac, Linux or Windows machine. Where the two differ (compiler options, file assignment, some intrinsic functions), the sheet says so. COBOL 2002 / 2014 / 2023 standard features are tagged, since shop compilers often lag the standard.

Code is shown in fixed format (Area A / Area B) because that is what real mainframe source looks like; Sheet 05 covers free format, and examples note where free format would differ. The set follows the standard language groups, reshaped for COBOL: the DATA DIVISION gets its own groups, tables replace arrays, and files get three groups (sequential, indexed/VSAM, sort/merge) because batch file processing is most of what COBOL does. Language-specific groups cover batch report patterns, subprograms and copybooks, and enterprise topics (DB2, CICS, compiler options, abends, JSON/XML, testing). Ends with a 2-page quick reference.

Running COBOL on z/OS needs JCL, which has its own set (`Sheets/JCL-Sheets/`); sheets here point to it instead of repeating it.

## Differences in Layout from Basic Structure

- **Extra boxes:** **Modern Equivalent** (Python / Java / JavaScript; `section-notes section-modern`, `id="modern"`) and **Prefer / Avoid** (`section-notes section-idiom`, `id="idiom"`) under Code Explained on every sheet except the quick references (63–64) · **Under the Hood** (`section-notes section-hood`, `id="hood"`) in Row 1 on 19 selected sheets. Details below.
- Code blocks use fixed-format COBOL kept inside column 72; Sheet 05 shows the column ruler. Prism's `cobol` component handles highlighting. Sheet 02 also shows shell commands (`language-bash`) and Sheet 03 shows JCL (`language-jcl`, using the JCL set's `prism-jcl.js`).
- Variables & Data Types is replaced by two DATA DIVISION groups (Data Division Basics, Data Manipulation).
- Data Structures is replaced by Tables (OCCURS); OOP is left out except a short note on Sheet 61 (OO COBOL is rarely used in shops).
- Error handling is spread across FILE STATUS (43), validation patterns (52) and abends (60) instead of one group, because COBOL has no exceptions in everyday use.
- Sheets 63–64 are table-only quick-reference pages with no code row.

### Modern Equivalent box (every sheet except 63–64)

- 3 `note-item` lines, one each for Python, Java and JavaScript, showing the same idea in that language: `Python — Decimal("12345.67")` · `Java — BigDecimal with scale 2` · `JavaScript — no decimal type; integer cents or decimal.js` for `PIC S9(7)V99 COMP-3`.
- When a language has no direct match (exact decimal math in JavaScript, level-88 condition names, REDEFINES), the line names the usual workaround instead of forcing a one-liner.

### Prefer / Avoid box (every sheet except 63–64)

- Common shop-standard style: `Avoid: GO TO and PERFORM THRU · Prefer: PERFORM paragraph with END-PERFORM scope terminators`.

### Under the Hood box (Row 1, selected sheets)

- How the data is stored or what the compiler and z/OS actually do: EBCDIC bytes, packed-decimal nibbles, binary truncation, how a READ maps to a DD name.
- Sheets: 05, 11, 13, 14, 16, 17, 20, 27, 35, 36, 37, 41, 43, 44, 47, 54, 57, 59, 60.

## Groups

### Group 1: Introduction & Setup (Sheets 01–05)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `cbl-01-introduction-history.html` | Introduction & History | CODASYL, 1959 · Grace Hopper & FLOW-MATIC · COBOL-85 · 2002 / 2014 / 2023 standards · banks, insurance & government · why it's still running |
| 02 | `cbl-02-installing-gnucobol.html` | Installing GnuCOBOL | `brew install gnucobol` · `apt install gnucobol` · `cobc -x prog.cbl` · `cobc -free` · `cobcrun` · VS Code COBOL extensions |
| 03 | `cbl-03-mainframe-dev-environment.html` | The Mainframe Dev Environment | z/OS · TSO / ISPF · datasets & members · Zowe Explorer · IBM Z Open Editor · IBM Z Xplore · compile → link → run (pointer to JCL set) |
| 04 | `cbl-04-program-structure-divisions.html` | Program Structure — Divisions | `IDENTIFICATION DIVISION` · `PROGRAM-ID` · `ENVIRONMENT DIVISION` · `DATA DIVISION` · `PROCEDURE DIVISION` · sections, paragraphs, sentences & statements · the period |
| 05 | `cbl-05-coding-format.html` | Coding Format | columns 1–6 sequence · column 7 indicator · Area A (8–11) · Area B (12–72) · columns 73–80 · `>>SOURCE FORMAT FREE` · continuation lines · case-insensitivity |

### Group 2: Output, Input & Comments (Sheets 06–08)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 06 | `cbl-06-display.html` | DISPLAY | `DISPLAY` · literals & variables · `UPON CONSOLE` / `UPON SYSOUT` · `WITH NO ADVANCING` · figurative constants · debugging with DISPLAY |
| 07 | `cbl-07-accept.html` | ACCEPT | `ACCEPT … FROM CONSOLE` · `ACCEPT` from SYSIN · `FROM DATE` / `DATE YYYYMMDD` · `FROM TIME` · `FROM DAY-OF-WEEK` · `FUNCTION CURRENT-DATE` |
| 08 | `cbl-08-comments-documentation.html` | Comments & Documentation | `*` in column 7 · `*>` inline comments (2002+) · `/` page eject · program header blocks · change logs · `AUTHOR` / `DATE-WRITTEN` (obsolete) |

### Group 3: Data Division Basics (Sheets 09–16)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 09 | `cbl-09-data-division-sections.html` | DATA DIVISION Sections | `FILE SECTION` · `WORKING-STORAGE SECTION` · `LOCAL-STORAGE SECTION` · `LINKAGE SECTION` · section order · storage lifetime |
| 10 | `cbl-10-level-numbers-group-items.html` | Level Numbers & Group Items | `01` records · `05`–`49` subordinate levels · elementary vs group items · `FILLER` · `77` standalone items · group items are alphanumeric |
| 11 | `cbl-11-picture-numeric.html` | PICTURE — Numeric | `PIC 9` · `S` sign · `V` implied decimal · `P` scaling · `PIC S9(7)V99` · repetition `9(5)` · maximum digits |
| 12 | `cbl-12-picture-alphanumeric-edited.html` | PICTURE — Alphanumeric & Edited | `PIC X` / `PIC A` · `Z` zero suppression · `*` check protection · `$` `,` `.` · `CR` / `DB` / `+` / `-` · `B` `0` `/` insertion |
| 13 | `cbl-13-usage-clauses.html` | USAGE Clauses | `DISPLAY` (zoned) · `COMP` / `BINARY` · `COMP-3` / `PACKED-DECIMAL` · `COMP-1` / `COMP-2` floats · `COMP-5` native binary · `INDEX` / `POINTER` |
| 14 | `cbl-14-value-figurative-constants.html` | VALUE & Figurative Constants | `VALUE` clause · `ZERO` / `ZEROS` · `SPACE` / `SPACES` · `HIGH-VALUES` / `LOW-VALUES` · `QUOTE` · `ALL "literal"` |
| 15 | `cbl-15-condition-names-88.html` | Condition Names (Level 88) | `88` levels · `VALUE` lists & `THRU` · `IF WS-EOF` · `SET … TO TRUE` · flags & switches · `FALSE` clause |
| 16 | `cbl-16-redefines-renames.html` | REDEFINES & RENAMES | `REDEFINES` · overlaying storage · alternate record layouts · numeric/alpha views of one field · `66 RENAMES` · data exceptions from bad redefines |

### Group 4: Data Manipulation (Sheets 17–20)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 17 | `cbl-17-move.html` | MOVE | `MOVE … TO` · alphanumeric padding & truncation · numeric alignment on the decimal point · group moves · `MOVE CORRESPONDING` · multiple receivers |
| 18 | `cbl-18-initialize-set.html` | INITIALIZE & SET | `INITIALIZE` · `REPLACING NUMERIC BY` / `ALPHANUMERIC BY` · `SET … TO TRUE` · `SET index UP BY` · `SET ADDRESS OF` |
| 19 | `cbl-19-editing-for-reports.html` | Editing Fields for Output | edited PICs in action · `BLANK WHEN ZERO` · `JUSTIFIED RIGHT` · `SIGN LEADING SEPARATE` · currency & dates · column-aligned output |
| 20 | `cbl-20-data-conversion.html` | Data Conversion | MOVE between USAGEs · `FUNCTION NUMVAL` / `NUMVAL-C` · de-editing · zoned ↔ packed · alphanumeric → numeric pitfalls · `NUMERIC` class test first |

### Group 5: Strings (Sheets 21–24)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 21 | `cbl-21-string.html` | STRING | `STRING … DELIMITED BY SIZE` · `DELIMITED BY SPACE` · `INTO` · `WITH POINTER` · `ON OVERFLOW` · `END-STRING` |
| 22 | `cbl-22-unstring.html` | UNSTRING | `UNSTRING … DELIMITED BY` · `ALL SPACES` · multiple delimiters `OR` · `INTO` · `COUNT IN` · `TALLYING IN` · parsing CSV lines |
| 23 | `cbl-23-inspect.html` | INSPECT | `TALLYING … FOR ALL` / `LEADING` / `CHARACTERS` · `REPLACING` · `CONVERTING` · `BEFORE` / `AFTER INITIAL` · counting & cleaning data |
| 24 | `cbl-24-reference-modification-functions.html` | Reference Modification & String Functions | `field(start:length)` · `FUNCTION UPPER-CASE` / `LOWER-CASE` · `FUNCTION REVERSE` · `FUNCTION LENGTH` · `FUNCTION TRIM` (compiler support varies) · `FUNCTION ORD` / `CHAR` |

### Group 6: Arithmetic (Sheets 25–28)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 25 | `cbl-25-add-subtract.html` | ADD & SUBTRACT | `ADD … TO` · `GIVING` · `SUBTRACT … FROM` · `CORRESPONDING` · `ROUNDED` · `ON SIZE ERROR` / `NOT ON SIZE ERROR` |
| 26 | `cbl-26-multiply-divide.html` | MULTIPLY & DIVIDE | `MULTIPLY … BY` · `DIVIDE … INTO` / `BY` · `GIVING` · `REMAINDER` · `ROUNDED` · divide-by-zero & `SIZE ERROR` |
| 27 | `cbl-27-compute.html` | COMPUTE | `COMPUTE x = …` · `+ - * / **` · precedence & parentheses · `ROUNDED MODE` (2014) · intermediate precision · `ARITH(EXTEND)` |
| 28 | `cbl-28-intrinsic-math-functions.html` | Intrinsic Math Functions | `FUNCTION MOD` / `REM` · `INTEGER` / `INTEGER-PART` · `ABS` · `SQRT` · `MAX` / `MIN` / `SUM` / `MEAN` · `RANDOM` · `PRESENT-VALUE` / `ANNUITY` |

### Group 7: Control Flow (Sheets 29–34)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 29 | `cbl-29-if-else.html` | IF / ELSE | `IF … ELSE … END-IF` · scope terminators vs the period · nested IFs · `CONTINUE` vs `NEXT SENTENCE` · the stray-period bug |
| 30 | `cbl-30-conditions.html` | Conditions | relational `=` / `>` / `NOT <` · class tests `NUMERIC` / `ALPHABETIC` · sign tests `POSITIVE` / `NEGATIVE` / `ZERO` · condition names · `AND` / `OR` / `NOT` · abbreviated combined conditions |
| 31 | `cbl-31-evaluate.html` | EVALUATE | `EVALUATE TRUE` · `EVALUATE variable` · `WHEN … THRU` · `ALSO` (decision tables) · `ANY` · `WHEN OTHER` · `END-EVALUATE` |
| 32 | `cbl-32-perform.html` | PERFORM | out-of-line `PERFORM paragraph` · `PERFORM section` · `PERFORM … THRU` · `PERFORM … TIMES` · top-down paragraph design · `EXIT` paragraphs |
| 33 | `cbl-33-perform-loops.html` | PERFORM Loops | `PERFORM UNTIL` · `WITH TEST AFTER` · `PERFORM VARYING … FROM … BY … UNTIL` · nested `AFTER` · inline `PERFORM … END-PERFORM` · infinite-loop traps |
| 34 | `cbl-34-goto-exit-stop.html` | GO TO, EXIT & Ending a Program | `GO TO` · `GO TO … DEPENDING ON` · `EXIT PARAGRAPH` / `EXIT PERFORM` · `STOP RUN` vs `GOBACK` · `RETURN-CODE` · structured style |

### Group 8: Tables (Sheets 35–38)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 35 | `cbl-35-occurs-basics.html` | OCCURS Basics | `OCCURS n TIMES` · subscripts start at 1 · multi-dimensional tables · tables of groups · out-of-range subscripts · `SSRANGE` |
| 36 | `cbl-36-indexes.html` | Indexes | `INDEXED BY` · `SET idx TO` / `UP BY` · index vs subscript · `USAGE INDEX` · displacement under the hood |
| 37 | `cbl-37-search-search-all.html` | SEARCH & SEARCH ALL | serial `SEARCH` · `AT END` · `WHEN` · `SEARCH ALL` binary search · `ASCENDING KEY` / `DESCENDING KEY` · table must be sorted |
| 38 | `cbl-38-variable-tables-loading.html` | Variable-Length Tables & Loading | `OCCURS … DEPENDING ON` · ODO object rules · loading a table from a file · hard-coded tables via `REDEFINES` · table `SORT` (2014; compiler support varies) |

### Group 9: Sequential Files (Sheets 39–43)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 39 | `cbl-39-file-concepts.html` | File Concepts | records & fields · sequential / indexed / relative · logical vs physical files · datasets & DD names · fixed vs variable records |
| 40 | `cbl-40-select-assign.html` | SELECT & ASSIGN | `FILE-CONTROL` · `SELECT … ASSIGN TO` · `ORGANIZATION IS` · `ACCESS MODE IS` · `FILE STATUS IS` · GnuCOBOL vs z/OS assignment |
| 41 | `cbl-41-fd-record-definitions.html` | FD & Record Definitions | `FD` · `RECORD CONTAINS` · `RECORDING MODE F` / `V` · `BLOCK CONTAINS 0` · `01` record layouts · record layouts in copybooks |
| 42 | `cbl-42-open-read-write-close.html` | OPEN, READ, WRITE & CLOSE | `OPEN INPUT` / `OUTPUT` / `EXTEND` / `I-O` · `READ … AT END` · `WRITE … FROM` · `READ … INTO` · `REWRITE` · priming-read loop |
| 43 | `cbl-43-file-status-codes.html` | FILE STATUS Codes | `00` success · `10` end of file · `22` duplicate key · `23` record not found · `35` file not found · `39` attribute mismatch · check after every I/O |

### Group 10: Indexed & Relative Files (Sheets 44–46)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 44 | `cbl-44-indexed-files.html` | Indexed Files (VSAM KSDS) | `ORGANIZATION INDEXED` · `RECORD KEY` · `ALTERNATE RECORD KEY … WITH DUPLICATES` · `ACCESS DYNAMIC` · VSAM KSDS · defining with IDCAMS (pointer) |
| 45 | `cbl-45-random-dynamic-access.html` | Random & Dynamic Access | `READ … KEY IS` · `INVALID KEY` · `START … KEY >=` · `READ NEXT` · `WRITE` / `REWRITE` / `DELETE` · browse pattern |
| 46 | `cbl-46-relative-files.html` | Relative Files | `ORGANIZATION RELATIVE` · `RELATIVE KEY` · VSAM RRDS · slot numbers · random access by number · when to use them |

### Group 11: Sorting & Merging (Sheets 47–48)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 47 | `cbl-47-sort-verb.html` | The SORT Verb | `SD` sort file · `SORT … ON ASCENDING KEY` · `USING` / `GIVING` · `INPUT PROCEDURE` / `OUTPUT PROCEDURE` · `RELEASE` / `RETURN` · `SORT-RETURN` |
| 48 | `cbl-48-merge-sort-utilities.html` | MERGE & Sort Utilities | `MERGE … USING … GIVING` · DFSORT / Syncsort · when to sort in a JCL step instead · `SORT-CONTROL` · pointer to the JCL set |

### Group 12: Reports & Batch Patterns (Sheets 49–52)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 49 | `cbl-49-report-layout.html` | Report Layout | heading / detail / total lines · `WRITE … AFTER ADVANCING n LINES` · `AFTER ADVANCING PAGE` · line counting & page breaks · ASA carriage control |
| 50 | `cbl-50-control-break.html` | Control Break Processing | sorted input · holding the previous key · single-level break · multi-level breaks · subtotals & grand totals · end-of-file final break |
| 51 | `cbl-51-master-transaction-update.html` | Master / Transaction File Update | balanced-line algorithm · matching keys · adds / changes / deletes · `HIGH-VALUES` sentinel · old master → new master |
| 52 | `cbl-52-validation-error-handling.html` | Data Validation & Error Handling | `NUMERIC` checks · range checks with 88s · error / reject files · `RETURN-CODE` special register · `ON EXCEPTION` · counts & control totals |

### Group 13: Subprograms & Copybooks (Sheets 53–56)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 53 | `cbl-53-copy-copybooks.html` | COPY & Copybooks | `COPY member` · `REPLACING ==:PREFIX:== BY ==WS==` · copybook libraries & SYSLIB · `-I` in GnuCOBOL · shared record layouts · `REPLACE` statement |
| 54 | `cbl-54-call-subprograms.html` | CALL & Subprograms | `CALL 'PROG' USING` · `BY REFERENCE` / `BY CONTENT` / `BY VALUE` · static vs dynamic calls · `CANCEL` · `ON EXCEPTION` · `DYNAM` option |
| 55 | `cbl-55-linkage-section.html` | LINKAGE SECTION & Parameters | `LINKAGE SECTION` · `PROCEDURE DIVISION USING` · `RETURNING` · `GOBACK` · matching caller & callee layouts · `ENTRY` points |
| 56 | `cbl-56-nested-programs-functions.html` | Nested Programs & User-Defined Functions | nested programs · `END PROGRAM` · `COMMON` · `GLOBAL` / `EXTERNAL` data · `FUNCTION-ID` (compiler support varies) · `REPOSITORY` paragraph |

### Group 14: Enterprise COBOL (Sheets 57–62)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 57 | `cbl-57-embedded-sql-db2.html` | Embedded SQL with DB2 | `EXEC SQL … END-EXEC` · host variables `:WS-NAME` · `SQLCA` / `SQLCODE` · `DECLARE CURSOR` / `OPEN` / `FETCH` / `CLOSE` · DCLGEN · precompile & BIND |
| 58 | `cbl-58-cics-basics.html` | CICS Basics | `EXEC CICS … END-EXEC` · `SEND MAP` / `RECEIVE MAP` · BMS maps · pseudo-conversational design · `COMMAREA` / channels · `EIBAID` / `RESP` |
| 59 | `cbl-59-compiler-options-listings.html` | Compiler Options & Listings | `CBL` / `PROCESS` statements · `SSRANGE` · `NUMPROC` · `TRUNC` · `ARITH` · `OPTIMIZE` · `LIST` / `MAP` / `XREF` · reading a compile listing |
| 60 | `cbl-60-debugging-abends.html` | Debugging & Abends | S0C7 data exception · S0C4 protection exception · S0CB divide by zero · S806 module not found · CEEDUMP · `-ftrace` / `-debug` in GnuCOBOL · z/OS Debugger |
| 61 | `cbl-61-json-xml-interop.html` | JSON, XML & Interop | `JSON GENERATE` / `JSON PARSE` · `XML GENERATE` / `XML PARSE` · `NAME OF` / `SUPPRESS` · calling Java / C · OO COBOL note |
| 62 | `cbl-62-testing-devops.html` | Testing & DevOps for COBOL | COBOL Check · IBM zUnit · test copybooks & stubs · COBOL in Git · Zowe CLI in CI · IBM Dependency Based Build (DBB) |

### Group 15: Quick Reference (Sheets 63–64)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 63 | `cbl-63-quick-reference-verbs.html` | Quick Reference — Verbs & Syntax | divisions & sections · data verbs · arithmetic verbs · control flow · file I/O verbs · string verbs |
| 64 | `cbl-64-quick-reference-pic-usage-status.html` | Quick Reference — PIC, USAGE & File Status | PICTURE symbols · edit symbols · USAGE sizes in bytes · FILE STATUS codes · common abends · figurative constants |
