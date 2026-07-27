import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SEO from "../next-seo.config";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ─────────────────────────────────────────────────────────────────────────────
// IMPORTANT: Replace the value below with YOUR real AdSense Publisher ID.
// It looks like: ca-pub-XXXXXXXXXXXXXXXX
// You can find it in your AdSense account under
//   Account  →  Account information  →  Publisher ID
// ─────────────────────────────────────────────────────────────────────────────
const ADSENSE_PUBLISHER_ID = "ca-pub-6379961667392249"; // <-- REPLACE THIS

export const metadata = {
  title: "Taleem4u - Pakistan's Education & Career Hub",
  description:
    "Free study materials, past papers, job listings, scholarships, and admissions guidance for Pakistani students.",
  // ── AdSense Meta Tag verification (Method 3) ──────────────────────────────
  // Replace XXXXXXXXXXXXXXXX with your real publisher ID number only (digits).
  // e.g. if your publisher ID is ca-pub-1234567890123456, put 1234567890123456
  other: {
    "google-adsense-account": ADSENSE_PUBLISHER_ID,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/*
          ── METHOD 1: AdSense Code Snippet ─────────────────────────────────
          This single <Script> tag handles BOTH site verification AND
          automatic ad placement once AdSense approves your site.
          Replace XXXXXXXXXXXXXXXX with your real Publisher ID.
        */}
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUBLISHER_ID}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <WhatsappButton
          phone="92343710"
          message="Hi! I need help with admissions."
        />
        <Footer />
      </body>
    </html>
  );
}
