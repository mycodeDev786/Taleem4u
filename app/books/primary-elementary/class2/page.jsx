import Link from "next/link";

export const metadata = {
  title: "Class 2 Books | Free PDF Textbooks & Worksheets | Taleem4u",
  description: "Free PCTB-approved Class 2 textbooks for English, Urdu, Mathematics, Science, Social Studies, Islamiyat, and Computer. PDF download for Pakistani primary school students.",
  keywords: "class 2 books pakistan, grade 2 textbooks, PCTB class 2, free primary school books",
  alternates: { canonical: "https://taleem4u.com/books/primary-elementary/class2" },
};

export default function Class2Page() {
  const subjects = [
    { name: "English", icon: "📖", desc: "Reading short paragraphs, comprehension exercises, grammar basics (nouns, verbs, adjectives), simple letter writing, and vocabulary building through stories and poems." },
    { name: "Urdu", icon: "✍️", desc: "Urdu prose, short poetry, grammar (اسم، فعل، صفت), composition writing, and comprehension questions aligned with the PCTB Class 2 syllabus." },
    { name: "Mathematics", icon: "🔢", desc: "Numbers up to 1,000, two-digit addition and subtraction with carrying and borrowing, introduction to multiplication tables (1–5), and basic shapes and measurements." },
    { name: "Science", icon: "🔬", desc: "Living and non-living things, plants and their parts, animals and their habitats, the human body (five senses), and basic weather and seasons." },
    { name: "Social Studies", icon: "🗺️", desc: "My family and community, my school, my neighbourhood, Pakistan and its flag, national symbols, and the concept of being a good citizen." },
    { name: "Islamiyat", icon: "🕌", desc: "Recitation and meaning of short Surahs, stories of Prophet Muhammad (PBUH), basic pillars of Islam, and Islamic etiquette for daily life." },
    { name: "Computer Studies", icon: "💻", desc: "Parts of a computer, how to use a mouse and keyboard, basic MS Paint activities, and introduction to educational software for young learners." },
    { name: "Drawing & Art", icon: "🎨", desc: "Nature drawing, colouring exercises, basic pattern making, and creative craft activities that develop fine motor skills and artistic expression." },
  ];

  const outcomes = [
    "Read and understand short English paragraphs independently",
    "Write simple sentences and fill in blanks correctly in English and Urdu",
    "Count, read, and write numbers up to 1,000",
    "Perform two-digit addition and subtraction with carrying",
    "Recite multiplication tables from 1 to 5",
    "Identify and describe living and non-living things",
    "Name major parts of the human body and five senses",
    "Recite at least 5 short Surahs with correct pronunciation",
  ];

  const tips = [
    { t: "Daily Reading Builds Everything", b: "Class 2 students who read for 15–20 minutes daily develop vocabulary, comprehension, and focus that carries through every subject and every exam for the rest of their school life. Use the English textbook PDF at home." },
    { t: "Multiplication Tables Start Now", b: "Class 2 introduces multiplication tables. Help your child memorise tables 1–5 through songs, rhythm, and daily repetition. A child who knows their tables by heart will never struggle with maths." },
    { t: "Science Through Observation", b: "Take your child outside and observe plants, insects, and weather. Class 2 Science is about the natural world — real observations make textbook concepts memorable and meaningful." },
    { t: "Praise Effort and Persistence", b: "At Class 2, building confidence matters as much as building knowledge. Specific praise — 'You re-read that sentence until you understood it, well done!' — teaches children to persist through difficulty." },
    { t: "Review Homework Together", b: "Sit with your child while they do homework, not to do it for them, but to notice what confuses them. Identifying gaps early at Class 2 prevents compounding difficulties in Class 3 and beyond." },
    { t: "Urdu Needs Daily Practice", b: "Urdu reading and writing requires daily exposure. Read an Urdu story together each evening. Children who read Urdu at home are consistently stronger in Urdu board exams years later." },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <nav className="text-sm text-yellow-100 mb-4">
            <Link href="/">Home</Link> / <Link href="/books">Books</Link> / <Link href="/books/primary-elementary">Primary</Link> / <span>Class 2</span>
          </nav>
          <h1 className="text-4xl font-bold mb-3">Class 2 — Books &amp; Worksheets</h1>
          <p className="text-yellow-50 text-lg max-w-2xl">Free PCTB-approved Class 2 textbooks for all subjects. Class 2 deepens foundational literacy and numeracy skills while introducing Science and Social Studies.</p>
          <div className="mt-6 flex gap-3 text-sm flex-wrap">
            <span className="bg-white/20 px-3 py-1.5 rounded-full">Grade 2</span>
            <span className="bg-white/20 px-3 py-1.5 rounded-full">PCTB Syllabus</span>
            <span className="bg-white/20 px-3 py-1.5 rounded-full">Free PDF Download</span>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Class 2 Textbooks by Subject</h2>
        <p className="text-gray-600 mb-8">All subjects follow the Punjab Curriculum and Textbook Board (PCTB) syllabus. Sindh, Federal, and KPK board editions also available.</p>
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {subjects.map((s, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition">
              <div className="flex items-start gap-3 mb-2">
                <span className="text-2xl flex-shrink-0">{s.icon}</span>
                <h3 className="font-bold text-gray-900">{s.name} — Class 2</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">{s.desc}</p>
              <button className="text-xs bg-orange-500 text-white px-4 py-1.5 rounded-full hover:bg-orange-600 transition">Download PDF</button>
            </div>
          ))}
        </div>

        <div className="bg-orange-50 rounded-lg p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Students Learn in Class 2</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Tips for Parents &amp; Class 2 Teachers</h2>
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
          <Link href="/books/primary-elementary/class1" className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">← Class 1 Books</Link>
          <Link href="/books/primary-elementary" className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">All Primary Classes</Link>
          <Link href="/books/primary-elementary/class3" className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">Class 3 Books →</Link>
        </div>
      </section>
    </div>
  );
}
