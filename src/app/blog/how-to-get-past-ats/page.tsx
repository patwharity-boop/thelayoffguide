import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "How to Get Past ATS: Resume Optimization for Laid-Off Workers in 2026",
  description:
    "Sent 50 applications and gotten 3 callbacks? You're not the problem. ATS software filtered your resume before any human saw it. Here's how to fix it, with a layoff-specific angle nobody else writes about.",
  keywords: [
    "ATS resume",
    "ATS optimization",
    "applicant tracking system",
    "resume after layoff",
    "get past ATS",
    "ATS friendly resume",
    "resume keywords",
    "layoff resume",
  ],
  openGraph: {
    title:
      "How to Get Past ATS: Resume Optimization for Laid-Off Workers in 2026",
    description:
      "Why your resume isn't reaching hiring managers, and the 5 fixes that take an hour. From someone who's been there.",
    type: "article",
    images: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&q=80",
    ],
  },
};

export default function GetPastAtsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-600">
          Blog
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Job Search</span>
      </nav>

      {/* Hero Image */}
      <div className="relative rounded-xl overflow-hidden mb-8 h-72 md:h-96">
        <img
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1400&q=80"
          alt="Person at laptop reviewing job applications"
          className="w-full h-full object-cover brightness-[0.85]"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-black/70 to-transparent">
          <span className="text-xs font-semibold tracking-widest uppercase text-teal-400">
            Job Search
          </span>
          <h1 className="text-2xl md:text-4xl font-bold text-white mt-2">
            How to Get Past ATS: Resume Optimization for Laid-Off Workers in
            2026
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200 text-sm text-gray-500">
        <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-semibold text-xs">
          TLG
        </div>
        <div>
          <div className="font-semibold text-gray-900">The Layoff Guide</div>
          <div>May 7, 2026 · 8 min read</div>
        </div>
      </div>

      {/* Ad placeholder */}

      <article className="prose-custom text-gray-700 leading-relaxed space-y-6">
        <p>
          You&apos;ve been laid off. You&apos;ve been at this for three weeks,
          maybe four. You&apos;ve sent 50, 80, maybe 120 applications. The
          response rate is somewhere between disappointing and nothing. You
          start to wonder if you&apos;ve forgotten how to do this. Or if the
          last three years of your career taught you nothing that translates.
          Or if you&apos;re just unlucky.
        </p>

        <p>
          You&apos;re probably not unlucky. There&apos;s a more common
          explanation, and it has nothing to do with you, your experience, or
          how the layoff went. Most of your applications are getting filtered
          out by a piece of software before any human sees them.
        </p>

        <p>
          That software is called an Applicant Tracking System, or ATS, and
          it&apos;s sitting between you and every hiring manager at every
          company with more than about 50 employees. The good news is that
          you can fix this in an evening. The better news is that you do
          control the variables that matter. Here&apos;s how the system works
          and exactly what to do.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          What ATS actually is, and why it filters you out
        </h2>

        <p>
          When you upload a resume to a job posting on LinkedIn, Indeed,
          Workday, Greenhouse, Lever, or any of a hundred other portals,
          your resume goes into an ATS. The ATS does three things, in this
          order, before a recruiter sees you:
        </p>

        <ol className="list-decimal list-outside ml-6 space-y-2">
          <li>
            <strong>Parses your resume into structured data.</strong> It tries
            to extract your name, contact info, job titles, employment dates,
            and skills into a database. If your formatting is fancy, this
            step fails and the ATS just sees gibberish where your work
            history should be.
          </li>
          <li>
            <strong>Scores you against the job description.</strong> Most
            ATSes compare the keywords in your resume against the keywords in
            the job posting. A higher overlap means a higher score.
          </li>
          <li>
            <strong>Ranks you against everyone else who applied.</strong> The
            recruiter typically sees the top 25 to 50 candidates by score.
            Everyone else gets the auto-rejection email three days later, or
            no email at all.
          </li>
        </ol>

        <p>
          Most published estimates put the share of resumes filtered out at
          this stage at around 70 to 75 percent. That number is squishy and
          varies by industry, but the directional truth holds: more
          applications die in step 1 (parsing) than fail anywhere else in the
          hiring funnel.
        </p>

        <div className="border-l-4 border-amber-400 bg-amber-50 rounded-r-lg p-5 my-8">
          <p className="font-semibold text-gray-900 mb-1">The hard pill</p>
          <p className="text-gray-800">
            If your resume looks beautiful in Canva, with photos and columns
            and color blocks, there is a real chance the ATS sees nothing
            useful when it parses you. Beautiful and ATS-readable are mostly
            opposites. Pick ATS-readable until you&apos;re past the filter.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Why your beautiful resume is the problem
        </h2>

        <p>
          Here are the five things most people&apos;s resumes do that quietly
          break ATS parsing. Pull up your current resume in another tab while
          you read this section.
        </p>

        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-1">
              1. Multi-column layouts
            </h3>
            <p className="text-sm text-gray-700">
              The two-column resume with a sidebar for skills and contact
              info is everywhere on Canva, but most ATS parsers read text
              left-to-right, top-to-bottom in a single flow. A two-column
              layout gets read as a jumble. The cleanest fix is a
              single-column resume.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-1">
              2. Headers, footers, and sidebars
            </h3>
            <p className="text-sm text-gray-700">
              Word document headers (the area where you&apos;d put a page
              number) are usually invisible to ATS parsers. If your name and
              contact info live in the header, the ATS may not extract them.
              Move all critical information into the body of the document.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-1">
              3. Image-based or fancy templates
            </h3>
            <p className="text-sm text-gray-700">
              Some templates use images for section headers, decorative
              icons, or progress bars (the &ldquo;skill: 85 percent&rdquo;
              kind). The ATS sees image, not text. Worse, some templates
              actually convert your name or job titles into image elements.
              If you can&apos;t copy and paste your resume&apos;s text into a
              plain text document and have it come out clean, the ATS
              can&apos;t read it either.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-1">
              4. Non-standard section labels
            </h3>
            <p className="text-sm text-gray-700">
              ATS parsers look for canonical section headers like Experience,
              Education, Skills, Certifications. If you label your work
              history &ldquo;Where I&apos;ve Made an Impact&rdquo; or your
              skills &ldquo;Toolkit,&rdquo; the parser may miss them. Boring
              labels, accurate parsing.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-1">
              5. Decorative fonts and tables
            </h3>
            <p className="text-sm text-gray-700">
              Stick to standard fonts: Arial, Calibri, Helvetica, Georgia,
              Garamond, Times New Roman. Avoid tables for layout, even
              hidden-border ones. Tables are read inconsistently across ATS
              vendors and the modern best practice is to skip them.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          The 5 fixes you can ship in an hour
        </h2>

        <p>
          You don&apos;t need a fancy template. You need a clean,
          machine-readable resume. Here&apos;s the recipe.
        </p>

        <ol className="list-decimal list-outside ml-6 space-y-3">
          <li>
            <strong>Open a blank Word document or Google Doc.</strong> Set
            your default font to Calibri or Arial, size 11 for body, size 14
            or 16 bold for section headers. Margins of 0.7 to 1 inch on all
            sides. That&apos;s the whole template.
          </li>
          <li>
            <strong>
              Top of page: your name in 18 to 22 point bold, then your phone
              and email on a single line under it.
            </strong>{" "}
            Optional: city and state, optional LinkedIn URL. Skip the photo,
            address, and date of birth. None of that helps with ATS or with
            US hiring norms.
          </li>
          <li>
            <strong>
              Sections in this order: Summary (3 lines), Experience,
              Education, Skills.
            </strong>{" "}
            Use exactly those labels. Plain bold text, no decorative borders.
          </li>
          <li>
            <strong>Inside Experience, use this format for each role:</strong>{" "}
            Job title, then company name, then dates (MM YYYY format), then 4
            to 6 bullet points starting with strong verbs and including
            specific numbers. Example: &ldquo;Reduced infrastructure costs by
            22% by migrating workloads from on-prem to AWS.&rdquo;
          </li>
          <li>
            <strong>Save as both DOCX and PDF.</strong> Different ATSes
            prefer different formats. Workday parses DOCX better than PDF.
            Greenhouse handles both well. When in doubt, upload the DOCX.
          </li>
        </ol>

        <p>
          That&apos;s it for the parsing fixes. The resume looks plain. That
          is correct. You are optimizing for the parser, then the human, in
          that order. You can&apos;t reach the human if the parser kicks
          you.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          The keyword game (this is what most people skip)
        </h2>

        <p>
          Once your resume parses cleanly, the next question is: how does it
          score against the specific job you&apos;re applying to? This is the
          part that takes ten extra minutes per application but is the
          single biggest lever after parsing.
        </p>

        <p>
          The job description is the answer key. Read it slowly. Highlight
          every term that looks like a skill, a tool, a methodology, or a
          named credential. Then make sure your resume includes those exact
          terms wherever they truthfully apply to your experience.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 my-8">
          <p className="font-semibold text-gray-900 mb-2">Worked example</p>
          <p className="text-sm text-gray-700 mb-3">
            Imagine the job description includes this paragraph:
          </p>
          <p className="text-sm italic text-gray-700 mb-3 pl-3 border-l-2 border-gray-300">
            We&apos;re looking for a Senior Product Manager with experience
            in B2B SaaS, comfortable with Jira and Linear, who has shipped
            features from discovery through launch using Agile methodologies
            and worked closely with cross-functional teams including
            engineering, design, and customer success.
          </p>
          <p className="text-sm text-gray-700 mb-2">
            The keywords your resume needs (where true) include:
            <strong> Senior Product Manager, B2B SaaS, Jira, Linear,
            discovery, launch, Agile, cross-functional, engineering, design,
            customer success</strong>.
          </p>
          <p className="text-sm text-gray-700">
            The mistake: writing a bullet that says &ldquo;Led the rollout of
            new functionality.&rdquo; The fix: &ldquo;Shipped 4 B2B SaaS
            features from discovery through launch using Agile methodology,
            partnering with engineering, design, and customer success in
            Jira.&rdquo;
          </p>
        </div>

        <p>
          Two rules. Use their language, not your synonyms. The ATS does not
          know that &ldquo;rollout&rdquo; and &ldquo;launch&rdquo; mean the
          same thing. And do not stuff keywords for skills you don&apos;t
          actually have. The keyword match gets you past the ATS; the
          interview catches the lie.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          How to handle the layoff in your resume
        </h2>

        <p>
          This is the part of ATS optimization that nobody else writes
          about, and it&apos;s the part that matters most to you.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">
          On the resume itself
        </h3>

        <p>
          Don&apos;t write &ldquo;laid off&rdquo; or &ldquo;position
          eliminated&rdquo; anywhere on the resume. The resume is a record of
          what you did, not why you stopped doing it. Just put the end date
          and move on. The cover letter is the place to address it, briefly,
          if you want to.
        </p>

        <p>
          On the end date itself: if you&apos;re three weeks out, putting
          &ldquo;Sept 2025 to Present&rdquo; is honest enough and the ATS
          treats it as currently employed (which subtly favors your
          ranking). After about six weeks, this stops working. Recruiters do
          quick sanity checks against your LinkedIn, and a discrepancy reads
          as misleading. At that point, switch to a clean end date.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">
          On the gap question
        </h3>

        <p>
          The 2025 to 2026 layoff cohort is large and visible. Most
          recruiters are not stigmatizing layoffs the way they did in 2010.
          But the gap question still comes up. Get ahead of it by filling
          the resume gap with one of:
        </p>

        <ul className="list-disc list-outside ml-6 space-y-2">
          <li>
            <strong>Active consulting or freelance work.</strong> If
            you&apos;ve done any 1099 or contract work since the layoff, even
            small projects, list them as a current role.
          </li>
          <li>
            <strong>Active learning or certification.</strong> AWS Solutions
            Architect, PMP, Google Cloud, a relevant Coursera certificate.
            These read as &ldquo;using the time well&rdquo; rather than
            &ldquo;sitting on the couch.&rdquo;
          </li>
          <li>
            <strong>Open-source or portfolio projects.</strong> Public GitHub
            commits, a portfolio website, or a series of LinkedIn articles in
            your domain.
          </li>
          <li>
            <strong>
              Volunteer work using your professional skills.
            </strong>{" "}
            Pro-bono consulting for a nonprofit, treasurer of a local board,
            etc. List it the same way you&apos;d list a paid role.
          </li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">
          On LinkedIn (different rules)
        </h3>

        <p>
          LinkedIn is the place to be honest about the layoff. The
          &ldquo;Open to Work&rdquo; banner is widely searched by recruiters
          and is no longer stigmatized in 2026. A short, factual LinkedIn
          post explaining you were affected by a layoff and what you&apos;re
          looking for tends to convert dramatically better than passive
          searching. The platform&apos;s own data shows posts about
          job-seeking from laid-off workers consistently rank in the top
          quartile of engagement.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          The ATS-friendly resume checklist
        </h2>

        <p>
          Before you submit any application, run your resume against this
          ten-item list. Print it, screenshot it, whatever helps you actually
          do it.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
          <ul className="space-y-3 text-sm text-gray-800">
            {[
              "Single column layout, no sidebars or tables",
              "Standard font (Arial, Calibri, Helvetica, Georgia, Times New Roman) at 11 pt body, 14 to 16 pt headers",
              "Name and contact info in the body of the document, not in headers or footers",
              "Standard section labels: Summary, Experience, Education, Skills",
              "Each role formatted as: Title, Company, MM YYYY to MM YYYY, then bullets",
              "Bullets start with strong verbs and include specific numbers where possible",
              "Job-description keywords woven in where they apply truthfully",
              "No images, icons, progress bars, or decorative graphics",
              "Saved as both DOCX and PDF, ready to upload either format",
              "End date on the most recent role updated within 6 weeks of separation",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Tools that actually help
        </h2>

        <p>
          Three tools are worth your time. None require a paid plan to get
          most of the value:
        </p>

        <ul className="list-disc list-outside ml-6 space-y-3">
          <li>
            <strong>Jobscan</strong> compares your resume against a specific
            job posting and tells you which keywords are missing. Five free
            scans per month is enough for most active job searches.
          </li>
          <li>
            <strong>Resume Worded</strong> gives an instant score against
            recruiter heuristics in about 30 seconds. Useful for the
            structural pass.
          </li>
          <li>
            <strong>Teal</strong> is a free all-in-one that builds resumes,
            does ATS analysis, and tracks applications. The free tier is
            enough for one search.
          </li>
        </ul>

        <p>
          The full list, with direct links, lives on the{" "}
          <Link
            href="/resources"
            className="text-blue-700 hover:text-blue-900 underline"
          >
            resources page
          </Link>
          .
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          One last thing
        </h2>

        <p>
          Even a perfect ATS-optimized resume will not rescue you from a
          brutal market. The 2026 job market is hard. Most jobseekers are
          sending dozens of applications per week and getting interviews on
          fewer than 5 percent. That&apos;s not because their resumes are
          bad. It&apos;s because the supply-demand gap is real.
        </p>

        <p>
          Fixing your ATS issues is not magic. It is removing the friction
          that&apos;s preventing you from being read in the first place. Once
          that&apos;s done, you can know you&apos;re being evaluated on what
          you actually offer, not on whether your resume parsed correctly.
          That clarity matters even when the answer is &ldquo;not this
          time.&rdquo;
        </p>

        <p>
          Spend the hour. Then go write a clean cover letter, hit submit,
          and let the system work for you instead of against you.
        </p>

        <div className="border-l-4 border-teal-400 bg-teal-50 rounded-r-lg p-5 my-8 text-lg italic text-gray-800">
          &ldquo;You&apos;re not failing because your resume is bad.
          You&apos;re failing because nobody is reading it. Fix that, then
          let the work speak.&rdquo;
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Related on this site
        </h2>

        <ul className="list-disc list-outside ml-6 space-y-2 text-sm">
          <li>
            <Link
              href="/timeline"
              className="text-blue-700 hover:text-blue-900 underline"
            >
              The realistic timeline of an unemployment claim
            </Link>{" "}
            walks through what to do at each phase, including the weeks 4 to
            8 window where most active job-searching happens.
          </li>
          <li>
            <Link
              href="/eligibility"
              className="text-blue-700 hover:text-blue-900 underline"
            >
              The eligibility quiz
            </Link>{" "}
            takes a minute and gives a state-aware read on whether you
            qualify for unemployment benefits while you job-search.
          </li>
          <li>
            <Link
              href="/my-claim"
              className="text-blue-700 hover:text-blue-900 underline"
            >
              The personal claim tracker
            </Link>{" "}
            shows you where you are in your claim and what to expect each
            week.
          </li>
          <li>
            <Link
              href="/fast-track-careers"
              className="text-blue-700 hover:text-blue-900 underline"
            >
              Fast-track careers
            </Link>{" "}
            covers the 30+ careers that don&apos;t require a degree and can
            ramp in 4 to 12 weeks if you&apos;re considering a pivot.
          </li>
          <li>
            <Link
              href="/resources"
              className="text-blue-700 hover:text-blue-900 underline"
            >
              The full resource list
            </Link>{" "}
            includes resume builders, ATS scanners, job boards, and free
            training programs.
          </li>
        </ul>
      </article>

      {/* Article schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "How to Get Past ATS: Resume Optimization for Laid-Off Workers in 2026",
            description:
              "Why your resume isn't reaching hiring managers, and the 5 fixes that take an hour. Includes a layoff-specific section on handling end dates, gaps, and LinkedIn.",
            url: "https://www.thelayoffguide.com/blog/how-to-get-past-ats",
            datePublished: "2026-05-07",
            dateModified: "2026-05-07",
            author: {
              "@type": "Person",
              "@id": "https://www.thelayoffguide.com/about#patrick",
              name: "Patrick",
              url: "https://www.thelayoffguide.com/about",
            },
            publisher: {
              "@type": "Organization",
              name: "The Layoff Guide",
              url: "https://www.thelayoffguide.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://www.thelayoffguide.com/blog/how-to-get-past-ats",
            },
            image:
              "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&q=80",
          }),
        }}
      />
    </div>
  );
}
