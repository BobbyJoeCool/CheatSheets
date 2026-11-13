# NoSQL Reference Guide Outline (61 sheets)

## Metadata

- **Group it belongs to:** Databases (renamed from "SQL & Tools"; placed right after SQL)
- **Folder Directory:** `Sheets/NoSQL-Sheets/nosql-##-[slug].html`
- **PDF Name:** `NoSQL Reference Guide.pdf`
- **Groups:** 14
- **Sheets:** 61
- **Drafted Date:** 2026-11-07
- **Verified-Finalized Date:**

## Basic Information

A reference for the main NoSQL database families and the engine that leads each one: **MongoDB** (document), **Redis** (key-value and data structures), **Amazon DynamoDB** (managed key-value / document), **Apache Cassandra** (wide-column) and **Neo4j** (graph), plus a short group on search engines and vector databases. Aimed at developers who know SQL (the SQL set) and want to choose, model and query a NoSQL store with confidence. It is the companion to the SQL set: that set's NoSQL Comparison box points here, and this set's SQL Equivalent box points back.

Teaching is code-first and uses the same **shop data** as SQL sheet 04 (`customers`, `orders`, `order_items`, `products`), remodeled for each engine on its first sheet, so readers can compare one dataset across SQL and every NoSQL family. The concepts group up front explains when NoSQL fits, consistency trade-offs, and access-pattern-first modeling, because those decide success more than syntax does.

Version targets (checked 2026-11-07): MongoDB 8.2 with `mongosh`, Redis Open Source 8.x (with Valkey 8+ noted where it differs), DynamoDB as of 2026, Cassandra 5.0 with CQL, Neo4j 2026.x with Cypher 25. Scope is developer use: modeling, querying, indexing, transactions, caching and the drivers. Deep cluster administration and tuning are out of scope; each engine gets one operations sheet. No sheet cap was given.

## Differences in Layout from Basic Structure

- **Extra boxes (confirmed 2026-11-07):** **SQL Equivalent** (`id="sql"`), **Across Engines** (`id="engines"`) and **In Your Code** (`id="code-lang"`) in Row 2 under Code Explained on every sheet except the quick references · **Production Check** (`id="prod"`) in Row 1 as a third column on selected sheets. None on the quick references (60–61). Details below.
- **Density check before the full build:** preview two of the densest sheets (15 Updating Documents and 41 Transactions, Lua & Operations; both carry all four boxes) and confirm spacing before building the rest.
- Groups replace the standard language template: concepts first, then one group (or several) per engine, then search / vector, polyglot practice, and quick reference.
- Code blocks use each engine's own shell or language: `mongosh` JavaScript (Prism `javascript`), `redis-cli` commands (Prism `bash`), DynamoDB as AWS CLI JSON and PartiQL (Prism `json` / `sql`), CQL (Prism `sql`), Cypher (Prism `cypher`), Elasticsearch query DSL (Prism `json`).
- **Shared shop data.** The first sheet of each engine group (07, 32, 42, 48, 52) shows how the SQL set's shop data is modeled for that engine; later sheets in the group reuse that model.
- **SQL set links:** SQL Equivalent lines end with a pointer to the matching SQL sheet (`See SQL 35`). Sheets 01–06 also link to SQL 61–62 (normalization, ER modeling) where they contrast designs.
- `nosql-cheatsheet.css` adds `.section-sql`, `.section-engines`, `.section-code-lang` and `.section-prod` styles with their own accent colors.

### SQL Equivalent box (`id="sql"`, 01–59)

- `<section class="section-notes section-sql" id="sql">`, title **SQL Equivalent**.
- 2–3 lines showing the sheet's operation in SQL (PostgreSQL), or what SQL does differently: `db.orders.find({status: "PAID"})` ↔ `SELECT * FROM orders WHERE status = 'PAID'` · `$lookup` ↔ `LEFT JOIN` · `HINCRBY` ↔ `UPDATE … SET n = n + 1`.
- Ends with the SQL set sheet that covers it (`See SQL 32`). When SQL has no real equivalent (sorted-set leaderboards, graph traversals, TTL expiry), say so and name the nearest approach.

### Across Engines box (`id="engines"`, 01–59)

