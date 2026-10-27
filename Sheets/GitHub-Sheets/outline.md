# GitHub Reference Guide Outline (93 sheets)

## Metadata

- **Group it belongs to:** DevOps & Cloud
- **Folder Directory:** `Sheets/GitHub-Sheets/gh-##-[slug].html`
- **Groups:** 20
- **Sheets:** 93
- **Drafted Date:** 2026-10-26
- **Verified-Finalized Date:**

## Basic Information

GitHub the platform, through the web UI and repo config files: accounts, repositories, access, Issues, Pull Requests, Projects, Discussions, Pages, GitHub Actions, Packages, security features, Codespaces, Copilot and the APIs. Aimed at intermediate users who already know Git and have pushed to GitHub, and want to use the rest of the platform well. Code-first where there is code (workflow YAML, `.github/` config files, API calls); UI-path and settings tables where there isn't.

Git itself lives in the Git CLI set, and the `gh` CLI is mostly left out: it appears only as an occasional one-line alternative in a tip, never as a sheet topic. Copilot gets a four-sheet overview; the Agentic Coding set goes deeper. Targets github.com as of late 2026 (sub-issues, issue types and dependencies, rulesets, merge queues, immutable releases, parallel Actions steps, Copilot coding agent). GitHub Enterprise Server differences get a one-line note where they matter.

Replaces the 33-sheet GitHub Actions outline (drafted 2026-10-25). Those 33 built sheets become the Actions groups here (Sheets 40–69) and the last two quick references (Sheets 92–93), renumbered. The old `gha-31` CLI sheet is dropped, and its act / actionlint / badge content folds into Sheet 69. Capped at about 100 sheets.

## Differences in Layout from Basic Structure

