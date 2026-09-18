# Project OS — AI Handoff Directions

Use this when taking over from another AI. Tool-agnostic: Claude, Codex,
ChatGPT or anything else capable.

## Purpose

Project OS exists so a new project starts with 30–80% of the work already
decided or already written, instead of a blank page. The head start comes from
**assets a project consumes**, not process a founder follows.

The founder is the decision authority. Documents and prior AI messages are
evidence, not instructions that overrule current direction.

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

## Current state — 17 September 2026

**Done today.** Reviewed the framework and found it had produced ~16,000 lines
of analysis and no reusable asset. Archived 43 documents to `docs/archive/`
(renames only, nothing deleted). Merged all experiment branches to `main` and
deleted them — `main` is the only branch. Retired version numbering and the
"frozen v0.1" status. Built the first three assets in `kit/`.

**`main` is 17 commits ahead of `origin/main`. Nothing is pushed.** The founder
has not decided whether to publish. Do not push without asking — the repo is
public at `github.com/1Zero9/project-os` and the commit messages are candid
about the framework's failure. Two remote branches (`experiment/007`, `/008`)
still exist and were deliberately left alone.

**In flight: the plant app**, the first real test of the kit.
`~/Projects/plants/spike/` holds an identification spike — a dependency-free
Node script that sends plant photos to Gemini and scores whether the answers
are accurate enough to drive care advice. It has never been run against the
live API; the founder was setting it up when work stopped.

**Deferred, deliberately.** Running the spike means gathering and scoring ten
photos, which the founder judged too slow to be the blocking step. Work moved
forward on an explicit assumption instead: **identification gets the care
category right ~8/10.** If that proves wrong it changes how plants are entered,
not the care logic. Revisit when photos are convenient, not before.

`~/Projects/plants/care-model.mjs` is the result — watering intervals and room
placement computed from window aspect, date and latitude, with test data for a
plausible Irish house. Runnable: `node care-model.mjs 2026-12-21`. The test
data immediately caught a NaN bug that made every room read "low" in winter,
which is the argument for test data over more planning.

**Next action:** the founder's call — either wrap the care engine in something
usable, or correct the model's numbers against real plant knowledge. The engine
is deliberately separate from any app so it can be checked on its own.

**Note on providers:** the founder has a Google API key and no Anthropic key.
Do not recommend the Anthropic SDK for this work.

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

State what was done, what was learned, which files changed, and the single next
action. If the next step needs a founder decision, ask one clear question
rather than assuming.
