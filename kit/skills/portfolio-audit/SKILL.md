---
name: portfolio-audit
description: Triage every project in ~/Projects into a decision — keep, revisit, refresh, redirect or archive. Use when the founder asks for a portfolio review, wants to know what needs attention, or asks which projects to consolidate or shelve.
---

# Portfolio Audit

Answers "what needs a decision, and what's fine as it is" across every project
— not just "have I built this before" (that's `kit/INDEX.md`'s job).

Asked for twice before this skill existed; both times it was built ad hoc as
a spawned agent and the output wasn't saved anywhere. That's the exact gap
this skill closes — the audit becomes a kit asset (`kit/PORTFOLIO-DECISIONS.md`),
not a one-off report that evaporates with the conversation.

## The five categories

| Category | Means | Signal |
|---|---|---|
| **Keep** | Working, actively maintained, no action needed | Recent commits (~30 days), clear purpose |
| **Revisit** | Status genuinely unknown — must be opened before any other call | No git history, no README, or boilerplate purpose text never replaced |
| **Refresh** | Direction is still right, but it's stale — technical catch-up, dependency bump, or a visual pass | 1–8 months since last commit, purpose is clear and real |
| **Redirect** | Duplicates or overlaps another project, or its own ambition has outgrown its scope | Same domain as another project in the index, or purpose text describes something much bigger than what shipped |
| **Archive** | Purpose already served, or explicitly superseded | Interview/practice projects after the interview, anything whose README already says "superseded by X" |

**Never assign Keep, Refresh, Redirect or Archive on absent signal.** A
project with no git history and no README purpose text gets **Revisit**, not
a guess dressed up as a category. Guessing a project is dead because the
index has nothing on it is exactly the kind of ungrounded claim to avoid —
open it before saying more.

## How to run it

1. Regenerate `kit/INDEX.md` first (`bash kit/build-index.sh > kit/INDEX.md`)
   — a stale index produces a stale audit.
2. Pass over every row. For each: recency + purpose text + tags is enough for
   a first-pass category in most cases. Only open a project's actual files
   when the index gives no purpose text **and** no capability tags **and**
   the name alone doesn't say what it is.
3. **Actively look for duplicate/overlapping clusters** — same domain
   (naming pattern, purpose text) across multiple entries. Flag every member
   with one line naming what it overlaps with; don't silently drop the
   smaller ones. The Rivervalley Rangers cluster (five codebases as of
   2026-09-20: `RVR 2014 Team Admin`, `RVR2026`, `rvr`, `rvrmatchday`,
   `rivervalley-rangers-cms`) is the reference case — RVR2026 is the mature
   production one, the rest are Keep/Redirect/Archive depending on how stale
   and how duplicative each is.
4. Write the result to `kit/PORTFOLIO-DECISIONS.md`: one row per project,
   category, one-line reasoning, and whether it's a first-pass call or
   founder-confirmed. Mark every fresh pass **first-pass** until the founder
   has actually reviewed it — don't claim confirmed status you don't have.
5. Build the review surface as an Artifact: sortable/filterable table, the
   category editable per row, a notes field, grouped by category by default.
   This is a decision tool the founder revisits, not a report read once —
   design it that way (see `artifact-design` skill).
6. After the founder reviews and corrects categories in conversation (not
   just in the artifact's own local state, which never reaches back here),
   update `kit/PORTFOLIO-DECISIONS.md` to mark those rows founder-confirmed.
   The file is the durable record; the artifact is the working surface.

## Guardrails

- Don't re-derive INDEX.md's mechanical signals by hand (stack, last-active,
  capability tags) — that's what `build-index.sh` is for. This skill adds the
  judgment layer on top, it doesn't duplicate the mechanical one.
- A project this session is actively building (uncommitted work, today's
  date) is Keep regardless of how it otherwise reads — don't flag something
  mid-flight as needing a decision.
- Re-running this later: diff against the existing `kit/PORTFOLIO-DECISIONS.md`
  rather than rewriting it blind — a founder-confirmed row shouldn't silently
  flip back to a first-pass guess because the signals happened to look
  different this time.
- **`kit/INDEX.md`'s last-commit-date is blind to uncommitted work — check
  `git status`, not just `git log`, before finalizing Archive on anything.**
  A portfolio-wide sweep (2026-09-21) found real, substantial uncommitted
  work sitting silently across 9 repos — including two, `lucy` and
  `rvrmatchday`, already marked Archive in this file. Their last real commit
  read as old and settled; their actual working tree held real unpushed
  changes the whole time. Before a category becomes final (Archive
  especially — it implies nothing more is happening), run
  `git status --porcelain` on the project. Real uncommitted work found on an
  otherwise-Archive candidate doesn't have to change the category, but
  commit it for the record before treating the project as settled — losing
  work nobody looked at is worse than losing a few minutes checking.
- **When a project gets opened for any reason** (a founder request to "look
  at X", fixing something else, confirming a category) — spot-check it
  against `CONVENTIONS.md` while you're already there: the build credit's
  *rendered* size, the favicon's actual `<link rel="icon">`, not just that
  the files exist. Marvin's build-credit bug (2026-09-21) sat live in
  production for months because nothing ever looked; it was only found once
  the founder asked to check the project for a different reason. This isn't
  a mandatory step of every audit pass — the index stays cheap and
  mechanical — but a real, low-cost check worth doing whenever a project is
  open anyway.
- Same sweep found a Keep-worthy project (`Ultra Health Optimiser 3000`)
  with real work — a working favicon, new components — that had sat
  uncommitted for 5 months with no GitHub remote at all, still showing only
  its original `create-next-app` scaffold commit. `kit/INDEX.md`'s
  "last active" column would read this as dead; it wasn't. A project
  claimed as Keep or Refresh should actually have a remote it's pushed to —
  flag it plainly when one doesn't exist rather than assuming the commit
  history tells the whole story.
