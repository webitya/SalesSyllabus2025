import { CheckCircleOutlined } from "@ant-design/icons";

const reasons = [
  "Shorten the Sales and Marketing Learning Curve",
  "Gain Leadership Insights from Market Experts",
  "Learn from real-world data and proven sales and marketing strategies",
];

export default function A2LeWhyEnroll() {
  return (
    <div className="py-10 bg-gray-200 px-6 md:px-12 text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Why Enroll?</h2>
      <div className="max-w-3xl mx-auto space-y-3">
        {reasons.map((reason, index) => (
          <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-md border border-gray-300">
            <CheckCircleOutlined className="text-2xl text-blue-700" />
            <p className="text-gray-800 font-medium">{reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
