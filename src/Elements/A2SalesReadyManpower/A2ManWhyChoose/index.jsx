import { CheckCircleOutlined } from "@ant-design/icons";

const benefits = [
  {
    title: "Pre-Trained Candidates",
    description: "Reduce onboarding time with professionals already trained in sales and marketing roles.",
  },
  {
    title: "Market-Driven Training",
    description: "Our curriculum is built on real-world insights and industry trends.",
  },
  {
    title: "Efficient Hiring Process",
    description: "Save time and resources by accessing a pre-qualified talent pool.",
  },
  {
    title: "Scalable Solution",
    description: "Subscription-based model allows businesses to plan their recruitment effectively.",
  },
];

export default function A2ManWhyChooseSalesSyllabus() {
  return (
    <section className="py-16 bg-gray-50 px-6 md:px-12 text-blue-900">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl font-medium text-blue-900 mb-8">
          Why Choose Sales Syllabus for Your Hiring Needs?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm border border-gray-200 transition-transform transform "
            >
              <CheckCircleOutlined className="text-4xl text-blue-700 flex-shrink-0" />
              <div className="text-left">
                <h3 className="text-lg font-medium text-gray-900">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
