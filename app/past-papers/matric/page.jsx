import Link from "next/link";

export const metadata = {
  title: "Matric Past Papers | Taleem4u",
  description:
    "Download Matric past papers for all subjects to prepare for exams in Pakistan.",
  alternates: {
    canonical: "https://yourdomain.com/past-papers/matric",
  },
};

export default function MatricPastPapers() {
  const subjects = [
    { name: "Physics", slug: "physics" },
    { name: "Chemistry", slug: "chemistry" },
    { name: "Mathematics", slug: "mathematics" },
    { name: "English", slug: "english" },
    { name: "Biology", slug: "biology" },
    { name: "Urdu", slug: "urdu" },
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
        &gt; <span className="font-semibold">Matric</span>
      </nav>

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6">Matric Past Papers</h1>
      <p className="text-gray-600 mb-8">
        Browse and download Matric past papers for all major subjects.
      </p>

      {/* Subject Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {subjects.map((subject) => (
          <Link
            key={subject.slug}
            href={`/past-papers/matric/${subject.slug}`}
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
