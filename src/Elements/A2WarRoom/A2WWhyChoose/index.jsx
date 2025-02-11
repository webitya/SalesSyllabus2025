import { ThunderboltOutlined, ClockCircleOutlined, LineChartOutlined } from "@ant-design/icons";

const A2WWhyChooseWarRoom = () => {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Why Choose the Sales & Marketing War Room?</h2>
          <p className="mt-4 text-lg text-gray-700">
            In today’s fast-moving business environment, inefficiencies and unresolved problems in your sales and marketing teams can cost you time, productivity, and revenue. 
            Our high-impact, monthly sessions help eliminate roadblocks and drive revenue growth.
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-start space-x-3">
              <ThunderboltOutlined className="text-blue-600 text-2xl" />
              <span className="text-gray-700 text-lg">Resolve sales and marketing challenges 90% faster.</span>
            </li>
            <li className="flex items-start space-x-3">
              <ClockCircleOutlined className="text-blue-600 text-2xl" />
              <span className="text-gray-700 text-lg">Eliminate bottlenecks and inefficiencies, allowing teams to focus on growth.</span>
            </li>
            <li className="flex items-start space-x-3">
              <LineChartOutlined className="text-blue-600 text-2xl" />
              <span className="text-gray-700 text-lg">Make data-driven decisions that optimize strategies and drive business results.</span>
            </li>
          </ul>
        </div>

        {/* Right Side - Infographic (Placeholder) */}
        <div className="flex justify-center">
          <img src="/images/why-war-room.png" alt="Why Choose War Room" className="w-80" />
        </div>
      </div>
    </section>
  );
};

export default A2WWhyChooseWarRoom;
