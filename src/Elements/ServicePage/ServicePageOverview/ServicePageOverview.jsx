"use client"
import { Row, Col, Typography, Card, Button } from "antd"
import { CheckCircleFilled, RightCircleOutlined } from "@ant-design/icons"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const { Title, Paragraph } = Typography

const ServicePageOverview = () => {
  const services = [
    "Talent Strategy & Workforce Planning",
    "Performance-Based Recruitment (Permanent & Temporary)",
    "Sales & Marketing Training Programs",
    "Leadership & Founder Advisory",
    "Revenue Team Audits & Optimization",
  ]

  return (
    <div
      style={{
        background: "#f8f9fa",
        padding: "80px 0",
      }}
    >
      <div className="container mx-auto px-4">
        <Row justify="center" gutter={[24, 24]}>
          <Col xs={24} md={20} lg={18}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card
                style={{
                  borderRadius: "12px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
                  overflow: "hidden",
                }}
                bodyStyle={{ padding: "40px" }}
              >
                <div className="text-center mb-8">
                  <Title
                    level={2}
                    style={{
                      color: "#0056b3",
                      marginBottom: "8px",
                    }}
                  >
                    What We Offer
                  </Title>
                  <Paragraph
                    style={{
                      fontSize: "18px",
                      color: "#555",
                      marginBottom: "32px",
                    }}
                  >
                    A complete ecosystem to build and manage high-performing sales & marketing teams.
                  </Paragraph>
                </div>

                <Row gutter={[24, 24]}>
                  <Col xs={24} md={16}>
                    <div>
                      {services.map((service, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="mb-4 flex items-start"
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
                            {service}
                          </Paragraph>
                        </motion.div>
                      ))}
                    </div>
                  </Col>
                  <Col xs={24} md={8}>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex justify-center items-center h-full"
                    >
                       <Link to="https://calendly.com/salessyllabus" target="_blank">
                      <Button
                        type="primary"
                        size="large"
                        icon={<RightCircleOutlined />}
                        style={{
                          background: "#0056b3",
                          borderColor: "#0056b3",
                          height: "48px",
                          borderRadius: "4px",
                          fontWeight: "600",
                          fontSize: "16px",
                          width: "100%",
                        }}
                      >
                        Book a Free Discovery Call
                      </Button>
                      </Link>
                    </motion.div>
                  </Col>
                </Row>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ServicePageOverview
