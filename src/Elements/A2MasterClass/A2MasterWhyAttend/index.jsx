import { StarOutlined, ExperimentOutlined, ThunderboltOutlined, TeamOutlined } from "@ant-design/icons";

const benefits = [
  { id: 1, icon: <StarOutlined className="text-blue-500 text-3xl" />, text: "Learn from Experts – Leverage the knowledge of industry veterans who have built and managed successful teams." },
  { id: 2, icon: <ExperimentOutlined className="text-blue-500 text-3xl" />, text: "Proven Frameworks – Discover our Sales Syllabus Pro Framework to optimize team performance." },
  { id: 3, icon: <ThunderboltOutlined className="text-blue-500 text-3xl" />, text: "Practical Implementation – Actionable strategies that you can apply immediately to your business." },
  { id: 4, icon: <TeamOutlined className="text-blue-500 text-3xl" />, text: "Networking Opportunity – Connect with like-minded business leaders and sales professionals." },
];

const A2MasterWhyAttend = () => {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">Why Attend This Workshop?</h2>
        <p className="mt-4 text-lg text-gray-700">
          Get practical insights, expert strategies, and networking opportunities to build a high-performance sales and marketing team.
        </p>

        {/* Benefits Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((item) => (
            <div key={item.id} className="p-6 bg-gray-50 rounded-lg shadow-md flex items-start">
              <div className="mr-4">{item.icon}</div>
              <p className="text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default A2MasterWhyAttend;
