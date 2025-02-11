import { CheckCircleOutlined } from "@ant-design/icons";

const keyTakeaways = [
  { id: 1, text: "How to hire and onboard the right sales & marketing professionals" },
  { id: 2, text: "Structuring your sales & marketing team for maximum efficiency" },
  { id: 3, text: "Aligning sales and marketing to drive revenue growth" },
  { id: 4, text: "Creating a performance-driven culture" },
  { id: 5, text: "Sales & marketing automation tools to streamline processes" },
  { id: 6, text: "Building KPI-driven sales & marketing strategies" },
  { id: 7, text: "Leadership techniques to enhance team productivity" },
];

const A2MasterKeyTakeaways = () => {
  return (
    <section className="px-6 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Title & Description */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Key Takeaways</h2>
          <p className="mt-4 text-lg text-gray-700">
            Learn proven strategies and frameworks to build, scale, and manage high-performance sales & marketing teams.
          </p>
        </div>

        {/* Right Side - List of Takeaways */}
        <div>
          <ul className="space-y-4">
            {keyTakeaways.map((item) => (
              <li key={item.id} className="flex items-center text-gray-700">
                <CheckCircleOutlined className="text-blue-500 text-2xl mr-3" /> 
                {item.text}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default A2MasterKeyTakeaways;
