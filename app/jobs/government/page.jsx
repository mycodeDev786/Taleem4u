import Link from "next/link";

export const metadata = {
  title: "Latest Government Jobs in Pakistan 2025 – FPSC, PPSC, NTS, WAPDA | Taleem4u",
  description:
    "Find the latest government jobs in Pakistan 2025. FPSC, PPSC, SPSC, BPSC, NTS, WAPDA, Railway, Police, and Education Department vacancies. BPS grade details, eligibility, and how to apply.",
  alternates: { canonical: "https://www.taleem4u.com/jobs/government" },
};

export default function GovernmentJobs() {
  const categories = [
    { name: "FPSC – Federal Public Service Commission", slug: "fpsc", vacancies: "150+", desc: "Federal government posts including CSS, Inspector, Deputy Director, and specialist cadre positions across all ministries." },
    { name: "PPSC – Punjab Public Service Commission", slug: "ppsc", vacancies: "200+", desc: "Punjab provincial jobs including Patwari, Sub-Inspector, Assistant, Lecturer, and various BPS-14 to BPS-17 posts." },
    { name: "SPSC – Sindh Public Service Commission", slug: "spsc", vacancies: "80+", desc: "Sindh government vacancies including provincial management posts, education, health, and engineering departments." },
    { name: "BPSC – Balochistan Public Service Commission", slug: "bpsc", vacancies: "40+", desc: "Balochistan provincial government jobs with priority posts for Balochistan domicile holders." },
    { name: "KPPSC – KP Public Service Commission", slug: "kppsc", vacancies: "60+", desc: "Khyber Pakhtunkhwa government vacancies across all departments and BPS grades." },
    { name: "NTS Jobs", slug: "nts", vacancies: "300+", desc: "National Testing Service-based recruitment for federal and provincial departments, authorities, and universities." },
    { name: "OTS Jobs", slug: "ots", vacancies: "100+", desc: "One-Test Selection System jobs for Punjab departments, particularly education and healthcare." },
    { name: "PTS Jobs", slug: "pts", vacancies: "90+", desc: "Pakistan Testing Service-based government job tests for various federal and provincial posts." },
    { name: "WAPDA Jobs", slug: "wapda", vacancies: "50+", desc: "Water and Power Development Authority vacancies for engineers, technicians, and administrative staff." },
    { name: "Railway Jobs", slug: "railway", vacancies: "70+", desc: "Pakistan Railways posts for station masters, guard, engine drivers, engineers, and technical staff." },
    { name: "Police Jobs", slug: "police", vacancies: "120+", desc: "Punjab, Sindh, KP, and Balochistan police constable, ASI, Sub-Inspector, and Inspector posts." },
    { name: "Education Department", slug: "education", vacancies: "500+", desc: "Primary, middle, high, and higher secondary school teacher posts across all provinces." },
  ];

  const latestJobs = [
    { title: "Assistant (BS-16)", dept: "Ministry of Finance", deadline: "25 Oct 2025", edu: "Bachelor's", test: "NTS", locations: "Islamabad" },
    { title: "Constable (BS-5)", dept: "Punjab Police", deadline: "10 Oct 2025", edu: "Matric", test: "PPSC/Physical", locations: "All Punjab Districts" },
    { title: "Lecturer Mathematics (BS-17)", dept: "Higher Education Dept Punjab", deadline: "30 Oct 2025", edu: "Master's in Math", test: "PPSC", locations: "Punjab" },
    { title: "Junior Engineer Civil (BS-11)", dept: "WAPDA", deadline: "5 Nov 2025", edu: "DAE Civil", test: "NTS", locations: "Multiple" },
    { title: "Patwari (BS-7)", dept: "Board of Revenue Punjab", deadline: "20 Oct 2025", edu: "Intermediate", test: "PPSC MCQs", locations: "Punjab" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <nav className="text-sm mb-6 text-gray-600">
        <Link href="/" className="hover:underline">Home</Link> &gt;{" "}
        <Link href="/jobs" className="hover:underline">Jobs</Link> &gt;{" "}
        <span className="font-semibold">Government Jobs</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Latest Government Jobs in Pakistan 2025</h1>
        <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
          Pakistan's government sector employs millions across federal and provincial departments. 
          Browse the latest verified government job listings from FPSC, PPSC, NTS, WAPDA, Pakistan 
          Railways, Police, and Education departments — updated daily.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Latest Openings</h2>
        <div className="space-y-4">
          {latestJobs.map((job, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
                <p className="text-gray-600 text-sm">{job.dept} &bull; {job.locations}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded-full">Edu: {job.edu}</span>
                  <span className="bg-emerald-50 text-emerald-700 text-xs px-2 py-0.5 rounded-full">Test: {job.test}</span>
                  <span className="bg-red-50 text-red-700 text-xs px-2 py-0.5 rounded-full">Deadline: {job.deadline}</span>
                </div>
              </div>
              <a href="#" className="flex-shrink-0 bg-emerald-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition">Apply Now</a>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Browse by Recruiting Body</h2>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/jobs/government/${cat.slug}`}
              className="bg-white shadow rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col">
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-base font-semibold text-gray-800 leading-tight flex-1">{cat.name}</h2>
                <span className="flex-shrink-0 ml-2 bg-emerald-50 text-emerald-700 text-xs font-bold px-2 py-1 rounded-full">{cat.vacancies}</span>
              </div>
              <p className="text-sm text-gray-500 mt-1 flex-1 leading-relaxed">{cat.desc}</p>
              <span className="mt-3 text-emerald-600 text-sm font-medium">View Jobs →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12 bg-white rounded-2xl shadow p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Government Job Application Process – Step by Step</h2>
        <div className="space-y-5">
          {[
            { step: "1", title: "Find the Official Advertisement", desc: "Government jobs are advertised in national newspapers (Dawn, The News, Jang, Nawa-i-Waqt) and on official websites of FPSC, PPSC, and other recruiting bodies. Always verify through the official source before applying." },
            { step: "2", title: "Check Your Eligibility", desc: "Confirm you meet all eligibility criteria: educational qualification, age limit (usually 18–35), domicile requirement, and any experience requirement. Applying without meeting criteria wastes your application fee." },
            { step: "3", title: "Apply Online", desc: "Most government jobs now require online applications through the recruiting body's portal (ppsc.gop.pk, fpsc.gov.pk, etc.). Create an account, fill the form carefully, upload your documents, and pay the application fee through the designated bank or payment gateway." },
            { step: "4", title: "Prepare for the Written Test", desc: "After applying, prepare intensively for the written test. Use past papers from that recruiting body, cover all compulsory subjects (GK, English, Pakistan Affairs, Islamiat, Mathematics), and practice MCQs daily." },
            { step: "5", title: "Attend Test and Interview", desc: "Arrive at the test centre early with your CNIC and roll number slip. For shortlisted candidates, an interview or physical test follows. Dress professionally for interviews and be ready to discuss your subject knowledge and situational scenarios." },
            { step: "6", title: "Medical and Document Verification", desc: "Successful candidates must pass a medical fitness test and submit all original documents for verification before joining. Ensure all your certificates, domicile, and CNIC are in order well before this stage." },
          ].map((s) => (
            <div key={s.step} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">{s.step}</div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 bg-blue-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions – Government Jobs</h2>
        <div className="space-y-4">
          {[
            { q: "What is the general age limit for government jobs in Pakistan?", a: "The standard age limit for most government posts is 18–35 years. However, relaxations apply: up to 3 years for women, 5 years for government employees, and additional relaxations for candidates from AJK, GB, FATA, and other specified regions per government policy." },
            { q: "Can I apply for government jobs without a domicile certificate?", a: "No. A domicile certificate is a mandatory document for almost all government jobs in Pakistan. Provincial jobs specifically require you to hold a domicile of that province. The Federal (Islamabad) domicile is accepted for federal government posts only." },
            { q: "Is there a difference between NTS tests and PPSC tests?", a: "Yes. PPSC conducts its own examinations and is responsible for shortlisting candidates for Punjab provincial government posts. NTS (National Testing Service) is a third-party testing agency contracted by various departments to conduct recruitment tests on their behalf. Each has its own format, difficulty level, and subject weightage." },
            { q: "What happens if I fail the government job written test?", a: "There is no restriction on reapplying for future vacancies of the same or similar posts. Many successful government employees failed multiple tests before passing. Use each attempt as a learning experience, study your weak areas, and reapply when the next vacancy is advertised." },
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-xl p-5">
              <h3 className="font-semibold text-gray-800 mb-2">{faq.q}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-800 mb-4">Related Resources</h2>
        <div className="flex flex-wrap gap-3">
          {[
            { label: "PPSC Preparation", href: "/prep/ppsc" },
            { label: "PPSC Past Papers", href: "/past-papers/ppsc" },
            { label: "Private Jobs", href: "/jobs/private" },
            { label: "Internships", href: "/jobs/internships" },
            { label: "Scholarships", href: "/scholarships" },
          ].map(l => (
            <Link key={l.href} href={l.href} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-50 hover:text-emerald-700 transition">{l.label}</Link>
          ))}
        </div>
      </section>
    </div>
  );
}
