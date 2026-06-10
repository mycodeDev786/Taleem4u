import Link from "next/link";

export const metadata = {
  title: "Study Guides & Educational Articles | Taleem4u",
  description:
    "Explore comprehensive study guides, learning tips, exam preparation strategies, and educational articles for Pakistani students.",
  keywords:
    "study guides, exam tips, learning strategies, education articles, study tips pakistan",
  alternates: {
    canonical: "https://taleem4u.com/guides",
  },
};

const guides = [
  {
    id: 1,
    title: "How to Prepare for MDCAT Exam in Pakistan",
    excerpt:
      "A comprehensive guide to preparing for the Medical and Dental College Admission Test (MDCAT) with study strategies, time management tips, and resource recommendations.",
    category: "Test Preparation",
    readTime: "8 min read",
    slug: "mdcat-preparation-guide",
    date: "2024-05-10",
  },
  {
    id: 2,
    title: "Ultimate Guide to Getting Government Jobs in Pakistan",
    excerpt:
      "Learn everything about applying for government jobs in Pakistan, including exam patterns, application process, and preparation strategies for FPSC, PPSC, and other commissions.",
    category: "Career Guidance",
    readTime: "10 min read",
    slug: "government-jobs-guide",
    date: "2024-05-08",
  },
  {
    id: 3,
    title: "Top Scholarships for Pakistani Students in 2024",
    excerpt:
      "Discover the best scholarship opportunities for Pakistani students, including international scholarships, application deadlines, and tips for successful applications.",
    category: "Scholarships",
    readTime: "7 min read",
    slug: "scholarships-2024",
    date: "2024-05-06",
  },
  {
    id: 4,
    title: "Effective Study Techniques for Pakistani Students",
    excerpt:
      "Master proven study techniques including active recall, spaced repetition, and note-taking strategies to improve your academic performance.",
    category: "Study Tips",
    readTime: "6 min read",
    slug: "study-techniques",
    date: "2024-05-04",
  },
  {
    id: 5,
    title: "University Admissions Guide: Everything You Need to Know",
    excerpt:
      "Complete guide to university admissions in Pakistan and abroad, covering requirements, entrance exams, application procedures, and common mistakes to avoid.",
    category: "Admissions",
    readTime: "9 min read",
    slug: "university-admissions-guide",
    date: "2024-05-02",
  },
  {
    id: 6,
    title: "How to Score High in Matric and Intermediate Exams",
    excerpt:
      "Strategic tips and techniques to excel in matriculation and intermediate examinations, including subject-specific approaches and exam-day preparation.",
    category: "Exam Tips",
    readTime: "7 min read",
    slug: "matric-intermediate-scoring",
    date: "2024-04-30",
  },
  {
    id: 7,
    title: "Career Pathways in Engineering: A Complete Overview",
    excerpt:
      "Explore different engineering career pathways in Pakistan, including specializations, job opportunities, and future prospects in this growing field.",
    category: "Career Guidance",
    readTime: "8 min read",
    slug: "engineering-careers",
    date: "2024-04-28",
  },
  {
    id: 8,
    title: "Medical Career Guide: From MDCAT to Specialization",
    excerpt:
      "A comprehensive pathway for aspiring doctors, covering MDCAT preparation, medical college selection, and career advancement in the medical field.",
    category: "Career Guidance",
    readTime: "10 min read",
    slug: "medical-career-guide",
    date: "2024-04-26",
  },
];

export default function Guides() {
  const categories = [...new Set(guides.map((g) => g.category))];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Study Guides & Articles</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Master your studies with our comprehensive guides, expert tips, and
            proven strategies for academic success.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Category Filter Info */}
        <div className="mb-12">
          <p className="text-gray-600 mb-4">
            Explore articles in these categories:
          </p>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <span
                key={cat}
                className="inline-block px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {guides.map((guide) => (
            <article
              key={guide.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    {guide.category}
                  </span>
                  <span className="text-sm text-gray-500">{guide.readTime}</span>
                </div>

                <h2 className="text-2xl font-bold mb-3 text-gray-900">
                  {guide.title}
                </h2>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {guide.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-sm text-gray-500">{guide.date}</span>
                  <Link
                    href={`/guides/${guide.slug}`}
                    className="text-blue-600 font-semibold hover:text-blue-700 transition"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <section className="mt-16 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-8 border border-emerald-200">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-6">
            Get the latest study guides, tips, and educational resources
            delivered to your inbox weekly.
          </p>
          <div className="flex gap-3 max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-emerald-500"
            />
            <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
