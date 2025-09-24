import Link from "next/link";

export const metadata = {
  title: "Jobs in Pakistan | Taleem4u",
  description:
    "Find the latest government jobs, private jobs, internships, and jobs abroad for Pakistani students and professionals.",
  alternates: {
    canonical: "https://yourdomain.com/jobs",
  },
};

export default function JobsHub() {
  const categories = [
    {
      name: "Government Jobs",
      slug: "government",
      description: "FPSC, PPSC, NTS, WAPDA, Railway, Police and more.",
    },
    {
      name: "Private Jobs",
      slug: "private",
      description: "IT, Banking, Telecom, Healthcare, Education, and more.",
    },
    {
      name: "Internships",
      slug: "internships",
      description:
        "Explore internship opportunities for students & fresh grads.",
    },
    {
      name: "Jobs Abroad",
      slug: "abroad",
      description:
        "Find overseas job opportunities for Pakistani professionals.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6 text-gray-600">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt; <span className="font-semibold">Jobs</span>
      </nav>

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6">Jobs Portal</h1>
      <p className="text-gray-600 mb-8">
        Browse the latest job opportunities including government jobs, private
        sector jobs, internships, and jobs abroad for Pakistani students and
        professionals.
      </p>

      {/* Categories Grid */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/jobs/${cat.slug}`}
            className="p-8 bg-gradient-to-r from-teal-500 to-green-500 text-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform"
          >
            <h2 className="text-2xl font-bold">{cat.name}</h2>
            <p className="text-sm mt-3">{cat.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
