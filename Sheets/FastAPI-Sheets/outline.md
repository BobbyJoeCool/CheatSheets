# FastAPI & Flask Reference Guide Outline (60 sheets)

## Metadata

- **Group it belongs to:** Python
- **Folder Directory:** `Sheets/FastAPI-Sheets/fa-##-[slug].html`
- **PDF Name:** `FastAPI & Flask Reference Guide.pdf`
- **Groups:** 14
- **Sheets:** 60
- **Drafted Date:** 2026-11-13
- **Verified-Finalized Date:**

## Basic Information

Python's two lightweight web frameworks in one set: FastAPI as the main subject (sheets 01–45) and Flask as its own group (46–57), with a comparison sheet and a 2-page quick reference at the end. For intermediate readers who know Python and want to build APIs and small web apps. Django has its own set and is only referenced for comparison.

Targets Python 3.10+, the current FastAPI release with Pydantic v2 and the `fastapi[standard]` install (`fastapi dev` / `fastapi run`), and Flask 3.x. Version tags should be re-checked against the FastAPI release notes and the Flask changelog when each sheet is built. FastAPI examples use `Annotated[...]` style throughout. Database sheets use SQLModel and SQLAlchemy 2.0; the SQL and Prisma sets cover databases in depth, and pytest has its own set.

Teaching is code-first: every sheet has a working example with inline notes, then reference tables.

## Differences in Layout from Basic Structure

