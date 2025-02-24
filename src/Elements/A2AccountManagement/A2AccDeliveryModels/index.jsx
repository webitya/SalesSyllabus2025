import React from "react";
import { Card } from "antd";
import { motion } from "framer-motion";

const A2AccDeliveryModels = () => {
  return (
    <section className="bg-[#F9FAFB] text-gray-800 py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-[#1E3A5F]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our <span className="text-[#007BFF]">Delivery Models</span>
        </motion.h2>
        <p className="text-lg text-gray-600 mb-12">
          We offer two effective models to ensure seamless adoption of the strategic account management process.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-[#1E3A5F] mb-4">
              1. BOT (Build-Operate-Transfer) Model
            </h3>
            <p className="text-gray-600 mb-4">
              A dedicated consultant works alongside your team for a specified period (3, 6, or 12 months) based on project complexity.
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>
                <strong>Build:</strong> Assess your current sales process, set up a structured strategy.
              </li>
              <li>
                <strong>Operate:</strong> Work with your team to implement best practices.
              </li>
              <li>
                <strong>Transfer:</strong> Train internal teams to sustain long-term success.
              </li>
            </ul>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-[#1E3A5F] mb-4">
              2. Knowledge Transfer Cohort
            </h3>
            <p className="text-gray-600 mb-4">
              A cohort-based learning experience that empowers your sales representatives with:
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>In-depth knowledge of strategic account management</li>
              <li>Sales frameworks to optimize lead conversion</li>
              <li>Data-driven decision-making tools</li>
            </ul>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default A2AccDeliveryModels;


// Let me know if you want any adjustments or animations! 🚀