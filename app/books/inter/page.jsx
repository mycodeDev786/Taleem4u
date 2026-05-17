import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const part1Books = [
  { title: "Physics Part 1", img: assets.eleventh.elev_phy, slug: "physics-part-1", desc: "Measurements, Vectors, Motion, Fluid Mechanics, Oscillations, Waves, Heat" },
  { title: "Chemistry Part 1", img: assets.eleventh.elev_chem, slug: "chemistry-part-1", desc: "Atomic Structure, Periodic Table, Chemical Bonding, Solutions, Energetics" },
  { title: "Biology Part 1", img: assets.eleventh.elev_bio, slug: "biology-part-1", desc: "Cell Biology, Biomolecules, Enzymes, Bioenergetics, Nutrition, Gaseous Exchange" },
  { title: "Math Part 1", img: assets.eleventh.elev_math, slug: "math-part-1", desc: "Sets, Functions, Sequences, Permutations, Binomial Theorem, Trigonometry" },
  { title: "English Part 1", img: assets.eleventh.elev_eng, slug: "english-part-1", desc: "Prose, Poetry, Grammar, Comprehension, Essay and Letter Writing" },
];

const part2Books = [
  { title: "Physics Part 2", img: assets.twelve.twelve_phy, slug: "physics-part-2", desc: "Electrostatics, Magnetism, Electromagnetic Induction, Modern Physics, Nuclear Physics" },
  { title: "Chemistry Part 2", img: assets.twelve.twelve_chem, slug: "chemistry-part-2", desc: "Reaction Kinetics, Equilibrium, Organic Chemistry, Hydrocarbons, Environmental Chemistry" },
  { title: "Biology Part 2", img: assets.twelve.twelve_bio, slug: "biology-part-2", desc: "Reproduction, Genetics, Evolution, Immunity, Coordination, Animal Behaviour" },
  { title: "Math Part 2", img: assets.twelve.twelve_math, slug: "math-part-2", desc: "Functions, Limits, Differentiation, Integration, Differential Equations, Vectors" },
  { title: "English Part 2", img: assets.twelve.twelve_eng, slug: "english-part-2", desc: "Advanced Literature, Précis Writing, Story Writing, Advanced Grammar" },
];

export const metadata = {
  title: "Intermediate Books FSc Part 1 & 2 Free PDF – PCTB | Taleem4u",
  description:
    "Download free Intermediate (FSc) Part 1 and Part 2 textbooks in PDF. Physics, Chemistry, Biology, Mathematics, and English for all Pakistani boards. No registration needed.",
  alternates: { canonical: "https://www.taleem4u.com/books/inter" },
};

