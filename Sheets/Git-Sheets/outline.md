# Git CLI Reference — Outline

Generated from `manifest.json`; keep the two in sync when sheets are added, renamed or reordered.

## Profile

- **Collection section:** Concepts & Tools
- **Status:** Complete
- **Sheets:** 36 across 10 groups
- **File prefix:** `git` (`git-##-[slug].html`)
- **Folder:** `Sheets/Git-Sheets/`
- **Coverage:** introduction & setup, starting a repository, everyday workflow (staging, committing, diff), history & inspection, branches & tags, merging & rebasing, remotes & collaboration, undoing & recovery (reset, revert, stash, reflog), advanced tools (bisect, worktrees, submodules, LFS, hooks, rewriting history), quick reference

---

## Group 1 — Introduction & Setup (01–03)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `git-01-introduction-mental-model.html` | Introduction &amp; Mental Model | working tree · staging area · repository · blob / tree / commit · HEAD · SHA hashes · Git 3.0 |
| 02 | `git-02-installation-first-config.html` | Installation &amp; First-Time Config | git --version · brew / apt / winget · user.name / user.email · init.defaultBranch main · core.editor · core.autocrlf |
| 03 | `git-03-config-aliases-help.html` | Config Levels, Aliases &amp; Help | --system / --global / --local · config --list --show-origin · includeIf · alias · ! shell aliases · git help · -- separator · -C |

## Group 2 — Starting a Repository (04–05)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 04 | `git-04-init-clone.html` | Init &amp; Clone | git init · --bare · git clone &lt;url> · --depth 1 · --branch · --recurse-submodules · HTTPS vs SSH URLs |
| 05 | `git-05-ignoring-files-attributes.html` | Ignoring Files &amp; .gitattributes | .gitignore patterns · ! negation · core.excludesFile · git check-ignore -v · git rm --cached · .gitattributes · text=auto / eol=lf · binary |

## Group 3 — Everyday Workflow (06–09)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 06 | `git-06-status-staging.html` | Status &amp; Staging | git status -sb · XY status codes · add . / -A / -u · add -p · -N intent-to-add · git restore --staged · git rm / git mv |
| 07 | `git-07-committing.html` | Committing | git commit -m · -a · -v · --amend · --no-edit · multi-line messages · Conventional Commits · --allow-empty |
| 08 | `git-08-diff.html` | Viewing Diffs | git diff · --staged / --cached · diff HEAD · A..B vs A...B · --stat / --name-only · --word-diff · -w · difftool |
| 09 | `git-09-discarding-changes.html` | Discarding Working Changes | git restore &lt;file> · restore --source=&lt;sha> · restore -p · checkout -- &lt;file> (legacy) · git clean -n · clean -fd / -x |

## Group 4 — History & Inspection (10–13)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 10 | `git-10-log-basics.html` | Log Basics | git log · --oneline · --graph --all --decorate · -n 5 · -p · --stat · --follow · git shortlog -sn |
| 11 | `git-11-log-filtering-formatting.html` | Log Filtering &amp; Formatting | --author · --since / --until · --grep · -S pickaxe · -G regex · -- &lt;path> · --pretty=format: · --no-merges |
| 12 | `git-12-revision-syntax.html` | Referencing Commits | HEAD~2 vs HEAD^2 · short SHAs · @{u} upstream · main@{yesterday} · A..B / A...B · &lt;sha>:path · git rev-parse |
| 13 | `git-13-show-blame-grep.html` | Show, Blame &amp; Grep | git show &lt;sha> · show &lt;sha>:file · git blame -L · blame -w -C · --ignore-revs-file · git grep · git describe |

## Group 5 — Branches & Tags (14–15)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 14 | `git-14-branches.html` | Creating &amp; Managing Branches | git branch -a / -vv · switch / switch -c / switch - · checkout -b (legacy) · branch -m · -d / -D · --merged / --contains · --sort=-committerdate · detached HEAD |
| 15 | `git-15-tags.html` | Tags | git tag v1.0 · annotated -a -m · lightweight · tag -l 'v1.*' · push --tags / --follow-tags · tag -d · push origin --delete &lt;tag> · signed -s |

