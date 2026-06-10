import Link from "next/link";

const subjectData = {
  physics: { name: "Physics", icon: "⚛️", class9Topics: ["Physical Quantities & Measurement","Kinematics","Dynamics","Turning Effect of Forces","Gravitation","Work & Energy","Properties of Matter","Thermal Properties of Matter","Transfer of Heat"], class10Topics: ["Simple Harmonic Motion & Waves","Sound","Geometrical Optics","Electrostatics","Current Electricity","Electromagnetism","Basic Electronics","Information & Communication Technology","Atomic & Nuclear Physics"], tips: ["Master all formulas — write them on flashcards and review daily","Practice numerical problems — at least 10 per day in the month before exams","Understand concepts rather than memorising derivations; diagrams earn extra marks","Board papers favour chapters on Current Electricity, Optics, and Nuclear Physics — prioritise these","Attempt diagrams neatly with proper labels — they are worth 2–3 marks each"] },
  chemistry: { name: "Chemistry", icon: "🧪", class9Topics: ["Fundamentals of Chemistry","Structure of Atoms","Periodic Table & Periodicity","Structure of Molecules","Physical States of Matter","Solutions","Electrochemistry","Chemical Reactivity"], class10Topics: ["Chemical Equilibrium","Acids, Bases & Salts","Organic Chemistry","Hydrocarbons","Biochemistry","Industrial Chemistry","Environmental Chemistry"], tips: ["Balance all chemical equations — never write an unbalanced equation in an exam","Learn functional groups and organic reactions as patterns, not individual memorisation","Electrochemistry and Industrial Chemistry are high-yield for BISE board exams","Practice naming organic compounds daily — this takes time to master","Periodic table properties (electronegativity, ionisation energy, atomic radius) appear every year"] },
  biology: { name: "Biology", icon: "🧬", class9Topics: ["Introduction to Biology","Solving a Biological Problem","Biodiversity","Cells & Tissues","Cell Cycle","Enzymes","Bioenergetics","Nutrition","Transport"], class10Topics: ["Gaseous Exchange","Homeostasis","Coordination & Control","Support & Movement","Reproduction","Inheritance","Man & His Environment","Biotechnology","Pharmacology"], tips: ["Draw and label diagrams for every process — mitosis, meiosis, digestive system, nervous system","Long questions in biology always ask for process explanations — practice writing them in steps","Ecology and Biotechnology chapters appear every year — never skip them","Learn scientific names of organisms — examiners expect correct terminology","Use coloured pens to annotate diagrams; this improves memory and presentation"] },
  mathematics: { name: "Mathematics", icon: "📐", class9Topics: ["Matrices & Determinants","Real & Complex Numbers","Logarithms","Algebraic Expressions & Formulas","Factorization","Algebraic Manipulation","Linear Equations & Inequalities","Linear Graphs & Their Applications","Introduction to Coordinate Geometry","Congruent Triangles","Parallelograms & Triangles","Line Bisectors & Angle Bisectors","Sides & Angles of a Triangle","Ratio & Proportion","Pythagoras' Theorem","Theorems Related with Area","Practical Geometry — Triangles"], class10Topics: ["Quadratic Equations","Theory of Quadratic Equations","Variations","Partial Fractions","Sets & Functions","Basic Statistics","Introduction to Trigonometry","Projection of a Side of a Triangle","Chords of a Circle","Tangent to a Circle","Chords & Arcs","Angle in a Segment of a Circle","Practical Geometry — Circles"], tips: ["Attempt every exercise question — Mathematics is learned by doing, not reading","Show all working — marks are awarded for each step, even if the final answer is wrong","Learn all algebraic identities by heart — they appear in almost every chapter","Trigonometry and Statistics are high-scoring easy chapters — never skip them","Practice geometry theorems by drawing them from scratch without looking at the book"] },
};

export default function MatricSubjectPage({ params }) {
  const slug = params?.slug || "physics";
  const subject = subjectData[slug] || subjectData.physics;

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <nav className="text-sm text-blue-300 mb-4">
            <Link href="/">Home</Link> / <Link href="/books">Books</Link> / <Link href="/books/matric">Matric</Link> / <span>{subject.name}</span>
          </nav>
          <div className="flex items-center gap-4">
            <span className="text-5xl">{subject.icon}</span>
            <div>
              <h1 className="text-4xl font-bold">Matric {subject.name}</h1>
              <p className="text-blue-200 mt-1">9th & 10th Class Textbooks, Notes & Past Papers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white border border-blue-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9th Class — {subject.name}</h2>
            <p className="text-gray-600 text-sm mb-4">Chapters covered in the 9th class {subject.name} curriculum:</p>
            <ul className="space-y-2">
              {subject.class9Topics.map((t, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
                  {t}
                </li>
              ))}
            </ul>
            <button className="mt-5 w-full bg-blue-700 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-800 transition">Download 9th {subject.name} PDF</button>
          </div>
          <div className="bg-white border border-teal-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10th Class — {subject.name}</h2>
            <p className="text-gray-600 text-sm mb-4">Chapters covered in the 10th class {subject.name} curriculum:</p>
            <ul className="space-y-2">
              {subject.class10Topics.map((t, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                  <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
                  {t}
                </li>
              ))}
            </ul>
            <button className="mt-5 w-full bg-teal-700 text-white py-2.5 rounded-lg font-semibold hover:bg-teal-800 transition">Download 10th {subject.name} PDF</button>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Expert Tips for Matric {subject.name}</h2>
          <div className="space-y-3">
            {subject.tips.map((tip, i) => (
              <div key={i} className="flex gap-3 items-start bg-white rounded-lg p-4 border border-gray-200">
                <span className="text-blue-600 font-bold flex-shrink-0">✓</span>
                <p className="text-gray-700 text-sm leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/past-papers/matric" className="bg-blue-700 text-white rounded-lg p-5 text-center hover:bg-blue-800 transition">
            <div className="text-2xl mb-2">📄</div>
            <h3 className="font-bold">Past Papers</h3>
            <p className="text-xs text-blue-100 mt-1">2015–2023 all boards</p>
          </Link>
          <Link href="/books/notes" className="bg-purple-700 text-white rounded-lg p-5 text-center hover:bg-purple-800 transition">
            <div className="text-2xl mb-2">✏️</div>
            <h3 className="font-bold">Study Notes</h3>
            <p className="text-xs text-purple-100 mt-1">Concise key point notes</p>
          </Link>
          <Link href="/books/matric" className="bg-gray-700 text-white rounded-lg p-5 text-center hover:bg-gray-800 transition">
            <div className="text-2xl mb-2">📚</div>
            <h3 className="font-bold">Other Subjects</h3>
            <p className="text-xs text-gray-300 mt-1">Back to Matric books</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { slug: "physics" }, { slug: "chemistry" }, { slug: "biology" },
    { slug: "mathematics" }, { slug: "english" }, { slug: "urdu" },
    { slug: "islamiyat" }, { slug: "pakistan-studies" }, { slug: "computer-science" },
  ];
}
