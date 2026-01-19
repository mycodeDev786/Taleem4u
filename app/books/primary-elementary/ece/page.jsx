import Image from "next/image";

/* =========================
   SEO METADATA (App Router)
========================= */
export const metadata = {
  title: "ECE Books PDF | Punjab Textbook Board | Free Download",
  description:
    "Download ECE books PDF according to Punjab Textbook Board syllabus. Free English, Math, Urdu and General Knowledge books for Early Childhood Education.",
  keywords: [
    "ECE books pdf",
    "Punjab textbook board ECE",
    "ECE syllabus Pakistan",
    "ECE English book pdf",
    "ECE math book pdf",
    "ECE Urdu book pdf",
  ],
  alternates: {
    canonical: "/books/primary-elementary/ece",
  },
  openGraph: {
    title: "ECE Books PDF – Punjab Textbook Board",
    description:
      "Free ECE books PDFs based on Punjab Textbook Board syllabus. Download English, Math, Urdu and GK.",
    url: "/books/primary-elementary/ece",
    siteName: "Taleem4u",
    images: [
      {
        url: "/seo/ece-books.jpg",
        width: 1200,
        height: 630,
        alt: "ECE Books Punjab Textbook Board",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ECE Books PDF – Punjab Textbook Board",
    description:
      "Download free ECE books PDFs according to Punjab Textbook Board syllabus.",
    images: ["/seo/ece-books.jpg"],
  },
};

const books = [
  {
    title: "English ECE",
    img: "/books/ece-english.jpg",
    link: "/downloads/ece-english.pdf",
  },
  {
    title: "Math ECE",
    img: "/books/ece-math.jpg",
    link: "/downloads/ece-math.pdf",
  },
  {
    title: "Urdu ECE",
    img: "/books/ece-urdu.jpg",
    link: "/downloads/ece-urdu.pdf",
  },
  {
    title: "General Knowledge ECE",
    img: "/books/ece-gk.jpg",
    link: "/downloads/ece-gk.pdf",
  },
];

export default function ECEBooksPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {/* H1 ONLY ONCE */}
      <h1 className="text-3xl font-bold text-center mb-4">
        ECE Books PDF – Punjab Textbook Board
      </h1>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Download Early Childhood Education (ECE) books in PDF format according
        to the Punjab Textbook Board syllabus. These books are useful for
        teachers, parents, and students.
      </p>

      <section
        aria-label="ECE Books List"
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {books.map((book, i) => (
          <article
            key={i}
            className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <Image
              src={book.img}
              alt={`${book.title} Punjab Textbook Board`}
              width={150}
              height={200}
              className="rounded-lg mb-4"
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
