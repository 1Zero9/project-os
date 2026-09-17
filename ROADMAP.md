# Project OS — Roadmap

This document captures possible future capabilities discovered during the
development of Project OS.

Items here are hypotheses, not commitments.

Nothing moves from this roadmap into Project OS until evidence from projects,
archaeology or experimentation demonstrates that it provides sufficient value.

---

## Now — Foundation

- Document Project OS origin
- Establish governing principles
- Conduct project archaeology
- Identify recurring problems and successful patterns
- Separate reusable knowledge from project-specific decisions

---

## Explore

Ideas that appear valuable but require evidence.

### Project Council & Pre-mortem

Use multiple specialist perspectives to challenge significant projects before
implementation.

Questions to investigate:
- When does a council materially improve decisions?
- Which roles provide genuinely different perspectives?
- When is a lightweight pre-mortem sufficient?
- How should disagreement be synthesised?
- What is the minimum useful council?

Origin:
Lucy / Project OS discussion and workplace co-creation experience.

---

### The Brake

A process-control role designed to detect:

- scope drift;
- design fixation;
- process fixation;
- unnecessary review;
- premature abstraction;
- diminishing returns.

The Brake must subtract work rather than create it.

Origin:
Lucy design process and subsequent Project OS framework drift.

---

### Eolas — Knowledge & Reuse Layer

Explore evolving Eolas into the knowledge layer of Project OS.

Potential responsibilities:

- decisions;
- lessons;
- proven patterns;
- implementation examples;
- anti-patterns;
- reusable code candidates.

Important distinction:

Project OS governs.
Eolas remembers.

Origin:
Earlier Eolas project and repeated recreation across projects.

---

### Compounding Project Knowledge

Explore whether previous project work can provide a measurable head start to
new, resumed or inherited projects.

The objective is not to load complete historical repositories into project
context.

Project OS should determine whether relevant precedent can be selectively
retrieved and applied so that previously earned knowledge reduces repeated
product, design, architecture, security, infrastructure or implementation
work.

Questions to investigate:

- Can useful precedent be extracted from previous projects?
- Can project-specific decisions be distinguished from reusable patterns?
- Can recurring Steve preferences be distinguished from one-off choices?
- Can relevant precedent be retrieved without excessive context?
- Does the retrieved knowledge materially improve the next project?
- What work or decisions were genuinely avoided?
- Can harmful, stale or irrelevant precedent be detected?
- What is the context and token cost of obtaining the benefit?
- Can inherited progress be meaningfully measured?

This is the primary evidence question behind the longer-term Steve 2.0 and
Eolas direction recorded in:

`docs/strategy/CHECKPOINT-001.md`

Do not build a full Eolas implementation merely to test this hypothesis.

Origin:

Strategic Checkpoint 001, September 2026.

### AI Resource Strategy

Explore whether Project OS should decide not only what work should be performed,
but what level and combination of AI capability the work deserves.

Potential areas:

- model selection;
- provider selection;
- reasoning level;
- token / credit consumption;
- cost;
- latency;
- context requirements;
- specialist coding models;
- multi-model review;
- model diversity within Project Council;
- escalation between model capability levels.

Possible principle:

> Spend intelligence where intelligence changes the outcome.

Avoid permanently assigning named models or providers to roles.

Prefer capability classes such as:

- Fast
- General
- Reasoning
- Coding
- Research
- Visual

A future model registry could map available models onto these capabilities.

Evidence to investigate:

- Which models perform particular project tasks best?
- When does a stronger model materially improve the result?
- When is multi-model review valuable?
- When does it merely multiply cost?
- How many attempts were required?
- Did another model need to repair the result?
- Can Project OS learn effective model routing from previous projects?

Origin:
Project OS discussion, September 2026.

---

### Retrospective Project OS

Explore whether Project OS can be run retrospectively against completed or
mature projects.

Purpose:

- reconstruct original intent and important decisions;
- identify where Project OS would have challenged or stopped work;
- identify scope drift and failure points;
- extract reusable decisions and learning;
- determine what should enter the Project OS/Eolas knowledge layer.

This is different from the existing archaeology work: archaeology discovers
patterns across projects; retrospective analysis evaluates an individual
project through the Project OS lens.

Origin:
Project OS discussion, September 2026.

---



### Existing Project Adoption

Explore whether an active existing project can be brought under Project OS
without requiring it to have started there.

