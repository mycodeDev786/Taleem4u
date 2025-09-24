// app/prep/mdcat/page.jsx
import Link from "next/link";
import { BookOpen, FileText, ClipboardList, PenTool } from "lucide-react"; // modern icons

// ✅ SEO metadata
export const metadata = {
  title: "MDCAT Preparation - Taleem4u",
  description:
    "Download MDCAT books, notes, past papers, and practice with online tests. Get everything you need to prepare for MDCAT exams.",
};

export default function MdcatPage() {
  const resources = [
    {
      title: "Past Papers",
      description: "Practice with MDCAT past papers to analyze exam trends.",
      link: "/past-papers/mdcat",
      icon: <FileText className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Books",
      description: "Download MDCAT recommended books.",
      link: "/books/mdcat",
      icon: <BookOpen className="w-8 h-8 text-green-500" />,
    },
    {
      title: "Notes",
      description: "Quick revision notes for all MDCAT subjects.",
      link: "/notes/mdcat",
      icon: <ClipboardList className="w-8 h-8 text-purple-500" />,
    },
    {
      title: "Online Tests",
      description: "Attempt MDCAT mock tests and check your preparation.",
      link: "/tests/mdcat",
      icon: <PenTool className="w-8 h-8 text-red-500" />,
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-6 md:px-12">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          MDCAT Preparation
        </h1>
        <p className="text-lg text-gray-600">
          Prepare smarter with books, notes, past papers, and online tests –
          everything you need for MDCAT success in one place.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {resources.map((item, index) => (
          <Link key={index} href={item.link}>
            <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer text-center">
              <div className="flex justify-center mb-5">{item.icon}</div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
