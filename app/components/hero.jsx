"use client";

import Link from "next/link";
import Image from "next/image";
import { assets } from "@/assets/assets";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-emerald-600 via-teal-600 to-lime-500 text-white py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left z-10">
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
            Taleem4u – Pakistan’s <br />
            <span className="text-yellow-300">Education & Career Hub</span>
          </h1>
          <p className="text-lg lg:text-xl mb-8 text-gray-100">
            Access <strong>Books & Notes</strong>,{" "}
            <strong>Admissions & Scholarships</strong>, <strong>Jobs</strong>,
            and test prep resources – all in one platform built for Pakistani
            students.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link
              href="/jobs"
              className="bg-white text-emerald-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
            >
              Explore Jobs
            </Link>
            <Link
              href="/scholarships"
              className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-500 transition"
            >
              Find Scholarships
            </Link>
          </div>
        </div>

        {/* Right Image / Illustration */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center relative z-10">
          <Image
            src={assets.hero} // 👈 add your illustration to /public
            alt="Students learning illustration"
            width={500}
            height={500}
            className="drop-shadow-2xl rounded-xl"
          />
        </div>
      </div>

      {/* Decorative Background Shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
    </section>
  );
}
