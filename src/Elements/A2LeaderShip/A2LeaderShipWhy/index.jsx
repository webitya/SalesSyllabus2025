import { CheckCircleOutlined, ExperimentOutlined, DollarCircleOutlined, SafetyCertificateOutlined } from "@ant-design/icons";

const benefits = [
  { title: "Proven Expertise", icon: CheckCircleOutlined, color: "text-blue-500", description: "We have extensive experience in hiring top-tier sales and marketing leaders for high-growth organizations." },
  { title: "Home-Grown Assessment Model", icon: ExperimentOutlined, color: "text-purple-500", description: "Our scientifically designed assessment ensures precision in hiring, helping you select the right leaders with confidence." },
  { title: "Revenue-Focused Leadership Hiring", icon: DollarCircleOutlined, color: "text-green-500", description: "We prioritize hiring leaders who drive sales, marketing, and overall business success with a results-oriented approach." },
  { title: "Comprehensive Post-Hiring Support", icon: SafetyCertificateOutlined, color: "text-red-500", description: "Our complimentary sales and marketing leadership mentoring ensures long-term success by reducing the risks of misalignment and underperformance." },
];

export default function A2LeaderShipWhy() {
  return (
    <section className="bg-gray-100 pt-20 pb-12 px-6">
      <div className=" mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Sales Syllabus for Sales and Marketing Leadership Hiring?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 bg-white shadow-md rounded-lg">
              <benefit.icon className={`text-4xl ${benefit.color} mb-3`} />
              <h3 className="text-lg font-semibold text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
