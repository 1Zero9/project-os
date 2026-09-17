# Project OS Archaeology 007 — Scribble

## Status

- **Project:** Scribble
- **Archaeology ID:** 007
- **Purpose:** Test Project OS hypotheses against a deliberately lightweight, privacy-conscious desktop product
- **Focus:** Product metaphor, local-first architecture, rapid capture, input flexibility, privacy, compliance and resistance to feature growth
- **Classification vocabulary:** Principle, Agent, Skill, Pattern, Anti-pattern, Playbook, Template, Code Candidate, Project-specific

---

## 1. Project context

Scribble was conceived as a desktop desk-pad notes overlay.

The product idea was intentionally lightweight.

Rather than becoming another full note-management system, Scribble centred on the experience of having a pad available on the desk:

- click to type;
- dictation;
- pen input;
- drag and drop;
- snap to grid;
- create a new pad;
- live date and clock;
- lightweight organisation.

A major architectural constraint was also established early:

> **Local storage only.**

The product was intended to be compatible with privacy and governance expectations, including GDPR, organisational AI policy and EU AI Act considerations.

Scribble is useful archaeology because its success depends partly on what it **does not become**.

The central question is:

> **Can Project OS help preserve a deliberately small product while still allowing it to become robust?**

---

## 2. Finding — A metaphor can define both capability and restraint

### Observation

The desk-pad metaphor immediately provides expectations.

A physical desk pad is:

- immediately available;
- informal;
- quick to write on;
- visually spatial;
- tolerant of rough notes;
- not primarily a filing system.

That metaphor can guide features.

It can also reject them.

A complex folder hierarchy, analytics dashboard or enterprise workspace model would need unusually strong justification because those behaviours do not naturally follow from the metaphor.

### Comparison with Lucy

Lucy used:

**Desk → Notebook → Page**

to escape generic SaaS design.

Scribble independently uses a physical-object metaphor to constrain product behaviour.

### Emerging lesson

Product metaphor now has evidence beyond Lucy.

A useful metaphor can operate as both:

- a generative device — what belongs;
- a subtractive device — what does not belong.

### Classification

- **Pattern candidate:** Product Metaphor
- **Skill candidate:** Metaphor Fit Test
- **Cross-project evidence:** Stronger
- **Evidence strength:** Strong

---

## 3. Finding — Smallness can be a product requirement

### Observation

Scribble's value depends on immediacy.

If using it requires:

- opening a workspace;
- selecting a notebook;
- choosing a template;
- classifying a note;
- navigating a hierarchy;

the product starts competing with more conventional note applications.

### Emerging lesson

“Small” should not be treated as an incomplete state on the way to a larger product.

For some products, **smallness is part of the value proposition**.

### Classification

- **Product principle candidate:** Deliberate Smallness
- **Brake capability candidate:** Product Expansion Challenge
- **Evidence strength:** Strong

---

## 4. Finding — Capture speed can define the architecture

### Observation

Click-to-type, dictation and pen input all serve the same underlying job:

> **Get the thought onto the pad with minimal interruption.**

The individual input technologies are secondary to that behavioural requirement.

### Emerging lesson

Features that look different technically can belong to the same product capability when they reduce friction around the same core job.

This suggests a useful design distinction:

**Capability → Interaction modes → Implementation**

rather than treating every interaction mode as an independent feature.

### Classification

- **Product pattern candidate:** Capability-centred Feature Grouping
- **Supports:** Low-friction Capture
- **Evidence strength:** Strong

---

## 5. Finding — Multiple input modes should converge on one mental model

### Observation

Typing, dictation, pen input and drag/drop could easily become separate subsystems.

But the user should still feel that they are simply putting something on the pad.

### Emerging lesson

Implementation diversity should not create conceptual diversity unnecessarily.

A coherent product can allow several technical paths into the same mental model.

### Classification

- **Interaction pattern candidate:** Multi-modal Input, Single Mental Model
- **Evidence strength:** Strong

---

## 6. Finding — Local-first can be a product decision, not an implementation detail

### Observation

Local storage only was established as an intentional constraint.

This affects:

- privacy;
- trust;
- architecture;
- synchronisation expectations;
- account requirements;
- offline behaviour;
- backup;
- device portability.

### Emerging lesson

Storage location can be part of the product promise.

“Where does the user's data live?” should sometimes be answered during product definition rather than deferred to implementation.

### Classification

- **Architecture pattern candidate:** Local-first by Intent
- **Skill candidate:** Data-location Review
- **Evidence strength:** Strong

---

## 7. Finding — Privacy can simplify architecture

### Observation

Local-only storage removes or reduces the need for some cloud concerns:

- server-side user accounts;
- remote databases;
- network transfer;
- centralised personal data;
- cloud data retention.

