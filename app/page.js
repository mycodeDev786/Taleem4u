import Link from "next/link";
import Hero from "./components/hero";
import LatestSection from "./components/LatestSection";
import BooksSection from "./components/BooksSection";

export const metadata = {
  title: "Taleem4u – Pakistan's Free Education & Career Portal | Books, Jobs, Scholarships",
  description:
    "Pakistan's leading free education portal. Download textbooks, past papers, find jobs, scholarships, university admissions, and MDCAT/PPSC preparation — all in one place.",
};

const quickStats = [
  { value: "50,000+", label: "Monthly Users" },
  { value: "5,000+", label: "Study Resources" },
  { value: "500+", label: "Active Job Listings" },
  { value: "100+", label: "Scholarships Listed" },
];

const featuredCategories = [
  { title: "Matric Books", href: "/books/matric", icon: "📗", desc: "Free PCTB textbooks for 9th & 10th class" },
  { title: "FSc Books", href: "/books/inter", icon: "📘", desc: "Intermediate Part 1 & 2 PDF books" },
  { title: "MDCAT Prep", href: "/prep/mdcat", icon: "🏥", desc: "Books, notes, past papers & mock tests" },
  { title: "PPSC Prep", href: "/prep/ppsc", icon: "📝", desc: "Patwari, SI, ASI & all posts" },
  { title: "Past Papers", href: "/past-papers", icon: "📋", desc: "Matric, Inter, CSS, PPSC, NTS" },
  { title: "Scholarships", href: "/scholarships", icon: "🎓", desc: "HEC, Fulbright, Chevening, PEEF & more" },
];

const latestBlogPosts = [
  { title: "How to Get the HEC Overseas Scholarship: A Step-by-Step Guide", category: "Scholarships", href: "/blog/how-to-get-hec-overseas-scholarship", date: "Jan 10, 2025" },
  { title: "Top 10 MDCAT Preparation Tips to Score Above 180 in 2025", category: "Exam Prep", href: "/blog", date: "Dec 28, 2024" },
  { title: "Government Jobs vs Private Sector in Pakistan: Which is Right for You?", category: "Career Guide", href: "/blog", date: "Dec 15, 2024" },
];

export default function Home() {
  return (
    <div className="-mt-5">
      <Hero />
      <LatestSection />
      <BooksSection />

      {/* Quick Stats */}
      <section className="bg-emerald-700 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-white text-2xl font-bold text-center mb-8">Trusted by Pakistani Students & Professionals</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickStats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl font-extrabold text-yellow-300">{s.value}</p>
                <p className="text-emerald-100 mt-1 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">Everything a Pakistani Student Needs</h2>
          <p className="text-gray-500 text-center mb-10">From textbooks to test prep — free, verified, and up to date</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {featuredCategories.map((cat, i) => (
              <Link key={i} href={cat.href} className="bg-white rounded-2xl shadow p-6 flex gap-4 items-start hover:shadow-lg hover:-translate-y-1 transition-all">
                <span className="text-4xl flex-shrink-0">{cat.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{cat.title}</h3>
                  <p className="text-gray-500 text-sm">{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest from Our Blog</h2>
            <Link href="/blog" className="text-emerald-600 font-medium hover:underline text-sm">View All →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {latestBlogPosts.map((post, i) => (
              <Link key={i} href={post.href} className="bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition group block">
                <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-2 py-0.5 rounded-full">{post.category}</span>
                <h3 className="font-bold text-gray-800 mt-3 mb-2 leading-snug group-hover:text-emerald-700 transition">{post.title}</h3>
                <p className="text-gray-400 text-xs">{post.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">About Taleem4u</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Taleem4u was built with one goal: to give every Pakistani student — from Karachi to Gilgit — free access 
            to the study materials, career guidance, and educational opportunities they deserve. We aggregate textbooks, 
            past papers, scholarship listings, university admission news, and job opportunities in a single, easy-to-use platform.
          </p>
          <p className="text-gray-400 mb-8">
            Whether you are preparing for Matric board exams, studying for MDCAT, looking for your first government job, 
            or seeking a fully funded international scholarship — Taleem4u is your trusted companion throughout the journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about" className="bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-600 transition">Learn More About Us</Link>
            <Link href="/contact" className="border border-gray-500 text-gray-200 px-6 py-3 rounded-full font-semibold hover:border-emerald-400 hover:text-emerald-400 transition">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
