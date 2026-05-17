import Link from "next/link";

export const metadata = {
  title: "About Us – Taleem4u | Pakistan's Education & Career Portal",
  description:
    "Learn about Taleem4u – Pakistan's dedicated education and career platform. Our mission, vision, team, and what makes us the go-to resource for Pakistani students and job seekers.",
  alternates: { canonical: "https://www.taleem4u.com/about" },
};

export default function AboutPage() {
  const stats = [
    { label: "Active Users", value: "50,000+" },
    { label: "Resources Available", value: "5,000+" },
    { label: "Job Listings", value: "500+" },
    { label: "Scholarships Listed", value: "100+" },
  ];

  const team = [
    { name: "Ahmed Raza", role: "Founder & CEO", bio: "Education technology enthusiast with 8+ years of experience in EdTech. Passionate about making quality education resources accessible to every Pakistani student regardless of financial background." },
    { name: "Fatima Malik", role: "Head of Content", bio: "Former teacher with an M.Ed from University of Education Lahore. Leads the content strategy, ensuring all materials meet curriculum standards and are genuinely useful for students." },
    { name: "Usman Tariq", role: "Lead Developer", bio: "Full-stack developer specializing in education platforms. Built and maintains the Taleem4u platform to ensure a fast, mobile-friendly experience for users across Pakistan." },
    { name: "Sara Khan", role: "Career Counselor", bio: "Certified career counselor with expertise in Pakistani job markets and scholarship applications. Helps students navigate university admissions, scholarship programs, and career planning." },
  ];

  const values = [
    { icon: "🎯", title: "Accessibility", desc: "We believe every student in Pakistan deserves access to high-quality educational resources. Everything on Taleem4u is completely free — no subscriptions, no paywalls." },
    { icon: "✅", title: "Accuracy", desc: "We verify all information before publishing. Admission dates, scholarship details, and job listings are checked against official sources to ensure you get reliable, up-to-date information." },
    { icon: "🇵🇰", title: "Pakistan First", desc: "We are built specifically for Pakistani students and professionals. Our content reflects local curricula, boards, and the unique needs of people navigating Pakistan's education and job systems." },
    { icon: "🚀", title: "Continuous Improvement", desc: "We update our platform daily with fresh job listings, new study materials, and the latest admission announcements. Your success drives everything we build and improve." },
  ];

  return (
    <main className="min-h-screen bg-gray-50 pt-24 px-6">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Taleem4u</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Taleem4u is Pakistan's dedicated education and career portal — a one-stop platform built to help 
            students access study materials, find scholarships, explore university admissions, and discover 
            job opportunities, all completely free.
          </p>
        </header>

        {/* Stats */}
        <section className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl shadow p-6 text-center">
              <p className="text-3xl font-extrabold text-emerald-600 mb-1">{stat.value}</p>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* Mission */}
        <section className="mb-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-10 text-white">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed text-emerald-100">
            Pakistan has over 50 million students across primary, secondary, and higher education. Yet millions of 
            them lack access to quality study materials, reliable exam preparation resources, and up-to-date 
            information about career opportunities. Taleem4u was founded to close this gap. We aggregate 
            educational resources — textbooks, notes, past papers, scholarship listings, job opportunities, 
            and exam preparation guides — in a single, easily accessible platform that works on any device, 
            including low-bandwidth connections.
          </p>
          <p className="text-lg leading-relaxed text-emerald-100 mt-4">
            We are committed to serving students from Karachi to Gilgit, from major cities to rural communities, 
            ensuring that geography and financial constraints are never barriers to educational achievement.
          </p>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl shadow p-6 flex gap-4">
                <span className="text-4xl flex-shrink-0">{v.icon}</span>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{v.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {team.map((member, i) => (
              <div key={i} className="bg-white rounded-2xl shadow p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-2xl font-bold text-emerald-700">{member.name[0]}</div>
                  <div>
                    <h3 className="font-bold text-gray-800">{member.name}</h3>
                    <p className="text-emerald-600 text-sm">{member.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What We Offer */}
        <section className="mb-16 bg-white rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">What Taleem4u Offers</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { feature: "Free Textbooks & Notes", detail: "PDF downloads of NCERT-aligned Pakistani textbooks for all classes from Primary to Intermediate." },
              { feature: "Past Papers Collection", detail: "Year-wise past exam papers for Matric, FSc, CSS, PPSC, FPSC, NTS, and MDCAT." },
              { feature: "Admission Alerts", detail: "Timely notifications about university admissions, entry test dates, and merit list announcements." },
              { feature: "Scholarship Database", detail: "Comprehensive listings of local and international scholarships with eligibility criteria and deadlines." },
              { feature: "Jobs Portal", detail: "Daily-updated listings for government jobs, private sector jobs, internships, and overseas employment." },
              { feature: "Exam Preparation", detail: "Dedicated prep guides for MDCAT, PPSC, FPSC, CSS, NTS, and university entrance tests." },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 p-4 bg-gray-50 rounded-xl">
                <span className="text-emerald-500 font-bold text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{item.feature}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Have a Question or Suggestion?</h2>
          <p className="text-gray-600 mb-6">We love hearing from our users. If you have ideas, feedback, or want to collaborate, get in touch with us.</p>
          <Link href="/contact" className="bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 transition inline-block">Contact Us</Link>
        </section>
      </div>
    </main>
  );
}
