import Link from "next/link";

export const metadata = {
  title:
    "Scholarships for Pakistani Students | Full List 2024 | Taleem4u",
  description:
    "Discover 100+ scholarship opportunities for Pakistani students. Find international scholarships, local scholarships, application deadlines, and expert tips.",
  keywords:
    "scholarships pakistan, international scholarships, student scholarships, scholarship opportunities",
  alternates: {
    canonical: "https://taleem4u.com/scholarships",
  },
};

export default function Scholarships() {
  const scholarships = [
    {
      name: "Fulbright Scholarship",
      provider: "United States Government",
      level: "Masters & PhD",
      amount: "Fully Funded",
      deadline: "September 30, 2024",
      description:
        "Prestigious scholarship for Pakistani students to pursue higher education in the United States.",
      link: "#",
    },
    {
      name: "Commonwealth Scholarship",
      provider: "UK Government",
      level: "Masters",
      amount: "Fully Funded",
      deadline: "October 31, 2024",
      description:
        "Opportunity to study in UK universities with full financial support.",
      link: "#",
    },
    {
      name: "DAAD Scholarship",
      provider: "German Government",
      level: "Bachelor, Masters & PhD",
      amount: "Fully Funded",
      deadline: "November 15, 2024",
      description:
        "Study in Germany with comprehensive financial support and living allowance.",
      link: "#",
    },
    {
      name: "HEC Scholarships",
      provider: "Higher Education Commission Pakistan",
      level: "Masters & PhD",
      amount: "Fully Funded",
      deadline: "Ongoing",
      description:
        "National scholarships for Pakistani students pursuing higher education locally and abroad.",
      link: "#",
    },
    {
      name: "ADB Scholarship",
      provider: "Asian Development Bank",
      level: "Masters",
      amount: "Fully Funded",
      deadline: "September 30, 2024",
      description:
        "Study in Asia-Pacific region with ADB financial support.",
      link: "#",
    },
    {
      name: "Chevening Scholarship",
      provider: "British Foreign Office",
      level: "Masters",
      amount: "Fully Funded",
      deadline: "November 5, 2024",
      description:
        "Prestigious UK scholarship for talented individuals from around the world.",
      link: "#",
    },
    {
      name: "Canada-Pakistan Scholarship",
      provider: "Government of Canada",
      level: "Masters",
      amount: "Partially Funded",
      deadline: "December 1, 2024",
      description:
        "Opportunity to study in Canadian universities with financial assistance.",
      link: "#",
    },
    {
      name: "Agha Khan Foundation Scholarship",
      provider: "Agha Khan Foundation",
      level: "Bachelor & Masters",
      amount: "Varies",
      deadline: "Ongoing",
      description:
        "Merit and need-based scholarships for underprivileged talented students.",
      link: "#",
    },
  ];

  const tips = [
    {
      title: "Start Early",
      description:
        "Begin researching scholarships at least 12-18 months before you plan to apply. This gives you time to prepare strong applications.",
    },
    {
      title: "Check Eligibility",
      description:
        "Carefully read eligibility criteria before applying. Don't waste time on scholarships you don't qualify for.",
    },
    {
      title: "Prepare Strong Documents",
      description:
        "Ensure your academic records, test scores (IELTS, GRE, GMAT), and statements are excellent and relevant.",
    },
    {
      title: "Write Compelling Essays",
      description:
        "Scholarship essays should clearly articulate your goals, achievements, and why you deserve the scholarship.",
    },
    {
      title: "Get Strong Recommendations",
      description:
        "Request recommendation letters from teachers or professionals who know your abilities well.",
    },
    {
      title: "Meet Deadlines",
      description:
        "Submit applications well before deadlines. Late submissions are rarely accepted regardless of merit.",
    },
    {
      title: "Apply to Multiple Scholarships",
      description:
        "Don't rely on a single scholarship. Apply to 5-10 different opportunities to increase chances.",
    },
    {
      title: "Follow Instructions Carefully",
      description:
        "Read application instructions multiple times and follow them exactly as specified.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Scholarship Opportunities</h1>
          <p className="text-xl text-purple-100 max-w-3xl mb-8">
            Discover 100+ scholarship opportunities for Pakistani students
            pursuing education locally and internationally. Find fully funded and
            partially funded scholarships.
          </p>
          <div className="flex gap-4 flex-wrap">
            <input
              type="text"
              placeholder="Search scholarships..."
              className="px-6 py-3 rounded-lg text-gray-900 w-full md:w-64 focus:outline-none"
            />
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">100+</div>
              <p className="text-gray-700">Active Scholarships</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">$500M+</div>
              <p className="text-gray-700">Total Funding Available</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-700">Countries</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">10K+</div>
              <p className="text-gray-700">Students Funded</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Scholarships */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">
          Featured Scholarships
        </h2>

        <div className="space-y-6">
          {scholarships.map((scholarship, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {scholarship.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{scholarship.description}</p>
                  <div className="flex flex-wrap gap-4">
                    <span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                      {scholarship.provider}
                    </span>
                    <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                      {scholarship.level}
                    </span>
                    <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
                      {scholarship.amount}
                    </span>
                    <span className="text-sm bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
                      Deadline: {scholarship.deadline}
                    </span>
                  </div>
                </div>
                <Link
                  href={scholarship.link}
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition whitespace-nowrap"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? Browse more scholarships.
          </p>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
            View All Scholarships
          </button>
        </div>
      </section>

      {/* Tips Section */}
      <section className="bg-gradient-to-r from-purple-50 to-pink-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Expert Tips for Scholarship Success
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md border-l-4 border-purple-600"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {tip.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarship Types */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Types of Scholarships
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Fully Funded
            </h3>
            <p className="text-gray-700">
              Complete funding covering tuition, accommodation, and living
              expenses.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Partially Funded
            </h3>
            <p className="text-gray-700">
              Covers partial expenses like tuition or stipend. You may need to
              contribute.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Merit-Based
            </h3>
            <p className="text-gray-700">
              Awarded based on academic excellence, test scores, and
              achievements.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Get Personalized Scholarship Recommendations
          </h2>
          <p className="text-lg mb-8 text-purple-100 max-w-2xl mx-auto">
            Answer a few questions and we'll suggest the best scholarship
            opportunities matching your profile.
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Take Quiz
          </button>
        </div>
      </section>
    </div>
  );
}
