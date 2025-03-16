import {  RocketOutlined, BulbOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { Card } from "antd";

const SalesReadyTalent = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-12 text-gray-900">
      <div className=" mx-auto text-center">
       
        
        
        {/* ==== */}
        
        <div className="flex justify-center items-center py-5">
      <Card
        className="w-full border border-gray-200"
        title={
          <div className="text-center text-xl font-bold text-blue-900 whitespace-normal ">
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
