# Project OS Archaeology 003 — U12 Scorekeeper

## Status

- **Project:** Rivervalley Rangers U12 Scorekeeper
- **Archaeology ID:** 003
- **Purpose:** Test emerging Project OS hypotheses against a focused, real-world application
- **Focus:** Real users, incremental delivery, established stack, domain modelling, feature growth, operational usefulness
- **Classification vocabulary:** Principle, Agent, Skill, Pattern, Anti-pattern, Playbook, Template, Code Candidate, Project-specific

---

## 1. Project context

The U12 Scorekeeper was built for a concrete operational need: recording and reviewing football match information for Rivervalley Rangers U12.

Unlike Lucy and Eolas, this was not primarily an exploratory product-design or knowledge-management exercise. It had a clear domain, recognisable users and practical jobs to perform.

The application evolved around real football data and match activity, including:

- matches;
- players;
- opponents;
- teams;
- venues;
- leagues;
- goals and own goals;
- yellow and red cards;
- undo behaviour;
- quick statistics;
- leaderboards;
- win/draw/loss records;
- league-table information.

The implementation used an established web stack including Next.js, TypeScript, Vercel and Supabase.

This makes the Scorekeeper useful archaeology because it tests whether lessons emerging from Lucy and Eolas still matter when the product problem is substantially clearer.

---

## 2. Finding — A concrete job reduces product ambiguity

### Observation

The Scorekeeper had a strong operational centre:

> Record what happened in a match and make the information useful afterwards.

That naturally constrained many design and implementation decisions.

The system did not first need an elaborate product metaphor to explain itself. Football already supplied the domain model and vocabulary.

### Emerging lesson

Not every project needs the same amount of product discovery.

Where the user, domain and core job are already concrete, Project OS should recognise that and reduce ceremony.

### Classification

- **Principle evidence:** Process must scale with risk and uncertainty
- **Pattern candidate:** Concrete Job as Scope Anchor
- **Evidence strength:** Strong

---

## 3. Finding — Domain language is stronger than generic software language

### Observation

The Scorekeeper could use terms already understood by its users:

- Match
- Player
- Opponent
- Venue
- Goal
- Own Goal
- Yellow Card
- Red Card
- League Table

There was little need to invent abstract concepts such as workspaces, resources or records for the primary experience.

### Comparison with Lucy

Lucy had to deliberately replace generic software vocabulary with Desk, Notebook and Page.

The Scorekeeper received its vocabulary directly from the domain.

### Emerging lesson

Before inventing application terminology, look for an existing language within the user's domain.

### Classification

- **Pattern candidate:** Domain-native Vocabulary
- **Supports:** Lucy finding that vocabulary should derive from the product rather than generic SaaS conventions
- **Evidence strength:** Strong

---

## 4. Finding — Real usage exposes workflow requirements that specifications miss

### Observation

Features such as live goal entry and undo behaviour are not merely database operations.

During a match, speed and recoverability matter.

A user recording an event can:

- tap the wrong player;
- record the wrong event;
- need to correct something quickly;
- be distracted by the match itself.

The operational environment therefore influences interaction design.

### Emerging lesson

The context in which software is used can matter as much as its feature inventory.

For operational applications, Project OS should ask:

> **What is happening around the user while they use this?**

### Classification

- **Skill candidate:** Usage-context Analysis
- **Pattern candidate:** Fast Action + Safe Recovery
- **Evidence strength:** Strong

---

## 5. Finding — Undo can be more valuable than confirmation

### Observation

For rapid match recording, forcing confirmation before every action would slow the primary workflow.

Providing quick entry with the ability to undo can better match the user's actual task.

### Emerging lesson

Safety does not always mean adding friction before an action.

For low-risk reversible operations:

**Fast action → visible result → easy recovery**

may be superior to:

**Action → confirmation → action**

### Classification

- **Interaction pattern candidate:** Reversible Fast Action
- **Evidence strength:** Strong within this project
- **Generalisation:** Requires comparison with other operational applications

---

## 6. Finding — A stable stack creates leverage

### Observation

The Scorekeeper used technologies already suitable for this class of application rather than treating every project as an opportunity to reinvent the technical foundation.

An established stack reduces repeated decisions around:

- application structure;
- deployment;
- data access;
- typing;
- hosting;
- environment setup.

### Comparison with Eolas

This supports Eolas's hypothesis that previous technical decisions can accelerate future projects.

However, the reusable asset is not simply:

> Always use this stack.

It is:

> We understand the conditions under which this stack has worked well.

### Emerging lesson

Project OS should preserve evidence about successful technical combinations without turning preferences into universal rules.

### Classification

- **Pattern candidate:** Proven Stack Profile
- **Eolas evidence:** Decision reuse
- **Evidence strength:** Moderate/Strong

---

