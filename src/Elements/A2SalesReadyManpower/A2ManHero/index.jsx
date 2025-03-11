import { Button } from "antd";

export default function A2ManHeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-background px-6 md:px-12 py-16">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Sales-Ready Manpower: Pre-Trained Talent for Your Organization
        </h1>
        <p className="text-lg text-secondary mb-6">
          Eliminate Hiring Hassles with Pre-Trained, Market-Ready Sales Professionals.
        </p>
        <Button type="primary" size="large" className="bg-primary text-white font-semibold px-6 py-2 rounded-lg hover:bg-opacity-90">
          Get Started
        </Button>
      </div>
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img src="/sales-ready.png" alt="Sales Talent" className="w-full max-w-md rounded-lg shadow-lg" />
      </div>
    </div>
  );
}
