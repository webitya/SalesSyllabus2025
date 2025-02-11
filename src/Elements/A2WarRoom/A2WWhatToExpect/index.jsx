import { TeamOutlined, SolutionOutlined, CrownOutlined } from "@ant-design/icons";

const expectations = [
  {
    icon: <TeamOutlined className="text-blue-600 text-4xl" />,
    title: "Client-Facing Teams",
    description: "Equip your frontline staff with the tools and insights to solve customer problems instantly.",
  },
  {
    icon: <SolutionOutlined className="text-blue-600 text-4xl" />,
    title: "Managers",
    description: "Empower managers with the strategic framework to resolve issues quickly and keep teams aligned.",
  },
  {
    icon: <CrownOutlined className="text-blue-600 text-4xl" />,
    title: "Leadership",
    description: "Provide top-tier leadership with critical insights and data to optimize strategies and drive growth.",
  },
];

const A2WWhatToExpect = () => {
  return (
    <section className="px-6 py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">What to Expect from the Sales & Marketing War Room</h2>
        <p className="mt-4 text-lg text-gray-600">Each session is designed to tackle operational challenges at every level of your organization.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-5xl mx-auto">
        {expectations.map((item, index) => (
          <div key={index} className="bg-white p-6 shadow-md rounded-lg border text-center">
            {item.icon}
            <h3 className="text-xl font-semibold text-gray-900 mt-4">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default A2WWhatToExpect;
