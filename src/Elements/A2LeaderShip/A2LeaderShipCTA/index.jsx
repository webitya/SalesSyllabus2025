import { Link } from "react-router-dom";

export default function A2LeaderShipCTA() {
    return (
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* CTA Heading */}
          <h2 className="text-4xl font-bold mb-6">
            Drive Business Growth with the Right Sales and Marketing Leaders
          </h2>
  
          {/* CTA Description */}
          <p className="text-lg mb-8">
            Don’t let poor sales and marketing leadership hold your company back. Partner with Sales Syllabus to hire visionary sales and marketing leaders who can transform your business.
          </p>
  
          {/* CTA Button */}
          <Link to="https://calendly.com/salessyllabus" target="_blank">
          <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-full text-lg shadow-md hover:bg-gray-200 transition duration-300">
            Get in Touch Today
          </button>
          </Link>
        </div>
      </section>
    );
  }
  