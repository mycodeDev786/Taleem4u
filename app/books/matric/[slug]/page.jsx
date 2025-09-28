import Image from "next/image";
import Link from "next/link";

import { books } from "../../../constants/9th";

export async function generateMetadata({ params }) {
  const book = books.find((b) => b.slug === params.slug);

  if (!book) {
    return {
      title: "Book Not Found - Taleem4u",
      description: "Requested book could not be found.",
    };
  }

  return {
    title: `${book.title} PDF Download - Taleem4u`,
    description: book.description,
    alternates: {
      canonical: `https://www.taleem4u.com/books/matric/${book.slug}`,
    },
    openGraph: {
      title: `${book.title} PDF Download`,
      description: book.description,
      url: `https://www.taleem4u.com/books/matric/${book.slug}`,
      images: [
        {
          url: book.imgUrl, // ✅ always string
          width: 800,
          height: 600,
          alt: book.title,
        },
      ],
    },
  };
}

export default function BookDetail({ params }) {
  const book = books.find((b) => b.slug === params.slug);

  if (!book) {
    return <div className="p-12 text-center text-red-600">Book not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">
        {book.title} – Free PDF Download
      </h1>

      {/* Book Image */}
      <div className="flex justify-center mb-6">
        <Image
          src={book.img}
          alt={book.title}
          width={300}
          height={400}
          className="rounded-lg shadow-md"
        />
      </div>

      {/* SEO friendly text */}
      <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center">
        {book.description} This {book.title} is available in high quality PDF
        format so that students can easily download and study offline. Taleem4u
        provides free access to{" "}
        <strong>Matric (9th & 10th class) textbooks</strong> including Physics,
        Chemistry, Biology, and Mathematics. Students can use these digital
        books for exam preparation, revision, and self-study.
      </p>

      {/* Google Drive Viewer (replace with your real Drive file link) */}
      <div className="mb-8">
        <iframe
          src={`https://drive.google.com/file/d/14TEL4poDp5vvAP7JZ3dYXJ4U_9fPexm3/view`}
          width="100%"
          height="500"
          allow="autoplay"
          className="rounded-lg shadow-md"
        ></iframe>
      </div>

      {/* Download Button */}
      <div className="text-center">
        <Link
          href={book.link}
          className="inline-block px-6 py-3 bg-green-600 text-white text-lg font-medium rounded-lg hover:bg-green-700 transition"
          download
        >
          📥 Download {book.title}
        </Link>
      </div>
    </div>
  );
}
