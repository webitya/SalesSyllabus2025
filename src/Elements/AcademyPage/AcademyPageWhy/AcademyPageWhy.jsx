"use client"
import { Typography, Row, Col, Card } from "antd"
import { AimOutlined, BarChartOutlined, FolderOutlined, SyncOutlined } from "@ant-design/icons"
import { motion } from "framer-motion"

const { Title, Paragraph } = Typography

const AcademyPageWhy = () => {
  const features = [
    {
      icon: <AimOutlined className="text-4xl text-blue-700" />,
      title: "Role-specific learning paths",
      description: "Tailored content designed for your exact career stage and goals",
    },
    {
      icon: <BarChartOutlined className="text-4xl text-blue-700" />,
      title: "Industry-tested frameworks",
      description: "Proven methodologies used by top performers in the field",
    },
    {
      icon: <FolderOutlined className="text-4xl text-blue-700" />,
      title: "Access to real business case studies",
      description: "Learn from actual scenarios, not theoretical examples",
    },
    {
      icon: <SyncOutlined className="text-4xl text-blue-700" />,
      title: "Skill gap assessments and monthly updates",
      description: "Continuously improve with regular feedback and new content",
    },
  ]

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
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <span className="text-blue-700 text-3xl mr-2">🧭</span>
            <Title level={2} className="m-0 text-3xl md:text-4xl font-bold text-gray-800">
              Why Sales Syllabus Academy?
            </Title>
          </div>

          <Paragraph className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Most professionals grow by trial and error — and lose valuable time, energy, and business in the process.
            <span className="font-bold text-blue-700"> We change that.</span>
          </Paragraph>

          <Paragraph className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Sales Syllabus Academy empowers professionals at every level — from executives to founders — with:
          </Paragraph>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Row gutter={[24, 24]} className="mb-12">
            {features.map((feature, index) => (
              <Col xs={24} md={12} key={index}>
                <motion.div variants={itemVariants}>
                  <Card
                    className="h-full shadow-md hover:shadow-lg transition-shadow duration-300 border-0"
                    bodyStyle={{ padding: "32px" }}
                  >
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">{feature.icon}</div>
                      <div>
                        <Title level={4} className="mb-2 text-gray-800">
                          {feature.title}
                        </Title>
                        <Paragraph className="text-gray-600 mb-0">{feature.description}</Paragraph>
                      </div>
                    </div>
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

export default AcademyPageWhy
