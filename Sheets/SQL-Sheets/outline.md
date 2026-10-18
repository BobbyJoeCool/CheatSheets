# SQL Reference Guide Outline (82 sheets)

## Metadata

- **Group it belongs to:** SQL & Tools
- **Folder Directory:** `Sheets/SQL-Sheets/sql-##-[slug].html`
- **Groups:** 19
- **Sheets:** 82
- **Drafted Date:** 2026-10-18
- **Verified-Finalized Date:**

## Basic Information

Core SQL from first `SELECT` through window functions, schema design, transactions, indexing and security. Aimed at beginner-to-intermediate developers who want a reference they can keep using once they're past the basics. Teaching is code-first: every sheet leads with runnable queries against one shared sample schema (`customers`, `orders`, `order_items`, `products`, `employees`, `departments`) introduced on sheet 04, so examples build on each other across the set.

Examples are written in standard SQL and run on PostgreSQL 17+ as the primary engine, since it follows the ISO standard most closely. MySQL 8.4 LTS, SQLite 3.45+ and SQL Server 2022+ are covered where they differ. Scope is the SQL language and the database features developers touch day to day; server tuning, replication, clustering and DBA-only administration are out of scope. Every sheet shows how its topic maps to an ORM (Prisma first) and, where it applies, how the same idea works in a NoSQL database (MongoDB first).

No sheet cap was given. Sheets 05–06 are a "when to use what" guide to every clause and function in the set. The set closes with two quick-reference pages.

## Differences in Layout from Basic Structure

- **Row 1 gets a third box, NoSQL Comparison,** next to Description and Notes. It shows how the sheet's idea works in a document or key-value store (MongoDB first; Redis or DynamoDB when they fit better), e.g. `JOIN` vs `$lookup` and embedding, `GROUP BY` vs `$group`, transactions vs single-document atomicity. On sheets with no meaningful NoSQL parallel (casting rules, `ORDER BY` ordinal position, etc.) Row 1 stays two columns.
- **Two boxes under Code Explained on every sheet:**
  - **Dialect Notes:** a compact table showing how PostgreSQL, MySQL, SQL Server and SQLite handle the sheet's topic (e.g. `LIMIT` vs `TOP`, `||` vs `CONCAT` vs `+`, `RETURNING` vs `OUTPUT`). Write "Same in all four" when nothing differs.
  - **In an ORM:** the Prisma equivalent of the sheet's main query, with a one-line Django ORM, SQLAlchemy or Spring Data JPA equivalent when it helps. When the ORM has no equivalent (window functions, recursive CTEs, `LATERAL`), show the raw-SQL escape hatch (`$queryRaw`, `.raw()`, `text()`, `@Query(nativeQuery = true)`).
- **Shared sample schema.** Sheet 04 defines the tables used throughout. Code blocks on later sheets assume that schema and do not redefine it.
- **Groups replace the standard group template.** SQL follows its own learning path (query → aggregate → join → modify → define → optimize) instead of the general-purpose language order. Output & Comments, Strings, Control Flow, OOP and Modules have no direct equivalent; their SQL counterparts are folded into Syntax (03), String Functions (22–23) and CASE Expressions (21).
- **Guide and quick-reference sheets (05–06, 81–82)** use tables instead of the standard four-row layout and skip the NoSQL, Dialect and ORM boxes.

## Groups

### Group 1: Introduction & Setup (Sheets 01–04)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `sql-01-introduction-history.html` | Introduction & History | SQL · relational model · ISO/ANSI standard · RDBMS · dialects · declarative |
| 02 | `sql-02-installing-connecting.html` | Installing & Connecting | psql · mysql · sqlite3 · sqlcmd · connection string · GUI clients · Docker |
| 03 | `sql-03-syntax-statement-structure.html` | Syntax & Statement Structure | clauses · ; terminator · keyword case · "quoted identifiers" · -- comment · /* */ · logical query order |
| 04 | `sql-04-relational-model-sample-schema.html` | Relational Model & Sample Schema | table · row · column · primary key · foreign key · sample schema |

Sheet 04 is the reference schema for the whole set. Include a small ER diagram and the `CREATE TABLE` script.

