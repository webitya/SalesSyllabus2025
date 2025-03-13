import { TeamOutlined, UserSwitchOutlined, CrownOutlined } from "@ant-design/icons";

const levels = [
  { 
    icon: <TeamOutlined className="text-4xl text-blue-700" />, 
    title: "Client Team",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-300"
  },
  { 
    icon: <UserSwitchOutlined className="text-4xl text-green-700" />, 
    title: "Sales & Marketing Managers",
    bgColor: "bg-green-50",
    borderColor: "border-green-300"
  },
  { 
    icon: <CrownOutlined className="text-4xl text-purple-700" />, 
    title: "Top Leadership",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-300"
  },
];

export default function A2ManIntroSalesManpower() {
  return (
    <section className="py-16 px-6 md:px-12 text-gray-900" style={{ background: "linear-gradient(to right, #f0f4ff, #eefaf6)" }}>
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl font-medium text-blue-900 mb-6">Sales-Ready Manpower</h1>
        <p className="text-lg text-gray-700  mx-auto mb-10">
          At Sales Syllabus, we assist organizations in recruiting sales-ready manpower 
          across all levels of hierarchy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {levels.map((level, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center p-6 rounded-lg shadow-md border ${level.bgColor} ${level.borderColor} transition-transform transform hover:scale-105 hover:shadow-lg`}
            >
              {level.icon}
              <h3 className="text-lg font-medium text-gray-900 mt-3">{level.title}</h3>
            </div>
          ))}
        </div>

        <p className="text-lg text-gray-800  mx-auto mt-10">
          Our vision is to equip organizations with market insights and real-world knowledge, 
          ensuring businesses gain not just manpower but <span className="text-blue-600 font-medium">pre-trained professionals</span> ready 
          to excel in their roles.
        </p>
      </div>
    </section>
  );
}
