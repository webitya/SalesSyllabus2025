import React from "react";

const CommunityBuildingHero = () => {
  return (
    <>
      <section className="relative bg-gray-100 text-gray-900 py-16 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
              Unlock the Power of Community for Scalable Growth
            </h1>
            <p className="mt-4 text-lg font-semibold text-gray-700">
              <strong>What is Community Building?</strong>
            </p>
            <p className="mt-4 text-gray-700">
              Community building is the strategic process of engaging with prospects and customers by providing value, 
              fostering discussions, and building relationships around shared interests, with the goal of nurturing trust, 
              credibility, and long-term business growth.
            </p>
            <div className="mt-8">
              <button className="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow hover:bg-blue-700">
                Get Started
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img src="/comm1.png" alt="Community Building" className="w-80" />
          </div>
        </div>
      </section>

      <div className="pt-5 pb-10 px-6 mx-auto bg-white">
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-4">
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
            Introduction
          </span>
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed text-center">
          A thriving community creates meaningful engagement, builds brand loyalty, and fosters long-term relationships. 
          By nurturing a strong community, businesses can drive organic growth, enhance customer retention, and establish 
          themselves as trusted industry leaders.
        </p>
      </div>
    </>
  );
};

export default CommunityBuildingHero;