**Experiment 002 — Lastman completed.**

Outcome:

**SUPPORTED, with qualifications.**

Experiment 002 demonstrated that Project OS v0.1 could establish sufficient
current-state understanding of an independently developed active project,
preserve inherited decisions, identify a consequential current decision and
guide a proportionate intervention without reconstructing the project's full
history.

The experiment also exposed friction between existing-project adoption and
v0.1's prescribed creation of a project-local `PROJECT-OS.md` artefact.

Evidence:

- `docs/experiments/002-lastman.md`
- `docs/evidence/002-evidence-log.md`

This remains evidence rather than automatic promotion into the framework.

Origin:

Project OS discussion and Experiment 002, September 2026.

---

### Stand-Back Review & Assumption Challenge

Explore a lightweight gate that requires inherited assumptions and platform
choices to be challenged before implementation, rather than after.

Purpose: prevent momentum from preserving the wrong type of decision.
Founder-direction delivery work on Golf Club Tools and LaunchCity showed
that "already decided" was treated too easily as "previously validated" —
inherited platform, cadence and access decisions were accepted, and an
architectural challenge only happened after a diagnose-retry-deploy cycle
had already run.

Trigger points: before accepting a new project for delivery; before
significant implementation begins; when inheriting an existing project;
before adopting or preserving a platform decision; before creating a
recurring operational cost; before acting on a failure that may indicate a
deeper architectural problem.

The gate distinguishes inherited decisions (accepted because they existed)
from validated decisions (accepted because evidence supports them), and
checks: authority and legitimacy (who owns the problem, do we have a real
route to users and release); an assumption inventory (fact, constraint,
preference, inherited decision, untested assumption, temporary
implementation choice); a platform and dependency challenge (whether
hosting, scheduling, cache and origin need to live on one platform); and a
cheapest-disproof test that could run before implementation.

Evidence:

- Golf Club Tools — selected before confirming a valid user or release
  route; the tool had only ever been an example, with no sponsoring
  relationship.
- LaunchCity — Cloudflare hosting/scheduling/caching, a 15-minute
  refresh cadence, and anonymous API access were all inherited and
  initially preserved unexamined. A production 429 was diagnosed and
  patched with a retry before the platform decision itself was
  questioned; a comparative spike then showed a GitHub-hosted request to
  the same endpoint succeeding with almost unused quota, strengthening
  an execution-environment hypothesis that a broader platform comparison
  would have surfaced earlier.

Full account: `docs/strategy/DELIVERY-LEARNING-001.md`.

Status: candidate learning, not promoted. This is a v0.2 candidate
requiring confirmation — either it prevents a material piece of
unnecessary work in another project, or applying it retrospectively to
another mature project reveals a consequential inherited assumption
before implementation begins.

**Candidate sub-items (v0.2 candidate, not promoted)**, from
`docs/strategy/DELIVERY-LEARNING-002.md` — evidence that a documented
decision being preserved is not the same as that decision having been
authorised:

- **Decision authority and provenance** — who proposed a material
  direction, who had authority to approve it, and where the approval
  event is recorded.
- **Decision lifecycle** — candidate statuses (IDEA, EXPERIMENT,
  PROVISIONAL, ACCEPTED, FROZEN, SUPERSEDED, REJECTED, UNCLEAR) and
  transition rules under which implementation, assistant documentation
  or repetition alone must not change a decision's status.
- **Evidence completeness** — whether relevant mock-ups, conversations
  or earlier specifications exist outside the repository, and whether
  the repository is being mistaken for the complete history.
- **Experimental-decision hardening** — detecting when an experiment has
  been treated as a permanent requirement without a traceable approval
  event (the LaunchCity image-free interpretation, later marked
  SUPERSEDED by the founder in commit
  `7e85dae3b35555c0ca1ed1b7e0a0d964fb235ff4`).
- **Product/infrastructure proportionality** — whether recent work
  packages are displacing completion of user-visible product value with
  infrastructure-only work.
- **Prompt and intervention learning signals** — prompts spent on
  rework, on correcting a decision, or on documentation only, tracked as
  learning signals rather than productivity targets.

**Further candidate sub-items (v0.2 candidate, not promoted)**, from
`docs/strategy/DELIVERY-LEARNING-003.md` — evidence that technical
completion and founder-facing completion are not the same thing:

