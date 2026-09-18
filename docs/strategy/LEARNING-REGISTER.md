# Project OS — Retrospective Learning Register

This turns earlier work into the same active loop now used by Lastman:
**action → result → evidence → learning → iteration decision → next use**.
It is a distilled index, not a replacement for the linked evidence. A learning
is only reusable when it is relevant to the live decision; it is not automatic
authority or a reason to add process.

## 1. Start with authority, not a preserved interpretation

- **Earlier action:** Applied Project OS to projects with incomplete or
  conflicting historical direction.
- **Result:** Existing artefacts enabled useful current-state understanding,
  but did not reliably establish what the founder currently intended.
- **Evidence:** [Delivery Learning 002](../archive/strategy/DELIVERY-LEARNING-002.md) and
  [Experiment 002 evidence](../archive/evidence/002-evidence-log.md).
- **Learning:** Context can inform a decision; only the authorised founder or
  owner can establish its direction.
- **Iteration decision:** Before consequential work, record a short
  authority-owned brief and stop if direction is missing.
- **Next use:** The Lastman synthetic fundraiser remains non-live until a
  named club/organiser accepts its rules and operating terms.

## 2. A build passing technical checks is not delivered value

- **Earlier action:** Completed process and technical work on LaunchCity.
- **Result:** The work did not produce a reproducible, founder-accepted
  outcome despite implementation evidence.
- **Evidence:** [Delivery Learning 003](../archive/strategy/DELIVERY-LEARNING-003.md) and
  [Experiment 009 evidence](../archive/evidence/009-evidence-log.md).
- **Learning:** Build, lint and tests are necessary evidence, not acceptance.
- **Iteration decision:** Require a founder-visible proof, committed
  reproduction and explicit acceptance or stop before calling a delivery
  successful.
- **Next use:** Lastman's UI rehearsal must be completed by an organiser and
  yield an observable result, not merely a seeded database.

## 3. Validate the real surface and real source of truth

- **Earlier action:** Compared a frozen visual reference and exercised a real
  browser/runtime on LaunchCity.
- **Result:** Perceptual drift and runtime defects were found that text,
  type-checking, lint and build did not reveal.
- **Evidence:** [Experiment 001 evidence](../archive/evidence/001-evidence-log.md).
- **Learning:** Written descriptions and static checks can conceal meaningful
  divergence.
- **Iteration decision:** Validate the actual user surface and confirm which
  source is authoritative before relying on a result.
- **Next use:** Perform Test 1 through Lastman's normal organiser UI and use
  observed counts/audit output rather than seed-script claims.

## 4. Stored knowledge helps only with provenance, freshness and selection

- **Earlier action:** Reused accumulated within-project knowledge on Golf Club
  Tools and replicated selected knowledge later.
- **Result:** It reduced restatement and sometimes avoided work, but inherited
  knowledge was not automatically authoritative or current.
- **Evidence:** [Experiment 003 evidence](../archive/evidence/003-evidence-log.md)
  and [Experiment 006 evidence](../archive/evidence/006-evidence-log.md).
- **Learning:** Retained context is useful only when its source, relevance and
  currency are checked at the decision point.
- **Iteration decision:** Keep a short, linked learning record; introduce one
  relevant prior learning only when it can change the present decision.
- **Next use:** The action log records observed Lastman state after each action
  and corrects assumptions such as the initial submitted-pick count.

## 5. Broad cross-project transfer has not earned default status

- **Earlier action:** Tested transfer of knowledge and architecture across
  unrelated projects.
- **Result:** Some individual items were useful, but general transfer was at
  best partly supported and was vulnerable to contamination and added effort.
- **Evidence:** [Experiment 004 evidence](../archive/evidence/004-evidence-log.md)
  and [Experiment 005 evidence](../archive/evidence/005-evidence-log.md).
- **Learning:** Prior projects are an archive of possible questions, not a
  default solution library.
- **Iteration decision:** Use a targeted current-state investigation first;
  introduce a prior lesson only with a stated counterfactual benefit.
