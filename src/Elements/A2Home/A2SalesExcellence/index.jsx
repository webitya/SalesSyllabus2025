import { BulbOutlined, LineChartOutlined, SyncOutlined } from "@ant-design/icons";

const A2SalesExcellenceSection = () => {
  const services = [
    {
      icon: <BulbOutlined className="text-white text-3xl animate-spin-slow" />, 
      title: "Sales & Marketing Strategy Optimization",
      description: "Develop proven, data-driven frameworks."
    },
    {
      icon: <LineChartOutlined className="text-white text-3xl animate-bounce" />, 
      title: "Lead-to-Closure Process Improvement",
      description: "Refine every stage of your sales funnel."
    },
    {
      icon: <SyncOutlined className="text-white text-3xl animate-spin" />, 
      title: "Go-To-Market (GTM) Execution",
      description: "Build precise strategies for market success."
    }
  ];

  return (
    <section className="bg-gray-100 py-12 px-6 md:px-12 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">
          Unlock Sales Excellence with Sales Syllabus
        </h2>
        <p className="text-gray-700 text-lg mb-8">
          Gain deep industry insights for lead generation, sales closures, and sales & marketing team management.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg p-6 rounded-xl flex flex-col items-center border border-gray-200 hover:shadow-xl transition-transform transform hover:scale-105">
              <div className="bg-blue-600 p-4 rounded-full mb-4 flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-700 text-sm text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default A2SalesExcellenceSection;