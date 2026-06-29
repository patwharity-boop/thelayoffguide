import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WARN Act Notice: What a 60-Day Advance Layoff Notice Actually Means",
  description:
    "Your employer announced a layoff with a WARN notice. Here's exactly what the 60-day federal notice requires, the three exceptions employers use to shorten it, state variations in CA/NY/NJ, and how to use the window for severance and job search.",
  keywords: [
    "WARN Act notice",
    "60 day layoff notice",
    "WARN Act explained",
    "what is WARN Act",
    "Cal-WARN",
    "NY WARN Act",
    "mass layoff notice",
    "WARN Act exceptions",
  ],
  openGraph: {
    title: "WARN Act Notice: What a 60-Day Advance Layoff Notice Actually Means",
    description:
      "Got a WARN notice? Here's what the law actually says, the exceptions employers use, the state variations, and how to use the 60 days.",
    type: "article",
    images: ["https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"],
  },
};

export default function WarnActGuidePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">WARN Act Guide</span>
      </nav>

      <div className="relative rounded-xl overflow-hidden mb-8 h-72 md:h-96">
        <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=80" alt="Person reading a notice letter at a desk" className="w-full h-full object-cover brightness-[0.8]" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-black/70 to-transparent">
          <span className="text-xs font-semibold tracking-widest uppercase text-teal-400">Your Rights</span>
          <h1 className="text-2xl md:text-4xl font-bold text-white mt-2">WARN Act Notice: What 60-Day Advance Layoff Notice Actually Means</h1>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200 text-sm text-gray-500">
        <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-semibold text-xs">TLG</div>
        <div>
          <div className="font-semibold text-gray-900">The Layoff Guide</div>
          <div>June 29, 2026 · 7 min read</div>
        </div>
      </div>

      <article className="prose-custom text-gray-700 leading-relaxed space-y-6">
        <p>
          You got a WARN notice. Maybe the headline said your company is cutting 30,000 jobs (Oracle), 8,000 jobs (Meta), or 1,100 jobs (Cloudflare). The press release said the company is complying with WARN. Your manager said you have 60 days. You have questions: Do I get paid for those 60 days? Can I look for work? Is my severance separate? Can my employer just send me home tomorrow?
        </p>

        <p>
          The WARN Act is one of the better-protected layoff scenarios because federal law actually puts numbers on the table. But the numbers come with caveats, and three big exceptions let employers compress the timeline. Here is what the law actually says, what your employer is and is not required to do, and how to make the 60-day window work for you.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What WARN actually requires</h2>

        <p>
          The Worker Adjustment and Retraining Notification Act (29 U.S.C. § 2101 et seq.), passed in 1988, applies to employers with 100 or more full-time employees. It requires 60 calendar days of advance written notice before either of these events:
        </p>

        <ul className="list-disc list-outside ml-6 space-y-2">
          <li>A <strong>plant closing</strong> that results in employment loss for 50 or more employees at a single site.</li>
          <li>A <strong>mass layoff</strong> that affects either 500 or more employees at a single site, or 50 to 499 employees if they represent at least 33 percent of the active workforce at that site.</li>
        </ul>

        <p>
          What &ldquo;notice&rdquo; means: a written letter to each affected employee, plus notices to the chief elected local government official and the state's dislocated worker unit. The notice has to include the expected separation date, whether the action is permanent or temporary, and whether bumping rights apply (if you're in a union).
        </p>

        <div className="border-l-4 border-amber-400 bg-amber-50 rounded-r-lg p-5 my-8">
          <p className="font-semibold text-gray-900 mb-1">The key thing nobody tells you</p>
          <p className="text-gray-800">
            WARN is a notice law, not a severance law. Your employer must give you 60 days of advance notice OR 60 days of pay in lieu of notice. They do not have to give you both. They also don&apos;t have to give you any severance beyond that 60 days unless your contract or company policy says otherwise. This distinction got real in Oracle&apos;s 2026 layoffs, where the company counted the 60-day WARN pay as part of severance rather than paying it on top. For newer employees that left little or nothing extra, and it drew law-firm investigations into possible WARN violations. Read your offer carefully: notice pay and severance are not the same thing.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Two ways the 60 days actually play out</h2>

        <p>
          In practice, employers handle the 60 days one of two ways:
        </p>

        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-1">Path A: You work the 60 days</h3>
            <p className="text-sm text-gray-700">
              You stay on the job, keep your paycheck and benefits, and your last day is the date listed on the notice. Common at manufacturing plants, retail closures, and some tech offices. Use the time to job search openly with your employer's knowledge. Some employers explicitly allow interview time during this window.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-1">Path B: You go home today with 60 days of pay</h3>
            <p className="text-sm text-gray-700">
              The employer ends your work immediately and pays out 60 days of base salary as pay in lieu of notice. This is more common in tech and finance. Benefits coverage usually continues for the 60 days. You can file for unemployment, but the timing depends on whether your state treats pay in lieu of notice as wages (which delays benefits) or as severance (which doesn&apos;t).
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The three exceptions employers actually use</h2>

        <p>
          The WARN Act has three statutory exceptions that allow shorter notice. All of them get used. All of them get abused.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">1. Unforeseeable business circumstances</h3>

        <p>
          The employer can shorten notice if the layoff was caused by &ldquo;business circumstances that were not reasonably foreseeable&rdquo; at the time the 60-day notice would have been required. This is the exception companies leaned on heavily during the 2020 pandemic shutdowns and again during the 2023 Silicon Valley Bank collapse. Some 2026 AI-driven restructurings have invoked it too, with mixed legal results. Courts often require a major, sudden event, not just a quarter of bad earnings.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">2. Faltering company</h3>

        <p>
          Applies only to plant closings (not mass layoffs). The employer must show it was actively seeking financing or new business that, if obtained, would have avoided or postponed the closing, and that providing notice would have prevented securing the financing. Narrow exception, mostly used by failing manufacturers.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">3. Natural disaster</h3>

        <p>
          Hurricane, flood, earthquake, drought, etc. The employer must still give as much notice as is practicable under the circumstances. After Hurricane Helene in 2024 and the LA wildfires in early 2025, several employers invoked this and gave notice closer to 7 or 14 days. The exception is real but rarely abused.
        </p>

        <p>
          When an employer uses one of these exceptions to shorten notice, they still have to give as much notice as possible and explain in writing why the full 60 days was not provided. If they don't, the exception fails in court and the company owes back pay plus benefits for the missing notice period.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">State versions can be tougher than federal</h2>

        <p>
          Federal WARN is the floor. Several states have layered their own WARN laws on top with stronger employee protections. If your layoff happened in one of these states, the state law usually wins.
        </p>

        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-1">California (Cal-WARN)</h3>
            <p className="text-sm text-gray-700">
              Triggers at 75 or more employees (not 100), and a covered mass layoff is just 50 affected employees in any 30-day period regardless of percentage. Notice is still 60 days but with fewer exceptions. The Cal-WARN faltering-company and unforeseeable-circumstances exceptions are interpreted more narrowly by California courts. Tech employers headquartered in CA frequently end up under Cal-WARN even for layoffs that affect remote workers.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-1">New York (NY WARN)</h3>
            <p className="text-sm text-gray-700">
              90 days of notice required, not 60. Triggers at 50 employees (mass layoff) or 25 plus 33 percent (any layoff). Employer also has to provide notice to the New York State Department of Labor in advance, and the notice must include benefit-continuation information.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-1">New Jersey (NJ WARN, Millville Dallas Airmotive Plant Loss Job Notification Act)</h3>
            <p className="text-sm text-gray-700">
              90 days of notice required, and mandatory severance of one week's pay per year of service for any covered layoff. NJ is the only state with mandatory severance attached to WARN. The 2023 amendments expanded coverage and removed several employer exceptions.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-1">Illinois, Maryland, Wisconsin, Tennessee, and others</h3>
            <p className="text-sm text-gray-700">
              Each have their own variation. Generally the rule of thumb is: check your state law, the federal floor is often beat by states with active labor protections.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What to do with your 60 days</h2>

        <p>
          If you are working through the notice period, you are in a uniquely good position compared to most laid-off workers. You have income, benefits, and reasonable certainty about your end date. Use it.
        </p>

        <ol className="list-decimal list-outside ml-6 space-y-3">
          <li>
            <strong>Apply for jobs openly.</strong> Your employer knows. They expect you to. Block calendar time for interviews; ask your manager directly if you can take 30-minute slots during work hours.
          </li>
          <li>
            <strong>Negotiate severance separately from your WARN pay.</strong> WARN pay is required by law. Severance is not. Your employer may offer additional severance in exchange for signing a release of legal claims. Read the release carefully (an employment lawyer's one-hour review is worth the $300 to $500 in most cases). Common ask: more weeks of pay, COBRA subsidy, extended equity-vesting cliff, neutral reference language.
          </li>
          <li>
            <strong>Take care of medical, dental, and vision early.</strong> Schedule that thing you've been putting off. Your benefits coverage typically continues through the notice period. After separation, you'll have 60 days to elect COBRA or, often, a cheaper Marketplace plan as a qualifying-event enrollment.
          </li>
          <li>
            <strong>Get documents while you have access.</strong> Pay stubs, performance reviews, employer EIN, manager contact info, work product you want for your portfolio. Once your access is revoked on your last day, getting any of this back is much harder.
          </li>
          <li>
            <strong>File for unemployment as soon as your last day arrives.</strong> See <Link href="/blog/file-for-unemployment-today" className="text-blue-700 hover:text-blue-900 underline">our filing guide</Link> for the same-day playbook. WARN pay treatment varies by state, but you usually can and should file even if WARN pay continues.
          </li>
          <li>
            <strong>Update LinkedIn before you tell your network.</strong> Use the &ldquo;Open to Work&rdquo; banner; it's no longer stigmatized. Recruiters search by it. Your inbound rate will roughly triple in the first week.
          </li>
        </ol>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">If your employer skipped the notice</h2>

        <p>
          If your employer was covered by WARN (over 100 employees, qualifying layoff size) and gave you less than 60 days of notice without invoking a valid exception, you may have a back-pay claim. The remedy under federal WARN is back pay plus benefits for each day of the missing notice period, up to 60 days. State WARN laws (CA, NY, NJ) can add more.
        </p>

        <p>
          Practical path: file a complaint with your state's Department of Labor first, and consult a plaintiffs' employment lawyer for a free initial review. Most take WARN cases on contingency because the calculation is straightforward.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">One more thing</h2>

        <p>
          WARN notices are not actually rare in 2026. Oracle, Meta, Cloudflare, and several others ran large layoffs with WARN obligations during the year. The press makes them sound dramatic. From the employee side, they are mostly procedural, which is good news. You get advance warning. You usually get pay. You have time to plan.
        </p>

        <p>
          The trap is treating the 60 days like vacation. The people who land softest after a WARN-noticed layoff treat the 60 days like a paid runway: still working, still useful, but with the explicit understanding that the next thing starts now. Apply on day three, not day 50. Tell your network on day five, not day 55. The window closes faster than it feels like it should.
        </p>

        <div className="border-l-4 border-teal-400 bg-teal-50 rounded-r-lg p-5 my-8 text-lg italic text-gray-800">
          &ldquo;Sixty days feels like a lot when you read the email. It is much less when you are 30 days in and still in the first round of every interview pipeline.&rdquo;
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Related on this site</h2>

        <ul className="list-disc list-outside ml-6 space-y-2 text-sm">
          <li><Link href="/blog/severance-and-unemployment" className="text-blue-700 hover:text-blue-900 underline">Got severance? Here's how it actually affects your unemployment</Link> covers how WARN pay and severance interact with state UI benefits.</li>
          <li><Link href="/blog/file-for-unemployment-today" className="text-blue-700 hover:text-blue-900 underline">File for unemployment today</Link> has the same-day playbook.</li>
          <li><Link href="/eligibility" className="text-blue-700 hover:text-blue-900 underline">The eligibility quiz</Link> gives a state-aware read on whether you qualify.</li>
          <li><Link href="/timeline" className="text-blue-700 hover:text-blue-900 underline">The realistic timeline of an unemployment claim</Link> walks through what to do at each phase.</li>
        </ul>

        <div className="mt-10 pt-8 border-t border-gray-200 text-sm text-gray-500">
          <p><strong>Sources:</strong></p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Worker Adjustment and Retraining Notification Act, 29 U.S.C. § 2101 et seq.: <a href="https://www.dol.gov/agencies/eta/layoffs/warn" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">dol.gov/agencies/eta/layoffs/warn</a></li>
            <li>California Labor Code §§ 1400–1408 (Cal-WARN): <a href="https://leginfo.legislature.ca.gov/faces/codes_displayexpandedbranch.xhtml?tocCode=LAB&division=2.&title=&part=4.&chapter=&article=" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">leginfo.legislature.ca.gov</a></li>
            <li>New York Labor Law § 860 et seq. (NY WARN Act): <a href="https://dol.ny.gov/warn-notices" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">dol.ny.gov/warn-notices</a></li>
            <li>New Jersey Statutes 34:21-1 et seq. (NJ WARN, as amended 2023): <a href="https://www.nj.gov/labor/employer-services/warn/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">nj.gov/labor/employer-services/warn</a></li>
          </ul>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "WARN Act Notice: What a 60-Day Advance Layoff Notice Actually Means",
        description: "Got a WARN notice? Here's what the law actually says, the exceptions employers use, the state variations, and how to use the 60 days.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
        url: "https://www.thelayoffguide.com/blog/warn-act-guide",
        datePublished: "2026-06-29",
        dateModified: "2026-06-29",
        author: {
          "@type": "Person",
          "@id": "https://www.thelayoffguide.com/about#patrick",
          name: "Patrick",
          url: "https://www.thelayoffguide.com/about",
        },
        publisher: {
          "@type": "Organization",
          name: "The Layoff Guide",
          url: "https://www.thelayoffguide.com",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://www.thelayoffguide.com/blog/warn-act-guide",
        },
      })}} />
    </div>
  );
}
