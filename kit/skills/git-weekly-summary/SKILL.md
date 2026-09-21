---
name: git-weekly-summary
description: Summarize what actually happened across one or more projects over a time window — for a recap, a standup-style update, or "what did we do this week/today." Use when the founder asks for an update, a recap, or what changed recently, instead of writing an ad hoc report each time.
---

# Git Weekly Summary

Idea adapted from Version1's internal `ai-agents_skills` repo (2026-09-21) —
their version was 8 lines and already correct; this fills in how to actually
run it against a portfolio of ~48 independent repos rather than one team's
single codebase.

## How to run it

1. **Scope first.** "This week" / "last 24 hours" / "since Tuesday" — get a
   real date boundary, not a vague one. If the founder names specific
   projects, use those; otherwise check every repo under `~/Projects` (skip
   `_archive/`, matching `build-index.sh`'s own exclusion).
2. **Per repo, collect only verified data:**
   - `git log --since=<bound> --format="%ad %s" --date=short` — the real
     commit list, not a guess from filenames or memory.
   - `git diff --stat` against the boundary commit, or `git log --numstat`
     — what actually changed, not just commit message text.
   - `git status --porcelain` — real uncommitted work sitting in the
     working tree right now. This matters: `portfolio-audit`'s own sweep
     (2026-09-21) found real work on two projects that a commit-log-only
     view would have missed entirely.
3. **Separate committed work from uncommitted work from claims.** Never
   report "worked on X" because a filename looks relevant — only report
   what a real commit, diff, or `git status` entry actually shows.
4. **Group the output**: one section per repo with real activity, a
   cross-repo "themes" note if several repos moved for the same reason (a
   shared bug fix, a portfolio-wide convention applied everywhere), then
   explicitly list repos checked with nothing to report — silence isn't
   the same as "confirmed nothing happened."

## Guardrails

- Never infer work from filenames, branch names, or commit message text
  alone — read the actual diff when the summary depends on *what* changed,
  not just *that* something changed.
- Uncommitted work is real work — report it, clearly labeled as
  uncommitted, don't wait for a commit to exist before it counts.
- If a project's repo doesn't exist, isn't a git repo, or the founder names
  one that can't be found, say so directly rather than silently skipping it.
- This is a read-only skill — it reports on git state, it doesn't commit,
  push, or change anything on its own.
