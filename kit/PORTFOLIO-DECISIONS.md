# Portfolio Decisions

The judgment layer on top of `kit/INDEX.md` — not "have I built this
before" but "does this need a decision." Built by `kit/skills/portfolio-audit`.
Update this file after every audit pass; don't leave it stale once a category
is founder-confirmed, and don't overwrite a confirmed row with a fresh guess.

Status: **first-pass, 2026-09-20** — none of these are founder-confirmed yet.
Signal-based only (`kit/INDEX.md`'s recency, purpose text and tags); rows
marked "Revisit" have no reliable signal and were not individually opened.

`project | category | reasoning | status`

109-jobjar | Refresh | Real purpose (household work system, Next/Prisma/Postgres), ~6mo stale | first-pass
1Zero9-vault | Revisit | No git history, no README, no tags — unknown status | first-pass
1Zero9Studio | Keep | Active yesterday, the portfolio site itself | first-pass
Bookworm | Refresh | Real purpose (macOS novel-writing app), ~4mo stale | first-pass
CarSearch | Revisit | No activity signal, only an "ai" tag | first-pass
Clenicacare | Revisit | Client site, ~10mo stale — check if client still needs it before refreshing | first-pass
Ground Control | Keep | Active 5 days ago, full tag set | first-pass
IMS | Archive | Purpose was interview practice for a specific role — likely already served | first-pass
Knowledge Generator | Revisit | No signal at all | first-pass
Learn2Learn | Keep | Active yesterday, mid visual-change work this session | first-pass
LearningThroughMotion | Revisit | Purpose text is unedited create-next-app boilerplate — real content unknown | first-pass
Marvin | Keep | Active ~6 weeks ago, most mature tag set in the portfolio | first-pass
MeidaGuide | Revisit | Real purpose text but no activity/file signal to judge staleness | first-pass
OCTO Objectives | Revisit | Real purpose text but no activity/file signal | first-pass
PRODUCT-DESIGN-DIRECTOR | Revisit | No signal at all | first-pass
ParkRun-Excuse | Revisit | No signal; possible overlap with ParkRun — check both together | first-pass
ParkRun | Revisit | No signal; possible overlap with ParkRun-Excuse — check both together | first-pass
Photo App | Revisit | No signal at all | first-pass
QualFM | Refresh | Active tag set (api/tailwind/upload) ~2mo ago but no purpose text — check README | first-pass
RVR 2014 Team Admin | Keep | Active today. Part of the 5-way RVR cluster below — Keep now, revisit cluster-wide later | first-pass
RVR2026 | Keep | Active 5 days ago, most mature/production of the 5-way RVR cluster below | first-pass
Runway | Refresh | Real purpose (watch planner), ~3mo stale | first-pass
SWGOH | Keep | Active 3 weeks ago, real purpose | first-pass
Technics | Revisit | No signal at all | first-pass
Tieronesportsevents | Revisit | Client site (same template as Clenicacare), ~3mo stale — check client status | first-pass
Ultimate Chiclen Horse Clone | Revisit | No signal; name suggests a scrapped toy but unconfirmed | first-pass
Ultra Health Optimiser 3000 | Revisit | Unedited boilerplate purpose text, small footprint | first-pass
Vision | Refresh | Real purpose, versioned ("1.1.0") suggesting it actually shipped — no recent activity signal captured | first-pass
WinstonOnLine | Keep | Active ~2 weeks ago, real (if niche) purpose | first-pass
astra | Refresh | Largest single codebase (698 files), ambitious purpose, ~7mo stale — highest sunk-cost project worth a real look; may turn out to be Redirect once opened (purpose text reads bigger than "security platform" usually ships alone) | first-pass
chewing_gum | Keep | Active 3 weeks ago, real purpose | first-pass
dashboard | Revisit | Generic name, no purpose text, ~8mo stale | first-pass
eolas | Archive | Its own README already says superseded by Project-OS — confirmed, not a guess | first-pass
f1 | Keep | Active yesterday, live production, most fully kit-exercised project | first-pass
golf-club-tools | Revisit | Active 4 days ago but no purpose text — check what it actually is | first-pass
homealone | Revisit | No signal at all | first-pass
lastman | Keep | Active 3 days ago, mature tag set, real purpose | first-pass
launchcity | Keep | Active yesterday, live production | first-pass
life-admin-system | Refresh | Ambitious real purpose (AI document capture), ~8mo stale | first-pass
lucy | Keep | Active 8 days ago; possible thematic overlap with Learn2Learn (both "learning" tools) — worth a side-by-side look, not an immediate merge call | first-pass
mater-ims-projects | Revisit | No signal; possible overlap with IMS — check both together | first-pass
plants | Revisit | Matches Project-OS's own record: in-flight spike, unverified, explicitly parked pending photo testing | first-pass
rivervalley-rangers-cms | Archive | >1yr stale, unconfigured Sanity boilerplate purpose text never replaced — part of the 5-way RVR cluster | first-pass
rvr | Redirect | 13mo stale, no purpose text, part of the 5-way RVR cluster — likely folded into RVR2026 | first-pass
rvrmatchday | Redirect | 472 files, ~10mo stale, purpose overlaps RVR2026 almost completely — largest consolidation decision in the portfolio | first-pass
tally | Keep | Active 5 days ago, mature tag set | first-pass
vecta | Keep | Active 3 days ago, mature tag set | first-pass

## Flagged clusters (worth a joint decision, not five separate ones)

- **Rivervalley Rangers (5 codebases):** `RVR 2014 Team Admin`, `RVR2026`,
  `rvr`, `rvrmatchday`, `rivervalley-rangers-cms`. RVR2026 reads as the
  mature production platform; the other four are stale, smaller, or
  boilerplate. Worth one explicit consolidation decision rather than five
  independent ones.
- **ParkRun / ParkRun-Excuse:** no signal on either — check together, might
  be the same idea twice or genuinely different.
- **IMS / mater-ims-projects:** naming suggests related interview-prep work —
  check together.
- **lucy / Learn2Learn:** both learning-domain tools, active within days of
  each other — worth confirming they're not solving the same problem twice.
