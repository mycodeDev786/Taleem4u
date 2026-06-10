export const metadata = {
  title: "About Taleem4u | Pakistan's Education & Career Hub",
  description:
    "Learn about Taleem4u - Pakistan's comprehensive platform for educational resources, scholarships, job opportunities, and career guidance for students and professionals.",
  keywords:
    "about taleem4u, education platform pakistan, career guidance, scholarship platform",
  alternates: {
    canonical: "https://taleem4u.com/about",
  },
};

export default function About() {
  const features = [
    {
      title: "Comprehensive Study Materials",
      description:
        "Access thousands of high-quality PDF books, detailed study notes, and past papers across all educational levels from elementary to intermediate.",
    },
    {
      title: "Job Portal",
      description:
        "Find government jobs, private sector positions, internships, and overseas opportunities tailored for Pakistani students and professionals.",
    },
    {
      title: "Scholarship Hub",
      description:
        "Discover and apply for scholarships from international and local institutions to support your higher education.",
    },
    {
      title: "Admissions Guidance",
      description:
        "Get expert guidance on university admissions, entrance exams, and career pathways in Pakistan and abroad.",
    },
    {
      title: "Test Preparation",
      description:
        "Prepare for competitive exams like MDCAT and PPSC with comprehensive study guides and practice materials.",
    },
    {
      title: "Expert Resources",
      description:
        "Learn from curated resources prepared by top educators, professors, and subject matter experts.",
    },
  ];

  const statistics = [
    { number: "50,000+", label: "Students Helped" },
    { number: "10,000+", label: "Study Materials" },
    { number: "500+", label: "Job Listings" },
    { number: "100+", label: "Scholarships" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">About Taleem4u</h1>
          <p className="text-xl text-gray-100 max-w-3xl">
            Taleem4u is Pakistan's premier education and career platform,
            dedicated to empowering students and professionals with quality
            educational resources, job opportunities, and career guidance.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our mission is to provide accessible, high-quality educational
              resources and career guidance to students across Pakistan. We
              believe every student deserves equal access to learning materials
              and opportunities for career advancement, regardless of their
              geographical or economic background.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We strive to bridge the gap between education and employment by
              offering comprehensive study materials, job listings, and career
              counseling services all in one unified platform.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We envision a Pakistan where every student has access to
              world-class educational resources and is equipped with the
              knowledge and skills needed to succeed in their chosen careers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through technology and community collaboration, we aim to create
              an ecosystem that supports lifelong learning and professional
              development for all.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our Impact
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          What We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8 border-l-4 border-emerald-600">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-emerald-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Choose Taleem4u?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-600 text-white">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  100% Free Access
                </h3>
                <p className="text-gray-600 mt-2">
                  All study materials and resources are completely free for
                  students.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-600 text-white">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Verified Content
                </h3>
                <p className="text-gray-600 mt-2">
                  All materials are curated and verified by experienced
                  educators.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-600 text-white">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  All-in-One Platform
                </h3>
                <p className="text-gray-600 mt-2">
                  Education, jobs, scholarships, and admissions in one place.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-600 text-white">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Regular Updates
                </h3>
                <p className="text-gray-600 mt-2">
                  New job listings, scholarships, and study materials added
                  daily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Our Team
        </h2>
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <p className="text-gray-600 text-lg">
            Taleem4u is built by a passionate team of educators, technologists,
            and career counselors committed to transforming education in
            Pakistan. We work tirelessly to ensure every student has access to
            quality resources and opportunities.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Have questions or suggestions? We'd love to hear from you. Contact
            us anytime.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-emerald-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
