import { Button } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";


const HeroSection = () => {
  return (
    <div className="relative bg-blue-600 text-white py-5 px-6 md:px-20 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Empower Your Sales & Marketing Success
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Join our Learning Centre to gain practical insights and real-world strategies that help you reduce mistakes and achieve business growth.
        </p>
        <div className="mt-6 flex flex-col md:flex-row md:items-center gap-4">
          <Link to="https://calendly.com/salessyllabus" target="_blank">
          <Button size="large" className="bg-white text-blue-600 font-semibold">
            Get Started
          </Button></Link>
          <Button  size="large" className=" border-white flex text-blue-700 items-center justify-center gap-2">
            <PlayCircleOutlined className="text-xl" /> Watch Intro
          </Button>
        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img src="/learning-center.png" alt="Learning Centre" className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default HeroSection;