### Group 2: Which Tool When (Sheets 05–06)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 05 | `sql-05-which-clause-when.html` | Which Clause When | WHERE vs HAVING · GROUP BY vs ORDER BY vs PARTITION BY · DISTINCT vs GROUP BY · JOIN vs subquery vs CTE · IN vs EXISTS · UNION vs UNION ALL · DELETE vs TRUNCATE vs DROP |
| 06 | `sql-06-function-directory.html` | Function Directory | string · numeric · date & time · conversion · NULL handling · aggregate · window · what it does / use it for |

These two pages are the "when to use what" guide, placed up front so readers can see the whole toolbox before learning each piece. Each row gives what the clause or function is, what it does, what it's used for, and the sheet number where it's covered in full. Sheet 06 lists every function in the set as one compact table (one line each); if fit_check shows it overflows, trim the least-used string functions first rather than adding a page. Both sheets skip the NoSQL, Dialect and ORM boxes.

### Group 3: Data Types (Sheets 07–12)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 07 | `sql-07-numeric-types.html` | Numeric Types | INTEGER · BIGINT · SMALLINT · NUMERIC(p,s) · DECIMAL · REAL · DOUBLE PRECISION |
| 08 | `sql-08-character-types.html` | Character Types | CHAR(n) · VARCHAR(n) · TEXT · NVARCHAR · collation · UTF-8 |
| 09 | `sql-09-date-time-types.html` | Date & Time Types | DATE · TIME · TIMESTAMP · TIMESTAMPTZ · INTERVAL · DATETIME2 · time zones |
| 10 | `sql-10-boolean-binary-uuid-enum-types.html` | Boolean, Binary, UUID & Enum Types | BOOLEAN · BIT · BYTEA · BLOB · UUID · ENUM · CREATE TYPE |
| 11 | `sql-11-null-three-valued-logic.html` | NULL & Three-Valued Logic | NULL · IS NULL · IS NOT NULL · UNKNOWN · IS DISTINCT FROM · NULL in comparisons |
| 12 | `sql-12-type-conversion-casting.html` | Type Conversion & Casting | CAST · :: · CONVERT · TRY_CAST · implicit conversion · type affinity |

### Group 4: SELECT Fundamentals (Sheets 13–17)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 13 | `sql-13-select-basics.html` | SELECT Basics | SELECT · FROM · * · column list · AS alias · computed columns · SELECT without FROM |
| 14 | `sql-14-filtering-where.html` | Filtering with WHERE | WHERE · AND · OR · NOT · parentheses · precedence · aliases in WHERE |
| 15 | `sql-15-sorting-order-by.html` | Sorting with ORDER BY | ORDER BY · ASC · DESC · NULLS FIRST/LAST · multiple keys · ordinal position · COLLATE |
| 16 | `sql-16-limiting-pagination.html` | Limiting & Pagination | LIMIT · OFFSET · FETCH FIRST · TOP · WITH TIES · keyset pagination |
| 17 | `sql-17-distinct-duplicates.html` | DISTINCT & Duplicates | DISTINCT · DISTINCT ON · COUNT(DISTINCT) · finding duplicates · DISTINCT vs GROUP BY |

### Group 5: Operators & Expressions (Sheets 18–21)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 18 | `sql-18-comparison-range-operators.html` | Comparison & Range Operators | = · <> · != · < > <= >= · BETWEEN · IN · NOT IN |
| 19 | `sql-19-pattern-matching.html` | Pattern Matching | LIKE · % · _ · ESCAPE · ILIKE · SIMILAR TO · ~ · REGEXP |
| 20 | `sql-20-arithmetic-concatenation-operators.html` | Arithmetic & Concatenation Operators | + - * / · % · integer division · \|\| · CONCAT · operator precedence |
| 21 | `sql-21-case-expressions.html` | CASE Expressions | simple CASE · searched CASE · ELSE · CASE in ORDER BY · CASE in aggregates · IIF |

