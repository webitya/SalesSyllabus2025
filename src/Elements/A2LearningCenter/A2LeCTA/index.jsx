import { Button } from "antd";

export default function A2LeCallToAction() {
  return (
    <div className="py-12 bg-primary  text-center px-4">
      <h2 className="text-3xl font-bold mb-4">Join Our Learning Centre</h2>
      <p className="text-lg max-w-2xl mx-auto mb-6">
        Stay ahead in the competitive business landscape and drive your sales and
        marketing success with practical, market-driven learning.
      </p>
      <Button type="default" size="large" className="bg-white text-primary font-semibold px-6 py-2 rounded-lg hover:bg-gray-200">
        Get Started
      </Button>
    </div>
  );
}
