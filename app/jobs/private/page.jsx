import Link from "next/link";

export const metadata = {
  title: "Private Sector Jobs in Pakistan 2024 | IT, Banking, Telecom | Taleem4u",
  description: "Browse latest private sector jobs in Pakistan. Find openings in IT, banking, telecom, healthcare, education and more. Expert tips on applications and interviews.",
  keywords: "private jobs pakistan, IT jobs, banking jobs, telecom jobs, private sector employment",
  alternates: { canonical: "https://taleem4u.com/jobs/private" },
};

export default function PrivateJobs() {
  const sectors = [
    { name: "Information Technology (IT)", icon: "💻", openings: "12,000+", avgSalary: "PKR 60,000–250,000", roles: ["Software Engineer", "Web Developer", "Data Analyst", "DevOps Engineer", "UI/UX Designer", "Cybersecurity Analyst"], growth: "High" },
    { name: "Banking & Finance", icon: "🏦", openings: "5,000+", avgSalary: "PKR 40,000–150,000", roles: ["Branch Manager", "Relationship Officer", "Credit Analyst", "Teller", "Investment Banker", "Risk Analyst"], growth: "Moderate" },
    { name: "Telecommunication", icon: "📡", openings: "3,500+", avgSalary: "PKR 45,000–180,000", roles: ["Network Engineer", "Sales Executive", "Technical Support", "RF Engineer", "Product Manager", "Customer Care"], growth: "High" },
    { name: "Healthcare & Pharmaceuticals", icon: "🏥", openings: "4,000+", avgSalary: "PKR 35,000–120,000", roles: ["Doctor", "Nurse", "Pharmacist", "Medical Sales Rep", "Lab Technician", "Hospital Administrator"], growth: "High" },
    { name: "Education & Training", icon: "🎓", openings: "6,000+", avgSalary: "PKR 25,000–80,000", roles: ["Teacher", "Lecturer", "Academic Coordinator", "Curriculum Designer", "Online Tutor", "School Principal"], growth: "Moderate" },
    { name: "Marketing & Sales", icon: "📈", openings: "8,000+", avgSalary: "PKR 30,000–130,000", roles: ["Digital Marketer", "Sales Manager", "Brand Manager", "SEO Specialist", "Content Writer", "Social Media Manager"], growth: "High" },
    { name: "Engineering & Manufacturing", icon: "⚙️", openings: "4,500+", avgSalary: "PKR 50,000–200,000", roles: ["Mechanical Engineer", "Electrical Engineer", "Civil Engineer", "QA Engineer", "Production Manager", "Safety Officer"], growth: "Moderate" },
    { name: "Retail & FMCG", icon: "🛒", openings: "7,000+", avgSalary: "PKR 25,000–90,000", roles: ["Store Manager", "Merchandiser", "Supply Chain Analyst", "Area Sales Manager", "Category Manager", "Logistics Officer"], growth: "Moderate" },
  ];

  const topEmployers = [
    "Systems Limited", "Netsol Technologies", "Jazz (Veon)", "Telenor Pakistan",
    "HBL (Habib Bank Limited)", "UBL (United Bank Limited)", "MCB Bank", "Meezan Bank",
    "Unilever Pakistan", "Nestle Pakistan", "Engro Corporation", "Lucky Cement",
    "Shaukat Khanum Hospital", "Aga Khan Health Service", "Daraz Pakistan", "Foodpanda",
  ];

  const tips = [
    { title: "Tailor Your CV for Each Role", body: "A generic CV gets ignored. Customize your CV for each application by highlighting the most relevant skills and experience. Use keywords from the job description." },
    { title: "Build a Strong LinkedIn Profile", body: "Most Pakistani private sector recruiters actively search LinkedIn. Keep your profile 100% complete, with a professional photo, detailed work history, and relevant skills endorsed." },
    { title: "Prepare for Behavioral Interviews", body: "Private companies ask behavioral questions like Tell me about a time you handled a conflict. Prepare 8-10 STAR-format stories covering teamwork, leadership, problem-solving, and failure." },
    { title: "Research the Company", body: "Before any interview, research the company products, recent news, culture, and competitors. Showing knowledge of the business sets you apart from other candidates." },
    { title: "Negotiate Your Salary", body: "Most offers have room to negotiate. Research market rates on Rozee.pk and LinkedIn Salary Insights. Negotiate confidently but professionally." },
    { title: "Network Actively", body: "In Pakistan, 60-70% of jobs are filled through referrals. Attend industry events, reach out to professionals on LinkedIn, and inform your network that you are looking for opportunities." },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="text-sm text-blue-200 mb-4">
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/jobs" className="hover:text-white">Jobs</Link> / <span>Private Jobs</span>
          </nav>
          <h1 className="text-5xl font-bold mb-4">Private Sector Jobs in Pakistan</h1>
          <p className="text-blue-100 text-xl max-w-3xl">Explore thousands of job openings in Pakistan's thriving private sector — from tech giants to multinationals to fast-growing startups. Updated daily with verified listings.</p>
          <div className="mt-8 flex gap-6 flex-wrap text-sm">
            <span className="bg-white/20 px-4 py-2 rounded-full">12,000+ IT Jobs</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">5,000+ Banking Jobs</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Updated Daily</span>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse Jobs by Industry</h2>
        <p className="text-gray-600 mb-10">Pakistan's private sector spans diverse industries. Find the one that matches your qualification and interests.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {sectors.map((s, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{s.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{s.name}</h3>
                  <div className="flex gap-3 text-xs mt-1">
                    <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full">{s.openings} openings</span>
                    <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Growth: {s.growth}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3"><span className="font-semibold">Avg Salary:</span> {s.avgSalary}/month</p>
              <div className="flex flex-wrap gap-2">
                {s.roles.map((r) => (
                  <span key={r} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{r}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Top Private Employers in Pakistan</h2>
          <p className="text-gray-600 mb-8">These organizations consistently hire talented professionals across multiple disciplines.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {topEmployers.map((emp, i) => (
              <div key={i} className="bg-white rounded-lg p-4 text-center font-semibold text-gray-800 shadow-sm border border-gray-200 hover:shadow-md transition text-sm">{emp}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">How to Land a Private Sector Job</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {tips.map((tip, i) => (
            <div key={i} className="bg-white border-l-4 border-blue-600 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{tip.title}</h3>
              <p className="text-gray-700 leading-relaxed text-sm">{tip.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white py-14 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Also Explore Government Jobs</h2>
          <p className="text-blue-100 mb-8">Looking for job security and pension benefits? Government jobs offer stability and career growth.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/jobs/government" className="bg-white text-blue-700 px-7 py-3 rounded-full font-semibold hover:bg-gray-100 transition">Government Jobs</Link>
            <Link href="/jobs/internships" className="border-2 border-white text-white px-7 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition">Internships</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
