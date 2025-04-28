"use client"
import { Typography, Row, Col, Card } from "antd"
import { UserSwitchOutlined, BulbOutlined, ExperimentOutlined, RocketOutlined } from "@ant-design/icons"
import { motion } from "framer-motion"

const { Title, Paragraph } = Typography

const AcademyPageHowItWorks = () => {
  const steps = [
    {
      icon: <UserSwitchOutlined className="text-4xl text-blue-700" />,
      number: "1",
      title: "Choose Your Role",
      description:
        "Get access to structured learning modules, case studies, and growth tools tailored to your next role.",
    },
    {
      icon: <BulbOutlined className="text-4xl text-blue-700" />,
      number: "2",
      title: "Learn What Really Works",
      description: "From sales playbooks to decision frameworks — everything is built from 100+ real client scenarios.",
    },
    {
      icon: <ExperimentOutlined className="text-4xl text-blue-700" />,
      number: "3",
      title: "Practice and Reflect",
      description: "Apply your learning in real-time. Improve monthly with assessments, challenges, and role upgrades.",
    },
    {
      icon: <RocketOutlined className="text-4xl text-blue-700" />,
      number: "4",
      title: "Move to the Next Level",
      description:
        "Track your progress and become eligible for promotions or hiring opportunities through our hiring ecosystem.",
    },
  ]

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <span className="text-blue-700 text-3xl mr-2">🎓</span>
            <Title level={2} className="m-0 text-3xl md:text-4xl font-bold text-gray-800">
              How the Academy Works
            </Title>
          </div>

          <Paragraph className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Our structured approach ensures you gain practical skills that translate directly to career advancement.
          </Paragraph>
        </motion.div>

        <Row gutter={[24, 24]}>
          {steps.map((step, index) => (
            <Col xs={24} md={12} lg={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="h-full text-center shadow-md hover:shadow-lg transition-shadow duration-300 border-0"
                  bodyStyle={{ padding: "32px 24px" }}
                >
                  <div className="relative mb-6">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-700 text-xl font-bold">{step.number}</span>
                    </div>
                    <div className="pt-8">{step.icon}</div>
                  </div>

                  <Title level={4} className="mb-3 text-gray-800">
                    {step.title}
                  </Title>

                  <Paragraph className="text-gray-600 mb-0">{step.description}</Paragraph>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="bg-blue-50 text-blue-800 py-6 px-8 rounded-lg max-w-3xl mx-auto">
            <Paragraph className="text-lg font-medium mb-0">
              Our methodology is based on analyzing what actually works in the real world, not just theoretical
              concepts.
            </Paragraph>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AcademyPageHowItWorks
