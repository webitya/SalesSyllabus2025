"use client"
import { Typography, Button, Row, Col, Card } from "antd"
import { CheckCircleOutlined, RadarChartOutlined } from "@ant-design/icons"
import { motion } from "framer-motion"
import ReactApexChart from "react-apexcharts"
import { Link } from "react-router-dom"

const { Title, Paragraph } = Typography

const AcademyPageAssessment = () => {
  // Sample data for radar chart
  const radarChartOptions = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.2,
    },
    markers: {
      size: 4,
    },
    xaxis: {
      categories: ["Leadership", "Strategy", "Execution", "Communication", "Technical", "Innovation"],
    },
    yaxis: {
      show: false,
    },
    colors: ["#1d4ed8", "#d97706"],
    legend: {
      position: "bottom",
    },
  }

  const radarChartSeries = [
    {
      name: "Your Skills",
      data: [70, 60, 80, 75, 65, 55],
    },
    {
      name: "Top Performers",
      data: [90, 85, 90, 80, 85, 90],
    },
  ]

  const features = [
    "Real-time business expectations",
    "Must-have vs. nice-to-have skills",
    "Leadership, communication, and execution scores",
  ]

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <Row gutter={[48, 24]} align="middle">
          <Col xs={24} lg={12}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <div className="inline-flex items-center mb-4">
                  <span className="text-blue-700 text-3xl mr-2">🔍</span>
                  <Title level={2} className="m-0 text-3xl md:text-4xl font-bold text-gray-800">
                    Know Where You Stand
                  </Title>
                </div>
                <Title level={3} className="text-xl md:text-2xl text-gray-700 font-normal mt-0">
                  Skill Gap Assessment
                </Title>

                <Paragraph className="text-lg text-gray-600 mb-8">
                  Before you grow, know what's missing. Take our expert-designed assessment to identify your strengths
                  and gaps compared to top performers in your desired role.
                </Paragraph>

                <div className="mb-8">
                  <Title level={4} className="text-lg font-semibold text-gray-800 mb-4">
                    <RadarChartOutlined className="mr-2 text-blue-700" /> Based on:
                  </Title>

                  <ul className="space-y-3">
                    {features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                        className="flex items-start"
                      >
                        <CheckCircleOutlined className="text-green-600 mt-1 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link to="/contact-us" target="_blank">
                  <Button
                    type="primary"
                    size="large"
                    className="h-12 px-8 text-base font-semibold rounded-lg bg-blue-700 border-blue-700 hover:bg-blue-800 hover:border-blue-800 shadow-md"
                  >
                    Take the Free Skill Gap Assessment
                  </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </Col>

          <Col xs={24} lg={12}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-lg border-0 rounded-xl overflow-hidden">
                <Title level={4} className="text-center mb-6 text-gray-800">
                  Sample Skill Gap Analysis
                </Title>

                <div className="h-80">
                  <ReactApexChart options={radarChartOptions} series={radarChartSeries} type="radar" height="100%" />
                </div>

                <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                  <Paragraph className="text-sm text-gray-600 mb-0">
                    <strong>Insight:</strong> Your leadership and execution skills are strong, but there's room for
                    improvement in innovation and technical knowledge compared to top performers in your target role.
                  </Paragraph>
                </div>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default AcademyPageAssessment
