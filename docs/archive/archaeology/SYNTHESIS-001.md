# Project OS Archaeology — Synthesis 001

## Status

- **Synthesis:** 001
- **Evidence base:** Archaeology 001–007
- **Projects:** Lucy, Eolas, U12 Scorekeeper, Rivervalley Rangers Website, IMS Exception Process, Ground Control, Scribble
- **Purpose:** Identify findings supported strongly enough across different projects to influence Project OS v0.1
- **Rule:** Repetition alone is not promotion. Evidence must solve a recurring problem, survive different project contexts and reduce more work or risk than it creates.

---

## 1. Why this checkpoint exists

Seven projects have now been examined individually.

Continuing archaeology without synthesis would create another collection problem: more observations, more candidate patterns and more possible capabilities without deciding what the evidence actually means.

This checkpoint therefore stops project-by-project extraction temporarily and asks:

> **What has survived comparison across materially different projects?**

The objective is not to design Project OS.

The objective is to determine what has earned the right to influence its first working version.

---

## 2. Evidence base

The seven projects provide deliberately different forms of evidence.

| Project | Primary evidence |
|---|---|
| Lucy | Product ambiguity, AI UI convergence, design iteration, process drift, stopping |
| Eolas | Knowledge retention, decision reuse, code reuse, provenance, retrieval |
| U12 Scorekeeper | Concrete operational job, real usage, recovery, mobile context, established stack |
| Rivervalley Website | Public release, production operation, DNS, accessibility, external dependencies, identity |
| IMS Exception Process | Governance, workflow state, approvals, auditability, security, expiry, revocation |
| Ground Control | Existing behaviour, mixed-age users, modularity, adoption, temporary information |
| Scribble | Deliberate smallness, metaphor, local-first architecture, privacy, capture, scope restraint |

This diversity matters.

A finding appearing in Lucy and Scribble is more useful than the same finding appearing twice during one UI redesign because it has survived different product contexts.

---

## 3. Promotion criteria

A candidate may be promoted only when most of the following are true:

1. It addresses a problem observed in more than one project.
2. Evidence comes from meaningfully different project types.
3. Ignoring it caused or could reasonably cause material waste, risk or loss of direction.
4. It can be expressed without forcing heavyweight process onto every project.
5. It does not encode a project-specific technology or design preference.
6. We understand the problem better than we understand its eventual implementation.
7. Adding it to Project OS is likely to remove more work than it creates.

Possible outcomes:

- **PROMOTE** — strong enough to influence Project OS v0.1.
- **RETAIN** — useful evidence, but not yet required in v0.1.
- **EXPLORE** — promising hypothesis needing deliberate testing.
- **REJECT** — should not become a Project OS concern based on current evidence.

Promotion does **not** mean “create an agent”.

It means the capability or concern has earned a place in the operating model. Its implementation form is decided separately.

---

# 4. Cross-project evidence matrix

Legend:

- **S** — strong direct evidence
- **M** — moderate/supporting evidence
- **—** — no meaningful evidence from this project

| Candidate | Lucy | Eolas | Scorekeeper | RVR | IMS | Ground Control | Scribble |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Adaptive process depth | S | M | S | S | S | S | S |
| Context reconnaissance | M | M | S | S | S | S | S |
| Direction before implementation/polish | S | — | M | M | M | M | S |
| Decision reuse before code | M | S | S | M | M | M | M |
| Negative-path / recovery thinking | M | M | S | S | S | M | S |
| State / lifecycle thinking | M | M | S | S | S | S | M |
| Complexity containment | S | S | M | M | S | S | S |
| Explicit stopping / scope control | S | M | M | M | M | S | S |
| Protect working systems | S | M | S | S | S | M | M |
| Capture close to work / low-friction capture | S | S | — | — | M | S | S |
| Product/domain mental model | S | — | S | S | S | S | S |
| Production/operational learning | — | M | M | S | S | — | M |
| Evidence/provenance for reuse | M | S | M | S | S | — | M |
| Responsibility / ownership mapping | — | — | M | M | S | M | — |
| Privacy/security proportionality | — | M | M | M | S | M | S |
| Accessibility by construction | M | — | M | S | M | M | M |
| The Brake capability | S | S | M | M | M | S | S |
| Product metaphor | S | — | — | — | — | M | S |
| Project Council | M | — | — | — | M | — | — |
| Multi-model orchestration | — | — | — | — | — | — | — |
| AI Resource Strategy | — | M | — | M | — | — | M |