- **Next use:** Lastman's fundraiser work is evaluated on its own operational
  evidence, not as proof that Vecta or another project should follow the same
  implementation path.

## 6. Intent drift must be checked against founder-visible evidence

- **Earlier action:** Investigated why LaunchCity work remained formally
  compliant yet failed to preserve the intended outcome.
- **Result:** The control problem was fidelity to intent, not merely missing
  documentation.
- **Evidence:** [Delivery Learning 004](../archive/strategy/DELIVERY-LEARNING-004.md).
- **Learning:** A frozen record can still drift from the outcome the founder
  recognises; early visible proof is a cheaper correction point.
- **Iteration decision:** Prefer a small proof and a stop/rebaseline decision
  before detailed expansion.
- **Next use:** Treat the organiser UI rehearsal as a proof of operations;
  rebaseline the rule/deadline design if the organiser cannot operate it.

## 7. Recovery needs to be rehearsed, not assumed

- **Earlier action:** Backed up, reset and restored Lastman's development
  database before adding synthetic rehearsal data.
- **Result:** Restore counts matched, but maintenance scripts initially failed
  because they did not load `.env.local`; the observed data also corrected an
  intended pick count.
- **Evidence:** [Lastman action log](../archive/evidence/010-lastman-operational-action-log.md).
- **Learning:** Recovery and operational scripts need direct rehearsal, and
  observed state outranks implementation intention.
- **Iteration decision:** Keep the backup/reset/restore path in the rehearsal
  process and record measured counts after every mutation.
- **Next use:** Complete the organiser UI round, recording state before and
  after payment confirmation, lock/autopick and settlement.

## 8. Diagnose the calling environment before replacing the dependency

- **Earlier action:** LaunchCity had served stale data for ~14 hours. The
  obvious reading was that Launch Library 2 was the wrong data source, and the
  founder proposed switching to another provider.
- **Result:** The provider was fine. LL2 rate-limits per IP and Cloudflare
  Workers share outbound egress, so the throttling keyed on the *calling
  environment*, not on LaunchCity's own volume (8–12 requests/hour against a
  15/hour allowance). A GitHub runner read the identical endpoint successfully
  at 18:04:31Z with 1 of 15 requests used; the Cloudflare cron got 429 on the
  same endpoint at 18:15:33Z. Moving only the ingestion restored freshness on
  its first run.
- **Evidence:** [Rate-limiting incident](../../../launchcity/docs/incidents/2026-09-16-scheduled-refresh-rate-limiting.md)
  and [refresh-platform review](../../../launchcity/docs/architecture/2026-09-16-refresh-platform-review.md),
  where a provider swap was assessed as Option E and explicitly rejected.
- **Learning:** When a third-party dependency starts failing, establish
  whether the problem is *who serves the request* or *where it originates*
  before replacing anything. A provider swap costs a new adapter, new
  normalisation and new tests, and carries the same fault to the new provider
  if the environment is the cause.
- **Iteration decision:** Reach for a paired measurement — the same request
  from two environments at nearly the same moment — before any migration. It
  is cheap and it is decisive.
- **Next use:** Watch whether the scheduled GitHub runs hold the ~15 minute
  cadence; GitHub delays runs under load, and the 30-minute staleness
  threshold absorbs one missed cycle but not several.

## 9. GitHub Actions `schedule` will not hold a short cadence

- **Earlier action:** Moved LaunchCity's data ingestion to a GitHub Actions
  workflow on a `*/15 * * * *` schedule, to get off Cloudflare's rate-limited
  egress. A manual run proved the path end to end.
- **Result:** The schedule then fired **zero times in its first hour**.
  Configuration was correct throughout — workflow `active`, Actions enabled,
  public repo, default branch — so nothing was misconfigured. GitHub documents
  `schedule` as best-effort and says it "can be delayed during periods of high
  load", which in practice drops short intervals entirely.
