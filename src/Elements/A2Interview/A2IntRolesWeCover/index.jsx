import { UserOutlined, RocketOutlined } from "@ant-design/icons";

const A2IntRolesWeCover = () => {
  return (
    <section className="px-6 py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">Roles We Cover</h2>
        <p className="mt-4 text-lg text-gray-600">Expert interviews for a range of sales and marketing positions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-5xl mx-auto">
        {/* Sales Roles */}
        <div className="bg-white p-6 shadow-md rounded-lg border">
          <div className="flex items-center space-x-3">
            <UserOutlined className="text-blue-600 text-2xl" />
            <h3 className="text-xl font-semibold text-gray-900">Sales Roles</h3>
          </div>
          <ul className="mt-4 text-gray-600 list-disc list-inside">
            <li>Business Development Executive</li>
            <li>Sales Manager</li>
            <li>Account Manager</li>
            <li>Enterprise Sales</li>
            <li>Inside Sales</li>
            <li>Sales Leadership Roles</li>
          </ul>
        </div>

        {/* Marketing Roles */}
        <div className="bg-white p-6 shadow-md rounded-lg border">
          <div className="flex items-center space-x-3">
            <RocketOutlined className="text-blue-600 text-2xl" />
            <h3 className="text-xl font-semibold text-gray-900">Marketing Roles</h3>
          </div>
          <ul className="mt-4 text-gray-600 list-disc list-inside">
            <li>Digital Marketing Specialist</li>
            <li>SEO Manager</li>
            <li>Growth Marketer</li>
            <li>Performance Marketer</li>
            <li>Brand Manager</li>
            <li>Other Marketing Roles</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default A2IntRolesWeCover;
