import Image from "next/image";

/* =========================
   SEO METADATA (App Router)
========================= */
export const metadata = {
  title: "Class 1 Books PDF | Punjab Textbook Board | Free Download",
  description:
    "Download Class 1 books PDF according to Punjab Textbook Board syllabus. Free English, Math, Urdu, Islamiyat and General Knowledge books.",
  keywords: [
    "Class 1 books pdf",
    "Punjab textbook board class 1",
    "Class 1 English book pdf",
    "Class 1 math book pdf",
    "Class 1 Urdu book pdf",
    "Class 1 Islamiyat book pdf",
    "Class 1 GK book pdf",
  ],
  alternates: {
    canonical: "/books/primary-elementary/class-1",
  },
  openGraph: {
    title: "Class 1 Books PDF – Punjab Textbook Board",
    description:
      "Free Class 1 books PDFs based on Punjab Textbook Board syllabus. Download English, Math, Urdu, Islamiyat and GK books.",
    url: "/books/primary-elementary/class-1",
    siteName: "Taleem4u",
    images: [
      {
        url: "/seo/class-1-books.jpg",
        width: 1200,
        height: 630,
        alt: "Class 1 Books Punjab Textbook Board",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Class 1 Books PDF – Punjab Textbook Board",
    description:
      "Download free Class 1 books PDFs according to Punjab Textbook Board syllabus.",
    images: ["/seo/class-1-books.jpg"],
  },
};

const books = [
  {
    title: "English Class 1",
    img: "/books/class-1-english.jpg",
    link: "/downloads/class-1-english.pdf",
  },
  {
    title: "Mathematics Class 1",
    img: "/books/class-1-math.jpg",
    link: "/downloads/class-1-math.pdf",
  },
  {
    title: "Urdu Class 1",
    img: "/books/class-1-urdu.jpg",
    link: "/downloads/class-1-urdu.pdf",
  },
  {
    title: "Islamiyat Class 1",
    img: "/books/class-1-islamiyat.jpg",
    link: "/downloads/class-1-islamiyat.pdf",
  },
  {
    title: "General Knowledge Class 1",
    img: "/books/class-1-gk.jpg",
    link: "/downloads/class-1-gk.pdf",
  },
];

export default function Class1BooksPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {/* H1 – Only once for SEO */}
      <h1 className="text-3xl font-bold text-center mb-4">
        Class 1 Books PDF – Punjab Textbook Board
      </h1>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Download Class 1 books in PDF format according to the official Punjab
        Textbook Board syllabus. These books are useful for students, parents,
        and teachers.
      </p>

      <section
        aria-label="Class 1 Books List"
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {books.map((book, index) => (
          <article
            key={index}
            className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <Image
              src={book.img}
              alt={`${book.title} Punjab Textbook Board`}
              width={150}
              height={200}
              className="rounded-lg mb-4"
              priority={index === 0}
            />

            <h2 className="text-lg font-semibold text-gray-800">
              {book.title}
            </h2>

            <a
              href={book.link}
              download
              className="mt-3 inline-block px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition"
              aria-label={`Download ${book.title} PDF`}
            >
              Download PDF
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}
