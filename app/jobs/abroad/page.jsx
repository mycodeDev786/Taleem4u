import Link from "next/link";

export const metadata = {
  title: "Jobs Abroad for Pakistanis 2025 – UAE, Saudi Arabia, UK, Canada | Taleem4u",
  description:
    "Find overseas job opportunities for Pakistani professionals in UAE, Saudi Arabia, UK, Canada, Australia, Malaysia, and more. Latest work visa updates, salary expectations, and how to apply.",
  alternates: { canonical: "https://www.taleem4u.com/jobs/abroad" },
};

export default function JobsAbroad() {
  const destinations = [
    { country: "Saudi Arabia 🇸🇦", slug: "saudi-arabia", jobs: "Construction, Healthcare, IT, Hospitality, Retail", visa: "Work Iqama", demand: "Very High", avgSalary: "SAR 2,000–8,000/month" },
    { country: "United Arab Emirates 🇦🇪", slug: "uae", jobs: "Finance, Tech, Hospitality, Engineering, Retail", visa: "Employment Visa", demand: "Very High", avgSalary: "AED 3,000–15,000/month" },
    { country: "United Kingdom 🇬🇧", slug: "uk", jobs: "Healthcare (NHS), IT, Finance, Engineering, Education", visa: "Skilled Worker Visa", demand: "High", avgSalary: "GBP 2,000–5,000/month" },
    { country: "Canada 🇨🇦", slug: "canada", jobs: "IT, Healthcare, Trades, Engineering, Finance", visa: "Express Entry / Work Permit", demand: "High", avgSalary: "CAD 3,500–8,000/month" },
    { country: "Australia 🇦🇺", slug: "australia", jobs: "Engineering, IT, Healthcare, Mining, Education", visa: "482 Temporary Skill Shortage Visa", demand: "Medium–High", avgSalary: "AUD 4,000–9,000/month" },
    { country: "Malaysia 🇲🇾", slug: "malaysia", jobs: "Manufacturing, IT, Hospitality, Education, Retail", visa: "Employment Pass", demand: "Medium", avgSalary: "MYR 3,000–7,000/month" },
    { country: "Qatar 🇶🇦", slug: "qatar", jobs: "Construction, Engineering, Healthcare, Finance, IT", visa: "Work Visa / Residence Permit", demand: "High", avgSalary: "QAR 3,000–12,000/month" },
    { country: "Germany 🇩🇪", slug: "germany", jobs: "Engineering, IT, Healthcare, Skilled Trades", visa: "Skilled Workers Immigration Act (2023)", demand: "High", avgSalary: "EUR 2,500–6,000/month" },
  ];

  const process = [
    { step: "1", title: "Assess Your Eligibility", desc: "Each country has different requirements. Skilled worker visas for the UK, Canada, and Australia require relevant experience, educational qualifications, and usually English language proficiency (IELTS 6.0+). Gulf countries are more accessible for manual, technical, and semi-skilled workers." },
    { step: "2", title: "Get Your Documents in Order", desc: "Essential documents include: CNIC, valid passport (at least 6 months validity), educational certificates attested by HEC and the Ministry of Foreign Affairs, experience letters, and CNIC/NICOP. For professional roles, get your degree verified by the relevant authority in the destination country." },
    { step: "3", title: "Find a Verified Job Offer", desc: "Apply through reputable channels: official company websites, LinkedIn, Naukrigulf.com, Bayt.com, and BEOE (Bureau of Emigration and Overseas Employment)-registered recruitment agencies. Never pay placement fees to recruiters for jobs in regulated countries — it is illegal." },
    { step: "4", title: "Verify the Recruitment Agency", desc: "In Pakistan, legitimate overseas employment agencies must be registered with BEOE. You can verify any agency's registration at beoe.gov.pk. Unregistered agencies are a major source of overseas job scams — always check before proceeding." },
    { step: "5", title: "Apply for Work Visa", desc: "Once you have a valid job offer, your employer or a registered agent will assist with the work visa application. For Gulf countries, this is usually straightforward. For Canada, UK, and Australia, you may need to engage an immigration lawyer for points-based visa systems." },
    { step: "6", title: "Understand Your Rights Abroad", desc: "Research labour laws in your destination country. Most Gulf countries have improved worker protections significantly. Know your contract terms, overtime policy, annual leave, and repatriation clause before signing anything. Contact the Pakistani embassy if you face any issues abroad." },
  ];

  const latestJobs = [
    { title: "Civil Engineer", location: "Dubai, UAE", company: "ALEC Engineering", salary: "AED 8,000–12,000/month", exp: "3+ years", posted: "1 day ago" },
    { title: "Registered Nurse (NHS)", location: "London, UK", company: "NHS Trust", salary: "GBP 2,834–3,491/month", exp: "2+ years + NMC", posted: "3 days ago" },
    { title: "IT Support Specialist", location: "Riyadh, Saudi Arabia", company: "Aramco Contractors", salary: "SAR 5,000–7,000/month", exp: "2+ years", posted: "2 days ago" },
    { title: "Electrician (Skilled Trade)", location: "Calgary, Canada", company: "Maxim Power Corp", salary: "CAD 5,500–7,000/month", exp: "3+ years + cert", posted: "5 days ago" },
    { title: "Hotel Receptionist", location: "Doha, Qatar", company: "Marriott Doha", salary: "QAR 2,500–4,000/month", exp: "1+ year", posted: "2 days ago" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <nav className="text-sm mb-6 text-gray-600">
        <Link href="/" className="hover:underline">Home</Link> &gt;{" "}
        <Link href="/jobs" className="hover:underline">Jobs</Link> &gt;{" "}
        <span className="font-semibold">Jobs Abroad</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Jobs Abroad for Pakistanis 2025</h1>
        <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
          Over 9 million Pakistanis work abroad, making overseas remittances a critical part of Pakistan's economy. 
          Find verified overseas job opportunities, understand visa requirements, and learn how to safely secure 
          employment in top destinations for Pakistani workers.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Latest Overseas Job Listings</h2>
        <div className="space-y-4">
          {latestJobs.map((job, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:shadow-md transition">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
                <p className="text-gray-600 text-sm">{job.company} &bull; {job.location}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-green-50 text-green-700 text-xs px-2 py-0.5 rounded-full">{job.salary}</span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">Exp: {job.exp}</span>
                  <span className="bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded-full">Posted: {job.posted}</span>
                </div>
              </div>
              <a href="#" className="flex-shrink-0 bg-green-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition">Apply Now</a>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Top Destinations for Pakistani Workers</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {destinations.map((dest, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
              <h2 className="text-lg font-bold text-gray-800 mb-3">{dest.country}</h2>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div><span className="text-gray-500 text-xs block">Top Roles</span><span className="text-gray-700">{dest.jobs}</span></div>
                <div><span className="text-gray-500 text-xs block">Visa Type</span><span className="text-gray-700">{dest.visa}</span></div>
                <div><span className="text-gray-500 text-xs block">Demand Level</span>
                  <span className={`font-semibold ${dest.demand === "Very High" ? "text-red-600" : dest.demand === "High" ? "text-orange-600" : "text-yellow-600"}`}>{dest.demand}</span>
                </div>
                <div><span className="text-gray-500 text-xs block">Avg Salary</span><span className="text-green-700 font-semibold">{dest.avgSalary}</span></div>
              </div>
              <a href="#" className="mt-4 inline-block text-green-600 text-sm font-medium hover:underline">View {dest.country.split(" ")[0]} Jobs →</a>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 bg-white rounded-2xl shadow p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Step-by-Step Guide: How to Find a Legitimate Job Abroad</h2>
        <div className="space-y-5">
          {process.map((s) => (
            <div key={s.step} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">{s.step}</div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 bg-red-50 rounded-2xl p-8 border border-red-200">
        <h2 className="text-2xl font-bold text-red-800 mb-4">⚠️ Overseas Job Scam Warning</h2>
        <p className="text-gray-700 mb-4 text-sm leading-relaxed">Overseas job scams are unfortunately common in Pakistan. Thousands of workers lose their savings each year to fraudulent recruitment agents. Here is how to protect yourself:</p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><span className="text-red-500 font-bold">✗</span>Never pay large sums of money upfront to a recruiter — legitimate agents may charge a small registration fee, but placement fees are often illegal</li>
          <li className="flex gap-2"><span className="text-red-500 font-bold">✗</span>Never hand over your original passport to anyone before boarding — only the embassy or immigration officer should hold your passport temporarily</li>
          <li className="flex gap-2"><span className="text-red-500 font-bold">✗</span>Verify the employer directly before signing anything — Google the company, find their official website, and call to confirm the job offer exists</li>
          <li className="flex gap-2"><span className="text-red-500 font-bold">✗</span>Report suspicious agents to BEOE (beoe.gov.pk) or call the Overseas Pakistanis Foundation helpline</li>
          <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span>If going to a Gulf country, ensure your visa says "work visa" — not "visit visa" — before you travel</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-800 mb-4">Related Resources</h2>
        <div className="flex flex-wrap gap-3">
          {[
            { label: "Government Jobs", href: "/jobs/government" },
            { label: "Private Jobs", href: "/jobs/private" },
            { label: "Internships", href: "/jobs/internships" },
            { label: "Scholarships Abroad", href: "/scholarships" },
          ].map(l => (
            <Link key={l.href} href={l.href} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-50 hover:text-green-700 transition">{l.label}</Link>
          ))}
        </div>
      </section>
    </div>
  );
}
