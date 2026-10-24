# Rails Reference Guide Outline (78 sheets)

## Metadata

- **Group it belongs to:** Languages (paired with Ruby: on the root index.html the Ruby card shrinks to 2/3 height and the Rails card takes the remaining 1/3 directly under it, so the two read as one stacked unit)
- **Folder Directory:** `Sheets/Rails-Sheets/rails-##-[slug].html`
- **Groups:** 14
- **Sheets:** 78
- **Drafted Date:** 2026-10-23
- **Verified-Finalized Date:**

## Basic Information

Ruby on Rails, the full-stack web framework, for intermediate readers who already know Ruby (the Ruby set covers the language) and are new to moderately experienced with Rails. Targets Rails 8.1 (8.1.4 is the current gem as of September 2026) on Ruby 3.4+/4.0, with the Rails 8 defaults front and center: the Solid trifecta (Queue, Cache, Cable), the authentication generator, Propshaft, Importmap, Hotwire, Thruster and Kamal 2. Rails 8.1 additions get their own coverage: Active Job Continuations, structured event reporting (`Rails.event`), local CI (`bin/ci`), Markdown rendering, deprecated associations and registry-free Kamal deploys. Rails 8.2 is still edge (`8.2.0.alpha`), so 8.2 items (Herb, `Rails.app.creds`, `has_json`) appear only as tagged notes and should be checked against the release notes when built.

The deep areas are Active Record (models, associations, querying), controllers and params, views and forms, and Hotwire. Teaching is code-first: every sheet has a working example with inline notes, then reference tables. Version-specific features are tagged on the sheet (7.1, 7.2, 8.0, 8.1, 8.2 edge).

At 78 sheets it is above the guide's 25–50 framework range on purpose, for the same reason as Django: Rails bundles an ORM, routing, views, jobs, mail, storage, websockets, caching, security and deployment, so it is closer in scope to a language than to React.

## Differences in Layout from Basic Structure

- As a framework set it skips the language-basics groups. Ruby itself, and the ActiveSupport methods flagged in the Ruby set's In Rails boxes, live in the Ruby set; sheet 44 points back to it instead of repeating it.
- Groups follow Rails' own layers (routing, Action Pack, Action View, Active Record, Active Model/Support, Hotwire, the background frameworks, testing, deployment) after Introduction & Setup.
- Some sheets stack two or three code blocks in the code column (for example a controller action plus its ERB view, or a migration plus the shell command). ERB uses Prism's `erb` language, so those sheets also load `prism-markup-templating`. Config sheets also use `yaml` and `bash`.
- Sheet CSS is `Sheets/CSS/rails-cheatsheet.css` (Rails-red sheet-number badge).
- One extra box on every sheet: **The Rails Way**, described below. It mirrors the Ruby set's The Ruby Way box so the two sets feel like a pair.

### The Rails Way box (every sheet)

- `<section class="section-idiom" id="idiom">`, title **The Rails Way**.
- 2–4 avoid/prefer pairs: the way someone new to Rails (or coming from another framework) writes it, then the conventional Rails version. Use a small code block with `# avoid` / `# prefer` comments (`<%# avoid %>` / `<%# prefer %>` in ERB), or `explain-item` lines when one-liners are enough.
- Every pair must be a real convention difference for this sheet's topic, never a restatement of the main code block. Examples: hand-written `get "/posts/:id"` routes → `resources :posts, only: :show`; `Post.where(user_id: user.id)` → `user.posts`; `posts.each { |p| p.author.name }` → `includes(:author)`; `redirect_to` after a failed save → `render :new, status: :unprocessable_entity`.
- Where the Rails convention is a judgment call (fat models vs service objects, callbacks vs explicit calls), say so in one line instead of presenting it as a rule.
- If a sheet doesn't fit on one page, cut The Rails Way to 2 pairs before touching the main content.

### Placement

