# Python Reference — Outline

Generated from `manifest.json`; keep the two in sync when sheets are added, renamed or reordered.

## Profile

- **Collection section:** Languages
- **Status:** Complete
- **Sheets:** 96 across 15 groups
- **File prefix:** `py` (`py-##-[slug].html`)
- **Folder:** `Sheets/Python-Sheets/`
- **Coverage:** output & comments, variables & data types, strings, operators, control flow, error handling, functions, data structures, OOP, files & I/O, modules & standard library, testing & logging, advanced topics, Tkinter GUI

---

## Group 1 — Introduction & Setup (01–04)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `py-01-history-philosophy.html` | Python History &amp; Philosophy | CPython · Zen of Python · PEP 20 · PEP 8 · Python 3 · .py files |
| 02 | `py-02-installation-setup.html` | Installation &amp; Setup | python.org · py launcher · venv · pip · pyenv · conda · uv |
| 03 | `py-03-running-scripts.html` | Running Python | REPL · python script.py · -m · -c · -i · shebang |
| 04 | `py-04-program-structure.html` | Program Structure &amp; Entry Point | if __name__ == "__main__" · main() · indentation · imports · line continuation |

## Group 2 — Output & Comments (05–06)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 05 | `py-05-print-output.html` | Print &amp; Output | print() · sep · end · file · flush · sys.stdout · sys.stderr |
| 06 | `py-06-comments-docstrings.html` | Comments &amp; Docstrings | # comments · docstrings · __doc__ · help() · doctest · PEP 257 |

## Group 3 — Variables & Data Types (07–13)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 07 | `py-07-variables-assignment.html` | Variables &amp; Assignment | assignment · multiple assignment · unpacking · del · constants · PEP 8 naming |
| 08 | `py-08-integers.html` | Integers | int literals · 0x · 0o · 0b · int() · arbitrary precision · _ separators |
| 09 | `py-09-floats.html` | Floats | float literals · e notation · inf · nan · round() · math.isclose · Decimal |
| 10 | `py-10-booleans.html` | Booleans &amp; Truthiness | True · False · bool() · truthy · falsy · bool as int |
| 11 | `py-11-none.html` | None &amp; Type Checking | None · is None · type() · isinstance() · hasattr() |
| 12 | `py-12-type-conversion.html` | Type Conversion &amp; Casting | int() · float() · str() · bool() · ValueError · implicit coercion |
| 13 | `py-13-input-parsing.html` | User Input &amp; Parsing | input() · int(input()) · strip() · try/except ValueError · validation loop |

## Group 4 — Strings (14–18)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 14 | `py-14-string-basics.html` | String Basics | quotes · triple quotes · raw strings · concatenation · len() · immutability |
| 15 | `py-15-string-formatting.html` | String Formatting | f-strings · format() · format spec · alignment · padding · % formatting |
| 16 | `py-16-string-search.html` | String Methods — Search | find() · index() · startswith() · endswith() · in · count() · rfind() |
| 17 | `py-17-string-transform.html` | String Methods — Transform | replace() · split() · join() · strip() · upper() · lower() · title() |
| 18 | `py-18-string-slicing.html` | String Slicing &amp; Indexing | s[i] · negative index · s[start:stop] · step · s[::-1] |

## Group 5 — Operators (19–24)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 19 | `py-19-arithmetic-operators.html` | Arithmetic Operators | + · - · * · / · // · % · ** · divmod() |
| 20 | `py-20-comparison-operators.html` | Comparison Operators | == · != · &lt; · > · &lt;= · >= · chained comparisons |
| 21 | `py-21-logical-operators.html` | Logical Operators | and · or · not · short-circuit · return values |
| 22 | `py-22-bitwise-operators.html` | Bitwise Operators | &amp; · \| · ^ · ~ · &lt;&lt; · >> · bin() |
| 23 | `py-23-assignment-operators.html` | Assignment &amp; Compound Assignment | = · += · -= · *= · /= · //= · := walrus |
| 24 | `py-24-membership-identity.html` | Membership &amp; Identity Operators | in · not in · is · is not · id() |

## Group 6 — Control Flow (25–33)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 25 | `py-25-if-elif-else.html` | if/elif/else Statements | if · elif · else · nested if · pass |
| 26 | `py-26-match-case.html` | match/case Pattern Matching | match · case · _ wildcard · \| or-patterns · if guards · capture · class patterns |
| 27 | `py-27-ternary-expressions.html` | Ternary &amp; Conditional Expressions | x if c else y · nested ternary · conditional expressions |
| 28 | `py-28-for-loops.html` | for Loops | for · range() · enumerate() · zip() · reversed() · for-else |
| 29 | `py-29-while-loops.html` | while Loops | while · while-else · while True · sentinel loops |
| 30 | `py-30-loop-controls.html` | Loop Controls | break · continue · pass · loop else · flag variables |
| 31 | `py-31-list-comprehensions.html` | List Comprehensions | [x for x in it] · if filter · if-else · nested comprehensions |
| 32 | `py-32-dict-set-comprehensions.html` | Dict &amp; Set Comprehensions | {k: v for} · {x for} · dict filters · inverting dicts |
| 33 | `py-33-generator-expressions.html` | Generator Expressions | (x for x in it) · lazy evaluation · sum() · any() · all() · next() |

