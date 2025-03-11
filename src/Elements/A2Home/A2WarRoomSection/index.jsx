import { SolutionOutlined, TeamOutlined, BookOutlined } from "@ant-design/icons";

const WarRoomSection = () => {
  const services = [
    {
      icon: <SolutionOutlined className="text-blue-600 text-3xl animate-pulse" />, 
      title: "Live Deal-Closing Support",
      description: "Tactical coaching for high-stakes negotiations."
    },
    {
      icon: <TeamOutlined className="text-blue-600 text-3xl animate-bounce" />, 
      title: "Problem Discussion Platform",
      description: "Gain access to top leadership talent in sales and marketing and enable them to tackle the most complex sales and marketing challenges effectively."
    },
    {
      icon: <BookOutlined className="text-blue-600 text-3xl animate-spin-slow" />, 
      title: "Tactical Sales Playbooks",
      description: "Execute winning strategies for different sales and marketing scenarios."
    }
  ];

  return (
    <section className="bg-gray-200 py-20 px-6 md:px-12 text-center text-gray-900">
      <div className=" mx-auto">
        
        <h2 className="text-3xl font-bold text-blue-900 mb-8">
        War Room: Real-Time Sales Execution & Strategy Support
        </h2>
        <p className="text-base mb-6 max-w-3xl mx-auto text-gray-700">
        A high-impact, hands-on problem-solving environment where your sales and marketing teams get:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-md p-4 rounded-lg flex flex-col items-center border border-gray-200 hover:shadow-lg transition-transform transform hover:scale-105">
              <div className="bg-gray-200 p-3 rounded-full mb-3 flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-md font-semibold mb-1 text-center">{service.title}</h3>
              <p className="text-gray-600 text-sm text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WarRoomSection;
