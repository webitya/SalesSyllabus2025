import { CalendarOutlined, EnvironmentOutlined, ClockCircleOutlined, DollarOutlined } from "@ant-design/icons";

const workshopDetails = [
  { id: 1, icon: <CalendarOutlined className="text-blue-500 text-3xl" />, title: "Date", text: "Ongoing every month" },
  { id: 2, icon: <EnvironmentOutlined className="text-blue-500 text-3xl" />, title: "Location", text: "Online/Offline (Hybrid Options Available)" },
  { id: 3, icon: <ClockCircleOutlined className="text-blue-500 text-3xl" />, title: "Duration", text: "4 hours per week, up to 30 days" },
  { id: 4, icon: <DollarOutlined className="text-blue-500 text-3xl" />, title: "Investment", text: "Contact team for details" },
];

const A2MasterWorkshopDetails = () => {
  return (
    <section className="px-6 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Title & Description */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Workshop Details</h2>
          <p className="mt-4 text-lg text-gray-700">
            Join our in-depth masterclass to master the art of building and managing a high-performance sales and marketing team.
          </p>
        </div>

        {/* Workshop Details - 2 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workshopDetails.map((item) => (
            <div key={item.id} className="flex items-center p-4 bg-white shadow-md rounded-lg">
              <div className="mr-4">{item.icon}</div>
              <div>
                <h4 className="text-gray-900 font-semibold">{item.title}</h4>
                <p className="text-gray-700">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default A2MasterWorkshopDetails;