## 7. Finding — Domain models become reusable knowledge before code does

### Observation

The Scorekeeper developed clear entities such as:

- matches;
- players;
- opponents;
- teams;
- venues;
- leagues.

The useful reusable knowledge is not necessarily the exact database schema.

It includes understanding relationships such as:

- a match involves teams;
- events occur within matches;
- events may relate to players;
- results contribute to statistics;
- historical data feeds leaderboards and form.

### Emerging lesson

A previous project can provide a **domain pattern** even when its implementation cannot be copied directly.

### Classification

- **Knowledge pattern candidate:** Domain Model Reference
- **Supports:** Eolas decision/context reuse
- **Evidence strength:** Moderate

---

## 8. Finding — Features should grow from the core loop

### Observation

The Scorekeeper accumulated additional capabilities such as cards, statistics, leaderboards and league-table views.

These remained connected to the central football-recording model.

A recorded match creates data. That data can then create useful views and statistics.

### Emerging lesson

Feature expansion is safer when new capabilities derive from the core data and workflow rather than creating unrelated product centres.

A useful test is:

> **Does this feature strengthen the core loop, or create another one?**

### Classification

- **Product pattern candidate:** Core-loop Expansion
- **Brake capability candidate:** Detect unrelated feature centres
- **Evidence strength:** Moderate/Strong

---

## 9. Finding — Real projects need correction paths

### Observation

Undo is one visible example of a broader requirement.

Real-world data becomes wrong.

Matches, players, opponents, venues and other records need CRUD and correction capabilities because operational systems cannot assume perfect input.

### Emerging lesson

AI-generated happy-path implementations can underweight correction, editing and recovery.

For real-world systems, ask explicitly:

- What if the user makes a mistake?
- What if source data changes?
- Can this be corrected?
- What downstream information changes with it?

### Classification

- **Skill candidate:** Recovery-path Review
- **Anti-pattern candidate:** Happy-path-only Implementation
- **Evidence strength:** Strong

---

## 10. Finding — Mobile context can be a functional requirement

### Observation

A football scorekeeper may be used pitch-side rather than at a desk.

Compact cards and mobile layout are therefore not simply responsive-design polish.

They support the operating environment of the application.

### Emerging lesson

Device and environment assumptions should be established from usage context rather than added as generic requirements.

### Classification

- **Pattern candidate:** Context-driven Responsive Design
- **Evidence strength:** Strong within this project

---

## 11. Finding — Not every successful project needs a large methodology

### Observation

Compared with Lucy, the Scorekeeper's product problem was much less ambiguous.

Compared with Eolas, its knowledge architecture was much less speculative.

The project benefited from building, observing and extending rather than spending extensive time constructing a product-development framework first.

### Emerging lesson

Project OS would fail if it imposed Lucy-scale discovery on projects whose direction is already sufficiently clear.

This is direct evidence for adaptive process depth.

A possible future assessment may consider:

**Complexity × Risk × Uncertainty × Longevity**

The exact scoring mechanism remains unproven.

### Classification

- **Principle evidence:** Use the smallest process capable of managing actual risk
- **Anti-pattern candidate:** Ceremony by Default
- **Evidence strength:** Strong

---

## 12. Finding — Working software accumulates operational knowledge

### Observation

Once an application contains real entities, workflows and data, changing its architecture or interaction model has consequences.

The existing implementation embodies knowledge that may not be captured in documentation.

### Emerging lesson

Before an AI agent restructures working software, it should understand what the existing system is already encoding.

This strengthens the principle:

> **Protect working software.**

### Classification

- **Principle evidence:** Protect working software
- **Skill candidate:** Existing-system Reconnaissance
- **Evidence strength:** Strong

---

## 13. What the Scorekeeper does not prove

The Scorekeeper does **not** prove that:

- Next.js is the correct framework for every Project OS project;
- Supabase should be a default database;
- Vercel should be the default hosting platform;
- every sports application should share the same schema;
- every operational action should use undo instead of confirmation;
- every project needs leaderboards or statistics;
- every project should begin coding immediately;
- a Project Council would have added no value;
- technical reuse should automatically become shared packages;
- all real-world applications require the same process depth.

These remain contextual decisions.

---

## 14. Reusable candidates discovered

| Candidate | Type | Scorekeeper evidence |
|---|---|---|
| Concrete Job as Scope Anchor | Product Pattern | Strong |
| Domain-native Vocabulary | Pattern | Strong |
| Usage-context Analysis | Skill | Strong |
| Reversible Fast Action | Interaction Pattern | Strong |
| Proven Stack Profile | Knowledge Pattern | Moderate/Strong |
| Domain Model Reference | Knowledge Pattern | Moderate |
| Core-loop Expansion | Product Pattern | Moderate/Strong |
| Recovery-path Review | Skill | Strong |
| Happy-path-only Implementation | Anti-pattern | Strong |
| Context-driven Responsive Design | Pattern | Strong |
| Ceremony by Default | Anti-pattern | Strong |
| Existing-system Reconnaissance | Skill | Strong |
| Project Council | — | Not evidenced as necessary |
| Multi-model Orchestration | — | Not evidenced |
| AI Resource Strategy | — | Not evidenced directly |

