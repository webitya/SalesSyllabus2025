import { TeamOutlined, UserSwitchOutlined, CrownOutlined } from "@ant-design/icons";

export default function A2ManIntroSalesManpower() {
  return (
    <div className="py-12 bg-background px-4 md:px-12 text-center">
      <h2 className="text-3xl font-bold text-primary mb-4">Sales-Ready Manpower</h2>
      <p className="text-lg text-secondary max-w-3xl mx-auto mb-6">
        At Sales Syllabus, we assist organizations in recruiting sales-ready manpower
        across all three levels of hierarchy:
      </p>
      <div className="text-lg text-secondary space-y-4 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-3">
          <TeamOutlined className="text-2xl text-primary" />
          <span>Client Team</span>
        </div>
        <div className="flex items-center justify-center gap-3">
          <UserSwitchOutlined className="text-2xl text-primary" />
          <span>Sales and Marketing Managers</span>
        </div>
        <div className="flex items-center justify-center gap-3">
          <CrownOutlined className="text-2xl text-primary" />
          <span>Top Leadership</span>
        </div>
      </div>
      <p className="text-lg text-secondary max-w-3xl mx-auto mt-6">
        This initiative aligns with our vision of equipping organizations with market
        insights and real-world knowledge, ensuring that businesses gain not just
        manpower but also pre-trained professionals who are ready to excel in their roles.
      </p>
    </div>
  );
}