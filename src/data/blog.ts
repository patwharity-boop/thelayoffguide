export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    slug: "what-to-do-day-you-get-laid-off",
    title: "7 Things to Do the Day You Get Laid Off",
    description:
      "Just lost your job? Here's exactly what to do in the first 24 hours, from someone who's been through it.",
    date: "2026-04-06",
    content: `
Getting laid off feels like the ground just disappeared under your feet. Your brain goes into panic mode. That's normal. But there are a few things you should do right away that will save you a lot of stress later.

## 1. File for Unemployment Today, Not Tomorrow

This is the single most important thing. In most states, your benefits start the week you file, not the week you lost your job. Every day you wait is money you won't get back. Even if it's 10pm and you just got the call, go to your state's website and start the process.

## 2. Don't Sign Anything Yet

Your employer might hand you a severance agreement, a non-compete, or a separation letter. Read it carefully before signing. You usually have at least 21 days to review (45 days if you're over 40). Once you sign, you may be giving up your right to sue or negotiate.

## 3. Get Your Documents Together

Before you lose access to your work email and systems, grab:
- Your last few pay stubs (you'll need these for unemployment)
- Your employer's full legal name, address, and phone number
- Your manager's name
- Your start date and end date
- Any performance reviews or positive feedback (in case they contest your claim)

## 4. Sign Up for COBRA or Marketplace Insurance

You have 60 days to elect COBRA (continuing your employer's health plan) but it's expensive. Check Healthcare.gov, losing your job is a qualifying life event that lets you sign up outside open enrollment. You might find a much cheaper plan.

## 5. Apply for SNAP (Food Benefits)

No shame in this. If your income just dropped to zero, you likely qualify. It's one less thing to worry about while you job search. Apply at your state's SNAP office or online.

## 6. Update Your Resume While It's Fresh

You know what you did at this job better right now than you will in two weeks. Spend 30 minutes updating your resume with your most recent accomplishments, metrics, and responsibilities.

## 7. Tell Your Network

This is hard for a lot of people. But a quick LinkedIn post or message to close contacts saying you're looking can lead to opportunities faster than cold applying. People want to help, let them.

---

**The bottom line:** File for unemployment immediately, protect your rights, and take care of the basics. Everything else can wait. You're going to be okay.
    `.trim(),
  },
  {
    slug: "appeal-unemployment-denial",
    title: "Got Denied Unemployment? Here's How to Appeal (and Win)",
    description:
      "Don't give up if your unemployment claim gets denied. Most people who appeal actually win. Here's how the process works.",
    date: "2026-04-06",
    content: `
Getting denied unemployment benefits feels like a punch in the gut. But here's something most people don't know: **a huge percentage of appeals are successful.** The initial denial is often automated or based on incomplete information. The appeal is where a real person actually listens to your story.

## Why Claims Get Denied

The most common reasons:
- **Your employer contested it**, they said you quit or were fired for misconduct
- **Insufficient wages**, you didn't earn enough during the base period
- **You didn't meet ongoing requirements**, missed a weekly certification or didn't report earnings
- **Administrative errors**, wrong information, duplicate filings, etc.

## How the Appeal Process Works

### Step 1: Read Your Denial Letter Carefully
It will tell you exactly why you were denied and your deadline to appeal (usually 10-30 days depending on the state). Don't miss this deadline.

### Step 2: File Your Appeal
Most states let you appeal online, by mail, or by fax. Keep it simple, state that you disagree with the determination and want a hearing.

### Step 3: Prepare for Your Hearing
This is usually a phone hearing with an Administrative Law Judge. It's not a courtroom, it's more like a conference call. You'll have a chance to explain your side. The judge may also question your former employer.

**Bring evidence:**
- Emails or documents supporting your case
- Names of witnesses
- A timeline of events
- Your version of why you were separated from the job

### Step 4: The Hearing
Be honest, be calm, and be specific. The judge is trying to determine the facts, they're not out to get you. Many judges are sympathetic to workers and will find a way to approve benefits if the facts support it.

## Tips from People Who've Been Through It

- **"Always say you are available and looking for work."** Even if you have limitations, you should be positioning yourself as ready to work.
- **"The judge gave me way more time to explain than the initial phone interview."** The appeal process is much more thorough than the initial claim.
- **"My employer didn't even show up to the hearing, so I won by default."** This happens more often than you'd think.

## What If You Lose the Appeal?

Most states have a second level of appeal (to a Board of Review). You can also consult with a legal aid organization, many offer free help with unemployment cases.

---

**Don't give up after a denial.** The appeal is your real chance to make your case. File it, prepare for it, and show up.
    `.trim(),
  },
  {
    slug: "unemployment-benefits-by-state-ranked",
    title: "Unemployment Benefits by State: Ranked from Best to Worst (2026)",
    description:
      "Which states have the best unemployment benefits? We ranked all 50 states by weekly benefit, duration, and total payout.",
    date: "2026-04-06",
    content: `
Not all unemployment benefits are created equal. Depending on which state you live in, you could receive anywhere from $235 to $1,208 per week, and for as few as 12 weeks or as many as 30. Here's how every state stacks up.

## The Best States for Unemployment Benefits

### 1. Washington, $1,208/week, 26 weeks
The highest maximum weekly benefit in the country. Washington's system is based on hours worked (680 hours minimum) rather than dollar amounts, which can make it easier to qualify.

### 2. Massachusetts, $1,105/week, 30 weeks
The highest on the East Coast, especially with the dependency allowance, and one of the longest durations in the country (Massachusetts pays up to 30 weeks when the state unemployment rate is high enough to trigger it). Massachusetts also has a relatively straightforward filing process.

### 3. Minnesota, $948/week, 26 weeks
Strong benefits, and Minnesota has good resources for job seekers through their workforce centers.

### 4. New Jersey, $905/week, 26 weeks
High benefits with a dependency allowance. New Jersey raised its maximum weekly benefit to $905 effective January 2026.

### 5. Oregon, $902/week, 26 weeks
One of the highest in the western US, with strong online filing tools and indexed annual increases.

## The Worst States for Unemployment Benefits

### 46. Louisiana, $282/week, 12 weeks
Low maximum and Louisiana caps current claims at 12 weeks under its sliding-scale duration formula (the higher end of the 12-20 week range only kicks in during higher unemployment).

### 47. Tennessee, $325/week, 12 weeks
Slightly higher weekly amount than Louisiana, but Tennessee caps at 12 weeks of benefits.

### 48. Florida, $275/week, 12 weeks
Low benefits AND the shortest duration in the country (tied with NC). Florida's CONNECT system is also notoriously buggy.

### 49. North Carolina, $450/week, 12 weeks
North Carolina raised its weekly amount in recent years, but still caps at only 12 weeks of benefits, tied with Florida for the shortest duration in the country.

### 50. Mississippi, $235/week, 26 weeks
The lowest maximum weekly benefit in the nation.

## Key Takeaways

- **Your state matters enormously.** The difference between Washington ($1,208/wk for 26 weeks = $31,408 max) and Mississippi ($235/wk for 26 weeks = $6,110 max) is more than $25,000.
- **Duration matters as much as weekly amount.** Florida's $275/week for only 12 weeks means a max payout of just $3,300, the lowest total in the country.
- **States without a waiting week** (Connecticut, Iowa, Maryland, Michigan, Nevada, New Jersey, Rhode Island) start paying you faster. Most states make you serve one unpaid week first.
- **These are maximums.** Your actual benefit depends on your earnings. Most people receive 40-60% of their previous weekly wage.

Check your state's specific guide on our [homepage](/) for detailed filing instructions and current benefit amounts.
    `.trim(),
  },
  {
    slug: "side-hustles-while-on-unemployment",
    title: "Can You DoorDash on Unemployment? Gig Work Rules by State (2026)",
    description:
      "Yes, you can DoorDash, Uber, or work another job on unemployment, but every dollar must be reported. Here's how gig earnings affect benefits in every state.",
    date: "2026-04-06",
    content: `
Short answer: **yes, you can work part-time or do gig work while on unemployment.** But you absolutely must report every dollar you earn. Not reporting income is fraud, and states are getting better at catching it.

## How Part-Time Work Affects Your Benefits

Most states reduce your weekly benefit based on how much you earn. The formula varies by state, but generally:

- **Some states ignore a small amount** (e.g., the first $50-100 you earn doesn't affect your benefits)
- **After that, your benefit is reduced**, often dollar for dollar, or by a percentage
- **If you earn more than your weekly benefit amount**, you won't receive unemployment that week (but your claim stays active)

## Common Side Hustle Scenarios

### Freelancing / Contract Work
Report all earnings for the week you performed the work (not when you get paid). This catches a lot of people off guard with platforms like Upwork or Fiverr.

### Driving for Uber/Lyft/DoorDash
Report your gross earnings (before expenses). Yes, even if your net after gas and car costs is tiny. The state wants gross.

### Selling on eBay/Etsy
If you're regularly selling items for profit, report it. Occasional garage sale-type sales usually don't count, but regular business activity does.

### Cash Jobs
Yes, you still have to report these. States cross-reference tax records and payment platforms. Getting caught means repaying benefits plus penalties.

### Teaching English Online
Platforms like Cambly and Preply take US-based tutors with no degree and no certificate. Cambly pays $0.17 a minute ($10.20 an hour) for adult lessons, and only for time on a call. As of September 2026 its tutor page says it is limiting how many new tutors it accepts. On Preply you set your own rate (the site says English tutors average $15 to $25 an hour), but Preply keeps 100% of every trial lesson and 33% of a new tutor's regular lessons until you build up hours. VIPKid lists $14 to $22 an hour but now requires a bachelor's degree plus a TEFL or TESOL certificate. Every one of these treats you as an independent contractor: no guaranteed hours, no tax withholding, and you owe self-employment tax on what you earn.

Two rules matter for your claim. First, tutoring income is self-employment, and every state we checked (New York, California, Texas, Florida) makes you report it for the week you did the work, even before you get paid. Second, you have to stay available for full-time work, so don't let a tutoring calendar box out interviews.

One thing to skip while you're on a claim: teaching abroad in person. You cannot collect unemployment from overseas. New York, for example, blocks its claim system from foreign countries and treats benefits collected while abroad as fraud, and the government programs run on year-long application cycles anyway. Keep it remote.

### Substitute Teaching (No Teaching Certificate Needed in Most States)
Districts everywhere are short on subs, and in most states you do not need a teaching certificate to fill in day to day. The rules are set state by state, then tightened by each district, so check both. A few examples from the states' own pages:

- **New York:** subs without a certificate can work up to 40 days per district per school year. Districts can add their own requirements, and New York City requires a bachelor's degree.
- **California:** you need an Emergency 30-Day Substitute Teaching Permit. A bachelor's degree from an accredited college satisfies both the degree and the basic-skills requirement, plus fingerprinting.
- **Pennsylvania:** a district can request an emergency Day-to-Day Substitute Permit for anyone with a bachelor's degree, good for up to 20 days per assignment.
- **Florida:** each district sets its own rules, but state law requires fingerprints, at least a high school diploma or equivalent, and an orientation before you start.
- **Ohio and Georgia:** schools can hire subs without a college degree if you meet the district's own education minimum (Georgia's list runs all the way down to a high school diploma or GED).
- **Illinois:** you need a state Substitute License (bachelor's degree) or a Short-Term Substitute License, which takes an associate's degree or 60 college credit hours and is available through June 30, 2028.

Every state runs a fingerprint background check, and that step is usually what sets your start date, so file for it the first week. Staffing firms like Kelly Education and ESS place subs in many districts and walk you through the paperwork. Kelly's own page says many states and districts take candidates without a degree, treats its subs as employees (so W-2, not 1099), and asks them to work at least two days a week when they can.

Sub pay is a day rate set by the district, and it is W-2 wages you report to unemployment for the week you worked. One catch specific to school work: the "reasonable assurance" rule. If your unemployment claim is based on wages from a school and the school expects you back after a break, you generally cannot collect during summer or holiday recess. California's own FAQ says the recess rule does not stop you if you qualified for your claim on non-school wages, which is the case for most laid-off people who pick up subbing on the side. If subbing becomes your main income, ask your state before the next long break.

### Remote Customer Support / Contact Center
This is the fastest realistic path to a paycheck on this list, and it is a job, not a gig. The Bureau of Labor Statistics puts the median at $21.53 an hour (May 2025), with the lowest 10% under $15.27. Typical entry is a high school diploma and short on-the-job training, and most companies train you on their product. What you need at home: a quiet room, a wired internet connection, and a computer with a webcam (some employers ship you one, some don't).

There are two flavors. **W-2 employee roles** come with set shifts, hourly pay, and often benefits. If it's full-time, it usually ends your claim, which is the goal. **1099 contractor platforms** (Liveops, Working Solutions) let you pick your hours but pay per talk minute with no guaranteed volume, make you supply the equipment, and put you on the hook for your own taxes. Those earnings get reported to unemployment every week like any other side hustle.

**Who hires remote customer service agents** (all had open listings when we checked in September 2026):

- **Big employers hiring directly:** [Amazon](https://hiring.amazon.com/job-opportunities/customer-service-jobs), [Concentrix](https://jobs.concentrix.com/united-states/), [TTEC](https://www.ttecjobs.com/en/work-from-home), [Foundever](https://jobs.foundever.com/), [Teleperformance](https://www.tp.com/en-us/careers/work-from-home-opportunity/)
- **Staffing and temp agencies:** [Robert Half](https://www.roberthalf.com/us/en/jobs/all/customer-service), [Adecco](https://www.adeccousa.com/jobs/customer-service/), [Randstad](https://www.randstadusa.com/jobs/customer-service/). Temp-to-hire is common in this field, and the agency is the employer of record, so it's W-2.
- **1099 platforms:** [Liveops](https://join.liveops.com/), [Working Solutions](https://apply.workingsolutions.com/)

Many remote roles are only open in certain states, so filter by your state before you get excited about a listing.

Scam check before you apply anywhere: a real employer never asks you to pay for equipment, training, or a "certification," and never sends you a check to deposit and forward. The FTC's rule is blunt: "Honest employers, including the federal government, will never ask you to pay to get a job."

## The Smart Approach

1. **Report everything**, it's not worth the risk of fraud charges
2. **Track your hours and earnings** each week
3. **Keep your weekly earnings below your benefit amount** if possible, this way you still receive a partial benefit
4. **Use the partial earnings as a bridge**, it keeps money coming in while you build toward a full-time opportunity

## What NOT to Do

- Don't hide income thinking they won't find out
- Don't wait to report until you "make real money"
- Don't assume gig work or 1099 income doesn't count
- Don't forget to still certify weekly even if you worked

---

**Working while on unemployment is smart and encouraged.** States want you to get back on your feet. Just be transparent about your earnings and you'll be fine. For how partial benefits are actually reduced (and how they can stretch your benefits further), see [Working Part-Time While on Unemployment](/blog/working-part-time-on-unemployment).

*Sources for the tutoring, substitute teaching, and support sections (checked September 16, 2026): [Cambly tutor page](https://www.cambly.com/english/tutors), [Preply commission policy](https://help.preply.com/en/articles/4171383), [VIPKid teacher requirements](https://www.vipkid.com/teach/teacher-requirements), [NYSED: Substitute Teaching](https://www.nysed.gov/teaching-initiatives/substitute-teaching), [CA CTC: Emergency 30-Day Substitute Teaching Permit](https://www.ctc.ca.gov/credentials/leaflets/cl-505p/), [PA Dept. of Education: Act 91 substitute guidance](https://www.pa.gov/agencies/education/data-and-reporting/school-staff/act-91-of-2021-guidance), [Florida Statutes 1012.35](http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=1000-1099/1012/Sections/1012.35.html), [Ohio Revised Code 3319.102](https://codes.ohio.gov/ohio-revised-code/section-3319.102), [GaPSC Rule 505-2-.20](https://www.gapsc.com/Rules/Current/Certification/505-2-.20.pdf), [ISBE: Substitute Licenses](https://www.isbe.net/Pages/Short-Term-Sub-Teach.aspx), [Kelly Education](https://www.mykelly.com/local-jobs/wake-up-teach/), [NY DOL: Benefit Rules for Teachers and Other School Workers](https://dol.ny.gov/unemployment/unemployment-insurance-benefit-rules-teachers-and-other-school-workers), [CA EDD: School Employees FAQ](https://edd.ca.gov/en/unemployment/FAQ_-_School_Employees/), [BLS Occupational Outlook: Customer Service Representatives](https://www.bls.gov/ooh/office-and-administrative-support/customer-service-representatives.htm), [FTC: Job Scams](https://consumer.ftc.gov/articles/job-scams), [NY DOL claimant FAQ](https://dol.ny.gov/postappFAQ), [Texas TWC: Report Your Work and Earnings](https://www.twc.texas.gov/programs/unemployment-benefits/report-your-work-earnings).*
    `.trim(),
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return posts.map((p) => p.slug);
}
