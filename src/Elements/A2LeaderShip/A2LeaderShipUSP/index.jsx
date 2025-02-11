import { BulbOutlined, SafetyOutlined, TeamOutlined } from "@ant-design/icons";

export default function A2LeadershipMentoringUSP() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold mb-4">
          Our Exclusive USP: Complimentary Sales and Marketing Leadership Mentoring
        </h2>
        <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-12">
          Unlike traditional hiring firms, we go beyond recruitment. With every sales and marketing leadership hire, we offer complimentary mentoring to ensure your new leader seamlessly integrates, adapts, and delivers results from day one.
        </p>

        {/* Three Key Benefits Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 - Reduced Hiring Risks */}
          <div className="flex flex-col items-center text-center p-6 bg-white/20 rounded-xl shadow-lg">
            <BulbOutlined className="text-5xl text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold">Reduced Hiring Risks</h3>
            <p className="text-gray-200 mt-2">
              Our structured mentoring program ensures your new leader aligns with company goals and avoids common leadership pitfalls.
            </p>
          </div>

          {/* Card 2 - Stronger Leadership Skills */}
          <div className="flex flex-col items-center text-center p-6 bg-white/20 rounded-xl shadow-lg">
            <TeamOutlined className="text-5xl text-green-400 mb-4" />
            <h3 className="text-xl font-semibold">Stronger Leadership Skills</h3>
            <p className="text-gray-200 mt-2">
              We help leaders develop key leadership competencies to drive strategy, inspire teams, and maximize business impact.
            </p>
          </div>

          {/* Card 3 - Long-Term Success */}
          <div className="flex flex-col items-center text-center p-6 bg-white/20 rounded-xl shadow-lg">
            <SafetyOutlined className="text-5xl text-red-400 mb-4" />
            <h3 className="text-xl font-semibold">Long-Term Success</h3>
            <p className="text-gray-200 mt-2">
              Our mentoring ensures lasting leadership success, reducing costly hiring mistakes and ensuring business growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