## Group 6 — Merging & Rebasing (16–20)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 16 | `git-16-merging.html` | Merging | git merge &lt;branch> · fast-forward · --no-ff · --ff-only · --squash · merge --abort · -X ours / -X theirs |
| 17 | `git-17-merge-conflicts.html` | Resolving Conflicts | &lt;&lt;&lt;&lt;&lt;&lt;&lt; ======= >>>>>>> markers · checkout --ours / --theirs · git mergetool · merge.conflictStyle zdiff3 · git rerere · add then commit to finish |
| 18 | `git-18-rebasing.html` | Rebasing | git rebase main · --continue / --skip / --abort · --onto · --update-refs · rebase.autoStash · don't rebase shared branches |
| 19 | `git-19-interactive-rebase.html` | Interactive Rebase | rebase -i HEAD~5 · pick reword edit · squash fixup drop · exec · reordering · commit --fixup + --autosquash |
| 20 | `git-20-cherry-pick-patches.html` | Cherry-Pick &amp; Patches | git cherry-pick &lt;sha> · ranges A^..B · -x · -n · --continue / --abort · git format-patch · git am · git apply |

## Group 7 — Remotes & Collaboration (21–24)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 21 | `git-21-remotes-fetch-pull.html` | Remotes, Fetch &amp; Pull | git remote -v · remote add / set-url · origin vs upstream · fetch --all --prune · pull = fetch + merge · pull --rebase · pull.ff only · origin/main tracking branches |
| 22 | `git-22-push.html` | Push | git push · -u origin &lt;branch> · push.autoSetupRemote · --force-with-lease vs --force · --delete · push origin HEAD · rejected non-fast-forward |
| 23 | `git-23-ssh-authentication.html` | SSH, Credentials &amp; Signing | ssh-keygen -t ed25519 · ssh -T git@github.com · ~/.ssh/config · HTTPS + tokens · credential.helper · Git Credential Manager · gpg.format ssh / commit -S |
| 24 | `git-24-collaboration-workflows.html` | Collaboration Workflows | feature branches · GitHub flow · Git flow · trunk-based · fork + sync upstream · gh pr create · gh pr checkout · release branches |

## Group 8 — Undoing & Recovery (25–29)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 25 | `git-25-reset.html` | Reset | reset --soft / --mixed / --hard · reset HEAD~1 · reset &lt;file> · what moves (HEAD / index / tree) · ORIG_HEAD |
| 26 | `git-26-revert-vs-reset.html` | Revert vs Reset vs Restore | git revert &lt;sha> · revert -m 1 merges · --no-commit · local vs pushed history · which undo? decision table · commit --amend |
| 27 | `git-27-stash.html` | Stash | git stash · -u · -m "msg" · stash list · pop vs apply · stash@{2} · stash show -p · stash branch |
| 28 | `git-28-reflog-recovery.html` | Reflog &amp; Recovery | git reflog · HEAD@{3} · restore a deleted branch · undo a bad reset · branch &lt;name> &lt;sha> · git fsck --lost-found · reflog expiry |
| 29 | `git-29-common-errors.html` | Common Errors &amp; Fixes | detached HEAD · non-fast-forward rejected · unrelated histories · local changes would be overwritten · CRLF warnings · GIT_TRACE=1 · git gc / fsck |

## Group 9 — Advanced Tools (30–34)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 30 | `git-30-bisect-worktrees.html` | Bisect &amp; Worktrees | git bisect start · good / bad / skip · bisect run &lt;script> · bisect reset · git worktree add ../dir &lt;branch> · worktree list / remove · worktree prune · one branch per worktree |
| 31 | `git-31-submodules-subtrees.html` | Submodules &amp; Subtrees | submodule add · update --init --recursive · .gitmodules · submodule foreach · git subtree add --prefix · subtree pull --squash |
| 32 | `git-32-large-repos-lfs.html` | Large Repos &amp; Big Files | clone --filter=blob:none · sparse-checkout set · fetch --unshallow · git lfs install / track · git maintenance start · scalar |
| 33 | `git-33-hooks.html` | Hooks | .git/hooks/ · pre-commit · commit-msg · pre-push · core.hooksPath · --no-verify · pre-commit framework / Husky |
| 34 | `git-34-rewriting-history.html` | Rewriting History &amp; Removing Secrets | git filter-repo · --path / --invert-paths · --replace-text · BFG · force-push afterward · rotate leaked secrets · filter-branch (deprecated) |

## Group 10 — Quick Reference (35–36)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 35 | `git-35-quick-reference-everyday.html` | Quick Reference — Everyday Commands | setup &amp; config · stage &amp; commit · diff &amp; log · revision syntax · branch &amp; switch · tags · fetch / pull / push |
| 36 | `git-36-quick-reference-undo-advanced.html` | Quick Reference — Merge, Undo &amp; Advanced | merge &amp; rebase · cherry-pick · stash · reset / revert / restore · reflog · bisect / worktree · Oops undo table |
