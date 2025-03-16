import { CheckCircleOutlined } from "@ant-design/icons";

const SalesMarketingSection = () => {
  return (
    <section className="bg-gray-50 text-left">
      <div className="mx-auto bg-white shadow-lg  p-8 md:p-12 border-t-4 border-blue-500">
        <h1 className="text-3xl text-center font-bold text-blue-900 mb-6">
          Sales & Marketing Success Starts with Knowledge
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
          Sales and marketing success isn’t based on guesswork—it’s built on structured knowledge, real-world insights, and execution-driven strategies. At <span className="text-blue-600 font-semibold">Sales Syllabus</span>, we empower businesses with:
        </p>
        <div className="space-y-2">
          {[  
            "Market-Proven Strategies – Reduce costly mistakes with data-driven insights.",
            "Optimized Sales Frameworks – Shorten sales cycles and boost conversions.",
            "Sales-Ready Talent – Hire pre-trained professionals for immediate impact.",
            "Competitive Market Intelligence – Outmaneuver competitors with real-time insights."
          ].map((text, index) => (
            <div key={index} className="flex items-center bg-gray-100 p-4 rounded-lg shadow-sm border-l-4 border-blue-700">
              <CheckCircleOutlined className="text-blue-600 text-xl mr-3" />
              <p className="text-gray-900 text-base font-medium">{text}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-lg font-semibold text-blue-900 text-center">
          📌 Smarter Sales. Faster Growth. Real Results.
        </p>
      </div>
    </section>
  );
};

export default SalesMarketingSection;