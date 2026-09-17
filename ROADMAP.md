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
| `kit/build-index.sh` | Regenerates a capability index of `~/Projects` |
| `kit/INDEX.md` | 47 projects, ~5KB — answers "have I built this before?" without loading repos |
| `kit/skills/new-project` | Shapes an idea into the smallest sufficient stack and names the precedent to lift. Installed at `~/.claude/skills/` |

Also live: [`PRINCIPLES.md`](PRINCIPLES.md), the
[Delivery Brief and Proof-and-Stop Gate](docs/candidates/V02-DELIVERY-BRIEF-AND-PROOF-GATE.md),
and the [learning register](docs/strategy/LEARNING-REGISTER.md).

## Next

**Use the kit on real projects and fix what it gets wrong.** There is no
scheduled next asset. An asset is built when a real project demands it, and the
demand is the evidence.

Current test: a plant watering app — chosen because it is small, real, and
should expose whether the shaping questions are right and whether the precedent
retrieval is accurate.

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
