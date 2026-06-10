import Image from "next/image";
import Link from "next/link";
import Hero from "./components/hero";
import LatestSection from "./components/LatestSection";
import BooksSection from "./components/BooksSection";

export const metadata = {
  title: "Taleem4u - Pakistan's Education & Career Hub | Free Study Materials & Jobs",
  description:
    "Access free PDF books, study notes, past papers, job listings, scholarships, and admissions guidance. Everything a Pakistani student needs for academic and career success.",
  keywords:
    "Pakistani education, study materials, books, notes, jobs, scholarships, admissions, Pakistan education portal",
};

export default function Home() {
  return (
    <div className="-mt-5">
      <Hero />
      <LatestSection />
      <BooksSection />

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Why Choose Taleem4u?
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Your one-stop platform for education, career guidance, and professional
            development.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Complete Study Materials
              </h3>
              <p className="text-gray-700">
                Access thousands of free PDF books, detailed notes, and past papers
                for all educational levels.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Job Opportunities
              </h3>
              <p className="text-gray-700">
                Browse and apply for government jobs, private sector positions,
                internships, and overseas opportunities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Scholarships & Admissions
              </h3>
              <p className="text-gray-700">
                Discover 100+ scholarships and get expert guidance on university
                admissions and career pathways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Quick Navigation
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/books"
              className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg border border-emerald-200 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                📖 Books & Notes
              </h3>
              <p className="text-gray-700 text-sm">
                Download free study materials for all classes
              </p>
            </Link>

            <Link
              href="/jobs"
              className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                💼 Jobs Portal
              </h3>
              <p className="text-gray-700 text-sm">
                Latest job listings and career opportunities
              </p>
            </Link>

            <Link
              href="/scholarships"
              className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                🎓 Scholarships
              </h3>
              <p className="text-gray-700 text-sm">
                100+ scholarship opportunities worldwide
              </p>
            </Link>

            <Link
              href="/guides"
              className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg border border-orange-200 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ✍️ Study Guides
              </h3>
              <p className="text-gray-700 text-sm">
                Expert guides for exams and career preparation
              </p>
            </Link>

            <Link
              href="/past-papers"
              className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border border-cyan-200 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                📄 Past Papers
              </h3>
              <p className="text-gray-700 text-sm">
                Practice with previous year question papers
              </p>
            </Link>

            <Link
              href="/about"
              className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ℹ️ About Us
              </h3>
              <p className="text-gray-700 text-sm">
                Learn more about Taleem4u's mission
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <p>Study Materials</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p>Job Listings</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <p>Scholarships</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <p>Active Students</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Get Started Today
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Join thousands of Pakistani students who are using Taleem4u to ace
            their exams and advance their careers. Everything is completely free!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/books"
              className="bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 transition"
            >
              Explore Materials
            </Link>
            <Link
              href="/guides"
              className="bg-gray-200 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition"
            >
              Read Guides
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
