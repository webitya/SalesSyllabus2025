import { CheckCircleOutlined, ExperimentOutlined, DollarCircleOutlined, SafetyCertificateOutlined } from "@ant-design/icons";

const benefits = [
  {
    title: "Proven Expertise",
    icon: <CheckCircleOutlined className="text-5xl text-blue-500 mb-4" />,
    description: "We have extensive experience in hiring top-tier sales and marketing leaders for high-growth organizations.",
  },
  {
    title: "Home-Grown Assessment Model",
    icon: <ExperimentOutlined className="text-5xl text-purple-500 mb-4" />,
    description: "Our scientifically designed assessment ensures precision in hiring, helping you select the right leaders with confidence.",
  },
  {
    title: "Revenue-Focused Leadership Hiring",
    icon: <DollarCircleOutlined className="text-5xl text-green-500 mb-4" />,
    description: "We prioritize hiring leaders who drive sales, marketing, and overall business success with a results-oriented approach.",
  },
  {
    title: "Comprehensive Post-Hiring Support",
    icon: <SafetyCertificateOutlined className="text-5xl text-red-500 mb-4" />,
    description: "Our complimentary sales and marketing leadership mentoring ensures long-term success by reducing the risks of misalignment and underperformance.",
  },
];

export default function A2LeaderShipWhy() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          Why Choose Sales Syllabus for Sales and Marketing Leadership Hiring?
        </h2>

        {/* Benefit Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-xl">
              {benefit.icon}
              <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600 mt-2">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
