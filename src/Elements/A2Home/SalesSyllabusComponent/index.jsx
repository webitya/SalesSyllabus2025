import React from "react";
import { Card, Typography, List, Row, Col } from "antd";
import { SolutionOutlined, CheckCircleOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const SalesSyllabusComponent = () => {
  const outputItems = [
    {
      text: "Streamlined Team Building & Management – Hiring and onboarding align with revenue milestones, ensuring optimal resource allocation. Real-time performance tracking enables timely adjustments, providing leadership with a structured framework to measure and optimize team efforts.",
    },
    {
      text: "Enhanced Communication Effectiveness – A refined communication strategy helps organizations craft messages that address prospect challenges directly, improving engagement and conversion rates.",
    },
    {
      text: "Strengthened Leadership Support – The Sales & Marketing War Room service grants organizations access to top leadership talent, enabling them to resolve complex sales and marketing challenges effectively.",
    },
  ];

  return (
    <div style={{ background: "#eef1f6", padding: "20px" }}>
      <Card
        style={{
          padding: "0px",
          boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
          borderRadius: "1px",
          background: "#fff",
        }}
        bordered={false}
      >
        <Row gutter={[24, 24]}>
          <Col xs={24}>
            <Card
              title={
                <Title level={4} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <SolutionOutlined style={{ color: "#0050b3", fontSize: "22px" }} />
                  <span style={{ color: "#0050b3" }}>Key Outcomes</span>
                </Title>
              }
              bordered={false}
              style={{ background: "#f0f5ff", borderRadius: "1px", padding: "1px" }}
            >
              <List
                dataSource={outputItems}
                renderItem={(item) => (
                  <List.Item style={{ padding: "12px 0", display: "flex", alignItems: "center" }}>
                    <CheckCircleOutlined style={{ color: "#0050b3", fontSize: "20px", marginRight: "12px" }} />
                    <Text style={{ color: "#333", fontSize: "16px" }}>{item.text}</Text>
                  </List.Item>
                )}
                style={{ marginTop: "10px" }}
              />
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default SalesSyllabusComponent;