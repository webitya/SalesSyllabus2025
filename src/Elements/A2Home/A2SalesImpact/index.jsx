import { ArrowRightOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";

const A2ImpactSalesMarketingSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-100 to-gray-300 py-20 px-6 md:px-8 text-left">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl text-center font-bold text-blue-900 mb-10">
          The Sales Syllabus Impact
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {[
            "20-30% Faster Sales Cycles – With structured strategies and execution playbooks.",
            "Higher Conversion Rates – Eliminate ineffective tactics and focus on proven strategies.",
            "Reduced Sales Hiring Failures – Through pre-trained, industry-ready sales professionals.",
            "Sustainable Revenue Growth – Aligning knowledge, execution, and top-tier sales talent."
          ].map((text, index) => (
            <div
              key={index}
              className="bg-white shadow-2xl p-6 rounded-2xl flex flex-col items-center border border-gray-300 transition-transform transform hover:scale-110 hover:shadow-2xl"
            >
              <CheckCircleOutlined className="text-blue-600 text-3xl mb-4 animate-spin-slow" />
              <span className="text-gray-800 text-base text-center font-medium leading-relaxed">{text}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-6">
          <Link
            to="https://calendly.com/salessyllabus"
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold py-3 px-10 rounded-lg flex items-center justify-center gap-3 shadow-lg transition-all duration-300 hover:scale-105"
          >
            <span>Talk to Experts to Know ROI</span>
            <ArrowRightOutlined className="text-lg" />
          </Link>
          <Link
            to="/case-studies"
            className="border-2 border-blue-600 text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-blue-600 hover:text-white hover:shadow-lg"
          >
            Explore Our Success Stories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default A2ImpactSalesMarketingSection;