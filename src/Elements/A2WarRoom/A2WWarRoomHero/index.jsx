import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import "./A2WarRoomHero.css"
import { Link } from "react-router-dom";
const A2WWarRoomHero = () => {
  return (
    <section className="relative px-6 py-20 overflow-hidden bg-gray-50">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 animate-gradient"></div>

      <div className="relative  mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Text Content with Fade-in */}
        <div className="opacity-0 translate-y-5 animate-fadeIn">
          <h1 className="text-4xl font-bold text-gray-900">
          A high-impact, hands-on problem-solving environment for sales and marketing teams
          </h1>
          <p className="mt-4 text-lg text-gray-700">
          Gain access to top leadership talent in sales and marketing and enable them to tackle the most complex sales and marketing challenges effectively
          </p>
          <Link to="https://calendly.com/salessyllabus" target="_blank">
          <Button 
            type="primary" 
            size="large" 
            className="mt-6 bg-blue-600 text-white hover:bg-blue-700 border-none transition-transform duration-300 hover:scale-105" 
            icon={<ArrowRightOutlined />}
          >
            Learn More
          </Button>
          </Link>
        </div>

        {/* Right Side - Key Deliverables with Hover Animation */}
        <div className="flex items-center justify-center">
        <motion.div 
          className="hidden md:flex md:w-1/2 justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/warb.png"
            alt="Lead Generation Illustration"
            className="w-[450px] h-auto drop-shadow-lg"
          />
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default A2WWarRoomHero;