import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { states, getStateBySlug, getAllStateSlugs } from "@/data/states";
import DisqusComments from "@/components/DisqusComments";

export async function generateStaticParams() {
  return getAllStateSlugs().map((state) => ({ state }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state: slug } = await params;
  const state = getStateBySlug(slug);
  if (!state) return {};

  return {
    title: `How to File for Unemployment in ${state.name} (${state.abbreviation}) — ${new Date().getFullYear()} Guide`,
    description: `Step-by-step guide to filing for unemployment in ${state.name}. Max benefit: $${state.maxWeeklyBenefit}/week for up to ${state.maxWeeks} weeks. Eligibility, documents needed, and how to file online.`,
  };
}

export default async function StatePage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state: slug } = await params;
  const state = getStateBySlug(slug);

  if (!state) {
    notFound();
  }

  // Find neighboring states for navigation
  const allSlugs = getAllStateSlugs();
  const currentIndex = allSlugs.indexOf(slug);
  const prevState =
    currentIndex > 0 ? states[currentIndex - 1] : null;
  const nextState =
    currentIndex < states.length - 1 ? states[currentIndex + 1] : null;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">
          All States
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{state.name}</span>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          How to File for Unemployment in {state.name}
        </h1>
        <p className="text-lg text-gray-600">
          Everything you need to know about filing for unemployment benefits in{" "}
          {state.name} ({state.abbreviation}) — updated for{" "}
          {new Date().getFullYear()}.
        </p>
      </header>

      {/* Quick Facts Card */}
      <section className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-10">
        <h2 className="text-lg font-bold text-blue-900 mb-4">
          {state.name} Unemployment at a Glance
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <div className="text-sm text-gray-600">Max Weekly Benefit</div>
            <div className="text-xl font-bold text-blue-700">
              ${state.maxWeeklyBenefit}
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Max Weeks</div>
            <div className="text-xl font-bold text-blue-700">
              {state.maxWeeks} weeks
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Waiting Week</div>
            <div className="text-xl font-bold text-blue-700">
              {state.waitingWeek ? "Yes" : "No"}
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Max Total Benefits</div>
            <div className="text-xl font-bold text-blue-700">
              ${(state.maxWeeklyBenefit * state.maxWeeks).toLocaleString()}
            </div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-blue-200">
          <a
            href={state.filingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
          >
            File Online Now
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
          <span className="ml-4 text-sm text-gray-600">
            or call {state.filingPhone}
          </span>
        </div>
        {state.stateJobsUrl && (
          <div className="mt-4 pt-4 border-t border-blue-200">
            <a
              href={state.stateJobsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-700 font-medium hover:text-blue-900"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Browse {state.name} State Government Jobs &rarr;
            </a>
            <p className="text-xs text-gray-500 mt-1">
              State government jobs offer great benefits, job security, and pensions. Many don&apos;t require a degree.
            </p>
          </div>
        )}
      </section>

      {/* Ad Placeholder */}
      <div className="bg-gray-100 border border-dashed border-gray-300 rounded-lg p-4 mb-10 text-center text-sm text-gray-400">
        Advertisement
      </div>

      {/* Eligibility */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Am I Eligible for Unemployment in {state.name}?
        </h2>
        <p className="text-gray-600 mb-4">{state.minEarnings}</p>
        <p className="text-gray-700 mb-3">
          To qualify for unemployment benefits in {state.name}, you must meet
          these requirements:
        </p>
        <ul className="space-y-2">
          {state.eligibility.map((req, i) => (
            <li key={i} className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-green-600 mt-0.5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">{req}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* How to File */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          How to File for Unemployment in {state.name} — Step by Step
        </h2>
        <ol className="space-y-4">
          {state.howToFile.map((step, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-sm shrink-0">
                {i + 1}
              </span>
              <span className="text-gray-700 pt-1">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Documents Needed */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Documents You&apos;ll Need
        </h2>
        <p className="text-gray-600 mb-4">
          Have these ready before you start filing. It&apos;ll save you time and
          frustration:
        </p>
        <ul className="space-y-2">
          {state.documentsNeeded.map((doc, i) => (
            <li key={i} className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-gray-400 mt-0.5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span className="text-gray-700">{doc}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Ad Placeholder */}
      <div className="bg-gray-100 border border-dashed border-gray-300 rounded-lg p-4 mb-10 text-center text-sm text-gray-400">
        Advertisement
      </div>

      {/* Common Mistakes */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Common Mistakes to Avoid
        </h2>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <ul className="space-y-3">
            {state.commonMistakes.map((mistake, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-red-500 mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.834-1.964-.834-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
                <span className="text-gray-700">{mistake}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Processing Time */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          How Long Does It Take?
        </h2>
        <p className="text-gray-700">{state.processingTime}</p>
      </section>

      {/* FAQ with Schema Markup */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {state.faq.map((item, i) => (
            <details
              key={i}
              className="group border border-gray-200 rounded-lg"
            >
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 font-medium text-gray-900 hover:bg-gray-50">
                {item.question}
                <svg
                  className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-gray-700">{item.answer}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Tips from People Who've Been Through It */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Tips from People Who&apos;ve Been Through It
        </h2>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-green-600 text-lg shrink-0">&ldquo;</span>
            <p className="text-gray-700">
              <strong>File even if you&apos;re not sure you qualify.</strong>{" "}
              You might be surprised. The worst that can happen is you get denied,
              and you&apos;ll at least know where you stand.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-600 text-lg shrink-0">&ldquo;</span>
            <p className="text-gray-700">
              <strong>Be honest on every certification.</strong>{" "}
              States cross-check your information with hospitals, jails, the IRS,
              and other agencies. Misrepresenting your availability or earnings
              can result in overpayment penalties and fraud charges.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-600 text-lg shrink-0">&ldquo;</span>
            <p className="text-gray-700">
              <strong>Don&apos;t forget to sign up for SNAP (food benefits).</strong>{" "}
              Most states are very lenient with eligibility when you&apos;re
              unemployed. It&apos;s one less thing to worry about while you get back
              on your feet.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-600 text-lg shrink-0">&ldquo;</span>
            <p className="text-gray-700">
              <strong>If you get denied, don&apos;t miss the appeal deadline.</strong>{" "}
              You typically have 10-30 days to file an appeal depending on your state.
              If you file late without a documented compelling reason, your case
              cannot be heard — no matter how strong it is. Read your denial letter
              carefully and note every deadline.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-600 text-lg shrink-0">&ldquo;</span>
            <p className="text-gray-700">
              <strong>Read your state&apos;s claimant handbook before filing.</strong>{" "}
              Every state publishes one. It covers monetary requirements, eligibility
              rules, and your rights. Understanding these upfront can save you weeks
              of confusion.
            </p>
          </div>
        </div>
      </section>

      {/* Take Action / Advocacy */}
      {state.advocacy && state.advocacy.length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Take Action
          </h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 space-y-4">
            {state.advocacy.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-amber-600 mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </svg>
                <div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-amber-800 hover:text-amber-900 underline"
                  >
                    {item.title}
                  </a>
                  <p className="text-gray-700 text-sm mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
            <p className="text-xs text-gray-500 mt-2">
              Know of a petition or advocacy effort in {state.name}?{" "}
              <Link href="/community" className="text-blue-600 hover:underline">
                Share it in our community forum
              </Link>.
            </p>
          </div>
        </section>
      )}

      {/* Handbook Link */}
      {state.handbookUrl && (
        <section className="mb-10">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-gray-900">
                Official {state.name} Unemployment Handbook
              </h3>
              <p className="text-sm text-gray-600">
                Download the full official guide from {state.name}&apos;s
                unemployment office.
              </p>
            </div>
            <a
              href={state.handbookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors"
            >
              Download PDF
            </a>
          </div>
        </section>
      )}

      {/* FAQ Schema for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: state.faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />

      {/* Disqus Comments */}
      <DisqusComments
        identifier={`state-${state.slug}`}
        title={`Unemployment in ${state.name}`}
      />

      {/* State Navigation */}
      <nav className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200">
        {prevState ? (
          <Link
            href={`/${prevState.slug}`}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            &larr; {prevState.name}
          </Link>
        ) : (
          <div />
        )}
        <Link href="/" className="text-gray-500 hover:text-gray-700 text-sm">
          All States
        </Link>
        {nextState ? (
          <Link
            href={`/${nextState.slug}`}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            {nextState.name} &rarr;
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </div>
  );
}
