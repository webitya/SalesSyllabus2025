import { Card } from "antd";
import { UserOutlined, PlayCircleOutlined, BarChartOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const stages = [
  {
    icon: <UserOutlined className="text-blue-500 text-2xl" />, title: "Discovery",
    steps: [
      "Collect client information",
      "Understand pain points and business challenges",
      "Identify key decision-makers",
    ],
  },
  {
    icon: <PlayCircleOutlined className="text-blue-500 text-2xl" />, title: "Demo & Value Presentation",
    steps: [
      "Showcase product/service relevance",
      "Align benefits with client needs",
      "Leverage data-driven insights",
    ],
  },
  {
    icon: <BarChartOutlined className="text-blue-500 text-2xl" />, title: "Cost-Benefit Analysis (CBA)",
    steps: [
      "Prepare a data-backed financial justification",
      "Highlight ROI and long-term gains",
      "Compare cost vs. savings with clear metrics",
    ],
  },
  {
    icon: <CheckCircleOutlined className="text-blue-500 text-2xl" />, title: "Objection Handling & Convincing",
    steps: [
      "Address concerns with precise data points",
      "Overcome resistance with proven case studies",
      "Align final decisions with strategic business goals",
    ],
  },
];

const MultiStageProcess = () => {
  return (
    <section className="bg-gray-50 py-8 px-2 md:px-2">
      <motion.div className=" mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div className="flex justify-center items-center">
      <motion.h2 
        className="text-2xl md:text-3xl font-bold mb-4 text-[#1E3A5F] border-b-4 border-[#007BFF] inline-block pb-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        The Multi-Stage Convincing Process
      </motion.h2>
    </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {stages.map((stage, index) => (
            <Card key={index} className="p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                {stage.icon}
                <h3 className="text-lg font-semibold text-gray-700">{stage.title}</h3>
              </div>
              <ul className="list-disc list-inside text-gray-600 text-sm">
                {stage.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default MultiStageProcess;
