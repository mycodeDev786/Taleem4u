import AdmissionsCarousel from "./AdmissionsCarousel";

export const metadata = {
  title: "Admissions - Taleem4u | Education & Career Portal",
  description:
    "Find the latest admission updates for schools, colleges, and universities in Pakistan. Stay informed with Taleem4u's admissions section.",
  alternates: {
    canonical: "https://www.taleem4u.com/admissions",
  },
};

export default function AdmissionsPage() {
  const admissions = [
    {
      title: "University of Punjab Admissions 2025",
      date: "Last date: 15 Oct 2025",
      link: "#",
    },
    {
      title: "NUST Admissions 2025",
      date: "Entry test registration open",
      link: "#",
    },
    {
      title: "GCU Lahore Admissions 2025",
      date: "Apply before 30 Sept 2025",
      link: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 pt-24">
      {/* Carousel */}
      <AdmissionsCarousel items={admissions} />

      {/* Admission Cards */}
      <div className="max-w-6xl mx-auto py-12 px-6">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Admissions Updates
          </h1>
          <p className="text-lg text-gray-600">
            Stay up-to-date with the latest admission announcements from
            schools, colleges, and universities across Pakistan.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {admissions.map((item, idx) => (
            <article
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600 mb-4">{item.date}</p>
              <a
                href={item.link}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View Details →
              </a>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
