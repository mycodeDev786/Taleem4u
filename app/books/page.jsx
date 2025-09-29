import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Books & Notes - Taleem4u",
  description:
    "Find study materials, books, and notes for Matric, Intermediate, Primary & Elementary, and CSS preparation.",
  alternates: {
    canonical: "https://www.taleem4u.com/books",
  },
};

const booksCategories = [
  {
    title: "Matric Books",
    description: "All subjects books and notes for 9th & 10th classes.",
    link: "/books/matric",
    image: assets.matric_books,
  },
  {
    title: "Intermediate Books",
    description: "Books & notes for FSc, FA, ICS, and ICom students.",
    link: "/books/intermediate",
    image: assets.ninth_phy,
  },
  {
    title: "Primary & Elementary",
    description: "ECE, KG, Nursery to 8th class books & resources.",
    link: "/books/primary-elementary",
    image: assets.hero,
  },
  {
    title: "Notes",
    description: "Prepared notes for quick revision and exam preparation.",
    link: "/books/notes",
    image: assets.ninth_phy,
  },
  {
    title: "CSS Books",
    description: "CSS exam preparation books, past papers, and guides.",
    link: "/books/css",
    image: assets.logo,
  },
];

export default function BooksPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-16 px-6">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">
          Books & Notes
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {booksCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
            >
              <Image
                src={category.image}
                alt={category.title}
                width={400}
                height={250}
                className="h-40 w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {category.title}
                </h2>
                <p className="text-gray-600 mt-2 flex-grow">
                  {category.description}
                </p>
                <Link
                  href={category.link}
                  className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg text-center font-medium hover:bg-blue-700 transition"
                >
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
