import React from "react";
import { Card, Typography, List, Row, Col } from "antd";
import { SolutionOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const A2HomePhases = () => {
  const phases = [
    {
      title: "Strategy Building",
      description:
        "Identify high-value customer segments through market analysis. Develop a compelling communication strategy with impactful content. Establish a reporting framework to track and analyze team performance.",
      objective: "Define targets, KPIs, and KRAs before hiring sales and marketing teams."
    },
    {
      title: "Building Operational Capacity",
      description:
        "Develop a hiring strategy aligned with revenue goals, defining required roles such as client-facing professionals, team managers, and leadership. Establish screening criteria for efficient recruitment. Hire and onboard top-performing sales and marketing professionals. Implement structured onboarding and continuous mentoring programs to bridge knowledge gaps."
    },
    {
      title: "Go To Market / Go Live",
      description:
        "Reporting Framework: Capture real-time performance data for actionable insights. Problem Management: Conduct problem-solving workshops to accelerate issue resolution by 90% across all levels. CRM Implementation: Guide selection and deployment of the right CRM tailored to organizational needs."
    },
    {
      title: "Strategic Marketing Decisions",
      description:
        "Build a community of trusted and engaged buyers to speed up revenue growth and brand building. Accelerate lead generation and branding to enhance market presence. Optimize customer acquisition costs for higher efficiency. Empower Sales & Marketing Teams by building process-driven systems, reducing dependency on individuals."
    }
  ];

  return (
    <div style={{ background: "#f5f5f5", padding: "20px" }}>
      <Card bordered={false} style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}>
        <Title level={3} style={{ textAlign: "center", marginBottom: "20px" }}>
          Process of Building and Managing Sales & Marketing Team
        </Title>
        <Text style={{ display: "block", textAlign: "center", marginBottom: "30px" }}>
          Sales Syllabus services empower organizations to focus on high-value customers by creating and managing a high-performing sales and marketing team. Our solution reduces problem-solving time by 90% through a real-time reporting framework and by providing the right information & insights at every hierarchy level on time.
        </Text>
        <Row gutter={[24, 24]}>
          {phases.map((phase, index) => (
            <Col xs={24} md={12} key={index}>
              <Card title={<Title level={4} style={{ color: "#1890ff" }}>{phase.title}</Title>} bordered={false}>
                <Text>{phase.description}</Text>
                {phase.objective && (
                  <Text style={{ display: "block", marginTop: "10px", fontWeight: "bold" }}>
                    Objective: {phase.objective}
                  </Text>
                )}
              </Card>
            </Col>
          ))}
        </Row>
      </Card>
    </div>
  );
};

export default A2HomePhases;
