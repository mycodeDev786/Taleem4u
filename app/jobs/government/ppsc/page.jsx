import Link from "next/link";
export const metadata = {
  title: "PPSC Jobs 2024 | Punjab Public Service Commission | Lecturer, SI, Assistant | Taleem4u",
  description: "Latest PPSC job advertisements for Punjab government posts — Lecturer, Sub-Inspector, Assistant, Tax Officer, Junior Clerk. Application process, syllabus, and preparation guide.",
  keywords: "PPSC jobs 2024, Punjab public service commission, PPSC lecturer jobs, PPSC sub inspector, PPSC assistant",
};
export default function PPSCJobs() {
  const posts = [
    { title: "Lecturer (Various Subjects)", scale: "BPS-17", dept: "Higher Education Dept", eligibility: "Masters degree (1st division preferred)", seats: "3,000+ annually", desc: "Teach at Government Colleges across Punjab. One of the highest-volume PPSC recruitments. Subjects include English, Urdu, Mathematics, Physics, Chemistry, Biology, History, Political Science, and many others." },
    { title: "Sub-Inspector (Police)", scale: "BPS-14", dept: "Punjab Police", eligibility: "Bachelor degree, Age 20-28", seats: "500-1000 annually", desc: "Investigate crimes, maintain order, and supervise constables. Physical fitness test and written examination required. Strong career progression in police service." },
    { title: "Assistant (Punjab Secretariat)", scale: "BPS-14", dept: "Punjab Secretariat", eligibility: "Bachelor degree", seats: "400+ annually", desc: "Administrative support roles in Punjab government ministries and departments. Computer skills required. Stable career with regular promotions." },
    { title: "Tax Officer", scale: "BPS-14", dept: "Punjab Revenue Authority", eligibility: "Bachelor degree (Commerce preferred)", seats: "200+ annually", desc: "Assess and collect provincial taxes for Punjab Revenue Authority. Growing department with strong career prospects." },
    { title: "Assistant Sub-Inspector", scale: "BPS-11", dept: "Punjab Police", eligibility: "FA/FSc, Age 18-25", seats: "800+ annually", desc: "Entry-level police officer position with path to Sub-Inspector promotion." },
    { title: "Junior Clerk", scale: "BPS-11", dept: "Various Punjab Departments", eligibility: "FA/FSc minimum, Computer skills", seats: "600+ annually", desc: "Clerical and data entry work across Punjab government departments. Stable government employment with regular increments." },
  ];
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <nav className="text-sm text-blue-300 mb-4"><Link href="/">Home</Link> / <Link href="/jobs">Jobs</Link> / <Link href="/jobs/government">Government</Link> / <span>PPSC</span></nav>
          <h1 className="text-4xl font-bold mb-3">PPSC Jobs — Punjab Public Service Commission</h1>
          <p className="text-blue-100 text-lg max-w-3xl">Latest job advertisements from the Punjab Public Service Commission. Lecturer, Sub-Inspector, Assistant, Tax Officer, Junior Clerk, and hundreds of other Punjab government posts.</p>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">About PPSC</h2>
        <p className="text-gray-700 leading-relaxed mb-4">The Punjab Public Service Commission (PPSC) is the largest provincial public service commission in Pakistan, responsible for recruiting qualified candidates for positions in Punjab government departments, attached departments, and autonomous bodies. PPSC recruits for a wider range of positions than FPSC — from BPS-11 junior clerk positions all the way to BPS-17 officer posts — making it the most accessible route to government employment for Punjab-domicile holders across all qualification levels.</p>
        <p className="text-gray-700 leading-relaxed mb-8">PPSC advertisements are published on the official PPSC website at ppsc.gop.pk, in major Punjabi newspapers including Jang and Nawa-i-Waqt, and on Taleem4u. Applications are submitted online through the PPSC portal. Application fees range from PKR 500 to PKR 1,500 depending on the post grade.</p>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular PPSC Posts</h2>
        <div className="space-y-4 mb-12">
          {posts.map((p, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition">
              <h3 className="font-bold text-gray-900 text-lg mb-1">{p.title}</h3>
              <p className="text-sm text-gray-700 mb-3">{p.desc}</p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{p.scale}</span>
                <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full">{p.dept}</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full">{p.eligibility}</span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">Seats: {p.seats}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">PPSC General Paper Syllabus</h2>
          <p className="text-gray-700 text-sm mb-3">Most PPSC written tests cover these core subject areas. Weightage varies by post:</p>
          <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
            <div>• General Knowledge (30-40%)</div><div>• Pakistan Studies (15-20%)</div>
            <div>• Islamic Studies / Islamiyat (10-15%)</div><div>• English Grammar (15-20%)</div>
            <div>• Current Affairs (10-15%)</div><div>• Mathematics / Everyday Science (10%)</div>
          </div>
        </div>
        <div className="flex gap-4 flex-wrap">
          <Link href="/prep/ppsc" className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">PPSC Prep Guide</Link>
          <Link href="/past-papers/ppsc" className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">PPSC Past Papers</Link>
          <Link href="/jobs/government" className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition">All Government Jobs</Link>
        </div>
      </section>
    </div>
  );
}
