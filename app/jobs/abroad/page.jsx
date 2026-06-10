import Link from "next/link";

export const metadata = {
  title: "Jobs Abroad for Pakistanis 2024 | Gulf, UK, Canada, Europe | Taleem4u",
  description:
    "Find overseas job opportunities for Pakistani professionals in Gulf countries, UK, Canada, Australia, and Europe. Complete guide to work permits, visa process, and top employers.",
  keywords: "jobs abroad pakistan, overseas jobs, gulf jobs, Canada jobs, UK jobs, work visa pakistan",
  alternates: { canonical: "https://taleem4u.com/jobs/abroad" },
};

export default function JobsAbroad() {
  const destinations = [
    {
      country: "Saudi Arabia", flag: "🇸🇦", jobs: "Construction, Healthcare, IT, Hospitality, Oil & Gas",
      demand: "Very High", avgSalary: "SAR 2,500–10,000/month", visa: "Work Visa via OEC",
      pros: "Tax-free income, high demand for Pakistani workforce, fast visa processing"
    },
    {
      country: "UAE (Dubai/Abu Dhabi)", flag: "🇦🇪", jobs: "Finance, IT, Engineering, Retail, Tourism, Real Estate",
      demand: "Very High", avgSalary: "AED 3,000–15,000/month", visa: "Employment Visa",
      pros: "No income tax, world-class infrastructure, large Pakistani community"
    },
    {
      country: "Qatar", flag: "🇶🇦", jobs: "Construction, Engineering, IT, Healthcare, FIFA 2022 Legacy jobs",
      demand: "High", avgSalary: "QAR 3,000–12,000/month", visa: "Work Permit via employer",
      pros: "Strong economy, growing tech sector, good work-life balance"
    },
    {
      country: "United Kingdom", flag: "🇬🇧", jobs: "NHS Healthcare, IT, Finance, Education, Engineering",
      demand: "High", avgSalary: "£25,000–60,000/year", visa: "Skilled Worker Visa",
      pros: "World-class healthcare employer (NHS), strong workers' rights, path to PR"
    },
    {
      country: "Canada", flag: "🇨🇦", jobs: "IT, Healthcare, Engineering, Trucking, Agriculture",
      demand: "High", avgSalary: "CAD 50,000–90,000/year", visa: "Express Entry / PNP",
      pros: "Path to permanent residency, excellent quality of life, multicultural society"
    },
    {
      country: "Australia", flag: "🇦🇺", jobs: "Mining, Healthcare, IT, Construction, Agriculture",
      demand: "Moderate", avgSalary: "AUD 60,000–100,000/year", visa: "482 / 186 Visa",
      pros: "High wages, stunning lifestyle, skills shortage in key areas"
    },
    {
      country: "Germany", flag: "🇩🇪", jobs: "Engineering, IT, Healthcare, Hospitality, Research",
      demand: "High", avgSalary: "€35,000–70,000/year", visa: "EU Blue Card / Work Visa",
      pros: "Opportunity Visa for job seekers, path to permanent residency, strong engineering sector"
    },
    {
      country: "Oman & Kuwait", flag: "🇴🇲🇰🇼", jobs: "Construction, Oil & Gas, Healthcare, Hospitality",
      demand: "Moderate", avgSalary: "OMR 400–1,200/month", visa: "Work Permit",
      pros: "Tax-free, large Pakistani community, established recruitment channel"
    },
  ];

  const process = [
    { step: "1", title: "Identify Target Countries & Roles", desc: "Match your skills and qualifications to the demand in specific countries. Engineers should look at Gulf and Germany; IT professionals at UAE, UK, and Canada; healthcare workers at UK, Canada, and Saudi Arabia." },
    { step: "2", title: "Verify Through OEC/BEOE", desc: "Always register with the Overseas Employment Corporation (OEC) or Bureau of Emigration & Overseas Employment (BEOE). These government bodies verify foreign employers and protect you from fraud." },
    { step: "3", title: "Get Required Documents Attested", desc: "Attest your educational and professional documents through HEC (for degrees), Board (for matric/inter), NADRA, and the Ministry of Foreign Affairs. Foreign employers require attested documents." },
    { step: "4", title: "Apply Through Verified Channels", desc: "Apply through OEC job fairs, verified recruitment agencies registered with BEOE, direct company websites, or professional portals like LinkedIn. NEVER pay excessive fees to agents." },
    { step: "5", title: "Understand the Employment Contract", desc: "Read your employment contract carefully before signing. Confirm salary, benefits, working hours, leave policy, accommodation, and repatriation terms. Have it verified by OEC if possible." },
    { step: "6", title: "Obtain Work Visa", desc: "Your employer typically sponsors your work visa. Gather all required documents, visit the relevant embassy, and attend the visa interview. Processing times vary from 2 weeks to 3 months." },
  ];

  const warnings = [
    "Never pay a recruitment agent more than the officially fixed fee by BEOE",
    "Verify any foreign employer by checking with OEC before accepting an offer",
    "Avoid offers that sound too good to be true (unusually high salaries for unskilled work)",
    "Always read and keep a copy of your full employment contract",
    "Register your details with the Pakistani embassy in your destination country after arrival",
    "Be cautious of visa assistance agents who promise guaranteed results",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="text-sm text-orange-200 mb-4">
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/jobs" className="hover:text-white">Jobs</Link> / <span>Jobs Abroad</span>
          </nav>
          <h1 className="text-5xl font-bold mb-4">Jobs Abroad for Pakistanis</h1>
          <p className="text-xl text-orange-100 max-w-3xl">
            Explore overseas job opportunities in Gulf countries, UK, Canada, Europe, and Australia. Your guide to working abroad safely and successfully.
          </p>
          <div className="mt-8 flex gap-4 flex-wrap text-sm">
            <span className="bg-white/20 px-4 py-2 rounded-full">🌍 8+ Countries</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">💼 All Sectors</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">✅ Verified Listings</span>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Top Destinations for Pakistani Job Seekers</h2>
        <p className="text-gray-600 mb-10 max-w-3xl">Over 9 million Pakistanis work abroad, sending home billions in remittances each year. Here are the most popular and in-demand destinations.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {destinations.map((d, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{d.flag}</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{d.country}</h3>
                  <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">Demand: {d.demand}</span>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-700">
                <p><span className="font-semibold">In-Demand Jobs:</span> {d.jobs}</p>
                <p><span className="font-semibold">Average Salary:</span> {d.avgSalary}</p>
                <p><span className="font-semibold">Visa Type:</span> {d.visa}</p>
                <p className="text-gray-600 italic text-xs mt-2">✓ {d.pros}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Step-by-Step Process to Work Abroad</h2>
          <div className="space-y-6">
            {process.map((p) => (
              <div key={p.step} className="flex gap-5 bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg">{p.step}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warnings */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">⚠️ Protect Yourself from Fraud</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">Overseas job fraud is a serious problem. Thousands of Pakistanis are deceived by fake agents every year. Follow these rules to stay safe.</p>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <ul className="space-y-3">
            {warnings.map((w, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-800">
                <span className="text-red-500 font-bold mt-0.5">⚠</span>
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-5">
          <p className="text-gray-800"><span className="font-bold text-blue-700">Helpful Resource:</span> Visit the official <strong>Bureau of Emigration & Overseas Employment (BEOE)</strong> at <span className="text-blue-600 font-semibold">beoe.gov.pk</span> to verify recruitment agents and access official job postings.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-14 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Explore All Job Opportunities</h2>
          <p className="text-orange-100 mb-8">From local internships to international careers — Taleem4u has it all in one place.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/jobs/government" className="bg-white text-orange-600 px-7 py-3 rounded-full font-semibold hover:bg-gray-100 transition">Government Jobs</Link>
            <Link href="/jobs/private" className="border-2 border-white text-white px-7 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition">Private Jobs</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
