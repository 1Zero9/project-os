# Project OS

> **Every project should make the next project cheaper, faster and better.**

Project OS is a personal product-development kit for working effectively with
AI.

It is an attempt to solve a problem I repeatedly encounter when building
software with AI: every new project still starts too close to zero.

Previous projects contain useful product thinking, design preferences,
architecture decisions, security lessons, implementation patterns, failures
and rejected approaches. But most of that knowledge remains trapped inside the
project where it was learned.

Project OS explores whether that knowledge can compound.

---

## What exists now

The kit is deliberately small and directly consumable:

- a compact portfolio index for finding real precedent without loading every
  repository;
- skills for shaping a new project, taking over an inherited one, making a
  visual change, and checking audience fit;
- copy-and-adapt assets for resilient API ingestion, small-group auth,
  Prisma/Postgres, PWAs, Gemini, and a sports/results-list card;
- conventions earned from deployed projects, including safe fallbacks and
  OpenNext/Cloudflare caching.

These assets have been exercised on real work: a blank-slate F1 build,
LaunchCity, Learn2Learn, and 1Zero9Studio. The 30–80% head-start ambition is
still a direction, not a present capability claim.

## The direction

The long-term goal is a personal AI product-development environment that can
begin with:

- a new idea;
- one of my existing projects;
- an inherited or external product.

Rather than starting from a blank context, Project OS should eventually be able
to understand the current state, retrieve relevant precedent from previous
work, apply established preferences and guardrails, involve the right
specialist capabilities, and help determine what should happen next.

I think of the destination as **Steve 2.0**.

Not an AI replacement for me, but an environment where my previous work,
decisions and judgement become reusable infrastructure for future work.

---

## More Than a Coding Agent

Project OS is not intended to be another coding agent.

Coding is only one part of developing a useful product.

Depending on the project and the decision being made, useful capability might
include:

- product;
- design;
- development;
- architecture;
- testing;
- security;
- infrastructure;
- governance and privacy;
- legal;
- marketing;
- operations;
- research and data.

The longer-term model may become a very small AI-native company, but that is
not what is being built speculatively today.

The required capabilities should be assembled around the work rather than
every project carrying the cost and complexity of all of them.

I remain the owner and final decision-maker.

The aim is high autonomy inside known boundaries, with deliberate interruption
when a decision has meaningful consequences.

---

## Compounding Knowledge

A central Project OS hypothesis is that previous projects should create
**inherited progress**.

The objective is not to give an AI every repository, conversation and document
I've ever created.

That would create its own problems with context, cost and irrelevant history.

Instead, Project OS should eventually retrieve only the precedent relevant to
the work being performed.

For example, a project introducing multi-tenancy might benefit from a previous
tenant-isolation lesson without needing the entire previous repository.

A new interface might inherit established design preferences without requiring
another discussion about every margin, layout or visual convention.

The question is:

> How much solved work can Project OS prevent us from solving again?

---

## Success Does Not Always Mean Shipping

Project OS should help build more prototypes, but the objective is not simply
to produce more software.

A successful project outcome could be:

- a useful prototype;
- a validated or invalidated idea;
- an MVP;
- a production product;
- a reusable capability;
- a commercial opportunity;
- a simplified product;
- a pivot;
- a deliberate decision to stop.

The common objective is to spend proportionate effort discovering and
delivering value.

Sometimes the best project decision is not to build something.

---

## How Project OS Is Being Built

Project OS is deliberately being developed from evidence rather than by
designing a large theoretical framework upfront.

The core rule is:

> **Do not add something to Project OS because we can imagine needing it. Add it
> because previous work demonstrates why it should exist.**

Real projects are used as experiments.

Observed behaviour, useful interventions, failures and framework friction
change a skill, convention, or source asset when a future project can use it.

Ideas remain hypotheses until sufficient evidence exists to promote them.

Project OS must also justify its own existence.

It consumes time, context, tokens, documentation and attention. If the process
costs more than the value it creates, Project OS itself is the problem.

---

## Current Status

The first phase produced sixteen thousand lines of analysis and no asset a
future project could use. That record is kept as experience in
[`docs/archive/`](docs/archive/). The work now grows [`kit/`](kit/), not the
archive: a future project should be able to consume every meaningful addition.

The governing rule is now that every addition must be something a future
project **uses**, not something it has to **read**.

For a reliable cross-AI starting point, read [AI-HANDOFF.md](AI-HANDOFF.md),
then [ROADMAP.md](ROADMAP.md).

Capabilities discussed elsewhere in this repository — including Eolas,
Project Council, specialist AI workforce orchestration, automated project
bootstrap and intelligent model routing — remain hypotheses unless explicitly
identified as demonstrated.

---

## Repository

This repository records both the development of Project OS and the evidence
used to challenge it.

Key documents include:

- [`PRINCIPLES.md`](PRINCIPLES.md) — evidence-derived governing principles;
- [`ROADMAP.md`](ROADMAP.md) — hypotheses and areas requiring investigation;
- [`PRODUCT-OS-ORIGIN.md`](PRODUCT-OS-ORIGIN.md) — where the project came from;
- [`docs/experiments/`](docs/archive/experiments/) — controlled Project OS experiments;
- [`docs/evidence/`](docs/archive/evidence/) — evidence captured from those experiments;
- [`docs/strategy/`](docs/strategy/) — longer-term strategic direction.

The repository intentionally distinguishes between what has been
**demonstrated**, what is **emerging**, and what remains **vision or
hypothesis**.

---

## North Star

Project OS is working towards a simple outcome:

> **Give it an idea or a repository and, instead of beginning again from zero,
> start with the useful knowledge, decisions and judgement already earned from
> everything that came before.**

Every project should improve the next one.