## Group 7 — Error Handling (34–36)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 34 | `py-34-try-except-finally.html` | try/except/finally Blocks | try · except · else · finally · except as e · exception hierarchy |
| 35 | `py-35-raising-exceptions.html` | Raising &amp; Re-raising Exceptions | raise · raise from · re-raise · ValueError · TypeError · ExceptionGroup |
| 36 | `py-36-custom-exceptions.html` | Custom Exceptions | class MyError(Exception) · __init__ · __str__ · exception hierarchies |

## Group 8 — Functions (37–45)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 37 | `py-37-function-basics.html` | Defining &amp; Calling Functions | def · return · multiple return · None return · call syntax |
| 38 | `py-38-parameters-arguments.html` | Parameters &amp; Arguments | positional · keyword · *args · **kwargs · unpacking at call |
| 39 | `py-39-default-keyword-args.html` | Default &amp; Keyword Arguments | default values · mutable default pitfall · keyword-only · positional-only · / · * |
| 40 | `py-40-variable-scope.html` | Variable Scope | local · global · nonlocal · LEGB · shadowing |
| 41 | `py-41-closures.html` | Closures &amp; Nested Functions | nested def · closure · nonlocal · __closure__ · factory functions |
| 42 | `py-42-lambda-functions.html` | Lambda Functions | lambda · sorted(key=) · map() · filter() · limitations |
| 43 | `py-43-higher-order-functions.html` | Higher-Order Functions | map() · filter() · sorted() · functools.reduce() · functions as values |
| 44 | `py-44-decorators.html` | Decorators | @decorator · wrapper · functools.wraps · decorator args · stacking |
| 45 | `py-45-generators-yield.html` | Generators &amp; yield | yield · generator function · next() · send() · yield from · StopIteration |

## Group 9 — Data Structures (46–56)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 46 | `py-46-lists-basics.html` | Lists — Basics | list literals · indexing · slicing · mutability · len() · iteration |
| 47 | `py-47-lists-methods.html` | Lists — Methods | append() · insert() · extend() · remove() · pop() · sort() · reverse() · copy() |
| 48 | `py-48-list-operations.html` | Lists — Advanced Operations | unpacking · * splat · nested lists · shallow copy · deepcopy · list vs array |
| 49 | `py-49-tuples.html` | Tuples | tuple literals · immutability · unpacking · namedtuple · hashable |
| 50 | `py-50-dictionaries-basics.html` | Dictionaries — Basics | dict literals · d[key] · KeyError · in · iteration · len() |
| 51 | `py-51-dictionaries-methods.html` | Dictionaries — Methods | get() · keys() · values() · items() · pop() · update() · setdefault() |
| 52 | `py-52-dictionaries-advanced.html` | Dictionaries — Advanced | defaultdict · OrderedDict · \| merge · nested dicts · dict comprehension |
| 53 | `py-53-sets.html` | Sets | set() · add() · discard() · \| · &amp; · - · ^ · frozenset |
| 54 | `py-54-collections-module.html` | Collections Module | namedtuple · Counter · defaultdict · deque · ChainMap · OrderedDict |
| 55 | `py-55-itertools-module.html` | itertools Module | count() · cycle() · chain() · combinations() · permutations() · groupby() · islice() |
| 56 | `py-56-sorting-searching.html` | Sorting &amp; Searching | sorted() · list.sort() · key= · reverse= · bisect · stable sort |

## Group 10 — OOP (57–67)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 57 | `py-57-classes-objects.html` | Classes &amp; Objects | class · instance · attributes · methods · self |
| 58 | `py-58-constructors-init.html` | Constructors &amp; Initialization | __init__ · __new__ · default args · alternative constructors · dataclass |
| 59 | `py-59-members-static-class.html` | Instance, Class &amp; Static Members | instance attrs · class attrs · @staticmethod · @classmethod · cls |
| 60 | `py-60-properties-access.html` | Properties &amp; Access Control | @property · setter · deleter · _private · __mangling · __slots__ |
| 61 | `py-61-inheritance.html` | Inheritance | class Child(Parent) · super() · overriding · isinstance() · issubclass() |
| 62 | `py-62-multiple-inheritance-mro.html` | Multiple Inheritance &amp; MRO | multiple inheritance · MRO · __mro__ · super() · diamond problem · mixins |
| 63 | `py-63-polymorphism.html` | Polymorphism &amp; Duck Typing | overriding · duck typing · protocols · isinstance() · EAFP |
| 64 | `py-64-abstract-classes.html` | Abstract Classes &amp; Interfaces | abc · ABC · @abstractmethod · typing.Protocol · mixins |
| 65 | `py-65-dunder-basics.html` | Dunder Methods — Basics | __str__ · __repr__ · __eq__ · __lt__ · __hash__ · @total_ordering |
| 66 | `py-66-dunder-operations.html` | Dunder Methods — Operations | __add__ · __radd__ · __getitem__ · __len__ · __contains__ · __iter__ · __call__ |
| 67 | `py-67-context-managers.html` | Context Managers | with · __enter__ · __exit__ · contextlib.contextmanager · suppress |

