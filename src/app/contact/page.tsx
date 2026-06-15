import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import ContactForm from "./ContactForm";

export const metadata = buildPageMetadata({
  title: "Contact The Layoff Guide",
  description:
    "Report a bug, suggest a feature, or flag outdated information on The Layoff Guide. A real person reads every message.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Contact</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Contact Us
      </h1>

      <p className="text-gray-700 leading-relaxed mb-3">
        This site is built and maintained by one person, and it gets better when
        readers tell me what&apos;s wrong or missing. Found a broken link, a
        benefit number that looks off, or something that would make the site more
        useful? Send it over. A real person reads every message.
      </p>

      <p className="text-gray-500 text-sm leading-relaxed mb-8">
        One note: this form is for feedback about the website. It is not a help
        line for your individual claim. For help with your own unemployment, start
        with your{" "}
        <Link href="/" className="text-teal-600 hover:underline">
          state&apos;s guide
        </Link>{" "}
        or the{" "}
        <Link href="/resources" className="text-teal-600 hover:underline">
          resources page
        </Link>
        .
      </p>

      <ContactForm />
    </div>
  );
}
