import Image from "next/image";
import Hero from "./components/hero";
import LatestSection from "./components/LatestSection";
import BooksSection from "./components/BooksSection";

export default function Home() {
  return (
    <div className=" -mt-5">
      <Hero />
      <LatestSection />
      <BooksSection />
    </div>
  );
}
