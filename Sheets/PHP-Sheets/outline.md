# PHP Reference — Outline

Drafted from the Outline Guide (`CheatSheets/Outline_guide.md` in Google Drive). Once sheets are built, regenerate `manifest.json` from this outline and keep the two in sync when sheets are added, renamed or reordered.

## Profile

- **Collection section:** Web Technologies
- **Status:** Planned
- **Sheets:** 133 across 18 groups
- **File prefix:** `php` (`php-##-[slug].html`)
- **Folder:** `Sheets/PHP-Sheets/`
- **Target version:** PHP 8.5 (features from 8.0–8.5 are marked with their version on the sheet)
- **Language type:** general-purpose, web-focused; intermediate audience
- **Coverage:** introduction & setup, output & comments, variables & data types, strings, operators, control flow, error handling, functions, arrays & data structures, OOP, files & I/O, modules, Composer & standard library, testing, debugging & tooling, advanced topics, web fundamentals, databases with PDO, security, quick reference

### Sizing note

The guide's target for a general-purpose language is 80–110 sheets. The 14 standard groups (01–108) come to 108. Groups 15–17 (web, PDO, security, 22 sheets) are PHP-specific and push the total to 133. They pass the guide's Step 3 test ("would a professional developer spend days learning it?"), so they stay as separate groups rather than being squeezed into the standard ones.

### Deep areas

- **Arrays** — PHP's one array type does the work of lists, maps, stacks and queues, and the function library is huge (11 sheets).
- **OOP** — PHP 8.x added constructor promotion, readonly, enums, property hooks and asymmetric visibility (15 sheets).
- **Web request handling** — superglobals, forms, sessions, cookies, uploads (10 sheets).
- **Security** — PHP's history makes this a must-have group, not a footnote (6 sheets).

---

## Group 1 — Introduction & Setup (01–04)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `php-01-history-versions.html` | PHP History &amp; Versions | Rasmus Lerdorf · Zend Engine · PHP 7 vs 8 · release cycle · RFCs · PHP-FIG |
| 02 | `php-02-installation-setup.html` | Installation &amp; Configuration | php -v · php --ini · php.ini · extensions · Homebrew · apt · Docker php images |
| 03 | `php-03-running-php.html` | Running PHP | php script.php · php -a · php -r · php -S · php-fpm · mod_php · shebang |
| 04 | `php-04-program-structure.html` | Program Structure &amp; PHP Tags | &lt;?php · &lt;?= · omitting ?&gt; · semicolons · declare(strict_types=1) · mixing HTML |

## Group 2 — Output & Comments (05–07)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 05 | `php-05-echo-print.html` | echo, print &amp; Output | echo · print · multiple args · short echo tag · PHP_EOL · output buffering ob_start() |
| 06 | `php-06-dumping-values.html` | Dumping &amp; Inspecting Values | print_r() · var_dump() · var_export() · debug_zval_refcount · debug_print_backtrace() · error_log() |
| 07 | `php-07-comments-phpdoc.html` | Comments &amp; PHPDoc | // · # · /* */ · /** */ · @param · @return · @var · @throws |

## Group 3 — Variables & Data Types (08–15)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 08 | `php-08-variables-assignment.html` | Variables &amp; Assignment | $name · by value · by reference =&amp; · variable variables $$ · isset() · unset() |
| 09 | `php-09-constants.html` | Constants &amp; Magic Constants | const · define() · defined() · __LINE__ · __FILE__ · __DIR__ · PHP_INT_MAX · PHP_VERSION |
| 10 | `php-10-integers.html` | Integers | int literals · 0x · 0o · 0b · 1_000_000 · overflow to float · intdiv() · intval() |
| 11 | `php-11-floats.html` | Floats | float literals · 1.5e3 · precision · INF · NAN · is_nan() · round() · BCMath |
| 12 | `php-12-booleans-truthiness.html` | Booleans &amp; Truthiness | true · false · falsy values · "0" is falsy · (bool) · empty() |
| 13 | `php-13-null.html` | Null | null · is_null() · nullable ?int · unset vs null · null in comparisons · uninitialized typed properties |
| 14 | `php-14-type-juggling-casting.html` | Type Juggling &amp; Casting | (int) · (string) · (array) · settype() · numeric strings · PHP 8 string-number comparison |
| 15 | `php-15-type-checking.html` | Type Checking | gettype() · get_debug_type() · is_int() · is_string() · is_numeric() · instanceof · TypeError |