The matrix is intentionally conservative. A project is not marked as supporting something merely because the idea could have been useful there.

---

# 5. Findings that have earned promotion

## 5.1 Adaptive process depth

### Evidence

This is the strongest finding in the archaeology.

Lucy needed substantial product and design direction because uncertainty was high.

The Scorekeeper had a concrete job and could move quickly into implementation.

Rivervalley increased process needs because public release and reputation mattered.

IMS required deeper governance, security and lifecycle thinking because incorrect behaviour could undermine a business control.

Ground Control was conceptually broad but low risk; applying IMS-level ceremony would have been counterproductive.

Scribble needed strong boundaries but not heavyweight governance.

### Synthesis

Project OS must not prescribe one workflow for every project.

The amount of process should respond to characteristics such as:

- uncertainty;
- consequence;
- complexity;
- longevity;
- number of stakeholders;
- reversibility.

The exact scoring model is not yet proven.

### Outcome

**PROMOTE**

### v0.1 requirement

Project OS needs a lightweight way to determine **how much process this project deserves** before applying methods or specialists.

---

## 5.2 Context reconnaissance

### Evidence

Different projects demonstrated different forms of context that mattered before intervention:

- Scorekeeper — pitch-side usage;
- Rivervalley — existing club identity and production environment;
- IMS — organisational systems, roles and constraints;
- Ground Control — existing whiteboard behaviour;
- Scribble — privacy and local-first boundaries;
- Lucy — intended student experience.

### Synthesis

AI makes it extremely easy to start producing solutions before understanding the environment they enter.

Project OS should establish relevant context before recommending architecture, design or process.

This is broader than “requirements gathering”.

Context may include:

- existing behaviour;
- existing software;
- users;
- domain language;
- constraints;
- production environment;
- data;
- organisational ownership;
- previous decisions.

### Outcome

**PROMOTE**

### v0.1 requirement

Every meaningful project starts with enough **context reconnaissance** to understand what already exists and what must not be accidentally discarded.

---

## 5.3 Decision reuse before code reuse

### Evidence

Eolas provided the strongest direct evidence.

The Scorekeeper showed leverage from known technical choices.

Rivervalley and IMS showed that previous operational and architectural lessons can be more valuable than copied implementation.

Across the archaeology, the repeated question is not simply:

> What code can we reuse?

It is:

> What do we already know about this kind of decision?

### Synthesis

Project OS should attempt to retrieve relevant previous knowledge before regenerating architecture or implementation from scratch.

Reusable knowledge should include context and provenance.

### Outcome

**PROMOTE**

### v0.1 requirement

Before significant architecture or implementation decisions, Project OS should be able to ask whether previous project evidence already informs the decision.

This does not yet require automated Eolas ingestion.

---

## 5.4 Negative-path and recovery thinking

### Evidence

- Scorekeeper — mistakes and undo;
- Rivervalley — production failures outside application code;
- IMS — rejection, partial automation, expiry and failed hand-offs;
- Scribble — local data loss and recovery questions.

### Synthesis

AI-generated solutions naturally make happy paths easy to produce.

Real systems fail through incorrect input, external dependencies, partial completion, time and human behaviour.

### Outcome

**PROMOTE**

### v0.1 requirement

Before important functionality is considered complete, Project OS should ask:

- What can fail?
- What can be wrong?
- What can be partially complete?
- How is it recovered?
- Who owns recovery?

The depth of this review should remain proportional to project risk.

---

## 5.5 State and lifecycle thinking

### Evidence

- Scorekeeper — match events produce downstream state;
- Rivervalley — beta, release and operation are different product states;
- IMS — lifecycle is the core of the business control;
- Ground Control — temporary information becomes irrelevant;
- Eolas — knowledge moves from capture to qualification and reuse.

### Synthesis

Many project problems become clearer when treated as lifecycle problems rather than screens or isolated actions.

Time is also capable of changing state without direct user action.

### Outcome

**PROMOTE**

### v0.1 requirement

