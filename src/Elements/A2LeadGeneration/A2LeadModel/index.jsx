import { Card } from "antd";
import { TeamOutlined, BookOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const deliveryModels = [
  {
    icon: <TeamOutlined className="text-[#007BFF] text-4xl" />,
    title: "BOT (Build, Operate, Transfer)",
    description:
      "In this model, our consultant works alongside your team for a fixed period (3, 6, or 12 months) based on project complexity. We set up the process, operate it, and then transfer full control to your internal team with complete documentation and training.",
  },
  {
    icon: <BookOutlined className="text-[#007BFF] text-4xl" />,
    title: "Knowledge Transfer",
    description:
      "We empower your internal team through a structured cohort, providing expert-led training sessions, actionable frameworks & insights, and hands-on guidance for process implementation. This ensures your team gains the expertise to sustain and optimize lead generation efforts independently.",
  },
];

const A2LeadDeliveryModels = () => {
  return (
    <section className="bg-gray-100 text-gray-800 py-16 px-6 md:px-16">
      <div className=" mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our <span className="text-[#007BFF]">Delivery Models</span>
        </motion.h2>
        <p className="text-lg text-gray-600  mx-auto">
          We offer two structured models to set up your lead generation process effectively.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
        {deliveryModels.map((model, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Card className="bg-white text-gray-800 border border-gray-200 p-6 rounded-xl shadow-sm">
              <div className="flex items-center space-x-4">
                {model.icon}
                <h3 className="text-xl font-semibold">{model.title}</h3>
              </div>
              <p className="text-gray-600 mt-4">{model.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default A2LeadDeliveryModels;
