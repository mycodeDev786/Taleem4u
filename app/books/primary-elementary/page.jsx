// app/books/primary-elementary/page.jsx
import Link from "next/link";

const primaryClasses = [
  { name: "ECE", href: "/books/primary-elementary/ece" },
  { name: "Nursery", href: "/books/primary-elementary/nursery" },
  { name: "KG", href: "/books/primary-elementary/kg" },
  { name: "Class 1", href: "/books/primary-elementary/class1" },
  { name: "Class 2", href: "/books/primary-elementary/class2" },
  { name: "Class 3", href: "/books/primary-elementary/class3" },
  { name: "Class 4", href: "/books/primary-elementary/class4" },
  { name: "Class 5", href: "/books/primary-elementary/class5" },
];

const elementaryClasses = [
  { name: "Class 6", href: "/books/primary-elementary/class6" },
  { name: "Class 7", href: "/books/primary-elementary/class7" },
  { name: "Class 8", href: "/books/primary-elementary/class8" },
];

export default function PrimaryElementary() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">
        Primary & Elementary Books
      </h1>

      {/* Primary Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-indigo-700">Primary</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {primaryClasses.map((cls, i) => (
            <Link
              key={i}
              href={cls.href}
              className="block bg-white shadow-md rounded-lg p-6 text-center font-medium text-gray-800 hover:shadow-lg hover:bg-indigo-50 transition"
            >
              {cls.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Elementary Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-indigo-700">
          Elementary
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {elementaryClasses.map((cls, i) => (
            <Link
              key={i}
              href={cls.href}
              className="block bg-white shadow-md rounded-lg p-6 text-center font-medium text-gray-800 hover:shadow-lg hover:bg-green-50 transition"
            >
              {cls.name}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
