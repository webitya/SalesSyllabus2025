import { ThunderboltOutlined, ClockCircleOutlined, LineChartOutlined, UserOutlined } from "@ant-design/icons";
import Chart from "react-apexcharts";
import { useState } from "react";

const A2WWhyChooseWarRoom = () => {
  const [chartOptions] = useState({
    chart: { type: "area", toolbar: { show: true }, zoom: { enabled: true } },
    xaxis: { categories: ["Efficiency", "Bottlenecks Removed", "Data-Driven Decisions", "Revenue Growth"] },
    stroke: { curve: "smooth" },
    markers: { size: 6, colors: ["#017BFF"], hover: { size: 10 } },
    colors: ["#0056b3", "#28a745", "#ffc107", "#dc3545"],
    dataLabels: { enabled: true, style: { fontSize: "14px", colors: ["#000"] } },
    tooltip: { enabled: true, theme: "dark" },
    legend: { position: "top", horizontalAlign: "center" },
  });

  const chartSeries = [{ name: "Performance Metrics", data: [90, 80, 85, 95] }];

  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Why Choose the Sales & Marketing War Room?</h2>
          <p className="mt-4 text-gray-700">
            In today's fast moving business environment, inefficiencies and unresolved problems in your sales and marketing teams can cost you time, productivity, and revenue. Our high-impact, monthly sessions help eliminate roadblocks and drive revenue growth.
          </p>
          <ul className="mt-6 space-y-4">
            {[
              { icon: <ThunderboltOutlined />, text: "Resolve sales and marketing challenges 90% faster." },
              { icon: <ClockCircleOutlined />, text: "Eliminate bottlenecks and inefficiencies, allowing teams to focus on growth" },
              { icon: <UserOutlined />, text: "Make data-driven decisions that optimize strategies and drive business results." },
              { icon: <LineChartOutlined />, text: "Improve the productive  time of the sales and marketing team by 40% to 50%." },
            ].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="text-blue-600 text-2xl">{item.icon}</span>
                <span className="text-gray-700">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full flex justify-center">
          <Chart options={chartOptions} series={chartSeries} type="area" height={350} className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default A2WWhyChooseWarRoom;