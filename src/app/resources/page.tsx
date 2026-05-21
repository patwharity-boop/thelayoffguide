import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Resources: Everything You Need After a Layoff",
  description:
    "One-stop shop for everything you need after losing your job. Resume builders, job boards, food assistance, health insurance, LinkedIn tips, and more.",
  path: "/resources",
});

const sections = [
  {
    title: "Resume & Job Search",
    icon: "📄",
    resources: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com",
        description:
          "Update your profile, turn on 'Open to Work', and start networking. LinkedIn Premium offers a free 1-month trial, use it for InMail and seeing who viewed your profile.",
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
          "Free, clean resume templates. No need to pay for a resume builder, these work great.",
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
          "If you just lost your income, you likely qualify. No shame in it, this is exactly what it's for. Apply through your state's SNAP office.",
      },
      {
        name: "Find Your State SNAP Office",
        url: "https://www.fns.usda.gov/snap/state-directory",
        description:
          "Directory of every state's SNAP program with links to apply online.",
      },
      {
        name: "Feeding America, Find a Food Bank",
        url: "https://www.feedingamerica.org/find-your-local-foodbank",
        description:
          "Find a food bank near you for immediate help while your SNAP application is processed.",
      },
      {
        name: "Flashfood",
        url: "https://www.flashfood.com",
        description:
          "App that sells groceries near their best-by date at up to 50% off. Available at major grocery chains. Great way to stretch your food budget.",
      },
      {
        name: "Too Good To Go",
        url: "https://www.toogoodtogo.com",
        description:
          "Restaurants and stores sell surplus food at a fraction of the price. Pay $3-5 for bags of food worth $15-20. Available in most major cities.",
      },
      {
        name: "GasBuddy",
        url: "https://www.gasbuddy.com",
        description:
          "Free app that finds the cheapest gas near you. Also has a pay-with-GasBuddy card that saves an extra 5-25 cents per gallon.",
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
          "Losing your job is a qualifying life event, you can sign up for marketplace insurance outside of open enrollment. Often cheaper than COBRA.",
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
          "Low Income Home Energy Assistance Program, help paying heating and cooling bills.",
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
          "Free job search help, resume reviews, skills training, and career counseling. Funded by the government, already paid for with your tax dollars.",
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
          "Call or text 988. Free, confidential support 24/7. Losing a job can be devastating, it's okay to ask for help.",
      },
      {
        name: "NAMI (National Alliance on Mental Illness)",
        url: "https://www.nami.org/help",
        description:
          "Free support groups and resources. Many people experience depression and anxiety after job loss, you're not alone.",
      },
      {
        name: "Open Path Collective",
        url: "https://openpathcollective.org",
        description:
          "Affordable therapy sessions ($30-$80) for people without insurance or with financial hardship.",
      },
    ],
  },
  {
    title: "Medication & Prescription Assistance",
    icon: "💊",
    resources: [
      {
        name: "NeedyMeds, Prescription Assistance Finder",
        url: "https://www.needymeds.org/",
        description:
          "Search by medication name to find patient assistance programs, discount coupons, and free/low-cost options. The most comprehensive database for finding help with prescription costs.",
      },
      {
        name: "RxAssist, Patient Assistance Programs",
        url: "https://www.rxassist.org/",
        description:
          "A free database of pharmaceutical company programs that provide free or low-cost brand-name medications to people who can't afford them. Most major drug makers offer these.",
      },
      {
        name: "GoodRx, Free Prescription Discounts",
        url: "https://www.goodrx.com/",
        description:
          "Free coupons that can cut your prescription costs by up to 80% at any pharmacy. No insurance needed. Just show the coupon on your phone at the pharmacy counter.",
      },
      {
        name: "Mark Cuban Cost Plus Drugs",
        url: "https://costplusdrugs.com/",
        description:
          "Generic medications at manufacturer cost plus a small markup. Often 90%+ cheaper than pharmacy prices. No insurance needed, ships to your door.",
      },
      {
        name: "PAN Foundation, FundFinder",
        url: "https://www.panfoundation.org/how-to-find-financial-assistance-for-your-prescription-medications/",
        description:
          "Free tool that searches 200+ assistance programs from charitable foundations to find help with your specific medications. Takes 2 minutes.",
      },
      {
        name: "Medicaid, Free Health Coverage Including Prescriptions",
        url: "https://www.medicaid.gov/",
        description:
          "If your income dropped to zero, you likely qualify for Medicaid which covers prescriptions at little or no cost. Apply any time, no enrollment window.",
      },
    ],
  },
  {
    title: "Interviewing & Career Coaching",
    icon: "🎯",
    resources: [
      {
        name: "Google Interview Warmup",
        url: "https://grow.google/interview-warmup",
        description:
          "A free AI tool from Google that listens to your practice answers and gives feedback on pacing and content. No signup, no credit card, just open it and start practicing.",
      },
      {
        name: "Pramp, Free Mock Interviews",
        url: "https://www.pramp.com/",
        description:
          "Get matched with other job seekers for free mock interviews, you take turns and give honest feedback. Five free sessions a month, real practice with real people.",
      },
      {
        name: "Levels.fyi, Salary Data",
        url: "https://www.levels.fyi/",
        description:
          "Over a million data points on what companies actually pay, searchable by company, role, level, and location. Know your market value before you walk into a negotiation.",
      },
      {
        name: "InterviewBit, Question Database",
        url: "https://www.interviewbit.com/",
        description:
          "A massive free database of real interview questions organized by job type, with answers and explanations. No paywall, no pressure.",
      },
      {
        name: "SkillUp Coalition, Free Career Coaching",
        url: "https://skillup.org/",
        description:
          "Free career coaching sessions via Zoom with real coaches, plus videos and practical tips. Having a coach in your corner makes a bigger difference than you'd think.",
      },
    ],
  },
  {
    title: "Social Services & Government Help",
    icon: "🏛️",
    resources: [
      {
        name: "WIC (Women, Infants & Children)",
        url: "https://www.fns.usda.gov/wic",
        description:
          "If you're pregnant, a new parent, or have kids under 5, WIC helps you get healthy food through free vouchers. The income limits are higher than most people think.",
      },
      {
        name: "Medicaid, Free Health Coverage",
        url: "https://www.medicaid.gov/",
        description:
          "Free or very low-cost health coverage when your income drops. You can apply any time of year. If your income just went to zero, you very likely qualify.",
      },
      {
        name: "TANF, Cash Assistance",
        url: "https://www.acf.hhs.gov/ofa/programs/tanf",
        description:
          "Temporary cash payments for families with children to help cover basics like rent and food. Contact your state's human services department to apply.",
      },
      {
        name: "Section 8, Housing Assistance",
        url: "https://www.hud.gov/topics/housing_choice_voucher_program_section_8",
        description:
          "Pays a portion of your rent directly to your landlord. Contact your local Public Housing Agency to get on the list, apply early even if you're not desperate yet.",
      },
      {
        name: "Lifeline, Free/Discounted Phone & Internet",
        url: "https://www.fcc.gov/lifeline-consumers",
        description:
          "Cuts up to $9.25/month off your phone or internet bill. If you're already on Medicaid, SNAP, or SSI, you likely qualify automatically.",
      },
      {
        name: "211, Your Local Safety Net",
        url: "https://www.211.org/",
        description:
          "Call 2-1-1 or text your zip code to 898-211 to talk to a real person who knows every assistance program in your area, food, housing, childcare, job training, all of it.",
      },
    ],
  },
  {
    title: "Resume Writing & LinkedIn Optimization",
    icon: "📝",
    resources: [
      {
        name: "Teal, AI Resume Builder",
        url: "https://www.tealhq.com/",
        description:
          "Free all-in-one platform used by 4 million+ job seekers. Build unlimited resumes, get ATS analysis, and track applications. Tailors your resume to each job posting.",
      },
      {
        name: "Resume Worded, Instant Resume Score",
        url: "https://resumeworded.com/score",
        description:
          "Upload your resume and get an instant AI-powered score with specific feedback on what hiring managers look for. Takes 30 seconds.",
      },
      {
        name: "Jobscan, ATS Keyword Matcher",
        url: "https://www.jobscan.co/",
        description:
          "Paste your resume and a job posting, and Jobscan tells you exactly which keywords the ATS is looking for. 5 free scans per month.",
      },
      {
        name: "Enhancv, ATS Resume Guide & Examples",
        url: "https://enhancv.com/resume-examples/",
        description:
          "Detailed breakdown of what makes a resume ATS-readable, with 20+ real examples. If you've been applying and hearing nothing back, this might be why.",
      },
      {
        name: "Indeed, Cover Letter Templates",
        url: "https://www.indeed.com/career-advice/cover-letter-samples",
        description:
          "Free cover letter templates organized by industry and job type. Practical examples you can customize in 20 minutes.",
      },
      {
        name: "Canva, AI Professional Headshot",
        url: "https://www.canva.com/features/ai-headshot-generator/",
        description:
          "Turn a casual selfie into a polished LinkedIn-ready professional headshot for free. Two free credits per month, no studio needed.",
      },
    ],
  },
  {
    title: "Legal Rights & Protections",
    icon: "⚖️",
    resources: [
      {
        name: "WARN Act, 60-Day Notice Requirement",
        url: "https://www.dol.gov/agencies/eta/layoffs/warn",
        description:
          "Employers with 100+ workers must give 60 days' notice before mass layoffs. If they skipped the notice, they may owe you back pay. Worth checking.",
      },
      {
        name: "Wrongful Termination Basics, Cornell Law",
        url: "https://www.law.cornell.edu/wex/wrongful_termination",
        description:
          "Plain-English explanation of when you can take legal action, discrimination, breach of contract, retaliation. Even at-will employment has real limits.",
      },
      {
        name: "COBRA Rights & Timelines",
        url: "https://www.healthcare.gov/unemployed/cobra-coverage/",
        description:
          "Your guide to keeping health insurance after job loss. 60 days to elect, up to 18 months of coverage. Expensive but keeps your same doctors.",
      },
      {
        name: "Non-Compete Laws by State",
        url: "https://www.paycor.com/resource-center/articles/non-compete-agreement-by-state/",
        description:
          "State-by-state breakdown of whether your non-compete is enforceable. Some states ban them entirely. Don't let a non-compete scare you out of applying.",
      },
      {
        name: "LawHelp.org, Free Legal Aid by State",
        url: "https://www.lawhelp.org/",
        description:
          "Find free or low-cost legal aid for employment issues, wage theft, discrimination, wrongful termination, severance disputes. Real nonprofit attorneys who can represent you.",
      },
    ],
  },
  {
    title: "Freelancing & Gig Work",
    icon: "💼",
    resources: [
      {
        name: "Upwork",
        url: "https://www.upwork.com/",
        description:
          "The largest freelance marketplace, writing, design, coding, virtual assistant work. Start bidding immediately. Many people earn serious income here while job searching.",
      },
      {
        name: "Fiverr",
        url: "https://www.fiverr.com/",
        description:
          "Set up a profile offering specific services at your own price. Clients come to you once your profile is live, lower pressure than bidding for work.",
      },
      {
        name: "TaskRabbit, Quick Local Jobs",
        url: "https://www.taskrabbit.com/",
        description:
          "Pick up local tasks like furniture assembly, moving help, or handyman work at $25-50+/hour. If you need cash fast, this is one of the quickest ways.",
      },
      {
        name: "Toptal, Premium Freelancing",
        url: "https://www.toptal.com/",
        description:
          "Selective platform (top 3%) matching developers, designers, and consultants with serious clients. Vetting process, but consistent, well-paying work if you get in.",
      },
      {
        name: "How Gig Income Affects Unemployment",
        url: "https://www.dol.gov/general/topic/unemployment-insurance",
        description:
          "Critical: you MUST report all gig earnings when you certify weekly. Each state handles deductions differently. Report honestly, not reporting creates bigger problems later.",
      },
    ],
  },
  {
    title: "Networking & Community",
    icon: "🤝",
    resources: [
      {
        name: "r/unemployment, Reddit Community",
        url: "https://www.reddit.com/r/unemployment/",
        description:
          "Real people sharing what they're going through and offering practical advice. One of the most supportive corners of the internet. Read the state-specific threads.",
      },
      {
        name: "Blind, Anonymous Professional Community",
        url: "https://www.teamblind.com/",
        description:
          "12 million+ verified professionals sharing honest conversations about layoffs, salaries, and companies, anonymously. The layoffs channel has real-time intel.",
      },
      {
        name: "American Job Centers, Local Help",
        url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/american-job-centers.aspx",
        description:
          "Nearly 2,300 free government-funded centers offering job search workshops, resume reviews, skills training, and one-on-one career counseling. Walk in, no appointment needed.",
      },
      {
        name: "LinkedIn Job Seeker Groups",
        url: "https://www.linkedin.com/groups/",
        description:
          "Join groups like \"Job Seekers & Career Changers\" or industry-specific communities. Being active gets your name in front of people who are hiring.",
      },
      {
        name: "VolunteerMatch, Network While Giving Back",
        url: "https://www.volunteermatch.org/",
        description:
          "Volunteering fills resume gaps, builds skills, and puts you in rooms with people who might know about your next opportunity. Some of the best jobs come from people you meet when you're not looking.",
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-3">
        Resources, Your Layoff Survival Kit
      </h1>
      <p className="text-lg text-gray-600 mb-10">
        Everything you need in one place. Unemployment benefits are just the
        start, here&apos;s the rest of what you should know about.
      </p>

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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Resources: Everything You Need After a Layoff",
            url: "https://www.thelayoffguide.com/resources",
            description:
              "One-stop shop for everything you need after losing your job. Resume builders, job boards, food assistance, health insurance, LinkedIn tips, and more.",
            isPartOf: {
              "@type": "WebSite",
              name: "The Layoff Guide",
              url: "https://www.thelayoffguide.com",
            },
            mainEntity: {
              "@type": "ItemList",
              itemListElement: sections.map((s, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: s.title,
              })),
            },
          }),
        }}
      />
    </div>
  );
}
