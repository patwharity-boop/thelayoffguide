@AGENTS.md

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
