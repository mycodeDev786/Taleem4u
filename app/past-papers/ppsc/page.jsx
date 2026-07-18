import Link from "next/link";
export const metadata = {
  title: "PPSC Past Papers | Punjab Public Service Commission | Free Download | Taleem4u",
  description: "Download free PPSC past papers for Lecturer, Sub-Inspector, Assistant, Tax Officer, and all PPSC posts. Solved papers with answers from 2015 to 2023.",
  keywords: "PPSC past papers, PPSC solved papers, PPSC lecturer past papers, PPSC sub inspector papers",
};
export default function PPSCPastPapers() {
  const paperSets = [
    { post: "Lecturer (All Subjects)", years: "2015–2023", papers: 45, desc: "Past papers for Lecturer posts across all subjects — English, Urdu, Mathematics, Physics, Chemistry, Biology, History, Political Science, Computer Science, and more. Each subject has its own subject-specific paper plus a general paper." },
    { post: "Sub-Inspector (Police)", years: "2016–2023", papers: 20, desc: "Written test papers for Sub-Inspector recruitment covering General Knowledge, Pakistan Studies, English, and basic law and crime investigation principles." },
    { post: "Assistant (Secretariat)", years: "2015–2023", papers: 30, desc: "Past papers for Assistant posts in the Punjab Secretariat and various Punjab departments. Strong focus on English, Computer, General Knowledge, and Pakistan Studies." },
    { post: "Tax Officer", years: "2017–2023", papers: 18, desc: "Punjab Revenue Authority Tax Officer past papers testing Commerce, Economics, Tax Law basics, Mathematics, and General Knowledge." },
    { post: "Junior Clerk", years: "2015–2023", papers: 28, desc: "Junior Clerk past papers testing basic English, Urdu, Computer skills (MS Office), General Knowledge, and simple Arithmetic." },
    { post: "Naib Tehsildar / Tehsildar", years: "2016–2023", papers: 15, desc: "Revenue administration posts requiring knowledge of Land Revenue Act, revenue records, General Knowledge, and Pakistan Studies." },
  ];
  const tips = [
    { t: "PPSC Repeats Questions Frequently", b: "This is the single most important fact about PPSC preparation. Questions on Pakistan Studies, Islamic Studies, and General Knowledge recur across different posts and years. Solving 5+ years of past papers reveals these patterns clearly." },
    { t: "Subject Papers for Lecturer Posts Are Different", b: "Lecturer past papers have two parts: a General Paper (GK, Pakistan Studies, English, Islamic Studies) and a Subject Paper (your specific teaching subject at undergraduate level). Both must be prepared separately." },
    { t: "Time Yourself Strictly", b: "PPSC tests are typically 90 minutes to 2 hours for 100 MCQs. Practice solving papers within this time limit. Speed and accuracy under time pressure is a skill that develops only through repeated timed practice." },
    { t: "Mark and Review Wrong Answers", b: "After solving a past paper, mark it carefully and then spend equal time understanding why each wrong answer was wrong. This targeted review produces faster score improvement than simply solving more papers without review." },
  ];
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <nav className="text-sm text-blue-300 mb-4"><Link href="/">Home</Link> / <Link href="/past-papers">Past Papers</Link> / <span>PPSC</span></nav>
          <h1 className="text-4xl font-bold mb-3">PPSC Past Papers — Punjab Public Service Commission</h1>
          <p className="text-blue-100 text-lg max-w-3xl">Free solved past papers for all PPSC posts from 2015 to 2023. Lecturer, Sub-Inspector, Assistant, Tax Officer, Junior Clerk, and more.</p>
          <div className="mt-6 flex gap-4 text-sm flex-wrap">
            <span className="bg-white/20 px-3 py-1.5 rounded-full">150+ Past Papers</span>
            <span className="bg-white/20 px-3 py-1.5 rounded-full">All Posts Covered</span>
            <span className="bg-white/20 px-3 py-1.5 rounded-full">Free Download</span>
          </div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Why PPSC Past Papers Are Your Best Preparation Resource</h2>
        <p className="text-gray-700 leading-relaxed mb-8">The Punjab Public Service Commission follows consistent question patterns and frequently repeats similar — and sometimes identical — questions across different recruitment cycles. Candidates who have solved 5 or more years of PPSC past papers for their target post go into the examination with a significant advantage because they recognise question types, know which topics receive the most emphasis, and have practised answering under the time constraints of the actual test. No preparation resource is more valuable than authentic past papers.</p>
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {paperSets.map((p, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition">
              <h3 className="font-bold text-gray-900 mb-1">{p.post}</h3>
              <p className="text-xs text-blue-600 mb-2 font-medium">{p.years} &bull; {p.papers} papers available</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">{p.desc}</p>
              <button className="text-xs bg-blue-700 text-white px-4 py-1.5 rounded-full hover:bg-blue-800 transition">Download Papers</button>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use PPSC Past Papers Effectively</h2>
        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {tips.map((tip, i) => (
            <div key={i} className="bg-white border-l-4 border-blue-700 rounded-lg p-5 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">{tip.t}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{tip.b}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-4 flex-wrap">
          <Link href="/prep/ppsc" className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">PPSC Prep Guide</Link>
          <Link href="/jobs/government/ppsc" className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">PPSC Jobs</Link>
          <Link href="/past-papers" className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition">All Past Papers</Link>
        </div>
      </section>
    </div>
  );
}
