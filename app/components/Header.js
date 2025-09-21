"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navLinks = [
    {
      label: "Admissions & Scholarships",
      dropdown: [
        { href: "/admissions", label: "Admissions" },
        { href: "/scholarships", label: "Scholarships" },
      ],
    },
    { href: "/books", label: "Books & Notes" },
    { href: "/jobs", label: "Jobs" },
    { href: "/ai-tools", label: "AI Tools" },
    { href: "/css-pms", label: "CSS & PMS" },
    { href: "/mdcat", label: "MDCAT" },
  ];

  return (
    <header className="bg-lime-50 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Taleem4u Logo" width={40} height={40} />
          <span className="text-xl font-bold text-gray-800">Taleem4u</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-medium relative">
          {navLinks.map((link, idx) =>
            link.dropdown ? (
              <div key={idx} className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-teal-600 transition">
                  <span>{link.label}</span>
                  <HiChevronDown size={16} />
                </button>
                {/* Dropdown */}
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md hidden group-hover:block">
                  {link.dropdown.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-teal-600 transition"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/signup"
            className="bg-teal-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-teal-600 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-4 px-6 py-4 font-medium">
            {navLinks.map((link, idx) =>
              link.dropdown ? (
                <div key={idx}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center justify-between w-full text-gray-700 hover:text-teal-600"
                  >
                    {link.label}
                    <HiChevronDown
                      className={`transform transition ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {dropdownOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setMenuOpen(false)}
                          className="block text-gray-600 hover:text-teal-600"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 hover:text-teal-600 transition"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/signup"
              onClick={() => setMenuOpen(false)}
              className="bg-teal-500 text-white px-5 py-2 rounded-full font-semibold text-center hover:bg-teal-600 transition"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