### Group 6: Built-in Functions (Sheets 22–26)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 22 | `sql-22-string-functions-transform.html` | String Functions — Transform | LENGTH · UPPER · LOWER · TRIM · LPAD · RPAD · REPEAT · INITCAP |
| 23 | `sql-23-string-functions-search-extract.html` | String Functions — Search & Extract | SUBSTRING · LEFT · RIGHT · POSITION · STRPOS · REPLACE · SPLIT_PART · REVERSE |
| 24 | `sql-24-numeric-functions.html` | Numeric Functions | ROUND · CEIL · FLOOR · TRUNC · ABS · MOD · POWER · RANDOM |
| 25 | `sql-25-date-time-functions.html` | Date & Time Functions | NOW() · CURRENT_DATE · EXTRACT · DATE_TRUNC · INTERVAL · DATEADD / DATEDIFF · TO_CHAR · AT TIME ZONE |
| 26 | `sql-26-conditional-null-functions.html` | Conditional & NULL Functions | COALESCE · NULLIF · GREATEST · LEAST · IFNULL · ISNULL · NVL |

### Group 7: Aggregation & Grouping (Sheets 27–31)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 27 | `sql-27-aggregate-functions.html` | Aggregate Functions | COUNT(*) · COUNT(col) · SUM · AVG · MIN · MAX · NULL handling |
| 28 | `sql-28-group-by.html` | GROUP BY | GROUP BY · multiple columns · grouping expressions · functional dependency · ONLY_FULL_GROUP_BY |
| 29 | `sql-29-having-conditional-aggregation.html` | HAVING & Conditional Aggregation | HAVING · WHERE vs HAVING · FILTER (WHERE) · SUM(CASE …) · COUNT(CASE …) |
| 30 | `sql-30-rollup-cube-grouping-sets.html` | ROLLUP, CUBE & GROUPING SETS | ROLLUP · CUBE · GROUPING SETS · GROUPING() · subtotals · WITH ROLLUP |
| 31 | `sql-31-string-array-aggregation.html` | String & Array Aggregation | STRING_AGG · GROUP_CONCAT · ARRAY_AGG · LISTAGG · JSON_AGG · WITHIN GROUP |

### Group 8: Joins (Sheets 32–37)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 32 | `sql-32-inner-join.html` | INNER JOIN | INNER JOIN · ON · USING · table aliases · NATURAL JOIN · comma join |
| 33 | `sql-33-outer-joins.html` | Outer Joins | LEFT JOIN · RIGHT JOIN · FULL OUTER JOIN · NULL-extended rows · ON vs WHERE filter |
| 34 | `sql-34-cross-self-joins.html` | CROSS JOIN & Self Joins | CROSS JOIN · Cartesian product · self join · employee/manager · pairs · date spine |
| 35 | `sql-35-multi-table-joins.html` | Multi-Table Joins | 3+ table joins · junction table · join fan-out · duplicate rows · join order |
| 36 | `sql-36-semi-anti-joins.html` | Semi & Anti Joins | EXISTS · NOT EXISTS · IN · LEFT JOIN … IS NULL · NOT IN NULL trap |
| 37 | `sql-37-lateral-apply.html` | LATERAL & APPLY | LATERAL · CROSS APPLY · OUTER APPLY · top-N per row · set-returning functions |

### Group 9: Subqueries, CTEs & Set Operations (Sheets 38–43)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 38 | `sql-38-subqueries-scalar-in.html` | Subqueries — Scalar & IN | scalar subquery · IN (subquery) · ANY · ALL · subquery in SELECT |
| 39 | `sql-39-correlated-subqueries.html` | Correlated Subqueries | correlated subquery · outer reference · EXISTS · per-row evaluation · rewrite as join |
| 40 | `sql-40-derived-tables.html` | Derived Tables | FROM (subquery) · required alias · inline view · nested aggregation · aggregate of aggregate |
| 41 | `sql-41-common-table-expressions.html` | Common Table Expressions | WITH · multiple CTEs · chained CTEs · MATERIALIZED · NOT MATERIALIZED · CTE vs subquery |
| 42 | `sql-42-recursive-ctes.html` | Recursive CTEs | WITH RECURSIVE · anchor member · recursive member · UNION ALL · hierarchy · CYCLE |
| 43 | `sql-43-set-operations.html` | Set Operations | UNION · UNION ALL · INTERSECT · EXCEPT · MINUS · column & type compatibility · ORDER BY placement |

