import React from "react";
import { Button } from "antd";
import { LineChartOutlined } from "@ant-design/icons";
import ReactApexChart from "react-apexcharts";
import { Link } from "react-scroll"; // Importing Link from react-scroll

const A2BHero = () => {
  const chartOptions = {
    chart: {
      type: "bar", // 'bar' chart
      height: 400,
      animations: {
        enabled: true,
      },
      toolbar: {
        show: false, // Remove the toolbar from the chart
      },
      background: "transparent", // Transparent background to match section's background
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      labels: {
        style: {
          colors: "#FFFFFF", // Light color for x-axis labels to improve contrast
          fontSize: "14px",
        },
      },
    },
    series: [
      {
        name: "Engagement",
        data: [30, 45, 35, 50, 49, 60],
      },
    ],
    colors: ["#4CAF50"], // Green color for the bars
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: ["#FFFFFF"], // Gradient from light green to a darker shade
        opacityFrom: 0.7,
        opacityTo: 0.1,
      },
    },
    stroke: {
      show: true,
      width: 2, // Width of the border around bars
      colors: ["#FFFFFF"], // Border color set to white
    },
    title: {
      text: "Monthly Engagement Growth",
      align: "center",
      style: {
        color: "#FFFFFF", // Light title color
        fontSize: "20px",
        fontWeight: "bold",
      },
    },
    theme: {
      mode: "dark",
    },
    grid: {
      borderColor: "rgba(255, 255, 255, 0.2)", // Subtle grid line color
    },
    tooltip: {
      theme: "dark",
    },
  };

  return (
    <section
      className=" text-white pt-20 pb-5 md:px-8 px-2 flex flex-col md:flex-row items-center justify-center space-y-1 md:space-y-0 md:space-x-1"
      style={{ backgroundColor: "#1E3A8A" }}
    >
      <div className="flex-1 text-center md:text-left animate__animated animate__fadeIn animate__delay-0.5s">
        <h1 className="md:text-4xl text-3xl font-bold mb-4 leading-tight animate__animated animate__fadeIn animate__delay-0.5s">
        Building trust and positioning your brand as an industry expert.- Unlock the Power of Community for Scalable Growth
        </h1>
      </div>
      <div className="flex-1 w-full mt-8 md:mt-0">
        <ReactApexChart
          options={chartOptions}
          series={chartOptions.series}
          type="bar"
          height={400}
        />
      </div>
    </section>
  );
};

export default A2BHero;
