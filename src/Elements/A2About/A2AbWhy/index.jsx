import React, { lazy, Suspense } from "react";
import { Row, Col, Card, Spin } from "antd";
import "tailwindcss/tailwind.css";

const ApexChart = lazy(() => import("react-apexcharts"));

const chartOptions = {
  chart: { type: "area", background: "transparent" },
  stroke: { curve: "smooth", width: 2 },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 0.8,
      opacityFrom: 0.3,
      opacityTo: 0.7,
      stops: [0, 100],
    },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    labels: { style: { colors: "#4A4A4A", fontSize: "12px" } },
  },
  yaxis: { labels: { style: { colors: "#4A4A4A", fontSize: "12px" } } },
  title: {
    text: "Growth Over Time",
    align: "center",
    style: { fontSize: "14px", color: "#4A4A4A", fontWeight: "bold" },
  },
  colors: ["#93c5fd", "#38bdf8"],
  tooltip: { theme: "light", x: { show: true } },
};

const chartSeries = [{ name: "Growth Potential", data: [10, 20, 30, 40, 50, 60, 70] }];

const AboutWhoWeAre = () => {
  return (
    <section className="w-full bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Row gutter={[24, 24]} align="middle">
          
          {/* Text Content */}
          <Col xs={24} md={12}>
            <div className="space-y-5">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight">
                Who We Are
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold text-blue-600">Sales Syllabus</span> is India’s only <span className="font-semibold text-blue-600">Performance-First Sales & Marketing Talent Platform</span>.
                <br /><br />
                We exist to solve one of the biggest problems in business: <span className="font-semibold">How do you build a team that doesn't just work — but performs, grows, and scales revenue predictably?</span>
                <br /><br />
                We help organizations from ₹1 Cr to ₹1,000 Cr in revenue hire the right people, train them with real-world knowledge, and drive sales and marketing results.
                <br /><br />
                Whether you’re hiring your first sales rep, setting up a national team, or preparing your managers to lead — we provide the <span className="font-semibold text-blue-600">talent, tools, and training</span> needed for scalable success.
              </p>
            </div>
          </Col>

          {/* Chart Content */}
          <Col xs={24} md={12}>
            <Card className="shadow-2xl rounded-2xl overflow-hidden border-0">
              <Suspense fallback={<div className="flex justify-center items-center h-64"><Spin size="large" /></div>}>
                <ApexChart options={chartOptions} series={chartSeries} type="area" height={300} width="100%" />
              </Suspense>
            </Card>
          </Col>

        </Row>
      </div>
    </section>
  );
};

export default AboutWhoWeAre;
