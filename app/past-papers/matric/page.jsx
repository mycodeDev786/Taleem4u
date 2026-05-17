import Link from "next/link";

export const metadata = {
  title: "Matric Past Papers (9th & 10th Class) – All Boards Pakistan | Taleem4u",
  description:
    "Download free Matric past papers for 9th and 10th class. All subjects — Physics, Chemistry, Biology, Mathematics, English, Urdu. Papers from Lahore, Rawalpindi, Gujranwala, Karachi, and Federal Boards.",
  alternates: { canonical: "https://www.taleem4u.com/past-papers/matric" },
};

export default function MatricPastPapers() {
  const subjects = [
    { name: "Physics", slug: "physics", desc: "Numerical problems, conceptual MCQs, and short/long questions from all Punjab and Federal Board past papers." },
    { name: "Chemistry", slug: "chemistry", desc: "Organic, inorganic, and physical chemistry questions with worked solutions for 9th and 10th class." },
    { name: "Mathematics", slug: "mathematics", desc: "Algebra, geometry, trigonometry, and statistics past questions with full step-by-step solutions." },
    { name: "English", slug: "english", desc: "Grammar, comprehension, essays, letters, and story writing questions from major Pakistani boards." },
    { name: "Biology", slug: "biology", desc: "Diagrams, definitions, MCQs, and long questions covering all 10th grade biology chapters." },
    { name: "Urdu", slug: "urdu", desc: "Urdu prose, poetry, grammar, and essay questions from board papers of the last 10 years." },
    { name: "Islamiat", slug: "islamiat", desc: "Ayat, Hadith translations, Islamic history, and faith-based questions for compulsory Islamiat paper." },
    { name: "Pakistan Studies", slug: "pak-studies", desc: "Geography, history, and civics questions covering the complete Pak Studies syllabus." },
  ];

  const boards = [
    "Lahore Board (BISE Lahore)",
    "Rawalpindi Board (BISE Rwp)",
    "Gujranwala Board",
    "Faisalabad Board",
    "Multan Board",
    "Sargodha Board",
    "Sahiwal Board",
    "DG Khan Board",
    "Karachi Board (BSEK)",
    "Federal Board (FBISE)",
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <nav className="text-sm mb-6 text-gray-600">
        <Link href="/" className="hover:underline">Home</Link> &gt; <Link href="/past-papers" className="hover:underline">Past Papers</Link> &gt; <span className="font-semibold">Matric</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Matric Past Papers (9th & 10th Class)</h1>
        <p className="text-gray-600 text-lg max-w-3xl">
          Access a comprehensive collection of past examination papers for Matric (9th and 10th grade) from all major 
          Pakistani boards. Practising with real board papers is the most effective way to prepare for your annual exams.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Browse by Subject</h2>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {subjects.map((subject) => (
            <Link key={subject.slug} href={`/past-papers/matric/${subject.slug}`} className="bg-white rounded-xl shadow p-6 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{subject.name}</h2>
              <p className="text-gray-500 text-sm flex-1 mb-4 leading-relaxed">{subject.desc}</p>
              <span className="text-emerald-600 text-sm font-medium">Download Papers →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12 bg-white rounded-2xl shadow p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Available Boards</h2>
        <p className="text-gray-600 mb-6 text-sm">Our collection includes past papers from the following boards, covering years 2015 to 2024 for both 9th and 10th class annual and supplementary examinations:</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {boards.map((board, i) => (
            <div key={i} className="bg-emerald-50 text-emerald-800 rounded-lg px-4 py-2 text-sm font-medium text-center">{board}</div>
          ))}
        </div>
      </section>

      <section className="mb-12 bg-emerald-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">How to Use Matric Past Papers for Maximum Results</h2>
        <div className="space-y-4">
          {[
            { title: "Start 3 Months Before Exams", desc: "Begin working with past papers at least three months before your board exams. This gives you time to identify weak areas and revisit them thoroughly without last-minute panic." },
            { title: "Solve in Exam Conditions", desc: "Sit at a desk, set the correct time limit (typically 2–3 hours for full papers), and attempt the paper without referring to your textbook. This builds real exam stamina." },
            { title: "Identify Repeating Questions", desc: "Certain questions, especially in Urdu, Biology, and Pakistan Studies, repeat across years with minor variations. Note these and make sure you have complete, polished answers ready." },
            { title: "Get Your Answers Checked", desc: "Ask your teacher to review your answers, especially long questions and essays. Self-marking can be inaccurate. Professional feedback identifies presentation issues that cost marks even when your knowledge is correct." },
          ].map((tip, i) => (
            <div key={i} className="bg-white rounded-xl p-5">
              <h3 className="font-semibold text-gray-800 mb-1">{tip.title}</h3>
              <p className="text-gray-600 text-sm">{tip.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Related Resources</h2>
        <div className="flex flex-wrap gap-3">
          {[{label:"Matric Books",href:"/books/matric"},{label:"Inter Past Papers",href:"/past-papers/inter"},{label:"CSS Past Papers",href:"/past-papers/css"},{label:"MDCAT Prep",href:"/prep/mdcat"},{label:"Scholarships",href:"/scholarships"}].map(l => (
            <Link key={l.href} href={l.href} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-50 hover:text-emerald-700 transition">{l.label}</Link>
          ))}
        </div>
      </section>
    </div>
  );
}
