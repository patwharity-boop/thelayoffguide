import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Happens to Your 401(k) When You Get Laid Off?",
  description:
    "You have 5 options for your 401(k) after a layoff. Most people default to the wrong one. Here's what each choice means for taxes, penalties, and your long-term money.",
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
      "You have 5 options. Most people pick the wrong one by default. Here's what each one costs you.",
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
          costs them later. You actually have five options, and one of them
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
          Your 401(k) stays put when you leave a job. Nobody takes it from you.
          But once you&apos;re no longer an active employee, a clock starts on
          your options, and the default path isn&apos;t always the best one.
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
          The catch: if your balance is under $7,000, your old employer can
          force you out of the plan. Under $1,000 and they can mail you a
          check, triggering taxes and a penalty unless you redeposit it within
          60 days. Above $7,000, you can generally leave it there indefinitely,
          but you can&apos;t contribute anymore, the investment menu may be
          limited, and administrative fees sometimes creep up.
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
          This is usually the best move for most people. A direct rollover to a
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
          <strong>indirect rollover</strong> means a check comes to you, your
          employer withholds 20% for taxes automatically, and you have 60 days
          to deposit the entire original amount (including the withheld 20%,
          which you have to make up out of pocket) into the IRA. Miss the 60
          days and the IRS treats the whole thing as a distribution, taxes it,
          and hits you with a 10% penalty.
        </p>
        <p>
          Always do a direct rollover. Never take the check.
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
          If you are under 59.5, the IRS charges a <strong>10% early
          withdrawal penalty</strong> on the amount you take out, on top of
          ordinary income tax. A $50,000 withdrawal could realistically net you
          $32,000 to $36,000 after federal taxes (22-24% bracket) and the
          penalty. If you also owe state income tax, it&apos;s less.
        </p>
        <p>
          There are some exceptions to the 10% penalty. The one most relevant
          to people who just got laid off is the{" "}
          <strong>&ldquo;Rule of 55&rdquo;</strong>: if you separated from
          service in the year you turned 55 or later, withdrawals from that
          specific employer&apos;s 401(k) are penalty-free (you still pay
          income tax). This only applies to the plan at the employer you just
          left, not to IRAs or old 401(k)s from previous jobs.
        </p>
        <p>
          If you are genuinely in financial crisis and weighing this option,
          also check if your plan allows a{" "}
          <strong>hardship withdrawal</strong> or a{" "}
          <strong>plan loan</strong>. Loans from a 401(k) are not a withdrawal
          (no tax, no penalty) as long as you repay them. If you leave a job
          with an outstanding 401(k) loan and don&apos;t repay it within a
          certain period, it converts to a distribution and you owe taxes and
          the penalty on the balance.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Option 5: If you are 59.5 or older
        </h2>
        <p>
          Once you hit 59.5, the 10% early withdrawal penalty no longer
          applies. You can take distributions from your 401(k) and just pay
          ordinary income tax. If you are at or near this age and lost your
          job, you have meaningfully more flexibility than younger workers.
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
          company stock (rather than rolling it to an IRA) because only the
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
              <strong>Last resort:</strong> cashing out. Real cost is 30-40% of
              the balance in taxes and penalties for most people under 59.5.
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
    </div>
  );
}