## Group 4 — Strings (16–21)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 16 | `php-16-string-basics.html` | String Basics &amp; Interpolation | 'single' vs "double" · "$var" · "{$obj-&gt;prop}" · escape sequences · heredoc · nowdoc · . concatenation |
| 17 | `php-17-string-formatting.html` | String Formatting | printf() · sprintf() · %s %d %05.2f · number_format() · str_pad() · vsprintf() |
| 18 | `php-18-string-search.html` | String Functions — Search | strpos() · stripos() · str_contains() · str_starts_with() · str_ends_with() · strstr() · substr_count() |
| 19 | `php-19-string-transform.html` | String Functions — Transform | strtoupper() · ucfirst() · ucwords() · trim() · str_replace() · str_repeat() · wordwrap() |
| 20 | `php-20-substrings-splitting.html` | Substrings, Indexing &amp; Splitting | substr() · $str[0] · $str[-1] · explode() · implode() · str_split() · strtok() |
| 21 | `php-21-multibyte-strings.html` | Multibyte Strings &amp; UTF-8 | mbstring · mb_strlen() · mb_substr() · mb_strtoupper() · mb_str_pad() · bytes vs characters · iconv() |

## Group 5 — Operators (22–27)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 22 | `php-22-arithmetic-operators.html` | Arithmetic Operators | + - * / % ** · ++ -- · intdiv() · fmod() · DivisionByZeroError · numeric-string math |
| 23 | `php-23-comparison-operators.html` | Comparison Operators | == vs === · != !== · &lt;=&gt; spaceship · loose comparison table · comparing arrays |
| 24 | `php-24-logical-operators.html` | Logical Operators | &amp;&amp; · \|\| · ! · and · or · xor · precedence pitfall · short-circuit |
| 25 | `php-25-bitwise-operators.html` | Bitwise Operators | &amp; · \| · ^ · ~ · &lt;&lt; · &gt;&gt; · E_ALL &amp; ~E_NOTICE · flag constants |
| 26 | `php-26-assignment-precedence.html` | Assignment &amp; Operator Precedence | = · += · .= · **= · =&amp; · precedence table · associativity |
| 27 | `php-27-null-special-operators.html` | Null-Safe &amp; Special Operators | ?? · ??= · ?: · ?-&gt; · @ suppression · ... spread · \|&gt; pipe (8.5) |

## Group 6 — Control Flow (28–35)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 28 | `php-28-if-elseif-else.html` | if, elseif &amp; else | if · elseif vs else if · else · alternative syntax endif · guard clauses |
| 29 | `php-29-ternary-expressions.html` | Ternary &amp; Conditional Expressions | ?: · short ternary ?: · nested ternary needs parens · ?? as default · ternary in templates |
| 30 | `php-30-switch.html` | switch | switch · case · break · fall-through · default · loose comparison · endswitch |
| 31 | `php-31-match.html` | match Expressions | match · strict === · comma conditions · no fall-through · UnhandledMatchError · match(true) |
| 32 | `php-32-for-loops.html` | for Loops | for · multiple expressions · count() hoisting · nested loops · endfor |
| 33 | `php-33-foreach-loops.html` | foreach Loops | foreach as $v · $k =&gt; $v · by reference &amp;$v · unset after reference · destructuring · endforeach |
| 34 | `php-34-while-do-while.html` | while &amp; do-while | while · do…while · endwhile · while ($row = …) · infinite loops |
| 35 | `php-35-loop-controls.html` | Loop Controls | break · continue · break 2 · continue 2 · goto · exit / die |

## Group 7 — Error Handling (36–40)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 36 | `php-36-errors-vs-exceptions.html` | Errors vs Exceptions | E_WARNING · E_NOTICE · E_DEPRECATED · error_reporting() · display_errors · Throwable · Error vs Exception |
| 37 | `php-37-try-catch-finally.html` | try, catch &amp; finally | try · catch · multi-catch A\|B · catch without variable · finally · rethrow · getMessage() |
| 38 | `php-38-throwing-spl-exceptions.html` | Throwing &amp; SPL Exceptions | throw · throw as expression · InvalidArgumentException · RuntimeException · LogicException · ValueError |
| 39 | `php-39-custom-exceptions.html` | Custom Exceptions | extends Exception · getCode() · getPrevious() · chaining · exception hierarchies · getTraceAsString() |
| 40 | `php-40-error-handlers.html` | Global Error Handlers | set_error_handler() · set_exception_handler() · ErrorException · register_shutdown_function() · error_get_last() · trigger_error() |