| Sheet has | Row 1 | col-2-2 (beside the code) |
|---|---|---|
| Code row | Description · Notes | Code Explained, then The Rails Way |
| No code row | Description · Notes · The Rails Way (`col-1-3`) | — |

`rails-cheatsheet.css` gets a `.section-idiom` style with its own accent color, so the box doesn't read as part of Code Explained (same approach as the Ruby set).

## Groups

### Group 1: Introduction & Setup (Sheets 01–06)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `rails-01-introduction.html` | Introduction & Philosophy | Rails Doctrine · convention over configuration · MVC · omakase · component frameworks · One Person Framework · maintenance policy |
| 02 | `rails-02-installation.html` | Installation & rails new | gem install rails · rails new · --database= · --css= · --javascript= · --api · --minimal · bin/setup |
| 03 | `rails-03-directory-structure.html` | Directory Structure | app/ · config/ · db/ · lib/ · bin/ · storage/ · script/ · Zeitwerk file naming |
| 04 | `rails-04-configuration.html` | Configuration & Environments | config/application.rb · environments/*.rb · config.load_defaults · Rails.env · initializers · config_for · config.x |
| 05 | `rails-05-rails-command.html` | The rails Command | bin/rails server · console · runner · routes · about · bin/dev · Procfile.dev |
| 06 | `rails-06-generators.html` | Generators & Scaffolds | scaffold · model · controller · resource · migration · destroy · --skip-* · custom generator templates |

### Group 2: Routing (Sheets 07–10)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 07 | `rails-07-routing-basics.html` | Routing Basics | config/routes.rb · get / post · to: "posts#show" · root · as: · _path vs _url helpers · bin/rails routes |
| 08 | `rails-08-resources.html` | Resourceful Routes | resources · resource (singular) · the 7 actions · only: / except: · member · collection · param: |
| 09 | `rails-09-nested-namespaced-routes.html` | Nested, Namespaced & Scoped Routes | nested resources · shallow: true · namespace · scope · module: · concern / concerns: · path: |
| 10 | `rails-10-advanced-routing.html` | Advanced Routing | dynamic segments · globbing *path · constraints · defaults · redirect() · direct · resolve · mount |

### Group 3: Controllers (Sheets 11–17)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 11 | `rails-11-controller-basics.html` | Controller Basics | ApplicationController · actions · instance vars to views · implicit render · request · response · ActionController::Base vs API |
| 12 | `rails-12-strong-parameters.html` | Params & Strong Parameters | params · params.expect (8.0) · require / permit · nested hashes & arrays · ParameterMissing · action_on_unpermitted_parameters |
| 13 | `rails-13-render-redirect.html` | Rendering & Redirects | render :edit · status: :unprocessable_entity · render json: · head · redirect_to · status: :see_other · redirect_back_or_to · DoubleRenderError |
| 14 | `rails-14-action-callbacks.html` | Action Callbacks | before_action · after_action · around_action · only: / except: · skip_before_action · halting with render / redirect |
| 15 | `rails-15-sessions-cookies-flash.html` | Sessions, Cookies & Flash | session · reset_session · cookies · signed / encrypted · permanent · flash · flash.now · notice: / alert: |
| 16 | `rails-16-formats-errors.html` | Formats & Error Handling | respond_to · format.json · format.md + render markdown: (8.1) · rescue_from · RecordNotFound → 404 · public/404.html · exceptions_app |
| 17 | `rails-17-controller-concerns.html` | Concerns, Helpers & Current | controller concerns · helper_method · Current < CurrentAttributes · rate_limit (7.2) · allow_browser · etag / fresh_when |

### Group 4: Views & Forms (Sheets 18–24)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 18 | `rails-18-erb-basics.html` | ERB Templates | <%= %> · <% %> · <%# %> · auto-escaping · html_safe / raw · template lookup · Herb compiler (8.2 edge) |
| 19 | `rails-19-layouts.html` | Layouts & content_for | application.html.erb · yield · content_for · yield(:title) · content_for? · layout "admin" · provide |
| 20 | `rails-20-partials.html` | Partials & Collection Rendering | render "form" · locals: · render @posts · collection: / as: · strict locals comment (7.1) · cached: true · spacer_template |
| 21 | `rails-21-view-helpers.html` | Built-in View Helpers | link_to · button_to · image_tag · tag.div · number_to_currency · time_ago_in_words · truncate · pluralize |
| 22 | `rails-22-form-with.html` | form_with Basics | form_with model: · url: · f.label · f.text_field · f.select · f.check_box · f.submit · error messages |
| 23 | `rails-23-advanced-forms.html` | Advanced Forms | fields_for · accepts_nested_attributes_for · collection_select · collection_check_boxes · f.file_field · form objects · dom_id |
| 24 | `rails-24-custom-helpers-components.html` | Custom Helpers & View Components | app/helpers · helper modules · capture · safe_join · tag builder · ViewComponent · Phlex |

### Group 5: Active Record — Models & Migrations (Sheets 25–31)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 25 | `rails-25-active-record-basics.html` | Active Record Basics | ApplicationRecord · table naming conventions · new / save · create · update · destroy · persisted? · reload |
| 26 | `rails-26-migrations-basics.html` | Migrations — Basics | g migration · create_table · t.references · t.timestamps · add_column · change vs up / down · db:migrate · db:rollback |
| 27 | `rails-27-migrations-schema.html` | Migrations — Schema, Indexes & Seeds | schema.rb vs structure.sql · add_index · add_foreign_key · change_column_null · reversible · db:prepare · db:seed |
| 28 | `rails-28-attributes-types.html` | Column Types & the Attribute API | string / text / decimal / datetime / json · attribute · enum · normalizes (7.1) · store_accessor · serialize · has_json (8.2 edge) |
| 29 | `rails-29-validations.html` | Validations | validates presence / uniqueness / length / format / numericality · validate :custom · errors · valid? · on: :create · validates_with |
| 30 | `rails-30-model-callbacks.html` | Model Callbacks | before_validation · before_save · after_create · after_commit · around_save · throw :abort · callback pitfalls |
| 31 | `rails-31-scopes.html` | Scopes & Model Concerns | scope · scopes with arguments · default_scope (and why to avoid it) · unscoped · class methods returning relations · model concerns |

### Group 6: Associations (Sheets 32–35)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 32 | `rails-32-belongs-to-has-many.html` | belongs_to & has_many | belongs_to · has_many · foreign_key: · dependent: · optional: true · inverse_of: · counter_cache: |
| 33 | `rails-33-has-one-through.html` | has_one, :through & HABTM | has_one · has_many through: · has_one through: · source: · join models · has_and_belongs_to_many |
| 34 | `rails-34-polymorphic-sti.html` | Polymorphic, STI & Delegated Types | polymorphic: true · as: · _type column · single table inheritance · type column · delegated_type |
| 35 | `rails-35-association-methods.html` | Association Methods & Options | build · create · << · destroy_all · class_name: · touch: · strict_loading · deprecated: true (8.1) |

### Group 7: Querying (Sheets 36–42)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 36 | `rails-36-query-basics.html` | Query Basics | find · find_by · where · order · limit / offset · first / last / take · pluck · exists? |
| 37 | `rails-37-conditions.html` | Conditions in Depth | hash conditions · ranges · arrays (IN) · where.not · or · where.missing / associated · ? and :named placeholders · SQL injection |
| 38 | `rails-38-joins-eager-loading.html` | Joins & Eager Loading | joins · left_outer_joins · includes · preload · eager_load · N+1 queries · strict_loading |
| 39 | `rails-39-calculations.html` | Calculations & Grouping | count · sum · average · minimum / maximum · group · having · select with alias · distinct |
| 40 | `rails-40-batches-bulk.html` | Batches & Bulk Operations | find_each · in_batches · insert_all · upsert_all · update_all · delete_all · touch_all · update_counters |
| 41 | `rails-41-transactions-locking.html` | Transactions & Locking | transaction · ActiveRecord::Rollback · lock · with_lock · lock_version · after_commit · nested transactions |
| 42 | `rails-42-raw-sql-multi-db.html` | Raw SQL & Multiple Databases | find_by_sql · select_all · Arel.sql · connects_to · database.yml roles · replicas · sharding |

### Group 8: Active Model & Active Support (Sheets 43–45)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 43 | `rails-43-active-model.html` | Active Model | ActiveModel::Model · ActiveModel::API · Attributes · Validations · form objects · Serializers::JSON · has_secure_password |
| 44 | `rails-44-active-support.html` | Active Support Essentials | blank? / present? · durations (2.days.ago) · Time.current · Time.zone · inflections · Hash extensions · delegate · pointer to Ruby set |
| 45 | `rails-45-instrumentation-events.html` | Notifications & Structured Events | ActiveSupport::Notifications · instrument · subscribe · Rails.event (8.1) · tagged events · Rails.error.report · Rails.logger |

### Group 9: Authentication & Security (Sheets 46–50)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 46 | `rails-46-authentication-generator.html` | Authentication Generator | g authentication (8.0) · has_secure_password · Session model · Current.user · require_authentication · allow_unauthenticated_access · password reset |
| 47 | `rails-47-authorization.html` | Authorization | before_action guards · scoping to Current.user · role enums · Pundit policies · authorize / policy_scope · 403 vs 404 |
| 48 | `rails-48-built-in-security.html` | Built-in Security | protect_from_forgery · CSRF tokens · XSS escaping · sanitize · content_security_policy · filter_parameters · host authorization |
| 49 | `rails-49-credentials.html` | Credentials & Secrets | credentials:edit · master.key · RAILS_MASTER_KEY · per-environment credentials · Rails.application.credentials · ENV · Rails.app.creds (8.2 edge) |
| 50 | `rails-50-encryption-tokens.html` | Encryption & Signed Tokens | encrypts · deterministic: · generates_token_for (7.1) · signed_id · has_secure_token · MessageVerifier |

### Group 10: Assets & Hotwire (Sheets 51–56)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 51 | `rails-51-propshaft.html` | Propshaft & Asset Delivery | Propshaft · app/assets · stylesheet_link_tag · asset_path · digests · assets:precompile · Sprockets (legacy) |
| 52 | `rails-52-javascript-css.html` | JavaScript & CSS Options | importmap-rails · bin/importmap pin · javascript_importmap_tags · jsbundling-rails · cssbundling-rails · tailwindcss-rails |
| 53 | `rails-53-turbo-drive.html` | Turbo Drive | Turbo Drive · data-turbo="false" · data-turbo-method · 422 / 303 form responses · prefetch · page refreshes with morphing |
| 54 | `rails-54-turbo-frames.html` | Turbo Frames | turbo_frame_tag · src: · loading: :lazy · target: "_top" · frame navigation · dom_id |
| 55 | `rails-55-turbo-streams.html` | Turbo Streams | turbo_stream.append / replace / remove · format.turbo_stream · .turbo_stream.erb · turbo_stream_from · broadcasts_to · broadcasts_refreshes |
| 56 | `rails-56-stimulus.html` | Stimulus | data-controller · data-action · targets · values · outlets · connect() · g stimulus |

### Group 11: Jobs, Mail, Storage & Real-Time (Sheets 57–63)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 57 | `rails-57-active-job.html` | Active Job Basics | ApplicationJob · perform_later · perform_now · set(wait:) · queue_as · retry_on / discard_on · GlobalID arguments |
| 58 | `rails-58-solid-queue-continuations.html` | Solid Queue & Job Continuations | Solid Queue · config/queue.yml · recurring.yml · bin/jobs · limits_concurrency · ActiveJob::Continuable (8.1) · step · Mission Control |
| 59 | `rails-59-action-mailer.html` | Action Mailer | ApplicationMailer · mail() · deliver_later · mailer views · previews · default from: · attachments · Action Mailbox note |
| 60 | `rails-60-active-storage.html` | Active Storage | has_one_attached · has_many_attached · storage.yml · variants · direct uploads · rails_blob_path · purge_later |
| 61 | `rails-61-action-text.html` | Action Text | action_text:install · has_rich_text · rich_text_area · Trix / Lexxy · embedded attachments · to_plain_text |
| 62 | `rails-62-action-cable.html` | Action Cable & Solid Cable | channels · stream_from · broadcast · identified_by · cable.yml · Solid Cable · JS consumer |
| 63 | `rails-63-caching.html` | Caching & Solid Cache | Rails.cache.fetch · fragment caching · Russian doll · touch: true · cache keys & versions · Solid Cache · fresh_when / stale? |

### Group 12: Testing & CI (Sheets 64–69)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 64 | `rails-64-testing-basics.html` | Testing Basics & Fixtures | ActiveSupport::TestCase · bin/rails test · test/ layout · fixtures · assert_difference · parallelize |
| 65 | `rails-65-integration-tests.html` | Model & Integration Tests | model tests · ActionDispatch::IntegrationTest · get / post · assert_response · assert_redirected_to · follow_redirect! · sign_in helper |
| 66 | `rails-66-system-tests.html` | System Tests | ApplicationSystemTestCase · driven_by · Capybara visit / click_on / fill_in · assert_selector · headless Chrome · screenshots |
| 67 | `rails-67-testing-jobs-mail-time.html` | Testing Jobs, Mailers & Time | assert_enqueued_with · perform_enqueued_jobs · ActionMailer::TestCase · assert_emails · travel_to · freeze_time |
| 68 | `rails-68-rspec-rails.html` | RSpec Rails & FactoryBot | rspec-rails · request specs · system specs · FactoryBot · build vs create · traits · shoulda-matchers |
| 69 | `rails-69-local-ci.html` | Local CI & Code Quality | bin/ci (8.1) · config/ci.rb · rubocop-rails-omakase · Brakeman · bundler-audit · generated GitHub Actions workflow |

### Group 13: APIs & Advanced Topics (Sheets 70–74)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 70 | `rails-70-api-only.html` | API-Only Apps & JSON | rails new --api · ActionController::API · render json: · Jbuilder · as_json · namespaced versions · rack-cors |
| 71 | `rails-71-i18n.html` | Internationalization | config/locales/*.yml · t() · lazy lookup .title · l() · default_locale · around_action locale · model translations |
| 72 | `rails-72-rack-middleware.html` | Rack & Middleware | Rack call(env) · bin/rails middleware · config.middleware.use · insert_before · custom middleware · Rack::Attack |
| 73 | `rails-73-engines.html` | Engines & Railties | rails plugin new · --mountable · isolate_namespace · mount Engine · Railtie · engine initializers |
| 74 | `rails-74-debugging.html` | Debugging & Logging | debug gem · binding.break · console --sandbox · web-console · log levels · tagged logging · bullet / rack-mini-profiler |

### Group 14: Deployment & Upgrades (Sheets 75–78)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 75 | `rails-75-production-config.html` | Production Configuration | production.rb · force_ssl / assume_ssl · eager_load · logging to STDOUT · /up health check · config/puma.rb · SQLite in production |
| 76 | `rails-76-docker-thruster.html` | Dockerfile, Puma & Thruster | generated Dockerfile · multi-stage build · Thruster · Puma workers / threads · bin/docker-entrypoint · db:prepare on boot |
| 77 | `rails-77-kamal.html` | Deploying with Kamal | config/deploy.yml · kamal setup · kamal deploy · kamal-proxy · .kamal/secrets · accessories · registry-free deploys (8.1) |
| 78 | `rails-78-upgrading.html` | Upgrading Rails | bin/rails app:update · load_defaults · new_framework_defaults_*.rb · deprecation warnings · dual booting · maintenance policy |
