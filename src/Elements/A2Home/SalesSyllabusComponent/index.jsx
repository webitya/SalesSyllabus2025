import React from "react";
import { Card, Typography, List, Row, Col } from "antd";
import { SolutionOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const SalesSyllabusComponent = () => {
  const outputItems = [
    "Streamlined Team Building & Management – Hiring and onboarding are aligned with revenue milestones, ensuring efficient resource allocation. Real-time performance tracking enables timely corrections, while leadership gains a structured framework to define, measure, and optimize efforts across client-facing teams and managers with actionable insights.",
    "Enhanced Communication Effectiveness – A well-defined communication strategy helps the organization craft messages that directly address prospect challenges, improving engagement and conversions.",
    "Strengthened Leadership Support – Through the Sales & Marketing War Room service, organizations gain access to top leadership talent, enabling them to tackle the most complex sales and marketing challenges effectively."
  ];

  return (
    <div style={{ background: "#f5f5f5" }}>
      <Card
        style={{
          padding: "5px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
        bordered={false}
      >
        <Row gutter={[24, 24]}>
          {/* Output Section - Full Width */}
          <Col xs={24}>
            <Card
              title={
                <Title level={4} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <SolutionOutlined style={{ color: "#1890ff" }} />
                  Output
                </Title>
              }
              bordered={false}
              style={{ background: "#f0f9ff" }}
            >
              <List
                dataSource={outputItems}
                renderItem={(item) => (
                  <List.Item style={{ padding: "8px 0" }}>
                    <Text style={{ color: "#333" }}>• {item}</Text>
                  </List.Item>
                )}
                style={{ marginTop: "2px" }}
              />
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default SalesSyllabusComponent;