- **Evidence:** `gh run list` showed only the `workflow_dispatch` run;
  production returned to `stale` 56 minutes after the manual refresh.
- **Learning:** A successful manual run proves the *path*, not the *cadence*.
  They are separate claims and need separate evidence. GitHub's scheduler is
  suitable for hourly-or-slower work, and load peaks at the top of the hour,
  so an offset minute (`17 * * * *`) is materially more reliable than `0`.
- **Iteration decision:** Ask what cadence the product actually needs before
  engineering for the one that was assumed. Here the honest answer was "not
  often", which turned a scheduler problem into a two-line target change
  instead of a Cloudflare-triggers-GitHub bridge that was about to be built.
- **Next use:** Any scheduled job on a free tier — tally, RVR2026 and astra all
  run crons. Where a true short cadence is genuinely required, separate the
  trigger from the execution: a reliable clock (Cloudflare cron) firing a
  `repository_dispatch` into the environment with the clean egress.

## 10. A generator given an idea will invent the substance, confidently

- **Earlier action:** Pointed Project OS at Learn2Learn — a site built by
  ChatGPT from an idea, never returned to, no repo, no hosting of its own.
  The third entry point the README named ("an inherited or external product")
  and the first one ever tested.
- **Result:** The site was one 155-line file: a name, a brand mark, a palette,
  a tagline, and a four-pillar framework — Understand / Organise / Practise /
  Grow — stated as though it were the founder's method. It was not. The real
  method was four different phases mapped onto a school week, with a loop back
  to the classroom and one line carrying the whole idea ("the more familiar it
  gets, the smaller it gets"). Nothing on the page distinguished the invented
  part from the decided part.
- **Evidence:** `~/Projects/Learn2Learn`, commits `f9e2e5b` (generated) and
  `20dfb54` (corrected).
- **Learning:** Generated work fills the gap where the thinking should be, in
  the thinking's own voice. It is not wrong in an obvious way — it is
  plausible, well written and confident, which is exactly what makes it
  durable. Months later the founder could not tell which parts they had
  decided. This is the drift problem originating at **creation**, not during
  implementation, which is where Project OS had only ever looked for it.
- **Iteration decision:** Treat every framework, principle or process in
  generated work as unverified until its owner confirms it. Ask "is this
  actually yours?" before building anything on top of it.
- **Next use:** Any inherited artefact — and note the founder's own
  `FOUNDER-DIRECTION.md` names this pattern in his own words ("I would often
  begin with the branding... before working out the product itself"). AI site
  builders do not cause that failure mode; they make it faster, prettier and
  therefore harder to notice.

## 11. Generated projects arrive with a red test suite

- **Earlier action:** Ran `npm test` on the inherited Learn2Learn project.
- **Result:** 2 tests, 2 failures. Checked against the original commit: they
  failed there too. The scaffold's tests assert the *placeholder* state — a
  loading skeleton and a "Your site is taking shape" title — so they broke the
  instant the site was built, and had been red from day one.
- **Evidence:** `git stash` comparison recorded in the commit message of
  `20dfb54`.
- **Learning:** A suite that has never passed teaches its owner to ignore
  suites. The failure is not the tests being wrong; it is that nobody could
  tell, because red was the normal state.
- **Iteration decision:** On any inherited project, run the tests early and
  check whether they failed *before* your change. Replace scaffold tests with
  tests of the actual product rather than deleting them — on a content-led
  site, that means asserting the content.
- **Next use:** Learn2Learn now has 5 passing tests covering the four phases
  in order, the line the method rests on, the unaffiliated statement, and a
  guard that the invented pillars have not crept back.

## What is not learned yet

- Project OS can deliver an accepted outcome faster or better than direct
  founder-plus-AI work.
- The 80% idea-to-project aspiration is achievable.
- Lastman can run a fair, reliable three-month, 50-member fundraiser.
- A multi-agent, knowledge-platform or automation layer is justified.
- Whether the compact loop holds on work that is not visual — every case so
  far has been a design or layout outcome.

