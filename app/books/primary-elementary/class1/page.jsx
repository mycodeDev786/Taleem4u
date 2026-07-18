import Link from "next/link";
export const metadata = {
  title: "Class 1 Books | Free PDF Textbooks & Worksheets | Taleem4u",
  description: "Free PCTB-approved Class 1 textbooks for English, Urdu, Mathematics, General Knowledge, and Islamiyat. PDF download for Pakistani primary school students starting formal education.",
  keywords: "class 1 books pakistan, grade 1 textbooks, PCTB class 1, free primary school books class one",
  alternates: { canonical: "https://taleem4u.com/books/primary-elementary/class1" },
};
export default function Class1Page() {
  const subjects = [
    { name: "English", icon: "📖", desc: "Alphabet recognition and phonics (A–Z sounds), three and four-letter word reading, simple sentences, basic comprehension, and introduction to pencil control for letter writing. Class 1 English lays the foundation for all future English literacy." },
    { name: "Urdu", icon: "✍️", desc: "Recognition and writing of all Urdu huroof (letters) in their various forms, simple Urdu word reading, basic sentence construction, and introduction to Urdu calligraphy pen grip and letter strokes." },
    { name: "Mathematics", icon: "🔢", desc: "Numbers 1 to 100, counting forwards and backwards, basic addition and subtraction within 20, recognition of shapes (circle, square, triangle, rectangle), and introduction to measurement using non-standard units." },
    { name: "General Knowledge", icon: "🌍", desc: "My body and five senses, my family and home, my school and community, common animals and their sounds, weather and seasons, days of the week, and months of the year." },
    { name: "Islamiyat", icon: "🕌", desc: "Recognition of Arabic alphabet and basic Quranic letters, Kalima Tayyiba and Kalima Shahadat with meanings, basic duas for daily activities (eating, sleeping, entering home), and stories of the Prophet Muhammad (PBUH) for young children." },
    { name: "Drawing & Art", icon: "🎨", desc: "Colouring within lines, tracing shapes, basic free-hand drawing of familiar objects (house, tree, sun, flower), and introduction to primary colours and simple colour mixing activities." },
  ];
  const outcomes = [
    "Read simple three and four-letter English words independently",
    "Recognise and write all Urdu letters in their basic form",
    "Count confidently from 1 to 100 and back",
    "Add and subtract single-digit numbers correctly",
    "Identify all basic shapes by name and properties",
    "Name the five senses and their corresponding body organs",
    "Know the days of the week and months of the year in order",
    "Recite Kalima Tayyiba and basic daily duas correctly",
  ];
  const tips = [
    { t: "Reading Aloud Together Is the Most Powerful Habit", b: "Class 1 is when literacy begins. Read the English and Urdu textbooks aloud with your child every evening for 15 minutes. Point to each word as you read it. Children who are read to daily in Class 1 become independent readers significantly faster than those who are not." },
    { t: "Make Numbers Concrete Before Abstract", b: "Class 1 Mathematics uses physical objects — count beans, stack coins, use fingers. Children at age 5-6 learn numerical concepts through handling real objects, not just looking at digits on a page. The textbook follows physical understanding, not the other way around." },
    { t: "Urdu Letters Need Daily Tracing Practice", b: "Writing Urdu letters correctly takes months of daily practice for Class 1 students. Use the textbook's tracing exercises every day, and supplement with lined Urdu exercise books. Correct letter formation habits formed in Class 1 persist for life." },
    { t: "Celebrate Every Small Achievement", b: "Class 1 students are building self-confidence as learners for the first time. Every correct letter written, every word read, every sum solved correctly deserves genuine praise. Confident learners in Class 1 become motivated students throughout their school careers." },
    { t: "Keep Sessions Short and Positive", b: "Children at Class 1 age have attention spans of 15-20 minutes for formal learning. Two 20-minute sessions at home are far more productive than one 45-minute session where the child loses focus. Stop while it is still enjoyable — they will want to come back." },
    { t: "Use Songs and Rhymes for Phonics and Tables", b: "Alphabet songs, counting rhymes, and number chants are not just entertainment — they build phonemic awareness and number sense through auditory memory. Many children who struggle with written phonics respond excellently to song-based learning." },
  ];
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <nav className="text-sm text-yellow-100 mb-4">
            <Link href="/">Home</Link> / <Link href="/books">Books</Link> / <Link href="/books/primary-elementary">Primary</Link> / <span>Class 1</span>
          </nav>
          <h1 className="text-4xl font-bold mb-3">Class 1 — Books &amp; Worksheets</h1>
          <p className="text-yellow-50 text-lg max-w-2xl">Free PCTB-approved Class 1 textbooks for all subjects. Class 1 is where formal schooling begins — these books build the reading, writing, and numeracy foundations that support every year of education that follows.</p>
          <div className="mt-6 flex gap-3 text-sm flex-wrap">
            <span className="bg-white/20 px-3 py-1.5 rounded-full">Grade 1</span>
            <span className="bg-white/20 px-3 py-1.5 rounded-full">PCTB Syllabus</span>
            <span className="bg-white/20 px-3 py-1.5 rounded-full">Free PDF Download</span>
          </div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Class 1 Textbooks by Subject</h2>
        <p className="text-gray-600 mb-8">All Class 1 books follow the Punjab Curriculum and Textbook Board (PCTB) syllabus. Federal Board (FBISE), Sindh, and KPK editions are also available for most subjects.</p>
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {subjects.map((s, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition">
              <div className="flex items-start gap-3 mb-2">
                <span className="text-2xl flex-shrink-0">{s.icon}</span>
                <h3 className="font-bold text-gray-900">{s.name} — Class 1</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">{s.desc}</p>
              <button className="text-xs bg-orange-500 text-white px-4 py-1.5 rounded-full hover:bg-orange-600 transition">Download PDF</button>
            </div>
          ))}
        </div>
        <div className="bg-orange-50 rounded-lg p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Class 1 Learning Outcomes</h2>
          <p className="text-gray-600 text-sm mb-5">By the end of Class 1, students following the PCTB curriculum should be able to achieve these key learning outcomes:</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Tips for Parents &amp; Class 1 Teachers</h2>
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
          <Link href="/books/primary-elementary/kg" className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">← KG Books</Link>
          <Link href="/books/primary-elementary" className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">All Primary Classes</Link>
          <Link href="/books/primary-elementary/class2" className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">Class 2 Books →</Link>
        </div>
      </section>
    </div>
  );
}
