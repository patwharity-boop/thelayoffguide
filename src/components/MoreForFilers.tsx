import Link from "next/link";

type Article = {
  slug: string;
  title: string;
  blurb: string;
};

const ARTICLES: Article[] = [
  {
    slug: "/blog/file-for-unemployment-today",
    title: "File for Unemployment Today: Here's Exactly How",
    blurb:
      "The same-day playbook. 15 to 30 minutes, step by step, with the mistakes to avoid.",
  },
  {
    slug: "/blog/severance-and-unemployment",
    title: "Got Severance? Here's How It Actually Affects Your Unemployment",
    blurb:
      "Severance doesn't cancel your unemployment, but it can delay when payments start. Rules vary by state.",
  },
  {
    slug: "/timeline",
    title: "How Long Does Unemployment Take? Realistic Timeline by Week",
    blurb:
      "What actually happens between filing and your first payment. Statutory promises vs lived reality.",
  },
  {
    slug: "/blog/employer-contests-claim",
    title: "What to Do When Your Employer Contests Your Claim",
    blurb:
      "Don't panic. Here's how the appeal process works and how to win.",
  },
  {
    slug: "/blog/calling-unemployment-office",
    title: "I Spent 8 Hours Calling the Unemployment Office. Here's What Works.",
    blurb:
      "The Governor's office trick and other strategies that actually get a human on the line.",
  },
  {
    slug: "/blog/first-30-days-playbook",
    title: "The First 30 Days After a Layoff: A Day-by-Day Playbook",
    blurb:
      "Complete day-by-day guide for your first month after losing your job.",
  },
  {
    slug: "/blog/ai-layoffs-2026",
    title: "Laid Off Because of AI? What the Data Shows and What to Do",
    blurb:
      "AI became the most-cited reason for US layoffs in early 2026. Which roles are vulnerable, what's actually hiring, and where to pivot.",
  },
  {
    slug: "/blog/warn-act-guide",
    title: "WARN Act Notice: What a 60-Day Advance Layoff Notice Actually Means",
    blurb:
      "Got a WARN notice? What the 60-day federal notice requires, the exceptions employers use, and how to use the window.",
  },
  {
    slug: "/blog/employer-relocation-unemployment",
    title: "Can You Collect Unemployment If Your Company Moves and You Can't Follow?",
    blurb:
      "Your employer is relocating and you can't move. Is that a layoff or a voluntary quit? How states decide.",
  },
  {
    slug: "/blog/negotiate-with-creditors-after-layoff",
    title: "How to Negotiate With Creditors Before You Miss a Payment",
    blurb:
      "Call your mortgage servicer and credit card company before you fall behind, not after. What to say and what to avoid.",
  },
];

export default function MoreForFilers({ stateName }: { stateName: string }) {
  return (
    <section className="mb-10 mt-12 pt-10 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        More for {stateName} filers
      </h2>
      <p className="text-gray-600 mb-6">
        The next questions most people have after their state page.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ARTICLES.map((a) => (
          <Link
            key={a.slug}
            href={a.slug}
            className="block border border-gray-200 rounded-lg p-5 hover:border-blue-300 hover:bg-blue-50/30 transition-colors"
          >
            <h3 className="font-bold text-gray-900 mb-2 hover:text-blue-700">
              {a.title}
            </h3>
            <p className="text-sm text-gray-600">{a.blurb}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
