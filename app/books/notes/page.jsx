import Link from "next/link";

export const metadata = {
  title: "Free Study Notes Pakistan | Matric, Inter, CSS, PPSC, MDCAT | Taleem4u",
  description:
    "Download free study notes for Matric, Intermediate, CSS, PPSC, and MDCAT. Includes short notes, key points, MCQ banks, formula sheets and revision cards for all subjects.",
  keywords: "study notes pakistan, matric notes, FSc notes, CSS notes, PPSC notes, MDCAT notes, free notes download",
  alternates: { canonical: "https://taleem4u.com/books/notes" },
};

export default function NotesPage() {
  const noteCategories = [
    {
      title: "Matric Notes (9th & 10th)",
      icon: "📘",
      color: "border-blue-500",
      link: "/books/matric",
      subjects: [
        { name: "Physics Notes", detail: "Chapter-wise short notes with formulas, definitions, and key diagrams for 9th and 10th." },
        { name: "Chemistry Notes", detail: "Reaction summaries, organic chemistry shortcuts, periodic table notes, and equation balancing tips." },
        { name: "Biology Notes", detail: "Diagram-rich notes covering cell biology, kingdoms, reproduction, and ecology for board exams." },
        { name: "Mathematics Notes", detail: "Formula sheets, solved examples, and step-by-step worked problems for all Matric Math topics." },
        { name: "English Notes", detail: "Grammar rules, essay structures, letter formats, comprehension tips, and vocabulary lists." },
        { name: "Pakistan Studies Notes", detail: "Timeline of important events, maps, geography facts, and economy notes for the exam." },
      ],
    },
    {
      title: "Intermediate Notes (FSc / FA / ICS)",
      icon: "📗",
      color: "border-green-500",
      link: "/books/inter",
      subjects: [
        { name: "Biology (FSc Part I & II)", detail: "Concise chapter notes with key definitions, diagrams, and frequently asked long questions." },
        { name: "Chemistry (FSc Part I & II)", detail: "Organic reaction mechanisms, thermodynamics notes, and inorganic chemistry key points." },
        { name: "Physics (FSc Part I & II)", detail: "Formula derivations, solved numericals, and concept-clear short notes for all chapters." },
        { name: "Mathematics (FSc)", detail: "Integration and differentiation worked examples, trigonometry identities, and algebra notes." },
        { name: "Computer Science (ICS)", detail: "Programming concepts, flowcharts, data structures, and Boolean algebra revision notes." },
        { name: "Economics (I.Com / FA)", detail: "Micro and macro economics key terms, graphs, and exam-format answer structures." },
      ],
    },
    {
      title: "CSS / PMS Exam Notes",
      icon: "🏛️",
      color: "border-gray-700",
      link: "/past-papers/css",
      subjects: [
        { name: "Essay Writing Guide", detail: "Templates, argument structures, topic word banks, and sample essays for 100-mark CSS essay paper." },
        { name: "Current Affairs Digest", detail: "Monthly summaries of national and international events, economic indicators, and political developments." },
        { name: "Pakistan Affairs Notes", detail: "Constitutional articles, historical events, CPEC, foreign policy, and governance structure notes." },
        { name: "International Relations Notes", detail: "Major global organisations, treaties, IR theories, and regional relations concise notes." },
        { name: "General Science Notes", detail: "Everyday science key concepts, inventions, environment, and technology short notes for CSS." },
        { name: "Islamiyat Notes", detail: "Quranic verses, Hadith references, Islamic history timeline, and key Islamic jurisprudence notes." },
      ],
    },
    {
      title: "PPSC / NTS Exam Notes",
      icon: "📋",
      color: "border-emerald-500",
      link: "/prep/ppsc",
      subjects: [
        { name: "General Knowledge MCQs", detail: "5,000+ GK MCQs covering world geography, history, science, sports, and famous personalities." },
        { name: "Pakistan Studies MCQs", detail: "Constitution articles, Pakistan Movement, rivers & dams, CPEC, and national symbols MCQs." },
        { name: "English Grammar MCQs", detail: "Tenses, synonyms/antonyms, prepositions, sentence correction — 2,000+ practice MCQs." },
        { name: "Islamiyat MCQs", detail: "Pillars of Islam, Hadith, Quran facts, Islamic history — all common PPSC Islamic Studies questions." },
        { name: "Math MCQs", detail: "Percentage, ratio, profit & loss, fractions, and basic algebra questions for all PSC tests." },
        { name: "Computer Basics Notes", detail: "MS Office, internet fundamentals, hardware/software concepts for administrative posts." },
      ],
    },
    {
      title: "MDCAT Preparation Notes",
      icon: "🩺",
      color: "border-red-500",
      link: "/prep/mdcat",
      subjects: [
        { name: "Biology Key Points", detail: "One-page chapter summaries for all 15 MDCAT Biology chapters with high-yield facts." },
        { name: "Chemistry Formula Sheets", detail: "Organic reactions, equations, and key formulas for all MDCAT Chemistry chapters." },
        { name: "Physics Formulas & Numericals", detail: "All formulas, unit conversions, and 200 solved numerical problems for MDCAT Physics." },
        { name: "Biology Diagram Notes", detail: "Labelled diagrams for mitosis/meiosis, digestive system, nervous system, and more." },
        { name: "Chemistry Revision Cards", detail: "Quick-revision flashcard-style notes for each Chemistry chapter for rapid review." },
        { name: "Physics MCQ Bank", detail: "1,500+ Physics MCQs with explanations arranged by chapter for targeted practice." },
      ],
    },
    {
      title: "General Knowledge Notes",
      icon: "🌍",
      color: "border-orange-500",
      link: "/guides",
      subjects: [
        { name: "World Geography Notes", detail: "Countries, capitals, currencies, major rivers, mountains, and oceans — concise study sheets." },
        { name: "Pakistan Geography", detail: "Rivers, dams, provinces, districts, CPEC route, major crops, and industrial zones notes." },
        { name: "Science & Technology", detail: "Major inventions, Nobel Prize winners, space agencies, and scientific discoveries summary notes." },
        { name: "Current Affairs Summary", detail: "Six-monthly summaries of Pakistan and world current affairs for all competitive exams." },
        { name: "Sports & Awards", detail: "Olympic records, cricket world cups, tennis grands, Nobel, Oscar, and Sitara-e-Imtiaz notes." },
        { name: "International Organisations", detail: "UN agencies, OIC, SAARC, ASEAN, NATO, EU — members, headquarters, purpose notes." },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="text-sm text-purple-200 mb-4">
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/books" className="hover:text-white">Books</Link> / <span>Study Notes</span>
          </nav>
          <h1 className="text-5xl font-bold mb-4">Free Study Notes</h1>
          <p className="text-purple-100 text-xl max-w-3xl">
            Download concise, exam-focused notes for Matric, Intermediate, CSS, PPSC, and MDCAT. Short notes, MCQ banks, formula sheets, and revision cards — all free.
          </p>
          <div className="mt-8 flex gap-4 flex-wrap text-sm">
            <span className="bg-white/20 px-4 py-2 rounded-full">50,000+ Students Use These</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">All Major Exams</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">PDF Download</span>
          </div>
        </div>
      </section>

      {/* Why Notes Help */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "⚡", title: "Save Revision Time", desc: "Concise notes cut revision time by 60%. Instead of re-reading full textbook chapters, review key points and formulas in minutes." },
              { icon: "🎯", title: "Exam-Focused Content", desc: "Our notes are structured around what actually gets tested — frequently asked questions, important definitions, and high-yield diagrams." },
              { icon: "📱", title: "Study Anywhere", desc: "PDF notes on your phone mean you can revise during commute, free periods, or any spare moment — not just when textbooks are available." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notes by Category */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse Notes by Exam / Level</h2>
        <p className="text-gray-600 mb-10">Select your exam category to find all relevant study notes, MCQ banks, and revision materials.</p>
        <div className="space-y-10">
          {noteCategories.map((cat) => (
            <div key={cat.title} className={`border-l-4 ${cat.color} pl-6`}>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl">{cat.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{cat.title}</h3>
                  <Link href={cat.link} className="text-sm text-purple-600 hover:underline">View all resources →</Link>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.subjects.map((s) => (
                  <div key={s.name} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition cursor-pointer group">
                    <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-purple-700 transition">{s.name}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed mb-3">{s.detail}</p>
                    <button className="text-xs bg-purple-600 text-white px-3 py-1.5 rounded-full hover:bg-purple-700 transition">Download PDF</button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tips for Using Notes */}
      <section className="bg-purple-50 py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How to Make the Most of Study Notes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { t: "Don't Just Read — Write", b: "Passive reading of notes has limited retention. After reading a page of notes, close them and write down everything you remember. This active recall dramatically improves memory." },
              { t: "Annotate as You Study", b: "Add your own examples, memory tricks, and connections to downloaded notes. Personalised notes are far more effective than generic ones." },
              { t: "Use Notes for Final Revision Only", b: "Notes should be used for quick review after you have studied the full chapter from the textbook. Don't skip the textbook — notes can't replace deep understanding." },
              { t: "Pair Notes with Past Papers", b: "After reviewing chapter notes, immediately solve past paper questions from that chapter. This tests whether your knowledge is exam-ready, not just familiar." },
            ].map((tip, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-purple-200 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{tip.t}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{tip.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-14 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Complement Notes with Past Papers</h2>
          <p className="text-purple-100 mb-8">Notes build your knowledge. Past papers test it. Use both together for the best results.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/past-papers" className="bg-white text-purple-700 px-7 py-3 rounded-full font-semibold hover:bg-gray-100 transition">Past Papers</Link>
            <Link href="/books" className="border-2 border-white text-white px-7 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-700 transition">Free Textbooks</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
