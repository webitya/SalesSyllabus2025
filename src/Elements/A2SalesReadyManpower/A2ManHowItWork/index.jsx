import { OrderedListOutlined } from "@ant-design/icons";

const steps = [
  {
    title: "Subscription Model",
    description:
      "Companies subscribe based on their yearly recruitment needs. Contact our sales team to discuss your requirements.",
  },
  {
    title: "Branding & Recruitment Campaign",
    description:
      "We incorporate your company’s logo in our recruitment campaigns to enhance employer branding.",
  },
  {
    title: "Access to a Pre-Trained Talent Pool",
    description:
      "Get direct access to a curated database of trained candidates, complete with relevant details.",
  },
  {
    title: "Client-Led Interview Process",
    description:
      "You select and interview the candidates that best fit your needs.",
  },
];

export default function A2ManHowItWorks() {
  return (
    <div className="py-12 bg-gray-50 px-6 md:px-16 text-center">
      
      <h1 className="text-3xl text-center font-semibold text-blue-900 mb-6">
      How It Works
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="p-5 bg-white rounded-lg shadow-md border border-gray-200 flex flex-col items-start">
            <h3 className="text-lg font-semibold text-blue-500">
              {`${index + 1}. ${step.title}`}
            </h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
