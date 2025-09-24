import Link from "next/link";

export const metadata = {
  title: "Inter Past Papers | Taleem4u",
  description:
    "Download Intermediate (FA, FSc, ICS, ICom) past papers for all subjects.",
  alternates: {
    canonical: "https://yourdomain.com/past-papers/inter",
  },
};

export default function InterPastPapers() {
  const subjects = [
    { name: "Physics", slug: "physics" },
    { name: "Chemistry", slug: "chemistry" },
    { name: "Mathematics", slug: "mathematics" },
    { name: "Biology", slug: "biology" },
    { name: "Computer Science", slug: "computer-science" },
    { name: "English", slug: "english" },
    { name: "Economics", slug: "economics" },
    { name: "Accounting", slug: "accounting" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6 text-gray-600">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/past-papers" className="hover:underline">
          Past Papers
        </Link>{" "}
        &gt; <span className="font-semibold">Inter</span>
      </nav>

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6">Intermediate Past Papers</h1>
      <p className="text-gray-600 mb-8">
        Browse and download past papers for Intermediate (FA, FSc, ICS, ICom).
      </p>

      {/* Subject Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {subjects.map((subject) => (
          <Link
            key={subject.slug}
            href={`/past-papers/inter/${subject.slug}`}
            className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{subject.name}</h2>
            <p className="text-sm text-gray-500 mt-2">View past papers</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
