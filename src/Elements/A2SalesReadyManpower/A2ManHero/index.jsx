import { Button } from "antd";

export default function A2ManHeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white px-6 md:px-16 py-12 md:py-20">
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Sales-Ready Manpower
        </h1>
        <p className="text-lg text-gray-600">
          Eliminate hiring hassles with pre-trained, market-ready sales professionals.
        </p>
        <Button  size="large" className="bg-blue-600 text-white font-medium px-6 py-3 rounded-md shadow-md hover:bg-blue-700">
          Get Started
        </Button>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img src="/sales-ready.png" alt="Sales Talent" className="w-full max-w-sm rounded-md shadow-md" />
      </div>
    </div>
  );
}
