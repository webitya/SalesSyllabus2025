import { UserOutlined, TeamOutlined, SolutionOutlined, TrophyOutlined } from "@ant-design/icons";

const A2MasterWhoShouldAttend = () => {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">Who Should Attend?</h2>
        <p className="mt-4 text-lg text-gray-700">
          This masterclass is designed for professionals looking to scale their sales and marketing teams effectively.
        </p>

        {/* Attendee Categories */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Business Owners & Founders */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-md flex flex-col items-center">
            <UserOutlined className="text-blue-500 text-4xl mb-3" />
            <h3 className="text-xl font-semibold text-gray-900">Business Owners & Founders</h3>
          </div>

          {/* Sales & Marketing Heads */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-md flex flex-col items-center">
            <TeamOutlined className="text-blue-500 text-4xl mb-3" />
            <h3 className="text-xl font-semibold text-gray-900">Sales & Marketing Heads</h3>
          </div>

          {/* Sales Managers & Team Leads */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-md flex flex-col items-center">
            <SolutionOutlined className="text-blue-500 text-4xl mb-3" />
            <h3 className="text-xl font-semibold text-gray-900">Sales Managers & Team Leads</h3>
          </div>

          {/* HR & Talent Acquisition */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-md flex flex-col items-center">
            <TrophyOutlined className="text-blue-500 text-4xl mb-3" />
            <h3 className="text-xl font-semibold text-gray-900">HR & Talent Acquisition Professionals</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default A2MasterWhoShouldAttend;
