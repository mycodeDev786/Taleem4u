import Link from "next/link";

export const metadata = {
  title: "Private Jobs | Taleem4u",
  description:
    "Find the latest private jobs in Pakistan, including IT, banking, telecom, education, and multinational companies.",
  alternates: {
    canonical: "https://taleem4u.com/jobs/private",
  },
};

export default function PrivateJobs() {
  const categories = [
    { name: "IT & Software", slug: "it-software" },
    { name: "Banking & Finance", slug: "banking" },
    { name: "Telecom Companies", slug: "telecom" },
    { name: "Education (Schools, Colleges, Universities)", slug: "education" },
    { name: "Healthcare & Hospitals", slug: "healthcare" },
    { name: "Engineering & Construction", slug: "engineering" },
    { name: "Marketing & Sales", slug: "marketing-sales" },
    { name: "Call Centers & BPO", slug: "call-centers" },
    { name: "E-commerce & Online Businesses", slug: "ecommerce" },
    { name: "Textile & Manufacturing", slug: "textile" },
    { name: "Logistics & Transport", slug: "logistics" },
    { name: "Multinational Companies (MNCs)", slug: "mncs" },
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
        &gt; <span className="font-semibold">Private Jobs</span>
      </nav>

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6">
        Latest Private Jobs in Pakistan
      </h1>
      <p className="text-gray-600 mb-8">
        Browse the latest private-sector job opportunities in Pakistan across
        industries like IT, banking, telecom, healthcare, education, and
        multinational companies.
      </p>

      {/* Categories Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/jobs/private/${cat.slug}`}
            className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold">{cat.name}</h2>
            <p className="text-sm text-gray-500 mt-2">View available jobs</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
