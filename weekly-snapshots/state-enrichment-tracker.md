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
- [ ] [P] Nevada
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
