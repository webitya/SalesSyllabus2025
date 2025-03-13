import { SolutionOutlined, UserAddOutlined } from "@ant-design/icons";

export default function A2ManRecruitmentMatrix() {
  return (
    <section className="py-16 bg-gray-50 px-6 md:px-12 text-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl font-medium text-blue-900 mb-6">
          Recruitment Matrix – Sponsored Training & Recruitment Program
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
          Our structured program ensures candidates undergo essential training 
          before recruitment, equipping them with industry-ready skills for success.
        </p>

        {/* Two Minimalist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Training Card */}
          <div className="p-8 bg-white shadow-sm rounded-lg border border-gray-200 flex flex-col items-center text-center">
            <SolutionOutlined className="text-4xl text-blue-700 mb-4" />
            <h2 className="text-xl font-medium text-gray-900 mb-2">Structured Training</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Developed by industry experts, the curriculum integrates 
              market insights and real-world business applications.
            </p>
          </div>

          {/* Recruitment Card */}
          <div className="p-8 bg-white shadow-sm rounded-lg border border-gray-200 flex flex-col items-center text-center">
            <UserAddOutlined className="text-4xl text-blue-700 mb-4" />
            <h2 className="text-xl font-medium text-gray-900 mb-2">Competency-Based Recruitment</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Candidates complete targeted learning modules, ensuring 
              they meet performance expectations from day one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
