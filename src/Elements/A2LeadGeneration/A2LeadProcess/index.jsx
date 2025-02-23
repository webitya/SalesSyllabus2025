import { Card } from "antd";
import { PhoneOutlined, GoogleOutlined, LinkedinOutlined, FacebookOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const steps = [
  { icon: <PhoneOutlined className="text-[#007BFF] text-2xl" />, title: "Traditional Marketing", description: "Inside Sales (Telemarketing) to engage potential customers directly." },
  { icon: <GoogleOutlined className="text-[#007BFF] text-2xl" />, title: "Google Ads & SEO", description: "Drive traffic and capture leads through high-intent search queries." },
  { icon: <LinkedinOutlined className="text-[#007BFF] text-2xl" />, title: "LinkedIn Ads", description: "Leverage professional networking for B2B lead generation." },
  { icon: <FacebookOutlined className="text-[#007BFF] text-2xl" />, title: "Meta Ads", description: "Utilize Facebook and Instagram ads to reach a broader audience." },
];

const A2LeadGenerationProcess = () => {
  return (
    <section className="bg-gray-100 text-gray-800 py-12 px-4 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          Our <span className="text-[#007BFF]">Approach to Lead Generation</span>
        </motion.h2>
        <p className="text-sm text-gray-600 mb-6">
          We build structured lead generation processes across traditional and digital marketing channels.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {steps.map((step, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="bg-white text-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 flex items-center space-x-3">
              <div>{step.icon}</div>
              <div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default A2LeadGenerationProcess;
