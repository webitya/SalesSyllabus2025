import { TeamOutlined, UserSwitchOutlined, SolutionOutlined } from "@ant-design/icons";

const benefits = [
  {
    icon: <TeamOutlined className="text-blue-600 text-4xl" />,
    title: "Recruiters & HR Teams",
    description: "Enhance hiring efficiency with pre-vetted candidates.",
  },
  {
    icon: <UserSwitchOutlined className="text-blue-600 text-4xl" />,
    title: "Founders & Hiring Managers",
    description: "Gain deeper insights into candidate capabilities before hiring.",
  },
  {
    icon: <SolutionOutlined className="text-blue-600 text-4xl" />,
    title: "Staffing Agencies",
    description: "Leverage our expertise to offer high-quality sales & marketing talent.",
  },
];

const A2IntWhoCanBenefit = () => {
  return (
    <section className="px-6 py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">Who Can Benefit?</h2>
        <p className="mt-4 text-lg text-gray-600">Our Interview as a Service model is designed for various hiring professionals.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-5xl mx-auto">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white p-6 shadow-md rounded-lg border text-center">
            {benefit.icon}
            <h3 className="text-xl font-semibold text-gray-900 mt-4">{benefit.title}</h3>
            <p className="text-gray-600 mt-2">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default A2IntWhoCanBenefit;