Where a project contains meaningful state, Project OS should make lifecycle explicit before implementation becomes difficult to change.

Not every project requires a formal state machine.

---

## 5.6 Complexity containment

### Evidence

This appears in different forms across nearly every project:

- Lucy — UI component accumulation;
- Eolas — knowledge accumulation;
- IMS — multi-system workflow complexity;
- Ground Control — modular expansion;
- Scribble — utility and AI feature expansion;
- Rivervalley — integrations and production dependencies.

### Synthesis

Complexity is sometimes necessary.

The recurring failure is allowing necessary internal complexity to spread into unrelated areas or user experience.

### Outcome

**PROMOTE**

### v0.1 requirement

Project OS should challenge complexity that is not paying for itself.

A useful distinction is:

> **Necessary complexity should be contained. Accidental complexity should be removed.**

---

## 5.7 Explicit stopping and scope control

### Evidence

Lucy produced the clearest evidence through the Polish Event Horizon and Process Event Horizon.

Eolas risked becoming collection for its own sake.

Ground Control invited endless plausible modules.

Scribble demonstrated how inexpensive features can gradually destroy a deliberately small product.

Rivervalley showed that unnecessary post-release change can threaten working software.

### Synthesis

AI dramatically lowers the cost of producing another version, feature, framework rule or abstraction.

That makes stopping a first-class development capability.

### Outcome

**PROMOTE**

### v0.1 requirement

Project OS needs an explicit mechanism to ask:

- Are we still solving the original problem?
- Has scope expanded without a decision?
- Is another iteration materially changing the outcome?
- Are we deepening the product promise or expanding it?
- What happens if we ship what we have?

This is the evidence behind **The Brake**.

The capability is promoted.

The autonomous agent is not.

---

## 5.8 Protect working systems

### Evidence

Lucy benefited from freezing a successful direction.

The Scorekeeper accumulated operational knowledge in working software.

Rivervalley became a public production service.

IMS depended on correct behaviour across multiple systems and responsibilities.

### Synthesis

AI makes rewriting and restructuring appear inexpensive because generating replacement code is inexpensive.

The real cost may exist in behaviour, edge cases, integrations, production assumptions and user familiarity.

### Outcome

**PROMOTE**

### v0.1 requirement

Before materially restructuring working software, Project OS should require evidence that the change solves a meaningful problem and that the existing behaviour is understood.

---

## 5.9 Learn after release and retain failures

### Evidence

Eolas established the knowledge-retention problem.

Rivervalley showed that production incidents create reusable lessons.

IMS showed that workflow failures and recovery paths create reusable operational knowledge.

The Scorekeeper demonstrated that real usage exposes requirements not obvious during design.

### Synthesis

A project should not stop producing knowledge when it ships.

Failures, corrections and operational discoveries may be more reusable than original implementation assumptions.

### Outcome

**PROMOTE**

### v0.1 requirement

Significant projects should have a lightweight way to capture:

- what changed after real use;
- what failed;
- how it was resolved;
- what should influence future projects.

This is evidence for Eolas as a future knowledge layer, not yet evidence for its implementation architecture.

---

# 6. Findings to retain, but not promote yet

## 6.1 Product metaphor

Lucy and Scribble provide strong evidence, with Ground Control offering supporting evidence through an existing physical model.

A strong mental model can compress many product decisions.

However, Scorekeeper and IMS demonstrate that some products already have sufficiently strong domain models without needing an invented metaphor.

### Outcome

**RETAIN**

Potential future form: a design/product skill used when identity or interaction remains ambiguous.

Not a mandatory Project OS stage.

---

## 6.2 Low-friction capture

Lucy, Eolas, Ground Control and Scribble provide strong evidence.

However, this is more likely to become a reusable product/interaction pattern than a governing Project OS capability.

### Outcome

**RETAIN**

Likely future destination: Eolas pattern or design skill.

---

## 6.3 Responsibility mapping

IMS provides very strong evidence and other operational projects provide supporting evidence.

It is clearly useful when work crosses people or systems, but unnecessary for many small projects.

### Outcome

**RETAIN**

Likely future form: risk-triggered skill/playbook.

---

## 6.4 Accessibility by construction

