import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Fast Track Careers: High-Paying Jobs With Short Training",
  description:
    "Well-paying careers you can start in weeks or months, not years. Certifications, trade schools, and training programs that get you earning fast. Salary data, job outlook, and links to get started.",
  path: "/fast-track-careers",
  keywords: [
    "high paying jobs short training",
    "certificate programs that pay well",
    "trade school careers",
    "fast track career change",
    "quick certifications high salary",
  ],
});

const quickStart = [
  {
    title: "Phlebotomist",
    training: "4–12 weeks",
    salary: "$35K–$42K",
    outlook: "Growing 8-10%, high demand in labs, hospitals, blood banks",
    description:
      "Draw blood from patients for tests, transfusions, or donations. One of the fastest healthcare entries, many programs are just 4 weeks. Get certified through NHA.",
    link: "https://www.nhanow.com/certification/nha-certifications/certified-phlebotomy-technician-(cpt)",
  },
  {
    title: "Certified Nursing Assistant (CNA)",
    training: "4–12 weeks",
    salary: "$33K–$42K",
    outlook: "Strong, massive demand in nursing homes and home health",
    description:
      "Assist patients with daily living activities under nurse supervision. State-approved programs are short and widely available. Great stepping stone to nursing if you want to advance later.",
    link: "https://www.redcross.org/take-a-class/cna",
  },
  {
    title: "Medical Billing & Coding",
    training: "4–12 weeks (accelerated)",
    salary: "$42K–$55K",
    outlook: "Strong, 7-8% growth, remote work widely available",
    description:
      "Translate medical procedures into standardized codes for insurance billing. One of the few healthcare careers you can do 100% remotely. AAPC certification is the gold standard.",
    link: "https://www.aapc.com/",
  },
  {
    title: "CDL Truck Driver",
    training: "3–8 weeks",
    salary: "$50K–$80K+",
    outlook: "Huge shortage, companies are desperate for drivers",
    description:
      "One of the absolute fastest paths to a good paycheck. Many trucking companies will pay for your CDL training in exchange for a work commitment.",
    link: "https://www.fmcsa.dot.gov/registration/commercial-drivers-license",
  },
  {
    title: "Insurance Claims Adjuster",
    training: "2–6 weeks",
    salary: "$48K–$80K (independent: $100K+)",
    outlook: "Strong, especially during storm seasons",
    description:
      "Assess insurance claims and determine payouts. During hurricanes and natural disasters, adjusters can earn a year's salary in a few months. License requirements vary by state.",
    link: "https://adjusterpro.com/become-a-claims-adjuster-in-5-steps/",
  },
  {
    title: "EKG/ECG Technician",
    training: "4–8 weeks",
    salary: "$35K–$45K",
    outlook: "Growing, cardiac care demand is steady",
    description:
      "Operate electrocardiogram equipment to monitor heart activity. Quick certification through NHA, and jobs are available in every hospital and cardiology office.",
    link: "https://www.nhanow.com/certification/nha-certifications/certified-ekg-technician-(cet)",
  },
  {
    title: "Pharmacy Technician",
    training: "8–12 weeks",
    salary: "$36K–$46K",
    outlook: "Growing 5-6%, retail and hospital pharmacy demand",
    description:
      "Assist pharmacists in dispensing medications and managing inventory. PTCB certification opens doors at every CVS, Walgreens, and hospital pharmacy in the country.",
    link: "https://www.ptcb.org/",
  },
  {
    title: "Forklift Operator (OSHA Certified)",
    training: "1–3 days",
    salary: "$35K–$50K",
    outlook: "Strong, warehousing and logistics are booming",
    description:
      "The fastest certification on this list. Get OSHA forklift certified in a day or two and start working in warehouses, distribution centers, or construction sites immediately.",
    link: "https://www.osha.gov/training/outreach",
  },
  {
    title: "FAA Drone Pilot (Part 107)",
    training: "1–4 weeks",
    salary: "$40K–$75K (freelance: $100K+)",
    outlook: "Booming, real estate, agriculture, construction, film all need pilots",
    description:
      "Study for and pass the FAA Part 107 exam to fly drones commercially. Freelance drone pilots for real estate photography, inspections, and surveying earn great money.",
    link: "https://www.faa.gov/uas/commercial_operators",
  },
  {
    title: "Home Health Aide",
    training: "2–4 weeks",
    salary: "$30K–$38K",
    outlook: "Very strong, 22-25% growth, aging population",
    description:
      "Provide in-home personal care to elderly or disabled patients. Training is short, demand is massive, and it's meaningful work. Great entry into healthcare.",
    link: "https://www.nahc.org/",
  },
  {
    title: "Personal Trainer (NASM/ACE)",
    training: "4–12 weeks",
    salary: "$40K–$65K (top trainers: $100K+)",
    outlook: "Growing, wellness industry continues expanding",
    description:
      "Get NASM or ACE certified and start training clients at gyms, studios, or independently. Online training has exploded the market, you can build a client base from anywhere.",
    link: "https://www.nasm.org/become-a-personal-trainer",
  },
  {
    title: "Pest Control Technician",
    training: "4–12 weeks",
    salary: "$37K–$50K (specialized: $65K+)",
    outlook: "Steady demand, pests don't take days off",
    description:
      "Get state-certified and start immediately. Termite inspectors and commercial specialists earn significantly more. Companies often train you on the job.",
    link: "https://www.briostack.com/blog/how-to-become-a-pest-control-technician",
  },
  {
    title: "Notary Public / Loan Signing Agent",
    training: "Days (varies by state)",
    salary: "$40K–$75K (signing agents: $100K+)",
    outlook: "Steady, real estate transactions always need notaries",
    description:
      "Become a notary in days, then add loan signing agent training to earn $75-200 per signing. Flexible schedule, work on your own terms. Some states are easier than others.",
    link: "https://www.nationalnotary.org/",
  },
  {
    title: "Medical Assistant",
    training: "8–12 weeks (accelerated)",
    salary: "$37K–$46K",
    outlook: "Very strong, 14-16% growth, one of the fastest in healthcare",
    description:
      "Perform clinical and administrative tasks in physician offices. Accelerated programs get you certified fast, and jobs are everywhere. Great launchpad for a healthcare career.",
    link: "https://www.aama-ntl.org/",
  },
  {
    title: "Solar Panel Installer",
    training: "1–6 months",
    salary: "$44K–$67K",
    outlook: "Outstanding, 42% growth projected, one of fastest-growing jobs in America",
    description:
      "Install, maintain, and repair solar systems on rooftops. Entry-level training is quick, NABCEP certification boosts pay. The green energy boom makes this a future-proof career.",
    link: "https://www.solarenergy.org/become-a-solar-installer/",
  },
  {
    title: "OSHA Safety Certification",
    training: "2 days–1 week",
    salary: "$55K–$95K (managers: $110K–$140K)",
    outlook: "Growing, every construction site, factory, and warehouse needs safety compliance",
    description:
      "OSHA 10-Hour (2 days) or 30-Hour (1 week) card is a gateway credential for construction and manufacturing. Safety officers and managers earn six figures.",
    link: "https://www.osha.gov/training/outreach",
  },
  {
    title: "Bartender",
    training: "1–4 weeks",
    salary: "$40K–$60K with tips (top: $100K+)",
    outlook: "Steady, always demand in hospitality",
    description:
      "Alcohol server cert takes hours, bartending school 1-4 weeks. Income is heavily tip-dependent, top bartenders in cities earn six figures. Great bridge income while job searching.",
    link: "https://servingalcohol.com/",
  },
  {
    title: "Patient Care Technician (PCT)",
    training: "6–12 weeks",
    salary: "$33K–$45K",
    outlook: "Strong, hospitals face chronic nursing-support shortages",
    description:
      "A step up from CNA with broader clinical duties combined: phlebotomy, EKG, and direct patient care. Community colleges and career schools offer accelerated programs. Honest catch: entry pay is close to CNA rates, but the combined skill set makes you more competitive for hospital jobs versus nursing-home-only roles.",
    link: "https://www.nhanow.com/certification/nha-certifications/certified-patient-care-technician-assistant-(cpct-a)",
  },
  {
    title: "EMT-Basic",
    training: "8–12 weeks (full-time) or 4–6 months (part-time)",
    salary: "$35K–$45K entry",
    outlook: "Severe national shortage, ambulance services, fire departments, hospitals all hiring",
    description:
      "Learn emergency medical response, pass the National Registry exam, get state certified. Ambulance services and fire departments hire EMT-Bs with zero experience. Honest catch: entry pay is modest and the work is physically and emotionally demanding. Many use it as a stepping stone to paramedic or nursing.",
    link: "https://www.nremt.org/",
  },
  {
    title: "Direct Support Professional (DSP)",
    training: "2–6 weeks (agency-provided)",
    salary: "$30K–$42K",
    outlook: "Chronic hiring shortage in disability services",
    description:
      "Support adults with developmental disabilities in group homes, day programs, or in-home settings. Agencies typically train you on the job, no pre-employment cert needed in most states. Honest catch: pay is on the lower end, but the work is stable, benefits are common, and agencies are actively desperate for reliable staff.",
    link: "https://www.nadsp.org/",
  },
  {
    title: "Veterinary Assistant",
    training: "4–12 weeks",
    salary: "$30K–$40K",
    outlook: "Good, clinics and animal hospitals hiring consistently",
    description:
      "Assist veterinarians and vet techs with animal care, restraints, lab work, and client interaction. NAVTA-approved programs are the gold standard. Honest catch: entry pay is modest. Many use this as a stepping stone to Veterinary Technician (2-year degree with significantly higher pay).",
    link: "https://www.navta.net/page/NAVTAApprovedProgram",
  },
  {
    title: "Water/Wastewater Treatment Operator",
    training: "Operator-in-Training: hired first, state license completed on the job over 6–12 months",
    salary: "$45K–$75K (up to $120K with experience)",
    outlook: "Excellent, BLS projects ~10,700 openings per year from retirements alone",
    description:
      "Run municipal water or wastewater treatment plants. Many utilities hire you as Operator-in-Training and pay for your state licensing while you work. Stable government jobs with pensions and benefits are common. Honest catch: involves physical labor and on-call/shift rotations. Upside: low glamour, high stability, and the retirement wave means openings for years.",
    link: "https://www.bls.gov/ooh/production/water-and-wastewater-treatment-plant-and-system-operators.htm",
  },
  {
    title: "School Bus Driver",
    training: "4–8 weeks (districts typically pay for your CDL)",
    salary: "$35K–$50K + $1,500–$3,500 sign-on bonuses common",
    outlook: "National shortage, districts are actively recruiting",
    description:
      "Drive students to and from school. Most districts offer paid CDL training, you earn while getting licensed. Schedule fits school hours, which makes it popular with parents. Honest catch: split shifts (morning + afternoon), and some districts lose drivers to higher-paying trucking jobs once the CDL is in hand.",
    link: "https://www.bls.gov/ooh/transportation-and-material-moving/bus-drivers.htm",
  },
  {
    title: "Sterile Processing Technician",
    training: "4–16 weeks",
    salary: "$36K–$50K",
    outlook: "Steady demand, hospitals consistently hire and the role does not go remote",
    description:
      "Decontaminate, sterilize, assemble, and distribute surgical instruments for hospitals and surgery centers. The CRCST certification from HSPA is the standard credential and hospital-run training programs are common. Honest caveat: the work is physically active, often on your feet for full shifts, and sometimes runs evenings or overnights since instruments are processed around the clock.",
    link: "https://myhspa.org/certification/crcst",
  },
];

