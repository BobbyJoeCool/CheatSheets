# Programming Concepts Reference — Outline

Generated from `manifest.json`; keep the two in sync when sheets are added, renamed or reordered.

## Profile

- **Collection section:** Concepts & Tools
- **Status:** Complete
- **Sheets:** 104 across 16 groups
- **File prefix:** `pc` (`pc-###-[slug].html`)
- **Folder:** `Sheets/Concepts-Sheets/`
- **Coverage:** pseudocode & problem solving, core concepts, paradigms & design, complexity analysis, linear data structures, trees & heaps, graphs, searching & sorting, array & string patterns, recursion & backtracking, dynamic programming, greedy, advanced data structures, math & number theory, string algorithms, quick reference

---

## Group 1 — Getting Started (001–004)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 001 | `pc-001-using-this-set.html` | Using This Set | scope · pseudocode-first · sheet layout · study order · Blind 75 / NeetCode 150 mapping · pattern groups |
| 002 | `pc-002-pseudocode-conventions.html` | Pseudocode Conventions | ← vs = · indentation blocks · div / mod · for … to · for each · collection operations · null · ∞ |
| 003 | `pc-003-problem-solving-framework.html` | Problem-Solving Framework | UMPIRE · clarify inputs · brute force first · optimize · state the tradeoffs · write test cases · talk through the plan |
| 004 | `pc-004-edge-cases-dry-runs.html` | Edge Cases &amp; Dry Runs | empty input · single element · duplicates · negatives &amp; zero · overflow · off-by-one checks · trace table |

## Group 2 — Core Concepts (005–013)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 005 | `pc-005-variables-values-types.html` | Variables, Values &amp; Types | primitive vs composite · static vs dynamic typing · strong vs weak · constants · literals · type conversion · null |
| 006 | `pc-006-numbers-arithmetic.html` | Numbers &amp; Arithmetic | integer division · mod with negatives · overflow · 32/64-bit limits · floating-point error · epsilon compare · rounding |
| 007 | `pc-007-bitwise-primer.html` | Bitwise Operations (Primer) | AND / OR / XOR / NOT · shifts · x &amp; 1 odd test · x &amp; (x-1) · x &amp; -x · XOR cancel · bit masks · see Bitwise set |
| 008 | `pc-008-booleans-conditionals.html` | Booleans &amp; Conditionals | truth tables · short-circuit · De Morgan's laws · if / else if / else · switch / match · ternary · guard clauses |
| 009 | `pc-009-loops-iteration.html` | Loops &amp; Iteration | counted loop · for each · while · do-while · break / continue · nested loops · off-by-one · loop invariants |
| 010 | `pc-010-functions-parameters.html` | Functions &amp; Parameters | define / call · return values · pass by value vs reference · default params · pure vs side effects · call stack frames |
| 011 | `pc-011-scope-closures.html` | Scope &amp; Closures | local vs global · block vs function scope · lexical scope · shadowing · closures · captured variables · loop-closure pitfall |
| 012 | `pc-012-memory-stack-heap.html` | Memory: Stack, Heap &amp; References | call stack · heap allocation · references / pointers · aliasing · shallow vs deep copy · garbage collection · stack overflow |
| 013 | `pc-013-error-handling.html` | Error Handling &amp; Defensive Coding | try / catch / finally · throw · error codes vs Result types · assertions · input validation · fail fast · sentinel values |

## Group 3 — Paradigms & Design (014–020)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 014 | `pc-014-programming-paradigms.html` | Programming Paradigms | imperative · procedural · object-oriented · functional · declarative · event-driven · multi-paradigm languages |
| 015 | `pc-015-functional-programming.html` | Functional Programming | pure functions · immutability · first-class functions · higher-order functions · map / filter / reduce · composition · currying |
| 016 | `pc-016-iterators-generators.html` | Iterators, Generators &amp; Lazy Evaluation | iterator protocol · hasNext / next · yield · lazy evaluation · infinite sequences · peeking iterator · flatten nested iterator |
| 017 | `pc-017-oop-classes-encapsulation.html` | OOP: Classes, Objects &amp; Encapsulation | class vs instance · constructor · fields / methods · this / self · public / private · static members · getters / setters |
| 018 | `pc-018-oop-inheritance-polymorphism.html` | OOP: Inheritance, Polymorphism &amp; Interfaces | extends · override · super · abstract class · interface · dynamic dispatch · composition over inheritance |
| 019 | `pc-019-solid-design-patterns.html` | SOLID &amp; Design Patterns | SRP · OCP · LSP · ISP · DIP · factory · strategy · observer |
| 020 | `pc-020-concurrency-basics.html` | Concurrency Basics | threads vs processes · race condition · mutex / lock · semaphore · deadlock · async / await · producer-consumer |

