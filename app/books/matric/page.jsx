import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const ninthBooks = [
  { title: "Physics 9th", img: assets.ninth_phy, slug: "physics-9th" },
  {
    title: "Chemistry 9th",
    img: assets.ninth_chem,
    slug: "chemistry-9th",
  },
  { title: "Biology 9th", img: assets.ninth_bio, slug: "biology-9th" },
  { title: "Math 9th", img: assets.ninth_math, slug: "math-9th" },
  { title: "9th English ", img: assets.ninth_eng, slug: "9th-english" },
];

const tenthBooks = [
  { title: "Physics 10th", img: "/books/physics10.jpg", slug: "physics-10th" },
  {
    title: "Chemistry 10th",
    img: "/books/chemistry10.jpg",
    slug: "chemistry-10th",
  },
  { title: "Biology 10th", img: "/books/biology10.jpg", slug: "biology-10th" },
  { title: "Math 10th", img: "/books/math10.jpg", slug: "math-10th" },
];

export const metadata = {
  title: "Matric Books (9th & 10th Class) - Taleem4u",
  description:
    "Download free Matric books for 9th and 10th classes including Physics, Chemistry, Biology, and Mathematics in PDF format.",
  alternates: {
    canonical: "https://www.taleem4u.com/books/matric",
  },
  openGraph: {
    title: "Matric Books (9th & 10th Class) - Taleem4u",
    description:
      "Get all Matric books for 9th & 10th classes including Physics, Chemistry, Biology, and Math in PDF format.",
    url: "https://www.taleem4u.com/books/matric",
    images: [
      {
        url: "/books/physics9.jpg", // any default book cover
        width: 800,
        height: 600,
        alt: "Matric Books",
      },
    ],
  },
};

export default function MatricBooks() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-indigo-700">
        Matric Books (9th & 10th Class)
      </h1>

      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-gray-600 leading-relaxed">
          Download free <strong>Matric 9th & 10th class books</strong> in PDF
          format. Includes <em>Physics, Chemistry, Biology, and Mathematics</em>{" "}
          textbooks recommended by boards across Pakistan. Perfect for students,
          teachers, and exam preparation.
        </p>
      </div>

      {/* 9th Class Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-indigo-700">
          9th Class Books
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ninthBooks.map((book, i) => (
            <Link
              key={i}
              href={`/books/matric/${book.slug}`}
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

      {/* 10th Class Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-indigo-700">
          10th Class Books
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {tenthBooks.map((book, i) => (
            <Link
              key={i}
              href={`/books/matric/${book.slug}`}
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
