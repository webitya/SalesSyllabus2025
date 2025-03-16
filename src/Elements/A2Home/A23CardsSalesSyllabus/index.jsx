import { Button, Card } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "Learning Centre",
    subtitle: "Build with real market knowledge and insights",
    description:
      "Gain deep industry insights for lead generation, Sales closures, and sales and marketing team management.",
    points: [
      "Self-learning foundation courses – on sales and marketing.",
      "Real-time business cases – to enhance industry understanding and best practices for sales and marketing.",
      "Monthly updates – with new and relevant business case-based learning.",
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

const cardGradients = [
  "bg-gradient-to-br from-blue-600 to-blue-400",
  "bg-gradient-to-br from-blue-600 to-blue-400",
  "bg-gradient-to-br from-blue-600 to-blue-400",
];

export default function SalesSyllabus() {
  return (
    <div className="bg-gray-100 py-16 px-6 md:px-20">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-12 tracking-wide">
        Unlock Sales Excellence
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((section, index) => (
          <Card
            key={index}
            className={`rounded-3xl shadow-xl border-none overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl ${cardGradients[index % cardGradients.length]}`}
            title={
              <div className="text-white">
                <h2 className="text-2xl ">{section.title}</h2>
                <h3 className="text font-medium opacity-90 break-words whitespace-normal">{section.subtitle}</h3>
              </div>
            }
          >
            <div className="text-white flex flex-col justify-between h-full">
              <div>
                <p className="text-md mb-4 opacity-90">{section.description}</p>
                <ul className="space-y-2">
                  {section.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircleOutlined className="text-white bg-blue-700 rounded-full p-1 text-lg" /> {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <Link to="https://calendly.com/salessyllabus" target="_blank">
                  <Button className="bg-white text-blue-700 hover:text-blue-900">Book Appointment</Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
