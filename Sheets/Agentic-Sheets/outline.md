# Agentic Coding Reference — Outline

Generated from `manifest.json`; keep the two in sync when sheets are added, renamed or reordered.

## Profile

- **Collection section:** Concepts & Tools
- **Status:** Complete
- **Sheets:** 73 across 16 groups
- **File prefix:** `ai` (`ai-##-[slug].html`)
- **Folder:** `Sheets/Agentic-Sheets/`
- **Coverage:** introduction & concepts, prompting for code, Claude Code (setup, memory & context, permissions & safety, skills & subagents, hooks, MCP & plugins, automation & headless), instruction files across tools, MCP fundamentals, OpenAI Codex, GitHub Copilot, other agentic tools, quality, security & team practice, quick reference

---

## Group 1 — Introduction & Concepts (01–06)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `ai-01-introduction.html` | What Is Agentic Coding | autocomplete vs chat vs agent · agentic loop · autonomy levels · human-in-the-loop · vibe coding vs agentic engineering |
| 02 | `ai-02-tool-landscape.html` | The Tool Landscape | terminal agents · IDE agents · cloud/async agents · Claude Code · Codex · Copilot · Cursor · Gemini CLI |
| 03 | `ai-03-agent-loop-tools.html` | How Agents Work — Loop &amp; Tools | gather context → act → verify · tool calls · read / edit / bash / search · observations · stop conditions |
| 04 | `ai-04-context-windows.html` | Context Windows &amp; Tokens | tokens · context window · compaction · context rot · prompt caching · what fills context |
| 05 | `ai-05-models-cost.html` | Models, Effort &amp; Cost | model tiers (Opus / Sonnet / Haiku) · reasoning effort · extended thinking · rate limits · subscription vs API billing · usage tracking |
| 06 | `ai-06-choosing-workflow.html` | Choosing a Workflow | task sizing · when not to use an agent · interactive vs autonomous · sync vs async · greenfield vs legacy code |

## Group 2 — Prompting for Code (07–12)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 07 | `ai-07-prompt-basics.html` | Prompt Basics for Coding | goal + constraints · specific files · acceptance criteria · examples · existing patterns · what not to touch |
| 08 | `ai-08-providing-context.html` | Providing Context | @file mentions · error messages &amp; stack traces · screenshots / images · docs URLs · piping input · sample data |
| 09 | `ai-09-explore-plan-code.html` | Explore → Plan → Code → Commit | read-only exploration · ask for a plan · review the plan · spec files · implement · commit |
| 10 | `ai-10-verification.html` | Give the Agent a Way to Verify | tests as target · linters / type checkers · run the app · UI screenshots · expected output · definition of done |
| 11 | `ai-11-course-correcting.html` | Steering &amp; Course-Correcting | interrupt early · rewind · redirect mid-task · fresh session vs continue · breaking loops · narrowing scope |
| 12 | `ai-12-prompt-patterns.html` | Prompt Patterns &amp; Anti-Patterns | "interview me" · spec-driven development · one task per session · vague asks · kitchen-sink sessions · over-trusting output |

## Group 3 — Claude Code — Setup & Basics (13–19)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 13 | `ai-13-claude-code-surfaces.html` | Claude Code — Introduction &amp; Surfaces | terminal CLI · VS Code / JetBrains · desktop app · web (claude.ai/code) · mobile · Slack |
| 14 | `ai-14-claude-code-install.html` | Installation &amp; Authentication | native installer · Homebrew · claude doctor · /login · Pro / Max / Team plans · API key · Bedrock / Vertex |
| 15 | `ai-15-claude-code-first-session.html` | Your First Session | claude · /init · approving tool calls · Esc to interrupt · ! bash mode · reading diffs · /exit |
| 16 | `ai-16-slash-commands.html` | Built-in Slash Commands | /clear · /compact · /context · /model · /resume · /rewind · /config · /doctor |
| 17 | `ai-17-cli-flags-sessions.html` | CLI Flags &amp; Sessions | -c continue · -r resume · -p print · --model · --add-dir · --permission-mode · --worktree · session history |
| 18 | `ai-18-shortcuts-input.html` | Keyboard Shortcuts &amp; Input | Esc · Esc Esc · Shift+Tab · @ file mentions · image paste · multiline input · vim mode · history search |
| 19 | `ai-19-settings-files.html` | Settings Files &amp; Scopes | ~/.claude/settings.json · .claude/settings.json · settings.local.json · managed settings · env · precedence · /config |

