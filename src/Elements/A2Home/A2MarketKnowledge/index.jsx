import { LineChartOutlined, BarChartOutlined, FileTextOutlined, BookOutlined, CheckCircleOutlined } from "@ant-design/icons";

const MarketKnowledgeSection = () => {
  return (
    <section className="bg-gray-100 py-20 px-6 md:px-16 text-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-blue-900 mb-8">
          How We Build Market Knowledge & Insights
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex items-start space-x-4 p-6 bg-white shadow-md rounded-lg border border-gray-200">
            <LineChartOutlined className="text-blue-600 text-3xl" />
            <div>
              <h3 className="text-lg font-medium text-gray-900">Real-World Market Research</h3>
              <p className="text-base text-gray-700">Identify success & failure patterns across industries.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-6 bg-white shadow-md rounded-lg border border-gray-200">
            <BarChartOutlined className="text-blue-600 text-3xl" />
            <div>
              <h3 className="text-lg font-medium text-gray-900">Data-Driven Sales & Marketing Insights</h3>
              <p className="text-base text-gray-700">Optimize strategies based on proven results.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-6 bg-white shadow-md rounded-lg border border-gray-200">
            <FileTextOutlined className="text-blue-600 text-3xl" />
            <div>
              <h3 className="text-lg font-medium text-gray-900">Structured Standard Operating Procedures (SOPs)</h3>
              <p className="text-base text-gray-700">Improve sales execution with tested frameworks.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-6 bg-white shadow-md rounded-lg border border-gray-200">
            <BookOutlined className="text-blue-600 text-3xl" />
            <div>
              <h3 className="text-lg font-medium text-gray-900">Industry-Specific Training & Learning Programs</h3>
              <p className="text-base text-gray-700">Equip teams with actionable knowledge.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-6 bg-white shadow-md rounded-lg border border-gray-200">
            <CheckCircleOutlined className="text-blue-600 text-3xl" />
            <div>
              <h3 className="text-lg font-medium text-gray-900">Implementation & Execution Support</h3>
              <p className="text-base text-gray-700">Ensure measurable success through consulting & coaching.</p>
            </div>
          </div>
        </div>

        <p className="text-lg text-gray-800 mt-10 font-medium">
          📌 Reduce trial-and-error, make informed decisions, and drive revenue with confidence.
        </p>
      </div>
    </section>
  );
};

export default MarketKnowledgeSection;