Rivervalley provides strong evidence and the principle is applicable more broadly.

However, the archaeology was not specifically designed to evaluate accessibility practice across projects.

### Outcome

**RETAIN**

Accessibility remains a quality requirement, but archaeology alone has not yet determined its Project OS implementation form.

---

## 6.5 Privacy/security proportionality

IMS and Scribble provide useful contrasting evidence.

IMS required stronger controls and identity governance.

Scribble showed that privacy can sometimes be achieved through architectural subtraction.

### Outcome

**RETAIN**

Strong candidate for a future risk-triggered security/privacy review.

---

# 7. Hypotheses to explore deliberately

## 7.1 Project Council

The original idea remains promising.

The archaeology supports the need for multiple perspectives on consequential decisions, particularly in IMS-style work.

It does not demonstrate that every project benefits from a formal multi-agent council.

### Outcome

**EXPLORE**

A future experiment should compare a project decision made:

1. normally;
2. with a lightweight three-perspective pre-mortem.

Measure whether the council identifies material issues that change the plan.

---

## 7.2 The Brake as an autonomous agent

The **Brake capability** is strongly supported.

Its implementation as an autonomous role is not.

### Outcome

**EXPLORE**

Start with a checkpoint or review mechanism.

Promote to an agent only if the simpler mechanism proves insufficient.

---

## 7.3 Design Director as a permanent agent

Lucy strongly supports specialist design direction.

Scribble supports the value of product constraints and metaphor.

Other projects did not consistently require a dedicated Design Director.

### Outcome

**EXPLORE**

Potentially activate only for projects with meaningful design uncertainty.

---

## 7.4 Eolas implementation architecture

The need for knowledge retention and retrieval is strongly supported.

The implementation is not.

### Outcome

**EXPLORE**

Do not yet choose:

- Obsidian;
- vector database;
- automatic repository ingestion;
- central knowledge service;
- package registry.

First determine the smallest useful retrieval workflow.

---

## 7.5 AI Resource Strategy

The concept remains credible:

> Spend intelligence where intelligence changes the outcome.

However, archaeology has not produced enough direct evidence about model selection, token use, cost or multi-model performance.

### Outcome

**EXPLORE**

Remain on the roadmap.

---

## 7.6 Multi-model orchestration

No archaeology project provides meaningful evidence that routine multi-model orchestration improves outcomes enough to justify complexity.

### Outcome

**EXPLORE LATER**

Do not build into v0.1.

---

# 8. Rejected as v0.1 foundations

These are not necessarily bad ideas.

They are rejected as **current Project OS foundations** because the evidence does not justify them.

## 8.1 Technology defaults

Do not constitutionalise:

- Next.js;
- TypeScript;
- Supabase;
- Cloudflare;
- Vercel;
- SharePoint;
- Logic Apps;
- any specific database or hosting platform.

Previous successful stacks should become contextual evidence, not universal rules.

### Outcome

**REJECT AS FOUNDATION**

---

## 8.2 Universal UI rules

Do not constitutionalise:

- avoid sidebars;
- avoid cards;
- avoid dashboards;
- always use asymmetry;
- always use light mode;
- always use a metaphor.

These are contextual design decisions.

### Outcome

**REJECT AS FOUNDATION**

---

## 8.3 Mandatory heavyweight process

Do not require:

- Project Council for every project;
- five design stages for every project;
- security review for every prototype;
- formal lifecycle documents for trivial utilities;
- ADRs for every implementation decision.

### Outcome

**REJECT**

This directly follows from adaptive process depth.

---

## 8.4 Reusable code packages now

The archaeology supports reuse.

It does not support prematurely building internal packages.

### Outcome

**REJECT FOR v0.1**

Start with evidence, decisions, patterns and examples.

Promote code only when repeated use demonstrates stability.

---

# 9. The emerging operating loop

Across the seven projects, the original loop has matured.

A useful high-level model is now:

```text
UNDERSTAND
    ↓
DECIDE
    ↓
BUILD
    ↓
CHECK
    ↓
RELEASE
    ↓
OPERATE
    ↓
LEARN
    ↓
RETAIN
    ↓
REUSE
```

This should not become a mandatory nine-stage process.

It is a map of concerns.

Small projects may collapse most of these into a few minutes.

