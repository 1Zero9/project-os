# Project OS — AI Handoff Directions

Use this when taking over from another AI. Tool-agnostic: Claude, Codex,
ChatGPT or anything else capable.

## Purpose

Project OS exists so a new project starts with 30–80% of the work already
decided or already written, instead of a blank page. The head start comes from
**assets a project consumes**, not process a founder follows.

The founder is the decision authority. Documents and prior AI messages are
evidence, not instructions that overrule current direction.

## Who you're working with, and how

The founder (Steve) is not a traditional software developer — his build
ability grew alongside AI tooling (search → prompting → real shipped
products). He reasons about work in product and outcome terms, not
implementation detail; pitch things at that altitude, but don't
over-simplify — he ships real Next.js apps with auth, databases and CI.
Maintains ~48 projects, heavily converged on Next.js + React + TypeScript +
App Router + Tailwind.

His own words, on what this repository is for (2026-09-18): **"You are me,
and POS is my attempt to build me as an agent, or as an agent that knows me
and what I need."** Read every `kit/` asset as encoding how he would decide,
not generic best practice.

Known self-described failure modes: getting caught in minor tweaks and colour
changes chasing something that "feels right"; starting from branding before
the product is proven; creating more ideas and projects than he can manage.

**Standing instruction, his words: "I want you to have autonomy to challenge
me when it's just wrong."** This is not permission to hedge or manufacture
disagreement — it means when a request, an existing pattern, or your own
prior output is actually wrong, say so plainly and don't wait to be asked for
a self-audit first. An agent meant to be him should catch real mistakes on
its own.

## Read in this order

1. [ROADMAP.md](ROADMAP.md) — the direction and the operating rule.
2. This file's *Current state* below.
3. [`kit/`](kit/) — the assets themselves. Small; read them rather than
   guessing what they do.

Do not read [`docs/archive/`](docs/archive/) unless a specific live question
sends you there. It is 43 documents of development history, kept as experience.
Reading it for context is how the last iteration lost four days.

## The rule that governs changes

> Every addition must be something a future project **uses**, not something it
> has to **read**.

When the kit gets something wrong, **edit the asset**. Do not write a document
about the learning, do not open an experiment, do not add a checkpoint. `kit/`
grows; `docs/` does not.

## Current state — 19 September 2026

**F1 (`~/Projects/f1`) is the most fully exercised the kit has been.** Built
end-to-end from a genuine blank-slate request through a live, load-tested
production deploy at `f1.1zero9.com`. What it produced for the kit:

