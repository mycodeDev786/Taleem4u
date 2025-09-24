// app/books/inter/page.jsx
import Image from "next/image";

const part1Books = [
  {
    title: "Physics Part 1",
    img: "/books/physics11.jpg",
    link: "/downloads/physics11.pdf",
  },
  {
    title: "Chemistry Part 1",
    img: "/books/chemistry11.jpg",
    link: "/downloads/chemistry11.pdf",
  },
  {
    title: "Biology Part 1",
    img: "/books/biology11.jpg",
    link: "/downloads/biology11.pdf",
  },
  {
    title: "Math Part 1",
    img: "/books/math11.jpg",
    link: "/downloads/math11.pdf",
  },
  {
    title: "English Part 1",
    img: "/books/english11.jpg",
    link: "/downloads/english11.pdf",
  },
];

const part2Books = [
  {
    title: "Physics Part 2",
    img: "/books/physics12.jpg",
    link: "/downloads/physics12.pdf",
  },
  {
    title: "Chemistry Part 2",
    img: "/books/chemistry12.jpg",
    link: "/downloads/chemistry12.pdf",
  },
  {
    title: "Biology Part 2",
    img: "/books/biology12.jpg",
    link: "/downloads/biology12.pdf",
  },
  {
    title: "Math Part 2",
    img: "/books/math12.jpg",
    link: "/downloads/math12.pdf",
  },
  {
    title: "English Part 2",
    img: "/books/english12.jpg",
    link: "/downloads/english12.pdf",
  },
];

export default function InterBooks() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">
        Intermediate Books (FSc Part 1 & 2)
      </h1>

      {/* Part 1 Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-indigo-700">
          FSc Part 1 (11th Class)
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {part1Books.map((book, i) => (
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
      </section>

      {/* Part 2 Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-indigo-700">
          FSc Part 2 (12th Class)
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {part2Books.map((book, i) => (
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
      </section>
    </div>
  );
}
