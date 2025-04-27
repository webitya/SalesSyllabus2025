import React from "react";
import { motion } from "framer-motion";

const SalesSyllabusComponent = () => {
  return (
    <div className="py-16 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <motion.h1
            className="text-3xl lg:text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Who We Are
          </motion.h1>

          <motion.p
            className="text-lg lg:text-xl mb-4 leading-relaxed max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            At Sales Syllabus, we go beyond traditional hiring. We are your growth partner — combining sales expertise, hiring strategy, and training into one powerful solution for building high-performance sales teams.
          </motion.p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <motion.img
            src="/heroabt.webp"  // Replace with the actual path to your image
            alt="Sales Expertise"
            className="w-full max-w-md rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.4 }}
          />
        </div>
      </div>
    </div>
  );
};

export default SalesSyllabusComponent;
