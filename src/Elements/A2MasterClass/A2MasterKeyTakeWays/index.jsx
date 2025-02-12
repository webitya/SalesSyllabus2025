import { CheckCircleOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const keyTakeaways = [
  { id: 1, text: "How to hire and onboard the right sales & marketing professionals" },
  { id: 2, text: "Structuring your sales & marketing team for maximum efficiency" },
  { id: 3, text: "Aligning sales and marketing to drive revenue growth" },
  { id: 4, text: "Creating a performance-driven culture" },
  { id: 5, text: "Sales & marketing automation tools to streamline processes" },
  { id: 6, text: "Building KPI-driven sales & marketing strategies" },
  { id: 7, text: "Leadership techniques to enhance team productivity" },
];

const A2MasterKeyTakeaways = () => {
  return (
    <section className="px-6 py-20 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
      {/* Background Gradient Elements */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-500 opacity-10 blur-3xl rounded-full transform -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500 opacity-10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left Side - Title, Description & Decorative Design */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <h2 className="text-3xl font-semibold text-gray-900">Key Takeaways</h2>
          <p className="mt-4 text-md text-gray-600">
            Learn proven strategies and frameworks to build, scale, and manage high-performance sales & marketing teams.
          </p>

          {/* Decorative Dotted Pattern */}
          <div className="absolute -top-10 left-0 opacity-40">
            <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {[...Array(10)].map((_, i) =>
                [...Array(10)].map((_, j) => (
                  <circle key={`${i}-${j}`} cx={i * 10} cy={j * 10} r="1.5" fill="#3b82f6" />
                ))
              )}
            </svg>
          </div>

          {/* Abstract Shape */}
          <div className="absolute top-12 left-20 w-20 h-20 bg-blue-400 opacity-10 rounded-full blur-xl"></div>
        </motion.div>

        {/* Right Side - List of Takeaways with Animated Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {keyTakeaways.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-5 bg-white/90 backdrop-blur-md border border-gray-300 rounded-lg shadow-md flex items-center hover:shadow-lg transition ${
                  item.id === 7 ? "md:col-span-2" : ""
                }`}
              >
                <CheckCircleOutlined className="text-blue-600 text-2xl mr-3" />
                <p className="text-gray-800 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default A2MasterKeyTakeaways;
