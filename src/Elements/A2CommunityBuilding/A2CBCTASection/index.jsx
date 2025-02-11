import { Button } from "antd";

export default function A2CBCTASection() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-600 text-white py-12">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Investing in community building helps businesses reduce dependence on high-maintenance sales and marketing teams while achieving superior ROI.
        </h2>
        <p className="text-lg mb-6">
          Through a structured and strategic approach, Sales Syllabus delivers scalable community-building solutions tailored to your business needs, ensuring lasting brand impact and sustained growth.
        </p>
        <Button
          size="large"
          className="bg-white hover:bg-blue-700 text-blue-500 px-8 py-2 rounded-lg"
        >
          Ready to build a thriving business community? Let’s talk!
        </Button>
      </div>
    </div>
  );
}