- `<section class="section-notes section-engines" id="engines">`, title **Across Engines**.
- Up to four one-line entries showing how the sheet's concept works in the other engines, always in this order: **MongoDB** · **Redis** · **DynamoDB** · **Cassandra** · **Neo4j**. The sheet's own engine is left out.
- Drop an engine with no real counterpart rather than writing "not supported."
- Concept and practice sheets (01–06, 56–59) list all five engines.
- Example (12, Finding Documents): **Redis** no ad hoc queries; read by key or add Search (`FT.SEARCH`) · **DynamoDB** `Query` needs the partition key; other fields need a GSI or `Scan` · **Cassandra** `WHERE` must include the partition key, else SAI or `ALLOW FILTERING` · **Neo4j** `MATCH (p:Product {category: 'Books'}) RETURN p`.
- Box order in Row 2: SQL Equivalent → Across Engines → In Your Code.

### In Your Code box (`id="code-lang"`, 01–59)

- `<section class="section-notes section-code-lang" id="code-lang">`, title **In Your Code**.
- Exactly three one-line entries, always in this order: **Node** · **Python** · **Java**, each showing the driver or ODM call for the sheet's main operation.
- Libraries per engine: MongoDB — Node driver / Mongoose · PyMongo / Motor · Spring Data MongoDB. Redis — node-redis / ioredis · redis-py · Jedis / Spring Data Redis. DynamoDB — AWS SDK v3 DocumentClient · boto3 · AWS SDK for Java v2 Enhanced Client. Cassandra — cassandra-driver · cassandra-driver (DataStax) · Java driver / Spring Data Cassandra. Neo4j — neo4j-driver · neo4j (Python) · Neo4j Java driver / Spring Data Neo4j.

### Production Check box (`id="prod"`, Row 1, selected sheets)

- `<section class="section-notes section-prod" id="prod">`, title **Production Check**.
- 2–3 items on what goes wrong at scale for the sheet's topic and the fix: unbounded arrays hitting the 16 MB document limit, hot partitions, `KEYS *` blocking Redis, Scan reading the whole table, tombstone build-up, missing indexes on `MATCH` lookups.

| # | Production Check content |
|---|---|
| 03 | eventual consistency surprises (read-your-writes) · choosing consistency per request |
| 05 | unbounded embedded arrays · 16 MB document limit · reference instead |
| 12 | queries without an index → collection scans · `explain()` before shipping |
| 15 | multi-document updates aren't atomic without a transaction · use `bulkWrite` ordered vs unordered deliberately |
| 19 | `$lookup` on large collections without an index on the foreign field |
| 23 | index too many fields → write amplification · ESR rule |
| 27 | transactions on a standalone server fail · keep transactions short (60 s default limit) |
| 29 | shard key can't be changed cheaply · monotonically increasing keys create hot shards |
| 33 | `KEYS *` blocks the server → `SCAN` · keys without TTL fill memory |
| 39 | cache stampede on expiry · stale data after writes · set `maxmemory-policy` |
| 41 | `appendonly` off means data loss on restart · cluster cross-slot errors |
| 44 | Scan reads (and bills) the whole table · use Query + key design |
| 45 | GSIs are eventually consistent · GSI throttling backs up the table |
| 46 | hot partition keys · item collections too big for LSIs (10 GB) |
| 49 | consistency level vs replication factor · `QUORUM` math |
| 51 | tombstones from deletes and TTL slow reads · `ALLOW FILTERING` in production |
| 55 | unanchored `MATCH` scans every node · create indexes and uniqueness constraints |
| 58 | two sources of truth drift · cache invalidation strategy |

## Groups

