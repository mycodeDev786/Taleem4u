"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  // Replaced external icons with inline SVG for self-contained code.
  const MenuIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-7 h-7"
    >
      <path
        fillRule="evenodd"
        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zM3.75 17.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z"
        clipRule="evenodd"
      />
    </svg>
  );

  const CloseIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-7 h-7"
    >
      <path
        fillRule="evenodd"
        d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );

  const ChevronDownIcon = ({ isOpen }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`w-4 h-4 transform transition-transform duration-200 ${
        isOpen ? "rotate-180" : ""
      }`}
    >
      <path
        fillRule="evenodd"
        d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.44l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
        clipRule="evenodd"
      />
    </svg>
  );

  const SearchIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path
        fillRule="evenodd"
        d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.634 4.634a.75.75 0 11-1.06 1.06l-4.635-4.635A8.25 8.25 0 012.25 10.5z"
        clipRule="evenodd"
      />
    </svg>
  );

  // Define navigation links and their dropdowns
  const navLinks = [
    // 🎓 Academics
    {
      label: "Academics",
      dropdown: [
        { href: "/books/matric", label: "Matric Books" },
        { href: "/books/inter", label: "Intermediate Books" },
        {
          href: "/books/primary-elementary",
          label: "Primary and Elementary Books",
        },
        { href: "/books/notes", label: " Notes & KeyBooks" },
      ],
    },
    {
      label: "Past Papers",
      dropdown: [
        { href: "/past-papers/matric", label: "Matric Past Papers" },
        { href: "/past-papers/inter", label: "Intermediate Past Papers" },
        { href: "/past-papers/ppsc-fpsc", label: "PPSC & FPSC Past Papers" },
        { href: "/past-papers/css", label: "CSS Past Papers" },
      ],
    },
    {
      label: "Admissions & Scholarships",
      dropdown: [
        { href: "/admissions", label: "Admissions" },
        { href: "/scholarships", label: "Scholarships" },
        { href: "/foreign-scholarships", label: "Foreign Scholarships" },
        { href: "/exchange-programs", label: "Exchange Programs" },
      ],
    },

    // 🧪 Test Prep
    {
      label: "Test Preparation",
      dropdown: [
        { href: "/prep/mdcat", label: "MDCAT" },
        { href: "/prep/ppsc", label: "PPSC" },
        { href: "/prep/fpsc", label: "FPSC" },
        { href: "/prep/ielts", label: "IELTS" },
        { href: "/prep/sat", label: "SAT" },
      ],
    },

    // {
    //   label: "CSS & PMS",
    //   dropdown: [
    //     { href: "/css-pms/syllabus", label: "Syllabus" },
    //     { href: "/css-pms/notes", label: "Notes" },
    //     { href: "/css-pms/papers", label: "Past Papers" },
    //     { href: "/css-pms/guides", label: "Guides" },
    //   ],
    // },

    // 💼 Career
    {
      label: "Jobs",
      dropdown: [
        { href: "/jobs/government", label: "Government Jobs" },
        { href: "/jobs/private", label: "Private Jobs" },
        { href: "/jobs/internships", label: "Internships" },
        { href: "/jobs/abroad", label: "Jobs Abroad" },
      ],
    },
    // {
    //   label: "Career Guidance",
    //   dropdown: [
    //     { href: "/career/roadmaps", label: "Career Roadmaps" },
    //     { href: "/career/counseling", label: "Career Counseling" },
    //     { href: "/career/skills", label: "Skill Development" },
    //     { href: "/career/freelancing", label: "Freelancing" },
    //   ],
    // },
    {
      label: "AI Tools",
      dropdown: [
        { href: "/ai-tools/age-calculator", label: "Age Calculator" },
        { href: "/ai-tools/unit-converter", label: "Unit Converter" },
        { href: "/ai-tools/university-finder", label: "University Finder" },
      ],
    },

    // 📢 Info
  ];

  const toggleDropdown = (idx) => {
    setDropdownOpen(dropdownOpen === idx ? null : idx);
  };

  return (
    <header className="bg-purple-900 shadow-xl sticky top-0 z-50 rounded-b-xl">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo and Site Title */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={assets.logo}
              alt="Taleem4u Logo"
              width={40}
              height={40}
              className="object-contain rounded-full shadow-md"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 font-medium relative text-sm">
          {navLinks.map((link, idx) =>
            link.dropdown ? (
              <div key={idx} className="relative group">
                <button
                  className="flex items-center space-x-1 text-gray-300 hover:text-teal-400 transition-colors duration-200 p-2 rounded-lg"
                  onMouseEnter={() => setDropdownOpen(idx)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <span>{link.label}</span>
                  <ChevronDownIcon isOpen={dropdownOpen === idx} />
                </button>
                <div
                  className={`absolute left-0 mt-2 w-48 bg-white shadow-xl rounded-md ring-1 ring-gray-200 overflow-hidden transition-all duration-300 ease-in-out origin-top ${
                    dropdownOpen === idx
                      ? "scale-y-100 opacity-100 visible"
                      : "scale-y-0 opacity-0 invisible"
                  }`}
                  onMouseEnter={() => setDropdownOpen(idx)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  {link.dropdown.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
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
                className="text-gray-300 hover:text-teal-400 transition-colors duration-200 p-2 rounded-lg"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex items-center space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 pl-10 w-48 bg-purple-800 text-white placeholder-gray-400 border-2 border-gray-700 rounded-full focus:outline-none focus:border-teal-400 transition-colors"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <SearchIcon />
            </span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none p-2 rounded-md hover:bg-gray-800 transition-colors"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 shadow-xl py-4 border-t border-gray-700 animate-slide-down">
          <nav className="flex flex-col space-y-4 px-6 font-medium">
            {/* Mobile Search Bar */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 pl-10 w-full bg-gray-900 text-white placeholder-gray-500 border-2 border-gray-700 rounded-full focus:outline-none focus:border-teal-400 transition-colors"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <SearchIcon />
              </span>
            </div>

            {navLinks.map((link, idx) =>
              link.dropdown ? (
                <div key={idx}>
                  <button
                    onClick={() => toggleDropdown(idx)}
                    className="flex items-center justify-between w-full text-white hover:text-teal-400 transition-colors p-2 rounded-md"
                  >
                    {link.label}
                    <ChevronDownIcon isOpen={dropdownOpen === idx} />
                  </button>
                  {dropdownOpen === idx && (
                    <div className="mt-2 ml-4 space-y-2">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setMenuOpen(false)}
                          className="block text-gray-300 hover:text-teal-400 transition-colors p-2 rounded-md"
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
                  className="block text-white hover:text-teal-400 transition-colors p-2 rounded-md"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
