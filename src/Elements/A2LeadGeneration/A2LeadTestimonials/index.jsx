import React from "react";
import { Steps } from "antd";
import { UserOutlined, MessageOutlined, RocketOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const leadGenerationSteps = [
  {
    title: "Find ICP (Ideal Customer Profile)",
    description: "Define your target audience to ensure precision in lead targeting. Focus on high-paying customer segments.",
    icon: <UserOutlined className="text-[#007BFF] text-2xl" />,
  },
  {
    title: "Building Communication Framework",
    description: "For B2B: Develop pitch scripts, email drafts, lead scoring systems, and data tracking. For B2C: A/B test messaging to improve engagement.",
    icon: <MessageOutlined className="text-[#007BFF] text-2xl" />,
  },
  {
    title: "GTM (Go-To-Market) Strategy",
    description: "Deploy a live GTM campaign and continuously refine it for optimal results.",
    icon: <RocketOutlined className="text-[#007BFF] text-2xl" />,
  },
  {
    title: "Proof of Concept (POC)",
    description: "Generate live leads and validate the lead generation process for scalability.",
    icon: <CheckCircleOutlined className="text-[#007BFF] text-2xl" />,
  },
];

const LeadGenerationProcess = () => {
  return (
    <section className="bg-gray-100 text-gray-800 py-12 px-4 md:px-12">
      <div className=" mx-auto text-center">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          The <span className="text-[#007BFF]">Lead Generation Setup Process</span>
        </motion.h2>
      </div>
      <div className="max-w-4xl mx-auto">
        <Steps direction="vertical" current={-1} className="">
          {leadGenerationSteps.map((step, index) => (
            <Steps.Step 
              key={index} 
              title={<span className="text-gray-800 text-lg font-semibold">{step.title}</span>} 
              description={<span className="text-gray-600 text-sm">{step.description}</span>} 
              icon={step.icon} 
            />
          ))}
        </Steps>
      </div>
    </section>
  );
};

export default LeadGenerationProcess;
