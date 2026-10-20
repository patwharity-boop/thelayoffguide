import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import { careers, TIERS } from "@/data/fastTrackCareers";

export const metadata = buildPageMetadata({
  title: "Fast Track Careers: High-Paying Jobs With Short Training",
  description:
    "Jobs you can train for in weeks or months, sorted by how long the training takes. Real BLS wages, real annual openings, real training costs, and the honest downside of each one. Plus how to train without losing your unemployment check.",
  path: "/fast-track-careers",
  keywords: [
    "high paying jobs short training",
    "certificate programs that pay well",
    "trade school careers",
    "fast track career change",
    "quick certifications high salary",
    "jobs with short training programs",
    "best paying jobs with certification",
  ],
});

const findPrograms = [
  {
    name: "Trade Schools by State, TradeCareerPath",
    url: "https://tradecareerpath.com/trade-school/best-trade-schools-by-state/",
    description: "Find the best-rated trade schools in your state with program details, costs, and reviews.",
  },
  {
    name: "CareerOneStop, Training Finder",
    url: "https://www.careeronestop.org/toolkit/training/find-local-training.aspx",
    description: "Government tool to find local training programs, apprenticeships, and certification courses near you. Filter by occupation and location.",
  },
  {
    name: "Apprenticeship.gov, Find an Apprenticeship",
    url: "https://www.apprenticeship.gov/apprenticeship-finder",
    description: "Search thousands of paid apprenticeships by state and occupation. Earn while you learn, many pay $15-30+/hour during training.",
  },
  {
    name: "Community College Finder",
    url: "https://www.aacc.nche.edu/college-finder/",
    description: "Find your local community college for affordable certificate and associate degree programs. Many offer workforce training programs at low or no cost if you're unemployed.",
  },
  {
    name: "Google Career Certificates",
    url: "https://grow.google/certificates/",
    description: "Online certificates in IT, data analytics, UX design, project management, and cybersecurity. Recognized by 150+ employers. Financial aid available.",
  },
  {
    name: "Bureau of Labor Statistics, Occupational Outlook",
    url: "https://www.bls.gov/ooh/",
    description: "The definitive source for job outlook, salary data, and education requirements for every occupation. Look up any career to see if it's growing or shrinking before you invest time in training.",
  },
  {
    name: "Niche, Best Trade Schools Rankings",
    url: "https://www.niche.com/colleges/search/best-trade-schools/",
    description: "Rankings and reviews of trade schools by state with student feedback, acceptance rates, and program details.",
  },
  {
    name: "Your State Workforce Agency",
    url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/american-job-centers.aspx",
    description: "Many states offer free or subsidized job training for unemployed workers. Visit your local American Job Center, they can connect you with funded programs you didn't know existed.",
  },
];

