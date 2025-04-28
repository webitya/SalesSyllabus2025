"use client"
import { Row, Col, Typography, Card, Statistic } from "antd"
import { BarChartOutlined, RiseOutlined, ClockCircleOutlined, InboxOutlined } from "@ant-design/icons"
import { motion } from "framer-motion"
import ReactApexChart from "react-apexcharts"

const { Title, Paragraph } = Typography

const MarketingSupportOutcomes = () => {
  // Chart options for ApexCharts
  const chartOptions = {
    chart: {
      type: "bar",
      height: 250,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 4,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Month 1", "Month 2", "Month 3", "Month 4"],
    },
    yaxis: {
      title: {
        text: "Engagement Rate (%)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val) => val + "%",
      },
    },
    colors: ["#2c5282", "#90cdf4"],
  }

  const chartSeries = [
    {
      name: "Standard Outreach",
      data: [12, 14, 11, 13],
    },
    {
      name: "Our ABM Approach",
      data: [22, 28, 32, 38],
    },
  ]

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
            Outcomes You Can Expect
          </Title>
          <Paragraph
            style={{
              fontSize: "1.25rem",
              maxWidth: "800px",
              margin: "0 auto",
              color: "#4a5568",
            }}
          >
            📬 More Replies → 📞 More Calls → 💼 More Revenue
          </Paragraph>
        </motion.div>

        <Row gutter={[24, 24]}>
          <Col xs={24} lg={12}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card
                style={{
                  borderRadius: "12px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  height: "100%",
                }}
                bodyStyle={{ padding: "24px" }}
              >
                <Title
                  level={4}
                  style={{
                    color: "#1a365d",
                    marginBottom: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <BarChartOutlined style={{ marginRight: "12px" }} />
                  Engagement Comparison
                </Title>
                <ReactApexChart options={chartOptions} series={chartSeries} type="bar" height={300} />
              </Card>
            </motion.div>
          </Col>

          <Col xs={24} lg={12}>
            <Row gutter={[24, 24]}>
              <Col xs={24} sm={12}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <Card
                    style={{
                      borderRadius: "12px",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                      height: "100%",
                    }}
                    bodyStyle={{ padding: "24px" }}
                  >
                    <Statistic
                      title={
                        <span
                          style={{
                            color: "#4a5568",
                            fontSize: "1rem",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <RiseOutlined style={{ marginRight: "8px", color: "#2c5282" }} />
                          Engagement Increase
                        </span>
                      }
                      value={300}
                      suffix="%"
                      valueStyle={{ color: "#2c5282", fontWeight: "bold" }}
                    />
                    <Paragraph style={{ color: "#4a5568", marginTop: "12px" }}>
                      3X increase in lead engagement compared to standard outreach
                    </Paragraph>
                  </Card>
                </motion.div>
              </Col>

              <Col xs={24} sm={12}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Card
                    style={{
                      borderRadius: "12px",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                      height: "100%",
                    }}
                    bodyStyle={{ padding: "24px" }}
                  >
                    <Statistic
                      title={
                        <span
                          style={{
                            color: "#4a5568",
                            fontSize: "1rem",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <ClockCircleOutlined style={{ marginRight: "8px", color: "#2c5282" }} />
                          Time Saved
                        </span>
                      }
                      value={40}
                      suffix="hrs/mo"
                      valueStyle={{ color: "#2c5282", fontWeight: "bold" }}
                    />
                    <Paragraph style={{ color: "#4a5568", marginTop: "12px" }}>
                      Less time wasted on unqualified leads and manual follow-up
                    </Paragraph>
                  </Card>
                </motion.div>
              </Col>

              <Col xs={24}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Card
                    style={{
                      borderRadius: "12px",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                      background: "linear-gradient(135deg, #2c5282 0%, #1a365d 100%)",
                      color: "white",
                    }}
                    bodyStyle={{ padding: "24px" }}
                  >
                    <div className="flex items-center mb-4">
                      <InboxOutlined style={{ fontSize: "24px", marginRight: "12px" }} />
                      <Title level={4} style={{ color: "white", margin: 0 }}>
                        Key Benefits
                      </Title>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-none p-0">
                      {[
                        "Warm pipeline for your sales team",
                        "Less time wasted on unqualified leads",
                        "Consistent presence in target accounts' inboxes",
                        "Higher conversion rates from outreach to meetings",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="bg-blue-400 bg-opacity-20 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                            <span>✓</span>
                          </div>
                          <span style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.9)" }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default MarketingSupportOutcomes
