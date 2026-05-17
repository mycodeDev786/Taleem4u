import Link from "next/link";

export const metadata = {
  title: "Latest Private Jobs in Pakistan 2025 – IT, Banking, Telecom & More | Taleem4u",
  description:
    "Find the latest private sector jobs in Pakistan 2025. IT, Banking, Telecom, Healthcare, Education, Engineering, and multinational company vacancies updated daily.",
  alternates: { canonical: "https://www.taleem4u.com/jobs/private" },
};

export default function PrivateJobs() {
  const categories = [
    { name: "IT & Software", slug: "it-software", vacancies: "200+", desc: "Web developers, mobile app developers, data scientists, DevOps engineers, and IT support roles at Pakistan's growing tech companies." },
    { name: "Banking & Finance", slug: "banking", vacancies: "150+", desc: "Retail bankers, credit analysts, relationship managers, and finance officers at commercial and microfinance banks." },
    { name: "Telecom Companies", slug: "telecom", vacancies: "80+", desc: "Network engineers, sales managers, customer support, and corporate roles at Jazz, Zong, Ufone, Telenor, and PTCL." },
    { name: "Education (Schools & Universities)", slug: "education", vacancies: "300+", desc: "Subject teachers, lecturers, school principals, and academic coordinators at private schools, colleges, and universities." },
    { name: "Healthcare & Hospitals", slug: "healthcare", vacancies: "120+", desc: "Doctors, nurses, paramedical staff, lab technicians, and hospital administration roles." },
    { name: "Engineering & Construction", slug: "engineering", vacancies: "100+", desc: "Civil, mechanical, and electrical engineers plus project managers for infrastructure, energy, and construction projects." },
    { name: "Marketing & Sales", slug: "marketing-sales", vacancies: "180+", desc: "Brand managers, digital marketers, sales executives, and business development officers at FMCG and retail companies." },
    { name: "Call Centers & BPO", slug: "call-centers", vacancies: "250+", desc: "Customer service representatives, technical support agents, and team leaders for inbound and outbound call centers." },
    { name: "E-commerce & Online Business", slug: "ecommerce", vacancies: "90+", desc: "Daraz, Foodpanda, Bykea, and other platform jobs including operations, logistics, and merchant support roles." },
    { name: "Textile & Manufacturing", slug: "textile", vacancies: "160+", desc: "Production supervisors, quality assurance, export managers, and factory operations at Pakistan's textile sector." },
    { name: "Logistics & Transport", slug: "logistics", vacancies: "70+", desc: "Logistics coordinators, supply chain managers, fleet supervisors, and warehouse staff at courier and freight companies." },
    { name: "Multinational Companies (MNCs)", slug: "mncs", vacancies: "60+", desc: "Competitive positions at Unilever, Nestle, P&G, Shell, PepsiCo, Coca-Cola, and other multinationals operating in Pakistan." },
  ];

  const salaryGuide = [
    { role: "Fresh Graduate (Any Field)", bps: "Entry Level", min: "PKR 30,000", max: "PKR 55,000", note: "Varies widely by industry; IT and banking start higher" },
    { role: "Software Developer (2 yrs exp)", bps: "Mid-Level", min: "PKR 80,000", max: "PKR 200,000", note: "Remote freelance can earn significantly more in USD" },
    { role: "Bank Officer / Relationship Manager", bps: "OG-III / OG-II", min: "PKR 60,000", max: "PKR 120,000", note: "Plus benefits: provident fund, medical, bonus" },
    { role: "Sales Manager (FMCG)", bps: "Mid-Senior", min: "PKR 90,000", max: "PKR 180,000", note: "Often includes vehicle, fuel, and performance bonus" },
    { role: "Senior Engineer (Civil/Mech)", bps: "Senior", min: "PKR 120,000", max: "PKR 300,000", note: "Higher in construction and energy projects" },
  ];

  const latestJobs = [
    { title: "Full Stack Developer (React/Node)", company: "Systems Limited", location: "Lahore / Remote", salary: "PKR 120,000–200,000", exp: "2+ years", posted: "1 day ago" },
    { title: "Branch Operations Manager", company: "HBL Bank", location: "Karachi", salary: "PKR 90,000–140,000", exp: "3+ years", posted: "2 days ago" },
    { title: "Digital Marketing Specialist", company: "Foodpanda Pakistan", location: "Islamabad", salary: "PKR 60,000–90,000", exp: "1–3 years", posted: "3 days ago" },
    { title: "Quality Assurance Engineer", company: "Getz Pharma", location: "Karachi", salary: "PKR 70,000–110,000", exp: "2+ years", posted: "2 days ago" },
    { title: "Regional Sales Manager", company: "Unilever Pakistan", location: "Multiple Cities", salary: "PKR 150,000–250,000", exp: "5+ years", posted: "4 days ago" },
    { title: "Customer Support Representative", company: "TCS Pakistan", location: "Lahore", salary: "PKR 35,000–50,000", exp: "Fresh / 1 yr", posted: "1 day ago" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <nav className="text-sm mb-6 text-gray-600">
        <Link href="/" className="hover:underline">Home</Link> &gt;{" "}
        <Link href="/jobs" className="hover:underline">Jobs</Link> &gt;{" "}
        <span className="font-semibold">Private Jobs</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Latest Private Jobs in Pakistan 2025</h1>
        <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
          Explore thousands of private sector job opportunities across Pakistan's fastest-growing industries — 
          from technology and banking to healthcare and education. Listings updated daily from verified employers.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Latest Private Job Listings</h2>
        <div className="space-y-4">
          {latestJobs.map((job, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:shadow-md transition">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
                <p className="text-gray-600 text-sm">{job.company} &bull; {job.location}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-purple-50 text-purple-700 text-xs px-2 py-0.5 rounded-full">{job.salary}</span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">Exp: {job.exp}</span>
                  <span className="bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded-full">Posted: {job.posted}</span>
                </div>
              </div>
              <a href="#" className="flex-shrink-0 bg-purple-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition">Apply Now</a>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Browse by Industry</h2>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/jobs/private/${cat.slug}`}
              className="bg-white shadow rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-base font-semibold text-gray-800 flex-1 leading-tight">{cat.name}</h2>
                <span className="flex-shrink-0 ml-2 bg-purple-50 text-purple-700 text-xs font-bold px-2 py-1 rounded-full">{cat.vacancies}</span>
              </div>
              <p className="text-sm text-gray-500 flex-1 leading-relaxed">{cat.desc}</p>
              <span className="mt-3 text-purple-600 text-sm font-medium">View Jobs →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12 bg-white rounded-2xl shadow p-8 overflow-x-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Private Sector Salary Guide – Pakistan 2025</h2>
        <p className="text-gray-600 mb-6 text-sm">Salary ranges vary significantly by city (Karachi/Lahore tend to pay more), company size, and candidate experience. The figures below are approximate market ranges for reference.</p>
        <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-purple-700 text-white">
            <tr>
              <th className="text-left p-4">Role</th>
              <th className="text-left p-4">Level</th>
              <th className="text-left p-4">Min Salary</th>
              <th className="text-left p-4">Max Salary</th>
              <th className="text-left p-4 hidden md:table-cell">Notes</th>
            </tr>
          </thead>
          <tbody>
            {salaryGuide.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="p-4 font-medium text-gray-800">{row.role}</td>
                <td className="p-4 text-gray-600">{row.bps}</td>
                <td className="p-4 text-green-600 font-semibold">{row.min}</td>
                <td className="p-4 text-green-700 font-bold">{row.max}</td>
                <td className="p-4 text-gray-500 text-xs hidden md:table-cell">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mb-12 bg-purple-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">How to Stand Out When Applying for Private Jobs</h2>
        <div className="space-y-4">
          {[
            { title: "Tailor Your CV to Each Job", desc: "A generic CV rarely gets shortlisted. Read the job description carefully and customise your CV summary and skills section to match. Use keywords from the job posting — many companies use ATS (Applicant Tracking Systems) that filter CVs by keyword." },
            { title: "Build Practical Skills Alongside Your Degree", desc: "For IT, digital marketing, accounting, and graphic design roles, employers value demonstrable skills over degrees. Build a portfolio, earn certifications (Google, HubSpot, AWS, ACCA), and work on freelance or open-source projects to show what you can do." },
            { title: "Network Actively", desc: "In Pakistan's job market, referrals carry enormous weight. Attend industry events, connect with professionals on LinkedIn, and let your college alumni network know you are job hunting. Many positions are filled through referrals before they are advertised publicly." },
            { title: "Prepare for Structured Interviews", desc: "MNCs and large private companies use competency-based interviews. Prepare STAR-format answers (Situation, Task, Action, Result) for common questions like 'Tell me about a time you solved a difficult problem' or 'Describe a situation where you led a team'." },
          ].map((tip, i) => (
            <div key={i} className="bg-white rounded-xl p-5">
              <h3 className="font-semibold text-gray-800 mb-1">{tip.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{tip.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-800 mb-4">Related Resources</h2>
        <div className="flex flex-wrap gap-3">
          {[
            { label: "Government Jobs", href: "/jobs/government" },
            { label: "Internships", href: "/jobs/internships" },
            { label: "Jobs Abroad", href: "/jobs/abroad" },
            { label: "Scholarships", href: "/scholarships" },
            { label: "Admissions", href: "/admissions" },
          ].map(l => (
            <Link key={l.href} href={l.href} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-50 hover:text-purple-700 transition">{l.label}</Link>
          ))}
        </div>
      </section>
    </div>
  );
}
