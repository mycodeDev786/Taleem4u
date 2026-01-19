import Image from "next/image";

/* =========================
   SEO METADATA (App Router)
========================= */
export const metadata = {
  title: "Nursery Books PDF | Punjab Textbook Board | Free Download",
  description:
    "Download Nursery books PDF according to Punjab Textbook Board syllabus. Free English, Math, Urdu and Islamiyat books for Nursery class.",
  keywords: [
    "Nursery books pdf",
    "Punjab textbook board nursery",
    "Nursery English book pdf",
    "Nursery math book pdf",
    "Nursery Urdu book pdf",
    "Nursery Islamiyat book pdf",
  ],
  alternates: {
    canonical: "/books/primary-elementary/nursery",
  },
  openGraph: {
    title: "Nursery Books PDF – Punjab Textbook Board",
    description:
      "Free Nursery books PDFs based on Punjab Textbook Board syllabus. Download English, Math, Urdu and Islamiyat books.",
    url: "/books/primary-elementary/nursery",
    siteName: "Taleem4u",
    images: [
      {
        url: "/seo/nursery-books.jpg",
        width: 1200,
        height: 630,
        alt: "Nursery Books Punjab Textbook Board",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nursery Books PDF – Punjab Textbook Board",
    description:
      "Download free Nursery books PDFs according to Punjab Textbook Board syllabus.",
    images: ["/seo/nursery-books.jpg"],
  },
};

const books = [
  {
    title: "English Nursery",
    img: "/books/nursery-english.jpg",
    link: "/downloads/nursery-english.pdf",
  },
  {
    title: "Math Nursery",
    img: "/books/nursery-math.jpg",
    link: "/downloads/nursery-math.pdf",
  },
  {
    title: "Urdu Nursery",
    img: "/books/nursery-urdu.jpg",
    link: "/downloads/nursery-urdu.pdf",
  },
  {
    title: "Islamiyat Nursery",
    img: "/books/nursery-islamiyat.jpg",
    link: "/downloads/nursery-islamiyat.pdf",
  },
];

export default function NurseryBooksPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {/* H1 – Only once for SEO */}
      <h1 className="text-3xl font-bold text-center mb-4">
        Nursery Books PDF – Punjab Textbook Board
      </h1>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Download Nursery class books in PDF format according to the official
        Punjab Textbook Board syllabus. These books are helpful for students,
        parents, and teachers.
      </p>

      <section
        aria-label="Nursery Books List"
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
