import Link from "next/link";

export const metadata = {
  title: "Internships in Pakistan 2025 – Paid & Unpaid Internship Opportunities | Taleem4u",
  description:
    "Find paid and unpaid internships in Pakistan for students and fresh graduates. IT, finance, NGO, government, media, and corporate internship opportunities across Karachi, Lahore, and Islamabad.",
  alternates: { canonical: "https://www.taleem4u.com/jobs/internships" },
};

export default function Internships() {
  const categories = [
    { name: "IT & Technology", slug: "it", paid: true, desc: "Software development, UI/UX design, data analysis, and cybersecurity internships at tech startups and established IT firms." },
    { name: "Banking & Finance", slug: "banking", paid: true, desc: "Internship programs at HBL, UBL, Meezan Bank, Standard Chartered, and other financial institutions. Typically 6–12 weeks." },
    { name: "Corporate & MNCs", slug: "corporate", paid: true, desc: "Management trainee and internship programs at Unilever, Nestle, P&G, Shell, and other multinational companies operating in Pakistan." },
    { name: "NGO & Development Sector", slug: "ngo", paid: false, desc: "Community development, research, and project support internships at UN agencies, USAID-funded projects, and local NGOs." },
    { name: "Media & Journalism", slug: "media", paid: false, desc: "Editorial, broadcast, and digital media internships at ARY, Geo, Dawn, The News, and online media outlets." },
    { name: "Government Internships", slug: "government", paid: true, desc: "NICL, OGDCL, PPIB, NEPRA, and various federal ministry internship programs for fresh graduates." },
    { name: "Healthcare & Pharma", slug: "healthcare", paid: false, desc: "Hospital rotations, clinical research, and pharmaceutical company internships for medical and pharmacy students." },
    { name: "Research & Academia", slug: "research", paid: false, desc: "Research assistant positions at Pakistani universities and think tanks including LUMS, QAU, and PIDE." },
  ];

  const popularPrograms = [
    { name: "Unilever UFLP (Internship Track)", company: "Unilever Pakistan", duration: "8–10 weeks", stipend: "PKR 40,000–60,000/month", deadline: "March each year", fields: "Business, Engineering, IT, Finance" },
    { name: "HBL Summer Internship", company: "Habib Bank Limited", duration: "6–8 weeks", stipend: "PKR 25,000–40,000/month", deadline: "April each year", fields: "Finance, Business, IT" },
    { name: "Shell GameChanger", company: "Shell Pakistan", duration: "10 weeks", stipend: "PKR 50,000/month", deadline: "February each year", fields: "Engineering, Business, Finance" },
    { name: "PPIB Graduate Internship", company: "Private Power & Infrastructure Board", duration: "3 months", stipend: "PKR 20,000–30,000/month", deadline: "Rolling basis", fields: "Engineering, Finance, Law" },
    { name: "USAID-Funded Development Internships", company: "Various NGOs / IRPs", duration: "3–6 months", stipend: "Varies / Some unpaid", deadline: "Rolling basis", fields: "Development, Public Health, Education" },
  ];

  const tips = [
    { title: "Apply Early — Deadlines Are Strict", desc: "Top corporate internship programs at MNCs and banks fill up fast. Most open applications 3–4 months before the start date. Set calendar reminders for February and March, when most summer programs open." },
    { title: "Write a Targeted Cover Letter", desc: "Never send a generic cover letter. Research the company, mention something specific about their work, and clearly explain what value you bring and what you hope to learn. A tailored cover letter doubles your shortlisting chances." },
    { title: "Treat the Internship as Your Interview", desc: "Almost every major corporate internship program converts high-performing interns into full-time employees or management trainees. Come early, ask smart questions, take initiative, and deliver above expectations on every task." },
    { title: "Build Your Network During the Internship", desc: "Connect with your supervisors, colleagues, and senior management on LinkedIn before you finish. Follow up afterward with a thank-you message. These connections are invaluable when you start your permanent job search." },
    { title: "Document Everything for Your CV", desc: "Keep a log of every project you contribute to, every skill you use, and any measurable result you achieve during your internship. Quantified accomplishments on your CV (e.g., 'assisted in processing 200+ client applications') make a stronger impression." },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <nav className="text-sm mb-6 text-gray-600">
        <Link href="/" className="hover:underline">Home</Link> &gt;{" "}
        <Link href="/jobs" className="hover:underline">Jobs</Link> &gt;{" "}
        <span className="font-semibold">Internships</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Internships in Pakistan 2025</h1>
        <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
          Gain real-world experience and build your professional network through internships at top Pakistani 
          companies, NGOs, government bodies, and multinational corporations. Explore paid and unpaid opportunities 
          across all major industries.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Browse Internships by Field</h2>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/jobs/internships/${cat.slug}`}
              className="bg-white shadow rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-base font-semibold text-gray-800">{cat.name}</h2>
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${cat.paid ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>{cat.paid ? "Paid" : "Unpaid"}</span>
              </div>
              <p className="text-sm text-gray-500 flex-1 leading-relaxed">{cat.desc}</p>
              <span className="mt-3 text-yellow-600 text-sm font-medium">Explore →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12 bg-white rounded-2xl shadow p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Top Internship Programs in Pakistan</h2>
        <p className="text-gray-600 mb-6 text-sm">These are some of the most sought-after structured internship programs available to Pakistani students each year.</p>
        <div className="space-y-5">
          {popularPrograms.map((prog, i) => (
            <div key={i} className="border border-gray-200 rounded-xl p-5">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">{prog.name}</h3>
                  <p className="text-gray-500 text-sm">{prog.company}</p>
                </div>
                <a href="#" className="flex-shrink-0 bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-600 transition">Apply</a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                {[
                  { label: "Duration", value: prog.duration },
                  { label: "Stipend", value: prog.stipend },
                  { label: "Deadline", value: prog.deadline },
                  { label: "Fields", value: prog.fields },
                ].map((item, j) => (
                  <div key={j} className="bg-gray-50 rounded-lg p-2">
                    <p className="text-gray-500 font-semibold uppercase text-xs">{item.label}</p>
                    <p className="text-gray-700 mt-0.5">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 bg-yellow-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">How to Make the Most of Your Internship</h2>
        <div className="space-y-4">
          {tips.map((tip, i) => (
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
            { label: "Private Jobs", href: "/jobs/private" },
            { label: "Government Jobs", href: "/jobs/government" },
            { label: "Jobs Abroad", href: "/jobs/abroad" },
            { label: "Scholarships", href: "/scholarships" },
            { label: "Admissions", href: "/admissions" },
          ].map(l => (
            <Link key={l.href} href={l.href} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-50 hover:text-yellow-700 transition">{l.label}</Link>
          ))}
        </div>
      </section>
    </div>
  );
}
