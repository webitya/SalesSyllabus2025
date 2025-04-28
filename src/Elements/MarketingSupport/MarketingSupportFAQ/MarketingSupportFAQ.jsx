"use client"
import { Typography, Collapse } from "antd"
import { QuestionCircleOutlined } from "@ant-design/icons"
import { motion } from "framer-motion"

const { Title, Paragraph } = Typography
const { Panel } = Collapse

const MarketingSupportFAQ = () => {
  const faqItems = [
    {
      question: "Is this mass email marketing?",
      answer: "No. Every outreach is done manually with customized messaging for each segment or account.",
    },
    {
      question: "What tools do you use?",
      answer:
        "We use verified data sources and manual execution tools — avoiding bulk mailers to ensure high deliverability and response.",
    },
    {
      question: "Can you also help us close leads?",
      answer: "Yes — we can connect this outreach with your sales hiring or training needs, if required.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Most clients start seeing increased engagement within the first 30 days, with qualified meetings typically beginning in the 45-60 day range.",
    },
    {
      question: "Do you work with any industry?",
      answer:
        "We specialize in B2B industries, particularly SaaS, professional services, and technology companies. We'll evaluate if your target market is a good fit during our initial consultation.",
    },
  ]

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <QuestionCircleOutlined
              style={{
                fontSize: "28px",
                color: "#2c5282",
                marginRight: "12px",
              }}
            />
            <Title
              level={2}
              style={{
                color: "#1a365d",
                margin: 0,
                fontSize: "2.5rem",
                fontWeight: "700",
              }}
            >
              Frequently Asked Questions
            </Title>
          </div>
          <Paragraph
            style={{
              fontSize: "1.125rem",
              maxWidth: "700px",
              margin: "0 auto",
              color: "#4a5568",
            }}
          >
            Get answers to common questions about our marketing support services
          </Paragraph>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Collapse
            defaultActiveKey={["0"]}
            expandIconPosition="end"
            style={{
              background: "white",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            }}
          >
            {faqItems.map((item, index) => (
              <Panel
                key={index}
                header={
                  <span
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: "600",
                      color: "#2d3748",
                    }}
                  >
                    {item.question}
                  </span>
                }
                style={{
                  borderBottom: index === faqItems.length - 1 ? "none" : "1px solid #e2e8f0",
                  padding: "12px 0",
                }}
              >
                <Paragraph
                  style={{
                    fontSize: "1rem",
                    color: "#4a5568",
                    margin: 0,
                  }}
                >
                  {item.answer}
                </Paragraph>
              </Panel>
            ))}
          </Collapse>
        </motion.div>
      </div>
    </div>
  )
}

export default MarketingSupportFAQ
