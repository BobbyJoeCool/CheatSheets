# Django Reference Guide Outline (68 sheets)

## Metadata

- **Group it belongs to:** Python
- **Folder Directory:** `Sheets/Django-Sheets/dj-##-[slug].html`
- **Groups:** 15
- **Sheets:** 68
- **Drafted Date:** 2026-10-02
- **Verified-Finalized Date:**

## Basic Information

Django, the full-stack Python web framework, for intermediate readers who know Python and are new to moderately experienced with Django. Targets Django 6.0 and 6.1 (released August 2026) on Python 3.12+, with sheets for the newer additions: template partials, built-in Content Security Policy, `django.tasks`, `forloop.length`, and 6.1's fetch modes, database-level `on_delete` options and `MAILERS`. Version-specific features are tagged on the sheet. The deep areas are models, QuerySets and the ORM, views (function-based and class-based), forms and templates. Teaching is code-first: every sheet has a working code example with inline notes, then reference tables.

At 68 sheets it is above the guide's 25–50 framework range on purpose: Django bundles an ORM, templates, forms, admin, auth and security, so it is closer in scope to a language than to React. Django REST Framework gets one sheet here and could become its own set later.

## Differences in Layout from Basic Structure

- As a framework set it skips the language-basics groups; Python itself lives in the Python set.
- Groups follow Django's own layers (URLs, views, templates, models, migrations, ORM, forms, admin, auth, request lifecycle, security) after Introduction & Setup.
- Some sheets stack two or three code blocks in the code column (for example a view plus its template, or settings plus shell commands). Template code uses Prism's `django` language, so those sheets also load `prism-markup-templating`.
- Sheet CSS is `Sheets/CSS/django-cheatsheet.css` (Django-green sheet-number badge), matching the `.gitignore` entry for the incomplete set.

## Groups

### Group 1: Introduction & Setup (Sheets 01–05)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `dj-01-introduction.html` | Introduction & Philosophy | MTV pattern · batteries included · DRY · request/response cycle · release cadence · LTS versions |
| 02 | `dj-02-installation.html` | Installation & Virtual Environments | venv · pip install django · requirements.txt · python -m django --version · uv |
| 03 | `dj-03-project-structure.html` | Projects vs Apps | startproject · startapp · INSTALLED_APPS · apps.py · AppConfig · directory layout |
| 04 | `dj-04-settings.html` | settings.py Essentials | DEBUG · SECRET_KEY · ALLOWED_HOSTS · DATABASES · TIME_ZONE · BASE_DIR · DJANGO_SETTINGS_MODULE |
| 05 | `dj-05-manage-py.html` | manage.py & Management Commands | runserver · shell · check · createsuperuser · showmigrations · custom BaseCommand · handle() |

### Group 2: URLs & Routing (Sheets 06–08)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 06 | `dj-06-url-patterns.html` | URL Patterns | urlpatterns · path() · re_path() · ROOT_URLCONF · trailing slash · APPEND_SLASH |
| 07 | `dj-07-url-converters-reverse.html` | Converters & Named URLs | `<int:pk>` · `<slug:>` · custom converters · name= · reverse() · {% url %} · reverse_lazy() |
| 08 | `dj-08-include-namespaces.html` | include() & Namespaces | include() · app_name · namespace · "app:name" · per-app urls.py · handler404 |

### Group 3: Views (Sheets 09–15)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 09 | `dj-09-function-views.html` | Function-Based Views | def view(request) · render() · redirect() · get_object_or_404() · require_http_methods |
| 10 | `dj-10-httprequest.html` | The HttpRequest Object | request.method · GET · POST · FILES · user · headers · META · build_absolute_uri() |
| 11 | `dj-11-httpresponse.html` | Response Types | HttpResponse · JsonResponse · FileResponse · StreamingHttpResponse · HttpResponseRedirect · status codes · Http404 |
| 12 | `dj-12-class-views-basics.html` | Class-Based Views — Basics | View · as_view() · dispatch() · get() / post() · TemplateView · RedirectView |
| 13 | `dj-13-generic-display-views.html` | Generic Views — Display | ListView · DetailView · get_queryset() · get_context_data() · context_object_name · paginate_by |
| 14 | `dj-14-generic-editing-views.html` | Generic Views — Editing | CreateView · UpdateView · DeleteView · FormView · success_url · form_valid() |
| 15 | `dj-15-view-mixins.html` | View Mixins & Decorators | LoginRequiredMixin · PermissionRequiredMixin · UserPassesTestMixin · method_decorator · MRO order |