const quickCerts = [
  {
    title: "Certified ScrumMaster (CSM)",
    training: "2 days",
    salary: "$90K–$130K",
    outlook: "Strong, every tech company uses Agile",
    description:
      "A two-day course that qualifies you for project management and Scrum Master roles. If you have any office/tech background, this is one of the fastest paths to a six-figure salary.",
    link: "https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster",
  },
  {
    title: "Google Career Certificates",
    training: "3–6 months",
    salary: "$50K–$90K",
    outlook: "Excellent, Google employer consortium hires directly",
    description:
      "Certificates in IT Support, Data Analytics, UX Design, Project Management, and Cybersecurity. Recognized by 150+ employers including Google, Walmart, and Bank of America. Financial aid available.",
    link: "https://grow.google/certificates/",
  },
  {
    title: "CompTIA A+ (IT Support)",
    training: "2–4 months",
    salary: "$45K–$65K",
    outlook: "Growing, entry point for all IT careers",
    description:
      "The industry-standard entry-level IT certification. Opens doors to help desk, tech support, and system admin roles. No prior experience required, just study and pass two exams.",
    link: "https://www.comptia.org/certifications/a",
  },
  {
    title: "AWS Cloud Practitioner",
    training: "1–3 months",
    salary: "$70K–$120K",
    outlook: "Booming, cloud computing is the fastest-growing field",
    description:
      "Entry-level Amazon Web Services certification. Cloud skills are in massive demand and this cert gets your foot in the door. Free training available through AWS Skill Builder.",
    link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
  },
  {
    title: "QuickBooks Online Certification",
    training: "1–2 weeks",
    salary: "$45K–$65K",
    outlook: "Steady, every small business needs bookkeeping",
    description:
      "A 20-hour program that qualifies you for bookkeeper and accounting assistant roles. Extremely fast to complete and immediately marketable, especially for freelance work.",
    link: "https://quickbooks.intuit.com/accountants/training-certification/",
  },
  {
    title: "Real Estate License",
    training: "2–4 months",
    salary: "$50K–$100K+",
    outlook: "Good, commission-based, unlimited earning potential",
    description:
      "Complete your state's required coursework (40-200 hours depending on state), pass the exam, and start earning commissions. Income is uncapped, top agents earn $200K+.",
    link: "https://www.kapre.com/resources/real-estate/requirements-real-estate-license",
  },
  {
    title: "PMP (Project Management Professional)",
    training: "3–6 months",
    salary: "$90K–$130K",
    outlook: "Excellent, needed in every industry",
    description:
      "The gold standard for project managers. Requires 36 months of experience leading projects (or 60 months without a degree). Average salary bump of 25% after certification.",
    link: "https://www.pmi.org/certifications/project-management-pmp",
  },
  {
    title: "CompTIA Security+ (Cybersecurity)",
    training: "2–4 months",
    salary: "$65K–$100K",
    outlook: "Booming, 3.5 million unfilled cybersecurity jobs globally",
    description:
      "The entry point to cybersecurity careers. Required for many government and defense contractor roles. Study, pass one exam, and enter one of the most in-demand fields in the world.",
    link: "https://www.comptia.org/certifications/security",
  },
  {
    title: "Data Center Technician",
    training: "2–4 months (CompTIA Server+ self-study path)",
    salary: "$45K–$70K (more with overtime and shift premiums)",
    outlook: "Strong, AI infrastructure expansion is driving sustained hiring at hyperscale data centers",
    description:
      "Hands-on hardware and networking work inside the buildings that run the modern internet (AWS, Google, Microsoft, Meta, and a growing list of colocation providers). Tasks include rack installs, cable management, hardware swaps, and basic troubleshooting. CompTIA Server+ is the most common entry credential, often paired with Network+. Honest caveat: most roles are shift work (12-hour days/nights, on-call rotations) and tied to physical sites in specific metros (Northern Virginia, Phoenix, Dallas, Columbus, Atlanta).",
    link: "https://www.comptia.org/certifications/server",
  },
];

