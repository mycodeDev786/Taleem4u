import Link from "next/link";
export const metadata = {
  title: "ECE Books | Early Childhood Education | Free PDF | Taleem4u",
  description: "Free Early Childhood Education (ECE) materials for Pakistan government pre-school programs. Play-based learning, language development, numeracy, and social-emotional skills for children aged 3-5.",
  keywords: "ECE books pakistan, early childhood education, pre-school books pakistan, ECE curriculum PCTB",
  alternates: { canonical: "https://taleem4u.com/books/primary-elementary/ece" },
};
export default function ECEPage() {
  const domains = [
    { name: "Language & Literacy", icon: "📖", desc: "Oral language development through stories, songs, and conversation. Pre-reading skills including print awareness, phonological awareness, and alphabet knowledge. Early writing through drawing, scribbling, and letter tracing. Building vocabulary in both Urdu and English through daily shared reading.", skills: "Listening, speaking, pre-reading, pre-writing" },
    { name: "Numeracy & Mathematics", icon: "🔢", desc: "Counting and number recognition from 1 to 20, sorting and classifying objects by shape, size, and colour, introduction to basic patterns and sequences, comparing quantities using more, less, and equal, and measurement through hands-on activities with everyday objects.", skills: "Counting, sorting, patterns, comparison" },
    { name: "Personal & Social Development", icon: "🤝", desc: "Building self-awareness and confidence, learning to share, take turns, and cooperate with peers, developing independence in self-care routines, understanding and expressing emotions appropriately, and respecting and appreciating differences among classmates.", skills: "Self-regulation, cooperation, empathy" },
    { name: "Physical Development", icon: "🏃", desc: "Gross motor skills through outdoor play — running, jumping, throwing, catching, and balancing. Fine motor skills through drawing, cutting, threading beads, playdough manipulation, and puzzles. Developing hand-eye coordination and body awareness through structured movement activities.", skills: "Gross motor, fine motor, coordination" },
    { name: "Islamic & Moral Values", icon: "🕌", desc: "Introduction to basic Islamic concepts appropriate for young children — the names of Allah, the Prophet (PBUH), Bismillah, and simple daily duas. Development of Islamic character traits including honesty, kindness, sharing, and respect for elders through age-appropriate stories and role-play.", skills: "Islamic values, character, duas" },
    { name: "Creative Arts & Exploration", icon: "🎨", desc: "Free exploration through painting, drawing, collage, and construction with recycled materials. Music and movement — songs, rhymes, and simple instruments. Dramatic play and role-play to develop imagination, language, and social skills. Science exploration through observation of nature, plants, animals, and simple experiments.", skills: "Creativity, imagination, curiosity" },
  ];
  const principles = [
    { t: "Play Is How Children Learn", b: "ECE research consistently shows that play-based learning produces superior outcomes compared to formal academic instruction for children under 6. The ECE curriculum is deliberately structured around play — parents and teachers should support and extend play rather than replace it with worksheets." },
    { t: "Every Child Develops at Their Own Pace", b: "The developmental milestones in the ECE curriculum are guides, not strict benchmarks. Some children speak in complete sentences at 3; others develop this skill at 4. Some master letter recognition at 4; others need until 5. Patience and encouragement matter far more than comparison." },
    { t: "Home Language First, Then English", b: "ECE research from Pakistan and internationally consistently shows that children who develop strong oral foundations in their home language (Urdu, Punjabi, Sindhi, Pashto) before formal English instruction develop stronger literacy in both languages. Do not rush English at the expense of home language development." },
    { t: "Relationships Are the Curriculum", b: "The quality of the relationship between child and caregiver — parent or teacher — is the single greatest predictor of early childhood development outcomes. Warmth, responsiveness, and genuine engagement matter more than any specific activity or material." },
  ];
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <nav className="text-sm text-pink-200 mb-4">
            <Link href="/">Home</Link> / <Link href="/books">Books</Link> / <Link href="/books/primary-elementary">Primary</Link> / <span>ECE</span>
          </nav>
          <h1 className="text-4xl font-bold mb-3">ECE — Early Childhood Education</h1>
          <p className="text-pink-50 text-lg max-w-2xl">Free Early Childhood Education materials for Pakistan government pre-school programs. Play-based learning resources for children aged 3 to 5, covering all six ECE development domains.</p>
          <div className="mt-6 flex gap-3 text-sm flex-wrap">
            <span className="bg-white/20 px-3 py-1.5 rounded-full">Ages 3–5</span>
            <span className="bg-white/20 px-3 py-1.5 rounded-full">Play-Based Learning</span>
            <span className="bg-white/20 px-3 py-1.5 rounded-full">All 6 Domains</span>
          </div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">What Is ECE?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Early Childhood Education (ECE) refers to educational programs designed for children from birth to age 8, with Pakistan's government ECE programs focusing primarily on children aged 3 to 5 in the year before formal Class 1 entry. The Government of Pakistan has integrated ECE into public primary schools across all provinces, recognising the critical importance of the earliest years of life for long-term educational outcomes and life success.</p>
        <p className="text-gray-700 leading-relaxed mb-8">Research consistently shows that children who attend quality ECE programs arrive at Class 1 better prepared to learn, more able to cooperate with peers and teachers, and more likely to remain in school through the primary years. Investments in ECE produce some of the highest returns of any educational spending — with benefits that compound through the child's entire educational career and into adult life.</p>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">ECE Development Domains</h2>
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {domains.map((d, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition">
              <div className="flex items-start gap-3 mb-2">
                <span className="text-2xl flex-shrink-0">{d.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900">{d.name}</h3>
                  <p className="text-xs text-purple-600 font-medium">{d.skills}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">{d.desc}</p>
              <button className="text-xs bg-purple-600 text-white px-4 py-1.5 rounded-full hover:bg-purple-700 transition">Download Materials</button>
            </div>
          ))}
        </div>
        <div className="bg-purple-50 rounded-lg p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Core Principles for ECE Parents &amp; Teachers</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {principles.map((p, i) => (
              <div key={i} className="bg-white rounded-lg p-5 border border-purple-200 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{p.t}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-4 flex-wrap justify-between">
          <Link href="/books/primary-elementary/nursery" className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">← Nursery Books</Link>
          <Link href="/books/primary-elementary" className="bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition">All Primary Classes</Link>
          <Link href="/books/primary-elementary/class1" className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">Class 1 Books →</Link>
        </div>
      </section>
    </div>
  );
}