### Group 1: Concepts & Choosing (Sheets 01–06)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `nosql-01-what-is-nosql.html` | What Is NoSQL? | non-relational · document · key-value · wide-column · graph · search / vector · schema-flexible |
| 02 | `nosql-02-sql-vs-nosql.html` | SQL vs NoSQL: When to Use Which | access patterns · joins vs embedding · scale-out · schema flexibility · transactions · decision table |
| 03 | `nosql-03-cap-consistency.html` | CAP, Consistency & BASE | CAP theorem · PACELC · strong vs eventual consistency · read-your-writes · quorum · BASE vs ACID |
| 04 | `nosql-04-access-pattern-modeling.html` | Modeling From Access Patterns | list queries first · read / write ratio · query-driven design · denormalization · duplication trade-offs |
| 05 | `nosql-05-embed-vs-reference.html` | Embedding vs Referencing | one-to-few · one-to-many · many-to-many · embed · reference · extended reference · document size |
| 06 | `nosql-06-choosing-an-engine.html` | Choosing an Engine | MongoDB · Redis · DynamoDB · Cassandra · Neo4j · Elasticsearch · managed vs self-hosted · comparison table |

Sheets 01–06 are engine-neutral; code blocks show the same shop order modeled in each family.

### Group 2: MongoDB Basics (Sheets 07–10)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 07 | `nosql-07-mongodb-intro-setup.html` | MongoDB Introduction & Setup | Atlas · Docker `mongo:8` · `mongosh` · Compass · connection string · shop data as documents |
| 08 | `nosql-08-documents-bson.html` | Documents, BSON & Types | BSON · ObjectId · Date · Decimal128 · arrays · embedded documents · 16 MB limit |
| 09 | `nosql-09-databases-collections.html` | Databases, Collections & _id | `use` · `db.createCollection` · `_id` · capped collections · time series collections · naming |
| 10 | `nosql-10-mongosh-essentials.html` | mongosh Essentials | `show dbs` · `show collections` · `db.collection` · cursors · `.pretty()` · `load()` · `.mongoshrc.js` |

### Group 3: MongoDB CRUD (Sheets 11–16)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 11 | `nosql-11-mongodb-insert.html` | Inserting Documents | `insertOne` · `insertMany` · `ordered` · generated `_id` · write result · duplicate key error |
| 12 | `nosql-12-mongodb-find.html` | Finding Documents | `find` · `findOne` · projection · `sort` · `limit` · `skip` · `countDocuments` |
| 13 | `nosql-13-query-operators.html` | Query Operators | `$eq` · `$gt` / `$lt` · `$in` · `$and` / `$or` · `$exists` · `$type` · `$regex` |
| 14 | `nosql-14-arrays-nested-queries.html` | Querying Arrays & Nested Fields | dot notation · `$elemMatch` · `$all` · `$size` · array index · positional projection |
| 15 | `nosql-15-update-operators.html` | Updating Documents | `updateOne` · `updateMany` · `$set` · `$inc` · `$unset` · `$push` / `$pull` · `$[]` / `$[elem]` |
| 16 | `nosql-16-delete-replace-bulk.html` | Delete, Replace, Upsert & Bulk | `deleteOne` · `deleteMany` · `replaceOne` · `upsert: true` · `findOneAndUpdate` · `bulkWrite` |

### Group 4: MongoDB Aggregation (Sheets 17–21)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 17 | `nosql-17-aggregation-basics.html` | Aggregation Pipeline Basics | `aggregate` · `$match` · `$project` · `$addFields` · `$sort` · `$limit` · stage order |
| 18 | `nosql-18-group-accumulators.html` | $group & Accumulators | `$group` · `$sum` · `$avg` · `$min` / `$max` · `$push` · `$addToSet` · `$count` |
| 19 | `nosql-19-lookup-unwind.html` | $lookup & $unwind | `$lookup` · pipeline `$lookup` · `$unwind` · `preserveNullAndEmptyArrays` · joins vs embedding |
| 20 | `nosql-20-advanced-stages.html` | $facet, $bucket & Window Stages | `$facet` · `$bucket` · `$setWindowFields` · `$densify` · `$fill` · `$sortByCount` |
| 21 | `nosql-21-expressions-output.html` | Expression Operators & Output | `$cond` · `$switch` · `$dateTrunc` · `$concat` · `$merge` · `$out` · views |

### Group 5: MongoDB Indexing & Search (Sheets 22–24)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 22 | `nosql-22-mongodb-indexes.html` | Index Types | `createIndex` · single field · compound · multikey · unique · partial · TTL · wildcard |
| 23 | `nosql-23-index-strategy-explain.html` | Index Strategy & explain() | ESR rule · covered queries · `explain("executionStats")` · COLLSCAN vs IXSCAN · `hint` |
| 24 | `nosql-24-text-atlas-vector-search.html` | Text, Atlas Search & Vector Search | `$text` · text index · `$search` · Atlas Search indexes · `$vectorSearch` · embeddings |