export default function FastTrackCareersPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Fast Track Careers</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Fast Track Careers, Good Pay, Short Training
      </h1>
      <p className="text-lg text-gray-600 mb-4">
        Jobs you can train for in weeks or months, grouped by how long the training
        actually takes. Every wage and every demand figure here comes from the Bureau
        of Labor Statistics, and every job carries its honest downside.
      </p>
      <p className="text-gray-600 mb-8">
        Pay attention to the openings number more than the growth rate. A job growing
        40 percent in a tiny occupation can mean a few thousand openings nationwide.
        A flat occupation with 200,000 openings a year is where people actually get hired.
      </p>

      <div className="border-l-4 border-emerald-500 bg-emerald-50 rounded-r-lg p-6 mb-10">
        <h2 className="font-bold text-gray-900 mb-2">
          You can usually train without losing your unemployment check
        </h2>
        <p className="text-gray-800 mb-3">
          This is the part most people never find out. Federal law says your benefits
          cannot be denied because you are in training that your state has approved, and
          while you are in it the state cannot deny you for failing the work search
          requirement either. That is not a special programme in one or two states. It
          applies everywhere.
        </p>
        <p className="text-gray-800 mb-3">
          Some states go further. New York can add up to 26 extra weeks of benefits for
          people still in an approved programme when their regular benefits run out.
        </p>
        <p className="text-gray-800">
          The catch is the word approved. Get the training approved by your state
          unemployment office <em>before</em> you enrol, not after. Ask them directly
          about approved training, and ask your local American Job Center which
          programmes are already on the list. Many of them are also free.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">So who pays for the training?</h2>
        <p className="text-gray-700 mb-4">
          Nobody hands you a cheque. But there is real money for this, most
          people never ask for it, and the rules changed in your favour this
          year. There are three live sources, one that is dead, and one deadline
          that catches people out.
        </p>

        <div className="space-y-4">
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">
              The main one: dislocated worker funding
            </h3>
            <p className="text-sm text-gray-700 mb-2">
              Federal law funds retraining for people laid off through no fault
              of their own, and it runs through your local American Job Center.
              Being laid off is enough to get in the door. There is no income
              test for dislocated workers, which surprises people who assume
              these programmes are only for the very poor.
            </p>
            <p className="text-sm text-gray-700">
              It pays the school directly rather than handing you money, through
              something called an Individual Training Account. It can also cover
              transport and childcare, and sometimes a modest cash stipend while
              you study. The amount is capped by local policy and is often in the
              low thousands, so treat it as one part of a stack rather than the
              whole answer.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50 rounded-r-lg p-5">
            <h3 className="font-bold text-gray-900 mb-2">
              The new one: Pell Grants now cover short programmes
            </h3>
            <p className="text-sm text-gray-800 mb-2">
              This is genuinely new and most layoff guides have not caught up.
              Since the 2026 to 2027 award year, a Pell Grant of up to $7,395 can
              pay for short workforce programmes running at least eight weeks but
              fewer than fifteen, between 150 and 599 clock hours. That window
              covers a good number of the jobs in the one to three months tier
              on this page.
            </p>
            <p className="text-sm text-gray-800 mb-2">
              The part worth reading twice: <strong>you can use it even if you
              already have a bachelor&apos;s degree.</strong> Pell normally stops
              once you hold one. For these programmes it does not. If you were
              laid off from a professional job and assumed federal grants were
              not for you, that assumption is now out of date.
            </p>
            <p className="text-sm text-gray-800">
              The catch is real though. Every programme has to be approved one at
              a time, by your state and then by the Department of Education, and
              approvals only started in August 2026. A handful of states had any
              at all by the end of September. So do not assume your local
              college&apos;s course qualifies. Ask them directly whether that
              specific programme is an approved eligible workforce programme.
              These short courses are also grant eligible but not loan eligible,
              so there is no federal loan to cover a gap.
            </p>
          </div>

          <div className="border border-red-200 bg-red-50 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">
              The dead one: stop looking for Trade Adjustment Assistance
            </h3>
            <p className="text-sm text-gray-800">
              If your job went overseas you will find plenty of advice telling
              you to apply for Trade Adjustment Assistance. Do not waste the
              time. The programme stopped taking new people on 1 July 2022 and
              is still shut. The Department of Labor can no longer certify new
              groups of workers, and more than a thousand petitions filed since
              then cannot be decided unless Congress revives it. You had to be
              covered on or before 30 June 2022. Anyone laid off since then
              cannot get it, under any circumstances.
            </p>
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-50 rounded-r-lg p-5">
            <h3 className="font-bold text-gray-900 mb-2">
              The deadline nobody mentions
            </h3>
            <p className="text-sm text-gray-800">
              If you want the cash stipend that can come with dislocated worker
              training, you generally have to be enrolled in training by the end
              of the thirteenth week after your layoff. Miss that and you may
              still get tuition paid, but the income support is gone. That alone
              is a reason to walk into a job centre in your first week rather
              than in month four, while you are still telling yourself you will
              find something similar.
            </p>
          </div>
        </div>

        <h3 className="font-bold text-gray-900 mt-8 mb-3">What to actually do</h3>
        <ol className="list-decimal list-outside ml-6 space-y-3 text-gray-700">
          <li>
            <strong>File for unemployment first, the same week.</strong> It
            starts the clock and your eligibility is usually part of what makes
            you a dislocated worker in the first place.
          </li>
          <li>
            <strong>Contact your local American Job Center in week one.</strong>
            Ask for the dislocated worker programme by name, and ask for an
            assessment appointment. Funding legally requires an assessment
            before anything is paid, so this is not a step you can skip.
          </li>
          <li>
            <strong>Ask two separate questions, and know they are separate.</strong>{" "}
            First, is this training approved, meaning is the provider on your
            state&apos;s eligible training provider list. Second, is there money
            for it this year and what is the cap. A counsellor can tell you a
            course is perfectly approvable and still have no budget left. Get the
            cap in writing.
          </li>
          <li>
            <strong>Get the training approved before you enrol.</strong> This is
            the big one. Both your benefits protection and the funding are built
            around approval happening first. The money is designed to pay a
            school going forward, not to reimburse you for a course you already
            bought. Enrolling first and asking later is the most expensive
            mistake on this page.
          </li>
          <li>
            <strong>File the FAFSA in parallel</strong>, even if you expect the
            job centre to pay. The grants are designed to stack, and you will be
            asked whether you applied.
          </li>
          <li>
            <strong>If your whole site or plant closed</strong>, ask whether
            rapid response services are already running for your employer. There
            is sometimes a dedicated pot of money attached to a specific mass
            layoff that your local board is already holding.
          </li>
        </ol>

        <h3 className="font-bold text-gray-900 mt-8 mb-3">Three more worth knowing</h3>
        <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700">
          <li>
            <strong>Apprenticeships.</strong> The employer carries the training
            cost and you are paid from day one. Look for the paid from day one
            badge on the jobs above.
          </li>
          <li>
            <strong>If you served</strong>, the GI Bill covers far more than
            degrees, including apprenticeships, vocational programmes and
            licensing exam fees. Veterans also get priority of service at job
            centres.
          </li>
          <li>
            <strong>If you have a disability</strong>, state vocational
            rehabilitation funds training, books and tools, and people receiving
            disability benefits are generally presumed eligible. Some states run
            waiting lists, so apply early.
          </li>
        </ul>

        <p className="text-sm text-gray-500 mt-6">
          Start here:{" "}
          <a
            href="https://www.careeronestop.org/LocalHelp/AmericanJobCenters/american-job-centers.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 underline"
          >
            find your nearest American Job Center
          </a>
          , or call the free Department of Labor line on 1-877-872-5627.
        </p>
      </section>

      {TIERS.map((tier) => {
        const jobs = careers.filter((c) => c.tier === tier.id);
        if (jobs.length === 0) return null;
        return (
          <section key={tier.id} className="mb-14">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{tier.label}</h2>
              <p className="text-gray-600">{tier.blurb}</p>
            </div>

            <div className="space-y-5">
              {jobs.map((job) => (
                <div key={job.title} className="border border-gray-200 rounded-xl p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
                    {job.paidTraining && (
                      <span className="text-xs font-bold bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full shrink-0">
                        PAID FROM DAY ONE
                      </span>
                    )}
                  </div>

                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm mb-4">
                    <div className="flex gap-2">
                      <dt className="font-semibold text-gray-900 shrink-0">Pay:</dt>
                      <dd className="text-gray-700">{job.pay}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="font-semibold text-gray-900 shrink-0">Openings:</dt>
                      <dd className="text-gray-700">{job.openings}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="font-semibold text-gray-900 shrink-0">Training:</dt>
                      <dd className="text-gray-700">{job.training}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="font-semibold text-gray-900 shrink-0">Cost:</dt>
                      <dd className="text-gray-700">{job.cost}</dd>
                    </div>
                    <div className="flex gap-2 sm:col-span-2">
                      <dt className="font-semibold text-gray-900 shrink-0">Growth:</dt>
                      <dd className="text-gray-700">{job.growth}</dd>
                    </div>
                  </dl>

                  <p className="text-gray-700 text-sm mb-3">{job.what}</p>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-3">
                    <p className="text-sm text-gray-800">
                      <span className="font-semibold">Before you commit: </span>
                      {job.caveat}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    {job.link ? (
                      <a
                        href={job.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-700 hover:text-blue-900 underline"
                      >
                        {job.linkLabel ?? "Official information"}
                      </a>
                    ) : (
                      <span />
                    )}
                    <span className="text-xs text-gray-400">{job.source}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}

      <section className="mb-14">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Where to find programmes</h2>
          <p className="text-gray-600">
            Start with your state workforce agency. If a programme is on their approved
            list it may be free, and it keeps your benefits intact while you study.
          </p>
        </div>
        <div className="space-y-4">
          {findPrograms.map((r) => (
            <div key={r.name} className="border border-gray-200 rounded-xl p-5">
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-700 hover:text-blue-900 underline"
              >
                {r.name}
              </a>
              <p className="text-sm text-gray-600 mt-1">{r.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-gray-200 pt-8">
        <h2 className="font-bold text-gray-900 mb-3">How we picked these, and where the numbers come from</h2>
        <div className="text-sm text-gray-600 space-y-3">
          <p>
            Every wage, growth figure and openings count on this page comes from the US
            Bureau of Labor Statistics, using May 2025 wage data and the 2025 to 2035
            employment projections. Each entry shows its occupation code so you can look
            it up yourself. Training costs are quoted from community colleges and
            certifying bodies, not from advertising.
          </p>
          <p>
            We removed a lot of popular suggestions, and it is worth saying why.
            Wind turbine technician has a spectacular growth rate attached to roughly
            1,500 openings a year in five states. Water treatment is a declining
            occupation. Court reporting takes two to three years for about 1,800
            openings nationally. Dental hygiene takes three years and competitive
            admission. Air traffic control pays superbly, has roughly 2,100 openings
            and an age limit of 31. All are fine careers. None of them answer the
            question this page exists to answer.
          </p>
          <p>
            We also removed several things that are sold as fast tracks and are not.
            The OSHA 10 and 30 hour cards are not a certification, and OSHA says so in
            those words on its own site. The Project Management Professional credential
            needs three to five years of documented project leadership before you can
            even sit the exam. A two day scrum course does not produce a six figure job
            without delivery experience behind it. The AWS foundational certificate is
            described by Amazon itself as cloud literacy for non technical staff. And
            real estate is commission only, more than half self employed, with the
            Bureau of Labor Statistics noting in its own words that agents sometimes go
            weeks or months without a sale. We do not list commission only work as a
            fast route to a paycheck.
          </p>
          <p>
            Anything that pays mostly in tips or commission, or that is really self
            employment, is labelled as such. Drone piloting and loan signing are real
            ways to earn money and neither is a job you get hired into.
          </p>
          <p>
            Figures are a snapshot and they move. Wages update each spring and projections
            every two years. If something here looks out of date, it probably is, so check
            the linked source before you spend money on a course.
          </p>
          <p className="italic">
            General information, not career or financial advice. Verify licensing
            requirements with your own state before enrolling in anything.
          </p>
        </div>
      </div>
    </div>
  );
}
