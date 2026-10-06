import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Happens to Your 401(k) When You Get Laid Off?",
  description:
    "You have four real options for your 401(k) after a layoff. Most people default to the wrong one. Here's what each choice means for taxes, penalties, and your long-term money.",
  keywords: [
    "401k after layoff",
    "what happens to 401k when laid off",
    "401k rollover after job loss",
    "cash out 401k after layoff",
    "IRA rollover unemployment",
    "retirement account layoff options",
  ],
  openGraph: {
    title: "What Happens to Your 401(k) When You Get Laid Off?",
    description:
      "You have four real options. Most people pick the wrong one by default. Here's what each one costs you.",
    type: "article",
  },
};

export default function FourOhOneKAfterLayoffPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-600">
          Blog
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">401(k) After a Layoff</span>
      </nav>

      <header className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 mb-2">
          Finances
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What Happens to Your 401(k) When You Get Laid Off?
        </h1>
        <p className="text-lg text-gray-600">
          Most people do nothing, which is usually fine in the short term but
          costs them later. You actually have four options, and one of them
          takes the money you saved for retirement and turns it into a tax bill
          you weren&apos;t expecting.
        </p>
        <div className="flex items-center gap-3 mt-6 text-sm text-gray-500">
          <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white font-semibold text-xs">
            TLG
          </div>
          <span>The Layoff Guide &middot; June 4, 2026</span>
        </div>
      </header>

      <article className="text-gray-700 leading-relaxed space-y-6">
        <p>
          Your own contributions and everything you have vested stay put when
          you leave a job. Nobody takes those from you. Employer money you have
          not vested in is a different story, and a layoff can cost you it, so
          check the vesting schedule on your last statement. Once you&apos;re no
          longer an active employee, a clock starts on your options, and the
          default path isn&apos;t always the best one.
        </p>

        <p>
          Here are the five choices, what each one actually means, and what
          most people get wrong.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Option 1: Leave it with your old employer
        </h2>
        <p>
          This is what most people do because it requires no action. In the
          short term, it&apos;s fine. Your investments keep growing, you still
          have access to the account, and nothing changes until you decide
          otherwise.
        </p>
        <p>
          The catch: if your balance is $7,000 or less, the plan can force you
          out without asking you. What happens next depends on the amount. If it
          is more than $1,000 and you don&apos;t tell the plan what to do, it has
          to roll the money into an IRA in your name, which is not a taxable
          event. At $1,000 or less the plan can simply mail you a check, and that
          one is taxable, plus the 10% additional tax if you are under 59.5 and
          no exception applies, unless you redeposit it within 60 days. Above
          $7,000 you can generally leave it there until required minimum
          distributions begin, but you can&apos;t contribute anymore, the
          investment menu may be limited, and administrative fees sometimes
          creep up.
        </p>
        <p>
          This option makes sense if: you like the plan&apos;s investment
          options, the fees are low, and you&apos;re likely to start a new job
          soon.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Option 2: Roll it to an IRA
        </h2>
        <p>
          For most people this is the option with the fewest downsides. A direct rollover to a
          traditional IRA at a brokerage (Fidelity, Vanguard, Schwab) is
          tax-free and penalty-free. You get a wider menu of investments, often
          lower fees, and you control the account regardless of who you work
          for next.
        </p>
        <p>
          The mechanics matter. A{" "}
          <strong>direct rollover</strong> means the money goes from your 401(k)
          custodian straight to the IRA. Nothing touches your hands, nothing is
          withheld for taxes. An{" "}
          <strong>indirect rollover</strong> means a check comes to you, the
          plan withholds 20% for taxes automatically, and you have 60 days to
          deposit the entire original amount (including the withheld 20%, which
          you have to make up out of pocket) into the IRA. You get the withheld
          amount back as a credit when you file, but only if you complete the
          rollover. Miss the 60 days and the IRS generally treats the whole thing
          as a taxable distribution, plus the 10% additional tax if you are under
          59.5. The IRS can waive the 60 days for events outside your control,
          but do not plan around that.
        </p>
        <p>
          In almost every case the direct rollover is the one to ask for. If you
          are taking the check, know exactly why.
        </p>
        <p>
          One thing you may have heard that does not apply here: the limit of one
          rollover per 12 months covers IRA-to-IRA rollovers only. It does not
          restrict moving a 401(k) into an IRA.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Option 3: Roll it to your next employer&apos;s plan
        </h2>
        <p>
          If you land a new job soon, you can roll your old 401(k) into your
          new employer&apos;s plan. This keeps everything in one place and can
          make managing contributions simpler.
        </p>
        <p>
          This only works if your new employer&apos;s plan accepts incoming
          rollovers (most do, but check) and if the new plan&apos;s investment
          options are actually good. If the new employer offers a bad plan with
          limited funds and high fees, an IRA rollover is better. You can
          always do the IRA first and then roll it into a new plan later.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Option 4: Cash it out (most expensive option)
        </h2>
        <p>
          This is the option people choose when they need money now and feel
          like they have no other choice. It is the most expensive option by a
          wide margin.
        </p>
        <p>
          If you are under 59.5, the IRS adds a <strong>10% additional
          tax</strong> on the taxable part of what you take out, on top of
          ordinary income tax. A $50,000 withdrawal taxed at a 22% to 24%
          marginal rate plus that 10% leaves you roughly $33,000 to $34,000
          before state tax. If you were laid off early in the year and have
          little other income, more of the withdrawal falls in the 10% and 12%
          brackets and you keep more than that.
        </p>
        <p>
          There are some exceptions to the 10% penalty. The one most relevant
          to people who just got laid off is the{" "}
          <strong>&ldquo;Rule of 55&rdquo;</strong>: if you separated from
          service in the year you turned 55 or later, withdrawals from that
          specific employer&apos;s 401(k) escape the 10% additional tax (you
          still pay income tax). This only applies to the plan at the employer
          you just left, not to IRAs or old 401(k)s from previous jobs.
        </p>
        <p>
          Two catches. The exception only removes the 10%, it does not force the
          plan to let you withdraw, so check the plan&apos;s distribution rules.
          And if you roll that money to an IRA first you lose the exception,
          because it never applies to IRAs. For qualified public safety employees
          the trigger is age 50, or 25 years of service under the plan,
          whichever comes first.
        </p>
        <p>
          There is one exception written specifically for people in your
          situation, and it works only from an IRA. If you have collected
          unemployment for 12 consecutive weeks, IRA withdrawals up to what you
          paid that year in health insurance premiums escape the 10% additional
          tax. It does not apply to money still sitting in a 401(k). That cuts
          the opposite way from the Rule of 55, which works only from the
          401(k). If you are 55 or older, work out which one you are likelier to
          use before you move the money.
        </p>
        <p>
          You do not need a <strong>hardship withdrawal</strong>. Losing your
          job is itself a distribution event, so the plan can pay you out
          without one, and a hardship withdrawal would not save you the 10%
          anyway. A new <strong>plan loan</strong> is also off the table once
          you have separated, since loan payments come out of payroll.
        </p>
        <p>
          If you already had a 401(k) loan outstanding when you left, the plan
          may require you to repay the full balance. Many plans instead reduce,
          or offset, your account by the unpaid amount. That offset is reported
          as a distribution, but you are not stuck with the bill. Because it
          happened on account of your separation, it is a qualified plan loan
          offset, and you can roll that amount into an IRA any time up to the
          due date of that year&apos;s tax return including extensions, and owe
          nothing. You have to find the cash elsewhere to do it, but the window
          is months, not 60 days. Check box 7 on your Form 1099-R: code M means
          an offset with that window, code L means a deemed distribution
          without it.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          What changes if you are 59.5 or older
        </h2>
        <p>
          Once you hit 59.5, the 10% additional tax no longer applies. You can
          take distributions from your 401(k) and just pay ordinary income tax,
          though the plan decides whether you can take them in pieces or only as
          one lump sum, so check that before you count on spreading them out. If
          you are at or near this age and lost your job, you have meaningfully
          more flexibility than younger workers.
        </p>
        <p>
          That said, ordinary income tax on a large distribution can still be
          significant. A rollover to a traditional IRA first gives you more
          control over timing, letting you take distributions strategically
          rather than all at once.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          One more thing: company stock
        </h2>
        <p>
          If your 401(k) holds a lot of your former employer&apos;s stock, ask
          about{" "}
          <strong>Net Unrealized Appreciation (NUA)</strong>. In some
          situations, it is more tax-efficient to take a distribution of the
          company stock (rather than rolling it to an IRA), though it only works
          if you take your entire balance from the plan within a single tax
          year, because only the
          cost basis is taxed as ordinary income immediately, and the
          appreciation is taxed at the lower long-term capital gains rate when
          you sell. This is a niche rule, but if company stock is a large chunk
          of your balance, it is worth talking to a tax professional before you
          roll everything.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-10">
          <h3 className="font-bold text-gray-900 mb-2">
            The short version
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <strong>Best default:</strong> direct rollover to an IRA. No
              taxes, no penalties, maximum flexibility.
            </li>
            <li>
              <strong>Fine to leave:</strong> at your old employer if the plan
              is good and your balance is over $7,000.
            </li>
            <li>
              <strong>Avoid:</strong> taking a check (indirect rollover) unless
              you know exactly what you are doing.
            </li>
            <li>
              <strong>Last resort:</strong> cashing out. Expect to lose roughly
              22% to 40% of the balance to income tax plus the 10% additional
              tax, depending on your bracket and your state.
            </li>
          </ul>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          This is general information, not tax advice. Your specific situation
          (state taxes, income bracket, plan terms) changes the numbers. A
          tax professional or fee-only financial planner is worth consulting
          before making a large rollover decision.
        </p>

        <div className="border-t border-gray-200 pt-6 mt-8">
          <p className="text-sm text-gray-600">
            Also on the site:{" "}
            <Link
              href="/blog/the-money-talk"
              className="text-blue-700 hover:underline"
            >
              How to map your finances after a layoff
            </Link>
            {" "}&middot;{" "}
            <Link
              href="/blog/severance-and-unemployment"
              className="text-blue-700 hover:underline"
            >
              How severance affects your unemployment
            </Link>
          </p>
        </div>
      </article>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="text-sm text-gray-500">
          <p className="font-semibold text-gray-700 mb-2">Sources verified October 6, 2026</p>
          <ul className="space-y-1 italic">
            <li>IRS Topic no. 558, additional tax on early distributions from retirement plans other than IRAs: irs.gov/taxtopics/tc558</li>
            <li>IRS Publication 575, Pension and Annuity Income (separation from service at 55, net unrealized appreciation, plan loan offsets, the 60-day waiver): irs.gov/publications/p575</li>
            <li>IRS, Rollovers of retirement plan and IRA distributions (20 percent withholding, the 60-day window, one rollover per year): irs.gov/retirement-plans/plan-participant-employee/rollovers-of-retirement-plan-and-ira-distributions</li>
            <li>IRS, Retirement topics, exceptions to tax on early distributions: irs.gov/retirement-plans/plan-participant-employee/retirement-topics-exceptions-to-tax-on-early-distributions</li>
            <li>IRS, 401(k) resource guide, plan participants, general distribution rules: irs.gov/retirement-plans/plan-participant-employee/401k-resource-guide-plan-participants-general-distribution-rules</li>
            <li>IRS, Retirement plans FAQs regarding loans (deemed distribution, cure period, offset): irs.gov/retirement-plans/retirement-plans-faqs-regarding-loans</li>
            <li>IRS, Retirement topics, vesting: irs.gov/retirement-plans/plan-participant-employee/retirement-topics-vesting</li>
            <li>26 U.S.C. 72(t), the 10 percent additional tax, separation at 55, the IRA carve-out at 72(t)(3)(A), and the unemployed health insurance premium exception at 72(t)(2)(D): law.cornell.edu/uscode/text/26/72</li>
            <li>26 U.S.C. 411(a)(11), the $7,000 mandatory distribution limit raised from $5,000 by SECURE 2.0 section 304: law.cornell.edu/uscode/text/26/411</li>
            <li>26 U.S.C. 401(a)(31)(B), automatic rollover to an IRA for mandatory distributions over $1,000: law.cornell.edu/uscode/text/26/401</li>
            <li>26 U.S.C. 402(c)(3), the 60-day transfer limit, the hardship waiver, and the qualified plan loan offset window: law.cornell.edu/uscode/text/26/402</li>
            <li>26 U.S.C. 3405(c), 20 percent mandatory withholding and the direct rollover exception: law.cornell.edu/uscode/text/26/3405</li>
            <li>IRS Revenue Procedure 2025-32, tax year 2026 inflation adjustments and rate brackets: irs.gov/pub/irs-drop/rp-25-32.pdf</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
