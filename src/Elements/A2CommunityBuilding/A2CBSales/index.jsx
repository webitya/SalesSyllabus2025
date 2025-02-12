import { Card } from "antd";
import { BulbOutlined, SafetyCertificateOutlined, SyncOutlined } from "@ant-design/icons";

const futureB2BSalesData = [
  {
    icon: <BulbOutlined style={{ fontSize: '24px', color: '#1890ff' }} />,
    title: "The Shift Towards Research-Driven Sales",
    description:
      "By 2030, 80% of B2B sales are projected to be insight-led, with decision-makers relying on in-depth research, trust, and engagement rather than traditional sales pitches.",
  },
  {
    icon: <SafetyCertificateOutlined style={{ fontSize: '24px', color: '#52c41a' }} />,
    title: "Building Trust & Enhancing Brand Experience",
    description:
      "Communities help foster credibility and establish businesses as industry thought leaders, making them the preferred choice for customers.",
  },
  {
    icon: <SyncOutlined style={{ fontSize: '24px', color: '#faad14' }} spin />,
    title: "Sustainability & Market Adaptability",
    description:
      "Unlike traditional sales approaches, community-driven strategies evolve with market trends, ensuring longevity and relevance.",
  },
];

export default function A2CBSales() {
  return (
    <div className=" mx-auto pt-20 pb-5 p-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Why Community Building is the Future of B2B Sales
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {futureB2BSalesData.map((item, index) => (
          <Card
            key={index}
            bordered={true}
            className="shadow-lg rounded-lg text-center"
          >
            <div className="flex flex-col items-center space-y-4">
              {item.icon}
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
