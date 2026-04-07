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
}

// Initial data for all 50 states — benefit amounts and details sourced from DOL and state workforce agencies (2026)
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
      "You must be unemployed through no fault of your own",
      "You must have earned enough wages during your base period",
      "You must be able and available to work",
      "You must be actively seeking work each week"
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
      "Driver's license or state ID",
      "Last employer's name, address, phone number, and dates of employment",
      "Reason for separation from each employer in the last 18 months",
      "Banking information for direct deposit (recommended)"
    ],
    commonMistakes: [
      "Waiting too long to file — benefits don't backdate before your claim date",
      "Forgetting to file weekly certifications on time",
      "Not reporting part-time earnings while receiving benefits",
      "Not documenting your job search activities"
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
      }
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
      "You must be unemployed through no fault of your own",
      "You must have earned enough wages during your base period",
      "You must be able and available to work",
      "You must be actively seeking work each week"
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
      "Driver's license or state ID",
      "Employment history for the past 18 months",
      "Employer names, addresses, and dates of employment",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Waiting too long to file — benefits don't backdate",
      "Forgetting to file weekly certifications",
      "Not reporting all income including part-time work",
      "Missing job search documentation requirements"
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
      }
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
    minEarnings: "You must have earned at least 390 times the state minimum wage (approximately $5,733) in your highest quarter of your base period.",
    eligibility: [
      "You must be unemployed through no fault of your own",
      "You must have earned enough wages during your base period",
      "You must be able and available to work",
      "You must be actively seeking work each week"
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
      "Driver's license or state ID",
      "Employer information for the past 18 months",
      "Alien registration number (if not a US citizen)",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Waiting too long to file — your effective date is the Sunday of the week you file",
      "Not filing weekly claims on time",
      "Failing to meet work search requirements",
      "Not reporting earnings from part-time or temporary work"
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
      }
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
    minEarnings: "You must have earned at least $3,965 in your base period.",
    eligibility: [
      "You must be unemployed through no fault of your own",
      "You must have earned enough wages during your base period",
      "You must be able and available to work",
      "You must be actively seeking work each week"
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
      "Driver's license or state ID",
      "Employer information for the past 18 months",
      "Reason for leaving each job",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Not filing immediately after losing your job",
      "Missing weekly certification deadlines",
      "Not meeting the minimum work search requirements",
      "Forgetting to report part-time earnings"
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
      }
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
      "You must be unemployed through no fault of your own",
      "You must have earned enough wages during your base period",
      "You must be physically able and available to work",
      "You must be actively seeking work each week",
      "You must be a legal resident authorized to work in the US"
    ],
    howToFile: [
      "Visit the California EDD website and select 'File a UI Claim'",
      "Create a Benefit Programs Online (BPO) account",
      "Complete the online application with your personal and employment information",
      "Submit your claim — your start date is the Sunday of the week you file",
      "Certify for benefits every two weeks to continue receiving payments"
    ],
    documentsNeeded: [
      "Social Security number",
      "Driver's license or state ID number",
      "Last employer's name, address, phone, and dates of employment",
      "Information for all employers in the last 18 months",
      "Alien registration number (if applicable)",
      "Banking information for direct deposit or you'll receive a debit card"
    ],
    commonMistakes: [
      "Waiting to file — your claim starts the week you file, not when you lost your job",
      "Not certifying for benefits every two weeks",
      "Forgetting to report any earnings, even small amounts",
      "Not keeping records of your job search contacts",
      "Ignoring EDD correspondence — respond to all requests within deadlines"
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
        question: "What if I was fired — can I still get unemployment in California?",
        answer: "It depends. If you were fired for misconduct, you may be disqualified. If you were let go for performance reasons or a business decision, you likely still qualify. EDD will investigate and make a determination."
      }
    ],
    advocacy: [
      {
        title: "Petition: Raise California's Maximum Unemployment Benefit",
        url: "https://www.change.org/unemployment008",
        description: "California's max weekly benefit of $450 hasn't increased in over 20 years. Sign this petition to push for an update that reflects today's cost of living."
      }
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
    handbookUrl: "https://www.colorado.gov/pacific/sites/default/files/atoms/files/YourGuidetoUnemploymentBenefits.pdf",
    stateJobsUrl: "https://careers.colorado.gov/",
    minEarnings: "You must have earned at least $2,500 in wages during your base period.",
    eligibility: [
      "You must be unemployed through no fault of your own",
      "You must have earned enough wages during your base period",
      "You must be able and available to work",
      "You must be actively seeking work each week"
    ],
    howToFile: [
      "Visit coloradoui.gov to file your claim online",
      "Create an account with your personal information",
      "Provide details about your employment history",
      "Submit your initial claim",
      "Request payment every week to continue benefits"
    ],
    documentsNeeded: [
      "Social Security number",
      "Colorado driver's license or state ID",
      "Employer names, addresses, and dates of employment for past 18 months",
      "Reason for separation from each employer",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Not filing your weekly payment request on time",
      "Failing to register with your local workforce center",
      "Not documenting at least 5 job contacts per week",
      "Forgetting to report any earnings"
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
      }
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
    minEarnings: "You must have earned at least $1,680 in total base period wages (40 times the minimum weekly benefit rate).",
    eligibility: [
      "You must be unemployed through no fault of your own",
      "You must have earned enough wages during your base period",
      "You must be able and available to work",
      "You must be actively seeking work each week"
    ],
    howToFile: [
      "Visit the Connecticut DOL website to file online",
      "Provide your personal and employment information",
      "Submit your initial claim",
      "File weekly certifications to continue receiving benefits"
    ],
    documentsNeeded: [
      "Social Security number",
      "Driver's license or state ID",
      "Employer information for the past 18 months",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Waiting too long to file your initial claim",
      "Missing weekly certification deadlines",
      "Not reporting all income sources",
      "Failing to document job search activities"
    ],
    processingTime: "Claims are typically processed within 2-3 weeks.",
    faq: [
      {
        question: "How much will I receive in unemployment benefits in Connecticut?",
        answer: "Connecticut pays up to $721 per week. Your benefit amount depends on your base period earnings."
      },
      {
        question: "Is there a waiting week in Connecticut?",
        answer: "No. Connecticut does not require an unpaid waiting week — you can receive benefits starting from your first eligible week."
      },
      {
        question: "Can I file for unemployment online in Connecticut?",
        answer: "Yes. File online at the CT DOL website or call 1-860-263-6970."
      }
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
    minEarnings: "You must have earned at least $966 in your highest quarter and total base period wages of at least 36 times your weekly benefit rate.",
    eligibility: [
      "You must be unemployed through no fault of your own",
      "You must have earned enough wages during your base period",
      "You must be able and available to work",
      "You must be actively seeking work each week"
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
      "Driver's license or state ID",
      "Employer details for the past 18 months",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Delaying your initial filing",
      "Missing weekly certifications",
      "Not reporting part-time earnings",
      "Failing to complete required job search activities"
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
      "You must be unemployed through no fault of your own",
      "You must have earned enough wages during your base period",
      "You must be able and available to work",
      "You must be actively seeking work — 5 employer contacts per week",
      "You must register with Employ Florida"
    ],
    howToFile: [
      "Visit connect.myflorida.com to file your claim",
      "Create an account and provide personal information",
      "Enter your employment history for the past 18 months",
      "Register on Employ Florida (employflorida.com) — this is required",
      "Submit your claim and file biweekly certifications"
    ],
    documentsNeeded: [
      "Social Security number",
      "Driver's license or state ID",
      "Employer names, addresses, phone numbers, and dates of employment",
      "Alien registration number (if applicable)",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Not registering on Employ Florida — this is mandatory and separate from filing",
      "Missing the biweekly certification deadline",
      "Not making 5 employer contacts per week as required",
      "Florida's system (CONNECT) can be glitchy — try filing during off-peak hours"
    ],
    processingTime: "Processing can take 2-4 weeks. Florida's system is known for delays.",
    faq: [
      {
        question: "How much will I receive in unemployment benefits in Florida?",
        answer: "Florida pays up to $275 per week — one of the lowest maximums in the country."
      },
      {
        question: "How long can I receive unemployment benefits in Florida?",
        answer: "Florida provides benefits for only 12 weeks — the shortest duration of any state."
      },
      {
        question: "Why is Florida's unemployment system so difficult?",
        answer: "Florida's CONNECT system has been widely criticized for technical issues and long wait times. Filing online during off-peak hours (early morning) and having all documents ready before starting can help."
      },
      {
        question: "Can I file for unemployment online in Florida?",
        answer: "Yes. File at connect.myflorida.com or call 1-800-204-2418. The online system is available 24/7 but can be slow."
      }
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
    minEarnings: "You must have earned at least $3,080 in your base period with wages in at least two quarters.",
    eligibility: [
      "You must be unemployed through no fault of your own",
      "You must have earned enough wages during your base period",
      "You must be able and available to work",
      "You must be actively seeking work each week"
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
      "Driver's license or state ID",
      "Employer information for the past 18 months",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Not filing within the first week of unemployment",
      "Missing weekly certification deadlines",
      "Not completing required online career workshops",
      "Forgetting to report any earnings"
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
    ]
  },
  {
    name: "Hawaii",
    slug: "hawaii",
    abbreviation: "HI",
    maxWeeklyBenefit: 835,
    maxWeeks: 26,
    waitingWeek: true,
    filingUrl: "https://huiclaims.hawaii.gov/",
    filingPhone: "1-808-762-5751",
    handbookUrl: "https://labor.hawaii.gov/ui/files/2026/01/DLIR-UI-Claimant-Handbook-Rev1.26-with-BABEL.pdf",
    stateJobsUrl: "https://www.governmentjobs.com/careers/hawaii",
    minEarnings: "You must have earned at least $130 in your highest quarter and at least 26 times your weekly benefit amount in your base period.",
    eligibility: [
      "You must be unemployed through no fault of your own",
      "You must have earned enough wages during your base period",
      "You must be able and available to work",
      "You must be actively seeking work each week"
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
      "Driver's license or state ID",
      "Employer details for the past 18 months",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Delaying your filing",
      "Missing weekly certifications",
      "Not reporting part-time earnings",
      "Not maintaining job search documentation"
    ],
    processingTime: "Claims are typically processed within 2-3 weeks.",
    faq: [
      {
        question: "How much will I receive in unemployment benefits in Hawaii?",
        answer: "Hawaii pays up to $835 per week — one of the highest in the nation."
      },
      {
        question: "How long can I receive unemployment benefits in Hawaii?",
        answer: "You can receive benefits for up to 26 weeks."
      },
      {
        question: "Can I file for unemployment online in Hawaii?",
        answer: "Yes. File at huiclaims.hawaii.gov or call 1-808-762-5751."
      }
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
      "You must be unemployed through no fault of your own",
      "You must have earned enough wages during your base period",
      "You must be able and available to work",
      "You must be actively seeking work each week"
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
      "Driver's license or state ID",
      "Employer information for the past 18 months",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Waiting to file",
      "Missing weekly certifications",
      "Not reporting earnings",
      "Failing to make required employer contacts each week"
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
    ]
  },
  {
    name: "Illinois",
    slug: "illinois",
    abbreviation: "IL",
    maxWeeklyBenefit: 859,
    maxWeeks: 26,
    waitingWeek: true,
    filingUrl: "https://ides.illinois.gov/unemployment/file-a-claim.html",
    filingPhone: "1-800-244-5631",
    handbookUrl: "https://ides.illinois.gov/content/dam/soi/en/web/ides/ides_forms_and_publications/cli105l.pdf",
    stateJobsUrl: "https://careers.illinois.gov/",
    minEarnings: "You must have earned at least $1,600 during your base period with at least $440 outside your highest quarter.",
    eligibility: [
      "You must be unemployed through no fault of your own",
      "You must have earned enough wages during your base period",
      "You must be able and available to work",
      "You must be actively seeking work each week",
      "You must register with IllinoisJobLink.com"
    ],
    howToFile: [
      "Visit the IDES website to file online",
      "Create an account and provide personal details",
      "Enter your employment history",
      "Register on IllinoisJobLink.com — this is required",
      "Submit your claim and certify biweekly"
    ],
    documentsNeeded: [
      "Social Security number",
      "Driver's license or state ID",
      "Employer details for the past 18 months",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Not registering on IllinoisJobLink.com",
      "Missing biweekly certification deadlines",
      "Not reporting part-time or freelance income",
      "Not keeping a log of job search activities"
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
    ]
  },
  {
    name: "Indiana",
    slug: "indiana",
    abbreviation: "IN",
    maxWeeklyBenefit: 445,
    maxWeeks: 26,
    waitingWeek: true,
    filingUrl: "https://www.in.gov/dwd/indiana-unemployment/file/",
    filingPhone: "1-800-891-6499",
    handbookUrl: "https://www.in.gov/dwd/files/Claimant_Handbook.pdf",
    stateJobsUrl: "https://workforindiana.in.gov/",
    minEarnings: "You must have earned at least $4,200 in your base period with wages in the last two quarters.",
    eligibility: [
      "You must be unemployed through no fault of your own",
      "You must have earned enough wages during your base period",
      "You must be able and available to work",
      "You must be actively seeking work each week"
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
      "Driver's license or state ID",
      "Employer information for the past 18 months",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Not filing weekly vouchers on time",
      "Failing to make required job contacts each week",
      "Not reporting all income",
      "Waiting too long after separation to file"
    ],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [
      {
        question: "How much will I receive in unemployment benefits in Indiana?",
        answer: "Indiana pays up to $445 per week."
      },
      {
        question: "How long can I receive unemployment benefits in Indiana?",
        answer: "You can receive benefits for up to 26 weeks."
      },
      {
        question: "Can I file for unemployment online in Indiana?",
        answer: "Yes. File at Unemployment.IN.gov or call 1-800-891-6499."
      }
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
    handbookUrl: "https://www.iowaworkforcedevelopment.gov/2019-unemployment-insurance-claimant-handbook",
    stateJobsUrl: "https://das.iowa.gov/state-employment",
    minEarnings: "You must have earned at least $1,700 in your highest quarter, with wages in at least two quarters, and total base period wages of at least 1.25 times your highest quarter.",
    eligibility: [
      "You must be unemployed through no fault of your own",
      "You must have earned enough wages during your base period",
      "You must be able and available to work",
      "You must be actively seeking work each week"
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
      "Driver's license or state ID",
      "Employer details for the past 18 months",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Delaying your filing",
      "Missing weekly certifications",
      "Not reporting part-time earnings",
      "Not keeping job search records"
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
      "You must be unemployed through no fault of your own",
      "You must have earned enough wages during your base period",
      "You must be able and available to work",
      "You must be actively seeking work each week"
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
      "Driver's license or state ID",
      "Employer information for the past 18 months",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Not filing immediately after job loss",
      "Missing weekly certifications",
      "Not meeting work search requirements",
      "Failing to report earnings"
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
    ]
  },
  {
    name: "Kentucky",
    slug: "kentucky",
    abbreviation: "KY",
    maxWeeklyBenefit: 720,
    maxWeeks: 26,
    waitingWeek: true,
    filingUrl: "https://kewes.ky.gov/",
    filingPhone: "1-502-875-0442",
    handbookUrl: "https://kcc.ky.gov/career/Documents/PAM400.pdf",
    stateJobsUrl: "https://personnel.ky.gov/Pages/Careers.aspx",
    minEarnings: "You must have earned at least $1,500 in one quarter, plus $1,500 in the remaining three quarters combined, with total base period wages of at least 1.5 times your highest quarter.",
    eligibility: [
      "You must be unemployed through no fault of your own",
      "You must have earned enough wages during your base period",
      "You must be able and available to work",
      "You must be actively seeking work each week"
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
      "Driver's license or state ID",
      "Employer details for the past 18 months",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Not filing promptly",
      "Missing biweekly certification deadlines",
      "Not reporting part-time income",
      "Failing to document job searches"
    ],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [
      {
        question: "How much will I receive in unemployment benefits in Kentucky?",
        answer: "Kentucky pays up to $720 per week. Note: Kentucky has a one-week unpaid waiting period before benefits begin."
      },
      {
        question: "How long can I receive unemployment benefits in Kentucky?",
        answer: "You can receive benefits for up to 26 weeks."
      },
      {
        question: "Can I file for unemployment online in Kentucky?",
        answer: "Yes. File at kcc.ky.gov or call 1-502-875-0442."
      }
    ]
  },
  {
    name: "Louisiana",
    slug: "louisiana",
    abbreviation: "LA",
    maxWeeklyBenefit: 275,
    maxWeeks: 20,
    waitingWeek: false,
    filingUrl: "https://www.laworks.net/",
    filingPhone: "1-866-783-5567",
    handbookUrl: "https://www.laworks.net/Downloads/UI/UIBenefitRightsInformation.pdf",
    stateJobsUrl: "https://jobs.la.gov/",
    minEarnings: "You must have earned at least $1,200 in your base period with wages in at least two quarters.",
    eligibility: [
      "You must be unemployed through no fault of your own",
      "You must have earned enough wages during your base period",
      "You must be able and available to work",
      "You must be actively seeking work each week"
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
      "Driver's license or state ID",
      "Employer information for the past 18 months",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Waiting too long to file",
      "Missing weekly certifications",
      "Not reporting earnings",
      "Not completing required job searches"
    ],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [
      {
        question: "How much will I receive in unemployment benefits in Louisiana?",
        answer: "Louisiana pays up to $275 per week."
      },
      {
        question: "How long can I receive unemployment benefits in Louisiana?",
        answer: "You can receive benefits for 12-20 weeks (variable based on the state unemployment rate)."
      },
      {
        question: "Can I file for unemployment online in Louisiana?",
        answer: "Yes. File at laworks.net or call 1-866-783-5567."
      }
    ]
  },
  {
    name: "Maine",
    slug: "maine",
    abbreviation: "ME",
    maxWeeklyBenefit: 623,
    maxWeeks: 26,
    waitingWeek: true,
    filingUrl: "https://reemployme.maine.gov/",
    filingPhone: "1-800-593-7660",
    handbookUrl: "https://www.maine.gov/unemployment/docs/2018/UIGuide2018.pdf",
    stateJobsUrl: "https://www.maine.gov/bhr/state-jobs",
    minEarnings: "You must have earned at least $7,193 in your base period with wages in at least two quarters.",
    eligibility: [
      "You must be unemployed through no fault of your own",
      "You must have earned enough wages during your base period",
      "You must be able and available to work",
      "You must be actively seeking work each week"
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
      "Driver's license or state ID",
      "Employer information for the past 18 months",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Not filing promptly after job loss",
      "Missing weekly certifications",
      "Failing to report all income",
      "Not maintaining job search records"
    ],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [
      {
        question: "How much will I receive in unemployment benefits in Maine?",
        answer: "Maine pays up to $623 per week."
      },
      {
        question: "How long can I receive unemployment benefits in Maine?",
        answer: "You can receive benefits for up to 26 weeks."
      },
      {
        question: "Can I file for unemployment online in Maine?",
        answer: "Yes. File at ReEmployME.maine.gov or call 1-800-593-7660."
      }
    ]
  },
  {
    name: "Maryland",
    slug: "maryland",
    abbreviation: "MD",
    maxWeeklyBenefit: 430,
    maxWeeks: 26,
    waitingWeek: true,
    filingUrl: "https://www.dllr.state.md.us/employment/unemployment.shtml",
    filingPhone: "1-410-949-0022",
    handbookUrl: "https://labor.maryland.gov/employment/clmtguide/uiclmtpamphlet.pdf",
    stateJobsUrl: "https://dbm.maryland.gov/jobseekers/pages/jobseekershome.aspx",
    minEarnings: "You must have earned at least $1,176.01 in your highest quarter and at least $1,800 in total across at least two quarters of your base period.",
    eligibility: [
      "You must be unemployed through no fault of your own",
      "You must have earned enough wages during your base period",
      "You must be able and available to work",
      "You must be actively seeking work each week"
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
      "Driver's license or state ID",
      "Employer information for the past 18 months",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Not filing right away",
      "Missing weekly certifications",
      "Not reporting all earnings",
      "Failing to register for work search"
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
      "You must be unemployed through no fault of your own",
      "You must have earned enough wages during your base period",
      "You must be able and available to work",
      "You must be actively seeking work each week"
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
      "Driver's license or state ID",
      "Employer details for the past 18 months",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Waiting to file — file the same week you lose your job",
      "Not filing weekly certifications on time",
      "Not reporting all income including freelance work",
      "Not keeping detailed job search records"
    ],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [
      {
        question: "How much will I receive in unemployment benefits in Massachusetts?",
        answer: "Massachusetts pays up to $1,105 per week including dependency allowance — the highest in the nation."
      },
      {
        question: "How long can I receive unemployment benefits in Massachusetts?",
        answer: "You can receive benefits for up to 26 weeks."
      },
      {
        question: "Can I file for unemployment online in Massachusetts?",
        answer: "Yes. File at mass.gov or call 1-877-626-6800."
      }
    ]
  },
  // Remaining states use the same detailed structure — adding key states with notable differences
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
    eligibility: ["You must be unemployed through no fault of your own", "You must have earned enough wages during your base period", "You must be able and available to work", "You must be actively seeking work each week"],
    howToFile: ["Visit Michigan.gov to file online through MiWAM", "Create an account", "Provide personal and employment information", "Submit your claim", "Certify biweekly"],
    documentsNeeded: ["Social Security number", "Driver's license or state ID", "Employer information for the past 18 months", "Banking information for direct deposit"],
    commonMistakes: ["Missing biweekly certifications", "Not reporting all income", "Not registering on Pure Michigan Talent Connect", "Waiting too long to file"],
    processingTime: "Claims typically take 2-4 weeks to process.",
    faq: [{ question: "How much will I receive in Michigan?", answer: "Michigan pays up to $530 per week. Note: Michigan has a one-week unpaid waiting period before benefits begin." }, { question: "How long can I receive benefits in Michigan?", answer: "Up to 26 weeks." }, { question: "Can I file online in Michigan?", answer: "Yes. File through MiWAM at michigan.gov or call 1-866-500-0017." }]
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
    eligibility: ["You must be unemployed through no fault of your own", "You must have earned enough wages during your base period", "You must be able and available to work", "You must be actively seeking work each week"],
    howToFile: ["Visit uimn.org to file online", "Create an account", "Provide personal and employment information", "Submit your claim", "Request payment weekly"],
    documentsNeeded: ["Social Security number", "Driver's license or state ID", "Employer details for the past 18 months", "Banking information for direct deposit"],
    commonMistakes: ["Not requesting payment weekly", "Failing to report earnings", "Not keeping job search logs", "Not responding to requests for information"],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [{ question: "How much will I receive in Minnesota?", answer: "Minnesota pays up to $948 per week." }, { question: "How long can I receive benefits?", answer: "Up to 26 weeks." }, { question: "Can I file online?", answer: "Yes. File at uimn.org or call 1-651-296-3644." }]
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
    eligibility: ["You must be unemployed through no fault of your own", "You must have earned enough wages during your base period", "You must be able and available to work", "You must be actively seeking work each week"],
    howToFile: ["Visit mdes.ms.gov to file online", "Create an account", "Provide personal and employment information", "Submit your claim", "File weekly certifications"],
    documentsNeeded: ["Social Security number", "Driver's license or state ID", "Employer information for the past 18 months", "Banking information for direct deposit"],
    commonMistakes: ["Waiting to file", "Missing weekly certifications", "Not reporting earnings", "Not registering for job search"],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [{ question: "How much will I receive in Mississippi?", answer: "Mississippi pays up to $235 per week — the lowest in the nation." }, { question: "How long can I receive benefits?", answer: "Up to 26 weeks." }, { question: "Can I file online?", answer: "Yes. File at mdes.ms.gov or call 1-888-844-3577." }]
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
    eligibility: ["You must be unemployed through no fault of your own", "You must have earned enough wages during your base period", "You must be able and available to work", "You must be actively seeking work each week"],
    howToFile: ["Visit labor.mo.gov to file online", "Create an account", "Provide personal and employment details", "Submit your claim", "File weekly certifications"],
    documentsNeeded: ["Social Security number", "Driver's license or state ID", "Employer information for the past 18 months", "Banking information for direct deposit"],
    commonMistakes: ["Not filing immediately", "Missing weekly certifications", "Not completing required job contacts", "Failing to report income"],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [{ question: "How much will I receive in Missouri?", answer: "Missouri pays up to $320 per week." }, { question: "How long can I receive benefits?", answer: "Up to 20 weeks." }, { question: "Can I file online?", answer: "Yes. File at labor.mo.gov or call 1-800-320-2519." }]
  },
  {
    name: "Montana",
    slug: "montana",
    abbreviation: "MT",
    maxWeeklyBenefit: 698,
    maxWeeks: 20,
    waitingWeek: true,
    filingUrl: "https://uid.dli.mt.gov/",
    filingPhone: "1-406-444-2545",
    handbookUrl: "https://uid.dli.mt.gov/Portals/55/Documents/Claims-Processing/dli-uid-cl001.pdf",
    stateJobsUrl: "https://statecareers.mt.gov/",
    minEarnings: "You must have base period wages of at least 1.5 times your highest quarter wages and at least 7% of the state average annual wage.",
    eligibility: ["You must be unemployed through no fault of your own", "You must have earned enough wages during your base period", "You must be able and available to work", "You must be actively seeking work each week"],
    howToFile: ["Visit uid.dli.mt.gov to file online", "Create an account", "Provide personal and employment information", "Submit your claim", "File weekly certifications"],
    documentsNeeded: ["Social Security number", "Driver's license or state ID", "Employer details for the past 18 months", "Banking information for direct deposit"],
    commonMistakes: ["Not filing promptly", "Missing weekly certifications", "Not reporting earnings", "Not documenting job searches"],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [{ question: "How much will I receive in Montana?", answer: "Montana pays up to $698 per week." }, { question: "How long can I receive benefits?", answer: "Up to 20 weeks." }, { question: "Can I file online?", answer: "Yes. File at uid.dli.mt.gov or call 1-406-444-2545." }]
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
    handbookUrl: "https://www.dol.nebraska.gov/webdocs/Resources/Items/ClaimantGuide_1-9-18.pdf",
    stateJobsUrl: "https://statejobs.nebraska.gov/",
    minEarnings: "You must have earned at least $5,440 in your base period, with at least $1,850 in one quarter and $800 in another.",
    eligibility: ["You must be unemployed through no fault of your own", "You must have earned enough wages during your base period", "You must be able and available to work", "You must be actively seeking work each week"],
    howToFile: ["Visit NEworks.nebraska.gov to file online", "Create an account", "Provide personal and employment information", "Submit your claim", "File weekly certifications"],
    documentsNeeded: ["Social Security number", "Driver's license or state ID", "Employer information for the past 18 months", "Banking information for direct deposit"],
    commonMistakes: ["Waiting to file", "Missing weekly certifications", "Not reporting earnings", "Not registering on NEworks"],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [{ question: "How much will I receive in Nebraska?", answer: "Nebraska pays up to $582 per week." }, { question: "How long can I receive benefits?", answer: "Up to 26 weeks." }, { question: "Can I file online?", answer: "Yes. File at NEworks.nebraska.gov or call 1-402-458-2500." }]
  },
  {
    name: "Nevada",
    slug: "nevada",
    abbreviation: "NV",
    maxWeeklyBenefit: 469,
    maxWeeks: 26,
    waitingWeek: false,
    filingUrl: "https://ui.nv.gov/PDAS.aspx",
    filingPhone: "1-702-486-0350",
    handbookUrl: "https://ui.nv.gov/PDFs/UI_Claimants_Handbook.pdf",
    stateJobsUrl: "https://nvjobs.nv.gov/",
    minEarnings: "You must have earned at least $400 in your highest quarter. Total base period wages must be at least 1.5 times your highest quarter.",
    eligibility: ["You must be unemployed through no fault of your own", "You must have earned enough wages during your base period", "You must be able and available to work", "You must be actively seeking work each week"],
    howToFile: ["Visit ui.nv.gov to file online", "Create an account", "Provide personal and employment information", "Submit your claim", "File weekly certifications"],
    documentsNeeded: ["Social Security number", "Driver's license or state ID", "Employer details for the past 18 months", "Banking information for direct deposit"],
    commonMistakes: ["Not filing promptly", "Missing weekly certifications", "Not reporting earnings", "Not maintaining job search documentation"],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [{ question: "How much will I receive in Nevada?", answer: "Nevada pays up to $469 per week." }, { question: "How long can I receive benefits?", answer: "Up to 26 weeks." }, { question: "Can I file online?", answer: "Yes. File at ui.nv.gov or call 1-702-486-0350." }]
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
    eligibility: ["You must be unemployed through no fault of your own", "You must have earned enough wages during your base period", "You must be able and available to work", "You must be actively seeking work each week"],
    howToFile: ["Visit nhes.nh.gov to file online", "Create an account", "Provide personal and employment information", "Submit your claim", "File weekly certifications"],
    documentsNeeded: ["Social Security number", "Driver's license or state ID", "Employer information for the past 18 months", "Banking information for direct deposit"],
    commonMistakes: ["Waiting to file", "Missing weekly certifications", "Not reporting earnings", "Not documenting job searches"],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [{ question: "How much will I receive in New Hampshire?", answer: "New Hampshire pays up to $427 per week. Note: New Hampshire has a one-week waiting period before benefits begin." }, { question: "How long can I receive benefits?", answer: "Up to 26 weeks." }, { question: "Can I file online?", answer: "Yes. File at nhes.nh.gov or call 1-603-271-7700." }]
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
    eligibility: ["You must be unemployed through no fault of your own", "You must have earned enough wages during your base period", "You must be able and available to work", "You must be actively seeking work each week"],
    howToFile: ["Visit myunemployment.nj.gov to file online", "Create an account", "Provide personal and employment information", "Submit your claim", "Certify weekly"],
    documentsNeeded: ["Social Security number", "Driver's license or state ID", "Employer information for the past 18 months", "Banking information for direct deposit", "Alien registration number if applicable"],
    commonMistakes: ["Not filing the week you become unemployed", "Missing weekly certifications", "Not reporting part-time work", "Not registering on the NJ career connections portal", "Filing an appeal after the deadline — if you miss the appeal window without a documented compelling reason, your case cannot be heard regardless of its merits"],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [{ question: "How much will I receive in New Jersey?", answer: "New Jersey pays up to $905 per week (with dependency allowance). Your actual amount depends on your earnings during the base period." }, { question: "How long can I receive benefits?", answer: "Up to 26 weeks. New Jersey has no waiting week — benefits begin immediately." }, { question: "Can I file online?", answer: "Yes. File at myunemployment.nj.gov. You can also call: North NJ 201-601-4100, Central NJ 732-761-2020, or South NJ 856-507-2340." }]
  },
  {
    name: "New Mexico",
    slug: "new-mexico",
    abbreviation: "NM",
    maxWeeklyBenefit: 598,
    maxWeeks: 26,
    waitingWeek: true,
    filingUrl: "https://www.jobs.state.nm.us/",
    filingPhone: "1-877-664-6984",
    handbookUrl: "https://www.dws.state.nm.us/Portals/0/DM/UI/UI_Handbook_052015.pdf",
    stateJobsUrl: "https://careers.share.nm.gov/",
    minEarnings: "You must have earned at least $2,090 in total base period wages with wages in at least two quarters.",
    eligibility: ["You must be unemployed through no fault of your own", "You must have earned enough wages during your base period", "You must be able and available to work", "You must be actively seeking work each week"],
    howToFile: ["Visit jobs.state.nm.us to file online", "Create an account", "Provide personal and employment information", "Submit your claim", "File weekly certifications"],
    documentsNeeded: ["Social Security number", "Driver's license or state ID", "Employer details for the past 18 months", "Banking information for direct deposit"],
    commonMistakes: ["Waiting to file", "Missing weekly certifications", "Not reporting all income", "Not maintaining job search logs"],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [{ question: "How much will I receive in New Mexico?", answer: "New Mexico pays up to $598 per week." }, { question: "How long can I receive benefits?", answer: "Up to 26 weeks." }, { question: "Can I file online?", answer: "Yes. File at jobs.state.nm.us or call 1-877-664-6984." }]
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
      "You must be unemployed through no fault of your own",
      "You must have earned enough wages during your base period",
      "You must be ready, willing, and able to work",
      "You must be actively seeking work each week"
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
      "Driver's license or state ID",
      "Complete employment history for the last 18 months",
      "Employer FEIN if available",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Not filing during your designated day (based on last name)",
      "Missing weekly certifications",
      "Not reporting all income including freelance/gig work",
      "Not keeping detailed job search records — NY requires 3 work search activities per week"
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
    minEarnings: "You must have earned at least $5,776 in your base period.",
    eligibility: ["You must be unemployed through no fault of your own", "You must have earned enough wages during your base period", "You must be able and available to work", "You must be actively seeking work each week"],
    howToFile: ["Visit des.nc.gov to file online", "Create an account", "Provide personal and employment information", "Submit your claim", "File weekly certifications"],
    documentsNeeded: ["Social Security number", "Driver's license or state ID", "Employer information for the past 18 months", "Banking information for direct deposit"],
    commonMistakes: ["Not filing immediately", "Missing weekly certifications", "Not meeting work search requirements", "Failing to report earnings"],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [{ question: "How much will I receive in North Carolina?", answer: "North Carolina pays up to $450 per week." }, { question: "How long can I receive benefits?", answer: "Up to 12 weeks — tied with Florida for the shortest in the nation." }, { question: "Can I file online?", answer: "Yes. File at des.nc.gov or call 1-888-737-0259." }]
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
    minEarnings: "You must have earned at least $4,279 in your base period.",
    eligibility: ["You must be unemployed through no fault of your own", "You must have earned enough wages during your base period", "You must be able and available to work", "You must be actively seeking work each week"],
    howToFile: ["Visit jobsnd.com to file online", "Create an account", "Provide personal and employment information", "Submit your claim", "File weekly certifications"],
    documentsNeeded: ["Social Security number", "Driver's license or state ID", "Employer information for the past 18 months", "Banking information for direct deposit"],
    commonMistakes: ["Not filing promptly", "Missing weekly certifications", "Not reporting earnings", "Not documenting job searches"],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [{ question: "How much will I receive in North Dakota?", answer: "North Dakota pays up to $786 per week." }, { question: "How long can I receive benefits?", answer: "Up to 26 weeks." }, { question: "Can I file online?", answer: "Yes. File at jobsnd.com or call 1-701-328-4995." }]
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
    eligibility: ["You must be unemployed through no fault of your own", "You must have earned enough wages during your base period", "You must be able and available to work", "You must be actively seeking work each week"],
    howToFile: ["Visit unemployment.ohio.gov to file online", "Create an account", "Provide personal and employment information", "Submit your claim", "File weekly certifications"],
    documentsNeeded: ["Social Security number", "Driver's license or state ID", "Employer information for the past 18 months", "Banking information for direct deposit"],
    commonMistakes: ["Not filing promptly", "Missing weekly certifications", "Not reporting earnings", "Not registering on OhioMeansJobs"],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [{ question: "How much will I receive in Ohio?", answer: "Ohio pays up to $600 per week (up to $842 with dependents)." }, { question: "How long can I receive benefits?", answer: "Up to 26 weeks." }, { question: "Can I file online?", answer: "Yes. File at unemployment.ohio.gov or call 1-877-644-6562." }]
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
    handbookUrl: "https://www.ok.gov/oesc/documents/OES-339.pdf",
    stateJobsUrl: "https://www.jobs.ok.gov/",
    minEarnings: "You must have earned at least $1,500 in your base period.",
    eligibility: ["You must be unemployed through no fault of your own", "You must have earned enough wages during your base period", "You must be able and available to work", "You must be actively seeking work each week"],
    howToFile: ["Visit unemployment.state.ok.us to file online", "Create an account", "Provide personal and employment information", "Submit your claim", "File weekly certifications"],
    documentsNeeded: ["Social Security number", "Driver's license or state ID", "Employer information for the past 18 months", "Banking information for direct deposit"],
    commonMistakes: ["Not filing promptly", "Missing weekly certifications", "Not reporting earnings", "Not completing work search requirements"],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [{ question: "How much will I receive in Oklahoma?", answer: "Oklahoma pays up to $649 per week." }, { question: "How long can I receive benefits?", answer: "Up to 16 weeks." }, { question: "Can I file online?", answer: "Yes. File at unemployment.state.ok.us or call 1-405-525-1500." }]
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
    handbookUrl: "https://www.oregon.gov/employ/Documents/UIPUB350(English)11-5-19.pdf",
    stateJobsUrl: "https://www.oregon.gov/jobs/pages/index.aspx",
    minEarnings: "You must have earned at least $1,000 in your base period.",
    eligibility: ["You must be unemployed through no fault of your own", "You must have earned enough wages during your base period", "You must be able and available to work", "You must be actively seeking work each week"],
    howToFile: ["Visit unemployment.oregon.gov to file online", "Create an account", "Provide personal and employment information", "Submit your claim", "File weekly certifications"],
    documentsNeeded: ["Social Security number", "Driver's license or state ID", "Employer information for the past 18 months", "Banking information for direct deposit"],
    commonMistakes: ["Not filing promptly", "Missing weekly certifications", "Not reporting earnings", "Not maintaining job search documentation"],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [{ question: "How much will I receive in Oregon?", answer: "Oregon pays up to $872 per week." }, { question: "How long can I receive benefits?", answer: "Up to 26 weeks." }, { question: "Can I file online?", answer: "Yes. File at unemployment.oregon.gov or call 1-877-345-3484." }]
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
    minEarnings: "You must have earned at least $116 per week for at least 18 credit weeks, with total base period wages of at least $2,900. At least 37% of wages must come from outside your highest quarter.",
    eligibility: ["You must be unemployed through no fault of your own", "You must have earned enough wages during your base period", "You must be able and available to work", "You must be actively seeking work each week"],
    howToFile: ["Visit uc.pa.gov to file online", "Create a Keystone ID account", "Provide personal and employment information", "Submit your claim", "File biweekly certifications"],
    documentsNeeded: ["Social Security number", "Driver's license or state ID", "Employer information for the past 18 months", "Banking information for direct deposit"],
    commonMistakes: ["Not filing within the first week", "Missing biweekly certifications", "Not reporting all earnings", "Not registering on PA CareerLink"],
    processingTime: "Claims typically take 2-4 weeks to process.",
    faq: [{ question: "How much will I receive in Pennsylvania?", answer: "Pennsylvania pays up to $605 per week with dependents." }, { question: "How long can I receive benefits?", answer: "Up to 26 weeks." }, { question: "Can I file online?", answer: "Yes. File at uc.pa.gov or call 1-888-313-7284." }]
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
    handbookUrl: "https://dlt.ri.gov/ui/pdfs/UIGuide.pdf",
    stateJobsUrl: "https://www.ri.gov/employment/",
    minEarnings: "You must have earned at least $13,800 in your base period, or at least $2,450 in one quarter with additional wage requirements.",
    eligibility: ["You must be unemployed through no fault of your own", "You must have earned enough wages during your base period", "You must be able and available to work", "You must be actively seeking work each week"],
    howToFile: ["Visit dlt.ri.gov to file online", "Create an account", "Provide personal and employment information", "Submit your claim", "File weekly certifications"],
    documentsNeeded: ["Social Security number", "Driver's license or state ID", "Employer information for the past 18 months", "Banking information for direct deposit"],
    commonMistakes: ["Not filing promptly", "Missing weekly certifications", "Not reporting earnings", "Not documenting job searches"],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [{ question: "How much will I receive in Rhode Island?", answer: "Rhode Island pays up to $745 per week (up to $931 with dependents)." }, { question: "How long can I receive benefits?", answer: "Up to 26 weeks." }, { question: "Can I file online?", answer: "Yes. File at dlt.ri.gov or call 1-401-243-9100." }]
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
    handbookUrl: "https://dew.sc.gov/docs/default-source/worksearch/work-search-all-rev-10-9-17.pdf",
    stateJobsUrl: "https://careers.sc.gov/",
    minEarnings: "You must have earned at least $4,455 in your base period.",
    eligibility: ["You must be unemployed through no fault of your own", "You must have earned enough wages during your base period", "You must be able and available to work", "You must be actively seeking work each week"],
    howToFile: ["Visit dew.sc.gov to file online", "Create an account", "Provide personal and employment information", "Submit your claim", "File weekly certifications"],
    documentsNeeded: ["Social Security number", "Driver's license or state ID", "Employer information for the past 18 months", "Banking information for direct deposit"],
    commonMistakes: ["Not filing immediately", "Missing weekly certifications", "Not meeting work search requirements", "Failing to report earnings"],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [{ question: "How much will I receive in South Carolina?", answer: "South Carolina pays up to $350 per week." }, { question: "How long can I receive benefits?", answer: "Up to 20 weeks." }, { question: "Can I file online?", answer: "Yes. File at dew.sc.gov or call 1-866-831-1724." }]
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
    eligibility: ["You must be unemployed through no fault of your own", "You must have earned enough wages during your base period", "You must be able and available to work", "You must be actively seeking work each week"],
    howToFile: ["Visit dlr.sd.gov to file online", "Create an account", "Provide personal and employment information", "Submit your claim", "File weekly certifications"],
    documentsNeeded: ["Social Security number", "Driver's license or state ID", "Employer information for the past 18 months", "Banking information for direct deposit"],
    commonMistakes: ["Not filing promptly", "Missing weekly certifications", "Not reporting earnings", "Not keeping job search records"],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [{ question: "How much will I receive in South Dakota?", answer: "South Dakota pays up to $553 per week." }, { question: "How long can I receive benefits?", answer: "Up to 26 weeks." }, { question: "Can I file online?", answer: "Yes. File at dlr.sd.gov or call 1-605-626-2452." }]
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
    minEarnings: "You must have earned at least $1,560 in your base period.",
    eligibility: ["You must be unemployed through no fault of your own", "You must have earned enough wages during your base period", "You must be able and available to work", "You must be actively seeking work each week"],
    howToFile: ["Visit jobs4tn.gov to file online", "Create an account", "Provide personal and employment information", "Submit your claim", "File weekly certifications"],
    documentsNeeded: ["Social Security number", "Driver's license or state ID", "Employer information for the past 18 months", "Banking information for direct deposit"],
    commonMistakes: ["Not filing immediately", "Missing weekly certifications", "Not reporting earnings", "Not registering for job search on Jobs4TN"],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [{ question: "How much will I receive in Tennessee?", answer: "Tennessee pays up to $325 per week." }, { question: "How long can I receive benefits?", answer: "Up to 12 weeks (may increase up to 20 weeks if the state unemployment rate rises above 5.5%)." }, { question: "Can I file online?", answer: "Yes. File at jobs4tn.gov or call 1-844-224-5818." }]
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
    minEarnings: "You must have earned at least $2,028 in your highest quarter.",
    eligibility: [
      "You must be unemployed through no fault of your own",
      "You must have earned enough wages during your base period",
      "You must be physically able and available to work",
      "You must be actively seeking work each week",
      "You must register on WorkInTexas.com"
    ],
    howToFile: [
      "Visit twc.texas.gov and select 'Apply for Benefits'",
      "Log in or create an account",
      "Complete the online application with personal and employment details",
      "Submit your claim — your effective date is the Sunday of the week you apply",
      "Submit payment requests every two weeks to continue receiving benefits"
    ],
    documentsNeeded: [
      "Social Security number",
      "Driver's license or Texas ID number",
      "Last employer's name, address, phone number, and dates of employment",
      "Information for all employers in the last 18 months",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Waiting to file — TWC cannot pay benefits for weeks before your claim date",
      "Not submitting payment requests every two weeks",
      "Not registering on WorkInTexas.com — this is required",
      "Not reporting earnings from part-time or gig work",
      "Ignoring TWC correspondence — respond to all requests promptly"
    ],
    processingTime: "Most claims are processed within 2-3 weeks. If an investigation is needed, it may take 4-6 weeks.",
    faq: [
      {
        question: "How much will I receive in unemployment benefits in Texas?",
        answer: "Texas pays up to $605 per week for up to 26 weeks. Your benefit amount is based on your earnings during the base period."
      },
      {
        question: "How long can I receive unemployment benefits in Texas?",
        answer: "You can receive benefits for up to 26 weeks. Texas has a waiting week — the first payable week of your claim is held back and not paid."
      },
      {
        question: "Can I file for unemployment online in Texas?",
        answer: "Yes. The fastest way is online at twc.texas.gov. You can also call 1-800-939-6631, but wait times can be long."
      },
      {
        question: "I was laid off due to business downturn — do I qualify in Texas?",
        answer: "Yes. Being laid off due to lack of work, downsizing, or business closure qualifies you for unemployment in Texas. You were separated through no fault of your own."
      },
      {
        question: "What if my employer contests my claim in Texas?",
        answer: "TWC will investigate and may schedule a phone hearing. You'll have a chance to explain your side. Continue filing while the investigation is pending."
      }
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
    eligibility: ["You must be unemployed through no fault of your own", "You must have earned enough wages during your base period", "You must be able and available to work", "You must be actively seeking work each week"],
    howToFile: ["Visit jobs.utah.gov to file online", "Create an account", "Provide personal and employment information", "Submit your claim", "File weekly certifications"],
    documentsNeeded: ["Social Security number", "Driver's license or state ID", "Employer information for the past 18 months", "Banking information for direct deposit"],
    commonMistakes: ["Not filing promptly", "Missing weekly certifications", "Not reporting earnings", "Not registering on jobs.utah.gov"],
    processingTime: "Claims typically take 1-3 weeks to process.",
    faq: [{ question: "How much will I receive in Utah?", answer: "Utah pays up to $806 per week. Note: Utah has a one-week waiting period before benefits begin." }, { question: "How long can I receive benefits?", answer: "Up to 26 weeks." }, { question: "Can I file online?", answer: "Yes. File at jobs.utah.gov or call 1-801-526-9235." }]
  },
  {
    name: "Vermont",
    slug: "vermont",
    abbreviation: "VT",
    maxWeeklyBenefit: 705,
    maxWeeks: 26,
    waitingWeek: false,
    filingUrl: "https://labor.vermont.gov/unemployment-insurance/claimants",
    filingPhone: "1-877-214-3330",
    handbookUrl: "https://labor.vermont.gov/sites/labor/files/doc_library/B-11Claimant%20handbook%202019.pdf",
    stateJobsUrl: "https://careers.vermont.gov/",
    minEarnings: "You must have earned at least $3,626 in your base period.",
    eligibility: ["You must be unemployed through no fault of your own", "You must have earned enough wages during your base period", "You must be able and available to work", "You must be actively seeking work each week"],
    howToFile: ["Visit labor.vermont.gov to file online", "Create an account", "Provide personal and employment information", "Submit your claim", "File weekly certifications"],
    documentsNeeded: ["Social Security number", "Driver's license or state ID", "Employer information for the past 18 months", "Banking information for direct deposit"],
    commonMistakes: ["Not filing promptly", "Missing weekly certifications", "Not reporting earnings", "Not keeping job search records"],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [{ question: "How much will I receive in Vermont?", answer: "Vermont pays up to $705 per week. There is no waiting week — benefits begin immediately." }, { question: "How long can I receive benefits?", answer: "Up to 26 weeks." }, { question: "Can I file online?", answer: "Yes. File at labor.vermont.gov or call 1-877-214-3330." }]
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
    eligibility: ["You must be unemployed through no fault of your own", "You must have earned enough wages during your base period", "You must be able and available to work", "You must be actively seeking work each week"],
    howToFile: ["Visit vec.virginia.gov to file online", "Create an account", "Provide personal and employment information", "Submit your claim", "File weekly certifications"],
    documentsNeeded: ["Social Security number", "Driver's license or state ID", "Employer information for the past 18 months", "Banking information for direct deposit"],
    commonMistakes: ["Not filing immediately", "Missing weekly certifications", "Not reporting earnings", "Not registering on Virginia Workforce Connection"],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [{ question: "How much will I receive in Virginia?", answer: "Virginia pays up to $430 per week." }, { question: "How long can I receive benefits?", answer: "Up to 26 weeks." }, { question: "Can I file online?", answer: "Yes. File at vec.virginia.gov or call 1-866-832-2363." }]
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
      "You must be unemployed through no fault of your own",
      "You must have worked at least 680 hours in your base period",
      "You must be able and available to work",
      "You must be actively seeking work each week"
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
      "Driver's license or state ID",
      "Employer details for the past 18 months",
      "Banking information for direct deposit"
    ],
    commonMistakes: [
      "Not filing the first week you're unemployed",
      "Missing weekly claims",
      "Not reporting all income",
      "Not completing required job search activities (3 per week)"
    ],
    processingTime: "Claims typically take 1-3 weeks to process.",
    faq: [
      {
        question: "How much will I receive in unemployment benefits in Washington?",
        answer: "Washington pays up to $1,152 per week — the highest maximum in the nation."
      },
      {
        question: "How long can I receive unemployment benefits in Washington?",
        answer: "You can receive benefits for up to 26 weeks."
      },
      {
        question: "Can I file for unemployment online in Washington?",
        answer: "Yes. File at esd.wa.gov or call 1-800-318-6022."
      }
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
    handbookUrl: "https://workforcewv.org/images/files/Claimants/CLAIMANT_HANDBOOK-_REVISION-2-09-16_2_002.pdf",
    stateJobsUrl: "https://personnel.wv.gov/empopp",
    minEarnings: "You must have earned at least $2,200 in your base period.",
    eligibility: ["You must be unemployed through no fault of your own", "You must have earned enough wages during your base period", "You must be able and available to work", "You must be actively seeking work each week"],
    howToFile: ["Visit workforcewv.org to file online", "Create an account", "Provide personal and employment information", "Submit your claim", "File weekly certifications"],
    documentsNeeded: ["Social Security number", "Driver's license or state ID", "Employer information for the past 18 months", "Banking information for direct deposit"],
    commonMistakes: ["Not filing promptly", "Missing weekly certifications", "Not reporting earnings", "Not maintaining job search records"],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [{ question: "How much will I receive in West Virginia?", answer: "West Virginia pays up to $662 per week." }, { question: "How long can I receive benefits?", answer: "Up to 26 weeks." }, { question: "Can I file online?", answer: "Yes. File at workforcewv.org or call 1-800-252-5627." }]
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
    minEarnings: "You must have earned at least $2,325 in your base period.",
    eligibility: ["You must be unemployed through no fault of your own", "You must have earned enough wages during your base period", "You must be able and available to work", "You must be actively seeking work each week"],
    howToFile: ["Visit dwd.wisconsin.gov to file online", "Create an account", "Provide personal and employment information", "Submit your claim", "File weekly certifications"],
    documentsNeeded: ["Social Security number", "Driver's license or state ID", "Employer information for the past 18 months", "Banking information for direct deposit"],
    commonMistakes: ["Not filing immediately", "Missing weekly certifications", "Not reporting all income", "Not completing required work search activities"],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [{ question: "How much will I receive in Wisconsin?", answer: "Wisconsin pays up to $370 per week." }, { question: "How long can I receive benefits?", answer: "Up to 26 weeks." }, { question: "Can I file online?", answer: "Yes. File at dwd.wisconsin.gov or call 1-414-435-7069." }]
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
    eligibility: ["You must be unemployed through no fault of your own", "You must have earned enough wages during your base period", "You must be able and available to work", "You must be actively seeking work each week"],
    howToFile: ["Visit the Wyoming DOE website to file online", "Create an account", "Provide personal and employment information", "Submit your claim", "File weekly certifications"],
    documentsNeeded: ["Social Security number", "Driver's license or state ID", "Employer information for the past 18 months", "Banking information for direct deposit"],
    commonMistakes: ["Not filing promptly", "Missing weekly certifications", "Not reporting earnings", "Not keeping job search records"],
    processingTime: "Claims typically take 2-3 weeks to process.",
    faq: [{ question: "How much will I receive in Wyoming?", answer: "Wyoming pays up to $651 per week." }, { question: "How long can I receive benefits?", answer: "Up to 26 weeks." }, { question: "Can I file online?", answer: "Yes. Visit the Wyoming DOE website or call 1-307-473-3789." }]
  }
];

export function getStateBySlug(slug: string): StateData | undefined {
  return states.find((s) => s.slug === slug);
}

export function getAllStateSlugs(): string[] {
  return states.map((s) => s.slug);
}
