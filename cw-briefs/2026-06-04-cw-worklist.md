# CW Work Package — The Layoff Guide (2026-06-04)

From Patrick (via Claude Code). This is the full worklist. Read the **Background** first; it
explains a content-integrity problem in the original field-notes seed that several of these
tasks exist to fix. Tasks are ordered by priority. Do them in order unless Patrick says
otherwise.

---

## Background: what we found on 2026-06-04

CC ran the weekly maintenance locally (the cloud routine fired but did not push). During the
outbound-link audit, 39 source links across the site returned 404. Investigating the cause
turned up a real problem with how the **field-notes seed** (`src/data/fieldNotesSeed.ts`,
122 notes, committed `26dad3b` on 2026-05-07) was originally built:

1. **Fabricated publish dates.** 94 of the 122 notes carry the identical `publishedAt:
   "2024-09-01"`, with a scatter of other 2024 dates. The repo did not exist until 2026-04-06
   and the notes were authored 2026-05-07. These dates were synthesized, not real.

2. **Invented source URLs.** Spot-checking the dead links against the Wayback Machine, most
   had NEVER been archived anywhere (e.g. `ides.illinois.gov/unemployment/resources/severance-pay.html`,
   `dol.ny.gov/unemployment/severance`, `edd.ca.gov/en/unemployment/login/`). A real,
   long-lived government page almost always has snapshots. These URLs looked plausible but
   never existed. A minority (e.g. South Carolina) were real-and-moved; most were fabricated.

3. **Corrupted image IDs.** The 13 static blog posts (`public/posts/blog-post-*.html`,
   CW-generated, commit `4a860f4`) hotlink 20 Unsplash hero images. blog-post-9's hero ID was
   a garbled variant of a real photo ID (`...c8848c66ca85` mutated to `...c8848e66ad76`), so
   it 404s and only the gradient renders.

**Implication:** because the citations were not trustworthy, the **factual claims** in the
field notes cannot be assumed correct either. That is the reason for Task A below.

### What CC already fixed (DO NOT redo)
- Committed `b97487b` + `030baf3`: **38 dead source URLs replaced** with real pages verified
  to return 200 on the correct official agency domains. This covers 25 field notes + 6
  `states.ts` handbook/filing URLs + 3 content-page links. So every note CC touched now has a
  REAL source to verify its claim against.
- Snapshot at `weekly-snapshots/2026-06-04.md` documents the full run.

---

## Hard rules (apply to every task)
1. **NO em dashes.** Use commas/periods/parens.
2. **No AI tells:** no "delve into", "navigate the landscape", "tapestry", "unleash",
   "robust", "leverage", "synergy", "streamline", "it is important to note", three-part
   rhetorical lists, repetitive sentence openers.
3. **Verify every factual claim against a primary source** (the state agency's own site,
   dol.gov, irs.gov, cms.gov). Never cite a URL you have not confirmed returns 200 and
   actually contains the claim. This is the whole point of the cleanup; do not reintroduce the
   original problem.
4. **No fabricated metadata.** Do not invent dates. If a real publish/verified date is
   unknown, use the date you verified it (real), not a backdated guess.
5. Voice: honest, pragmatic, warm. Real caveats, no clickbait.

## Approval boundary
- **Autonomous (commit to main):** field-note claim corrections, field-note date corrections,
  source-URL fixes, image self-hosting, typo/meta/schema fixes.
- **Needs Patrick approval (Draft PR only):** new blog posts, new feature/hub pages, new
  career entries. See Task D workflow.

---

## TASK A (highest priority): Field-note claims-accuracy audit

The 122 field notes were seeded with unverified claims and fake citations. Audit the actual
CLAIMS, not just the links.

**Method, per note:**
1. Read the note body and its `sourceUrl`.
2. Fetch the sourceUrl. If it 404s or does not support the claim, find the correct current
   page on the same official state agency domain and verify it returns 200.
3. Check whether the claim (numbers, deadlines, rules) matches what the source actually says.
4. If wrong, correct the body text. If right, leave it. Either way the sourceUrl must be a
   real, verified page.
5. Replace any remaining fabricated `publishedAt` date with a real verified date.

**Start with the highest-risk notes (CC found these already drifting):**
- Idaho work-search note: body says "2 work-search activities per week" — current rule may be 5/week. Verify, fix.
- Indiana (`in-1-work-search-relaxed`): body references "3 contacts" — may now be 2. Verify, fix.
- Maine dependent-allowance: body says cap is "50% of weekly amount" — may now be 75%. Verify, fix.
- ID.me notes (`ca-edd-idme-video-backlog`, `multi-idme-3-week-backlog`): body cites "1 to 3
  week" Trusted Referee wait; ID.me no longer publishes that figure. Soften to match current
  guidance or remove the specific number.
