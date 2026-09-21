# Portfolio Decisions

The judgment layer on top of `kit/INDEX.md` — not "have I built this
before" but "does this need a decision." Built by `kit/skills/portfolio-audit`.
Update this file after every audit pass; don't leave it stale once a category
is founder-confirmed, and don't overwrite a confirmed row with a fresh guess.

Status: mixed — most rows are **first-pass** (signal-based only, from
`kit/INDEX.md`'s recency, purpose text and tags; "Revisit" rows have no
reliable signal and were not individually opened). Rows marked
**founder-confirmed** have been reviewed directly and should not be
overwritten by a fresh audit pass. All four flagged clusters are resolved
as of 2026-09-20.

`project | category | reasoning | status`

109-jobjar | Refresh | Real purpose (household work system, Next/Prisma/Postgres), ~6mo stale | first-pass
1Zero9-vault | Revisit | No git history, no README, no tags — unknown status | first-pass
1Zero9Studio | Keep | Active yesterday, the portfolio site itself | first-pass
Bookworm | Refresh | Real purpose (macOS novel-writing app), ~4mo stale | first-pass
boot-room | Keep | Founder-confirmed 2026-09-20: live production multi-tenant swap-shop, built this session (github.com/1Zero9/boot-room, boot-room.1zero9.com) | founder-confirmed
CarSearch | Revisit | No activity signal, only an "ai" tag | first-pass
Clenicacare | Revisit | Client site, ~10mo stale — check if client still needs it before refreshing | first-pass
Ground Control | Keep | Active 5 days ago, full tag set | first-pass
IMS | Archive | Founder-confirmed 2026-09-20: not used, not needed | founder-confirmed
Knowledge Generator | Revisit | No signal at all | first-pass
Learn2Learn | Keep | Active yesterday, mid visual-change work this session | first-pass
LearningThroughMotion | Revisit | Purpose text is unedited create-next-app boilerplate — real content unknown | first-pass
Marvin | Keep | Active ~6 weeks ago, most mature tag set in the portfolio | first-pass
MeidaGuide | Revisit | Real purpose text but no activity/file signal to judge staleness | first-pass
OCTO Objectives | Revisit | Real purpose text but no activity/file signal | first-pass
PRODUCT-DESIGN-DIRECTOR | Revisit | No signal at all | first-pass
ParkRun-Excuse | Archive | Founder-confirmed 2026-09-20: not used, not needed | founder-confirmed
ParkRun | Archive | Founder-confirmed 2026-09-20: not used, not needed | founder-confirmed
Photo App | Revisit | No signal at all | first-pass
QualFM | Refresh | Active tag set (api/tailwind/upload) ~2mo ago but no purpose text — check README | first-pass
RVR 2014 Team Admin | Keep | Founder-confirmed 2026-09-20: not a cluster duplicate — scoped to one age-group team's fund/accounts, a different job from RVR2026's whole-club site | founder-confirmed
RVR2026 | Keep | Founder-confirmed 2026-09-20: "the biggest site I've done for a local football club" — the anchor of the Rivervalley cluster | founder-confirmed
Runway | Refresh | Real purpose (watch planner), ~3mo stale | first-pass
SWGOH | Keep | Active 3 weeks ago, real purpose | first-pass
Technics | Revisit | No signal at all | first-pass
Tieronesportsevents | Revisit | Client site (same template as Clenicacare), ~3mo stale — check client status | first-pass
Ultimate Chiclen Horse Clone | Revisit | No signal; name suggests a scrapped toy but unconfirmed | first-pass
Ultra Health Optimiser 3000 | Revisit | Unedited boilerplate purpose text, small footprint | first-pass
Vision | Archive | Founder-confirmed 2026-09-21: not needed. No commit history or remote existed — moved to ~/Projects/_archive/Vision rather than deleted outright | founder-confirmed
WinstonOnLine | Keep | Active ~2 weeks ago, real (if niche) purpose | first-pass
astra | Redirect | Founder-confirmed 2026-09-20: "the art of the possible" — a $200-credit exploration, a collection of apps under one roof, not a coherent product. Prompt Builder is the one piece that proved out; last real commits (2026-02-18) were all Prompt Builder polish, nothing on the other three "suites." Next step is carrying Prompt Builder forward, not refreshing the platform | founder-confirmed
chewing_gum | Keep | Active 3 weeks ago, real purpose | first-pass
dashboard | Revisit | Generic name, no purpose text, ~8mo stale | first-pass
eolas | Archive | Its own README already says superseded by Project-OS — confirmed, not a guess | first-pass
f1 | Keep | Active yesterday, live production, most fully kit-exercised project | first-pass
golf-club-tools | Revisit | Active 4 days ago but no purpose text — check what it actually is | first-pass
homealone | Revisit | No signal at all | first-pass
lastman | Keep | Active 3 days ago, mature tag set, real purpose | first-pass
launchcity | Keep | Active yesterday, live production | first-pass
life-admin-system | Refresh | Ambitious real purpose (AI document capture), ~8mo stale | first-pass
lucy | Archive | Founder-confirmed 2026-09-20: a failed note-taking app, not a Learn2Learn duplicate — no longer pursued | founder-confirmed
mater-ims-projects | Archive | Founder-confirmed 2026-09-20: not used, not needed | founder-confirmed
plants | Revisit | Matches Project-OS's own record: in-flight spike, unverified, explicitly parked pending photo testing | first-pass
rivervalley-rangers-cms | Archive | >1yr stale, unconfigured Sanity boilerplate purpose text never replaced, no evidence it was ever wired to anything | first-pass
rvr | Archive | Plain static HTML site, 13mo stale — reads as the pre-RVR2026 club site, superseded | first-pass
rvrmatchday | Archive | Founder-confirmed 2026-09-20: its matchday/game-management feature was rebuilt into RVR2026, which replaced it | founder-confirmed
tally | Keep | Active 5 days ago, mature tag set | first-pass
vecta | Keep | Active 3 days ago, mature tag set | first-pass

## Flagged clusters (worth a joint decision, not five separate ones)

- **Rivervalley Rangers — resolved 2026-09-20.** Not actually a 5-way
  duplicate cluster once looked at directly. `RVR2026` is the club's real
  platform ("the biggest site I've done for a local football club" — founder,
  2026-09-20) and absorbed `rvrmatchday`'s matchday/game-management feature,
  which is why `rvrmatchday` is now Archive rather than Redirect. `rvr` (plain
  static HTML) and `rivervalley-rangers-cms` (unconfigured Sanity boilerplate)
  both predate and are superseded by it — Archive. `RVR 2014 Team Admin` was
  never actually a duplicate: it's scoped to one age-group team's fund and
  accounts admin, a different job from the club-wide site, and stays Keep.
  Net: two codebases doing real work (`RVR2026`, `RVR 2014 Team Admin`),
  three safe to archive.
- **ParkRun / ParkRun-Excuse — resolved 2026-09-20.** Founder-confirmed:
  neither used nor needed — Archive.
- **IMS / mater-ims-projects — resolved 2026-09-20.** Founder-confirmed:
  neither used nor needed — Archive.
- **lucy / Learn2Learn — resolved 2026-09-20.** Not related. `lucy` was a
  failed note-taking app, no longer pursued (Archive). `Learn2Learn` is a
  separate, current project about how to learn in school and study —
  unaffected, stays Keep.