## Group 4 — Complexity Analysis (021–026)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 021 | `pc-021-big-o-notation.html` | Big O Notation | O / Ω / Θ · upper bound · drop constants · dominant term · best / average / worst case · input size n |
| 022 | `pc-022-complexity-classes.html` | Common Complexity Classes | O(1) · O(log n) · O(n) · O(n log n) · O(n²) · O(2ⁿ) · O(n!) · growth chart |
| 023 | `pc-023-analyzing-code.html` | Analyzing Loops &amp; Code | sequential = add · nested = multiply · halving loop = log n · O(n + m) vs O(n·m) · hidden costs (slice, concat, contains) |
| 024 | `pc-024-space-recursive-analysis.html` | Space Complexity &amp; Recursive Analysis | auxiliary vs total space · recursion depth · recursion tree · branches^depth · Master Theorem · memoization effect |
| 025 | `pc-025-amortized-cost-tables.html` | Amortized Analysis &amp; Cost Tables | dynamic array doubling · amortized O(1) · hash map worst case · data structure ops table · sort / search table |
| 026 | `pc-026-constraints-target-complexity.html` | Constraints → Target Complexity | n ≤ 10 · n ≤ 20 · n ≤ 500 · n ≤ 10⁴ · n ≤ 10⁶ · n ≥ 10⁹ · ~10⁸ ops/sec · TLE fixes |

## Group 5 — Linear Data Structures (027–035)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 027 | `pc-027-arrays-dynamic-arrays.html` | Arrays &amp; Dynamic Arrays | contiguous memory · O(1) index · insert / delete O(n) · resize doubling · 2D arrays · row-major order · in-place edits |
| 028 | `pc-028-strings-characters.html` | Strings: Characters &amp; Techniques | immutability · char codes · c - 'a' index · string builder · count[26] · reverse · palindrome check · anagram check |
| 029 | `pc-029-regex-primer.html` | Regular Expressions (Primer) | literals · . * + ? · [a-z] classes · ^ $ anchors · groups · {m,n} · greedy vs lazy · see RegEx set |
| 030 | `pc-030-linked-lists-basics.html` | Linked Lists — Basics | node · singly vs doubly · head / tail · insert · delete · traversal · dummy / sentinel node |
| 031 | `pc-031-linked-lists-techniques.html` | Linked Lists — Techniques | reverse in place · fast / slow pointers · Floyd cycle detection · find middle · merge two sorted · remove nth from end |
| 032 | `pc-032-stacks.html` | Stacks | LIFO · push / pop / peek · valid parentheses · min stack · evaluate RPN · undo history · array-backed stack |
| 033 | `pc-033-queues-deques.html` | Queues &amp; Deques | FIFO · enqueue / dequeue · circular buffer · deque · queue from two stacks · BFS use |
| 034 | `pc-034-hash-maps.html` | Hash Maps | hash function · buckets · chaining vs open addressing · load factor · O(1) average · hashable keys · iteration order |
| 035 | `pc-035-hash-sets-counting.html` | Hash Sets &amp; Counting Patterns | set membership · dedupe · frequency map · complement lookup (Two Sum) · group by key · longest consecutive sequence |

## Group 6 — Trees & Heaps (036–044)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 036 | `pc-036-tree-terminology.html` | Tree Terminology &amp; Properties | root · leaf · depth vs height · binary / n-ary · full · complete · perfect · balanced |
| 037 | `pc-037-binary-tree-traversals.html` | Binary Tree Traversals | preorder · inorder · postorder · iterative with stack · level order (BFS) · Morris traversal |
| 038 | `pc-038-binary-tree-patterns.html` | Binary Tree Recursion Patterns | max depth · invert · same tree / subtree · balanced check · diameter · path sum · return-a-tuple recursion |
| 039 | `pc-039-binary-search-trees.html` | Binary Search Trees | BST property · search / insert / delete · inorder = sorted · validate BST · kth smallest · successor · floor / ceiling |
| 040 | `pc-040-self-balancing-trees.html` | Self-Balancing Trees | AVL trees · rotations · red-black rules · B-trees · skip lists · ordered map / TreeMap · O(log n) guarantee |
| 041 | `pc-041-tree-construction-serialization.html` | Tree Construction &amp; Serialization | build from preorder + inorder · build from postorder + inorder · serialize / deserialize · null markers · sorted array → BST |
| 042 | `pc-042-lca-tree-paths.html` | Lowest Common Ancestor &amp; Tree Paths | LCA in binary tree · LCA in BST · parent pointers · max path sum · root-to-leaf paths · binary lifting |
| 043 | `pc-043-heaps-priority-queues.html` | Heaps &amp; Priority Queues | min vs max heap · array layout 2i+1 · sift up / down · heapify O(n) · push / pop O(log n) · heap sort |
| 044 | `pc-044-heap-patterns.html` | Heap Patterns: Top-K, Merge K &amp; Two Heaps | k largest (min-heap of size k) · kth element · merge k sorted lists · two heaps median · task scheduling |

