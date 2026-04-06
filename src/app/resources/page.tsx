import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources — Everything You Need After a Layoff",
  description:
    "One-stop shop for everything you need after losing your job. Resume builders, job boards, food assistance, health insurance, LinkedIn tips, and more.",
};

const sections = [
  {
    title: "Resume & Job Search",
    icon: "📄",
    resources: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com",
        description:
          "Update your profile, turn on 'Open to Work', and start networking. LinkedIn Premium offers a free 1-month trial — use it for InMail and seeing who viewed your profile.",
      },
      {
        name: "Indeed",
        url: "https://www.indeed.com",
        description:
          "The largest job board. Upload your resume and set up daily email alerts for your target roles.",
      },
      {
        name: "Google Docs Resume Templates",
        url: "https://docs.google.com/templates",
        description:
          "Free, clean resume templates. No need to pay for a resume builder — these work great.",
      },
      {
        name: "Teal",
        url: "https://www.tealhq.com",
        description:
          "Free AI-powered resume builder that helps you tailor your resume to specific job descriptions.",
      },
      {
        name: "Jobscan",
        url: "https://www.jobscan.co",
        description:
          "Compares your resume against job postings to help you get past ATS (applicant tracking systems). Free tier available.",
      },
      {
        name: "USAJobs",
        url: "https://www.usajobs.gov",
        description:
          "Federal government jobs. Benefits are excellent and many positions are remote now.",
      },
    ],
  },
  {
    title: "Food Assistance (SNAP)",
    icon: "🛒",
    resources: [
      {
        name: "SNAP Benefits (Food Stamps)",
        url: "https://www.fns.usda.gov/snap/recipient/eligibility",
        description:
          "If you just lost your income, you likely qualify. No shame in it — this is exactly what it's for. Apply through your state's SNAP office.",
      },
      {
        name: "Find Your State SNAP Office",
        url: "https://www.fns.usda.gov/snap/state-directory",
        description:
          "Directory of every state's SNAP program with links to apply online.",
      },
      {
        name: "Feeding America — Find a Food Bank",
        url: "https://www.feedingamerica.org/find-your-local-foodbank",
        description:
          "Find a food bank near you for immediate help while your SNAP application is processed.",
      },
    ],
  },
  {
    title: "Health Insurance",
    icon: "🏥",
    resources: [
      {
        name: "Healthcare.gov",
        url: "https://www.healthcare.gov",
        description:
          "Losing your job is a qualifying life event — you can sign up for marketplace insurance outside of open enrollment. Often cheaper than COBRA.",
      },
      {
        name: "COBRA Information",
        url: "https://www.dol.gov/general/topic/health-plans/cobra",
        description:
          "Continue your employer's health plan for up to 18 months. Expensive (you pay the full premium) but keeps your existing doctors and coverage.",
      },
      {
        name: "Medicaid",
        url: "https://www.medicaid.gov/about-us/where-is-medicaid-available-what-are-state-programs-called",
        description:
          "If your income dropped to zero, you may qualify for Medicaid (free health insurance). Eligibility varies by state.",
      },
    ],
  },
  {
    title: "Financial Help & Bills",
    icon: "💰",
    resources: [
      {
        name: "211.org",
        url: "https://www.211.org",
        description:
          "Dial 211 or visit the website to find local assistance with rent, utilities, food, and other essentials.",
      },
      {
        name: "LIHEAP (Utility Assistance)",
        url: "https://www.acf.hhs.gov/ocs/programs/liheap",
        description:
          "Low Income Home Energy Assistance Program — help paying heating and cooling bills.",
      },
      {
        name: "Consumer Financial Protection Bureau",
        url: "https://www.consumerfinance.gov/consumer-tools/guide-to-filing-for-bankruptcy/",
        description:
          "Know your rights. Creditors can't harass you, and there are options for managing debt during unemployment.",
      },
      {
        name: "National Foundation for Credit Counseling",
        url: "https://www.nfcc.org",
        description:
          "Free or low-cost credit counseling to help manage debt and create a budget while unemployed.",
      },
    ],
  },
  {
    title: "Skills & Training",
    icon: "📚",
    resources: [
      {
        name: "Coursera",
        url: "https://www.coursera.org",
        description:
          "Free courses from top universities. Many offer financial aid for certificates. Great for filling resume gaps.",
      },
      {
        name: "Google Career Certificates",
        url: "https://grow.google/certificates/",
        description:
          "Employer-recognized certificates in IT, Data Analytics, UX Design, Project Management, and more. Financial aid available.",
      },
      {
        name: "Your State's Workforce Center",
        url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx",
        description:
          "Free job search help, resume reviews, skills training, and career counseling. Funded by the government — already paid for with your tax dollars.",
      },
      {
        name: "LinkedIn Learning",
        url: "https://www.linkedin.com/learning/",
        description:
          "Included with LinkedIn Premium (free trial). Thousands of courses on business, tech, and creative skills.",
      },
    ],
  },
  {
    title: "Mental Health",
    icon: "🧠",
    resources: [
      {
        name: "988 Suicide & Crisis Lifeline",
        url: "https://988lifeline.org",
        description:
          "Call or text 988. Free, confidential support 24/7. Losing a job can be devastating — it's okay to ask for help.",
      },
      {
        name: "NAMI (National Alliance on Mental Illness)",
        url: "https://www.nami.org/help",
        description:
          "Free support groups and resources. Many people experience depression and anxiety after job loss — you're not alone.",
      },
      {
        name: "Open Path Collective",
        url: "https://openpathcollective.org",
        description:
          "Affordable therapy sessions ($30-$80) for people without insurance or with financial hardship.",
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-3">
        Resources — Your Layoff Survival Kit
      </h1>
      <p className="text-lg text-gray-600 mb-10">
        Everything you need in one place. Unemployment benefits are just the
        start — here&apos;s the rest of what you should know about.
      </p>

      {/* Ad Placeholder */}
      <div className="bg-gray-100 border border-dashed border-gray-300 rounded-lg p-4 mb-10 text-center text-sm text-gray-400">
        Advertisement
      </div>

      <div className="space-y-12">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span>{section.icon}</span>
              {section.title}
            </h2>
            <div className="space-y-4">
              {section.resources.map((resource) => (
                <div
                  key={resource.name}
                  className="border border-gray-200 rounded-lg p-5 hover:border-blue-300 transition-colors"
                >
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-blue-600 hover:text-blue-800"
                  >
                    {resource.name} &rarr;
                  </a>
                  <p className="text-gray-600 mt-1">{resource.description}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Ad Placeholder */}
      <div className="bg-gray-100 border border-dashed border-gray-300 rounded-lg p-4 mt-10 text-center text-sm text-gray-400">
        Advertisement
      </div>

      {/* Bottom note */}
      <section className="mt-12 bg-gray-50 rounded-lg p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          You&apos;re Going to Be Okay
        </h2>
        <p className="text-gray-700">
          Losing a job is one of the most stressful things you can go through.
          But remember: this is temporary. File for unemployment, take care of
          the basics, lean on your network, and give yourself some grace. Millions
          of people go through this every year and come out the other side.
          You will too.
        </p>
      </section>
    </div>
  );
}
