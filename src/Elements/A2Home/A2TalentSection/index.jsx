import { UserOutlined, SolutionOutlined, RocketOutlined, BulbOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { Card } from "antd";

const SalesReadyTalent = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 text-gray-900">
      <div className=" mx-auto text-center">
        <h2 className="text-3xl font-semibold text-blue-900 mb-4">
          Sales-Ready Talent (Pre-Trained Sales Professionals)
        </h2>
        <p className="text text-gray-700 mb-6">
          Hire industry-specific sales professionals trained on real-world strategies, ready to drive results from day one.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3 p-4 bg-white shadow-sm rounded-lg border border-gray-200">
            <div className="bg-blue-600 p-3 rounded-full flex items-center justify-center">
              <UserOutlined className="text-white text-lg" />
            </div>
            <div>
              <h3 className="text font-medium text-gray-900">Pre-Trained & Industry-Ready Sales Talent</h3>
              <p className="text text-gray-600">Skip the learning curve, start selling immediately.</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-4 bg-white shadow-sm rounded-lg border border-gray-200">
            <div className="bg-blue-600 p-3 rounded-full flex items-center justify-center">
              <SolutionOutlined className="text-white text-lg" />
            </div>
            <div>
              <h3 className="text font-medium text-gray-900">Sales Performance Support & Coaching</h3>
              <p className="text text-gray-600">Continuous skill development for sustained success.</p>
            </div>
          </div>
        </div>
        {/* ==== */}
        
        <div className="flex justify-center items-center py-5">
      <Card
        className="w-full border border-gray-200"
        title={
          <div className="text-center text-xl font-bold text-blue-900">
            <RocketOutlined className="text-blue-700 mr-2" /> Knowledge + Execution = 
            <span className="text-blue-700"> Revenue Success</span>
          </div>
        }
      >
        <p className="text-gray-800 text-center text-xl">
          At <span className="text-blue-700">Sales Syllabus</span>, we help businesses avoid costly sales mistakes by providing the  
          <span className="text-blue-600"> right knowledge</span>,  
          <span className="text-blue-600"> right strategies</span>, and  
          <span className="text-blue-600"> right people</span>.  
          Sales success happens when knowledge is embedded in the organization and teams are trained to execute it with precision.
        </p>
        <p className="text-lg text-gray-900  mt-4 text-left pt-5">
          <BulbOutlined className="text-yellow-500 mr-2" />
          Success isn’t about working harder—it’s about <span className="text-blue-700 font-semibold">working smarter</span> with the right knowledge and execution.
        </p>
        <p className="text-xl text-blue-800  mt-6 text-left">
          <CheckCircleOutlined className="text-green-600 mr-2" />
          Let’s redefine sales success—<span className="text-blue-900">smarter, faster</span>, and with real-world expertise.
        </p>
      </Card>
    </div>
{/* ==== */}

      </div>
    </section>
  );
};

export default SalesReadyTalent;
