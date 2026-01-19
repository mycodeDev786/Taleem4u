import Image from "next/image";

/* =========================
   SEO METADATA (App Router)
========================= */
export const metadata = {
  title: "Class 2 Books PDF | Punjab Textbook Board | Free Download",
  description:
    "Download Class 2 books PDF according to Punjab Textbook Board syllabus. Free English, Math, Urdu, Islamiyat and General Knowledge books.",
  keywords: [
    "Class 2 books pdf",
    "Punjab textbook board class 2",
    "Class 2 English book pdf",
    "Class 2 math book pdf",
    "Class 2 Urdu book pdf",
    "Class 2 Islamiyat book pdf",
    "Class 2 GK book pdf",
  ],
  alternates: {
    canonical: "/books/primary-elementary/class-2",
  },
};

const books = [
  {
    title: "English Class 2",
    img: "/books/class-2-english.jpg",
    link: "/downloads/class-2-english.pdf",
  },
  {
    title: "Mathematics Class 2",
    img: "/books/class-2-math.jpg",
    link: "/downloads/class-2-math.pdf",
  },
  {
    title: "Urdu Class 2",
    img: "/books/class-2-urdu.jpg",
    link: "/downloads/class-2-urdu.pdf",
  },
  {
    title: "Islamiyat Class 2",
    img: "/books/class-2-islamiyat.jpg",
    link: "/downloads/class-2-islamiyat.pdf",
  },
  {
    title: "General Knowledge Class 2",
    img: "/books/class-2-gk.jpg",
    link: "/downloads/class-2-gk.pdf",
  },
];

export default function Class2BooksPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-4">
        Class 2 Books PDF – Punjab Textbook Board
      </h1>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Download Class 2 books in PDF format as per Punjab Textbook Board
        syllabus. These books are ideal for students, parents, and teachers.
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
            <h2 className="font-semibold text-lg">{book.title}</h2>
            <a
              href={book.link}
              download
              className="mt-3 inline-block bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700"
            >
              Download PDF
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}
