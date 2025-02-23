import { Button } from "antd";
import { PhoneOutlined, RocketOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#0A192F] to-[#172A45] text-white py-24 px-6 md:px-16 overflow-hidden">
      {/* Subtle Background Glow Effect */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-blue-700 rounded-full opacity-20 blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <motion.div 
          className="md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Build a <span className="text-blue-400">Scalable & Successful</span> Lead Generation Process
          </h1>
          <p className="text-lg text-gray-300">
            We help organizations set up a proven, structured lead generation process that saves time and reduces costly failed experiments. Our frameworks, insights, and expertise empower businesses to streamline their lead generation efforts and optimize their marketing investments.
          </p>
          <div className="flex space-x-4">
            <Button
              type="primary"
              size="large"
              className="bg-blue-500 hover:bg-blue-600 border-none text-white font-semibold flex items-center"
            >
              <PhoneOutlined className="mr-2" />
              Book a Consultation
            </Button>
            <Button
              size="large"
              className="bg-transparent border border-gray-400 text-gray-300 hover:border-white hover:text-white flex items-center"
            >
              <RocketOutlined className="mr-2" />
              Learn More
            </Button>
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
            src="/leada.png"
            alt="Lead Generation Illustration"
            className="w-[350px] h-auto drop-shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
