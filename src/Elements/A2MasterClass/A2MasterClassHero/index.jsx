import { BookOutlined, CheckCircleOutlined } from "@ant-design/icons";

const MasterclassHero = () => {
  return (
    <section className="px-6 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Text Content */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Sales Syllabus Masterclass: <br />
            <span className="text-blue-600">Build & Manage High-Performance Sales & Marketing Teams</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Master the art of building, scaling, and managing a high-performance revenue team. 
            Learn from industry experts and apply proven frameworks for success.
          </p>

          {/* CTA Button */}
          <div className="mt-6">
            <a
              href="#register"
              className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              <BookOutlined className="mr-2 text-xl" /> Register Now
            </a>
          </div>
        </div>

        {/* Right Side - Minimal Infographic */}
        <div className="flex justify-center">
          <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">Masterclass Includes:</h3>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li className="flex items-center">
                <CheckCircleOutlined className="text-blue-500 mr-2 text-xl" /> Learn from Industry Experts
              </li>
              <li className="flex items-center">
                <CheckCircleOutlined className="text-blue-500 mr-2 text-xl" /> Proven Frameworks for Team Building
              </li>
              <li className="flex items-center">
                <CheckCircleOutlined className="text-blue-500 mr-2 text-xl" /> Hands-on Strategies for Immediate Implementation
              </li>
              <li className="flex items-center">
                <CheckCircleOutlined className="text-blue-500 mr-2 text-xl" /> Networking with Business Leaders
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterclassHero;