- Illinois severance (`il-severance-not-disqualifying`): IDES retired the dedicated severance
  page; CC pointed it at the claimant FAQ. Confirm the "severance is not wages" claim is still
  accurate against current IL guidance; if you want a firmer citation, the UI Law Handbook PDF
  is the authoritative source.

**Then sweep the rest of the 122** in state-alphabetical batches. Commit per batch:
`Audit field notes [states] — correct claims + sources (week of 2026-06-04)`. In each commit
body, list what changed and what was verified-correct.

**Deliverable:** every field note has (a) a real verified sourceUrl, (b) a claim that matches
that source, (c) a real date. Summarize counts: X audited, Y claims corrected, Z dates fixed.

---

## TASK B: Self-host blog post hero images

20 Unsplash hero images are hotlinked across the 13 static posts in `public/posts/`. Hotlinks
break with no warning when Unsplash removes a photo (that is exactly what happened to
blog-post-9). Fix the breakage and remove the whole dependency.

1. **blog-post-9** (`The Hidden Benefits You're Probably Not Claiming`): hero is broken. The
   intended image was a "person signing paperwork at a desk" photo (real ID
   `photo-1450101499163-c8848c66ca85`, still live, also used on blog-post-2 and blog-post-5).
   Since three posts would then share one hero, pick a DISTINCT, topically-fitting image for
   post-9 instead of reusing the paperwork one.
2. **Self-host all hero images:** download each of the 20 Unsplash images into
   `public/posts/img/` (or similar), and rewrite each post's CSS `background`/`<img>` to point
   at the local copy. This also speeds up page loads.
3. Respect Unsplash license/attribution (their license is permissive for this use; keep a
   simple credits note if any image requires it).
4. Verify every post's hero renders locally before committing.

Commit: `Self-host blog post hero images (remove Unsplash hotlink dependency)`.

---

## TASK C: Wire up / confirm no other rot

- After Task A, re-run an outbound-link sweep across `src/` and `public/posts/` to confirm
  zero remaining true-404s (CC's method is in `weekly-snapshots/2026-06-04.md`). Note: 403
  responses from dol.gov, bls.gov, mass.gov etc. are bot-blocks, NOT dead — do not "fix" those.
- Two URLs CC left alone because they still 200 via redirect (Idaho `/dnn/Unemployment-Benefits`,
  NM handbook PDF on the old `dws.state.nm.us` domain). Optional: update to the clean current
  paths so they do not break when those states retire the redirects.

---

## TASK D: New blog posts (Draft PR, needs Patrick approval)

All grep-checked against `src/data/blog.ts`, `src/app/blog/`, open PRs, and `drafts/` branches
on 2026-06-04. None duplicate existing content or the two drafts already parked in open Draft
**PR #3** (AI-layoffs + WARN-Act — do NOT redraft those).

Draft the strongest 3, top picks first:

1. **Health Insurance After a Layoff: COBRA vs ACA Marketplace (2026)** — biggest gap.
   COBRA (60-day election, cost, retroactive coverage trap), ACA special enrollment from job
   loss (60 days), how lost income unlocks large subsidies, Medicaid for low/no income.
   Sources: healthcare.gov, dol.gov/cobra, cms.gov. NOTE: there is an existing STATIC post
   `public/posts/blog-post-7-cobra-vs-marketplace.html` — check it first; either supersede/
   redirect it or pick a different angle so you are not duplicating.
2. **Unemployment and Taxes: The 1099-G and What You Will Actually Owe (2026)** — taxable
   benefits, Form W-4V 10% withholding, which states tax UI, estimated payments. Source:
   irs.gov (Topic 418, W-4V).
3. **How to Negotiate a Better Severance Package** — distinct from the existing
   "Severance and Unemployment" post (that one is about UI impact; this is negotiation
   tactics): what is negotiable, leverage, the release agreement, OWBPA 21/45-day review,
   when to get a lawyer. Caveat: at-will employees may be owed nothing.

Lower priority if bandwidth: "Working Part-Time While on Unemployment (partial benefits)",
and "1099 Contractors: Do You Qualify for Unemployment? (mostly no, honest answer)".

**Workflow:**
1. Branch `drafts/2026-06-04-cw-blog`.
2. Commit each post to the branch (do NOT wire into the blog listing/sitemap until approved).
3. One Draft PR "CW blog drafts 2026-06-04" with a section per post (title, 1-line pitch, full
   draft) and a `- [ ] Approve post N` checklist.
4. Closing note asking Patrick to check boxes and say merge, or merge himself.

---

## Open items for Patrick (not CW tasks, just FYI)
- PR #3 (AI-layoffs + WARN-Act) awaiting approval since May 12. PR #4 (More for [State] filers)
  open since May 21.
- Routine push reliability: cloud runs fire but do not push. Decide debug vs run-locally.
