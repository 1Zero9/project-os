# Project OS Archaeology 002 — Eolas

## Status

- **Project:** Eolas
- **Archaeology ID:** 002
- **Purpose:** Extract evidence about knowledge retention, reuse and acceleration across projects
- **Focus:** Project knowledge, code capture, documentation, reuse, progression from idea to MVP
- **Classification vocabulary:** Principle, Agent, Skill, Pattern, Anti-pattern, Playbook, Template, Code Candidate, Project-specific

---

## 1. Project context

Eolas began as an attempt to stop useful knowledge disappearing between projects.

The underlying problem was simple: each new project could benefit from previous work, but useful decisions, code, technical approaches, design ideas and lessons were scattered across repositories, conversations and memory.

Eolas explored an Obsidian-based knowledge hub connected to local development work. The broader ambition included:

- reading local repositories;
- creating and linking documentation;
- connecting technologies, ideas and designs;
- capturing knowledge from active development;
- making that knowledge accessible later;
- backing the knowledge up through GitHub;
- supporting a progression from idea through proof-of-concept towards MVP.

An emerging workflow was roughly:

**Idea → Accelerator → POC → MVP**

Later thinking increasingly focused on capturing reusable code blocks and proven implementation knowledge.

The central hypothesis was:

> **Previous project work should become an asset for future projects rather than disappearing when the project ends.**

---

## 2. The problem Eolas was trying to solve

AI-assisted development makes recreation cheap.

That creates an unexpected problem.

When generating a new authentication flow, CRUD pattern, component, deployment configuration or architectural approach takes minutes, it can feel easier to regenerate it than to find and understand the previous implementation.

Repeated regeneration, however, loses context.

The previous project may already have discovered:

- edge cases;
- security implications;
- deployment constraints;
- failed approaches;
- compatibility problems;
- useful conventions;
- reasons why one option was chosen over another.

Recreating the code does not recreate that learning.

Eolas was therefore addressing more than code reuse.

It was beginning to address **organisational memory for an individual developer and their AI collaborators**.

---

## 3. Finding — Reusable code without context is incomplete knowledge

### Observation

Capturing useful code blocks appeared valuable because similar implementation problems recur across projects.

But a code block alone cannot answer:

- Why was this approach chosen?
- Which alternatives were rejected?
- What dependencies does it assume?
- Which versions was it tested against?
- What security considerations apply?
- Where has it actually worked?
- When should it not be reused?

### Emerging lesson

The reusable asset is not merely the code.

A stronger reusable unit is:

**Decision + Context + Pattern + Implementation + Evidence**

### Classification

- **Pattern candidate:** Contextual Code Reuse
- **Knowledge pattern candidate:** Decision-linked Implementation
- **Evidence strength:** Strong conceptually; requires validation across additional repositories

---

## 4. Finding — Decision reuse may be more valuable than code reuse

### Observation

Many recurring project questions are not primarily coding questions.

Examples include:

- Which storage approach suits this type of project?
- Should data be local-first or cloud-backed?
- What authentication approach is proportionate?
- Which deployment platform fits the constraints?
- What accessibility baseline should be applied?
- What security controls are appropriate?
- Which architecture previously created unnecessary complexity?

Regenerating implementation does not answer these questions.

### Emerging lesson

Before asking:

> **What code have I used before?**

ask:

> **What have I already learned about this decision?**

### Classification

- **Principle evidence:** Reuse decisions before code
- **Pattern candidate:** Decision Reuse
- **Evidence strength:** Strong

---

## 5. Finding — Knowledge capture must happen close to the work

### Observation

Useful lessons are easiest to identify while a project is active or immediately after a significant decision, failure or implementation.

Retrospectively reconstructing everything creates several problems:

- context is forgotten;
- failed attempts disappear;
- rationale becomes simplified;
- final code can make the path to the solution look more obvious than it was.

### Emerging lesson

Knowledge capture should be lightweight enough to happen during normal development.

If recording a lesson becomes a documentation project, it will eventually stop happening.

### Classification

- **Process pattern candidate:** Capture Close to Work
- **Principle evidence:** Project OS must remove more work than it creates
- **Evidence strength:** Moderate/Strong

---

## 6. Finding — A knowledge system can become a collection system

### Observation

A system designed to preserve useful information can easily reward accumulation.

Code snippets, links, notes, technologies and ideas can all be captured because they might be useful later.

That creates a risk:

> **The system becomes good at storing information without becoming good at helping make decisions.**

Large collections also create maintenance problems:

- stale implementations;
- duplicate patterns;
- outdated dependencies;
- conflicting advice;
- uncertain provenance;
- increasing search noise.

