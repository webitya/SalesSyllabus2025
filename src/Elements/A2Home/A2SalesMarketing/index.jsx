import { CheckCircleOutlined } from "@ant-design/icons";

const SalesMarketingSection = () => {
  return (
    <section className="bg-gray-100 py-20 px-6 md:px-8 text-left">
      <div className=" mx-auto">
        
        <h1 className="text-3xl text-center font-semibold text-blue-900 mb-6">
        Sales & Marketing Success Starts with Knowledge
      </h1>
        <p className="text-gray-700 text-base mb-4">
          Sales and marketing success isn’t based on guesswork—it’s built on structured knowledge, real-world insights, and execution-driven strategies. At <span className="text-blue-600 font-semibold">Sales Syllabus</span>, we empower businesses with:
        </p>
        <div className="space-y-2">
          <p className="flex items-center text-gray-800 text-base">
            <CheckCircleOutlined className="text-blue-600 text-lg mr-2" />
            Market-Proven Strategies – Reduce costly mistakes with data-driven insights.
          </p>
          <p className="flex items-center text-gray-800 text-base">
            <CheckCircleOutlined className="text-blue-600 text-lg mr-2" />
            Optimized Sales Frameworks – Shorten sales cycles and boost conversions.
          </p>
          <p className="flex items-center text-gray-800 text-base">
            <CheckCircleOutlined className="text-blue-600 text-lg mr-2" />
            Sales-Ready Talent – Hire pre-trained professionals for immediate impact.
          </p>
          <p className="flex items-center text-gray-800 text-base">
            <CheckCircleOutlined className="text-blue-600 text-lg mr-2" />
            Competitive Market Intelligence – Outmaneuver competitors with real-time insights.
          </p>
        </div>
        <p className="mt-4 text-base font-semibold text-gray-900">
          📌 Smarter Sales. Faster Growth. Real Results.
        </p>
      </div>
    </section>
  );
};

export default SalesMarketingSection;