High-risk projects may require explicit work at several points.

The important principle is that Project OS should know **which concerns matter now**.

---

# 10. What Project OS v0.1 appears to need

Based on evidence rather than speculation, the first working version needs surprisingly little.

## 10.1 Project Intake

Purpose:

Understand the project well enough to determine:

- core problem/job;
- existing context;
- users;
- important constraints;
- current system or behaviour;
- uncertainty;
- consequence/risk;
- likely process depth.

This implements:

- adaptive process depth;
- context reconnaissance.

---

## 10.2 Relevant Knowledge Check

Purpose:

Ask what previous projects already teach us before making significant decisions.

Initially this can be manual and document-based.

This implements:

- decision reuse;
- provenance;
- Eolas's core value without building Eolas.

---

## 10.3 Risk / Failure Check

Purpose:

At proportionate depth, ask:

- what can fail;
- what can be wrong;
- what can become stale;
- what depends on external systems;
- what needs recovery;
- who owns recovery.

This implements:

- negative-path thinking;
- lifecycle thinking;
- operational awareness.

---

## 10.4 Scope / Stop Check

Purpose:

Detect:

- scope accumulation;
- design fixation;
- process fixation;
- unnecessary abstraction;
- unnecessary AI;
- diminishing returns;
- changes to working software without sufficient reason.

This implements the promoted **Brake capability**.

---

## 10.5 Learning Capture

Purpose:

At meaningful milestones or after significant incidents, record:

- decision;
- outcome;
- failure;
- lesson;
- reusable candidate;
- provenance.

This implements the smallest useful version of the Eolas concept.

---

# 11. What v0.1 does not need

Current evidence does not justify building:

- a multi-agent orchestration platform;
- a vector knowledge database;
- automated model routing;
- a project bootstrap CLI;
- dozens of agents;
- dozens of skills;
- reusable internal packages;
- automated archaeology;
- automated Eolas ingestion;
- project health scoring;
- a large design framework;
- a universal development lifecycle.

If any of these eventually enter Project OS, they should earn promotion through use.

---

# 12. First v0.1 hypothesis

The evidence suggests that Project OS v0.1 could initially be only five lightweight capabilities:

```text
PROJECT INTAKE
      ↓
RELEVANT KNOWLEDGE CHECK
      ↓
BUILD / DECIDE
      ↕
RISK & FAILURE CHECK
      ↕
SCOPE & STOP CHECK
      ↓
LEARNING CAPTURE
```

These are **capabilities**, not yet folders, agents, prompts or software.

The next architectural decision is how little machinery is required to make these useful in a real project.

---

# 13. The Brake checkpoint

This synthesis must apply its own findings to itself.

We now have enough evidence to begin a small Project OS experiment.

Continuing archaeology immediately would probably produce additional patterns but is unlikely to materially change the strongest findings above.

Therefore:

> **ARCHAEOLOGY PHASE 1: FREEZE**

Further archaeology should be triggered by an evidence gap, not by the existence of another past project.

Examples:

- Need evidence about AI model economics → select a project that can test it.
- Need evidence about collaborative software development → select a multi-developer project.
- Need evidence about long-term maintenance → select an older maintained project.

Do not continue to Archaeology 008 by default.

---

# 14. Synthesis conclusion

Seven projects point towards a Project OS that is substantially smaller than the framework we could have designed upfront.

Its strongest responsibilities are not generating code.

They are:

1. **Understand enough before acting.**
2. **Scale process to the actual project.**
3. **Reuse previous judgement.**
4. **Challenge failure paths and lifecycle.**
5. **Contain unnecessary complexity.**
6. **Protect working systems.**
7. **Know when to stop.**
8. **Learn from what actually happened.**

The most important outcome of the archaeology is therefore not a list of agents.

It is a change in where Project OS should apply intelligence.

> **Project OS should spend judgement where a wrong decision is expensive, and remove itself where the project is already clear.**

---

## Next decision

This synthesis is evidence, not architecture.

The next repository artefact should be:

`docs/decisions/001-v0.1-promotions.md`

That decision record should formally accept, defer or reject the synthesis recommendations and define the smallest Project OS v0.1 experiment.

Only after that decision should we create any actual Project OS capability.