### Group 6: MongoDB Schema & Integrity (Sheets 25–28)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 25 | `nosql-25-schema-design-patterns.html` | Schema Design Patterns | bucket · outlier · subset · computed · extended reference · polymorphic · schema versioning |
| 26 | `nosql-26-schema-validation.html` | Schema Validation | `$jsonSchema` · `validator` · `validationLevel` · `validationAction` · required fields · `collMod` |
| 27 | `nosql-27-transactions-concerns.html` | Transactions, Read & Write Concerns | single-document atomicity · `startSession` · `withTransaction` · write concern `majority` · read concern · read preference |
| 28 | `nosql-28-change-streams.html` | Change Streams | `watch()` · change events · resume token · `fullDocument` · pipeline filters · event-driven sync |

### Group 7: MongoDB Operations & Drivers (Sheets 29–31)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 29 | `nosql-29-replica-sets-sharding.html` | Replica Sets & Sharding | primary / secondary · elections · oplog · shard key · chunks · `mongos` · hashed vs ranged |
| 30 | `nosql-30-mongodb-security-backup.html` | Security & Backup | users & roles · `createUser` · TLS · network access · `mongodump` / `mongorestore` · Atlas backups |
| 31 | `nosql-31-mongodb-drivers-odms.html` | Drivers & ODMs | Node driver · Mongoose schemas · PyMongo · Motor · Spring Data MongoDB · Prisma MongoDB |

### Group 8: Redis (Sheets 32–41)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 32 | `nosql-32-redis-intro-setup.html` | Redis Introduction & Setup | in-memory · single-threaded · Redis Open Source 8 · Valkey · Docker · `redis-cli` · Redis Insight |
| 33 | `nosql-33-redis-keys-strings.html` | Keys & Strings | `SET` · `GET` · `NX` / `XX` · `INCR` · `MSET` · key naming · `SCAN` vs `KEYS` |
| 34 | `nosql-34-redis-expiry.html` | Expiry & Eviction | `EXPIRE` · `TTL` · `SET … EX` · `PERSIST` · `maxmemory` · eviction policies · `HEXPIRE` |
| 35 | `nosql-35-redis-hashes.html` | Hashes | `HSET` · `HGET` · `HGETALL` · `HINCRBY` · `HDEL` · objects as hashes · field expiry |
| 36 | `nosql-36-redis-lists-sets.html` | Lists & Sets | `LPUSH` / `RPUSH` · `LRANGE` · `BLPOP` · `SADD` · `SMEMBERS` · `SINTER` · queues |
| 37 | `nosql-37-redis-sorted-sets.html` | Sorted Sets | `ZADD` · `ZRANGE` · `REV` / `BYSCORE` · `ZINCRBY` · `ZRANK` · leaderboards · rate limits |
| 38 | `nosql-38-redis-streams-pubsub.html` | Streams & Pub/Sub | `XADD` · `XREAD` · consumer groups · `XACK` · `PUBLISH` / `SUBSCRIBE` · streams vs pub/sub |
| 39 | `nosql-39-redis-caching-patterns.html` | Caching Patterns | cache-aside · write-through · TTL strategy · invalidation · stampede protection · session store |
| 40 | `nosql-40-redis-json-search.html` | JSON, Search & Vectors | `JSON.SET` · `JSON.GET` · `FT.CREATE` · `FT.SEARCH` · vector fields · hybrid search |
| 41 | `nosql-41-redis-atomicity-ops.html` | Transactions, Lua & Operations | `MULTI` / `EXEC` · `WATCH` · pipelining · `EVAL` / functions · RDB / AOF · replication · Cluster |

