import { CheckCircleOutlined } from "@ant-design/icons";

const reasons = [
  "Shorten the Sales and Marketing Learning Curve",
  "Gain Leadership Insights from Market Experts",
  "Learn from real-world data and proven sales and marketing strategies",
];

export default function A2LeWhyEnroll() {
  return (
    <div className="py-12 bg-background px-4 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">
        Why Should Someone Enroll?
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {reasons.map((reason, index) => (
          <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-border">
            <CheckCircleOutlined className="text-xl text-primary" />
            <p className="text-secondary font-medium">{reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
}