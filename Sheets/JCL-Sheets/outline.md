# JCL & z/OS Reference Guide Outline (32 sheets)

## Metadata

- **Group it belongs to:** Mainframe (new index section; add it to the root index.html when this set is built, beside COBOL)
- **Folder Directory:** `Sheets/JCL-Sheets/jcl-##-[slug].html`
- **PDF Name:** `JCL & zOS Reference Guide.pdf`
- **Groups:** 9
- **Sheets:** 32
- **Drafted Date:** 2026-11-12
- **Verified-Finalized Date:**

## Basic Information

Job Control Language and the z/OS basics around it, written as the companion to the COBOL set. For readers who are new to the mainframe and need to submit, read and fix batch jobs: allocate datasets, run COBOL programs, sort files, chain steps on return codes and read the job log when something abends. Targets z/OS 2.5 / 3.x with JES2; JES3 differences are left out (JES3 is retired).

The Outline Guide's language groups don't apply, so groups follow the life of a batch job: z/OS basics, the three JCL statements, DD in depth, conditional processing, procedures, utilities, running COBOL, then job output and debugging. Modern tooling (Zowe CLI, Zowe Explorer in VS Code, z/OSMF) is taught alongside TSO/ISPF so readers can practice from a laptop. IBM Z Xplore is the suggested free practice system. Ends with a 2-page quick reference.

## Differences in Layout from Basic Structure

- **Extra boxes:** **Modern Equivalent** (Python / Java / JavaScript; `section-notes section-modern`, `id="modern"`) and **Abend Check** (`section-notes section-abend`, `id="abend"`) under Code Explained on every sheet except the quick references (31–32) · **In COBOL** (`section-notes section-cobol`, `id="cobol"`) in Row 1 on 9 selected sheets. Details below.
- Code blocks are JCL (`language-jcl`), kept inside column 71; Sheet 05 shows the column ruler. Prism has no JCL component, so the set ships a small grammar, `Sheets/JCL-Sheets/prism-jcl.js` (also loaded by COBOL Sheet 03), with extra token colors in `jcl-cheatsheet.css`. Sheets 04, 27 and 30 show Zowe CLI commands (`language-bash`); Sheets 03, 28 and 29 show ISPF commands and job-log output as plain text (`language-none`). Utility control statements (IDCAMS, DFSORT) sit in in-stream `DD *` data.
- Sheets 31–32 are table-only quick-reference pages with no code row.

### Modern Equivalent box (every sheet except 31–32)

- 3 `note-item` lines, one each for Python, Java and JavaScript (Node.js), showing how you'd do the same job-control idea when running a program in that language: `PARM='2026'` ≈ `Python — sys.argv[1]` · `Java — args[0]` · `JavaScript — process.argv[2]`.
- JCL wires files and steps up outside the program, so most lines compare to the program's launch and exit: arguments, opening files by path, exit codes (`sys.exit(8)` · `System.exit(8)` · `process.exitCode = 8`) and chaining runs.

### Abend Check box (every sheet except 31–32)

- The error message or abend code this topic most often produces, what it means, and the fix: `IEC141I 013-18 — member not found in the PDS`.

### In COBOL box (Row 1, selected sheets)

- How the JCL on this sheet connects to the program: DD name ↔ `SELECT … ASSIGN TO`, DCB ↔ `FD`, `PARM=` ↔ `LINKAGE SECTION`, `RETURN-CODE` ↔ step RC.
- Sheets: 08, 11, 12, 13, 14, 22, 23, 24, 25.

## Groups

### Group 1: z/OS Basics (Sheets 01–04)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `jcl-01-mainframe-zos-overview.html` | Mainframe & z/OS Overview | IBM Z · z/OS · LPARs · batch vs online · JES2 · subsystems (DB2, CICS, IMS, MQ) · EBCDIC |
| 02 | `jcl-02-datasets.html` | Datasets | naming `HLQ.MLQ.LLQ` · sequential (PS) · PDS vs PDSE & members · VSAM · catalogs · `RECFM` / `LRECL` / `BLKSIZE` |
| 03 | `jcl-03-tso-ispf.html` | TSO / ISPF Essentials | ISPF primary menu · 3.4 DSLIST · ISPF editor line & primary commands · `SUBMIT` · SDSF (`ST`, `O`, `?`) · TSO commands |
| 04 | `jcl-04-modern-tools.html` | Modern Tools: Zowe & z/OSMF | Zowe CLI `zowe zos-files` / `zowe zos-jobs submit` · Zowe Explorer in VS Code · profiles & `zowe config` · z/OSMF · USS shell · IBM Z Xplore |

