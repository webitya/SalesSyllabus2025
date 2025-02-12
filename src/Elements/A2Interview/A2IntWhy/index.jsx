import { Card } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

const features = [
  { title: "Robust Screening Process", description: "Comprehensive assessments providing deep productivity insights." },
  { title: "Industry-Specific Expertise", description: "Specialized in sales & marketing roles for relevant evaluations." },
  { title: "Structured & Objective Evaluation", description: "Proven methodology ensuring fair assessments and reducing bias." },
  { title: "Save Time & Resources", description: "Let experts handle screening while you focus on growth." },
  { title: "Actionable Insights", description: "Detailed candidate reports with strengths and improvement areas." },
  { title: "Customizable Process", description: "Choose technical, behavioral, and situational interview formats." },
];

const A2IntWhyChooseUs = () => {
  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Interview Service?</h2>
        <p className="mt-4 text-lg text-gray-600">We help you hire the best sales and marketing talent with expert-driven interviews.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <Card key={index} className="shadow-md border rounded-lg">
            <div className="flex items-start space-x-3">
              <CheckCircleOutlined className="text-blue-600 text-2xl" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default A2IntWhyChooseUs;
