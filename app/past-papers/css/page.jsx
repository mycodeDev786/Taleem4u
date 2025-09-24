import Link from "next/link";

export const metadata = {
  title: "CSS Past Papers | Taleem4u",
  description:
    "Download CSS past papers for all compulsory and optional subjects to prepare for competitive exams.",
  alternates: {
    canonical: "https://yourdomain.com/past-papers/css",
  },
};

export default function CSSPastPapers() {
  const subjects = [
    { name: "English Essay", slug: "english-essay" },
    { name: "English Precis & Composition", slug: "english-precis" },
    { name: "General Science & Ability", slug: "general-science" },
    { name: "Current Affairs", slug: "current-affairs" },
    { name: "Pakistan Affairs", slug: "pakistan-affairs" },
    { name: "Islamic Studies", slug: "islamic-studies" },
    { name: "Optional Subjects", slug: "optional-subjects" },
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
        &gt; <span className="font-semibold">CSS</span>
      </nav>

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6">CSS Past Papers</h1>
      <p className="text-gray-600 mb-8">
        Access past papers for all CSS compulsory and optional subjects.
      </p>

      {/* Subject Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {subjects.map((subject) => (
          <Link
            key={subject.slug}
            href={`/past-papers/css/${subject.slug}`}
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