### Group 9: Amazon DynamoDB (Sheets 42–47)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 42 | `nosql-42-dynamodb-concepts.html` | DynamoDB Concepts | tables · items · partition key · sort key · on-demand vs provisioned · DynamoDB Local · shop data |
| 43 | `nosql-43-dynamodb-item-crud.html` | Item Operations | `PutItem` · `GetItem` · `UpdateItem` · `DeleteItem` · condition expressions · update expressions |
| 44 | `nosql-44-dynamodb-query-scan.html` | Query vs Scan | `Query` · key condition · `begins_with` · filter expression · pagination · `Scan` cost · PartiQL |
| 45 | `nosql-45-dynamodb-indexes.html` | Secondary Indexes | GSI · LSI · projections · sparse indexes · index overloading · eventual consistency |
| 46 | `nosql-46-dynamodb-single-table.html` | Single-Table Design | access-pattern table · composite sort keys · item collections · adjacency list · when not to |
| 47 | `nosql-47-dynamodb-streams-ttl-tx.html` | Streams, TTL & Transactions | DynamoDB Streams · Lambda triggers · TTL attribute · `TransactWriteItems` · idempotency tokens |

### Group 10: Apache Cassandra (Sheets 48–51)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 48 | `nosql-48-cassandra-architecture.html` | Cassandra Architecture | ring · partitioner · replication factor · consistency levels · gossip · `cqlsh` · Docker |
| 49 | `nosql-49-cql-keyspaces-tables.html` | CQL: Keyspaces & Tables | `CREATE KEYSPACE` · partition key · clustering columns · `PRIMARY KEY ((a), b)` · data types · collections |
| 50 | `nosql-50-cassandra-query-modeling.html` | Query-First Modeling | one table per query · denormalized tables · `WHERE` rules · bucketing · materialized views · SAI indexes |
| 51 | `nosql-51-cassandra-writes-ops.html` | Writes, TTL & Operations | `USING TTL` · tombstones · lightweight transactions `IF` · batches · `nodetool` · compaction |

### Group 11: Graph Databases — Neo4j (Sheets 52–55)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 52 | `nosql-52-graph-model-neo4j.html` | The Graph Model & Neo4j | nodes · relationships · labels · properties · Neo4j Desktop / Aura / Docker · Browser · shop data as a graph |
| 53 | `nosql-53-cypher-basics.html` | Cypher Basics | `MATCH` · `WHERE` · `RETURN` · `CREATE` · `MERGE` · `SET` · `DELETE` / `DETACH DELETE` |
| 54 | `nosql-54-cypher-paths-aggregation.html` | Paths, Patterns & Aggregation | variable-length `*1..3` · `shortestPath` · quantified path patterns · `count` · `collect` · `WITH` |
| 55 | `nosql-55-graph-modeling-indexes.html` | Graph Modeling, Indexes & Constraints | relationship vs property · intermediate nodes · `CREATE INDEX` · uniqueness constraint · `PROFILE` · recommendations |

### Group 12: Search & Vector Databases (Sheets 56–57)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 56 | `nosql-56-search-engines.html` | Search Engines: Elasticsearch & OpenSearch | inverted index · mappings · analyzers · `match` / `bool` query · relevance scoring · aggregations |
| 57 | `nosql-57-vector-databases.html` | Vector Databases & Embeddings | embeddings · similarity (cosine, dot) · ANN / HNSW · metadata filters · pgvector · Atlas / Redis / dedicated stores |

### Group 13: NoSQL in Practice (Sheets 58–59)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 58 | `nosql-58-polyglot-persistence.html` | Polyglot Persistence | SQL + cache · SQL + search · CQRS read models · outbox / CDC · dual-write pitfalls · consistency between stores |
| 59 | `nosql-59-testing-migrations.html` | Testing & Schema Migration | Testcontainers · DynamoDB Local · in-memory fakes · seed data · schema versioning · lazy vs batch migration |

### Group 14: Quick Reference (Sheets 60–61)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 60 | `nosql-60-quick-ref-mongodb-redis.html` | Quick Reference — MongoDB & Redis | mongosh CRUD · query / update operators · aggregation stages · index types · Redis commands by type · TTL |
| 61 | `nosql-61-quick-ref-dynamodb-cassandra-neo4j.html` | Quick Reference — DynamoDB, Cassandra, Cypher & SQL Map | DynamoDB API · expressions · CQL · consistency levels · Cypher clauses · SQL ↔ NoSQL concept map |

Dense tables, no explanations; every row points back to the sheet with details.
