# SQL — Outline

Generated from `manifest.json`; keep the two in sync when sheets are added, renamed or reordered.

## Profile

- **Collection section:** Languages
- **Status:** Complete
- **Sheets:** 22 across 1 group
- **File prefix:** `sql` (`sql-##-[slug].html`)
- **Folder:** `Sheets/SQL-Sheets/`
- **Coverage:** SELECT, WHERE Operators, JOIN Types, Aggregate Functions, CASE Statement, String Functions, Date Functions, UNION / INTERSECT / EXCEPT, Subqueries, CTEs, Window Functions, NULL Handling, INSERT, UPDATE & DELETE, CREATE TABLE & Data Types, Constraints, Views, Transactions, Stored Procedures, Triggers, Indexes

---

## All Sheets (01–22)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `sql-01-statement-order.html` | SQL Statement Order | SELECT · FROM · JOIN · WHERE · GROUP BY · HAVING · ORDER BY · LIMIT |
| 02 | `sql-02-select.html` | SELECT | DISTINCT · aliases · expressions · SELECT * · aggregates · subqueries · table qualification |
| 03 | `sql-03-where-operators.html` | WHERE Operators | Comparison · BETWEEN · IN · LIKE · IS NULL · AND / OR / NOT · pattern matching |
| 04 | `sql-04-join-types.html` | JOIN Types | INNER · LEFT · RIGHT · FULL · CROSS · SELF JOIN · ON conditions · which rows are kept |
| 05 | `sql-05-aggregate-functions.html` | Aggregate Functions | COUNT · SUM · AVG · MIN · MAX · GROUP BY · HAVING · DISTINCT in aggregates |
| 06 | `sql-06-case-statement.html` | CASE Statement | Searched CASE · Simple CASE · WHEN / THEN / ELSE · conditional aggregation · custom sort |
| 07 | `sql-07-string-functions.html` | String Functions | UPPER · LOWER · TRIM · LENGTH · SUBSTRING · LEFT · RIGHT · CONCAT · REPLACE · CONCAT_WS |
| 08 | `sql-08-date-functions.html` | Date Functions | NOW · CURDATE · YEAR · MONTH · DAY · EXTRACT · DATE_ADD · DATEDIFF · formatting |
| 09 | `sql-09-union-intersect-except.html` | UNION / INTERSECT / EXCEPT | UNION · UNION ALL · INTERSECT · EXCEPT · combining result sets · duplicate handling |
| 10 | `sql-10-subqueries.html` | Subqueries | Scalar · IN · EXISTS · derived tables · correlated vs non-correlated · anti-join |
| 11 | `sql-11-ctes.html` | CTEs (Common Table Expressions) | WITH clause · multiple CTEs · recursive CTEs · anchor member · CTE vs subquery |
| 12 | `sql-12-window-functions.html` | Window Functions | ROW_NUMBER · RANK · DENSE_RANK · OVER · PARTITION BY · LAG · LEAD · window frames |
| 13 | `sql-13-null-handling.html` | NULL Handling | IS NULL · IS NOT NULL · COALESCE · NULLIF · ISNULL · IFNULL · NULL in aggregates &amp; logic |
| 14 | `sql-14-insert.html` | INSERT | Single row · multiple rows · INSERT SELECT · DEFAULT · NULL · upsert · ON CONFLICT |
| 15 | `sql-15-update-delete.html` | UPDATE and DELETE | UPDATE SET · UPDATE from another table · DELETE · TRUNCATE · safety patterns |
| 16 | `sql-16-create-table-data-types.html` | CREATE TABLE &amp; Data Types | CREATE TABLE · ALTER TABLE · DROP TABLE · numeric · string · date · other types |
| 17 | `sql-17-constraints.html` | Constraints | PRIMARY KEY · FOREIGN KEY · NOT NULL · UNIQUE · DEFAULT · CHECK · ON DELETE CASCADE |
| 18 | `sql-18-views.html` | Views | CREATE VIEW · DROP VIEW · updatable views · WITH CHECK OPTION · materialized views |
| 19 | `sql-19-transactions.html` | Transactions | BEGIN · COMMIT · ROLLBACK · SAVEPOINT · isolation levels · auto-commit |
| 20 | `sql-20-stored-procedures.html` | Stored Procedures | CREATE PROCEDURE · IN / OUT / INOUT · IF · WHILE · DECLARE · CALL |
| 21 | `sql-21-triggers.html` | Triggers | BEFORE / AFTER · INSERT / UPDATE / DELETE · OLD and NEW references · audit logging |
| 22 | `sql-22-indexes.html` | Indexes | CREATE INDEX · composite indexes · UNIQUE index · index types · when to index · EXPLAIN |