## Group 8 — Functions (41–50)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 41 | `php-41-function-basics.html` | Defining &amp; Calling Functions | function · return · case-insensitive names · function_exists() · conditional definitions · early return |
| 42 | `php-42-parameters-arguments.html` | Parameters &amp; Arguments | default values · pass by reference &amp; · named arguments · optional-before-required deprecation · nullable defaults |
| 43 | `php-43-variadics-spread.html` | Variadic Parameters &amp; Spread | ...$args · spread in calls · string-key spread · func_get_args() · named + variadic |
| 44 | `php-44-type-declarations.html` | Parameter &amp; Return Types | int\|string · ?int · void · never · mixed · static · A&amp;B · DNF types |
| 45 | `php-45-variable-scope.html` | Variable Scope | local scope · global · $GLOBALS · static variables · no block scope · superglobals |
| 46 | `php-46-closures.html` | Anonymous Functions &amp; Closures | function () use ($x) · use (&amp;$x) · Closure::bind() · bindTo() · static function · $this binding |
| 47 | `php-47-arrow-functions.html` | Arrow Functions | fn () =&gt; · auto capture by value · single expression · nesting · arrow vs closure |
| 48 | `php-48-callables.html` | Callables &amp; First-Class Callables | callable type · 'strlen' · [$obj, 'method'] · strlen(...) · is_callable() · call_user_func() · __invoke |
| 49 | `php-49-recursion.html` | Recursion | base case · recursive closures · static memo · stack depth · array_walk_recursive() · tail calls (none) |
| 50 | `php-50-generators.html` | Generators &amp; yield | yield · yield $k =&gt; $v · yield from · send() · getReturn() · iterator_to_array() · memory savings |

## Group 9 — Arrays & Data Structures (51–61)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 51 | `php-51-array-basics.html` | Array Basics | [] · array() · indexed vs associative · key casting · count() · ordered hash map |
| 52 | `php-52-array-add-remove.html` | Adding &amp; Removing Elements | $a[] = · array_push() · array_pop() · array_shift() · array_unshift() · unset() · array_splice() |
| 53 | `php-53-array-search.html` | Searching Arrays | in_array() · array_search() · array_key_exists() · isset vs array_key_exists · array_find() · array_any() · array_all() |
| 54 | `php-54-array-transform.html` | Transforming Arrays | array_map() · array_filter() · array_reduce() · array_walk() · array_column() · array_combine() |
| 55 | `php-55-array-sorting.html` | Sorting Arrays | sort() · asort() · ksort() · usort() · uasort() · uksort() · SORT_ flags · stable sort |
| 56 | `php-56-array-slice-merge.html` | Slicing, Merging &amp; Building | array_slice() · array_merge() · + union · [...$a, ...$b] · array_chunk() · array_fill() · range() |
| 57 | `php-57-array-set-operations.html` | Set Operations &amp; Keys | array_unique() · array_diff() · array_intersect() · _key variants · array_flip() · array_keys() · array_first() / array_last() (8.5) |
| 58 | `php-58-array-destructuring.html` | Array Destructuring | [$a, $b] = · list() · ['x' =&gt; $x] = · nested · swap · foreach destructuring |
| 59 | `php-59-multidimensional-arrays.html` | Multidimensional Arrays | nested arrays · array_column() · grouping by key · matrix loops · deep copy behavior · array_walk_recursive() |
| 60 | `php-60-spl-data-structures.html` | SPL Data Structures | SplStack · SplQueue · SplPriorityQueue · SplMinHeap · SplFixedArray · SplObjectStorage · ArrayObject |
| 61 | `php-61-iterators.html` | Iterators &amp; Iterables | Iterator · IteratorAggregate · Traversable · ArrayIterator · iterable type · Countable |

