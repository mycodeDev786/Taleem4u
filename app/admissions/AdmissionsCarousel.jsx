"use client";
import Slider from "react-slick";

export default function AdmissionsCarousel({ items }) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="bg-gradient-to-r from-gray-50 to-white py-16 shadow-lg rounded-2xl mx-auto max-w-4xl">
      <Slider {...sliderSettings}>
        {items.map((item, idx) => (
          <div
            key={idx}
            className="p-8 text-center transition-transform duration-500 ease-in-out transform hover:scale-105"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 tracking-tight">
              {item.title}
            </h2>
            <p className="text-lg text-gray-500 mb-6 font-medium">
              {item.date}
            </p>
            <a
              href={item.link}
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-xl"
            >
              View Details
              <svg
                className="ml-2 -mr-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>
        ))}
      </Slider>
    </section>
  );
}
