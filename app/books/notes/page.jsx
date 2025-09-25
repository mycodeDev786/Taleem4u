// app/books/notes/page.jsx
import Link from "next/link";
import {
  BookOpen,
  FileText,
  ClipboardList,
  GraduationCap,
  PenTool,
  Users,
} from "lucide-react";

// ✅ SEO Metadata
export const metadata = {
  title: "Study Notes & Teacher Guides - Taleem4u",
  description:
    "Download free study notes and teacher guides for Matric, Intermediate, CSS/PMS, MDCAT, PPSC and more. High-quality handwritten and PDF notes available.",
};

export default function NotesPage() {
  const categories = [
    {
      title: "Matric Notes",
      description: "Class 9th & 10th notes for all subjects in PDF format.",
      link: "/books/matric",
      icon: <BookOpen className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Intermediate Notes",
      description:
        "FSc & FA, ICS , I.COM  notes for 11th & 12th grade students.",
      link: "/books/inter",
      icon: <GraduationCap className="w-8 h-8 text-green-500" />,
    },
    {
      title: "CSS & PMS Notes",
      description: "Comprehensive notes for CSS and PMS preparation.",
      link: "/books/css-pms",
      icon: <ClipboardList className="w-8 h-8 text-purple-500" />,
    },
    {
      title: "MDCAT Notes",
      description: "Physics, Chemistry, Biology & English notes for MDCAT.",
      link: "/prep/mdcat",
      icon: <FileText className="w-8 h-8 text-red-500" />,
    },
    {
      title: "PPSC Notes",
      description: "Concise and updated notes for PPSC exam preparation.",
      link: "/prep/ppsc",
      icon: <PenTool className="w-8 h-8 text-indigo-500" />,
    },
    {
      title: "Teacher Guides",
      description: "Subject-wise teacher guides to assist in lesson planning.",
      link: "/books/teacher-guides",
      icon: <Users className="w-8 h-8 text-orange-500" />,
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-6 md:px-12">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Study Notes & Teacher Guides
        </h1>
        <p className="text-lg text-gray-600">
          Access free study notes and teacher guides for school, college, and
          competitive exams. Download handwritten and PDF materials to boost
          your preparation and teaching.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((item, index) => (
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
