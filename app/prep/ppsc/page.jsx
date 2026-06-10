import Link from "next/link";

export const metadata = {
  title: "PPSC Exam Preparation 2024 | Syllabus, Past Papers, MCQs & Study Guide | Taleem4u",
  description:
    "Complete PPSC preparation guide with syllabus, past papers, MCQ banks, and expert strategies. Prepare for Punjab Public Service Commission exams — Lecturer, Inspector, ASI, and more.",
  keywords: "PPSC preparation, PPSC syllabus, PPSC MCQs, PPSC past papers, Punjab public service commission",
  alternates: { canonical: "https://taleem4u.com/prep/ppsc" },
};

export default function PPSCPrep() {
  const posts = [
    { title: "Lecturer (Various Subjects)", scale: "BPS-17", seats: "3,000+", test: "Subject + General Knowledge", eligibility: "Masters Degree" },
    { title: "Sub-Inspector (Police)", scale: "BPS-14", seats: "1,000+", test: "Physical + Written", eligibility: "Bachelor's Degree" },
    { title: "Assistant Sub-Inspector", scale: "BPS-11", seats: "800+", test: "Written Test", eligibility: "FA/FSc" },
    { title: "Assistant (Punjab Secretariat)", scale: "BPS-14", seats: "500+", test: "Computer + Written", eligibility: "Bachelor's Degree" },
    { title: "Tax Officer", scale: "BPS-14", seats: "400+", test: "Written + Interview", eligibility: "Bachelor's (Commerce)" },
    { title: "Junior Clerk", scale: "BPS-11", seats: "600+", test: "Written Test", eligibility: "Matric / FA" },
  ];

  const syllabus = [
    { topic: "General Knowledge", desc: "History of Pakistan and India, Geography, Science & Technology, Current Affairs, Sports, Awards, International Organizations (UN, OIC, SAARC, EU), Famous Personalities." },
    { topic: "Islamic Studies / Islamiyat", desc: "Quran and Hadith basics, Islamic history, Caliphate, Important events, Islamic jurisprudence, Pillars of Islam, Major battles, Lives of Prophets." },
    { topic: "Pakistan Studies", desc: "Pakistan Movement, Constitution of 1973 (major articles), Federal and Provincial structure, National symbols, Languages, Economy overview, Major dams and rivers." },
    { topic: "English Grammar & Comprehension", desc: "Parts of speech, tenses, voice and narration, synonyms and antonyms, prepositions, sentence correction, fill-in-the-blanks, passage comprehension." },
    { topic: "Mathematics (Basic)", desc: "Percentage, ratio and proportion, average, profit & loss, fractions, simple and compound interest, time and work, algebra basics, geometry." },
    { topic: "Everyday Science", desc: "Basic biology, chemistry, physics concepts for daily life. Human body, environment, technology, inventions, common scientific terms." },
    { topic: "Computer Basics", desc: "MS Office (Word, Excel), internet basics, email, operating systems, hardware and software concepts. Required for most administrative posts." },
    { topic: "Urdu Comprehension", desc: "Urdu grammar, passage reading, fill-in-the-blanks, proverbs, synonyms/antonyms in Urdu. Tests Urdu language proficiency." },
  ];

  const tips = [
    { title: "Build a Strong General Knowledge Base", body: "GK forms 30–40% of most PPSC tests. Memorize world capitals, Pakistan geography, famous personalities, current affairs, and historical dates. Use a GK book like Jahangir's WorldTimes." },
    { title: "Focus on Pakistan Studies", body: "Every PPSC paper has 15–25 questions on Pakistan Studies. Know the Constitution of 1973, CPEC, major rivers and dams, and the Pakistan Movement timeline in detail." },
    { title: "Master English Grammar Rules", body: "Common grammar mistakes (tenses, voice, synonyms, prepositions) are a regular part of PPSC papers. Practice 50 grammar MCQs daily for at least 2 months before the exam." },
    { title: "Solve 10+ Years of Past Papers", body: "PPSC frequently repeats questions across different exams. Solving past papers is the single most effective preparation strategy — it reveals patterns, repeated topics, and the difficulty level." },
    { title: "Current Affairs Last 6 Months", body: "Current affairs questions cover the last 6–12 months before the exam. Read Dawn or The News daily, and follow reliable monthly current affairs digest." },
    { title: "Subject-Specific Preparation for Lecturer", body: "If applying for Lecturer, your subject paper (50–60 marks) determines most of your score. Study your subject at the Masters level and solve previous Lecturer subject papers." },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-green-700 to-emerald-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="text-sm text-green-200 mb-4">
            <Link href="/">Home</Link> / <span>PPSC Preparation</span>
          </nav>
          <h1 className="text-5xl font-bold mb-4">PPSC Exam Preparation</h1>
          <p className="text-green-100 text-xl max-w-3xl">Punjab Public Service Commission (PPSC) — complete preparation hub with syllabus, MCQ banks, past papers, and expert strategy for all posts.</p>
          <div className="mt-8 flex gap-4 flex-wrap text-sm">
            <span className="bg-white/20 px-4 py-2 rounded-full">All PPSC Posts</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Free Resources</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">10,000+ MCQs</span>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular PPSC Posts</h2>
        <p className="text-gray-600 mb-10">PPSC recruits for hundreds of posts across various departments. These are the most commonly advertised positions.</p>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow border-collapse">
            <thead>
              <tr className="bg-green-700 text-white">
                <th className="px-4 py-3 text-left">Post</th>
                <th className="px-4 py-3 text-left">Pay Scale</th>
                <th className="px-4 py-3 text-left">Typical Seats</th>
                <th className="px-4 py-3 text-left">Test Type</th>
                <th className="px-4 py-3 text-left">Eligibility</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((p, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-semibold text-gray-900">{p.title}</td>
                  <td className="px-4 py-3 text-green-700 font-medium">{p.scale}</td>
                  <td className="px-4 py-3 text-gray-700">{p.seats}</td>
                  <td className="px-4 py-3 text-gray-600 text-sm">{p.test}</td>
                  <td className="px-4 py-3 text-gray-600 text-sm">{p.eligibility}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Syllabus */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">PPSC General Paper Syllabus</h2>
          <p className="text-gray-600 mb-10">The general/written test for most PPSC posts covers these 8 core subject areas. The weightage of each varies by post.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {syllabus.map((s, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-green-700">{s.topic}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Expert Tips to Clear PPSC</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {tips.map((tip, i) => (
            <div key={i} className="bg-white border-l-4 border-green-600 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{tip.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{tip.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Study Plan */}
      <section className="bg-green-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">3-Month PPSC Study Plan</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { month: "Month 1", focus: "Foundation", tasks: ["Cover complete General Knowledge book", "Revise Pakistan Studies & Islamic Studies", "Solve 50 GK MCQs daily", "Start reading daily newspaper"] },
              { month: "Month 2", focus: "Practice & English", tasks: ["English grammar + daily 50 MCQs", "Start solving past papers weekly", "Current affairs weekly revision", "Subject-specific preparation (if Lecturer)"] },
              { month: "Month 3", focus: "Mock Tests & Revision", tasks: ["Full mock test every 3 days", "Daily 150+ MCQs mixed topics", "Revise important dates and facts", "Focus on weak areas identified in mocks"] },
            ].map((m, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-green-200 shadow-sm">
                <div className="text-lg font-bold text-green-700 mb-1">{m.month}</div>
                <div className="text-sm font-semibold text-gray-600 mb-4">Focus: {m.focus}</div>
                <ul className="space-y-2">
                  {m.tasks.map((t) => (
                    <li key={t} className="text-sm text-gray-700 flex gap-2"><span className="text-green-500">✓</span>{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-green-700 to-emerald-700 text-white py-14 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Practice with PPSC Past Papers</h2>
          <p className="text-green-100 mb-8">Nothing prepares you better than solving actual PPSC past papers. Access free papers from the last 10 years.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/past-papers" className="bg-white text-green-700 px-7 py-3 rounded-full font-semibold hover:bg-gray-100 transition">Past Papers</Link>
            <Link href="/jobs/government" className="border-2 border-white text-white px-7 py-3 rounded-full font-semibold hover:bg-white hover:text-green-700 transition">Government Jobs</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
