import Link from "next/link";

export const metadata = {
  title: "Class 3 Books | Free PDF Textbooks & Worksheets | Taleem4u",
  description: "Free PCTB-approved Class 3 textbooks for English, Urdu, Mathematics, Science, Social Studies, Islamiyat, and Computer. PDF download for Pakistani primary school students.",
  keywords: "class 3 books pakistan, grade 3 textbooks, PCTB class 3, free primary school books",
  alternates: { canonical: "https://taleem4u.com/books/primary-elementary/class3" },
};

export default function Class3Page() {
  const subjects = [
    { name: "English", icon: "📖", desc: "Reading longer passages with comprehension, paragraph writing, grammar (parts of speech, simple tenses, punctuation), formal letter writing, and vocabulary through poems and stories." },
    { name: "Urdu", icon: "✍️", desc: "Urdu prose and poetry, formal grammar (فعل، اسم، ضمیر), essay and letter writing, comprehension passages, and introduction to classic Urdu literary texts." },
    { name: "Mathematics", icon: "🔢", desc: "Multiplication tables 1–12, long multiplication and division, introduction to fractions, measurement (length, mass, capacity), and basic geometry (angles, shapes, perimeter)." },
    { name: "Science", icon: "🔬", desc: "The solar system, states of matter, simple machines, force and motion, photosynthesis, food chains, and the human digestive and respiratory systems." },
    { name: "Social Studies", icon: "🗺️", desc: "Pakistan's provinces and capitals, major rivers, climate zones, occupations of people, historical landmarks, and Pakistan's relationship with neighbouring countries." },
    { name: "Islamiyat", icon: "🕌", desc: "Quranic verses with translations, Hadith on daily conduct, stories of major Sahabah, the five pillars of Islam in detail, and Islamic history from the time of Prophet Ibrahim." },
    { name: "Computer Studies", icon: "💻", desc: "MS Word basics, typing practice, internet introduction, creating simple documents, and understanding computer safety and responsible online behaviour." },
    { name: "Drawing & Art", icon: "🎨", desc: "Landscape drawing, still life, pattern design, and craft projects that build spatial awareness, creativity, and fine motor coordination." },
  ];

  const outcomes = [
    "Write structured paragraphs independently in English and Urdu",
    "Know all multiplication tables from 1 to 12 by heart",
    "Perform long multiplication and short division correctly",
    "Understand and apply basic fraction concepts (half, quarter, third)",
    "Explain the water cycle, solar system, and food chains",
    "Identify Pakistan's provinces, capitals, and major rivers on a map",
    "Recite 8+ Surahs correctly with meanings",
    "Type basic text in MS Word and navigate a computer independently",
  ];

  const tips = [
    { t: "Multiplication Tables Are the Gateway to Maths", b: "Class 3 is when multiplication tables are fully established. Children who do not know their tables by heart will struggle with every maths topic from Class 4 onwards. Daily 5-minute table drills are essential." },
    { t: "Essay Writing Needs Modelling", b: "Before asking your child to write an essay independently, write one together. Show them the introduction-body-conclusion structure. Class 3 students who learn essay structure early excel in board exams years later." },
    { t: "Make the Solar System Real", b: "Class 3 Science introduces the solar system. Use a globe, YouTube videos, or a planetarium visit to make abstract concepts vivid. Children who experience science retain it; those who just read it forget it." },
    { t: "Map Skills Need Practice", b: "Buy a basic map of Pakistan and put it on the wall. Ask your child to point to provinces, rivers, and cities regularly. Social Studies becomes easy when geography is familiar." },
    { t: "Computer Time Should Be Educational", b: "If your child uses a computer or tablet, channel screen time toward the MS Word exercises and typing practice in the Computer textbook. Typing fluency at Class 3 is a genuine long-term advantage." },
    { t: "Read Challenging Books", b: "Class 3 students who only read textbooks plateau. Introduce slightly challenging storybooks. Struggling through a harder text and succeeding builds reading stamina that transforms academic performance." },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <nav className="text-sm text-yellow-100 mb-4">
            <Link href="/">Home</Link> / <Link href="/books">Books</Link> / <Link href="/books/primary-elementary">Primary</Link> / <span>Class 3</span>
          </nav>
          <h1 className="text-4xl font-bold mb-3">Class 3 — Books &amp; Worksheets</h1>
          <p className="text-yellow-50 text-lg max-w-2xl">Class 3 marks a significant step up. Students master all multiplication tables, write their first structured essays, explore the solar system, and begin serious map study of Pakistan.</p>
          <div className="mt-6 flex gap-3 text-sm flex-wrap">
            <span className="bg-white/20 px-3 py-1.5 rounded-full">Grade 3</span>
            <span className="bg-white/20 px-3 py-1.5 rounded-full">PCTB Syllabus</span>
            <span className="bg-white/20 px-3 py-1.5 rounded-full">Free PDF Download</span>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Class 3 Textbooks by Subject</h2>
        <p className="text-gray-600 mb-8">All subjects follow the Punjab Curriculum and Textbook Board (PCTB) syllabus. Sindh, Federal, and KPK board editions also available.</p>
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {subjects.map((s, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition">
              <div className="flex items-start gap-3 mb-2">
                <span className="text-2xl flex-shrink-0">{s.icon}</span>
                <h3 className="font-bold text-gray-900">{s.name} — Class 3</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">{s.desc}</p>
              <button className="text-xs bg-orange-500 text-white px-4 py-1.5 rounded-full hover:bg-orange-600 transition">Download PDF</button>
            </div>
          ))}
        </div>

        <div className="bg-orange-50 rounded-lg p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Class 3 Learning Outcomes</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {outcomes.map((item, i) => (
              <div key={i} className="flex gap-2 items-start bg-white rounded-lg p-3 border border-orange-200">
                <span className="text-orange-500 font-bold flex-shrink-0">✓</span>
                <p className="text-gray-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Tips for Parents &amp; Class 3 Teachers</h2>
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
          <Link href="/books/primary-elementary/class2" className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">← Class 2 Books</Link>
          <Link href="/books/primary-elementary" className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">All Primary Classes</Link>
          <Link href="/books/primary-elementary/class4" className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">Class 4 Books →</Link>
        </div>
      </section>
    </div>
  );
}
