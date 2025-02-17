import React from "react";
import { SolutionOutlined, TeamOutlined, RiseOutlined, AimOutlined } from "@ant-design/icons";

const SalesMarketingInfographic = () => {
  return (
   <>
    <section className="relative bg-gray-100 text-gray-900 py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
            Sales and Marketing Leadership Hiring
          </h1>
          <p className="mt-4 text-lg font-semibold text-gray-700">
            <strong>Empowering Your Board to Drive Revenue Success</strong>
          </p>
          <p className="mt-4 text-gray-700">
            At <strong>Sales Syllabus</strong>, we specialize in identifying and
            onboarding high-impact sales and marketing leaders who fit your
            organizational culture and drive business transformation.
          </p>
          <div className="mt-8">
            <button className="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Content - Infographic */}
        <div className="flex justify-center">
  <svg
    className="w-60 md:w-80 transition-transform duration-300 hover:scale-105"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >

    <circle cx="100" cy="100" r="80" stroke="#006EEA" strokeWidth="6" fill="none" />


    <rect x="75" y="110" width="10" height="30" fill="#374151" />
    <rect x="95" y="90" width="10" height="50" fill="#F59E0B" />
    <rect x="115" y="100" width="10" height="40" fill="#374151" />


    <path d="M70 80 L100 50 L130 80" stroke="#006EEA" strokeWidth="6" fill="none" />


    <circle cx="100" cy="140" r="8" fill="#F59E0B" />
  </svg>
</div>





      </div>
      
    </section>

    <div className="pt-5 pb-10 px-6  mx-auto bg-white ">
  <h1 className="text-center text-3xl font-bold text-gray-800 mb-4">
    <span className="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
      Introduction
    </span>
  </h1>
  <p className="text-lg text-gray-600 leading-relaxed text-center">
    A strong sales and marketing leadership team is the foundation of any successful business. The right leaders drive strategy, foster innovation, and create a high-performance culture. However, poor leadership hiring can lead to stagnation, high attrition, and missed revenue opportunities.
  </p>
</div>

   
   </>
  );
};

export default SalesMarketingInfographic;