## Group 10 — Object-Oriented PHP (62–76)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 62 | `php-62-classes-objects.html` | Classes &amp; Objects | class · new · -&gt; · $this · instanceof · new without parentheses (8.4) · object handles |
| 63 | `php-63-properties.html` | Properties &amp; Readonly | typed properties · defaults · readonly (8.1) · readonly classes (8.2) · dynamic properties deprecated · #[AllowDynamicProperties] |
| 64 | `php-64-constructors.html` | Constructors &amp; Destructors | __construct · constructor promotion · new in initializers · static factories · __destruct |
| 65 | `php-65-visibility.html` | Visibility &amp; Access Control | public · protected · private · private(set) asymmetric visibility (8.4) · getters &amp; setters · encapsulation |
| 66 | `php-66-property-hooks.html` | Property Hooks | get hook · set hook · virtual properties · backed properties · hooks in interfaces · PHP 8.4 |
| 67 | `php-67-static-members.html` | Static Members &amp; Class Constants | static · self:: · static:: late static binding · parent:: · class constants · typed constants (8.3) |
| 68 | `php-68-inheritance.html` | Inheritance | extends · parent::__construct() · overriding · final · #[\Override] · covariance &amp; contravariance |
| 69 | `php-69-abstract-classes.html` | Abstract Classes | abstract class · abstract method · partial implementation · template method · abstract vs interface |
| 70 | `php-70-interfaces.html` | Interfaces | interface · implements · multiple interfaces · interface constants · Stringable · ArrayAccess · Countable |
| 71 | `php-71-traits.html` | Traits | trait · use · insteadof · as alias · abstract &amp; static in traits · trait constants (8.2) |
| 72 | `php-72-enums.html` | Enums | enum · pure vs backed · cases() · from() · tryFrom() · enum methods · enum interfaces |
| 73 | `php-73-magic-methods-overloading.html` | Magic Methods — Property &amp; Call Overloading | __get · __set · __isset · __unset · __call · __callStatic · __toString · __invoke |
| 74 | `php-74-magic-methods-lifecycle.html` | Magic Methods — Cloning &amp; Serialization | __clone · __serialize · __unserialize · __sleep · __wakeup · __debugInfo · __set_state |
| 75 | `php-75-cloning-comparison.html` | Cloning &amp; Comparing Objects | clone · shallow vs deep copy · clone with (8.5) · == vs === on objects · spl_object_id() · WeakMap |
| 76 | `php-76-reflection-object-utils.html` | Reflection &amp; Object Utilities | ::class · get_class() · method_exists() · property_exists() · get_object_vars() · ReflectionClass · ReflectionMethod |

## Group 11 — Files & I/O (77–84)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 77 | `php-77-reading-files.html` | Reading Files | file_get_contents() · file() · fopen() · fgets() · fread() · feof() · SplFileObject |
| 78 | `php-78-writing-files.html` | Writing &amp; Appending Files | file_put_contents() · FILE_APPEND · LOCK_EX · fwrite() · modes w a x c · tempnam() |
| 79 | `php-79-file-paths.html` | File Paths &amp; File Info | __DIR__ · realpath() · basename() · dirname() · pathinfo() · DIRECTORY_SEPARATOR · file_exists() |
| 80 | `php-80-directories.html` | Directories &amp; File Management | mkdir() · scandir() · glob() · RecursiveDirectoryIterator · rename() · copy() · unlink() · rmdir() |
| 81 | `php-81-json.html` | JSON | json_encode() · json_decode() · associative true · JSON_PRETTY_PRINT · JSON_THROW_ON_ERROR · JsonSerializable · json_validate() |
| 82 | `php-82-csv.html` | CSV | fgetcsv() · fputcsv() · str_getcsv() · escape parameter · SplFileObject::READ_CSV · UTF-8 BOM |
| 83 | `php-83-xml-html-parsing.html` | XML &amp; HTML Parsing | SimpleXMLElement · simplexml_load_string() · DOMDocument · DOMXPath · XMLReader · Dom\HTMLDocument (8.4) |
| 84 | `php-84-streams-wrappers.html` | Streams &amp; Wrappers | php://input · php://stdin · php://memory · php://temp · stream_context_create() · data:// · compress.zlib:// |

## Group 12 — Modules, Composer & Standard Library (85–93)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 85 | `php-85-include-require.html` | include &amp; require | include · require · include_once · require_once · return values · include_path · __DIR__ paths |
| 86 | `php-86-namespaces.html` | Namespaces | namespace · use · as aliases · use function · use const · group use · global \ prefix |
| 87 | `php-87-autoloading.html` | Autoloading &amp; PSR-4 | spl_autoload_register() · PSR-4 mapping · classmap · vendor/autoload.php · composer dump-autoload |
| 88 | `php-88-composer-basics.html` | Composer Basics | composer init · require · require --dev · composer.json · composer.lock · install vs update · ^ and ~ constraints |
| 89 | `php-89-composer-advanced.html` | Composer — Scripts &amp; Publishing | scripts · autoload-dev · Packagist · repositories · platform requirements · composer audit · bump |
| 90 | `php-90-math-random.html` | Math &amp; Random | abs() · round() · floor() · ceil() · max() · min() · random_int() · Random\Randomizer |
| 91 | `php-91-dates-timestamps.html` | Dates — date() &amp; Timestamps | time() · date() · format codes · mktime() · strtotime() · checkdate() · date_default_timezone_set() |
| 92 | `php-92-datetime-objects.html` | DateTime Objects | DateTimeImmutable · DateTime · DateInterval · DatePeriod · DateTimeZone · diff() · modify() |
| 93 | `php-93-system-environment.html` | System &amp; Environment | getenv() · $_ENV · PHP_OS_FAMILY · ini_get() · ini_set() · exec() · proc_open() · escapeshellarg() |

