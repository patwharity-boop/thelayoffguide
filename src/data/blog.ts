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
      "Just lost your job? Here's exactly what to do in the first 24 hours — from someone who's been through it.",
    date: "2026-04-06",
    content: `
Getting laid off feels like the ground just disappeared under your feet. Your brain goes into panic mode. That's normal. But there are a few things you should do right away that will save you a lot of stress later.

## 1. File for Unemployment Today — Not Tomorrow

This is the single most important thing. In most states, your benefits start the week you file, not the week you lost your job. Every day you wait is money you won't get back. Even if it's 10pm and you just got the call — go to your state's website and start the process.

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

You have 60 days to elect COBRA (continuing your employer's health plan) but it's expensive. Check Healthcare.gov — losing your job is a qualifying life event that lets you sign up outside open enrollment. You might find a much cheaper plan.

## 5. Apply for SNAP (Food Benefits)

No shame in this. If your income just dropped to zero, you likely qualify. It's one less thing to worry about while you job search. Apply at your state's SNAP office or online.

## 6. Update Your Resume While It's Fresh

You know what you did at this job better right now than you will in two weeks. Spend 30 minutes updating your resume with your most recent accomplishments, metrics, and responsibilities.

## 7. Tell Your Network

This is hard for a lot of people. But a quick LinkedIn post or message to close contacts saying you're looking can lead to opportunities faster than cold applying. People want to help — let them.

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
- **Your employer contested it** — they said you quit or were fired for misconduct
- **Insufficient wages** — you didn't earn enough during the base period
- **You didn't meet ongoing requirements** — missed a weekly certification or didn't report earnings
- **Administrative errors** — wrong information, duplicate filings, etc.

## How the Appeal Process Works

### Step 1: Read Your Denial Letter Carefully
It will tell you exactly why you were denied and your deadline to appeal (usually 10-30 days depending on the state). Don't miss this deadline.

### Step 2: File Your Appeal
Most states let you appeal online, by mail, or by fax. Keep it simple — state that you disagree with the determination and want a hearing.

### Step 3: Prepare for Your Hearing
This is usually a phone hearing with an Administrative Law Judge. It's not a courtroom — it's more like a conference call. You'll have a chance to explain your side. The judge may also question your former employer.

**Bring evidence:**
- Emails or documents supporting your case
- Names of witnesses
- A timeline of events
- Your version of why you were separated from the job

### Step 4: The Hearing
Be honest, be calm, and be specific. The judge is trying to determine the facts — they're not out to get you. Many judges are sympathetic to workers and will find a way to approve benefits if the facts support it.

## Tips from People Who've Been Through It

- **"Always say you are available and looking for work."** Even if you have limitations, you should be positioning yourself as ready to work.
- **"The judge gave me way more time to explain than the initial phone interview."** The appeal process is much more thorough than the initial claim.
- **"My employer didn't even show up to the hearing, so I won by default."** This happens more often than you'd think.

## What If You Lose the Appeal?

Most states have a second level of appeal (to a Board of Review). You can also consult with a legal aid organization — many offer free help with unemployment cases.

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
Not all unemployment benefits are created equal. Depending on which state you live in, you could receive anywhere from $235 to $1,152 per week — and for as few as 12 weeks or as many as 28. Here's how every state stacks up.

## The Best States for Unemployment Benefits

### 1. Washington — $1,152/week, 26 weeks
The highest maximum weekly benefit in the country. Washington's system is based on hours worked (680 hours minimum) rather than dollar amounts, which can make it easier to qualify.

### 2. Massachusetts — $1,105/week, 26 weeks
The highest on the East Coast, especially with the dependency allowance. Massachusetts also has a relatively straightforward filing process.

### 3. Minnesota — $948/week, 26 weeks
Strong benefits and no waiting week. Minnesota also has good resources for job seekers through their workforce centers.

### 4. New Jersey — $905/week, 26 weeks
High benefits with a dependency allowance. New Jersey raised its maximum weekly benefit to $905 effective January 2026.

### 5. Oregon — $872/week, 26 weeks
One of the highest in the western US, with strong online filing tools and indexed annual increases.

## The Worst States for Unemployment Benefits

### 46. Louisiana — $275/week, 26 weeks
Low maximum but at least offers the full 26 weeks.

### 47. Tennessee — $325/week, 26 weeks
Slightly higher than Louisiana, but still well below the national average.

### 48. Florida — $275/week, 12 weeks
Low benefits AND the shortest duration in the country (tied with NC). Florida's CONNECT system is also notoriously buggy.

### 49. North Carolina — $450/week, 12 weeks
North Carolina raised its weekly amount in recent years, but still caps at only 12 weeks of benefits, tied with Florida for the shortest duration in the country.

### 50. Mississippi — $235/week, 26 weeks
The lowest maximum weekly benefit in the nation.

## Key Takeaways

- **Your state matters enormously.** The difference between Washington ($1,152/wk for 26 weeks = $29,952 max) and Mississippi ($235/wk for 26 weeks = $6,110 max) is nearly $24,000.
- **Duration matters as much as weekly amount.** Florida's $275/week for only 12 weeks means a max payout of just $3,300 — the lowest total in the country.
- **States without a waiting week** (TX, NY, CT, and others) start paying you faster.
- **These are maximums.** Your actual benefit depends on your earnings. Most people receive 40-60% of their previous weekly wage.

Check your state's specific guide on our [homepage](/) for detailed filing instructions and current benefit amounts.
    `.trim(),
  },
  {
    slug: "side-hustles-while-on-unemployment",
    title: "Can You Work a Side Hustle While on Unemployment?",
    description:
      "Yes, but you MUST report it. Here's how part-time work affects your unemployment benefits and how to stay compliant.",
    date: "2026-04-06",
    content: `
Short answer: **yes, you can work part-time or do gig work while on unemployment.** But you absolutely must report every dollar you earn. Not reporting income is fraud, and states are getting better at catching it.

## How Part-Time Work Affects Your Benefits

Most states reduce your weekly benefit based on how much you earn. The formula varies by state, but generally:

- **Some states ignore a small amount** (e.g., the first $50-100 you earn doesn't affect your benefits)
- **After that, your benefit is reduced** — often dollar for dollar, or by a percentage
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

## The Smart Approach

1. **Report everything** — it's not worth the risk of fraud charges
2. **Track your hours and earnings** each week
3. **Keep your weekly earnings below your benefit amount** if possible — this way you still receive a partial benefit
4. **Use the partial earnings as a bridge** — it keeps money coming in while you build toward a full-time opportunity

## What NOT to Do

- Don't hide income thinking they won't find out
- Don't wait to report until you "make real money"
- Don't assume gig work or 1099 income doesn't count
- Don't forget to still certify weekly even if you worked

---

**Working while on unemployment is smart and encouraged.** States want you to get back on your feet. Just be transparent about your earnings and you'll be fine.
    `.trim(),
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return posts.map((p) => p.slug);
}
