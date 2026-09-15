# Experiment 002 Evidence Log — Lastman Existing Project Adoption

## Provenance

- Project OS repository: https://github.com/1Zero9/project-os
- Target repository: https://github.com/1Zero9/lastman
- Project OS version: v0.1
- Project OS state: FROZEN
- Lastman pre-adoption baseline: `d1b3b94b2fc0b0520a8adf278979d37f12c611e5`
- Lastman post-intervention commit: `eafec859be32e171e0d4fba65343dadd01837983`

Anything at or before the baseline commit is treated as pre-Project OS state.

## Experiment Question

Can Project OS v0.1 be introduced into the active Lastman project at its
present state and improve the next meaningful decision without
reconstructing the project's full history?

## Intake Evidence

Project OS established sufficient current-state understanding from the
existing repository without reconstructing the project's complete history.

Evidence inspected included:

- README.md
- CHANGELOG.md
- package.json
- prisma/schema.prisma
- vercel.json
- .env.example
- infra/README.md
- docs/SPEC.md
- docs/DECISIONS.md
- docs/BACKLOG.md
- docs/RUNBOOK.md
- docs/DESIGN.md
- route structure
- organiser onboarding flow
- seed scripts
- migration structure
- recent commit history

Historical investigation was deliberately bounded. Full historical commit
reconstruction, previous conversations and complete specification archaeology
were not performed.

## Inherited Decisions Preserved

Existing locked project decisions were treated as inherited constraints,
including:

- approved-paid entries are required before picks
- autopick tie-break behaviour
- manual fixture entry for MVP
- split-winner handling
- external payment handling
- breakglass support intended to be PII-blind

These were not reopened merely because Project OS had not participated in
their original creation.

## Scope Finding

The Intake identified material divergence between the inherited project
specification and the implemented system.

The inherited specification described a primarily RVR-specific application.

The current implementation had already introduced:

- multi-competition behaviour
- organiser self-service onboarding
- competition join codes
- password/access-code based authentication
- reusable fundraiser concepts
- reviewer/demo seed data

The repository itself could not establish whether this represented an
intentional product direction or organic scope drift.

Project OS stopped historical reconstruction and requested owner evidence.

## Owner Decision

The project owner confirmed that Lastman:

- was originally built for RVR only
- now appears to have genuine potential for other clubs
- may potentially become a commercial product

The resulting direction was recorded as:

**Provisional multi-organiser / multi-club platform direction.**

This was deliberately not frozen as a permanent architectural commitment.

Real evidence, including use by another club or RVR's own season, may still
change the direction.

## Consequence Identified

When asked about the cost of getting the provisional multi-club direction
wrong, the project owner identified security and tenant isolation as the
material consequence.

This directed Project OS into a targeted Risk & Failure Check rather than
additional feature work or documentation cleanup.

## Risk & Failure Check

The check focused specifically on cross-organiser and cross-competition data
isolation.

It did not expand into a general security audit.

### Finding 1 — Demonstrated Blocker

`provisionOrganiser()` in `app/platform/page.tsx` allowed an authenticated
`BREAKGLASS_SUPPORT` actor to provision competition membership because the
action lacked the `PLATFORM_ADMIN` role guard used by sibling actions.

This created a credible route for the recovery-only breakglass role to obtain
competition access and subsequently reach participant PII.

This contradicted an inherited security boundary.

Classification:

- demonstrated implementation weakness
- material blocker for the provisional multi-organiser direction

### Finding 2 — Controlled

Organiser-to-organiser isolation elsewhere was consistently scoped through
server-verified competition membership.

Public competition routes were competition-scoped and did not expose
participant PII.

No broader tenant-isolation failure was demonstrated.

### Finding 3 — Plausible Adjacent Risk

Join and confirmation flows attach participants to an existing user by email
without explicit ownership proof.

This was classified as an adjacent identity/fraud risk rather than a
demonstrated cross-organiser isolation failure.

It was deliberately not investigated or remediated as part of Experiment 002.

## Corrective Action

The demonstrated blocker was addressed with the minimum existing control
pattern.

Commit:

`eafec859be32e171e0d4fba65343dadd01837983`

Change:

A single `PLATFORM_ADMIN` guard was added to `provisionOrganiser()` before
competition membership can be created or updated.

No new authorisation concept or architectural redesign was introduced.

## Verification Evidence

Verification performed:

- `npx tsc --noEmit` — clean
- `npm run lint` — clean
- static control-flow trace of the affected server action

The change established by inspection that:

- PLATFORM_ADMIN retains organiser provisioning capability
- BREAKGLASS_SUPPORT cannot reach the membership upsert through this action
- the existing PII boundary remains unchanged elsewhere
- no unrelated behaviour was modified

### Verification Limitation

The fix was not exercised against a live database/session using an actual
BREAKGLASS_SUPPORT account.

The blocker is therefore **statically resolved**, not functionally
demonstrated as resolved.

No automated tests existed in the repository to execute.

## Scope & Stop Evidence

The experiment deliberately did not:

- perform a general security audit
- redesign authorisation
- fix the adjacent email-identity concern
- update stale project specifications
- hide the provisioning UI from BREAKGLASS_SUPPORT
- introduce CI or tests
- continue unrelated development

The intervention stopped once the consequential decision, its material risk,
the demonstrated blocker and the minimum corrective action had been
established.

## Friction Observed

### 1. Project-local artefact seam

Project OS v0.1 instructs creation of `PROJECT-OS.md` in the target project
during Intake.

Experiment 002 constrained the intervention to report-only operation until
the meaningful decision had been identified.

This seam appeared repeatedly.

It remains evidence for later framework consideration.

No framework change was made during this experiment.

### 2. Specification / implementation divergence

The inherited specification and current implementation materially differed.

Project OS did not automatically treat this as documentation debt.

Instead, it used the divergence to surface the underlying product-scope
decision.

In this experiment, that behaviour was useful rather than obstructive.

## Material Value

Project OS:

- established useful project context without full historical reconstruction
- recognised and preserved inherited decisions
- surfaced an implicit product-direction change
- stopped repository archaeology when owner intent became the missing evidence
- converted implicit direction into an explicit provisional decision
- traced the decision to its material security consequence
- identified a real authorisation defect
- constrained remediation to a one-line existing control pattern
- prevented the intervention from expanding into unrelated work

## Material Cost

The primary observed cost was process friction around the framework's
prescribed project-local `PROJECT-OS.md` artefact during an existing-project
adoption experiment.

No substantial historical reconstruction was required.

## Experiment Result

**SUPPORTED, with qualifications.**

Project OS v0.1 was successfully introduced into an independently developed
active project and materially improved the next meaningful decision without
requiring reconstruction of the project's full history.

The process also exposed one framework/adoption seam and retained a clear
verification limitation around the corrective action.

## Framework Changes

**NONE.**

Project OS v0.1 remained frozen throughout Experiment 002.