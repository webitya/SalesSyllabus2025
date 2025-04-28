"use client"
import { Row, Col, Typography, Collapse } from "antd"
import { PlusOutlined, MinusOutlined } from "@ant-design/icons"
import { motion } from "framer-motion"

const { Title, Paragraph } = Typography
const { Panel } = Collapse

const ServicePageFAQ = () => {
  const faqs = [
    {
      question: "Do you help with only sales hiring, or marketing too?",
      answer:
        "We specialize in both sales and marketing hiring — because real growth happens when these functions work together. Whether you need BDRs, account executives, performance marketers, or brand strategists, we build complete revenue teams that perform.",
    },
    {
      question: "Can we use only training services without hiring through you?",
      answer:
        "Yes. Many clients come to us with an existing team and want to upgrade performance through training. Our training programs are modular, case study-based, and tailored for B2B sales and marketing roles.",
    },
    {
      question: "Do you work with agencies, product companies, or traditional businesses?",
      answer:
        "Yes. We work across B2B SaaS, D2C brands, traditional manufacturing, and service companies. If your business has a clear growth goal and needs a better-performing team, we can help — regardless of industry.",
    },
    {
      question: "What's your guarantee on candidates?",
      answer:
        "For permanent hires, we offer a free replacement within the first 30 days if performance expectations are not met. For temporary consultants, you only pay for actual working hours or deliverables.",
    },
    {
      question: "How fast can we expect to start seeing results?",
      answer:
        "Culture Mapping Report: Within 7 days\nShortlist of Candidates: Within 10–14 days\nOnboarding & Training: Can begin in 2–3 weeks\nResults vary based on team size and engagement level — but most clients see visible team performance improvements in the first 30–45 days.",
    },
    {
      question: "What kind of training formats do you offer?",
      answer:
        "We offer:\n• Self-paced onboarding courses for different roles\n• Live sessions & monthly problem-solving sprints\n• Case-based learning library (one real-world scenario each month)\nAll training is available online, and can be customized for your team.",
    },
    {
      question: "Can we hire for short-term or project-based needs?",
      answer:
        "Absolutely. Our temporary hiring model helps you bring in specialists (campaign managers, outbound experts, etc.) on an hourly or weekly basis — perfect for urgent skill gaps or pilot projects.",
    },
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
            Frequently Asked Questions
          </Title>
          <Paragraph
            style={{
              fontSize: "18px",
              color: "#555",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Get answers to common questions about our services
          </Paragraph>
        </motion.div>

        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} md={20} lg={18}>
            <Collapse
              bordered={false}
              expandIcon={({ isActive }) =>
                isActive ? (
                  <MinusOutlined style={{ color: "#0056b3", fontSize: "16px" }} />
                ) : (
                  <PlusOutlined style={{ color: "#0056b3", fontSize: "16px" }} />
                )
              }
              expandIconPosition="end"
              style={{
                background: "white",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              {faqs.map((faq, index) => (
                <Panel
                  key={index}
                  header={
                    <span
                      style={{
                        fontWeight: "600",
                        fontSize: "16px",
                        color: "#333",
                      }}
                    >
                      {faq.question}
                    </span>
                  }
                  style={{
                    marginBottom: "8px",
                    borderRadius: "8px",
                    border: "1px solid #f0f0f0",
                    overflow: "hidden",
                  }}
                >
                  <Paragraph
                    style={{
                      fontSize: "16px",
                      color: "#555",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {faq.answer}
                  </Paragraph>
                </Panel>
              ))}
            </Collapse>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ServicePageFAQ
