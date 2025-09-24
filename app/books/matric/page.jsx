// app/books/matric/page.jsx
import Image from "next/image";

const ninthBooks = [
  {
    title: "Physics 9th",
    img: "/books/physics9.jpg",
    link: "/downloads/physics9.pdf",
  },
  {
    title: "Chemistry 9th",
    img: "/books/chemistry9.jpg",
    link: "/downloads/chemistry9.pdf",
  },
  {
    title: "Biology 9th",
    img: "/books/biology9.jpg",
    link: "/downloads/biology9.pdf",
  },
  {
    title: "Math 9th",
    img: "/books/math9.jpg",
    link: "/downloads/math9.pdf",
  },
  {
    title: "Physics 9th",
    img: "/books/physics9.jpg",
    link: "/downloads/physics9.pdf",
  },
  {
    title: "Chemistry 9th",
    img: "/books/chemistry9.jpg",
    link: "/downloads/chemistry9.pdf",
  },
  {
    title: "Biology 9th",
    img: "/books/biology9.jpg",
    link: "/downloads/biology9.pdf",
  },
  {
    title: "Math 9th",
    img: "/books/math9.jpg",
    link: "/downloads/math9.pdf",
  },
];

const tenthBooks = [
  {
    title: "Physics 10th",
    img: "/books/physics10.jpg",
    link: "/downloads/physics10.pdf",
  },
  {
    title: "Chemistry 10th",
    img: "/books/chemistry10.jpg",
    link: "/downloads/chemistry10.pdf",
  },
  {
    title: "Biology 10th",
    img: "/books/biology10.jpg",
    link: "/downloads/biology10.pdf",
  },
  {
    title: "Math 10th",
    img: "/books/math10.jpg",
    link: "/downloads/math10.pdf",
  },
];

export default function MatricBooks() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">
        Matric Books (9th & 10th Class)
      </h1>

      {/* 9th Class Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-indigo-700">
          9th Class Books
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ninthBooks.map((book, i) => (
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

      {/* 10th Class Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-indigo-700">
          10th Class Books
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {tenthBooks.map((book, i) => (
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