This is not only a restriction.

It can be architectural subtraction.

### Emerging lesson

Security and privacy requirements do not always add complexity.

Sometimes the strongest privacy decision is to **avoid collecting or transmitting the data at all**.

### Classification

- **Security/privacy pattern candidate:** Data Minimisation by Architecture
- **Supports:** Complexity Containment
- **Evidence strength:** Strong

---

## 8. Finding — Local-only creates different responsibilities

### Observation

Removing cloud storage does not remove all data concerns.

It shifts them.

Questions become:

- What happens if local storage is cleared?
- Can the user export or back up pads?
- What happens during application updates?
- Is data recoverable after corruption?
- What is stored in browser/application caches?
- What happens when the device is replaced?

### Emerging lesson

Architecture choices remove some risks while creating or exposing others.

Project OS should avoid reasoning in terms of “secure option” versus “insecure option”.

A better question is:

> **Which risks does this decision remove, and which risks does it introduce?**

### Classification

- **Skill candidate:** Trade-off Review
- **Pattern candidate:** Risk Transfer Analysis
- **Evidence strength:** Strong

---

## 9. Finding — Compliance should begin with system boundaries

### Observation

Scribble was intended to be ready for GDPR, AI-policy and EU AI Act considerations.

The most useful first question is not necessarily which compliance artefacts to create.

It is:

- What data exists?
- Where does it exist?
- Does it leave the device?
- Is AI actually processing it?
- Which external services exist?
- What decisions does the system make?

### Emerging lesson

Compliance analysis should begin with the real system boundary and data flow.

Do not manufacture compliance complexity for capabilities the product does not have.

### Classification

- **Governance skill candidate:** System-boundary Review
- **Anti-pattern candidate:** Compliance by Assumption
- **Evidence strength:** Strong

---

## 10. Finding — “AI-ready” does not mean AI should be added

### Observation

Scribble existed in an environment where AI capabilities could easily be proposed:

- summarisation;
- rewriting;
- organisation;
- classification;
- suggestion;
- semantic search.

None is automatically necessary to the desk-pad job.

Adding AI could also alter the local-only privacy model.

### Emerging lesson

AI capability should have to justify its effect on:

- user value;
- data flow;
- privacy;
- complexity;
- cost;
- product identity.

### Classification

- **Brake capability candidate:** AI Necessity Challenge
- **Anti-pattern candidate:** AI by Default
- **Evidence strength:** Strong

---

## 11. Finding — Spatial behaviour can be part of information structure

### Observation

Drag/drop and snap-to-grid imply that location itself can carry meaning.

Users may remember:

- where a note sits;
- what is near another note;
- which items are grouped visually.

This differs from systems where all organisation is represented through metadata or hierarchy.

### Emerging lesson

Information architecture does not always need to be textual or hierarchical.

Spatial arrangement can be a legitimate organisational mechanism.

### Classification

- **Interaction pattern candidate:** Spatial Organisation
- **Evidence strength:** Moderate/Strong

---

## 12. Finding — Organisation should arrive after evidence of need

### Observation

Scribble included an organise capability, but the product's core is immediate capture.

There is a natural temptation to expand organisation into:

- folders;
- tags;
- categories;
- boards;
- search taxonomies;
- notebooks.

### Comparison with Ground Control

Ground Control showed that premature classification can destroy the flexibility of informal capture.

Scribble exposes the same tension.

### Emerging lesson

Do not build an elaborate organisational system merely because captured information *could* become messy.

Wait for evidence about how users actually need to retrieve or structure it.

### Classification

- **Anti-pattern:** Premature Structuring
- **Pattern candidate:** Organisation on Evidence
- **Cross-project evidence:** Stronger

---

## 13. Finding — Utility features can quietly change product identity

### Observation

A live date and clock fit naturally with a desktop pad.

Other small utilities could also appear to fit:

- weather;
- timers;
- calendar;
- reminders;
- calculator;
- tasks.

Individually each could be justified as something found “on a desk”.

Collectively they could turn Scribble into a desktop dashboard.

### Emerging lesson

Metaphor alone does not prevent scope creep.

A metaphor can itself be stretched to justify unrelated features.

### Classification

- **Brake capability candidate:** Metaphor Abuse Detection
- **Anti-pattern candidate:** Metaphor-driven Scope Creep
- **Evidence strength:** Strong

---

## 14. Finding — The simplest products may need the strongest boundaries

### Observation

Large applications visibly signal complexity.

Small utilities do not.

That can make feature expansion particularly dangerous because each addition appears inexpensive.

### Emerging lesson

A small product needs an explicit answer to:

> **What must this never become?**

For Scribble, one likely boundary is:

> **Scribble must not become a general productivity dashboard.**

