import { TeamOutlined, UserSwitchOutlined, CrownOutlined } from "@ant-design/icons";

const levels = [
  { icon: <TeamOutlined className="text-3xl text-blue-600" />, title: "Client Team" },
  { icon: <UserSwitchOutlined className="text-3xl text-blue-600" />, title: "Sales & Marketing Managers" },
  { icon: <CrownOutlined className="text-3xl text-blue-600" />, title: "Top Leadership" },
];

export default function A2ManIntroSalesManpower() {
  return (
    <div className="py-16 bg-gray-50 px-6 md:px-16 text-center">
    
      <h1 className="text-3xl text-center font-semibold text-blue-900 mb-6">
      Sales-Ready Manpower
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
        At Sales Syllabus, we assist organizations in recruiting sales-ready manpower 
        across all levels of hierarchy.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {levels.map((level, index) => (
          <div key={index} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md border border-gray-200">
            {level.icon}
            <h3 className="text-lg font-semibold text-gray-800 mt-3">{level.title}</h3>
          </div>
        ))}
      </div>

      <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-8">
        This initiative aligns with our vision of equipping organizations with market 
        insights and real-world knowledge, ensuring that businesses gain not just 
        manpower but also pre-trained professionals ready to excel in their roles.
      </p>
    </div>
  );
}
