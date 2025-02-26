import { TrophyOutlined, ClockCircleOutlined, LineChartOutlined, TeamOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const features = [
  { icon: <ClockCircleOutlined className="text-[#007BFF] text-3xl" />, title: "Real-Time Problem Solving", description: "The War Room acts as a strategic command center where businesses can tackle their most pressing sales and marketing challenges." },
  { icon: <LineChartOutlined className="text-[#007BFF] text-3xl" />, title: "Resolve Roadblocks", description: "It helps decision-makers resolve roadblocks in sales performance, marketing execution, and business growth." },
  { icon: <TrophyOutlined className="text-[#007BFF] text-3xl" />, title: "Cross-Functional Alignment", description: "Helps in integrating performance marketing, demand generation, and sales processes seamlessly." },
  { icon: <TeamOutlined className="text-[#007BFF] text-3xl" />, title: "High-Impact Training & Strategy Refinement", description: "Trains teams on sales strategy, objection handling, negotiation, and high-performance sales frameworks." }
];

const A2WarRoomKeyTakeaways = () => (
  <section className="bg-gray-100 text-gray-800 py-14 px-6 md:px-2">
    <div className=" mx-auto text-center">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        War Room <span className="text-[#007BFF]">Key Takeaways</span>
      </motion.h2>
      <p className="text-base text-gray-600 max-w-2xl mx-auto">
        The War Room provides a structured environment for businesses to overcome sales and marketing challenges effectively.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5  mx-auto mt-8">
      {features.map((feature, index) => (
        <motion.div 
          key={index}
          className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4"
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

export default A2WarRoomKeyTakeaways;