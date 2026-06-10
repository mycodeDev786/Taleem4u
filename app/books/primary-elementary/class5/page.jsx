import Link from "next/link";

export const metadata = {
  title: "Class 5 Books | Free PDF Textbooks & Worksheets | PEC Preparation | Taleem4u",
  description: "Free PCTB-approved Class 5 textbooks for English, Urdu, Mathematics, Science, Social Studies, Islamiyat, and Computer. PEC Grade 5 assessment preparation included.",
  keywords: "class 5 books pakistan, grade 5 textbooks, PEC class 5, PCTB class 5, free primary school books",
  alternates: { canonical: "https://taleem4u.com/books/primary-elementary/class5" },
};

export default function Class5Page() {
  const subjects = [
    { name: "English", icon: "📖", desc: "Advanced comprehension, argumentative and narrative essay writing, formal grammar (complex sentences, reported speech, passive voice), creative writing, and analysis of poetry and short stories." },
    { name: "Urdu", icon: "✍️", desc: "Urdu literature (prose and poetry), advanced grammar (مرکب جملے، فقرے، اصناف ادب), application and essay writing, comprehension of literary texts, and appreciation of Urdu cultural heritage." },
    { name: "Mathematics", icon: "🔢", desc: "Ratios and proportions, percentages, profit and loss, introduction to algebra (solving equations), geometry (angles, triangles, circles), data handling and basic statistics, and the unitary method." },
    { name: "Science", icon: "🔬", desc: "Detailed study of the environment and ecosystems, forces and machines, light and sound waves, chemical changes vs physical changes, human reproductive system basics, and climate and environmental science." },
    { name: "Social Studies", icon: "🗺️", desc: "Comprehensive Pakistan Studies — CPEC, constitution basics, government structure, foreign relations, major industries, demographics, and Pakistan's role in international organisations like OIC and UN." },
    { name: "Islamiyat", icon: "🕌", desc: "In-depth study of Islamic history from the Prophet's time through the four Caliphs, detailed Quranic tafseer, Islamic jurisprudence (fiqh) basics, and the role of Islam in shaping Pakistan's national identity." },
    { name: "Computer Studies", icon: "💻", desc: "MS Office suite (Word, Excel, PowerPoint basics), internet research skills, email communication, digital citizenship, online safety, and introduction to programming logic through visual tools." },
    { name: "Drawing & Art", icon: "🎨", desc: "Advanced sketching, watercolour and acrylic painting techniques, Islamic geometric art, poster design, and a final art portfolio project to showcase Class 5 skills." },
  ];

  const pecInfo = [
    { title: "What is PEC Grade 5 Assessment?", desc: "The Punjab Examination Commission (PEC) conducts a standardised assessment for all Class 5 students in Punjab. It tests English, Urdu, Mathematics, Science, and Social Studies at the end of primary schooling." },
    { title: "How is it Marked?", desc: "PEC assessments use multiple-choice questions (MCQs) and short-answer questions. Each subject is tested separately. Scores are used for scholarship selection and school performance monitoring." },
    { title: "How to Prepare", desc: "Use the PCTB Class 5 textbooks thoroughly, solve PEC past papers from 2018–2023, and focus on Mathematics and English which have the highest failure rates in the assessment." },
    { title: "Scholarships Through PEC", desc: "Top scorers in the PEC Grade 5 assessment qualify for provincial merit scholarships from PEEF (Punjab Education Endowment Fund) that can support students through Matric and beyond." },
  ];

  const tips = [
    { t: "Class 5 Is a Foundation Year for Matric", b: "The concepts taught in Class 5 Maths — ratios, percentages, algebra — appear directly in Matric. Students who master them now find Class 9 significantly easier. Do not rush through exercises." },
    { t: "PEC Past Papers Are Essential", b: "Solve at least 3 years of PEC past papers in the month before the assessment. PEC question patterns are consistent — students who practise them gain a significant scoring advantage." },
    { t: "Science Essays Prepare for FSc", b: "Class 5 Science introduces essay-style answers. Encourage your child to write full sentences in their science answers, not just bullet points. This habit is essential for Matric and FSc board exams." },
    { t: "Algebra Anxiety Is Preventable", b: "Many students arrive at Class 9 terrified of algebra because they never understood the basics in Class 5. Spend extra time on the equation-solving chapters. Patience now saves years of struggle later." },
    { t: "Computer Skills for the Future", b: "Class 5 introduces Excel and PowerPoint basics. These are workplace tools your child will use for the rest of their professional life. Take the Computer Studies textbook seriously — it is not just a minor subject." },
    { t: "Celebrate the End of Primary School", b: "Completing Class 5 is a genuine milestone. Acknowledge your child's growth over five years of primary education. A confident, celebrated student enters middle school with the right mindset for continued success." },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <nav className="text-sm text-yellow-100 mb-4">
            <Link href="/">Home</Link> / <Link href="/books">Books</Link> / <Link href="/books/primary-elementary">Primary</Link> / <span>Class 5</span>
          </nav>
          <h1 className="text-4xl font-bold mb-3">Class 5 — Books &amp; PEC Preparation</h1>
          <p className="text-yellow-50 text-lg max-w-2xl">The final primary year. Class 5 prepares students for the PEC Grade 5 assessment and transitions them into middle school with strong literacy, numeracy, and science foundations.</p>
          <div className="mt-6 flex gap-3 text-sm flex-wrap">
            <span className="bg-white/20 px-3 py-1.5 rounded-full">Grade 5</span>
            <span className="bg-white/20 px-3 py-1.5 rounded-full">PEC Assessment</span>
            <span className="bg-white/20 px-3 py-1.5 rounded-full">Free PDF Download</span>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Class 5 Textbooks by Subject</h2>
        <p className="text-gray-600 mb-8">All subjects follow the Punjab Curriculum and Textbook Board (PCTB) syllabus. Sindh, Federal, and KPK board editions also available.</p>
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {subjects.map((s, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition">
              <div className="flex items-start gap-3 mb-2">
                <span className="text-2xl flex-shrink-0">{s.icon}</span>
                <h3 className="font-bold text-gray-900">{s.name} — Class 5</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">{s.desc}</p>
              <button className="text-xs bg-orange-500 text-white px-4 py-1.5 rounded-full hover:bg-orange-600 transition">Download PDF</button>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">PEC Grade 5 Assessment — Everything You Need to Know</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {pecInfo.map((info, i) => (
              <div key={i} className="bg-white rounded-lg p-5 border border-blue-200 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{info.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{info.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Tips for Parents &amp; Class 5 Teachers</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {tips.map((tip, i) => (
              <div key={i} className="border-l-4 border-orange-400 pl-4">
                <h3 className="font-bold text-gray-900 mb-1 text-sm">{tip.t}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{tip.b}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4 flex-wrap justify-between">
          <Link href="/books/primary-elementary/class4" className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">← Class 4 Books</Link>
          <Link href="/books/primary-elementary" className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">All Primary Classes</Link>
          <Link href="/books/matric" className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">Matric Books →</Link>
        </div>
      </section>
    </div>
  );
}
