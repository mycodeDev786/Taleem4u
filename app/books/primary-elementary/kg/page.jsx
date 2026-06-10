import Link from "next/link";

export const metadata = {
  title: "KG (Kindergarten) Books | Free PDF Download | Taleem4u",
  description: "Free PCTB-approved KG (Kindergarten) textbooks and activity worksheets. English, Urdu, Mathematics, General Knowledge, and Drawing — all free PDF downloads for KG students in Pakistan.",
  keywords: "KG books pakistan, kindergarten textbooks, KG English Urdu Math, free KG books PDF",
  alternates: { canonical: "https://taleem4u.com/books/primary-elementary/kg" },
};

export default function KGPage() {
  const subjects = [
    { name: "English — KG", icon: "🔤", desc: "Alphabet recognition (A–Z), phonics, three-letter words, simple sentences, and basic reading readiness activities.", skills: "Reading readiness, phonics, alphabet" },
    { name: "Urdu — KG", icon: "اب", desc: "Urdu huroof (letters), basic words, simple reading exercises, and writing practice for all Urdu alphabet characters.", skills: "Urdu letters, basic reading" },
    { name: "Mathematics — KG", icon: "🔢", desc: "Numbers 1–100, counting, basic addition and subtraction using objects, shapes recognition, and simple patterns.", skills: "Counting, addition, shapes" },
    { name: "General Knowledge — KG", icon: "🌍", desc: "My family, my school, animals, plants, seasons, community helpers, and basic science concepts for young learners.", skills: "Awareness of world, environment" },
    { name: "Drawing & Art — KG", icon: "🎨", desc: "Colouring exercises, basic shape drawing, nature drawing, and creative art activities to develop fine motor skills.", skills: "Fine motor skills, creativity" },
    { name: "Islamiyat — KG", icon: "🕌", desc: "Basic Islamic knowledge — names of Allah, Prophet Muhammad (PBUH), Kalima Tayyiba, and simple duas for daily life.", skills: "Islamic values, dua, kalima" },
  ];

  const milestones = [
    "Recognise and write all English letters (uppercase and lowercase)",
    "Read and write Urdu huroof with proper pronunciation",
    "Count confidently from 1 to 100",
    "Perform simple addition and subtraction up to 20",
    "Identify basic shapes: circle, square, triangle, rectangle",
    "Know the names and roles of family members and community helpers",
    "Recite Kalima Tayyiba and basic duas correctly",
    "Hold a pencil correctly and colour within lines",
  ];

  const parentTips = [
    { t: "Read Together Every Day", b: "Spend 10–15 minutes each day reading the KG English or Urdu book together. Point to words as you read them. This builds phonemic awareness faster than any classroom activity." },
    { t: "Make Maths Hands-On", b: "Use coins, buttons, or fruit to teach counting and addition. Children this age learn mathematics through physical manipulation of objects, not abstract numbers on a page." },
    { t: "Praise Effort, Not Perfection", b: "KG children are developing motor skills and confidence simultaneously. Praise the effort of writing, colouring, and reading — not how neat it looks. Confidence at this stage shapes lifelong learning habits." },
    { t: "Consistent Routine Matters", b: "Short, daily study sessions of 20–30 minutes are more effective than long weekend sessions. Consistent routines at KG age build the study habits that last through university." },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <nav className="text-sm text-yellow-100 mb-4">
            <Link href="/">Home</Link> / <Link href="/books">Books</Link> / <Link href="/books/primary-elementary">Primary</Link> / <span>KG</span>
          </nav>
          <h1 className="text-4xl font-bold mb-3">KG (Kindergarten) Books & Worksheets</h1>
          <p className="text-yellow-50 text-lg max-w-2xl">Free PCTB-approved KG textbooks for all subjects. Downloadable PDFs for English, Urdu, Mathematics, GK, Drawing, and Islamiyat.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">KG Subjects & Textbooks</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Learning Milestones for KG Students</h2>
          <p className="text-gray-600 mb-5 text-sm">By the end of KG, children should be able to achieve these learning outcomes:</p>
          <div className="grid md:grid-cols-2 gap-3">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-2 items-start bg-white rounded-lg p-3 border border-orange-200">
                <span className="text-orange-500 font-bold flex-shrink-0">✓</span>
                <p className="text-gray-700 text-sm">{m}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Tips for Parents & KG Teachers</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {parentTips.map((tip, i) => (
              <div key={i} className="border-l-4 border-orange-400 pl-4">
                <h3 className="font-bold text-gray-900 mb-1 text-sm">{tip.t}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{tip.b}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4 flex-wrap justify-between">
          <Link href="/books/primary-elementary/nursery" className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">← Nursery Books</Link>
          <Link href="/books/primary-elementary" className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">All Primary Classes</Link>
          <Link href="/books/primary-elementary/class1" className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">Class 1 Books →</Link>
        </div>
      </section>
    </div>
  );
}
