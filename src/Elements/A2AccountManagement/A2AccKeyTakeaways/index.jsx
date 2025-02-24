import { Card } from "antd";
import { CheckCircleOutlined, BarChartOutlined, ClockCircleOutlined, SyncOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const keyTakeaways = [
  {
    icon: <CheckCircleOutlined className="text-[#007BFF] text-2xl" />, 
    title: "Higher Conversion Rates", 
    description: "A structured sales process boosts conversions and enhances efficiency."
  },
  {
    icon: <BarChartOutlined className="text-[#007BFF] text-2xl" />, 
    title: "Data-Driven Decisions", 
    description: "Cost-benefit analysis helps justify investments and overcome objections."
  },
  {
    icon: <ClockCircleOutlined className="text-[#007BFF] text-2xl" />, 
    title: "Time Optimization", 
    description: "Our framework optimizes sales reps' time for better lead nurturing."
  },
  {
    icon: <SyncOutlined className="text-[#007BFF] text-2xl" />, 
    title: "Seamless Implementation", 
    description: "BOT and Cohort models ensure smooth knowledge transfer and execution."
  },
];

const KeyTakeawaysSection = () => {
  return (
    <section className="bg-gray-100 text-gray-800 py-8 px-4 md:px-2">
      <div className=" mx-auto">
        <motion.h2 
          className="text-2xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Key Takeaways
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {keyTakeaways.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="bg-white border border-gray-200 p-4 flex items-start space-x-3">
                <div>{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyTakeawaysSection;
