import AdmissionsCarousel from "./AdmissionsCarousel";
import Link from "next/link";

export const metadata = {
  title: "University & College Admissions 2025 Pakistan - Taleem4u",
  description:
    "Find the latest admission updates for universities and colleges across Pakistan. NUST, UET, Punjab University, LUMS and more. Dates, requirements, and how to apply.",
  alternates: { canonical: "https://www.taleem4u.com/admissions" },
};

export default function AdmissionsPage() {
  const admissions = [
    { title: "University of Punjab Admissions 2025", date: "Last date: 15 Oct 2025", link: "#" },
    { title: "NUST Admissions 2025", date: "Entry test registration open", link: "#" },
    { title: "GCU Lahore Admissions 2025", date: "Apply before 30 Sept 2025", link: "#" },
    { title: "UET Lahore Admissions 2025", date: "Last date: 20 Sept 2025", link: "#" },
    { title: "LUMS Admissions 2025", date: "Rolling admissions – apply now", link: "#" },
    { title: "Aga Khan University Admissions", date: "MBBS applications open", link: "#" },
  ];

  const topUniversities = [
    { name: "NUST", city: "Islamabad", programs: "Engineering, IT, Business", test: "NET", merit: "Very High" },
    { name: "UET Lahore", city: "Lahore", programs: "Engineering, Architecture", test: "ECAT", merit: "High" },
    { name: "University of Punjab", city: "Lahore", programs: "Law, Sciences, Arts, Commerce", test: "PU Entry Test", merit: "Medium–High" },
    { name: "LUMS", city: "Lahore", programs: "Business, Law, CS", test: "LUMS SAT / LCAT", merit: "Very High" },
    { name: "QAU", city: "Islamabad", programs: "Natural & Social Sciences", test: "QAU Entry Test", merit: "High" },
    { name: "IBA Karachi", city: "Karachi", programs: "BBA, BS CS, MBA", test: "IBA Aptitude Test", merit: "Very High" },
  ];

  const steps = [
    { step: "1", title: "Check Eligibility Criteria", desc: "Each university sets minimum marks — usually 60–70% in Matric/FSc for most programs. Medical (MBBS/BDS) requires 70% and a passing MDCAT score. Engineering programs require ECAT." },
    { step: "2", title: "Prepare for Entry Tests", desc: "Most public universities require a qualifying entry test. Start preparing 3–4 months before. Use past papers, online tests, and subject-specific preparation books (NET, ECAT, MDCAT)." },
    { step: "3", title: "Gather Required Documents", desc: "Commonly needed: Matric certificate & mark sheet, FSc/A-level result, CNIC/B-Form, domicile certificate, passport-size photos, and migration certificate if applicable." },
    { step: "4", title: "Apply Before the Deadline", desc: "Most universities open applications in August–September for Fall semester. Late applications are usually not accepted. Mark all deadlines on a calendar and apply early." },
    { step: "5", title: "Track Merit Lists", desc: "After tests, universities release first, second, and third merit lists. Monitor the official website and confirm your seat by paying the fee within the specified window." },
  ];

  const faqs = [
    { q: "When do university admissions open in Pakistan?", a: "Most universities open admissions in August–September for the Fall semester (starting October–November). Spring semester admissions usually open in January–February. Always check each university's official website for exact dates." },
    { q: "Is an entry test mandatory for all universities?", a: "Public universities such as NUST, UET, and Punjab University require their own tests. Private institutions like LUMS and IBA have aptitude tests. Some smaller private universities admit based on Matric/FSc marks alone." },
    { q: "What is the minimum percentage for MBBS admission?", a: "For MBBS/BDS you need at least 70% in FSc (Pre-Medical) and a valid MDCAT score of 65% or above as per PMC regulations. Provincial merit is also a factor for public medical college seats." },
    { q: "Can I apply to multiple universities at once?", a: "Yes. You can apply to as many universities as you wish, paying separate application fees for each. Once you receive an offer, you must confirm your seat at one institution by paying the semester fee." },
    { q: "What documents are needed for university admission?", a: "Typically: Matric certificate, FSc certificate, CNIC or B-Form, domicile certificate, character certificate, 4–6 passport photos, and your entry test result slip." },
  ];

  return (
    <main className="min-h-screen bg-gray-50 pt-24">
      <AdmissionsCarousel items={admissions} />
      <div className="max-w-6xl mx-auto py-12 px-6">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">University & College Admissions 2025</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay up-to-date with admission announcements from schools, colleges, and universities across Pakistan. 
            Find entry test dates, merit criteria, required documents, and application links — all in one place.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Latest Admission Announcements</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {admissions.map((item, idx) => (
              <article key={idx} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-emerald-600 font-medium mb-3">{item.date}</p>
                <p className="text-gray-500 text-sm mb-4">View eligibility criteria, fee structure, required documents, and online application process.</p>
                <a href={item.link} className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-emerald-700 transition font-medium">View Details →</a>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Top Universities in Pakistan – Quick Overview</h2>
          <p className="text-gray-600 mb-6">Pakistan has over 200 HEC-recognized universities. Here is a summary of the country's leading institutions and their admission requirements for 2025.</p>
          <div className="overflow-x-auto rounded-xl shadow">
            <table className="w-full bg-white text-sm">
              <thead className="bg-emerald-700 text-white">
                <tr>
                  <th className="text-left p-4">University</th>
                  <th className="text-left p-4">City</th>
                  <th className="text-left p-4">Key Programs</th>
                  <th className="text-left p-4">Entry Test</th>
                  <th className="text-left p-4">Merit</th>
                </tr>
              </thead>
              <tbody>
                {topUniversities.map((uni, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-4 font-medium text-gray-800">{uni.name}</td>
                    <td className="p-4 text-gray-600">{uni.city}</td>
                    <td className="p-4 text-gray-600">{uni.programs}</td>
                    <td className="p-4 text-gray-600">{uni.test}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${uni.merit === "Very High" ? "bg-red-100 text-red-700" : uni.merit === "High" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}>{uni.merit}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">How to Apply for University Admissions</h2>
          <p className="text-gray-600 mb-8">Follow these five steps to ensure a smooth application process and improve your chances of getting into your dream university.</p>
          <div className="space-y-6">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-6 bg-white rounded-xl shadow p-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xl font-bold">{s.step}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{s.title}</h3>
                  <p className="text-gray-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl shadow p-6">
                <h3 className="font-semibold text-gray-800 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Related Resources</h2>
          <div className="flex flex-wrap gap-3">
            {[{label:"Scholarships",href:"/scholarships"},{label:"Past Papers",href:"/past-papers"},{label:"Books & Notes",href:"/books"},{label:"MDCAT Prep",href:"/prep/mdcat"},{label:"PPSC Prep",href:"/prep/ppsc"},{label:"Jobs Portal",href:"/jobs"}].map(l => (
              <Link key={l.href} href={l.href} className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-100 transition">{l.label}</Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
