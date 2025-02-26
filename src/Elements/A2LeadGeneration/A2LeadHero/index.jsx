import { Button } from "antd";
import { PhoneOutlined, RocketOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#FF7F11] to-[#FF4500] text-white py-12 px-6 md:px-12 overflow-hidden">
      {/* Subtle Background Glow Effect */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-orange-500 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-orange-700 rounded-full opacity-30 blur-3xl"></div>

      <div className="relative  mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <motion.div 
          className="md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-3xl font-extrabold leading-tight">
            Build a <span className="text-orange-200">Scalable & Successful</span> Lead Generation Process
          </h1>
          <p className="text-lg text-orange-100">
            We help organizations set up a proven, structured lead generation process that saves time and reduces costly failed experiments. Our frameworks, insights, and expertise empower businesses to streamline their lead generation efforts and optimize their marketing investments.
          </p>
          <div className="flex space-x-4">
            <Link to="https://calendly.com/salessyllabus" target="_blank">
            <Button
             
              size="large"
              className="bg-orange-500 hover:bg-orange-600 border border-white text-white font-semibold flex items-center"
            >
              <PhoneOutlined className="mr-2" />
              Book a Consultation
            </Button>
            </Link>
            <Link to="https://calendly.com/salessyllabus" target="_blank">
            <Button
              size="large"
              className="bg-transparent border border-white text-orange-200 hover:border-white hover:text-white flex items-center"
            >
              <RocketOutlined className="mr-2" />
              Learn More
            </Button>
            </Link>
          </div>
        </motion.div>

        {/* Right Content - Engaging Illustration */}
        <motion.div 
          className="hidden md:flex md:w-1/2 justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/lead2.png"
            alt="Lead Generation Illustration"
            className="w-[70%] h-auto drop-shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
