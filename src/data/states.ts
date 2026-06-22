export interface StateData {
  name: string;
  slug: string;
  abbreviation: string;
  maxWeeklyBenefit: number;
  maxWeeks: number;
  waitingWeek: boolean;
  filingUrl: string;
  filingPhone: string;
  handbookUrl?: string;
  stateJobsUrl?: string;
  minEarnings: string;
  eligibility: string[];
  howToFile: string[];
  documentsNeeded: string[];
  commonMistakes: string[];
  processingTime: string;
  faq: { question: string; answer: string }[];
  advocacy?: { title: string; url: string; description: string }[];
  tips?: { headline: string; body: string }[];
  // Optional ISO date (YYYY-MM-DD) of the last hand-review for this state.
  // When present, overrides the global LAST_REVIEWED on the AuthorBlock and
  // in JSON-LD dateModified. Leave undefined to fall back to the global date.
  lastReviewedAt?: string;
}

// Per-state unemployment data sourced from each state's Department of Labor or workforce agency (2026).
// Each state's eligibility, documents, mistakes, and tips reflect state-specific rules, not generic boilerplate.
export const states: StateData[] = [
  {
    name: "Alabama",
    slug: "alabama",
    abbreviation: "AL",
    maxWeeklyBenefit: 275,
    maxWeeks: 26,
    waitingWeek: true,
    filingUrl: "https://adol.alabama.gov/claimants/",
    filingPhone: "1-866-234-5382",
    handbookUrl: "https://labor.alabama.gov/docs/guides/uc_brr_large_print.pdf",
    stateJobsUrl: "https://personnel.alabama.gov/Jobs",
    minEarnings: "You must have earned wages in at least two quarters of your base period, with your two highest quarters averaging at least $1,157.01 each.",
    eligibility: [
      "You separated from your Alabama job through no fault of your own, layoffs, closures, and reductions qualify under ADOL rules",
      "You earned at least $1,157.01 in each of your two highest base period quarters",
      "You are physically able to work and available for full-time employment",
      "You complete and document active work search contacts each week you claim benefits",
      "You serve Alabama's one-week unpaid waiting period before paid benefits begin"
    ],
    howToFile: [
      "Visit the Alabama Department of Labor website or call the claims center",
      "Create an account or log in to the online filing system",
      "Provide your Social Security number, driver's license, and employer information",
      "Complete and submit your initial claim",
      "File weekly certifications to continue receiving benefits"
    ],
    documentsNeeded: [
      "Social Security number",
      "Alabama driver's license or state ID number",
      "Name, address, phone, and dates for every employer in the last 18 months",
      "Reason for separation from each Alabama employer (layoff, fired, voluntary quit)",
      "Banking information for direct deposit, the alternative is Alabama's Way2Go debit card"
    ],
    commonMistakes: [
      "Filing days late, Alabama does not backdate claims before the Sunday of your filing week",
      "Missing a weekly certification, ADOL pauses payment after one skipped week",
      "Skipping Alabama Career Center registration, which is required for active claimants",
      "Failing to log work search contacts, ADOL audits work search records randomly"
    ],
    processingTime: "Most claims are processed within 2-3 weeks after filing.",
    faq: [
      {
        question: "How much will I receive in unemployment benefits in Alabama?",
        answer: "Alabama pays up to $275 per week. Your actual amount is calculated as 1/26th of your highest quarter earnings in the base period."
      },
      {
        question: "How long can I receive unemployment benefits in Alabama?",
        answer: "You can receive benefits for up to 26 weeks. Alabama also has a one-week unpaid waiting period before benefits begin."
      },
      {
        question: "Can I file for unemployment online in Alabama?",
        answer: "Yes. The fastest way to file is online through the Alabama Department of Labor website. You can also call 1-866-234-5382."
      },
      {
        question: "Who qualifies for unemployment in Alabama?",
        answer: "You qualify if you separated from your Alabama job through no fault of your own, earned wages in at least two quarters of your base period with the two highest quarters averaging at least $1,157.01 each, and are able and available for full-time Alabama work."
      },
      {
        question: "When should I apply for unemployment in Alabama?",
        answer: "File the same week you separate. Alabama's effective date is the Sunday of the filing week, so waiting even a few days can cost you a week of benefits."
      }
    ],
    tips: [
      { headline: "File the same week you separate.", body: "Your Alabama effective date is the Sunday of the filing week, separation dates earlier than that do not extend coverage backward." },
      { headline: "Pick direct deposit at filing.", body: "Alabama's default Way2Go debit card takes 7-10 days to arrive in the mail. Direct deposit gets you paid a week sooner." },
      { headline: "Log every job contact in writing.", body: "ADOL audits work search activity, and a missing date, employer, or contact method can disqualify the entire week." },
      { headline: "Call ADOL early in the morning.", body: "Hold times stretch mid-day. Calls placed at 8 AM Central time typically reach a representative fastest." }
    ]
  },
  {
    name: "Alaska",
    slug: "alaska",
    abbreviation: "AK",
    maxWeeklyBenefit: 370,
    maxWeeks: 26,
    waitingWeek: true,
    filingUrl: "https://my.alaska.gov/",
    filingPhone: "1-907-269-4700",
    handbookUrl: "https://labor.alaska.gov/unemployment/documents/uihandbook.pdf",
    stateJobsUrl: "https://www.governmentjobs.com/careers/alaska",
    minEarnings: "You must have earned at least $2,500 in your base period with wages in at least two quarters.",
    eligibility: [
      "You separated from your Alaska employer through no fault of your own",
      "You earned at least $2,500 across your base period with wages in two or more quarters",
      "You are able and available to accept full-time work in Alaska",
      "You report weekly work search contacts through my.alaska.gov",
      "You serve a one-week unpaid waiting period at the start of the claim"
    ],
    howToFile: [
      "Visit my.alaska.gov and create an account",
      "Navigate to the unemployment insurance section",
      "Provide your personal information and employment history",
      "Submit your initial claim online",
      "File weekly certifications to continue receiving benefits"
    ],
    documentsNeeded: [
      "Social Security number",
      "Alaska driver's license, state ID, or military ID",
      "Names, addresses, and dates for every Alaska employer in the last 18 months",
      "Union local number and dispatch hall, if you work in a union trade",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Filing late, Alaska benefits start the Sunday of your filing week, not your separation date",
      "Underreporting Alaska's seasonal earnings (fishing, tourism, oil), every dollar must be reported",
      "Forgetting to report union hiring hall referrals if you're in a union trade",
      "Letting your address go stale, Alaska mails key benefit notices that affect appeal deadlines"
    ],
    processingTime: "Initial claims typically take 2-4 weeks to process.",
    faq: [
      {
        question: "How much will I receive in unemployment benefits in Alaska?",
        answer: "Alaska pays up to $370 per week. Your benefit amount depends on your earnings during the base period."
      },
      {
        question: "How long can I receive unemployment benefits in Alaska?",
        answer: "You can receive benefits for up to 26 weeks. There is a one-week waiting period before benefits begin."
      },
      {
        question: "Can I file for unemployment online in Alaska?",
        answer: "Yes. File online at my.alaska.gov or call 1-907-269-4700 for assistance."
      },
      {
        question: "Who qualifies for unemployment in Alaska?",
        answer: "You qualify if you separated from your Alaska job through no fault of your own, earned at least $2,500 in your base period with wages in at least two quarters, and are able and available for full-time Alaska work."
      },
      {
        question: "When should I apply for unemployment in Alaska?",
        answer: "File the same week you separate. Alaska has a one-week unpaid waiting period that starts when you file, so delay only pushes back your first payment."
      }
    ],
    tips: [
      { headline: "Use my.alaska.gov, not paper forms.", body: "Online claims process days faster than mailed paperwork, a meaningful gap when Alaska weather affects mail delivery." },
      { headline: "Report seasonal earnings honestly.", body: "Alaska's UI fund cross-references Department of Fish and Game and Permanent Fund Dividend records, discrepancies trigger overpayment investigations." },
      { headline: "Keep your address current with DOLWD.", body: "Alaska mails monetary determinations and appeal deadlines, missing one letter can cost you the right to appeal a denial." },
      { headline: "Read the Alaska UI Handbook before calling.", body: "It explains the union hiring hall and seasonal industry rules that are unique to Alaska and confuse most first-time claimants." }
    ]
  },
  {
    name: "Arizona",
    slug: "arizona",
    abbreviation: "AZ",
    maxWeeklyBenefit: 320,
    maxWeeks: 26,
    waitingWeek: true,
    filingUrl: "https://des.az.gov/services/employment/unemployment-individual",
    filingPhone: "1-877-600-2722",
    handbookUrl: "https://des.az.gov/sites/default/files/legacy/dl/UIB-1240A.pdf",
    stateJobsUrl: "https://www.azstatejobs.gov/",
    minEarnings: "You must have earned at least 390 times the state minimum wage (approximately $5,909) in your highest quarter of your base period.",
    eligibility: [
      "You lost your Arizona job through no fault of your own, layoffs and reductions qualify, voluntary quits typically don't",
      "You earned at least 390 times the Arizona minimum wage (about $5,909) in your highest base period quarter",
      "You are physically able to work and immediately available for full-time Arizona employment",
      "You complete at least 4 work search activities each week and document them",
      "You serve Arizona's one-week unpaid waiting period before paid benefits begin"
    ],
    howToFile: [
      "Visit the Arizona DES website to file online",
      "Create an account and provide your personal information",
      "Enter your employment history for the past 18 months",
      "Submit your initial claim",
      "File weekly certifications to continue receiving benefits"
    ],
    documentsNeeded: [
      "Social Security number",
      "Arizona driver's license or state ID",
      "Employer details (name, address, phone, dates) for every job in the last 18 months",
      "USCIS alien registration number if you are not a US citizen",
      "Bank account information for direct deposit"
    ],
    commonMistakes: [
      "Filing late, your effective date is the Sunday of the week you file with DES",
      "Falling short of Arizona's required 4 weekly work search activities",
      "Missing your weekly certification, DES holds payment after one missed week",
      "Not reporting earnings from temp or part-time work, even small amounts"
    ],
    processingTime: "Most claims are processed within 2-3 weeks.",
    faq: [
      {
        question: "How much will I receive in unemployment benefits in Arizona?",
        answer: "Arizona pays up to $320 per week. Your benefit amount is 1/25th of your highest quarter wages, up to the maximum."
      },
      {
        question: "How long can I receive unemployment benefits in Arizona?",
        answer: "You can receive benefits for up to 26 weeks. Arizona has a one-week unpaid waiting period."
      },
      {
        question: "Can I file for unemployment online in Arizona?",
        answer: "Yes. File online at des.az.gov or call 1-877-600-2722."
      },
      {
        question: "Who qualifies for unemployment in Arizona?",
        answer: "You qualify if you separated from your Arizona job through no fault of your own, earned at least 390 times the state minimum wage (approximately $5,909) in your highest quarter of your base period, and meet Arizona's job-search requirement of 4 contacts on 4 separate days each week."
      },
      {
        question: "When should I apply for unemployment in Arizona?",
        answer: "File the same week you separate. Arizona's one-week unpaid waiting period starts from your filing date, so filing late means delayed payments."
      }
    ],
    tips: [
      { headline: "File at des.az.gov within the first week.", body: "Arizona pays from the Sunday of the filing week, not your separation date, so a delayed filing means lost benefits you can't recover." },
      { headline: "Hit all four work search activities weekly.", body: "Arizona's minimum is higher than most states. Falling short on any week disqualifies that week's payment, not just reduces it." },
      { headline: "Keep USCIS documents ready.", body: "Non-citizens with valid work authorization still cannot complete Arizona's DES intake without their alien registration number on hand." },
      { headline: "Respond to DES requests within deadlines.", body: "Arizona mails or emails wage verification requests with short turnarounds, missing the window suspends your claim until you respond." }
    ]
  },
  {
    name: "Arkansas",
    slug: "arkansas",
    abbreviation: "AR",
    maxWeeklyBenefit: 451,
    maxWeeks: 12,
    waitingWeek: true,
    filingUrl: "https://www.dws.arkansas.gov/unemployment/",
    filingPhone: "1-844-908-2178",
    handbookUrl: "https://dws.arkansas.gov/wp-content/uploads/UI-Handbook-2026-Final.pdf",
    stateJobsUrl: "https://arcareers.arkansas.gov/",
    minEarnings: "You must have wages in at least two quarters of your base period and total base period wages of at least 35 times your weekly benefit amount (the minimum weekly benefit amount is $81).",
    eligibility: [
      "You separated from your Arkansas job through layoff, closure, or reduction in force",
      "You have wages in at least two quarters and total base period wages of at least 35 times your weekly benefit amount",
      "You are able to work and accepting full-time Arkansas employment",
      "You document weekly job search activity through the Arkansas Workforce system",
      "You serve a one-week unpaid waiting period before benefits begin"
    ],
    howToFile: [
      "Visit the Arkansas Division of Workforce Services website",
      "Create an account and file your initial claim online",
      "Provide your employment history and reason for separation",
      "Submit your claim and wait for a determination",
      "File weekly certifications to continue receiving benefits"
    ],
    documentsNeeded: [
      "Social Security number",
      "Arkansas driver's license or state ID",
      "Employer name, address, phone, and dates for the last 18 months of work",
      "Reason for leaving each job, DWS investigates separations marked as 'fired'",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Not filing during the week you separate, Arkansas only pays from your file date forward",
      "Missing weekly certification deadlines, DWS suspends claims after a single missed week",
      "Falling below the minimum work search contacts required each week",
      "Not reporting part-time or contract earnings on your weekly certification"
    ],
    processingTime: "Claims are typically processed within 2-3 weeks.",
    faq: [
      {
        question: "How much will I receive in unemployment benefits in Arkansas?",
        answer: "Arkansas pays up to $451 per week. Your benefit amount is based on your earnings during the base period."
      },
      {
        question: "How long can I receive unemployment benefits in Arkansas?",
        answer: "Arkansas provides benefits for up to 12 weeks, one of the shorter durations in the country."
      },
      {
        question: "Can I file for unemployment online in Arkansas?",
        answer: "Yes. File online at the Arkansas DWS website or call 1-844-908-2178."
      },
      {
        question: "Who qualifies for unemployment in Arkansas?",
        answer: "You qualify if you separated from your Arkansas job through a layoff, closure, or reduction in force, have wages in at least two quarters and total base period wages of at least 35 times your weekly benefit amount, are able to work and accepting full-time Arkansas employment, and document weekly job search activity through the Arkansas Workforce system."
      },
      {
        question: "When should I apply for unemployment in Arkansas?",
        answer: "File the same week you separate. Arkansas pays only from your file date forward and does not backdate claims, and a one-week unpaid waiting period starts when you file, so even a few days of delay can cost you a full week of benefits."
      }
    ],
    tips: [
      { headline: "Plan for only 12 weeks of benefits.", body: "Arkansas has one of the shortest durations in the country, start your job search aggressively from week one, not week six." },
      { headline: "File the day you're separated, if you can.", body: "Arkansas does not backdate claims. Even a 3-day delay can cost you a full week of benefits at $451/week." },
      { headline: "Track weekly job contacts on paper too.", body: "DWS audits work search records and the online portal occasionally loses entries, keep a backup log with date, employer, and method." },
      { headline: "Read the 2026 UI Handbook on dws.arkansas.gov.", body: "Arkansas's monetary requirements changed for 2026, the handbook explains the new thresholds in plain language." }
    ]
  },
  {
    name: "California",
    slug: "california",
    abbreviation: "CA",
    maxWeeklyBenefit: 450,
    maxWeeks: 26,
    waitingWeek: true,
    filingUrl: "https://edd.ca.gov/unemployment/",
    filingPhone: "1-800-300-5616",
    handbookUrl: "https://edd.ca.gov/siteassets/files/pdf_pub_ctr/de1275a.pdf",
    stateJobsUrl: "https://calcareers.ca.gov/",
    minEarnings: "You must have earned at least $1,300 in your highest quarter, or $900 in your highest quarter with total base period earnings at least 1.25 times your highest quarter.",
    eligibility: [
      "You separated from your California job through no fault of your own, layoffs and reductions qualify under EDD rules",
      "You earned at least $1,300 in your highest base period quarter, or meet the alternative $900 threshold with sufficient total wages",
      "You are physically able to work and immediately available for California employment",
      "You actively search for work each week and can document the contacts",
      "You are a US citizen or legally authorized to work in the United States"
    ],
    howToFile: [
      "Visit the California EDD website and select 'File a UI Claim'",
      "Create a Benefit Programs Online (BPO) account",
      "Complete the online application with your personal and employment information",
      "Submit your claim, your start date is the Sunday of the week you file",
      "Certify for benefits every two weeks to continue receiving payments"
    ],
    documentsNeeded: [
      "Social Security number",
      "California driver's license or state ID number",
      "Last employer's name, address, phone, and dates of employment",
      "Information for all employers in the last 18 months",
      "USCIS alien registration number if you are not a US citizen",
      "Banking information for direct deposit, or you'll receive an EDD-issued debit card via Money Network"
    ],
    commonMistakes: [
      "Waiting to file, your claim starts the week you file, not when you lost your job",
      "Skipping the biweekly certification, EDD requires certification every two weeks, not weekly",
      "Forgetting to report any earnings, even small freelance amounts",
      "Not keeping records of your job search contacts, EDD audits them",
      "Ignoring EDD correspondence, respond to all requests within the printed deadlines"
    ],
    processingTime: "Standard processing takes 2-3 weeks. If your claim requires an interview or review, it may take longer.",
    faq: [
      {
        question: "How much will I receive in unemployment benefits in California?",
        answer: "California pays between $40 and $450 per week. Your weekly benefit amount is about 60-70% of your weekly earnings, up to the maximum."
      },
      {
        question: "How long can I receive unemployment benefits in California?",
        answer: "You can receive benefits for up to 26 weeks. There is a 7-day unpaid waiting period at the start of your claim."
      },
      {
        question: "Can I file for unemployment online in California?",
        answer: "Yes. The fastest way is online through the EDD's Benefit Programs Online at edd.ca.gov. You can also call 1-800-300-5616, though wait times can be long."
      },
      {
        question: "What if I was fired, can I still get unemployment in California?",
        answer: "It depends. If you were fired for misconduct, you may be disqualified. If you were let go for performance reasons or a business decision, you likely still qualify. EDD will investigate and make a determination."
      },
      {
        question: "Who qualifies for unemployment in California?",
        answer: "You qualify if you separated from your California job through no fault of your own, which includes layoffs and reductions under EDD rules, earned at least $1,300 in your highest base period quarter or meet the alternative $900 threshold with sufficient total wages, are physically able and immediately available for California work, and are a US citizen or legally authorized to work in the United States."
      },
      {
        question: "When should I apply for unemployment in California?",
        answer: "File the same week you separate. Your claim starts the Sunday of the week you file, not the day you lost your job, and a seven-day unpaid waiting period begins then, so filing late only pushes back your first payment."
      }
    ],
    tips: [
      { headline: "Set up direct deposit before your first payment.", body: "EDD's default is the Money Network debit card, which can take 7-10 days to arrive. Direct deposit shaves a week off your first payment timeline." },
      { headline: "Certify every two weeks, not every week.", body: "California is one of the few states that uses biweekly certification. Many first-time claimants miss this and lose payments." },
      { headline: "Use UI Online from a desktop browser.", body: "The mobile EDD experience is unstable, long forms time out and lose your work. A laptop session is the safest way to certify." },
      { headline: "Respond to every EDD letter immediately.", body: "EDD frequently mails 'request for additional information' notices with 10-day deadlines. Missing one suspends your claim until the response is processed." }
    ]
  },
  {
    name: "Colorado",
    slug: "colorado",
    abbreviation: "CO",
    maxWeeklyBenefit: 844,
    maxWeeks: 26,
    waitingWeek: false,
    filingUrl: "https://cdle.colorado.gov/unemployment",
    filingPhone: "1-303-318-9000",
    handbookUrl: "https://cdle.colorado.gov/unemployment/ui-claimant-guide",
    stateJobsUrl: "https://careers.colorado.gov/",
    minEarnings: "You must have earned at least $2,500 in wages during your base period.",
    eligibility: [
      "You separated from a Colorado employer through no fault of your own",
      "You earned at least $2,500 in covered wages during your base period",
      "You are physically able and immediately available to work full-time",
      "You document at least 5 employer contacts per week through MyUI+",
      "You register with your local Colorado Workforce Center"
    ],
    howToFile: [
      "Visit MyUI+ at coloradoui.gov to file your claim online",
      "Create an account with your personal information",
      "Provide details about your employment history",
      "Submit your initial claim",
      "Request payment every week to continue benefits"
    ],
    documentsNeeded: [
      "Social Security number",
      "Colorado driver's license or state ID",
      "Employer names, addresses, and dates of employment for past 18 months",
      "Reason for separation from each Colorado employer",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Forgetting to 'request payment' weekly, Colorado uses this term, not 'certify'",
      "Skipping the local Colorado Workforce Center registration",
      "Documenting fewer than 5 employer contacts per week",
      "Failing to report any earnings, including 1099 work"
    ],
    processingTime: "Most claims are processed within 1-2 weeks.",
    faq: [
      {
        question: "How much will I receive in unemployment benefits in Colorado?",
        answer: "Colorado pays up to $844 per week. Your benefit amount is 60% of your average weekly wage, up to the maximum."
      },
      {
        question: "How long can I receive unemployment benefits in Colorado?",
        answer: "You can receive benefits for up to 26 weeks."
      },
      {
        question: "Can I file for unemployment online in Colorado?",
        answer: "Yes. File online at coloradoui.gov or call 1-303-318-9000."
      },
      {
        question: "Who qualifies for unemployment in Colorado?",
        answer: "You qualify if you separated from a Colorado employer through no fault of your own, earned at least $2,500 in covered wages during your base period, are physically able and immediately available to work full-time, document at least 5 employer contacts per week through MyUI+, and register with your local Colorado Workforce Center."
      },
      {
        question: "When should I apply for unemployment in Colorado?",
        answer: "File the same week you separate. Colorado has no unpaid waiting week, so your first eligible week pays, but benefits run only from your claim date forward, so file and request payment immediately."
      }
    ],
    tips: [
      { headline: "Use 'request payment', not 'certify'.", body: "Colorado's MyUI+ portal phrases the weekly action as 'request payment.' Looking for 'certify' will leave you confused on the dashboard." },
      { headline: "Hit 5 employer contacts every week.", body: "Colorado requires more weekly contacts than most states. Falling below 5 disqualifies the entire week, not just reduces it." },
      { headline: "There's no waiting week in Colorado.", body: "Unlike most states, your first eligible week pays. Don't assume the first week is free labor, file and request payment immediately." },
      { headline: "Register at your local Workforce Center early.", body: "Colorado verifies your in-person or online workforce center registration before releasing benefits, do it the same week you file." }
    ]
  },
  {
    name: "Connecticut",
    slug: "connecticut",
    abbreviation: "CT",
    maxWeeklyBenefit: 721,
    maxWeeks: 26,
    waitingWeek: false,
    filingUrl: "https://www.ctdol.state.ct.us/UI-Online/index.htm",
    filingPhone: "1-860-263-6970",
    handbookUrl: "https://www.ctdol.state.ct.us/progsupt/unemplt/claimant-guide/uc-288.pdf",
    stateJobsUrl: "https://www.jobapscloud.com/CT/",
    minEarnings: "You must have earned at least $1,760 in total base period wages (40 times the minimum weekly benefit rate).",
    eligibility: [
      "You separated from your Connecticut job through no fault of your own",
      "You earned at least $1,760 across your base period (40 times the minimum weekly rate)",
      "You are physically able and available for full-time Connecticut work",
      "You make at least 3 employer contacts per week and report them to CTDOL",
      "You register with American Job Centers (AJC) within Connecticut"
    ],
    howToFile: [
      "Visit the Connecticut DOL website to file online",
      "Provide your personal and employment information",
      "Submit your initial claim",
      "File weekly certifications to continue receiving benefits"
    ],
    documentsNeeded: [
      "Social Security number",
      "Connecticut driver's license or state ID",
      "Employer details for every job in the past 18 months",
      "Severance agreement, if any, Connecticut treats some severance as disqualifying earnings",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Missing the weekly certification, CTDOL stops payment after one skipped week",
      "Not reporting severance pay, Connecticut may deny benefits during weeks covered by severance",
      "Failing to register with the local American Job Center",
      "Underreporting freelance income, CTDOL cross-checks 1099 records"
    ],
    processingTime: "Claims are typically processed within 2-3 weeks.",
    faq: [
      {
        question: "How much will I receive in unemployment benefits in Connecticut?",
        answer: "Connecticut pays up to $721 per week. Your benefit amount depends on your base period earnings."
      },
      {
        question: "Is there a waiting week in Connecticut?",
        answer: "No. Connecticut does not require an unpaid waiting week, you can receive benefits starting from your first eligible week."
      },
      {
        question: "Can I file for unemployment online in Connecticut?",
        answer: "Yes. File online at the CT DOL website or call 1-860-263-6970."
      }
    ],
    tips: [
      { headline: "Report severance honestly.", body: "Connecticut treats severance as disqualifying income for the weeks it covers. Reporting it correctly prevents an overpayment that you'll be forced to repay later." },
      { headline: "No waiting week, file immediately.", body: "Connecticut pays from your first eligible week, unlike most states. A delayed filing is pure money lost." },
      { headline: "Register with the American Job Center.", body: "CTDOL holds benefits until you register at your local AJC. Do it the same week you file to avoid a payment gap." },
      { headline: "Use a desktop browser for UI Online.", body: "The Connecticut UI Online portal is older than most. Mobile sessions time out frequently mid-application, desktop is more reliable." }
    ]
  },
  {
    name: "Delaware",
    slug: "delaware",
    abbreviation: "DE",
    maxWeeklyBenefit: 450,
    maxWeeks: 26,
    waitingWeek: true,
    filingUrl: "https://uics.delawareworks.com/",
    filingPhone: "1-302-761-8446",
    handbookUrl: "https://laborfiles.delaware.gov/main/dui/handbook/UI%20Claimant%20Handbook.pdf",
    stateJobsUrl: "https://statejobs.delaware.gov/",
    minEarnings: "Your weekly benefit rate is 1/46 of your wages in your two highest base period quarters, and your total base period wages must be at least 36 times your weekly benefit rate.",
    eligibility: [
      "You separated from your Delaware job through no fault of your own",
      "You have total base period wages of at least 36 times your weekly benefit rate",
      "Your total base period wages are at least 36 times your calculated weekly benefit",
      "You are able and available for full-time Delaware employment",
      "You complete weekly work search activities and document them"
    ],
    howToFile: [
      "Visit ui.delawareworks.com to file online",
      "Create an account and provide personal information",
      "Enter employment history and reason for separation",
      "Submit your initial claim",
      "File weekly certifications"
    ],
    documentsNeeded: [
      "Social Security number",
      "Delaware driver's license or state ID",
      "Employer name, address, phone, and dates for the past 18 months",
      "Reason for separation from each Delaware employer",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Filing late, Delaware does not backdate claims before the Sunday of the file week",
      "Missing a weekly certification, DUI pauses claims after one skipped week",
      "Failing to make required weekly job contacts",
      "Not reporting earnings from temp or part-time work"
    ],
    processingTime: "Most claims are processed within 2-4 weeks.",
    faq: [
      {
        question: "How much will I receive in unemployment benefits in Delaware?",
        answer: "Delaware pays up to $450 per week. Your benefit amount depends on your base period earnings."
      },
      {
        question: "How long can I receive unemployment benefits in Delaware?",
        answer: "You can receive benefits for up to 26 weeks."
      },
      {
        question: "Can I file for unemployment online in Delaware?",
        answer: "Yes. File online at ui.delawareworks.com or call 1-302-761-8446."
      }
    ],
    tips: [
      { headline: "File at ui.delawareworks.com on day one.", body: "Delaware's effective date is the Sunday of your filing week. Even a 2-day delay can mean a full week of benefits unrecovered." },
      { headline: "Read the DUI Claimant Handbook before calling.", body: "Delaware's call center is small and hold times are long, the handbook answers most first-time questions in writing." },
      { headline: "Document every employer contact.", body: "Delaware requires written records of weekly work search activity. DUI audits randomly and a missing entry disqualifies the week." },
      { headline: "Watch the mail for monetary determinations.", body: "Delaware mails the determination of your weekly benefit amount, the appeal window starts the date of the letter, not the date you receive it." }
    ]
  },
  {
    name: "Florida",
    slug: "florida",
    abbreviation: "FL",
    maxWeeklyBenefit: 275,
    maxWeeks: 12,
    waitingWeek: true,
    filingUrl: "https://www.floridajobs.org/reemployment-assistance-service-center/reemployment-assistance/claimants",
    filingPhone: "1-800-204-2418",
    handbookUrl: "https://www.floridajobs.org/docs/default-source/reemployment-assistance-center/unemployment/bri/bri_english.pdf",
    stateJobsUrl: "https://jobs.myflorida.com/",
    minEarnings: "You must have earned at least $3,400 in your base period with wages in at least two quarters.",
    eligibility: [
      "You separated from your Florida job through no fault of your own, Florida calls UI 'Reemployment Assistance'",
      "You earned at least $3,400 in your base period with wages in two or more quarters",
      "You are able and immediately available for full-time Florida work",
      "You make 5 employer contacts each week and document them",
      "You register on Employ Florida, this is mandatory and separate from filing"
    ],
    howToFile: [
      "Visit connect.myflorida.com to file your claim",
      "Create an account and provide personal information",
      "Enter your employment history for the past 18 months",
      "Register on Employ Florida (employflorida.com), this is required",
      "Submit your claim and file biweekly certifications"
    ],
    documentsNeeded: [
      "Social Security number",
      "Florida driver's license or state ID",
      "Employer names, addresses, phone numbers, and dates of employment",
      "USCIS alien registration number if you are not a US citizen",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Skipping Employ Florida registration, DEO blocks payments without it, and it's separate from filing",
      "Missing the biweekly certification deadline, Florida uses 2-week, not weekly, certification",
      "Falling short of the 5 weekly employer contacts Florida requires",
      "Filing during peak hours, Florida's CONNECT system is glitchy; off-peak hours have better luck"
    ],
    processingTime: "Processing can take 2-4 weeks. Florida's system is known for delays.",
    faq: [
      {
        question: "How much will I receive in unemployment benefits in Florida?",
        answer: "Florida pays up to $275 per week, one of the lowest maximums in the country."
      },
      {
        question: "How long can I receive unemployment benefits in Florida?",
        answer: "Florida provides benefits for only 12 weeks, the shortest duration of any state."
      },
      {
        question: "Why is Florida's unemployment system so difficult?",
        answer: "Florida's CONNECT system has been widely criticized for technical issues and long wait times. Filing online during off-peak hours (early morning) and having all documents ready before starting can help."
      },
      {
        question: "Can I file for unemployment online in Florida?",
        answer: "Yes. File at connect.myflorida.com or call 1-800-204-2418. The online system is available 24/7 but can be slow."
      }
    ],
    tips: [
      { headline: "Register on Employ Florida the same day you file.", body: "DEO will not pay until you've registered separately on employflorida.com. The two systems don't talk to each other automatically." },
      { headline: "Try CONNECT at 5-7 AM Eastern.", body: "Florida's CONNECT portal slows to a crawl during business hours. Early morning filings complete in minutes instead of hours." },
      { headline: "Plan your finances for 12 weeks max.", body: "Florida ties with North Carolina for the shortest duration in the country, start your job search aggressively from week one." },
      { headline: "Keep all 5 weekly employer contacts in writing.", body: "DEO audits work search and the CONNECT system has been known to lose records. A paper backup protects your weekly payments." }
    ]
  },
  {
    name: "Georgia",
    slug: "georgia",
    abbreviation: "GA",
    maxWeeklyBenefit: 365,
    maxWeeks: 14,
    waitingWeek: true,
    filingUrl: "https://www.dol.state.ga.us/",
    filingPhone: "1-877-709-8185",
    handbookUrl: "https://dol.georgia.gov/document/unemployment-benefits/ui-claimant-handbook/download",
    stateJobsUrl: "https://careers.georgia.gov/",
    minEarnings: "You must have earned at least $1,134 in your two highest base period quarters combined, with wages in at least two quarters and total base period wages of at least 1.5 times your highest quarter.",
    eligibility: [
      "You separated from your Georgia job through no fault of your own",
      "You earned at least $1,134 across your two highest base period quarters, with earnings in two or more quarters",
      "You are physically able to work and available for full-time Georgia employment",
      "You complete and report weekly work search activities through the MyUI Claimant Portal",
      "You serve a one-week unpaid waiting period before paid benefits begin"
    ],
    howToFile: [
      "Visit the Georgia DOL website to file online",
      "Create a MyUI Claimant Portal account",
      "Enter your personal and employment information",
      "Submit your initial claim",
      "File weekly certifications"
    ],
    documentsNeeded: [
      "Social Security number",
      "Georgia driver's license or state ID",
      "Employer names, addresses, and dates for the past 18 months",
      "Most recent pay stubs for wage verification",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Filing days after separation, Georgia does not backdate before the Sunday of your file week",
      "Missing weekly certifications through MyUI Claimant Portal",
      "Skipping the GDOL-required online career workshops",
      "Forgetting to report any wages or 1099 income earned during the week"
    ],
    processingTime: "Claims are typically processed within 2-3 weeks.",
    faq: [
      {
        question: "How much will I receive in unemployment benefits in Georgia?",
        answer: "Georgia pays up to $365 per week. Your benefit amount is based on your base period earnings."
      },
      {
        question: "How long can I receive unemployment benefits in Georgia?",
        answer: "Georgia provides benefits for up to 14 weeks."
      },
      {
        question: "Can I file for unemployment online in Georgia?",
        answer: "Yes. File at the Georgia DOL website or call 1-877-709-8185."
      }
    ],
    tips: [
      { headline: "Plan finances around 14 weeks of benefits.", body: "Georgia's duration is shorter than most states. Stretch the runway by minimizing fixed costs immediately, not in week 10." },
      { headline: "Complete the GDOL career workshops.", body: "Georgia requires online workshops as part of weekly eligibility. Skipping one disqualifies the week's payment." },
      { headline: "Keep the MyUI Claimant Portal as your single source of truth.", body: "GDOL communicates almost exclusively through the portal, check it daily, not weekly, to avoid missing requests." },
      { headline: "File during off-peak hours.", body: "GDOL's online system has had outages during peak filing periods. Early morning or late evening filings are most reliable." }
    ]
  },
  {
    name: "Hawaii",
    slug: "hawaii",
    abbreviation: "HI",
    maxWeeklyBenefit: 868,
    maxWeeks: 26,
    waitingWeek: true,
    filingUrl: "https://huiclaims.hawaii.gov/",
    filingPhone: "1-808-762-5751",
    handbookUrl: "https://labor.hawaii.gov/ui/files/2026/01/DLIR-UI-Claimant-Handbook-Rev1.26-with-BABEL.pdf",
    stateJobsUrl: "https://www.governmentjobs.com/careers/hawaii",
    minEarnings: "You must have wages in at least two quarters of your base period and total base period wages of at least 26 times your weekly benefit amount. Hawaii does not set a separate highest-quarter dollar minimum.",
    eligibility: [
      "You separated from your Hawaii employer through no fault of your own",
      "You have wages in at least two base period quarters and total base period wages of at least 26 times your weekly benefit amount",
      "You are able and available to accept full-time work in Hawaii",
      "You complete weekly work search activity and report it to DLIR",
      "You serve a one-week unpaid waiting period before paid benefits begin"
    ],
    howToFile: [
      "Visit huiclaims.hawaii.gov to file online",
      "Create an account and enter your personal information",
      "Provide employment history details",
      "Submit your initial claim",
      "File weekly certifications"
    ],
    documentsNeeded: [
      "Social Security number",
      "Hawaii driver's license or state ID",
      "Employer details for every job in the last 18 months",
      "Hawaii unemployment registration with HireNet Hawaii",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Filing late, Hawaii pays from the Sunday of your file week, not your separation date",
      "Missing weekly certifications on huiclaims.hawaii.gov",
      "Skipping HireNet Hawaii registration, required for active claimants",
      "Underreporting earnings from Hawaii's high-tip industries (hospitality, restaurants)"
    ],
    processingTime: "Claims are typically processed within 2-3 weeks.",
    faq: [
      {
        question: "How much will I receive in unemployment benefits in Hawaii?",
        answer: "Hawaii pays up to $871 per week, one of the highest in the nation."
      },
      {
        question: "How long can I receive unemployment benefits in Hawaii?",
        answer: "You can receive benefits for up to 26 weeks."
      },
      {
        question: "Can I file for unemployment online in Hawaii?",
        answer: "Yes. File at huiclaims.hawaii.gov or call 1-808-762-5751."
      }
    ],
    tips: [
      { headline: "Register on HireNet Hawaii right after filing.", body: "DLIR holds benefit payments until your HireNet Hawaii profile is complete, it's required and separate from filing." },
      { headline: "Report all tips and gratuities.", body: "Hawaii's UI fund cross-references restaurant and hotel earnings. Underreporting tip income triggers fraud investigations." },
      { headline: "Use a strong internet connection for huiclaims.hawaii.gov.", body: "Hawaii's UI portal can time out on slow connections, and the session won't save your work, wifi or wired is safer than mobile data." },
      { headline: "Watch for DLIR mailings.", body: "Hawaii sends critical determinations and appeal notices by mail. Missing one can mean missing a 10-day appeal window." }
    ]
  },
  {
    name: "Idaho",
    slug: "idaho",
    abbreviation: "ID",
    maxWeeklyBenefit: 590,
    maxWeeks: 26,
    waitingWeek: true,
    filingUrl: "https://www.labor.idaho.gov/unemployment/",
    filingPhone: "1-208-332-8942",
    handbookUrl: "https://www.labor.idaho.gov/wp-content/uploads/publications/UIClaimant_Booklet.pdf",
    stateJobsUrl: "https://statecareers.idaho.gov/",
    minEarnings: "You must have earned at least $1,872 in your highest quarter, with total base period wages of at least 1.25 times your highest quarter, and wages in at least two quarters.",
    eligibility: [
      "You separated from your Idaho job through no fault of your own",
      "You earned at least $1,872 in your highest base period quarter",
      "Your total base period wages equal at least 1.25 times your highest quarter, with earnings in two or more quarters",
      "You are able and available for full-time Idaho work",
      "You make at least 2 employer contacts per week and document them"
    ],
    howToFile: [
      "Visit the Idaho Department of Labor website",
      "File your initial claim online",
      "Provide personal and employment information",
      "Submit your claim",
      "File weekly certifications"
    ],
    documentsNeeded: [
      "Social Security number",
      "Idaho driver's license or state ID",
      "Employer name, address, and dates for every job in the last 18 months",
      "Idaho Department of Labor reference number (if you've claimed before)",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Filing days after separation, Idaho doesn't backdate before the Sunday of the file week",
      "Missing weekly certifications on labor.idaho.gov",
      "Failing to make the 2 required employer contacts per week",
      "Not reporting any earnings, including farm or seasonal work"
    ],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [
      {
        question: "How much will I receive in unemployment benefits in Idaho?",
        answer: "Idaho pays up to $590 per week."
      },
      {
        question: "How long can I receive unemployment benefits in Idaho?",
        answer: "You can receive benefits for 10 to 26 weeks depending on state unemployment rate and your earnings."
      },
      {
        question: "Can I file for unemployment online in Idaho?",
        answer: "Yes. File at labor.idaho.gov or call 1-208-332-8942."
      }
    ],
    tips: [
      { headline: "Confirm your maximum weeks in writing.", body: "Idaho's duration ranges from 10 to 26 weeks based on the state unemployment rate. The Department of Labor will send you a determination, read it carefully." },
      { headline: "Track agricultural and seasonal earnings.", body: "Idaho's farm-heavy economy means many claimants pick up seasonal work. Report every dollar, the Department of Labor cross-checks employer wage reports." },
      { headline: "Use the Idaho Department of Labor's mobile-friendly portal.", body: "Idaho's online filing system works well on phones, unlike many states, you can certify weekly from your phone reliably." },
      { headline: "Keep your 2 weekly contacts state-specific.", body: "Idaho requires Idaho-based employer contacts unless you're authorized to seek out-of-state work. Out-of-state contacts may not count." }
    ]
  },
  {
    name: "Illinois",
    slug: "illinois",
    abbreviation: "IL",
    maxWeeklyBenefit: 628,
    maxWeeks: 26,
    waitingWeek: true,
    filingUrl: "https://ides.illinois.gov/unemployment/file-a-claim.html",
    filingPhone: "1-800-244-5631",
    handbookUrl: "https://ides.illinois.gov/content/dam/soi/en/web/ides/ides_forms_and_publications/cli105l.pdf",
    stateJobsUrl: "https://careers.illinois.gov/",
    minEarnings: "You must have earned at least $1,600 during your base period with at least $440 outside your highest quarter.",
    eligibility: [
      "You separated from your Illinois job through no fault of your own",
      "You earned at least $1,600 in your base period, with at least $440 outside your highest quarter",
      "You are able and immediately available for full-time Illinois work",
      "You actively seek work and document weekly contacts",
      "You register with IllinoisJobLink.com, required for IDES benefits"
    ],
    howToFile: [
      "Visit the IDES website to file online",
      "Create an account and provide personal details",
      "Enter your employment history",
      "Register on IllinoisJobLink.com, this is required",
      "Submit your claim and certify biweekly"
    ],
    documentsNeeded: [
      "Social Security number",
      "Illinois driver's license or state ID",
      "Employer details for every job in the past 18 months",
      "Spouse and dependent information if you're claiming a dependent allowance",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Skipping IllinoisJobLink.com registration, IDES blocks payment until your account is active",
      "Forgetting to certify biweekly, Illinois uses 2-week, not weekly, certification",
      "Not reporting part-time or freelance income on your certification",
      "Not keeping a written log of weekly job search activities"
    ],
    processingTime: "Most claims are processed within 2-4 weeks.",
    faq: [
      {
        question: "How much will I receive in unemployment benefits in Illinois?",
        answer: "Illinois pays up to $628 per week (base), $748 with a non-working spouse, or $859 with dependent children."
      },
      {
        question: "How long can I receive unemployment benefits in Illinois?",
        answer: "You can receive benefits for up to 26 weeks."
      },
      {
        question: "Can I file for unemployment online in Illinois?",
        answer: "Yes. File at ides.illinois.gov or call 1-800-244-5631."
      }
    ],
    tips: [
      { headline: "Claim your dependent allowance.", body: "Illinois adds $120-$231 per week if you have a non-working spouse or dependent children. Many claimants miss this and leave money on the table." },
      { headline: "Register at IllinoisJobLink.com on day one.", body: "IDES will not release benefits until your IllinoisJobLink profile is complete and active. Do it the same day you file your claim." },
      { headline: "Certify every two weeks, not every week.", body: "Illinois uses biweekly certification. First-time claimants who try to certify weekly often miss the actual deadline." },
      { headline: "Read the IDES handbook for dependent rules.", body: "The dependent allowance has specific definitions, Illinois doesn't accept just anyone you support. The handbook explains exactly who qualifies." }
    ]
  },
  {
    name: "Indiana",
    slug: "indiana",
    abbreviation: "IN",
    maxWeeklyBenefit: 390,
    maxWeeks: 26,
    waitingWeek: true,
    filingUrl: "https://www.in.gov/dwd/indiana-unemployment/file/",
    filingPhone: "1-800-891-6499",
    handbookUrl: "https://www.in.gov/dwd/files/Claimant_Handbook.pdf",
    stateJobsUrl: "https://workforindiana.in.gov/",
    minEarnings: "You must have earned at least $4,200 in your base period with wages in the last two quarters.",
    eligibility: [
      "You separated from your Indiana job through no fault of your own",
      "You earned at least $4,200 in base period wages with earnings in the last two quarters",
      "You are able and available for full-time Indiana employment",
      "You complete weekly work search activities and report them through Uplink",
      "You serve a one-week unpaid waiting period before paid benefits begin"
    ],
    howToFile: [
      "Visit Unemployment.IN.gov to file online",
      "Create an account with your personal information",
      "Provide employment details for the past 18 months",
      "Submit your initial claim",
      "File weekly vouchers to continue benefits"
    ],
    documentsNeeded: [
      "Social Security number",
      "Indiana driver's license or state ID",
      "Employer name, address, and dates of employment for the past 18 months",
      "Reason for separation from each Indiana employer",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Forgetting weekly vouchers, Indiana calls weekly certifications 'vouchers' in Uplink",
      "Falling short on the required Indiana job search contacts",
      "Not reporting any 1099 or temp earnings",
      "Filing days after separation, Indiana doesn't backdate beyond the file week"
    ],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [
      {
        question: "How much will I receive in unemployment benefits in Indiana?",
        answer: "Indiana pays up to $390 per week."
      },
      {
        question: "How long can I receive unemployment benefits in Indiana?",
        answer: "You can receive benefits for up to 26 weeks."
      },
      {
        question: "Can I file for unemployment online in Indiana?",
        answer: "Yes. File at Unemployment.IN.gov or call 1-800-891-6499."
      }
    ],
    tips: [
      { headline: "File 'vouchers,' not 'certifications.'", body: "Indiana's Uplink portal calls weekly claim filings 'vouchers.' Looking for the 'certify' button leaves first-time claimants stuck." },
      { headline: "Document each weekly job contact.", body: "Indiana DWD audits work search records randomly. Keep a written log with date, employer, position, and contact method for every week claimed." },
      { headline: "Use the Uplink portal on a desktop.", body: "Indiana's Uplink works best on a full browser. Mobile users sometimes lose voucher progress mid-submission." },
      { headline: "Watch for DWD requests for information.", body: "Indiana mails or emails wage and separation verification requests with short turnaround windows. Missing one suspends your claim." }
    ]
  },
  {
    name: "Iowa",
    slug: "iowa",
    abbreviation: "IA",
    maxWeeklyBenefit: 763,
    maxWeeks: 16,
    waitingWeek: false,
    filingUrl: "https://www.iowaworkforcedevelopment.gov/file-claim-unemployment-insurance-benefits",
    filingPhone: "1-866-239-0843",
    handbookUrl: "https://www.iowaworkforcedevelopment.gov/book/export/html/37356",
    stateJobsUrl: "https://das.iowa.gov/state-employment",
    minEarnings: "You must have earned at least $1,700 in your highest quarter, with wages in at least two quarters, and total base period wages of at least 1.25 times your highest quarter.",
    eligibility: [
      "You separated from your Iowa job through no fault of your own",
      "You earned at least $1,700 in your highest base period quarter",
      "Your total base period wages equal at least 1.25 times your highest quarter",
      "You are able and available for full-time Iowa employment",
      "You complete weekly work search activities and report them to IWD"
    ],
    howToFile: [
      "Visit the Iowa Workforce Development website",
      "File your initial claim online",
      "Provide personal and employment information",
      "Submit your claim",
      "File weekly certifications"
    ],
    documentsNeeded: [
      "Social Security number",
      "Iowa driver's license or state ID",
      "Employer name, address, and dates for every job in the last 18 months",
      "IowaWORKS account information (registration is required)",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Skipping IowaWORKS registration, IWD requires it before releasing benefits",
      "Missing the weekly certification on iowaworkforcedevelopment.gov",
      "Not reporting agricultural or seasonal earnings",
      "Forgetting that Iowa's max duration is just 16 weeks, plan for a shorter runway"
    ],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [
      {
        question: "How much will I receive in unemployment benefits in Iowa?",
        answer: "Iowa pays up to $763 per week with dependents."
      },
      {
        question: "How long can I receive unemployment benefits in Iowa?",
        answer: "Iowa provides benefits for up to 16 weeks."
      },
      {
        question: "Can I file for unemployment online in Iowa?",
        answer: "Yes. File at the Iowa Workforce Development website or call 1-866-239-0843."
      }
    ],
    tips: [
      { headline: "No waiting week in Iowa.", body: "Unlike most states, Iowa pays from your first eligible week. File and certify immediately, every day's delay is benefit days you can't recover." },
      { headline: "Plan for a 16-week runway.", body: "Iowa's max duration is shorter than the national norm. Treat week one like week ten, apply aggressively, manage finances tightly." },
      { headline: "Register at IowaWORKS the same day you file.", body: "IWD blocks benefit payments until your IowaWORKS profile is active. The two systems aren't linked." },
      { headline: "Claim your dependent allowance.", body: "Iowa's max benefit ($763) reflects the dependent boost. Without dependents, your max is lower, make sure you've correctly listed everyone you support." }
    ]
  },
  {
    name: "Kansas",
    slug: "kansas",
    abbreviation: "KS",
    maxWeeklyBenefit: 637,
    maxWeeks: 16,
    waitingWeek: true,
    filingUrl: "https://www.getkansasbenefits.gov/",
    filingPhone: "1-800-292-6333",
    handbookUrl: "https://www.getkansasbenefits.gov/Files/PDF/kbenp0950.pdf",
    stateJobsUrl: "https://admin.ks.gov/offices/personnel-services/jobs",
    minEarnings: "You must have wages in at least two quarters and total base period wages of at least 30 times your calculated weekly benefit amount.",
    eligibility: [
      "You separated from your Kansas job through no fault of your own",
      "You have wages in at least two base period quarters",
      "Your total base period wages are at least 30 times your weekly benefit amount",
      "You are able and immediately available for full-time Kansas work",
      "You complete weekly work search and document the contacts in writing"
    ],
    howToFile: [
      "Visit GetKansasBenefits.gov to file online",
      "Create an account and provide your information",
      "Enter employment history",
      "Submit your claim",
      "File weekly certifications"
    ],
    documentsNeeded: [
      "Social Security number",
      "Kansas driver's license or state ID",
      "Employer details for every job in the last 18 months",
      "Severance agreement, if you have one, Kansas may treat it as disqualifying earnings",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Filing late, Kansas does not backdate before the Sunday of your file week",
      "Missing the weekly certification on GetKansasBenefits.gov",
      "Underreporting agricultural or seasonal income",
      "Not reporting severance, Kansas counts some severance as earnings"
    ],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [
      {
        question: "How much will I receive in unemployment benefits in Kansas?",
        answer: "Kansas pays up to $637 per week."
      },
      {
        question: "How long can I receive unemployment benefits in Kansas?",
        answer: "Kansas provides benefits for up to 16 weeks."
      },
      {
        question: "Can I file for unemployment online in Kansas?",
        answer: "Yes. File at GetKansasBenefits.gov or call 1-800-292-6333."
      }
    ],
    tips: [
      { headline: "Plan for 16 weeks max.", body: "Kansas has one of the shorter benefit durations in the country. Budget tightly from week one, there's no extension if work doesn't materialize." },
      { headline: "Report severance honestly.", body: "Kansas treats severance as disqualifying earnings for the weeks it covers. Reporting correctly avoids overpayment notices and clawbacks later." },
      { headline: "Use GetKansasBenefits.gov on desktop.", body: "Kansas's UI portal can time out mobile sessions mid-application. A laptop session is the most reliable way to certify weekly." },
      { headline: "Watch for KDOL mailings.", body: "Kansas sends monetary determinations and appeal notices by mail. Appeal windows start the date of the letter, keep an eye on your mailbox." }
    ]
  },
  {
    name: "Kentucky",
    slug: "kentucky",
    abbreviation: "KY",
    maxWeeklyBenefit: 720,
    maxWeeks: 16,
    waitingWeek: true,
    filingUrl: "https://kewes.ky.gov/",
    filingPhone: "1-502-875-0442",
    handbookUrl: "https://kcc.ky.gov/career/Documents/PAM400.pdf",
    stateJobsUrl: "https://personnel.ky.gov/Pages/Careers.aspx",
    minEarnings: "You must have earned at least $1,500 in one quarter, plus $1,500 in the remaining three quarters combined, with total base period wages of at least 1.5 times your highest quarter.",
    eligibility: [
      "You separated from your Kentucky job through no fault of your own",
      "You earned at least $1,500 in one base period quarter and another $1,500 across the remaining three",
      "Your total base period wages equal at least 1.5 times your highest quarter",
      "You are able and available for full-time Kentucky work",
      "You complete biweekly work search and report it through KEWES"
    ],
    howToFile: [
      "Visit kcc.ky.gov to file online",
      "Create an account and enter personal information",
      "Provide employment history",
      "Submit your claim",
      "File biweekly certifications"
    ],
    documentsNeeded: [
      "Social Security number",
      "Kentucky driver's license or state ID",
      "Employer name, address, and dates for every job in the last 18 months",
      "Bank routing and account numbers for direct deposit",
      "Reason for separation from each Kentucky employer"
    ],
    commonMistakes: [
      "Forgetting that Kentucky uses biweekly certification, not weekly",
      "Not reporting part-time income on the biweekly certification",
      "Failing to register with the Kentucky Career Center as required",
      "Letting your KEWES password expire, you'll be locked out at the worst time"
    ],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [
      {
        question: "How much will I receive in unemployment benefits in Kentucky?",
        answer: "Kentucky pays up to $720 per week. Note: Kentucky has a one-week unpaid waiting period before benefits begin."
      },
      {
        question: "How long can I receive unemployment benefits in Kentucky?",
        answer: "You can receive benefits for 16 weeks under current conditions. Kentucky uses a sliding scale of 16 to 24 weeks tied to the state unemployment rate."
      },
      {
        question: "Can I file for unemployment online in Kentucky?",
        answer: "Yes. File at kcc.ky.gov or call 1-502-875-0442."
      }
    ],
    tips: [
      { headline: "Certify every two weeks.", body: "Kentucky uses biweekly certification through KEWES. New claimants who try to certify weekly often miss the actual deadline." },
      { headline: "Save your KEWES password somewhere accessible.", body: "Kentucky's portal locks accounts after a handful of failed login attempts. A locked account costs days at exactly the wrong time." },
      { headline: "Register with the Kentucky Career Center.", body: "KEWES holds payments until the Kentucky Career Center registration is on file. It's a separate step from filing." },
      { headline: "Read PAM400 (the official handbook).", body: "Kentucky's claimant handbook explains the biweekly certification calendar and partial-earnings formulas in plain language, most first-time questions are answered there." }
    ]
  },
  {
    name: "Louisiana",
    slug: "louisiana",
    abbreviation: "LA",
    maxWeeklyBenefit: 282,
    maxWeeks: 12,
    waitingWeek: false,
    filingUrl: "https://www.laworks.net/",
    filingPhone: "1-866-783-5567",
    handbookUrl: "https://www.laworks.net/Downloads/UI/UIBenefitRightsInformation.pdf",
    stateJobsUrl: "https://jobs.la.gov/",
    minEarnings: "You must have earned at least $1,200 in your base period with wages in at least two quarters.",
    eligibility: [
      "You separated from your Louisiana job through no fault of your own",
      "You earned at least $1,200 in base period wages with earnings in two or more quarters",
      "You are able and available for full-time Louisiana work",
      "You complete and report weekly job search through HiRE",
      "You register with HiRE (the Louisiana workforce portal), required for benefits"
    ],
    howToFile: [
      "Visit laworks.net to file online",
      "Create an account",
      "Enter personal and employment information",
      "Submit your claim",
      "File weekly certifications"
    ],
    documentsNeeded: [
      "Social Security number",
      "Louisiana driver's license or state ID",
      "Employer information for every job in the last 18 months",
      "HiRE (helpinghandsemployment.com) account credentials",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Skipping HiRE registration, Louisiana Workforce Commission blocks payments until your HiRE account is active",
      "Missing weekly certifications on laworks.net",
      "Not reporting earnings, Louisiana audits 1099 income from gig platforms",
      "Filing days late, Louisiana doesn't backdate beyond your file week"
    ],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [
      {
        question: "How much will I receive in unemployment benefits in Louisiana?",
        answer: "Louisiana pays up to $282 per week."
      },
      {
        question: "How long can I receive unemployment benefits in Louisiana?",
        answer: "You can receive benefits for 12-20 weeks (variable based on the state unemployment rate)."
      },
      {
        question: "Can I file for unemployment online in Louisiana?",
        answer: "Yes. File at laworks.net or call 1-866-783-5567."
      }
    ],
    tips: [
      { headline: "No waiting week, file immediately.", body: "Louisiana pays from your first eligible week, unlike most states. File and certify the same week you separate to maximize benefit weeks." },
      { headline: "Register on HiRE the same day you file.", body: "Louisiana's UI system holds benefits until your HiRE workforce profile is complete. The two are linked but require separate registration." },
      { headline: "Confirm your maximum weeks in writing.", body: "Louisiana's duration ranges from 12 to 20 weeks based on the state unemployment rate. The Louisiana Workforce Commission will mail your specific maximum." },
      { headline: "Plan finances around $282/week.", body: "Louisiana has one of the lowest maximum weekly benefits in the country. Reduce fixed costs aggressively from week one, there's not much room." }
    ]
  },
  {
    name: "Maine",
    slug: "maine",
    abbreviation: "ME",
    maxWeeklyBenefit: 649,
    maxWeeks: 26,
    waitingWeek: true,
    filingUrl: "https://reemployme.maine.gov/",
    filingPhone: "1-800-593-7660",
    handbookUrl: "https://www.maine.gov/unemployment/docs/2018/UIGuide2018.pdf",
    stateJobsUrl: "https://www.maine.gov/bhr/state-jobs",
    minEarnings: "You must have earned at least $7,193 in your base period with wages in at least two quarters.",
    eligibility: [
      "You separated from your Maine job through no fault of your own",
      "You earned at least $7,193 in base period wages with earnings in two or more quarters",
      "You are able and available for full-time work in Maine",
      "You complete weekly work search activities and document them through ReEmployME",
      "You serve a one-week unpaid waiting period before paid benefits begin"
    ],
    howToFile: [
      "Visit ReEmployME.maine.gov to file online",
      "Create an account",
      "Provide employment and personal details",
      "Submit your claim",
      "File weekly certifications"
    ],
    documentsNeeded: [
      "Social Security number",
      "Maine driver's license or state ID",
      "Employer name, address, and dates for the past 18 months",
      "Maine JobLink (joblink.maine.gov) account credentials",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Skipping Maine JobLink registration, ReEmployME blocks payments until JobLink is active",
      "Missing weekly certifications on ReEmployME",
      "Not reporting fishing, lobstering, or seasonal earnings",
      "Filing late, Maine doesn't backdate beyond your file week"
    ],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [
      {
        question: "How much will I receive in unemployment benefits in Maine?",
        answer: "Maine pays up to $649 per week."
      },
      {
        question: "How long can I receive unemployment benefits in Maine?",
        answer: "You can receive benefits for up to 26 weeks."
      },
      {
        question: "Can I file for unemployment online in Maine?",
        answer: "Yes. File at ReEmployME.maine.gov or call 1-800-593-7660."
      }
    ],
    tips: [
      { headline: "Register on Maine JobLink the same day you file.", body: "ReEmployME holds benefits until your Maine JobLink profile is active. The two are linked but require separate registration." },
      { headline: "Report seasonal industry earnings honestly.", body: "Maine's UI fund cross-references fishing, lobstering, and tourism employer reports. Underreporting triggers overpayment investigations." },
      { headline: "Use ReEmployME on a stable internet connection.", body: "Maine's UI portal can time out on slow connections, losing your work mid-application." },
      { headline: "Watch for ReEmployME messages.", body: "Maine sends critical determinations through the ReEmployME inbox, not just by mail. Check the portal weekly to avoid missing deadlines." }
    ]
  },
  {
    name: "Maryland",
    slug: "maryland",
    abbreviation: "MD",
    maxWeeklyBenefit: 430,
    maxWeeks: 26,
    waitingWeek: false,
    filingUrl: "https://www.dllr.state.md.us/employment/unemployment.shtml",
    filingPhone: "1-410-949-0022",
    handbookUrl: "https://labor.maryland.gov/employment/clmtguide/uiclmtpamphlet.pdf",
    stateJobsUrl: "https://dbm.maryland.gov/jobseekers/pages/jobseekershome.aspx",
    minEarnings: "You must have earned at least $1,176.01 in your highest quarter and at least $1,800 in total across at least two quarters of your base period.",
    eligibility: [
      "You separated from your Maryland job through no fault of your own",
      "You earned at least $1,176.01 in your highest base period quarter",
      "Your total base period wages are at least $1,800 across two or more quarters",
      "You are able and available for full-time Maryland work",
      "You complete weekly work search activities and document them in BEACON"
    ],
    howToFile: [
      "Visit the Maryland Department of Labor website",
      "File your claim through BEACON (the online portal)",
      "Provide personal and employment information",
      "Submit your claim",
      "File weekly certifications"
    ],
    documentsNeeded: [
      "Social Security number",
      "Maryland driver's license or state ID",
      "Employer information for every job in the past 18 months",
      "Maryland Workforce Exchange account credentials (mwejobs.maryland.gov)",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Filing outside BEACON, Maryland switched to BEACON years ago; legacy systems are gone",
      "Missing weekly certifications on BEACON",
      "Skipping Maryland Workforce Exchange registration, required for benefits",
      "Not reporting partial earnings or 1099 work"
    ],
    processingTime: "Claims typically take 2-4 weeks to process.",
    faq: [
      {
        question: "How much will I receive in unemployment benefits in Maryland?",
        answer: "Maryland pays up to $430 per week."
      },
      {
        question: "How long can I receive unemployment benefits in Maryland?",
        answer: "You can receive benefits for up to 26 weeks."
      },
      {
        question: "Can I file for unemployment online in Maryland?",
        answer: "Yes. File through the BEACON portal or call 1-410-949-0022."
      }
    ],
    tips: [
      { headline: "Use BEACON for everything.", body: "Maryland consolidated UI into the BEACON portal, claims, certifications, work search, messages. Bookmark it as your single source of truth." },
      { headline: "Register on Maryland Workforce Exchange.", body: "BEACON holds payments until your Maryland Workforce Exchange profile is complete. Do it the same day you file." },
      { headline: "Use BEACON on desktop, not mobile.", body: "BEACON's mobile experience drops sessions occasionally. Filing weekly claims on a desktop browser is more reliable." },
      { headline: "Watch your BEACON inbox daily.", body: "Maryland sends critical questionnaires and determinations through BEACON, not always by mail. Missing one delays your payments." }
    ]
  },
  {
    name: "Massachusetts",
    slug: "massachusetts",
    abbreviation: "MA",
    maxWeeklyBenefit: 1105,
    maxWeeks: 26,
    waitingWeek: true,
    filingUrl: "https://www.mass.gov/how-to/apply-for-unemployment-insurance-benefits",
    filingPhone: "1-877-626-6800",
    handbookUrl: "https://www.mass.gov/doc/a-guide-to-benefits-and-employment-services/download",
    stateJobsUrl: "https://www.mass.gov/find-your-career-at-the-commonwealth",
    minEarnings: "You must have earned at least $3,500 in your base period, plus total earnings of at least 30 times your calculated weekly benefit amount.",
    eligibility: [
      "You separated from your Massachusetts job through no fault of your own",
      "You earned at least $3,500 in base period wages",
      "Your total base period earnings equal at least 30 times your weekly benefit amount",
      "You are able and immediately available for full-time work",
      "You complete weekly work search activities through UI Online"
    ],
    howToFile: [
      "Visit mass.gov and navigate to unemployment insurance",
      "Create an account on the UI Online system",
      "Enter personal and employment information",
      "Submit your initial claim",
      "File weekly certifications"
    ],
    documentsNeeded: [
      "Social Security number",
      "Massachusetts driver's license or state ID",
      "Employer details for every job in the past 18 months",
      "Spouse and dependent information if claiming a dependency allowance",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Missing the weekly certification window in UI Online",
      "Not claiming the dependency allowance, Massachusetts adds up to $25 per dependent per week",
      "Not reporting freelance or 1099 income on weekly certifications",
      "Filing late, Massachusetts doesn't backdate beyond your file week"
    ],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [
      {
        question: "How much will I receive in unemployment benefits in Massachusetts?",
        answer: "Massachusetts pays up to $1,105 per week including dependency allowance, the highest in the nation."
      },
      {
        question: "How long can I receive unemployment benefits in Massachusetts?",
        answer: "You can receive benefits for up to 26 weeks."
      },
      {
        question: "Can I file for unemployment online in Massachusetts?",
        answer: "Yes. File at mass.gov or call 1-877-626-6800."
      }
    ],
    tips: [
      { headline: "Claim every dependent.", body: "Massachusetts adds $25 per dependent per week, up to half your benefit amount. With multiple dependents this is real money, don't skip it." },
      { headline: "Massachusetts has the highest max in the nation.", body: "$1,105/week for 26 weeks = $28,730 max. Get every weekly payment by certifying on time and reporting accurately." },
      { headline: "Use UI Online on a desktop browser.", body: "Massachusetts's UI Online has had mobile reliability issues. Desktop is more stable for filing weekly certifications." },
      { headline: "Read the 'Guide to Benefits' before filing.", body: "Massachusetts publishes a thorough claimant guide that explains the dependency allowance and partial-earnings rules in plain language." }
    ]
  },
  {
    name: "Michigan",
    slug: "michigan",
    abbreviation: "MI",
    maxWeeklyBenefit: 530,
    maxWeeks: 26,
    waitingWeek: true,
    filingUrl: "https://www.michigan.gov/leo/bureaus-agencies/uia",
    filingPhone: "1-866-500-0017",
    handbookUrl: "https://www.michigan.gov/-/media/Project/Websites/leo/Documents/UIA/Claimant-Forms/UIA-1901.pdf",
    stateJobsUrl: "https://www.michigan.gov/som/job-seekers/state-of-michigan-employment",
    minEarnings: "You must have earned at least $5,328 in your highest quarter with total base period wages of at least 1.5 times your highest quarter.",
    eligibility: [
      "You separated from your Michigan job through no fault of your own",
      "You earned at least $5,328 in your highest base period quarter",
      "Your total base period wages are at least 1.5 times your highest quarter",
      "You are able and available for full-time Michigan employment",
      "You register with Michigan Works! and complete weekly work search activities"
    ],
    howToFile: [
      "Visit Michigan.gov to file online through MiWAM",
      "Create an account",
      "Provide personal and employment information",
      "Submit your claim",
      "Certify biweekly"
    ],
    documentsNeeded: [
      "Social Security number",
      "Michigan driver's license or state ID",
      "Employer information for every job in the past 18 months",
      "Michigan Works! registration confirmation",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Missing biweekly certifications, Michigan uses 2-week, not weekly, certification through MiWAM",
      "Skipping Michigan Works! registration, UIA blocks payments until you're registered",
      "Not reporting any earnings, including 1099 or partial work",
      "Filing late, Michigan does not backdate beyond your file week"
    ],
    processingTime: "Claims typically take 2-4 weeks to process.",
    faq: [
      {
        question: "How much will I receive in Michigan?",
        answer: "Michigan pays up to $530 per week. Note: Michigan has a one-week unpaid waiting period before benefits begin."
      },
      {
        question: "How long can I receive benefits in Michigan?",
        answer: "Up to 26 weeks."
      },
      {
        question: "Can I file online in Michigan?",
        answer: "Yes. File through MiWAM at michigan.gov or call 1-866-500-0017."
      }
    ],
    tips: [
      { headline: "Certify every two weeks.", body: "Michigan's MiWAM uses biweekly certification. First-time claimants who try to certify weekly often miss the actual deadline and lose payments." },
      { headline: "Register with Michigan Works! the same day you file.", body: "UIA blocks benefits until your Michigan Works! registration is complete. The two systems aren't automatically linked." },
      { headline: "Respond to UIA fact-finding requests.", body: "Michigan's UIA frequently mails fact-finding questionnaires with 10-day deadlines. Missing one suspends your claim." },
      { headline: "Use MiWAM on desktop.", body: "Michigan's MiWAM has had reliability issues on mobile. Filing certifications from a laptop is more dependable." }
    ]
  },
  {
    name: "Minnesota",
    slug: "minnesota",
    abbreviation: "MN",
    maxWeeklyBenefit: 948,
    maxWeeks: 26,
    waitingWeek: true,
    filingUrl: "https://www.uimn.org/",
    filingPhone: "1-651-296-3644",
    handbookUrl: "https://www.uimn.org/assets/22c_tcm1068-193111.pdf",
    stateJobsUrl: "https://mn.gov/careers",
    minEarnings: "You must have earned at least $3,900 in your base period (approximately 5.3% of the state average annual wage).",
    eligibility: [
      "You separated from your Minnesota job through no fault of your own",
      "You earned at least $3,900 in base period wages (about 5.3% of the state average annual wage)",
      "You are able and immediately available for full-time work",
      "You complete weekly work search activities and request payment through uimn.org",
      "You register on MinnesotaWorks.net (separate from filing)"
    ],
    howToFile: [
      "Visit uimn.org to file online",
      "Create an account",
      "Provide personal and employment information",
      "Submit your claim",
      "Request payment weekly"
    ],
    documentsNeeded: [
      "Social Security number",
      "Minnesota driver's license or state ID",
      "Employer information for every job in the past 18 months",
      "MinnesotaWorks.net account information",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Forgetting to 'request payment' weekly, Minnesota uses this term, not 'certify'",
      "Skipping MinnesotaWorks.net registration",
      "Not reporting partial-week earnings",
      "Not responding to MN UI requests for information"
    ],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [
      {
        question: "How much will I receive in Minnesota?",
        answer: "Minnesota pays up to $948 per week."
      },
      {
        question: "How long can I receive benefits?",
        answer: "Up to 26 weeks."
      },
      {
        question: "Can I file online?",
        answer: "Yes. File at uimn.org or call 1-651-296-3644."
      }
    ],
    tips: [
      { headline: "Use 'request payment', not 'certify'.", body: "Minnesota's uimn.org portal phrases the weekly action as 'request payment.' Looking for 'certify' will leave you confused." },
      { headline: "Register on MinnesotaWorks.net.", body: "MN UI holds payments until your MinnesotaWorks profile is complete. The two systems are linked but require separate registration." },
      { headline: "Hit your work search minimum every week.", body: "Minnesota requires documented work search activities. Falling short disqualifies the entire week, not just reduces it." },
      { headline: "Read the MN UI Handbook before filing.", body: "Minnesota's claimant handbook explains the partial-earnings deduction rules clearly, important if you're working part-time while claiming." }
    ]
  },
  {
    name: "Mississippi",
    slug: "mississippi",
    abbreviation: "MS",
    maxWeeklyBenefit: 235,
    maxWeeks: 26,
    waitingWeek: true,
    filingUrl: "https://mdes.ms.gov/unemployment-claims/",
    filingPhone: "1-888-844-3577",
    handbookUrl: "https://mdes.ms.gov/unemployment-claims/benefit-information/",
    stateJobsUrl: "https://www.mspb.ms.gov/",
    minEarnings: "You must have earned at least $780 in your highest quarter with wages in at least two quarters of your base period.",
    eligibility: [
      "You separated from your Mississippi job through no fault of your own",
      "You earned at least $780 in your highest base period quarter",
      "You have wages in at least two quarters of the base period",
      "You are able and available for full-time Mississippi work",
      "You complete and report weekly work search activities through MDES"
    ],
    howToFile: [
      "Visit mdes.ms.gov to file online",
      "Create an account",
      "Provide personal and employment information",
      "Submit your claim",
      "File weekly certifications"
    ],
    documentsNeeded: [
      "Social Security number",
      "Mississippi driver's license or state ID",
      "Employer name, address, and dates for every job in the last 18 months",
      "MDES Re-Employ MS account credentials",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Filing late, Mississippi doesn't backdate before the Sunday of your file week",
      "Missing the weekly certification on mdes.ms.gov",
      "Not reporting any wages or 1099 earnings",
      "Skipping Re-Employ MS registration, required for active claimants"
    ],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [
      {
        question: "How much will I receive in Mississippi?",
        answer: "Mississippi pays up to $235 per week, the lowest in the nation."
      },
      {
        question: "How long can I receive benefits?",
        answer: "Up to 26 weeks."
      },
      {
        question: "Can I file online?",
        answer: "Yes. File at mdes.ms.gov or call 1-888-844-3577."
      }
    ],
    tips: [
      { headline: "Plan finances around $235/week.", body: "Mississippi has the lowest maximum weekly benefit in the country. Reduce fixed costs aggressively from week one, there's almost no margin." },
      { headline: "Apply for SNAP and Medicaid right away.", body: "At $235/week, most claimants qualify for additional Mississippi benefit programs. Filing the same week you file UI maximizes the safety net." },
      { headline: "Register on Re-Employ MS the same day.", body: "MDES blocks payments until Re-Employ MS registration is complete. It's a separate step from filing." },
      { headline: "Watch the mail for MDES notices.", body: "Mississippi sends critical monetary determinations and appeal notices by mail. Appeal windows start the date of the letter." }
    ]
  },
  {
    name: "Missouri",
    slug: "missouri",
    abbreviation: "MO",
    maxWeeklyBenefit: 320,
    maxWeeks: 20,
    waitingWeek: true,
    filingUrl: "https://labor.mo.gov/unemployed-workers",
    filingPhone: "1-800-320-2519",
    handbookUrl: "https://labor.mo.gov/media/22111/download",
    stateJobsUrl: "https://mocareers.mo.gov/",
    minEarnings: "You must have earned at least $2,250 in your base period, with at least $1,500 in one quarter and $750 in the remaining quarters. Total wages must be at least 1.5 times your highest quarter.",
    eligibility: [
      "You separated from your Missouri job through no fault of your own",
      "You earned at least $1,500 in one base period quarter and $750 across the remaining quarters",
      "Your total base period wages are at least 1.5 times your highest quarter",
      "You are able and available for full-time Missouri work",
      "You complete and report weekly work search activities through UInteract"
    ],
    howToFile: [
      "Visit labor.mo.gov to file online",
      "Create an account",
      "Provide personal and employment details",
      "Submit your claim",
      "File weekly certifications"
    ],
    documentsNeeded: [
      "Social Security number",
      "Missouri driver's license or state ID",
      "Employer information for every job in the past 18 months",
      "MO Job Seeker account on jobs.mo.gov (registration required)",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Filing late, Missouri doesn't backdate beyond your file week",
      "Missing weekly certifications in UInteract",
      "Skipping jobs.mo.gov registration, Missouri requires it before paying benefits",
      "Not reporting partial-week earnings on UInteract"
    ],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [
      {
        question: "How much will I receive in Missouri?",
        answer: "Missouri pays up to $320 per week."
      },
      {
        question: "How long can I receive benefits?",
        answer: "Up to 20 weeks."
      },
      {
        question: "Can I file online?",
        answer: "Yes. File at labor.mo.gov or call 1-800-320-2519."
      }
    ],
    tips: [
      { headline: "Plan for 20 weeks max.", body: "Missouri's maximum duration is shorter than the national norm. Treat week one urgently, there's no extension if work doesn't materialize." },
      { headline: "Use UInteract for everything.", body: "Missouri consolidated UI into the UInteract portal, claims, certifications, messages. Bookmark it as your single source of truth." },
      { headline: "Register on jobs.mo.gov the same day.", body: "Missouri blocks payments until your jobs.mo.gov profile is active. It's a separate step from filing your claim." },
      { headline: "Respond to UInteract messages quickly.", body: "Missouri sends fact-finding requests through UInteract, often with short deadlines. Check the portal weekly to avoid suspended payments." }
    ]
  },
  {
    name: "Montana",
    slug: "montana",
    abbreviation: "MT",
    maxWeeklyBenefit: 698,
    maxWeeks: 24,
    waitingWeek: true,
    filingUrl: "https://uid.dli.mt.gov/",
    filingPhone: "1-406-444-2545",
    handbookUrl: "https://uid.dli.mt.gov/Portals/55/Documents/Claims-Processing/dli-uid-cl001.pdf",
    stateJobsUrl: "https://statecareers.mt.gov/",
    minEarnings: "You must have base period wages of at least 1.5 times your highest quarter wages and at least 7% of the state average annual wage.",
    eligibility: [
      "You separated from your Montana job through no fault of your own",
      "Your total base period wages equal at least 1.5 times your highest quarter",
      "Your earnings reach at least 7% of Montana's state average annual wage",
      "You are able and available for full-time Montana work",
      "You complete weekly work search and report it through UI eServices"
    ],
    howToFile: [
      "Visit uid.dli.mt.gov to file online",
      "Create an account",
      "Provide personal and employment information",
      "Submit your claim",
      "File weekly certifications"
    ],
    documentsNeeded: [
      "Social Security number",
      "Montana driver's license or state ID",
      "Employer details for every job in the last 18 months",
      "MontanaWorks (jobs.mt.gov) registration information",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Filing late, Montana doesn't backdate beyond your file week",
      "Missing weekly certifications on uid.dli.mt.gov",
      "Not reporting agricultural, ranch, or seasonal earnings",
      "Skipping MontanaWorks registration, required for benefit payments"
    ],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [
      {
        question: "How much will I receive in Montana?",
        answer: "Montana pays up to $698 per week."
      },
      {
        question: "How long can I receive benefits?",
        answer: "Up to 24 weeks."
      },
      {
        question: "Can I file online?",
        answer: "Yes. File at uid.dli.mt.gov or call 1-406-444-2545."
      }
    ],
    tips: [
      { headline: "Plan for 24 weeks max.", body: "Montana's duration is shorter than the national norm. Apply aggressively from week one and budget tightly." },
      { headline: "Report ranch and seasonal income.", body: "Montana's UI fund cross-references agricultural and ranch employer reports. Underreporting triggers fraud investigations." },
      { headline: "Register on MontanaWorks.", body: "Montana DLI holds payments until your MontanaWorks profile is complete. Do it the same day you file your claim." },
      { headline: "Use the UI eServices portal on desktop.", body: "Montana's UI eServices works most reliably on a full browser. Mobile sessions have been known to drop mid-application." }
    ]
  },
  {
    name: "Nebraska",
    slug: "nebraska",
    abbreviation: "NE",
    maxWeeklyBenefit: 582,
    maxWeeks: 26,
    waitingWeek: true,
    filingUrl: "https://dol.nebraska.gov/UIBenefits",
    filingPhone: "1-402-458-2500",
    handbookUrl: "https://dol.nebraska.gov/webdocs/Resources/Items/Updated%20English%20Handbook%20for%20Unemployed%20Workers.pdf",
    stateJobsUrl: "https://statejobs.nebraska.gov/",
    minEarnings: "You must have earned at least $5,440 in your base period, with at least $1,850 in one quarter and $800 in another.",
    eligibility: [
      "You separated from your Nebraska job through no fault of your own",
      "You earned at least $5,440 in base period wages, with $1,850 in one quarter and $800 in another",
      "You are able and available for full-time Nebraska work",
      "You complete weekly work search and report through NEworks",
      "You register on NEworks.nebraska.gov, required for benefits"
    ],
    howToFile: [
      "Visit NEworks.nebraska.gov to file online",
      "Create an account",
      "Provide personal and employment information",
      "Submit your claim",
      "File weekly certifications"
    ],
    documentsNeeded: [
      "Social Security number",
      "Nebraska driver's license or state ID",
      "Employer information for every job in the past 18 months",
      "NEworks account credentials",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Skipping NEworks registration, Nebraska blocks payments until your NEworks profile is active",
      "Filing late, Nebraska doesn't backdate before your file week",
      "Missing weekly certifications on NEworks",
      "Not reporting partial earnings"
    ],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [
      {
        question: "How much will I receive in Nebraska?",
        answer: "Nebraska pays up to $582 per week."
      },
      {
        question: "How long can I receive benefits?",
        answer: "Up to 26 weeks."
      },
      {
        question: "Can I file online?",
        answer: "Yes. File at NEworks.nebraska.gov or call 1-402-458-2500."
      }
    ],
    tips: [
      { headline: "Use NEworks for everything.", body: "Nebraska consolidated UI and workforce services into NEworks. Filing, certification, work search, it all happens there." },
      { headline: "Complete NEworks profile fully.", body: "Nebraska blocks benefits until your NEworks profile is 100% complete. Skipping optional fields can hold up payments." },
      { headline: "Document weekly job search activity.", body: "Nebraska DOL audits work search records. Keep a written log with date, employer, and contact method for every week claimed." },
      { headline: "Read the Nebraska Claimant Guide.", body: "Nebraska's official handbook explains the partial-earnings deduction formula clearly, important if you're working part-time while claiming." }
    ]
  },
  {
    name: "Nevada",
    slug: "nevada",
    abbreviation: "NV",
    maxWeeklyBenefit: 469,
    maxWeeks: 26,
    waitingWeek: false,
    filingUrl: "https://nui.nv.gov/CSS/",
    filingPhone: "1-702-486-0350",
    handbookUrl: "https://detr.nv.gov/content/media/DETR_250032_001_Claimant_Handbook_EN_v2_F.pdf",
    stateJobsUrl: "https://nvjobs.nv.gov/",
    minEarnings: "You must have earned at least $400 in your highest quarter. Total base period wages must be at least 1.5 times your highest quarter.",
    eligibility: [
      "You separated from your Nevada job through no fault of your own",
      "You earned at least $400 in your highest base period quarter",
      "Your total base period wages equal at least 1.5 times your highest quarter",
      "You are able and available for full-time Nevada work",
      "You complete weekly work search activities and report through Employ Nevada"
    ],
    howToFile: [
      "Visit ui.nv.gov to file online",
      "Create an account",
      "Provide personal and employment information",
      "Submit your claim",
      "File weekly certifications"
    ],
    documentsNeeded: [
      "Social Security number",
      "Nevada driver's license or state ID",
      "Employer information for every job in the past 18 months",
      "Employ Nevada (employnv.gov) account credentials",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Skipping Employ Nevada registration, DETR blocks payments until you're registered",
      "Missing weekly certifications on ui.nv.gov",
      "Not reporting tip income from Las Vegas hospitality jobs",
      "Filing late, Nevada doesn't backdate beyond your file week"
    ],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [
      {
        question: "How much will I receive in Nevada?",
        answer: "Nevada pays up to $469 per week."
      },
      {
        question: "How long can I receive benefits?",
        answer: "Up to 26 weeks."
      },
      {
        question: "Can I file online?",
        answer: "Yes. File at ui.nv.gov or call 1-702-486-0350."
      }
    ],
    tips: [
      { headline: "No waiting week, file immediately.", body: "Nevada pays from your first eligible week, unlike most states. Every day's filing delay is benefit days you can't recover." },
      { headline: "Report all tip and gratuity income.", body: "Nevada's UI fund cross-references hospitality industry wage records. Underreporting tip income triggers overpayment investigations." },
      { headline: "Register on Employ Nevada.", body: "DETR blocks benefits until your Employ Nevada profile is active. The two systems aren't automatically linked, register the same day you file." },
      { headline: "File during off-peak hours.", body: "Nevada's ui.nv.gov has had outages during peak filing periods. Early morning or late evening sessions are most reliable." }
    ]
  },
  {
    name: "New Hampshire",
    slug: "new-hampshire",
    abbreviation: "NH",
    maxWeeklyBenefit: 427,
    maxWeeks: 26,
    waitingWeek: true,
    filingUrl: "https://www.nhes.nh.gov/services/claimants/index.htm",
    filingPhone: "1-603-271-7700",
    handbookUrl: "https://www.nhes.nh.gov/forms/documents/uc-r-and-o.pdf",
    stateJobsUrl: "https://www.das.nh.gov/jobsearch/employment.aspx",
    minEarnings: "You must have earned at least $2,800 in your base period.",
    eligibility: [
      "You separated from your New Hampshire job through no fault of your own",
      "You earned at least $2,800 in base period wages",
      "You are able and available for full-time New Hampshire work",
      "You complete weekly work search and report through NHES",
      "You serve a one-week unpaid waiting period before paid benefits begin"
    ],
    howToFile: [
      "Visit nhes.nh.gov to file online",
      "Create an account",
      "Provide personal and employment information",
      "Submit your claim",
      "File weekly certifications"
    ],
    documentsNeeded: [
      "Social Security number",
      "New Hampshire driver's license or state ID",
      "Employer details for every job in the past 18 months",
      "NH JobMatch account credentials",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Skipping NH JobMatch registration, NHES blocks payments without it",
      "Missing weekly certifications on nhes.nh.gov",
      "Not reporting partial earnings",
      "Filing late, New Hampshire doesn't backdate beyond your file week"
    ],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [
      {
        question: "How much will I receive in New Hampshire?",
        answer: "New Hampshire pays up to $427 per week. Note: New Hampshire has a one-week waiting period before benefits begin."
      },
      {
        question: "How long can I receive benefits?",
        answer: "Up to 26 weeks."
      },
      {
        question: "Can I file online?",
        answer: "Yes. File at nhes.nh.gov or call 1-603-271-7700."
      }
    ],
    tips: [
      { headline: "Register on NH JobMatch the same day you file.", body: "NHES blocks benefits until your NH JobMatch profile is complete. The two systems aren't automatically linked." },
      { headline: "Document weekly job search.", body: "NHES audits work search records. Keep a written log with date, employer, position, and method of contact for every week claimed." },
      { headline: "Read the NH UC Rights and Obligations book.", body: "New Hampshire's claimant handbook explains state-specific rules around partial earnings and severance, most first-time questions are answered there." },
      { headline: "Use nhes.nh.gov on desktop.", body: "New Hampshire's UI portal works best on a full browser. Mobile users have reported lost work mid-application." }
    ]
  },
  {
    name: "New Jersey",
    slug: "new-jersey",
    abbreviation: "NJ",
    maxWeeklyBenefit: 905,
    maxWeeks: 26,
    waitingWeek: false,
    filingUrl: "https://myunemployment.nj.gov/",
    filingPhone: "North NJ: 1-201-601-4100 | Central NJ: 1-732-761-2020 | South NJ: 1-856-507-2340",
    handbookUrl: "https://www.nj.gov/labor/forms_pdfs/ui/PR-94.pdf",
    stateJobsUrl: "https://www.nj.gov/csc/jobs/",
    minEarnings: "You must have earned at least $310 per week for 20 or more weeks in covered employment during your base year, or a total of at least $15,500.",
    eligibility: [
      "You separated from your New Jersey job through no fault of your own",
      "You earned at least $310 per week for 20 or more weeks during your base year, or $15,500 total",
      "You are able and immediately available for full-time work",
      "You complete weekly work search and report it to NJ DOL",
      "You register on the New Jersey Career Connections portal"
    ],
    howToFile: [
      "Visit myunemployment.nj.gov to file online",
      "Create an account",
      "Provide personal and employment information",
      "Submit your claim",
      "Certify weekly"
    ],
    documentsNeeded: [
      "Social Security number",
      "New Jersey driver's license or state ID",
      "Employer information for every job in the past 18 months",
      "USCIS alien registration number if you are not a US citizen",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Filing late, New Jersey has no waiting week, so filing immediately maximizes benefits",
      "Missing weekly certifications on myunemployment.nj.gov",
      "Not reporting partial earnings or 1099 work",
      "Skipping NJ Career Connections registration",
      "Filing an appeal after the deadline, NJ's appeal window is short and unforgiving"
    ],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [
      {
        question: "How much will I receive in New Jersey?",
        answer: "New Jersey pays up to $905 per week (with dependency allowance). Your actual amount depends on your earnings during the base period."
      },
      {
        question: "How long can I receive benefits?",
        answer: "Up to 26 weeks. New Jersey has no waiting week, benefits begin immediately."
      },
      {
        question: "Can I file online?",
        answer: "Yes. File at myunemployment.nj.gov. You can also call: North NJ 201-601-4100, Central NJ 732-761-2020, or South NJ 856-507-2340."
      }
    ],
    tips: [
      { headline: "No waiting week, file the day you separate.", body: "New Jersey pays from your first eligible week. A delayed filing is pure money lost, no waiting period to absorb the gap." },
      { headline: "Use the right regional phone number.", body: "New Jersey routes UI calls by region: North 201-601-4100, Central 732-761-2020, South 856-507-2340. The wrong number bounces you and adds hold time." },
      { headline: "Claim your dependency allowance.", body: "New Jersey adds 7% per dependent up to a max, easy to miss. The $905 max benefit reflects this allowance, not the base." },
      { headline: "Watch the appeal deadline carefully.", body: "NJ's appeal window is short. If you miss it without a documented compelling reason, the case cannot be heard regardless of merits." }
    ]
  },
  {
    name: "New Mexico",
    slug: "new-mexico",
    abbreviation: "NM",
    maxWeeklyBenefit: 598,
    maxWeeks: 26,
    waitingWeek: true,
    filingUrl: "https://www.dws.nm.gov/Unemployment",
    filingPhone: "1-877-664-6984",
    handbookUrl: "https://www.dws.nm.gov/Unemployment",
    stateJobsUrl: "https://careers.share.nm.gov/",
    minEarnings: "You must have wages in at least two quarters of your base period. Your weekly benefit amount is 53.5% of the average weekly wage in your highest quarter; check the New Mexico DWS site for the current minimum and maximum weekly benefit amounts.",
    eligibility: [
      "You separated from your New Mexico job through no fault of your own",
      "You have wages in at least two quarters of your base period",
      "You are able and available for full-time New Mexico employment",
      "You complete weekly work search activities and report through NM DWS",
      "You register on jobs.state.nm.us, required for benefits"
    ],
    howToFile: [
      "Visit jobs.state.nm.us to file online",
      "Create an account",
      "Provide personal and employment information",
      "Submit your claim",
      "File weekly certifications"
    ],
    documentsNeeded: [
      "Social Security number",
      "New Mexico driver's license or state ID",
      "Employer information for every job in the past 18 months",
      "NM Workforce Connection account credentials",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Filing late, New Mexico doesn't backdate before your file week",
      "Missing the weekly certification on jobs.state.nm.us",
      "Not reporting partial earnings",
      "Skipping NM Workforce Connection registration"
    ],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [
      {
        question: "How much will I receive in New Mexico?",
        answer: "New Mexico pays up to $598 per week."
      },
      {
        question: "How long can I receive benefits?",
        answer: "Up to 26 weeks."
      },
      {
        question: "Can I file online?",
        answer: "Yes. File at jobs.state.nm.us or call 1-877-664-6984."
      }
    ],
    tips: [
      { headline: "Use jobs.state.nm.us for everything.", body: "New Mexico consolidated UI and workforce services into a single portal. Bookmark it for filing, certifying, and tracking work search." },
      { headline: "Document weekly job contacts.", body: "NM DWS audits work search records randomly. Keep a written log with date, employer, position, and contact method for every week claimed." },
      { headline: "Apply for SNAP if you qualify.", body: "At $598/week max, many New Mexico claimants also qualify for HSD assistance programs. Filing both the same week maximizes your safety net." },
      { headline: "Watch your jobs.state.nm.us inbox.", body: "New Mexico sends fact-finding requests through the portal, often with short deadlines. Check it weekly to avoid suspended payments." }
    ]
  },
  {
    name: "New York",
    slug: "new-york",
    abbreviation: "NY",
    maxWeeklyBenefit: 869,
    maxWeeks: 26,
    waitingWeek: false,
    filingUrl: "https://dol.ny.gov/how-do-i-file",
    filingPhone: "1-888-209-8124",
    handbookUrl: "https://dol.ny.gov/system/files/documents/2026/01/ui-claimant-handbook_1-26.pdf",
    stateJobsUrl: "https://statejobs.ny.gov/public/vacancytable.cfm",
    minEarnings: "You must have earned at least $3,400 in your highest quarter and total wages of at least 1.5 times your highest quarter.",
    eligibility: [
      "You separated from your New York job through no fault of your own",
      "You earned at least $3,400 in your highest base period quarter",
      "Your total base period wages equal at least 1.5 times your highest quarter",
      "You are ready, willing, and able to work, NY's specific availability standard",
      "You complete 3 weekly work search activities and document them"
    ],
    howToFile: [
      "Visit dol.ny.gov and select 'File a Claim'",
      "Create an NY.gov account if you don't have one",
      "Complete the online application",
      "Submit your claim",
      "Certify weekly through the online portal"
    ],
    documentsNeeded: [
      "Social Security number",
      "New York driver's license or state ID",
      "Complete employment history for the last 18 months",
      "Employer FEIN if available",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Not filing during your designated day (NY assigns days based on the last name)",
      "Missing the weekly certification on dol.ny.gov",
      "Not reporting freelance or gig work, NY requires reporting of all income",
      "Falling short of NY's required 3 work search activities per week"
    ],
    processingTime: "Claims are typically processed within 2-4 weeks.",
    faq: [
      {
        question: "How much will I receive in unemployment benefits in New York?",
        answer: "New York pays up to $869 per week as of October 2025. Your benefit amount is about half your average weekly wage, up to the maximum."
      },
      {
        question: "How long can I receive unemployment benefits in New York?",
        answer: "You can receive benefits for up to 26 weeks. New York has no waiting week."
      },
      {
        question: "Can I file for unemployment online in New York?",
        answer: "Yes. File at dol.ny.gov or call 1-888-209-8124. You can file any day of the week."
      }
    ],
    tips: [
      { headline: "No waiting week, file immediately.", body: "New York pays from your first eligible week. File the same week you separate, every day's delay is benefit days you can't recover." },
      { headline: "Hit 3 work search activities each week.", body: "New York requires 3 documented work search activities. Falling short disqualifies the entire week, not just reduces it." },
      { headline: "Report all freelance and gig income.", body: "New York DOL cross-references 1099 records. Underreporting freelance income from platforms like Uber or Upwork triggers fraud investigations." },
      { headline: "File on your assigned day to skip queues.", body: "NY DOL assigns claimants a designated filing day based on the last name to spread server load. Filing on your day means faster processing." }
    ]
  },
  {
    name: "North Carolina",
    slug: "north-carolina",
    abbreviation: "NC",
    maxWeeklyBenefit: 450,
    maxWeeks: 12,
    waitingWeek: true,
    filingUrl: "https://des.nc.gov/individuals/apply-unemployment",
    filingPhone: "1-888-737-0259",
    handbookUrl: "https://www.des.nc.gov/documents/guide-ui-benefits-english/open",
    stateJobsUrl: "https://oshr.nc.gov/work-nc",
    minEarnings: "You must have wages in at least two base period quarters totaling at least 6 times the state average weekly insured wage (an indexed figure set each year).",
    eligibility: [
      "You separated from your North Carolina job through no fault of your own",
      "You have wages in at least two base period quarters totaling at least 6 times the state average weekly insured wage",
      "You are able and available for full-time North Carolina work",
      "You complete weekly work search activities through NCWorks",
      "You serve a one-week unpaid waiting period before paid benefits begin"
    ],
    howToFile: [
      "Visit des.nc.gov to file online",
      "Create an account",
      "Provide personal and employment information",
      "Submit your claim",
      "File weekly certifications"
    ],
    documentsNeeded: [
      "Social Security number",
      "North Carolina driver's license or state ID",
      "Employer information for every job in the past 18 months",
      "NCWorks account credentials",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Plan for only 12 weeks, North Carolina ties Florida for the shortest duration in the nation",
      "Missing the weekly certification on des.nc.gov",
      "Skipping NCWorks.gov registration",
      "Filing late, DES doesn't backdate beyond your file week"
    ],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [
      {
        question: "How much will I receive in North Carolina?",
        answer: "North Carolina pays up to $450 per week."
      },
      {
        question: "How long can I receive benefits?",
        answer: "Up to 12 weeks, tied with Florida for the shortest in the nation."
      },
      {
        question: "Can I file online?",
        answer: "Yes. File at des.nc.gov or call 1-888-737-0259."
      }
    ],
    tips: [
      { headline: "Plan finances for 12 weeks max.", body: "North Carolina ties with Florida for the shortest duration in the country. Treat week one urgently, the runway is 12 weeks, period." },
      { headline: "Register on NCWorks the same day you file.", body: "DES blocks benefits until NCWorks.gov registration is complete. The two systems aren't automatically linked." },
      { headline: "Document weekly job search.", body: "NC DES audits work search records. Keep written records with date, employer, position, and method for every week claimed." },
      { headline: "Read the NC UI Benefits Guide.", body: "North Carolina's claimant guide is one of the clearer state handbooks, it explains the partial-earnings deduction formula clearly." }
    ]
  },
  {
    name: "North Dakota",
    slug: "north-dakota",
    abbreviation: "ND",
    maxWeeklyBenefit: 786,
    maxWeeks: 26,
    waitingWeek: true,
    filingUrl: "https://www.jobsnd.com/unemployment-individuals/file-claim",
    filingPhone: "1-701-328-4995",
    handbookUrl: "https://www.jobsnd.com/sites/www/files/documents/jsnd-documents/uiclaimantguidejsnd4003.pdf",
    stateJobsUrl: "https://www.omb.nd.gov/team-nd-careers/career-openings",
    minEarnings: "You must have wages in at least two base period quarters and total base period wages of at least 1.5 times your highest quarter. North Dakota uses a formula rather than a fixed dollar minimum.",
    eligibility: [
      "You separated from your North Dakota job through no fault of your own",
      "You have wages in at least two base period quarters totaling at least 1.5 times your highest quarter",
      "You are able and available for full-time North Dakota work",
      "You complete weekly work search activities and report through Job Service ND",
      "You register on jobsnd.com, required for benefits"
    ],
    howToFile: [
      "Visit jobsnd.com to file online",
      "Create an account",
      "Provide personal and employment information",
      "Submit your claim",
      "File weekly certifications"
    ],
    documentsNeeded: [
      "Social Security number",
      "North Dakota driver's license or state ID",
      "Employer details for every job in the past 18 months",
      "Job Service ND account credentials",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Skipping Job Service ND registration, JSND blocks payments until your jobsnd.com profile is active",
      "Filing late, North Dakota doesn't backdate beyond the Sunday of your file week",
      "Not reporting oil-field, agricultural, or seasonal earnings",
      "Missing weekly certifications on jobsnd.com"
    ],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [
      {
        question: "How much will I receive in North Dakota?",
        answer: "North Dakota pays up to $786 per week."
      },
      {
        question: "How long can I receive benefits?",
        answer: "Up to 26 weeks."
      },
      {
        question: "Can I file online?",
        answer: "Yes. File at jobsnd.com or call 1-701-328-4995."
      }
    ],
    tips: [
      { headline: "Report oil-field and agricultural earnings.", body: "North Dakota's UI fund cross-references oil-industry and agricultural employer reports. Underreporting triggers fraud investigations." },
      { headline: "Register on jobsnd.com immediately.", body: "Job Service ND blocks benefits until your jobsnd.com profile is complete. Do it the same day you file your claim." },
      { headline: "File during off-peak hours.", body: "North Dakota's jobsnd.com has occasional outages during peak filing periods. Early morning filings complete most reliably." },
      { headline: "Keep employer separation paperwork.", body: "If you worked seasonal oil-field jobs, North Dakota DLI may request specific shutdown or layoff paperwork, keep it from the start." }
    ]
  },
  {
    name: "Ohio",
    slug: "ohio",
    abbreviation: "OH",
    maxWeeklyBenefit: 600,
    maxWeeks: 26,
    waitingWeek: true,
    filingUrl: "https://unemployment.ohio.gov/",
    filingPhone: "1-877-644-6562",
    handbookUrl: "https://www.odjfs.state.oh.us/forms/num/JFS22758/pdf/",
    stateJobsUrl: "https://careers.ohio.gov/",
    minEarnings: "You must have worked at least 20 weeks and earned an average of at least $352 per week during your base period.",
    eligibility: [
      "You separated from your Ohio job through no fault of your own",
      "You worked at least 20 weeks during your base period",
      "You averaged at least $352 per week in base period earnings",
      "You are able and available for full-time Ohio work",
      "You complete weekly work search activities through OhioMeansJobs"
    ],
    howToFile: [
      "Visit unemployment.ohio.gov to file online",
      "Create an account",
      "Provide personal and employment information",
      "Submit your claim",
      "File weekly certifications"
    ],
    documentsNeeded: [
      "Social Security number",
      "Ohio driver's license or state ID",
      "Employer information for every job in the past 18 months",
      "OhioMeansJobs account credentials",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Skipping OhioMeansJobs registration, ODJFS blocks payments until your profile is active",
      "Missing weekly certifications on unemployment.ohio.gov",
      "Not reporting partial or 1099 earnings",
      "Filing late, Ohio doesn't backdate beyond your file week"
    ],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [
      {
        question: "How much will I receive in Ohio?",
        answer: "Ohio pays up to $600 per week (up to $842 with dependents)."
      },
      {
        question: "How long can I receive benefits?",
        answer: "Up to 26 weeks."
      },
      {
        question: "Can I file online?",
        answer: "Yes. File at unemployment.ohio.gov or call 1-877-644-6562."
      }
    ],
    tips: [
      { headline: "Claim your dependents.", body: "Ohio's max with dependents is $842/week, significantly above the $600 base. Don't miss listing every dependent at filing." },
      { headline: "Register on OhioMeansJobs the same day.", body: "ODJFS blocks benefits until your OhioMeansJobs profile is active. The two systems aren't automatically linked." },
      { headline: "Document the 20-weeks-worked threshold.", body: "Ohio's eligibility requires at least 20 weeks of work in the base period. Have pay stubs ready in case ODJFS asks for verification." },
      { headline: "Watch your unemployment.ohio.gov inbox.", body: "Ohio sends fact-finding questionnaires through the portal, often with short deadlines. Missing one suspends your claim." }
    ]
  },
  {
    name: "Oklahoma",
    slug: "oklahoma",
    abbreviation: "OK",
    maxWeeklyBenefit: 649,
    maxWeeks: 16,
    waitingWeek: true,
    filingUrl: "https://unemployment.state.ok.us/",
    filingPhone: "1-405-525-1500",
    handbookUrl: "https://www.oklahoma.gov/content/dam/ok/en/oesc/documents/forms/OES-339.pdf",
    stateJobsUrl: "https://www.jobs.ok.gov/",
    minEarnings: "You must have earned at least $1,500 in your base period.",
    eligibility: [
      "You separated from your Oklahoma job through no fault of your own",
      "You earned at least $1,500 in base period wages",
      "You are able and available for full-time Oklahoma work",
      "You complete weekly work search activities and report through OESC",
      "You register on OKJobMatch.com, required for benefits"
    ],
    howToFile: [
      "Visit unemployment.state.ok.us to file online",
      "Create an account",
      "Provide personal and employment information",
      "Submit your claim",
      "File weekly certifications"
    ],
    documentsNeeded: [
      "Social Security number",
      "Oklahoma driver's license or state ID",
      "Employer information for every job in the past 18 months",
      "OKJobMatch account credentials",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Skipping OKJobMatch registration, OESC blocks payments without it",
      "Filing late, Oklahoma doesn't backdate beyond your file week",
      "Missing weekly certifications on unemployment.state.ok.us",
      "Not reporting oil-field or agricultural earnings"
    ],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [
      {
        question: "How much will I receive in Oklahoma?",
        answer: "Oklahoma pays up to $649 per week."
      },
      {
        question: "How long can I receive benefits?",
        answer: "Up to 16 weeks."
      },
      {
        question: "Can I file online?",
        answer: "Yes. File at unemployment.state.ok.us or call 1-405-525-1500."
      }
    ],
    tips: [
      { headline: "Plan for 16 weeks max.", body: "Oklahoma's duration is shorter than the national norm. Treat week one with urgency, there's no extension if work doesn't materialize." },
      { headline: "Register on OKJobMatch.com immediately.", body: "OESC blocks benefits until your OKJobMatch profile is active. Do it the same day you file." },
      { headline: "Report oil-field and ag earnings.", body: "Oklahoma's UI fund cross-references oil-industry and agricultural employer reports. Underreporting triggers fraud reviews." },
      { headline: "Read OES-339 (the official handbook).", body: "Oklahoma's claimant handbook explains the partial-earnings deduction and base period rules in plain language." }
    ]
  },
  {
    name: "Oregon",
    slug: "oregon",
    abbreviation: "OR",
    maxWeeklyBenefit: 872,
    maxWeeks: 26,
    waitingWeek: true,
    filingUrl: "https://unemployment.oregon.gov/",
    filingPhone: "1-877-345-3484",
    handbookUrl: "https://unemployment.oregon.gov/uploads/docs/UIPUB350-EN.pdf",
    stateJobsUrl: "https://www.oregon.gov/jobs/pages/index.aspx",
    minEarnings: "You must have earned at least $1,000 in your base period.",
    eligibility: [
      "You separated from your Oregon job through no fault of your own",
      "You earned at least $1,000 in base period wages",
      "You are able and available for full-time Oregon work",
      "You complete weekly work search activities and report through Frances Online",
      "You register on iMatchSkills, required for benefits"
    ],
    howToFile: [
      "Visit unemployment.oregon.gov to file online",
      "Create an account in Frances Online",
      "Provide personal and employment information",
      "Submit your claim",
      "File weekly certifications"
    ],
    documentsNeeded: [
      "Social Security number",
      "Oregon driver's license or state ID",
      "Employer information for every job in the past 18 months",
      "iMatchSkills account credentials",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Skipping iMatchSkills registration, Oregon Employment Department blocks payments without it",
      "Missing weekly certifications in Frances Online",
      "Not reporting partial or 1099 earnings",
      "Filing late, Oregon doesn't backdate beyond your file week"
    ],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [
      {
        question: "How much will I receive in Oregon?",
        answer: "Oregon pays up to $872 per week."
      },
      {
        question: "How long can I receive benefits?",
        answer: "Up to 26 weeks."
      },
      {
        question: "Can I file online?",
        answer: "Yes. File at unemployment.oregon.gov or call 1-877-345-3484."
      }
    ],
    tips: [
      { headline: "Use Frances Online, Oregon's new UI portal.", body: "Oregon migrated from the old UI Pub system to Frances Online. Bookmark unemployment.oregon.gov as your single source of truth." },
      { headline: "Register on iMatchSkills.", body: "Oregon Employment Department blocks payments until your iMatchSkills profile is active. The two systems aren't automatically linked." },
      { headline: "Document weekly job search.", body: "Oregon audits work search records. Keep a written log with date, employer, position, and method for every week claimed." },
      { headline: "Watch your Frances Online inbox.", body: "Oregon sends fact-finding requests through Frances Online, often with short deadlines. Check the portal weekly." }
    ]
  },
  {
    name: "Pennsylvania",
    slug: "pennsylvania",
    abbreviation: "PA",
    maxWeeklyBenefit: 605,
    maxWeeks: 26,
    waitingWeek: true,
    filingUrl: "https://www.uc.pa.gov/",
    filingPhone: "1-888-313-7284",
    handbookUrl: "https://www.pa.gov/content/dam/copapwp-pagov/en/dli/documents/uc/ucp-forms/ucp-1.pdf",
    stateJobsUrl: "https://careers.employment.pa.gov/",
    minEarnings: "You must have earned at least $116 per week for at least 18 credit weeks, with total base period wages of at least $2,718. At least 37% of wages must come from outside your highest quarter.",
    eligibility: [
      "You separated from your Pennsylvania job through no fault of your own",
      "You earned at least $116 per week for 18 or more credit weeks",
      "Your total base period wages are at least $2,718, with 37%+ outside your highest quarter",
      "You are able and available for full-time Pennsylvania work",
      "You register with PA CareerLink, required for benefits"
    ],
    howToFile: [
      "Visit uc.pa.gov to file online",
      "Create a Keystone ID account",
      "Provide personal and employment information",
      "Submit your claim",
      "File biweekly certifications"
    ],
    documentsNeeded: [
      "Social Security number",
      "Pennsylvania driver's license or state ID",
      "Employer information for every job in the past 18 months",
      "Keystone ID login credentials (a Pennsylvania state ID system)",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Forgetting Pennsylvania uses biweekly certification, not weekly",
      "Skipping PA CareerLink registration, UC blocks payments until you're registered",
      "Not reporting any earnings, including 1099 or temp work",
      "Letting your Keystone ID password expire, locked accounts cost days at exactly the wrong time"
    ],
    processingTime: "Claims typically take 2-4 weeks to process.",
    faq: [
      {
        question: "How much will I receive in Pennsylvania?",
        answer: "Pennsylvania pays up to $605 per week with dependents."
      },
      {
        question: "How long can I receive benefits?",
        answer: "Up to 26 weeks."
      },
      {
        question: "Can I file online?",
        answer: "Yes. File at uc.pa.gov or call 1-888-313-7284."
      }
    ],
    tips: [
      { headline: "Certify every two weeks.", body: "Pennsylvania UC uses biweekly certification. First-time claimants who try to certify weekly often miss the actual deadline and lose payments." },
      { headline: "Save your Keystone ID password.", body: "Pennsylvania uses Keystone ID across multiple state services. Account lockouts cost days, don't let your password expire mid-claim." },
      { headline: "Register on PA CareerLink immediately.", body: "PA UC blocks benefits until your CareerLink profile is active. Do it the same day you file your claim." },
      { headline: "Track 18 credit weeks.", body: "Pennsylvania's eligibility requires 18 credit weeks of qualifying wages. Have pay stubs or W-2s ready in case UC requests verification." }
    ]
  },
  {
    name: "Rhode Island",
    slug: "rhode-island",
    abbreviation: "RI",
    maxWeeklyBenefit: 745,
    maxWeeks: 26,
    waitingWeek: false,
    filingUrl: "https://dlt.ri.gov/individuals/unemployment-insurance",
    filingPhone: "1-401-243-9100",
    handbookUrl: "https://dlt.ri.gov/sites/g/files/xkgbur571/files/documents/pdf/ui/UIGuide.pdf",
    stateJobsUrl: "https://www.ri.gov/employment/",
    minEarnings: "You must have earned at least $19,200 in your base period, or at least $3,200 in one quarter with total base period wages of at least 1.5 times your highest quarter and at least $6,400 overall.",
    eligibility: [
      "You separated from your Rhode Island job through no fault of your own",
      "You earned at least $19,200 in base period wages, or $3,200 in one quarter plus the alternative wage tests",
      "You are able and available for full-time Rhode Island work",
      "You complete weekly work search activities and report through DLT",
      "You register on EmployRI"
    ],
    howToFile: [
      "Visit dlt.ri.gov to file online",
      "Create an account",
      "Provide personal and employment information",
      "Submit your claim",
      "File weekly certifications"
    ],
    documentsNeeded: [
      "Social Security number",
      "Rhode Island driver's license or state ID",
      "Employer information for every job in the past 18 months",
      "Spouse and dependent information for the dependency allowance",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Filing late, Rhode Island has no waiting week, so file the day you separate",
      "Not claiming the dependency allowance, RI adds significant amounts per dependent",
      "Missing weekly certifications on dlt.ri.gov",
      "Skipping EmployRI registration"
    ],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [
      {
        question: "How much will I receive in Rhode Island?",
        answer: "Rhode Island pays up to $745 per week (up to $931 with dependents)."
      },
      {
        question: "How long can I receive benefits?",
        answer: "Up to 26 weeks."
      },
      {
        question: "Can I file online?",
        answer: "Yes. File at dlt.ri.gov or call 1-401-243-9100."
      }
    ],
    tips: [
      { headline: "No waiting week, file immediately.", body: "Rhode Island pays from your first eligible week. File the day you separate to maximize benefit weeks." },
      { headline: "Claim every dependent.", body: "Rhode Island's max with dependents is $931/week. Without them, you cap at $745. Don't skip listing every dependent at filing." },
      { headline: "Register on EmployRI the same day.", body: "DLT blocks benefits until your EmployRI profile is complete. The two systems aren't automatically linked." },
      { headline: "Read the RI UI Guide.", body: "Rhode Island's claimant handbook explains the dependency allowance rules and partial-earnings formulas, most first-time questions are covered." }
    ]
  },
  {
    name: "South Carolina",
    slug: "south-carolina",
    abbreviation: "SC",
    maxWeeklyBenefit: 350,
    maxWeeks: 20,
    waitingWeek: true,
    filingUrl: "https://dew.sc.gov/individuals/applying-benefits",
    filingPhone: "1-866-831-1724",
    handbookUrl: "https://dew.sc.gov/claimant-handbook",
    stateJobsUrl: "https://careers.sc.gov/",
    minEarnings: "You must have earned at least $4,455 in your base period.",
    eligibility: [
      "You separated from your South Carolina job through no fault of your own",
      "You earned at least $4,455 in base period wages",
      "You are able and available for full-time South Carolina work",
      "You complete weekly work search activities through SC Works Online Services",
      "You serve a one-week unpaid waiting period before benefits begin"
    ],
    howToFile: [
      "Visit dew.sc.gov to file online",
      "Create an account",
      "Provide personal and employment information",
      "Submit your claim",
      "File weekly certifications"
    ],
    documentsNeeded: [
      "Social Security number",
      "South Carolina driver's license or state ID",
      "Employer information for every job in the past 18 months",
      "SC Works Online Services account credentials",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Skipping SC Works Online Services registration, DEW blocks payments until you're registered",
      "Missing weekly certifications on dew.sc.gov",
      "Falling short of the SC-required weekly work search activities",
      "Not reporting partial or 1099 earnings"
    ],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [
      {
        question: "How much will I receive in South Carolina?",
        answer: "South Carolina pays up to $350 per week."
      },
      {
        question: "How long can I receive benefits?",
        answer: "Up to 20 weeks."
      },
      {
        question: "Can I file online?",
        answer: "Yes. File at dew.sc.gov or call 1-866-831-1724."
      }
    ],
    tips: [
      { headline: "Plan for 20 weeks max.", body: "South Carolina's duration is shorter than the national norm. Apply aggressively from week one, there's no extension if work doesn't materialize." },
      { headline: "Register on SC Works Online Services.", body: "DEW blocks benefits until your SC Works profile is active. The two systems aren't automatically linked." },
      { headline: "Document weekly job search.", body: "SC DEW audits work search records. Keep a written log with date, employer, position, and method for every week claimed." },
      { headline: "Watch the dew.sc.gov inbox.", body: "South Carolina sends fact-finding requests through the DEW portal, often with short deadlines. Check it weekly to avoid suspended payments." }
    ]
  },
  {
    name: "South Dakota",
    slug: "south-dakota",
    abbreviation: "SD",
    maxWeeklyBenefit: 553,
    maxWeeks: 26,
    waitingWeek: true,
    filingUrl: "https://dlr.sd.gov/ra/individuals/file_claim.aspx",
    filingPhone: "1-605-626-2452",
    handbookUrl: "https://dlr.sd.gov/ra/publications/pam247.pdf",
    stateJobsUrl: "https://bhr.sd.gov/job-seekers/",
    minEarnings: "You must have earned at least $728 in your highest quarter of your base period.",
    eligibility: [
      "You separated from your South Dakota job through no fault of your own",
      "You earned at least $728 in your highest base period quarter",
      "You are able and available for full-time South Dakota work",
      "You complete weekly work search activities and report to SD DLR",
      "You register on SDWORKS, required for benefits"
    ],
    howToFile: [
      "Visit dlr.sd.gov to file online",
      "Create an account",
      "Provide personal and employment information",
      "Submit your claim",
      "File weekly certifications"
    ],
    documentsNeeded: [
      "Social Security number",
      "South Dakota driver's license or state ID",
      "Employer information for every job in the past 18 months",
      "SDWORKS account credentials",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Skipping SDWORKS registration, SD DLR blocks payments until your profile is active",
      "Missing weekly certifications on dlr.sd.gov",
      "Not reporting agricultural or seasonal earnings",
      "Filing late, South Dakota doesn't backdate beyond your file week"
    ],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [
      {
        question: "How much will I receive in South Dakota?",
        answer: "South Dakota pays up to $553 per week."
      },
      {
        question: "How long can I receive benefits?",
        answer: "Up to 26 weeks."
      },
      {
        question: "Can I file online?",
        answer: "Yes. File at dlr.sd.gov or call 1-605-626-2452."
      }
    ],
    tips: [
      { headline: "Register on SDWORKS the same day.", body: "South Dakota DLR blocks benefits until your SDWORKS profile is complete. Do it the same day you file your claim." },
      { headline: "Report agricultural earnings.", body: "South Dakota's UI fund cross-references farm and ranch employer reports. Underreporting triggers fraud investigations." },
      { headline: "Use dlr.sd.gov on desktop.", body: "South Dakota's UI portal works most reliably on a full browser. Mobile sessions have been known to drop mid-application." },
      { headline: "Read PAM247 (the official handbook).", body: "South Dakota's claimant handbook explains the partial-earnings deduction and base period rules clearly." }
    ]
  },
  {
    name: "Tennessee",
    slug: "tennessee",
    abbreviation: "TN",
    maxWeeklyBenefit: 325,
    maxWeeks: 12,
    waitingWeek: true,
    filingUrl: "https://www.jobs4tn.gov/",
    filingPhone: "1-844-224-5818",
    handbookUrl: "https://www.jobs4tn.gov/admin/gsipub/htmlarea/uploads/UIBenefitRightsInformation.pdf",
    stateJobsUrl: "https://www.tn.gov/careers.html",
    minEarnings: "You must have wages averaging at least $780.01 in each of your two highest base period quarters.",
    eligibility: [
      "You separated from your Tennessee job through no fault of your own",
      "You earned an average of at least $780.01 in each of your two highest base period quarters",
      "You are able and available for full-time Tennessee work",
      "You complete weekly work search activities and report through Jobs4TN",
      "You serve a one-week unpaid waiting period before paid benefits begin"
    ],
    howToFile: [
      "Visit jobs4tn.gov to file online",
      "Create an account",
      "Provide personal and employment information",
      "Submit your claim",
      "File weekly certifications"
    ],
    documentsNeeded: [
      "Social Security number",
      "Tennessee driver's license or state ID",
      "Employer information for every job in the past 18 months",
      "Jobs4TN account credentials",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Plan for 12 weeks max, Tennessee has one of the shortest durations in the country",
      "Missing weekly certifications on jobs4tn.gov",
      "Skipping Jobs4TN registration, required for benefits",
      "Not reporting partial-week earnings"
    ],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [
      {
        question: "How much will I receive in Tennessee?",
        answer: "Tennessee pays up to $325 per week."
      },
      {
        question: "How long can I receive benefits?",
        answer: "Up to 12 weeks (may increase up to 20 weeks if the state unemployment rate rises above 5.5%)."
      },
      {
        question: "Can I file online?",
        answer: "Yes. File at jobs4tn.gov or call 1-844-224-5818."
      }
    ],
    tips: [
      { headline: "Plan finances for 12 weeks max.", body: "Tennessee ties Florida and North Carolina for shortest duration. Treat week one urgently, your runway is 12 weeks unless the state unemployment rate rises." },
      { headline: "Register on Jobs4TN the same day.", body: "Tennessee blocks benefits until your Jobs4TN profile is complete. It's a separate step from filing." },
      { headline: "Document weekly job search.", body: "Tennessee audits work search. Keep a written log with date, employer, position, and method of contact for every week claimed." },
      { headline: "Watch your jobs4tn.gov inbox.", body: "Tennessee sends fact-finding requests through Jobs4TN, often with short deadlines. Missing one suspends your claim." }
    ]
  },
  {
    name: "Texas",
    slug: "texas",
    abbreviation: "TX",
    maxWeeklyBenefit: 605,
    maxWeeks: 26,
    waitingWeek: true,
    filingUrl: "https://www.twc.texas.gov/services/apply-benefits",
    filingPhone: "1-800-939-6631",
    handbookUrl: "https://www.twc.texas.gov/sites/default/files/ui/docs/unemployment-benefits-handbook-twc.pdf",
    stateJobsUrl: "https://capps.taleo.net/careersection/ex/jobsearch.ftl",
    minEarnings: "You must have wages in at least two base period quarters and total base period wages of at least 37 times your weekly benefit amount.",
    eligibility: [
      "You separated from your Texas job through no fault of your own",
      "You have wages in at least two base period quarters totaling at least 37 times your weekly benefit amount and at least $2,500",
      "You are physically able and available for full-time Texas work",
      "You complete weekly work search activities and report through TWC",
      "You register on WorkInTexas.com, required for benefits"
    ],
    howToFile: [
      "Visit twc.texas.gov and select 'Apply for Benefits'",
      "Log in or create an account",
      "Complete the online application with personal and employment details",
      "Submit your claim, your effective date is the Sunday of the week you apply",
      "Submit payment requests every two weeks to continue receiving benefits"
    ],
    documentsNeeded: [
      "Social Security number",
      "Texas driver's license or Texas ID number",
      "Last employer's name, address, phone number, and dates of employment",
      "Information for all employers in the last 18 months",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Filing late, TWC cannot pay benefits for weeks before your claim date",
      "Not submitting payment requests every two weeks, Texas uses biweekly, not weekly, certification",
      "Skipping WorkInTexas.com registration, TWC requires it before paying benefits",
      "Not reporting earnings from part-time or gig work",
      "Ignoring TWC correspondence, respond to all requests promptly"
    ],
    processingTime: "Most claims are processed within 2-3 weeks. If an investigation is needed, it may take 4-6 weeks.",
    faq: [
      {
        question: "How much will I receive in unemployment benefits in Texas?",
        answer: "Texas pays up to $605 per week for up to 26 weeks. Your benefit amount is based on your earnings during the base period."
      },
      {
        question: "How long can I receive unemployment benefits in Texas?",
        answer: "You can receive benefits for up to 26 weeks. Texas has a waiting week, the first payable week of your claim is held back and not paid."
      },
      {
        question: "Can I file for unemployment online in Texas?",
        answer: "Yes. The fastest way is online at twc.texas.gov. You can also call 1-800-939-6631, but wait times can be long."
      },
      {
        question: "I was laid off due to business downturn, do I qualify in Texas?",
        answer: "Yes. Being laid off due to lack of work, downsizing, or business closure qualifies you for unemployment in Texas. You were separated through no fault of your own."
      },
      {
        question: "What if my employer contests my claim in Texas?",
        answer: "TWC will investigate and may schedule a phone hearing. You'll have a chance to explain your side. Continue filing while the investigation is pending."
      }
    ],
    tips: [
      { headline: "Submit payment requests every two weeks.", body: "Texas uses biweekly certification. First-time claimants who try to certify weekly often miss the actual deadline and lose payments." },
      { headline: "Register on WorkInTexas.com immediately.", body: "TWC blocks benefits until your WorkInTexas profile is active. Do it the same day you apply for benefits." },
      { headline: "Respond to every TWC letter.", body: "TWC frequently mails fact-finding requests with short deadlines. Missing one suspends your claim until you respond." },
      { headline: "Read the TWC handbook.", body: "Texas's UI handbook explains the work search log requirements and partial-earnings rules clearly, most questions are answered there." }
    ]
  },
  {
    name: "Utah",
    slug: "utah",
    abbreviation: "UT",
    maxWeeklyBenefit: 806,
    maxWeeks: 26,
    waitingWeek: true,
    filingUrl: "https://jobs.utah.gov/ui/home/",
    filingPhone: "1-801-526-9235",
    handbookUrl: "https://jobs.utah.gov/ui/jobseeker/ClaimantGuide.pdf",
    stateJobsUrl: "https://www.utah.gov/employment/",
    minEarnings: "You must have earned at least $5,500 in total base period wages, with wages in at least two quarters and total wages of at least 1.5 times your highest quarter.",
    eligibility: [
      "You separated from your Utah job through no fault of your own",
      "You earned at least $5,500 in total base period wages with earnings in two or more quarters",
      "Your total base period wages equal at least 1.5 times your highest quarter",
      "You are able and available for full-time Utah work",
      "You complete weekly work search activities and report through jobs.utah.gov"
    ],
    howToFile: [
      "Visit jobs.utah.gov to file online",
      "Create an account",
      "Provide personal and employment information",
      "Submit your claim",
      "File weekly certifications"
    ],
    documentsNeeded: [
      "Social Security number",
      "Utah driver's license or state ID",
      "Employer information for every job in the past 18 months",
      "jobs.utah.gov account credentials",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Skipping jobs.utah.gov registration, Utah DWS blocks benefits without it",
      "Missing weekly certifications on jobs.utah.gov",
      "Not reporting partial or 1099 earnings",
      "Filing late, Utah doesn't backdate beyond your file week"
    ],
    processingTime: "Claims typically take 1-3 weeks to process.",
    faq: [
      {
        question: "How much will I receive in Utah?",
        answer: "Utah pays up to $806 per week. Note: Utah has a one-week waiting period before benefits begin."
      },
      {
        question: "How long can I receive benefits?",
        answer: "Up to 26 weeks."
      },
      {
        question: "Can I file online?",
        answer: "Yes. File at jobs.utah.gov or call 1-801-526-9235."
      }
    ],
    tips: [
      { headline: "Use jobs.utah.gov for everything.", body: "Utah DWS consolidated UI and workforce services into a single portal. Bookmark it for filing, certifying, and tracking work search." },
      { headline: "Document weekly job search.", body: "Utah audits work search records. Keep a written log with date, employer, position, and contact method for every week claimed." },
      { headline: "File during off-peak hours.", body: "Utah's portal has occasional outages during peak filing periods. Early morning or late evening sessions are most reliable." },
      { headline: "Read the Utah Claimant Guide.", body: "Utah's claimant handbook explains the partial-earnings deduction formula in plain language, important if you're working part-time while claiming." }
    ]
  },
  {
    name: "Vermont",
    slug: "vermont",
    abbreviation: "VT",
    maxWeeklyBenefit: 705,
    maxWeeks: 26,
    waitingWeek: false,
    filingUrl: "https://labor.vermont.gov/unemployment-insurance/ui-claimants",
    filingPhone: "1-877-214-3330",
    handbookUrl: "https://labor.vermont.gov/sites/labor/files/doc_library/B-11Claimant%20handbook%202019.pdf",
    stateJobsUrl: "https://careers.vermont.gov/",
    minEarnings: "You must have wages in your highest quarter of at least Vermont's minimum quarterly amount (which changes each July), plus wages in your other quarters totaling at least 40% of your highest quarter. Your weekly benefit amount is the total of your two highest quarters divided by 45.",
    eligibility: [
      "You separated from your Vermont job through no fault of your own",
      "You have qualifying wages in your highest quarter plus at least 40% of that amount in your other quarters",
      "You are able and available for full-time Vermont work",
      "You complete weekly work search activities and report to VT DOL",
      "You register on Vermont JobLink, required for benefits"
    ],
    howToFile: [
      "Visit labor.vermont.gov to file online",
      "Create an account",
      "Provide personal and employment information",
      "Submit your claim",
      "File weekly certifications"
    ],
    documentsNeeded: [
      "Social Security number",
      "Vermont driver's license or state ID",
      "Employer information for every job in the past 18 months",
      "Vermont JobLink account credentials",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Filing late, Vermont has no waiting week, so file the day you separate",
      "Missing weekly certifications on labor.vermont.gov",
      "Skipping Vermont JobLink registration",
      "Not reporting maple sugaring or seasonal earnings"
    ],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [
      {
        question: "How much will I receive in Vermont?",
        answer: "Vermont pays up to $705 per week. There is no waiting week, benefits begin immediately."
      },
      {
        question: "How long can I receive benefits?",
        answer: "Up to 26 weeks."
      },
      {
        question: "Can I file online?",
        answer: "Yes. File at labor.vermont.gov or call 1-877-214-3330."
      }
    ],
    tips: [
      { headline: "No waiting week, file immediately.", body: "Vermont pays from your first eligible week. File the day you separate to maximize benefit weeks." },
      { headline: "Register on Vermont JobLink the same day.", body: "VT DOL blocks benefits until your Vermont JobLink profile is active. The two systems aren't automatically linked." },
      { headline: "Report seasonal earnings.", body: "Vermont's UI fund cross-references maple, ski-industry, and tourism employer reports. Underreporting triggers fraud investigations." },
      { headline: "Use labor.vermont.gov on desktop.", body: "Vermont's UI portal works best on a full browser. Mobile sessions have been known to drop mid-application." }
    ]
  },
  {
    name: "Virginia",
    slug: "virginia",
    abbreviation: "VA",
    maxWeeklyBenefit: 430,
    maxWeeks: 26,
    waitingWeek: true,
    filingUrl: "https://www.vec.virginia.gov/unemployment",
    filingPhone: "1-866-832-2363",
    handbookUrl: "https://www.vec.virginia.gov/unemployed/Claimant-Handbook",
    stateJobsUrl: "https://www.jobs.virginia.gov/",
    minEarnings: "You must have earned at least $3,000 in your base period with wages in at least two quarters.",
    eligibility: [
      "You separated from your Virginia job through no fault of your own",
      "You earned at least $3,000 in base period wages with earnings in two or more quarters",
      "You are able and available for full-time Virginia work",
      "You complete weekly work search activities and report through VEC",
      "You register on Virginia Workforce Connection, required for benefits"
    ],
    howToFile: [
      "Visit vec.virginia.gov to file online",
      "Create an account",
      "Provide personal and employment information",
      "Submit your claim",
      "File weekly certifications"
    ],
    documentsNeeded: [
      "Social Security number",
      "Virginia driver's license or state ID",
      "Employer information for every job in the past 18 months",
      "Virginia Workforce Connection account credentials",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Skipping Virginia Workforce Connection registration, VEC blocks payments without it",
      "Missing weekly certifications on vec.virginia.gov",
      "Not reporting partial or 1099 earnings",
      "Filing late, VEC doesn't backdate beyond your file week"
    ],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [
      {
        question: "How much will I receive in Virginia?",
        answer: "Virginia pays up to $430 per week."
      },
      {
        question: "How long can I receive benefits?",
        answer: "Up to 26 weeks."
      },
      {
        question: "Can I file online?",
        answer: "Yes. File at vec.virginia.gov or call 1-866-832-2363."
      }
    ],
    tips: [
      { headline: "Register on Virginia Workforce Connection.", body: "VEC blocks benefits until your VWC profile is active. The two systems aren't automatically linked, register the same day you file." },
      { headline: "Document weekly job search.", body: "VEC audits work search records randomly. Keep a written log with date, employer, position, and method for every week claimed." },
      { headline: "Read the VEC Claimant Handbook.", body: "Virginia's claimant handbook explains the partial-earnings deduction and base period rules in plain language." },
      { headline: "Watch your VEC inbox.", body: "Virginia sends fact-finding requests through the VEC portal, often with short deadlines. Check it weekly to avoid suspended payments." }
    ]
  },
  {
    name: "Washington",
    slug: "washington",
    abbreviation: "WA",
    maxWeeklyBenefit: 1152,
    maxWeeks: 26,
    waitingWeek: true,
    filingUrl: "https://esd.wa.gov/get-financial-help/unemployment-benefits",
    filingPhone: "1-800-318-6022",
    handbookUrl: "https://esdorchardstorage.blob.core.windows.net/esdwa/Default/ESDWAGOV/Unemployment/ESD-Handbook-for-Unemployed-Workers.pdf",
    stateJobsUrl: "https://careers.wa.gov/",
    minEarnings: "You must have earned at least 680 hours of work in your base period.",
    eligibility: [
      "You separated from your Washington job through no fault of your own",
      "You worked at least 680 hours during your base period",
      "You are able and available for full-time Washington work",
      "You complete 3 weekly job search activities and report them",
      "You register with WorkSource Washington"
    ],
    howToFile: [
      "Visit esd.wa.gov and create a SecureAccess Washington (SAW) account",
      "File your initial claim online through ESD",
      "Provide personal and employment information",
      "Submit your claim",
      "File weekly claims to continue receiving benefits"
    ],
    documentsNeeded: [
      "Social Security number",
      "Washington driver's license or state ID",
      "Employer details for every job in the past 18 months",
      "SecureAccess Washington (SAW) account credentials",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Filing late, Washington doesn't backdate beyond your file week",
      "Missing weekly certifications on esd.wa.gov",
      "Falling short of 3 required weekly job search activities",
      "Not reporting partial-week earnings"
    ],
    processingTime: "Claims typically take 1-3 weeks to process.",
    faq: [
      {
        question: "How much will I receive in unemployment benefits in Washington?",
        answer: "Washington pays up to $1,152 per week, the highest maximum in the nation."
      },
      {
        question: "How long can I receive unemployment benefits in Washington?",
        answer: "You can receive benefits for up to 26 weeks."
      },
      {
        question: "Can I file for unemployment online in Washington?",
        answer: "Yes. File at esd.wa.gov or call 1-800-318-6022."
      }
    ],
    tips: [
      { headline: "Track your 680-hour eligibility.", body: "Washington uses hours, not just dollars, to qualify. Have pay stubs ready in case ESD requests verification of your hours worked." },
      { headline: "Hit 3 weekly job search activities.", body: "Washington requires 3 documented activities. Falling short disqualifies the entire week, not just reduces it." },
      { headline: "Use SecureAccess Washington consistently.", body: "Washington uses SAW across multiple state services. Use the same login for ESD as for other state systems to avoid duplicate accounts." },
      { headline: "Maximum is highest in the nation.", body: "Washington pays up to $1,152/week for 26 weeks = $29,952 max. Get every weekly payment by certifying on time and reporting accurately." }
    ]
  },
  {
    name: "West Virginia",
    slug: "west-virginia",
    abbreviation: "WV",
    maxWeeklyBenefit: 662,
    maxWeeks: 26,
    waitingWeek: true,
    filingUrl: "https://workforcewv.org/unemployment-insurance-benefits/my-unemployment-claim/",
    filingPhone: "1-800-252-5627",
    handbookUrl: "https://workforcewv.org/wp-content/uploads/2024/07/WorkForce-West-Virginia-Claimant-Handbook-Rev.-07.24.pdf",
    stateJobsUrl: "https://personnel.wv.gov/empopp",
    minEarnings: "You must have earned at least $2,200 in your base period.",
    eligibility: [
      "You separated from your West Virginia job through no fault of your own",
      "You earned at least $2,200 in base period wages",
      "You are able and available for full-time West Virginia work",
      "You complete weekly work search activities and report through WorkForce WV",
      "You register on workforcewv.org, required for benefits"
    ],
    howToFile: [
      "Visit workforcewv.org to file online",
      "Create an account",
      "Provide personal and employment information",
      "Submit your claim",
      "File weekly certifications"
    ],
    documentsNeeded: [
      "Social Security number",
      "West Virginia driver's license or state ID",
      "Employer information for every job in the past 18 months",
      "WorkForce WV account credentials",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Skipping WorkForce WV registration, UI is blocked until your profile is active",
      "Missing weekly certifications on workforcewv.org",
      "Not reporting mining or seasonal industry earnings",
      "Filing late, WorkForce WV doesn't backdate beyond your file week"
    ],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [
      {
        question: "How much will I receive in West Virginia?",
        answer: "West Virginia pays up to $662 per week."
      },
      {
        question: "How long can I receive benefits?",
        answer: "Up to 26 weeks."
      },
      {
        question: "Can I file online?",
        answer: "Yes. File at workforcewv.org or call 1-800-252-5627."
      }
    ],
    tips: [
      { headline: "Register on workforcewv.org the same day.", body: "WorkForce WV blocks benefits until your profile is complete. Do it the same day you file your claim." },
      { headline: "Report mining and energy industry earnings.", body: "West Virginia's UI fund cross-references mining and oil/gas employer reports. Underreporting triggers fraud investigations." },
      { headline: "Document weekly job search.", body: "WorkForce WV audits work search records. Keep a written log with date, employer, position, and contact method for every week claimed." },
      { headline: "File during off-peak hours.", body: "West Virginia's portal has occasional outages during peak filing periods. Early morning sessions are most reliable." }
    ]
  },
  {
    name: "Wisconsin",
    slug: "wisconsin",
    abbreviation: "WI",
    maxWeeklyBenefit: 370,
    maxWeeks: 26,
    waitingWeek: true,
    filingUrl: "https://dwd.wisconsin.gov/uiben/apply/",
    filingPhone: "1-414-435-7069",
    handbookUrl: "https://dwd.wisconsin.gov/uiben/handbook/pdf/ucb10print.pdf",
    stateJobsUrl: "https://wj.wi.gov/",
    minEarnings: "You must have wages in at least two base period quarters, total base period wages of at least 35 times your weekly benefit rate, and enough high-quarter wages to set a weekly rate of at least $54.",
    eligibility: [
      "You separated from your Wisconsin job through no fault of your own",
      "You have wages in at least two base period quarters and total base period wages of at least 35 times your weekly benefit rate",
      "You are able and available for full-time Wisconsin work",
      "You complete weekly work search activities and report to DWD",
      "You register on Job Center of Wisconsin, required for benefits"
    ],
    howToFile: [
      "Visit dwd.wisconsin.gov to file online",
      "Create an account",
      "Provide personal and employment information",
      "Submit your claim",
      "File weekly certifications"
    ],
    documentsNeeded: [
      "Social Security number",
      "Wisconsin driver's license or state ID",
      "Employer information for every job in the past 18 months",
      "Job Center of Wisconsin account credentials",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Skipping Job Center of Wisconsin registration, DWD blocks payments without it",
      "Missing weekly certifications on dwd.wisconsin.gov",
      "Not reporting partial or 1099 earnings",
      "Filing late, DWD doesn't backdate beyond your file week"
    ],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [
      {
        question: "How much will I receive in Wisconsin?",
        answer: "Wisconsin pays up to $370 per week."
      },
      {
        question: "How long can I receive benefits?",
        answer: "Up to 26 weeks."
      },
      {
        question: "Can I file online?",
        answer: "Yes. File at dwd.wisconsin.gov or call 1-414-435-7069."
      }
    ],
    tips: [
      { headline: "Register on Job Center of Wisconsin.", body: "DWD blocks benefits until your Job Center profile is active. Do it the same day you file your claim." },
      { headline: "Read UCB-10 (Wisconsin's official handbook).", body: "Wisconsin's claimant handbook explains the partial-earnings deduction formula and base period rules clearly, most first-time questions are answered there." },
      { headline: "Document weekly job search.", body: "Wisconsin DWD audits work search records randomly. Keep a written log with date, employer, position, and contact method for every week claimed." },
      { headline: "Watch your DWD inbox.", body: "Wisconsin sends fact-finding requests through the portal, often with short deadlines. Check it weekly to avoid suspended payments." }
    ]
  },
  {
    name: "Wyoming",
    slug: "wyoming",
    abbreviation: "WY",
    maxWeeklyBenefit: 651,
    maxWeeks: 26,
    waitingWeek: true,
    filingUrl: "https://dws.wyo.gov/dws-division/unemployment-insurance/claimants/filing-for-ui/",
    filingPhone: "1-307-473-3789",
    handbookUrl: "https://www.wyomingworkforce.org/_docs/ui/Wyoming-Claimant-Guidebook.pdf",
    stateJobsUrl: "https://ai.wyo.gov/for-job-seekers",
    minEarnings: "You must have earned at least 8% of the statewide average annual wage in your base period, with wages in at least two quarters and total wages of at least 1.4 times your highest quarter.",
    eligibility: [
      "You separated from your Wyoming job through no fault of your own",
      "You earned at least 8% of Wyoming's statewide average annual wage in the base period",
      "Your total base period wages equal at least 1.4 times your highest quarter, with earnings in two or more quarters",
      "You are able and available for full-time Wyoming work",
      "You register with Wyoming at Work, required for benefits"
    ],
    howToFile: [
      "Visit the Wyoming DOE website to file online",
      "Create an account",
      "Provide personal and employment information",
      "Submit your claim",
      "File weekly certifications"
    ],
    documentsNeeded: [
      "Social Security number",
      "Wyoming driver's license or state ID",
      "Employer information for every job in the past 18 months",
      "Wyoming at Work account credentials",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Skipping Wyoming at Work registration, DWS blocks payments without it",
      "Missing weekly certifications on dws.wyo.gov",
      "Not reporting oil-field, ranching, or seasonal earnings",
      "Filing late, DWS doesn't backdate beyond your file week"
    ],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [
      {
        question: "How much will I receive in Wyoming?",
        answer: "Wyoming pays up to $651 per week."
      },
      {
        question: "How long can I receive benefits?",
        answer: "Up to 26 weeks."
      },
      {
        question: "Can I file online?",
        answer: "Yes. Visit the Wyoming DOE website or call 1-307-473-3789."
      }
    ],
    tips: [
      { headline: "Register on Wyoming at Work.", body: "Wyoming DWS blocks benefits until your Wyoming at Work profile is active. Do it the same day you file your claim." },
      { headline: "Report oil-field and ranch earnings.", body: "Wyoming's UI fund cross-references oil-industry, mining, and ranching employer reports. Underreporting triggers fraud investigations." },
      { headline: "Read the Wyoming Claimant Guidebook.", body: "Wyoming's official handbook explains the base period rules and partial-earnings formulas in plain language, most first-time questions are answered there." },
      { headline: "Document weekly job search.", body: "Wyoming DWS audits work search records. Keep a written log with date, employer, position, and contact method for every week claimed." }
    ]
  }
];

export function getStateBySlug(slug: string): StateData | undefined {
  return states.find((s) => s.slug === slug);
}

export function getAllStateSlugs(): string[] {
  return states.map((s) => s.slug);
}
