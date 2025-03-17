import { Card } from "antd";
import { BookOutlined, BulbOutlined, RiseOutlined, DollarOutlined, BarChartOutlined, SolutionOutlined } from "@ant-design/icons";

const topics = [
  {
    title: "Business Understanding",
    icon: <BookOutlined className="text-4xl text-blue-800" />,
  },
  {
    title: "Finding Inefficiency & Defining Target Market",
    icon: <BulbOutlined className="text-4xl text-gray-700" />,
  },
  {
    title: "Value Identification & Creation",
    icon: <RiseOutlined className="text-4xl text-yellow-600" />,
  },
  {
    title: "Mapping Efficiency to Cost",
    icon: <DollarOutlined className="text-4xl text-green-600" />,
  },
  {
    title: "Competitor Analysis",
    icon: <BarChartOutlined className="text-4xl text-red-600" />,
  },
  {
    title: "Probing & Sales Conversation",
    icon: <SolutionOutlined className="text-4xl text-purple-600" />,
  },
];

export default function ContinuousLearningProgram() {
  return (
    <div className="py-10 bg-gray-300 px-6 md:px-12 text-center">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">
        Continuous Learning Program
      </h2>
      <p className="text-lg text-gray-600 my-5">
        Focused on ongoing growth, this program delivers industry knowledge and market insights through short, concise lessons, featuring business case studies and proven sales and marketing strategies.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {topics.map((topic, index) => (
          <Card
            key={index}
            className="rounded-lg shadow-md border border-gray-300 bg-white hover:shadow-xl transition-all"
          >
            <div className="flex flex-col items-center text-center p-5">
              {topic.icon}
              <h3 className="text-lg font-semibold text-gray-900 mt-3">{topic.title}</h3>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}