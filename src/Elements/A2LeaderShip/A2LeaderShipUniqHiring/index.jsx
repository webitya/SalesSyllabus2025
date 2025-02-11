import { Card } from "antd";
import { UsergroupAddOutlined, SolutionOutlined, DatabaseOutlined, BarChartOutlined } from "@ant-design/icons";

const leadershipHiring = [
  {
    title: "Multi-Channel Sourcing Strategy",
    icon: <UsergroupAddOutlined className="text-5xl text-blue-600" />,
    description:
      "We leverage multiple sourcing channels, from executive search and networking to targeted headhunting, to identify the best-fit sales and marketing leaders for your organization.",
  },
  {
    title: "Relationship-Driven Offline Engagement",
    icon: <SolutionOutlined className="text-5xl text-green-600" />,
    description:
      "Our recruitment specialists build strong, long-term relationships with industry leaders, ensuring that we bring in the best talent, even before they enter the job market.",
  },
  {
    title: "Data-Driven Decision Making",
    icon: <DatabaseOutlined className="text-5xl text-yellow-600" />,
    description:
      "Our proprietary Sales & Marketing Leadership Assessment evaluates candidates on 30+ critical sales and marketing leadership skills, ensuring we match you with a leader who excels in performance, strategy, and team management.",
  },
  {
    title: "Productivity Insights for Long-Term Success",
    icon: <BarChartOutlined className="text-5xl text-red-600" />,
    description:
      "Beyond hiring, our assessment provides valuable productivity insights, helping organizations understand how to optimize the sales and marketing leader’s strengths and enhance team efficiency.",
  },
];

export default function A2LeaderShipUniqHiring() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
          Sales and Marketing Leadership Hiring Through Sales Syllabus
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          Our sales and marketing leadership hiring process ensures that companies bring in the right talent to fuel growth and long-term success.
        </p>

        {/* Card Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {leadershipHiring.map((item, index) => (
            <Card key={index} className="shadow-lg rounded-xl border p-6 bg-gray-50 flex flex-col items-center text-center">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