- **Extra boxes:** **Other Framework** (`section-notes section-other`, `id="other"`) under Code Explained on every sheet except 58–60: 2–3 `note-item` lines showing the same idea in the other two frameworks (`Flask — @app.get("/items/<int:id>")`, `Django — path("items/<int:id>/", view)`) · **Prefer / Avoid** (`section-notes section-idiom`, `id="idiom"`) under Code Explained on every sheet except 59–60 · **Under the Hood** (`section-notes section-hood`, `id="hood"`) in Row 1 on selected sheets: what Starlette, Pydantic, Uvicorn/ASGI or Werkzeug/WSGI is doing underneath. Sheets: 01, 05, 08, 11, 15, 21, 23, 26, 27, 36, 46, 52.
- As a framework set it skips the language-basics groups; Python itself lives in the Python set.
- FastAPI groups follow the request path (routing → parameters → models → responses → dependencies) before structure, data, security, async, testing and deployment.
- Flask is a self-contained group (46–57) so it can be read on its own; its sheets point back to the matching FastAPI sheets.
- Sheet 58 is a comparison sheet (FastAPI vs Flask vs Django) with tables instead of a single code block.
- Sheet CSS is `Sheets/CSS/fa-cheatsheet.css` (teal sheet-number badge, box colors).
- Sheets 59–60 are table-only quick-reference pages (Syntax · Does · Sheet #) with no code row.

## Groups

### Group 1: Introduction & Setup (Sheets 01–04)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `fa-01-introduction.html` | Introduction & the ASGI Stack | Sebastián Ramírez, 2018 · Starlette · Pydantic · Uvicorn · ASGI vs WSGI · type hints drive validation & docs |
| 02 | `fa-02-installation.html` | Installation & the fastapi CLI | `pip install "fastapi[standard]"` · `uv add` · venv · `fastapi dev` · `fastapi run` · `uvicorn main:app --reload` |
| 03 | `fa-03-first-app-structure.html` | First App & Project Layout | `app = FastAPI()` · `@app.get("/")` · return dicts → JSON · `app/main.py` layout · `title` / `version` · `__init__.py` |
| 04 | `fa-04-interactive-docs.html` | Interactive Docs & OpenAPI | `/docs` (Swagger UI) · `/redoc` · `/openapi.json` · `summary` / `description` · `tags` · docstrings as descriptions |

### Group 2: Path Operations & Parameters (Sheets 05–10)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 05 | `fa-05-path-operations.html` | Path Operations | `@app.get` / `post` / `put` / `patch` / `delete` · route order matters · `def` vs `async def` · `status_code=` · `operation_id` |
| 06 | `fa-06-path-parameters.html` | Path Parameters | `/items/{item_id}` · type conversion · `Enum` params · `{file_path:path}` · automatic 422 errors |
| 07 | `fa-07-query-parameters.html` | Query Parameters | non-path args = query · defaults · `str \| None = None` · `bool` parsing · `list[str]` with `Query()` · required vs optional |
| 08 | `fa-08-request-body.html` | Request Body | Pydantic model as a parameter · JSON parsing · body + path + query together · `Body(embed=True)` · multiple body params |
| 09 | `fa-09-validation-annotated.html` | Validation with Query, Path & Annotated | `Annotated[int, Path(ge=1)]` · `Query(max_length=50)` · `pattern=` · `alias=` · `deprecated=True` · query param models |
| 10 | `fa-10-headers-cookies-forms-files.html` | Headers, Cookies, Forms & Files | `Header()` · `Cookie()` · `Form()` · `File()` · `UploadFile` · `python-multipart` · `await file.read()` |

### Group 3: Pydantic Models (Sheets 11–16)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 11 | `fa-11-basemodel.html` | Pydantic BaseModel | `class Item(BaseModel)` · type coercion · defaults · `model_dump()` · `model_validate()` · `model_dump_json()` |
| 12 | `fa-12-field-constraints.html` | Field & Constraints | `Field(gt=0, max_length=…)` · `default_factory` · `examples=` · `EmailStr` · `HttpUrl` · `constr` vs `Annotated` |
| 13 | `fa-13-validators.html` | Custom Validators | `@field_validator` · `@model_validator(mode="after")` · `mode="before"` · `ValueError` → 422 · `AfterValidator` · computed fields |
| 14 | `fa-14-nested-models-types.html` | Nested Models & Special Types | nested models · `list[Item]` · `dict[str, int]` · `Literal` · `datetime` / `UUID` / `Decimal` · discriminated unions |
| 15 | `fa-15-response-model.html` | Response Models & Filtering | `response_model=` · return-type annotation · `ItemIn` / `ItemOut` pattern · `response_model_exclude_unset` · hiding passwords · `from_attributes` |
| 16 | `fa-16-model-config-settings.html` | model_config & Settings | `ConfigDict` · `extra="forbid"` · `populate_by_name` · `pydantic-settings` · `BaseSettings` · `.env` files · `@lru_cache` settings |

### Group 4: Responses & Errors (Sheets 17–20)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 17 | `fa-17-response-types.html` | Response Types | `JSONResponse` · `HTMLResponse` · `PlainTextResponse` · `RedirectResponse` · `FileResponse` · `StreamingResponse` · `response_class=` |
| 18 | `fa-18-status-headers-cookies.html` | Status Codes, Headers & Cookies | `status.HTTP_201_CREATED` · `Response` parameter · `response.headers[...]` · `set_cookie()` · `responses=` in docs |
| 19 | `fa-19-httpexception-handlers.html` | HTTPException & Exception Handlers | `raise HTTPException(404, detail=…)` · `headers=` · `@app.exception_handler` · custom exception classes · Starlette vs FastAPI `HTTPException` |
| 20 | `fa-20-validation-errors.html` | Validation Errors & Error Formats | 422 response shape · `RequestValidationError` · overriding the handler · `jsonable_encoder` · consistent error envelopes |

### Group 5: Dependency Injection (Sheets 21–24)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 21 | `fa-21-depends-basics.html` | Depends Basics | `Depends()` · `Annotated[T, Depends(fn)]` · shared query params · reusable type aliases · dependency caching per request |
| 22 | `fa-22-class-sub-dependencies.html` | Class & Sub-Dependencies | classes as dependencies · `__call__` dependencies · dependency chains · `use_cache=False` · parameterized dependencies |
| 23 | `fa-23-yield-dependencies.html` | Dependencies with yield | `yield` for setup/teardown · DB session per request · `try` / `finally` · exceptions after `yield` · resource cleanup order |
| 24 | `fa-24-global-router-overrides.html` | Global Dependencies & Overrides | `FastAPI(dependencies=[…])` · `APIRouter(dependencies=…)` · path decorator `dependencies=` · `app.dependency_overrides` |

### Group 6: Application Structure (Sheets 25–27)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 25 | `fa-25-apirouter-bigger-apps.html` | APIRouter & Bigger Applications | `APIRouter(prefix=, tags=)` · `app.include_router()` · `routers/` folder · shared dependencies · relative imports · versioned routes `/v1` |
| 26 | `fa-26-lifespan.html` | Lifespan Events | `@asynccontextmanager` · `lifespan=` · startup/shutdown resources · `app.state` · deprecated `on_event` |
| 27 | `fa-27-middleware-cors.html` | Middleware & CORS | `@app.middleware("http")` · `call_next` · `CORSMiddleware` · `allow_origins` · `GZipMiddleware` · `TrustedHostMiddleware` · middleware order |

### Group 7: Databases (Sheets 28–31)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 28 | `fa-28-sqlmodel.html` | SQLModel | `SQLModel, table=True` · `Field(primary_key=True)` · `create_engine` · `Session` · `select()` · table vs data models |
| 29 | `fa-29-sqlalchemy.html` | SQLAlchemy 2.0 | `DeclarativeBase` · `Mapped[int]` · `mapped_column` · `sessionmaker` · `session.execute(select(...))` · `relationship()` |
| 30 | `fa-30-async-database.html` | Async Database Access | `create_async_engine` · `AsyncSession` · `asyncpg` / `aiosqlite` · `await session.scalars()` · session dependency with `yield` · `expire_on_commit=False` |
| 31 | `fa-31-alembic-crud.html` | Alembic Migrations & CRUD Patterns | `alembic init` · `revision --autogenerate` · `upgrade head` · `downgrade -1` · CRUD helper functions · `exclude_unset` for PATCH |

### Group 8: Security (Sheets 32–35)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 32 | `fa-32-security-basics.html` | Security Basics & OAuth2 Password Flow | `fastapi.security` · `OAuth2PasswordBearer(tokenUrl=)` · `OAuth2PasswordRequestForm` · `/token` endpoint · Authorize button in `/docs` |
| 33 | `fa-33-jwt-auth.html` | JWT Authentication | `PyJWT` · `jwt.encode` / `decode` · `exp` claim · `get_current_user` dependency · 401 + `WWW-Authenticate` · refresh tokens |
| 34 | `fa-34-password-hashing-users.html` | Password Hashing & Users | `pwdlib` (Argon2) · hash / verify · never store plain text · `get_current_active_user` · user models in vs out |
| 35 | `fa-35-scopes-api-keys.html` | Scopes, API Keys & HTTP Basic | `Security(scopes=)` · `SecurityScopes` · `APIKeyHeader` · `HTTPBasic` · `HTTPBearer` · `secrets.compare_digest` |

### Group 9: Async, Background & Real-Time (Sheets 36–39)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 36 | `fa-36-async-vs-def.html` | async def vs def | event loop · threadpool for `def` · blocking calls in `async def` · `await` I/O · `run_in_threadpool` · `httpx.AsyncClient` |
| 37 | `fa-37-background-tasks.html` | Background Tasks | `BackgroundTasks` · `add_task()` · tasks in dependencies · when to use Celery / ARQ / RQ instead · fire-and-forget limits |
| 38 | `fa-38-websockets.html` | WebSockets | `@app.websocket` · `await ws.accept()` · `receive_text` / `send_json` · `WebSocketDisconnect` · connection manager · broadcasting |
| 39 | `fa-39-streaming-sse.html` | Streaming & Server-Sent Events | `StreamingResponse` · async generators · `text/event-stream` · `sse-starlette` · streaming LLM output · large file downloads |

### Group 10: Testing (Sheets 40–41)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 40 | `fa-40-testclient.html` | TestClient Basics | `from fastapi.testclient import TestClient` · `client.get()` / `post(json=)` · `response.status_code` / `.json()` · pytest fixtures · lifespan in tests |
| 41 | `fa-41-overrides-async-tests.html` | Overrides & Async Tests | `dependency_overrides` · test database · `httpx.AsyncClient` + `ASGITransport` · `pytest.mark.anyio` · auth in tests · pointer to pytest set |

### Group 11: Advanced & Deployment (Sheets 42–45)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 42 | `fa-42-static-templates.html` | Static Files & Templates | `StaticFiles` · `app.mount()` · `Jinja2Templates` · `TemplateResponse(request, "x.html", …)` · `url_for` · HTMX pairing |
| 43 | `fa-43-openapi-customization.html` | OpenAPI Customization & Client Generation | `openapi_tags` · `include_in_schema=False` · `generate_unique_id_function` · custom `openapi()` · `openapi_url=None` · TypeScript client generation |
| 44 | `fa-44-performance-config.html` | Performance & Production Config | `ORJSONResponse` · response caching · connection pooling · `root_path` behind a proxy · docs off in prod · logging setup |
| 45 | `fa-45-deployment.html` | Deployment | `fastapi run --workers 4` · Uvicorn · Gunicorn + `UvicornWorker` · Dockerfile · reverse proxy (Nginx) · HTTPS · health checks |

### Group 12: Flask (Sheets 46–57)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 46 | `fa-46-flask-introduction.html` | Flask Introduction & First App | micro-framework · WSGI · Werkzeug · Jinja2 · `pip install flask` · `Flask(__name__)` · `flask --app app run --debug` |
| 47 | `fa-47-flask-routing.html` | Routing & URL Building | `@app.route` · `@app.get` / `@app.post` · `<int:id>` converters · `methods=[…]` · `url_for()` · `redirect()` · trailing slashes |
| 48 | `fa-48-flask-request-response.html` | Request & Response | `request.args` · `request.form` · `request.get_json()` · `request.files` · return dicts → JSON · `jsonify` · `make_response` · tuples `(body, status, headers)` |
| 49 | `fa-49-flask-templates.html` | Templates with Jinja2 | `render_template()` · `templates/` folder · `{% extends %}` / `{% block %}` · filters · `static/` · `url_for('static', …)` · autoescape |
| 50 | `fa-50-flask-forms-wtforms.html` | Forms & Flask-WTF | `FlaskForm` · `StringField` · validators · `validate_on_submit()` · CSRF token · `flash()` · `get_flashed_messages()` |
| 51 | `fa-51-flask-blueprints-factory.html` | Blueprints & the App Factory | `Blueprint(…, url_prefix=)` · `register_blueprint()` · `create_app()` · package layout · `instance/` folder · extension `init_app()` |
| 52 | `fa-52-flask-contexts-config.html` | Contexts, g & Configuration | app context · request context · `current_app` · `g` · `app.config.from_object` / `from_prefixed_env` · `SECRET_KEY` · `.flaskenv` |
| 53 | `fa-53-flask-hooks-errors.html` | Request Hooks & Error Handling | `before_request` · `after_request` · `teardown_appcontext` · `abort(404)` · `@app.errorhandler` · custom error pages · logging |
| 54 | `fa-54-flask-sqlalchemy-migrate.html` | Flask-SQLAlchemy & Flask-Migrate | `SQLAlchemy(model_class=Base)` · `db.session` · `db.select` · `db.get_or_404` · `flask db init` / `migrate` / `upgrade` · Alembic underneath |
| 55 | `fa-55-flask-sessions-login.html` | Sessions & Flask-Login | `session[...]` · signed cookies · `LoginManager` · `UserMixin` · `@login_required` · `login_user` / `logout_user` · `current_user` |
| 56 | `fa-56-flask-rest-async.html` | REST APIs & Async in Flask | JSON APIs · `MethodView` · `flask-smorest` / `APIFlask` for OpenAPI · `async def` views (`flask[async]`) · CORS with `flask-cors` · limits of async on WSGI |
| 57 | `fa-57-flask-testing-deployment.html` | Testing & Deploying Flask | `app.test_client()` · `app.test_cli_runner()` · `TESTING=True` · pytest fixtures · Gunicorn · Waitress · Nginx · `ProxyFix` |

### Group 13: Choosing a Framework (Sheet 58)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 58 | `fa-58-fastapi-flask-django.html` | FastAPI vs Flask vs Django | ASGI vs WSGI · validation & docs built in vs extensions · async story · batteries included · ecosystem · when to use each · migrating Flask → FastAPI |

### Group 14: Quick Reference (Sheets 59–60)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 59 | `fa-59-quick-reference-fastapi.html` | Quick Reference — FastAPI | decorators · parameter functions (`Path`, `Query`, `Body`, `Header`, `Form`, `File`) · `Depends` · response classes · status codes · CLI commands |
| 60 | `fa-60-quick-reference-flask.html` | Quick Reference — Flask | routing · `request` attributes · response helpers · Jinja2 syntax · blueprints & factory · CLI commands · common extensions |
