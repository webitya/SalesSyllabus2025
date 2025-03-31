import { LaptopOutlined, SyncOutlined } from "@ant-design/icons";

export default function A2LeDeliveryModel() {
  return (
    <div className="py-12 bg-gray-100 px-6 md:px-12">
  
<h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Types Of Learning Program </h2>
      {/* <p className="text-gray-700 text-center  mx-auto mb-6">
      Our structured learning approach consists of two key components: 
      </p> */}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        <div className="p-6 bg-white rounded-lg shadow border border-gray-200 flex flex-col items-center text-center">
          <LaptopOutlined className="text-4xl text-blue-700 mb-3" />
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Foundation Program</h3>
          <p className="text-gray-600 text-sm">
          Designed for marketing and sales professionals at all levels, this program provides real-world insights and best practices to enhance expertise and execution.
          </p>
        </div>
        
        <div className="p-6 bg-white rounded-lg shadow border border-gray-200 flex flex-col items-center text-center">
          <SyncOutlined className="text-4xl text-blue-700 mb-3" />
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Continuous Learning Program</h3>
          <p className="text-gray-600 text-sm">
          Focused on ongoing growth, this program delivers industry knowledge and market insights through short, concise lessons, featuring business case studies and proven sales and marketing strategies.
          </p>
        </div>
      </div>
    </div>
  );
}
