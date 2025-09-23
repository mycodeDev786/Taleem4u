// components/LatestSection.jsx
import { Briefcase, BookOpen, GraduationCap } from "lucide-react";

const items = [
  {
    title: "Latest Jobs",
    description: "Explore fresh job opportunities updated daily.",
    icon: <Briefcase className="w-10 h-10 text-indigo-600" />,
    link: "/jobs",
  },
  {
    title: "Admissions",
    description: "Find admission details for top Pakistani universities.",
    icon: <GraduationCap className="w-10 h-10 text-green-600" />,
    link: "/admissions",
  },
  {
    title: "Courses",
    description: "Browse study materials and online learning resources.",
    icon: <BookOpen className="w-10 h-10 text-blue-600" />,
    link: "/courses",
  },
];

export default function LatestSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Explore Opportunities
        </h2>
        <p className="mt-2 text-lg text-gray-600 text-center">
          Stay updated with the latest jobs, admissions, and courses.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 flex flex-col items-center text-center"
            >
              {item.icon}
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