### Group 2: JCL Fundamentals (Sheets 05–08)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 05 | `jcl-05-jcl-syntax.html` | JCL Syntax | `//` in columns 1–2 · name, operation, operand & comment fields · column 72 limit · continuation rules · `//*` comments · `/*` delimiter · `//` null statement |
| 06 | `jcl-06-job-statement.html` | The JOB Statement | job name · accounting & programmer name · `CLASS` · `MSGCLASS` · `MSGLEVEL=(1,1)` · `NOTIFY=&SYSUID` · `REGION` / `TIME` · `TYPRUN=SCAN` / `HOLD` |
| 07 | `jcl-07-exec-statement.html` | The EXEC Statement | step names · `PGM=` · `PROC=` (or proc name) · `PARM=` · `REGION` / `TIME` on steps · step limits · `PARMDD` |
| 08 | `jcl-08-dd-statement-basics.html` | DD Statement Basics | DD names · `DSN=` · `DISP=` · `SYSOUT=*` · `DUMMY` · in-stream `DD *` / `DD DATA` · `DLM=` |

### Group 3: DD Statements in Depth (Sheets 09–13)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 09 | `jcl-09-disp-parameter.html` | The DISP Parameter | `NEW` / `OLD` / `SHR` / `MOD` · normal disposition · abnormal disposition · `CATLG` / `DELETE` / `KEEP` / `PASS` / `UNCATLG` · defaults · `(NEW,CATLG,DELETE)` |
| 10 | `jcl-10-space-unit-volume.html` | SPACE, UNIT & Volumes | `SPACE=(TRK,(10,5))` · `CYL` / `TRK` / block units · directory blocks · `RLSE` · `UNIT=SYSDA` · `VOL=SER=` · `AVGREC` · SMS `STORCLAS` / `DATACLAS` |
| 11 | `jcl-11-dcb-attributes.html` | DCB Attributes | `RECFM=FB` / `VB` / `F` / `U` · `LRECL` · `BLKSIZE=0` (system-determined) · `DSORG=PS` / `PO` · `LIKE=` · `DSNTYPE=LIBRARY` |
| 12 | `jcl-12-special-dd-names.html` | Special DD Names | `JOBLIB` / `STEPLIB` · `SYSIN` · `SYSOUT` / `SYSPRINT` · `SYSUDUMP` / `SYSABEND` / `CEEDUMP` · `SYSTSIN` / `SYSTSPRT` · `SYSLIB` |
| 13 | `jcl-13-concatenation-temp-backrefs.html` | Concatenation, Temp Datasets & Backward References | concatenated DDs · `&&TEMP` datasets · `DISP=(NEW,PASS)` · `DSN=*.STEP1.DDNAME` referbacks · `VOL=REF` · `DCB=*.` |

### Group 4: Conditional Processing (Sheets 14–15)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 14 | `jcl-14-return-codes-cond.html` | Return Codes & COND | RC 0 / 4 / 8 / 12 / 16 · `COND=(4,LT)` reads backwards · `COND=EVEN` / `ONLY` · step vs job `COND` · `MAXCC` · flushed steps |
| 15 | `jcl-15-if-then-else-restart.html` | IF / THEN / ELSE & Restart | `// IF (RC > 4) THEN` · `ELSE` / `ENDIF` · `STEP.RC` · `ABEND` / `ABENDCC` · `RUN` · `RESTART=stepname` · idempotent steps |

### Group 5: Procedures & Symbols (Sheets 16–18)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 16 | `jcl-16-procedures.html` | In-Stream & Cataloged Procedures | `PROC` / `PEND` · cataloged procs · `JCLLIB ORDER=` · calling a proc · `stepname.ddname` overrides · added DDs |
| 17 | `jcl-17-symbolic-parameters-set.html` | Symbolic Parameters & SET | `&SYMBOL` · defaults on `PROC` · `SET` statement · `.` delimiter `&HLQ..DATA` · system symbols `&SYSUID` / `&LYYMMDD` · `EXPORT SYMLIST` |
| 18 | `jcl-18-include-overrides.html` | INCLUDE & Overrides | `INCLUDE MEMBER=` · overriding EXEC params `PARM.STEP1=` · nullifying parameters · override order · common override mistakes |

