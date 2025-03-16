import React from "react";
import { Button } from "antd";
import { CalendarOutlined, FileOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="bg-blue-600 text-white text-center py-12 px-6">
      <h2 className="text-3xl font-bold mb-4">Take the Next Step</h2>
      <p className="text-lg mb-6">
        Transform your sales strategy with expert insights and proven execution.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-4">
        <Link to="https://calendly.com/salessyllabus" target="_blank">
          <Button  icon={<CalendarOutlined />} size="large" className="bg-white text-blue-600 hover:bg-gray-200 px-6 py-3 rounded-lg">
            Book a Free Consultation
          </Button>
        </Link>
        
      <Link to="/" >
      <Button type="default" icon={<FileOutlined />} size="large" className="bg-white text-blue-600 hover:bg-gray-200 px-6 py-3 rounded-lg">
          Download CBA Report
        </Button>
      </Link>
      </div>
    </section>
  );
};

export default CTASection;
