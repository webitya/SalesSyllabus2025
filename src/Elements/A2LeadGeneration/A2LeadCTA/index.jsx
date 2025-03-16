import React from "react";
import { Button, Card } from "antd";
import { motion } from "framer-motion";
import { PhoneOutlined, TeamOutlined, SettingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const A2GetStartedSection = () => {
  return (
    <section className="bg-[#F9FAFB] text-gray-800 flex justify-center py-12 px-6">
      <motion.div
        className="w-full  text-center p-8 bg-white rounded-xl shadow-lg border border-gray-200"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-6">
          Get <span className="text-[#007BFF]">Started Today!</span>
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Take the next step in optimizing your lead generation process with expert guidance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            {
              icon: <PhoneOutlined className="text-[#007BFF] text-3xl mb-4" />,
              title: "Book a Consultation",
              description: "Discuss your lead generation challenges with our experts.",
            },
            {
              icon: <TeamOutlined className="text-[#007BFF] text-3xl mb-4" />,
              title: "Join Our Knowledge Transfer",
              description: "Empower your team with proven strategies and frameworks.",
            },
            {
              icon: <SettingOutlined className="text-[#007BFF] text-3xl mb-4" />,
              title: "Start with BOT Model",
              description: "Let us set up and optimize your lead generation process.",
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="bg-white text-gray-800 border border-gray-200 p-6 rounded-lg shadow-sm flex flex-col items-center justify-between h-full"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
          <Link to="https://calendly.com/salessyllabus" target="_blank">
          <Button
            type="primary"
            size="large"
            className="bg-[#007BFF] border-none px-8 py-4 text-lg font-semibold shadow-md hover:bg-[#0056b3] flex items-center gap-2"
          >
            <PhoneOutlined /> Schedule a Call
          </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default A2GetStartedSection;
