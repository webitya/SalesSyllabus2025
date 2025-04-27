import React from "react";
import { motion } from "framer-motion";
import { HomeOutlined, UserSwitchOutlined } from "@ant-design/icons";

const hiringTypes = [
  {
    title: "Permanent Hires",
    details: [
      "Full-time employees on your payroll",
      "Aligned with your long-term business goals",
      "Screened and performance-evaluated candidates",
    ],
    icon: <HomeOutlined className="text-4xl text-white" />,
  },
  {
    title: "Temporary Consultants",
    details: [
      "Short-term or project-based professionals",
      "Ideal for specialized skills and agile teams",
      "Sales strategists, campaign managers, marketing experts",
    ],
    icon: <UserSwitchOutlined className="text-4xl text-white" />,
  },
];

const TypesOfHiring = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-blue-900 to-blue-950 text-white relative overflow-hidden">
      
      {/* Global navy blue bubbles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-300/20 rounded-full blur-2xl"
            style={{
              width: `${20 + i * 5}px`,  // 20px to 80px
              height: `${20 + i * 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Types of Hiring We Offer
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hiringTypes.map((type, index) => (
            <motion.div
              key={index}
              className="relative bg-blue-800/80 p-6 rounded-xl border border-blue-700 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Tiny visible bubbles inside cards */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-blue-400/20 rounded-full blur-sm"
                    style={{
                      width: `${6 + i * 2}px`,
                      height: `${6 + i * 2}px`,
                      top: `${10 * i + 5}%`,
                      left: `${12 * i + 5}%`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 4 + i,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10 flex items-start space-x-4">
                <div>{type.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                  <ul className="text-sm text-blue-100 space-y-2">
                    {type.details.map((detail, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-green-400 mt-1">✔</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TypesOfHiring;
