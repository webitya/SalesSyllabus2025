import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const A2WWarRoomHero = () => {
  return (
    <section className="px-6 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Text Content */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            Get the Same Sales Strategy at a Fraction of the Cost
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Hiring a sales leader costs around <strong>₹40 lakhs per annum</strong>. 
            Instead, join us and access the same expert sales strategies at a minimal cost.
          </p>
          <Button 
            type="primary" 
            size="large" 
            className="mt-6 bg-blue-600 text-white hover:bg-blue-700 border-none" 
            icon={<ArrowRightOutlined />}
          >
            Learn More
          </Button>
        </div>

        {/* Right Side - Key Deliverables */}
        <div className="flex flex-col space-y-4 text-gray-700">
          <div className="bg-white p-4 shadow rounded-lg">
            <strong>✔ Proven Sales Strategies</strong> - Leverage industry-best practices tailored to your business.
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <strong>✔ Expert Mentorship</strong> - Get guidance from top sales professionals.
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <strong>✔ Cost-Effective Growth</strong> - Scale your sales team without massive overhead costs.
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <strong>✔ Data-Driven Insights</strong> - Utilize analytics to optimize your sales performance.
          </div>
        </div>
      </div>
    </section>
  );
};

export default A2WWarRoomHero;