### Emerging lesson

The objective is not maximum capture.

It is **useful retrieval of trusted knowledge at the moment a decision is being made**.

### Classification

- **Anti-pattern candidate:** Knowledge Hoarding
- **Anti-pattern candidate:** Capture Without Retrieval
- **Evidence strength:** Moderate

---

## 7. Finding — Reuse needs promotion criteria

### Observation

Not everything that works once should become reusable infrastructure.

A project may contain an implementation that is:

- highly project-specific;
- accidentally coupled to its environment;
- insufficiently tested;
- likely to change;
- trivial to regenerate;
- based on assumptions that do not generalise.

Promoting everything creates a library that is harder to trust.

### Emerging lesson

Reusable material should earn promotion.

Possible evidence includes:

- successful use in more than one project;
- repeated manual recreation;
- resolution of a known security or reliability problem;
- a generic implementation proving materially better than regeneration;
- stable behaviour across relevant environments.

### Classification

- **Pattern candidate:** Evidence-based Promotion
- **Principle evidence:** Promote evidence, not speculation
- **Evidence strength:** Strong

---

## 8. Finding — Reusable knowledge needs provenance

### Observation

Once knowledge is separated from its original project, it becomes easy to forget where it came from.

Without provenance, future users or agents cannot judge its reliability.

### Emerging lesson

Reusable knowledge should retain metadata such as:

- origin project;
- reason it exists;
- status;
- projects where used;
- dependencies or compatibility;
- known risks;
- last reviewed date;
- related decisions.

A future representation might resemble:

```yaml
status: proven
origin: project-name
used_in:
  - project-a
  - project-b
requires:
  - dependency
risks:
  - known-risk
last_reviewed: YYYY-MM-DD
```

The exact schema is not yet a Project OS decision.

### Classification

- **Knowledge pattern candidate:** Provenance Metadata
- **Evidence strength:** Moderate/Strong

---

## 9. Finding — Retrieval matters more than repository size

### Observation

The value of Eolas depends on whether relevant knowledge can be surfaced when a new project reaches a similar problem.

A thousand stored patterns are of little value if neither the human nor AI agent knows that the relevant one exists.

### Emerging lesson

The useful loop is not:

**Capture → Store**

It is:

**Capture → Qualify → Retrieve → Apply → Validate → Learn**

### Classification

- **Pattern candidate:** Knowledge Feedback Loop
- **Skill/capability candidate:** Contextual Retrieval
- **Evidence strength:** Strong conceptually; implementation unproven

---

## 10. Finding — The knowledge layer and operating layer are different concerns

### Observation

Eolas concentrated on preserving and connecting knowledge.

The later Project OS problem is broader.

Project OS also needs to reason about:

- what work should happen;
- which decisions matter now;
- which specialist perspectives are useful;
- when previous knowledge applies;
- when a project is drifting;
- when to stop reviewing and start building.

A knowledge store cannot govern those decisions by itself.

### Emerging lesson

There appears to be a useful conceptual separation:

> **Project OS governs. Eolas remembers.**

This remains a hypothesis to validate through further archaeology.

### Classification

- **Architecture hypothesis:** Eolas as Project OS knowledge/reuse layer
- **Evidence strength:** Moderate
- **Status:** Do not implement yet

---

## 11. Finding — Acceleration is broader than templates

### Observation

The original Eolas/accelerator thinking included moving ideas towards POC and MVP more efficiently.

The obvious interpretation is reusable starter code.

But project acceleration can also come from:

- avoiding previously failed approaches;
- recalling architectural decisions;
- reusing validated security patterns;
- knowing which questions matter;
- recognising project types;
- retrieving useful implementation examples;
- avoiding unnecessary framework decisions.

### Emerging lesson

The fastest route is not necessarily generating more code faster.

Sometimes acceleration means **not repeating a decision or mistake**.

### Classification

- **Principle evidence:** Never start from zero
- **Pattern candidate:** Knowledge-led Acceleration
- **Evidence strength:** Strong

---

## 12. What Eolas does not prove

Eolas does **not** yet prove that:

- Project OS requires a vector database;
- Obsidian should remain the permanent knowledge interface;
- all repositories should be automatically ingested;
- every useful code block should be stored;
- an internal package library is required;
- AI should automatically promote patterns;
- Project OS needs semantic search from day one;
- Eolas must remain a separate application;
- all knowledge should be centralised;
- captured code is preferable to regenerating simple implementations;
- automated cross-project learning is currently worth its complexity.

These remain implementation possibilities or roadmap hypotheses.

---

## 13. Reusable candidates discovered

