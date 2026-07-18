import Link from "next/link";
export const metadata = {
  title: "Nursery Books | Free PDF Textbooks & Worksheets | Taleem4u",
  description: "Free PCTB-approved Nursery textbooks and activity worksheets. English Primer, Urdu Primer, Math Primer, and Drawing for Pakistani Nursery students aged 3-4. Free PDF download.",
  keywords: "nursery books pakistan, nursery textbooks, nursery English Urdu Math, free nursery books PDF",
  alternates: { canonical: "https://taleem4u.com/books/primary-elementary/nursery" },
};
export default function NurseryPage() {
  const subjects = [
    { name: "English Primer", icon: "🔤", desc: "Introduction to the English alphabet through pictures and sounds. Children learn to recognise uppercase and lowercase letters, associate each letter with a familiar object (A for Apple, B for Ball), trace letter shapes, and produce the basic phonetic sound of each letter. Short vowel sounds and simple CVC words (cat, dog, sun) are introduced through colourful illustrations and repetition activities.", skills: "Alphabet recognition, phonics, letter tracing" },
    { name: "Urdu Primer (قاعدہ)", icon: "اب", desc: "Introduction to Urdu huroof (letters) through pictures and simple words. Children learn to recognise each Urdu letter in its isolated form, associate it with familiar Urdu words, trace letter strokes, and understand the right-to-left directionality of Urdu script. The primer uses large, colourful text and familiar vocabulary to make Urdu letter learning engaging and accessible for very young children.", skills: "Urdu letters, directionality, letter sounds" },
    { name: "Mathematics Primer", icon: "🔢", desc: "Pre-number concepts through sorting, classifying, and matching activities. Number recognition and counting from 1 to 20, one-to-one correspondence counting using physical objects, basic shapes (circle, square, triangle), and introduction to patterns using colours and shapes. All mathematics at Nursery level is taught through hands-on activities and games rather than abstract written exercises.", skills: "Counting 1-20, shapes, sorting, patterns" },
    { name: "Drawing & Colouring", icon: "🎨", desc: "Colouring pre-drawn pictures to develop fine motor control and colour recognition. Tracing simple shapes and lines to build pencil control. Drawing familiar objects — face, house, tree, sun, flower — using simple guided steps. Introduction to primary and secondary colours through mixing activities. Drawing activities at Nursery level develop the hand strength and pencil control that is essential for later writing.", skills: "Fine motor skills, colour recognition, pencil control" },
    { name: "General Knowledge", icon: "🌍", desc: "Age-appropriate general knowledge through pictures and simple discussions — my body parts and their names, things at home and their uses, animals and the sounds they make, vehicles and transport, fruits and vegetables, weather and seasons, and days of the week. General Knowledge at Nursery level is taught entirely through conversation, pictures, and real-world observation rather than formal text.", skills: "Body parts, home, animals, seasons" },
    { name: "Islamic Studies", icon: "🕌", desc: "Introduction to Islamic identity and basic knowledge appropriate for ages 3-4. Children learn the Arabic greeting (Assalamu Alaikum) and its meaning, Bismillah before beginning activities, the name of Allah and that He created everything, the name of the Prophet Muhammad (PBUH) and that he is our role model, and the basic concept of Kalima Tayyiba through song and repetition.", skills: "Islamic identity, basic duas, greetings" },
  ];
  const milestones = [
    "Recognise and name all 26 English letters (uppercase and lowercase)",
    "Produce the basic phonetic sound of each English letter",
    "Recognise at least 20 Urdu huroof by sight",
    "Count objects reliably from 1 to 20",
    "Identify and name circle, square, triangle, and rectangle",
    "Sort objects by colour, size, and shape",
    "Name all basic body parts correctly",
    "Recite Bismillah and Assalamu Alaikum correctly",
    "Hold a pencil correctly using a tripod grip",
    "Colour within basic outlines with reasonable control",
  ];
  const tips = [
    { t: "Make Learning Feel Like Play", b: "At Nursery age, children learn most effectively when they do not know they are learning. Use alphabet games, counting with toys, colour-sorting with household objects, and story-telling to cover the curriculum content in ways that feel like play to the child." },
    { t: "Read Picture Books Every Day", b: "Daily picture book reading is the highest-impact literacy activity for Nursery children. It builds vocabulary, comprehension, love of books, and print awareness simultaneously. Even 10 minutes of shared picture book reading per day produces measurable long-term literacy benefits." },
    { t: "Correct Pencil Grip from Day One", b: "The tripod grip — thumb, index finger, and middle finger — is the correct way to hold a pencil for both Urdu and English writing. Establish correct grip from the very first day of Nursery. Incorrect grips are very difficult to correct later and cause fatigue and poor letter formation." },
    { t: "Never Force or Pressurise", b: "Nursery children who experience pressure or anxiety around learning develop negative associations with school that can persist for years. Keep the Nursery learning environment warm, encouraging, and low-pressure. All children reach the milestones eventually — the job of Nursery is to make them love learning, not to rush them through content." },
  ];
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-yellow-300 to-orange-400 text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <nav className="text-sm text-yellow-100 mb-4">
            <Link href="/">Home</Link> / <Link href="/books">Books</Link> / <Link href="/books/primary-elementary">Primary</Link> / <span>Nursery</span>
          </nav>
          <h1 className="text-4xl font-bold mb-3">Nursery Books &amp; Activity Worksheets</h1>
          <p className="text-yellow-50 text-lg max-w-2xl">Free PCTB-approved Nursery textbooks for English, Urdu, Mathematics, Drawing, General Knowledge, and Islamiyat. Designed for children aged 3-4 beginning their first formal learning experience.</p>
          <div className="mt-6 flex gap-3 text-sm flex-wrap">
            <span className="bg-white/20 px-3 py-1.5 rounded-full">Ages 3–4</span>
            <span className="bg-white/20 px-3 py-1.5 rounded-full">PCTB Approved</span>
            <span className="bg-white/20 px-3 py-1.5 rounded-full">Free PDF Download</span>
          </div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Nursery Subjects &amp; Resources</h2>
        <p className="text-gray-600 mb-8">Nursery is the first formal educational experience for most Pakistani children. All Nursery materials are designed for play-based learning that introduces academic concepts gently and positively, building a love of learning that lasts throughout school life.</p>
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {subjects.map((s, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition">
              <div className="flex items-start gap-3 mb-2">
                <span className="text-2xl flex-shrink-0">{s.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900">{s.name}</h3>
                  <p className="text-xs text-orange-600 font-medium">{s.skills}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">{s.desc}</p>
              <button className="text-xs bg-orange-500 text-white px-4 py-1.5 rounded-full hover:bg-orange-600 transition">Download PDF</button>
            </div>
          ))}
        </div>
        <div className="bg-orange-50 rounded-lg p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Nursery Learning Milestones</h2>
          <p className="text-gray-600 text-sm mb-5">By the end of Nursery, children should ideally be working towards these developmental milestones. Remember that every child develops at their own pace — these are targets, not rigid requirements.</p>
          <div className="grid md:grid-cols-2 gap-3">
            {milestones.map((item, i) => (
              <div key={i} className="flex gap-2 items-start bg-white rounded-lg p-3 border border-orange-200">
                <span className="text-orange-500 font-bold flex-shrink-0">✓</span>
                <p className="text-gray-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Tips for Nursery Parents &amp; Teachers</h2>
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
          <Link href="/books/primary-elementary/ece" className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">← ECE Books</Link>
          <Link href="/books/primary-elementary" className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">All Primary Classes</Link>
          <Link href="/books/primary-elementary/kg" className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">KG Books →</Link>
        </div>
      </section>
    </div>
  );
}
