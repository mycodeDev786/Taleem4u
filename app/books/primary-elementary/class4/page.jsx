import Image from "next/image";

/* =========================
   SEO METADATA (App Router)
========================= */
export const metadata = {
  title: "Class 4 Books PDF | Punjab Textbook Board | Free Download",
  description:
    "Download Class 4 books PDF according to Punjab Textbook Board syllabus. Free English, Math, Urdu, Islamiyat, Science and Social Studies books.",
  keywords: [
    "Class 4 books pdf",
    "Punjab textbook board class 4",
    "Class 4 English book pdf",
    "Class 4 math book pdf",
    "Class 4 Urdu book pdf",
    "Class 4 Islamiyat book pdf",
    "Class 4 science book pdf",
    "Class 4 social studies pdf",
  ],
  alternates: {
    canonical: "/books/primary-elementary/class-4",
  },
};

const books = [
  {
    title: "English Class 4",
    img: "/books/class-4-english.jpg",
    link: "/downloads/class-4-english.pdf",
  },
  {
    title: "Mathematics Class 4",
    img: "/books/class-4-math.jpg",
    link: "/downloads/class-4-math.pdf",
  },
  {
    title: "Urdu Class 4",
    img: "/books/class-4-urdu.jpg",
    link: "/downloads/class-4-urdu.pdf",
  },
  {
    title: "Islamiyat Class 4",
    img: "/books/class-4-islamiyat.jpg",
    link: "/downloads/class-4-islamiyat.pdf",
  },
  {
    title: "General Science Class 4",
    img: "/books/class-4-science.jpg",
    link: "/downloads/class-4-science.pdf",
  },
  {
    title: "Social Studies Class 4",
    img: "/books/class-4-social.jpg",
    link: "/downloads/class-4-social.pdf",
  },
];

export default function Class4BooksPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-4">
        Class 4 Books PDF – Punjab Textbook Board
      </h1>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Download Class 4 books in PDF format according to the Punjab Textbook
        Board syllabus. These books help students improve conceptual learning.
      </p>

      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book, index) => (
          <article
            key={index}
            className="bg-white shadow-md rounded-xl p-4 text-center hover:shadow-lg transition"
          >
            <Image
              src={book.img}
              alt={book.title}
              width={150}
              height={200}
              className="mx-auto rounded-lg mb-4"
            />

            <h2 className="text-lg font-semibold">{book.title}</h2>

            <a
              href={book.link}
              download
              className="mt-3 inline-block px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700"
            >
              Download PDF
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}
