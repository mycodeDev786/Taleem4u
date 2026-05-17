import Link from "next/link";

export const metadata = {
  title: "Intermediate Past Papers (FSc, FA, ICS, ICom) – All Boards Pakistan | Taleem4u",
  description:
    "Download free Intermediate past papers for 11th and 12th class. FSc Pre-Medical, Pre-Engineering, ICS, FA, ICom subjects from all major Punjab, Sindh, and Federal Boards.",
  alternates: { canonical: "https://www.taleem4u.com/past-papers/inter" },
};

export default function InterPastPapers() {
  const groups = [
    {
      name: "FSc Pre-Medical",
      subjects: ["Biology", "Chemistry", "Physics", "English", "Urdu"],
      color: "emerald",
    },
    {
      name: "FSc Pre-Engineering",
      subjects: ["Mathematics", "Chemistry", "Physics", "English", "Urdu"],
      color: "blue",
    },
    {
      name: "ICS (Computer Science)",
      subjects: ["Computer Science", "Mathematics", "Physics / Statistics", "English"],
      color: "purple",
    },
    {
      name: "FA / ICom",
      subjects: ["Economics", "Accounting", "Business Maths", "English", "Urdu", "Civics"],
      color: "orange",
    },
  ];

  const subjects = [
    { name: "Physics", slug: "physics", desc: "All chapters from Part 1 and Part 2. MCQs, numerical problems, and short/long questions from board papers 2014–2024." },
    { name: "Chemistry", slug: "chemistry", desc: "Organic, inorganic, and physical chemistry. Solved past papers with worked calculations for Part 1 and Part 2." },
    { name: "Mathematics", slug: "mathematics", desc: "Calculus, vectors, algebra, and statistics. Detailed step-by-step solutions for all board paper questions." },
    { name: "Biology", slug: "biology", desc: "Cell biology, genetics, physiology, and ecology questions from Intermediate annual and supplementary exams." },
    { name: "Computer Science", slug: "computer-science", desc: "Programming, data structures, database, and networking MCQs and theory questions for ICS students." },
    { name: "English", slug: "english", desc: "Essays, letters, story writing, precis, comprehension, and grammar questions from major Pakistani boards." },
    { name: "Economics", slug: "economics", desc: "Microeconomics, macroeconomics, national income, and trade theory questions for FA/ICom students." },
    { name: "Accounting", slug: "accounting", desc: "Bookkeeping, financial statements, partnership accounts, and company accounts past papers for ICom." },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <nav className="text-sm mb-6 text-gray-600">
        <Link href="/" className="hover:underline">Home</Link> &gt;{" "}
        <Link href="/past-papers" className="hover:underline">Past Papers</Link> &gt;{" "}
        <span className="font-semibold">Intermediate</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Intermediate Past Papers (11th & 12th Class)</h1>
        <p className="text-gray-600 text-lg max-w-3xl">
          Download past papers for FSc Part 1 and Part 2, FA, ICS, and ICom from all major Pakistani boards. 
          Papers are available for both annual and supplementary examinations from 2014 to 2024.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Browse by Subject</h2>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {subjects.map((subject) => (
            <Link key={subject.slug} href={`/past-papers/inter/${subject.slug}`}
              className="bg-white rounded-xl shadow p-6 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{subject.name}</h2>
              <p className="text-gray-500 text-sm flex-1 mb-4 leading-relaxed">{subject.desc}</p>
              <span className="text-blue-600 text-sm font-medium">Download Papers →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12 bg-white rounded-2xl shadow p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Papers Available by Group</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Intermediate in Pakistan is offered across four main groups. Select the group matching your stream to find relevant subject papers.
        </p>
        <div className="grid sm:grid-cols-2 gap-5">
          {groups.map((g, i) => (
            <div key={i} className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-800 mb-3">{g.name}</h3>
              <ul className="space-y-1">
                {g.subjects.map((s, j) => (
                  <li key={j} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="text-emerald-500">✓</span>{s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 bg-blue-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Tips for FSc Board Exam Preparation</h2>
        <div className="space-y-4">
          {[
            { tip: "Prioritise past paper MCQs for short-question preparation", detail: "FSc board exams typically have 20–30 MCQs in Part A. Repeated MCQs from past papers make up 40–60% of every paper. Compile these into a subject-wise list and memorise them two weeks before exams." },
            { tip: "Master numerical problems with full working", detail: "In Physics and Chemistry, marks for numerical questions are awarded for showing correct method and units, not just the final answer. Practice writing full working for all formula-based questions." },
            { tip: "Use both Part 1 and Part 2 past papers for supplementary prep", detail: "If you are appearing as a private candidate or for supplementary exams, note that some boards reuse questions across years. Solving 10 years of papers is highly recommended." },
            { tip: "Understand the marking scheme before writing long answers", detail: "Long questions in FSc are marked per point. Review the official marking keys provided by boards to understand exactly what examiners expect for full marks." },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-5">
              <h3 className="font-semibold text-gray-800 mb-1">{item.tip}</h3>
              <p className="text-gray-600 text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Related Resources</h2>
        <div className="flex flex-wrap gap-3">
          {[
            { label: "Intermediate Books", href: "/books/inter" },
            { label: "Matric Past Papers", href: "/past-papers/matric" },
            { label: "CSS Past Papers", href: "/past-papers/css" },
            { label: "MDCAT Prep", href: "/prep/mdcat" },
            { label: "Scholarships", href: "/scholarships" },
          ].map(l => (
            <Link key={l.href} href={l.href} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-50 hover:text-blue-700 transition">{l.label}</Link>
          ))}
        </div>
      </section>
    </div>
  );
}
