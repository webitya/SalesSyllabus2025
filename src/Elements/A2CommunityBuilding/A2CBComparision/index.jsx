import { Table } from "antd";

const columns = [
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    className: "font-semibold text-gray-800",
  },
  {
    title: "Objective",
    dataIndex: "objective",
    key: "objective",
  },
  {
    title: "Effort Required",
    dataIndex: "effort",
    key: "effort",
  },
  {
    title: "Output",
    dataIndex: "output",
    key: "output",
  },
  {
    title: "Impact",
    dataIndex: "impact",
    key: "impact",
  },
  {
    title: "ROI",
    dataIndex: "roi",
    key: "roi",
  },
];

const data = [
  {
    key: "1",
    type: "Comprehensive Community Platform",
    objective: "Premium branding & lead generation",
    effort: "High",
    output: "High-value leads, strong brand presence",
    impact: "Large",
    roi: "High ROI (long-term)",
  },
  {
    key: "2",
    type: "Webinar Series",
    objective: "Brand recall & lead generation",
    effort: "Medium",
    output: "Moderate lead pool",
    impact: "Medium",
    roi: "Moderate ROI",
  },
  {
    key: "3",
    type: "Newsletter & Blogs",
    objective: "Engagement & communication",
    effort: "Low",
    output: "Consistent lead nurturing",
    impact: "Small",
    roi: "Steady ROI",
  },
];

export default function A2BCComparision() {
  return (
    <div className="mx-auto pt-20 pb-5 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Comparison of Community Building Strategies
      </h2>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered
        className="shadow-lg rounded-lg bg-white"
      />
    </div>
  );
}
