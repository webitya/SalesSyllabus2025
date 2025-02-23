import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./A2WarRoomHero.css"
const A2WWarRoomHero = () => {
  return (
    <section className="relative px-6 py-20 overflow-hidden bg-gray-50">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 animate-gradient"></div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Text Content with Fade-in */}
        <div className="opacity-0 translate-y-5 animate-fadeIn">
          <h1 className="text-4xl font-bold text-gray-900">
          A high-impact, hands-on problem-solving environment for sales and marketing teams
          </h1>
          <p className="mt-4 text-lg text-gray-700">
          Gain access to top leadership talent in sales and marketing and enable them to tackle the most complex sales and marketing challenges effectively
          </p>
          <Button 
            type="primary" 
            size="large" 
            className="mt-6 bg-blue-600 text-white hover:bg-blue-700 border-none transition-transform duration-300 hover:scale-105" 
            icon={<ArrowRightOutlined />}
          >
            Learn More
          </Button>
        </div>

        {/* Right Side - Key Deliverables with Hover Animation */}
        <div className="flex flex-col space-y-4 text-gray-700 opacity-0 translate-y-5 animate-fadeIn delay-200">
          {[
            { text: "✔ Real-Time Problem Solving", desc: "The War Room acts as a strategic command center where businesses can tackle their most pressing sales and marketing challenges." },
            { text: "✔ Resolve roadblocks", desc: "It helps decision-makers resolve roadblocks in sales performance, marketing execution, and business growth." },
            { text: "✔ Cross-Functional Alignment", desc: "Helps in integrating performance marketing, demand generation, and sales processes seamlessly." },
            { text: "✔ High-Impact Training & Strategy Refinement", desc: "Trains teams on sales strategy, objection handling, negotiation, and high-performance sales frameworks." }
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-4 shadow rounded-lg hover:shadow-lg transition-transform duration-300 hover:-translate-y-1"
            >
              <strong>{item.text}</strong> - {item.desc}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default A2WWarRoomHero;