## Group 13 — Testing, Debugging & Tooling (94–101)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 94 | `php-94-phpunit-basics.html` | PHPUnit Basics | TestCase · assertSame() · assertEquals() · setUp() · expectException() · phpunit.xml · vendor/bin/phpunit |
| 95 | `php-95-phpunit-doubles-providers.html` | PHPUnit — Data Providers &amp; Test Doubles | #[DataProvider] · createMock() · createStub() · expects() · willReturn() · code coverage |
| 96 | `php-96-pest.html` | Pest | test() · it() · expect() · datasets · beforeEach() · arch tests · pest --parallel |
| 97 | `php-97-xdebug.html` | Debugging with Xdebug | xdebug.mode · step debugging · breakpoints · IDE setup · profiling · trace mode |
| 98 | `php-98-static-analysis.html` | Static Analysis — PHPStan &amp; Psalm | PHPStan levels · phpstan.neon · baseline · Psalm · @template generics · @phpstan-ignore |
| 99 | `php-99-code-style.html` | Code Style &amp; Refactoring Tools | PER Coding Style · PSR-12 · PHP-CS-Fixer · PHP_CodeSniffer · Rector · php -l |
| 100 | `php-100-logging-monolog.html` | Logging — Monolog &amp; PSR-3 | Monolog Logger · handlers · formatters · log levels · context arrays · PSR-3 LoggerInterface |
| 101 | `php-101-http-clients.html` | HTTP Clients — cURL &amp; Guzzle | curl_init() · CURLOPT_ options · curl_exec() · Guzzle Client · request options · PSR-18 |

## Group 14 — Advanced Topics (102–108)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 102 | `php-102-regex.html` | Regular Expressions (PCRE) | preg_match() · preg_match_all() · preg_replace() · preg_replace_callback() · preg_split() · delimiters &amp; flags · named groups |
| 103 | `php-103-attributes.html` | Attributes | #[Attribute] · targets · IS_REPEATABLE · ReflectionAttribute · #[\SensitiveParameter] · #[\Deprecated] · #[\NoDiscard] |
| 104 | `php-104-serialization.html` | Serialization | serialize() · unserialize() · allowed_classes · object injection risk · var_export() · igbinary |
| 105 | `php-105-fibers-async.html` | Fibers &amp; Async PHP | Fiber · start() · suspend() · resume() · event loops · Revolt · ReactPHP · AMPHP |
| 106 | `php-106-cli-scripts.html` | CLI Scripts | $argv · $argc · getopt() · STDIN · STDOUT · STDERR · exit codes · PHP_SAPI |
| 107 | `php-107-performance-opcache.html` | Performance, OPcache &amp; JIT | OPcache · opcache.validate_timestamps · preloading · JIT · realpath cache · memory_get_usage() · profiling |
| 108 | `php-108-memory-weak-lazy.html` | Memory, Weak References &amp; Lazy Objects | refcounting · gc_collect_cycles() · WeakReference · WeakMap · lazy ghosts · lazy proxies (8.4) |

