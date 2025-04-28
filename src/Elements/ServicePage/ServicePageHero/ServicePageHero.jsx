"use client"
import { Row, Col, Typography, Button } from "antd"
import { ArrowRightOutlined } from "@ant-design/icons"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const { Title, Paragraph } = Typography

const ServicePageHero = () => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0056b3 0%, #00a0e9 100%)",
        padding: "80px 0",
        color: "white",
      }}
    >
      <div className="container mx-auto px-4">
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} md={16}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Title
                level={1}
                style={{
                  color: "white",
                  fontSize: "42px",
                  fontWeight: "700",
                  marginBottom: "24px",
                }}
              >
                Sales & Marketing Growth Solutions Built for ₹1–₹1,000 Cr Companies
              </Title>
              <Paragraph
                style={{
                  color: "white",
                  fontSize: "18px",
                  marginBottom: "32px",
                }}
              >
                We help you build, train, and optimize revenue teams that perform — with the perfect mix of strategy,
                talent, and execution.
              </Paragraph>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="https://calendly.com/salessyllabus" target="_blank">
                <Button
                  type="primary"
                  size="large"
                  style={{
                    background: "#ffc107",
                    borderColor: "#ffc107",
                    color: "#333",
                    height: "48px",
                    borderRadius: "4px",
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  Book a Free Discovery Call <ArrowRightOutlined />
                </Button>
                </Link>
              </motion.div>
            </motion.div>
          </Col>
          <Col xs={24} md={8}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "16px",
                  padding: "30px",
                  backdropFilter: "blur(5px)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img
                  src="/growth.png"
                  alt="Growth Solutions"
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    marginBottom: "16px",
                  }}
                />
                <div className="text-center">
                  <p style={{ color: "white", fontWeight: "600" }}>Trusted by 100+ companies across India</p>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ServicePageHero