| Candidate | Type | Eolas evidence |
|---|---|---|
| Decision Reuse | Pattern / Principle evidence | Strong |
| Contextual Code Reuse | Pattern | Strong |
| Capture Close to Work | Process Pattern | Moderate/Strong |
| Knowledge Hoarding | Anti-pattern | Moderate |
| Capture Without Retrieval | Anti-pattern | Moderate |
| Evidence-based Promotion | Pattern | Strong |
| Provenance Metadata | Knowledge Pattern | Moderate/Strong |
| Knowledge Feedback Loop | Pattern | Strong conceptually |
| Contextual Retrieval | Capability | Moderate |
| Knowledge-led Acceleration | Pattern | Strong |
| Eolas as Project OS knowledge layer | Architecture hypothesis | Moderate |
| Automated repository ingestion | — | Unproven |
| Internal reusable packages | — | Unproven |
| Automated cross-project learning | — | Roadmap only |

---

## 14. What worked

- Recognising that previous project knowledge has continuing value.
- Treating repositories as sources of reusable learning rather than isolated outputs.
- Connecting documentation, implementation and project ideas.
- Exploring a progression from idea through POC towards MVP.
- Recognising code reuse as a potential development accelerator.
- Moving towards a persistent knowledge base rather than relying on chat history or memory alone.

---

## 15. What failed or caused friction

The strongest risks and limitations exposed by the Eolas approach were:

- code capture could become disconnected from decision context;
- collection could become an objective in itself;
- useful material could be difficult to retrieve later;
- stale patterns could become actively harmful;
- project-specific code could be promoted too early;
- maintaining the knowledge system could become another project;
- storing more information could create noise rather than leverage.

Some of these are observed problems and some are risks exposed by the direction of the project. Further archaeology should distinguish between the two where possible.

---

## 16. What was repeatedly reinvented

Eolas suggests that projects repeatedly recreate or reconsider:

- architecture choices;
- platform choices;
- authentication approaches;
- storage approaches;
- deployment patterns;
- security controls;
- CRUD conventions;
- UI implementation patterns;
- documentation structures;
- project setup;
- common integration approaches.

The next archaeology projects should determine which of these are genuinely recurring and which only appear recurring from the Eolas perspective.

---

## 17. What appears reusable beyond Eolas

The strongest candidates for cross-project validation are:

1. **Decision Reuse**
2. **Contextual Code Reuse**
3. **Evidence-based Promotion**
4. **Provenance Metadata**
5. **Capture Close to Work**
6. **Knowledge Feedback Loop**
7. **Knowledge-led Acceleration**
8. **Capture Without Retrieval as an anti-pattern**

---

## 18. Comparison with Lucy

Lucy and Eolas expose different sides of the same broader problem.

### Lucy

Lucy demonstrated that faster implementation increases the importance of **judgement before and during a build**.

Its strongest questions were:

- What should we build?
- What should the product feel like?
- Are we solving the right problem?
- When should we stop iterating?

### Eolas

Eolas demonstrated the potential value of **judgement accumulated across builds**.

Its strongest questions were:

- What have we already learned?
- Have we solved this before?
- Can previous decisions prevent repeated work?
- Which implementation can be trusted?
- How do we retain useful context?

Together they suggest an emerging loop:

**Decide → Build → Learn → Retain → Retrieve → Decide Better**

This is stronger evidence for Project OS than either project provides independently.

---

## 19. The larger lesson

AI makes generating new implementations increasingly cheap.

That does not make accumulated experience less valuable.

It makes **knowing which experience to reuse** more valuable.

A future Project OS should therefore avoid becoming merely a prompt library or code library.

Its potential advantage is the combination of:

- current project judgement;
- accumulated project knowledge;
- evidence about what has worked;
- mechanisms for applying that evidence at the right time.

---

## 20. Archaeology outcome

Eolas provides evidence for a persistent knowledge and reuse capability within the broader Project OS concept.

It particularly strengthens the case for:

- decision reuse before code reuse;
- provenance around reusable knowledge;
- evidence-based promotion;
- retrieval as part of the development workflow;
- capturing learning close to the work.

It does **not** yet justify building the Eolas layer, choosing its storage technology, automating ingestion or creating reusable packages.

Those decisions remain deliberately deferred.

### Next comparison

A useful next archaeology project should test both Lucy and Eolas findings against a project that reached a more mature real-world implementation.

Candidates include:

- **U12 Scorekeeper** — focused application, real users, established stack and repeated feature development;
- **Rivervalley Rangers website** — production deployment, content, branding and operational issues;
- **Ground Control** — product discovery, modularity and family-user complexity.

The choice should be based on which evidence gap we want to test next.
