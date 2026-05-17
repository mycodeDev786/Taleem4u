import Link from "next/link";

export const metadata = {
  title: "Free Pakistani Textbooks & Notes – Matric, FSc, Primary | Taleem4u",
  description:
    "Download free PDF textbooks and study notes for all classes in Pakistan. Matric (9th & 10th), FSc (11th & 12th), Primary, and competitive exam books for PPSC, MDCAT, and CSS.",
  alternates: { canonical: "https://www.taleem4u.com/books" },
};

export default function BooksPage() {
  const categories = [
    { name: "Matric Books (9th & 10th)", href: "/books/matric", icon: "📗", desc: "Punjab Curriculum & Textbook Board (PCTB) books for 9th and 10th class. Physics, Chemistry, Biology, Mathematics, English, Urdu, Islamiat, Pakistan Studies.", count: "10 Books" },
    { name: "Intermediate Books (FSc Part 1 & 2)", href: "/books/inter", icon: "📘", desc: "PCTB and Federal Board textbooks for 11th and 12th class. Pre-Medical, Pre-Engineering, ICS, and general subjects.", count: "12 Books" },
    { name: "Primary & Elementary Books", href: "/books/primary-elementary", icon: "📕", desc: "Class 1 to Class 8 textbooks including ECE, Nursery, KG, and elementary level books from Punjab and Federal textbook boards.", count: "30+ Books" },
    { name: "Notes & Key Books", href: "/books/notes", icon: "📓", desc: "Comprehensive notes and key books for Matric and Intermediate classes. Chapter summaries, important questions, and MCQ practice guides.", count: "20+ Resources" },
  ];

  const whySection = [
    { title: "All Books Are Free", desc: "Every textbook and note on Taleem4u is completely free. We believe every student in Pakistan deserves access to quality study materials, regardless of financial situation." },
    { title: "Official Curriculum Aligned", desc: "All books are sourced from Punjab Curriculum & Textbook Board (PCTB) and Federal Board of Intermediate & Secondary Education (FBISE), ensuring they match what is actually taught in your class." },
    { title: "Mobile Friendly PDFs", desc: "All PDFs are optimised for reading on smartphones and low-bandwidth connections. You can also download and read them offline — perfect for students in areas with limited internet access." },
    { title: "Complete Collections", desc: "We maintain complete book sets for every class, so you never need to search multiple websites. Find all subjects for your class in one place and download what you need in minutes." },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Free Pakistani Textbooks & Study Notes</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Download free PDF textbooks for all classes — from primary school to Intermediate (FSc/FA/ICS/ICom). 
          All books are sourced from official Pakistani curriculum boards and are completely free to access.
        </p>
      </header>

      <section className="mb-14">
        <div className="grid gap-6 sm:grid-cols-2">
          {categories.map((cat, i) => (
            <Link key={i} href={cat.href} className="bg-white rounded-2xl shadow-md p-7 flex gap-5 hover:shadow-xl hover:-translate-y-1 transition-all">
              <span className="text-5xl flex-shrink-0">{cat.icon}</span>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-xl font-bold text-gray-800">{cat.name}</h2>
                  <span className="bg-indigo-50 text-indigo-700 text-xs font-bold px-2 py-0.5 rounded-full">{cat.count}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{cat.desc}</p>
                <span className="mt-3 inline-block text-indigo-600 font-medium text-sm">Browse Books →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-14 bg-white rounded-2xl shadow p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Get Your Books from Taleem4u?</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {whySection.map((item, i) => (
            <div key={i} className="flex gap-4">
              <span className="text-3xl flex-shrink-0">✅</span>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-14">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">About Pakistan's Education System</h2>
        <div className="bg-indigo-50 rounded-2xl p-8 text-gray-700 space-y-4 text-sm leading-relaxed">
          <p>Pakistan's school education system follows a structured progression: Primary (Class 1–5), Middle (Class 6–8), Secondary (Class 9–10 / Matric), and Higher Secondary (Class 11–12 / Intermediate). After Intermediate, students either enter university undergraduate programs or pursue professional qualifications.</p>
          <p>The curriculum is governed by provincial curriculum authorities, with the Punjab Curriculum & Textbook Board (PCTB) being the largest, serving Punjab's 110+ million residents. The Federal Board (FBISE) serves Islamabad Capital Territory and several federally administered areas.</p>
          <p>Single National Curriculum (SNC): Since 2021, Pakistan has been progressively implementing the Single National Curriculum to create a uniform standard across private and public schools. SNC-aligned textbooks are now available for Classes 1–8 and are being expanded to higher classes.</p>
          <p>For competitive exams and professional test preparation, students also use supplementary notes, key books, and past papers beyond the standard textbooks. Taleem4u provides all of these resources in one place, completely free.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Related Resources</h2>
        <div className="flex flex-wrap gap-3">
          {[
            { label: "Past Papers", href: "/past-papers" },
            { label: "MDCAT Prep", href: "/prep/mdcat" },
            { label: "PPSC Prep", href: "/prep/ppsc" },
            { label: "Scholarships", href: "/scholarships" },
            { label: "Admissions", href: "/admissions" },
          ].map(l => (
            <Link key={l.href} href={l.href} className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-100 transition">{l.label}</Link>
          ))}
        </div>
      </section>
    </div>
  );
}
