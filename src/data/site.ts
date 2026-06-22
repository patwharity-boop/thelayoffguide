// Site-wide constants. Bump LAST_REVIEWED whenever you do a content sweep,
// the value renders as a "Last reviewed" stamp on every state page and
// becomes the dateModified value in JSON-LD schema.

export const SITE_URL = "https://www.thelayoffguide.com";

export const LAST_REVIEWED = "2026-06-22"; // ISO date, YYYY-MM-DD

// Author identity. First-name-only by design, the personal narrative lives
// at /about and is referenced by JSON-LD via the AUTHOR_ID anchor below.
export const AUTHOR_NAME = "Patrick";
export const AUTHOR_ID = `${SITE_URL}/about#patrick`;
export const AUTHOR_DESCRIPTION =
  "Founder of The Layoff Guide. Laid off in September 2025; built this site so others wouldn't have to learn the hard way.";
