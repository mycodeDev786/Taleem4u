import Link from "next/link";

export const metadata = {
  title: "How to Prepare for MDCAT Exam - Complete Guide | Taleem4u",
  description:
    "Comprehensive MDCAT preparation guide covering study strategies, syllabus breakdown, time management, practice tests, and expert tips to ace the exam.",
  keywords:
    "MDCAT preparation, MDCAT guide, MDCAT study tips, MDCAT exam strategy",
};

export default function MDCATGuide() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>{" "}
            / <Link href="/guides">Guides</Link> / MDCAT Preparation
          </nav>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-8">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
              Test Preparation
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How to Prepare for MDCAT Exam in Pakistan: Complete Guide
          </h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span>📅 May 10, 2024</span>
            <span>⏱️ 8 min read</span>
            <span>✏️ By Taleem4u Team</span>
          </div>
        </header>

        {/* Table of Contents */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8 border border-gray-200">
          <h2 className="text-lg font-semibold mb-4 text-gray-900">
            Table of Contents
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>
              <a href="#what-is-mdcat" className="text-blue-600 hover:underline">
                What is MDCAT?
              </a>
            </li>
            <li>
              <a
                href="#exam-structure"
                className="text-blue-600 hover:underline"
              >
                Exam Structure & Syllabus
              </a>
            </li>
            <li>
              <a href="#study-plan" className="text-blue-600 hover:underline">
                Creating Your Study Plan
              </a>
            </li>
            <li>
              <a href="#subject-wise" className="text-blue-600 hover:underline">
                Subject-wise Preparation
              </a>
            </li>
            <li>
              <a href="#tips" className="text-blue-600 hover:underline">
                Expert Tips & Tricks
              </a>
            </li>
            <li>
              <a href="#practice" className="text-blue-600 hover:underline">
                Practice Tests & Resources
              </a>
            </li>
          </ul>
        </div>

        {/* Content Sections */}
        <section id="what-is-mdcat" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What is MDCAT?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Medical and Dental College Admission Test (MDCAT) is a
            standardized entrance examination in Pakistan designed to assess the
            scientific knowledge and aptitude of students aspiring to pursue
            medical and dental education. It's conducted by various provincial
            medical commissions and universities across Pakistan.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Securing a high score in MDCAT is crucial as it determines your
            eligibility for admission to prestigious medical and dental colleges
            in Pakistan and sometimes abroad. The competition is intense, with
            thousands of students competing for limited seats.
          </p>
          <p className="text-gray-700 leading-relaxed">
            A well-planned preparation strategy, consistent effort, and access
            to quality resources are essential to achieve success in MDCAT.
          </p>
        </section>

        <section id="exam-structure" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Exam Structure & Syllabus
          </h2>

          <div className="bg-blue-50 p-6 rounded-lg mb-6 border-l-4 border-blue-600">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Test Duration & Question Format
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Total Duration:</strong> 3 hours 30 minutes
              </li>
              <li>
                <strong>Total Questions:</strong> 220 Multiple Choice Questions
              </li>
              <li>
                <strong>Question Format:</strong> Single correct answer MCQs
              </li>
              <li>
                <strong>Negative Marking:</strong> Yes (usually 1 mark per
                incorrect answer)
              </li>
              <li>
                <strong>Total Marks:</strong> 220
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Subject Distribution
          </h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Subject
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-center">
                    Questions
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-center">
                    Weightage
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Biology</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    88
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    40%
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Chemistry</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    66
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    30%
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Physics</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    66
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    30%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="study-plan" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Creating Your 12-Month Study Plan
          </h2>

          <div className="space-y-6">
            <div className="bg-white border-l-4 border-emerald-600 p-6 rounded">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Months 1-3: Foundation Building
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>
                  ✓ Complete syllabus coverage for all three subjects from basic
                  concepts
                </li>
                <li>✓ Focus on understanding rather than memorization</li>
                <li>✓ Solve exercise problems from standard textbooks</li>
                <li>✓ Make comprehensive notes for quick revision</li>
              </ul>
            </div>

            <div className="bg-white border-l-4 border-blue-600 p-6 rounded">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Months 4-6: Deep Learning & Concept Clarity
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Deepen your understanding of complex topics</li>
                <li>✓ Practice numerical problems extensively</li>
                <li>✓ Complete at least one full-length practice test monthly</li>
                <li>✓ Identify weak areas and focus on them</li>
              </ul>
            </div>

            <div className="bg-white border-l-4 border-orange-600 p-6 rounded">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Months 7-9: Integration & Practice
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Solve mixed topic problems</li>
                <li>✓ Practice 2-3 full-length tests weekly</li>
                <li>✓ Review mistakes and understand correct approaches</li>
                <li>✓ Work on speed and accuracy</li>
              </ul>
            </div>

            <div className="bg-white border-l-4 border-red-600 p-6 rounded">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Months 10-12: Revision & Final Polish
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Revision of all concepts and formulas</li>
                <li>✓ Daily practice tests under exam conditions</li>
                <li>✓ Focus on exam strategy and time management</li>
                <li>✓ Final review of commonly missed topics</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="subject-wise" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Subject-wise Preparation Strategy
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-emerald-700">
                Biology Preparation (40% of the exam)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Biology is the most important subject in MDCAT with 88 questions
                out of 220. Success in biology directly impacts your overall
                score significantly.
              </p>
              <div className="bg-emerald-50 p-4 rounded mb-4">
                <p className="font-semibold text-gray-900 mb-2">Key Topics:</p>
                <ul className="text-gray-700 text-sm">
                  <li>
                    • Cell Structure & Organization (Chapters 1-2)
                  </li>
                  <li>
                    • Homeostasis & Regulation (Chapters 3-4)
                  </li>
                  <li>
                    • Metabolism & Enzymes (Chapters 5-6)
                  </li>
                  <li>
                    • Reproduction & Genetics (Chapters 7-10)
                  </li>
                  <li>
                    • Evolution & Ecology (Chapters 11-15)
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <strong>Preparation Tips:</strong> Focus on understanding
                biological processes rather than rote memorization. Draw
                diagrams extensively. Use active recall to test your knowledge.
                Practice biology-specific MCQs at least 2 hours daily.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-blue-700">
                Chemistry Preparation (30% of the exam)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Chemistry comprises 66 questions and requires both conceptual
                understanding and problem-solving skills, particularly in
                organic and physical chemistry.
              </p>
              <div className="bg-blue-50 p-4 rounded mb-4">
                <p className="font-semibold text-gray-900 mb-2">
                  Key Topics:
                </p>
                <ul className="text-gray-700 text-sm">
                  <li>
                    • Atomic Structure & Periodic Table (Chapters 1-3)
                  </li>
                  <li>
                    • Chemical Bonding & Molecular Geometry (Chapters 4-6)
                  </li>
                  <li>
                    • Thermodynamics & Kinetics (Chapters 7-8)
                  </li>
                  <li>
                    • Equilibrium & Acid-Base Chemistry (Chapters 9-10)
                  </li>
                  <li>
                    • Organic Chemistry (Chapters 12-17)
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <strong>Preparation Tips:</strong> Solve numerical problems
                regularly. Master reaction mechanisms in organic chemistry.
                Practice balancing equations. Create formula sheets and
                memorization cards.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-purple-700">
                Physics Preparation (30% of the exam)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Physics also comprises 66 questions and requires strong
                conceptual understanding combined with mathematical problem-solving
                abilities.
              </p>
              <div className="bg-purple-50 p-4 rounded mb-4">
                <p className="font-semibold text-gray-900 mb-2">
                  Key Topics:
                </p>
                <ul className="text-gray-700 text-sm">
                  <li>
                    • Mechanics: Motion, Forces, Work & Energy (Chapters 1-5)
                  </li>
                  <li>
                    • Rotational Motion & Fluids (Chapters 6-7)
                  </li>
                  <li>
                    • Waves & Sound (Chapters 8-9)
                  </li>
                  <li>
                    • Thermodynamics (Chapter 10)
                  </li>
                  <li>
                    • Electromagnetism (Chapters 11-14)
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <strong>Preparation Tips:</strong> Solve numerical problems daily.
                Understand physics principles visually. Practice graphical
                representation. Work through past papers extensively.
              </p>
            </div>
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Expert Tips & Tricks for Success
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-lg border border-emerald-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                💡 Study Strategy
              </h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>✓ Study during your peak hours</li>
                <li>✓ Take regular 5-10 minute breaks</li>
                <li>✓ Use active recall techniques</li>
                <li>✓ Create concept maps for better understanding</li>
                <li>✓ Join study groups for peer learning</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                ⏰ Time Management
              </h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>✓ Study at least 4-5 hours daily</li>
                <li>✓ Create a realistic daily schedule</li>
                <li>✓ Balance all three subjects equally</li>
                <li>✓ Allocate more time to weak areas</li>
                <li>✓ Keep 1-2 days for revision weekly</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                📝 Test-Taking Strategies
              </h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>✓ Read questions carefully</li>
                <li>✓ Eliminate obviously wrong answers</li>
                <li>✓ Don't spend too long on one question</li>
                <li>✓ Answer easier questions first</li>
                <li>✓ Review your answers if time permits</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-lg border border-pink-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                🎯 Mindset & Motivation
              </h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>✓ Maintain a positive attitude</li>
                <li>✓ Set realistic milestones</li>
                <li>✓ Celebrate small victories</li>
                <li>✓ Don't compare with others</li>
                <li>✓ Stay healthy and exercise regularly</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="practice" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Practice Tests & Resources
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Consistent practice is the key to MDCAT success. Here are the
            essential resources you should use:
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-white border border-gray-300 rounded-lg">
              <h3 className="font-semibold text-gray-900">Previous Years Papers</h3>
              <p className="text-gray-600 text-sm mt-2">
                Solve at least 5-10 years of previous MDCAT papers to understand
                the question patterns and exam format.
              </p>
            </div>

            <div className="p-4 bg-white border border-gray-300 rounded-lg">
              <h3 className="font-semibold text-gray-900">Mock Tests</h3>
              <p className="text-gray-600 text-sm mt-2">
                Take full-length mock tests under exam conditions. Aim for at
                least 50+ mock tests before the actual exam.
              </p>
            </div>

            <div className="p-4 bg-white border border-gray-300 rounded-lg">
              <h3 className="font-semibold text-gray-900">Study Materials</h3>
              <p className="text-gray-600 text-sm mt-2">
                Use standard textbooks, coaching notes, and online resources like
                Taleem4u for comprehensive study material.
              </p>
            </div>

            <div className="p-4 bg-white border border-gray-300 rounded-lg">
              <h3 className="font-semibold text-gray-900">Subject-wise MCQ Banks</h3>
              <p className="text-gray-600 text-sm mt-2">
                Practice subject-specific MCQs daily to build confidence and speed
                in each subject.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Final Thoughts</h2>
          <p className="leading-relaxed mb-4">
            MDCAT preparation requires dedication, consistency, and the right
            strategy. Remember that success is not about perfection but about
            continuous improvement. Focus on understanding concepts, practice
            extensively, and maintain your mental and physical health throughout
            your preparation journey.
          </p>
          <p className="leading-relaxed">
            With proper planning and effort, you can achieve your dream of
            becoming a doctor. Best of luck with your MDCAT preparation!
          </p>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/guides/medical-career-guide"
              className="p-4 bg-gray-50 rounded-lg hover:shadow-md transition border border-gray-200"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                Medical Career Guide: From MDCAT to Specialization
              </h3>
              <p className="text-sm text-gray-600">
                Learn the complete pathway for aspiring doctors...
              </p>
            </Link>
            <Link
              href="/guides"
              className="p-4 bg-gray-50 rounded-lg hover:shadow-md transition border border-gray-200"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                More Study Guides
              </h3>
              <p className="text-sm text-gray-600">
                Explore our complete collection of study guides...
              </p>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
