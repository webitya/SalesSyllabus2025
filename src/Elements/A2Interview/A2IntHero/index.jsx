import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const HeroSection = () => {
  return (
    <section className="flex justify-center bg-gray-50 py-20 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 max-w-6xl w-full">
        {/* Left Side - Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Interview as a Service for{" "}
            <span className="text-blue-600">Sales & Marketing Roles</span>
          </h1>
          <p className="mt-5 text-lg text-gray-700">
            Streamline your hiring process with expert-driven, unbiased interviews tailored to evaluate candidates effectively.
          </p>
          <div className="mt-8">
            <Button 
             
              size="large" 
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300"
              icon={<ArrowRightOutlined />}
            >
              Book a Consultation
            </Button>
          </div>
        </div>

        {/* Right Side - Infographic */}
        {/* <div className="flex justify-center">
          <svg
            className="w-60 md:w-80 transition-transform duration-300 hover:scale-105"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <circle cx="100" cy="100" r="80" stroke="#3B82F6" strokeWidth="6" fill="none" />
            <path d="M80 90 L100 70 L120 90" stroke="#3B82F6" strokeWidth="6" fill="none" />
            <circle cx="100" cy="120" r="10" fill="#3B82F6" />
          </svg>
        </div> */}
         <div className="flex justify-center">
            <img src="/int1.png" alt="Community Building" className="w-80" />
          </div>
      </div>
    </section>
  );
};

export default HeroSection;
