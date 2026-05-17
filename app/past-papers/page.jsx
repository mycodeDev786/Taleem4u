import Link from "next/link";

export const metadata = {
  title: "Past Papers Pakistan – Matric, Inter, PPSC, FPSC, CSS, NTS | Taleem4u",
  description:
    "Download solved and unsolved past papers for Matric, Intermediate, CSS, PPSC, FPSC, NTS, and MDCAT exams in Pakistan. Free PDF downloads and year-wise paper collections.",
  alternates: { canonical: "https://www.taleem4u.com/past-papers" },
};

export default function PastPapersPage() {
  const categories = [
    { name: "Matric (9th & 10th)", link: "/past-papers/matric", desc: "Board past papers for 9th and 10th class including all Punjab boards, Karachi board, and Federal Board. Subject-wise collections with solved keys.", icon: "📚" },
    { name: "Intermediate (11th & 12th)", link: "/past-papers/inter", desc: "FSc Part 1 and Part 2 past papers for all major boards. Pre-Medical, Pre-Engineering, ICS, FA, and ICom groups.", icon: "🎓" },
    { name: "CSS Past Papers", link: "/past-papers/css", desc: "Central Superior Services exam past papers for compulsory and optional subjects from 2000 to 2024. Useful for serious CSS aspirants.", icon: "🏛️" },
    { name: "PPSC Past Papers", link: "/past-papers/ppsc", desc: "Punjab Public Service Commission test papers for various posts including Patwari, ASI, Sub-Inspector, and Lecturer categories.", icon: "📝" },
    { name: "FPSC Past Papers", link: "/past-papers/fpsc", desc: "Federal Public Service Commission test papers for BPS-14 to BPS-17 posts and competitive examinations.", icon: "🗂️" },
    { name: "NTS Past Papers", link: "/past-papers/nts", desc: "National Testing Service past papers for GAT, NAT, and recruitment tests for government departments and universities.", icon: "📋" },
  ];

  const benefits = [
    { title: "Understand Exam Patterns", desc: "By going through multiple years of past papers, students quickly recognize the types of questions, the distribution of marks across topics, and the difficulty level they can expect in the actual exam." },
    { title: "Identify Important Topics", desc: "Certain topics and concepts appear repeatedly in past papers. Systematic analysis reveals which chapters are exam favorites and deserve extra attention during your revision." },
    { title: "Improve Time Management", desc: "Practicing with past papers under timed conditions trains you to complete your answer sheet within the allotted time — one of the biggest challenges students face in board and competitive exams." },
    { title: "Boost Exam Confidence", desc: "Familiarity with the paper format, question styles, and subject vocabulary reduces exam anxiety. Students who practise with past papers consistently perform better under pressure." },
  ];

  return (
    <main className="min-h-screen bg-gray-50 pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Past Papers – Pakistan</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access past papers for board exams, competitive tests, and university entrance examinations across Pakistan. 
            Preparing with real past papers is the single most effective strategy for exam success.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Browse by Category</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {categories.map((cat, idx) => (
              <a key={idx} href={cat.link} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col">
                <div className="text-4xl mb-3">{cat.icon}</div>
                <h2 className="text-lg font-bold text-gray-800 mb-2">{cat.name}</h2>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{cat.desc}</p>
                <span className="mt-4 text-emerald-600 font-medium text-sm">View Papers →</span>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-16 bg-white rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Why Past Papers Are Essential for Exam Preparation</h2>
          <p className="text-gray-600 mb-8">Educational researchers consistently show that retrieval practice — testing yourself on previous exams — is one of the most effective learning techniques available. Here is why every serious student should make past papers a core part of their study plan.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">{i + 1}</div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">{b.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Use Past Papers Effectively</h2>
          <div className="space-y-4">
            {[
              { step: "Collect papers from at least 5 years", detail: "Go back at least 5 years for board exams and 10 years for competitive exams like CSS and PPSC. A wider data set gives a more accurate picture of exam trends." },
              { step: "Attempt each paper under real conditions", detail: "Set a timer, switch off distractions, and attempt the full paper as if it were the actual exam. This builds both knowledge and mental endurance." },
              { step: "Mark your answers using the provided keys", detail: "After completing the paper, use the answer key to evaluate your performance. Identify weak areas and allocate extra study time to those topics." },
              { step: "Revise weak topics and re-attempt", detail: "Study the concepts you missed or got wrong. After revision, attempt a fresh past paper to confirm you have mastered those topics before moving on." },
              { step: "Track your progress over time", detail: "Maintain a simple score log. As your scores improve from paper to paper, you will gain confidence and know exactly where you stand relative to the expected merit." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow p-5 flex gap-4 items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">{i + 1}</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">{item.step}</h3>
                  <p className="text-gray-600 text-sm">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 bg-emerald-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Are the past papers on Taleem4u free to download?", a: "Yes, all past papers available on Taleem4u are completely free. We believe every Pakistani student deserves access to quality study resources regardless of their financial background." },
              { q: "From which boards are the Matric and Inter papers collected?", a: "We include papers from Lahore Board, Rawalpindi Board, Gujranwala Board, Multan Board, Sargodha Board, Faisalabad Board, Karachi Board (BSEK), and Federal Board (FBISE)." },
              { q: "Are solved papers available?", a: "For many subjects we provide complete solved papers with detailed explanations. For competitive exams, answer keys are provided. Fully worked solutions help students understand not just the answer but the method." },
              { q: "How frequently are new papers added?", a: "We update the past papers collection immediately after annual exams. Annual board results and competitive exams typically release papers between May and September each year." },
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
            {[{label:"Books & Notes",href:"/books"},{label:"MDCAT Prep",href:"/prep/mdcat"},{label:"PPSC Prep",href:"/prep/ppsc"},{label:"Scholarships",href:"/scholarships"},{label:"Admissions",href:"/admissions"},{label:"Jobs Portal",href:"/jobs"}].map(l => (
              <Link key={l.href} href={l.href} className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-100 transition">{l.label}</Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
