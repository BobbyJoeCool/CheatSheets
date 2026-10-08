# Prisma Reference — Outline

Generated from `manifest.json`; keep the two in sync when sheets are added, renamed or reordered.

## Profile

- **Collection section:** Web Technologies
- **Status:** Planned
- **Sheets:** 32 across 7 groups
- **File prefix:** `prisma` (`prisma-##-[slug].html`)
- **Folder:** `Sheets/Prisma-Sheets/`
- **Coverage:** intro & setup, schema definition, client basics, CRUD, filtering & querying, relations & nested writes, aggregations, transactions, migrations, error handling, advanced patterns, performance, testing

---

## Group 1 — Introduction & Setup (01–02)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `prisma-01-introduction-installation.html` | Introduction &amp; Installation | prisma init · prisma.config.ts · DATABASE_URL · driver adapter · prisma generate |
| 02 | `prisma-02-client-setup-methods.html` | Prisma Client Setup &amp; Methods | new PrismaClient · adapter · singleton · $transaction · $queryRaw · $disconnect |

## Group 2 — Schema Definition (03–05)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 03 | `prisma-03-schema-models-fields.html` | Schema: Models &amp; Fields | model · @id · @default · @unique · @updatedAt · ? optional · [] list |
| 04 | `prisma-04-schema-relations-enums.html` | Schema: Relations &amp; Enums | @relation · fields · references · onDelete · enum · implicit m-n |
| 05 | `prisma-05-schema-indexes-constraints.html` | Schema: Indexes, Constraints &amp; Attributes | @@index · @@unique · @@id · @db.VarChar · sort · type: Gin |

## Group 3 — CRUD Operations (06–09)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 06 | `prisma-06-crud-create.html` | CRUD: Create Operations | create · createMany · createManyAndReturn · skipDuplicates · nested create |
| 07 | `prisma-07-crud-read.html` | CRUD: Read Operations | findUnique · findFirst · findMany · select · include · omit · orderBy · skip/take |
| 08 | `prisma-08-crud-update-upsert.html` | CRUD: Update &amp; Upsert | update · updateMany · updateManyAndReturn · increment · upsert · nested update |
| 09 | `prisma-09-crud-delete-batch.html` | CRUD: Delete &amp; Batch Operations | delete · deleteMany · onDelete: Cascade · P2003 · soft delete · $transaction |

## Group 4 — Filtering & Querying (10–11)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 10 | `prisma-10-filtering-where-operators.html` | Filtering: Where Clauses &amp; Operators | equals · gt/gte/lt/lte · contains · startsWith · in/notIn · not · AND/OR/NOT |
| 11 | `prisma-11-filtering-advanced-pagination.html` | Filtering: Advanced &amp; Pagination | cursor · skip/take · some/every/none · is/isNot · has/hasSome · nulls · _count |

## Group 5 — Relations (12–14)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 12 | `prisma-12-relations-include-select.html` | Relations: Include &amp; Select | include · select · nested where/orderBy/take · _count · relationLoadStrategy |
| 13 | `prisma-13-relations-nested-writes.html` | Relations: Nested Writes | create · connect · connectOrCreate · disconnect · set · update · upsert · delete |
| 14 | `prisma-14-relations-many-to-many.html` | Relations: Many-to-Many &amp; Advanced | implicit m-n · explicit join model · @@id · connect · set · some |

## Group 6 — Advanced Topics (15–25)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 15 | `prisma-15-aggregations-grouping.html` | Aggregations &amp; Grouping | aggregate · _count · _sum · _avg · _min · _max · groupBy · having |
| 16 | `prisma-16-transactions.html` | Transactions | $transaction([...]) · interactive tx · isolationLevel · timeout · maxWait · P2034 |
| 17 | `prisma-17-migrations.html` | Migrations | migrate dev · db push · migrate deploy · migrate status · migrate resolve · migrate reset |
| 18 | `prisma-18-error-handling.html` | Error Handling | PrismaClientKnownRequestError · P2002 · P2025 · P2003 · …OrThrow · retry |
| 19 | `prisma-19-performance-n-plus-1-indexing.html` | Performance: N+1 &amp; Indexing | N+1 · include · in · fluent API batching · relationLoadStrategy · @@index |
| 20 | `prisma-20-connection-pooling-optimization.html` | Connection Pooling &amp; Optimization | PrismaPg · max · connectionTimeoutMillis · idleTimeoutMillis · PgBouncer · $on('query') |
| 21 | `prisma-21-soft-deletes-auditing.html` | Advanced: Soft Deletes &amp; Auditing | deletedAt · $extends query · restore · AuditLog · createdAt · @updatedAt |
| 22 | `prisma-22-extends-custom-methods.html` | Advanced: $extends &amp; Custom Methods | $extends · model · query · result · client · $allModels · Prisma.defineExtension |
| 23 | `prisma-23-typescript-type-safety.html` | TypeScript &amp; Type Safety | Prisma.UserGetPayload · satisfies Prisma.UserSelect · UserWhereInput · Prisma.Result |
| 24 | `prisma-24-testing-mocking.html` | Testing &amp; Mocking | mockDeep · __mocks__ · vi.mock · .env.test · migrate reset · deleteMany · factories |
| 25 | `prisma-25-debugging-studio.html` | Debugging &amp; Studio | prisma studio · log · $on('query') · DEBUG · prisma validate · prisma debug |

## Group 7 — Specialized Topics (26–32)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 26 | `prisma-26-raw-sql-queries.html` | Raw SQL Queries | $queryRaw · $executeRaw · Prisma.sql · Prisma.join · $queryRawUnsafe · TypedSQL |
| 27 | `prisma-27-null-json-arrays.html` | Special Cases: Null, JSON, Arrays | null · Prisma.JsonNull · DbNull · path · String[] · BigInt · Bytes · Decimal |
| 28 | `prisma-28-self-referential-relations.html` | Self-Referential &amp; Complex Relations | self-relation · manager/reports · parentId tree · followers m-n · WITH RECURSIVE |
| 29 | `prisma-29-validation-custom-logic.html` | Validation &amp; Custom Logic | zod · safeParse · z.infer · $extends query · CHECK constraint · business rules |
| 30 | `prisma-30-best-practices-patterns.html` | Best Practices &amp; Patterns | naming · multi-file schema · repository · select shapes · error mapping · project layout |
| 31 | `prisma-31-security-data-protection.html` | Security &amp; Data Protection | SQL injection · tenant scoping · RLS · omit · sslmode · least privilege |
| 32 | `prisma-32-migration-strategies.html` | Migration Strategies | expand-contract · --create-only · backfill · CONCURRENTLY · rollback · backups |
