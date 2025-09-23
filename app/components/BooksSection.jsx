// components/BooksSection.jsx
import { FileText, BookOpen, Download } from "lucide-react";

const resources = [
  {
    title: "PDF Books",
    description: "Access free PDF textbooks and reference materials.",
    icon: <BookOpen className="w-10 h-10 text-indigo-600" />,
    link: "/books",
  },
  {
    title: "Study Notes",
    description: "Download notes prepared by toppers and professors.",
    icon: <FileText className="w-10 h-10 text-green-600" />,
    link: "/notes",
  },
  {
    title: "Past Papers",
    description: "Prepare better with solved past papers and guides.",
    icon: <Download className="w-10 h-10 text-blue-600" />,
    link: "/papers",
  },
];

export default function BooksSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Books & Notes
        </h2>
        <p className="mt-2 text-lg text-gray-600 text-center">
          Explore free study materials, notes, and past papers to boost your
          preparation.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition p-8 flex flex-col items-center text-center"
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
