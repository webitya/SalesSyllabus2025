"use client"
import { Row, Col, Typography, Button, Card } from "antd"
import { ArrowRightOutlined, CalendarOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const { Title, Paragraph } = Typography

const MarketingSupportCTA = () => {
  return (
    <div className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} lg={14}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Title
                level={2}
                style={{
                  color: "white",
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  marginBottom: "1.5rem",
                }}
              >
                Ready to transform your marketing approach?
              </Title>
              <Paragraph
                style={{
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: "1.25rem",
                  marginBottom: "2rem",
                  lineHeight: "1.8",
                }}
              >
                Let's discuss how our Account-Based Marketing support can help your sales team have more meaningful
                conversations with qualified prospects.
              </Paragraph>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="https://calendly.com/salessyllabus" target="_blank">
                <Button
                  type="primary"
                  size="large"
                  style={{
                    backgroundColor: "#ffffff",
                    borderColor: "#ffffff",
                    color: "#1a365d",
                    height: "50px",
                    padding: "0 30px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    borderRadius: "4px",
                  }}
                >
                  Schedule a Consultation <ArrowRightOutlined />
                </Button>
                </Link>
              </motion.div>
            </motion.div>
          </Col>
          <Col xs={24} lg={10}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card
                style={{
                  borderRadius: "12px",
                  boxShadow: "0 4px 30px rgba(0,0,0,0.2)",
                  overflow: "hidden",
                }}
                bodyStyle={{ padding: 0 }}
              >
                <div className="bg-blue-800 p-6 text-white">
                  <Title level={3} style={{ color: "white", margin: 0 }}>
                    Contact Our ABM Team
                  </Title>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <CalendarOutlined
                        style={{
                          fontSize: "20px",
                          color: "#2c5282",
                          marginRight: "12px",
                          marginTop: "4px",
                        }}
                      />
                      <div>
                        <Link to="https://calendly.com/salessyllabus" target="_blank">
                        <Title level={5} style={{ color: "#2d3748", marginBottom: "0.5rem" }}>
                          Schedule a Call
                        </Title>
                        </Link>
                        <Paragraph style={{ color: "#4a5568", margin: 0 }}>
                          Book a 30-minute discovery call to discuss your needs
                        </Paragraph>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <PhoneOutlined
                        style={{
                          fontSize: "20px",
                          color: "#2c5282",
                          marginRight: "12px",
                          marginTop: "4px",
                        }}
                      />
                      <div>
                        <Title level={5} style={{ color: "#2d3748", marginBottom: "0.5rem" }}>
                          Call Us Directly
                        </Title>
                        <Paragraph style={{ color: "#4a5568", margin: 0 }}>+91 6200207379</Paragraph>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MailOutlined
                        style={{
                          fontSize: "20px",
                          color: "#2c5282",
                          marginRight: "12px",
                          marginTop: "4px",
                        }}
                      />
                      <div>
                        <Title level={5} style={{ color: "#2d3748", marginBottom: "0.5rem" }}>
                          Email Us
                        </Title>
                        <Paragraph style={{ color: "#4a5568", margin: 0 }}> sandeep@salessyllabus.com</Paragraph>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <Paragraph
                      style={{
                        fontSize: "0.875rem",
                        color: "#4a5568",
                        fontStyle: "italic",
                      }}
                    >
                      "Their ABM approach helped us increase our qualified meetings by 45% in just two months."
                    </Paragraph>
                   
                  </div>
                </div>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default MarketingSupportCTA