Set Operations (41) merges the former UNION and INTERSECT/EXCEPT sheets; it sits here because it was too small to stand as its own group.

### Group 10: Window Functions (Sheets 44–49)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 44 | `sql-44-window-function-basics.html` | Window Function Basics | OVER () · PARTITION BY · ORDER BY · WINDOW clause · window vs GROUP BY |
| 45 | `sql-45-ranking-functions.html` | Ranking Functions | ROW_NUMBER · RANK · DENSE_RANK · NTILE · PERCENT_RANK · CUME_DIST |
| 46 | `sql-46-offset-value-functions.html` | Offset & Value Functions | LAG · LEAD · FIRST_VALUE · LAST_VALUE · NTH_VALUE · default offset |
| 47 | `sql-47-running-totals-moving-averages.html` | Running Totals & Moving Averages | SUM() OVER · running total · moving average · cumulative count · percent of total |
| 48 | `sql-48-window-frames.html` | Window Frames | ROWS · RANGE · GROUPS · UNBOUNDED PRECEDING · CURRENT ROW · N FOLLOWING · EXCLUDE |
| 49 | `sql-49-window-patterns.html` | Window Function Patterns | top-N per group · deduplication · gaps & islands · sessionization · QUALIFY |

### Group 11: Modifying Data — DML (Sheets 50–54)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 50 | `sql-50-insert.html` | INSERT | INSERT INTO · VALUES · multi-row insert · INSERT … SELECT · DEFAULT · RETURNING |
| 51 | `sql-51-update.html` | UPDATE | UPDATE · SET · WHERE · UPDATE … FROM · UPDATE JOIN · RETURNING · OUTPUT |
| 52 | `sql-52-delete-truncate.html` | DELETE & TRUNCATE | DELETE · DELETE … USING · TRUNCATE · RESTART IDENTITY · CASCADE · soft delete |
| 53 | `sql-53-upsert-merge.html` | Upsert & MERGE | ON CONFLICT · DO UPDATE · DO NOTHING · EXCLUDED · ON DUPLICATE KEY UPDATE · MERGE |
| 54 | `sql-54-bulk-load-export.html` | Bulk Loading & Export | COPY · \copy · LOAD DATA INFILE · BULK INSERT · .import · CSV |

### Group 12: Defining Schema — DDL (Sheets 55–60)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 55 | `sql-55-create-table.html` | CREATE TABLE | CREATE TABLE · column definitions · DEFAULT · IF NOT EXISTS · CREATE TABLE AS · TEMPORARY |
| 56 | `sql-56-primary-foreign-keys.html` | Primary & Foreign Keys | PRIMARY KEY · composite key · FOREIGN KEY · REFERENCES · ON DELETE CASCADE · SET NULL |
| 57 | `sql-57-constraints.html` | Constraints | NOT NULL · UNIQUE · CHECK · CONSTRAINT name · DEFERRABLE · EXCLUDE |
| 58 | `sql-58-auto-increment-sequences.html` | Auto-Increment & Sequences | GENERATED AS IDENTITY · SERIAL · AUTO_INCREMENT · IDENTITY(1,1) · CREATE SEQUENCE · nextval · gen_random_uuid |
| 59 | `sql-59-alter-drop.html` | ALTER & DROP | ALTER TABLE · ADD COLUMN · DROP COLUMN · RENAME · ALTER COLUMN TYPE · ADD CONSTRAINT · DROP TABLE |
| 60 | `sql-60-databases-schemas-catalog.html` | Databases, Schemas & the Catalog | CREATE DATABASE · CREATE SCHEMA · search_path · USE · information_schema · \d |

### Group 13: Database Design (Sheets 61–63)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 61 | `sql-61-normalization.html` | Normalization | 1NF · 2NF · 3NF · BCNF · functional dependency · denormalization |
| 62 | `sql-62-relationships-er-modeling.html` | Relationships & ER Modeling | one-to-one · one-to-many · many-to-many · junction table · cardinality · ERD |
| 63 | `sql-63-design-conventions.html` | Design Conventions | snake_case · surrogate vs natural key · created_at / updated_at · soft delete · FK naming |

