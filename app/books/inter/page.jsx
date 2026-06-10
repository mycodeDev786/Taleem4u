import Link from "next/link";

export const metadata = {
  title: "Intermediate Books | FSc, FA, ICS, I.Com Textbooks & Notes | Taleem4u",
  description:
    "Free PDF textbooks and study notes for Intermediate — FSc Pre-Medical, Pre-Engineering, FA, ICS, and I.Com. Part I (11th) and Part II (12th) for all boards.",
  keywords: "intermediate books, FSc books, FA books, ICS books, I.Com books, 11th 12th class books PDF",
  alternates: { canonical: "https://taleem4u.com/books/inter" },
};

export default function InterBooks() {
  const groups = [
    {
      name: "FSc Pre-Medical", icon: "🩺", color: "border-green-600",
      desc: "For students preparing for MBBS, BDS, or biological sciences degrees. Covers Biology, Chemistry, and Physics at the FSc level aligned with PMC's MDCAT syllabus.",
      subjects: [
        { name: "Biology Part I & II", detail: "Kingdom classification, cell biology, genetics, reproduction, and ecology." },
        { name: "Chemistry Part I & II", detail: "Atomic structure, organic chemistry, thermodynamics, and electrochemistry." },
        { name: "Physics Part I & II", detail: "Mechanics, waves, optics, thermodynamics, and modern physics." },
        { name: "English (Compulsory)", detail: "Prose, poetry, grammar, and essay writing for FSc students." },
        { name: "Urdu (Compulsory)", detail: "Urdu literature, grammar, and letter writing for board exams." },
      ],
    },
    {
      name: "FSc Pre-Engineering", icon: "⚙️", color: "border-blue-600",
      desc: "For students targeting engineering universities like NUST, UET, and FAST. Mathematics replaces Biology and is tested in ECAT and NET entry tests.",
      subjects: [
        { name: "Mathematics Part I & II", detail: "Calculus, algebra, trigonometry, statistics, and vectors." },
        { name: "Chemistry Part I & II", detail: "Same as Pre-Medical — full organic and inorganic chemistry." },
        { name: "Physics Part I & II", detail: "Same as Pre-Medical — with emphasis on quantitative problems." },
        { name: "English (Compulsory)", detail: "Language skills required for university-level English." },
        { name: "Urdu (Compulsory)", detail: "Urdu language and literature paper." },
      ],
    },
    {
      name: "FA (Faculty of Arts)", icon: "🎨", color: "border-purple-600",
      desc: "Humanities stream for students interested in social sciences, languages, law, and arts. Opens pathways to BA, LLB, journalism, and social work degrees.",
      subjects: [
        { name: "English (Compulsory + Elective)", detail: "Advanced English language and literature for arts students." },
        { name: "Urdu (Compulsory + Elective)", detail: "Urdu literature, poetry, and language skills." },
        { name: "Civics", detail: "Government structure, constitution, and civic rights." },
        { name: "History", detail: "History of Pakistan, India, and the Muslim world." },
        { name: "Islamic Studies", detail: "Quran, Hadith, Islamic history, and jurisprudence." },
        { name: "Psychology / Sociology", detail: "Optional subjects available in most boards." },
      ],
    },
    {
      name: "ICS (Computer Science)", icon: "💻", color: "border-indigo-600",
      desc: "For students pursuing degrees in Computer Science, IT, Software Engineering, or related technology fields at university.",
      subjects: [
        { name: "Computer Science Part I & II", detail: "Programming, algorithms, data structures, networking, and databases." },
        { name: "Mathematics Part I & II", detail: "Algebra, calculus, statistics, and Boolean algebra for CS students." },
        { name: "Physics Part I & II", detail: "Physics for ICS — same curriculum as FSc Pre-Engineering." },
        { name: "English (Compulsory)", detail: "Language proficiency required for university and professional work." },
      ],
    },
    {
      name: "I.Com (Commerce)", icon: "💰", color: "border-amber-600",
      desc: "Business and commerce stream for students aiming for BBA, B.Com, CA, ACCA, CIMA, or MBA pathways in Pakistan or abroad.",
      subjects: [
        { name: "Commerce", detail: "Business organisation, trade, and commercial activities." },
        { name: "Accounting", detail: "Bookkeeping, ledgers, trial balance, and financial statements." },
        { name: "Economics", detail: "Micro and macroeconomics principles, demand-supply, and national income." },
        { name: "Business Mathematics", detail: "Financial calculations, interest, percentages for business." },
        { name: "Banking", detail: "Banking operations, financial institutions, and monetary policy basics." },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-green-700 to-teal-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="text-sm text-green-200 mb-4">
            <Link href="/">Home</Link> / <Link href="/books">Books</Link> / <span>Intermediate</span>
          </nav>
          <h1 className="text-5xl font-bold mb-4">Intermediate Books — 11th & 12th</h1>
          <p className="text-green-100 text-xl max-w-3xl">Free PDF textbooks and study notes for FSc Pre-Medical, Pre-Engineering, FA, ICS, and I.Com. Part I and Part II for all major Pakistani boards.</p>
          <div className="mt-8 flex gap-4 flex-wrap text-sm">
            <span className="bg-white/20 px-4 py-2 rounded-full">5 Study Groups</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Part I & Part II</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">All BISE Boards</span>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Study Group</h2>
        <p className="text-gray-600 mb-10">Each Intermediate group has its own set of compulsory and optional subjects. Select your group to find all relevant textbooks and notes.</p>
        <div className="space-y-8">
          {groups.map((g) => (
            <div key={g.name} className={`bg-white border-l-4 ${g.color} rounded-lg p-6 shadow-sm hover:shadow-lg transition`}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{g.icon}</span>
                <h3 className="text-2xl font-bold text-gray-900">{g.name}</h3>
              </div>
              <p className="text-gray-600 text-sm mb-5 leading-relaxed">{g.desc}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {g.subjects.map((s) => (
                  <div key={s.name} className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-sm transition cursor-pointer">
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">{s.name}</h4>
                    <p className="text-xs text-gray-600 mb-3">{s.detail}</p>
                    <div className="flex gap-2">
                      <button className="text-xs bg-green-700 text-white px-3 py-1 rounded-full hover:bg-green-800 transition">Part I</button>
                      <button className="text-xs bg-teal-700 text-white px-3 py-1 rounded-full hover:bg-teal-800 transition">Part II</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How Intermediate Results Affect Your Future</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "University Admission Merit", desc: "Intermediate marks are the single biggest factor in university merit lists — typically 50–60% of total merit calculation. Every percentage point matters enormously." },
              { title: "Scholarship Eligibility", desc: "Most scholarships (HEC, Fulbright, DAAD) require minimum 60–70% in Intermediate. High scorers qualify for more and better opportunities." },
              { title: "Entry Test Advantage", desc: "Students with strong Intermediate concepts consistently perform better in MDCAT, ECAT, and NET because entry tests are directly based on the FSc curriculum." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-green-700 to-teal-700 text-white py-14 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Preparing for MDCAT or Engineering?</h2>
          <p className="text-green-100 mb-8">Access dedicated MDCAT and ECAT preparation resources built directly on the Intermediate syllabus.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/prep/mdcat" className="bg-white text-green-700 px-7 py-3 rounded-full font-semibold hover:bg-gray-100 transition">MDCAT Prep</Link>
            <Link href="/past-papers/inter" className="border-2 border-white text-white px-7 py-3 rounded-full font-semibold hover:bg-white hover:text-green-700 transition">Inter Past Papers</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
