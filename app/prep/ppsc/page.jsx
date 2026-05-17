import Link from "next/link";

export const metadata = {
  title: "PPSC Preparation 2025 – Past Papers, Syllabus, Books & Tests | Taleem4u",
  description:
    "Complete PPSC exam preparation guide. Download PPSC syllabus for all posts, recommended books, past papers, MCQ notes, and practice with online mock tests. Score high in Punjab Public Service Commission exams.",
  alternates: { canonical: "https://www.taleem4u.com/prep/ppsc" },
};

export default function PpscPage() {
  const resources = [
    { title: "Past Papers", description: "Access PPSC past papers for all posts — Patwari, Sub-Inspector, ASI, Lecturer, Assistant, and more. Understand the real exam pattern and recurring questions from previous tests.", link: "/past-papers/ppsc", icon: "📄", color: "blue" },
    { title: "Syllabus", description: "Check the complete and updated PPSC syllabus for your specific post. Syllabus differs by job category — know exactly what topics to study and what to skip.", link: "/syllabus/ppsc", icon: "📋", color: "orange" },
    { title: "Books", description: "Download recommended PPSC preparation books in PDF. Includes Caravan General Knowledge, Dogar Subject Specialist guides, and essay/composition books for written exams.", link: "/books/ppsc", icon: "📚", color: "green" },
    { title: "Short Notes", description: "Topic-wise concise notes for Pakistan Affairs, Current Affairs, Islamic Studies, General Science, and Mathematics. Ideal for quick revision before the exam.", link: "/notes/ppsc", icon: "🗒️", color: "purple" },
    { title: "Mock Tests", description: "Practice PPSC-style MCQ tests for Patwari, Sub-Inspector, ASI, and Lecturer posts. Instant scoring and detailed explanations for every answer.", link: "/tests/ppsc", icon: "✏️", color: "red" },
  ];

  const popularPosts = [
    { post: "Patwari", dept: "Board of Revenue", bps: "BPS-7", edu: "Matric / Intermediate", test: "MCQs (100 marks)", subjects: "General Knowledge, Urdu, Math, Computer Basics" },
    { post: "Sub-Inspector (Police)", dept: "Punjab Police", bps: "BPS-14", edu: "Bachelor's Degree", test: "Written + Physical", subjects: "GK, Pak Affairs, English, Law" },
    { post: "Junior Clerk / UDC", dept: "Various Departments", bps: "BPS-9/11", edu: "Intermediate / Bachelor's", test: "MCQs (100 marks)", subjects: "English, Urdu, Math, GK" },
    { post: "Lecturer", dept: "Higher Education", bps: "BPS-17", edu: "Master's Degree", test: "Subject Test + Interview", subjects: "Subject Knowledge, Education, Research" },
    { post: "Assistant (BS-16)", dept: "Various", bps: "BPS-16", edu: "Bachelor's", test: "MCQs + Interview", subjects: "English, GK, Office Management" },
  ];

  const compulsorySubjects = [
    { subject: "General Knowledge & Current Affairs", tips: "Read Dawn News and Geo News daily. Study the last 12 months of major national and international events. Geography, capitals, and country facts are frequent." },
    { subject: "Pakistan Affairs & History", tips: "Cover Pakistan's creation, constitution history, notable events, Five Year Plans, and the roles of major political figures. PPSC frequently tests on 1947 and post-independence history." },
    { subject: "Islamic Studies & Quran", tips: "Study the Five Pillars, important Quranic verses, Islamic history, and the lives of the Prophets. Questions at BPS-9 to BPS-14 level are straightforward." },
    { subject: "English Grammar & Composition", tips: "Practice tenses, prepositions, sentence correction, synonyms, and antonyms. For higher-grade posts, written composition (précis, application writing) is also tested." },
    { subject: "Mathematics & Arithmetic", tips: "Focus on percentages, ratios, averages, simple/compound interest, basic algebra, and mensuration. Calculator is not allowed — practice mental calculation and shortcut methods." },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">PPSC Preparation 2025</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The Punjab Public Service Commission (PPSC) recruits thousands of officers and employees into Punjab government departments each year. 
            Whether you are preparing for Patwari, Sub-Inspector, Lecturer, or any other post, this comprehensive guide 
            gives you every resource you need to pass with confidence.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Preparation Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {resources.map((item, index) => (
              <Link key={index} href={item.link} className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer text-center flex flex-col">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition">{item.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed flex-1">{item.description}</p>
                <span className="mt-3 text-indigo-600 text-xs font-medium">Explore →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16 bg-white rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Popular PPSC Posts & Requirements</h2>
          <p className="text-gray-600 mb-6">PPSC advertises hundreds of vacancies every year across Punjab government departments. Here is a quick overview of the most popular posts and their selection criteria.</p>
          <div className="overflow-x-auto rounded-xl">
            <table className="w-full text-sm bg-white border border-gray-200">
              <thead className="bg-indigo-700 text-white">
                <tr>
                  <th className="text-left p-4">Post</th>
                  <th className="text-left p-4">Department</th>
                  <th className="text-left p-4">BPS</th>
                  <th className="text-left p-4">Education</th>
                  <th className="text-left p-4">Test Format</th>
                </tr>
              </thead>
              <tbody>
                {popularPosts.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-4 font-semibold text-gray-800">{row.post}</td>
                    <td className="p-4 text-gray-600 text-xs">{row.dept}</td>
                    <td className="p-4 text-gray-600">{row.bps}</td>
                    <td className="p-4 text-gray-600 text-xs">{row.edu}</td>
                    <td className="p-4 text-gray-600 text-xs">{row.test}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Compulsory Subjects – Preparation Tips</h2>
          <p className="text-gray-600 mb-8">Regardless of which PPSC post you are applying for, these compulsory subjects appear in almost every test. Master them to build a strong foundation that applies across multiple job categories.</p>
          <div className="space-y-5">
            {compulsorySubjects.map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow p-6">
                <h3 className="font-semibold text-gray-800 text-lg mb-2">{item.subject}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.tips}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 bg-indigo-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions – PPSC</h2>
          <div className="space-y-4">
            {[
              { q: "How do I apply for a PPSC job?", a: "PPSC advertises vacancies on its official website (ppsc.gop.pk) and in leading newspapers such as Dawn and The News. Applications are submitted online through the PPSC portal. You will need a CNIC, relevant educational certificates, domicile certificate, and a passport-size photograph." },
              { q: "What is the age limit for PPSC jobs?", a: "The standard age limit for most PPSC posts is 18–35 years. However, age relaxations apply: government employees get 5 years relaxation, women candidates get 3 years, and candidates from remote areas (AJK, GB, FATA) get additional relaxation per government policy." },
              { q: "Is the PPSC written test the only selection criterion?", a: "No. For most posts, the selection process includes a written MCQ test, followed by an interview and sometimes a physical/psychological test for posts like Sub-Inspector or ASI. For Lecturer posts, a subject knowledge test plus interview panel evaluation is used." },
              { q: "How many times can I apply for PPSC exams?", a: "There is no restriction on the number of times you can apply, as long as you meet the eligibility criteria for each post. You can apply for multiple posts simultaneously if you qualify for all of them." },
              { q: "Which is the best book for PPSC General Knowledge preparation?", a: "Caravan's Comprehensive General Knowledge by Muhammad Idrees is widely considered the best comprehensive resource. For current affairs, read Dawn's monthly current affairs digest or keep up with news daily. Subject-specific Dogar Brothers and Jahangir's guides are also popular." },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-5">
                <h3 className="font-semibold text-gray-800 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Related Resources</h2>
          <div className="flex flex-wrap gap-3">
            {[{label:"Government Jobs",href:"/jobs/government"},{label:"MDCAT Preparation",href:"/prep/mdcat"},{label:"Past Papers",href:"/past-papers"},{label:"Scholarships",href:"/scholarships"},{label:"Books & Notes",href:"/books"}].map(l => (
              <Link key={l.href} href={l.href} className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-100 transition">{l.label}</Link>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
