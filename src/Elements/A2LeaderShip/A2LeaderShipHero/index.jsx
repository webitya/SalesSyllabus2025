import React from "react";
import Chart from "react-apexcharts";

const A2LeaderShipHero = () => {
  const chartOptions = {
    options: {
      chart: {
        type: "area",
        toolbar: {
          show: false,
        },
        animations: {
          enabled: true,
          easing: "easeout", // Smooth animation
          speed: 800, // Animation duration in ms
          animateGradually: {
            enabled: true,
            delay: 150, // Staggered animation effect
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350, // Makes the chart grow smoothly
          },
        },
      },
      colors: ["#ffffff"], // White graph line
      stroke: {
        curve: "smooth",
        width: 2,
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          shadeIntensity: 0.1,
          opacityFrom: 0.2,
          opacityTo: 0,
          stops: [0, 100],
        },
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ["#000000"], // Black text for data points
          fontSize: "14px",
          fontWeight: "bold",
        },
      },
      xaxis: {
        categories: ["Q1", "Q2", "Q3", "Q4"],
        title: {
          text: "Quarters",
          style: { color: "#ffffff", fontSize: "14px" },
        },
        labels: {
          style: { colors: "#ffffff" },
        },
      },
      yaxis: {
        title: {
          text: "Sales Growth (in Million $)",
          style: { color: "#ffffff", fontSize: "14px" },
        },
        labels: {
          style: { colors: "#ffffff" },
        },
      },
      grid: {
        borderColor: "rgba(255, 255, 255, 0.3)", // Light white grid for a subtle effect
      },
      tooltip: {
        theme: "dark",
      },
    },
    series: [
      {
        name: "Sales Growth",
        data: [12, 18, 25, 32], // Sample Sales Data
      },
    ],
  };

  return (
    <>
      <section className="relative bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white py-16 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Sales and Marketing Leadership Hiring
            </h1>
            <p className="mt-4 text-lg">
              <strong>Empowering Your Board to Drive Revenue Success</strong>
            </p>
            <p className="mt-6">
              A strong sales and marketing leadership team is the foundation of
              any successful business. The right leaders drive strategy, foster
              innovation, and create a high-performance culture. However, poor
              leadership hiring can lead to stagnation, high attrition, and
              missed revenue opportunities.
            </p>
            <p className="mt-4">
              At <strong>Sales Syllabus</strong>, we specialize in identifying
              and onboarding high-impact sales and marketing leaders who not
              only fit your organizational culture but also contribute to
              revenue growth and business transformation.
            </p>
            <div className="mt-8">
              <button className="bg-white text-indigo-600 font-medium px-6 py-3 rounded-lg shadow hover:bg-gray-100">
                Get Started
              </button>
            </div>
          </div>

          {/* Right Content - Animated Graph */}
          <div className="md:w-1/2 bg-white/10 p-4 rounded-lg shadow-lg">
            <Chart options={chartOptions.options} series={chartOptions.series} type="area" height={350} />
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </section>
    </>
  );
};

export default A2LeaderShipHero;
