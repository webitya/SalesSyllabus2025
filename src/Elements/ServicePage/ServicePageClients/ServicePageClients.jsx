"use client"
import { Row, Col, Typography, Card } from "antd"
import { CheckCircleFilled } from "@ant-design/icons"
import { motion } from "framer-motion"

const { Title, Paragraph } = Typography

const ServicePageClients = () => {
  const clientTypes = [
    "Scaling from ₹1 Cr to ₹1000 Cr",
    "Building in-house sales & marketing teams",
    "Expanding from founder-led selling process driven sales",
    "Struggling with marketing ROI or sales output",
    "Seeking better alignment between goals and talent",
  ]

  return (
    <div
      style={{
        background: "#f8f9fa",
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
            Who We Work With
          </Title>
          <Paragraph
            style={{
              fontSize: "18px",
              color: "#555",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            We specialize in helping businesses that are:
          </Paragraph>
        </motion.div>

        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} md={20} lg={18}>
            <Card
              style={{
                borderRadius: "12px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
                overflow: "hidden",
              }}
              bodyStyle={{ padding: "40px" }}
            >
              <Row gutter={[32, 32]}>
                {clientTypes.map((client, index) => (
                  <Col xs={24} md={12} key={index}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <CheckCircleFilled
                        style={{
                          color: "#00a0e9",
                          fontSize: "20px",
                          marginRight: "12px",
                          marginTop: "4px",
                        }}
                      />
                      <Paragraph
                        style={{
                          fontSize: "16px",
                          margin: 0,
                        }}
                      >
                        {client}
                      </Paragraph>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </Card>
          </Col>
        </Row>

        <Row gutter={[24, 24]} justify="center" className="mt-12">
          <Col xs={24} md={20} lg={18}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card
                style={{
                  borderRadius: "12px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
                  overflow: "hidden",
                  background: "linear-gradient(135deg, #0056b3 0%, #00a0e9 100%)",
                }}
                bodyStyle={{ padding: "40px" }}
              >
                <div className="text-center">
                  <Title
                    level={3}
                    style={{
                      color: "white",
                      marginBottom: "16px",
                    }}
                  >
                    Our Clients See Results
                  </Title>
                  <Row gutter={[24, 24]} justify="center" className="mt-8">
                    <Col xs={24} sm={8}>
                      <div
                        style={{
                          background: "rgba(255, 255, 255, 0.1)",
                          borderRadius: "8px",
                          padding: "24px",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "36px",
                            fontWeight: "700",
                            color: "white",
                            marginBottom: "8px",
                          }}
                        >
                          30%
                        </div>
                        <Paragraph
                          style={{
                            color: "white",
                            margin: 0,
                          }}
                        >
                          Average increase in sales team performance
                        </Paragraph>
                      </div>
                    </Col>
                    <Col xs={24} sm={8}>
                      <div
                        style={{
                          background: "rgba(255, 255, 255, 0.1)",
                          borderRadius: "8px",
                          padding: "24px",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "36px",
                            fontWeight: "700",
                            color: "white",
                            marginBottom: "8px",
                          }}
                        >
                          14 days
                        </div>
                        <Paragraph
                          style={{
                            color: "white",
                            margin: 0,
                          }}
                        >
                          Average time to first qualified candidate
                        </Paragraph>
                      </div>
                    </Col>
                    <Col xs={24} sm={8}>
                      <div
                        style={{
                          background: "rgba(255, 255, 255, 0.1)",
                          borderRadius: "8px",
                          padding: "24px",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "36px",
                            fontWeight: "700",
                            color: "white",
                            marginBottom: "8px",
                          }}
                        >
                          100+
                        </div>
                        <Paragraph
                          style={{
                            color: "white",
                            margin: 0,
                          }}
                        >
                          Companies successfully scaled
                        </Paragraph>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ServicePageClients
