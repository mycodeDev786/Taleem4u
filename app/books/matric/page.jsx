import Link from "next/link";

export const metadata = {
  title: "Matric Books | 9th & 10th Class Textbooks & Notes Free Download | Taleem4u",
  description: "Free PDF textbooks and study notes for 9th and 10th class - all subjects, all Pakistani boards. Physics, Chemistry, Biology, Maths, English, Urdu and more.",
  keywords: "matric books, 9th class books, 10th class books, matric textbooks PDF, PCTB matric books",
  alternates: { canonical: "https://taleem4u.com/books/matric" },
};

export default function MatricBooks() {
  const subjects = [
    { name: "Physics", classes: "9th & 10th", desc: "Complete physics textbooks covering mechanics, optics, electricity, and nuclear physics. Includes solved exercises and key formulas.", icon: "⚛️" },
    { name: "Chemistry", classes: "9th & 10th", desc: "Organic and inorganic chemistry textbooks with reactions, equations, and periodic table concepts clearly explained.", icon: "🧪" },
    { name: "Biology", classes: "9th & 10th", desc: "Life sciences textbooks with detailed diagrams on cells, human body systems, genetics, and ecology.", icon: "🧬" },
    { name: "Mathematics", classes: "9th & 10th", desc: "Algebra, geometry, trigonometry, and statistics textbooks with solved examples and exercise solutions.", icon: "📐" },
    { name: "English (Compulsory)", classes: "9th & 10th", desc: "English textbooks covering prose, poetry, grammar, and composition. Includes Oxford Guide for reference.", icon: "📖" },
    { name: "Urdu (Compulsory)", classes: "9th & 10th", desc: "Urdu grammar, poetry, literature, and essay-writing books for board exam preparation.", icon: "✍️" },
    { name: "Islamiyat", classes: "9th & 10th", desc: "Islamic Studies textbooks covering Quran, Hadith, Islamic history, and jurisprudence for board exams.", icon: "🕌" },
    { name: "Pakistan Studies", classes: "9th & 10th", desc: "Geography of Pakistan, history, constitution, economy, and national issues for the Pakistan Studies paper.", icon: "🇵🇰" },
    { name: "Computer Science", classes: "9th & 10th", desc: "Programming fundamentals, MS Office, internet concepts, and basic programming.", icon: "💻" },
    { name: "General Math", classes: "9th & 10th", desc: "Alternative to Computer Science covering arithmetic, algebra, and geometry for Arts group students.", icon: "🔢" },
  ];

  const tips = [
    { t: "Start with Solved Examples", b: "Before attempting exercises, study all solved examples in each chapter. Board paper questions are closely modelled on these examples." },
    { t: "Practice Diagrams Daily", b: "Biology and Physics require neat, labelled diagrams. Practise drawing them from memory every day — diagrams carry 3-5 marks each in board exams." },
    { t: "Memorise Definitions Precisely", b: "Board examiners mark definitions very strictly. Learn exact textbook definitions for all key terms and avoid paraphrasing them in the exam." },
    { t: "Chemistry: Balance Every Equation", b: "Never skip balancing chemical equations in Chemistry. Every unbalanced equation costs you marks. Practice balancing 5 equations daily." },
    { t: "Work Backwards from Past Papers", b: "Get 3 years of past papers for your board and work out which chapters are asked every year. Prioritise those chapters without ignoring the rest." },
    { t: "Time Yourself on Practice Tests", b: "Matric papers are 2 hours 40 minutes. Practice under timed conditions monthly. Many students know the content but fail because of poor time management." },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="text-sm text-blue-300 mb-4">
            <Link href="/">Home</Link> / <Link href="/books">Books</Link> / <span>Matric</span>
          </nav>
          <h1 className="text-5xl font-bold mb-4">Matric Books — 9th & 10th Class</h1>
          <p className="text-blue-100 text-xl max-w-3xl">Free PDF textbooks and concise study notes for all Matric subjects. Covers every major BISE board — Punjab, Sindh, KPK, Federal, and AJK.</p>
          <div className="mt-8 flex gap-4 flex-wrap text-sm">
            <span className="bg-white/20 px-4 py-2 rounded-full">10 Subjects</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">All BISE Boards</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Free PDF Download</span>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Subject</h2>
        <p className="text-gray-600 mb-10">Select any subject to access textbooks for both 9th and 10th class, study notes, solved exercises, and past papers.</p>
        <div className="grid md:grid-cols-2 gap-5">
          {subjects.map((s) => (
            <div key={s.name} className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-lg transition group cursor-pointer">
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">{s.icon}</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition mb-1">{s.name}</h3>
                  <p className="text-xs text-blue-600 mb-2 font-medium">{s.classes}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{s.desc}</p>
                  <div className="flex gap-2">
                    <button className="text-xs bg-blue-700 text-white px-4 py-1.5 rounded-full hover:bg-blue-800 transition">9th Class</button>
                    <button className="text-xs bg-blue-900 text-white px-4 py-1.5 rounded-full hover:bg-blue-950 transition">10th Class</button>
                    <button className="text-xs bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full hover:bg-gray-200 transition">Notes</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Expert Tips for Matric Exam Success</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {tips.map((tip, i) => (
              <div key={i} className="bg-white border-l-4 border-blue-700 rounded-lg p-5 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{tip.t}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{tip.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-14 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Also Get Matric Past Papers</h2>
          <p className="text-blue-100 mb-8">Combine textbooks with past papers for the most complete board exam preparation.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/past-papers/matric" className="bg-white text-blue-700 px-7 py-3 rounded-full font-semibold hover:bg-gray-100 transition">Matric Past Papers</Link>
            <Link href="/books/notes" className="border-2 border-white text-white px-7 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition">Study Notes</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
