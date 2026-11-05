# pytest Reference Guide Outline (25 sheets)

## Metadata

- **Group it belongs to:** Testing
- **Folder Directory:** `Sheets/Pytest-Sheets/pyt-##-[slug].html`
- **PDF Name:** `pytest Reference Guide.pdf`
- **Groups:** 9
- **Sheets:** 25
- **Drafted Date:** 2026-11-03
- **Verified-Finalized Date:**

## Basic Information

A reference for testing Python code with pytest, for intermediate readers who know Python (the Python set) and want to write and run real test suites. It covers configuration, assertions, fixtures, parametrization and subtests, marks, mocking, the CLI, plugins and hooks, coverage, parallel runs, async tests, Django and web apps, and running pytest in CI.

Targets **pytest 9.x** on Python 3.10+: native TOML config (`[tool.pytest]` in `pyproject.toml`, or `pytest.toml`), the built-in `subtests` fixture, and the `strict` option. Older `[tool.pytest.ini_options]` and `pytest.ini` setups are shown so readers can recognize them. Code-first: every sheet leads with a runnable test file.

Scope limits: Playwright's pytest plugin lives in the Playwright set (sheets 55–56), and testing concepts (test doubles, TDD, strategy) live in the Testing set. This set covers pytest itself.

## Differences in Layout from Basic Structure

- **Extra boxes:** **unittest Equivalent** (`id="unittest"`) and **Prefer / Avoid** (`id="idiom"`) in Row 2 under Code Explained on 01–23 · **Under the Hood** (`id="hood"`) in Row 1 as a third column on selected sheets. None on the quick references (24–25). Details below.
- The standard language group template does not apply. Groups follow how a test suite grows: setup → assertions → fixtures → parametrize and marks → mocking → running → plugins → patterns and CI → quick reference.
- **Python set links:** sheets that lean on a language feature (decorators, generators for `yield` fixtures, context managers, `async`) end their Notes with a "Python set:" line linking to the sheet that teaches it.
- If a sheet doesn't fit on one page, cut Under the Hood to 2 items first, then Prefer / Avoid, then unittest Equivalent, before touching the main content.
- `pyt-cheatsheet.css` adds `.section-unittest`, `.section-idiom` and `.section-hood` styles with their own accent colors.

### unittest Equivalent box (`id="unittest"`, 01–23)

- `<section class="section-notes section-unittest" id="unittest">`, title **unittest Equivalent**.
- 2–4 `note-item` lines mapping this sheet's pytest feature to the standard library `unittest` form, pytest first: `assert x == y` → `self.assertEqual(x, y)` · fixture → `setUp` / `tearDown` · `pytest.raises` → `assertRaises` · `parametrize` → `subTest`.
- When `unittest` has no equivalent (fixture scopes, plugins), say so in one line and name the nearest approach.

### Prefer / Avoid box (`id="idiom"`, 01–23)

- `<section class="section-notes section-idiom" id="idiom">`, title **Prefer / Avoid**.
- 2–4 lines in `avoid` → `prefer` form, each a real pytest idiom for the sheet's topic (`setup_method` → a fixture · `try/except` + `assert False` → `pytest.raises` · `tmpdir` → `tmp_path` · a `for` loop over cases → `parametrize`). Never a restatement of the main code block or a Common Mistakes item.

### Under the Hood box (`id="hood"`, Row 1, selected sheets)

- `<section class="section-notes section-hood" id="hood">`, title **Under the Hood**, Row 1 as a third column (`col-1-3`).
- 2–4 items on how pytest does what the sheet shows, so its behavior stops being magic.

| # | Under the Hood content |
|---|---|
| 02 | rootdir and config-file discovery order · which file wins when several exist · `-c` override |
| 03 | collection walks `testpaths` → modules → classes → functions · import modes (`prepend` / `append` / `importlib`) · why duplicate basenames collide |
| 04 | assertion rewriting at import time · why it only applies to test modules and `conftest.py` · `register_assert_rewrite` for helpers |
| 06 | fixtures matched by argument name · dependency graph resolved per test · `request` object |
| 07 | per-scope fixture cache · teardown runs in reverse (LIFO) order · scope-mismatch errors |
| 08 | `conftest.py` files load per directory, nearest wins · plugin registration order |
| 10 | parametrize expands one function into many test items · how IDs are built |
| 13 | monkeypatch keeps an undo stack and restores it at teardown |
| 14 | patch where a name is looked up, not where it's defined · `autospec` checks signatures |
| 16 | output capture at the file-descriptor level · why `print` shows only on failure |
| 17 | hooks are pluggy calls · `firstresult` · `hookwrapper` / `wrapper` order |
| 19 | xdist starts worker processes · session fixtures run once per worker · `--dist` scheduling modes |
| 20 | event loop created per `loop_scope` · why mixing scopes fails |

## Groups

### Group 1: Introduction & Setup (Sheets 01–03)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `pyt-01-introduction.html` | Introduction & First Test | why pytest · `pip install pytest` · `test_*.py` · plain `assert` · `pytest` command · reading the output |
| 02 | `pyt-02-configuration.html` | Configuration | `[tool.pytest]` in `pyproject.toml` · `pytest.toml` · legacy `pytest.ini` / `ini_options` · `testpaths` · `addopts` · `strict` · `minversion` |
| 03 | `pyt-03-discovery-layout.html` | Discovery & Project Layout | `test_*.py` / `*_test.py` · `Test*` classes · `test_*` functions · src layout · `tests/` folder · `--import-mode` · `__init__.py` |

