# Project OS — Roadmap

## Direction

Every project should make the next one cheaper, faster and better. In practice
that means a new project starts with 30–80% of the work already decided or
already written, instead of a blank page.

That head start comes from **assets a project can consume**, not from process a
founder has to follow. The first sixteen thousand lines of this repository were
process. They are now in [`docs/archive/`](docs/archive/) as experience.

## The operating rule

> Every addition must be something a future project **uses**, not something it
> has to **read**.

`kit/` is the part that grows. `docs/` is the part that does not. If a month
passes where `docs/` grew and `kit/` did not, the framework has drifted again.

A second rule follows from the first: **learning goes into the tool.** When the
kit gets something wrong, edit the asset so the next run is better. Do not
write a document about what was learned — that is the failure mode this
repository already demonstrated at length.

## What exists

| Asset | What it does |
|---|---|
| `kit/CONVENTIONS.md` | Standing rules applied without being asked: the 1Zero9 build credit, adding finished sites to the portfolio, subdomains under 1zero9.com |
| `kit/build-index.sh` | Regenerates a capability index of `~/Projects` |
| `kit/INDEX.md` | 47 projects, ~5KB — answers "have I built this before?" without loading repos |
| `kit/skills/new-project` | Shapes an idea into the smallest sufficient stack and names the precedent to lift. Installed at `~/.claude/skills/` |
| `kit/skills/visual-change` | Changes how something looks without the review-reject loop: authoritative intent, isolated proof confirmed before implementing, then verification against the real surface |
| `kit/skills/inherit-project` | Takes over something built elsewhere — an AI site builder, an old repo, a handover — and finds the next decision rather than rebuilding it |
| `kit/skills/audience-check` | Checks whether a thing is written for the person meant to read it, and fixes it when it is not — the failure no test catches |
| `kit/skills/portfolio-audit` | Triages every project into keep/revisit/refresh/redirect/archive; writes the durable call to `kit/PORTFOLIO-DECISIONS.md`; checks `git status` (not just `git log`) before finalizing Archive |
| `kit/assets/hyperdrive-drizzle-cloudflare/` | Postgres on Cloudflare Workers via Hyperdrive + Drizzle — the default over Prisma for that combination, from Boot Room |
| `kit/skills/git-weekly-summary` | Summarizes real activity (committed and uncommitted) across one or more projects over a time window, for a recap or standup-style update |
| `kit/sync-skills.sh` | Hard-links every `kit/skills/*/SKILL.md` to its `~/.claude/skills/` install — same bytes on disk, no drift possible, self-heals anything that's fallen out of sync |
| `kit/hooks/secret-scan.sh` | Global Claude Code hook (wired in `~/.claude/settings.json`) — blocks a `git commit`/`git push` if the diff contains a likely secret |
| `kit/link-project.sh` | Wires a project into Project OS by adding an `@AGENTS.md` import to its own `CLAUDE.md`, so a session rooted there auto-loads `AI-HANDOFF.md` the same way a session inside Project-OS itself already does. Idempotent, run per-project rather than swept across all ~48 at once |

Also live: [`PRINCIPLES.md`](PRINCIPLES.md), the
[Delivery Brief and Proof-and-Stop Gate](docs/candidates/V02-DELIVERY-BRIEF-AND-PROOF-GATE.md),
and the [learning register](docs/strategy/LEARNING-REGISTER.md).

## Before adding a new skill

Idea adapted from Version1's internal `ai-agents_skills` repo (2026-09-21).
Check this before proposing a new `kit/skills/*` entry — the same "an asset
is built when a real project demands it" rule applies here, and most of the
time the honest answer is to extend something that already exists.

Extend an existing skill instead of creating a new one when the request is
only: a new trigger phrase or example, a small workflow addition within an
existing skill's responsibility, or logic that would otherwise be
duplicated across two skills.

A new skill is justified when the responsibility is genuinely distinct,
needs its own process/guardrails that don't fit inside an existing skill
without diluting it, or will get triggered independently of any existing
skill's own trigger conditions. State the decision and the reason before
writing a new `SKILL.md` — "portfolio-audit deserved its own skill because
its process (audit categories, the decision file, the artifact) doesn't
fit inside `new-project` or anything else" is the kind of reasoning this
is asking for, made explicit instead of assumed.

## Next

