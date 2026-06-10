import Link from "next/link";

export const metadata = {
  title: "Primary & Elementary School Books | Nursery to Class 5 | Free PDF | Taleem4u",
  description: "Download free PCTB-approved textbooks for Nursery, KG, ECE, and Classes 1 to 5. All subjects — English, Urdu, Maths, Science, Social Studies — free PDF for Pakistani primary students.",
  keywords: "primary school books pakistan, class 1 to 5 books, PCTB books, elementary school books free PDF",
  alternates: { canonical: "https://taleem4u.com/books/primary-elementary" },
};

export default function PrimaryElementaryHub() {
  const classes = [
    { name: "Nursery", href: "/books/primary-elementary/nursery", icon: "🌸", desc: "Pre-literacy and pre-numeracy activities. Alphabet recognition, counting 1–20, colours, shapes, and basic Urdu huroof for the youngest learners aged 3–4.", subjects: ["English Primer", "Urdu Primer", "Math Primer", "Drawing"] },
    { name: "KG (Kindergarten)", href: "/books/primary-elementary/kg", icon: "🌼", desc: "Building on Nursery with structured phonics, Urdu reading readiness, counting to 100, and introduction to general knowledge and Islamiyat for children aged 4–5.", subjects: ["English", "Urdu", "Mathematics", "General Knowledge", "Islamiyat", "Drawing"] },
    { name: "ECE", href: "/books/primary-elementary/ece", icon: "🧸", desc: "Early Childhood Education materials for government ECE programmes. Play-based learning, language development, numeracy, and social-emotional skills for under-5s.", subjects: ["Play-Based Learning", "Language Development", "Numeracy", "Motor Skills"] },
    { name: "Class 1", href: "/books/primary-elementary/class1", icon: "1️⃣", desc: "Formal schooling begins. Students learn to read full sentences in English and Urdu, count to 100, perform addition and subtraction, and study Islamiyat and Pakistan Studies.", subjects: ["English", "Urdu", "Mathematics", "General Knowledge", "Islamiyat"] },
    { name: "Class 2", href: "/books/primary-elementary/class2", icon: "2️⃣", desc: "Numbers to 1,000, two-digit arithmetic with carrying and borrowing, multiplication tables 1–5, introduction to Science and Social Studies, and longer reading passages.", subjects: ["English", "Urdu", "Mathematics", "Science", "Social Studies", "Islamiyat", "Computer"] },
    { name: "Class 3", href: "/books/primary-elementary/class3", icon: "3️⃣", desc: "Multiplication tables 1–12, paragraph and essay writing, the solar system, food chains, Pakistan's provinces and rivers, and more complex Urdu literary texts.", subjects: ["English", "Urdu", "Mathematics", "Science", "Social Studies", "Islamiyat", "Computer"] },
    { name: "Class 4", href: "/books/primary-elementary/class4", icon: "4️⃣", desc: "Fractions, decimals, formal 5-paragraph essays, human body systems, ecosystems, Pakistan history from Mughal era to independence, and MS Word basics.", subjects: ["English", "Urdu", "Mathematics", "Science", "Social Studies", "Islamiyat", "Computer", "Drawing"] },
    { name: "Class 5", href: "/books/primary-elementary/class5", icon: "5️⃣", desc: "Final primary year. Ratios, percentages, algebra basics, advanced science, comprehensive Pakistan Studies, PEC Grade 5 assessment preparation, and Excel basics.", subjects: ["English", "Urdu", "Mathematics", "Science", "Social Studies", "Islamiyat", "Computer", "Drawing"] },
  ];

  const whyFree = [
    { title: "Equal Access for All Students", desc: "Whether your child attends a private school or a government school in a rural area, they deserve the same high-quality textbooks. We believe free access to PCTB books is a basic educational right." },
    { title: "Study Anytime, Anywhere", desc: "PDF textbooks on a mobile phone let children study during commutes, power outages, and school holidays. Digital access removes the barriers that have historically limited learning to the classroom." },
    { title: "Parents Can Be Involved", desc: "When parents can access the same textbooks their children use, they can help with homework, check understanding, and stay meaningfully involved in their child's education — regardless of their own education level." },
    { title: "Teachers Can Plan Better", desc: "Government and private school teachers use our PDFs to plan lessons, create worksheets, and prepare assessments aligned exactly to the PCTB curriculum their students are following." },
  ];

  const tips = [
    { t: "Start with 20 Minutes of Reading Daily", b: "The single highest-impact habit for primary school children is daily reading — in both English and Urdu. Even 20 minutes per day compounds to over 120 hours of additional reading per year." },
    { t: "Mathematics Needs Daily Practice", b: "Unlike reading, mathematics skills are lost quickly without regular practice. Even 10 minutes of arithmetic or times-table practice every day keeps skills sharp and prevents gaps from forming." },
    { t: "Use Drawing as a Learning Tool", b: "Encourage children to draw what they study — the solar system, the human body, maps of Pakistan. Drawing forces active recall and creates vivid, lasting visual memories of content." },
    { t: "Ask Questions, Not Just Answers", b: "Instead of asking 'what is the answer?', ask 'why do you think that?' Children who explain their reasoning develop the critical thinking that distinguishes top students from average ones." },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="text-sm text-yellow-100 mb-4">
            <Link href="/">Home</Link> / <Link href="/books">Books</Link> / <span>Primary &amp; Elementary</span>
          </nav>
          <h1 className="text-4xl font-bold mb-4">Primary &amp; Elementary School Books</h1>
          <p className="text-yellow-50 text-xl max-w-3xl">Free PCTB-approved textbooks for Nursery, KG, ECE, and Classes 1 to 5. All subjects in PDF format — completely free for all students, parents, and teachers in Pakistan.</p>
          <div className="mt-8 flex gap-4 flex-wrap text-sm">
            <span className="bg-white/20 px-4 py-2 rounded-full">Nursery to Class 5</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">PCTB Approved</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">All Subjects</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Free PDF Download</span>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Select Your Class</h2>
        <p className="text-gray-600 mb-10">All books follow the Punjab Curriculum and Textbook Board (PCTB) syllabus. Sindh (STBB), Federal (FBISE), and KPK board books are also available for most classes.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {classes.map((c) => (
            <Link key={c.name} href={c.href} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-yellow-400 transition group">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{c.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition">{c.name}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{c.desc}</p>
              <div className="flex flex-wrap gap-2">
                {c.subjects.map((s) => (
                  <span key={s} className="text-xs bg-orange-50 text-orange-700 border border-orange-200 px-2 py-0.5 rounded">{s}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-yellow-50 py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Why We Offer Free Primary School Books</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Education in Pakistan faces real challenges of access and equity. These free textbooks are our contribution to closing that gap.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {whyFree.map((w, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-yellow-200 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{w.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Tips for Primary School Success</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {tips.map((tip, i) => (
            <div key={i} className="bg-white border-l-4 border-orange-400 rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">{tip.t}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{tip.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-14 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Looking for Matric or Inter Books?</h2>
          <p className="text-yellow-100 mb-8">We have free textbooks and study notes for 9th, 10th, 11th, and 12th class as well. All subjects, all boards.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/books/matric" className="bg-white text-orange-600 px-7 py-3 rounded-full font-semibold hover:bg-gray-100 transition">Matric Books</Link>
            <Link href="/books/inter" className="border-2 border-white text-white px-7 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition">Inter Books</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
