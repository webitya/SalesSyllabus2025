import React, { lazy, Suspense } from 'react';
import { Row, Col, Spin } from 'antd';
import 'tailwindcss/tailwind.css';
import "./A2AbVisi.css"; // Keep your custom CSS here

const ApexChart = lazy(() => import('react-apexcharts'));

const chartOptions = {
  chart: { 
    type: 'radialBar', 
    background: 'transparent',
  },
  plotOptions: {
    radialBar: {
      hollow: { size: '70%' },
      dataLabels: {
        showOn: 'always',
        name: { 
          show: true, 
          fontSize: '18px', 
          offsetY: -10, 
          color: '#4A4A4A',
        },
        value: { 
          show: true, 
          fontSize: '24px', 
          offsetY: 10, 
          color: '#007B82', 
          fontWeight: 'bold',
        },
      },
    },
  },
  labels: ['Growth Focus'],
  colors: ['#007B82'],
  stroke: {
    lineCap: 'round',
    width: 5,
  },
  tooltip: {
    theme: 'light',
  },
};

const chartSeries = [90];

const AboutOurVision = () => {
  return (
    <section className="relative w-full py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-100 overflow-hidden">

      {/* Decorative Top Divider */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-indigo-200 to-transparent"></div>

      <Row gutter={[48, 48]} className="flex items-center mx-auto px-6 lg:px-20 relative z-10">

        {/* Left: Vision Content */}
        <Col xs={24} lg={12} className="space-y-6 animate-fade-in-left">
          {/* <h2 className="text-5xl font-extrabold text-gray-800 mb-4 leading-tight">Our Vision</h2> */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight">
                Our Vision
              </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            To empower every business to build performing sales and marketing teams that fuel predictable, sustainable growth.
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            We believe great growth doesn’t come from theory or luck — it comes from:
          </p>

          <ul className="list-disc pl-6 text-lg md:text-xl text-gray-700 space-y-3">
            <li>The right people</li>
            <li>The right mindset and skills</li>
            <li>Working under the right structure and strategy</li>
          </ul>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            We’re here to help companies build that system — with less trial-and-error, and more clarity, speed, and precision.
          </p>
        </Col>

        {/* Right: Chart */}
        <Col xs={24} lg={12} className="flex justify-center animate-fade-in-right">
          <div className="w-full max-w-md p-8 rounded-2xl bg-white/50 backdrop-blur-md shadow-2xl border border-gray-200">
            <Suspense fallback={<Spin size="large" />}>
              <ApexChart
                options={chartOptions}
                series={chartSeries}
                type="radialBar"
                height={320}
              />
            </Suspense>
          </div>
        </Col>

      </Row>
    </section>
  );
};

export default AboutOurVision;