## Group 11 — Files & I/O (68–72)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 68 | `py-68-reading-files.html` | Reading Files | open() · read() · readline() · readlines() · for line in f · encoding |
| 69 | `py-69-writing-files.html` | Writing &amp; Appending Files | 'w' · 'a' · 'x' · write() · writelines() · print(file=) |
| 70 | `py-70-file-paths.html` | File Paths &amp; Operations | pathlib.Path · / operator · exists() · mkdir() · glob() · os.path |
| 71 | `py-71-json.html` | JSON | json.load() · json.dump() · json.loads() · json.dumps() · indent · default= |
| 72 | `py-72-csv.html` | CSV Files | csv.reader · csv.writer · DictReader · DictWriter · newline='' · delimiter |

## Group 12 — Modules & Standard Library (73–79)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 73 | `py-73-importing-modules.html` | Importing &amp; Modules | import · from import · as · relative imports · sys.path · __all__ |
| 74 | `py-74-creating-packages.html` | Creating Packages | __init__.py · package layout · pyproject.toml · src layout · namespace packages |
| 75 | `py-75-pip-package-manager.html` | pip &amp; Package Management | pip install · pip uninstall · pip list · pip freeze · requirements.txt · pyproject.toml |
| 76 | `py-76-math-random.html` | Math &amp; Random Modules | math.sqrt · math.floor · math.pi · random.randint · random.choice · random.shuffle · random.seed |
| 77 | `py-77-datetime-time.html` | Dates, Times &amp; Timezones | datetime · date · timedelta · strftime() · strptime() · zoneinfo |
| 78 | `py-78-os-system.html` | OS &amp; System Modules | os.environ · os.getcwd() · sys.argv · sys.exit() · subprocess.run() · shutil |
| 79 | `py-79-functools.html` | functools Module | partial() · reduce() · lru_cache() · cache · wraps() · singledispatch() |

## Group 13 — Testing & Logging (80–82)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 80 | `py-80-unittest.html` | unittest Testing Framework | TestCase · setUp · tearDown · assertEqual · assertRaises · discover |
| 81 | `py-81-pytest.html` | pytest Testing Framework | assert · fixtures · parametrize · pytest.raises · markers |
| 82 | `py-82-logging.html` | Logging | logging · levels · basicConfig() · getLogger() · handlers · formatters |

## Group 14 — Advanced Topics (83–89)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 83 | `py-83-regex.html` | Regular Expressions | re.search() · re.match() · re.findall() · re.sub() · groups · flags |
| 84 | `py-84-async-await.html` | Async/await &amp; Coroutines | async def · await · asyncio.run() · gather() · create_task() · TaskGroup |
| 85 | `py-85-concurrency-threading.html` | Threading &amp; Concurrency | threading.Thread · start() · join() · Lock · ThreadPoolExecutor · GIL |
| 86 | `py-86-multiprocessing.html` | Multiprocessing | Process · Pool · Queue · ProcessPoolExecutor · __main__ guard |
| 87 | `py-87-sqlite-database.html` | SQLite Database | sqlite3.connect() · cursor · execute() · ? placeholders · commit() · fetchall() |
| 88 | `py-88-serialization.html` | Serialization &amp; Pickling | pickle · shelve · json vs pickle · marshal · security risks |
| 89 | `py-89-type-hints.html` | Type Hints &amp; Typing Module | annotations · list[int] · Optional · Union · Callable · TypedDict · mypy |

## Group 15 — Tkinter GUI (90–96)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 90 | `py-90-tkinter-basics.html` | Tkinter Basics &amp; Windows | tk.Tk() · mainloop() · title() · geometry() · resizable() · Toplevel |
| 91 | `py-91-tkinter-widgets.html` | Tkinter Widgets | Label · Button · Entry · Text · Listbox · Checkbutton · Radiobutton · config() |
| 92 | `py-92-tkinter-layout.html` | Layout Managers | pack() · grid() · place() · sticky · padx/pady · rowconfigure |
| 93 | `py-93-tkinter-events.html` | Events &amp; Callbacks | command= · bind() · event object · &lt;Button-1> · &lt;Key> · StringVar |
| 94 | `py-94-tkinter-dialogs.html` | Dialogs &amp; Message Boxes | messagebox · showinfo() · askyesno() · filedialog · askopenfilename() · simpledialog |
| 95 | `py-95-tkinter-canvas.html` | Canvas &amp; Drawing | Canvas · create_line() · create_rectangle() · create_oval() · create_text() · tags · move() |
| 96 | `py-96-ttk-themed-widgets.html` | ttk Themed Widgets | tkinter.ttk · ttk.Style · theme_use() · configure() · Treeview · Combobox · Progressbar |
