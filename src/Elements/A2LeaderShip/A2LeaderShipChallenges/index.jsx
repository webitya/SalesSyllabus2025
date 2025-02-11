import { Card } from "antd";
import { 
  LineChartOutlined, 
  UserDeleteOutlined, 
  CompassOutlined, 
  WarningOutlined 
} from "@ant-design/icons";

const challenges = [
  {
    title: "Revenue Stagnation",
    icon: <LineChartOutlined className="text-5xl text-red-500" />,
    description:
      "Weak sales and marketing leadership results in ineffective decision-making, poor team motivation, and declining sales performance.",
  },
  {
    title: "High Turnover",
    icon: <UserDeleteOutlined className="text-5xl text-yellow-500" />,
    description:
      "Hiring misfits leads to costly rehiring cycles and lost productivity.",
  },
  {
    title: "Misaligned Strategy",
    icon: <CompassOutlined className="text-5xl text-blue-500" />,
    description:
      "A sales and marketing leader without the right vision can derail long-term business goals and hinder scalability.",
  },
  {
    title: "Operational Inefficiencies",
    icon: <WarningOutlined className="text-5xl text-green-500" />,
    description:
      "Poor leadership leads to ineffective sales execution, weak pipeline management, and declining customer engagement.",
  },
];

export default function A2LeaderShipChallenges() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Challenges of Poor Sales and Marketing Leadership Hiring
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((item, index) => (
            <Card
              key={index}
              className="shadow-lg rounded-xl border p-6 bg-white flex flex-col items-center text-center"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
