import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Stack Match - Find Your Perfect Tech Stack",
  description: "Discover which tech stack matches your coding style. Take our interactive quiz to find your ideal programming language and framework combination.",
  keywords: ["tech stack", "programming", "quiz", "developer", "coding", "technology"],
  authors: [{ name: "Kevin Ananda P" }],
  creator: "Kevin Ananda P",
  openGraph: {
    title: "Stack Match - Find Your Perfect Tech Stack",
    description: "Discover which tech stack matches your coding style",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stack Match - Find Your Perfect Tech Stack",
    description: "Discover which tech stack matches your coding style",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.svg", sizes: "16x16", type: "image/svg" },
      { url: "/favicon-32x32.svg", sizes: "32x32", type: "image/svg" },
    ],
    apple: [
      { url: "/apple-touch-icon.svg", sizes: "180x180", type: "image/svg" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#1c1a5e" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