- `new-project`'s branding guardrail held under real pressure — the founder
  handed over a strong, specific visual idea mid-build (his own initials
  doubling as F1's Safety Car signal) and the skill correctly parked it until
  the shape was proven, reopening only on explicit request.
- `kit/assets/resilient-fetch.mjs` — a build-time bulk-API-fetch pattern,
  earned by three real failed runs (fixed backoff alone; under-paced
  retry-after handling; an uncaught network exception that lost 20 minutes of
  otherwise-complete work because the old script only wrote output at the
  very end, not per-dataset).
- `visual-change/SKILL.md` picked up two sets of guardrails: one from a
  founder-requested self-audit of the landing-page work (see
  `docs/strategy/LEARNING-REGISTER.md` entry 3's recurrence note), and one
  from actually porting a confirmed Design-canvas proof into production
  (`next/image` vs the proof's raw CSS `url()`; a shared footer clashing
  under a page with its own new identity).
- `kit/CONVENTIONS.md` — every OpenNext/Cloudflare deploy needs an
  incremental-cache backend wired up (`open-next.config.ts` +
  `NEXT_INC_CACHE_R2_BUCKET`) or it silently falls back to full
  server-rendering every request, which only breaks under real concurrent
  traffic (Cloudflare error 1102). Confirmed the same empty config existed on
  `launchcity`, the only other project on this stack — **fixed there too,
  same day, both verified by load test.**

**`eolas` (`~/Projects/eolas`) is parked, same day.** It predates Project-OS
and pursued the same mission — reusable accelerators, avoid paying to
regenerate the same foundations — but as a whole separate running system
(own web app, worker, Postgres DB, staged-approval pipeline): exactly the
"monolith head start" architecture this framework's no-monolith guardrail
already rejects. Its actual content was real though: 4 of its 6 accelerators
extracted into `kit/assets/` (`cookie-session-auth`, `prisma-postgres-
starter`, `pwa-shell`, `ai-provider-wrapper-gemini`), fixing a real
forgeable-session-cookie bug in `cookie-session-auth` while porting it. Its
own README now says so and points here. Nothing in `~/Projects/eolas` was
deleted.

**`1Zero9Studio` (the founder's own portfolio site) got the same "review
through the kit's own lens" treatment, same day, and found two more real
things:** F1 and LaunchCity were both missing from it despite `CONVENTIONS.md`'s
own rule that every finished site goes in the portfolio — added, with real
screenshots. And a genuine fail-open bug: `getLiveProjects()` filtered out
archived/hidden/draft projects on success, then returned the complete
unfiltered list on any database error — plus a second, separate unguarded
path one function away (a direct-by-slug lookup that skipped visibility
checks entirely). Both fixed and verified against a real database failure;
see `kit/CONVENTIONS.md`'s new fallback-path guardrail and
`docs/strategy/LEARNING-REGISTER.md` entry 3's second recurrence note.
**Correction, in case it's still floating around: the site's `/admin` panel
is real and working** (25 managed projects, live thumbnails) — an earlier
theory in this same session, based on three wrong database connection
strings, wrongly concluded it had probably never worked at all. It has.

A one-off portfolio catalog (all ~48 projects, categorised, consolidation
candidates flagged — the Rivervalley Rangers cluster has five separate
codebases) was built as a spawned agent, not a kit asset; it has no repeatable
home yet and is a real candidate for one.

**In flight, unresolved: the plant app.** `~/Projects/plants/spike/` holds an
identification spike (Node script, sends plant photos to Gemini, scores
accuracy) — never run against the live API. `~/Projects/plants/care-model.mjs`
computes watering/placement from window aspect, date and latitude; runnable
standalone (`node care-model.mjs 2026-12-21`). Work proceeded on an explicit
unverified assumption (identification gets the care category right ~8/10) —
revisit when photos are convenient, not before. Note on providers: the
founder has a Google API key and no Anthropic key for this one.

**Git:** check `git log` and `git status` for the true current state before
trusting anything above — this section is written by hand and will drift.

**RVR 2014 Team Admin (2026-09-20) — a live cross-provider handoff, not a
hypothetical.** Built a league-table/scout feature (common-opponent
comparison against DDSL data, since DDSL's own site doesn't surface it), then
hit a Claude credit limit mid-session and the founder switched to Codex on the
same repo to keep going. Reviewing Codex's changes afterward found two things
worth keeping:

- A properly `timingSafeEqual`-checked session cookie sat next to a login
  password check using plain `!==` — see `kit/CONVENTIONS.md`'s new secret-
  comparison guardrail. One careful implementation in a file is not evidence
  the rest is equally careful.
- Codex's redesign was technically sound but silently reverted a recent,
  explicit decision (making `/fixtures` public) made earlier the same session,
  because nothing in *that* repo recorded it — only this conversation did, and
  Codex never saw this conversation. This repo's own `AGENTS.md`/
  `AI-HANDOFF.md` pattern is the fix for exactly this failure mode, but it
  currently only exists here, in Project-OS itself — not in the client/
  personal project repos where a handoff actually happens. See
  `kit/CONVENTIONS.md`'s new handoff-note guardrail.

**1Password project-secret proof (2026-09-20).** RVR already had an `RVR`
vault, so the right first move was to reuse it rather than create a duplicate.
`kit/assets/1password-project-secrets/` now holds a non-secret registry and a
runner that resolves `op://` references only into a child process. It was
verified against RVR's Postgres connection fields and `AUTH_PASSWORD`: values
were never printed, committed, or written to an `.env` file. The 1Password CLI
needs its desktop-app integration enabled locally. Crucially, 1Password is the
source of a secret, not an automatic Vercel sync: map the environment variable
the application actually reads (RVR uses `AUTH_PASSWORD`, not old
`ADMIN_PASSWORD`), update the Vercel production variable, then redeploy. The
RVR production password was migrated and the redeploy verified ready.

**Boot Room (2026-09-20) — a full new-project cycle, spike to live production,
plus the portfolio-audit skill's first real exercise.** The founder asked for
a portfolio review; that produced `kit/skills/portfolio-audit` (asked for
twice before with no repeatable home — this time it wrote its output to
`kit/PORTFOLIO-DECISIONS.md` instead of evaporating with the conversation)
and resolved four flagged clusters with founder confirmation, most notably
the "5-way Rivervalley Rangers duplicate" turning out to be 2 real codebases
and 3 safe archives once actually asked about, not just inferred from the
index.

That audit fed directly into shaping **Boot Room**, a new multi-tenant
zero-money gear-swap product (`github.com/1Zero9/boot-room`, live at
`boot-room.1zero9.com`) — combining the portfolio's club-admin pattern with
its never-yet-tested public-multi-user auth tier. Followed `new-project`'s
own riskiest-unknown rule literally: a throwaway state-machine spike
(`spike/lifecycle-model.mjs`) before any schema or UI existed, which caught
a real concurrency gap the spike itself couldn't fix (proven safe only once
`reserveItem`'s check became a single atomic Postgres `UPDATE`).

Three real architecture decisions got made and reversed live, each one
worth exactly what it cost: Vercel Postgres → ruled out on purpose (founder:
"I don't want to reply on that") → Neon and Prisma Postgres both hit
account-creation friction → landed on **Supabase + Cloudflare Hyperdrive**.
Then Prisma itself → **Drizzle**, after Prisma's WASM query engine passed a
clean build and a successful deploy and *still* failed on the first live
login — a clean deploy log proved nothing, only an actual authenticated
request against the real URL caught it. Both now-generalized as: the
Drizzle-on-Workers guardrail in `kit/CONVENTIONS.md`, and the reusable
`kit/assets/hyperdrive-drizzle-cloudflare/` starting point.

Also corrected, from direct founder feedback mid-build: `new-project`'s own
output was missing a required repo/hosting/database-locality line (a local
Postgres got installed via Homebrew without ever asking — "I was never
asked to do this before") — see the skill's updated Output section and its
new system-install guardrail. Local `git init` stays a default; pushing to
a real GitHub org does not, and now says so explicitly.

**Session continued, 2026-09-21 — Boot Room shipped its public front door,
then a portfolio-wide sweep found the same "gated content, no explanation"
pattern and its opposite.** Founder feedback on the bare login wall:
"there are other sites I have created like this too" — not a one-off.
`new-project` step 1 now covers this directly. A follow-up scan (forked,
kept out of main context) found the rest of the portfolio was actually
fine — `vecta` had the *opposite* problem instead (no gate at all, drops a
visitor straight into a demo workspace with fake data and no indication
it's fake) — both now captured as companion guardrails in the same place.

**Marvin's build-credit mark was rendering at 16px, not the confirmed
28px** — the identical bug `CONVENTIONS.md` already documented from
Learn2Learn, recurring independently, uncaught for months until a direct
"look at Marvin" request. Fixed and verified against the live deployed CSS,
not just the source. Documenting a mistake once didn't stop it happening
again elsewhere — `portfolio-audit` now carries a standing note to
spot-check `CONVENTIONS.md` compliance whenever a project is opened for any
reason, not as a new mandatory audit step.

**A portfolio-wide `git status` sweep found real, substantial work sitting
uncommitted across 9 repos** — including two already marked Archive
(`lucy`, `rvrmatchday`) whose last-commit dates read as settled while their
actual working trees held real unpushed changes the whole time, and one
Keep-candidate (`Ultra Health Optimiser 3000`) that had a working favicon
and new components sitting 5 months uncommitted with *no GitHub remote at
all* — `kit/INDEX.md`'s last-active column had no way to see any of this.
All 9 committed (junk `.DS_Store` diffs discarded and gitignored instead),
8 pushed, one given a fresh GitHub repo. `portfolio-audit` now checks
`git status`, not just `git log`, before finalizing Archive, and flags a
Keep/Refresh project that has no remote at all. Also archived `Vision`
(founder: "not needed") to `~/Projects/_archive/` rather than deleted
outright — no commit history or remote existed anywhere for it — and
`build-index.sh` now excludes `_archive/` from the index.

## How to use prior learning

Use the [learning register](docs/strategy/LEARNING-REGISTER.md) only when an
entry could change the decision in front of you, and say how it changed it. If
it did not, do not claim reuse. Prefer observed application state and founder
feedback to any earlier AI summary.

## Safety and authority boundaries

- Never commit or echo credentials. `plants/spike/.env` holds a real API key
  and is gitignored.
- Do not push to a public remote, deploy, or touch an external service without
  an explicit instruction.
- Before deleting, resetting or migrating anything: confirm the target, confirm
  authority, prefer a reversible step.

## End of turn

State what was done, which files changed, and the single next action. If the
next step needs a founder decision, ask one clear question rather than
assuming.

**"What was learned" is not something to state — it's something to have
already fixed.** Before ending a substantive session (a real build, a real
bug, a real founder correction — not a one-line question), check: did
anything happen that `kit/` doesn't know about yet? A workaround for a
real bug, a corrected assumption, a "don't do that again," a new precedent.
If yes, edit the asset (`CONVENTIONS.md`, the relevant `SKILL.md`, or a new
`kit/assets/` file) in the same turn, before reporting done — not as a
follow-up, not left for the founder to notice and ask about. Boot Room
(2026-09-20) produced this instruction itself: the founder had to ask
"did POS get updated?" more than once in one session before this line
existed. That is the failure this line exists to stop happening again —
if you are the one reading this and about to skip it, don't.
