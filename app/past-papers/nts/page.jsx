import Link from "next/link";
export const metadata = {
  title: "NTS Past Papers | National Testing Service | GAT, NAT, Government Tests | Taleem4u",
  description: "Free NTS past papers for GAT General, NAT-I, NAT-II, and all NTS-conducted government department tests. Solved papers with answer keys from 2015 to 2023.",
  keywords: "NTS past papers, NTS GAT past papers, NTS NAT papers, NTS government test papers, NTS solved papers",
};
export default function NTSPastPapers() {
  const testTypes = [
    { name: "GAT General", full: "Graduate Assessment Test", purpose: "Admission to MS/MPhil programmes", format: "100 MCQs — Verbal, Analytical, Quantitative", papers: "2015–2023" },
    { name: "GAT Subject", full: "Graduate Assessment Test — Subject", purpose: "Admission to PhD programmes", format: "Subject-specific MCQs in chosen discipline", papers: "2016–2023" },
    { name: "NAT-I", full: "National Aptitude Test — Level I", purpose: "Admission to undergraduate programmes", format: "120 MCQs — English, Mathematics, Science/Arts", papers: "2015–2023" },
    { name: "NAT-II", full: "National Aptitude Test — Level II", purpose: "Admission to BS programmes (various universities)", format: "120 MCQs — subject specific sections", papers: "2016–2023" },
    { name: "Government Department Tests", full: "Tests for federal/provincial departments", purpose: "Recruitment to government posts through NTS", format: "Varies by post — typically 80-100 MCQs", papers: "2016–2023" },
    { name: "School Teacher Tests", full: "PST, SST, SESE Tests", purpose: "Primary and Secondary School Teacher recruitment", format: "Education, Subject Knowledge, General Knowledge MCQs", papers: "2017–2023" },
  ];
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-emerald-700 to-teal-800 text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <nav className="text-sm text-emerald-300 mb-4"><Link href="/">Home</Link> / <Link href="/past-papers">Past Papers</Link> / <span>NTS</span></nav>
          <h1 className="text-4xl font-bold mb-3">NTS Past Papers — National Testing Service</h1>
          <p className="text-emerald-100 text-lg max-w-3xl">Free NTS past papers for GAT, NAT, School Teacher Tests, and all NTS-conducted government recruitment tests. Solved papers with answer keys from 2015 to 2023.</p>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About NTS Tests</h2>
        <p className="text-gray-700 leading-relaxed mb-4">The National Testing Service (NTS) is one of Pakistan's largest testing organisations, conducting standardised tests for university admissions (GAT, NAT), government department recruitment, and school teacher selection across all provinces. Over 3 million test-takers appear in NTS tests annually, making NTS experience essential for both higher education and government employment aspirants.</p>
        <p className="text-gray-700 leading-relaxed mb-8">NTS tests follow consistent formats and question styles that reward specific preparation. Candidates who have solved 3 to 5 years of NTS past papers for their target test significantly outperform those who prepare from general books alone, because NTS has identifiable question patterns in its analytical reasoning, verbal ability, and quantitative sections.</p>
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {testTypes.map((t, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition">
              <h3 className="font-bold text-gray-900 text-lg">{t.name}</h3>
              <p className="text-xs text-emerald-700 font-medium mb-2">{t.full}</p>
              <div className="space-y-1 text-sm text-gray-700 mb-3">
                <p><strong>Purpose:</strong> {t.purpose}</p>
                <p><strong>Format:</strong> {t.format}</p>
                <p><strong>Papers Available:</strong> {t.papers}</p>
              </div>
              <button className="text-xs bg-emerald-700 text-white px-4 py-1.5 rounded-full hover:bg-emerald-800 transition">Download Papers</button>
            </div>
          ))}
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">NTS Test Preparation Tips</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="space-y-3">
              <p><strong>Verbal Section:</strong> Practise synonyms, antonyms, analogies, sentence completion, and reading comprehension. NTS verbal questions have predictable vocabulary ranges — past papers reveal the exact word types tested.</p>
              <p><strong>Analytical Section:</strong> Practice logical reasoning puzzles, series completion, data interpretation, and critical reasoning. This section rewards pattern recognition developed through repeated practice.</p>
            </div>
            <div className="space-y-3">
              <p><strong>Quantitative Section:</strong> Review percentage, ratio, profit/loss, simple interest, basic algebra, and geometry. NTS quantitative questions are based on O-Level/Matric mathematics — not advanced topics.</p>
              <p><strong>Time Management:</strong> NTS tests typically allow 90 seconds per question. Practice solving 100 MCQs in 90 minutes consistently before the actual test — speed is a genuine skill that must be developed.</p>
            </div>
          </div>
        </div>
        <div className="flex gap-4 flex-wrap">
          <Link href="/past-papers" className="bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-800 transition">All Past Papers</Link>
          <Link href="/jobs/government" className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">Government Jobs</Link>
        </div>
      </section>
    </div>
  );
}
