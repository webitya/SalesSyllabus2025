import { CheckCircleOutlined } from "@ant-design/icons";

const benefits = [
  {
    title: "Pre-Trained Candidates",
    description:
      "Reduce onboarding time with professionals already trained in sales and marketing roles.",
  },
  {
    title: "Market-Driven Training",
    description:
      "Our curriculum is built on real-world insights and industry trends.",
  },
  {
    title: "Efficient Hiring Process",
    description:
      "Save time and resources by accessing a pre-qualified talent pool.",
  },
  {
    title: "Scalable Solution",
    description:
      "Subscription-based model allows businesses to plan their recruitment effectively.",
  },
];

export default function A2ManWhyChooseSalesSyllabus() {
  return (
    <div className="py-12 bg-background px-4 md:px-12 text-center">
      <h2 className="text-3xl font-bold text-primary mb-6">
        Why Choose Sales Syllabus for Your Hiring Needs?
      </h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm border border-border">
            <CheckCircleOutlined className="text-2xl text-primary" />
            <div className="text-left">
              <h3 className="text-xl font-semibold text-secondary">{benefit.title}</h3>
              <p className="text-muted">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}