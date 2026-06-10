import Link from "next/link";

export const metadata = {
  title: "MDCAT Preparation 2024 | Full Guide, Notes, Past Papers & Practice Tests | Taleem4u",
  description:
    "Complete MDCAT preparation resources — syllabus, study notes, past papers, practice tests, MCQ banks, and expert strategies to score 150+ in the Pakistan Medical Commission test.",
  keywords: "MDCAT preparation, MDCAT syllabus, MDCAT notes, MDCAT practice, PMC exam 2024",
  alternates: { canonical: "https://taleem4u.com/prep/mdcat" },
};

export default function MDCATPrep() {
  const syllabus = [
    { subject: "Biology", chapters: 15, weight: "40%", marks: 88, keyTopics: ["Cell Biology", "Bioenergetics", "Genetics", "Reproduction", "Homeostasis", "Ecology", "Evolution", "Kingdom Animalia", "Kingdom Plantae"] },
    { subject: "Chemistry", chapters: 17, weight: "30%", marks: 66, keyTopics: ["Atomic Structure", "Chemical Bonding", "Thermodynamics", "Electrochemistry", "Equilibrium", "Organic Reactions", "Hydrocarbons", "Polymers"] },
    { subject: "Physics", chapters: 11, weight: "30%", marks: 66, keyTopics: ["Measurements", "Kinematics", "Work & Energy", "Circular Motion", "Waves", "Thermodynamics", "Optics", "Electrostatics", "Magnetism"] },
  ];

  const resources = [
    { title: "MDCAT Past Papers (2019–2023)", type: "Past Papers", desc: "Solve 5 years of actual MDCAT papers to understand real exam patterns and difficulty level.", link: "/past-papers/mdcat" },
    { title: "Biology Chapter Notes", type: "Study Notes", desc: "Concise, exam-focused notes for all 15 MDCAT Biology chapters with diagrams and definitions.", link: "/books/notes" },
    { title: "Chemistry Formula Sheets", type: "Study Notes", desc: "One-page formula and reaction sheets for all MDCAT Chemistry chapters.", link: "/books/notes" },
    { title: "Physics Problem Sets", type: "Practice", desc: "Solved numerical problems for all Physics chapters with step-by-step solutions.", link: "/books/notes" },
    { title: "MDCAT Preparation Guide", type: "Guide", desc: "Our comprehensive 12-month MDCAT preparation strategy with weekly study plans.", link: "/guides/mdcat-preparation-guide" },
    { title: "Subject-wise MCQ Banks", type: "Practice", desc: "5,000+ topic-wise MCQs with explanations for Biology, Chemistry, and Physics.", link: "#" },
  ];

  const schedule = [
    { period: "6 Months Before", focus: "Biology & Chemistry Concepts", daily: "4–5 hours", goal: "Complete syllabus with understanding" },
    { period: "4 Months Before", focus: "Physics + Revision", daily: "5–6 hours", goal: "All subjects covered once" },
    { period: "2 Months Before", focus: "Mock Tests & MCQ Practice", daily: "6–7 hours", goal: "200+ MCQs daily, 2 full mocks/week" },
    { period: "2 Weeks Before", focus: "Rapid Revision + Key Points", daily: "5–6 hours", goal: "Formulas, diagrams, key definitions" },
    { period: "Last 3 Days", focus: "Light Revision + Rest", daily: "3–4 hours", goal: "Stay calm, revise notes, sleep well" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-red-700 to-rose-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="text-sm text-red-200 mb-4">
            <Link href="/">Home</Link> / <span>MDCAT Preparation</span>
          </nav>
          <h1 className="text-5xl font-bold mb-4">MDCAT Preparation Hub</h1>
          <p className="text-red-100 text-xl max-w-3xl">
            Everything you need to crack MDCAT 2024 — syllabus breakdown, past papers, notes, MCQ banks, and a proven preparation strategy.
          </p>
          <div className="mt-8 flex gap-4 flex-wrap text-sm">
            <span className="bg-white/20 px-4 py-2 rounded-full">220 Questions</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">3.5 Hours</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Biology 40% | Chemistry 30% | Physics 30%</span>
          </div>
        </div>
      </section>

      {/* Syllabus */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">MDCAT 2024 Syllabus Breakdown</h2>
        <p className="text-gray-600 mb-10">The MDCAT is based on the FSc (11th & 12th class) curriculum set by the Punjab Curriculum & Textbook Board. Here is a complete breakdown:</p>
        <div className="space-y-6">
          {syllabus.map((s, i) => (
            <div key={i} className={`bg-white border rounded-lg p-6 hover:shadow-md transition ${i === 0 ? "border-green-400" : i === 1 ? "border-blue-400" : "border-purple-400"}`}>
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{s.subject}</h3>
                <div className="flex gap-3 text-sm">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Chapters: {s.chapters}</span>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full font-semibold">Weight: {s.weight} ({s.marks} MCQs)</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-2">Key Topics:</p>
                <div className="flex flex-wrap gap-2">
                  {s.keyTopics.map((t) => (
                    <span key={t} className="text-xs bg-gray-50 border border-gray-200 text-gray-700 px-2 py-1 rounded">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Study Schedule */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Recommended Study Schedule</h2>
          <p className="text-gray-600 mb-10">This 6-month schedule is designed for students starting fresh. Adjust based on your starting point.</p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow border-collapse">
              <thead>
                <tr className="bg-red-700 text-white">
                  <th className="px-5 py-3 text-left">Time Period</th>
                  <th className="px-5 py-3 text-left">Focus Area</th>
                  <th className="px-5 py-3 text-left">Daily Hours</th>
                  <th className="px-5 py-3 text-left">Goal</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3 font-semibold text-gray-800">{row.period}</td>
                    <td className="px-5 py-3 text-gray-700">{row.focus}</td>
                    <td className="px-5 py-3 text-red-700 font-semibold">{row.daily}</td>
                    <td className="px-5 py-3 text-gray-600 text-sm">{row.goal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Free MDCAT Resources</h2>
        <p className="text-gray-600 mb-10">Access all these free preparation resources — no payment or registration required.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {resources.map((r, i) => (
            <Link key={i} href={r.link} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition group">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-700 transition">{r.title}</h3>
                <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full flex-shrink-0 ml-2">{r.type}</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p>
              <p className="text-red-600 text-sm mt-3 font-semibold">Access Free →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Tips */}
      <section className="bg-red-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Top MDCAT Tips from High Scorers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { tip: "Solve at least 300 MCQs daily in the last 2 months. Speed matters as much as knowledge." },
              { tip: "Biology requires memorization — use active recall and spaced repetition flashcards." },
              { tip: "Chemistry organic reactions must be understood mechanistically, not memorized blindly." },
              { tip: "Physics MCQs often test conceptual understanding, not just numerical ability." },
              { tip: "Negative marking is real. Skip questions you're genuinely unsure about — don't guess randomly." },
              { tip: "Get 8 hours of sleep in the week before the exam. Fatigue destroys performance." },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 bg-white rounded-lg p-5 shadow-sm border border-red-200">
                <span className="text-red-600 text-xl flex-shrink-0">💡</span>
                <p className="text-gray-800 text-sm leading-relaxed">{item.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-red-700 to-rose-600 text-white py-14 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Read Our Full MDCAT Guide</h2>
          <p className="text-red-100 mb-8">Get the complete 12-month study plan, subject-wise strategies, and expert tips in our detailed MDCAT preparation guide.</p>
          <Link href="/guides/mdcat-preparation-guide" className="bg-white text-red-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">Read Full Guide →</Link>
        </div>
      </section>
    </div>
  );
}
