"use client"
import { Row, Col, Typography, Button } from "antd"
import { PhoneOutlined } from "@ant-design/icons"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const { Title, Paragraph } = Typography

const ServicePageCTA = () => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0056b3 0%, #00a0e9 100%)",
        padding: "80px 0",
      }}
    >
      <div className="container mx-auto px-4">
        <Row justify="center">
          <Col xs={24} md={18} lg={16}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Title
                level={2}
                style={{
                  color: "white",
                  marginBottom: "16px",
                }}
              >
                Ready to Build a Revenue Team That Performs?
              </Title>
              <Paragraph
                style={{
                  fontSize: "18px",
                  color: "white",
                  marginBottom: "32px",
                }}
              >
                Book a free strategy call and let's plan your growth.
              </Paragraph>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                 <Link to="https://calendly.com/salessyllabus" target="_blank">
                <Button
                  type="primary"
                  size="large"
                  icon={<PhoneOutlined />}
                  style={{
                    background: "#ffc107",
                    borderColor: "#ffc107",
                    color: "#333",
                    height: "54px",
                    borderRadius: "4px",
                    fontWeight: "600",
                    fontSize: "18px",
                    padding: "0 32px",
                  }}
                >
                  Book Your Discovery Call
                </Button>
                </Link>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ServicePageCTA