**Use the kit on real projects and fix what it gets wrong.** There is no
scheduled next asset. An asset is built when a real project demands it, and the
demand is the evidence.

Used so far on a plant care app (shaping), LaunchCity's Horizon (visual
change, accepted after two prior attempts were rejected), Learn2Learn (a
ChatGPT-built site inherited with no repo), and F1 (blank-slate `new-project`
entry point, first end-to-end production incident diagnosed and fixed). Each
produced corrections to the assets rather than documents about the
corrections, and two of the four (Learn2Learn, F1) each produced a new kit
asset because the kit had nothing for that entry point.

All three of the README's entry points — a new idea, an existing project, an
inherited external product — have now been exercised at least once.

F1 also confirmed something the other three hadn't tested: `new-project`'s
branding guardrail held under real pressure — the founder handed over a
strong, specific visual idea (his own initials doubling as F1's Safety Car
signal) partway through, and the skill correctly parked it until the shape
was proven, then reopened it only on explicit request. And it surfaced a real
gap none of the other three did: a portfolio-wide OpenNext/Cloudflare deploy
bug (no incremental-cache backend configured, confirmed present on LaunchCity
too) that only shows up under real concurrent traffic — a clean deploy log
says nothing about whether the cache is actually being read at request time.

Both new assets came the same way: a real project hit something the kit had no
answer for, and the gap was the evidence. Neither was planned.

**Boot Room (2026-09-20)** exercised the kit end to end in a way nothing
else had: `portfolio-audit`'s first real run (built that same session, then
immediately used — resolved four flagged clusters with founder input,
including the "5-way Rivervalley duplicate" turning out to be 2 real
codebases once actually asked about), feeding straight into a `new-project`
shape, a throwaway riskiest-unknown spike before any schema existed, and a
genuine architecture pivot mid-build (Prisma → Drizzle, after Prisma passed
every automated check and still failed on the first live login — a clean
deploy proved nothing; only an authenticated request against the real URL
caught it). Produced a third new asset,
`kit/assets/hyperdrive-drizzle-cloudflare/`, and two corrections to
`new-project` itself: repo/hosting/database-locality now has to be said out
loud, not left to the defaults table, and installing local system software
without asking joined the guardrails after doing exactly that unprompted.

What to watch for, and what each signal means:

| If the kit… | Then |
|---|---|
| recommends more than the project needs | tighten the defaults table in `SKILL.md` |
| misses precedent that exists | add the capability tag to `build-index.sh` |
| asks a question it could have inferred | delete the question |
| points at a file that turns out not to help | record it in the skill's guardrails |

## Candidate assets — build only on demand

Not a plan. These are the things most likely to be needed next, based on what
the portfolio audit showed is repeatedly rebuilt or repeatedly skipped:

- **Auth** — wired in only 4 of 21 web projects, rebuilt or avoided each time.
  Boot Room (2026-09-20) tested the heavier `next-auth`/real-accounts tier for
  the first time (everything else uses the shared-password tier) — invite-
  only credentials + bcrypt + club-scoped roles, no dedicated asset extracted
  yet since it's one data point, not a repeated pattern.
- **Tests** — present in 6 of 21. The gap is a harness, not discipline.
- **A design pass** — the reclassification ladder in
  [Lucy's archaeology](docs/archive/archaeology/001-lucy.md) (Product →
  Structure → Hierarchy → Interaction → Identity → Content → Visual) is the fix
  for chasing colour changes when the problem is structural.
- **Club/sports domain pieces** — eight projects share members, fixtures,
  seasons, results and payments.

None of these gets built speculatively. Each waits for a project that needs it.

## Parked

Multi-agent councils, autonomous orchestration, model routing, Eolas as a
knowledge platform, project-health dashboards, AI-budget management. Two
experiments ([004](docs/archive/experiments/004-cross-project-knowledge-transfer.md),
[005](docs/archive/experiments/005-cross-project-product-architecture-transfer.md))
tested the premise underneath most of these and returned PARTIALLY SUPPORTED
then NOT SUPPORTED.

They are reconsidered only when a real project hits a wall that no smaller
asset can address.

## The aspiration

"Steve 2.0" and the 1Zero9 AI workforce remain the destination, but they are a
business ambition that depends on the head start existing first. Keeping the
two separate is deliberate: it stops every small piece of work having to carry
the weight of the whole vision, which is how this framework inflated the first
time.
