"use client"
import { Row, Col, Typography, Card, Button } from "antd"
import { AimOutlined, SyncOutlined, ArrowRightOutlined } from "@ant-design/icons"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const { Title, Paragraph, Text } = Typography

const ServicePageEngagement = () => {
  const engagementModels = [
    {
      icon: <AimOutlined />,
      title: "Single Project",
      description: ["Best for: Specific hiring or training goals", "Duration: 1–2 months"],
    },
    {
      icon: <SyncOutlined />,
      title: "Monthly Engagement",
      description: [
        "Best for: Companies scaling fast and needing recurring hiring, training, and consulting",
        "Includes: Dedicated talent advisor, access to learning platform, quarterly strategy meets",
      ],
    },
  ]

  return (
    <div
      style={{
        background: "white",
        padding: "80px 0",
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Title
            level={2}
            style={{
              color: "#333",
              marginBottom: "16px",
            }}
          >
            Engagement Models
          </Title>
          <Paragraph
            style={{
              fontSize: "18px",
              color: "#555",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Choose the engagement model that best fits your business needs
          </Paragraph>
        </motion.div>

        <Row gutter={[24, 24]} justify="center">
          {engagementModels.map((model, index) => (
            <Col xs={24} md={12} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  style={{
                    borderRadius: "12px",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
                    overflow: "hidden",
                    height: "100%",
                  }}
                  bodyStyle={{ padding: "40px" }}
                >
                  <div
                    style={{
                      fontSize: "36px",
                      color: "#0056b3",
                      marginBottom: "16px",
                      textAlign: "center",
                    }}
                  >
                    {model.icon}
                  </div>
                  <Title
                    level={3}
                    style={{
                      color: "#0056b3",
                      marginBottom: "16px",
                      textAlign: "center",
                    }}
                  >
                    {model.title}
                  </Title>
                  <div>
                    {model.description.map((item, i) => (
                      <Paragraph
                        key={i}
                        style={{
                          fontSize: "16px",
                          marginBottom: "8px",
                        }}
                      >
                        {item}
                      </Paragraph>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-12">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="https://calendly.com/salessyllabus" target="_blank">
            <Button
              type="primary"
              size="large"
              style={{
                background: "#0056b3",
                borderColor: "#0056b3",
                height: "48px",
                borderRadius: "4px",
                fontWeight: "600",
                fontSize: "16px",
              }}
            >
              Compare Plans <ArrowRightOutlined />
            </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ServicePageEngagement
