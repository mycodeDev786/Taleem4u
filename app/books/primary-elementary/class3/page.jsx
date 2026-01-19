import Image from "next/image";

/* =========================
   SEO METADATA (App Router)
========================= */
export const metadata = {
  title: "Class 3 Books PDF | Punjab Textbook Board | Free Download",
  description:
    "Download Class 3 books PDF according to Punjab Textbook Board syllabus. Free English, Math, Urdu, Islamiyat, Science and Social Studies books.",
  keywords: [
    "Class 3 books pdf",
    "Punjab textbook board class 3",
    "Class 3 English book pdf",
    "Class 3 math book pdf",
    "Class 3 Urdu book pdf",
    "Class 3 Islamiyat book pdf",
    "Class 3 science book pdf",
    "Class 3 social studies pdf",
  ],
  alternates: {
    canonical: "/books/primary-elementary/class-3",
  },
};

const books = [
  {
    title: "English Class 3",
    img: "/books/class-3-english.jpg",
    link: "/downloads/class-3-english.pdf",
  },
  {
    title: "Mathematics Class 3",
    img: "/books/class-3-math.jpg",
    link: "/downloads/class-3-math.pdf",
  },
  {
    title: "Urdu Class 3",
    img: "/books/class-3-urdu.jpg",
    link: "/downloads/class-3-urdu.pdf",
  },
  {
    title: "Islamiyat Class 3",
    img: "/books/class-3-islamiyat.jpg",
    link: "/downloads/class-3-islamiyat.pdf",
  },
  {
    title: "General Science Class 3",
    img: "/books/class-3-science.jpg",
    link: "/downloads/class-3-science.pdf",
  },
  {
    title: "Social Studies Class 3",
    img: "/books/class-3-social.jpg",
    link: "/downloads/class-3-social.pdf",
  },
];

export default function Class3BooksPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-4">
        Class 3 Books PDF – Punjab Textbook Board
      </h1>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Download Class 3 books PDF according to Punjab Textbook Board syllabus.
        These books help students build strong academic foundations.
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
