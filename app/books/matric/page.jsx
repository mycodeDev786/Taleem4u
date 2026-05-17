import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const ninthBooks = [
  { title: "Physics 9th", img: assets.ninth_phy, slug: "physics-9th", desc: "Waves, Motion, Physical Quantities, Work & Energy" },
  { title: "Chemistry 9th", img: assets.ninth_chem, slug: "chemistry-9th", desc: "Atomic Structure, Electrochemistry, Chemical Bonding" },
  { title: "Biology 9th", img: assets.ninth_bio, slug: "biology-9th", desc: "Cell Biology, Bioenergetics, Nutrition, Transport" },
  { title: "Math 9th", img: assets.ninth_math, slug: "math-9th", desc: "Matrices, Real Numbers, Algebra, Geometry" },
  { title: "English 9th", img: assets.ninth_eng, slug: "9th-english", desc: "Prose, Poetry, Grammar, Comprehension, Letter Writing" },
];

const tenthBooks = [
  { title: "Physics 10th", img: assets.tenth_phy, slug: "physics-10th", desc: "Simple Harmonic Motion, Optics, Electronics, Nuclear Physics" },
  { title: "Chemistry 10th", img: assets.tenth_chem, slug: "chemistry-10th", desc: "Acids & Bases, Organic Chemistry, Environmental Chemistry" },
  { title: "Biology 10th", img: assets.tenth_bio, slug: "biology-10th", desc: "Reproduction, Genetics, Evolution, Immunity, Coordination" },
  { title: "Math 10th", img: assets.tenth_math, slug: "math-10th", desc: "Quadratic Equations, Statistics, Trigonometry, Projection" },
  { title: "English 10th", img: assets.tenth_eng, slug: "english-10th", desc: "Advanced Prose, Poetry, Essays, Applications, Grammar" },
];

export const metadata = {
  title: "Matric Books (9th & 10th Class) Free PDF Download – PCTB | Taleem4u",
  description:
    "Download free PCTB Matric books for 9th and 10th class in PDF. Physics, Chemistry, Biology, Mathematics, and English textbooks for all major Pakistani boards. No signup required.",
  alternates: { canonical: "https://www.taleem4u.com/books/matric" },
  openGraph: {
    title: "Matric Books (9th & 10th Class) – Taleem4u",
    description: "Free PDF Matric textbooks for all subjects.",
    url: "https://www.taleem4u.com/books/matric",
  },
};

export default function MatricBooks() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <nav className="text-sm mb-6 text-gray-600">
        <Link href="/" className="hover:underline">Home</Link> &gt;{" "}
        <Link href="/books" className="hover:underline">Books</Link> &gt;{" "}
        <span className="font-semibold">Matric</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">Matric Books (9th & 10th Class)</h1>
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Download free <strong>Matric 9th and 10th class textbooks</strong> in PDF format. All books are published 
          by the <strong>Punjab Curriculum & Textbook Board (PCTB)</strong> and are used across all major Punjab boards 
          including Lahore, Gujranwala, Rawalpindi, Faisalabad, Multan, and Sargodha. Also compatible with Federal Board (FBISE) curriculum.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {["Free to Download", "Official PCTB Books", "PDF Format", "Updated 2024–25", "All Subjects Included"].map((tag) => (
            <span key={tag} className="bg-indigo-50 text-indigo-700 text-xs px-3 py-1 rounded-full font-medium">{tag}</span>
          ))}
        </div>
      </header>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-3 text-indigo-700">9th Class Books</h2>
        <p className="text-gray-600 text-sm mb-6">These textbooks cover the complete 9th class syllabus as prescribed by Punjab and Federal boards. Suitable for Science and Arts group students. Each book includes chapter summaries, practice exercises, and MCQs.</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {ninthBooks.map((book, i) => (
            <Link key={i} href={`/books/matric/${book.slug}`}
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
        <h2 className="text-2xl font-semibold mb-3 text-indigo-700">10th Class Books</h2>
        <p className="text-gray-600 text-sm mb-6">10th class textbooks form the second half of the Matric curriculum. These subjects are tested in the Secondary School Certificate (SSC-II) board examination. Understanding these books thoroughly is essential for strong board exam performance.</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {tenthBooks.map((book, i) => (
            <Link key={i} href={`/books/matric/${book.slug}`}
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
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Matric in Pakistan</h2>
        <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
          <p><strong>What is Matric?</strong> Matric (short for Matriculation) is Pakistan's Secondary School Certificate (SSC) level examination, covering Class 9 and Class 10. It is the first major public examination in a student's life and sets the foundation for all further academic and career paths.</p>
          <p><strong>Board Examination:</strong> Matric exams are conducted by provincial Board of Intermediate & Secondary Education (BISE). Students appear in the annual exam at the end of Class 10. Most boards offer annual (March–April) and supplementary (September) examinations.</p>
          <p><strong>Grading System:</strong> Matric results are expressed in percentage marks. A+ (90%+), A (80–89%), B (70–79%), C (60–69%), D (50–59%). The overall percentage significantly impacts future college and university admissions merit.</p>
          <p><strong>Science vs Arts Group:</strong> In Matric, students choose between Science (Physics, Chemistry, Biology or Computer Science) and Arts (Economics, Civics, History) groups. Science group students have broader options for Intermediate and beyond.</p>
        </div>
      </section>

      <section className="mb-8 bg-white rounded-2xl shadow p-7">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Study Tips for Matric Students</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { tip: "Start revision 3 months before exams", detail: "Create a subject-wise timetable and cover each chapter systematically. Do not leave any chapter untouched." },
            { tip: "Practice with past papers", detail: "Board questions often repeat. Solving 5 years of past papers is one of the most effective strategies for high scores." },
            { tip: "Focus on MCQs — they add up fast", detail: "In Science subjects, MCQ sections carry 20–25% of total marks. Practice MCQs daily using key books and past papers." },
            { tip: "Write neat, structured long answers", detail: "Examiners reward clarity and presentation. Use headings, underline key terms, and include diagrams where relevant." },
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
            { label: "Matric Past Papers", href: "/past-papers/matric" },
            { label: "Intermediate Books", href: "/books/inter" },
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
