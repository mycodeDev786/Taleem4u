export const metadata = {
  title: "Contact Us – Taleem4u | Get in Touch",
  description:
    "Contact the Taleem4u team for any queries about admissions, scholarships, jobs, or study materials. We are here to help Pakistani students and job seekers.",
  alternates: { canonical: "https://www.taleem4u.com/contact" },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 px-6">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question about a scholarship, need help finding study materials, or want to report an issue? 
            Our team is here to help. Reach out through any of the channels below.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-5">Get in Touch</h2>
              <div className="space-y-4">
                {[
                  { label: "Email", value: "contact@taleem4u.com", icon: "✉️", href: "mailto:contact@taleem4u.com" },
                  { label: "WhatsApp", value: "+92 312 192 3183", icon: "📱", href: "https://wa.me/923121923183" },
                  { label: "Working Hours", value: "Monday – Saturday, 9 AM – 6 PM (PKT)", icon: "🕐", href: null },
                  { label: "Location", value: "Lahore, Punjab, Pakistan", icon: "📍", href: null },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-emerald-600 hover:underline font-medium">{item.value}</a>
                      ) : (
                        <p className="text-gray-700 font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-800 mb-3">Common Queries</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "Questions about scholarship applications and eligibility",
                  "Requesting study materials not yet available on the site",
                  "Reporting incorrect or outdated information",
                  "Partnership and collaboration opportunities",
                  "Advertising and sponsorship inquiries",
                  "Technical issues with the website",
                ].map((q, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">→</span>{q}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="font-bold text-gray-800 mb-3">Follow Us</h3>
              <p className="text-gray-600 text-sm mb-4">Stay updated with the latest jobs, scholarships, and educational news by following us on social media.</p>
              <div className="flex gap-3">
                {[
                  { label: "Facebook", color: "bg-blue-600", href: "#" },
                  { label: "YouTube", color: "bg-red-600", href: "#" },
                  { label: "Instagram", color: "bg-pink-600", href: "#" },
                ].map((s, i) => (
                  <a key={i} href={s.href} className={`${s.color} text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition`}>{s.label}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                <input type="text" placeholder="Your full name" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
                <input type="email" placeholder="your@email.com" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Subject *</label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option value="">Select a topic</option>
                  <option>Scholarship Query</option>
                  <option>Admission Information</option>
                  <option>Job Listing</option>
                  <option>Study Materials</option>
                  <option>Technical Issue</option>
                  <option>Partnership / Advertising</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Message *</label>
                <textarea rows={5} placeholder="Describe your query in detail..." className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none" />
              </div>
              <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition">
                Send Message
              </button>
              <p className="text-xs text-gray-400 text-center">We typically respond within 24–48 hours on working days.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
