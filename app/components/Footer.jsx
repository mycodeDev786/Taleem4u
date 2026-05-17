"use client";

export default function Footer() {
  const navLinks = [
    {
      label: "Admissions & Scholarships",
      links: [
        { href: "/admissions", label: "Admissions" },
        { href: "/scholarships", label: "Scholarships" },
        { href: "/prep/mdcat", label: "MDCAT Prep" },
        { href: "/prep/ppsc", label: "PPSC Prep" },
      ],
    },
    {
      label: "Resources",
      links: [
        { href: "/books", label: "Books & Notes" },
        { href: "/past-papers", label: "Past Papers" },
        { href: "/jobs", label: "Jobs Portal" },
        { href: "/blog", label: "Blog" },
      ],
    },
    {
      label: "Company",
      links: [
        { href: "/about", label: "About Us" },
        { href: "/contact", label: "Contact Us" },
        { href: "/privacy-policy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Service" },
      ],
    },
  ];

  const YouTubeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M19.615 3.184c-1.144-.304-2.28-.487-3.414-.54c-.655-.028-1.311-.043-1.968-.043H9.767c-.657 0-1.313.015-1.968.043-1.134.053-2.27.236-3.414.54C3.255 3.868 2.5 4.962 2.5 6.354v11.292c0 1.392.755 2.486 1.885 2.871 1.144.304 2.28.487 3.414.54.655.028 1.311.043 1.968.043h4.466c.657 0 1.313-.015 1.968-.043 1.134-.053 2.27-.236 3.414-.54 1.13-.385 1.885-1.479 1.885-2.871V6.354c0-1.392-.755-2.486-1.885-2.87zM9.5 16.5V7.5l6 4.5-6 4.5z" />
    </svg>
  );

  const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );

  const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-12 rounded-t-xl">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Taleem4u</h3>
            <p className="text-sm leading-relaxed">
              Pakistan&apos;s free education and career portal. Access textbooks, past papers, scholarships, 
              university admissions, and job listings — all in one place, built for Pakistani students.
            </p>
            <div className="mt-4 space-y-1 text-xs text-gray-500">
              <p>📧 contact@taleem4u.com</p>
              <p>📍 Lahore, Punjab, Pakistan</p>
            </div>
          </div>

          {/* Navigation Links */}
          {navLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-white mb-4">{section.label}</h3>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="text-sm hover:text-teal-400 transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media */}
        <div className="mt-8 pt-6 border-t border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><YouTubeIcon /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><FacebookIcon /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><InstagramIcon /></a>
          </div>
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Taleem4u. All rights reserved. &nbsp;|&nbsp;
            <a href="/privacy-policy" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
            &nbsp;|&nbsp;
            <a href="/terms" className="hover:text-teal-400 transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
