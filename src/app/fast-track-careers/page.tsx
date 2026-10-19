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
            We removed several popular suggestions. Wind turbine technician has a
            spectacular growth rate attached to roughly 1,500 openings a year in five
            states. Water treatment is a declining occupation. Court reporting takes two
            to three years with about 1,800 openings nationally. Dental hygiene takes
            three years and competitive admission. All are fine careers and none of them
            belong on a page about getting hired quickly.
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
