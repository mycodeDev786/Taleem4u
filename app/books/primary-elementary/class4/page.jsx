import Link from "next/link";

export const metadata = {
  title: "Class 4 Books | Free PDF Textbooks & Worksheets | Taleem4u",
  description: "Free PCTB-approved Class 4 textbooks for English, Urdu, Mathematics, Science, Social Studies, Islamiyat, and Computer. PDF download for Pakistani primary school students.",
  keywords: "class 4 books pakistan, grade 4 textbooks, PCTB class 4, free primary school books",
  alternates: { canonical: "https://taleem4u.com/books/primary-elementary/class4" },
};

export default function Class4Page() {
  const subjects = [
    { name: "English", icon: "📖", desc: "Formal essay writing (5 paragraphs), comprehension of longer passages, grammar (tenses, clauses, active/passive voice), letter formats, and literary appreciation through poetry and short stories." },
    { name: "Urdu", icon: "✍️", desc: "Advanced Urdu prose and poetry, grammar (صرف و نحو), formal letter and application writing, comprehension at paragraph level, and introduction to classic Urdu poets." },
    { name: "Mathematics", icon: "🔢", desc: "Fractions and decimals (addition, subtraction, multiplication), introduction to percentages, long division, basic algebra (simple equations), measurement conversions, and area and perimeter of shapes." },
    { name: "Science", icon: "🔬", desc: "Ecosystems and food webs, human body systems (digestive, circulatory, skeletal), properties of matter, forms of energy (heat, light, sound, electrical), and environmental conservation." },
    { name: "Social Studies", icon: "🗺️", desc: "Pakistan's history from the Mughal era to independence, culture and traditions of each province, major industries and exports, Pakistan's foreign policy basics, and rights and responsibilities of citizens." },
    { name: "Islamiyat", icon: "🕌", desc: "Detailed study of the life of Prophet Muhammad (PBUH), stories of all major Prophets, Islamic jurisprudence basics (fiqh), Quranic tafseer of selected verses, and application of Islamic ethics." },
    { name: "Computer Studies", icon: "💻", desc: "MS Word document formatting, MS Paint advanced techniques, introduction to spreadsheets, internet search skills, email basics, and online safety and digital citizenship." },
    { name: "Drawing & Art", icon: "🎨", desc: "Perspective drawing, watercolour techniques, Islamic geometric patterns, calligraphy introduction, and three-dimensional craft projects." },
  ];

  const outcomes = [
    "Write a five-paragraph essay with introduction, body, and conclusion",
    "Read and analyse poetry for themes and literary devices",
    "Add, subtract, and multiply fractions and decimals accurately",
    "Calculate the area and perimeter of rectangles and squares",
    "Explain the major human body systems and their functions",
    "Describe Pakistan's historical events from 1947 and key figures",
    "Format a document in MS Word with headings, fonts, and alignment",
    "Recite 10+ Surahs and explain the meaning of each",
  ];

  const tips = [
    { t: "Essay Writing Is a Skill to Practise Weekly", b: "Class 4 introduces formal 5-paragraph essay writing. Give your child one essay topic every week and sit with them while they plan using a mind map first. Structure is a skill — it must be practised, not just explained." },
    { t: "Fractions Need Concrete Objects First", b: "Cut oranges, fold paper, or divide cookies to show fractions physically before the textbook. Children who understand fractions visually rarely make the conceptual errors that plague students right through Matric." },
    { t: "Science: Make It Experimental", b: "Class 4 Science covers energy and matter. Simple home experiments — mixing vinegar and baking soda, using a prism to split light, feeling heat from a light bulb — make these concepts unforgettable." },
    { t: "History Through Stories", b: "Pakistan Studies at Class 4 introduces the independence movement. Tell the stories of Quaid-e-Azam and Allama Iqbal as narratives, not just facts. Children remember stories; they forget bullet points." },
    { t: "Computer Skills Open Doors", b: "At Class 4, children should be typing their own assignments in MS Word. Even slow typing is fine — the habit of using a keyboard for writing is a life skill that compounds enormously over time." },
    { t: "Celebrate Complexity", b: "Class 4 is genuinely harder than Class 3 — fractions, long division, essays, and body systems all arrive at once. Acknowledge that it is harder and praise the effort of tackling difficulty. Confidence is the foundation." },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <nav className="text-sm text-yellow-100 mb-4">
            <Link href="/">Home</Link> / <Link href="/books">Books</Link> / <Link href="/books/primary-elementary">Primary</Link> / <span>Class 4</span>
          </nav>
          <h1 className="text-4xl font-bold mb-3">Class 4 — Books &amp; Worksheets</h1>
          <p className="text-yellow-50 text-lg max-w-2xl">Class 4 brings fractions, formal essay writing, ecosystems, and Pakistan history. A pivotal year that builds the academic foundations students carry through secondary school.</p>
          <div className="mt-6 flex gap-3 text-sm flex-wrap">
            <span className="bg-white/20 px-3 py-1.5 rounded-full">Grade 4</span>
            <span className="bg-white/20 px-3 py-1.5 rounded-full">PCTB Syllabus</span>
            <span className="bg-white/20 px-3 py-1.5 rounded-full">Free PDF Download</span>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Class 4 Textbooks by Subject</h2>
        <p className="text-gray-600 mb-8">All subjects follow the Punjab Curriculum and Textbook Board (PCTB) syllabus. Sindh, Federal, and KPK board editions also available.</p>
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {subjects.map((s, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition">
              <div className="flex items-start gap-3 mb-2">
                <span className="text-2xl flex-shrink-0">{s.icon}</span>
                <h3 className="font-bold text-gray-900">{s.name} — Class 4</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">{s.desc}</p>
              <button className="text-xs bg-orange-500 text-white px-4 py-1.5 rounded-full hover:bg-orange-600 transition">Download PDF</button>
            </div>
          ))}
        </div>

        <div className="bg-orange-50 rounded-lg p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Class 4 Learning Outcomes</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Tips for Parents &amp; Class 4 Teachers</h2>
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
          <Link href="/books/primary-elementary/class3" className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">← Class 3 Books</Link>
          <Link href="/books/primary-elementary" className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">All Primary Classes</Link>
          <Link href="/books/primary-elementary/class5" className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">Class 5 Books →</Link>
        </div>
      </section>
    </div>
  );
}
