"use client"
import { Typography, Row, Col, Card, Avatar } from "antd"
import { UserOutlined, TeamOutlined, CrownOutlined, BankOutlined } from "@ant-design/icons"
import { motion } from "framer-motion"

const { Title, Paragraph } = Typography

const AcademyPageWhoFor = () => {
  const personas = [
    {
      icon: <UserOutlined className="text-2xl" />,
      color: "#3b82f6",
      title: "Early-stage professionals",
      description: "Looking to break into high-growth roles",
    },
    {
      icon: <TeamOutlined className="text-2xl" />,
      color: "#8b5cf6",
      title: "Mid-level managers",
      description: "Preparing for strategic leadership",
    },
    {
      icon: <CrownOutlined className="text-2xl" />,
      color: "#ec4899",
      title: "Founders & CEOs",
      description: "Building sales/marketing leadership capabilities in-house",
    },
    {
      icon: <BankOutlined className="text-2xl" />,
      color: "#f59e0b",
      title: "Companies",
      description: "Investing in upskilling their frontline and mid-level teams",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <span className="text-blue-700 text-3xl mr-2">👨‍🏫</span>
            <Title level={2} className="m-0 text-3xl md:text-4xl font-bold text-gray-800">
              Who This Is For
            </Title>
          </div>

          <Paragraph className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Our academy serves professionals at all levels who are committed to accelerating their career growth.
          </Paragraph>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Row gutter={[24, 24]}>
            {personas.map((persona, index) => (
              <Col xs={24} sm={12} key={index}>
                <motion.div variants={itemVariants}>
                  <Card
                    className="h-full border-0 shadow-md hover:shadow-lg transition-shadow duration-300"
                    bodyStyle={{ padding: "24px" }}
                  >
                    <div className="flex items-center mb-4">
                      <Avatar size={48} style={{ backgroundColor: persona.color }} icon={persona.icon} />
                      <div className="ml-4">
                        <Title level={4} className="mb-0 text-gray-800">
                          {persona.title}
                        </Title>
                      </div>
                    </div>
                    <Paragraph className="text-gray-600 mb-0">{persona.description}</Paragraph>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

       
      </div>
    </div>
  )
}

export default AcademyPageWhoFor
