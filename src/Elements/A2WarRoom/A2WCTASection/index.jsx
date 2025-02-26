import { CalendarOutlined } from "@ant-design/icons";

const A2WCTASection = () => {
  return (
    <section className="px-6 py-20 bg-blue-50 text-center">
      <div className=" mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">
          Ready to Sprint Towards Greater Efficiency and Revenue?
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Join our Sales & Marketing War Room and transform the way your organization tackles sales and marketing challenges.
        </p>

        {/* CTA Button */}
        <div className="mt-6">
          <a
            href="https://calendly.com/salessyllabus" target="_blank"
            className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            <CalendarOutlined className="mr-2 text-xl" /> Book a Consultation Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default A2WCTASection;
