import { Button } from "antd";
import { PhoneOutlined } from "@ant-design/icons";

export default function A2ManCallToActionSales() {
  return (
    <div className="py-12 bg-primary text-center px-4">
      <h2 className="text-3xl font-bold mb-4">Get Started Today!</h2>
      <p className="text-lg max-w-2xl mx-auto mb-6">
        Contact our sales team today to discuss your recruitment needs and get
        started with hiring sales-ready manpower for your organization!
      </p>
      <Button type="default" size="large" className="bg-white text-primary font-semibold px-6 py-2 rounded-lg hover:bg-gray-200">
        <PhoneOutlined className="mr-2" /> Contact Sales Team
      </Button>
    </div>
  );
}
