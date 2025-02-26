import { BookOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const MasterclassHero = () => {
  return (
    <section className="px-6 py-16 bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Text Content */}
        <div className="space-y-5 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Sales Syllabus Masterclass: <br />
            <span className="text-blue-600">
              Build & Manage High-Performance Sales & Marketing Teams
            </span>
          </h1>
          <p className="text-lg text-gray-700">
            Master the art of building, scaling, and managing a high-performance revenue team. 
            Learn from industry experts and apply proven frameworks for success.
          </p>

          {/* CTA Button */}
          <div>
            <a
              href="https://calendly.com/salessyllabus" target="_blank"
              className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              <BookOutlined className="mr-2 text-xl" /> Register Now
            </a>
          </div>
        </div>

        {/* Right Side - Glassmorphism Grid */}
        <div className="grid grid-cols-2 gap-6">
          {[
            "Learn from Industry Experts",
            "Proven Frameworks for Team Building",
            "Hands-on Strategies for Immediate Implementation",
            "Networking with Business Leaders",
          ].map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 backdrop-blur-lg bg-white/20 border border-white/30 rounded-xl shadow-lg flex items-center space-x-3 transform transition hover:scale-105"
            >
              <CheckCircleOutlined className="text-blue-500 text-2xl" />
              <p className="text-gray-900 font-medium">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MasterclassHero;
