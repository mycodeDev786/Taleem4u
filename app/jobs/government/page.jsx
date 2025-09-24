import Link from "next/link";

export const metadata = {
  title: "Government Jobs | Taleem4u",
  description:
    "Find the latest government jobs in Pakistan, including FPSC, PPSC, NTS, and other departments.",
  alternates: {
    canonical: "https://teleem4u.com/jobs/government",
  },
};

export default function GovernmentJobs() {
  const categories = [
    { name: "FPSC (Federal Public Service Commission)", slug: "fpsc" },
    { name: "PPSC (Punjab Public Service Commission)", slug: "ppsc" },
    { name: "SPSC (Sindh Public Service Commission)", slug: "spsc" },
    { name: "BPSC (Balochistan Public Service Commission)", slug: "bpsc" },
    {
      name: "KPPSC (Khyber Pakhtunkhwa Public Service Commission)",
      slug: "kppsc",
    },
    { name: "NTS Jobs", slug: "nts" },
    { name: "OTS Jobs", slug: "ots" },
    { name: "PTS Jobs", slug: "pts" },
    { name: "WAPDA Jobs", slug: "wapda" },
    { name: "Railway Jobs", slug: "railway" },
    { name: "Police Jobs", slug: "police" },
    { name: "Education Department Jobs", slug: "education" },
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
        &gt; <span className="font-semibold">Government Jobs</span>
      </nav>

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6">
        Latest Government Jobs in Pakistan
      </h1>
      <p className="text-gray-600 mb-8">
        Explore the latest government job opportunities including FPSC, PPSC,
        NTS, and more. Stay updated with current vacancies and announcements.
      </p>

      {/* Categories Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/jobs/government/${cat.slug}`}
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
