import { Button } from "antd";
import { PhoneOutlined, DownloadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function A2HeroContactSectionNew() {
  return (
    <div className="bg-blue-600 text-white text-center py-12 px-6">
      <h2 className="text-3xl font-bold mb-4">Contact Us Today</h2>
      <p className="text-lg mb-6">
        Let’s build your sales success with real-world insights and execution-driven consulting.
      </p>
      <div className="flex justify-center gap-4">
        <Link to="https://calendly.com/salessyllabus" target="_blank">
        <Button type="" className="bg-white text-blue-600 hover:bg-gray-200 font-medium px-6 py-2 rounded-lg flex items-center gap-2">
          <PhoneOutlined /> Book a Consultation
        </Button>
        </Link>
        <Link to="/free-resources" target="_blank">
        <Button type="" className="bg-white text-blue-600 hover:bg-gray-200 font-medium px-6 py-2 rounded-lg flex items-center gap-2">
          <DownloadOutlined /> Download Free Resource
        </Button></Link>
      </div>
    </div>
  );
}
