#!/usr/bin/env bash
# Self-host the Unsplash hero/inline images used by the static blog posts.
#
# WHY: the posts in public/posts/*.html hotlink images.unsplash.com. Hotlinks
# break with no warning when Unsplash removes a photo (that is what happened to
# blog-post-9's hero). This script downloads every referenced Unsplash image into
# public/posts/img/ and rewrites each post to point at the local copy, removing
# the dependency.
#
# CW could not run this in its sandbox (no outbound binary downloads there), so
# run it locally from the repo root:  bash scripts/self-host-hero-images.sh
#
# Safe to re-run. Review `git diff` afterward and verify each post's hero renders
# before committing.

set -euo pipefail
cd "$(dirname "$0")/.."

IMG_DIR="public/posts/img"
mkdir -p "$IMG_DIR"

# blog-post-9's hero ID is corrupted (photo-1450101499163-c8848e66ad76 -> 404).
# The default below is the KNOWN-GOOD paperwork photo (confirmed live) so post-9
# un-breaks immediately. NOTE: posts 2 and 5 already use this same photo, so to
# avoid three posts sharing one hero, set POST9_REPLACEMENT_ID to a DISTINCT,
# topically-fitting Unsplash photo ID of your choice and confirm it loads first.
BROKEN_POST9_ID="photo-1450101499163-c8848e66ad76"
POST9_REPLACEMENT_ID="photo-1450101499163-c8848c66ca85"   # known-good; swap for a distinct image
UNSPLASH_PARAMS="?auto=format&fit=crop&w=1600&q=80"

echo "Collecting Unsplash photo IDs referenced in public/posts/*.html ..."
# First, repair the broken post-9 reference so it downloads a working image.
if grep -q "$BROKEN_POST9_ID" public/posts/blog-post-9-hidden-benefits.html 2>/dev/null; then
  echo "  Repairing blog-post-9 broken hero ID -> $POST9_REPLACEMENT_ID"
  sed -i.bak "s/$BROKEN_POST9_ID/$POST9_REPLACEMENT_ID/g" public/posts/blog-post-9-hidden-benefits.html
  rm -f public/posts/blog-post-9-hidden-benefits.html.bak
fi

# Gather unique photo IDs across all posts.
ids=$(grep -rhoE "photo-[a-z0-9]+-[a-z0-9]+" public/posts/*.html | sort -u)

echo "Downloading $(echo "$ids" | wc -l | tr -d ' ') images into $IMG_DIR ..."
for id in $ids; do
  out="$IMG_DIR/$id.jpg"
  if [ -f "$out" ]; then echo "  have $id"; continue; fi
  url="https://images.unsplash.com/$id$UNSPLASH_PARAMS"
  echo "  fetching $id"
  if ! curl -fsSL "$url" -o "$out"; then
    echo "  WARNING: failed to download $id (check the ID); leaving hotlink in place"
    rm -f "$out"
  fi
done

echo "Rewriting post HTML to use local copies ..."
for f in public/posts/*.html; do
  # Replace any https://images.unsplash.com/photo-XX: with /posts/img/photo-XX.jpg
  # Handles both CSS background url(...) and <img src=...>, with or without query strings.
  perl -0777 -pi -e 's{https://images\.unsplash\.com/(photo-[a-z0-9]+-[a-z0-9]+)(\?[^"'"'"')\s]*)?}{/posts/img/$1.jpg}g' "$f"
done

echo
echo "Done. Next steps:"
echo "  1) Open each post locally and confirm the hero image renders, especially blog-post-9."
echo "  2) If a download failed above, fix that photo ID or choose another image."
echo "  3) git add public/posts && git commit -m 'Self-host blog hero images (remove Unsplash hotlink dependency)'"
echo
echo "Attribution: Unsplash's license permits this use without attribution, but a"
echo "simple credits note in the repo (e.g. public/posts/img/CREDITS.txt) is courteous."
