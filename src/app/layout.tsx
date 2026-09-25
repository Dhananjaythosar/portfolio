import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { profileData } from "@/data/profile";
import "./globals.css";

const display = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const body = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(profileData.websiteUrl),
  title: profileData.seo.title,
  description: profileData.seo.description,
  keywords: profileData.seo.keywords,
  authors: [{ name: profileData.name }],
  creator: profileData.name,
  openGraph: {
    type: "website",
    url: profileData.websiteUrl,
    title: profileData.seo.title,
    description: profileData.seo.description,
    siteName: `${profileData.name} Portfolio`,
    locale: "en_IN",
    images: profileData.photoUrl
      ? [
          {
            url: profileData.photoUrl,
            alt: `${profileData.name} — professional portrait`,
          },
        ]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: profileData.seo.title,
    description: profileData.seo.description,
    images: profileData.photoUrl ? [profileData.photoUrl] : undefined,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profileData.name,
    jobTitle: profileData.role,
    email: profileData.email,
    telephone: profileData.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    url: profileData.websiteUrl,
    image: profileData.photoUrl,
    sameAs: profileData.socials
      .filter((s) => s.icon !== "email")
      .map((s) => s.href),
    alumniOf: profileData.education.map((edu) => edu.institution),
  };

  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full`}
    >
      <body className="min-h-full bg-bg font-sans text-text antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
