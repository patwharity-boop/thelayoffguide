# Blog drafts for review (CW-written, CC-verified) 2026-06-08

Three new blog drafts. None are wired into the blog listing or sitemap, so nothing is live.
They need your approval before publishing.

CW wrote these and claimed every fact was sourced. Claude Code then **independently verified
every factual claim against primary sources** (IRS, DOL, EEOC, CMS/healthcare.gov, CRS, state
agencies). Result: 14 of 15 checked claims were correct; 1 error and 1 omission were found and
fixed (below). The drafts are markdown; converting to live site format happens only after you
approve.

## Approve checklist

- [ ] Approve post 1: Unemployment and Taxes: The 1099-G and What You Will Actually Owe (2026)
- [ ] Approve post 2: How to Negotiate a Better Severance Package
- [ ] Approve post 3: Health Insurance After a Layoff in 2026 (COBRA / Marketplace)

## Post 1 - Unemployment and Taxes: The 1099-G (2026)
File: drafts/2026-06-04-cw-blog/unemployment-and-taxes-1099-g.md
Pitch: UI is taxable but arrives with no tax withheld; Form W-4V (10 percent), reading your
1099-G, and which states do not tax benefits.
Verification: taxable status, W-4V 10%, 1099-G boxes, 1040-ES all VERIFIED (IRS Topic 418,
W-4V, i1099g). **Fix applied:** the "states that don't tax UI" list was wrong - Montana now
TAXES UI (it repealed its exemption effective 2024) and Alabama (which exempts UI) was missing.
Corrected the list (removed Montana, added Alabama). Sources: revenue.mt.gov SB399, AL DoR.

## Post 2 - How to Negotiate a Better Severance Package
File: drafts/2026-06-04-cw-blog/how-to-negotiate-severance.md
Pitch: severance is often negotiable because the company wants your signed release; what is on
the table, leverage, the OWBPA clock, when to get a lawyer. Distinct from the existing
"Severance and Unemployment" post (that one is UI impact; this is negotiation tactics).
Verification: ALL claims VERIFIED against 29 U.S.C. 626(f) and EEOC guidance - OWBPA 21-day
(individual) / 45-day (group) consideration, 7-day revocation, age-claim-specific scope, and
the at-will "may be owed nothing" caveat. No changes needed. (Optional future add: the OWBPA
group-disclosure requirement under 626(f)(1)(H).)

## Post 3 - Health Insurance After a Layoff in 2026
File: drafts/2026-06-04-cw-blog/health-coverage-after-layoff-2026.md
Pitch: 2026 COBRA vs Marketplace, centered on the enhanced-subsidy expiry (Dec 31, 2025), the
two 60-day windows, the COBRA retroactive-backstop tactic, and Medicaid.
Verification: ALL claims VERIFIED (enhanced PTC expired 12/31/2025 and not extended as of June
2026; 60-day SEP; COBRA 60-day election, retroactive, 18 months, up to 102%; Medicaid 138% FPL,
year-round). **Addition applied:** a non-expansion coverage-gap caveat (about 10 states have
not expanded Medicaid, leaving very low-income childless adults in a gap), so readers there
are not misled.
OVERLAP DECISION (your call): this overlaps the existing static post
`public/posts/blog-post-7-cobra-vs-marketplace.html`, which was already updated for the 2026
subsidy change. **CC recommendation:** this draft is the more complete/current version, so
**replace post-7 with this one** (keep post-7's URL/slug via the next.config rewrite so no link
breaks), rather than running two competing COBRA-vs-Marketplace posts. Alternatives: fold the
new bits (two windows, retroactive tactic, Medicaid) into post-7, or publish both as distinct.

## To publish an approved post
Convert the markdown to the site's post format (static HTML in public/posts/ served via
next.config.ts rewrites, or a src/app/blog/[slug] page), add it to src/data/blog.ts and the
sitemap, and grep src/data/blog.ts + src/app/blog/ first for slug collisions. CC will do this
once you check the boxes.
