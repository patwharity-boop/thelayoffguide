import type { Metadata } from "next";

const SITE_URL = "https://www.thelayoffguide.com";
const SITE_NAME = "The Layoff Guide";
const DEFAULT_IMAGE = {
  url: "/logo.png",
  width: 1024,
  height: 1024,
  alt: SITE_NAME,
} as const;

type Args = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  image?: string;
  keywords?: string[];
};

export function buildPageMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  modifiedTime,
  image,
  keywords,
}: Args): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogImage = image
    ? [{ url: image, width: 1200, height: 630, alt: title }]
    : [DEFAULT_IMAGE];

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      type,
      siteName: SITE_NAME,
      title,
      description,
      url,
      images: ogImage,
      locale: "en_US",
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      images: image ? [image] : ["/logo.png"],
    },
  };
}
