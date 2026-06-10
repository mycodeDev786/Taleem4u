import Link from "next/link";

export const metadata = {
  title: "Past Papers Pakistan | Matric, Inter, CSS, PPSC, MDCAT | Taleem4u",
  description:
    "Download free past papers for Matric, Intermediate, CSS, PPSC, MDCAT, NTS and more. Solve previous year questions to boost your exam score. All boards and years covered.",
  keywords: "past papers pakistan, matric past papers, inter past papers, CSS past papers, MDCAT past papers",
  alternates: { canonical: "https://taleem4u.com/past-papers" },
};

export default function PastPapers() {
  const categories = [
    { title: "Matric (9th & 10th) Past Papers", slug: "matric", icon: "📘", desc: "Past papers for all 9th and 10th grade subjects from all Pakistani boards — BISE Lahore, Karachi, Rawalpindi, Faisalabad, Multan, and more. Subjects include Physics, Chemistry, Biology, Math, English, Urdu, Islamiyat, and Computer Science.", boards: "All BISE Boards", years: "2015–2023" },
    { title: "Intermediate (11th & 12th) Past Papers", slug: "inter", icon: "📗", desc: "FSc Pre-Medical and Pre-Engineering past papers along with FA, ICS, and I.Com papers. Fully categorized by board, year, and subject for targeted practice.", boards: "All BISE Boards", years: "2015–2023" },
    { title: "CSS Past Papers", slug: "css", icon: "📙", desc: "Central Superior Services (CSS) past papers for Compulsory and Optional subjects. Practice papers from the Federal Public Service Commission (FPSC) going back 10 years.", boards: "FPSC", years: "2013–2023" },
    { title: "PPSC & FPSC Past Papers", slug: "ppsc", icon: "📕", desc: "Public Service Commission past papers for various posts — Lecturer, Inspector, ASI, Assistant, Sub-Inspector, Tax Officer, and many more positions.", boards: "PPSC / FPSC / SPSC", years: "2016–2023" },
    { title: "MDCAT Past Papers", slug: "mdcat", icon: "🩺", desc: "Medical and Dental College Admission Test past papers with answer keys. Practice with real PMC exam questions to build speed and accuracy.", boards: "PMC", years: "2019–2023" },
    { title: "NTS Past Papers", slug: "nts", icon: "📋", desc: "National Testing Service past papers for GAT General, GAT Subject, NAT-I, NAT-II, and various government department tests.", boards: "NTS Pakistan", years: "2017–2023" },
  ];

  const benefits = [
    { title: "Understand the Exam Pattern", desc: "Past papers reveal exactly how questions are structured, what types of questions appear, and how much weightage each topic gets. This is information your textbook alone cannot give you." },
    { title: "Identify High-Frequency Topics", desc: "Certain topics appear in the exam every single year. By analyzing 5–10 years of past papers, you'll know exactly which topics to prioritize for maximum marks." },
    { title: "Build Speed & Accuracy", desc: "Solving past papers under timed conditions trains your brain to work efficiently under pressure — a skill that is just as important as knowledge on exam day." },
    { title: "Reduce Exam Anxiety", desc: "Familiarity breeds confidence. Students who have solved 20+ past papers walk into the exam hall feeling prepared rather than anxious, because they've seen it all before." },
    { title: "Self-Assessment", desc: "Marking your own past paper gives you an honest view of where you stand. It shows you exactly which chapters you've mastered and which ones need more work." },
    { title: "Practice Active Recall", desc: "Answering questions from memory (rather than reading notes) is scientifically proven to improve long-term retention of information — a concept called the testing effect." },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-slate-700 to-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link> / <span>Past Papers</span>
          </nav>
          <h1 className="text-5xl font-bold mb-4">Past Papers — Pakistan</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Access thousands of free past papers for Matric, Intermediate, CSS, MDCAT, PPSC, and NTS. The fastest way to prepare for any exam in Pakistan.
          </p>
          <div className="mt-8 flex gap-4 flex-wrap text-sm">
            <span className="bg-white/10 px-4 py-2 rounded-full">10,000+ Papers</span>
            <span className="bg-white/10 px-4 py-2 rounded-full">All Boards Covered</span>
            <span className="bg-white/10 px-4 py-2 rounded-full">Free Download</span>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse Past Papers by Category</h2>
        <p className="text-gray-600 mb-10">Select the exam category that matches your preparation needs. All papers include answer keys where available.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((c) => (
            <Link key={c.slug} href={`/past-papers/${c.slug}`} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition hover:border-slate-400 group">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{c.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-slate-700">{c.title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{c.desc}</p>
              <div className="flex gap-3 text-xs">
                <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full">{c.boards}</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">📅 {c.years}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Solve Past Papers */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Why Solving Past Papers Works</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Research in educational psychology consistently shows that retrieval practice (testing yourself) is one of the most effective study techniques.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Use Past Papers Effectively</h2>
        <div className="space-y-5">
          {[
            { num: "01", tip: "Start solving past papers 3–4 months before your exam — not one week before." },
            { num: "02", tip: "Always solve under timed conditions that match the real exam duration." },
            { num: "03", tip: "Mark your answers using the official marking scheme, not just whether you 'knew' it." },
            { num: "04", tip: "After marking, spend equal time reviewing wrong answers as you did solving." },
            { num: "05", tip: "Categorize your mistakes: knowledge gaps vs. reading errors vs. time pressure mistakes." },
            { num: "06", tip: "Solve at least 5 years of papers for each subject before the actual exam." },
          ].map((t) => (
            <div key={t.num} className="flex gap-5 items-start bg-white border border-gray-200 rounded-lg p-5">
              <span className="text-2xl font-bold text-slate-300 flex-shrink-0">{t.num}</span>
              <p className="text-gray-800 leading-relaxed pt-1">{t.tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-slate-700 to-gray-900 text-white py-14 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Also Explore Our Books & Study Notes</h2>
          <p className="text-gray-300 mb-8">Combine past papers with our free textbooks and study notes for the most complete exam preparation.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/books" className="bg-white text-slate-800 px-7 py-3 rounded-full font-semibold hover:bg-gray-100 transition">Free Books</Link>
            <Link href="/guides" className="border-2 border-white text-white px-7 py-3 rounded-full font-semibold hover:bg-white hover:text-slate-800 transition">Study Guides</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
