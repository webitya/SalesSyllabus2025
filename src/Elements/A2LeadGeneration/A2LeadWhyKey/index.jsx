import { TrophyOutlined, ClockCircleOutlined, LineChartOutlined, TeamOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const features = [
  { icon: <ClockCircleOutlined className="text-[#007BFF] text-3xl" />, title: "Save Time", description: "Save time and reduce trial-and-error in lead generation." },
  { icon: <LineChartOutlined className="text-[#007BFF] text-3xl" />, title: "Scalable Process", description: "Implement a structured and scalable lead generation process." },
  { icon: <TrophyOutlined className="text-[#007BFF] text-3xl" />, title: "Actionable Insights", description: "Gain actionable insights and frameworks for long-term success." },
  { icon: <TeamOutlined className="text-[#007BFF] text-3xl" />, title: "Flexible Engagement", description: "Choose between hands-on consulting (BOT) or knowledge transfer cohorts." },
  { icon: <LineChartOutlined className="text-[#007BFF] text-3xl" />, title: "Optimized Channels", description: "Optimize both traditional and digital lead generation channels.", fullWidth: true }
];

const A2LeadWhyKeyTakeaways = () => (
  <section className="bg-gray-100 text-gray-800 py-14 px-6 md:px-10">
    <div className=" mx-auto text-center">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Key <span className="text-[#007BFF]">Takeaways</span>
      </motion.h2>
      <p className="text-base text-gray-600 max-w-2xl mx-auto">
        Our structured approach empowers organizations to optimize their lead generation efforts efficiently.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5  mx-auto mt-8">
      {features.map((feature, index) => (
        <motion.div 
          key={index}
          className={`bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 ${feature.fullWidth ? 'md:col-span-2' : ''}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
        >
          <div>{feature.icon}</div>
          <div>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default A2LeadWhyKeyTakeaways;
