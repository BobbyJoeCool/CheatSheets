# Ruby Reference Guide Outline (113 sheets)

## Metadata

- **Group it belongs to:** Languages
- **Folder Directory:** `Sheets/Ruby-Sheets/rb-###-[slug].html`
- **Groups:** 16
- **Sheets:** 113
- **Drafted Date:** 2026-10-10
- **Verified-Finalized Date:**

## Basic Information

Ruby, a dynamic, object-oriented general-purpose language where everything is an object, for intermediate readers with balanced coverage across all groups. Targets Ruby 4.0 (released 2025-12-25), including the 3.x features still in everyday use (pattern matching, `Data`, the `it` block parameter, endless methods, YJIT) and the 4.0 additions (core `Set`, `Ractor::Port`, ZJIT, the `*nil` change, leading `&&` / `||` line continuation). The deep areas are blocks, procs and lambdas, Enumerable, hashes, modules and mixins, metaprogramming, and pattern matching.

Rails is out of scope as a topic and deserves its own set, the same way Django sits apart from Python. The only Rails content is the In Rails box on selected sheets (see below), which exists so readers can tell core Ruby from Rails and ActiveSupport additions. At 113 sheets the set is three over the guide's 80–110 general-purpose range. The Ruby 4.0 items (sheets 3, 26, 29, 58, 75, 77, 96, 100) should be checked against the current docs when built.

## Differences in Layout from Basic Structure

