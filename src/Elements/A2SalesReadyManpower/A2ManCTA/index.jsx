import { Button } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function A2ManCallToActionSales() {
  return (
    <div className="py-16 bg-blue-600 text-white text-center px-6 md:px-12  shadow-lg">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
        Get Started Today!
      </h2>
      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6 text-gray-200">
        Connect with our sales team to discuss your hiring needs and onboard 
        pre-trained, sales-ready professionals effortlessly.
      </p>
    <Link to="https://calendly.com/salessyllabus" target="_blank">
    <Button
        type="default"
        size="large"
        className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-md shadow-md flex items-center justify-center mx-auto hover:bg-gray-100"
      >
        <PhoneOutlined className="mr-2 text-lg" /> Contact Sales Team
      </Button></Link>
    </div>
  );
}
