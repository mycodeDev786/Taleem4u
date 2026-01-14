import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const part1Books = [
  {
    title: "Physics Part 1",
    img: assets.eleventh.elev_phy,
    slug: "physics-part-1",
  },
  {
    title: "Chemistry Part 1",
    img: assets.eleventh.elev_chem,
    slug: "chemistry-part-1",
  },
  {
    title: "Biology Part 1",
    img: assets.eleventh.elev_bio,
    slug: "biology-part-1",
  },
  { title: "Math Part 1", img: assets.eleventh.elev_math, slug: "math-part-1" },
  {
    title: "English Part 1",
    img: assets.eleventh.elev_eng,
    slug: "english-part-1",
  },
];

const part2Books = [
  {
    title: "Physics Part 2",
    img: assets.twelve.twelve_phy,
    slug: "physics-part-2",
  },
  {
    title: "Chemistry Part 2",
    img: assets.twelve.twelve_chem,
    slug: "chemistry-part-2",
  },
  {
    title: "Biology Part 2",
    img: assets.twelve.twelve_bio,
    slug: "biology-part-2",
  },
  { title: "Math Part 2", img: assets.twelve.twelve_math, slug: "math-part-2" },
  {
    title: "English Part 2",
    img: assets.twelve.twelve_eng,
    slug: "english-part-2",
  },
];

export const metadata = {
  title: "Intermediate Books (FSc Part 1 & 2) - Taleem4u",
  description:
    "Download free Intermediate (FSc) Part 1 and Part 2 books including Physics, Chemistry, Biology, Mathematics, and English in PDF format.",
  alternates: {
    canonical: "https://www.taleem4u.com/books/inter",
  },
  openGraph: {
    title: "Intermediate Books (FSc Part 1 & 2) - Taleem4u",
    description:
      "Get all Intermediate FSc Part 1 & 2 books including Physics, Chemistry, Biology, Math, and English in PDF format.",
    url: "https://www.taleem4u.com/books/inter",
    images: [
      {
        url: "/books/intermediate.jpg",
        width: 800,
        height: 600,
        alt: "Intermediate Books",
      },
    ],
  },
};

export default function InterBooks() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-indigo-700">
        Intermediate Books (FSc Part 1 & 2)
      </h1>

      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-gray-600 leading-relaxed">
          Download free <strong>FSc Part 1 & Part 2 books</strong> in PDF
          format. Includes{" "}
          <em>Physics, Chemistry, Biology, Mathematics, and English</em>{" "}
          textbooks recommended by boards across Pakistan. Ideal for students,
          teachers, and exam preparation.
        </p>
      </div>

      {/* FSc Part 1 */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-indigo-700">
          FSc Part 1 (11th Class)
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {part1Books.map((book, i) => (
            <Link
              key={i}
              href={`/books/inter/${book.slug}`}
              className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center text-center hover:shadow-lg hover:scale-105 transition cursor-pointer"
            >
              <Image
                src={book.img}
                alt={book.title}
                width={150}
                height={200}
                className="rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {book.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* FSc Part 2 */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-indigo-700">
          FSc Part 2 (12th Class)
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {part2Books.map((book, i) => (
            <Link
              key={i}
              href={`/books/inter/${book.slug}`}
              className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center text-center hover:shadow-lg hover:scale-105 transition cursor-pointer"
            >
              <Image
                src={book.img}
                alt={book.title}
                width={150}
                height={200}
                className="rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {book.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