- **Reproducible hand-off gate** — a task cannot be described as complete
  unless the founder can reproduce it from the committed repository using
  documented commands; agent-captured screenshots are supporting evidence,
  not acceptance evidence.
- **Founder-visible proof gate** — for visual work, the founder must see
  the actual result before further documentation, deployment or
  decision-status advancement.
- **Independent acceptance** — the implementation agent cannot be the sole
  acceptance tester of its own output.
- **Two-correction stop trigger** — two consecutive corrective prompts
  trigger a pause and founder review before more work continues.
- **Expected delivery budget** — record an expected direct-delivery
  duration before starting; if the process exceeds that budget without
  visible value, pause and reassess.
- **Tangible-value measurement** — count only a founder-visible working
  result, a user-visible production improvement, or work conclusively
  avoided before implementation; documentation, tests and investigations
  are supporting work, not tangible value by themselves.

Evidence: two days of Project OS-guided LaunchCity/Golf Club Tools work
that a direct one-to-one session was assessed as likely to have completed
in a few hours; a founder-reproduced local result
(`docs/evidence/2026-09-17-launchcity-local-proof-failure.png`) that
contradicted a prior agent report of practical completion.

**Further candidate sub-items (v0.2 candidate, not promoted)**, from
Experiment 007 (`docs/experiments/007-autonomous-launchcity-recovery.md`,
PARTIALLY SUPPORTED) — evidence that autonomous role coordination and
reproducibility can hold while visual interpretation, cost proportionality
and founder acceptance do not:

**Intent fidelity candidates (v0.2 candidate, not promoted)**, from
`docs/strategy/DELIVERY-LEARNING-004.md`:

- **Intent Baseline** — approved sources mapped to stable, authority-owned
  requirements and acceptance evidence.
- **Fidelity Gate and Rebaseline Trigger** — a CORE-item completion block and
  a stop/recovery path when intent drifts.
- **Structural proof before detailed implementation** — founder-visible proof
  of the required composition/structure before refinement.
- **Source-to-requirement traceability and no silent omission** — every
  authoritative requirement has status; deferral/supersession needs approval.
- **Product acceptance separate from technical validation** — a passing build
  cannot pass an unmet intent requirement.
- **Cost against founder-accepted value** — pause when the budget is exceeded
  without accepted tangible value.

**Minimum v0.2 delivery-loop pilot (v0.2 candidate, not promoted)**, from
`docs/experiments/009-minimum-v02-delivery-loop-pilot.md`:

- **Delivery Brief** — one concise, authority-owned record of outcome, core
  requirements, structural proof, acceptance evidence and budget.
- **Proof-and-Stop Gate** — one combined founder-visible proof, reproducibility
  and stop/rebaseline decision, tested prospectively on an unrelated project.

- **Autonomy orchestration** — when a council role genuinely needs a
  separate agent versus a role pass in the main session, and whether an
  agent-written specification checked by another agent substitutes for a
  founder checkpoint (evidence: it did not — both roles shared one
  misreading of the source artefact).
- **Role-based model selection** — whether council roles need different
  model capability levels rather than one expensive model for every role.
- **Delivery-cost budgets** — a cost ceiling set before execution, and a
  cost check before authorising a second correction cycle or rework pass.
- **Context and request limits** — a request- or agent-pass ceiling and a
  context-size control, to bound runaway cache growth.
- **Reproducible hand-off** — confirmed working for the first iteration
  (independently verified); not yet confirmed for a founder-directed
  revision made after independent review had already run.
- **Founder-visible acceptance** — a checkpoint before expensive rework
  begins, not only before the process ends; cost measured per accepted
  result, not per commit.

---

## Later / Unproven

Potential capabilities that should NOT be built without stronger evidence.

- Automated project bootstrap
- Agent orchestration
- Dynamic skill selection
- Model routing
- AI budget management
- Reusable internal code packages
- Project health scoring
- Automated process-drift detection
- Cross-project learning
- Automated Eolas ingestion

These are deliberately parked.

---

## Promoted

Ideas move here only after sufficient evidence exists to make them part of
Project OS.

For each promoted item record:

- Evidence
- Projects demonstrating the need
- Decision record
- Implementation location
- Date promoted

None yet.

---

## Rejected

Ideas that were investigated and deliberately not adopted belong here.

Rejection is useful knowledge.

For each rejected item record:

- Idea
- Why it appeared useful
- Evidence examined
- Why it was rejected
- Conditions that might justify reconsideration

None yet.
