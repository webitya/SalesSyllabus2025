import React from "react";
import { motion } from "framer-motion";
import { FundProjectionScreenOutlined, AppstoreAddOutlined, TeamOutlined, UserAddOutlined } from "@ant-design/icons";

const steps = [
  {
    title: "Culture Mapping",
    description:
      "We attend 1–2 performance review meetings to understand your sales & marketing culture, leadership style, and team dynamics.",
    icon: <FundProjectionScreenOutlined className="text-4xl text-blue-600" />,
  },
  {
    title: "Revenue Goal Mapping",
    description:
      "We align your revenue goals with the effort and skillsets required to achieve them — no guesswork.",
    icon: <AppstoreAddOutlined className="text-4xl text-green-600" />,
  },
  {
    title: "Strategic Workforce Planning",
    description:
      "We guide your hiring plan, defining the right mix of permanent and temporary talent, aligned with your budget and succession strategy.",
    icon: <TeamOutlined className="text-4xl text-orange-500" />,
  },
  {
    title: "Talent Sourcing & Onboarding",
    description:
      "We find and onboard sales & marketing professionals — from full-time hires to specialist consultants — to plug skill gaps and accelerate growth.",
    icon: <UserAddOutlined className="text-4xl text-purple-600" />,
  },
];

const RevenueTeamFramework = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1
          className="text-4xl font-bold text-center mb-12 leading-tight"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Our Proven Framework: How We Build Revenue Teams That Perform
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="group relative bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Animated Border Glow */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"></div>

              <div className="flex flex-col items-center text-center space-y-3">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                  className="mb-4"
                >
                  {step.icon}
                </motion.div>

                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Step {index + 1}
                </div>

                <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevenueTeamFramework;