## Group 15 — Web Fundamentals (109–118)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 109 | `php-109-request-lifecycle.html` | The Request Lifecycle | share-nothing model · SAPI · php-fpm · nginx · Apache · front controller · FrankenPHP |
| 110 | `php-110-superglobals.html` | Superglobals | $_GET · $_POST · $_REQUEST · $_SERVER · $_FILES · $_COOKIE · $_SESSION |
| 111 | `php-111-forms.html` | Handling Forms | method="post" · $_POST · isset checks · sticky forms · Post/Redirect/Get · arrays in names[] |
| 112 | `php-112-input-validation.html` | Input Validation &amp; Filtering | filter_var() · FILTER_VALIDATE_EMAIL · FILTER_VALIDATE_INT · options &amp; flags · filter_input() · ctype_* |
| 113 | `php-113-headers-responses.html` | Headers, Redirects &amp; Status Codes | header() · http_response_code() · Location redirects · headers_sent() · Content-Type · JSON responses |
| 114 | `php-114-cookies.html` | Cookies | setcookie() · options array · SameSite · HttpOnly · Secure · expiry · deleting cookies |
| 115 | `php-115-sessions.html` | Sessions | session_start() · $_SESSION · session_regenerate_id() · session_destroy() · session_set_cookie_params() · save handlers |
| 116 | `php-116-file-uploads.html` | File Uploads | $_FILES · move_uploaded_file() · UPLOAD_ERR_* · upload_max_filesize · post_max_size · finfo MIME checks |
| 117 | `php-117-templating.html` | Templating &amp; Views | alternative syntax · &lt;?= ?&gt; · partials via include · output buffering layouts · Twig · Blade |
| 118 | `php-118-routing-json-api.html` | Routing &amp; JSON APIs | REQUEST_METHOD · REQUEST_URI · parse_url() · php://input JSON · simple router · PSR-7 · PSR-15 |

## Group 16 — Databases with PDO (119–124)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 119 | `php-119-pdo-connecting.html` | PDO — Connecting | new PDO() · DSN strings · ERRMODE_EXCEPTION · DEFAULT_FETCH_MODE · utf8mb4 · driver-specific subclasses (8.4) |
| 120 | `php-120-pdo-prepared-statements.html` | PDO — Prepared Statements | prepare() · execute() · :named · ? positional · bindValue() · bindParam() · PDO::PARAM_INT |
| 121 | `php-121-pdo-fetching.html` | PDO — Fetching Results | fetch() · fetchAll() · fetchColumn() · FETCH_ASSOC · FETCH_OBJ · FETCH_CLASS · FETCH_KEY_PAIR · lastInsertId() |
| 122 | `php-122-pdo-transactions.html` | PDO — Transactions &amp; Errors | beginTransaction() · commit() · rollBack() · inTransaction() · PDOException · errorInfo |
| 123 | `php-123-mysqli.html` | MySQLi | new mysqli() · prepare() · bind_param() · get_result() · procedural vs OO · mysqli_report() |
| 124 | `php-124-orms-query-builders.html` | ORMs &amp; Query Builders | Doctrine ORM · Doctrine DBAL · Eloquent · entities · migrations · N+1 queries |

## Group 17 — Security (125–130)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 125 | `php-125-xss-output-escaping.html` | XSS &amp; Output Escaping | htmlspecialchars() · ENT_QUOTES · context-aware escaping · urlencode() · JSON_HEX_TAG · Content-Security-Policy |
| 126 | `php-126-sql-injection.html` | SQL Injection | prepared statements · never interpolate · identifier allow-lists · LIKE wildcards · IN() lists · least privilege |
| 127 | `php-127-csrf-session-security.html` | CSRF &amp; Session Security | CSRF tokens · random_bytes() · hash_equals() · SameSite · session fixation · session.cookie_secure |
| 128 | `php-128-password-hashing.html` | Password Hashing | password_hash() · password_verify() · PASSWORD_ARGON2ID · PASSWORD_BCRYPT · password_needs_rehash() · why not md5/sha1 |
| 129 | `php-129-cryptography.html` | Hashing, HMAC &amp; Encryption | hash() · hash_hmac() · sodium_crypto_secretbox() · sodium_crypto_box() · openssl_encrypt() · random_bytes() |
| 130 | `php-130-secure-configuration.html` | Secure Configuration &amp; File Safety | display_errors=Off · expose_php · open_basedir · disable_functions · allow_url_include · LFI/RFI · upload directories |

## Group 18 — Quick Reference (131–133)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 131 | `php-131-version-feature-timeline.html` | PHP 8.x Feature Timeline | 8.0 match &amp; named args · 8.1 enums &amp; fibers · 8.2 readonly classes · 8.3 typed constants · 8.4 property hooks · 8.5 pipe operator |
| 132 | `php-132-quick-reference-syntax.html` | Quick Reference — Syntax | tags · variables · operators · control flow · functions · classes · namespaces |
| 133 | `php-133-quick-reference-functions.html` | Quick Reference — Core Functions | string · array · math · date · file · JSON · type checks |
