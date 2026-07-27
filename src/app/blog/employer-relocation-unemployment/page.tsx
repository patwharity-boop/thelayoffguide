import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Can You Collect Unemployment If Your Company Moves and You Can't Follow?",
  description:
    "Your employer is relocating its offices and you can't move. Is that a layoff or a voluntary quit? The answer determines whether you get unemployment benefits. Here's how states actually decide.",
  keywords: [
    "employer relocation unemployment",
    "company moving offices unemployment",
    "can I get unemployment if company relocates",
    "voluntary quit good cause relocation",
    "constructive discharge unemployment",
    "company HQ move unemployment benefits",
    "refused relocation unemployment",
  ],
  openGraph: {
    title: "Can You Collect Unemployment If Your Company Moves and You Can't Follow?",
    description:
      "Company relocating? Whether you qualify for unemployment depends on how states treat 'good cause' refusals. Here's how the system actually works.",
    type: "article",
    images: ["https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"],
  },
};

export default function EmployerRelocationUnemploymentPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Employer Relocation and Unemployment</span>
      </nav>

      <div className="relative rounded-xl overflow-hidden mb-8 h-72 md:h-96">
        {/* TODO Patrick: replace photo ID with a moving-boxes or highway image */}
        <img
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=80"
          alt="Empty office boxes during a corporate relocation"
          className="w-full h-full object-cover brightness-[0.8]"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-black/70 to-transparent">
          <span className="text-xs font-semibold tracking-widest uppercase text-teal-400">Know Your Rights</span>
          <h1 className="text-2xl md:text-4xl font-bold text-white mt-2">
            Can You Collect Unemployment If Your Company Moves and You Can&apos;t Follow?
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200 text-sm text-gray-500">
        <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-semibold text-xs">TLG</div>
        <div>
          <div className="font-semibold text-gray-900">The Layoff Guide</div>
          <div>July 27, 2026 · 6 min read</div>
        </div>
      </div>

      <article className="prose-custom text-gray-700 leading-relaxed space-y-6">
        <p>
          Your company just announced it is moving its headquarters or office from one city to another. Leadership framed it as an exciting new chapter. HR sent a packet about relocation assistance. But you have kids in school, a mortgage, aging parents, or a spouse with a job that cannot move. The new location is hundreds of miles away. You cannot go.
        </p>

        <p>
          The question that follows, and the one that determines whether you have a financial cushion or a crisis, is this: if you decline to relocate and your employment ends, does the state count that as a layoff or a voluntary quit? That single answer controls whether you get unemployment benefits.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The short answer: it depends on distance, your state, and how you document it</h2>

        <p>
          Unemployment insurance is administered by states, not the federal government. That means there is no single national rule. However, most states apply a common framework: if you quit a job because it became substantially worse or inaccessible through no fault of your own, that quit can qualify as &ldquo;good cause&rdquo; and you can still collect benefits.
        </p>

        <p>
          Relocation is one of the clearest examples of employer-caused change to working conditions. When a company moves its office far enough that continuing the job becomes genuinely unreasonable, most state unemployment agencies treat a resignation as a &ldquo;quit with good cause attributable to the employer.&rdquo; That phrase sounds bureaucratic, but what it means is: you get benefits.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What &ldquo;good cause&rdquo; actually means for a relocation</h2>

        <p>
          There is no magic distance that automatically qualifies as good cause across all states. What states look at is reasonableness: would a reasonable person in your circumstances be expected to move? Factors that typically weigh in your favor include:
        </p>

        <ul className="list-disc list-outside ml-6 space-y-2">
          <li>The relocation is a long distance, generally across state lines or more than an hour&apos;s drive each way</li>
          <li>You have documented family obligations that tie you to the current location (children in school, elder care responsibilities, a spouse or partner with a job that cannot relocate)</li>
          <li>You were given little time to make the decision, or the company made the announcement only months before the move date</li>
          <li>The relocation involves a significantly higher cost of living that would effectively reduce your real compensation</li>
          <li>The relocation offer came with conditions that were worse than your current arrangement (fewer resources, different role, lower seniority)</li>
        </ul>

        <p>
          Factors that work against you include moving locally within the same metro area, a generous relocation package that a reasonable person could accept, or a long lead time that gave you time to make arrangements.
        </p>

        <div className="border-l-4 border-amber-400 bg-amber-50 rounded-r-lg p-5 my-8">
          <p className="font-semibold text-gray-900 mb-1">Do not quit before you research your state</p>
          <p className="text-gray-800 text-sm">
            The rules vary enough by state that the same relocation scenario can qualify for benefits in one state and not in another. Before you decline the relocation offer in writing, check your state unemployment agency&apos;s definition of &ldquo;good cause quit&rdquo; or call the agency and describe your situation. Your state guide on this site lists the filing URL and phone number.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Constructive discharge: when the company effectively laid you off</h2>

        <p>
          A separate but related concept is constructive discharge. This applies when an employer changes working conditions so dramatically that no reasonable person could continue, even if the employer never formally fires anyone. A relocation that is practically impossible for you to accept can meet that standard, particularly when:
        </p>

        <ul className="list-disc list-outside ml-6 space-y-2">
          <li>The move was announced without meaningful warning</li>
          <li>No realistic relocation support was offered</li>
          <li>Refusing means the job simply ceases to exist for you, with no remote option and no transfer to a closer location</li>
        </ul>

        <p>
          When constructive discharge applies, your situation is treated closer to an employer-initiated separation (a layoff) than a voluntary quit. This is not automatic, it requires you to make the case in your unemployment claim, but it is a legitimate argument that unemployment agencies are used to hearing.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Is your position being eliminated or transferred?</h2>

        <p>
          There is an important distinction between an employer relocating your specific position and an employer closing your location entirely. If your entire department or site is closing and the company is not offering everyone a job in the new location, that is straightforwardly a layoff. You should file unemployment as if you were laid off, because you were. The relocation of the company does not change the outcome for workers who were not offered continued employment.
        </p>

        <p>
          If the company is offering you a position in the new location but you choose not to take it, that is where the &ldquo;good cause&rdquo; analysis applies.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Severance and unemployment: how they interact</h2>

        <p>
          If the company offers a severance package as part of the relocation transition, you can generally accept it and still file for unemployment. In most states, a lump-sum severance payment does not disqualify you from benefits, though some states treat severance allocated to specific weeks as wages that delay the start of your benefits. Read the severance agreement carefully and note whether it says anything about specific pay periods.
        </p>

        <p>
          Signing a severance agreement typically requires signing a release of claims, including potentially a release of wrongful termination claims. If you believe you have a constructive discharge claim with legal merit, it is worth talking to an employment attorney before you sign, particularly if the severance package is large and the release is broad. The release in most standard severance packages does not affect your right to file for unemployment, but confirm that in the language of your specific agreement.
        </p>

        <div className="border-l-4 border-blue-400 bg-blue-50 rounded-r-lg p-5 my-8">
          <p className="font-semibold text-gray-900 mb-1">Remote option not on the table?</p>
          <p className="text-gray-800 text-sm">
            If your role has been fully remote and the company is now mandating in-person attendance at the new location, some states treat this as a substantial change in working conditions that qualifies as good cause for leaving. The closer the policy change is to being a de facto termination of your remote arrangement, the stronger your case.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What to document before you make any decision</h2>

        <p>
          If you are facing a company relocation, start building a paper trail now regardless of what you decide. The goal is to show that your separation was not a casual or convenient quit but a response to a genuine employer-caused change.
        </p>

        <ul className="list-disc list-outside ml-6 space-y-2">
          <li>Save every communication about the relocation (emails, announcements, HR letters, town hall recordings if available)</li>
          <li>Write down the date you were first told about the move and the date you are expected to be in the new location</li>
          <li>If you have family obligations that make relocation genuinely impossible, note them in writing to HR when you decline (something like &ldquo;I am declining the relocation offer because my spouse is employed in [city] and my children are enrolled in school here&rdquo;)</li>
          <li>If the company is offering relocation assistance, get the specifics in writing and keep them. If you decide not to relocate, the offer details become part of the record the unemployment agency reviews</li>
          <li>Ask HR whether the company plans to issue WARN Act notices, if the relocation involves closing a site with enough workers to trigger the law. WARN notices are on the record and strengthen a claim that this is effectively a mass separation</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to file your unemployment claim</h2>

        <p>
          File the week your employment ends, or the week you give notice that you are declining the relocation and your last day is set. Do not wait until after your last day to start the claim. When asked the reason for separation, most states have a category for &ldquo;quit with good cause&rdquo; or a similar phrase. Explain clearly that your employer relocated the job to a location you are unable to reach, and that the decision to end the employment was driven by that change, not by a personal choice to leave.
        </p>

        <p>
          Expect the state to contact your former employer for their account of the separation. Your employer may report it as a voluntary resignation. That is fine. The unemployment agency is used to resolving these disputes. Your documentation, the distance of the move, and any family or financial hardship evidence you provide will all be factors in the determination.
        </p>

        <p>
          If your initial claim is denied, that is common in relocation cases and not the end of the road. File an appeal within the deadline on your denial notice and use the appeal to present your full good cause argument with supporting documents. The appeal process gives you a better shot at the outcome than the initial determination, which is often a quick judgment based on limited information.
        </p>

        <div className="border-l-4 border-gray-300 bg-gray-50 rounded-r-lg p-5 my-8">
          <p className="font-semibold text-gray-900 mb-1">Start here</p>
          <ul className="text-gray-800 text-sm space-y-1 list-disc list-outside ml-4">
            <li>Find your state&apos;s filing portal: <Link href="/eligibility" className="text-blue-600 underline">eligibility quiz and state guide</Link></li>
            <li>Understand the appeal process: <Link href="/blog/appeal-unemployment-denial" className="text-blue-600 underline">how to appeal a denial</Link></li>
            <li>Know what a WARN notice means: <Link href="/blog/warn-act-guide" className="text-blue-600 underline">WARN Act guide</Link></li>
          </ul>
        </div>
      </article>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link href="/blog" className="text-blue-600 hover:underline text-sm">Back to all articles</Link>
      </div>
    </div>
  );
}
