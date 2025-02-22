import { ThunderboltOutlined, ClockCircleOutlined, LineChartOutlined } from "@ant-design/icons";
import Chart from "react-apexcharts";

const chartOptions = {
  chart: {
    type: "bar",
    toolbar: { show: false },
  },
  xaxis: {
    categories: ["Efficiency", "Bottlenecks Removed", "Data-Driven Decisions", "Revenue Growth"],
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "70%",
      distributed: true,
    },
  },
  colors: ["#FF5733", "#33B5E5", "#FFC107", "#28A745"], // Different business colors
  dataLabels: {
    enabled: true,
    style: {
      fontSize: "14px",
      colors: ["#fff"],
    },
  },
  legend: {
    position: "top",
    horizontalAlign: "center",
  },
};

const chartSeries = [
  {
    name: "Performance Metrics",
    data: [90, 80, 85, 95],
  },
];

const A2WWhyChooseWarRoom = () => {
  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900">Why Choose the Sales & Marketing War Room?</h2>
          <p className="mt-6 text-lg text-gray-700">
            In today’s fast-moving business environment, inefficiencies and unresolved problems in your sales and marketing teams can cost you time, productivity, and revenue. 
            Our high-impact, monthly sessions help eliminate roadblocks and drive revenue growth.
          </p>
          <ul className="mt-8 space-y-5">
            <li className="flex items-start space-x-4">
              <ThunderboltOutlined className="text-blue-600 text-3xl" />
              <span className="text-gray-700 text-lg">Resolve sales and marketing challenges 90% faster.</span>
            </li>
            <li className="flex items-start space-x-4">
              <ClockCircleOutlined className="text-blue-600 text-3xl" />
              <span className="text-gray-700 text-lg">Eliminate bottlenecks and inefficiencies, allowing teams to focus on growth.</span>
            </li>
            <li className="flex items-start space-x-4">
              <LineChartOutlined className="text-blue-600 text-3xl" />
              <span className="text-gray-700 text-lg">Make data-driven decisions that optimize strategies and drive business results.</span>
            </li>
          </ul>
        </div>

        {/* Right Side - Bigger Bar Chart with Different Business Colors */}
        <div className="flex justify-center w-full">
          <Chart options={chartOptions} series={chartSeries} type="bar" height={400} className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default A2WWhyChooseWarRoom;