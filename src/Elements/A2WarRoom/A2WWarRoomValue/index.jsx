import { ClockCircleOutlined, BarChartOutlined, DatabaseOutlined, RocketOutlined } from "@ant-design/icons";

const valuePoints = [
  {
    icon: <ClockCircleOutlined className="text-gray-400 text-3xl" />,
    title: "90% Faster Problem Resolution",
    description: "Reduce internal issue resolution time and boost team productivity.",
  },
  {
    icon: <BarChartOutlined className="text-gray-400 text-3xl" />,
    title: "Boosted Sales & Marketing Productivity",
    description: "Eliminate bottlenecks so teams can focus on revenue-generating activities.",
  },
  {
    icon: <DatabaseOutlined className="text-gray-400 text-3xl" />,
    title: "Data-Driven Insights",
    description: "Make informed decisions faster with real-time insights and analytics.",
  },
  {
    icon: <RocketOutlined className="text-gray-400 text-3xl" />,
    title: "Accelerated Growth",
    description: "Streamline operations and enhance efficiency for rapid business growth.",
  },
];

const WarRoomValue = () => {
  return (
    <section className="px-6 py-20 bg-gray-50">
      <div className=" mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">How the Sales & Marketing War Room Adds Value</h2>
        <p className="mt-4 text-lg text-gray-600">Our structured, results-driven approach helps optimize your sales and marketing operations efficiently.</p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10  mx-auto">
        {valuePoints.map((point, index) => (
          <div key={index} className="p-6 rounded-lg shadow-sm border bg-white flex items-start space-x-4">
            <div className="p-3 rounded-full bg-gray-100">{point.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{point.title}</h3>
              <p className="text-gray-600 mt-1">{point.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WarRoomValue;
