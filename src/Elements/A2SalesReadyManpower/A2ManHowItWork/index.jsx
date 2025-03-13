import { OrderedListOutlined } from "@ant-design/icons";

const steps = [
  {
    title: "Subscription Model",
    description: "Companies subscribe based on their yearly recruitment needs. Contact our sales team to discuss your requirements.",
  },
  {
    title: "Branding & Recruitment Campaign",
    description: "We incorporate your company’s logo in our recruitment campaigns to enhance employer branding.",
  },
  {
    title: "Access to a Pre-Trained Talent Pool",
    description: "Get direct access to a curated database of trained candidates, complete with relevant details.",
  },
  {
    title: "Client-Led Interview Process",
    description: "You select and interview the candidates that best fit your needs.",
  },
];

export default function A2ManHowItWorks() {
  return (
    <section className="py-16 bg-gray-100 px-6 md:px-12 text-gray-900">
      <div className=" mx-auto text-center">
        <h1 className="text-3xl font-medium text-blue-900 mb-8">How It Works</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col items-start transition-transform transform hover:scale-105 hover:shadow-md"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-700 rounded-full text-lg font-medium mb-3">
                {index + 1}
              </div>
              <h3 className="text-lg font-medium text-gray-900">{step.title}</h3>
              <p className="text-gray-700 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