- Numbers are three digits throughout (`rb-001` to `rb-113`) because the set passes 99.
- Functions become Methods & Blocks (Group 8): Ruby has no free functions, and blocks, procs and lambdas are the core idiom, so they live there instead of in a separate group.
- Enumerable & Enumerators (Group 15) and Metaprogramming (Group 16) are language-specific groups placed after the standard ones, even though `map` / `select` appear on earlier sheets.
- Stacks and queues fold into sheet 51 (Array is Ruby's stack and queue); `Thread::Queue` is on sheet 94.
- Two extra boxes, described below: **The Ruby Way** on every sheet, and **In Rails** on the sheets listed in the table.

### The Ruby Way box (every sheet)

- `<section class="section-idiom" id="idiom">`, title **The Ruby Way**.
- 2–4 avoid/prefer pairs: the way someone from another language writes it, then the idiomatic Ruby. Use a small code block with `# avoid` / `# prefer` comments, or `explain-item` lines when one-liners are enough.
- Every pair must be a real idiom difference for this sheet's topic (`arr.map { |x| x.name }` → `arr.map(&:name)`), never a restatement of the main code block.

### In Rails box (selected sheets)

- `<section class="section-rails" id="rails">`, title **In Rails**.
- 2–4 items showing where this topic looks different in a Rails app. Each item says whether the method comes from **ActiveSupport** (usable outside Rails with `require "active_support/all"`) or is **Rails-only** (ActiveRecord, controllers, views).
- The point is to flag things that look like core Ruby but aren't. Never use a Rails or ActiveSupport method in the sheet's main code blocks.
- If a sheet doesn't fit on one page, cut the In Rails box to 2 items first, then the Ruby Way box, before touching the main content.

### Placement

| Sheet has | Row 1 | col-2-2 (beside the code) |
|---|---|---|
| Code row, no In Rails box | Description · Notes | Code Explained, then The Ruby Way |
| Code row + In Rails box | Description · Notes · In Rails (`col-1-3`) | Code Explained, then The Ruby Way |
| No code row, no In Rails box | Description · Notes · The Ruby Way (`col-1-3`) | — |
| No code row + In Rails box | Description · Notes · The Ruby Way, then In Rails (both in `col-1-3`) | — |

`rb-cheatsheet.css` gets `.section-idiom` and `.section-rails` styles with their own accent colors, so neither box reads as part of Code Explained (same approach as the TypeScript box in the JS set).

### Sheets with an In Rails box (60)

| # | In Rails content |
|---|---|
| 009 | `5.minutes` · `1.day` durations · `number_with_delimiter` |
| 010 | `decimal` columns come back as BigDecimal · `number_to_currency` |
| 011 | `blank?` / `present?` vs Ruby truthiness · AR casts `"0"` to `false` |
| 012 | `presence` · `try` · `blank?` on `nil`, `""`, `[]` |
| 013 | `params` string vs symbol keys · `HashWithIndifferentAccess` |
| 014 | AR type casting (`"42"` → `42`) · `to_param` · `to_query` |
| 017 | `to_fs(:db)` · `number_to_percentage` · `number_to_human` |
| 018 | `exclude?` · `inquiry` (`Rails.env.production?`) |
| 019 | `squish` · `titleize` · `parameterize` · `pluralize` · `truncate` |
| 020 | `first(n)` / `last(n)` on strings · `from` / `to` · `truncate_words` |
| 021 | ERB templates · `strip_heredoc` (pre-`<<~` code) |
| 036 | `rescue_from` in controllers |
| 038 | app error classes · `rescue_from` mapping errors to HTTP status |
| 039 | ActiveJob `retry_on` / `discard_on` |
| 040 | generated `?` predicates (`user.admin?`) · `delegate` |
| 042 | `delegate :name, to: :user` · `...` in wrapper methods |
| 046 | `scope :active, -> { where(active: true) }` |
| 049 | `Rails.cache.fetch` · `@current_user \|\|=` |
| 050 | `Array.wrap` · `second` / `third` · `to_sentence` |
| 052 | `excluding` / `including` · `in_groups_of` |
| 053 | `second` · `from(n)` / `to(n)` |
| 054 | `ActionController::Parameters` · `with_indifferent_access` |
| 055 | `deep_merge` · `reverse_merge` · `symbolize_keys` · `except` (ActiveSupport before core) |
| 056 | `index_by` · `index_with` · `deep_transform_keys` |
| 057 | `where(created_at: 1.week.ago..)` · `Date.current.all_week` |
| 059 | `ActiveModel::Model` / `ActiveModel::Attributes` as form objects |
| 060 | `order` (SQL) vs `sort_by` (Ruby) |
| 061 | models are plain classes: `ApplicationRecord` · `ActiveModel` |
| 062 | columns generate accessors · `attribute :x` · `mattr_accessor` |
| 063 | `scope` vs class methods · `class_attribute` |
| 064 | private controller methods aren't actions · `before_action` |
| 065 | `ApplicationRecord` / `ApplicationController` · STI via `type` column |
| 066 | `ActiveSupport::Concern` · `included do` |
| 067 | Zeitwerk: `app/models/admin/user.rb` → `Admin::User` |
| 068 | `to_param` · `to_partial_path` as duck-typed protocols |
| 070 | AR `==` compares class and `id` |
| 071 | `as_json` · `to_param` · `to_partial_path` |
| 075 | `Rails.root.join` · `Rails.public_path` |
| 076 | `render json:` · `as_json(only:)` · `to_json` |
| 078 | `config/*.yml` · `config_for` · credentials |
| 079 | Zeitwerk autoloading, no `require` in `app/` |
| 081 | Gemfile groups `:development, :test` · `bin/rails` |
| 084 | `Time.zone.now` · `Time.current` · `2.days.ago` · `beginning_of_day` |
| 085 | `Rails.env` · credentials vs `ENV` |
| 086 | `ActiveSupport::TestCase` · fixtures · `bin/rails test` |
| 087 | rspec-rails · request specs · FactoryBot |
| 089 | `lib/tasks/*.rake` · `task x: :environment` · `bin/rails db:migrate` |
| 090 | `bin/rails console` · `Rails.logger` · `debug` in views |
| 097 | ActiveRecord `where` / `find_by` (pointer to a future Rails set) |
| 098 | `serialize` / `store` attributes · ActiveJob argument serialization |
| 100 | N+1 and `includes` · `Rails.cache` · bullet gem |
| 101 | `pluck` vs `map` · `find_each` |
| 102 | `where` (SQL) vs `select` (Ruby) · `exclude?` |
| 103 | `sum` / `count` on a relation run SQL |
| 104 | `in_batches` · `in_groups_of` |
| 107 | ActiveSupport core extensions are monkey patches |
| 109 | AR defines attribute methods dynamically |
| 110 | `delegate` · old `find_by_name` dynamic finders |
| 112 | `included do` in Concerns · `inherited` in `ApplicationRecord` |
| 113 | `routes.rb`, `has_many`, `validates` are DSLs |

## Groups

### Group 1: Introduction & Setup (Sheets 001–004)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 001 | `rb-001-introduction.html` | Introduction & Philosophy | Matz · principle of least surprise · everything is an object · CRuby/MRI · JRuby · TruffleRuby · Christmas releases |
| 002 | `rb-002-installation.html` | Installation & Version Managers | rbenv · mise · asdf · chruby · Homebrew · .ruby-version · ruby -v · RubyInstaller |
| 003 | `rb-003-running-ruby.html` | Running Ruby | irb · ruby file.rb · ruby -e · shebang #! · -w warnings · --yjit / --zjit · \_\_FILE\_\_ == $0 |
| 004 | `rb-004-program-structure.html` | Program Structure & Style | no main() · newline-terminated statements · end keyword · { } vs do...end · 2-space indent · ? and ! naming · RuboCop |

### Group 2: Output & Comments (Sheets 005–007)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 005 | `rb-005-output.html` | Output | puts · print · p · pp · printf · $stdout · warn / $stderr |
| 006 | `rb-006-input-argv.html` | Input & Command-Line Arguments | gets · chomp · $stdin · STDIN.read · ARGV · ARGF · Integer(gets) |
| 007 | `rb-007-comments.html` | Comments & Documentation | # · =begin / =end · magic comments · # frozen_string_literal: true · RDoc · YARD @param / @return |

### Group 3: Variables & Data Types (Sheets 008–015)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 008 | `rb-008-variables.html` | Variables & Assignment | local variables · snake_case · multiple assignment · a, b = b, a · CONSTANTS · $globals · sigils @ @@ $ |
| 009 | `rb-009-integers.html` | Integers | Integer · arbitrary precision · 1_000_000 · 0x / 0b / 0o · divmod · digits · pow(b, mod) · Integer.sqrt |
| 010 | `rb-010-floats-numerics.html` | Floats, Rational & BigDecimal | Float · round(2) · floor / ceil · Float::INFINITY · nan? · 3r Rational · BigDecimal · Complex |
| 011 | `rb-011-booleans-truthiness.html` | Booleans & Truthiness | true / false · TrueClass · only nil and false are falsy · 0 and "" are truthy · !! · predicate methods |
| 012 | `rb-012-nil.html` | nil & Safe Navigation | NilClass · nil? · &. · \|\| default · \|\|= · Array(nil) · fetch vs [] |
| 013 | `rb-013-symbols.html` | Symbols | :name · interned & immutable · to_sym / to_s · %i[] · symbol vs string keys · Symbol#to_proc |
| 014 | `rb-014-type-conversion.html` | Type Conversion | to_s · to_i · to_f · Integer() / Float() strict · to_a · to_sym · implicit to_str / to_ary |
| 015 | `rb-015-type-checking.html` | Type Checking & Identity | .class · is_a? · kind_of? · instance_of? · respond_to? · == vs eql? vs equal? · object_id |

### Group 4: Strings (Sheets 016–021)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 016 | `rb-016-string-basics.html` | String Basics | '' vs "" · escapes · length · mutable strings · frozen literals · << vs + · dup / +"" · String.new |
| 017 | `rb-017-string-interpolation-formatting.html` | Interpolation & Formatting | #{} · format / sprintf · % operator · %05.2f · rjust / ljust / center · to_s(2) · inspect |
| 018 | `rb-018-string-methods-search.html` | String Methods — Search | include? · start_with? · end_with? · index / rindex · count · match? · =~ · scan |
| 019 | `rb-019-string-methods-transform.html` | String Methods — Transform | upcase / downcase · capitalize · strip · sub / gsub · tr · squeeze · delete · bang ! variants |
| 020 | `rb-020-string-indexing-slicing.html` | Indexing, Slicing & Splitting | str[0] · str[-1] · str[1..3] · slice · chars · split · each_char · each_line |
| 021 | `rb-021-heredocs-encoding.html` | Heredocs, % Literals & Encoding | <<~HEREDOC · %q / %Q · %w · encoding · force_encoding · encode · bytes · unicode_normalize |

### Group 5: Operators (Sheets 022–027)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 022 | `rb-022-arithmetic-operators.html` | Arithmetic Operators | + - * / % ** · integer vs float division · fdiv · divmod · negative modulo · precedence |
| 023 | `rb-023-comparison-operators.html` | Comparison & Spaceship | == · != · < > <= >= · <=> · Comparable · between? · clamp |
| 024 | `rb-024-logical-operators.html` | Logical Operators | && \|\| ! · and / or / not · precedence trap · short-circuit · returns an operand · &&= |
| 025 | `rb-025-bitwise-operators.html` | Bitwise Operators | & \| ^ ~ << >> · to_s(2) · 0b literals · bit_length · Integer#[] · allbits? / anybits? |
| 026 | `rb-026-assignment-splat.html` | Assignment & Splat Operators | += -= · \|\|= · parallel assignment · *splat · **double splat · nested destructuring · *nil (4.0) |
| 027 | `rb-027-special-operators.html` | Special Operators | === case equality · =~ / !~ · &. · .. / ... · :: · defined? · -> |

### Group 6: Control Flow (Sheets 028–035)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 028 | `rb-028-if-unless.html` | if, elsif, else & unless | if · elsif · else · unless · then · if returns a value · unless/else pitfalls |
| 029 | `rb-029-modifiers-ternary.html` | Modifiers & Ternary | if / unless modifiers · if as expression · ? : · leading && / \|\| continuation (4.0) · guard clauses |
| 030 | `rb-030-case-when.html` | case / when | case / when · then · ranges, classes, regex in when · === under the hood · subjectless case · else |
| 031 | `rb-031-pattern-matching-basics.html` | Pattern Matching — Basics | case / in · value patterns · array patterns · hash patterns · NoMatchingPatternError · => binding |
| 032 | `rb-032-pattern-matching-advanced.html` | Pattern Matching — Advanced | find pattern [*, x, *] · pin ^ · guard if / unless · alternatives \| · in one-liner · deconstruct · deconstruct_keys |
| 033 | `rb-033-while-until-loop.html` | while, until & loop | while · until · begin...end while · loop do · while modifier · infinite loops |
| 034 | `rb-034-iteration-each-times.html` | Iterating: each, times & for | each · times · upto / downto · step · each_with_index · for...in (and why it's rare) |
| 035 | `rb-035-loop-controls.html` | Loop Controls | break · break value · next · redo · throw / catch · StopIteration · return inside blocks |

### Group 7: Error Handling (Sheets 036–039)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 036 | `rb-036-rescue-basics.html` | begin, rescue, else & ensure | begin · rescue => e · multiple rescue clauses · else · ensure · method-level rescue · rescue modifier |
| 037 | `rb-037-raise.html` | Raising Exceptions | raise · raise Class, "msg" · re-raise · cause · message · backtrace · full_message |
| 038 | `rb-038-custom-exceptions.html` | Exception Hierarchy & Custom Errors | Exception vs StandardError · bare rescue scope · < StandardError · initialize(msg) · error namespaces · rescue order |
| 039 | `rb-039-retry-cleanup.html` | retry & Cleanup Patterns | retry with attempts · ensure · File.open block · yield-based cleanup · at_exit · Timeout.timeout |

### Group 8: Methods & Blocks (Sheets 040–049)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 040 | `rb-040-methods-defining.html` | Defining & Calling Methods | def · implicit return · optional parens · ? predicates · ! bang methods · setter= · endless def |
| 041 | `rb-041-parameters.html` | Parameters & Keyword Arguments | required · defaults · keyword args · required keywords · ArgumentError · parameter order |
| 042 | `rb-042-variadic-forwarding.html` | Variadic Params & Forwarding | *args · **opts · &block · ... forwarding · anonymous * ** & · splat at call site |
| 043 | `rb-043-scope.html` | Variable Scope | local scope · scope gates def / class / module · blocks see outer vars · $globals · constants · binding |
| 044 | `rb-044-blocks-yield.html` | Blocks & yield | { } vs do...end · yield · block_given? · block params · block-local ;x · _1 numbered params · it |
| 045 | `rb-045-procs.html` | Procs & &block | &block · Proc.new · proc { } · call / .() / [] · &:symbol · to_proc · arity |
| 046 | `rb-046-lambdas.html` | Lambdas | -> (x) { } · lambda · strict arity · return in lambda vs proc · lambda? · curry |
| 047 | `rb-047-closures.html` | Closures | captured variables · counter factory · define_method closures · binding · scope-gate workaround |
| 048 | `rb-048-method-objects-composition.html` | Method Objects & Composition | method(:name) · Method#call · &method(:puts) · >> / << · send / public_send · unbind / bind |
| 049 | `rb-049-recursion-memoization.html` | Recursion & Memoization | base case · recursive methods · Hash.new { \|h, k\| } memo · @memo \|\|= · SystemStackError · no default TCO |

### Group 9: Data Structures (Sheets 050–060)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 050 | `rb-050-array-basics.html` | Array Basics | [] · Array.new(3, 0) · Array.new(3) { } · %w[] · indexing · first / last · dig · length / empty? |
| 051 | `rb-051-array-add-remove.html` | Adding, Removing & Stack/Queue Use | push / << · pop · shift / unshift · insert · delete / delete_at · compact · stack & queue idioms |
| 052 | `rb-052-array-operations.html` | Array Operations | + - & \| · * · flatten · uniq · zip · product · transpose · rotate |
| 053 | `rb-053-array-slicing-lookup.html` | Array Slicing & Lookup | arr[1..] · slice · take / drop · values_at · include? · index · sample / shuffle · fill |
| 054 | `rb-054-hash-basics.html` | Hash Basics | { } · key: value · "k" => v · [] vs fetch · Hash.new(0) · Hash.new { } · shared-default trap · {x:, y:} shorthand |
| 055 | `rb-055-hash-methods.html` | Hash Methods | keys / values · key? / value? · delete · merge / update · slice / except · dig · to_a · each_pair |
| 056 | `rb-056-hash-transformations.html` | Hash Transformations | transform_values · transform_keys · select / reject · filter_map · to_h { } · group_by · sort_by · min_by |
| 057 | `rb-057-ranges.html` | Ranges | 1..10 · 1...10 · endless 1.. · beginless ..5 · step / % · cover? vs include? · to_a · string & date ranges |
| 058 | `rb-058-sets.html` | Sets | Set.new · core Set (4.0) · add / << · include? · \| & - ^ · subset? / superset? · to_set |
| 059 | `rb-059-struct-data.html` | Struct & Data | Struct.new · keyword_init · Data.define · immutable values · with · to_h · members · pattern matching |
| 060 | `rb-060-sorting-searching.html` | Sorting & Searching | sort · sort_by · sort! · <=> block · reverse · min / max · bsearch · multi-key sort |

### Group 10: OOP (Sheets 061–072)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 061 | `rb-061-classes-objects.html` | Classes & Objects | class · new · initialize · @instance vars · self · to_s / inspect · instance_variables |
| 062 | `rb-062-accessors.html` | Attribute Accessors | attr_reader · attr_writer · attr_accessor · custom setters · self.x = · validation in setters |
| 063 | `rb-063-class-methods.html` | Class Methods & Class-Level State | def self.x · class << self · @@class vars · class instance vars · constants · factory methods |
| 064 | `rb-064-visibility.html` | Visibility | public · private · protected · private def · private attr_reader · private_constant · send bypass |
| 065 | `rb-065-inheritance.html` | Inheritance & super | < · super vs super() · method overriding · ancestors · superclass · BasicObject |
| 066 | `rb-066-modules-mixins.html` | Modules as Mixins | module · include · extend · prepend · ancestors chain · included hook · Comparable |
| 067 | `rb-067-modules-namespaces.html` | Modules as Namespaces | nesting · Foo::Bar · :: lookup · module_function · extend self · constant lookup rules |
| 068 | `rb-068-duck-typing.html` | Polymorphism & Duck Typing | duck typing · respond_to? · overriding · NotImplementedError "abstract" methods · interfaces by convention |
| 069 | `rb-069-operator-overloading.html` | Operator Overloading | def + · def == · def <=> · def [] / []= · -@ / +@ · coerce |
| 070 | `rb-070-equality-hashing.html` | Equality & Hash Keys | == · eql? · hash · equal? · objects as hash keys · uniq with custom objects |
| 071 | `rb-071-conversion-protocols.html` | Conversion Protocols | to_s vs to_str · to_a vs to_ary · to_h · to_proc · inspect · implicit vs explicit conversion |
| 072 | `rb-072-copying-freezing.html` | Copying & Freezing | dup · clone(freeze:) · initialize_copy · freeze · frozen? · deep copy · Ractor.make_shareable |

### Group 11: Files & I/O (Sheets 073–078)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 073 | `rb-073-reading-files.html` | Reading Files | File.read · File.readlines(chomp: true) · File.foreach · File.open block · each_line · IO modes |
| 074 | `rb-074-writing-files.html` | Writing & Appending | File.write · "w" / "a" / "r+" · file.puts · File.open block · mode: "wb" · flush |
| 075 | `rb-075-paths-directories.html` | Paths & Directories | File.join · basename / extname / dirname · File.exist? · Dir.glob · Dir.mkdir · FileUtils · Pathname |
| 076 | `rb-076-json.html` | JSON | require "json" · JSON.parse · symbolize_names: · to_json · JSON.pretty_generate · JSON.load_file · custom to_json |
| 077 | `rb-077-csv.html` | CSV | csv bundled gem · CSV.read · CSV.foreach headers: true · CSV::Row · CSV.generate · converters: :numeric |
| 078 | `rb-078-yaml.html` | YAML | require "yaml" · YAML.load_file · safe_load · permitted_classes · to_yaml · YAML.dump · symbolize_names |

### Group 12: Modules & Packages (Sheets 079–085)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 079 | `rb-079-require-load.html` | require & load | require · require_relative · load · $LOAD_PATH · autoload · Zeitwerk naming conventions |
| 080 | `rb-080-rubygems.html` | RubyGems | gem install · gem list · gem uninstall · gem env · default vs bundled gems · rubygems.org |
| 081 | `rb-081-bundler.html` | Bundler | Gemfile · bundle install · Gemfile.lock · bundle exec · groups · ~> constraints · bundle update |
| 082 | `rb-082-creating-gem.html` | Creating a Gem | bundle gem · lib/ layout · .gemspec · version.rb · gem build · gem push |
| 083 | `rb-083-math-random.html` | Standard Library — Math & Random | Math.sqrt · Math::PI · Math.log · rand · Random.new(seed) · SecureRandom · gcd / lcm |
| 084 | `rb-084-dates-times.html` | Standard Library — Dates & Times | Time.now · strftime · Time#+ · Date.today · Date.parse · iso8601 · Time.at |
| 085 | `rb-085-os-system.html` | Standard Library — OS & Processes | ENV · system · backticks · Open3.capture3 · exit / abort · at_exit · OptionParser |

### Group 13: External Libraries (Sheets 086–091)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 086 | `rb-086-minitest.html` | Minitest | Minitest::Test · test_ methods · assert_equal · assert_raises · setup / teardown · Minitest::Spec · stubs |
| 087 | `rb-087-rspec-basics.html` | RSpec Basics | describe · context · it · expect().to eq · let / let! · before · subject |
| 088 | `rb-088-rspec-matchers-mocks.html` | RSpec Matchers & Mocks | be_truthy · include · raise_error · change { } · double · allow().to receive · instance_double |
| 089 | `rb-089-rake.html` | Rake | Rakefile · task · desc · namespace · prerequisites => · rake -T · file tasks |
| 090 | `rb-090-debugging-linting.html` | Debugging & Linting | debug gem · binding.irb · binding.break · pry · RuboCop · Standard · Logger |
| 091 | `rb-091-http-clients.html` | HTTP Clients | Net::HTTP · URI · Net::HTTP.get_response · Faraday · headers · JSON responses |

### Group 14: Advanced Topics (Sheets 092–100)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 092 | `rb-092-regex-basics.html` | Regular Expressions — Basics | /pattern/ · =~ · match · MatchData · named captures (?<name>) · $~ $1 · flags i m x |
| 093 | `rb-093-regex-methods.html` | Regex in String Methods | scan · gsub with block / hash · sub · split · match? · Regexp.union · Regexp.escape |
| 094 | `rb-094-threads.html` | Threads & Mutex | Thread.new · join · value · Mutex#synchronize · GVL · Thread::Queue · thread-local vars |
| 095 | `rb-095-fibers-async.html` | Fibers & the Fiber Scheduler | Fiber.new · resume · Fiber.yield · Fiber.scheduler · async gem · non-blocking IO |
| 096 | `rb-096-ractors.html` | Ractors | Ractor.new · Ractor::Port · send / receive · shareable objects · make_shareable · value / join |
| 097 | `rb-097-databases.html` | Databases | sqlite3 gem · execute · prepared statements · results_as_hash · Sequel · ActiveRecord outside Rails |
| 098 | `rb-098-serialization.html` | Marshal & Serialization | Marshal.dump / load · Marshal security risks · marshal_dump / marshal_load · JSON round-trips · Struct/Data to_h · MessagePack |
| 099 | `rb-099-rbs-types.html` | Type Signatures: RBS & Sorbet | .rbs files · sig/ · Steep · TypeProf · rbs-inline · Sorbet sig { } |
| 100 | `rb-100-performance-memory.html` | Performance & Memory | Benchmark · benchmark-ips · GC.stat · ObjectSpace · frozen strings · YJIT / ZJIT · memory_profiler |

### Group 15: Enumerable & Enumerators (Sheets 101–106)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 101 | `rb-101-enumerable-transform.html` | Enumerable — Iterate & Transform | each · map · flat_map · filter_map · each_with_index · with_index(1) · each_with_object · zip |
| 102 | `rb-102-enumerable-filter.html` | Enumerable — Filter & Find | select / filter · reject · find / detect · partition · grep / grep_v · take_while / drop_while · any? / all? / none? |
| 103 | `rb-103-enumerable-reduce.html` | Enumerable — Reduce & Aggregate | reduce / inject · sum · count · tally · min_by / max_by · minmax · group_by |
| 104 | `rb-104-enumerable-slice-chunk.html` | Enumerable — Slice & Chunk | each_slice · each_cons · chunk · chunk_while · slice_when · cycle · uniq { } |
| 105 | `rb-105-enumerators-lazy.html` | Enumerators & Lazy Evaluation | to_enum / enum_for · next / peek / rewind · Enumerator.new · Enumerator.produce · lazy · first(n) · eager |
| 106 | `rb-106-custom-enumerable.html` | Making Classes Enumerable | include Enumerable · def each · to_enum unless block_given? · Comparable · <=> · size |

### Group 16: Metaprogramming (Sheets 107–113)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 107 | `rb-107-open-classes-refinements.html` | Open Classes & Refinements | reopening classes · monkey patching · core extensions · refine · using · refinement scope |
| 108 | `rb-108-introspection.html` | Introspection | methods · public_methods(false) · instance_variables · ancestors · instance_methods(false) · source_location · const_get |
| 109 | `rb-109-dynamic-methods.html` | Dynamic Dispatch & define_method | send · public_send · define_method · instance_variable_get / set · const_set · remove_method |
| 110 | `rb-110-method-missing.html` | method_missing & Delegation | method_missing · respond_to_missing? · super fallback · Forwardable · def_delegators · SimpleDelegator |
| 111 | `rb-111-singleton-class.html` | Singleton Classes | singleton_class · class << obj · define_singleton_method · extend on objects · singleton_methods · lookup path |
| 112 | `rb-112-eval-hooks.html` | eval Family & Hooks | instance_eval · class_eval · instance_exec · inherited · included · extended · method_added |
| 113 | `rb-113-dsls.html` | Building DSLs | instance_eval blocks · configure do...end · builder pattern · Class.new · Module.new · block-based config |
