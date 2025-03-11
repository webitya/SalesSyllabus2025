import { LaptopOutlined, SyncOutlined } from "@ant-design/icons";

export default function A2LeDeliveryModel() {
  return (
    <div className="py-12 bg-background px-4 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">
        Delivery Model
      </h2>
      <p className="text-center text-secondary max-w-3xl mx-auto mb-6">
        Our learning programs are delivered online in a Do-It-Yourself (DIY) format,
        allowing flexibility and self-paced learning. Additionally, we conduct
        monthly business case discussions to share the latest market insights,
        ensuring continuous learning and knowledge enhancement.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="p-6 bg-white rounded-lg shadow-sm border border-border flex flex-col items-center text-center">
          <LaptopOutlined className="text-4xl text-primary mb-4" />
          <h3 className="text-xl font-semibold text-secondary mb-2">Foundational Learning</h3>
          <p className="text-muted">
            Delivered through DIY courses, focusing on core skills and knowledge
            essential for success.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-sm border border-border flex flex-col items-center text-center">
          <SyncOutlined className="text-4xl text-primary mb-4" />
          <h3 className="text-xl font-semibold text-secondary mb-2">Continuous Learning & Insights</h3>
          <p className="text-muted">
            Conducted through ongoing business case discussions, ensuring up-to-date
            market intelligence and strategic insights.
          </p>
        </div>
      </div>
      <p className="text-center text-secondary max-w-3xl mx-auto mt-6">
       
      </p>
    </div>
  );
}
