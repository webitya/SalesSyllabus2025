import React from "react";
import { Button } from "antd";
import { motion } from "framer-motion";
import { CalendarOutlined, FileOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const A2AccNextStepSection = () => {
  return (
    <section className="bg-[#F8FAFC] text-gray-800 py-12 px-6">
      <div className=" mx-auto text-center">
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Take the Next Step
        </motion.h2>

        <div className="space-y-6">
          <motion.div
            className="flex items-center bg-white p-4 shadow-md rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CalendarOutlined className="text-blue-500 text-2xl mr-4" />
            <p className="text-lg">
              <strong>Book a Free Consultation</strong> to explore how our Strategic Account
              Management process can transform your sales team.
            </p>
          </motion.div>

          <motion.div
            className="flex items-center bg-white p-4 shadow-md rounded-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FileOutlined className="text-green-500 text-2xl mr-4" />
            <p className="text-lg">
              <strong>Download a Sample Cost-Benefit Analysis (CBA) Report</strong> to see the impact
              of a structured approach.
            </p>
          </motion.div>
        </div>

        <div className="mt-8">
          <Link to="https://calendly.com/salessyllabus" target="_blank">
          <Button
            type="primary"
            size="large"
            className="bg-blue-500 border-none px-8 py-4 text-lg font-semibold shadow-md hover:bg-blue-600"
          >
            Get Started Now
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default A2AccNextStepSection;