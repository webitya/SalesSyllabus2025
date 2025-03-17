import { Button, Card } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./A23CardsSalesSyllabus.css"; // Import CSS file

const sections = [
  {
    title: "Learning Centre",
    subtitle: "Built with real market knowledge and insights",
    description:
      "Gain deep industry insights for lead generation, sales closures, and sales & marketing team management.",
    points: [
      "Self-learning foundation courses on sales and marketing.",
      "Real-time business cases to enhance industry understanding and best practices.",
      "Monthly updates with new and relevant business case-based learning.",
    ],
  },
  {
    title: "War Room",
    subtitle: "Real-Time Sales Execution & Strategy Support",
    description:
      "A high-impact, hands-on problem-solving environment where your sales and marketing teams get:",
    points: [
      "Live Deal-Closing Support – Tactical coaching for high-stakes negotiations.",
      "Problem Discussion Platform – Access to top leadership talent.",
      "Tactical Sales Playbooks – Execute winning strategies for different scenarios.",
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
      "We empower working professionals to be highly productive through learning based on proven marketing and sales strategies"
    ],
  },
];

export default function SalesSyllabus() {
  return (
    <div className="bg-gray-50 py-16 px-6 md:px-20">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-12 tracking-wide">
        Unlock Sales Excellence
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((section, index) => (
          <Card
            key={index}
            className="relative rounded-2xl shadow-lg bg-zinc-100 transition-transform transform hover:scale-105 hover:shadow-2xl animated-border"
            title={
              <div className="text-blue-700">
                <h2 className="text-2xl font-semibold">{section.title}</h2>
                <h3 className="text-sm font-medium opacity-80">{section.subtitle}</h3>
              </div>
            }
          >
            <div className="text-gray-700 flex flex-col justify-between h-full">
              <div>
                <p className="text-md mb-4 opacity-90">{section.description}</p>
                <ul className="space-y-2">
                  {section.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircleOutlined className="text-blue-600 text-lg" /> {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <Link to="https://calendly.com/salessyllabus" target="_blank">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700 transition-all px-6 py-2 rounded-lg">
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
