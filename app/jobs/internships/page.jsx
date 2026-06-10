import Link from "next/link";

export const metadata = {
  title: "Internships in Pakistan 2024 | Paid & Unpaid | Students & Fresh Grads | Taleem4u",
  description:
    "Find the best internship opportunities in Pakistan for students and fresh graduates. Browse IT, banking, NGO, government, and corporate internships with tips on how to apply.",
  keywords: "internships pakistan, student internships, fresh graduate internships, paid internships, summer internships",
  alternates: { canonical: "https://taleem4u.com/jobs/internships" },
};

export default function Internships() {
  const categories = [
    { name: "IT & Software", icon: "💻", desc: "Internships in software development, data science, cloud computing, and cybersecurity at Pakistan's leading tech companies.", duration: "2–6 months", stipend: "PKR 15,000–40,000" },
    { name: "Banking & Finance", icon: "🏦", desc: "Structured internship programs at HBL, UBL, Meezan Bank, and other leading financial institutions in operations, finance, and relationship banking.", duration: "6–8 weeks", stipend: "PKR 10,000–25,000" },
    { name: "NGOs & Development Sector", icon: "🌍", desc: "Work with UN agencies, UNDP, UNICEF, Aga Khan Development Network, and local NGOs on development, research, and humanitarian projects.", duration: "3–6 months", stipend: "Varies / Unpaid" },
    { name: "Media & Communications", icon: "📺", desc: "Opportunities in journalism, PR, digital marketing, content creation, and broadcasting at leading media houses and agencies.", duration: "1–4 months", stipend: "PKR 10,000–20,000" },
    { name: "Healthcare & Pharma", icon: "🏥", desc: "Clinical rotations, pharmaceutical industry training, hospital management, and health policy research internships.", duration: "4–12 weeks", stipend: "PKR 8,000–20,000" },
    { name: "Government Internship Programs", icon: "🏛️", desc: "Prestigious programs like the National Internship Programme (NIP) by HEC placing graduates in federal ministries and departments.", duration: "3–6 months", stipend: "PKR 10,000–15,000" },
  ];

  const programs = [
    { name: "National Internship Programme (NIP)", by: "HEC Pakistan", who: "Fresh Graduates (16 years education)", stipend: "PKR 10,000/month", link: "#" },
    { name: "Jazz Graduate Trainee Program", by: "Jazz (Telecom)", who: "Final year / Fresh graduates", stipend: "Market competitive", link: "#" },
    { name: "HBL Summer Internship", by: "Habib Bank Limited", who: "Undergraduate students", stipend: "PKR 15,000/month", link: "#" },
    { name: "Unilever Future Leaders League", by: "Unilever Pakistan", who: "Final year students", stipend: "PKR 30,000–40,000/month", link: "#" },
    { name: "UNDP Youth Volunteering", by: "UNDP Pakistan", who: "University students 18–29", stipend: "Unpaid (certificate)", link: "#" },
    { name: "Engro Summer Internship", by: "Engro Corporation", who: "Undergraduate students", stipend: "Market competitive", link: "#" },
  ];

  const tips = [
    { title: "Apply Early — Deadlines Are Strict", body: "Most structured internship programs close applications months before the start date. HBL, Unilever, and Engro typically open applications in January for summer internships. Set reminders and apply the day applications open." },
    { title: "Polish Your CV for Internships", body: "For internships, focus your CV on academics (GPA, relevant coursework), extracurriculars, projects, and volunteer work. Keep it to one page. Use a clean, professional template — avoid fancy designs." },
    { title: "Write a Targeted Cover Letter", body: "Many students skip the cover letter. A well-written 3-paragraph cover letter explaining why you want this specific internship at this specific company can dramatically improve your chances." },
    { title: "Leverage Your University Network", body: "Career centers, faculty connections, and senior alumni are your strongest resources. Ask professors for referrals. Connect with seniors on LinkedIn who interned at your target companies." },
    { title: "Treat It Like a Real Job", body: "Interns who get return offers (or strong references) are the ones who show up on time, complete tasks thoroughly, and ask smart questions. Your internship is your longest job interview." },
    { title: "Convert to Full-Time Employment", body: "Use your internship to demonstrate your value. Raise your hand for extra projects. Build relationships with managers. Many companies prefer to hire from their intern pool — it saves them recruitment cost and risk." },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="text-sm text-teal-200 mb-4">
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/jobs" className="hover:text-white">Jobs</Link> / <span>Internships</span>
          </nav>
          <h1 className="text-5xl font-bold mb-4">Internships in Pakistan</h1>
          <p className="text-xl text-teal-100 max-w-3xl">
            Kickstart your career with the right internship. Browse paid and unpaid opportunities across all industries for students and fresh graduates.
          </p>
          <div className="mt-8 flex gap-4 flex-wrap text-sm">
            <span className="bg-white/20 px-4 py-2 rounded-full">500+ Active Listings</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Paid & Unpaid</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">All Sectors</span>
          </div>
        </div>
      </section>

      {/* Why Intern */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Do an Internship?</h2>
        <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
          In Pakistan's competitive job market, practical experience is often what separates candidates. Studies show that students who complete internships are 3x more likely to receive a job offer within 6 months of graduation compared to those who haven't.
        </p>
        <p className="text-gray-700 leading-relaxed mb-10 max-w-3xl">
          Beyond employment prospects, internships help you discover which career path actually suits you, build a professional network, and develop workplace skills that no classroom can teach — like communication, time management, and working under pressure.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mb-8">Internship Categories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((c, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{c.icon}</span>
                <h3 className="text-xl font-bold text-gray-900">{c.name}</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">{c.desc}</p>
              <div className="flex gap-4 text-xs">
                <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full">⏱ {c.duration}</span>
                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">💰 {c.stipend}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Programs */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Internship Programs</h2>
          <p className="text-gray-600 mb-10">These structured programs are among the most competitive and reputable internships available to Pakistani students.</p>
          <div className="space-y-4">
            {programs.map((p, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-5 flex flex-col md:flex-row md:items-center gap-4 hover:shadow-md transition">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg">{p.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{p.by} &bull; {p.who}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">{p.stipend}</span>
                  <Link href={p.link} className="bg-teal-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-teal-700 transition">Apply Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">How to Get & Make the Most of an Internship</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {tips.map((tip, i) => (
            <div key={i} className="bg-white border-l-4 border-teal-600 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{tip.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{tip.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-14 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore More Opportunities?</h2>
          <p className="text-teal-100 mb-8">Don't limit yourself — explore government jobs, private sector, and overseas opportunities as well.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/jobs/government" className="bg-white text-teal-700 px-7 py-3 rounded-full font-semibold hover:bg-gray-100 transition">Government Jobs</Link>
            <Link href="/jobs/abroad" className="border-2 border-white text-white px-7 py-3 rounded-full font-semibold hover:bg-white hover:text-teal-700 transition">Jobs Abroad</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