### Group 4: Templates (Sheets 16–21)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 16 | `dj-16-template-basics.html` | Template Basics & Configuration | TEMPLATES · DIRS · APP_DIRS · render() · context dict · template lookup order |
| 17 | `dj-17-template-variables-filters.html` | Variables & Built-in Filters | {{ var }} · dot lookup · \|date · \|default · \|length · \|safe · \|linebreaks · autoescape |
| 18 | `dj-18-template-tags.html` | Built-in Tags & Control Flow | {% if %} · {% for %} · {% empty %} · forloop · {% with %} · {% csrf_token %} · {% comment %} |
| 19 | `dj-19-template-inheritance.html` | Inheritance, Includes & Partials | {% extends %} · {% block %} · {{ block.super }} · {% include %} · {% partialdef %} · {% partial %} |
| 20 | `dj-20-static-files.html` | Static Files | STATIC_URL · STATICFILES_DIRS · STATIC_ROOT · {% load static %} · {% static %} · collectstatic |
| 21 | `dj-21-custom-tags-filters.html` | Custom Tags & Filters | templatetags/ · template.Library · @register.filter · @register.simple_tag · inclusion_tag · context processors |

### Group 5: Models (Sheets 22–29)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 22 | `dj-22-model-basics.html` | Model Basics | models.Model · fields as attributes · auto id · __str__ · save() · delete() · objects |
| 23 | `dj-23-field-types.html` | Field Types | CharField · TextField · IntegerField · DecimalField · DateTimeField · BooleanField · JSONField · FileField |
| 24 | `dj-24-field-options.html` | Field Options | null · blank · default · unique · choices · db_index · verbose_name · help_text |
| 25 | `dj-25-foreignkey.html` | ForeignKey Relationships | ForeignKey · on_delete · CASCADE · PROTECT · SET_NULL · related_name · _set reverse access |
| 26 | `dj-26-m2m-onetoone.html` | Many-to-Many & One-to-One | ManyToManyField · through= · add() / remove() / set() · OneToOneField · reverse accessor |
| 27 | `dj-27-model-meta.html` | Model Meta Options | class Meta · ordering · verbose_name_plural · constraints · UniqueConstraint · indexes · db_table |
| 28 | `dj-28-model-methods-managers.html` | Model Methods & Managers | get_absolute_url() · clean() · @property · custom Manager · get_queryset() · custom QuerySet · as_manager() |
| 29 | `dj-29-model-inheritance.html` | Model Inheritance | abstract = True · multi-table inheritance · proxy = True · TimeStampedModel pattern · parent_link |

### Group 6: Migrations (Sheets 30–31)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 30 | `dj-30-migrations-basics.html` | Migrations — Basics | makemigrations · migrate · showmigrations · sqlmigrate · migrate app zero · --fake |
| 31 | `dj-31-migrations-advanced.html` | Migrations — Data & Advanced | RunPython · RunSQL · apps.get_model() · dependencies · squashmigrations · merge conflicts |

### Group 7: QuerySets & the ORM (Sheets 32–37)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 32 | `dj-32-queryset-basics.html` | QuerySet Basics | all() · filter() · exclude() · get() · create() · order_by() · laziness · slicing |
| 33 | `dj-33-field-lookups.html` | Field Lookups | __exact · __icontains · __in · __gt / __lte · __range · __isnull · __year · spanning relations |
| 34 | `dj-34-q-f-expressions.html` | Q & F Expressions | Q() · \| & ~ · F() · F() arithmetic · update(F()) · Value() · Case / When |
| 35 | `dj-35-aggregation-annotation.html` | Aggregation & Annotation | aggregate() · annotate() · Count · Sum · Avg · values() + annotate() GROUP BY · Subquery · OuterRef |
| 36 | `dj-36-related-query-optimization.html` | Related Objects & Query Optimization | select_related() · prefetch_related() · Prefetch() · only() · defer() · N+1 problem · exists() |
| 37 | `dj-37-bulk-raw-transactions.html` | Bulk Ops, Raw SQL & Transactions | bulk_create() · bulk_update() · update_or_create() · raw() · connection.cursor() · transaction.atomic() |

### Group 8: Forms (Sheets 38–43)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 38 | `dj-38-form-basics.html` | Form Basics | forms.Form · is_valid() · cleaned_data · bound vs unbound · {{ form }} · POST/redirect/GET |
| 39 | `dj-39-form-fields-widgets.html` | Form Fields & Widgets | CharField · EmailField · ChoiceField · widget= · attrs · TextInput · Select · as_div |
| 40 | `dj-40-form-validation.html` | Form Validation | `clean_<field>()` · clean() · ValidationError · add_error() · validators · non_field_errors |
| 41 | `dj-41-modelform.html` | ModelForm | forms.ModelForm · Meta.model · fields / exclude · save(commit=False) · instance= · labels |
| 42 | `dj-42-formsets.html` | Formsets | formset_factory · modelformset_factory · inlineformset_factory · management_form · extra · can_delete |
| 43 | `dj-43-file-uploads.html` | File & Image Uploads | request.FILES · enctype · FileField · ImageField · upload_to · MEDIA_ROOT · MEDIA_URL |

