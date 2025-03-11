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
      description: "A comprehensive program for entrepreneurs and senior leaders covering all aspects of business growth and leadership.",
      icon: <CrownOutlined className="text-4xl text-yellow-500" />,
    },
  ];

  return (
    <section className="py-12 bg-gray-100 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Our Learning Programs</h2>
        <p className="text-gray-600 mb-8">
          We categorize our learning programs into three segments, ensuring that professionals at every level gain valuable insights and skills.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <Card key={index} className="shadow-lg rounded-xl p-6 text-left">
              <div className="flex items-center gap-4">
                {program.icon}
                <h3 className="text-xl font-semibold">{program.title}</h3>
              </div>
              <p className="text-gray-500 mt-2">{program.description}</p>
            </Card>
          ))}
        </div>
        <p className="text-gray-600 mt-8">
          Our training programs are built on real market experiences and business case studies, ensuring practical, job-relevant applications.
        </p>
      </div>
    </section>
  );
};

export default LearningPrograms;