---

## 15. Cross-project evidence

Three projects now allow some findings to be compared rather than treated as isolated observations.

### Direction should match uncertainty

- **Lucy:** high product/design uncertainty required more direction before implementation.
- **Scorekeeper:** concrete domain and job allowed much faster movement into implementation.

**Evidence:** Stronger support for adaptive process depth.

### Language should come from the product/domain

- **Lucy:** generic SaaS vocabulary weakened identity; product metaphor produced better terminology.
- **Scorekeeper:** football supplied strong terminology naturally.

**Evidence:** Stronger support for domain/product-native vocabulary.

### Previous knowledge can accelerate work

- **Eolas:** explicitly attempted to retain previous decisions and implementations.
- **Scorekeeper:** demonstrated value in working with a known, suitable technical stack.

**Evidence:** Stronger support for decision reuse and proven stack profiles.

### AI should not optimise only for the happy path

- **Lucy:** AI tended to optimise for familiar visual completeness.
- **Scorekeeper:** operational reality required mistakes, correction and undo to be considered.

**Evidence:** Emerging support for deliberate challenge of AI's default completion patterns.

### Process itself can become waste

- **Lucy:** process expanded into a second event horizon.
- **Eolas:** knowledge capture risked becoming collection for its own sake.
- **Scorekeeper:** a concrete project could progress effectively with substantially less ceremony.

**Evidence:** Strong cross-project support for the governing constraint:

> **Project OS must remove more work than it creates.**

---

## 16. What worked

- Starting from a concrete operational problem.
- Using domain-native language.
- Building around a clear set of entities.
- Supporting fast match-event capture.
- Providing recovery through undo and CRUD.
- Allowing useful statistics and views to grow from recorded data.
- Using a suitable established technical stack.
- Supporting mobile use as part of the real operating context.
- Evolving the application incrementally.

---

## 17. What failed or created risk

The available project evidence suggests several recurring risks:

- implementation can focus too heavily on happy paths;
- real-world correction requirements can be underestimated;
- additional features can gradually pull away from the core loop;
- technical patterns can be mistaken for universal defaults simply because they worked once;
- responsive/mobile requirements can be treated as polish rather than usage requirements.

These should be tested against later archaeology rather than immediately converted into Project OS mechanisms.

---

## 18. What was repeatedly reinvented

The Scorekeeper provides candidates for recurring implementation knowledge:

- CRUD structures;
- entity relationships;
- event recording;
- undo/recovery;
- statistics derived from operational data;
- mobile action layouts;
- result/status presentation;
- deployment and database setup.

Some may eventually become Eolas patterns or code candidates.

None should be promoted solely from this project.

---

## 19. Emerging Project OS evidence after three projects

After Lucy, Eolas and the U12 Scorekeeper, several ideas now have evidence from more than one source.

### Stronger candidates

1. **Adaptive process depth**
2. **Decision reuse before code reuse**
3. **Product/domain-native vocabulary**
4. **Explicit recovery-path thinking**
5. **Direction before polish**
6. **Protection against process overhead**
7. **Preservation of context around reusable technical choices**
8. **Understanding the existing system before changing it**

### Still hypotheses

1. Project Council composition
2. The Brake as a standalone autonomous agent
3. Eolas implementation architecture
4. Multi-model orchestration
5. AI Resource Strategy
6. Automated knowledge ingestion
7. Internal shared code packages
8. Formal project complexity scoring

The distinction remains important.

---

## 20. Archaeology outcome

The Scorekeeper provides an important counterweight to Lucy and Eolas.

It demonstrates that Project OS should not become a mandatory heavyweight discovery framework.

Sometimes the problem is already understandable.

In those cases, the operating system should recognise sufficient clarity, surface relevant previous knowledge, identify material risks and then **get out of the way of the build**.

This strengthens a central emerging idea:

> **Project OS should spend process where uncertainty or risk justifies it, not where a template says it belongs.**

### Recommended next archaeology

**Archaeology 004 — Rivervalley Rangers Website**

Why:

The website adds evidence that the first three projects do not provide as strongly:

- public production deployment;
- real organisational identity;
- content and branding;
- accessibility;
- DNS and operational incidents;
- external services;
- mobile-first requirements;
- transition from beta to live service.

That will allow us to test whether Project OS needs stronger concepts around **release, production operations and post-launch learning** before we promote any of the current candidates.
