import { Button } from "antd";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function A2ManHeroSection() {
  return (
    <section 
      className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 md:py-14 rounded-xl shadow-lg"
      style={{ background: "linear-gradient(135deg, #f3f8ff, #e8f5e9)" }}
    >
      {/* Left Content */}
      <motion.div 
        className="md:w-1/2 space-y-6 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Sales-Ready <span className="text-blue-600">Manpower</span>
        </h1>
        <p className="text-lg text-gray-700">
          Streamline your hiring process with <span className="text-green-600 font-medium">pre-trained </span> 
          sales professionals who are ready to drive results from day one.
        </p>
        <Link to="https://calendly.com/salessyllabus" target="_blank">
        <Button 
          size="large"
          className="bg-blue-600 text-white font-medium px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all"
        >
          Get Started
        </Button></Link>
      </motion.div>

      {/* Right Content - Image */}
      <motion.div 
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img 
          src="/sales-ready.png" 
          alt="Sales Talent" 
          className="w-full max-w-md rounded-lg shadow-md"
        />
      </motion.div>
    </section>
  );
}