The exact wording remains project-local.

### Classification

- **Product pattern candidate:** Negative Product Boundary
- **Brake capability candidate:** Identity Drift Detection
- **Evidence strength:** Strong

---

## 15. Finding — Product constraints can accelerate AI implementation

### Observation

Without strong constraints, an AI coding agent could reasonably expand Scribble into a conventional notes application.

With constraints such as:

- desk-pad metaphor;
- immediate capture;
- local-only data;
- minimal organisation;
- no unnecessary account/cloud layer;

the solution space becomes smaller.

### Emerging lesson

Constraints are not merely restrictions placed on AI.

They are **search-space reduction**.

Good constraints can make AI implementation faster and more coherent.

### Classification

- **AI-development pattern candidate:** Constraint-driven Generation
- **Evidence strength:** Strong

---

## 16. Finding — Project OS should distinguish robustness from expansion

### Observation

Scribble can become more robust without becoming larger in product scope.

Examples of robustness include:

- reliable local persistence;
- recovery from failure;
- accessible keyboard behaviour;
- predictable drag/drop;
- safe application updates;
- export/backup where justified.

These improve the existing promise.

They do not necessarily create new product centres.

### Emerging lesson

When evaluating proposed work, distinguish:

**Deepening the promise** from **expanding the promise**.

### Classification

- **Brake/Product skill candidate:** Robustness-vs-Expansion Review
- **Evidence strength:** Strong

---

## 17. What Scribble does not prove

Scribble does **not** prove that:

- every product needs a metaphor;
- local storage is generally preferable to cloud storage;
- all notes applications should avoid folders;
- AI features should never be added;
- every lightweight utility should remain permanently minimal;
- spatial organisation is better than metadata;
- all compliance concerns disappear with local storage;
- dictation and pen input are necessary for capture products;
- Project OS needs a dedicated Privacy agent;
- every project needs a negative product boundary.

These remain contextual or require further evidence.

---

## 18. Reusable candidates discovered

| Candidate | Type | Scribble evidence |
|---|---|---|
| Product Metaphor | Pattern | Strong, now cross-project |
| Metaphor Fit Test | Skill | Strong |
| Deliberate Smallness | Product Principle candidate | Strong |
| Product Expansion Challenge | Brake Capability | Strong |
| Capability-centred Feature Grouping | Product Pattern | Strong |
| Multi-modal Input, Single Mental Model | Interaction Pattern | Strong |
| Local-first by Intent | Architecture Pattern | Strong |
| Data-location Review | Skill | Strong |
| Data Minimisation by Architecture | Security/Privacy Pattern | Strong |
| Trade-off Review | Skill | Strong |
| Risk Transfer Analysis | Pattern | Strong |
| System-boundary Review | Governance Skill | Strong |
| Compliance by Assumption | Anti-pattern | Strong |
| AI Necessity Challenge | Brake Capability | Strong |
| AI by Default | Anti-pattern | Strong |
| Spatial Organisation | Interaction Pattern | Moderate/Strong |
| Premature Structuring | Anti-pattern | Strong, cross-project |
| Organisation on Evidence | Pattern | Strong |
| Metaphor Abuse Detection | Brake Capability | Strong |
| Metaphor-driven Scope Creep | Anti-pattern | Strong |
| Negative Product Boundary | Product Pattern | Strong |
| Identity Drift Detection | Brake Capability | Strong |
| Constraint-driven Generation | AI-development Pattern | Strong |
| Robustness-vs-Expansion Review | Product/Brake Skill | Strong |

---

## 19. Cross-project evidence after seven projects

### Product metaphor now has cross-project evidence

- **Lucy:** Desk → Notebook → Page transformed product direction.
- **Scribble:** desk-pad metaphor constrains both interaction and scope.
- **Ground Control:** the physical whiteboard acts similarly, though it is an existing behaviour rather than an invented metaphor.

**Evidence:** Strong.

The emerging reusable idea is not “every product needs a metaphor”.

It is:

> **When a strong mental model exists, use it to constrain decisions.**

---

### Informal capture has repeated evidence

- **Lucy:** Capture became a primary action.
- **Ground Control:** whiteboard capture works because classification is not required first.
- **Scribble:** click-to-type, dictation and pen input all prioritise immediate capture.
- **Eolas:** knowledge capture must remain lightweight enough to happen near the work.

**Evidence:** Very strong.

---

### Premature structure is a recurring failure mode

- **Lucy:** generic SaaS structure obscured product identity.
- **Eolas:** excessive knowledge organisation risks becoming collection work.
- **Ground Control:** formalising every whiteboard item creates friction.
- **Scribble:** folders/tags/categories could be introduced before retrieval evidence exists.

**Evidence:** Strong.

---

### Privacy and security can be architectural subtraction

