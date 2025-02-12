import { UserOutlined, TeamOutlined, CrownOutlined, SolutionOutlined } from "@ant-design/icons";

const attendees = [
  {
    icon: <UserOutlined className="text-blue-500 text-3xl" />,
    title: "Sales & Marketing Heads",
    bgColor: "bg-blue-50",
  },
  {
    icon: <CrownOutlined className="text-green-500 text-3xl" />,
    title: "CXOs & Business Leaders",
    bgColor: "bg-green-50",
  },
  {
    icon: <TeamOutlined className="text-purple-500 text-3xl" />,
    title: "Sales & Marketing Managers",
    bgColor: "bg-purple-50",
  },
  {
    icon: <SolutionOutlined className="text-orange-500 text-3xl" />,
    title: "Client-Facing Executives",
    bgColor: "bg-orange-50",
  },
];

const WhoShouldAttend = () => {
  return (
    <section className="px-6 py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Heading & Description */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Who Should Attend?</h2>
          <p className="mt-4 text-lg text-gray-600">
            The Sales & Marketing War Room is designed for senior leaders, decision-makers, and sales & marketing teams seeking to enhance productivity through faster problem resolution.
          </p>
        </div>

        {/* Right Side - Attendee List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {attendees.map((attendee, index) => (
            <div
              key={index}
              className={`p-5 flex items-center space-x-4 border rounded-lg shadow-sm transition duration-300 hover:shadow-md ${attendee.bgColor}`}
            >
              <div className="p-3 rounded-full bg-white shadow-sm">{attendee.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{attendee.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoShouldAttend;
