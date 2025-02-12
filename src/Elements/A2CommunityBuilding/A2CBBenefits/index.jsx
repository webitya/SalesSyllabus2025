import { Card } from "antd";

const costBenefitData = [
  {
    title: "Traditional Sales & Marketing Approach",
    points: [
      "Cost: High (team salaries, tools, campaign expenses)",
      "Challenges: Low scalability, fragmented reach, inconsistent brand perception",
      "ROI: Moderate with high resource dependency",
    ],
  },
  {
    title: "Community Building Approach",
    points: [
      "Cost: Flexible, based on the chosen type",
      "Benefits: Scalable, research-driven, trust-enhancing, and provides sustainable lead generation",
      "ROI Analysis:",
      "- Comprehensive Community Platform: High ROI through premium branding and consistent high-value leads",
      "- Webinar Series: Moderate ROI with strong recall and engagement-driven lead generation",
      "- Newsletter & Blogs: Steady, long-term ROI through ongoing audience engagement",
    ],
  },
];

export default function A2CBBenefits() {
  return (
    <div className="mx-auto pt-20 pb-5 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Cost-Benefit Analysis
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {costBenefitData.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            bordered={true}
            className="shadow-lg rounded-lg"
          >
            <ul className="list-disc pl-5 space-y-2">
              {item.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}
