@AGENTS.md

# ACCURACY PROTOCOL — READ FIRST, OVERRIDES EVERYTHING ELSE

This site helps unemployed people make real money decisions. A wrong number, deadline, or
rule can cause real harm. This protocol is non-negotiable for EVERY agent that touches this
repo (Claude Code, the cloud weekly routine, CW/Cowork).

1. **NEVER fabricate.** Never invent or guess a source URL, date, statistic, benefit amount,
   week count, deadline, or rule. If you do not have it from a real source you have actually
   fetched, you do not have it. Inventing a plausible-looking citation is the worst thing you
   can do here. It already happened once (the May 2026 field-note seed) and it must never
   happen again.
2. **VERIFY every factual claim against the official primary source BEFORE writing or
   committing it.** Actually fetch the state agency's own .gov page (or dol.gov / irs.gov) and
   confirm it states the claim. A claim you cannot trace to a live official source gets
   FLAGGED, not published.
3. **Do not trust existing content as a baseline.** Prior data in this repo has contained
   fabrications. Re-verify; never assume an existing claim, source, or date is correct.
4. **Nothing factual goes live unverified.** When unsure, flag it for Patrick. Accuracy over
   completeness, always. Doing less but correct beats doing more with errors.
5. **Use real dates only** (the date you actually verified), never a backdated guess. Cite the
   exact source URL you confirmed.
6. **Verification ≠ sampling.** Do not "spot-check a few and assume the rest." When auditing,
   each claim stands on its own verified source.

If you cannot follow this protocol for a given item, STOP and surface it. That is the correct
outcome, not a failure.

# The Layoff Guide, Claude Code rules for this repo

**Before doing any non-trivial work here, run `/load-project layoffguide` to load full context.**

## Verification rules
- Before drafting a new blog post: GREP THE WHOLE REPO for similar slugs/titles, including `src/data/blog.ts` (NOT just `src/app/blog/[slug]/page.tsx` files)
- Before claiming state UI policy changes: VERIFY against the state agency's own website (BLS, NELP, state labor dept), NOT search snippets from random sites
- Before adding a career to fast-track-careers: confirm it passes the "class → cert → hired" test (no commission-only, no pie-in-the-sky)
- Affiliate links are OFF THE TABLE, already evaluated and decided. Don't pitch.

## Key references
- Batcave docs: `~/Documents/batcave/`, check for any layoff guide docs (Marketing Bible, Execution Playbook if present)
- Project memory: `~/.claude/projects/-Users-patrickwharity/memory/project_unemployment_guide.md`
- Live at thelayoffguide.com
- 50-state guide pages templated from `src/data/states.ts`
- Older blog posts live as static HTML in `public/posts/blog-post-*.html`, served at `/blog/[slug]` URLs via rewrites in `next.config.ts`

## Common pitfalls hit before
- Drafted "Mass Layoff 48-Hour Playbook" that duplicated existing "7 Things to Do the Day You Get Laid Off", always grep before drafting
- AdSense flagged site for "thin content" because blog redirect shells were nearly empty, fixed via rewrites Apr 16
- Reddit r/layoffs banned promotional posts, lead with value, mention site only at the bottom
