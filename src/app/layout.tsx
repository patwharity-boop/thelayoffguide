import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "The Layoff Guide — Everything You Need After Losing Your Job",
    template: "%s | The Layoff Guide",
  },
  description:
    "Your one-stop guide after a layoff. File for unemployment in all 50 states, find resources for health insurance, food assistance, resume help, and more. Written by someone who's been there.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5958895635970152"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <header className="border-b border-gray-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-center gap-8">
            <Link href="/" className="hover:opacity-90 shrink-0">
              <img src="/logo.png" alt="The Layoff Guide" className="h-24 w-auto" />
            </Link>
            <nav className="flex gap-6 text-sm">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                All States
              </Link>
              <Link href="/fast-track-careers" className="text-gray-600 hover:text-gray-900">
                Careers
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900">
                Blog
              </Link>
              <Link href="/resources" className="text-gray-600 hover:text-gray-900">
                Resources
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                About
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-gray-200 bg-gray-50 mt-16">
          <div className="mx-auto max-w-4xl px-4 py-8 text-center text-sm text-gray-500">
            <div className="flex justify-center gap-6 mb-4">
              <Link href="/about" className="text-gray-500 hover:text-gray-700">About</Link>
              <Link href="/blog" className="text-gray-500 hover:text-gray-700">Blog</Link>
              <Link href="/resources" className="text-gray-500 hover:text-gray-700">Resources</Link>
              <Link href="/fast-track-careers" className="text-gray-500 hover:text-gray-700">Careers</Link>
              <Link href="/budget-template" className="text-gray-500 hover:text-gray-700">Budget Template</Link>
              <Link href="/privacy" className="text-gray-500 hover:text-gray-700">Privacy</Link>
              <Link href="/terms" className="text-gray-500 hover:text-gray-700">Terms</Link>
            </div>
            <p>
              The Layoff Guide provides general information about unemployment
              benefits and post-layoff resources. This site is not affiliated with any government agency.
              Always verify information with your state&apos;s unemployment office.
            </p>
            <p className="mt-2">
              &copy; {new Date().getFullYear()} The Layoff Guide (thelayoffguide.com). All rights
              reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