## Group 7 — Graphs (045–055)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 045 | `pc-045-graph-representations.html` | Graph Basics &amp; Representations | vertices / edges · directed vs undirected · weighted · adjacency list · adjacency matrix · edge list · in / out degree |
| 046 | `pc-046-depth-first-search.html` | Depth-First Search | recursive DFS · iterative with stack · visited set · connected components · path exists · clone graph |
| 047 | `pc-047-breadth-first-search.html` | Breadth-First Search | queue · level-by-level · shortest path (unweighted) · multi-source BFS · mark visited on enqueue · word ladder |
| 048 | `pc-048-grid-graphs.html` | Grid Graphs | 4 / 8 directions array · bounds check · number of islands · flood fill · rotting oranges · in-place visited marking |
| 049 | `pc-049-topological-sort.html` | Topological Sort | DAG · Kahn's algorithm (in-degree) · DFS postorder · course schedule · cycle detection · alien dictionary |
| 050 | `pc-050-union-find.html` | Union-Find (Disjoint Set) | parent array · find · path compression · union by rank / size · component count · redundant connection |
| 051 | `pc-051-dijkstra.html` | Shortest Paths: Dijkstra | non-negative weights · min-heap · relaxation · dist array · stale-entry skip · O((V + E) log V) · network delay time |
| 052 | `pc-052-bellman-ford-floyd-warshall.html` | Bellman-Ford, Floyd-Warshall &amp; 0-1 BFS | negative edges · negative cycle check · k-stops limit · all-pairs DP · 0-1 BFS with deque |
| 053 | `pc-053-minimum-spanning-trees.html` | Minimum Spanning Trees | Kruskal · Prim · cut property · union-find use · min cost to connect points · dense vs sparse choice |
| 054 | `pc-054-bipartite-cycle-detection.html` | Bipartite Graphs &amp; Cycle Detection | 2-coloring · BFS / DFS coloring · undirected cycle (parent check) · directed cycle (3 colors) · is graph bipartite |
| 055 | `pc-055-scc-bridges-euler.html` | Connectivity: SCCs, Bridges &amp; Euler Paths | Kosaraju · Tarjan low-link · bridges · articulation points · Euler path · Hierholzer · reconstruct itinerary |

## Group 8 — Searching & Sorting (056–061)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 056 | `pc-056-binary-search-fundamentals.html` | Binary Search Fundamentals | sorted precondition · lo / hi / mid · overflow-safe mid · lo ≤ hi vs lo &lt; hi · lower bound · upper bound · first / last occurrence |
| 057 | `pc-057-binary-search-variations.html` | Binary Search Variations &amp; Search on Answer | rotated array · find peak · 2D matrix · monotonic predicate · search on answer (Koko, ship capacity) · real-valued bisection |
| 058 | `pc-058-elementary-sorts.html` | Elementary Sorts | bubble · selection · insertion · stable vs unstable · in-place · nearly sorted input |
| 059 | `pc-059-merge-quick-sort.html` | Merge Sort &amp; Quick Sort | divide &amp; conquer · merge step · Lomuto / Hoare partition · pivot choice · worst case O(n²) · count inversions |
| 060 | `pc-060-non-comparison-sorts.html` | Non-Comparison Sorts | counting sort · radix sort · bucket sort · O(n + k) · top-k frequent via buckets · when they beat O(n log n) |
| 061 | `pc-061-custom-sorting-quickselect.html` | Custom Sorting &amp; Quickselect | comparator contract · multi-key sort · stability · sort-then-scan · quickselect O(n) avg · kth largest |

