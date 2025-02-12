import { Timeline } from "antd";
import { SearchOutlined, FileTextOutlined, CheckCircleOutlined, UserSwitchOutlined } from "@ant-design/icons";

const A2IntInterviewProcess = () => {
  return (
    <section className="px-6 py-20 bg-white">
      <div className=" mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">Our Interview Process</h2>
        <p className="mt-4 text-lg text-gray-600">A structured approach to ensure the best hiring decisions.</p>
      </div>

      <div className="max-w-5xl mx-auto mt-10">
        <Timeline mode="left">
          <Timeline.Item dot={<SearchOutlined className="text-blue-600 text-xl" />} color="blue">
            <h3 className="text-lg font-semibold text-gray-900">Understanding Your Hiring Needs</h3>
            <p className="text-gray-600">We align the interview structure with your job requirements.</p>
          </Timeline.Item>

          <Timeline.Item dot={<UserSwitchOutlined className="text-blue-600 text-xl" />} color="blue">
            <h3 className="text-lg font-semibold text-gray-900">Expert-Led Candidate Assessment</h3>
            <p className="text-gray-600">Our experienced professionals conduct in-depth interviews.</p>
          </Timeline.Item>

          <Timeline.Item dot={<FileTextOutlined className="text-blue-600 text-xl" />} color="blue">
            <h3 className="text-lg font-semibold text-gray-900">Detailed Performance Report</h3>
            <p className="text-gray-600">Receive structured feedback and candidate rankings for informed decisions.</p>
          </Timeline.Item>

          <Timeline.Item dot={<CheckCircleOutlined className="text-blue-600 text-xl" />} color="blue">
            <h3 className="text-lg font-semibold text-gray-900">Final Selection Support</h3>
            <p className="text-gray-600">We assist in shortlisting the best-fit candidates for your team.</p>
          </Timeline.Item>
        </Timeline>
      </div>
    </section>
  );
};

export default A2IntInterviewProcess;
