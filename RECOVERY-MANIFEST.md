# Deleted routine branches: recovery manifest

The cloud routine `layoffguide-weekly` was deleted 2026-10-05. Its leftover branches were
deleted 2026-10-06 after every piece of unique content was recovered into this branch.

If anything ever needs restoring, the commits still exist and can be fetched by SHA:

```
git fetch origin <sha>
git checkout -b restore <sha>
```

| branch | sha | last commit |
|---|---|---|
| `claude/cool-cori-6cgl9b` | `70d62eb052e68e13071255f4914d2387c908f2c4` | 2026-10-05 chore: weekly snapshot 2026-10-05 |
| `claude/cool-cori-a2492n` | `be6b9b4f631d92a6fbdd382630c780f4e8f1b66d` | 2026-09-14 Improve meta descriptions: New Mexico, New York, North Carol |
| `claude/cool-cori-het535` | `a259c074c175204294b768aa8d099e40bb788c76` | 2026-08-18 Improve meta description: Iowa (175 -> 145 chars, under 160  |
| `claude/cool-cori-irh6oy` | `e4c6c1ac006601793359e9e12894727a5c6c118f` | 2026-09-28 Add weekly snapshot 2026-09-28 |
| `claude/cool-cori-r3nlev` | `ba1225b034e4a52da40160f63fbb01bd95580781` | 2026-09-21 Weekly snapshot 2026-09-21 |
| `claude/cool-cori-u6kb2u` | `1da1d60f48df0c7799c4aa01aef8e5bd44aef05b` | 2026-09-07 Weekly snapshot 2026-09-07 |
| `claude/cool-cori-w40xs6` | `3cc92a9bc41e27d099430a6b5fc69a3d5c183d9a` | 2026-08-31 Weekly snapshot 2026-08-31 |
| `claude/funny-keller-1bxnhd` | `58882351c590ebf8dfc616ac68f3716dea9829f4` | 2026-07-13 Weekly snapshot 2026-07-13 |
| `claude/funny-keller-3tr08x` | `63c46c26f09bc22ea301d481c99651d542332fbd` | 2026-08-10 Weekly snapshot 2026-08-10 |
| `claude/funny-keller-5w4bvv` | `b20b26d69e6cd62136e496973f2d4c6cdf1244d5` | 2026-08-17 Weekly snapshot 2026-08-17 |
| `claude/funny-keller-67vFk` | `0582bc18c2955bf83b018d34cb849c5c348929ff` | 2026-06-08 Weekly snapshot 2026-06-08 |
| `claude/funny-keller-g3xnge` | `18ccfd4182ad5a939eae53ff3aac3f61594d624d` | 2026-06-15 Weekly snapshot 2026-06-15 |
| `claude/funny-keller-rfid30` | `16c97d66eac9db26818169ef47ac234027415baa` | 2026-07-06 Weekly snapshot 2026-07-06 |
| `claude/funny-keller-u1t3wv` | `dfbe747a428ebe86d4b4ed3aeb0431a2c87391c0` | 2026-06-29 Add how-to-get-past-ats to blog listing; weekly snapshot 202 |
| `claude/funny-keller-xheznt` | `de7d28ac11125a2181796ef33b1f191c4924d2f1` | 2026-07-27 Weekly snapshot 2026-07-27 |
| `claude/funny-keller-y5pot9` | `43739e1c665ea6a4560508eb4679181aee5fde44` | 2026-08-03 Weekly snapshot 2026-08-03 |
| `claude/funny-keller-YJiZd` | `bc1599d1ae58abf45873c6382c2c4ec956ddb24d` | 2026-06-04 Weekly snapshot 2026-06-04 (cloud routine, second run same d |
| `claude/funny-keller-yobknm` | `5cbaf8051fa28f063ce55d3e75ebba101de2a5d8` | 2026-07-20 Weekly maintenance 2026-07-20: FAQ expansion for Idaho, Iowa |
| `drafts/2026-05-12-weekly` | `fc28b988c9b6e7baf1d7083d8b202932d18415ff` | 2026-05-12 Weekly drafts 2026-05-12: AI layoffs + WARN Act |
| `drafts/2026-06-04-weekly` | `3f8106bb9a3335d6d4b6c8b72866f6840b0d75a1` | 2026-06-04 Weekly snapshot 2026-06-04 (cloud routine, second run same d |
| `drafts/2026-07-27-weekly` | `e784e7b2cf678997b53f7dcab86d562c54b9bf7d` | 2026-07-27 Draft: When Your Company Relocates, Can You Collect Unemploy |
| `drafts/2026-10-05-weekly` | `6302c346dafcf075d515356365175f886811d1fa` | 2026-10-05 Rewrite VSP post: CA and NY sections were wrong, WA was inco |
| `drafts/blog-2026-06-08-verified` | `cbdc2a109e600a360714e0a84fd47a8a677500db` | 2026-06-08 Blog drafts (CW-written, CC-verified): taxes/1099-G, severan |

## What was recovered

- `src/app/blog/401k-after-layoff/page.tsx`
- `src/app/blog/state-benefit-increases-2026/page.tsx`
- `drafts/2026-06-04-cw-blog/` (3 drafts + PR description)

## What was intentionally NOT recovered

`src/components/EmailCapture.tsx` and `src/app/api/subscribe/route.ts`. That is the
newsletter feature, removed on purpose. Newsletter was decided against for this site.
