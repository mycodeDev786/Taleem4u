import Image from "next/image";

/* =========================
   SEO METADATA (App Router)
========================= */
export const metadata = {
  title: "Class 5 Books PDF | Punjab Textbook Board | Free Download",
  description:
    "Download Class 5 books PDF according to Punjab Textbook Board syllabus. Free English, Math, Urdu, Islamiyat, Science and Social Studies books.",
  keywords: [
    "Class 5 books pdf",
    "Punjab textbook board class 5",
    "Class 5 English book pdf",
    "Class 5 math book pdf",
    "Class 5 Urdu book pdf",
    "Class 5 Islamiyat book pdf",
    "Class 5 science book pdf",
    "Class 5 social studies pdf",
  ],
  alternates: {
    canonical: "/books/primary-elementary/class-5",
  },
};

const books = [
  {
    title: "English Class 5",
    img: "/books/class-5-english.jpg",
    link: "/downloads/class-5-english.pdf",
  },
  {
    title: "Mathematics Class 5",
    img: "/books/class-5-math.jpg",
    link: "/downloads/class-5-math.pdf",
  },
  {
    title: "Urdu Class 5",
    img: "/books/class-5-urdu.jpg",
    link: "/downloads/class-5-urdu.pdf",
  },
  {
    title: "Islamiyat Class 5",
    img: "/books/class-5-islamiyat.jpg",
    link: "/downloads/class-5-islamiyat.pdf",
  },
  {
    title: "General Science Class 5",
    img: "/books/class-5-science.jpg",
    link: "/downloads/class-5-science.pdf",
  },
  {
    title: "Social Studies Class 5",
    img: "/books/class-5-social.jpg",
    link: "/downloads/class-5-social.pdf",
  },
];

export default function Class5BooksPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-4">
        Class 5 Books PDF – Punjab Textbook Board
      </h1>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Download Class 5 books PDF according to Punjab Textbook Board syllabus.
        These books prepare students for middle school education.
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
