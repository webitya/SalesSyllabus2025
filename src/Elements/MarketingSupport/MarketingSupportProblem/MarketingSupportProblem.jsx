"use client"
import { Row, Col, Typography, Card } from "antd"
import { ExclamationCircleOutlined, SolutionOutlined } from "@ant-design/icons"
import { motion } from "framer-motion"

const { Title, Paragraph } = Typography

const MarketingSupportProblem = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} lg={12}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <ExclamationCircleOutlined
                  style={{
                    fontSize: "28px",
                    color: "#e53e3e",
                    marginRight: "16px",
                  }}
                />
                <Title
                  level={2}
                  style={{
                    color: "#1a365d",
                    margin: 0,
                    fontSize: "2.25rem",
                    fontWeight: "700",
                  }}
                >
                  The Problem We Solve
                </Title>
              </div>

              <Card
                style={{
                  borderRadius: "12px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  border: "1px solid #e2e8f0",
                }}
                bodyStyle={{ padding: "32px" }}
              >
                <Paragraph
                  style={{
                    fontSize: "1.125rem",
                    color: "#4a5568",
                    lineHeight: "1.8",
                    marginBottom: "1.5rem",
                  }}
                >
                  Most B2B companies know who they want to target — but don't have the time or team to consistently
                  engage them.
                </Paragraph>
                <Paragraph
                  style={{
                    fontSize: "1.125rem",
                    color: "#4a5568",
                    lineHeight: "1.8",
                    fontWeight: "500",
                  }}
                >
                  We bridge that gap with a hands-on, high-touch manual ABM outreach service that works.
                </Paragraph>
              </Card>
            </motion.div>
          </Col>

          <Col xs={24} lg={12}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <SolutionOutlined
                  style={{
                    fontSize: "28px",
                    color: "#2c5282",
                    marginRight: "16px",
                  }}
                />
                <Title
                  level={2}
                  style={{
                    color: "#1a365d",
                    margin: 0,
                    fontSize: "2.25rem",
                    fontWeight: "700",
                  }}
                >
                  Our Approach
                </Title>
              </div>

              <Card
                style={{
                  borderRadius: "12px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  background: "linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)",
                  border: "1px solid #e2e8f0",
                }}
                bodyStyle={{ padding: "32px" }}
              >
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                      <span>1</span>
                    </div>
                    <div>
                      <Title level={5} style={{ color: "#2c5282", marginBottom: "0.5rem" }}>
                        Identify & Research
                      </Title>
                      <Paragraph style={{ color: "#4a5568", margin: 0 }}>
                        We identify your ideal prospects and research their pain points
                      </Paragraph>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                      <span>2</span>
                    </div>
                    <div>
                      <Title level={5} style={{ color: "#2c5282", marginBottom: "0.5rem" }}>
                        Personalize & Engage
                      </Title>
                      <Paragraph style={{ color: "#4a5568", margin: 0 }}>
                        We create custom messaging that resonates with each segment
                      </Paragraph>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                      <span>3</span>
                    </div>
                    <div>
                      <Title level={5} style={{ color: "#2c5282", marginBottom: "0.5rem" }}>
                        Follow-up & Qualify
                      </Title>
                      <Paragraph style={{ color: "#4a5568", margin: 0 }}>
                        We maintain consistent follow-up to nurture leads until they're ready
                      </Paragraph>
                    </div>
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

export default MarketingSupportProblem