## Group 9 — Array & String Patterns (062–071)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 062 | `pc-062-two-pointers.html` | Two Pointers | opposite ends · same direction (read / write) · sorted Two Sum · 3Sum · container with most water · remove duplicates in place |
| 063 | `pc-063-sliding-window-fixed.html` | Sliding Window — Fixed Size | add right / drop left · window sum / average · max sum of size k · permutation in string · find all anagrams |
| 064 | `pc-064-sliding-window-variable.html` | Sliding Window — Variable Size | expand / shrink · longest without repeats · minimum window substring · at most K distinct · exactly K = atMost(K) − atMost(K−1) |
| 065 | `pc-065-prefix-sums-difference-arrays.html` | Prefix Sums &amp; Difference Arrays | prefix[i] · range sum O(1) · subarray sum = k (prefix + map) · 2D prefix sums · difference array range updates · prefix XOR / product |
| 066 | `pc-066-kadane-subarrays.html` | Kadane's Algorithm &amp; Subarrays | max subarray sum · reset rule · tracking indices · max product subarray · circular subarray · best time to buy / sell stock |
| 067 | `pc-067-monotonic-stack.html` | Monotonic Stack | next greater element · daily temperatures · stock span · largest rectangle in histogram · trapping rain water |
| 068 | `pc-068-monotonic-deque.html` | Monotonic Deque | sliding window maximum · deque of indices · pop stale front · shortest subarray with sum ≥ K · jump game VI |
| 069 | `pc-069-intervals-sweep-line.html` | Intervals &amp; Sweep Line | sort by start · merge intervals · insert interval · overlap test · meeting rooms II · non-overlapping (greedy by end) · event sweep |
| 070 | `pc-070-matrix-techniques.html` | Matrix Traversal &amp; Manipulation | transpose · rotate 90° in place · spiral order · diagonal traversal · set matrix zeroes · search sorted matrix |
| 071 | `pc-071-cyclic-sort-index-marking.html` | Cyclic Sort &amp; In-Place Index Marking | values 1..n · swap to home index · find missing number · find duplicates · negate-to-mark · first missing positive |

## Group 10 — Recursion & Backtracking (072–077)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 072 | `pc-072-recursion-fundamentals.html` | Recursion Fundamentals | base case · recursive case · trust the recursion · call stack trace · tail recursion · recursion → iteration |
| 073 | `pc-073-divide-and-conquer.html` | Divide &amp; Conquer | split / solve / combine · merge sort · fast power · majority element · Master Theorem cases · closest pair of points |
| 074 | `pc-074-backtracking-template.html` | Backtracking Template | choose / explore / unchoose · state &amp; path · decision tree · pruning · copy on record · branches^depth cost |
| 075 | `pc-075-subsets-combinations.html` | Subsets &amp; Combinations | include / exclude · start index · skip duplicates (sort + check) · combination sum I / II · k-combinations · bitmask enumeration |
| 076 | `pc-076-permutations.html` | Permutations | used[] array · swap-in-place method · duplicate handling · next permutation · kth permutation · n! cost |
| 077 | `pc-077-board-grid-backtracking.html` | Board &amp; Grid Backtracking | N-Queens (column / diagonal sets) · Sudoku solver · word search · palindrome partitioning · restore visited cell |

## Group 11 — Dynamic Programming (078–088)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 078 | `pc-078-dp-fundamentals-memoization.html` | DP Fundamentals &amp; Memoization | overlapping subproblems · optimal substructure · state · transition · base case · top-down memo · brute force → memo |
| 079 | `pc-079-tabulation-space-optimization.html` | Tabulation &amp; Space Optimization | bottom-up table · fill order · rolling variables · two-row trick · reverse iteration · reconstructing the answer |
| 080 | `pc-080-1d-dp.html` | 1D DP Patterns | climbing stairs · house robber · decode ways · coin change (min coins) · word break · jump game |
| 081 | `pc-081-2d-grid-dp.html` | 2D Grid DP | unique paths · obstacles · minimum path sum · maximal square · dungeon game · triangle |
| 082 | `pc-082-knapsack-family.html` | Knapsack Family | 0/1 knapsack · unbounded knapsack · reverse capacity loop · partition equal subset sum · target sum · coin change II (ways) |
| 083 | `pc-083-string-dp.html` | String DP | longest common subsequence · edit distance · longest palindromic subsequence · distinct subsequences · wildcard / regex matching |
| 084 | `pc-084-longest-increasing-subsequence.html` | Longest Increasing Subsequence | O(n²) DP · O(n log n) tails + binary search · number of LIS · Russian doll envelopes · longest chain |
| 085 | `pc-085-interval-dp.html` | Interval DP | dp[i][j] over ranges · iterate by length · burst balloons · matrix chain multiplication · min cuts palindrome partitioning |
| 086 | `pc-086-state-machine-dp.html` | State Machine DP | hold / not-hold states · stock with cooldown · stock with fee · at most k transactions · paint house |
| 087 | `pc-087-tree-dag-dp.html` | Tree &amp; DAG DP | post-order DP · house robber III · tree diameter · longest path in DAG · rerooting · binary tree cameras |
| 088 | `pc-088-bitmask-dp.html` | Bitmask DP | dp[mask] · visited-set as integer · traveling salesman · task assignment · partition to k equal subsets · n ≤ 20 signal |

