import React from "react";
import Chart from "react-apexcharts";
import { motion } from "framer-motion";

const chartData = {
  series: [{ name: "Leads", data: [10, 25, 40, 60, 90, 120, 150] }],
  options: {
    chart: { type: "line", toolbar: { show: false } },
    stroke: { curve: "smooth", width: 3 },
    markers: { size: 4, colors: ["#4C9AFF"], strokeColors: "#fff" },
    xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], labels: { style: { colors: "#D1D5DB" } } },
    yaxis: { labels: { style: { colors: "#D1D5DB" } } },
    grid: { show: false },
    colors: ["#4C9AFF"],
    tooltip: { theme: "dark" },
  },
};

const DataDrivenInsights = () => {
  return (
    <section className="bg-[#0A192F] text-white py-16 px-6 md:px-12 text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Data-Driven <span className="text-blue-400">Insights</span>
      </motion.h2>
      <p className="text-gray-300 max-w-2xl mx-auto">
        Track your business growth with real-time analytics.
      </p>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-[#1E3A5F] p-5 rounded-xl shadow-lg mt-8"
      >
        <Chart options={chartData.options} series={chartData.series} type="line" height={300} />
      </motion.div>
    </section>
  );
};

export default DataDrivenInsights;