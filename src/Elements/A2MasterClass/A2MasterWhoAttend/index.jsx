import { UserOutlined, TeamOutlined, SolutionOutlined, TrophyOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const A2MasterWhoShouldAttend = () => {
  return (
    <section className="px-6 py-20 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Who Should Attend?</h2>
        <p className="mt-4 text-md text-gray-600">
          This masterclass is designed for professionals looking to scale their sales and marketing teams effectively.
        </p>

        {/* Attendee Categories */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <UserOutlined className="text-blue-600 text-4xl mb-4" />, title: "Business Owners & Founders" },
            { icon: <TeamOutlined className="text-green-600 text-4xl mb-4" />, title: "Sales & Marketing Heads" },
            { icon: <SolutionOutlined className="text-indigo-600 text-4xl mb-4" />, title: "Sales Managers & Team Leads" },
            { icon: <TrophyOutlined className="text-teal-600 text-4xl mb-4" />, title: "HR & Talent Acquisition Professionals" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-5 bg-white/80 backdrop-blur-md border border-gray-300 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg transition"
            >
              {item.icon}
              <h3 className="text-lg font-medium text-gray-800 text-center">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default A2MasterWhoShouldAttend;
