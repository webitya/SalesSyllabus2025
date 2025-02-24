import React from "react";
import { motion } from "framer-motion";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const A2AccStrategicAccountHero = () => {
  return (
    <section className="bg-[#F9FAFB] text-gray-800 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
          className="md:w-1/2 mb-8 md:mb-0"
        >
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Strategic Account Management Process for <span className="text-[#007BFF]">B2B Companies</span>
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Elevate Your B2B Sales with Data-Driven Account Management.
          </p>
          <Button 
            type="primary" 
            size="large" 
            className="mt-6 bg-[#007BFF] border-none hover:bg-[#0056b3] flex items-center gap-2"
          >
            Learn More <ArrowRightOutlined />
          </Button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <img 
            src="/int1.png" 
            alt="Strategic Account Management"
            className="w-full max-w-md mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default A2AccStrategicAccountHero;
