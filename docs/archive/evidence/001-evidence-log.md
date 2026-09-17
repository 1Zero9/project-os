# Evidence Log — Experiment 001 (LaunchCity)

Evidence extracted from Experiment 001. All entries are single-project
observations. None are promoted into Project OS framework rules by this
log.

Source: Experiment 001 / LaunchCity —
see [`001-launchcity.md`](../experiments/001-launchcity.md) for provenance
(repository and closure commit).

---

## Retained Evidence

### Local vs. remote operational evidence must be distinguished before acting on it

**Source:** Experiment 001 / LaunchCity.
**Observation:** A local development tool read was mistaken for proof of
deployed production state, and that mistaken evidence was used to justify
a code change.
**Evidence:** LaunchCity's Cloudflare KV tooling returned local
Miniflare-persisted state when run without an explicit "remote" flag; this
was recorded and acted on as a production snapshot, later found incorrect
when the resulting fix did not change production behaviour.
**Status:** NOT PROMOTED.

### A frozen visual/creative direction can remain textually compliant while perceptually drifting

**Source:** Experiment 001 / LaunchCity.
**Observation:** Full compliance with a frozen written direction gave no
signal about fidelity to the original reference artefact's perceptual
identity.
**Evidence:** LaunchCity's "Horizon" visual direction passed every frozen
structural/product rule, but a side-by-side comparison against the actual
approved concept render (not a text description of it) found high drift
in the direction's defining visual signature. See frozen recovery commit
`6fcfa3a` in the LaunchCity repository.
**Status:** NOT PROMOTED.

### Comparing against the actual original reference artefact is what surfaces drift that a written freeze record cannot

**Source:** Experiment 001 / LaunchCity.
**Observation:** The drift above was invisible from the written freeze
record alone, and only became visible when compared against the original
artefact directly.
**Evidence:** Same as above.
**Status:** NOT PROMOTED.

### Real-browser/runtime validation caught structural bugs invisible to type-check, lint and build

**Source:** Experiment 001 / LaunchCity.
**Observation:** Passing automated static checks was necessary but not
sufficient evidence that a UI implementation was correct.
**Evidence:** Two layout bugs (a flex-wrap failure at desktop width; a
missing wrapper element in an empty-state fallback) were only found by
deliberately rendering and forcing edge/empty states in a real browser.
**Status:** NOT PROMOTED.

### Validate an external API's implied data model against a deliberately varied real sample before designing a schema

**Source:** Experiment 001 / LaunchCity.
**Observation:** Assumptions inferred from API documentation did not
survive contact with real, varied API responses.
**Evidence:** A provisional domain model and status model, both inferred
from documentation, were both materially revised after live calls against
deliberately varied real cases (upcoming, historical, delayed, failed,
rideshare, classified).
**Status:** NOT PROMOTED.

### Scope & Stop correctly declined to reopen frozen surfaces on repeated occasions

**Source:** Experiment 001 / LaunchCity.
**Observation:** Each time a plausible reason to reopen a frozen surface
appeared, checking it against the actual frozen requirement's language
(rather than against a more polished hypothetical) resolved it without
reopening.
**Evidence:** Three separate occasions across the experiment, each
resolved by this method rather than by design or process escalation.
**Status:** NOT PROMOTED.

### Scope & Stop is weaker against unknown omissions than against known scope drift

**Source:** Experiment 001 / LaunchCity.
**Observation:** A gap that nobody had decided about survived multiple
freeze cycles, including an entire phase, without being flagged by any
Scope & Stop check.
**Evidence:** A missing project identity/icon element survived six or more
freeze cycles undetected; it took a direct question to surface it.
**Status:** NOT PROMOTED.

### Process/evidence-gathering activity is not inherently equivalent to progress

**Source:** Experiment 001 / LaunchCity.
**Observation:** Effort following an incorrect evidence trail (investigation,
instrumentation, a code change) grew directly out of trusting
process-generated evidence over verifying against the actual deployed
target.
**Evidence:** The investigation and code change described in the "Local vs.
remote operational evidence" entry above.
**Status:** NOT PROMOTED.

### Distinguishing a genuine defect from additional polish required explicit checking against the frozen requirement's own language

**Source:** Experiment 001 / LaunchCity.
**Observation:** Two separate observations had the surface appearance of a
defect; only checking each against what the frozen requirement actually
specified (not "would this look better") kept them correctly classified.
**Evidence:** One was correctly classified as a non-blocking opportunity;
the other correctly justified a scoped, visual-only recovery rather than a
redesign.
**Status:** NOT PROMOTED.

---

## Evidence Candidates

### A dependency-injection seam built for testability doubled as a migration seam

**Source:** Experiment 001 / LaunchCity.
**Observation:** An abstraction introduced to make code unit-testable was,
independently, sufficient for a later platform migration with no
application-logic change.
**Evidence:** Observed twice within the same project (once regarding a
server/client boundary constraint, once regarding a scheduler
implementation swap).
**Status:** NOT PROMOTED.

### A rich, validated data model does not obligate a rich UI

**Source:** Experiment 001 / LaunchCity.
**Observation:** A five-concept domain model did not require a
correspondingly rich set of UI surfaces.
**Evidence:** An experience architecture with two surfaces was tested
against nine launch-state scenarios and required no structural change in
any of them.
**Status:** NOT PROMOTED.

### Excessive evidence gathering is a named risk, not an observed one

**Source:** Experiment 001 / LaunchCity.
**Observation:** The experiment's own closure named this as a risk to
watch for in future experiments, while explicitly noting it did not occur
in this project — every Scope & Stop check found existing evidence
sufficient and declined further research.
**Evidence:** Experiment 001 closure record (LaunchCity repository, commit
`956cd06`).
**Status:** NOT PROMOTED.

### Free-tier / platform-specific limits are often invisible until directly configured

**Source:** Experiment 001 / LaunchCity.
**Observation:** Two platform constraints (a scheduling granularity limit;
an environment-variable scoping behaviour) were only discovered by
attempting the actual configuration, not by architecture-level reasoning.
**Evidence:** Both were resolved without reopening the frozen architecture
decision that preceded them.
**Status:** NOT PROMOTED.
