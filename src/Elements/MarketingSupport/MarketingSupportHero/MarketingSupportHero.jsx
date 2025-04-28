"use client"
import { Row, Col, Typography, Button } from "antd"
import { ArrowRightOutlined } from "@ant-design/icons"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const { Title, Paragraph } = Typography

const MarketingSupportHero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
      <div className="container mx-auto px-4 md:px-8">
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} lg={14}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Title
                level={1}
                style={{
                  color: "white",
                  fontSize: "3rem",
                  fontWeight: "700",
                  marginBottom: "1.5rem",
                }}
              >
                Turn Cold Prospects into Warm Conversations. Consistently.
              </Title>
              <Paragraph
                style={{
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: "1.25rem",
                  marginBottom: "2rem",
                  lineHeight: "1.8",
                }}
              >
                Hiring great people is just the beginning. We also help execute targeted marketing campaigns that open
                doors, build trust, and keep prospects warm — so your sales team always has meaningful conversations.
              </Paragraph>
              <Paragraph
                style={{
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: "1.25rem",
                  fontStyle: "italic",
                  marginBottom: "2rem",
                }}
              >
                You're not doing "email marketing." You're delivering sales-enablement marketing — aligned with revenue
                goals.
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
                  Get Started <ArrowRightOutlined />
                </Button>
                </Link>
              </motion.div>
            </motion.div>
          </Col>
          <Col xs={24} lg={10}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-lg p-8 shadow-xl"
              style={{ borderRadius: "12px" }}
            >
              <div className="bg-blue-50 p-6 rounded-lg">
                <Title level={3} style={{ color: "#1a365d", marginBottom: "1.5rem" }}>
                  What sets us apart:
                </Title>
                <ul className="list-none p-0 m-0">
                  <li className="flex items-start mb-4">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                      <span>1</span>
                    </div>
                    <p className="text-gray-700 m-0">Personalized outreach that feels human, not automated</p>
                  </li>
                  <li className="flex items-start mb-4">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                      <span>2</span>
                    </div>
                    <p className="text-gray-700 m-0">Targeted account-based strategies that reach decision-makers</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                      <span>3</span>
                    </div>
                    <p className="text-gray-700 m-0">Consistent follow-up that keeps your pipeline full</p>
                  </li>
                </ul>
              </div>
            </motion.div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default MarketingSupportHero