- **IMS:** identity, permissions and auditability increased necessary control.
- **Scribble:** local-only storage can remove unnecessary cloud data exposure.

These projects demonstrate an important distinction:

> **Good security is proportionate to the system. It does not always mean adding controls.**

**Evidence:** Strong.

---

### The Brake now has multiple independent evidence sources

- **Lucy:** polish and process event horizons.
- **Eolas:** knowledge collection can become the work.
- **Rivervalley:** unnecessary post-release change can threaten a working service.
- **Ground Control:** plausible modules can accumulate.
- **Scribble:** small utilities can become dashboards; AI can be added merely because it is available.

**Evidence:** Very strong for a Brake capability.

Still unproven:

> Whether The Brake should be implemented as a permanent autonomous agent.

---

### Constraints improve AI-assisted development

- **Lucy:** metaphor and hierarchy improved generated UI.
- **IMS:** explicit state, approval and ownership constraints are necessary for correct automation.
- **Ground Control:** existing behaviour constrains what digital transformation should preserve.
- **Scribble:** local-only, desk-pad and smallness constraints narrow the implementation space.

**Evidence:** Strong.

---

## 20. What worked

- Establishing a clear physical metaphor.
- Making immediate capture the centre of the product.
- Supporting multiple input modes without changing the core mental model.
- Choosing local-only storage as an intentional product constraint.
- Treating privacy as an architectural concern.
- Allowing spatial organisation.
- Keeping formal organisation secondary.
- Considering compliance in relation to the actual system rather than imagined capabilities.

---

## 21. What created friction or risk

- Every desktop utility could appear to fit the desk metaphor.
- AI capabilities could easily expand the product and alter its privacy model.
- Local-only storage creates backup and recovery questions.
- Multiple input modes can create implementation complexity.
- Organisation features can grow into a full knowledge-management system.
- A simple product can accumulate features precisely because each individual feature appears small.

---

## 22. What was repeatedly reinvented

Scribble adds candidates for recurring knowledge around:

- local persistence;
- local-first data handling;
- export/backup;
- rapid capture;
- dictation;
- pen input;
- drag/drop;
- spatial organisation;
- desktop overlays;
- lightweight organisation;
- privacy boundaries;
- AI feature assessment.

Some may later become Eolas patterns or code candidates.

Promotion still requires evidence beyond a single implementation or imagined reuse.

---

## 23. Emerging Project OS evidence after seven projects

### Strongly supported concerns

1. Adaptive process depth
2. Context reconnaissance
3. Decision reuse before code reuse
4. Direction before polish
5. State and lifecycle modelling
6. Negative-path and recovery thinking
7. Product/domain-native mental models
8. Low-friction capture
9. Complexity containment
10. Privacy/security proportionality
11. Protection of working systems
12. Production and operational learning
13. Evidence-backed reuse
14. Explicit stopping and scope control
15. Framework/process overhead control

### Capabilities with substantial evidence

1. Context Reconnaissance
2. Structural-vs-Cosmetic Diagnosis
3. Lifecycle Modelling
4. Negative-path Review
5. Responsibility Mapping
6. Failure-layer Diagnosis
7. External-dependency Review
8. Accessibility Review
9. Interaction-cost Comparison
10. Adoption-friction Review
11. System-boundary Review
12. Trade-off Review
13. Scope Accumulation Detection
14. Identity Drift Detection
15. Robustness-vs-Expansion Review
16. Freeze/stop decision support

### Still hypotheses

1. Exact Project Council composition
2. The Brake as a standalone autonomous agent
3. Design Director as a permanent agent
4. Eolas implementation architecture
5. AI Resource Strategy
6. Multi-model orchestration
7. Automated knowledge ingestion
8. Internal reusable packages
9. Formal complexity/risk scoring
10. Automated process-drift detection

---

## 24. Archaeology outcome

Scribble strengthens several findings that had previously depended heavily on Lucy.

Most importantly, it provides independent evidence that:

> **A strong product model can reduce both design ambiguity and feature expansion.**

It also introduces a useful distinction for Project OS:

> **Robustness is not the same as expansion.**

A product can become more reliable, accessible, recoverable and secure without becoming broader.

This matters because an AI coding environment naturally makes additional capability inexpensive to propose and generate.

Project OS should not measure progress by how much functionality has been added.

For some products, successful development means making a small promise increasingly dependable while refusing unrelated capability.

### Archaeology checkpoint

Seven projects now provide enough evidence that the next step should **not automatically be Archaeology 008**.

The evidence base has reached a useful checkpoint.

Before extracting more projects, we should synthesise what has survived repeated comparison and decide which candidates have earned promotion into the first actual Project OS capabilities.

That synthesis should remain evidence-driven and deliberately small.
