import Link from "next/link";

export const metadata = {
  title: "Contact Us | Taleem4u",
  description:
    "Get in touch with Taleem4u for queries, feedback, or partnership opportunities. We're here to help!",
  keywords: "contact taleem4u, feedback, support, partnership",
  alternates: {
    canonical: "https://taleem4u.com/contact",
  },
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-emerald-100 max-w-3xl">
            Have questions, feedback, or want to collaborate? We'd love to hear
            from you. Reach out to us anytime!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Email */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center border-t-4 border-emerald-600">
            <div className="text-4xl mb-4">✉️</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 mb-4">
              For general inquiries and feedback
            </p>
            <a
              href="mailto:info@taleem4u.com"
              className="text-emerald-600 font-semibold hover:text-emerald-700"
            >
              info@taleem4u.com
            </a>
          </div>

          {/* Support */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center border-t-4 border-blue-600">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Support</h3>
            <p className="text-gray-600 mb-4">
              For technical support and issues
            </p>
            <a
              href="mailto:support@taleem4u.com"
              className="text-blue-600 font-semibold hover:text-blue-700"
            >
              support@taleem4u.com
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center border-t-4 border-green-600">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp</h3>
            <p className="text-gray-600 mb-4">Quick response via WhatsApp</p>
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-semibold hover:text-green-700"
            >
              +92 300 XXXXXX
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Send us a Message
          </h2>

          <form className="bg-white rounded-lg shadow-lg p-8 space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                placeholder="your@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                placeholder="+92 300 XXXXXXX"
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
              >
                <option value="">Select a subject</option>
                <option value="feedback">General Feedback</option>
                <option value="technical">Technical Issue</option>
                <option value="content">Content Suggestion</option>
                <option value="partnership">Partnership Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                placeholder="Please share your message, feedback, or inquiry..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white font-semibold py-3 rounded-lg hover:bg-emerald-700 transition"
            >
              Send Message
            </button>

            <p className="text-sm text-gray-500 text-center">
              We'll get back to you within 24-48 hours.
            </p>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              How can I contribute content to Taleem4u?
            </h3>
            <p className="text-gray-700">
              We welcome contributions from educators, subject matter experts,
              and qualified individuals. Please reach out to us via email or
              WhatsApp to discuss collaboration opportunities.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Are all resources on Taleem4u free?
            </h3>
            <p className="text-gray-700">
              Yes, all study materials, guides, and resources on Taleem4u are
              completely free for students. We believe education should be
              accessible to everyone.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              How often are new resources added?
            </h3>
            <p className="text-gray-700">
              We regularly update our content with new study materials, job
              listings, scholarships, and guides. Follow us on social media to
              stay updated with the latest additions.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Can I request specific study materials?
            </h3>
            <p className="text-gray-700">
              Absolutely! We welcome suggestions for new study materials and
              topics. Please send us your requests through the contact form or
              email, and we'll work on fulfilling them.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              How can I report broken links or incorrect information?
            </h3>
            <p className="text-gray-700">
              If you find any broken links or errors in our content, please
              report them to support@taleem4u.com with details. We appreciate
              your feedback and will fix them immediately.
            </p>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Follow Us</h2>
          <p className="mb-8">Stay connected for latest updates and new content</p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="#"
              className="bg-white text-emerald-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Facebook
            </a>
            <a
              href="#"
              className="bg-white text-emerald-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Instagram
            </a>
            <a
              href="#"
              className="bg-white text-emerald-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Twitter
            </a>
            <a
              href="#"
              className="bg-white text-emerald-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
