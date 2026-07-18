import Link from "next/link";
export const metadata = {
  title: "MDCAT Past Papers 2019–2023 | PMC | Free Download with Answer Keys | Taleem4u",
  description: "Download free MDCAT past papers from 2019 to 2023 with complete answer keys. Biology, Chemistry, and Physics MCQs from actual Pakistan Medical Commission tests.",
  keywords: "MDCAT past papers, PMC past papers, MDCAT solved papers 2023, MDCAT answer keys, MDCAT practice papers",
};
export default function MDCATPastPapers() {
  const years = [
    { year: "MDCAT 2023", papers: 1, questions: 220, desc: "The most recent MDCAT conducted by PMC. Biology 88 MCQs, Chemistry 66 MCQs, Physics 66 MCQs. Includes updated syllabus content.", difficulty: "High" },
    { year: "MDCAT 2022", papers: 1, questions: 220, desc: "PMC MDCAT 2022 with answer keys. Notable for increased emphasis on application-type questions in Biology and conceptual Physics numericals.", difficulty: "High" },
    { year: "MDCAT 2021", papers: 1, questions: 220, desc: "MDCAT 2021 — COVID-affected year with modified testing protocols. Useful for understanding the standard question distribution and difficulty.", difficulty: "Moderate-High" },
    { year: "MDCAT 2020", papers: 1, questions: 200, desc: "Pre-PMC standardisation era paper. Slightly different format but excellent for Chemistry organic reactions and Biology MCQ practice.", difficulty: "Moderate" },
    { year: "MDCAT 2019", papers: 3, questions: 220, desc: "Three regional papers (Punjab, Sindh, KPK) from the 2019 cycle. Excellent for seeing topic variation across different regional test versions.", difficulty: "Moderate" },
  ];
  const subjectBreakdown = [
    { subject: "Biology", mcqs: 88, percentage: "40%", keyTopics: ["Cell Biology & Organisation", "Biological Molecules", "Enzymes", "Bioenergetics", "Kingdom Animalia", "Kingdom Plantae", "Reproduction", "Genetics & Inheritance", "Homeostasis", "Coordination & Control", "Ecology", "Evolution", "Support & Movement"] },
    { subject: "Chemistry", mcqs: 66, percentage: "30%", keyTopics: ["Atomic Structure", "Chemical Bonding", "Gases", "Thermochemistry", "Electrochemistry", "Chemical Equilibrium", "Saturated Hydrocarbons", "Unsaturated Hydrocarbons", "Alcohols & Phenols", "Aldehydes & Ketones", "Carboxylic Acids", "Amino Acids", "Polymers"] },
    { subject: "Physics", mcqs: 66, percentage: "30%", keyTopics: ["Measurements & Vectors", "Kinematics", "Dynamics", "Work & Energy", "Circular Motion", "Fluid Dynamics", "Oscillations", "Waves", "Optics", "Heat & Thermodynamics", "Electrostatics", "Current Electricity", "Electromagnetism"] },
  ];
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-red-700 to-rose-700 text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <nav className="text-sm text-red-300 mb-4"><Link href="/">Home</Link> / <Link href="/past-papers">Past Papers</Link> / <span>MDCAT</span></nav>
          <h1 className="text-4xl font-bold mb-3">MDCAT Past Papers 2019–2023</h1>
          <p className="text-red-100 text-lg max-w-3xl">Free actual MDCAT past papers from the Pakistan Medical Commission with complete answer keys. Biology, Chemistry, and Physics MCQs from real PMC tests.</p>
          <div className="mt-6 flex gap-4 text-sm flex-wrap">
            <span className="bg-white/20 px-3 py-1.5 rounded-full">2019–2023 Papers</span>
            <span className="bg-white/20 px-3 py-1.5 rounded-full">Answer Keys Included</span>
            <span className="bg-white/20 px-3 py-1.5 rounded-full">Free Download</span>
          </div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why MDCAT Past Papers Are Essential</h2>
        <p className="text-gray-700 leading-relaxed mb-8">The MDCAT tests concepts in Biology, Chemistry, and Physics at the FSc level, but the way it tests them — through application-oriented MCQs, concept-combination questions, and exception-case scenarios — is significantly different from how board exams test the same material. Candidates who study textbooks thoroughly but have not solved actual MDCAT past papers consistently underperform relative to their knowledge level because they are not accustomed to the MDCAT's question style. Solving the 5 years of available past papers is the most direct preparation for the actual test.</p>
        <div className="space-y-4 mb-12">
          {years.map((y, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-5 flex flex-col md:flex-row md:items-center gap-4 hover:shadow-md transition">
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-lg">{y.year}</h3>
                <p className="text-gray-600 text-sm mt-1 mb-2">{y.desc}</p>
                <div className="flex gap-2 text-xs flex-wrap">
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full">{y.questions} Questions</span>
                  <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full">Difficulty: {y.difficulty}</span>
                </div>
              </div>
              <button className="bg-red-700 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-red-800 transition flex-shrink-0">Download PDF</button>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">MDCAT 2024 Subject Breakdown & Key Topics</h2>
        <div className="space-y-5 mb-10">
          {subjectBreakdown.map((s, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-xl font-bold text-gray-900">{s.subject}</h3>
                <span className="bg-red-100 text-red-700 text-sm px-3 py-1 rounded-full font-semibold">{s.mcqs} MCQs — {s.percentage}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {s.keyTopics.map((t) => (
                  <span key={t} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-4 flex-wrap">
          <Link href="/prep/mdcat" className="bg-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">MDCAT Prep Hub</Link>
          <Link href="/guides/mdcat-preparation-guide" className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">MDCAT Study Guide</Link>
          <Link href="/past-papers" className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition">All Past Papers</Link>
        </div>
      </section>
    </div>
  );
}
