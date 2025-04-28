"use client"
import { Typography, Button, Row, Col, Card } from "antd"
import { PhoneOutlined, MailOutlined } from "@ant-design/icons"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const { Title, Paragraph } = Typography

const AcademyPageCTA = () => {
  return (
    <div className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white flex flex-col items-center justify-center text-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <span className="text-yellow-400 text-3xl mr-2">📘</span>
            <Title level={2} className="m-0 text-3xl md:text-4xl font-bold !text-white">
              Join the Learning Movement
            </Title>
          </div>

          <Paragraph className="text-xl text-blue-100 max-w-3xl mx-auto">
            You've worked hard. Now, grow smart.
          </Paragraph>

          <Paragraph className="text-lg text-blue-200 max-w-3xl mx-auto">
            Join 1,000+ professionals preparing to lead the future of B2B growth.
          </Paragraph>
        </motion.div>

        <Row gutter={[24, 24]} justify="center" className="w-full max-w-4xl">
          <Col xs={24} md={12} className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <Card className="h-full text-center bg-white shadow-lg border-0" bodyStyle={{ padding: "32px 24px" }}>
                <PhoneOutlined className="text-4xl text-blue-700 mb-4" />
                <Title level={3} className="text-gray-800 mb-4">
                  Individual Growth
                </Title>
                <Paragraph className="text-gray-600 mb-6">
                  Ready to accelerate your career? Get personalized guidance on your learning journey.
                </Paragraph>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/contact-us" target="_blank">
                    <Button
                      type="primary"
                      size="large"
                      className="h-12 px-8 text-base font-semibold rounded-lg bg-blue-700 border-blue-700 hover:bg-blue-800 hover:border-blue-800 shadow-md w-full"
                    >
                      Book a Free Learning Consultation
                    </Button>
                  </Link>
                </motion.div>
              </Card>
            </motion.div>
          </Col>

          <Col xs={24} md={12} className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <Card className="h-full text-center bg-white shadow-lg border-0" bodyStyle={{ padding: "32px 24px" }}>
                <MailOutlined className="text-4xl text-blue-700 mb-4" />
                <Title level={3} className="text-gray-800 mb-4">
                  Team Training
                </Title>
                <Paragraph className="text-gray-600 mb-6">
                  Want to train your entire sales team? Get custom solutions for your organization.
                </Paragraph>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/contact-us" target="_blank">
                    <Button
                      type="default"
                      size="large"
                      className="h-12 px-8 text-base font-semibold rounded-lg border-blue-700 text-blue-700 hover:text-blue-800 hover:border-blue-800 shadow-md w-full"
                    >
                      Talk to Enterprise Team
                    </Button>
                  </Link>
                </motion.div>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default AcademyPageCTA
