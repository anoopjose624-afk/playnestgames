import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getSiteUrl } from "@/lib/site-url";
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
    default: "PlayNest — Free Browser Games",
    template: "%s | PlayNest",
  },
  description:
    "Play free browser games instantly. Arcade, puzzle, action, and casual games — no download required.",
  metadataBase: new URL(getSiteUrl()),
  verification: {
    google: "googleedb50724668d4c8c",
  },
  openGraph: {
    siteName: "PlayNest",
    type: "website",
  },
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
      <body className="flex min-h-full flex-col font-sans">
        <Suspense
          fallback={
            <header className="h-[var(--pn-header-h)] border-b border-[var(--pn-border-subtle)] bg-[var(--pn-bg-base)]/90" />
          }
        >
          <Header />
        </Suspense>
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
