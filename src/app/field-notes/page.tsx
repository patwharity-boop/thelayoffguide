import type { Metadata } from "next";
import Link from "next/link";
import { getAllNotes } from "@/data/fieldNotes";
import { getStateBySlug } from "@/data/states";
import AuthorBlock from "@/components/AuthorBlock";

export const metadata: Metadata = {
  title: "Field Notes: Tactical Tips for Filing Unemployment in Your State",
  description:
    "Short, specific tips from filing unemployment in all 50 states. Portal quirks, phone strategy, cert timing, severance interaction, and what to do when the system breaks. Updated as we learn more.",
};

const SOURCE_LABELS: Record<string, string> = {
  personal: "From Patrick's experience",
  community: "Reader-submitted",
  official: "From the official handbook",
  research: "Researched",
};

const SOURCE_BADGE_COLORS: Record<string, string> = {
  personal: "bg-teal-50 text-teal-800 border-teal-200",
  community: "bg-purple-50 text-purple-800 border-purple-200",
  official: "bg-blue-50 text-blue-800 border-blue-200",
  research: "bg-gray-50 text-gray-700 border-gray-200",
};

export default function FieldNotesIndexPage() {
  const notes = getAllNotes();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">
          All States
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Field Notes</span>
      </nav>

      <AuthorBlock variant="compact" />

      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Field Notes
        </h1>
        <p className="text-lg text-gray-600">
          Specific, tactical tips from actually filing for unemployment.
          Portal quirks. Phone strategy. Cert timing. State-specific edge
          cases that the official handbooks bury or miss. Pinned tips work
          across every state; the rest are state-tagged and surface
          automatically on the relevant state guide.
        </p>
      </header>

      <p className="text-sm text-gray-600 mb-8">
        Showing <strong>{notes.length}</strong> notes across all 50 states.
        Pinned notes appear first; the rest are sorted by date.
      </p>

      <div className="space-y-5">
        {notes.map((note) => (
          <article
            key={note.id}
            id={`note-${note.id}`}
            className="bg-white border border-gray-200 rounded-lg p-5 hover:border-gray-300 transition-colors scroll-mt-8"
          >
            <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
              <h2 className="text-lg font-bold text-gray-900">
                {note.pinned && (
                  <span
                    aria-label="Pinned"
                    title="Pinned tip, applies to every state"
                    className="text-amber-500 mr-1"
                  >
                    ★
                  </span>
                )}
                {note.title}
              </h2>
              <span
                className={`inline-flex items-center text-xs font-medium px-2 py-0.5 rounded-full border ${
                  SOURCE_BADGE_COLORS[note.source] ??
                  "bg-gray-50 text-gray-700 border-gray-200"
                }`}
              >
                {SOURCE_LABELS[note.source] ?? note.source}
              </span>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              {note.body}
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-1 items-center text-xs text-gray-500">
              <time dateTime={note.publishedAt}>
                {new Date(note.publishedAt + "T00:00:00Z").toLocaleDateString(
                  "en-US",
                  { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" }
                )}
              </time>
              {note.sourceUrl && (
                <>
                  <span aria-hidden>·</span>
                  <a
                    href={note.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-gray-700"
                  >
                    Source
                  </a>
                </>
              )}
              {note.states.length > 0 && note.states.length < 10 && (
                <>
                  <span aria-hidden>·</span>
                  <span>
                    Applies to:{" "}
                    {note.states.map((slug, i) => {
                      const s = getStateBySlug(slug);
                      const label = s?.name ?? slug;
                      return (
                        <span key={slug}>
                          <Link
                            href={`/${slug}#note-${note.id}`}
                            className="text-blue-700 hover:text-blue-900 underline"
                          >
                            {label}
                          </Link>
                          {i < note.states.length - 1 ? ", " : ""}
                        </span>
                      );
                    })}
                  </span>
                </>
              )}
              {note.states.length >= 10 && (
                <>
                  <span aria-hidden>·</span>
                  <span>Applies to {note.states.length} states</span>
                </>
              )}
            </div>
          </article>
        ))}
      </div>

      <section className="mt-12 bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-2">
          Have a tip we should add?
        </h2>
        <p className="text-sm text-gray-700">
          Field notes are stronger when they come from people who just lived
          through it. If you have a specific tactic, a portal quirk, a phone
          shortcut, or a state-specific gotcha that saved you time or money,
          send it along (email TBD). Notes go through editorial review before
          publishing.
        </p>
      </section>
    </div>
  );
}
