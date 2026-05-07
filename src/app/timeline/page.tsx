import type { Metadata } from "next";
import Link from "next/link";
import AuthorBlock from "@/components/AuthorBlock";
import {
  AUTHOR_ID,
  AUTHOR_NAME,
  AUTHOR_DESCRIPTION,
  LAST_REVIEWED,
  SITE_URL,
} from "@/data/site";

export const metadata: Metadata = {
  title:
    "How Long Does Unemployment Take? Realistic Timeline by Week (2026)",
  description:
    "What actually happens between filing and your first unemployment payment. Realistic week-by-week timeline (file, waiting week, first cert, first payment, weeks 4-8, wind-down) with the gap between statutory promises and lived reality.",
};

export default function TimelinePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">
          All States
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Timeline</span>
      </nav>

      <AuthorBlock variant="compact" />

      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          How Long Does Unemployment Take?
        </h1>
        <p className="text-lg text-gray-600">
          The honest version. State websites quote &ldquo;21 days&rdquo;
          because that&apos;s what the federal Department of Labor sets as the
          standard. Lived reality is usually 4 to 10 weeks for the first
          payment, with significant variation by state, claim type, and
          whether anything triggers an &ldquo;adjudication&rdquo; review. This
          page walks through what actually happens at each stage and what to
          do when something stalls.
        </p>
      </header>

      <section className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-10">
        <h2 className="font-bold text-gray-900 mb-2">The honest summary</h2>
        <ul className="text-sm text-gray-800 leading-relaxed space-y-2">
          <li>
            <strong>Statutory target:</strong> 21 calendar days from filing to
            first payment, per US Department of Labor performance standards.
          </li>
          <li>
            <strong>Median lived reality:</strong> 3 to 4 weeks in well-run
            states (Iowa, Oregon, Washington), 5 to 8 weeks in average states,
            and 8 to 16+ weeks in known-broken systems (Florida, sometimes
            Texas, sometimes California).
          </li>
          <li>
            <strong>The gap is mostly &ldquo;adjudication.&rdquo;</strong> If
            anything about your claim flags a manual review (employer
            disputed, identity verification, separation reason, base period
            edge case), the clock stops on the statutory timeline and starts
            on the much longer adjudication queue.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Week-by-week, what actually happens
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Days are counted from your filing date. The exact rhythm varies by
          state, but the broad shape holds nearly everywhere.
        </p>

        <Phase
          when="Day 1, the day you file"
          tier="action"
          title="File your claim"
          body={
            <>
              <p>
                File the same day you separate, or as soon after as you can.
                Most states&apos; benefits start the Sunday of the week you
                file, not the day you lost your job. Days you delay are
                benefit days lost.
              </p>
              <p>
                Filing creates your claim record. The state sends notices to
                your most recent employer asking them to confirm or contest
                the separation. Until they respond (and the state processes
                the response), your claim is technically pending.
              </p>
            </>
          }
          actions={[
            "Pick your state below and use the official filing portal.",
            "Have ready: SSN, photo ID, last 18 months of employer info, and bank info for direct deposit.",
            "Save a screenshot or PDF of your filing confirmation.",
          ]}
        />

        <Phase
          when="Days 2 to 7, week 1"
          tier="wait"
          title="The waiting week"
          body={
            <>
              <p>
                Most states impose a one-week unpaid waiting period before
                paid benefits begin. Even if you&apos;re fully eligible, this
                first week of your claim is unpaid. <strong>You still need
                to certify it.</strong> Missing the waiting-week cert is the
                single most common reason for a 1 to 3 week delay in the
                first real payment.
              </p>
              <p>
                A handful of states have no waiting week (Connecticut, Iowa,
                New Jersey, New York). In those states, paid benefits begin
                the first eligible week.
              </p>
            </>
          }
          actions={[
            "File the waiting-week certification on the Sunday after you filed (or your state's specific cert day).",
            "Register on the state's separate workforce portal if it requires one. Most do, and most freeze your claim until you complete it.",
            "Start logging work-search activities. Many states audit these.",
          ]}
        />

        <Phase
          when="Days 8 to 14, week 2"
          tier="wait"
          title="First paid certification"
          body={
            <>
              <p>
                If you served the waiting week, this is the first week that
                actually generates a payment, assuming the state has approved
                your monetary determination and there are no flags on the
                claim. The certification window opens the Sunday morning of
                the week ending and stays open about 7 days. Miss the
                deadline and you forfeit the week.
              </p>
              <p>
                Cert questions vary, but most ask: were you able and
                available, did you actively search, did you earn any wages,
                did you turn down any suitable work. <strong>Read each
                question slowly.</strong> A wrong answer can pause the entire
                claim and trigger an eligibility review that takes weeks to
                resolve.
              </p>
            </>
          }
          actions={[
            "Cert as early as the window opens, not on the deadline. Last-minute cert leaves no recovery time if the system errors.",
            "If a question wording confuses you, look it up before answering. Most state portals provide no clarification or undo.",
            "Keep your work-search log up to date in case of audit.",
          ]}
        />

        <Phase
          when="Days 15 to 21, week 3"
          tier="watch"
          title="The first payment, ideally"
          body={
            <>
              <p>
                In a clean claim, your first payment lands 14 to 21 days after
                filing, often on the Tuesday or Wednesday after your first
                paid cert clears. Direct deposit hits 1 to 2 business days
                after the state issues the payment; debit cards take 7 to 10
                days to arrive in the mail and then load each cycle.
              </p>
              <p>
                <strong>If nothing arrives by day 21:</strong> your claim has
                probably been routed to adjudication. The state portal may or
                may not show a status; often the only signal is silence. The
                statutory clock no longer applies; you&apos;re now in the
                manual-review queue.
              </p>
            </>
          }
          actions={[
            "Check your state portal daily during this window for status changes.",
            "If your payment is late, look for a determination letter in the mail. Many states only notify by paper, and the mail is the fastest way to find out you've been denied or flagged.",
            "If nothing has changed by day 25, call the state UI office. Best times are 8am to 9am local, in the office's time zone.",
          ]}
        />

        <Phase
          when="Weeks 4 to 8"
          tier="watch"
          title="The adjudication black hole, if applicable"
          body={
            <>
              <p>
                If your claim hit a flag, this is where the wait happens.
                Common flags: employer disputed the separation, base period
                wages don&apos;t match what was reported, identity
                verification needed, you reported part-time wages, you missed
                a cert. Each flag routes the claim to a human reviewer.
                Adjudication queues run 4 to 16+ weeks depending on the state
                and the flag type.
              </p>
              <p>
                During adjudication, you should still cert weekly. Skipping
                certs because the claim is &ldquo;on hold&rdquo; will lose
                you those weeks even if the adjudication eventually resolves
                in your favor. Adjudicators retroactively pay all certified
                weeks once they clear the claim.
              </p>
            </>
          }
          actions={[
            "Continue certifying every week without exception, even if the portal shows $0 expected.",
            "Document every interaction with the state (call dates, agent names, reference numbers).",
            "If adjudication exceeds 4 weeks with no contact, escalate. The Governor's constituent services line in every state will route urgent UI cases to the agency's escalation queue. This is the single most effective workaround.",
          ]}
        />

        <Phase
          when="Weeks 9 onward"
          tier="action"
          title="Active claim"
          body={
            <>
              <p>
                Past the worst of the bureaucratic friction. Cert every week,
                log work-search activities, and watch for state notices. Most
                claims now run on autopilot until benefits exhaust or you find
                work.
              </p>
              <p>
                Around weeks 6 to 8 of an active claim, a normal checkpoint
                emerges: your savings buffer is starting to thin, your
                interview pipeline reflects whatever effort you put in during
                weeks 1 to 4, and the emotional weight of the layoff is real.
                None of that means you&apos;re failing. Most jobseekers in
                2026&apos;s tech and services markets need 4 to 6 months. The
                math is hard for nearly everyone.
              </p>
            </>
          }
          actions={[
            "If you take part-time work, report the wages every cert. Underreporting triggers fraud penalties and overpayment claims.",
            "Revisit your COBRA-vs-marketplace decision at month 2 of unemployment. The marketplace special enrollment period gives you 60 days from job loss; many people miss it.",
            "If you've been on the claim 8+ weeks with no offers, consider broadening your search: adjacent industries, lower job titles for income now plus stretch goals later, contract roles to bridge.",
          ]}
        />

        <Phase
          when="Last 2 to 4 weeks of benefits"
          tier="watch"
          title="Wind-down"
          body={
            <>
              <p>
                Most state benefits cap at 26 weeks. A few are shorter (12 in
                Florida and North Carolina; 14 in Kansas; 16 in Iowa,
                Michigan, Arkansas). Once you near the cap, plan the
                wind-down before the last week, not after.
              </p>
              <p>
                Federal extension programs (PEUC, Extended Benefits) only
                activate during specific economic conditions. As of 2026,
                most states are not in active extension territory; check your
                state&apos;s current programs.
              </p>
            </>
          }
          actions={[
            "Confirm your final payment date and benefits-remaining number with the state portal.",
            "Lock in health insurance ahead of the cliff, ACA SEP windows are usually 60 days from coverage loss.",
            "Re-check your safety-net programs (SNAP, Medicaid, utility assistance) for renewals.",
            "If you haven't filed your taxes for the year, your unemployment payments are taxable income. Watch for a 1099-G in January.",
          ]}
        />
      </section>

      <section className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-10">
        <h2 className="text-lg font-bold text-gray-900 mb-2">
          See your specific timeline
        </h2>
        <p className="text-sm text-gray-700 mb-3">
          The above is the generic shape. To see what week you&apos;re in
          right now and the next milestones for your specific filing date and
          state, use the personal claim tracker. All data stays in your
          browser.
        </p>
        <div className="flex flex-wrap gap-3 text-sm">
          <Link
            href="/my-claim"
            className="text-blue-700 hover:text-blue-900 underline font-medium"
          >
            Open my personal claim tracker →
          </Link>
          <Link
            href="/eligibility"
            className="text-blue-700 hover:text-blue-900 underline"
          >
            Check eligibility →
          </Link>
          <Link
            href="/"
            className="text-blue-700 hover:text-blue-900 underline"
          >
            Pick a state →
          </Link>
        </div>
      </section>

      <AuthorBlock variant="expanded" />

      {/* Article schema for the timeline hub */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "How Long Does Unemployment Take? Realistic Timeline by Week",
            description:
              "Realistic week-by-week timeline of a US unemployment claim, from filing through first payment, the adjudication black hole, active claim, and wind-down.",
            url: `${SITE_URL}/timeline`,
            datePublished: LAST_REVIEWED,
            dateModified: LAST_REVIEWED,
            author: {
              "@type": "Person",
              "@id": AUTHOR_ID,
              name: AUTHOR_NAME,
              description: AUTHOR_DESCRIPTION,
              url: `${SITE_URL}/about`,
            },
            publisher: {
              "@type": "Organization",
              name: "The Layoff Guide",
              url: SITE_URL,
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${SITE_URL}/timeline`,
            },
          }),
        }}
      />
    </div>
  );
}

type PhaseTier = "action" | "wait" | "watch";

const TIER_BAND: Record<PhaseTier, string> = {
  action: "border-blue-400 bg-blue-50",
  wait: "border-amber-400 bg-amber-50",
  watch: "border-orange-400 bg-orange-50",
};

const TIER_LABEL: Record<PhaseTier, string> = {
  action: "Take action",
  wait: "Wait, but cert",
  watch: "Watch, escalate if needed",
};

function Phase({
  when,
  tier,
  title,
  body,
  actions,
}: {
  when: string;
  tier: PhaseTier;
  title: string;
  body: React.ReactNode;
  actions: string[];
}) {
  return (
    <article
      className={`mb-6 border-l-4 rounded-r-lg p-5 ${TIER_BAND[tier]}`}
    >
      <div className="flex items-baseline justify-between gap-3 mb-2 flex-wrap">
        <div>
          <div className="text-xs uppercase tracking-wide text-gray-600 font-medium">
            {when}
          </div>
          <h3 className="text-lg font-bold text-gray-900 mt-1">{title}</h3>
        </div>
        <span className="text-xs uppercase font-medium tracking-wide text-gray-700 bg-white px-2 py-1 rounded border border-gray-200">
          {TIER_LABEL[tier]}
        </span>
      </div>
      <div className="text-sm text-gray-700 leading-relaxed space-y-2 mb-3">
        {body}
      </div>
      <div className="bg-white border border-gray-200 rounded-md p-3">
        <strong className="block text-xs uppercase tracking-wide text-gray-600 mb-1">
          What to do
        </strong>
        <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
          {actions.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
