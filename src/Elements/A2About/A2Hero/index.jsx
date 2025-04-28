import React from 'react';
import { Button, Card } from 'antd';
import { Link as ScrollLink } from 'react-scroll';
import { RightOutlined, StarOutlined, BarChartOutlined } from '@ant-design/icons';
import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="w-full md:py-24 py-16 relative" style={{ backgroundColor: "#007B82" }}>
      
      {/* Background Decorative Image */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: "url('https://source.unsplash.com/1600x900/?sales,marketing,teamwork')"
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between h-full">

        {/* Left Side - Text and CTA */}
        <div className="md:w-1/2 text-left md:pr-8 animate__animated animate__fadeInLeft space-y-6">
        <h1 className="text-3xl md:text-3xl font-bold text-white leading-tight mb-6">
        Helping Organizations Build Sales & Marketing Teams That Perform, Scale & Deliver Growth
          </h1>
         
          <p className="text-lg mb-4 md:text-xl text-white opacity-90">
            We help businesses hire the right people, train them with real-world insights, and empower them with strategies to drive scalable, predictable revenue growth.
          </p>
         
            <Link to="/services" target='_blank'>
            <Button
              size="large"
              className="rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-semibold hover:from-blue-700 hover:to-green-700 transition-transform transform hover:scale-105 shadow-lg"
              icon={<RightOutlined />}
            >
              Explore Our Solutions
            </Button>
            </Link>
        
        </div>

        {/* Right Side - Feature Cards */}
        <div className="md:w-1/2 mt-12 md:mt-0 grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Feature 1 */}
          <Card
            className="text-white shadow-2xl rounded-2xl transform hover:scale-105 transition-transform duration-300"
            bordered={false}
            style={{ backgroundColor: "#1C54BC" }}
          >
            <div className="flex items-center">
              <BarChartOutlined className="text-4xl text-white mr-4 animate__animated animate__pulse animate__infinite" />
              <h3 className="text-2xl font-semibold">Data-Driven Mindset</h3>
            </div>
            <p className="mt-4 text-gray-200">
              Infusing real-world data intelligence into your sales and marketing management for predictable results.
            </p>
          </Card>

          {/* Feature 2 */}
          <Card
            className="text-white shadow-2xl rounded-2xl transform hover:scale-105 transition-transform duration-300"
            bordered={false}
            style={{ backgroundColor: "#F49464" }}
          >
            <div className="flex items-center">
              <StarOutlined className="text-4xl text-white mr-4 animate__animated animate__pulse animate__infinite" />
              <h3 className="text-2xl font-semibold">Hands-On Expertise</h3>
            </div>
            <p className="mt-4 text-gray-200">
              Our seasoned experts guide your teams with practical strategies tailored for sustainable scaling.
            </p>
          </Card>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;
