// app/prep/ppsc/page.jsx
import Link from "next/link";
import {
  FileText,
  BookOpen,
  ClipboardList,
  PenTool,
  Briefcase,
} from "lucide-react";

// ✅ SEO metadata
export const metadata = {
  title: "PPSC Preparation - Taleem4u",
  description:
    "Prepare for PPSC exams with past papers, syllabus, recommended books, notes, and online practice tests.",
};

export default function PpscPage() {
  const resources = [
    {
      title: "Past Papers",
      description: "Access PPSC past papers to understand exam patterns.",
      link: "/past-papers/ppsc",
      icon: <FileText className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Syllabus",
      description: "Check the latest PPSC exam syllabus for all subjects.",
      link: "/syllabus/ppsc",
      icon: <Briefcase className="w-8 h-8 text-orange-500" />,
    },
    {
      title: "Books",
      description: "Download recommended PPSC books in PDF format.",
      link: "/books/ppsc",
      icon: <BookOpen className="w-8 h-8 text-green-500" />,
    },
    {
      title: "Notes",
      description: "Concise study notes for quick revision before exams.",
      link: "/notes/ppsc",
      icon: <ClipboardList className="w-8 h-8 text-purple-500" />,
    },
    {
      title: "Online Tests",
      description: "Practice PPSC mock tests and improve your preparation.",
      link: "/tests/ppsc",
      icon: <PenTool className="w-8 h-8 text-red-500" />,
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-16 px-6 md:px-12">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          PPSC Preparation
        </h1>
        <p className="text-lg text-gray-600">
          Get all resources for Punjab Public Service Commission (PPSC)
          preparation – past papers, syllabus, notes, and practice tests in one
          place.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {resources.map((item, index) => (
          <Link key={index} href={item.link}>
            <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer text-center">
              <div className="flex justify-center mb-5">{item.icon}</div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-indigo-600 transition">
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
