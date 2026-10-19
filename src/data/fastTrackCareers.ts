// Fast-track careers data.
//
// EVERY wage, growth figure and openings count below is from the US Bureau of
// Labor Statistics, Occupational Employment and Wage Statistics (May 2025) and
// Employment Projections (2025-2035), verified 2026-10-19.
//
// Rules for anyone editing this file:
//  1. No wage, growth or openings number goes in without a BLS citation.
//  2. "openings" is projected ANNUAL openings. It matters more than growth
//     percentage for someone who needs work now. A high growth rate on a small
//     occupation is not jobs near the reader.
//  3. If BLS publishes no figure for an occupation, say so. Do not substitute a
//     job-board aggregate.
//  4. Every entry carries a caveat. If you cannot name the downside, you have
//     not researched it yet.

export type Tier = "under-month" | "one-three" | "three-six" | "six-plus";

export interface Career {
  title: string;
  tier: Tier;
  /** Time until you are hireable, not time until you pass an exam. */
  training: string;
  /** Out of pocket. "$0" only where an employer or agency genuinely pays. */
  cost: string;
  /** True only where you are on payroll during training. */
  paidTraining?: boolean;
  /** BLS median plus the 10th-90th spread where published. */
  pay: string;
  /** Projected annual openings. The demand number. */
  openings: string;
  /** BLS growth with BLS's own characterisation. */
  growth: string;
  what: string;
  /** The honest downside. Required. */
  caveat: string;
  link?: string;
  linkLabel?: string;
  /** Where the numbers came from. */
  source: string;
}

export const TIERS: { id: Tier; label: string; blurb: string }[] = [
  {
    id: "under-month",
    label: "Under a month",
    blurb:
      "Fastest route to a paycheck. Pay is lower, but several of these cost you nothing because the employer trains you.",
  },
  {
    id: "one-three",
    label: "One to three months",
    blurb:
      "The sweet spot for most people. Real credentials, real wages, and short enough that unemployment can usually carry you through it.",
  },
  {
    id: "three-six",
    label: "Three to six months",
    blurb:
      "Longer runway, meaningfully better pay. Worth it if your benefits have enough weeks left to cover the gap.",
  },
  {
    id: "six-plus",
    label: "Six months or more",
    blurb:
      "Only worth your time if the money is good. Several of these pay you from week one, which changes the maths entirely. Look for the paid training flag.",
  },
];

const BLS = "BLS, May 2025 wages and 2025-35 projections";