const trades = [
  {
    title: "Elevator Installer/Repairer",
    training: "4-year apprenticeship (paid)",
    salary: "$90K–$140K+",
    outlook: "Excellent, strong union, aging workforce creating openings",
    description:
      "The highest-paid trade. You earn while you learn through a paid apprenticeship. Top earners make $180K+ in high-demand areas.",
  },
  {
    title: "Electrician",
    training: "4–5 year apprenticeship (paid) or trade school + apprenticeship",
    salary: "$60K–$100K+",
    outlook: "Booming, green energy and EV infrastructure driving massive demand",
    description:
      "Always in demand, and the green energy transition is creating even more jobs. Paid apprenticeships mean you earn from day one.",
  },
  {
    title: "HVAC Technician",
    training: "6 months–2 years",
    salary: "$48K–$80K+",
    outlook: "Strong, every building needs heating and cooling",
    description:
      "One of the faster trades to enter. Trade school programs can be completed in 6-12 months, then you apprentice. Recession-proof, people always need heat and AC.",
  },
  {
    title: "Plumber",
    training: "4–5 year apprenticeship (paid) or trade school",
    salary: "$55K–$90K+",
    outlook: "Excellent, massive shortage of plumbers nationwide",
    description:
      "Plumbers are in short supply everywhere. Master plumbers who run their own business can earn $150K+. Can't be outsourced or automated.",
  },
  {
    title: "Dental Hygienist",
    training: "2-year associate degree",
    salary: "$70K–$100K",
    outlook: "Very strong, projected 7% growth through 2032",
    description:
      "One of the best-paying associate degree careers. Two years of school, then a comfortable schedule (many work 3-4 days/week) with excellent pay.",
  },
  {
    title: "Wind Turbine Technician",
    training: "Certificate or 2-year degree",
    salary: "$55K–$80K",
    outlook: "Fastest growing job in America, 45-50% growth",
    description:
      "The single fastest growing occupation in the country. Short training, good pay, and you're literally building the future. Programs available at many community colleges.",
  },
  {
    title: "Commercial Truck Driver (CDL)",
    training: "3–8 weeks",
    salary: "$50K–$80K+",
    outlook: "Huge shortage, companies are desperate for drivers",
    description:
      "One of the absolute fastest paths to a good paycheck. CDL training takes weeks, not months. Many trucking companies will pay for your training in exchange for a commitment.",
  },
  {
    title: "Welding",
    training: "6 months–2 years",
    salary: "$45K–$75K+ (specialized welders earn $100K+)",
    outlook: "Strong, infrastructure spending driving demand",
    description:
      "Specialized welders (underwater, pipeline, aerospace) earn six figures. Even general welders earn solid wages with short training times.",
  },
];

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
    url: "https://www.aacc.nche.edu/research-trends/ccfinder/",
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
        You don&apos;t need a 4-year degree to earn a great living. These careers pay well
        and you can start training today, some in as little as 2 days, most in under 6 months.
      </p>
      <p className="text-gray-600 mb-10">
        Whether you want to pivot to tech, learn a trade, or get certified in something new,
        this page has the careers, salary data, job outlook, and links to get started.
      </p>

      {/* Quick Start, 12 Weeks or Less */}
      <section className="mb-14">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Quick Start, 12 Weeks or Less</h2>
          <p className="text-gray-600">These careers get you earning the fastest. No degree required, most need no prior experience. Sorted by training time.</p>
        </div>

        <div className="space-y-4">
          {quickStart.map((job) => (
            <div key={job.title} className="border border-gray-200 rounded-xl p-6 hover:border-red-300 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
                <div className="flex gap-2 shrink-0">
                  <span className="text-xs font-semibold bg-red-100 text-red-800 px-3 py-1 rounded-full">{job.training}</span>
                  <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{job.salary}</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-2">{job.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Outlook: {job.outlook}</span>
                <a href={job.link} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-red-600 hover:text-red-800">
                  Get started &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Online Certifications */}
      <section className="mb-14">
        <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Online Certifications, Level Up From Your Couch</h2>
          <p className="text-gray-600">These can all be done online, on your own schedule. Most don&apos;t require prior experience.</p>
        </div>

        <div className="space-y-4">
          {quickCerts.map((cert) => (
            <div key={cert.title} className="border border-gray-200 rounded-xl p-6 hover:border-teal-300 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <h3 className="text-lg font-bold text-gray-900">{cert.title}</h3>
                <div className="flex gap-2 shrink-0">
                  <span className="text-xs font-semibold bg-teal-100 text-teal-800 px-3 py-1 rounded-full">{cert.training}</span>
                  <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{cert.salary}</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-2">{cert.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Outlook: {cert.outlook}</span>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-teal-600 hover:text-teal-800">
                  Get started &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trade Careers */}
      <section className="mb-14">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Skilled Trades, Build Something Real</h2>
          <p className="text-gray-600">Hands-on careers that can&apos;t be outsourced or automated. Many offer paid apprenticeships, earn while you learn.</p>
        </div>

        <div className="space-y-4">
          {trades.map((trade) => (
            <div key={trade.title} className="border border-gray-200 rounded-xl p-6 hover:border-amber-300 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <h3 className="text-lg font-bold text-gray-900">{trade.title}</h3>
                <div className="flex gap-2 shrink-0">
                  <span className="text-xs font-semibold bg-amber-100 text-amber-800 px-3 py-1 rounded-full">{trade.training}</span>
                  <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{trade.salary}</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-2">{trade.description}</p>
              <span className="text-xs text-gray-500">Outlook: {trade.outlook}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Find Programs */}
      <section className="mb-14">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Find Programs Near You</h2>
          <p className="text-gray-600">Search tools to find training programs, trade schools, apprenticeships, and certifications in your state.</p>
        </div>

        <div className="space-y-4">
          {findPrograms.map((program) => (
            <div key={program.name} className="border border-gray-200 rounded-xl p-5 hover:border-blue-300 transition-colors">
              <a href={program.url} target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-blue-600 hover:text-blue-800">
                {program.name} &rarr;
              </a>
              <p className="text-gray-600 text-sm mt-1">{program.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gray-900 text-white rounded-xl p-8 text-center">
        <h2 className="text-teal-400 font-bold text-xl mb-3">Not Sure Where to Start?</h2>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          Visit your local American Job Center, they offer free career counseling,
          skills assessments, and can connect you with funded training programs you
          didn&apos;t know existed. Many training programs are completely free for
          unemployed workers.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://www.careeronestop.org/LocalHelp/AmericanJobCenters/american-job-centers.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-teal-500 text-gray-900 font-semibold px-8 py-3 rounded-lg hover:bg-teal-400 transition-colors"
          >
            Find Your Local Job Center &rarr;
          </a>
          <Link
            href="/resources"
            className="inline-block border-2 border-teal-500 text-teal-400 font-semibold px-8 py-3 rounded-lg hover:bg-teal-500/10 transition-colors"
          >
            Browse All Resources
          </Link>
        </div>
      </section>

      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Fast Track Careers, High-Paying Jobs With Short Training",
        description: "Well-paying careers you can start in weeks or months. Certifications, trade schools, and training programs.",
        publisher: { "@type": "Organization", name: "The Layoff Guide" },
      })}} />
    </div>
  );
}
