import Link from "next/link";

export const metadata = {
  title: "Intermediate Past Papers 2015–2023 | FSc Pre-Medical, Pre-Engineering, FA, ICS | Taleem4u",
  description:
    "Free Intermediate past papers for FSc Pre-Medical, Pre-Engineering, FA, ICS, I.Com. All subjects, all BISE boards, 2015–2023. Download PDFs with answer keys.",
  keywords: "intermediate past papers, FSc past papers, FA past papers, ICS past papers, 11th 12th class papers",
  alternates: { canonical: "https://taleem4u.com/past-papers/inter" },
};

export default function InterPastPapers() {
  const groups = [
    {
      name: "FSc Pre-Medical",
      color: "emerald",
      desc: "For students aspiring to enter medical or biological sciences. Prepare for MDCAT with these papers.",
      subjects: ["Biology", "Chemistry", "Physics", "English (Compulsory)", "Urdu (Compulsory)", "Islamiyat", "Pakistan Studies"],
    },
    {
      name: "FSc Pre-Engineering",
      color: "blue",
      desc: "Ideal for students targeting engineering universities. Aligned with ECAT and NET preparation.",
      subjects: ["Mathematics", "Chemistry", "Physics", "English (Compulsory)", "Urdu (Compulsory)", "Islamiyat", "Pakistan Studies"],
    },
    {
      name: "FA (Faculty of Arts)",
      color: "purple",
      desc: "For humanities and arts students. Includes language, social science, and elective subjects.",
      subjects: ["Urdu", "English", "Civics", "Education", "History", "Economics", "Islamic Studies", "Psychology"],
    },
    {
      name: "ICS (Intermediate in Computer Science)",
      color: "indigo",
      desc: "For students pursuing computer science and related technology fields.",
      subjects: ["Computer Science", "Mathematics", "Physics", "Statistics", "English", "Urdu"],
    },
    {
      name: "I.Com (Intermediate in Commerce)",
      color: "amber",
      desc: "Business and commerce stream. Ideal for students aiming for BBA, CA, ACCA, or commerce degrees.",
      subjects: ["Commerce", "Economics", "Accounting", "Business Mathematics", "English", "Urdu", "Banking"],
    },
  ];

  const importantTopics = {
    "FSc Pre-Medical": ["Cell Biology & Genetics", "Organic Chemistry Reactions", "Newton's Laws & Waves", "Plant Kingdom & Ecology"],
    "FSc Pre-Engineering": ["Integration & Differentiation", "Organic Chemistry", "Circular Motion & Waves", "Algebra & Complex Numbers"],
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-emerald-700 to-teal-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="text-sm text-emerald-300 mb-4">
            <Link href="/">Home</Link> / <Link href="/past-papers">Past Papers</Link> / <span>Intermediate</span>
          </nav>
          <h1 className="text-4xl font-bold mb-3">Intermediate Past Papers — 11th & 12th</h1>
          <p className="text-emerald-100 text-lg max-w-3xl">Free FSc, FA, ICS, and I.Com past papers from all BISE boards. Download PDFs for 2015–2023 with answer keys.</p>
        </div>
      </section>

      <div className="bg-emerald-50 border-b border-emerald-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap gap-6 text-sm text-emerald-800">
          <span>📚 <strong>Classes:</strong> 11th & 12th</span>
          <span>🎓 <strong>Groups:</strong> FSc, FA, ICS, I.Com</span>
          <span>🏫 <strong>Boards:</strong> All BISE</span>
          <span>📅 <strong>Years:</strong> 2015–2023</span>
          <span>💰 <strong>Cost:</strong> Free</span>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Study Group</h2>
        <p className="text-gray-600 mb-10">Select your Intermediate group to find subject-specific past papers for Part I (11th) and Part II (12th).</p>
        <div className="space-y-6">
          {groups.map((g, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{g.name}</h3>
              <p className="text-gray-600 mb-4 text-sm">{g.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {g.subjects.map((s) => (
                  <span key={s} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-emerald-100 hover:text-emerald-700 cursor-pointer transition">{s}</span>
                ))}
              </div>
              <div className="flex gap-3">
                <button className="text-sm bg-emerald-700 text-white px-5 py-2 rounded-lg hover:bg-emerald-800 transition">Part I (11th) Papers</button>
                <button className="text-sm bg-teal-700 text-white px-5 py-2 rounded-lg hover:bg-teal-800 transition">Part II (12th) Papers</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Frequently Tested Topics */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Tested Topics (from Past Papers Analysis)</h2>
          <p className="text-gray-600 mb-8">After analyzing 10 years of past papers, these are the topics that appear almost every year:</p>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(importantTopics).map(([group, topics]) => (
              <div key={group} className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{group}</h3>
                <ul className="space-y-2">
                  {topics.map((t) => (
                    <li key={t} className="flex items-center gap-2 text-gray-700 text-sm">
                      <span className="text-emerald-600 font-bold">★</span> {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Strategy */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Intermediate Exam Strategy Using Past Papers</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "3 Months Before Exams", items: ["Solve one past paper per subject per week", "Identify weak chapters from wrong answers", "Focus on completing the syllabus"] },
            { title: "1 Month Before Exams", items: ["Solve daily past papers under timed conditions", "Revise high-frequency topics daily", "Practice long question writing speed"] },
            { title: "1 Week Before Exams", items: ["Revise all formulas, definitions, diagrams", "Solve only short questions from past papers", "Review marking schemes for ideal answers"] },
          ].map((phase, i) => (
            <div key={i} className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">{phase.title}</h3>
              <ul className="space-y-2">
                {phase.items.map((item) => (
                  <li key={item} className="text-gray-700 text-sm flex gap-2"><span className="text-emerald-600">✓</span>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-emerald-700 to-teal-800 text-white py-14 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Preparing for MDCAT or Engineering Entry Tests?</h2>
          <p className="text-emerald-100 mb-8">Get specialized preparation material beyond past papers — including guides, notes, and practice tests.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/prep/mdcat" className="bg-white text-emerald-700 px-7 py-3 rounded-full font-semibold hover:bg-gray-100 transition">MDCAT Prep</Link>
            <Link href="/guides" className="border-2 border-white text-white px-7 py-3 rounded-full font-semibold hover:bg-white hover:text-emerald-700 transition">Study Guides</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
