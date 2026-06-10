import Link from "next/link";

const subjectData = {
  biology: { name: "Biology", icon: "🧬", part1: ["Introduction to Biology","Biological Molecules","Enzymes","The Cell","Variety of Life","Kingdom Prokaryotae","Kingdom Protoctista","Kingdom Fungi","Kingdom Plantae","Kingdom Animalia"], part2: ["Homeostasis","Support & Movement","Coordination & Control","Gaseous Exchange","Reproduction","Growth & Development","Genetics","Evolution","Ecosystem","Man & His Environment"], tips: ["Draw every diagram at least 10 times from memory — they appear in almost every question","Learn definitions precisely — FSc biology examiners dock marks for vague or paraphrased definitions","Ecology, Genetics, and Homeostasis appear in almost every board paper — master these first","For MDCAT, focus on cell biology, bioenergetics, and reproduction across both parts","Create a table of similarities and differences for paired topics (mitosis vs meiosis, etc.)"] },
  chemistry: { name: "Chemistry", icon: "🧪", part1: ["Stoichiometry","Atomic Structure","Gases","Liquids & Solids","Chemical Bonding","Thermochemistry","Electrochemistry","Chemical Equilibrium","Solutions","Reaction Kinetics"], part2: ["Introduction to Organic Chemistry","Saturated Hydrocarbons","Unsaturated Hydrocarbons","Aromatic Hydrocarbons","Alkyl Halides","Alcohols, Phenols & Ethers","Aldehydes & Ketones","Carboxylic Acids","Amino Acids","Macromolecules","Environmental Chemistry"], tips: ["Organic chemistry is the highest-yield FSc chemistry topic — master reaction mechanisms","Learn equilibrium constants, Le Chatelier's principle, and Ka/Kb calculations thoroughly","Electrochemistry numericals appear every year — practice cell potential calculations daily","Thermochemistry Hess's Law problems require daily practice — don't leave this chapter","MDCAT tests organic reactions heavily — know every reaction in chapters 13–20"] },
  physics: { name: "Physics", icon: "⚛️", part1: ["Measurements","Vectors & Equilibrium","Motion & Force","Work & Energy","Circular Motion","Fluid Dynamics","Oscillations","Waves","Physical Optics","Optical Instruments","Heat & Thermodynamics"], part2: ["Electrostatics","Current Electricity","Electromagnetism","Electromagnetic Induction","Alternating Current","Physics of Solids","Electronics","Dawn of Modern Physics","Atomic Spectra","Nuclear Physics"], tips: ["Numerical problems in Physics require daily practice — do at least 10 problems per chapter","Modern physics, electromagnetism, and nuclear physics are board exam favourites","Understand derivations conceptually — examiners ask for 'derive from first principles'","Physics numericals follow patterns — solving 5 years of past papers reveals all common types","For MDCAT/ECAT, focus on mechanics, waves, optics, and electricity chapters"] },
  mathematics: { name: "Mathematics", icon: "📐", part1: ["Number Systems","Sets, Functions & Groups","Matrices & Determinants","Quadratic Equations","Partial Fractions","Sequences & Series","Permutation, Combination & Probability","Mathematical Induction & Binomial Theorem","Fundamentals of Trigonometry","Trigonometric Identities","Trigonometric Functions","Application of Trigonometry","Inverse Trigonometric Functions","Solutions of Trigonometric Equations"], part2: ["Functions & Limits","Differentiation","Integration","Introduction to Analytic Geometry","Linear Inequalities & Linear Programming","Conic Sections","Vectors"], tips: ["Integration and differentiation are the most important FSc Math topics for university entry tests","Show every step — marks are awarded per step even if the final answer is wrong","Conic sections and vectors are favourite topics for ECAT and NET examinations","Practice at least 20 calculus problems daily for 2 months before the exam","Trigonometry identities — memorise them; every topic in Part II uses them"] },
};

export default function InterSubjectPage({ params }) {
  const slug = params?.slug || "biology";
  const subject = subjectData[slug] || subjectData.biology;

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-green-700 to-teal-700 text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <nav className="text-sm text-green-200 mb-4">
            <Link href="/">Home</Link> / <Link href="/books">Books</Link> / <Link href="/books/inter">Intermediate</Link> / <span>{subject.name}</span>
          </nav>
          <div className="flex items-center gap-4">
            <span className="text-5xl">{subject.icon}</span>
            <div>
              <h1 className="text-4xl font-bold">Intermediate {subject.name}</h1>
              <p className="text-green-200 mt-1">FSc Part I (11th) & Part II (12th) Textbooks and Notes</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white border border-green-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Part I — 11th Class</h2>
            <p className="text-gray-600 text-sm mb-4">All chapters in FSc Part I {subject.name}:</p>
            <ul className="space-y-2">
              {subject.part1.map((t, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                  <span className="w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
                  {t}
                </li>
              ))}
            </ul>
            <button className="mt-5 w-full bg-green-700 text-white py-2.5 rounded-lg font-semibold hover:bg-green-800 transition">Download Part I PDF</button>
          </div>
          <div className="bg-white border border-teal-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Part II — 12th Class</h2>
            <p className="text-gray-600 text-sm mb-4">All chapters in FSc Part II {subject.name}:</p>
            <ul className="space-y-2">
              {subject.part2.map((t, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                  <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
                  {t}
                </li>
              ))}
            </ul>
            <button className="mt-5 w-full bg-teal-700 text-white py-2.5 rounded-lg font-semibold hover:bg-teal-800 transition">Download Part II PDF</button>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Expert Tips for FSc {subject.name}</h2>
          <div className="space-y-3">
            {subject.tips.map((tip, i) => (
              <div key={i} className="flex gap-3 items-start bg-white rounded-lg p-4 border border-gray-200">
                <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                <p className="text-gray-700 text-sm leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/past-papers/inter" className="bg-green-700 text-white rounded-lg p-5 text-center hover:bg-green-800 transition">
            <div className="text-2xl mb-2">📄</div>
            <h3 className="font-bold">Inter Past Papers</h3>
            <p className="text-xs text-green-100 mt-1">All boards 2015–2023</p>
          </Link>
          <Link href="/prep/mdcat" className="bg-red-700 text-white rounded-lg p-5 text-center hover:bg-red-800 transition">
            <div className="text-2xl mb-2">🩺</div>
            <h3 className="font-bold">MDCAT Prep</h3>
            <p className="text-xs text-red-100 mt-1">Medical entry test guide</p>
          </Link>
          <Link href="/books/inter" className="bg-gray-700 text-white rounded-lg p-5 text-center hover:bg-gray-800 transition">
            <div className="text-2xl mb-2">📚</div>
            <h3 className="font-bold">Other Subjects</h3>
            <p className="text-xs text-gray-300 mt-1">Back to Inter books</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { slug: "biology" }, { slug: "chemistry" }, { slug: "physics" },
    { slug: "mathematics" }, { slug: "english" }, { slug: "computer-science" },
    { slug: "economics" }, { slug: "urdu" },
  ];
}
