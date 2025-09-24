import Link from "next/link";

export const metadata = {
  title: "Internships in Pakistan | Taleem4u",
  description:
    "Find the latest internship opportunities in Pakistan for students and fresh graduates in IT, engineering, banking, and more.",
  alternates: {
    canonical: "https://taleem4u.com/jobs/internships",
  },
};

export default function Internships() {
  const categories = [
    { name: "IT & Software Internships", slug: "it-software" },
    { name: "Engineering Internships", slug: "engineering" },
    { name: "Banking & Finance Internships", slug: "banking" },
    { name: "Marketing & Sales Internships", slug: "marketing" },
    { name: "Healthcare Internships", slug: "healthcare" },
    { name: "NGO & Social Work Internships", slug: "ngo" },
    { name: "Government Internships", slug: "government" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6 text-gray-600">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/jobs" className="hover:underline">
          Jobs
        </Link>{" "}
        &gt; <span className="font-semibold">Internships</span>
      </nav>

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6">Internships in Pakistan</h1>
      <p className="text-gray-600 mb-8">
        Explore internships for students and fresh graduates across IT, banking,
        engineering, healthcare, and other industries.
      </p>

      {/* Categories */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/jobs/internships/${cat.slug}`}
            className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold">{cat.name}</h2>
            <p className="text-sm text-gray-500 mt-2">View internships</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
