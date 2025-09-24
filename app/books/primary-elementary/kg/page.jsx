// app/books/primary-elementary/kg/page.jsx
import Image from "next/image";

const books = [
  {
    title: "English KG",
    img: "/books/kg-english.jpg", // add image in public/books
    link: "/downloads/kg-english.pdf", // add PDF in public/downloads
  },
  {
    title: "Math KG",
    img: "/books/kg-math.jpg",
    link: "/downloads/kg-math.pdf",
  },
  {
    title: "Urdu KG",
    img: "/books/kg-urdu.jpg",
    link: "/downloads/kg-urdu.pdf",
  },
];

export default function KGBooks() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-12">KG Books & Notes</h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center text-center hover:shadow-lg transition"
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
            <a
              href={book.link}
              className="mt-3 inline-block px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition"
              download
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
