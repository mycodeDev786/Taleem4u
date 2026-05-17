import Link from "next/link";

export const metadata = {
  title: "CSS Past Papers – All Compulsory & Optional Subjects | Taleem4u",
  description:
    "Download CSS (Central Superior Services) past papers for all compulsory and optional subjects. Papers from 2005–2024. Prepare smarter with year-wise CSS exam collections.",
  alternates: { canonical: "https://www.taleem4u.com/past-papers/css" },
};

export default function CSSPastPapers() {
  const compulsorySubjects = [
    { name: "English Essay", slug: "english-essay", desc: "Essay papers testing analytical thinking, current affairs awareness, and quality of written expression." },
    { name: "English Précis & Composition", slug: "english-precis", desc: "Précis writing, comprehension passages, translation, and letter/report writing." },
    { name: "General Science & Ability", slug: "general-science", desc: "Mathematics, logical reasoning, general science, and analytical thinking questions." },
    { name: "Current Affairs", slug: "current-affairs", desc: "National and international political, economic, and social events and analysis." },
    { name: "Pakistan Affairs", slug: "pakistan-affairs", desc: "History of Pakistan, constitution, governance, FATA, Kashmir, and national issues." },
    { name: "Islamic Studies / Ethics", slug: "islamic-studies", desc: "Principles of Islam, Quranic guidance, Islamic civilization, and ethics for non-Muslims." },
  ];

  const optionalGroups = [
    { group: "Group A – Humanities", subjects: ["History of Pakistan & India", "International Relations", "Political Science", "Sociology", "Public Administration"] },
    { group: "Group B – Law", subjects: ["Constitutional Law", "International Law", "Muslim Law & Jurisprudence", "Mercantile Law"] },
    { group: "Group C – Sciences", subjects: ["Physics", "Chemistry", "Mathematics", "Statistics", "Computer Science"] },
    { group: "Group D – Economics & Commerce", subjects: ["Economics", "Accountancy & Auditing", "Business Administration", "Agriculture & Forestry"] },
  ];

  const cssStats = [
    { label: "Total Marks", value: "1200" },
    { label: "Written Exam", value: "1000" },
    { label: "Viva Voce", value: "200" },
    { label: "Pass Rate (avg)", value: "~2–4%" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <nav className="text-sm mb-6 text-gray-600">
        <Link href="/" className="hover:underline">Home</Link> &gt;{" "}
        <Link href="/past-papers" className="hover:underline">Past Papers</Link> &gt;{" "}
        <span className="font-semibold">CSS</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">CSS Past Papers – Central Superior Services</h1>
        <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
          The CSS examination is Pakistan's most prestigious competitive exam, conducted by the Federal Public 
          Service Commission (FPSC). Practicing with past papers is essential to understanding the depth and 
          breadth of questions expected at this level.
        </p>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
        {cssStats.map((s, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-5 text-center">
            <p className="text-2xl font-extrabold text-emerald-600">{s.value}</p>
            <p className="text-gray-500 text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Compulsory Subject Papers</h2>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {compulsorySubjects.map((subject) => (
            <Link key={subject.slug} href={`/past-papers/css/${subject.slug}`}
              className="bg-white rounded-xl shadow p-6 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{subject.name}</h2>
              <p className="text-gray-500 text-sm flex-1 mb-4 leading-relaxed">{subject.desc}</p>
              <span className="text-emerald-600 text-sm font-medium">View Papers →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12 bg-white rounded-2xl shadow p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Optional Subject Groups</h2>
        <p className="text-gray-600 mb-6 text-sm">CSS candidates must select optional subjects from the approved list totalling at least 600 marks. Papers for all optional subjects are available below.</p>
        <div className="space-y-6">
          {optionalGroups.map((g, i) => (
            <div key={i} className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-800 mb-3">{g.group}</h3>
              <div className="flex flex-wrap gap-2">
                {g.subjects.map((s, j) => (
                  <a key={j} href="#" className="bg-gray-50 hover:bg-emerald-50 hover:text-emerald-700 text-gray-600 px-3 py-1.5 rounded-lg text-sm transition border border-gray-200">{s}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 bg-emerald-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">CSS Exam Overview & Eligibility</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p><strong>What is CSS?</strong> The Central Superior Services (CSS) competitive examination is conducted annually by the FPSC to recruit officers for Pakistan's civil services, including DMG (District Management Group), Police Service, Foreign Service, Income Tax, Customs, and several other occupational groups.</p>
          <p><strong>Eligibility:</strong> Candidates must hold a Bachelor's degree (minimum 2nd division / 45%) from an HEC-recognized university, be between 21–30 years of age (with relaxations for government servants and specific groups), and must be a Pakistani citizen.</p>
          <p><strong>Exam Structure:</strong> The written exam consists of 12 papers — 6 compulsory and 6 optional — for a total of 1,000 marks. Candidates who qualify the written exam are called for a Viva Voce (oral examination) worth 200 marks. Final merit is calculated on the combined score.</p>
          <p><strong>Recommended Preparation Timeline:</strong> Most successful CSS candidates invest 12–18 months of dedicated preparation. Begin with compulsory subjects, especially English Essay and Précis, which are the most differentiating papers. Simultaneously build a current affairs reading habit by following quality newspapers and journals daily.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Related Resources</h2>
        <div className="flex flex-wrap gap-3">
          {[
            { label: "PPSC Past Papers", href: "/past-papers/ppsc" },
            { label: "Matric Past Papers", href: "/past-papers/matric" },
            { label: "Inter Past Papers", href: "/past-papers/inter" },
            { label: "PPSC Prep Guide", href: "/prep/ppsc" },
            { label: "Government Jobs", href: "/jobs/government" },
          ].map(l => (
            <Link key={l.href} href={l.href} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-50 hover:text-emerald-700 transition">{l.label}</Link>
          ))}
        </div>
      </section>
    </div>
  );
}
