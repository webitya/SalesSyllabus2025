import React from "react";
import { Card } from "antd";
import { LineChartOutlined, CheckCircleOutlined, DollarCircleOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const A2AccStrategicManagementSection = () => {
  return (
    <section className="bg-[#F7F9FC] text-gray-800 py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-4">
            Strategic Account Management Process
          </h2>
          <p className="text-gray-600">
            Managing leads after generation is critical for success. Our process equips B2B sales teams with data-driven techniques to demonstrate value, justify costs, and handle objections with precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 bg-white border border-gray-200 shadow-sm rounded-lg">
            <LineChartOutlined className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-lg font-semibold mb-2">Data-Driven Insights</h3>
            <p className="text-gray-600">Leverage analytics to track performance, refine strategies, and stay ahead of the competition.</p>
          </Card>

          <Card className="p-6 bg-white border border-gray-200 shadow-sm rounded-lg">
            <DollarCircleOutlined className="text-green-500 text-4xl mb-4" />
            <h3 className="text-lg font-semibold mb-2">Cost Justification</h3>
            <p className="text-gray-600">Use cost-benefit analysis to justify investments and build trust with stakeholders.</p>
          </Card>

          <Card className="p-6 bg-white border border-gray-200 shadow-sm rounded-lg">
            <CheckCircleOutlined className="text-purple-500 text-4xl mb-4" />
            <h3 className="text-lg font-semibold mb-2">Precision Objection Handling</h3>
            <p className="text-gray-600">Equip your sales team with frameworks to confidently handle objections and close deals.</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default A2AccStrategicManagementSection;
