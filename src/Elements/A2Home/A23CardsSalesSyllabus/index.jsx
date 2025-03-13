import { Card } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

const sections = [
  {
    title: "Knowledge Consulting",
    subtitle: "Revenue Acceleration Consulting",
    description:
      "Gain deep industry insights for lead generation, Sales closures, and sales and marketing team management.",
    points: [
      "Sales & Marketing Strategy Optimization – Develop proven, data-driven frameworks.",
      "Lead-to-Closure Process Improvement – Refine every stage of your sales funnel.",
      "Go-To-Market (GTM) Execution – Build precise strategies for market success.",
    ],
  },
  {
    title: "War Room",
    subtitle: "Real-Time Sales Execution & Strategy Support",
    description:
      "A high-impact, hands-on problem-solving environment where your sales and marketing teams get:",
    points: [
      "Live Deal-Closing Support – Tactical coaching for high-stakes negotiations.",
      "Problem Discussion platform – Gain access to top leadership talent in sales and marketing.",
      "Tactical Sales Playbooks – Execute winning strategies for different sales and marketing scenarios.",
    ],
  },
  {
    title: "Sales-Ready Talent",
    subtitle: "Pre-Trained Sales Professionals",
    description:
      "Hire industry-specific sales professionals trained on real-world strategies, ready to drive results from day one.",
    points: [
      "Pre-Trained & Industry-Ready Sales Talent – Skip the learning curve, start selling immediately.",
      "Sales Performance Support & Coaching – Continuous skill development for sustained success.",
    ],
  },
];

export default function SalesSyllabus() {
  return (
    <div className="bg-gray-100 py-10 px-5 md:px-20">
      <h1 className="text-3xl md:text-3xl font-bold text-center text-blue-600 mb-8">
        Unlock Sales Excellence with Sales Syllabus
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <Card
            key={index}
            className="rounded-2xl shadow-lg border-blue-500 hover:shadow-xl transition-all min-w-[300px]"
            title={
              <div>
                <h2 className="text-xl font-semibold text-blue-700 break-words whitespace-normal">
                  {section.title}
                </h2>
                <h3 className="text-md font-medium text-gray-600 break-words whitespace-normal">
                  {section.subtitle}
                </h3>
              </div>
            }
          >
            <p className="text-gray-700 mb-4 md:whitespace-normal">
              {section.description}
            </p>
            <ul className="space-y-2">
              {section.points.map((point, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-900">
                  <CheckCircleOutlined className="text-green-500" /> {point}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}