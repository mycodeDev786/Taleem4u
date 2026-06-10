import Link from "next/link";

export const metadata = {
  title: "Matric Past Papers 2015–2023 | 9th & 10th Class | All Boards | Taleem4u",
  description:
    "Download free Matric past papers for 9th and 10th class. All subjects — Physics, Chemistry, Biology, Math, English, Urdu — for all Pakistani BISE boards from 2015 to 2023.",
  keywords: "matric past papers, 9th class past papers, 10th class past papers, BISE past papers",
  alternates: { canonical: "https://taleem4u.com/past-papers/matric" },
};

export default function MatricPastPapers() {
  const subjects9th = [
    { name: "Physics", code: "ph", papers: 36 },
    { name: "Chemistry", code: "ch", papers: 36 },
    { name: "Biology", code: "bio", papers: 36 },
    { name: "Mathematics", code: "math", papers: 36 },
    { name: "English (Compulsory)", code: "eng", papers: 36 },
    { name: "Urdu (Compulsory)", code: "urdu", papers: 36 },
    { name: "Islamiyat", code: "isl", papers: 36 },
    { name: "Pakistan Studies", code: "pst", papers: 36 },
    { name: "Computer Science", code: "cs", papers: 24 },
    { name: "General Math", code: "gm", papers: 36 },
  ];

  const boards = [
    "BISE Lahore", "BISE Gujranwala", "BISE Rawalpindi", "BISE Faisalabad",
    "BISE Multan", "BISE Sahiwal", "BISE Sargodha", "BISE Bahawalpur",
    "BISE DG Khan", "BISE Karachi", "BISE Hyderabad", "BISE Sukkur",
    "BISE Mirpurkhas", "BISE Peshawar", "BISE Mardan",
  ];

  const tips = [
    "Begin past paper practice at least 4 months before board exams",
    "Solve at least one complete paper per subject each week",
    "Time yourself strictly — Matric papers are 3 hours long",
    "Focus on long questions — they carry the most marks",
    "Compare your answers with the official marking scheme",
    "Identify topics that appear every year and prioritize them",
    "Practice drawing diagrams and chemical equations neatly",
    "Revise important definitions the day before the exam",
  ];

  const years = [2023, 2022, 2021, 2019, 2018, 2017, 2016, 2015];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="text-sm text-blue-300 mb-4">
            <Link href="/">Home</Link> / <Link href="/past-papers">Past Papers</Link> / <span>Matric</span>
          </nav>
          <h1 className="text-4xl font-bold mb-3">Matric Past Papers — 9th & 10th Class</h1>
          <p className="text-blue-100 text-lg max-w-3xl">Download free past papers for all Matric subjects from every BISE board in Pakistan. Papers available from 2015 to 2023.</p>
        </div>
      </section>

      {/* Info bar */}
      <div className="bg-blue-50 border-b border-blue-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap gap-6 text-sm text-blue-800">
          <span>📚 <strong>Classes:</strong> 9th & 10th</span>
          <span>🏫 <strong>Boards:</strong> 15+ BISE Boards</span>
          <span>📅 <strong>Years:</strong> 2015–2023</span>
          <span>📄 <strong>Format:</strong> PDF Download</span>
          <span>💰 <strong>Cost:</strong> Completely Free</span>
        </div>
      </div>

      {/* Subjects Grid */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">9th Class Past Papers by Subject</h2>
        <p className="text-gray-600 mb-8">Select any subject to access past papers sorted by year and board. All papers are in PDF format.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {subjects9th.map((s) => (
            <div key={s.code} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-blue-400 transition cursor-pointer text-center">
              <h3 className="font-semibold text-gray-900 mb-1">{s.name}</h3>
              <p className="text-xs text-gray-500">{s.papers} papers available</p>
              <button className="mt-3 text-xs bg-blue-600 text-white px-4 py-1.5 rounded-full hover:bg-blue-700 transition">View Papers</button>
            </div>
          ))}
        </div>
      </section>

      {/* 10th class */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">10th Class Past Papers by Subject</h2>
          <p className="text-gray-600 mb-8">All 10th class subjects with papers from all BISE boards. Same subjects as 9th class with 10th level content.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {subjects9th.map((s) => (
              <div key={s.code} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-blue-400 transition cursor-pointer text-center">
                <h3 className="font-semibold text-gray-900 mb-1">{s.name}</h3>
                <p className="text-xs text-gray-500">{s.papers} papers available</p>
                <button className="mt-3 text-xs bg-gray-700 text-white px-4 py-1.5 rounded-full hover:bg-gray-800 transition">View Papers</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Board */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Browse by BISE Board</h2>
        <p className="text-gray-600 mb-8">We cover past papers from all major BISE boards across Punjab, Sindh, KPK, and Balochistan.</p>
        <div className="flex flex-wrap gap-3">
          {boards.map((b) => (
            <button key={b} className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-800 hover:border-blue-500 hover:text-blue-700 hover:bg-blue-50 transition">{b}</button>
          ))}
        </div>
      </section>

      {/* Browse by Year */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Browse by Year</h2>
          <p className="text-gray-600 mb-8">Select a specific exam year to access all papers from that year across all boards and subjects.</p>
          <div className="flex flex-wrap gap-4">
            {years.map((y) => (
              <button key={y} className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition">{y}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Tips for Using Matric Past Papers</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {tips.map((tip, i) => (
            <div key={i} className="flex gap-3 items-start bg-white border border-gray-200 rounded-lg p-4">
              <span className="text-blue-600 font-bold flex-shrink-0">✓</span>
              <p className="text-gray-800 text-sm">{tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-14 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Also Check Intermediate Past Papers</h2>
          <p className="text-blue-100 mb-8">Preparing for FSc? We have complete past papers for 11th and 12th class too.</p>
          <Link href="/past-papers/inter" className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">Inter Past Papers →</Link>
        </div>
      </section>
    </div>
  );
}
