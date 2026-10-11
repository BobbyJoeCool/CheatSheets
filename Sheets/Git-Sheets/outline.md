# Git CLI Reference Guide Outline (36 sheets)

## Metadata

- **Group it belongs to:** Command Line Interface
- **Folder Directory:** `Sheets/Git-Sheets/git-##-[slug].html`
- **Groups:** 10
- **Sheets:** 36
- **Drafted Date:** 2026-10-06
- **Verified-Finalized Date:** 2026-10-07

## Basic Information

Git from the command line only (no GUI clients), for intermediate users who are comfortable in a terminal and have made a few commits. Targets Git 2.4x and later, teaching the modern `switch` / `restore` commands first and marking the older `checkout` forms as legacy. Git 3.0's planned changes (`main` as default branch, SHA-256) get a note on Sheet 01 only.

The main section was capped at 25–35 sheets, so several topics are merged onto dense sheets. It condensed from a 42-sheet draft (config + help, ignore + attributes, status + staging, branch basics + management, remotes + fetch/pull, bisect + worktrees; internals folded into Sheet 01).

## Differences in Layout from Basic Structure

- The Outline Guide has no CLI-tool category; the standard groups (data types, operators, OOP) don't apply, so groups follow the Git workflow instead.
- Sheets 35–36 are quick-reference pages: rows of two side-by-side tables (Command · Does · #) at 9px, grouped by task, with no code row.

## Groups

### Group 1: Introduction & Setup (Sheets 01–03)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `git-01-introduction-mental-model.html` | Introduction & Mental Model | working tree · staging area · repository · blob / tree / commit · HEAD · SHA hashes · Git 3.0 |
| 02 | `git-02-installation-first-config.html` | Installation & First-Time Config | git --version · brew / apt / winget · user.name / user.email · init.defaultBranch main · core.editor · core.autocrlf |
| 03 | `git-03-config-aliases-help.html` | Config Levels, Aliases & Help | --system / --global / --local · config --list --show-origin · includeIf · alias · ! shell aliases · git help · -- separator · -C |

### Group 2: Starting a Repository (Sheets 04–05)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 04 | `git-04-init-clone.html` | Init & Clone | git init · --bare · git clone &lt;url> · --depth 1 · --branch · --recurse-submodules · HTTPS vs SSH URLs |
| 05 | `git-05-ignoring-files-attributes.html` | Ignoring Files & .gitattributes | .gitignore patterns · ! negation · core.excludesFile · git check-ignore -v · git rm --cached · .gitattributes · text=auto / eol=lf · binary |

### Group 3: Everyday Workflow (Sheets 06–09)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 06 | `git-06-status-staging.html` | Status & Staging | git status -sb · XY status codes · add . / -A / -u · add -p · -N intent-to-add · git restore --staged · git rm / git mv |
| 07 | `git-07-committing.html` | Committing | git commit -m · -a · -v · --amend · --no-edit · multi-line messages · Conventional Commits · --allow-empty |
| 08 | `git-08-diff.html` | Viewing Diffs | git diff · --staged / --cached · diff HEAD · A..B vs A...B · --stat / --name-only · --word-diff · -w · difftool |
| 09 | `git-09-discarding-changes.html` | Discarding Working Changes | git restore &lt;file> · restore --source=&lt;sha> · restore -p · checkout -- &lt;file> (legacy) · git clean -n · clean -fd / -x |

### Group 4: History & Inspection (Sheets 10–13)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 10 | `git-10-log-basics.html` | Log Basics | git log · --oneline · --graph --all --decorate · -n 5 · -p · --stat · --follow · git shortlog -sn |
| 11 | `git-11-log-filtering-formatting.html` | Log Filtering & Formatting | --author · --since / --until · --grep · -S pickaxe · -G regex · -- &lt;path> · --pretty=format: · --no-merges |
| 12 | `git-12-revision-syntax.html` | Referencing Commits | HEAD~2 vs HEAD^2 · short SHAs · @{u} upstream · main@{yesterday} · A..B / A...B · &lt;sha>:path · git rev-parse |
| 13 | `git-13-show-blame-grep.html` | Show, Blame & Grep | git show &lt;sha> · show &lt;sha>:file · git blame -L · blame -w -C · --ignore-revs-file · git grep · git describe |

### Group 5: Branches & Tags (Sheets 14–15)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 14 | `git-14-branches.html` | Creating & Managing Branches | git branch -a / -vv · switch / switch -c / switch - · checkout -b (legacy) · branch -m · -d / -D · --merged / --contains · --sort=-committerdate · detached HEAD |
| 15 | `git-15-tags.html` | Tags | git tag v1.0 · annotated -a -m · lightweight · tag -l 'v1.*' · push --tags / --follow-tags · tag -d · push origin --delete &lt;tag> · signed -s |

### Group 6: Merging & Rebasing (Sheets 16–20)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 16 | `git-16-merging.html` | Merging | git merge &lt;branch> · fast-forward · --no-ff · --ff-only · --squash · merge --abort · -X ours / -X theirs |
| 17 | `git-17-merge-conflicts.html` | Resolving Conflicts | &lt;&lt;&lt;&lt;&lt;&lt;&lt; ======= >>>>>>> markers · checkout --ours / --theirs · git mergetool · merge.conflictStyle zdiff3 · git rerere · add then commit to finish |
| 18 | `git-18-rebasing.html` | Rebasing | git rebase main · --continue / --skip / --abort · --onto · --update-refs · rebase.autoStash · don't rebase shared branches |
| 19 | `git-19-interactive-rebase.html` | Interactive Rebase | rebase -i HEAD~5 · pick reword edit · squash fixup drop · exec · reordering · commit --fixup + --autosquash |
| 20 | `git-20-cherry-pick-patches.html` | Cherry-Pick & Patches | git cherry-pick &lt;sha> · ranges A^..B · -x · -n · --continue / --abort · git format-patch · git am · git apply |

### Group 7: Remotes & Collaboration (Sheets 21–24)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 21 | `git-21-remotes-fetch-pull.html` | Remotes, Fetch & Pull | git remote -v · remote add / set-url · origin vs upstream · fetch --all --prune · pull = fetch + merge · pull --rebase · pull.ff only · origin/main tracking branches |
| 22 | `git-22-push.html` | Push | git push · -u origin &lt;branch> · push.autoSetupRemote · --force-with-lease vs --force · --delete · push origin HEAD · rejected non-fast-forward |
| 23 | `git-23-ssh-authentication.html` | SSH, Credentials & Signing | ssh-keygen -t ed25519 · ssh -T git@github.com · ~/.ssh/config · HTTPS + tokens · credential.helper · Git Credential Manager · gpg.format ssh / commit -S |
| 24 | `git-24-collaboration-workflows.html` | Collaboration Workflows | feature branches · GitHub flow · Git flow · trunk-based · fork + sync upstream · gh pr create · gh pr checkout · release branches |

### Group 8: Undoing & Recovery (Sheets 25–29)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 25 | `git-25-reset.html` | Reset | reset --soft / --mixed / --hard · reset HEAD~1 · reset &lt;file> · what moves (HEAD / index / tree) · ORIG_HEAD |
| 26 | `git-26-revert-vs-reset.html` | Revert vs Reset vs Restore | git revert &lt;sha> · revert -m 1 merges · --no-commit · local vs pushed history · which undo? decision table · commit --amend |
| 27 | `git-27-stash.html` | Stash | git stash · -u · -m "msg" · stash list · pop vs apply · stash@{2} · stash show -p · stash branch |
| 28 | `git-28-reflog-recovery.html` | Reflog & Recovery | git reflog · HEAD@{3} · restore a deleted branch · undo a bad reset · branch &lt;name> &lt;sha> · git fsck --lost-found · reflog expiry |
| 29 | `git-29-common-errors.html` | Common Errors & Fixes | detached HEAD · non-fast-forward rejected · unrelated histories · local changes would be overwritten · CRLF warnings · GIT_TRACE=1 · git gc / fsck |

### Group 9: Advanced Tools (Sheets 30–34)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 30 | `git-30-bisect-worktrees.html` | Bisect & Worktrees | git bisect start · good / bad / skip · bisect run &lt;script> · bisect reset · git worktree add ../dir &lt;branch> · worktree list / remove · worktree prune · one branch per worktree |
| 31 | `git-31-submodules-subtrees.html` | Submodules & Subtrees | submodule add · update --init --recursive · .gitmodules · submodule foreach · git subtree add --prefix · subtree pull --squash |
| 32 | `git-32-large-repos-lfs.html` | Large Repos & Big Files | clone --filter=blob:none · sparse-checkout set · fetch --unshallow · git lfs install / track · git maintenance start · scalar |
| 33 | `git-33-hooks.html` | Hooks | .git/hooks/ · pre-commit · commit-msg · pre-push · core.hooksPath · --no-verify · pre-commit framework / Husky |
| 34 | `git-34-rewriting-history.html` | Rewriting History & Removing Secrets | git filter-repo · --path / --invert-paths · --replace-text · BFG · force-push afterward · rotate leaked secrets · filter-branch (deprecated) |

### Group 10: Quick Reference (Sheets 35–36)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 35 | `git-35-quick-reference-everyday.html` | Quick Reference — Everyday Commands | setup & config · stage & commit · diff & log · revision syntax · branch & switch · tags · fetch / pull / push |
| 36 | `git-36-quick-reference-undo-advanced.html` | Quick Reference — Merge, Undo & Advanced | merge & rebase · cherry-pick · stash · reset / revert / restore · reflog · bisect / worktree · Oops undo table |

A compact command → purpose lookup that condenses Sheets 01–34, with no explanations. Sheet 36 ends with two "Oops" tables (not pushed yet / already pushed): situation → fix, e.g. wrong commit message → `commit --amend`, bad commit on main → `revert`, reset went wrong → `reflog`.
