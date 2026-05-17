import Link from "next/link";

export const metadata = {
  title: "Scholarships for Pakistani Students 2025 – Local & International | Taleem4u",
  description:
    "Explore fully funded and partial scholarships for Pakistani students. HEC, PEEF, Fulbright, Commonwealth, Chevening, and more. Eligibility, deadlines, and how to apply.",
  alternates: { canonical: "https://www.taleem4u.com/scholarships" },
};

export default function ScholarshipsPage() {
  const scholarships = [
    {
      title: "HEC Overseas Scholarship 2025",
      category: "Fully Funded",
      desc: "Offered by the Higher Education Commission of Pakistan, this scholarship covers tuition, living allowance, air tickets, and health insurance for MS/MPhil and PhD programs at top-ranked universities worldwide. Preference is given to faculty members of Pakistani universities.",
      deadline: "15 Oct 2025",
      eligibility: "Pakistani nationals with a relevant Master's or Bachelor's degree, minimum 2.5 CGPA",
      link: "#",
    },
    {
      title: "Punjab Education Endowment Fund (PEEF)",
      category: "Need-Based",
      desc: "PEEF provides financial aid to deserving students from Punjab who have secured at least 70% marks in their previous examination. The scholarship covers tuition and a monthly stipend, helping thousands of talented but financially constrained students pursue higher education each year.",
      deadline: "30 Sept 2025",
      eligibility: "Punjab domicile, 70% marks in last exam, family income below PKR 40,000/month",
      link: "#",
    },
    {
      title: "Fulbright Scholarship – USA",
      category: "Fully Funded",
      desc: "The Fulbright Program is one of the most prestigious international scholarship programs in the world. Pakistani students can apply for Master's and PhD study at American universities. The scholarship covers tuition, living expenses, health insurance, and return airfare. Administered in Pakistan by the US Educational Foundation (USEFP).",
      deadline: "20 Dec 2025",
      eligibility: "Bachelor's degree, minimum 2.5 CGPA, strong English proficiency (TOEFL/GRE may be required)",
      link: "#",
    },
    {
      title: "Commonwealth Scholarship – UK",
      category: "Fully Funded",
      desc: "The Commonwealth Scholarship Commission funds Pakistani students for Master's and PhD programs at leading UK universities. It covers tuition fees, monthly stipend, airfare, and a thesis grant. This is a competitive, merit-based scholarship focused on candidates who will make a positive development impact on return to Pakistan.",
      deadline: "5 Nov 2025",
      eligibility: "Pakistani citizen, relevant undergraduate degree, not permanently resident in the UK",
      link: "#",
    },
    {
      title: "Chevening Scholarship – UK",
      category: "Fully Funded",
      desc: "Chevening is the UK Government's global scholarship programme, offering fully funded one-year Master's degrees at UK universities. It targets future leaders with demonstrated leadership potential, strong academics, and a desire to return to Pakistan and contribute to their field.",
      deadline: "2 Nov 2025",
      eligibility: "2 years of work experience, Bachelor's degree, citizenship of a Chevening-eligible country",
      link: "#",
    },
    {
      title: "Aga Khan Foundation International Scholarship",
      category: "Need + Merit",
      desc: "AKF offers postgraduate scholarships to outstanding students from developing countries, including Pakistan, who have no other means of funding. It is awarded on a 50% grant and 50% loan basis. The program funds graduate study at leading universities globally and prioritizes applicants committed to community development.",
      deadline: "31 Mar 2025",
      eligibility: "Pakistani national, strong academic record, demonstrated financial need",
      link: "#",
    },
  ];

  const tips = [
    { title: "Start Early", desc: "Many scholarship applications require essays, recommendations, and language scores. Begin at least 6–8 months before the deadline to gather documents, write a strong personal statement, and request recommendation letters." },
    { title: "Tailor Your Personal Statement", desc: "A generic personal statement will not impress scholarship committees. Clearly explain your academic background, future goals, why you chose that program, and — most importantly — how you plan to contribute to Pakistan's development upon your return." },
    { title: "Secure Strong Recommendation Letters", desc: "Contact professors or supervisors who know your academic or professional work well. Give them at least 4–6 weeks to write a detailed letter. Provide them with your CV, personal statement, and the specific scholarship details." },
    { title: "Maintain Your GPA", desc: "Most competitive scholarships require a minimum CGPA of 2.5–3.0 out of 4.0. A higher GPA significantly improves your chances. Academic excellence combined with extra-curricular activities and leadership experience is the ideal profile." },
    { title: "Apply to Multiple Scholarships", desc: "Do not rely on a single scholarship application. Shortlist 4–6 programs you are eligible for and apply to all of them. Each rejection is a learning experience that improves your next application." },
  ];

  return (
    <main className="min-h-screen bg-gray-50 pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Scholarships for Pakistani Students 2025</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore the best local and international scholarship opportunities available for Pakistani students. 
            From HEC and PEEF to Fulbright and Chevening — find eligibility criteria, application deadlines, 
            and direct links to apply.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Scholarships</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {scholarships.map((sch, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-5">
                  <span className="bg-white text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">{sch.category}</span>
                  <h2 className="text-white font-bold text-lg mt-3">{sch.title}</h2>
                  <p className="text-emerald-100 text-sm mt-1">Deadline: {sch.deadline}</p>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{sch.desc}</p>
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <p className="text-xs font-semibold text-gray-700 mb-1">Eligibility:</p>
                    <p className="text-xs text-gray-600">{sch.eligibility}</p>
                  </div>
                  <a href={sch.link} className="w-full text-center px-5 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition font-medium text-sm">Apply Now →</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 bg-white rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Types of Scholarships Available in Pakistan</h2>
          <p className="text-gray-600 mb-6">Understanding the different types of scholarships helps you target the right opportunities based on your academic profile, financial situation, and career goals.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { type: "Merit-Based Scholarships", desc: "Awarded on the basis of academic excellence. Universities, HEC, and private foundations offer merit scholarships to top-performing students. A high GPA and outstanding test scores are the primary criteria." },
              { type: "Need-Based Scholarships", desc: "Designed for financially constrained students. Programs like PEEF and AKF consider family income, number of dependents, and assets when evaluating applications. A strong academic record is still required." },
              { type: "Fully Funded International Scholarships", desc: "Programs like Fulbright, Chevening, and Commonwealth cover all expenses — tuition, accommodation, travel, and living costs. These are highly competitive and require excellent academics plus demonstrated leadership." },
              { type: "Sector-Specific Scholarships", desc: "Certain organizations fund scholarships in specific fields — technology, medicine, agriculture, law, and journalism. Examples include OGDCL scholarships for engineering, and USAID-sponsored programs in health and governance." },
            ].map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-800 mb-2">{item.type}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Tips for a Successful Scholarship Application</h2>
          <p className="text-gray-600 mb-8">Competition for scholarships is intense. These proven strategies will significantly improve your chances of securing funding for your studies.</p>
          <div className="space-y-5">
            {tips.map((tip, i) => (
              <div key={i} className="flex gap-4 bg-white rounded-xl shadow p-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-lg">{i + 1}</div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">{tip.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 bg-emerald-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions – Scholarships</h2>
          <div className="space-y-4">
            {[
              { q: "Can I apply for scholarships during my undergraduate studies?", a: "Yes. Several scholarships — including PEEF, university merit scholarships, and some USAID-funded programs — are specifically for undergraduate students. International scholarships like Fulbright are primarily for postgraduate study." },
              { q: "Do I need IELTS for international scholarships?", a: "Most international scholarships require English proficiency proof. Fulbright accepts TOEFL, while Chevening and Commonwealth typically accept IELTS (minimum 6.5). Some programs allow applicants to provide language scores after receiving a conditional offer." },
              { q: "Is there a bond attached to government scholarships?", a: "Yes. Government-funded scholarships like HEC Overseas generally require recipients to return to Pakistan and serve for a specified period (usually equal to the duration of the scholarship) after completing their studies." },
              { q: "Can I work part-time while on a scholarship abroad?", a: "It depends on the visa type and scholarship terms. UK and Australian student visas allow limited part-time work. However, some scholarship agreements prohibit paid employment. Always read your scholarship's terms and conditions carefully." },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-5">
                <h3 className="font-semibold text-gray-800 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Explore More Resources</h2>
          <div className="flex flex-wrap gap-3">
            {[{label:"Admissions",href:"/admissions"},{label:"MDCAT Prep",href:"/prep/mdcat"},{label:"PPSC Prep",href:"/prep/ppsc"},{label:"Jobs Portal",href:"/jobs"},{label:"Books & Notes",href:"/books"},{label:"Past Papers",href:"/past-papers"}].map(l => (
              <Link key={l.href} href={l.href} className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-100 transition">{l.label}</Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
