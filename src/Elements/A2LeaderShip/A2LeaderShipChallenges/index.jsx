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
    icon: <LineChartOutlined className="text-3xl text-red-500" />,
    description:
      "Weak sales and marketing leadership leads to poor decisions and declining sales.",
  },
  {
    title: "High Turnover",
    icon: <UserDeleteOutlined className="text-3xl text-yellow-500" />,
    description:
      "Hiring misfits causes costly rehiring cycles and lost productivity.",
  },
  {
    title: "Misaligned Strategy",
    icon: <CompassOutlined className="text-3xl text-blue-500" />,
    description:
      "Lack of vision in leadership can hinder scalability and growth.",
  },
  {
    title: "Operational Inefficiencies",
    icon: <WarningOutlined className="text-3xl text-green-500" />,
    description:
      "Weak execution leads to poor pipeline management and customer disengagement.",
  },
];

export default function A2LeaderShipChallenges() {
  return (
    <section className="bg-gray-50 pt-20 pb-5 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Sales & Marketing Leadership Challenges
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {challenges.map((item, index) => (
            <Card
              key={index}
              className="shadow-md rounded-lg p-4 bg-white flex flex-col items-center text-center border-none"
            >
              <div className="mb-2">{item.icon}</div>
              <h3 className="text-lg font-medium text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
