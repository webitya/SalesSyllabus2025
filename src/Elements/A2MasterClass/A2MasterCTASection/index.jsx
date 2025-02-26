import { ArrowRightOutlined } from "@ant-design/icons";

const A2MasterCTASection = () => {
  return (
    <section className="px-6 py-20 bg-blue-500 text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold">Ready to Build a High-Performance Sales & Marketing Team?</h2>
        <p className="mt-4 text-lg">
          Secure your spot today and gain expert insights to scale and manage a revenue-driven team.
        </p>
        
        {/* Register Button */}
        <div className="mt-6">
          <a 
            href="https://calendly.com/salessyllabus" target="_blank"
            className="inline-flex items-center bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-gray-100 transition"
          >
            Register Now <ArrowRightOutlined className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default A2MasterCTASection;