### Group 2: Assertions (Sheets 04–05)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 04 | `pyt-04-assertions.html` | Assertions & Failure Output | `assert` · assertion messages · introspected diffs · `-vv` · `pytest.approx` · comparing dicts / lists |
| 05 | `pyt-05-exceptions-warnings.html` | Exceptions & Warnings | `pytest.raises` · `match=` · `excinfo.value` · `pytest.RaisesGroup` · `pytest.warns` · `pytest.deprecated_call` · `-W error` |

### Group 3: Fixtures (Sheets 06–09)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 06 | `pyt-06-fixture-basics.html` | Fixture Basics | `@pytest.fixture` · requesting by argument name · return values · fixtures using fixtures · `autouse=True` · `usefixtures` |
| 07 | `pyt-07-fixture-scope-teardown.html` | Fixture Scope & Teardown | `function` / `class` / `module` / `package` / `session` · `yield` teardown · `request.addfinalizer` · scope mismatch |
| 08 | `pyt-08-conftest-sharing.html` | conftest.py & Sharing Fixtures | `conftest.py` hierarchy · overriding fixtures · factory fixtures · `params=` fixtures · `request.param` · fixture `name=` |
| 09 | `pyt-09-builtin-fixtures.html` | Built-in Fixtures | `tmp_path` · `tmp_path_factory` · `capsys` / `capfd` · `caplog` · `monkeypatch` · `request` · `pytestconfig` |

### Group 4: Parametrize, Subtests & Marks (Sheets 10–12)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 10 | `pyt-10-parametrize.html` | Parametrize | `@pytest.mark.parametrize` · multiple arguments · `ids=` · `pytest.param(..., marks=)` · stacking decorators · `indirect=` |
| 11 | `pyt-11-subtests.html` | Subtests | `subtests` fixture (9.0) · `subtests.test(msg=)` · subtests vs parametrize · reporting · `unittest` `subTest` support |
| 12 | `pyt-12-marks.html` | Marks: skip, xfail & Custom | `skip` · `skipif` · `xfail(strict=True)` · `pytest.importorskip` · custom markers · `markers =` registration · `-m` |

### Group 5: Mocking (Sheets 13–14)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 13 | `pyt-13-monkeypatch.html` | monkeypatch | `setattr` · `setenv` / `delenv` · `setitem` · `chdir` · `syspath_prepend` · `context()` · automatic undo |
| 14 | `pyt-14-mock-pytest-mock.html` | unittest.mock & pytest-mock | `mocker.patch` · `MagicMock` · `return_value` · `side_effect` · `assert_called_once_with` · `mocker.spy` · `autospec=True` |

### Group 6: Running & Debugging (Sheets 15–16)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 15 | `pyt-15-cli-selection.html` | Selecting & Rerunning Tests | node IDs `file::Class::test` · `-k` expressions · `-m` · `--lf` / `--ff` · `-x` / `--maxfail` · `--sw` · `--co` |
| 16 | `pyt-16-output-debugging.html` | Output & Debugging | `-v` / `-q` · `-s` · `-rA` summary · `--tb=short` · `--pdb` · `breakpoint()` · `--durations` · `-l` locals |

### Group 7: Plugins in Practice (Sheets 17–21)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 17 | `pyt-17-plugins-hooks.html` | Plugins & Hooks | installing plugins · `-p` / `-p no:` · `pytest_addoption` · `pytest_collection_modifyitems` · `pytest_configure` · local plugins in `conftest.py` |
| 18 | `pyt-18-coverage.html` | Coverage with pytest-cov | `--cov=pkg` · `--cov-report=term-missing` / `html` · `--cov-branch` · `--cov-fail-under` · `[tool.coverage]` · excluding lines |
| 19 | `pyt-19-parallel-flaky.html` | Parallel & Flaky Tests | `pytest-xdist` `-n auto` · `--dist loadscope` · `pytest-rerunfailures` · `pytest-randomly` · `--count` · order dependence |
| 20 | `pyt-20-async-tests.html` | Async Tests | `pytest-asyncio` · `asyncio_mode = "auto"` · `@pytest.mark.asyncio` · async fixtures · `loop_scope` · AnyIO plugin |
| 21 | `pyt-21-django-web-apps.html` | Django & Web Apps | `pytest-django` · `DJANGO_SETTINGS_MODULE` · `@pytest.mark.django_db` · `client` / `admin_client` · `settings` fixture · FastAPI `TestClient` |

Sheet 21 links to the Django set for the app side.

### Group 8: Patterns & CI (Sheets 22–23)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 22 | `pyt-22-testing-patterns.html` | Testing Patterns in pytest | Arrange-Act-Assert · test data factories · golden files · snapshot testing (syrupy) · Hypothesis `@given` · testing CLIs |
| 23 | `pyt-23-pytest-in-ci.html` | pytest in CI | `--junitxml` · GitHub Actions matrix · `tox` / `nox` · caching `.pytest_cache` · exit codes · `--strict-markers` in CI |

### Group 9: Quick Reference (Sheets 24–25)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 24 | `pyt-24-quick-ref-api.html` | Quick Reference — Fixtures, Marks & Assertions | built-in fixtures · fixture options · marks · `raises` / `warns` / `approx` · parametrize forms |
| 25 | `pyt-25-quick-ref-cli-config.html` | Quick Reference — CLI & Config | selection flags · output flags · debug flags · config keys · common plugins and their flags |

Dense tables, no explanations; every row points back to the sheet with details.
