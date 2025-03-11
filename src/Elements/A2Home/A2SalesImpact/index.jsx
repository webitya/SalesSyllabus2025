import { CheckCircleOutlined } from "@ant-design/icons";

const A2ImpactSalesMarketingSection = () => {
  return (
    <section className="bg-gray-200 py-20 px-6 md:px-8 text-left">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl text-center font-bold text-blue-900 mb-8">
          The Sales Syllabus Impact
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[ 
            "20-30% Faster Sales Cycles – With structured strategies and execution playbooks.",
            "Higher Conversion Rates – Eliminate ineffective tactics and focus on proven strategies.",
            "Reduced Sales Hiring Failures – Through pre-trained, industry-ready sales professionals.",
            "Sustainable Revenue Growth – Aligning knowledge, execution, and top-tier sales talent."
          ].map((text, index) => (
            <div key={index} className="bg-white shadow-lg p-5 rounded-xl flex flex-col items-center border border-gray-200 transition-transform transform hover:scale-105">
              <CheckCircleOutlined className="text-blue-600 text-2xl mb-3 animate-pulse" />
              <span className="text-gray-800 text-sm text-center leading-tight">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default A2ImpactSalesMarketingSection;