## Group 12 — Greedy Algorithms (089–090)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 089 | `pc-089-greedy-fundamentals.html` | Greedy Fundamentals | greedy choice property · exchange argument · sort first · counterexample check · jump game · gas station |
| 090 | `pc-090-greedy-patterns.html` | Greedy Patterns | activity selection · task scheduler · partition labels · two city scheduling · Huffman coding · hand of straights |

## Group 13 — Advanced Data Structures & Design (091–095)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 091 | `pc-091-tries.html` | Tries (Prefix Trees) | node children map / array[26] · end-of-word flag · insert / search / startsWith · word search II · autocomplete · wildcard search |
| 092 | `pc-092-segment-trees.html` | Segment Trees | build · range query · point update · array layout · lazy propagation · range sum / min / max |
| 093 | `pc-093-fenwick-trees.html` | Fenwick Trees (Binary Indexed Trees) | lowbit i &amp; -i · prefix sum query · point update · 1-indexing · count of smaller after self · vs segment tree |
| 094 | `pc-094-lru-lfu-caches.html` | LRU &amp; LFU Caches | hash map + doubly linked list · O(1) get / put · eviction · frequency buckets · min-frequency tracking |
| 095 | `pc-095-data-structure-design.html` | Data Structure Design Problems | min stack · insert / delete / getRandom O(1) · time-based key-value store · peeking &amp; flatten iterators · hit counter |

## Group 14 — Math & Number Theory (096–100)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 096 | `pc-096-number-theory-digits.html` | Number Theory &amp; Digit Manipulation | GCD (Euclid) · LCM · Sieve of Eratosthenes · prime factorization · divisors to √n · n mod 10 / n div 10 · reverse integer |
| 097 | `pc-097-modular-arithmetic-fast-power.html` | Modular Arithmetic &amp; Fast Exponentiation | mod 10⁹+7 · (a·b) mod m · negative mod fix · binary exponentiation · modular inverse (Fermat) · overflow-safe multiply |
| 098 | `pc-098-combinatorics-counting.html` | Combinatorics &amp; Counting | nCr · Pascal's triangle · precomputed factorials · permutations vs combinations · Catalan numbers · stars and bars · pigeonhole |
| 099 | `pc-099-randomized-algorithms.html` | Randomized Algorithms &amp; Sampling | Fisher-Yates shuffle · reservoir sampling · weighted random pick (prefix + binary search) · rejection sampling · random pivot |
| 100 | `pc-100-computational-geometry.html` | Computational Geometry Basics | cross product orientation · Euclidean vs Manhattan distance · slope as reduced fraction · max points on a line · rectangle overlap · convex hull (monotone chain) · point in polygon |

## Group 15 — String Algorithms (101–102)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 101 | `pc-101-kmp-z-manacher.html` | Linear-Time String Algorithms: KMP, Z &amp; Manacher | LPS / failure array · KMP search · Z-array · pattern search O(n + m) · expand around center · Manacher O(n) |
| 102 | `pc-102-rolling-hash-rabin-karp.html` | Rolling Hash &amp; Rabin-Karp | polynomial hash · base &amp; mod · slide update · collision check · double hashing · longest duplicate substring (binary search + hash) |

## Group 16 — Quick Reference (103–104)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 103 | `pc-103-pattern-recognition.html` | Pattern Recognition Guide | "sorted" → binary search / two pointers · "contiguous" → window / prefix · "top k" → heap · "all combinations" → backtracking · "min steps" → BFS · "count ways" → DP |
| 104 | `pc-104-template-quick-reference.html` | Algorithm Templates — Quick Reference | binary search · sliding window · BFS · DFS · backtracking · union-find · Dijkstra · DP memo |
