import Link from "next/link";

export const metadata = {
  title: "Jobs in Pakistan 2025 – Government, Private, Internships & Abroad | Taleem4u",
  description:
    "Find the latest government jobs, private sector jobs, internships, and overseas jobs for Pakistani students and professionals. FPSC, PPSC, NTS, and top companies hiring now.",
  alternates: { canonical: "https://www.taleem4u.com/jobs" },
};

export default function JobsHub() {
  const categories = [
    { name: "Government Jobs", slug: "government", icon: "🏛️", description: "FPSC, PPSC, NTS, WAPDA, Railway, Police, education department, and all federal and provincial government vacancies.", count: "120+ Active" },
    { name: "Private Jobs", slug: "private", icon: "🏢", description: "IT, Banking, Telecom, Healthcare, Education, Engineering, and multinational company vacancies in Pakistan.", count: "200+ Active" },
    { name: "Internships", slug: "internships", icon: "🎓", description: "Paid and unpaid internship opportunities for students and fresh graduates at top firms across Pakistan.", count: "50+ Active" },
    { name: "Jobs Abroad", slug: "abroad", icon: "✈️", description: "Overseas job opportunities in Saudi Arabia, UAE, UK, Canada, Malaysia, and other countries for Pakistani professionals.", count: "80+ Active" },
  ];

  const featuredJobs = [
    { title: "Software Engineer", company: "Systems Limited", location: "Lahore / Remote", type: "Private", salary: "PKR 80,000–150,000", posted: "2 days ago" },
    { title: "Sub-Inspector (Police)", company: "Punjab Police", location: "Punjab Province", type: "Government", salary: "BPS-14", posted: "3 days ago" },
    { title: "Finance Officer", company: "National Bank of Pakistan", location: "Karachi", type: "Government", salary: "BPS-16", posted: "5 days ago" },
    { title: "Data Analyst Intern", company: "Telenor Pakistan", location: "Islamabad", type: "Internship", salary: "PKR 30,000/month", posted: "1 day ago" },
    { title: "Registered Nurse", company: "King Fahad Hospital", location: "Saudi Arabia", type: "Abroad", salary: "SAR 3,500–5,000", posted: "4 days ago" },
    { title: "Secondary School Teacher", company: "AKU-EB Network Schools", location: "Karachi", type: "Private", salary: "PKR 45,000–70,000", posted: "6 days ago" },
  ];

  const jobSearchTips = [
    { title: "Update Your CV Regularly", desc: "Keep your CV concise (1–2 pages), include a professional summary, and list your most recent experience first. Tailor it to match the job description for each application." },
    { title: "Prepare for NTS / OTS Tests", desc: "Most government jobs require a written test through NTS, OTS, or PPSC. Practice with past papers, focus on English grammar, general knowledge, Islamic studies, and subject-specific MCQs." },
    { title: "Build a LinkedIn Profile", desc: "Pakistani employers increasingly use LinkedIn for hiring. A complete, professional profile with a photo, clear headline, and skills endorsements can get you discovered by recruiters without applying anywhere." },
    { title: "Apply Early", desc: "Government job notifications often have a 2–3 week application window. Private companies fill positions quickly too. Check Taleem4u's jobs section daily and apply as soon as you find a suitable vacancy." },
    { title: "Follow Up After Applying", desc: "For private jobs, a polite follow-up email 1–2 weeks after application shows initiative. For government jobs, keep your application reference number safe and check the recruiting body's website for test date announcements." },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <nav className="text-sm mb-6 text-gray-600">
        <Link href="/" className="hover:underline">Home</Link> &gt; <span className="font-semibold">Jobs</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Jobs in Pakistan 2025</h1>
        <p className="text-gray-600 text-lg max-w-3xl">
          Browse thousands of job opportunities across Pakistan — from government positions and private sector roles 
          to internships and international placements. Updated daily with verified listings.
        </p>
      </header>

      <section className="mb-14">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Browse Jobs by Category</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/jobs/${cat.slug}`} className="p-8 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform">
              <div className="flex justify-between items-start mb-3">
                <span className="text-4xl">{cat.icon}</span>
                <span className="bg-white bg-opacity-20 text-white text-xs font-semibold px-3 py-1 rounded-full">{cat.count}</span>
              </div>
              <h2 className="text-2xl font-bold mb-2">{cat.name}</h2>
              <p className="text-emerald-100 text-sm leading-relaxed">{cat.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-14">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Latest Job Listings</h2>
        <div className="space-y-4">
          {featuredJobs.map((job, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-md transition">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${job.type === "Government" ? "bg-blue-100 text-blue-700" : job.type === "Private" ? "bg-purple-100 text-purple-700" : job.type === "Internship" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}>{job.type}</span>
                </div>
                <p className="text-gray-600 text-sm">{job.company} &bull; {job.location}</p>
                <p className="text-gray-500 text-xs mt-1">Salary: {job.salary} &bull; Posted {job.posted}</p>
              </div>
              <a href="#" className="flex-shrink-0 bg-emerald-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition">Apply Now</a>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-14 bg-white rounded-2xl shadow p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Job Search Tips for Pakistani Professionals</h2>
        <p className="text-gray-600 mb-8">Getting hired in today's competitive market requires more than just submitting applications. Use these strategies to stand out from the crowd.</p>
        <div className="space-y-5">
          {jobSearchTips.map((tip, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">{i + 1}</div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">{tip.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 bg-teal-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Government Jobs in Pakistan</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">Government jobs in Pakistan are categorized under the Basic Pay Scale (BPS) system, ranging from BPS-1 (lowest) to BPS-22 (highest, equivalent to Federal Secretary or Chief of Staff). Here is a quick guide to help you understand the structure:</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { scale: "BPS-1 to BPS-4", roles: "Peon, Naib Qasid, Driver, Sanitary Worker", min_edu: "Primary / Middle" },
            { scale: "BPS-5 to BPS-9", roles: "Clerk, LDC, Junior Constable, Data Entry Operator", min_edu: "Matric / Intermediate" },
            { scale: "BPS-14 to BPS-16", roles: "Sub-Inspector, Patwari, Assistant, Junior Clerk", min_edu: "Bachelor's Degree" },
            { scale: "BPS-17 to BPS-19", roles: "Officer Grade Posts, CSS, PMS, Lecturer", min_edu: "Bachelor's / Master's" },
          ].map((row, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-teal-100">
              <p className="font-bold text-teal-700 mb-1">{row.scale}</p>
              <p className="text-gray-700 text-sm mb-1">{row.roles}</p>
              <p className="text-gray-500 text-xs">Min. Education: {row.min_edu}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-800 mb-4">Related Resources</h2>
        <div className="flex flex-wrap gap-3">
          {[{label:"PPSC Prep",href:"/prep/ppsc"},{label:"Past Papers",href:"/past-papers"},{label:"Scholarships",href:"/scholarships"},{label:"Admissions",href:"/admissions"},{label:"Books & Notes",href:"/books"}].map(l => (
            <Link key={l.href} href={l.href} className="bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-100 transition">{l.label}</Link>
          ))}
        </div>
      </section>
    </div>
  );
}
