import { Card } from "antd";
import { UsergroupAddOutlined, SolutionOutlined, DatabaseOutlined, BarChartOutlined } from "@ant-design/icons";

const leadershipHiring = [
  {
    title: "Multi-Channel Sourcing Strategy",
    icon: <UsergroupAddOutlined className="text-3xl text-blue-600" />,
    description:
      "We leverage multiple sourcing channels, from executive search and networking to targeted headhunting, to identify the best-fit sales and marketing leaders for your organization.",
  },
  {
    title: "Relationship-Driven Offline Engagement",
    icon: <SolutionOutlined className="text-3xl text-green-600" />,
    description:
      "Our recruitment specialists build strong, long-term relationships with industry leaders, ensuring that we bring in the best talent, even before they enter the job market.",
  },
  {
    title: "Data-Driven Decision Making",
    icon: <DatabaseOutlined className="text-3xl text-yellow-600" />,
    description:
      "Our proprietary Sales & Marketing Leadership Assessment evaluates candidates on 30+ critical leadership skills, ensuring we match you with a leader who excels in performance, strategy, and team management.",
  },
  {
    title: "Productivity Insights for Long-Term Success",
    icon: <BarChartOutlined className="text-3xl text-red-600" />,
    description:
      "Beyond hiring, our assessment provides valuable productivity insights, helping organizations understand how to optimize the sales and marketing leader’s strengths and enhance team efficiency.",
  },
];

export default function A2LeaderShipUniqHiring() {
  return (
    <section className="bg-white pt-20 pb-2 px-4">
      <div className=" mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
          Sales & Marketing Leadership Hiring
        </h2>
        <p className="text-base text-gray-700 text-center mb-8 max-w-2xl mx-auto">
          Our hiring process ensures companies bring in the right talent for long-term success.
        </p>

        {/* Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {leadershipHiring.map((item, index) => (
            <Card key={index} className="shadow-md rounded-lg p-4 bg-gray-50 flex flex-col items-center text-center border-none">
              <div className="mb-2">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
