import Link from "next/link";

export const metadata = {
  title: "Blog – Education, Career & Study Tips for Pakistani Students | Taleem4u",
  description:
    "Read the latest articles on university admissions, scholarship tips, exam preparation strategies, career guidance, and educational news for Pakistani students.",
  alternates: { canonical: "https://www.taleem4u.com/blog" },
};

export default function BlogPage() {
  const posts = [
    {
      slug: "how-to-get-hec-overseas-scholarship",
      title: "How to Get the HEC Overseas Scholarship: A Step-by-Step Guide",
      category: "Scholarships",
      date: "January 10, 2025",
      readTime: "8 min read",
      excerpt: "The HEC Overseas Scholarship is one of the most sought-after funding opportunities for Pakistani postgraduate students. This detailed guide walks you through eligibility, the application process, required documents, and how to write a winning personal statement.",
      image: null,
    },
    {
      slug: "mdcat-preparation-tips-2025",
      title: "Top 10 MDCAT Preparation Tips to Score Above 180 in 2025",
      category: "Exam Prep",
      date: "December 28, 2024",
      readTime: "10 min read",
      excerpt: "Scoring above 180 in MDCAT requires a smart strategy, not just hard work. Based on analysis of top scorers and past exam patterns, we share the 10 most effective tactics for MDCAT Biology, Chemistry, Physics, and English preparation.",
      image: null,
    },
    {
      slug: "government-jobs-vs-private-sector",
      title: "Government Jobs vs Private Sector in Pakistan: Which is Right for You?",
      category: "Career Guide",
      date: "December 15, 2024",
      readTime: "7 min read",
      excerpt: "Government jobs offer stability, pension, and grade-based salaries. Private sector jobs often pay more and move faster. This comprehensive comparison helps Pakistani fresh graduates make an informed career choice based on their goals and priorities.",
      image: null,
    },
    {
      slug: "fulbright-scholarship-guide-pakistan",
      title: "Applying for the Fulbright Scholarship from Pakistan: Everything You Need to Know",
      category: "Scholarships",
      date: "December 2, 2024",
      readTime: "12 min read",
      excerpt: "The Fulbright Scholarship is America's most prestigious international scholarship program, and Pakistan has one of the highest acceptance rates in Asia. Here is a complete guide to the application timeline, essay requirements, interviews, and what makes a successful Fulbright applicant from Pakistan.",
      image: null,
    },
    {
      slug: "ppsc-patwari-preparation-guide",
      title: "PPSC Patwari Preparation Guide 2025: Syllabus, Books & Test Strategy",
      category: "Exam Prep",
      date: "November 20, 2024",
      readTime: "9 min read",
      excerpt: "The PPSC Patwari test is one of the most popular and competitive government exams in Punjab. This guide covers the complete syllabus breakdown, the best preparation books, common mistakes to avoid, and a 60-day study plan designed specifically for Patwari aspirants.",
      image: null,
    },
    {
      slug: "best-universities-pakistan-2025",
      title: "Top 15 Universities in Pakistan for 2025 – Rankings, Programs & Admissions",
      category: "Admissions",
      date: "November 8, 2024",
      readTime: "11 min read",
      excerpt: "Choosing the right university is one of the most important decisions a Pakistani student will make. We review the top 15 universities in Pakistan ranked by academic quality, research output, graduate employability, and campus facilities — along with their key programs and 2025 admission requirements.",
      image: null,
    },
  ];

  const categories = ["All", "Scholarships", "Exam Prep", "Career Guide", "Admissions", "Study Tips"];

  return (
    <main className="min-h-screen bg-gray-50 pt-24 px-6 pb-16">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Taleem4u Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert articles, guides, and advice on scholarships, exam preparation, university admissions, 
            and career planning for Pakistani students and professionals.
          </p>
        </header>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button key={cat} className={`px-4 py-2 rounded-full text-sm font-medium transition ${cat === "All" ? "bg-emerald-600 text-white" : "bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 shadow-sm"}`}>{cat}</button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-10 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
          <span className="bg-white bg-opacity-20 text-white text-xs font-bold px-3 py-1 rounded-full">Featured</span>
          <h2 className="text-2xl font-bold mt-3 mb-2">{posts[0].title}</h2>
          <p className="text-emerald-100 text-sm mb-4">{posts[0].excerpt}</p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-emerald-200">{posts[0].date}</span>
            <span className="text-xs text-emerald-200">•</span>
            <span className="text-xs text-emerald-200">{posts[0].readTime}</span>
            <Link href={`/blog/${posts[0].slug}`} className="ml-auto bg-white text-emerald-700 px-5 py-2 rounded-full text-sm font-semibold hover:bg-emerald-50 transition">Read Article →</Link>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, i) => (
            <article key={i} className="bg-white rounded-2xl shadow hover:shadow-lg transition flex flex-col overflow-hidden">
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 h-40 flex items-center justify-center">
                <span className="text-5xl">
                  {post.category === "Scholarships" ? "🎓" : post.category === "Exam Prep" ? "📝" : post.category === "Career Guide" ? "💼" : "🏛️"}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-2 py-0.5 rounded-full">{post.category}</span>
                  <span className="text-gray-400 text-xs">{post.readTime}</span>
                </div>
                <h2 className="text-lg font-bold text-gray-800 mb-2 leading-snug">{post.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">{post.excerpt.substring(0, 120)}...</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-gray-400">{post.date}</span>
                  <Link href={`/blog/${post.slug}`} className="text-emerald-600 text-sm font-medium hover:underline">Read More →</Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-emerald-50 rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Stay Updated</h2>
          <p className="text-gray-600 mb-6">Get the latest scholarship deadlines, admission alerts, and study tips delivered to your inbox weekly.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email address" className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition text-sm">Subscribe</button>
          </div>
          <p className="text-xs text-gray-400 mt-3">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </main>
  );
}
