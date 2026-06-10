import Link from "next/link";

export const metadata = {
  title: "Jobs in Pakistan 2024 | Government, Private, Internships & Abroad | Taleem4u",
  description:
    "Browse the latest job opportunities in Pakistan — government jobs, private sector, internships, and overseas positions. Updated daily with verified listings for students and professionals.",
  keywords: "jobs pakistan 2024, government jobs, private jobs, internships, overseas jobs, job portal pakistan",
  alternates: { canonical: "https://taleem4u.com/jobs" },
};

export default function JobsHub() {
  const categories = [
    {
      name: "Government Jobs",
      slug: "government",
      icon: "🏛️",
      color: "from-blue-600 to-blue-800",
      count: "500+ listings",
      desc: "FPSC, PPSC, SPSC, KPPSC, NTS, WAPDA, Railways, Police, Education Department and all federal & provincial government departments.",
      highlights: ["Job security & pension", "Grade-based pay scale (BPS)", "Medical & housing benefits", "Annual increments"],
    },
    {
      name: "Private Jobs",
      slug: "private",
      icon: "💼",
      color: "from-indigo-600 to-purple-700",
      count: "1,200+ listings",
      desc: "IT companies, banks, telecom operators, FMCG multinationals, healthcare, education and all major private sector employers across Pakistan.",
      highlights: ["Competitive salaries", "Fast career growth", "Performance bonuses", "Modern work environments"],
    },
    {
      name: "Internships",
      slug: "internships",
      icon: "🎓",
      color: "from-teal-600 to-emerald-600",
      count: "300+ listings",
      desc: "Paid and unpaid internship programmes for students and fresh graduates across all industries, including structured corporate programmes.",
      highlights: ["Gain practical experience", "Build your network", "Possible job offers", "Add to your CV"],
    },
    {
      name: "Jobs Abroad",
      slug: "abroad",
      icon: "🌍",
      color: "from-orange-500 to-red-600",
      count: "400+ listings",
      desc: "Overseas job opportunities in Gulf countries (UAE, Saudi Arabia, Qatar, Kuwait), UK, Canada, Europe and Australia for Pakistani professionals.",
      highlights: ["Tax-free Gulf income", "Path to PR (Canada/UK)", "International experience", "Higher salaries"],
    },
  ];

  const stats = [
    { num: "2,400+", label: "Active Job Listings" },
    { num: "Daily", label: "New Jobs Added" },
    { num: "50+", label: "Hiring Companies" },
    { num: "Free", label: "Always Free to Use" },
  ];

  const recentJobs = [
    { title: "Software Engineer", company: "Systems Limited", location: "Lahore", type: "Private", salary: "PKR 80,000–150,000", posted: "Today" },
    { title: "Assistant (BPS-14)", company: "Punjab Secretariat", location: "Lahore", type: "Government", salary: "BPS-14 Scale", posted: "Today" },
    { title: "Network Engineer", company: "Jazz Pakistan", location: "Karachi", type: "Private", salary: "PKR 70,000–120,000", posted: "Yesterday" },
    { title: "Junior Clerk", company: "FPSC", location: "Islamabad", type: "Government", salary: "BPS-11 Scale", posted: "Yesterday" },
    { title: "Marketing Intern", company: "Unilever Pakistan", location: "Karachi", type: "Internship", salary: "PKR 25,000–35,000", posted: "2 days ago" },
    { title: "Civil Engineer", company: "Saudi Binladin Group", location: "Saudi Arabia", type: "Abroad", salary: "SAR 4,000–7,000", posted: "2 days ago" },
  ];

  const typeColors = {
    "Government": "bg-blue-100 text-blue-700",
    "Private": "bg-purple-100 text-purple-700",
    "Internship": "bg-teal-100 text-teal-700",
    "Abroad": "bg-orange-100 text-orange-700",
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link> / <span>Jobs Portal</span>
          </nav>
          <h1 className="text-5xl font-bold mb-4">Jobs Portal — Pakistan</h1>
          <p className="text-gray-300 text-xl max-w-3xl">
            Your one-stop destination for the latest government jobs, private sector openings, internships, and overseas opportunities. Updated daily.
          </p>
          <div className="mt-8 flex gap-4 flex-wrap">
            <input type="text" placeholder="Search jobs, companies, keywords..." className="px-5 py-3 rounded-lg text-gray-900 w-full md:w-80 focus:outline-none" />
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition">Search</button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-gray-900">{s.num}</div>
                <div className="text-sm text-gray-600 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse Jobs by Category</h2>
        <p className="text-gray-600 mb-10 max-w-2xl">Whether you're a fresh graduate, experienced professional, or student looking for an internship, we have the right opportunities for you.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/jobs/${cat.slug}`}
              className={`bg-gradient-to-r ${cat.color} text-white rounded-xl p-7 hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 block`}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{cat.icon}</span>
                <div>
                  <h2 className="text-2xl font-bold">{cat.name}</h2>
                  <span className="text-sm opacity-80">{cat.count}</span>
                </div>
              </div>
              <p className="text-sm opacity-90 mb-4 leading-relaxed">{cat.desc}</p>
              <div className="grid grid-cols-2 gap-2">
                {cat.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-1 text-xs opacity-90">
                    <span>✓</span> {h}
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Jobs */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Job Listings</h2>
          <p className="text-gray-600 mb-8">Fresh opportunities added today and yesterday across all categories.</p>
          <div className="space-y-4">
            {recentJobs.map((job, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-5 flex flex-col md:flex-row md:items-center gap-4 hover:shadow-md transition">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${typeColors[job.type]}`}>{job.type}</span>
                  </div>
                  <p className="text-sm text-gray-600">{job.company} &bull; {job.location}</p>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-emerald-700 font-medium">{job.salary}</span>
                  <span className="text-gray-400">{job.posted}</span>
                  <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition text-xs font-semibold">Apply</button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm mb-4">Showing 6 of 2,400+ active listings</p>
          </div>
        </div>
      </section>

      {/* Career Tips */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Job Search Tips for Pakistani Professionals</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Tailor Your CV", body: "A generic CV is immediately recognizable to recruiters. Customize your CV for each role, matching keywords from the job description to your experience and skills." },
            { title: "Use Multiple Platforms", body: "Don't rely on one job board. Use Rozee.pk, LinkedIn, Indeed, company websites, and Taleem4u simultaneously to maximize your exposure to opportunities." },
            { title: "Network Proactively", body: "Over 60% of positions in Pakistan are filled through referrals. Attend industry events, connect on LinkedIn, and let your network know you're actively job hunting." },
            { title: "Prepare for Interviews", body: "Research the company thoroughly before every interview. Prepare answers for common behavioral questions using the STAR method (Situation, Task, Action, Result)." },
            { title: "Government Job Strategy", body: "For government jobs, focus on NTS test preparation, keep all documents attested and ready, and monitor official job portals and newspaper classifieds daily." },
            { title: "Follow Up Professionally", body: "Send a thank-you email within 24 hours of an interview. If you haven't heard back in 2 weeks, a polite follow-up email shows genuine interest and professionalism." },
          ].map((tip, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">{tip.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{tip.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-14 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Also Prepare with Our Study Resources</h2>
          <p className="text-gray-300 mb-8">Government job success depends on preparation. Use our free PPSC guides, past papers, and study materials.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/prep/ppsc" className="bg-white text-gray-800 px-7 py-3 rounded-full font-semibold hover:bg-gray-100 transition">PPSC Prep</Link>
            <Link href="/guides" className="border-2 border-white text-white px-7 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-800 transition">Career Guides</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
