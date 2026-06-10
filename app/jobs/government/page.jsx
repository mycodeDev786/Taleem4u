import Link from "next/link";

export const metadata = {
  title: "Government Jobs in Pakistan 2024 | FPSC, PPSC, NTS, WAPDA & More | Taleem4u",
  description:
    "Browse latest government jobs in Pakistan — FPSC, PPSC, SPSC, KPPSC, NTS, WAPDA, Railways, Police, and Education Department. Daily updated listings with application details.",
  keywords: "government jobs pakistan, FPSC jobs, PPSC jobs, NTS jobs, sarkari naukri, public sector jobs",
  alternates: { canonical: "https://taleem4u.com/jobs/government" },
};

export default function GovernmentJobs() {
  const commissions = [
    { name: "FPSC", full: "Federal Public Service Commission", scope: "Federal ministries, federal departments, armed forces civilian posts", posts: "CSS, PMS, Inspector, Inspector of Customs, Postal Officer", link: "/jobs/government/fpsc" },
    { name: "PPSC", full: "Punjab Public Service Commission", scope: "Punjab province government departments", posts: "Lecturer, Sub-Inspector, Assistant, Tax Officer, Junior Clerk", link: "/jobs/government/ppsc" },
    { name: "SPSC", full: "Sindh Public Service Commission", scope: "Sindh province government departments", posts: "Headmaster, Lecturer, Inspector, District Officer, Assistant", link: "/jobs/government/spsc" },
    { name: "KPPSC", full: "KPK Public Service Commission", scope: "Khyber Pakhtunkhwa province departments", posts: "Patwari, Lecturer, Police Sub-Inspector, Naib Tehsildar", link: "/jobs/government/kppsc" },
    { name: "BPSC", full: "Balochistan Public Service Commission", scope: "Balochistan province government departments", posts: "Assistant Director, Superintendent, Lecturer, Inspector", link: "/jobs/government/bpsc" },
    { name: "NTS", full: "National Testing Service", scope: "Multiple federal & provincial departments", posts: "Various posts tested via NTS — announces multiple exams monthly", link: "/jobs/government/nts" },
    { name: "OTS", full: "Open Testing Service", scope: "Punjab-based departments and projects", posts: "Patwari, Junior Clerk, Data Entry Operator, Tehsildar", link: "/jobs/government/ots" },
    { name: "PTS", full: "Pakistan Testing Service", scope: "Federal & provincial departments", posts: "School teachers, Revenue staff, Water & Sanitation posts", link: "/jobs/government/pts" },
    { name: "WAPDA", full: "Water & Power Development Authority", scope: "Power generation and water management", posts: "Lineman, SDO, Sub-Engineer, XEN, Meter Reader, Office staff", link: "/jobs/government/wapda" },
    { name: "Pakistan Railways", full: "Ministry of Railways", scope: "Rail transport across Pakistan", posts: "Driver, Guard, Ticket Checker, Station Master, Engineering posts", link: "/jobs/government/railway" },
    { name: "Police Department", full: "Federal & Provincial Police", scope: "Law enforcement across Pakistan", posts: "Constable, ASI, SI, DSP, Inspector — all ranks", link: "/jobs/government/police" },
    { name: "Education Department", full: "Provincial Education Departments", scope: "Public schools and colleges", posts: "Primary Teacher (PST), SST, SESE, Lecturer, Headmaster, Principal", link: "/jobs/government/education" },
  ];

  const benefits = [
    { title: "Job Security for Life", desc: "Government employees are rarely laid off. Once confirmed after probation, your job is protected by service rules, providing unmatched stability for you and your family." },
    { title: "Pension & Retirement Benefits", desc: "A full pension after 25 years of service is one of the most valued benefits. Government pensions provide income for life after retirement — something private jobs rarely offer." },
    { title: "Medical & Housing Facilities", desc: "Most government posts include government-funded medical cover for the employee and family, official residences or house rent allowance, and other allowances based on pay grade." },
    { title: "Regular Pay Increments", desc: "Annual increments on the Basic Pay Scale (BPS) are automatic. Pay commissions also periodically revise salaries upward, meaning your income grows consistently over time." },
    { title: "Annual & Casual Leaves", desc: "Government employees are entitled to 30 days annual leave, 10 days casual leave, and up to 90 days sick leave per year — far more generous than most private employers." },
    { title: "Career Progression", desc: "Clear grade-based promotion timelines (typically every 3–5 years) mean you always know what's next. Promotions are based on ACRs (Annual Confidential Reports) and seniority." },
  ];

  const process = [
    { step: "1", title: "Find the Advertisement", desc: "Government jobs are advertised in major newspapers (Dawn, Jang, The News), the commission's official website, and Taleem4u. Read the advertisement carefully — eligibility, age limit, and required documents are all listed." },
    { step: "2", title: "Check Your Eligibility", desc: "Verify that you meet all criteria: educational qualification, age limit (usually 18–30, with relaxations), domicile requirement, and any special conditions. Applying without meeting criteria wastes your time and application fee." },
    { step: "3", title: "Submit Online Application", desc: "Most commissions (FPSC, PPSC, NTS) now accept applications online through their portals. Create an account, fill the form accurately, upload documents, and pay the application fee via bank or online payment." },
    { step: "4", title: "Prepare for Written Test", desc: "Most posts require a written test conducted by NTS, OTS, PTS, or the commission itself. Tests cover General Knowledge, Pakistan Studies, Islamic Studies, English, Math, and subject-specific knowledge depending on the post." },
    { step: "5", title: "Appear for Interview", desc: "Candidates who pass the written test are called for an interview by the selection board. Dress formally, carry all original documents and attested copies, and be prepared to answer questions about your field and general affairs." },
    { step: "6", title: "Medical & Document Verification", desc: "Selected candidates undergo a medical examination and document verification. Ensure all your degrees are attested by HEC/Board, your domicile is valid, and your character certificate is from the correct authority." },
  ];

  const recentJobs = [
    { title: "Assistant (BS-14)", dept: "Punjab Secretariat", lastDate: "30 June 2024", seats: "250", test: "PPSC Written Test" },
    { title: "Sub-Inspector (Police)", dept: "Punjab Police", lastDate: "15 July 2024", seats: "500", test: "Physical + Written" },
    { title: "Patwari", dept: "Board of Revenue Punjab", lastDate: "20 July 2024", seats: "1,200", test: "OTS" },
    { title: "Postal Mail Guard", dept: "Pakistan Post", lastDate: "10 July 2024", seats: "300", test: "NTS" },
    { title: "Junior Clerk (BS-11)", dept: "WAPDA", lastDate: "25 July 2024", seats: "180", test: "NTS/Written" },
    { title: "Primary School Teacher (PST)", dept: "Education Department KPK", lastDate: "5 August 2024", seats: "2,000", test: "NTS" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="text-sm text-blue-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/jobs" className="hover:text-white">Jobs</Link> / <span>Government Jobs</span>
          </nav>
          <h1 className="text-5xl font-bold mb-4">Government Jobs in Pakistan</h1>
          <p className="text-blue-100 text-xl max-w-3xl">Latest vacancies from FPSC, PPSC, SPSC, KPPSC, NTS, WAPDA, Railways, Police and all federal and provincial departments. Updated daily.</p>
          <div className="mt-8 flex gap-4 flex-wrap text-sm">
            <span className="bg-white/20 px-4 py-2 rounded-full">500+ Active Vacancies</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">12 Commissions Covered</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Updated Daily</span>
          </div>
        </div>
      </section>

      {/* Recent Jobs */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Government Job Advertisements</h2>
        <p className="text-gray-600 mb-8">Current vacancies with application deadlines, seat counts, and test details.</p>
        <div className="space-y-4">
          {recentJobs.map((job, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-5 flex flex-col md:flex-row md:items-center gap-4 hover:shadow-md transition">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{job.dept} &bull; {job.seats} seats &bull; Test: {job.test}</p>
              </div>
              <div className="flex items-center gap-4 text-sm flex-shrink-0">
                <div className="text-center">
                  <p className="text-xs text-gray-500">Last Date</p>
                  <p className="font-semibold text-red-600">{job.lastDate}</p>
                </div>
                <button className="bg-blue-800 text-white px-5 py-2 rounded-lg hover:bg-blue-900 transition font-semibold text-xs">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Commissions */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Commission / Department</h2>
          <p className="text-gray-600 mb-10">Select the commission or department that matches your qualification and province to find relevant job listings.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {commissions.map((c) => (
              <Link key={c.name} href={c.link} className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-lg hover:border-blue-400 transition group">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-blue-800 group-hover:text-blue-900">{c.name}</h3>
                </div>
                <p className="text-xs text-gray-500 mb-2 font-medium">{c.full}</p>
                <p className="text-xs text-gray-600 mb-3">{c.scope}</p>
                <p className="text-xs text-gray-700"><span className="font-semibold">Common Posts:</span> {c.posts}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose a Government Job?</h2>
        <p className="text-gray-600 mb-10 max-w-3xl">Government jobs in Pakistan offer benefits that private sector jobs rarely match. Here is a detailed breakdown of what you gain.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm border-t-4 border-t-blue-700">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{b.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Application Process */}
      <section className="bg-blue-50 py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Apply for Government Jobs</h2>
          <p className="text-gray-600 mb-10">Follow these 6 steps to navigate the government job application process successfully.</p>
          <div className="space-y-5">
            {process.map((p) => (
              <div key={p.step} className="flex gap-5 bg-white rounded-lg p-6 border border-blue-200 hover:shadow-md transition">
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-blue-800 text-white flex items-center justify-center font-bold">{p.step}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{p.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prep Tips */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Preparation Tips for Government Exams</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { t: "Master General Knowledge", b: "GK accounts for 30–40% of most government tests. Study Jahangir's WorldTimes digest, a Pakistan Studies textbook, and an Islamic Studies book thoroughly." },
            { t: "Read Newspaper Daily", b: "Current affairs from the last 6 months are always tested. Read Dawn or The News every day. Keep a dedicated notebook for important events, appointments, and statistics." },
            { t: "Solve Past Papers Religiously", b: "PPSC and NTS repeat questions frequently. Solve at least 5 years of past papers for your target post. This single habit has the highest return on exam score improvement." },
            { t: "English Grammar Is Non-Negotiable", b: "Every government test has 15–20 English grammar questions. Focus on tenses, synonyms/antonyms, prepositions, and sentence correction. Practice 50 MCQs daily." },
            { t: "Get Documents Ready Early", b: "Attesting documents through HEC, Board, and NADRA takes time. Start this process well before application deadlines. Missing documents disqualify otherwise strong candidates." },
            { t: "Apply Broadly", b: "The pass rate in government exams is 2–5%. Apply to every eligible post simultaneously to maximise your chances. Don't wait for one result before applying for the next." },
          ].map((tip, i) => (
            <div key={i} className="bg-white border-l-4 border-blue-700 rounded-lg p-5 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">{tip.t}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{tip.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-14 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Start Your PPSC / NTS Preparation Now</h2>
          <p className="text-blue-100 mb-8">Access free past papers, MCQ banks, and our comprehensive PPSC study guide — all completely free.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/prep/ppsc" className="bg-white text-blue-800 px-7 py-3 rounded-full font-semibold hover:bg-gray-100 transition">PPSC Prep Guide</Link>
            <Link href="/past-papers" className="border-2 border-white text-white px-7 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-800 transition">Past Papers</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
