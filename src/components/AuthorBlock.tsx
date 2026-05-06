import Link from "next/link";
import { LAST_REVIEWED, AUTHOR_NAME } from "@/data/site";

// Format ISO date (YYYY-MM-DD) as "May 6, 2026" for human display.
function formatReviewDate(iso: string): string {
  const d = new Date(iso + "T00:00:00Z");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

interface AuthorBlockProps {
  /**
   * Compact (small line under the H1) or expanded (footer-style block with
   * handbook citation when available). Defaults to "compact".
   */
  variant?: "compact" | "expanded";
  /**
   * Optional state-specific handbook URL, when present the expanded variant
   * renders a citation line. Only applies to the "expanded" variant.
   */
  handbookUrl?: string;
  /**
   * Optional state name for the handbook citation copy.
   */
  stateName?: string;
  /**
   * Optional per-page review date (ISO YYYY-MM-DD) that overrides the
   * site-wide LAST_REVIEWED. Use when a specific page (e.g. a state guide)
   * was hand-reviewed on a different date than the site default.
   */
  reviewedAt?: string;
}

export default function AuthorBlock({
  variant = "compact",
  handbookUrl,
  stateName,
  reviewedAt,
}: AuthorBlockProps) {
  const reviewIso = reviewedAt ?? LAST_REVIEWED;
  const reviewDate = formatReviewDate(reviewIso);

  if (variant === "compact") {
    return (
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm text-gray-600 mb-8 pb-6 border-b border-gray-100">
        <div>
          Maintained by{" "}
          <span className="font-medium text-gray-900">{AUTHOR_NAME}</span>.{" "}
          <Link href="/about" className="text-blue-600 hover:text-blue-800 underline">
            Read my story →
          </Link>
        </div>
        <div className="text-gray-500">
          Last reviewed: <time dateTime={reviewIso}>{reviewDate}</time>
        </div>
      </div>
    );
  }

  // Expanded variant for the bottom of the page
  return (
    <aside className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-12">
      <h3 className="font-bold text-gray-900 mb-2">About this guide</h3>
      <p className="text-gray-700 text-sm leading-relaxed mb-3">
        Maintained by <span className="font-medium">{AUTHOR_NAME}</span>, who
        was laid off in September 2025 and built The Layoff Guide because the
        official resources were inadequate exactly when people are most
        overwhelmed. <Link href="/about" className="text-blue-600 hover:text-blue-800 underline">Read the full story.</Link>
      </p>
      {handbookUrl && stateName && (
        <p className="text-gray-600 text-xs leading-relaxed mb-2">
          Verified against the{" "}
          <a
            href={handbookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-900"
          >
            official {stateName} unemployment handbook
          </a>{" "}
          and the state filing portal.
        </p>
      )}
      <p className="text-gray-500 text-xs">
        Last reviewed: <time dateTime={reviewIso}>{reviewDate}</time>.
        General information, not legal advice. Always confirm with your
        state&apos;s unemployment office.
      </p>
    </aside>
  );
}
