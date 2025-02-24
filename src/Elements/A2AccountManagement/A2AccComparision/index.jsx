import React from "react";
import { Table } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

const data = [
  {
    key: "1",
    without: (
      <>
        <CloseCircleOutlined className="text-red-500 mr-2" /> Lack of structured
        engagement
      </>
    ),
    with: (
      <>
        <CheckCircleOutlined className="text-green-500 mr-2" /> Step-by-step
        structured sales process
      </>
    ),
  },
  {
    key: "2",
    without: (
      <>
        <CloseCircleOutlined className="text-red-500 mr-2" /> Sales reps spend
        time on non-productive activities
      </>
    ),
    with: (
      <>
        <CheckCircleOutlined className="text-green-500 mr-2" /> Improved
        productive time for sales reps
      </>
    ),
  },
  {
    key: "3",
    without: (
      <>
        <CloseCircleOutlined className="text-red-500 mr-2" /> Inconsistent
        follow-ups
      </>
    ),
    with: (
      <>
        <CheckCircleOutlined className="text-green-500 mr-2" /> Systematic lead
        nurturing process
      </>
    ),
  },
  {
    key: "4",
    without: (
      <>
        <CloseCircleOutlined className="text-red-500 mr-2" /> No data-driven
        cost justification
      </>
    ),
    with: (
      <>
        <CheckCircleOutlined className="text-green-500 mr-2" /> Effective
        Cost-Benefit Analysis (CBA)
      </>
    ),
  },
  {
    key: "5",
    without: (
      <>
        <CloseCircleOutlined className="text-red-500 mr-2" /> High lead dropout
        rate
      </>
    ),
    with: (
      <>
        <CheckCircleOutlined className="text-green-500 mr-2" /> Increased
        conversion rates
      </>
    ),
  },
];

const SalesSyllabusComparison = () => {
  return (
    <section className="bg-[#F9FAFB] text-gray-800 py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose <span className="text-blue-500">Sales Syllabus</span>?
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Traditional sales approaches often lead to inefficiencies, lost
          opportunities, and ineffective engagement with leads. With Sales
          Syllabus, your team gets a structured, data-backed approach to
          managing and converting high-value accounts.
        </p>

        <Table
          dataSource={data}
          pagination={false}
          bordered
          columns={[
            {
              title: "Without Sales Syllabus",
              dataIndex: "without",
              key: "without",
            },
            {
              title: "With Sales Syllabus",
              dataIndex: "with",
              key: "with",
            },
          ]}
          className="shadow-lg rounded-lg overflow-hidden"
        />
      </div>
    </section>
  );
};

export default SalesSyllabusComparison;

// Let me know if you want any changes! 🚀