### Group 6: Utilities (Sheets 19–23)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 19 | `jcl-19-iefbr14-iebgener.html` | IEFBR14 & IEBGENER | allocate with IEFBR14 · delete with `DISP=(MOD,DELETE)` · IEBGENER copy · `SYSUT1` / `SYSUT2` · `SYSIN DD DUMMY` · ICEGENER |
| 20 | `jcl-20-iebcopy.html` | IEBCOPY | copy PDS / PDSE members · `COPY OUTDD=… INDD=…` · `SELECT MEMBER=` · `EXCLUDE` · compress in place · unload / reload |
| 21 | `jcl-21-idcams.html` | IDCAMS | `DEFINE CLUSTER` (KSDS) · `KEYS` / `RECORDSIZE` · `REPRO` · `PRINT` · `DELETE … PURGE` · `LISTCAT` · `SET MAXCC=0` |
| 22 | `jcl-22-dfsort.html` | DFSORT | `SORT FIELDS=(1,10,CH,A)` · `CH` / `ZD` / `PD` / `BI` formats · `INCLUDE COND=` / `OMIT` · `INREC` / `OUTREC BUILD=` · `SUM FIELDS=NONE` · ICETOOL |
| 23 | `jcl-23-tso-batch-other-utilities.html` | TSO in Batch & Other Utilities | `IKJEFT01` · `SYSTSIN` commands · REXX in batch · `DSN RUN PROGRAM` (DB2) · `BPXBATCH` for USS · IEBUPDTE |

### Group 7: Running COBOL & Managing Data (Sheets 24–26)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 24 | `jcl-24-compile-link-go.html` | Compile, Link & Go | `IGYWCL` / `IGYWCLG` procs · `SYSLIB` copybooks · `SYSLMOD` load library · binder (link-edit) · compile listing in `SYSPRINT` · DB2 precompile & BIND note |
| 25 | `jcl-25-running-cobol-batch.html` | Running a COBOL Batch Program | `EXEC PGM=` · `STEPLIB` · DD names ↔ `SELECT … ASSIGN` · `PARM=` → `LINKAGE SECTION` · `DISPLAY` → `SYSOUT` · `RETURN-CODE` → step RC |
| 26 | `jcl-26-generation-data-groups.html` | Generation Data Groups (GDGs) | `DEFINE GDG` · `LIMIT` / `SCRATCH` / `NOEMPTY` · relative generations `(+1)` / `(0)` / `(-1)` · `G0001V00` names · daily-file pattern |

### Group 8: Job Output, Debugging & Scheduling (Sheets 27–30)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 27 | `jcl-27-jes2-job-output.html` | JES2 & Job Output | job lifecycle · job & output classes · SDSF / Zowe job views · `JESMSGLG` / `JESJCL` / `JESYSMSG` · held output · purging jobs |
| 28 | `jcl-28-reading-job-logs-jcl-errors.html` | Reading Job Logs & JCL Errors | `JCL ERROR` · `IEFC` / `IEF` messages · `IEF212I` dataset not found · `IEF453I` job failed · `IEC` open errors · dataset in use (enqueue) |
| 29 | `jcl-29-common-abends.html` | Common Abends | S0C7 · S0C4 · S013 · S806 · S222 / S322 · SB37 / SD37 / SE37 · U-codes (user abends) · CEE messages |
| 30 | `jcl-30-scheduling-modern-workflow.html` | Scheduling & Modern Workflow | batch windows · schedulers (IBM Workload Scheduler, Control-M) · job dependencies · JCL in Git · `zowe zos-jobs submit … --wait-for-output` in CI · z/OSMF REST jobs API |

### Group 9: Quick Reference (Sheets 31–32)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 31 | `jcl-31-quick-reference-statements.html` | Quick Reference — Statements & Parameters | JOB · EXEC · DD · DISP combos · SPACE / DCB · special DD names · IF / COND |
| 32 | `jcl-32-quick-reference-utilities-abends.html` | Quick Reference — Utilities, RCs & Abends | utility → DD names → control statements · return codes · abend codes · common IEF / IEC messages |
