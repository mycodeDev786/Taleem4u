import Link from "next/link";

export const metadata = {
  title: "University Admissions in Pakistan 2024 | Complete Guide | Taleem4u",
  description:
    "Complete guide to university admissions in Pakistan. Explore top universities, admission requirements, entry test preparation, deadlines, and application tips for Pakistani students.",
  keywords: "university admissions pakistan, admission guide, entry test, HEC, NUST, LUMS, UET",
  alternates: { canonical: "https://taleem4u.com/admissions" },
};

export default function AdmissionsPage() {
  const universities = [
    { name: "NUST", full: "National University of Sciences & Technology", city: "Islamabad", test: "NET", fields: "Engineering, Sciences, IT, Management" },
    { name: "LUMS", full: "Lahore University of Management Sciences", city: "Lahore", test: "SAT / LUMS Own", fields: "Business, Law, Sciences, Social Sciences" },
    { name: "UET", full: "University of Engineering & Technology", city: "Lahore", test: "ECAT", fields: "Engineering, Architecture" },
    { name: "FAST-NUCES", full: "National University of Computer & Sciences", city: "Multi-campus", test: "NU Entry Test", fields: "CS, IT, Engineering, Business" },
    { name: "Quaid-i-Azam University", full: "Quaid-i-Azam University", city: "Islamabad", test: "QAU Own Test", fields: "Sciences, Social Sciences, Law" },
    { name: "University of Karachi", full: "University of Karachi", city: "Karachi", test: "KU Admission Test", fields: "Arts, Sciences, Commerce, Pharmacy" },
    { name: "COMSATS University", full: "COMSATS University Islamabad", city: "Multi-campus", test: "NET / COMSATS Own", fields: "Engineering, Sciences, IT, Business" },
    { name: "Aga Khan University", full: "Aga Khan University", city: "Karachi", test: "AKU-EB / Own Test", fields: "Medicine, Nursing, Education" },
  ];

  const steps = [
    { step: "1", title: "Research Universities & Programs", desc: "Start by researching which universities offer your desired program. Check HEC's recognized universities list. Compare rankings, faculty, campus life, fee structures, and graduate outcomes before making a shortlist of 5–10 universities." },
    { step: "2", title: "Check Eligibility Criteria", desc: "Each university has its own eligibility requirements. Generally you need Matric with at least 60% marks and Intermediate (FSc/FA/ICS) with 60–70%+ marks. Some top universities require 80%+ in relevant subjects." },
    { step: "3", title: "Prepare for Entry Tests", desc: "Most universities conduct their own entry tests or accept scores from SAT, MDCAT, ECAT, or NTS-NAT. Start preparation at least 6 months before the test. Use past papers, mock tests, and subject-specific guides." },
    { step: "4", title: "Gather Required Documents", desc: "Common documents include: Matric & Inter certificates and mark sheets, CNIC / B-Form, passport-size photographs, domicile certificate, character certificate from previous institution, and entry test result." },
    { step: "5", title: "Submit Online Application", desc: "Most universities now accept online applications. Create your account on the university's portal, fill the form carefully, upload documents in the specified format/size, and pay the application fee via bank challan or online payment." },
    { step: "6", title: "Appear in Entry Test / Interview", desc: "Appear for the entry test on the scheduled date. Some programs (Medicine, MBA, Law) also require a personal interview. Dress formally, arrive early, and bring all required documents and your CNIC." },
    { step: "7", title: "Check Merit List", desc: "Universities release merit lists on their website and notice boards. Merit is usually calculated combining your academic marks (Matric + Inter) and entry test score. Check the list on the announced date." },
    { step: "8", title: "Complete Enrollment", desc: "If your name appears on the merit list, pay the semester fee within the given deadline (usually 3–5 days) to secure your seat. Late payment results in cancellation of admission." },
  ];

  const entryTests = [
    { name: "MDCAT", full: "Medical & Dental College Admission Test", for: "MBBS / BDS", body: "PMC", subjects: "Biology, Chemistry, Physics, English" },
    { name: "ECAT", full: "Engineering College Admission Test", for: "BE / BS Engineering", body: "UET & affiliates", subjects: "Math, Physics, Chemistry, English" },
    { name: "NET", full: "NUST Entry Test", for: "All NUST programs", body: "NUST", subjects: "Math, Physics, Chemistry, English, Intelligence" },
    { name: "SAT", full: "Scholastic Assessment Test", for: "LUMS, IBA, selected universities", body: "College Board (USA)", subjects: "Math, Reading, Writing" },
    { name: "NTS-NAT", full: "National Aptitude Test", for: "Many public universities", body: "NTS", subjects: "Verbal, Analytical, Quantitative" },
    { name: "GMAT", full: "Graduate Management Admission Test", for: "MBA programs", body: "GMAC", subjects: "Verbal, Quantitative, IR, AWA" },
    { name: "GRE", full: "Graduate Record Examination", for: "MS / PhD programs", body: "ETS", subjects: "Verbal, Quantitative, AWA" },
    { name: "IELTS / TOEFL", full: "English Proficiency Tests", for: "Foreign / English-medium universities", body: "British Council / ETS", subjects: "Listening, Reading, Writing, Speaking" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="text-sm mb-4 text-indigo-200">
            <Link href="/" className="hover:text-white">Home</Link> / <span>Admissions</span>
          </nav>
          <h1 className="text-5xl font-bold mb-4">University Admissions in Pakistan</h1>
          <p className="text-xl text-indigo-100 max-w-3xl">
            Your complete guide to securing admission in Pakistan's top universities. From entry tests to enrollment — we cover every step.
          </p>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Step-by-Step Admission Process</h2>
        <p className="text-gray-600 mb-10 max-w-3xl">Understanding the admission process is the first step to success. Follow these 8 steps to navigate university admissions in Pakistan smoothly.</p>
        <div className="space-y-6">
          {steps.map((s) => (
            <div key={s.step} className="flex gap-5 bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg">{s.step}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-700 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Entry Tests */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Major Entry Tests in Pakistan</h2>
          <p className="text-gray-600 mb-10">Knowing which test to prepare for can save you months of wasted effort. Here is a complete overview of all major entry tests.</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  <th className="px-4 py-3 text-left">Test</th>
                  <th className="px-4 py-3 text-left">Full Name</th>
                  <th className="px-4 py-3 text-left">For</th>
                  <th className="px-4 py-3 text-left">Subjects</th>
                </tr>
              </thead>
              <tbody>
                {entryTests.map((t, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-bold text-indigo-700">{t.name}</td>
                    <td className="px-4 py-3 text-gray-800">{t.full}</td>
                    <td className="px-4 py-3 text-gray-700">{t.for}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{t.subjects}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Top Universities in Pakistan</h2>
        <p className="text-gray-600 mb-10">Here are some of Pakistan's most reputable universities across various disciplines.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {universities.map((u, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-indigo-700">{u.name}</h3>
                  <p className="text-gray-600 text-sm">{u.full}</p>
                </div>
                <span className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded-full">{u.city}</span>
              </div>
              <div className="space-y-1 text-sm text-gray-700">
                <p><span className="font-semibold">Entry Test:</span> {u.test}</p>
                <p><span className="font-semibold">Programs:</span> {u.fields}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="bg-indigo-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Expert Admission Tips</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Apply to Multiple Universities", tip: "Never rely on a single institution. Apply to at least 4–6 universities across different tiers (reach, match, safety) to maximize your chances." },
              { title: "Start Preparing Early", tip: "Begin entry test preparation at least 6–12 months in advance. Consistent daily study is far more effective than last-minute cramming." },
              { title: "Keep Documents Ready", tip: "Get all documents attested and scanned well in advance. Missing paperwork is one of the most common reasons applications are rejected." },
              { title: "Track Deadlines Carefully", tip: "Maintain a spreadsheet of all application deadlines. Missing a deadline by even one day can mean waiting an entire year for the next cycle." },
              { title: "Financial Planning", tip: "Explore scholarships, need-based grants, and student loan options early. HEC, PEEF, and universities themselves offer various funding opportunities." },
              { title: "Campus Visits", tip: "If possible, visit shortlisted campuses before applying. Talking to current students gives you insight that no website can provide." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-indigo-600">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-14 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-indigo-100 mb-8">Explore scholarships to fund your education and browse our study guides for entry test preparation.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/scholarships" className="bg-white text-indigo-600 px-7 py-3 rounded-full font-semibold hover:bg-gray-100 transition">Find Scholarships</Link>
            <Link href="/guides" className="border-2 border-white text-white px-7 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition">Study Guides</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
