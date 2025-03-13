import { Button } from "antd";
import { Link } from "react-router-dom";

export default function A2LeCallToAction() {
  return (
    <div className="py-16 bg-blue-600 text-center px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4">Join Our Learning Centre</h2>
        <p className="text-lg text-white/90 mb-8">
          Stay ahead in the competitive business landscape and drive your sales and marketing success with practical, market-driven learning.
        </p>
        <Link to="https://calendly.com/salessyllabus" target="_blank">
        <Button 
          type="default" 
          size="large" 
          className="text-[#002B5B] font-semibold px-8 py-3 rounded-full shadow-md transition-all  hover:scale-105"
        >
          Get Started
        </Button></Link>
      </div>
    </div>
  );
}
