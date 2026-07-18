import Link from "next/link";

export const metadata = {
  title: "Study Guides & Educational Articles | Taleem4u",
  description: "Explore comprehensive study guides, exam preparation strategies, career guidance articles, and educational tips for Pakistani students — from Matric to CSS and beyond.",
  keywords: "study guides pakistan, exam preparation guides, career guidance pakistan, educational articles, CSS guide, MDCAT guide",
  alternates: { canonical: "https://taleem4u.com/guides" },
};

const guides = [
  { id: 1, title: "How to Prepare for MDCAT Exam in Pakistan", excerpt: "A comprehensive guide to preparing for the Medical and Dental College Admission Test (MDCAT) with study strategies, 12-month preparation timeline, subject-wise breakdown, time management tips, and expert resource recommendations for Pakistani medical aspirants.", category: "Test Preparation", readTime: "8 min read", slug: "mdcat-preparation-guide", date: "2024-05-10" },
  { id: 2, title: "Ultimate Guide to Getting Government Jobs in Pakistan", excerpt: "Everything you need to know about securing a government job in Pakistan — understanding BPS scales, which commissions to target, what exams actually test, a proven 6-month preparation strategy, interview tips, and which documents to keep ready at all times.", category: "Career Guidance", readTime: "12 min read", slug: "government-jobs-guide", date: "2024-05-08" },
  { id: 3, title: "Top Scholarships for Pakistani Students in 2024", excerpt: "A detailed guide to the best scholarship opportunities available to Pakistani students this year — Fulbright, Chevening, HEC, DAAD, Commonwealth, and more. Covers eligibility requirements, application deadlines, and exactly how to write a winning scholarship essay.", category: "Scholarships", readTime: "10 min read", slug: "scholarships-2024", date: "2024-05-06" },
  { id: 4, title: "Effective Study Techniques for Pakistani Students", excerpt: "Master five science-backed study methods — active recall, spaced repetition, the Pomodoro Technique, the Feynman Technique, and past paper practice — that are proven to dramatically improve exam scores compared to traditional re-reading approaches.", category: "Study Tips", readTime: "9 min read", slug: "study-techniques", date: "2024-05-04" },
  { id: 5, title: "University Admissions in Pakistan — Complete Guide 2024", excerpt: "How merit is calculated, which entry tests to prepare for (NET, ECAT, MDCAT, FAST), comparisons of Pakistan's top universities (NUST, LUMS, UET, FAST), the application timeline, and how to apply to multiple universities simultaneously without missing deadlines.", category: "Admissions", readTime: "11 min read", slug: "university-admissions-guide", date: "2024-05-02" },
  { id: 6, title: "How to Score High in Matric and Intermediate Board Exams", excerpt: "A complete strategy guide for achieving A and A+ grades in Pakistani board exams — understanding how examiners mark papers, the 6-month preparation timeline, subject-wise scoring strategies for Physics, Chemistry, Biology, Mathematics, and English, and critical exam-day techniques.", category: "Exam Tips", readTime: "10 min read", slug: "matric-intermediate-scoring", date: "2024-04-30" },
  { id: 7, title: "Career Pathways in Engineering — A Complete Guide", excerpt: "An honest overview of engineering careers in Pakistan — the job market reality, Software Engineering vs Electrical vs Civil vs Mechanical comparisons, salary expectations, which universities produce the best outcomes, and how to build a competitive engineering career beyond your degree.", category: "Career Guidance", readTime: "11 min read", slug: "engineering-careers", date: "2024-04-28" },
  { id: 8, title: "Medical Career Guide — From MDCAT to Specialization", excerpt: "The complete pathway for aspiring doctors in Pakistan — MDCAT preparation, medical college selection, the MBBS curriculum year by year, House Job realities, FCPS specialization choices and competition levels, and career options beyond clinical medicine.", category: "Career Guidance", readTime: "12 min read", slug: "medical-career-guide", date: "2024-04-26" },
  { id: 9, title: "How to Build Effective Study Habits That Last", excerpt: "Why motivation fails and habits succeed, how to design your daily study schedule based on your natural cognitive peaks, environment design for deep focus, the weekly review system that keeps you on track, and how to handle setbacks without losing momentum.", category: "Study Tips", readTime: "10 min read", slug: "effective-study-habits", date: "2024-04-24" },
  { id: 10, title: "CSS Exam Complete Guide — How to Pass Pakistan's Toughest Test", excerpt: "A comprehensive guide to the Central Superior Services examination — eligibility requirements, the 1,200-mark structure of compulsory and optional papers, why the English Essay paper is decisive, a realistic 12 to 24-month preparation timeline, and how to choose optional subjects strategically.", category: "Career Guidance", readTime: "13 min read", slug: "css-exam-guide", date: "2024-04-22" },
  { id: 11, title: "What to Do After FSc — Career Options for Pakistani Students", excerpt: "A complete and honest guide to the career decisions facing FSc graduates — MBBS vs BDS vs Pharmacy vs Biotechnology after Pre-Medical, Engineering vs CS vs BBA vs Architecture after Pre-Engineering, what to do if your FSc marks were lower than expected, and the one question that should guide every decision.", category: "Career Guidance", readTime: "11 min read", slug: "career-after-fsc", date: "2024-04-20" },
];

export default function Guides() {
  const categories = [...new Set(guides.map((g) => g.category))];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Study Guides &amp; Articles</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            In-depth guides written by educators and career professionals to help Pakistani students navigate exams, admissions, scholarships, and career decisions with confidence. Every article is detailed, practical, and specific to Pakistan's educational context.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-12">
          <p className="text-gray-700 text-lg mb-2">Browse by category:</p>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <span key={cat} className="inline-block px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-800 transition cursor-pointer">{cat}</span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {guides.map((guide) => (
            <article key={guide.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">{guide.category}</span>
                  <span className="text-sm text-gray-500">{guide.readTime}</span>
                </div>
                <h2 className="text-xl font-bold mb-3 text-gray-900 leading-snug">{guide.title}</h2>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{guide.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-sm text-gray-500">{guide.date}</span>
                  <Link href={"/guides/" + guide.slug} className="text-blue-600 font-semibold hover:text-blue-700 transition text-sm">Read Full Article →</Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-16 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-8 border border-emerald-200">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Get New Guides in Your Inbox</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We publish new study guides, exam preparation tips, and career articles every week. Subscribe to receive them directly in your email — no spam, unsubscribe any time.
          </p>
          <div className="flex gap-3 max-w-md">
            <input type="email" placeholder="Your email address" className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-emerald-500" />
            <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition">Subscribe</button>
          </div>
        </section>
      </div>
    </div>
  );
}
