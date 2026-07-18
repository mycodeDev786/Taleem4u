import Link from "next/link";
export const metadata = {
  title: "FPSC Jobs 2024 | Federal Public Service Commission | CSS & Direct Jobs | Taleem4u",
  description: "Latest FPSC job advertisements for CSS, PMS, and direct recruitment posts in federal ministries. Eligibility, application process, test dates, and preparation tips.",
  keywords: "FPSC jobs 2024, federal public service commission jobs, CSS exam FPSC, FPSC direct recruitment",
};
export default function FPSCJobs() {
  const posts = [
    { title: "CSS — Central Superior Services", scale: "BPS-17+", eligibility: "Bachelor degree, Age 21-30", test: "CSS Written Exam (Feb)", desc: "Entry into Pakistan Administrative Service, Foreign Service, Police Service, Inland Revenue Service and other Group A civil services. Most competitive exam in Pakistan." },
    { title: "Inspector Customs", scale: "BPS-16", eligibility: "Bachelor degree, Age 20-30", test: "FPSC Written + Interview", desc: "Inspect and enforce customs regulations at ports, airports, and border crossings. Excellent career progression within the Federal Board of Revenue." },
    { title: "Inspector Inland Revenue", scale: "BPS-16", eligibility: "Bachelor degree (Commerce/Economics preferred)", test: "FPSC Written + Interview", desc: "Assess and collect inland revenue taxes for the Federal Board of Revenue. Strong career growth in the taxation services." },
    { title: "Assistant Director (Various Ministries)", scale: "BPS-17", eligibility: "Master degree, Age 21-30", test: "FPSC Written + Interview", desc: "Administrative and policy positions across federal ministries including Interior, Finance, Education, Health, and Law." },
    { title: "Postal Staff Officer", scale: "BPS-14/16", eligibility: "Bachelor degree", test: "FPSC Written Test", desc: "Manage postal operations and services across Pakistan Post's national network." },
    { title: "Statistical Officer", scale: "BPS-17", eligibility: "Masters in Statistics/Economics", test: "FPSC Written + Interview", desc: "Collect, analyse, and interpret statistical data for Pakistan Bureau of Statistics and other federal bodies." },
  ];
  const prepTips = [
    { t: "English Essay and Precis Are Decisive", b: "For CSS specifically, the English papers are where most candidates either distinguish themselves or fall short. Practice writing one full essay weekly for the entire year before the exam. Quality of argumentation and expression matter enormously." },
    { t: "Current Affairs Cannot Be Crammed", b: "Read Dawn newspaper every single day for at least 12 months before the CSS exam. Current affairs knowledge must be built over time — it cannot be acquired in a few weeks of intensive reading." },
    { t: "Optional Subject Selection Is Strategic", b: "Choose optional subjects where at least 2-3 align with your undergraduate degree. Strong subject knowledge in your optionals is a major scoring advantage." },
    { t: "FPSC Direct Posts Need Targeted Prep", b: "For non-CSS FPSC posts, focus on General Knowledge, Pakistan Affairs, English, and the subject-specific knowledge relevant to the post (e.g., statistics for Statistical Officer)." },
  ];
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <nav className="text-sm text-blue-300 mb-4"><Link href="/">Home</Link> / <Link href="/jobs">Jobs</Link> / <Link href="/jobs/government">Government</Link> / <span>FPSC</span></nav>
          <h1 className="text-4xl font-bold mb-3">FPSC Jobs — Federal Public Service Commission</h1>
          <p className="text-blue-100 text-lg max-w-3xl">Latest job advertisements from Pakistan's Federal Public Service Commission. CSS civil service, direct recruitment posts, and officer-grade positions in federal ministries.</p>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">About FPSC</h2>
        <p className="text-gray-700 leading-relaxed mb-4">The Federal Public Service Commission (FPSC) is Pakistan's premier federal recruitment body established under Article 242 of the Constitution. FPSC recruits for all Group A and Group B positions in federal government ministries, divisions, and attached departments. Its most prestigious function is administering the CSS (Central Superior Services) examination, which fills positions in Pakistan's elite civil services. FPSC also conducts direct recruitment for hundreds of non-CSS positions throughout the year.</p>
        <p className="text-gray-700 leading-relaxed mb-8">FPSC operates on merit-based selection with no political interference — it is widely regarded as one of Pakistan's most transparent public institutions. Job advertisements are published in major national newspapers and on the official FPSC website at fpsc.gov.pk.</p>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular FPSC Posts</h2>
        <div className="space-y-4 mb-12">
          {posts.map((p, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition">
              <div className="flex flex-col md:flex-row md:items-start gap-3">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg">{p.title}</h3>
                  <p className="text-sm text-gray-700 mt-1 mb-2">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{p.scale}</span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Eligibility: {p.eligibility}</span>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">Test: {p.test}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Preparation Tips for FPSC Exams</h2>
        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {prepTips.map((tip, i) => (
            <div key={i} className="bg-white border-l-4 border-blue-800 rounded-lg p-5 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">{tip.t}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{tip.b}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-4 flex-wrap">
          <Link href="/guides/css-exam-guide" className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-950 transition">CSS Exam Guide</Link>
          <Link href="/past-papers/css" className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">CSS Past Papers</Link>
          <Link href="/jobs/government" className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition">All Government Jobs</Link>
        </div>
      </section>
    </div>
  );
}