export default function InterBooks() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <nav className="text-sm mb-6 text-gray-600">
        <Link href="/" className="hover:underline">Home</Link> &gt;{" "}
        <Link href="/books" className="hover:underline">Books</Link> &gt;{" "}
        <span className="font-semibold">Intermediate</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">Intermediate Books (FSc Part 1 & 2)</h1>
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Download free <strong>FSc Part 1 (11th class) and Part 2 (12th class) textbooks</strong> in PDF format. 
          Published by the <strong>Punjab Curriculum & Textbook Board (PCTB)</strong> and fully aligned with all 
          Punjab and Federal Board examination syllabi. Ideal for Pre-Medical, Pre-Engineering, and general science students.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {["Free PDF", "Pre-Medical", "Pre-Engineering", "ICS", "PCTB Approved", "Updated 2024–25"].map((tag) => (
            <span key={tag} className="bg-indigo-50 text-indigo-700 text-xs px-3 py-1 rounded-full font-medium">{tag}</span>
          ))}
        </div>
      </header>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-3 text-indigo-700">FSc Part 1 – 11th Class Books</h2>
        <p className="text-gray-600 text-sm mb-6">
          FSc Part 1 textbooks cover the foundational concepts of each science subject that are expanded and deepened in Part 2. 
          These books are tested in the Higher Secondary School Certificate Part I (HSSC-I) annual board examination.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {part1Books.map((book, i) => (
            <Link key={i} href={`/books/inter/${book.slug}`}
              className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center text-center hover:shadow-lg hover:scale-105 transition cursor-pointer">
              <Image src={book.img} alt={book.title} width={130} height={180} className="rounded-lg mb-3" />
              <h3 className="text-base font-semibold text-gray-800 mb-1">{book.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{book.desc}</p>
              <span className="mt-3 bg-indigo-600 text-white text-xs px-3 py-1.5 rounded-full font-medium">Download PDF</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-3 text-indigo-700">FSc Part 2 – 12th Class Books</h2>
        <p className="text-gray-600 text-sm mb-6">
          FSc Part 2 textbooks cover the advanced topics that are directly tested in the HSSC-II board examination. 
          This is also the primary material for entry tests such as MDCAT (for Pre-Medical students) and ECAT (for Pre-Engineering students).
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {part2Books.map((book, i) => (
            <Link key={i} href={`/books/inter/${book.slug}`}
              className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center text-center hover:shadow-lg hover:scale-105 transition cursor-pointer">
              <Image src={book.img} alt={book.title} width={130} height={180} className="rounded-lg mb-3" />
              <h3 className="text-base font-semibold text-gray-800 mb-1">{book.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{book.desc}</p>
              <span className="mt-3 bg-indigo-600 text-white text-xs px-3 py-1.5 rounded-full font-medium">Download PDF</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12 bg-indigo-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">About FSc Intermediate in Pakistan</h2>
        <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
          <p><strong>What is Intermediate?</strong> Intermediate (also called HSC – Higher Secondary Certificate) is a two-year programme covering Class 11 (Part 1) and Class 12 (Part 2). It bridges Matric and university education and determines admission to undergraduate programs across Pakistan.</p>
          <p><strong>FSc Pre-Medical Group:</strong> Students take Biology, Chemistry, Physics, and Urdu/English. This group is compulsory for MBBS/BDS applicants and is tested through MDCAT. A minimum of 70% marks in FSc and 65% in MDCAT is required for medical college admission.</p>
          <p><strong>FSc Pre-Engineering Group:</strong> Students take Mathematics, Chemistry, Physics, and Urdu/English. This is required for engineering university admission and is tested through ECAT (for UET) or NET (for NUST). High marks in Math and Physics are essential.</p>
          <p><strong>Grading and Marks:</strong> The FSc annual board exam carries 1100 marks total (Part 1 + Part 2 combined for final degree). Subjects are marked out of 75 (theory) + 15 (practical) for science subjects. The aggregate of Matric and Intermediate marks determines university admission merit.</p>
        </div>
      </section>

      <section className="mb-8 bg-white rounded-2xl shadow p-7">
        <h2 className="text-xl font-bold text-gray-800 mb-4">FSc Exam Preparation Tips</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { tip: "Master your textbook before anything else", detail: "90% of FSc board exam questions come directly from the textbook. Understand and memorise key definitions, diagrams, and derivations." },
            { tip: "Practice numerical problems daily", detail: "Physics and Chemistry numericals need daily practice. Work through all in-chapter examples and end-of-chapter exercises repeatedly." },
            { tip: "Use past papers to predict high-yield topics", detail: "FSc board questions often repeat across years. Create a list of frequently tested topics in each subject and prioritise those during revision." },
            { tip: "Do not skip practicals", detail: "Practical marks are part of your final grade. Prepare properly for practical exams — know your experiments, calculations, and relevant theory." },
          ].map((item, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-indigo-500 font-bold text-lg mt-0.5">✓</span>
              <div>
                <p className="font-semibold text-gray-800 text-sm">{item.tip}</p>
                <p className="text-gray-500 text-xs mt-0.5">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-800 mb-4">Related Resources</h2>
        <div className="flex flex-wrap gap-3">
          {[
            { label: "Inter Past Papers", href: "/past-papers/inter" },
            { label: "Matric Books", href: "/books/matric" },
            { label: "MDCAT Prep", href: "/prep/mdcat" },
            { label: "Admissions", href: "/admissions" },
            { label: "Scholarships", href: "/scholarships" },
          ].map(l => (
            <Link key={l.href} href={l.href} className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-100 transition">{l.label}</Link>
          ))}
        </div>
      </section>
    </div>
  );
}
