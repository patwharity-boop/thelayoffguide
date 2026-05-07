import Link from "next/link";
import { getTopNotesForState } from "@/data/fieldNotes";

interface FieldNotesForStateProps {
  stateSlug: string;
  stateName: string;
  /** How many notes to surface. Default 3. */
  limit?: number;
}

const SOURCE_LABELS: Record<string, string> = {
  personal: "From Patrick's experience",
  community: "Reader-submitted",
  official: "From the official handbook",
  research: "Researched",
};

export default function FieldNotesForState({
  stateSlug,
  stateName,
  limit = 3,
}: FieldNotesForStateProps) {
  const notes = getTopNotesForState(stateSlug, limit);

  if (notes.length === 0) {
    return (
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Field Notes for {stateName}
        </h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
          <p className="text-gray-700">
            No field notes for {stateName} yet. Have a tip from your own
            filing experience?{" "}
            <Link
              href="/field-notes"
              className="text-blue-700 hover:text-blue-900 underline"
            >
              See all field notes →
            </Link>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-10">
      <div className="flex items-baseline justify-between mb-4 flex-wrap gap-2">
        <h2 className="text-2xl font-bold text-gray-900">
          Field Notes for {stateName}
        </h2>
        <Link
          href="/field-notes"
          className="text-sm text-blue-700 hover:text-blue-900 underline"
        >
          See all field notes →
        </Link>
      </div>

      <div className="space-y-4">
        {notes.map((note) => (
          <article
            key={note.id}
            id={`note-${note.id}`}
            className="bg-white border border-gray-200 rounded-lg p-5 hover:border-gray-300 transition-colors"
          >
            <h3 className="font-bold text-gray-900 mb-2">{note.title}</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              {note.body}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 items-center text-xs text-gray-500">
              <span>
                {SOURCE_LABELS[note.source] ?? note.source}
              </span>
              <span aria-hidden>·</span>
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
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
