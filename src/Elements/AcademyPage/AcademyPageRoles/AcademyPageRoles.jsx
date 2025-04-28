"use client"
import { Typography, Button, Card, Row, Col } from "antd"
import {
  CrownOutlined,
  UserOutlined,
  TeamOutlined,
  BarChartOutlined,
  GlobalOutlined,
  ApartmentOutlined,
  NodeIndexOutlined,
  TrophyOutlined,
  RiseOutlined,
} from "@ant-design/icons"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const { Title, Paragraph } = Typography

const AcademyPageRoles = () => {
  const roles = [
    {
      title: "Founder / Co-founder",
      icon: <CrownOutlined />,
      color: "#4338ca",
    },
    {
      title: "CEO / Business Owner",
      icon: <UserOutlined />,
      color: "#1d4ed8",
    },
    {
      title: "Business Head / Profit Center Head",
      icon: <BarChartOutlined />,
      color: "#0369a1",
    },
    {
      title: "Sales Head / VP of Sales",
      icon: <TeamOutlined />,
      color: "#0e7490",
    },
    {
      title: "Regional Manager / Zonal Manager",
      icon: <GlobalOutlined />,
      color: "#0f766e",
    },
    {
      title: "Sales Manager",
      icon: <ApartmentOutlined />,
      color: "#047857",
    },
    {
      title: "Area Manager / Team Leader",
      icon: <NodeIndexOutlined />,
      color: "#15803d",
    },
    {
      title: "Senior Executive – Sales / BD",
      icon: <TrophyOutlined />,
      color: "#4d7c0f",
    },
    {
      title: "Executive – Sales / BD",
      icon: <RiseOutlined />,
      color: "#a16207",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  }

  return (
    <div className="py-20 bg-white flex flex-col items-center justify-center text-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <span className="text-blue-700 text-3xl mr-2">🚀</span>
            <Title level={2} className="m-0 text-3xl md:text-4xl font-bold text-gray-800">
              Choose Your Next Bigger Role
            </Title>
          </div>

          <Paragraph className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Select the role you want to grow into — and start learning what top performers at that level know and do.
          </Paragraph>
        </motion.div>

        <div className="mb-12 w-full flex flex-col items-center">
          <Title level={4} className="text-center mb-8 text-gray-700">
            <span className="text-blue-700">📈</span> Career Tracks Available:
          </Title>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Row gutter={[16, 16]} justify="center" className="max-w-5xl">
              {roles.map((role, index) => (
                <Col xs={24} sm={12} md={8} key={index} className="flex justify-center">
                  <motion.div variants={itemVariants}>
                    <Card
                      hoverable
                      className="text-center h-full w-64 border-0 shadow-sm hover:shadow-md transition-all duration-300"
                      bodyStyle={{ padding: "24px 16px" }}
                    >
                      <div
                        className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-xl"
                        style={{ backgroundColor: role.color }}
                      >
                        {role.icon}
                      </div>
                      <Paragraph className="font-medium text-gray-800 mb-0">{role.title}</Paragraph>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link to="/contact-us" target="_blank">
            <Button
              type="primary"
              size="large"
              className="h-12 px-8 text-base font-semibold rounded-lg bg-blue-700 border-blue-700 hover:bg-blue-800 hover:border-blue-800 shadow-md"
            >
              Explore Role-Based Learning Paths
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default AcademyPageRoles
