import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Post-Layoff Budget Template — Google Sheets / Excel",
  description:
    "Free budget planner template for after a layoff. T-chart format: must-pay vs can-cut expenses, runway calculator, and action checklist. Download as CSV for Google Sheets or Excel.",
};

export default function BudgetTemplatePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/resources" className="hover:text-blue-600">
          Resources
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Budget Template</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Free Post-Layoff Budget Planner
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Know your numbers, kill the panic. This template helps you figure out
        exactly where you stand financially — in about 15 minutes.
      </p>

      {/* Download Card */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-10 text-center">
        <h2 className="text-xl font-bold text-blue-900 mb-3">
          Download the Template
        </h2>
        <p className="text-gray-600 mb-6">
          CSV file — open in Google Sheets, Excel, or Numbers. Fill in your
          numbers and see your runway instantly.
        </p>
        <a
          href="/layoff-budget-template.csv"
          download
          className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-blue-800 transition-colors"
        >
          Download Budget Template
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </a>
        <p className="text-sm text-gray-500 mt-4">
          To use in Google Sheets: Download → Go to Google Sheets → File →
          Import → Upload the CSV
        </p>
      </div>

      {/* What's Inside */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          What&apos;s Inside
        </h2>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-1">
              Step 1: Your Runway
            </h3>
            <p className="text-gray-600">
              Add up your savings, severance, unemployment benefits, and any
              other income. This is your fuel tank.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-1">
              Step 2: The T-Chart
            </h3>
            <p className="text-gray-600">
              Two columns: &ldquo;Must Pay&rdquo; (rent, utilities, groceries)
              vs &ldquo;Can Cut&rdquo; (subscriptions, dining out, gym). See
              exactly where your money goes and what you can eliminate today.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-1">
              Step 3: Your Numbers
            </h3>
            <p className="text-gray-600">
              The template calculates your monthly surplus or shortfall, and
              tells you exactly how many months of runway you have. Knowledge
              kills panic.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-1">
              Step 4: Action Checklist
            </h3>
            <p className="text-gray-600">
              A checkbox list of everything you should do ASAP — file for
              unemployment, apply for SNAP, review health insurance, call
              creditors about hardship programs, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Ad Placeholder */}
      <div className="bg-gray-100 border border-dashed border-gray-300 rounded-lg p-4 mb-10 text-center text-sm text-gray-400">
        Advertisement
      </div>

      {/* Tips */}
      <section className="bg-green-50 border border-green-200 rounded-lg p-6 mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Pro Tips
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold shrink-0">1.</span>
            <span>
              <strong>Do this with your partner</strong> if you have one. Being
              on the same page financially reduces stress for both of you.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold shrink-0">2.</span>
            <span>
              <strong>Call every subscription</strong> and ask to cancel or
              pause. Most will let you pause for 1-3 months. That&apos;s free
              money.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold shrink-0">3.</span>
            <span>
              <strong>Call your credit card companies</strong> and ask about
              hardship programs. Most will lower your rate or let you skip
              payments temporarily. They&apos;d rather work with you than send
              you to collections.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold shrink-0">4.</span>
            <span>
              <strong>Apply for SNAP immediately.</strong> If your income just
              dropped to zero, you almost certainly qualify. That&apos;s $200-400/month
              off your grocery bill. See our{" "}
              <Link
                href="/resources"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Resources page
              </Link>{" "}
              for links.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold shrink-0">5.</span>
            <span>
              <strong>You probably have more runway than you think.</strong>{" "}
              Once you add unemployment benefits and cut discretionary spending,
              most people find they have 3-6 months before things get truly
              tight.
            </span>
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center">
        <p className="text-gray-600 mb-4">
          Ready to file for unemployment? Find your state guide:
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
        >
          Find Your State
        </Link>
      </section>
    </div>
  );
}
