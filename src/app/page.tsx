import Link from "next/link";
import TrackedLink from "@/components/TrackedLink";
import { states } from "@/data/states";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "How to File for Unemployment in Your State (All 50, Free, 2026)",
  description:
    "Free unemployment filing guide for all 50 states. Plain-English instructions, interactive benefit estimator, personal claim tracker, and field notes from people who've been through it.",
  path: "/",
});

export default function HomePage() {
  const grouped = states.reduce(
    (acc, state) => {
      const letter = state.name[0];
      if (!acc[letter]) acc[letter] = [];
      acc[letter].push(state);
      return acc;
    },
    {} as Record<string, typeof states>
  );

  const sortedLetters = Object.keys(grouped).sort();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          How to File for Unemployment in Your State
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Hi, I&apos;m Patrick. I lost my job in September 2025 and built this
          site so you wouldn&apos;t have to learn the hard way. Pick your state
          below to get started.
        </p>
      </section>

      {/* Quick Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-700">50</div>
          <div className="text-sm text-gray-600">State Guides</div>
        </div>
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-700">$235–$1,208</div>
          <div className="text-sm text-gray-600">Max Weekly Range</div>
        </div>
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-700">12–28</div>
          <div className="text-sm text-gray-600">Weeks of Benefits</div>
        </div>
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-700">2026</div>
          <div className="text-sm text-gray-600">Updated Data</div>
        </div>
      </section>

      {/* Why this guide exists */}
      <section className="mb-12 bg-white border border-gray-200 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Built by Someone Who&apos;s Been There
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            I lost my job in tech in September 2025. I&apos;d never filed for
            unemployment before, and the official state website was a confusing
            mess of government jargon, broken links, and PDFs from 2019. I
            missed the &ldquo;waiting week&rdquo; certification because nobody
            told me to click a button, that mistake cost me{" "}
            <strong>three weeks</strong> of zero income.
          </p>
          <p>
            The advice that finally helped wasn&apos;t on any official site. It
            came from a Reddit comment buried in a thread. A stranger who&apos;d
            been through it took the time to write down what they wished
            someone had told them on day one.
          </p>
          <p>
            That same kind of help is now collected in one place on this site
            as{" "}
            <Link
              href="/field-notes"
              className="text-blue-700 hover:text-blue-900 underline"
            >
              Field Notes
            </Link>
            : short, specific tips from filing in each state. Portal quirks,
            phone strategy, cert timing, the small things that cost real money
            when you miss them.
          </p>
          <p>
            <strong>The Layoff Guide is what I wish existed when it happened
            to me.</strong> Every state guide on this site explains the rules
            in plain English, lists the exact documents you need, and flags
            the state-specific mistakes that cost real people real money.
            Pick your state below to get started.
          </p>
        </div>
      </section>

      {/* How states differ */}
      <section className="mb-12 bg-white border border-gray-200 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Unemployment Benefits Vary Wildly by State
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            The state where you live can mean a difference of more than{" "}
            <strong>$25,000</strong> in total benefits. Washington claimants
            can collect $1,208/week for 26 weeks (a max of $31,408). Mississippi
            claimants cap out at $235/week (a max of $6,110 over the same
            period). Florida and North Carolina cut payment off after just 12
            weeks regardless of your earnings.
          </p>
          <p>
            Filing systems differ too. Some states pay from your first eligible
            week (Connecticut, Iowa, New Jersey, New York). Most require a
            one-week unpaid waiting period. Some require weekly certification,
            others biweekly. Some force you to register on a separate workforce
            portal before they&apos;ll release benefits, and they don&apos;t
            tell you about it until your first payment doesn&apos;t arrive.
          </p>
          <p>
            Each of our 50 state guides covers the eligibility thresholds,
            filing portal, certification cadence, work search requirements,
            and state-specific traps that catch first-time claimants.
          </p>
        </div>
      </section>

      {/* What to do first */}
      <section className="mb-12 bg-white border border-gray-200 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          What to Do in the First 72 Hours
        </h2>
        <ol className="space-y-3 text-gray-700 leading-relaxed list-decimal list-inside">
          <li>
            <strong>File for unemployment today, not tomorrow.</strong>{" "}
            Almost no state backdates claims. Your benefits start the Sunday of
            the week you file. Every day you wait is benefit days lost. Not
            sure if you qualify?{" "}
            <Link
              href="/eligibility"
              className="text-blue-700 hover:text-blue-900 underline"
            >
              Take the 1-minute eligibility quiz
            </Link>
            .
          </li>
          <li>
            <strong>Don&apos;t sign anything from your employer yet.</strong>{" "}
            Severance agreements, non-competes, and separation letters often
            give you 21-45 days to review. Read carefully before signing, once
            signed, you may have given up rights you needed.
          </li>
          <li>
            <strong>Grab your records before you lose access.</strong>{" "}
            Pay stubs, employer contact info, performance reviews, and
            separation paperwork. You&apos;ll need them for both unemployment
            and your job search.
          </li>
          <li>
            <strong>Apply for health insurance via Healthcare.gov.</strong>{" "}
            Job loss is a qualifying life event. The Marketplace plan is
            usually cheaper than COBRA, and you have 60 days to decide.
          </li>
          <li>
            <strong>Register on your state&apos;s workforce portal.</strong>{" "}
            Most states require this separately from filing. They won&apos;t
            release benefits until you&apos;re registered. Check your state
            guide below. For a realistic week-by-week sense of what comes next,
            see the{" "}
            <Link
              href="/timeline"
              className="text-blue-700 hover:text-blue-900 underline"
            >
              unemployment timeline guide
            </Link>
            .
          </li>
        </ol>
      </section>

      {/* Compare-by-state callout */}
      <section className="mb-12">
        <Link
          href="/compare"
          className="block bg-blue-50 border border-blue-200 rounded-lg p-5 hover:bg-blue-100 transition-colors group"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-bold text-gray-900 mb-1">
                See all 50 states ranked by max weekly benefit
              </h3>
              <p className="text-sm text-gray-700">
                From $235/wk in Mississippi to $1,208/wk in Washington. Sort
                by weekly amount, weeks of duration, or total payout. Updated
                for 2026.
              </p>
            </div>
            <span className="text-blue-700 group-hover:translate-x-1 transition-transform shrink-0 mt-2">
              →
            </span>
          </div>
        </Link>
      </section>

      {/* State List */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Select Your State
        </h2>

        {sortedLetters.map((letter) => (
          <div key={letter} className="mb-6">
            <h3 className="text-lg font-semibold text-gray-400 mb-2">
              {letter}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {grouped[letter].map((state) => (
                <TrackedLink
                  key={state.slug}
                  href={`/${state.slug}`}
                  event="state_guide_click"
                  eventProps={{ state: state.slug }}
                  className="flex items-center justify-between rounded-lg border border-gray-200 px-4 py-3 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">
                    {state.name}
                  </span>
                  <span className="text-sm text-gray-500">
                    Up to ${state.maxWeeklyBenefit}/wk
                  </span>
                </TrackedLink>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Bottom Info */}
      <section className="mt-12 bg-gray-50 rounded-lg p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          What You Need to Know
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            <strong>File immediately.</strong> In most states, your benefits
            start the week you file, not when you lost your job. Every week you
            wait is money left on the table.
          </p>
          <p>
            <strong>You probably qualify.</strong> If you were laid off,
            downsized, or let go due to business reasons, you almost certainly
            qualify. Even if you were fired (not for misconduct), you may still
            be eligible.
          </p>
          <p>
            <strong>It&apos;s your money.</strong> Your employer paid into the
            unemployment insurance fund on your behalf. Filing for benefits
            isn&apos;t charity, it&apos;s insurance you&apos;ve already paid
            for.
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "The Layoff Guide",
              url: "https://www.thelayoffguide.com",
              description:
                "Free unemployment filing guide for all 50 states. Plain-English instructions, benefit estimator, claim tracker, and field notes from people who've been through it.",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.thelayoffguide.com/compare?state={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "The Layoff Guide",
              url: "https://www.thelayoffguide.com",
              logo: "https://www.thelayoffguide.com/logo.png",
              sameAs: [],
              description:
                "Independent unemployment-filing reference site built by someone who went through a layoff. Not affiliated with any government agency.",
            },
          ]),
        }}
      />
    </div>
  );
}
