import Link from "next/link";

export const metadata = {
  title: "Free Books & Study Notes Pakistan | Matric, Inter, Primary, CSS | Taleem4u",
  description:
    "Download free PCTB textbooks, study notes, and PDF books for Nursery to Intermediate, CSS, and competitive exams. All subjects, all boards — completely free for Pakistani students.",
  keywords: "free books pakistan, PCTB textbooks, matric books, inter books, study notes, PDF books download",
  alternates: { canonical: "https://taleem4u.com/books" },
};

export default function BooksHub() {
  const categories = [
    {
      title: "Primary & Elementary",
      subtitle: "Nursery to Class 5",
      link: "/books/primary-elementary",
      icon: "🌱",
      color: "from-yellow-400 to-orange-400",
      desc: "PCTB-approved textbooks for Nursery, KG, and Classes 1 to 5. All core subjects — English, Urdu, Maths, Science, Social Studies, and Islamiyat — available as free PDF downloads.",
      subjects: ["English", "Urdu", "Mathematics", "Science", "Social Studies", "Islamiyat"],
    },
    {
      title: "Matric Books",
      subtitle: "9th & 10th Class",
      link: "/books/matric",
      icon: "📘",
      color: "from-blue-500 to-blue-700",
      desc: "Complete textbooks and handwritten notes for 9th and 10th classes from all major Punjab, Sindh, KPK, and Federal boards. Physics, Chemistry, Biology, Math, English, Urdu and more.",
      subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "English", "Urdu", "Computer Science"],
    },
    {
      title: "Intermediate Books",
      subtitle: "FSc / FA / ICS / I.Com",
      link: "/books/inter",
      icon: "📗",
      color: "from-green-500 to-teal-600",
      desc: "Textbooks and concise notes for all Intermediate groups — FSc Pre-Medical, Pre-Engineering, FA, ICS, and I.Com. Covers both Part I (11th) and Part II (12th).",
      subjects: ["Biology", "Chemistry", "Physics", "Mathematics", "Computer Science", "Economics"],
    },
    {
      title: "Study Notes",
      subtitle: "All Levels",
      link: "/books/notes",
      icon: "✏️",
      color: "from-purple-500 to-indigo-600",
      desc: "Curated handwritten and typed notes, key points, short question banks, and revision material for Matric, Intermediate, CSS, PPSC, and competitive exams.",
      subjects: ["Short Notes", "Key Points", "MCQ Banks", "Revision Sheets", "Formula Cards"],
    },
  ];

  const boards = [
    { name: "Punjab (PCTB)", note: "Largest curriculum authority in Pakistan" },
    { name: "Federal (FBISE)", note: "Federal Board — Islamabad region" },
    { name: "Sindh (STBB)", note: "Sindh Textbook Board" },
    { name: "KPK (KPKTBB)", note: "Khyber Pakhtunkhwa board" },
    { name: "Balochistan (BTB)", note: "Balochistan Textbook Board" },
    { name: "AJK Board", note: "Azad Jammu & Kashmir" },
  ];

  const whyFree = [
    { title: "Textbooks Are a Right, Not a Luxury", desc: "Every student in Pakistan deserves access to quality study materials regardless of financial background. We believe free education starts with free access to books." },
    { title: "Supplement School Learning", desc: "Students who review their textbook PDFs at home alongside classroom teaching retain up to 40% more information according to education research studies." },
    { title: "Ideal for Remote Students", desc: "Millions of Pakistani students live in areas with poor school infrastructure. Digital access to government-approved textbooks bridges a critical educational gap." },
    { title: "Parents Can Track Progress", desc: "When parents can access the same textbooks their children use, they can help with homework, track syllabus coverage, and stay meaningfully involved in their child's education." },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-emerald-700 to-teal-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="text-sm text-emerald-200 mb-4">
            <Link href="/" className="hover:text-white">Home</Link> / <span>Books & Notes</span>
          </nav>
          <h1 className="text-5xl font-bold mb-4">Free Books & Study Notes</h1>
          <p className="text-emerald-100 text-xl max-w-3xl">
            Download government-approved PCTB textbooks, handwritten notes, and study material for every class — from Nursery to Intermediate — completely free.
          </p>
          <div className="mt-8 flex gap-4 flex-wrap text-sm">
            <span className="bg-white/20 px-4 py-2 rounded-full">10,000+ Resources</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">All Boards Covered</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Free PDF Downloads</span>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse Books by Level</h2>
        <p className="text-gray-600 mb-10">Select your education level below to access all available textbooks, notes, and study materials for that class.</p>
        <div className="grid md:grid-cols-2 gap-7">
          {categories.map((cat) => (
            <Link key={cat.link} href={cat.link}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition group">
              <div className={`bg-gradient-to-r ${cat.color} p-5 text-white`}>
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{cat.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold">{cat.title}</h3>
                    <p className="text-sm opacity-90">{cat.subtitle}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-sm leading-relaxed mb-4">{cat.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {cat.subjects.map((s) => (
                    <span key={s} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{s}</span>
                  ))}
                </div>
                <span className="text-emerald-600 font-semibold text-sm group-hover:underline">Browse {cat.title} →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Boards covered */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">All Major Boards Covered</h2>
          <p className="text-gray-600 mb-8">We host textbooks from every major curriculum board in Pakistan so no student is left without resources.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {boards.map((b) => (
              <div key={b.name} className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition">
                <h3 className="font-bold text-gray-900">{b.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{b.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Free */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why We Offer Free Books</h2>
        <p className="text-gray-600 mb-10">Education in Pakistan faces real challenges — poverty, distance, and resource scarcity. Here is why we believe free access to books matters.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {whyFree.map((w, i) => (
            <div key={i} className="bg-white border-l-4 border-emerald-600 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{w.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Study Tips */}
      <section className="bg-emerald-50 py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How to Study Effectively from Textbooks</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "1", title: "Read Actively, Not Passively", tip: "Don't just read — highlight key terms, write margin notes, and pause after each section to summarise what you just read in your own words." },
              { step: "2", title: "Use the SQ3R Method", tip: "Survey, Question, Read, Recite, Review. Before reading a chapter, scan headings and turn them into questions. This gives your brain a purpose while reading." },
              { step: "3", title: "Combine with Past Papers", tip: "After studying a chapter from your textbook, immediately solve past paper questions from that chapter. This shows you exactly what examiners focus on." },
              { step: "4", title: "Spaced Repetition Wins", tip: "Review material after 1 day, then 3 days, then 7 days, then 14 days. This spaced repetition method permanently moves information into long-term memory." },
              { step: "5", title: "Teach What You Learn", tip: "After studying a topic, explain it to a sibling, friend, or even out loud to yourself. If you can teach it clearly, you've truly understood it." },
              { step: "6", title: "Break Study Into Sessions", tip: "Study in 45-minute focused blocks with 10-minute breaks (Pomodoro technique). This maintains concentration and prevents mental fatigue during long study days." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-5 shadow-sm border border-emerald-100">
                <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold mb-3 text-sm">{item.step}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-emerald-700 to-teal-700 text-white py-14 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Also Try Our Past Papers & Study Guides</h2>
          <p className="text-emerald-100 mb-8">Combine free textbooks with past papers and expert study guides for maximum exam preparation.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/past-papers" className="bg-white text-emerald-700 px-7 py-3 rounded-full font-semibold hover:bg-gray-100 transition">Past Papers</Link>
            <Link href="/guides" className="border-2 border-white text-white px-7 py-3 rounded-full font-semibold hover:bg-white hover:text-emerald-700 transition">Study Guides</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
