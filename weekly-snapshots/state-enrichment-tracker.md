# State-page enrichment tracker

Standing weekly task (folded into the layoffguide-weekly routine, 2026-07-11).

## Goal
Raise the genuine per-state substance of the 50 state pages to clear AdSense's
"low value content" flag AND help SEO recovery, WITHOUT varying the user
experience. The template, sections, and layout stay identical on every state.
Only the substance inside gets deeper and more state-specific.

## Hard rule (accuracy protocol)
NEVER fabricate. Every state-specific detail added must be verified against the
state's own .gov filing page (or dol.gov) that you actually fetched. If a portal
URL moved, confirm the new one before changing it. If you cannot verify a detail,
do not add it. A verified thinner page beats a fabricated richer one.

## "Verified" is not permanent — re-scrub on a rolling cadence
A state marked [x] below is NOT done forever. Benefit amounts reindex (often
yearly), waiting-week and other laws change (NY reinstated its wait in 2021,
DE/GA/WY reinstated, RI eliminated in 2012), and portal URLs move. So [x] means
"verified as of the date noted," not "settled." Re-verification is a standing part
of this task: on each pass, in addition to the new [P] states, re-check the key
fields (maxWeeklyBenefit, maxWeeks, waitingWeek, filingUrl, filingPhone) of the
oldest-verified states against their live primary source. Aim to re-touch every
state at least ~2x/year. When you re-verify a state, update its date note below.
Never skip a re-check because "we already confirmed it" — that is exactly how the
NY waiting-week error survived every prior audit.

## Per-state work (each state in the weekly batch)
1. Fetch the state's `filingUrl`. If it redirects or 404s, find and verify the
   current official filing page and update `filingUrl` (this is a real fix).
2. If the state is [P] (generic filing skeleton), rewrite `howToFile` to name the
   state's actual portal + real, verified filing mechanics. Keep it 4-5 steps.
3. Add or sharpen ONE genuinely state-specific, verified detail (real work-search
   requirement, certification schedule, waiting-week rule, appeal deadline, or
   payment method) into `tips`, `faq`, or `processingTime`.
4. Confirm `maxWeeklyBenefit` / `maxWeeks` still current (overlaps existing audit).
5. Mark done below with the date and a one-line note on what was verified.

## Cadence
5 states per week, working the [P] (priority, generic-skeleton) states first in
alphabetical order. ~7 weeks to clear all 33 priority states, then a lighter
filing-URL freshness pass over the 17 already-specific ones. Only after the 33
priority states are done do we request the AdSense review (so it counts).

## Status

Legend: [P] = priority (generic filing skeleton, needs full enrichment).
[x] = enriched + verified this cycle. Non-[P] states already have specific
filing steps and only need the periodic filing-URL freshness check.

Already specific (lighter touch only):
- [ ] Alabama  [ ] Alaska  [ ] Arizona  [ ] Arkansas  [ ] California
- [ ] Colorado  [ ] Connecticut  [ ] Delaware  [ ] Florida  [ ] Georgia
- [ ] Hawaii  [ ] Illinois  [ ] Indiana  [ ] Kentucky  [ ] Massachusetts
- [ ] New York  [ ] Texas

Priority queue (enrich, alphabetical, 5 per week):
- [ ] [P] Idaho
- [ ] [P] Iowa
- [ ] [P] Kansas
- [ ] [P] Louisiana
- [ ] [P] Maine
- [ ] [P] Maryland
- [ ] [P] Michigan
- [ ] [P] Minnesota
- [ ] [P] Mississippi
- [ ] [P] Missouri
- [ ] [P] Montana
- [ ] [P] Nebraska
- [x] [P] Nevada  (2026-07-27: portal fix + verified, see Log)
- [ ] [P] New Hampshire
- [ ] [P] New Jersey
- [ ] [P] New Mexico
- [ ] [P] North Carolina
- [ ] [P] North Dakota
- [ ] [P] Ohio  (note: filingUrl unemployment.ohio.gov now redirects; verify new target before changing)
- [ ] [P] Oklahoma
- [ ] [P] Oregon
- [ ] [P] Pennsylvania
- [ ] [P] Rhode Island
- [ ] [P] South Carolina
- [ ] [P] South Dakota
- [ ] [P] Tennessee
- [ ] [P] Utah
- [ ] [P] Vermont
- [ ] [P] Virginia
- [ ] [P] Washington
- [ ] [P] West Virginia
- [ ] [P] Wisconsin
- [ ] [P] Wyoming

## Log
- 2026-07-11: tracker created. Enrichment folded into weekly routine. First
  batch (Idaho–Maine) runs in the next weekly pass.
- 2026-07-27: Nevada enriched + verified (pulled out of alphabetical order
  because GSC shows it at position ~4-5 for ~250 impr/mo of "waiting week
  nevada" queries — high-visibility, worth doing first).
  - Portal URL bug fixed: howToFile/FAQ/commonMistakes/tips said "ui.nv.gov";
    DETR's own Feb-2026 UI FAQ uses "nui.nv.gov" (Claimant Self-Service/CSS)
    everywhere. Standardized to nui.nv.gov. filingUrl was already correct.
  - Waiting-week claim VERIFIED to primary source and left as-is (false/none).
    NRS 612.375 lists the complete general conditions for benefits "with
    respect to any week" (a-d) with NO waiting-week condition; "waiting" and
    "compensable" appear nowhere in NRS 612 or NAC 612. DETR handbook + FAQ
    also describe no unpaid first week. NOTE: the DOL federal "Comparison of
    State UI Laws" (2023) Table 3-7 lists NV as "1 week" — this is a secondary
    summary and conflicts with NV's own current statute; trust the state law.
  - Reworded howToFile/mistakes/tips to match current DETR mechanics (CSS
    account, claim effective Sunday of file week, Weekly Certification,
    EmployNV branding, Benny assistant). maxWeeklyBenefit $469 / 26 wks
    unchanged (matches DOL Jan-2026 sigpros + DETR FAQ "up to 26 weeks").
  - Suggest reweighting the priority queue by GSC impressions rather than
    strict alphabetical: Texas (1090 impr, pos 34.8), California (984),
    Pennsylvania (810), Louisiana (317, pos 45.7) are all high-impression
    [P] states one enrichment nudge from page 1-2.