### Group 9: Admin (Sheets 44–46)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 44 | `dj-44-admin-basics.html` | Admin Basics | admin.site.register · @admin.register · createsuperuser · admin URL · site_header |
| 45 | `dj-45-modeladmin-options.html` | ModelAdmin Options | list_display · list_filter · search_fields · ordering · readonly_fields · fieldsets · prepopulated_fields |
| 46 | `dj-46-admin-inlines-actions.html` | Inlines & Custom Actions | TabularInline · StackedInline · @admin.action · queryset actions · get_queryset() · has_*_permission |

### Group 10: Authentication & Authorization (Sheets 47–50)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 47 | `dj-47-auth-basics.html` | Users & Authentication | User model · authenticate() · login() · logout() · request.user · is_authenticated · set_password() |
| 48 | `dj-48-auth-views.html` | Built-in Auth Views | LoginView · LogoutView · PasswordChangeView · PasswordResetView · django.contrib.auth.urls · LOGIN_REDIRECT_URL |
| 49 | `dj-49-permissions-groups.html` | Permissions & Groups | has_perm() · Group · Meta.permissions · @login_required · @permission_required · {{ perms }} |
| 50 | `dj-50-custom-user-model.html` | Custom User Model | AbstractUser · AbstractBaseUser · AUTH_USER_MODEL · get_user_model() · BaseUserManager · USERNAME_FIELD |

### Group 11: Request Lifecycle & Services (Sheets 51–54)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 51 | `dj-51-middleware.html` | Middleware | MIDDLEWARE order · __init__(get_response) · __call__() · process_view() · process_exception() · async middleware |
| 52 | `dj-52-sessions-cookies.html` | Sessions & Cookies | request.session · SESSION_ENGINE · set_cookie() · COOKIES · signed cookies · flush() |
| 53 | `dj-53-messages.html` | Messages Framework | messages.success() · info / warning / error · get_messages · {% for message in messages %} · MESSAGE_TAGS |
| 54 | `dj-54-signals.html` | Signals | post_save · pre_delete · @receiver · sender= · created flag · ready() registration · custom Signal |

### Group 12: Security (Sheets 55–57)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 55 | `dj-55-csrf-xss.html` | CSRF, XSS & Clickjacking | {% csrf_token %} · CsrfViewMiddleware · @csrf_exempt · autoescape · mark_safe · X_FRAME_OPTIONS |
| 56 | `dj-56-content-security-policy.html` | Content Security Policy | ContentSecurityPolicyMiddleware · SECURE_CSP · SECURE_CSP_REPORT_ONLY · CSP constants · nonces · csp() context processor |
| 57 | `dj-57-security-settings.html` | Security Settings & Deployment Checklist | check --deploy · SECURE_SSL_REDIRECT · SECURE_HSTS_SECONDS · SESSION_COOKIE_SECURE · CSRF_TRUSTED_ORIGINS · secrets in env |

### Group 13: Testing (Sheets 58–59)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 58 | `dj-58-testing-basics.html` | Testing Basics | TestCase · SimpleTestCase · manage.py test · setUpTestData() · test database · assertContains |
| 59 | `dj-59-test-client-fixtures.html` | Test Client & Fixtures | self.client · get() / post() · force_login() · assertRedirects · fixtures · RequestFactory · override_settings |

### Group 14: Advanced Topics (Sheets 60–66)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 60 | `dj-60-pagination.html` | Pagination | Paginator · page_obj · get_page() · has_next · paginate_by · page range template |
| 61 | `dj-61-caching.html` | Caching | CACHES · cache.get() / set() · @cache_page · {% cache %} · per-site cache · Redis backend |
| 62 | `dj-62-email.html` | Sending Email | send_mail() · EmailMessage · EMAIL_BACKEND · console backend · attachments · send_mass_mail() |
| 63 | `dj-63-background-tasks.html` | Background Tasks | django.tasks · @task · enqueue() · TASKS setting · ImmediateBackend · task results |
| 64 | `dj-64-async-views.html` | Async Django | async def views · ASGI · sync_to_async · async_to_sync · async ORM (aget, async for) · async iteration |
| 65 | `dj-65-logging.html` | Logging & Debugging | LOGGING dict · loggers / handlers / formatters · django.request logger · DEBUG pages · pdb |
| 66 | `dj-66-internationalization.html` | Internationalization & Time Zones | gettext · gettext_lazy · {% translate %} · makemessages · compilemessages · USE_TZ · timezone.now() |

### Group 15: External Libraries & Deployment (Sheets 67–68)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 67 | `dj-67-drf-serializers-views.html` | Django REST Framework | Serializer · ModelSerializer · APIView · ViewSet · DefaultRouter · permission_classes |
| 68 | `dj-68-deployment.html` | Deployment | Gunicorn · Uvicorn · WSGI / ASGI · WhiteNoise · DEBUG=False · environment variables · reverse proxy |

