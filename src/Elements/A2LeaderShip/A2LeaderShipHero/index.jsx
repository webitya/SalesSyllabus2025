import React from "react";
import { Link } from "react-router-dom";

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
           <Link to="https://calendly.com/salessyllabus" target="_blank">
           <button className="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow hover:bg-blue-700">
              Get Started
            </button>
           </Link>
          </div>
        </div>

      
 <div className="flex justify-center">
          <img src="/warimg2.png" alt="Sales & Marketing War Room1" className="w-80" />
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
