import { Card } from "antd";
import { UsergroupAddOutlined, TeamOutlined, CrownOutlined } from "@ant-design/icons";

const LearningPrograms = () => {
  const programs = [
    {
      title: "Client-Facing Team",
      description: "Designed for sales and marketing professionals who directly interact with customers.",
      icon: <UsergroupAddOutlined className="text-4xl text-blue-500" />,
    },
    {
      title: "Team Managers",
      description: "Tailored for mid-level managers who oversee and guide client-facing teams.",
      icon: <TeamOutlined className="text-4xl text-green-500" />,
    },
    {
      title: "Business Leaders",
      description: "A comprehensive program for entrepreneurs and senior leaders covering business growth and leadership.",
      icon: <CrownOutlined className="text-4xl text-yellow-500" />,
    },
  ];

  return (
    <section className="py-16 bg-gray-50 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">About Our Learning Programs</h2>
        <p className="text-lg text-gray-600 mb-10">
          Our programs cater to professionals at all levels, ensuring they gain valuable insights and skills to drive business success.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className="shadow-md rounded-xl p-6 text-left border border-gray-200 transition-transform hover:scale-105 hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                {program.icon}
                <h3 className="text-xl font-semibold text-gray-800">{program.title}</h3>
              </div>
              <p className="text-gray-600 mt-2">{program.description}</p>
            </Card>
          ))}
        </div>
        <p className="text-lg text-gray-600 mt-12">
          Our training modules are based on real-world market experiences and business case studies, ensuring practical applications in the corporate landscape.
        </p>
      </div>
    </section>
  );
};

export default LearningPrograms;
