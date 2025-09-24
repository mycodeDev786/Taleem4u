import Link from "next/link";

export const metadata = {
  title: "Jobs Abroad for Pakistanis | Taleem4u",
  description:
    "Find overseas job opportunities for Pakistanis in Gulf countries, Europe, USA, Canada, and more.",
  alternates: {
    canonical: "https://taleem4u.com/jobs/abroad",
  },
};

export default function JobsAbroad() {
  const categories = [
    {
      name: "Gulf Countries (UAE, Saudi, Qatar, Oman, Kuwait, Bahrain)",
      slug: "gulf",
    },
    { name: "Europe (UK, Germany, Italy, etc.)", slug: "europe" },
    { name: "North America (USA, Canada)", slug: "north-america" },
    { name: "Australia & New Zealand", slug: "australia" },
    { name: "Asia (Malaysia, China, Japan, etc.)", slug: "asia" },
    { name: "Skilled Labor Jobs Abroad", slug: "skilled-labor" },
    { name: "Professional Jobs Abroad", slug: "professional" },
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
        &gt; <span className="font-semibold">Jobs Abroad</span>
      </nav>

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6">Jobs Abroad for Pakistanis</h1>
      <p className="text-gray-600 mb-8">
        Discover the latest overseas job opportunities for Pakistanis in the
        Gulf, Europe, North America, and more.
      </p>

      {/* Categories */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/jobs/abroad/${cat.slug}`}
            className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold">{cat.name}</h2>
            <p className="text-sm text-gray-500 mt-2">View jobs abroad</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
