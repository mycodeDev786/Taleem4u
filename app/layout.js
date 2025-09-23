import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NextSeo } from "next-seo";
import SEO from "../next-seo.config";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Taleem4u - Education & Career Portal",
  description:
    "Find Pakistani study materials, job opportunities, admissions, and scholarships at Taleem4u.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        {/* ✅ WhatsApp floating button (shows everywhere) */}
        <WhatsappButton
          phone="923121923183"
          message="Hi! I need help with admissions."
        />
        <Footer />
      </body>
    </html>
  );
}
