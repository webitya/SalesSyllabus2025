import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const A2IntGetStarted = () => {
  return (
    <section className="px-6 py-20 bg-blue-600 text-white text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold">Get Started Today</h2>
        <p className="mt-4 text-lg">
          Want to hire the best sales and marketing professionals with confidence? Let our expert interviewers handle the screening process while you focus on growing your business.
        </p>
        <div className="mt-6">
          <Link to="https://calendly.com/salessyllabus" target="_blank">
          <Button 
            type="primary" 
            size="large" 
            className="bg-white text-blue-600 hover:bg-gray-200 border-none" 
            icon={<ArrowRightOutlined />}
          >
            Book a Consultation
          </Button></Link>
        </div>
      </div>
    </section>
  );
};

export default A2IntGetStarted;