## Group 4 — Claude Code — Memory & Context (20–25)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 20 | `ai-20-claude-md-basics.html` | CLAUDE.md Basics | /init · build &amp; test commands · code style · architecture notes · check into git · under 200 lines |
| 21 | `ai-21-claude-md-locations.html` | CLAUDE.md Locations &amp; Load Order | managed policy · ~/.claude/CLAUDE.md · ./CLAUDE.md · CLAUDE.local.md · nested subdirectory files · additive loading |
| 22 | `ai-22-imports-rules.html` | Imports &amp; .claude/rules | @path imports · .claude/rules/*.md · paths: frontmatter · per-language rules · @AGENTS.md interop |
| 23 | `ai-23-effective-claude-md.html` | Writing an Effective CLAUDE.md | do / don't lists · emphasis (IMPORTANT) · concrete examples · prune regularly · repeated-mistake rule · /memory |
| 24 | `ai-24-managing-context.html` | Managing Context | /context · /compact with focus · /clear between tasks · auto-compaction · subagents for exploration · context indicator |
| 25 | `ai-25-output-styles.html` | Output Styles | built-in styles · Explanatory · Learning · custom style files · frontmatter · vs CLAUDE.md |

## Group 5 — Claude Code — Permissions & Safety (26–29)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 26 | `ai-26-permission-modes.html` | Permission Modes | default · acceptEdits · plan · auto · bypassPermissions · Shift+Tab cycling · --permission-mode |
| 27 | `ai-27-permission-rules.html` | Permission Rules | allow / ask / deny · Bash(npm run *) · Read(./.env) · Edit(path) · WebFetch(domain:) · /permissions · rule precedence |
| 28 | `ai-28-sandboxing.html` | Sandboxing &amp; Isolation | /sandbox · filesystem isolation · network allowlist · devcontainers · Docker · --dangerously-skip-permissions risks |
| 29 | `ai-29-checkpoints-undo.html` | Checkpoints &amp; Undo | automatic checkpoints · Esc Esc · /rewind · restore code vs conversation · bash changes not tracked · git as safety net |

## Group 6 — Claude Code — Skills & Subagents (30–34)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 30 | `ai-30-skills-basics.html` | Skills — Basics | SKILL.md · .claude/skills/ · ~/.claude/skills/ · name / description frontmatter · auto-invocation · /skill-name |
| 31 | `ai-31-skills-advanced.html` | Skills — Advanced | disable-model-invocation · allowed-tools · $ARGUMENTS · context: fork · supporting files &amp; scripts · bundled skills |
| 32 | `ai-32-subagents-basics.html` | Subagents — Basics | isolated context · summary returns · built-in Explore / Plan / general-purpose · parallel subagents · /agents |
| 33 | `ai-33-custom-subagents.html` | Custom Subagents | .claude/agents/*.md · name / description / tools / model · skills: preload · user vs project scope · when Claude delegates |
| 34 | `ai-34-parallel-work.html` | Parallel &amp; Multi-Agent Work | multiple sessions · git worktrees · dynamic workflows · cross-session messaging · background tasks · merge strategy |

## Group 7 — Claude Code — Hooks (35–37)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 35 | `ai-35-hooks-basics.html` | Hooks — Basics | hooks in settings.json · events · matchers · command hooks · exit code 0 / 2 · stdin JSON · /hooks |
| 36 | `ai-36-hook-events.html` | Hook Events | PreToolUse · PostToolUse · UserPromptSubmit · Stop · SubagentStop · SessionStart · Notification · PreCompact |
| 37 | `ai-37-hook-recipes.html` | Hook Recipes | auto-format after edit · block .env edits · tests on Stop · desktop notifications · JSON decision output · http / prompt hooks |

## Group 8 — Claude Code — MCP, Plugins & IDE (38–41)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 38 | `ai-38-mcp-in-claude-code.html` | MCP in Claude Code | claude mcp add · --transport http / stdio · local / project / user scope · .mcp.json · /mcp · OAuth · tool search |
| 39 | `ai-39-useful-mcp-servers.html` | Useful MCP Servers | GitHub · Playwright · Sentry · Postgres · Figma · docs servers · Slack |
| 40 | `ai-40-plugins.html` | Plugins &amp; Marketplaces | /plugin · plugin.json · /plugin marketplace add · namespaced skills · bundled skills / hooks / agents / MCP · team sharing |
| 41 | `ai-41-ide-code-intelligence.html` | IDE Integration &amp; Code Intelligence | VS Code extension · JetBrains plugin · inline diffs · selection context · diagnostics · LSP plugins |

## Group 9 — Claude Code — Automation & Headless (42–46)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 42 | `ai-42-headless-mode.html` | Headless Mode | claude -p · --output-format json / stream-json · --max-turns · --allowedTools · piping stdin · shell scripts |
| 43 | `ai-43-github-actions.html` | GitHub Actions &amp; CI | claude-code-action · @claude mentions · /install-github-app · PR review · API key secrets · workflow YAML |
| 44 | `ai-44-agent-sdk.html` | Claude Agent SDK | Python / TypeScript · query() · ClaudeAgentOptions · custom tools · hooks · sessions · permission callbacks |
| 45 | `ai-45-git-workflows.html` | Git Workflows with Claude | commits &amp; messages · PRs via gh · worktrees · merge conflicts · code review · Co-Authored-By |
| 46 | `ai-46-cloud-scheduled.html` | Cloud, Remote &amp; Scheduled Sessions | claude.ai/code · cloud environments · session handoff · scheduled tasks · /loop · mobile check-ins |

## Group 10 — Instruction Files Across Tools (47–49)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 47 | `ai-47-instruction-file-map.html` | Instruction File Map | CLAUDE.md · AGENTS.md · .github/copilot-instructions.md · .cursor/rules/ · GEMINI.md · .windsurf/rules/ · .clinerules |
| 48 | `ai-48-agents-md.html` | The AGENTS.md Standard | agents.md format · nested files · closest-file wins · supporting tools · typical sections · AGENTS.override.md |
| 49 | `ai-49-portable-instructions.html` | Writing Portable Instructions | single source of truth · symlinks · @AGENTS.md import · tool-specific overrides · what belongs where · keeping in sync |

## Group 11 — MCP Fundamentals (Cross-Tool) (50–52)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 50 | `ai-50-mcp-concepts.html` | MCP Concepts | host / client / server · tools · resources · prompts · stdio vs Streamable HTTP · OAuth · MCP registry |
| 51 | `ai-51-building-mcp-server.html` | Building an MCP Server | Python SDK · FastMCP · @mcp.tool · TypeScript SDK · tool descriptions · MCP Inspector |
| 52 | `ai-52-mcp-security.html` | MCP Security | tool poisoning · prompt injection via tool output · least privilege · token scopes · trusted servers only · reviewing server code |

## Group 12 — OpenAI Codex (53–57)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 53 | `ai-53-codex-overview.html` | Codex — Overview &amp; Setup | Codex CLI · IDE extension · desktop app · Codex cloud · npm / brew install · codex login · ChatGPT plan vs API key |
| 54 | `ai-54-codex-cli-basics.html` | Codex CLI Basics | codex · codex "prompt" · /init · /model · /diff · /compact · /status · @ file search |
| 55 | `ai-55-codex-config-safety.html` | Codex Config, Approvals &amp; Sandbox | ~/.codex/config.toml · approval_policy · sandbox_mode · read-only / workspace-write / danger-full-access · profiles · --full-auto |
| 56 | `ai-56-codex-agents-skills-mcp.html` | Codex AGENTS.md, Skills &amp; MCP | AGENTS.md hierarchy · ~/.codex/AGENTS.md · AGENTS.override.md · skills · [mcp_servers] · codex mcp add |
| 57 | `ai-57-codex-automation.html` | Codex Automation &amp; Cloud | codex exec · --json · codex resume · cloud tasks · @codex review on GitHub · parallel tasks · applying diffs |

## Group 13 — GitHub Copilot (58–62)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 58 | `ai-58-copilot-overview.html` | Copilot — Overview &amp; Modes | code completion · next edit suggestions · Copilot Chat · ask / edit / agent modes · model picker · plans |
| 59 | `ai-59-copilot-agent-mode.html` | Copilot Agent Mode (VS Code) | agent mode · tools picker · #codebase / #file · terminal approvals · .vscode/mcp.json · checkpoints |
| 60 | `ai-60-copilot-instructions.html` | Copilot Custom Instructions | .github/copilot-instructions.md · .github/instructions/*.instructions.md · applyTo · AGENTS.md support · personal &amp; org instructions |
| 61 | `ai-61-copilot-prompts-agents.html` | Prompt Files, Custom Agents &amp; Skills | .github/prompts/*.prompt.md · .github/agents/*.agent.md · tools frontmatter · handoffs · agent skills · /prompt-name |
| 62 | `ai-62-copilot-cloud-agent-cli.html` | Copilot Cloud Agent &amp; CLI | assign issue to Copilot · draft PRs · copilot-setup-steps.yml · agent firewall · Copilot code review · copilot CLI |

## Group 14 — Other Agentic Tools (63–66)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 63 | `ai-63-cursor.html` | Cursor | Agent mode · .cursor/rules/ · AGENTS.md · @ context · background / cloud agents · Bugbot · .cursor/mcp.json |
| 64 | `ai-64-gemini-cli.html` | Gemini CLI | npm install · GEMINI.md · /memory · settings.json · MCP servers · sandbox · -p non-interactive |
| 65 | `ai-65-windsurf-cline-aider.html` | Windsurf, Cline &amp; Aider | Windsurf Cascade · .windsurf/rules · Cline Plan / Act · .clinerules · Aider /add · repo map · auto-commits |
| 66 | `ai-66-tool-comparison.html` | Choosing a Tool — Comparison | terminal vs IDE vs cloud · instruction files · MCP support · pricing model · model choice · enterprise controls |

## Group 15 — Quality, Security & Team Practice (67–71)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 67 | `ai-67-reviewing-ai-code.html` | Reviewing AI-Generated Code | read every diff · small PRs · second-agent review · hallucinated APIs · over-engineering · deleted or weakened tests |
| 68 | `ai-68-testing-with-agents.html` | Testing with Agents | TDD loop · failing test first · lock tests from edits · coverage · Playwright e2e · CI gates |
| 69 | `ai-69-security-risks.html` | Security Risks | prompt injection · secret leakage · .env deny rules · hallucinated packages (slopsquatting) · destructive commands · least privilege |
| 70 | `ai-70-team-adoption.html` | Team Adoption &amp; Governance | shared settings in repo · managed settings · internal plugin marketplace · usage analytics · AI-use policy · onboarding |
| 71 | `ai-71-troubleshooting.html` | Troubleshooting Agents | looping · context exhaustion · ignored instructions · wrong files edited · /doctor · logs · fresh session reset |

## Group 16 — Quick Reference (72–73)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 72 | `ai-72-claude-code-quick-ref.html` | Claude Code Quick Reference | top slash commands · key CLI flags · shortcuts · file locations · permission modes · hook events |
| 73 | `ai-73-cross-tool-equivalents.html` | Cross-Tool Equivalents | instruction file · config file · headless command · approval modes · MCP config · custom commands / skills |
