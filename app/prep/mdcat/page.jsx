import Link from "next/link";

export const metadata = {
  title: "MDCAT Preparation 2025 – Books, Notes, Past Papers & Online Tests | Taleem4u",
  description:
    "Complete MDCAT preparation guide for Pakistan. Download MDCAT syllabus, recommended books, chapter-wise notes, past papers from 2015–2024, and practice with free online mock tests.",
  alternates: { canonical: "https://www.taleem4u.com/prep/mdcat" },
};

export default function MdcatPage() {
  const resources = [
    { title: "Past Papers", description: "Access MDCAT past papers from 2015 to 2024. Practice with real exam questions, understand the pattern, and identify recurring high-weight topics in Biology, Chemistry, Physics, and English.", link: "/past-papers/mdcat", icon: "📄", color: "blue" },
    { title: "Books", description: "Download MDCAT-recommended textbooks in PDF. Includes PMC-approved books for Biology, Chemistry, Physics, and Logical Reasoning. Save money and study from anywhere.", link: "/books/mdcat", icon: "📚", color: "green" },
    { title: "Chapter Notes", description: "Concise, exam-focused revision notes for all MDCAT subjects. Prepared by top scorers and subject experts. Perfect for last-minute revision before your test date.", link: "/notes/mdcat", icon: "📋", color: "purple" },
    { title: "Mock Tests", description: "Attempt full-length MDCAT mock tests (210 MCQs in 3.5 hours) under timed conditions. Get instant score reports and identify your weak areas for targeted improvement.", link: "/tests/mdcat", icon: "✏️", color: "red" },
  ];

  const syllabus = [
    { subject: "Biology", marks: 80, percentage: "38%", topics: "Cell Biology, Genetics, Human Physiology, Ecology, Plant Biology, Evolution" },
    { subject: "Chemistry", marks: 60, percentage: "29%", topics: "Atomic Structure, Chemical Bonding, Organic Chemistry, Reactions, Equilibrium" },
    { subject: "Physics", marks: 40, percentage: "19%", topics: "Mechanics, Waves, Thermodynamics, Electrostatics, Modern Physics" },
    { subject: "English", marks: 18, percentage: "9%", topics: "Vocabulary, Reading Comprehension, Sentence Structure, Grammar" },
    { subject: "Logical Reasoning", marks: 12, percentage: "6%", topics: "Pattern Recognition, Analogies, Data Interpretation, Deductive Reasoning" },
  ];

  const studyPlan = [
    { phase: "Phase 1 (Months 1–2)", title: "Foundation Building", tasks: ["Review all FSc Biology, Chemistry, and Physics textbooks chapter by chapter", "Make summary notes for each chapter as you study", "Focus on understanding concepts, not memorization", "Complete all past-paper questions related to each chapter after studying it"] },
    { phase: "Phase 2 (Months 3–4)", title: "Practice & Weak Area Fixing", tasks: ["Attempt 3–4 MDCAT past papers under exam conditions", "Identify the topics where you scored below 60% and revise them", "Practice English vocabulary daily — 15–20 new words per day", "Start timed MCQ practice to build speed and accuracy"] },
    { phase: "Phase 3 (Month 5)", title: "Final Revision", tasks: ["Revise all chapter notes without re-reading full textbooks", "Attempt 2 full mock tests every week", "Review every mistake and ensure you understand why you got it wrong", "Maintain a healthy sleep routine — aim for 7–8 hours per night"] },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">MDCAT Preparation 2025</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The Medical and Dental College Admission Test (MDCAT) is conducted by the Pakistan Medical Commission (PMC). 
            It is the gateway to MBBS and BDS programs at public and private medical colleges across Pakistan. 
            This comprehensive resource hub gives you everything you need to score high — books, notes, past papers, and mock tests.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Study Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((item, index) => (
              <Link key={index} href={item.link} className="group bg-white p-7 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer text-center flex flex-col">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{item.description}</p>
                <span className="mt-4 text-blue-600 text-sm font-medium">Explore →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16 bg-white rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">MDCAT Syllabus & Subject Weightage 2025</h2>
          <p className="text-gray-600 mb-6">The MDCAT consists of 210 MCQs and has a duration of 3.5 hours (210 minutes). Understanding the marks distribution helps you allocate your study time wisely. Biology has the highest weight and should receive the most preparation time.</p>
          <div className="overflow-x-auto rounded-xl">
            <table className="w-full text-sm bg-white border border-gray-200">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="text-left p-4">Subject</th>
                  <th className="text-left p-4">Total Marks</th>
                  <th className="text-left p-4">% of Total</th>
                  <th className="text-left p-4">Key Topics</th>
                </tr>
              </thead>
              <tbody>
                {syllabus.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-4 font-semibold text-gray-800">{row.subject}</td>
                    <td className="p-4 text-gray-700">{row.marks}</td>
                    <td className="p-4"><span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-semibold">{row.percentage}</span></td>
                    <td className="p-4 text-gray-600 text-xs">{row.topics}</td>
                  </tr>
                ))}
                <tr className="bg-blue-50 font-bold">
                  <td className="p-4">Total</td>
                  <td className="p-4">210</td>
                  <td className="p-4">100%</td>
                  <td className="p-4 text-gray-500 text-xs">3.5 hours exam duration</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Recommended 5-Month MDCAT Study Plan</h2>
          <p className="text-gray-600 mb-8">Following a structured study plan is the key difference between high scorers and average performers. Use this 5-month roadmap as a guide — adjust it to fit your own starting point and target score.</p>
          <div className="space-y-6">
            {studyPlan.map((phase, i) => (
              <div key={i} className="bg-white rounded-xl shadow p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">{phase.phase}</span>
                  <h3 className="text-lg font-semibold text-gray-800">{phase.title}</h3>
                </div>
                <ul className="space-y-2">
                  {phase.tasks.map((task, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="text-blue-500 mt-0.5">✓</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 bg-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions – MDCAT</h2>
          <div className="space-y-4">
            {[
              { q: "What is the minimum MDCAT score required for public medical colleges?", a: "As per PMC regulations, students must score at least 65% in MDCAT to be eligible for MBBS/BDS programs at public medical colleges. For private colleges, the minimum score may vary but is generally 55–60%." },
              { q: "How many times can I appear in MDCAT?", a: "There is no restriction on the number of MDCAT attempts. You can appear every year until you secure a seat in a medical college. However, note that each year's score is only valid for that admission cycle." },
              { q: "Is MDCAT compulsory for private medical colleges too?", a: "Yes. As per PMC's policy, MDCAT is compulsory for admission to MBBS and BDS programs in both public and private medical colleges across Pakistan. No medical institution is exempt from this requirement." },
              { q: "Can international students (overseas Pakistanis) apply through MDCAT?", a: "Overseas Pakistanis can apply through the Overseas Pakistani quota. They are generally required to take the MDCAT but may appear through designated centres abroad. Check PMC's official notifications for updated overseas applicant guidelines." },
              { q: "What books should I use for MDCAT Biology preparation?", a: "The PMC-approved FSc Biology textbooks (Part 1 and Part 2) form the primary source. Supplementary materials include Dogar Brothers' MDCAT Biology guide and past-paper collections. Avoid using too many books — depth over breadth is the key." },
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
            {[{label:"PPSC Preparation",href:"/prep/ppsc"},{label:"Admissions",href:"/admissions"},{label:"Scholarships",href:"/scholarships"},{label:"FSc Books",href:"/books/inter"},{label:"Past Papers",href:"/past-papers"}].map(l => (
              <Link key={l.href} href={l.href} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">{l.label}</Link>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
