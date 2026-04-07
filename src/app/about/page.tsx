import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Why I Built The Layoff Guide",
  description:
    "I built The Layoff Guide because I lived it. Lost my job in tech, missed my waiting week, spent 8 hours a day trying to reach unemployment. This site is what I wish existed when it happened to me.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">About</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
        Why I Built This Site
      </h1>

      <article className="text-gray-700 leading-relaxed space-y-6">
        <p className="text-lg">
          In September 2025, I lost my job in tech. &ldquo;Business downturn,&rdquo; they
          said. One meeting, and fifteen years of showing up every day just...
          stopped.
        </p>

        <p>
          I&apos;d never filed for unemployment before. I didn&apos;t know where to start.
          The state website was confusing, the instructions were written in government
          jargon, and every link seemed to lead to another link that led to a PDF
          from 2019.
        </p>

        <p>
          I made mistakes immediately. I didn&apos;t know I had to certify my
          &ldquo;waiting week&rdquo; — that unpaid first week that most people don&apos;t
          even know exists. Missing it caused a <strong>three-week delay</strong> in
          receiving my first check. Three weeks of zero income because nobody told
          me to click a button.
        </p>

        <div className="border-l-4 border-teal-400 bg-teal-50 rounded-r-lg p-5 my-8 text-lg italic text-gray-800">
          &ldquo;I spent 8 hours a day — literally an entire workday — calling the
          unemployment office trying to get through to a human being. Day after day.
          It became my full-time job just trying to get help.&rdquo;
        </div>

        <p>
          When I finally found real help, it wasn&apos;t from any government website.
          It was from a <strong>Reddit post</strong>. A stranger on the internet who
          had been through the same thing and took the time to write down what they
          wished someone had told them. That post saved me weeks of frustration and
          probably hundreds of dollars in missed benefits.
        </p>

        <p>
          One tip I found on Reddit that blew my mind: if you can&apos;t get through
          to your state&apos;s unemployment office, <strong>call the Governor&apos;s
          office</strong>{" "}and ask to be connected. They&apos;ll put you through. That
          one piece of advice — buried in a comment thread with 73 upvotes — was
          worth more than everything on the official state website combined.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          This Site Is What I Wish Existed
        </h2>

        <p>
          I built The Layoff Guide because <strong>nobody should have to go through
          what I went through</strong>. Not the confusion. Not the missed benefits.
          Not the 8-hour phone marathons. Not the shame of Googling &ldquo;am I
          allowed to file for unemployment&rdquo; at 2am.
        </p>

        <p>
          Everything on this site — every state guide, every resource link, every
          blog post — comes from one question: <em>what did I need to know on the
          day I got laid off, and in every difficult day that followed?</em>
        </p>

        <p>
          The answer was a lot:
        </p>

        <ul className="space-y-2 ml-6">
          <li className="list-disc text-gray-700">How to file for unemployment without missing steps that cost you money</li>
          <li className="list-disc text-gray-700">Where to find health insurance when COBRA costs more than your rent</li>
          <li className="list-disc text-gray-700">How to figure out your financial runway without panicking</li>
          <li className="list-disc text-gray-700">What food assistance programs you qualify for (and that there&apos;s no shame in using them)</li>
          <li className="list-disc text-gray-700">How to get help with prescription medications when you lose your coverage</li>
          <li className="list-disc text-gray-700">What careers you can pivot to quickly if you want a fresh start</li>
          <li className="list-disc text-gray-700">That it&apos;s okay to not be okay — and where to find support</li>
        </ul>

        <p>
          I couldn&apos;t find all of that in one place. So I built it.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          You&apos;re Going to Get Through This
        </h2>

        <p>
          If you just lost your job and you found this site — I&apos;m glad you&apos;re
          here. I know exactly how you feel right now. The shock, the anger, the
          fear, the 3am ceiling-staring. I&apos;ve been there.
        </p>

        <p>
          Here&apos;s what I can tell you from the other side: <strong>it gets
          better</strong>. Not in a motivational-poster way. In a real way. You
          file the paperwork, you make a plan, you lean on the people around you,
          and day by day the ground starts to feel solid again.
        </p>

        <p>
          This site is here to make that process a little less painful and a
          lot less confusing. Use it. Share it with someone who needs it. And
          if you find something helpful that we haven&apos;t covered yet, let us
          know — we&apos;re building this for people like us, and every tip helps.
        </p>

        <div className="border-l-4 border-teal-400 bg-teal-50 rounded-r-lg p-5 my-8 text-lg italic text-gray-800">
          &ldquo;You didn&apos;t lose your value. You lost a job. Those are two very
          different things.&rdquo;
        </div>

        <p className="text-gray-500 text-sm mt-8">
          — Patrick, founder of The Layoff Guide
        </p>
      </article>

      {/* CTA */}
      <div className="bg-gray-900 text-white rounded-xl p-8 mt-12 text-center">
        <h3 className="text-teal-400 font-bold text-lg mb-2">Ready to Get Started?</h3>
        <p className="text-gray-400 mb-5">Find your state&apos;s unemployment guide or explore our resources.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="inline-block bg-teal-500 text-gray-900 font-semibold px-8 py-3 rounded-lg hover:bg-teal-400 transition-colors">
            Find Your State &rarr;
          </Link>
          <Link href="/resources" className="inline-block border-2 border-teal-500 text-teal-400 font-semibold px-8 py-3 rounded-lg hover:bg-teal-500/10 transition-colors">
            Browse Resources
          </Link>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "AboutPage",
        name: "About The Layoff Guide",
        description: "Why I built The Layoff Guide — from personal experience with job loss and a broken unemployment system.",
        publisher: { "@type": "Organization", name: "The Layoff Guide" },
      })}} />
    </div>
  );
}
