import Link from "next/link";

export const metadata = {
  title: "CSS Past Papers 2013–2023 | Compulsory & Optional Subjects | FPSC | Taleem4u",
  description:
    "Download CSS past papers for all compulsory and optional subjects from FPSC. Practice with 10+ years of Central Superior Services papers to pass one of Pakistan's toughest exams.",
  keywords: "CSS past papers, FPSC CSS papers, CSS exam preparation, CSS compulsory papers, CSS optional papers",
  alternates: { canonical: "https://taleem4u.com/past-papers/css" },
};

export default function CSSPastPapers() {
  const compulsory = [
    { name: "English Essay", marks: 100 },
    { name: "English Precis & Composition", marks: 100 },
    { name: "General Science & Ability", marks: 100 },
    { name: "Current Affairs", marks: 100 },
    { name: "Pakistan Affairs", marks: 100 },
    { name: "Islamiat / Comparative Religion", marks: 100 },
  ];

  const optional = [
    "Political Science", "International Relations", "Public Administration", "Business Administration",
    "Economics", "Accounting & Auditing", "Law", "Constitutional Law",
    "History of Pakistan & India", "History of Europe", "Geography", "Sociology",
    "Psychology", "Philosophy", "English Literature", "Urdu Literature",
    "Arabic", "Persian", "Computer Science", "Physics", "Chemistry",
    "Agriculture", "Forestry", "Botany", "Zoology", "Environmental Science",
  ];

  const facts = [
    { label: "Pass Rate", value: "2–3%", note: "CSS is one of the hardest exams in Pakistan" },
    { label: "Total Marks", value: "1200", note: "600 compulsory + 600 optional" },
    { label: "Passing Marks", value: "600+", note: "50% overall + 33% per subject minimum" },
    { label: "Age Limit", value: "21–30 years", note: "Relaxation for minorities and women" },
    { label: "Education", value: "16 years", note: "Bachelor's degree minimum" },
    { label: "Attempts", value: "3 attempts", note: "Relaxed for women and special categories" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/">Home</Link> / <Link href="/past-papers">Past Papers</Link> / <span>CSS</span>
          </nav>
          <h1 className="text-4xl font-bold mb-3">CSS Past Papers — FPSC</h1>
          <p className="text-gray-300 text-lg max-w-3xl">Central Superior Services (CSS) past papers from 2013 to 2023. Download compulsory and optional subject papers to prepare for Pakistan's most prestigious civil service exam.</p>
        </div>
      </section>

      {/* CSS Facts */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">CSS Exam — Key Facts</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {facts.map((f, i) => (
              <div key={i} className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                <div className="text-2xl font-bold text-gray-800 mb-1">{f.value}</div>
                <div className="font-semibold text-gray-700 text-sm mb-1">{f.label}</div>
                <div className="text-xs text-gray-500">{f.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compulsory Papers */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Compulsory Subject Papers</h2>
        <p className="text-gray-600 mb-8">All CSS candidates must appear in 6 compulsory subjects worth 600 marks. These papers are available for 2013–2023.</p>
        <div className="grid md:grid-cols-2 gap-4">
          {compulsory.map((s) => (
            <div key={s.name} className="bg-white border border-gray-200 rounded-lg p-5 flex items-center justify-between hover:shadow-md transition">
              <div>
                <h3 className="font-semibold text-gray-900">{s.name}</h3>
                <p className="text-sm text-gray-500">{s.marks} marks • 10 years papers</p>
              </div>
              <button className="bg-gray-800 text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-900 transition">View Papers</button>
            </div>
          ))}
        </div>
      </section>

      {/* Optional Papers */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Optional Subject Papers</h2>
          <p className="text-gray-600 mb-8">CSS candidates choose 6 optional subjects (600 marks). Browse past papers for all available optional subjects.</p>
          <div className="flex flex-wrap gap-3">
            {optional.map((s) => (
              <button key={s} className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-800 hover:border-gray-700 hover:bg-gray-800 hover:text-white transition">{s}</button>
            ))}
          </div>
        </div>
      </section>

      {/* CSS Prep Tips */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Use CSS Past Papers Effectively</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { t: "Start with 5-Year Analysis", b: "Before attempting papers, analyze 5 years for each subject. Note which topics repeat, the style of questions (analytical vs. factual), and the expected answer length." },
            { t: "Practice Essay Writing Rigorously", b: "CSS English Essay is where most candidates lose significant marks. Practice writing one 1500-word essay weekly under 3-hour conditions. Have a teacher review it." },
            { t: "Follow the Marking Scheme", b: "CSS answers are marked differently from other exams. Read FPSC guidelines on how marks are awarded. Structured answers with headings, points, and examples score best." },
            { t: "Choose Optionals Strategically", b: "Choose optional subjects you genuinely know well, not what you think sounds impressive. IR, Political Science, and Public Administration are popular high-scoring choices." },
          ].map((tip, i) => (
            <div key={i} className="bg-white border-l-4 border-gray-800 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{tip.t}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{tip.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-14 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Also Explore PPSC & Government Job Prep</h2>
          <p className="text-gray-300 mb-8">Preparing for provincial or federal government jobs beyond CSS? We have you covered.</p>
          <Link href="/jobs/government" className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">Government Jobs →</Link>
        </div>
      </section>
    </div>
  );
}
