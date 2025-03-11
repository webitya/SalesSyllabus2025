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
    <div className="py-12 bg-background px-4 md:px-12 text-center">
      <div className="flex justify-center mb-4">
        <OrderedListOutlined className="text-5xl text-primary" />
      </div>
      <h2 className="text-3xl font-bold text-primary mb-6">How It Works</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-sm border border-border">
            <h3 className="text-xl font-semibold text-secondary mb-2">{`${index + 1}. ${step.title}`}</h3>
            <p className="text-muted">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}