import { ArrowRightOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const A2ImpactSalesMarketingSection = () => {
  const impactData = [
    {
      text: "20-30% Faster Sales Cycles",
      description: "With structured strategies and execution playbooks.",
      bgColor: "bg-blue-100",
      iconBg: "bg-blue-600",
      animation: "animate-bounce",
    },
    {
      text: "Higher Conversion Rates",
      description: "Eliminate ineffective tactics and focus on proven strategies.",
      bgColor: "bg-green-100",
      iconBg: "bg-green-600",
      animation: "animate-bounce",
    },
    {
      text: "Reduced Sales Hiring Failures",
      description: "Through pre-trained, industry-ready sales professionals.",
      bgColor: "bg-yellow-100",
      iconBg: "bg-yellow-600",
      animation: "animate-bounce",
    },
    {
      text: "Sustainable Revenue Growth",
      description: "Aligning knowledge, execution, and top-tier sales talent.",
      bgColor: "bg-red-100",
      iconBg: "bg-red-600",
      animation: "animate-bounce",
    },
  ];

  return (
    <section className="bg-blue-50 py-20 px-6 md:px-8 text-left">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h1 className="text-3xl md:text-4xl text-center font-bold text-blue-900 mb-12">
          The Sales Syllabus Impact
        </h1>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {impactData.map((item, index) => (
            <div
              key={index}
              className={`${item.bgColor} p-6 rounded-xl flex flex-col items-center text-gray-900 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}
            >
              <CheckCircleOutlined
                className={`text-white text-4xl mb-3 p-2 rounded-full ${item.iconBg} shadow-md ${item.animation}`}
              />
              <h3 className="text-lg  text-center">{item.text}</h3>
              <p className="text-sm text-center opacity-90 mt-2">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Call-To-Action Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <Link
            to="https://calendly.com/salessyllabus"
            className="bg-blue-600 text-white font-bold py-4 px-12 rounded-lg flex items-center gap-3 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Talk to Experts to Know ROI
            <ArrowRightOutlined className="text-xl animate-pulse" />
          </Link>

          <Link
            to="/case-studies"
            className="border-2 border-blue-600 text-blue-600 font-bold py-4 px-10 rounded-lg shadow-md transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-lg"
          >
            Explore Our Success Stories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default A2ImpactSalesMarketingSection;
