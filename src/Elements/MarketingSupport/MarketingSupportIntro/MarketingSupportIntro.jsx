"use client"
import { Row, Col, Typography, Card, Button } from "antd"
import { CheckCircleFilled, AimOutlined, RocketOutlined } from "@ant-design/icons"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const { Title, Paragraph, Text } = Typography

const MarketingSupportIntro = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Title
            level={2}
            style={{
              color: "#1a365d",
              fontSize: "2.5rem",
              fontWeight: "700",
              marginBottom: "1rem",
            }}
          >
            Account-Based Marketing & Prospect Nurturing
          </Title>
          <Paragraph
            style={{
              fontSize: "1.25rem",
              maxWidth: "800px",
              margin: "0 auto",
              color: "#4a5568",
            }}
          >
            We support your sales team with manual, personalized outreach — designed to engage decision-makers and open
            sales conversations faster.
          </Paragraph>
        </motion.div>

        <Row gutter={[32, 32]}>
          <Col xs={24} lg={14}>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card
                style={{
                  borderRadius: "12px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                }}
                bodyStyle={{ padding: "32px" }}
              >
                <Title level={4} style={{ color: "#1a365d", marginBottom: "1.5rem" }}>
                  Includes:
                </Title>
                <motion.ul className="list-none p-0" variants={containerVariants}>
                  {[
                    "Identifying ideal customer profiles (ICPs)",
                    "Creating hyper-personalized email scripts",
                    "Manual outreach campaigns (non-automated)",
                    "Follow-ups and lead qualification support",
                    "Weekly analytics on engagement and responses",
                  ].map((item, index) => (
                    <motion.li key={index} variants={itemVariants} className="flex items-start mb-4">
                      <CheckCircleFilled
                        style={{
                          color: "#2c5282",
                          fontSize: "20px",
                          marginRight: "12px",
                          marginTop: "4px",
                        }}
                      />
                      <Text style={{ fontSize: "1rem", color: "#4a5568" }}>{item}</Text>
                    </motion.li>
                  ))}
                </motion.ul>
              </Card>
            </motion.div>
          </Col>
          <Col xs={24} lg={10}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card
                style={{
                  borderRadius: "12px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  height: "100%",
                  background: "linear-gradient(135deg, #2c5282 0%, #1a365d 100%)",
                  color: "white",
                }}
                bodyStyle={{ padding: "32px" }}
              >
                <div className="flex items-center mb-6">
                  <AimOutlined style={{ fontSize: "24px", marginRight: "12px" }} />
                  <Title level={4} style={{ color: "white", margin: 0 }}>
                    Ideal for:
                  </Title>
                </div>
                <ul className="list-none p-0">
                  {[
                    "Companies targeting large-value B2B accounts",
                    "Founder-led sales teams needing qualified conversations",
                    "Teams with limited internal marketing bandwidth",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start mb-4">
                      <CheckCircleFilled
                        style={{
                          color: "#90cdf4",
                          fontSize: "20px",
                          marginRight: "12px",
                          marginTop: "4px",
                        }}
                      />
                      <Text style={{ fontSize: "1rem", color: "rgba(255,255,255,0.9)" }}>{item}</Text>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <div className="flex items-center mb-6">
                    <RocketOutlined style={{ fontSize: "24px", marginRight: "12px" }} />
                    <Title level={4} style={{ color: "white", margin: 0 }}>
                      Outcome:
                    </Title>
                  </div>
                  <ul className="list-none p-0">
                    {[
                      "Better engagement from cold prospects",
                      "Consistent lead nurturing",
                      "Support for outbound sales & follow-up",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start mb-4">
                        <CheckCircleFilled
                          style={{
                            color: "#90cdf4",
                            fontSize: "20px",
                            marginRight: "12px",
                            marginTop: "4px",
                          }}
                        />
                        <Text style={{ fontSize: "1rem", color: "rgba(255,255,255,0.9)" }}>{item}</Text>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-8">
                  <Link to="https://calendly.com/salessyllabus" target="_blank">
                  <Button
                    type="primary"
                    size="large"
                    block
                    style={{
                      backgroundColor: "#ffffff",
                      borderColor: "#ffffff",
                      color: "#1a365d",
                      height: "50px",
                      fontSize: "16px",
                      fontWeight: "bold",
                      borderRadius: "4px",
                    }}
                  >
                    Talk to Our ABM Team
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

export default MarketingSupportIntro
