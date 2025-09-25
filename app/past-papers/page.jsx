// app/past-papers/page.jsx
export const metadata = {
  title: "Past Papers - Taleem4u | Education & Career Portal",
  description:
    "Download and practice past papers for Matric, Intermediate, PPSC, FPSC, NTS, and other exams. Prepare better with Taleem4u.",
  alternates: {
    canonical: "https://www.taleem4u.com/past-papers",
  },
};

export default function PastPapersPage() {
  const categories = [
    { name: "Matric", link: "/past-papers/matric" },
    { name: "Intermediate", link: "/past-papers/intermediate" },
    { name: "PPSC", link: "/past-papers/ppsc" },
    { name: "FPSC", link: "/past-papers/fpsc" },
    { name: "NTS", link: "/past-papers/nts" },
    { name: "Others", link: "/past-papers/others" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Past Papers</h1>
          <p className="text-lg text-gray-600">
            Prepare effectively with past papers from schools, colleges, and
            competitive exams in Pakistan.
          </p>
        </header>

        {/* Cards Section */}
        <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((cat, idx) => (
            <a
              key={idx}
              href={cat.link}
              className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-center text-xl font-semibold text-gray-800 hover:bg-blue-600 hover:text-white transition"
            >
              {cat.name}
            </a>
          ))}
        </section>
      </div>
    </main>
  );
}
