import { assets } from "@/assets/assets";

export const books = [
  {
    title: "Physics 9th",
    // For <Image />, we can still use the imported asset
    img: assets.ninth_phy,
    // But for SEO, keep a separate string path
    imgUrl: "/books/9th/9th_phy.png",
    link: "/downloads/physics9.pdf",
    slug: "physics-9th",
    description:
      "Download Physics 9th class book in PDF format for Matric students.",
  },
  {
    title: "Chemistry 9th",
    img: assets.ninth_chem, // already string
    imgUrl: "/books/chemistry9.jpg",
    link: "/downloads/chemistry9.pdf",
    slug: "chemistry-9th",
    description:
      "Download Chemistry 9th class book in PDF format for Matric students.",
  },
  {
    title: "Biology 9th",
    img: assets.ninth_bio, // already string
    imgUrl: "/books/bio9.jpg",
    link: "/downloads/chemistry9.pdf",
    slug: "biology-9th",
    description:
      "Download Biology 9th class book in PDF format for Matric students.",
  },
  {
    title: "Math 9th",
    img: assets.ninth_math, // already string
    imgUrl: "/books/math9.jpg",
    link: "/downloads/math9.pdf",
    slug: "math-9th",
    description:
      "Download Math 9th class book in PDF format for Matric students.",
  },
  // ... repeat for others
];
