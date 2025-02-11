import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const A2WWarRoomHero = () => {
  return (
    <section className="px-6 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Text Content */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            Enhance and Empower Your Sales & Marketing Leadership Team
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Gain access to top leadership talent in sales and marketing and enable them to tackle the most complex sales and marketing challenges effectively.
          </p>
          <Button 
            type="primary" 
            size="large" 
            className="mt-6 bg-blue-600 text-white hover:bg-blue-700 border-none" 
            icon={<ArrowRightOutlined />}
          >
            Book a Consultation
          </Button>
        </div>

        {/* Right Side - Infographic (Placeholder) */}
        <div className="flex justify-center">
          <img src="/images/war-room-infographic.png" alt="Sales & Marketing War Room" className="w-80" />
        </div>
      </div>
    </section>
  );
};

export default A2WWarRoomHero;
