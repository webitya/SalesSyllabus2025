import React from "react";
import { Card, Typography, Row, Col, Timeline, List } from "antd";
import { SolutionOutlined, RocketOutlined, TeamOutlined, BarChartOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const phases = [
  {
    title: "Strategy Building",
    phase: "Phase I",
    icon: <SolutionOutlined style={{ fontSize: "24px", color: "#1890ff" }} />,
    description: [
      "Identify high-value customer segments through market analysis.",
      "Develop a compelling communication strategy with impactful content.",
      "Establish a reporting framework to track and analyze team performance."
    ],
    objective: "Define targets, KPIs, and KRAs before hiring sales and marketing teams."
  },
  {
    title: "Building Operational Capacity",
    phase: "Phase II",
    icon: <TeamOutlined style={{ fontSize: "24px", color: "#52c41a" }} />,
    description: [
      "Develop a hiring strategy aligned with revenue goals, defining required roles such as client-facing professionals, team managers, and leadership.",
      "Hire and onboard top-performing sales and marketing professionals.",
      "Implement structured onboarding and continuous mentoring programs to bridge knowledge gaps."
    ]
  },
  {
    title: "Go To Market / Go Live",
    phase: "Phase III",
    icon: <RocketOutlined style={{ fontSize: "24px", color: "#faad14" }} />,
    description: [
      "Capture real-time performance data for actionable insights.",
      "Conduct problem-solving workshops to accelerate issue resolution by 90% across all levels.",
      "Guide selection and deployment of the right CRM tailored to organizational needs."
    ]
  },
  {
    title: "Strategic Marketing Decisions",
    phase: "Phase IV",
    icon: <BarChartOutlined style={{ fontSize: "24px", color: "#f5222d" }} />,
    description: [
      "Build a community of trusted and engaged buyers to speed up revenue growth and brand building.",
      "Accelerate lead generation and branding to enhance market presence.",
      "Empower Sales & Marketing Teams by building process-driven systems, reducing dependency on individuals."
    ]
  }
];

const A2HomePhases = () => {
  return (
    <div className="bg-gray-100  pb-5 px-4">
      <Card bordered={false} className="shadow-lg p-2 bg-white ">
        {/* <Title level={3} className="text-center ">
          
        </Title> */}
        <h1 className="text-3xl text-center font-semibold text-blue-900 mb-6">
        Process of Building and Managing Sales & Marketing Team
      </h1>
        <Text className=" text-center !mb-10 text-gray-600" style={{fontSize:"16px"}} >
          Sales Syllabus services empower organizations to focus on high-value customers by creating and managing a high-performing sales and marketing team. Our solution reduces problem-solving time by 90% through a real-time reporting framework and by providing the right information & insights at every hierarchy level on time.
        </Text>

        <Row gutter={[24, 24]} className="mt-10">
          {[0, 2].map((startIndex) => (
            <Row gutter={[24, 24]} key={startIndex} className="w-full">
              {[0, 1].map((offset) => (
                <Col xs={24} sm={12} key={startIndex + offset} className="flex">
                  <Timeline mode="left" className="w-full">
                    <Timeline.Item dot={phases[startIndex + offset].icon}>
                      <Card bordered={false} className="shadow-sm p-4 flex flex-col justify-between h-full w-full">
                        {/* <div className="bg-blue-100 text-blue-600 font-bold py-1 px-3 mb-2 rounded-lg inline-block">
                          {phases[startIndex + offset].phase}
                        </div> */}
                        <Title level={4} className="bg-blue-100 !text-blue-600 font-bold py-1 px-3 mb-2 inline-block">{phases[startIndex + offset].title}</Title>
                        <List
                          dataSource={phases[startIndex + offset].description}
                          renderItem={(item) => (
                            <List.Item>
                              <Text className="block text-gray-700">• {item}</Text>
                            </List.Item>
                          )}
                        />
                        {phases[startIndex + offset].objective && (
                          <Text className="block mt-2 font-bold text-gray-900">
                            Objective: {phases[startIndex + offset].objective}
                          </Text>
                        )}
                      </Card>
                    </Timeline.Item>
                  </Timeline>
                </Col>
              ))}
            </Row>
          ))}
        </Row>
      </Card>
    </div>
  );
};

export default A2HomePhases;