export const careers: Career[] = [
  // ---------------------------------------------------------------- under a month
  {
    title: "Forklift Operator",
    tier: "under-month",
    training: "6 to 8 hours, often a single day",
    cost: "$25 to $200",
    pay: "$46,420 median",
    openings: "About 70,700 a year across material moving operators",
    growth: "1%, slower than average",
    what:
      "Move pallets and freight in warehouses, distribution centres and manufacturing plants. The cheapest and fastest entry on this page.",
    caveat:
      "There is no such thing as an OSHA forklift certification, whatever a training vendor tells you. Federal rule 29 CFR 1910.178(l) puts the duty on the employer: every employer must train and evaluate you themselves, and re-evaluate at least every three years. A paid card from a third party does not make you certified and does not transfer between jobs. Growth is also flat. The openings come from turnover, not expansion.",
    link: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.178",
    linkLabel: "The actual federal rule (29 CFR 1910.178)",
    source: BLS + ". SOC 53-7051.",
  },
  {
    title: "Security Guard (Unarmed)",
    tier: "under-month",
    training: "4 to 42 hours depending on your state, plus a background check",
    cost: "$50 to $200 for a state guard card",
    pay: "$38,050 median",
    openings: "About 157,200 a year",
    growth: "1%, slower than average",
    what:
      "Offices, retail, events, construction sites and hospitals all hire constantly. One of the easiest jobs on this page to actually get.",
    caveat:
      "Pay is the lowest of the quick entries and growth is flat. Hiring is constant because people leave constantly, which tells you something about the work. Armed and specialised posts pay more but need experience first.",
    link: "https://www.bls.gov/ooh/protective-service/security-guards.htm",
    linkLabel: "BLS occupational profile",
    source: BLS + ". SOC 33-9032.",
  },
  {
    title: "Home Health Aide",
    tier: "under-month",
    training: "2 to 4 weeks. Federal floor is 75 hours including 16 supervised",
    cost: "$0 at a Medicare-certified agency",
    paidTraining: true,
    pay: "$35,800 median",
    openings: "Among the largest of any occupation in the country",
    growth: "18%, much faster than average",
    what:
      "Help people stay in their own homes with daily living, basic health monitoring and company. Agencies are required to train you themselves, so you pay nothing.",
    caveat:
      "This is the lowest paid job on the page, about $17.21 an hour at the median, and in a number of states aides earn at or barely above the state minimum. The growth figure is genuinely enormous and the pay is genuinely poor. Both things are true and you should decide knowing both.",
    link: "https://www.careeronestop.org/toolkit/training/find-local-training.aspx",
    linkLabel: "Find a local training programme",
    source: BLS + ". SOC 31-1120, home health and personal care aides.",
  },
  {
    title: "Direct Support Professional",
    tier: "under-month",
    training: "2 to 6 weeks, provided by the agency that hires you",
    cost: "$0",
    paidTraining: true,
    pay: "Roughly $35,800 to $45,930 depending on the setting",
    openings: "About 48,900 a year for social and human service assistants",
    growth: "7% to 18% depending on which setting you work in",
    what:
      "Support adults with intellectual and developmental disabilities in group homes or their own homes. Most states require no pre-employment certification, so agencies hire first and train after.",
    caveat:
      "BLS publishes no occupation called direct support professional, so the pay figures above are drawn from the nearest matching occupations rather than measured directly. Treat them as a range, not a promise. The work is emotionally demanding and turnover is high.",
    source:
      BLS + ". No exact SOC match. Nearest: 31-1120, 31-1133 and 21-1093.",
  },

  // ---- added 2026-10-19 after a second BLS sweep. Highest-volume entries first.
  {
    title: "Teacher Assistant / Paraeducator",
    tier: "under-month",
    training: "Weeks. Districts hire mid-year and train you in",
    cost: "A state paraprofessional assessment fee, typically under $100",
    pay: "$36,780 median",
    openings: "About 176,200 a year, the most of anything on this page",
    growth: "0%, little or no change",
    what:
      "Support a classroom teacher, often with special needs students. Districts hire constantly, including mid-year, and the entry bar is some college rather than a degree.",
    caveat:
      "The pay is the problem and we are not going to dress it up. $36,780, frequently on a nine or ten month contract with no summer paycheck, and often part time hours with no benefits. This is a job that stops the bleeding while you work out your next move, not a destination.",
    source: BLS + ". SOC 25-9045.",
  },
  {
    title: "Bookkeeping and Accounting Clerk",
    tier: "under-month",
    training: "Weeks if you already know the work. The QuickBooks credential is short",
    cost: "Low. The software certification is commonly free with an accountant account",
    pay: "$50,670 median, $36,000 to $74,550",
    openings: "About 144,100 a year",
    growth: "Declining 6%, a loss of about 85,600 jobs",
    what:
      "Record transactions, reconcile accounts and run payroll for small businesses. Despite the decline, the sheer size of the occupation means a lot of seats open every year.",
    caveat:
      "This is a shrinking occupation, down 85,600 jobs over the decade, and it is heavily exposed to automation. A QuickBooks certification certifies you in the software, not in bookkeeping, and the vendor aims it at people already practising. If you have no bookkeeping background it will not carry you on its own.",
    source: BLS + ". SOC 43-3031.",
  },
  {
    title: "Quality Control Inspector",
    tier: "under-month",
    training: "Employer trained. A month up to a year on the job",
    cost: "$0",
    paidTraining: true,
    pay: "$48,570 median",
    openings: "About 66,700 a year",
    growth: "3%, about average",
    what:
      "Check parts and products against spec in manufacturing plants. Manufacturers hire on a high school diploma and train in house, so you are earning while you learn the work.",
    caveat:
      "There is no required credential, which cuts both ways. You can start quickly, but you have no portable qualification either, so your pay depends entirely on the employer. The work is repetitive, runs on plant shift schedules, and faces the same automation and offshoring pressure as the lines it inspects.",
    source: BLS + ". SOC 51-9061.",
  },
  {
    title: "Social and Human Service Assistant",
    tier: "under-month",
    training: "Weeks. Short term on the job training",
    cost: "$0 at most county agencies and nonprofits",
    paidTraining: true,
    pay: "$45,930 median, $34,200 to $63,290",
    openings: "About 48,900 a year",
    growth: "7%, much faster than average",
    what:
      "Help people reach services: benefits, housing, treatment, food assistance. County agencies and nonprofits hire on a high school diploma and train you.",
    caveat:
      "There is no licence here, just a hiring path, which makes it less portable than a credentialed job. Much of the funding is grant based, so posts can disappear when a grant ends. And the work carries real secondary trauma. Entry pay at small nonprofits runs well below the national median.",
    source: BLS + ". SOC 21-1093.",
  },
  {
    title: "Bartender",
    tier: "under-month",
    training: "1 to 4 weeks, and no state requires bartending school",
    cost: "A state alcohol server course, usually under $50",
    pay: "$34,340 median, and BLS states this figure already includes tips",
    openings: "About 121,200 a year",
    growth: "5%, faster than average",
    what:
      "High turnover means constant openings, and you can be working within weeks.",
    caveat:
      "Read the pay figure carefully, because it is the one people get wrong. $34,340 is the median with tips already counted, not before them. The bottom tenth of bartenders earn under $9.67 an hour all in. Much of this work is part time and nights, weekends and holidays are the job. No state requires you to pay for bartending school, so do not.",
    source: BLS + ". SOC 35-3011.",
  },

  // ------------------------------------------------------------- one to three months
  {
    title: "Correctional Officer",
    tier: "one-three",
    training: "An 8 to 9 week academy, and you are on full salary throughout",
    cost: "$0",
    paidTraining: true,
    pay: "$58,940 median",
    openings: "About 30,000 a year",
    growth: "Declining 7%",
    what:
      "State and county corrections hire on a high school diploma and pay you a full officer salary from day one of the academy. In Texas that is $52,441 to start, higher at maximum security units.",
    caveat:
      "The occupation is shrinking by 7% over the decade. The work carries genuine violence risk, forced overtime and rotating shifts, and turnover is high for obvious reasons. Most new facilities are rural, so you may have to move. Background check, drug test and in many states a polygraph screen out a lot of applicants.",
    source: BLS + ". SOC 33-3012.",
  },
  {
    title: "Insurance Sales Agent",
    tier: "one-three",
    training: "Weeks to licensed. Carriers train you after hiring",
    cost: "State licence fees, roughly $190 in California, plus required ethics study",
    pay: "$62,280 median",
    openings: "About 43,100 a year",
    growth: "3%, about average",
    what:
      "Sell life, health or property and casualty cover. You need a state producer licence per line, and carriers routinely hire unlicensed people and put them through it.",
    caveat:
      "Entry roles are commission weighted. What a carrier calls paid training is often a draw against future commission, which becomes a debt you owe if you wash out, so read that contract before you sign. Some agencies also expect you to buy your own leads. Licences are per state and per line, so moving means re-licensing.",
    source: BLS + ". SOC 41-3021.",
  },
  {
    title: "Diesel Service Technician",
    tier: "one-three",
    training: "Hired as a helper in weeks. Full ASE certification takes 1 to 3 years of experience",
    cost: "$34 registration plus $62 per ASE test",
    pay: "$61,770 median",
    openings: "About 24,400 a year",
    growth: "4%, about average",
    what:
      "Keep trucks, buses and heavy equipment running. Fleets, school districts, municipalities and dealers routinely hire apprentice technicians and pay for the certification tests.",
    caveat:
      "The tool bill is the barrier nobody mentions. Technicians buy their own hand tools and it commonly runs into thousands of dollars, which is brutal if you have no savings. Second and third shift is normal and the work is hard on your back, hands and knees.",
    link: "https://www.ase.com/tests/register-now",
    linkLabel: "ASE certification and fees",
    source: BLS + ". SOC 49-3031.",
  },
  {
    title: "Personal Trainer",
    tier: "one-three",
    training: "4 to 12 weeks, plus CPR and AED certification",
    cost: "Certification programme cost varies by provider. Budget for CPR and AED separately",
    pay: "$47,160 median, $28,800 to $83,100",
    openings: "About 68,000 a year",
    growth: "7%, much faster than average",
    what:
      "Train clients one to one or in groups. A real national certification, a short runway and strong demand.",
    caveat:
      "A lot of this sector is part time, hourly plus commission, or renting floor space at a gym as a contractor, and the $47,160 median reflects that mix. The bottom tenth earn $28,800. You also have to recertify every two years with continuing education.",
    link: "https://www.nasm.org/products/become-a-personal-trainer",
    linkLabel: "NASM certification requirements",
    source: BLS + ". SOC 39-9031.",
  },
  {
    title: "CDL Truck Driver",
    tier: "one-three",
    training: "3 to 8 weeks",
    cost: "About $4,100 at a community college, or $0 if a carrier pays",
    pay: "$58,640 median, $40,140 to $79,380",
    openings: "About 214,500 a year, the most on this page",
    growth: "4%, about average",
    what:
      "Long haul and regional freight. The single largest source of annual openings of anything listed here.",
    caveat:
      "Four things nobody tells you. Your school must be on the federal Training Provider Registry or your money is wasted. You need a DOT medical card. Interstate driving requires you to be 21. And if a carrier pays for your licence you are signing a training contract, where quitting early typically means repaying $3,000 to $7,000. Many carriers also want 6 to 24 months of experience before they will hire you at all. The widely repeated driver shortage line comes from industry lobbying, not from BLS, which calls this growth about average.",
    link: "https://tpr.fmcsa.dot.gov/",
    linkLabel: "Check your school is on the federal registry first",
    source: BLS + ". SOC 53-3032.",
  },
  {
    title: "Certified Nursing Assistant",
    tier: "one-three",
    training: "4 to 12 weeks. Federal floor is 75 hours, California requires 160",
    cost: "$700 to $1,600, and often $0 when an employer or workforce programme pays",
    pay: "$42,260 median, $33,940 to $51,980",
    openings: "About 203,300 a year",
    growth: "3%, about average",
    what:
      "Hands-on patient care in nursing homes, hospitals and home health. The volume of openings here is enormous and hiring never really stops.",
    caveat:
      "Those openings come from turnover, not growth, and the turnover is telling you about the job. The bottom tenth of nursing assistants earn $33,940, around $16.32 an hour. It is a genuine route into healthcare and it is genuinely hard, underpaid work.",
    link: "https://www.careeronestop.org/toolkit/training/find-local-training.aspx",
    linkLabel: "Find a state-approved programme near you",
    source: BLS + ". SOC 31-1131.",
  },
  {
    title: "Phlebotomist",
    tier: "one-three",
    training: "6 to 12 weeks",
    cost: "$400 to $800 at a community college, $3,000 to $5,000 privately",
    pay: "$45,230 median, $35,780 to $58,780",
    openings: "About 18,000 a year",
    growth: "7%, much faster than average",
    what:
      "Draw blood for labs, hospitals, plasma centres and blood banks. Short training, a real national credential, and steady demand.",
    caveat:
      "Ignore the four-week programmes. The national certification requires you to document 30 venipunctures and 10 capillary punctures on real people, and the shortest courses do not include enough clinical time to get there. Budget 6 to 12 weeks and check the clinical hours before you pay.",
    link: "https://www.nhanow.com/certification/nha-certifications/certified-phlebotomy-technician-(cpt)",
    linkLabel: "NHA certification requirements",
    source: BLS + ". SOC 31-9097.",
  },
  {
    title: "Pharmacy Technician",
    tier: "one-three",
    training: "8 to 12 weeks, or get hired first and certify on 500 hours of experience",
    cost: "$1,500 to $3,000 plus a $129 exam",
    pay: "$45,750 median, $36,020 to $61,040",
    openings: "About 44,700 a year",
    growth: "6%, faster than average",
    what:
      "Dispense and manage medication under a pharmacist. There are two routes in, and the second one matters: you can qualify for the exam through 500 hours of work experience instead of a course, so some people get hired first and certify later.",
    caveat:
      "Where you work decides what you earn. Retail pharmacy, which is most of the hiring, pays a median of $39,240. Hospitals pay $50,760. That is an $11,500 gap for the same credential, so aim at hospital and health system jobs if you can.",
    link: "https://www.ptcb.org/credentials/certified-pharmacy-technician",
    linkLabel: "PTCB certification and the experience route",
    source: BLS + ". SOC 29-2052.",
  },
  {
    title: "Sterile Processing Technician",
    tier: "one-three",
    training: "4 to 16 weeks of coursework",
    cost: "$300 to $2,100 plus a $140 exam",
    pay: "$47,700 median",
    openings: "Hospitals and surgery centres hire steadily",
    growth: "11%, much faster than average",
    what:
      "Decontaminate, sterilise and assemble surgical instruments. Better paid than most of the short healthcare entries and the work cannot be offshored or automated away.",
    caveat:
      "Full certification requires 400 hours of hands-on experience, so you test in provisionally and finish the credential while working. Shifts often run evenings or overnight because instruments are processed around the clock, and you are on your feet throughout.",
    link: "https://myhspa.org/certification/certification-overview/certified-registered-central-service-technician-crcst/",
    linkLabel: "CRCST certification overview",
    source: BLS + ". SOC 31-9093, medical equipment preparers.",
  },
  {
    title: "EMT-Basic",
    tier: "one-three",
    training: "8 to 12 weeks full time, 4 to 6 months part time",
    cost: "$800 to $2,500 plus a $104 exam",
    pay: "$44,470 median, $34,130 to $62,500",
    openings: "About 18,200 a year",
    growth: "6%, faster than average",
    what:
      "Emergency pre-hospital care with ambulance services, fire departments and hospitals.",
    caveat:
      "Ambulance services employ the most EMTs and pay the least, a median of $42,260. The jump to paramedic money, $60,600, is another one to two years of schooling, not a promotion you grow into. The work is shift based, physically demanding and you will see things that stay with you.",
    link: "https://www.nremt.org/",
    linkLabel: "National Registry certification",
    source: BLS + ". SOC 29-2042.",
  },
  {
    title: "School Bus Driver",
    tier: "one-three",
    training: "4 to 8 weeks, and the district usually pays for your licence",
    cost: "$0 at most districts",
    paidTraining: true,
    pay: "$47,920 median, $29,240 to $65,730",
    openings: "About 77,600 a year across bus driving",
    growth: "1%, slower than average",
    what:
      "Districts routinely pay for your CDL and passenger endorsement, which makes this one of the cheapest routes to a commercial licence you can keep.",
    caveat:
      "A lot of this work is part time and split shift, which is why the bottom tenth earn $29,240. Read the $47,920 median as a full-time-route number, not a floor. If you want full-time hours and better pay with the same licence class, transit driving pays a median of $59,050.",
    link: "https://www.bls.gov/ooh/transportation-and-material-moving/bus-drivers.htm",
    linkLabel: "BLS occupational profile",
    source: BLS + ". SOC 53-3051.",
  },
  {
    title: "Veterinary Assistant",
    tier: "one-three",
    training: "Hireable in days with no programme at all; the optional credential takes months",
    cost: "$0 to get hired. $2,250 to $3,800 for the optional NAVTA credential",
    pay: "$38,150 median, $30,120 to $49,150",
    openings: "About 23,200 a year",
    growth: "9%, much faster than average",
    what:
      "Most people enter this with a high school diploma and learn on the job, so you can be working within days. The formal credential is optional and can wait.",
    caveat:
      "Clinics, which is where most of the jobs are, pay the least at a median of $37,930. The higher end of the range is laboratory animal care in research settings, which is different work. Do not pay for a credential before you have confirmed a local employer actually wants it.",
    link: "https://navta.net/",
    linkLabel: "NAVTA approved programmes",
    source: BLS + ". SOC 31-9096.",
  },
  {
    title: "Pest Control Technician",
    tier: "one-three",
    training: "4 to 12 weeks to work as a technician under a licensed operator",
    cost: "State fees vary widely, roughly $25 to $300 per exam",
    pay: "$45,250 median, $34,680 to $61,890",
    openings: "About 13,700 a year",
    growth: "6%, faster than average",
    what:
      "Residential and commercial pest management. You can start as a technician quickly under someone else's licence.",
    caveat:
      "There are two different things called certification here and the gap between them is years. Working as a technician takes weeks. Becoming a certified operator in your own right is gated by state law, and in Florida that means a high school diploma plus three years of experience. Check your own state department of agriculture before you plan around a timeline.",
    source: BLS + ". SOC 37-2021.",
  },

  // ------------------------------------------------------------- three to six months
  {
    title: "Paralegal and Legal Assistant",
    tier: "three-six",
    training: "A few months for a paralegal certificate if you already hold a degree",
    cost: "Certificate tuition varies. The national certification exam runs about $240 to $400",
    pay: "$62,890 median",
    openings: "About 40,800 a year",
    growth: "0%, little or no change",
    what:
      "Research, draft and manage case files for lawyers. This is the best fit on the page for a laid-off office worker who already has a bachelor's degree in something else, because that degree plus a short certificate is a recognised route in.",
    caveat:
      "Two honest problems. Growth is flat, and this is the most exposed occupation on this page to AI doing the first draft of document review and research. It is also not a path from zero: the main certification route wants a degree plus either paralegal coursework or a year of experience, and firms prefer people with some legal exposure already.",
    link: "https://nala.org/certification/",
    linkLabel: "NALA certification requirements",
    source: BLS + ". SOC 23-2011.",
  },
  {
    title: "Massage Therapist",
    tier: "three-six",
    training: "Several months. States commonly mandate 500 to 750 programme hours",
    cost: "School tuition is the real cost and comes out of your pocket. The licensing exam is a few hundred dollars",
    pay: "$58,450 median",
    openings: "About 20,400 a year",
    growth: "15%, much faster than average",
    what:
      "Licensed therapeutic massage in clinics, spas, chiropractic practices or your own practice. Strong growth and better pay than most entries at this training length.",
    caveat:
      "The exam is cheap, the school is not, and no employer pays for it. Your income is capped by how many sessions your body can physically do in a week, and franchise employee pay runs well under the self employed median. Career length is limited by your own hands and shoulders, which is a real consideration if you are already in your fifties.",
    source: BLS + ". SOC 31-9011.",
  },
  {
    title: "IT Support Specialist",
    tier: "three-six",
    training: "2 to 4 months to pass the entry certification exams",
    cost: "Exam vouchers. Check the current price with the certifying body directly",
    pay: "$61,860 median for user support, $76,220 for network support",
    openings: "About 48,700 a year",
    growth: "Declining 3%",
    what:
      "Help desk and desktop support, the usual way into an IT career. CompTIA A+ is the recognised entry credential.",
    caveat:
      "Two things to know before you spend money. The occupation is projected to decline 3%, so the openings come from turnover rather than growth. And CompTIA itself recommends about 12 months of hands on IT experience before taking A+, so our old claim that no prior experience is needed overstated it. The certification is a real credential, just not a shortcut past experience.",
    link: "https://www.comptia.org/en-us/certifications/a/",
    linkLabel: "CompTIA A+ requirements",
    source: BLS + ". SOC 15-1231 and 15-1232.",
  },
  {
    title: "HVAC Technician",
    tier: "three-six",
    training: "A short community college certificate runs about 6 months",
    cost: "Around $640 all in at a community college, including the federal EPA 608 exam",
    pay: "$61,010 median, $40,050 to $95,210",
    openings: "About 40,600 a year",
    growth: "11%, much faster than average",
    what:
      "Install, service and repair heating, cooling and refrigeration. This is the strongest entry on the page: low cost, six months, sixty-one thousand median, strong growth, and demand in every single metro rather than a handful of states.",
    caveat:
      "EPA Section 608 certification is legally required to handle refrigerants, so make sure any programme you pay for includes it. Longer certificate and degree programmes run $1,200 to $15,000 and are not necessary to get started. Summer is brutal, attics and crawlspaces are part of the job, and emergency call-outs come with the territory.",
    link: "https://www.epa.gov/section608",
    linkLabel: "EPA 608 certification, the one you legally need",
    source: BLS + ". SOC 49-9021.",
  },
  {
    title: "Solar Panel Installer",
    tier: "three-six",
    training: "1 to 6 months",
    cost: "$150 for the entry NABCEP credential, $500 for the professional level",
    pay: "$53,140 median, $41,600 to $79,970",
    openings: "About 4,200 a year",
    growth: "36.5%, the second fastest growing occupation in the country",
    what:
      "Mount and wire photovoltaic systems on roofs and in solar fields.",
    caveat:
      "Read the openings number before the growth number. This is a 31,100 person occupation, so 36.5% growth produces about 4,200 openings a year nationally, roughly one fiftieth of truck driving. It is also concentrated in California, Texas, Florida, Arizona and North Carolina. Spectacular growth rate, small base, and if you are not in a solar market the national figure will not help you.",
    link: "https://www.nabcep.org/",
    linkLabel: "NABCEP, the certifying body",
    source: BLS + ". SOC 47-2231.",
  },

  // ------------------------------------------------------------------ six months plus
  {
    title: "Electrician",
    tier: "six-plus",
    training: "4 to 5 year apprenticeship",
    cost: "$0 tuition on the union apprenticeship route. You buy books and tools",
    paidTraining: true,
    pay: "$63,190 median, $42,640 to $108,510",
    openings: "About 72,700 a year",
    growth: "9%, much faster than average",
    what:
      "The best structural deal on this page for someone with no savings. The IBEW and NECA apprenticeship charges no tuition, pays you from week one, and includes health insurance, retirement and a pension. You earn 2,000 hours of paid work a year while you train.",
    caveat:
      "It is four to five years to journeyman pay, and that is the honest headline. The $63,190 median is journeyman money, not what an apprentice earns, and first year apprentices start at a fraction of scale. If you need a specific income next month this is the wrong answer. If you can take a lower wage now for a trade that pays well for thirty years, few things beat it.",
    link: "https://www.nejatc.org/",
    linkLabel: "The IBEW and NECA apprenticeship",
    source: BLS + ". SOC 47-2111.",
  },
  {
    title: "Plumber, Pipefitter or Steamfitter",
    tier: "six-plus",
    training: "4 to 5 year apprenticeship",
    cost: "$0 tuition on the union route, including classroom instruction",
    paidTraining: true,
    pay: "$63,800 median, $44,150 to $108,420",
    openings: "About 42,000 a year",
    growth: "7%, much faster than average",
    what:
      "Same shape as the electrical trade. The United Association apprenticeship runs about five years, pays from day one with 2,000 hours of paid work a year, adds 216 hours of classroom instruction at no cost, and includes healthcare and retirement.",
    caveat:
      "Four to five years to journeyman pay. The $63,800 median is not apprentice pay. You will also see claims that master plumbers running their own business clear $150,000. That is business owner income, not wages, and the top tenth of employed plumbers earn $108,420.",
    link: "https://ua.org/apprenticeship/",
    linkLabel: "United Association apprenticeship",
    source: BLS + ". SOC 47-2152.",
  },
  {
    title: "Welding",
    tier: "six-plus",
    training: "6 months to 2 years",
    cost: "$2,000 to $10,000 tuition, plus $1,000 to $1,600 for your own tools",
    pay: "$53,750 median, $39,240 to $77,530",
    openings: "About 40,300 a year",
    growth: "2%, slower than average",
    what:
      "Structural, manufacturing and pipeline work. A large, stable occupation with constant churn.",
    caveat:
      "Two things the usual pitch leaves out. The tools are yours to buy and run to $1,600 on top of tuition, which is a real barrier if you have no income. And the six figure claims you will see refer to underwater, pipeline and aerospace niches that have their own experience and certification gates. The top tenth of welders earn $77,530. Growth is also slower than average, so the openings come from turnover.",
    link: "https://www.aws.org/certification/",
    linkLabel: "American Welding Society certification",
    source: BLS + ". SOC 51-4121.",
  },
];
