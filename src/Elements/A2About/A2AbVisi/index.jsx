import React, { lazy, Suspense } from 'react';
import { Row, Col, Spin } from 'antd';
import 'tailwindcss/tailwind.css';
import "./A2AbVisi.css"

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
          fontSize: '20px', 
          offsetY: 10, 
          color: '#38bdf8', 
        },
      },
    },
  },
  labels: ['Future Growth'],
  colors: ['#38bdf8'], // Accent color for radial bar
  stroke: {
    lineCap: 'round',
    width: 5,
  },
  title: {
    text: 'Growth Potential',
    align: 'center',
    style: {
      fontSize: '20px',
      color: '#4A4A4A',
      fontWeight: 'bold',
    },
  },
  tooltip: {
    theme: 'light',
    x: {
      show: true,
    },
  },
};

const chartSeries = [90];

const AboutOurVision = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-blue-50 to-indigo-50 font-premium">
      <Row gutter={[32, 32]} className="flex items-start mx-auto px-4 lg:px-12">
        <Col xs={24} lg={12} className="space-y-2">
          <h2 className="text-3xl text-gray-800 mb-2">Our Vision</h2>
          <p className="text-base md:text-lg text-gray-700 mb-6">
          We aim to revolutionize sales and marketing operations by embedding a data analysis  mindset into management practices. Our goal is to empower organizations to minimize mistakes and achieve sustained sales and marketing success.

          </p>
          {/* <h2 className="text-3xl text-gray-800 mt-2">Our Approach</h2>
          <p className="text-base md:text-lg text-gray-700 mb-6">
          We follow a data-driven methodology, breaking down the entire process into smaller, structured segments
and aligning them with sales and marketing goals. This approach allows us to identify and resolve
challenges 90% faster; ensuring organizations operate with greater efficiency and precision
          </p> */}
          {/* <ul className="list-disc pl-6 text-base md:text-lg   text-gray-700 space-y-2" style={{fontSize:"18px"}}>
            <li>Streamlined processes for peak performance.</li>
            <li>Data-backed strategies for informed decision-making.</li>
            <li>A unified team culture driven by measurable outcomes.</li>
          </ul> */}
        </Col>

        {/* Right Column: Radial Chart */}
        <Col xs={24} lg={12} className="flex justify-center">
          <div className="w-full bg-white p-8 rounded-lg shadow-xl">
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