- The Outline Guide has no platform category; the standard language groups don't apply. Groups follow the platform's areas, and GitHub Actions is split into six "Actions:" groups.
- Code blocks are YAML (workflows, issue forms, `dependabot.yml`), JSON (`devcontainer.json`, rulesets), Markdown, or `curl` / GraphQL. Each config file's block starts with a comment naming its path, e.g. `# .github/ISSUE_TEMPLATE/bug.yml`.
- **Two Row 2 layouts on the platform sheets (01–39, 70–89):**
  - **Code row** (standard Code | Code Explained) on sheets with a real file, query or API call to show: 05, 07, 08, 10, 16, 20, 23, 29, 37, 38, 39, 70, 74, 75, 78, 80, 83, 84, 86, 87, 88, 89.
  - **Steps row** on UI-only sheets: **Steps** (`id="steps"`, about 2/3 width, a numbered how-to with UI paths in bold) | **Where to Find It** (`id="where"`, about 1/3 width, a table of UI path → what's there). Used on 01, 02, 03, 04, 06, 09, 11, 12, 13, 14, 15, 17, 18, 19, 21, 22, 24, 25, 26, 27, 28, 30, 31, 32, 33, 34, 35, 36, 71, 72, 73, 76, 77, 79, 81, 82, 85. No Prism on these unless an Automate It box has code.
- **Who Can Do This** box (`id="who"`) on every platform sheet (01–39, 70–89), placed under Notes in `col-1-2`. Three lines: minimum role (Read / Triage / Write / Maintain / Admin / Org owner), plan needed (Free / Pro / Team / Enterprise), and public-vs-private availability.
- **Automate It** box (`id="automate"`) on selected platform sheets: the 2–4 line config, Actions or API equivalent of the UI action, as a small code block. On Steps sheets it goes under Steps in `col-2-1`; on code sheets under Code Explained in `col-2-2`. Used on 06, 09, 10, 11, 12, 14, 15, 17, 18, 19, 20, 21, 24, 26, 27, 28, 29, 30, 31, 34, 36, 71, 73, 76.
- Actions sheets (40–69) don't get Who Can Do This or Automate It. They keep the two extra boxes from the Actions set, stacked under Code Explained: **Security Check** (`id="sec-check"`) on 43, 44, 45, 48, 50, 51, 54, 56, 59, 60, 65, 66, 68 and **In the Logs** (`id="in-logs"`) on 41, 42, 46, 47, 48, 49, 50, 51, 53, 55, 57, 58, 59, 60, 61, 62, 63, 64, 66, 67.
- Sheets 90–93 are quick-reference pages: rows of two side-by-side tables (Key / Syntax · Does · #) at 9px, with no code row and no extra boxes.

## Groups

### Group 1: Introduction & Setup (Sheets 01–05)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `gh-01-introduction-mental-model.html` | Introduction & Mental Model | Git vs GitHub · accounts / orgs / enterprises · repos · plans (Free / Pro / Team / Enterprise) · github.com vs GHES |
| 02 | `gh-02-account-profile.html` | Account & Profile Setup | username · emails · noreply address · profile README · pinned repos · status · contribution graph |
| 03 | `gh-03-authentication-ssh-2fa.html` | Authentication: SSH, Passkeys & 2FA | 2FA (TOTP / passkeys / security keys) · recovery codes · SSH keys · signing keys · HTTPS + tokens · sudo mode |
| 04 | `gh-04-navigation-notifications.html` | Navigation, Shortcuts & Notifications | command palette (Ctrl+K) · `t` file finder · `.` web editor · `y` permalink · watch / custom · inbox filters · notification reasons |
| 05 | `gh-05-searching-github.html` | Searching GitHub | code search · `repo:` / `org:` / `path:` / `language:` · regex `/…/` · symbol search · repo / user search · saved searches |

### Group 2: Repositories (Sheets 06–13)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 06 | `gh-06-creating-configuring-repos.html` | Creating & Configuring Repos | new repo · visibility public / private / internal · About + topics · Settings → General · features toggles · default branch |
| 07 | `gh-07-repo-files-community-health.html` | Repo Files & Community Health | README · LICENSE · CONTRIBUTING · CODE_OF_CONDUCT · SECURITY.md · SUPPORT · `.github` repo defaults · community profile |
| 08 | `gh-08-github-flavored-markdown.html` | GitHub Flavored Markdown | alerts `> [!NOTE]` · task lists · #123 / @user / SHA autolinks · tables · Mermaid · math `$…$` · `<details>` · permalinks |
| 09 | `gh-09-branches-rulesets.html` | Branches, Protection & Rulesets | rulesets · target branches / tags · require PR · required checks · block force push · bypass list · branch protection (classic) |
| 10 | `gh-10-releases-tags.html` | Releases & Tags | draft / pre-release / latest · generated notes · `.github/release.yml` · assets · immutable releases · tag rulesets |
| 11 | `gh-11-forks-templates.html` | Forks & Template Repos | fork · Sync fork · upstream · fork PR permissions · template repository · Use this template · forks vs templates |
| 12 | `gh-12-repo-insights.html` | Repository Insights | Pulse · Contributors · Traffic (views / clones) · Commits · Code frequency · Dependency graph · Network / Forks |
| 13 | `gh-13-large-files-archive-transfer.html` | Size Limits, Archive & Transfer | 100 MB file limit · Git LFS on GitHub · LFS quotas · archive (read-only) · rename / redirects · transfer · delete |

### Group 3: Access & Collaboration (Sheets 14–17)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 14 | `gh-14-collaborators-roles.html` | Collaborators & Repo Roles | invite collaborator · Read / Triage / Write / Maintain / Admin · outside collaborators · custom roles · access audit |
| 15 | `gh-15-organizations-teams.html` | Organizations & Teams | create org · owners / members · base permissions · teams + nested teams · @org/team mentions · team sync · audit log |
| 16 | `gh-16-codeowners.html` | CODEOWNERS | `.github/CODEOWNERS` · pattern syntax · last match wins · users / teams / emails · require code owner review · error view |
| 17 | `gh-17-tokens-app-access.html` | Tokens, Apps & Third-Party Access | fine-grained PATs · classic PATs · expiration · SAML SSO authorize · OAuth apps vs GitHub Apps · authorized apps review |

### Group 4: Issues (Sheets 18–23)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 18 | `gh-18-issue-basics.html` | Issue Basics | create issue · title / body · assignees · close as completed / not planned · reopen · reactions · pin · lock · transfer |
| 19 | `gh-19-labels-milestones.html` | Labels, Milestones & Assignees | default labels · custom labels + colors · milestones + due dates · progress % · assignees (up to 10) · bulk edit |
| 20 | `gh-20-issue-templates-forms.html` | Issue Templates & Forms | `.github/ISSUE_TEMPLATE/` · Markdown templates · YAML issue forms · input / textarea / dropdown / checkboxes · `config.yml` · contact links |
| 21 | `gh-21-sub-issues-types-dependencies.html` | Sub-issues, Issue Types & Dependencies | sub-issues · parent issue · progress · issue types (Bug / Feature / Task) · blocked by / blocking · org-level types |
| 22 | `gh-22-linking-closing-issues.html` | Linking & Closing Issues | `Fixes #12` / `Closes` / `Resolves` · cross-repo `owner/repo#12` · Development sidebar · autolink references · default-branch rule |
| 23 | `gh-23-issue-search-triage.html` | Issue Search & Triage | `is:open` · `label:` · `assignee:@me` · `no:label` · `type:` · `parent-issue:` · AND / OR / parentheses · saved views · saved replies |

### Group 5: Pull Requests (Sheets 24–31)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 24 | `gh-24-pull-request-basics.html` | Pull Request Basics | compare base ← head · draft PRs · Ready for review · title / description · linked issues · Files changed · Commits tab |
| 25 | `gh-25-reviewing-pull-requests.html` | Reviewing Pull Requests | line / multi-line comments · ```suggestion blocks · batch suggestions · Comment / Approve / Request changes · Viewed checkbox · resolve conversations |
| 26 | `gh-26-review-rules-requirements.html` | Review Rules & Requirements | required approvals · dismiss stale reviews · code owner review · last-push approval · re-request review · auto-assignment (round robin / load balance) |
| 27 | `gh-27-merge-methods-auto-merge.html` | Merge Methods & Auto-Merge | merge commit · squash · rebase · allowed methods setting · auto-merge · auto-delete head branches · commit message defaults |
| 28 | `gh-28-merge-queues.html` | Merge Queues | require merge queue · merge_group event · build concurrency · merge limits · jump the queue · removed from queue |
| 29 | `gh-29-pr-templates-conventions.html` | PR Templates & Conventions | `.github/pull_request_template.md` · multiple templates `?template=` · checklists · Conventional Commits titles · small PRs |
| 30 | `gh-30-conflicts-updating-branches.html` | Conflicts & Updating Branches | Update branch (merge / rebase) · require up-to-date · web conflict editor · when to resolve locally · always suggest updating |
| 31 | `gh-31-status-checks.html` | Status Checks | checks vs commit statuses · required checks · check names (job vs workflow) · skipped = passing · re-run · expected / pending forever |

### Group 6: Projects (Sheets 32–35)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 32 | `gh-32-projects-basics.html` | Projects Basics | org vs user projects · table / board / roadmap layouts · add items · draft issues · link to repo · templates |
| 33 | `gh-33-project-fields-views.html` | Project Fields & Views | custom fields (text / number / date / single select / iteration) · group by · sort · slice by · filter syntax · saved views |
| 34 | `gh-34-project-automation.html` | Project Automation | built-in workflows · auto-add by filter · auto-archive · item closed → Done · `actions/add-to-project` · GraphQL `addProjectV2ItemById` |
| 35 | `gh-35-project-insights-iterations.html` | Project Insights & Iterations | iteration field · breaks · current / next iteration filters · charts · burn-up · status updates · roadmap date fields |

### Group 7: Discussions & Community (Sheets 36–37)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 36 | `gh-36-discussions.html` | Discussions | enable Discussions · categories (Q&A / Announcements / Polls) · mark answer · convert issue ↔ discussion · discussion forms · org discussions |
| 37 | `gh-37-moderation-sponsors-wikis.html` | Moderation, Sponsors & Wikis | interaction limits · block user · hide / minimize comments · report content · `.github/FUNDING.yml` · Sponsors · repo wikis |

### Group 8: GitHub Pages (Sheets 38–39)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 38 | `gh-38-pages-setup-domains.html` | Pages Setup & Custom Domains | user / org / project sites · source: branch or Actions · `CNAME` · apex A / AAAA records · `www` CNAME · verify domain · Enforce HTTPS |
| 39 | `gh-39-pages-building-deploying.html` | Building & Deploying Pages | Jekyll default · `.nojekyll` · `_config.yml` · static site generators via Actions · `upload-pages-artifact` / `deploy-pages` · 404.html · limits |

Sheet 39 covers the build side; Sheet 65 keeps the Actions view of the Pages deploy.

### Group 9: Actions: Foundations (Sheets 40–42)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 40 | `gh-40-actions-introduction.html` | Actions: Introduction & Mental Model | workflow · event · job · step · action · runner · .github/workflows/ |
| 41 | `gh-41-actions-first-workflow.html` | Actions: Your First Workflow | on: push · runs-on: ubuntu-latest · actions/checkout · run: · Actions tab · run logs |
| 42 | `gh-42-actions-yaml.html` | Actions: YAML for Workflows | maps & lists · \| and > block scalars · quoting · anchors & aliases (&amp; / *) · actionlint |

### Group 10: Actions: Triggers (Sheets 43–45)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 43 | `gh-43-actions-push-pr-triggers.html` | Actions: Push & Pull Request Triggers | push · pull_request · branches · tags · paths · types · pull_request_target |
| 44 | `gh-44-actions-manual-scheduled.html` | Actions: Manual & Scheduled Triggers | workflow_dispatch · inputs · schedule: cron · timezone |
| 45 | `gh-45-actions-chained-other-events.html` | Actions: Chained & Other Events | workflow_run · repository_dispatch · release · issues · merge_group · [skip ci] |

### Group 11: Actions: Jobs, Runners & Steps (Sheets 46–52)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 46 | `gh-46-actions-jobs.html` | Actions: Jobs & Dependencies | jobs.&lt;id> · needs · if: · outputs · continue-on-error · job graph |
| 47 | `gh-47-actions-hosted-runners.html` | Actions: GitHub-Hosted Runners | ubuntu-latest · windows-latest · macos-latest · ubuntu-24.04-arm · larger runners · billing |
| 48 | `gh-48-actions-self-hosted-runners.html` | Actions: Self-Hosted Runners | config.sh · labels · runs-on: [self-hosted] · runner groups · --ephemeral · ARC |
| 49 | `gh-49-actions-containers-services.html` | Actions: Job & Service Containers | container: · services: · postgres / redis · ports · --health-cmd · credentials |
| 50 | `gh-50-actions-run-steps-shells.html` | Actions: Run Steps & Shells | run: · shell: bash / pwsh / python · working-directory · defaults.run · exit codes |
| 51 | `gh-51-actions-using-actions.html` | Actions: Using Actions | uses: owner/repo@ref · with: · SHA pinning · ./local · docker:// · Marketplace |
| 52 | `gh-52-actions-parallel-steps.html` | Actions: Parallel & Background Steps | background: true · wait · wait-all · cancel · parallel: |

### Group 12: Actions: Expressions & Data (Sheets 53–60)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 53 | `gh-53-actions-expressions.html` | Actions: Expressions & Operators | ${{ }} · == != · &amp;&amp; \|\| ! · literals · if: · object filters |
| 54 | `gh-54-actions-contexts.html` | Actions: Contexts | github · env · vars · secrets · steps · runner · needs · matrix · inputs |
| 55 | `gh-55-actions-functions.html` | Actions: Functions & Status Checks | contains · startsWith · format · join · toJSON · fromJSON · hashFiles · always() |
| 56 | `gh-56-actions-env-outputs.html` | Actions: Env Vars, Outputs & File Commands | env: · GITHUB_* vars · $GITHUB_ENV · $GITHUB_OUTPUT · $GITHUB_PATH · $GITHUB_STEP_SUMMARY |
| 57 | `gh-57-actions-matrix.html` | Actions: Matrix Strategy | strategy.matrix · include / exclude · fail-fast · max-parallel · fromJSON |
| 58 | `gh-58-actions-concurrency-timeouts.html` | Actions: Concurrency & Timeouts | concurrency: group · cancel-in-progress · github.ref · timeout-minutes |
| 59 | `gh-59-actions-caching.html` | Actions: Caching Dependencies | actions/cache · key · restore-keys · hashFiles · setup-node cache · cache-hit |
| 60 | `gh-60-actions-artifacts.html` | Actions: Artifacts | upload-artifact · download-artifact · retention-days · immutable · cache vs artifact |

### Group 13: Actions: Security & Deployment (Sheets 61–65)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 61 | `gh-61-actions-secrets-variables.html` | Actions: Secrets & Variables | secrets.NAME · vars.NAME · repo / org / environment · masking · ::add-mask:: |
| 62 | `gh-62-actions-github-token.html` | Actions: GITHUB_TOKEN & Permissions | secrets.GITHUB_TOKEN · permissions: · contents: read · id-token: write · least privilege |
| 63 | `gh-63-actions-oidc-hardening.html` | Actions: OIDC & Hardening | OIDC · configure-aws-credentials · script injection · SHA pinning · Dependabot · allowed actions |
| 64 | `gh-64-actions-environments.html` | Actions: Environments & Approvals | environment: · required reviewers · wait timer · deployment branches · environment secrets |
| 65 | `gh-65-actions-deploy-recipes.html` | Actions: Deploy & Release Recipes | deploy-pages · docker/build-push-action · GHCR · release on tag · attestations |

### Group 14: Actions: Reuse & Debugging (Sheets 66–69)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 66 | `gh-66-actions-reusable-workflows.html` | Actions: Reusable Workflows | on: workflow_call · inputs / secrets / outputs · secrets: inherit · 10 levels / 50 calls |
| 67 | `gh-67-actions-composite-actions.html` | Actions: Composite Actions | action.yml · runs.using: composite · inputs / outputs · shell: · $GITHUB_ACTION_PATH |
| 68 | `gh-68-actions-javascript-docker-actions.html` | Actions: JavaScript & Docker Actions | runs.using: node24 · @actions/core · @actions/github · ncc · Dockerfile · Marketplace |
| 69 | `gh-69-actions-debugging-tooling.html` | Actions: Debugging, Linting & Badges | re-run with debug · ::group:: · ::error:: · step summary · actionlint · act · status badges |

Sheet 69 absorbs the useful parts of the old CLI sheet (actionlint, act limits, badge URLs) and drops the `gh run` / `gh workflow` command list.

### Group 15: Packages (Sheets 70–71)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 70 | `gh-70-packages-ghcr.html` | GitHub Packages & Container Registry | ghcr.io · npm / Maven / NuGet / RubyGems registries · auth with GITHUB_TOKEN or PAT · `org.opencontainers.image.source` label · publish from Actions |
| 71 | `gh-71-package-access-cleanup.html` | Package Access, Visibility & Cleanup | inherit repo access · package visibility · Manage Actions access · delete / restore versions · retention · storage billing |

### Group 16: Security (Sheets 72–78)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 72 | `gh-72-security-overview-policy.html` | Security Overview & Policy | Security tab · SECURITY.md · private vulnerability reporting · security configurations · GitHub Advanced Security (Secret Protection / Code Security) |
| 73 | `gh-73-dependency-graph-alerts.html` | Dependency Graph & Dependabot Alerts | dependency graph · supported manifests · SBOM export · Dependabot alerts · severity / EPSS · auto-triage rules · dismiss reasons |
| 74 | `gh-74-dependabot-updates.html` | Dependabot Version & Security Updates | `.github/dependabot.yml` · package-ecosystem · schedule · groups · ignore · cooldown · security updates · `@dependabot rebase` |
| 75 | `gh-75-code-scanning-codeql.html` | Code Scanning & CodeQL | default setup · advanced setup (`codeql.yml`) · languages · query suites · SARIF upload · alerts in PRs · Copilot Autofix |
| 76 | `gh-76-secret-scanning-push-protection.html` | Secret Scanning & Push Protection | secret scanning alerts · partner patterns · push protection · bypass reasons · custom patterns · validity checks · rotate first |
| 77 | `gh-77-security-advisories.html` | Repository Security Advisories | draft advisory · private fork · request CVE · publish · GitHub Advisory Database · GHSA IDs · credit |
| 78 | `gh-78-attestations-supply-chain.html` | Attestations & Supply Chain | `actions/attest-build-provenance` · `gh attestation verify` · SBOM attestations · immutable releases · SLSA levels · signed commits |

### Group 17: Codespaces & Web Editing (Sheets 79–81)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 79 | `gh-79-codespaces-basics.html` | Codespaces Basics | create from branch / PR · machine types · VS Code browser vs desktop · ports + forwarding · stop / delete · idle timeout · quotas |
| 80 | `gh-80-dev-containers.html` | Dev Containers | `.devcontainer/devcontainer.json` · image / Dockerfile · features · postCreateCommand · customizations.vscode · secrets · prebuilds |
| 81 | `gh-81-github-dev-web-editor.html` | github.dev & Web Editing | `.` / `>` shortcuts · edit file in browser · commit to branch / new PR · upload files · limits (no terminal) · github.dev vs Codespaces |

### Group 18: Copilot (Sheets 82–85)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 82 | `gh-82-copilot-plans-setup.html` | Copilot Plans & Setup | Free / Pro / Pro+ / Business / Enterprise · premium requests · model picker · org policies · content exclusion |
| 83 | `gh-83-copilot-chat-instructions.html` | Copilot Chat & Custom Instructions | Copilot Chat on github.com · `.github/copilot-instructions.md` · `.github/instructions/*.instructions.md` · `applyTo` · prompt files · AGENTS.md |
| 84 | `gh-84-copilot-coding-agent.html` | Copilot Coding Agent | assign issue to Copilot · agent PRs · `copilot-setup-steps.yml` · firewall · MCP config · review + iterate · Agents tab |
| 85 | `gh-85-copilot-code-review.html` | Copilot Code Review & PR Features | request Copilot review · automatic review ruleset · coding guidelines · PR summaries · Autofix suggestions · limits |

Pointer: the Agentic Coding set covers Copilot in the IDE and agent workflows in depth.

### Group 19: API & Integrations (Sheets 86–89)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 86 | `gh-86-rest-api.html` | REST API | `api.github.com` · `Authorization: Bearer` · `X-GitHub-Api-Version` · pagination `Link` · rate limits · conditional requests · common endpoints |
| 87 | `gh-87-graphql-api.html` | GraphQL API | `POST /graphql` · queries / mutations · node IDs · cursors `first` / `after` · rate-limit points · Explorer · Projects v2 |
| 88 | `gh-88-webhooks.html` | Webhooks | repo / org webhooks · events · payload URL · secret + `X-Hub-Signature-256` · delivery log · redeliver · `ping` |
| 89 | `gh-89-github-apps.html` | GitHub Apps | create app · permissions + events · private key → JWT → installation token · install on repos · Marketplace · Apps vs PATs |

### Group 20: Quick Reference (Sheets 90–93)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 90 | `gh-90-quick-reference-search-shortcuts.html` | Quick Reference — Search, Shortcuts & Markdown | code search qualifiers · issue / PR qualifiers · keyboard shortcuts · GFM extras · autolink syntax |
| 91 | `gh-91-quick-reference-repo-issues-prs.html` | Quick Reference — Repo, Issues & PRs | `.github/` file map · closing keywords · repo roles · ruleset rules · merge methods · review states |
| 92 | `gh-92-quick-reference-actions-syntax.html` | Quick Reference — Actions Workflow Syntax | top-level keys · triggers · job keys · step keys · strategy · permissions |
| 93 | `gh-93-quick-reference-actions-expressions.html` | Quick Reference — Actions Expressions & Recipes | operators · functions · status checks · contexts · GITHUB_* · file commands |

Sheet 91 includes a `.github/` folder map: every special file and folder (workflows, ISSUE_TEMPLATE, CODEOWNERS, dependabot.yml, FUNDING.yml, copilot-instructions.md, release.yml…) → what it does → sheet #.
