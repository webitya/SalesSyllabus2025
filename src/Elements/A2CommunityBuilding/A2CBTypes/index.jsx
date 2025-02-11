import { Card } from "antd";
import { GlobalOutlined, LaptopOutlined, MailOutlined } from "@ant-design/icons";

const communityTypes = [
  {
    title: "Comprehensive Community Platform",
    icon: <GlobalOutlined className="text-4xl text-blue-600" />,
    objective:
      "Establish a premium brand presence with high-perception value. Develop a sustainable and scalable lead generation process.",
    delivery:
      "Custom integration within the client’s existing website or development of a dedicated community platform (subject to client approval).",
    scalability: "Global",
    impact: "Large-scale",
  },


  {
    title: "Newsletter Series & Blogs",
    icon: <MailOutlined className="text-4xl text-red-600" />,
    objective:
      "Establish a consistent communication channel with prospects and customers. Enhance engagement and support lead nurturing.",
    delivery:
      "Seamless integration of newsletters and blogs with website infrastructure and email marketing tools.",
    scalability: "Regional to global",
    impact: "Steady and continuous growth",
  },

  {
    title: "Webinar Series",
    icon: <LaptopOutlined className="text-4xl text-green-600" />,
    objective:
      "Enhance brand recall and thought leadership. Generate high-quality leads through direct engagement.",
    delivery:
      "Hosting industry-specific webinar series with strategic website enhancements for optimized user experience.",
    scalability: "Global (with some limitations)",
    impact: "Moderate",
    execution: [
      "Define clear KPIs aligned with business objectives.",
      "Conduct extensive content research, finalize webinar topics, and implement supporting website modifications.",
      "Execute a multi-channel marketing strategy integrating organic and paid promotion, tailored to budget constraints.",
    ],
  },
];

export default function CommunityBuilding() {
  return (
    <div className="mx-auto md:p-10 p-2 bg-white shadow-md rounded-lg">
      <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
        Community Building Strategies
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {communityTypes.map((item, index) => (
          <Card
            key={index}
            className={`shadow-lg rounded-xl border flex flex-col justify-between h-full md:p-6 p-2 bg-gray-50 ${
              item.title === "Webinar Series" ? "md:col-span-2" : ""
            }`}
          >
            <div className="flex items-center space-x-4 mb-6">
              {item.icon}
              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Objective:</strong> {item.objective}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Delivery Approach:</strong> {item.delivery}
            </p>
            <p className="text-gray-700">
              <strong>Scalability:</strong> {item.scalability} |{" "}
              <strong>Impact:</strong> {item.impact}
            </p>
            {item.execution && (
              <div className="mt-4">
                <strong className="text-gray-800">Execution Process:</strong>
                <ul className="list-disc pl-5 text-gray-700">
                  {item.execution.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ul>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
