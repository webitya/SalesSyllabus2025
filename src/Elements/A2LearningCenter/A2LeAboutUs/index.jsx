import { Button, Card } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";


const A2LeAboutSection = () => {
  return (
    <div>
      <div className="relative bg-blue-600 text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Empower Your Sales & Marketing Success
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Join our Learning Centre to gain practical insights and real-world strategies that help you reduce mistakes and achieve business growth.
          </p>
          <div className="mt-6 flex flex-col md:flex-row md:items-center gap-4">
            <Button type="primary" size="large" className="bg-white text-blue-600 font-semibold">
              Get Started
            </Button>
            <Button type="default" size="large" className="text-white border-white flex items-center gap-2">
              <PlayCircleOutlined className="text-xl" /> Watch Intro
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img src="" alt="Learning Centre" className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg" />
        </div>
      </div>
      
      {/* About Our Learning Programs Section */}
      <div className="py-20 px-6 md:px-20 bg-gray-100">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">About Our Learning Programs</h2>
          <p className="mt-4 text-lg text-gray-600">We offer three specialized learning programs designed for different professional levels.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Client-Facing Team" bordered={false} className="shadow-lg">
            <p>Designed for sales and marketing professionals who directly interact with customers.</p>
          </Card>
          <Card title="Team Managers" bordered={false} className="shadow-lg">
            <p>Tailored for mid-level managers who oversee and guide client-facing teams.</p>
          </Card>
          <Card title="Business Leaders" bordered={false} className="shadow-lg">
            <p>A comprehensive program covering all aspects of business growth and leadership.</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default A2LeAboutSection;
