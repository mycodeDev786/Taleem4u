"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton({
  phone = "923001234567", // your WhatsApp number (no +, no spaces)
  message = "Hello! I need info about Taleem4u.",
}) {
  const text = encodeURIComponent(message || "");
  const href = `https://wa.me/${phone}${text ? `?text=${text}` : ""}`;

  return (
    <div className="fixed right-5 bottom-6 z-50 group">
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <button
          className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg
                     bg-[#25D366] hover:bg-[#20ba59] active:scale-95 transform transition
                     focus:outline-none focus:ring-2 focus:ring-[#25D366]"
        >
          {/* pulse halo */}
          <span
            aria-hidden
            className="absolute inline-block w-14 h-14 rounded-full bg-[#25D366] opacity-30 animate-ping"
          />
          {/* WhatsApp logo white */}
          <FaWhatsapp className="relative z-10 text-white w-7 h-7" />
        </button>
      </Link>

      {/* Tooltip - only visible on md+ screens */}
      <span
        className="hidden md:block absolute right-16 bottom-3 px-3 py-2 rounded-md bg-black text-white text-sm shadow-md
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
      >
        Chat with us on WhatsApp
      </span>
    </div>
  );
}