### Group 14: Views, Functions, Procedures & Triggers (Sheets 64–67)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 64 | `sql-64-views-materialized-views.html` | Views & Materialized Views | CREATE VIEW · OR REPLACE · WITH CHECK OPTION · updatable view · MATERIALIZED VIEW · REFRESH · CONCURRENTLY · indexed view |
| 65 | `sql-65-user-defined-functions.html` | User-Defined Functions | CREATE FUNCTION · RETURNS · RETURNS TABLE · LANGUAGE sql · plpgsql · IMMUTABLE |
| 66 | `sql-66-stored-procedures.html` | Stored Procedures | CREATE PROCEDURE · CALL · EXEC · IN / OUT params · DECLARE · IF / LOOP |
| 67 | `sql-67-triggers.html` | Triggers | CREATE TRIGGER · BEFORE / AFTER · FOR EACH ROW · NEW / OLD · INSTEAD OF · audit trigger |

### Group 15: Transactions & Concurrency (Sheets 68–70)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 68 | `sql-68-transactions.html` | Transactions | BEGIN · COMMIT · ROLLBACK · SAVEPOINT · autocommit · ACID |
| 69 | `sql-69-isolation-levels.html` | Isolation Levels | READ COMMITTED · REPEATABLE READ · SERIALIZABLE · dirty read · phantom read · MVCC |
| 70 | `sql-70-locking-deadlocks.html` | Locking & Deadlocks | FOR UPDATE · FOR SHARE · SKIP LOCKED · NOWAIT · LOCK TABLE · deadlock · advisory lock |

### Group 16: Indexing & Performance (Sheets 71–74)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 71 | `sql-71-indexes-basics.html` | Index Basics | CREATE INDEX · UNIQUE INDEX · composite index · B-tree · INCLUDE · DROP INDEX |
| 72 | `sql-72-index-types-strategies.html` | Index Types & Strategies | partial index · expression index · leftmost prefix · GIN · GiST · BRIN · hash |
| 73 | `sql-73-explain-query-plans.html` | Reading Query Plans | EXPLAIN · EXPLAIN ANALYZE · Seq Scan · Index Scan · Nested Loop · Hash Join · cost |
| 74 | `sql-74-query-optimization.html` | Query Optimization | SARGable predicates · SELECT * · N+1 · ANALYZE · VACUUM · statistics |

### Group 17: Security & Administration (Sheets 75–77)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 75 | `sql-75-users-roles-privileges.html` | Users, Roles & Privileges | CREATE ROLE · CREATE USER · GRANT · REVOKE · least privilege · ALTER DEFAULT PRIVILEGES |
| 76 | `sql-76-sql-injection-parameterized-queries.html` | SQL Injection & Parameterized Queries | parameterized query · $1 · ? · @param · PREPARE · EXECUTE · dynamic SQL · quote_ident |
| 77 | `sql-77-backup-restore.html` | Backup & Restore | pg_dump · pg_restore · mysqldump · .backup · BACKUP DATABASE · point-in-time recovery |

### Group 18: Semi-Structured Data & Search (Sheets 78–80)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 78 | `sql-78-json.html` | JSON | json · jsonb · -> · ->> · @> · jsonb_set · JSON_VALUE · JSON_EXTRACT |
| 79 | `sql-79-arrays-generated-series.html` | Arrays & Generated Series | ARRAY[] · ANY(array) · unnest · array_agg · @> · generate_series |
| 80 | `sql-80-full-text-search.html` | Full-Text Search | to_tsvector · to_tsquery · @@ · ts_rank · MATCH … AGAINST · FTS5 |

Arrays are PostgreSQL-specific; the Dialect Notes box on sheet 79 shows the JSON-array or table-valued workaround for the other engines.

### Group 19: Quick Reference (Sheets 81–82)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 81 | `sql-81-quick-ref-query-syntax.html` | Quick Reference: Query Syntax | clause order · logical order · JOIN types · aggregates · window syntax · DML / DDL skeletons |
| 82 | `sql-82-quick-ref-dialects.html` | Quick Reference: Dialect Differences | PostgreSQL · MySQL · SQLite · SQL Server · LIMIT vs TOP · concatenation · upsert · identity |

Both sheets are dense tables with no explanations.
