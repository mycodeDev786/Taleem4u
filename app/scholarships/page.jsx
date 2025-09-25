// app/scholarships/page.jsx
export const metadata = {
  title: "Scholarships - Taleem4u | Education & Career Portal",
  description:
    "Find local and international scholarships for Pakistani students. Apply online for undergraduate, postgraduate, and research scholarships.",
  alternates: {
    canonical: "https://www.taleem4u.com/scholarships",
  },
};

export default function ScholarshipsPage() {
  const scholarships = [
    {
      title: "HEC Overseas Scholarship 2025",
      desc: "Fully funded scholarships for Pakistani students to study abroad in top-ranked universities.",
      image: "https://via.placeholder.com/400x250?text=HEC+Scholarship",
      link: "#",
      deadline: "15 Oct 2025",
    },
    {
      title: "Punjab Education Endowment Fund (PEEF)",
      desc: "Financial aid for deserving students in Punjab for higher studies.",
      image: "https://via.placeholder.com/400x250?text=PEEF",
      link: "#",
      deadline: "30 Sept 2025",
    },
    {
      title: "Fulbright Scholarship USA",
      desc: "Prestigious scholarship for Master's and PhD programs in the United States.",
      image: "https://via.placeholder.com/400x250?text=Fulbright",
      link: "#",
      deadline: "20 Dec 2025",
    },
    {
      title: "Commonwealth Scholarship UK",
      desc: "Fully funded Master's and PhD scholarships in the United Kingdom.",
      image: "https://via.placeholder.com/400x250?text=Commonwealth",
      link: "#",
      deadline: "5 Nov 2025",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Scholarships
          </h1>
          <p className="text-lg text-gray-600">
            Explore the latest scholarships available for Pakistani students and
            apply online to secure your future.
          </p>
        </header>

        {/* Scholarships Grid */}
        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {scholarships.map((sch, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col"
            >
              <div className="relative">
                <img
                  src={sch.image}
                  alt={sch.title}
                  className="w-full h-48 object-cover"
                />
                {/* Deadline Badge */}
                <span className="absolute top-3 right-3 bg-red-600 text-white text-sm font-medium px-3 py-1 rounded-full shadow">
                  Apply before {sch.deadline}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {sch.title}
                </h2>
                <p className="text-gray-600 mb-6 flex-1">{sch.desc}</p>
                <a
                  href={sch.link}
                  className="w-full text-center px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium mt-auto"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
