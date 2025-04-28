"use client"
import { Row, Col, Typography, Card, Button, Divider } from "antd"
import {
  TeamOutlined,
  UserSwitchOutlined,
  TrophyOutlined,
  BulbOutlined,
  AuditOutlined,
  ClockCircleOutlined,
  BankOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const { Title, Paragraph, Text } = Typography

const ServicePageServices = () => {
  const services = [
    {
      id: 1,
      icon: <TeamOutlined />,
      title: "Talent Strategy & Workforce Planning",
      description: "We analyze your growth plans and build a strategic hiring roadmap.",
      includes: [
        "Culture mapping",
        "Revenue-linked skill planning",
        "Role prioritization (short-term vs long-term)",
        "Succession planning",
      ],
      bestFor: "SME founders scaling from ₹1 Cr to ₹100 Cr+",
      timeline: "1–2 weeks",
      ctaText: "Book Strategy Session",
    },
    {
      id: 2,
      icon: <UserSwitchOutlined />,
      title: "Performance-Based Recruitment",
      description: "We don't just hire — we deliver performance-ready talent.",
      includes: [
        "Permanent hiring for core sales & marketing roles",
        "Temporary consultants to plug urgent skill gaps",
        "Domain-specific shortlists within 7 days",
        "Interview and onboarding support",
      ],
      roles: [
        "Sales Head, Business Head and CEO – Top leadership",
        "BDRs, SDRs, AEs",
        "Sales Managers, Marketing Managers",
        "Digital Marketers, Content Strategists",
        "Telecallers, Campaign Operators",
      ],
      ctaText: "Request a Talent Call",
    },
    {
      id: 3,
      icon: <TrophyOutlined />,
      title: "Sales & Marketing Training Programs",
      description: "Customized onboarding and skill-building for your entire team.",
      includes: [
        "Role-specific onboarding (BDR, AE, Manager, etc.)",
        "Performance training for early-stage hires",
        "Real-world case study learning",
        "Monthly Problem-Solving Sprints",
      ],
      formats: "Self-paced + Cohort-style",
      additional: "Also includes access to Sales Syllabus Learning Library",
      ctaText: "See Training Plans",
    },
    {
      id: 4,
      icon: <BulbOutlined />,
      title: "Founder & Leadership Advisory",
      description: "Work directly with experts to solve high-level sales/marketing challenges.",
      includes: [
        "Sales architecture consulting",
        "Hiring prioritization and delegation",
        "Branding and growth planning",
        "Access to exclusive founder-only playbooks",
      ],
      idealFor: "Founders of ₹3–₹20 Cr companies",
      ctaText: "Apply for Advisory Access",
    },
    {
      id: 5,
      icon: <AuditOutlined />,
      title: "Revenue Team Audit & Optimization",
      description: "Not sure what's broken in your team? We'll diagnose it.",
      includes: [
        "Team skill mapping",
        "Process audit (inbound/outbound)",
        "Conversion and pipeline metrics",
        "Strategic fixes to improve output",
      ],
      ctaText: "Request an Audit",
    },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div
      style={{
        background: "white",
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
            Deep-Dive Into Each Service
          </Title>
          <Paragraph
            style={{
              fontSize: "18px",
              color: "#555",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Explore our comprehensive suite of services designed to help your business grow
          </Paragraph>
        </motion.div>

        {services.map((service, index) => (
          <motion.div
            key={service.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="mb-12"
          >
            <Card
              style={{
                borderRadius: "12px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
                overflow: "hidden",
              }}
              bodyStyle={{ padding: "40px" }}
            >
              <Row gutter={[32, 32]}>
                <Col xs={24} md={6}>
                  <div
                    style={{
                      background: "rgba(0, 86, 179, 0.1)",
                      borderRadius: "16px",
                      padding: "24px",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "48px",
                        color: "#0056b3",
                        marginBottom: "16px",
                      }}
                    >
                      {service.icon}
                    </div>
                    <div
                      style={{
                        fontSize: "24px",
                        fontWeight: "600",
                        color: "#0056b3",
                      }}
                    >
                      {index + 1}
                    </div>
                  </div>
                </Col>
                <Col xs={24} md={18}>
                  <Title
                    level={3}
                    style={{
                      color: "#0056b3",
                      marginBottom: "12px",
                    }}
                  >
                    {service.title}
                  </Title>
                  <Paragraph
                    style={{
                      fontSize: "18px",
                      color: "#555",
                      marginBottom: "24px",
                    }}
                  >
                    {service.description}
                  </Paragraph>

                  <div className="mb-4">
                    <Text
                      strong
                      style={{
                        fontSize: "16px",
                        color: "#333",
                      }}
                    >
                      Includes:
                    </Text>
                    <ul
                      style={{
                        listStyleType: "none",
                        padding: "0",
                        marginTop: "8px",
                      }}
                    >
                      {service.includes.map((item, i) => (
                        <li
                          key={i}
                          style={{
                            marginBottom: "8px",
                            paddingLeft: "20px",
                            position: "relative",
                          }}
                        >
                          <span
                            style={{
                              position: "absolute",
                              left: "0",
                              color: "#00a0e9",
                            }}
                          >
                            •
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.roles && (
                    <div className="mb-4">
                      <Text
                        strong
                        style={{
                          fontSize: "16px",
                          color: "#333",
                        }}
                      >
                        Roles we hire:
                      </Text>
                      <ul
                        style={{
                          listStyleType: "none",
                          padding: "0",
                          marginTop: "8px",
                        }}
                      >
                        {service.roles.map((role, i) => (
                          <li
                            key={i}
                            style={{
                              marginBottom: "8px",
                              paddingLeft: "20px",
                              position: "relative",
                            }}
                          >
                            <span
                              style={{
                                position: "absolute",
                                left: "0",
                                color: "#00a0e9",
                              }}
                            >
                              •
                            </span>
                            {role}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Row gutter={[16, 16]} align="middle">
                    {service.bestFor && (
                      <Col xs={24} md={12}>
                        <div className="flex items-center">
                          <BankOutlined style={{ color: "#00a0e9", marginRight: "8px" }} />
                          <Text>
                            <Text strong>Best for:</Text> {service.bestFor}
                          </Text>
                        </div>
                      </Col>
                    )}

                    {service.timeline && (
                      <Col xs={24} md={12}>
                        <div className="flex items-center">
                          <ClockCircleOutlined style={{ color: "#00a0e9", marginRight: "8px" }} />
                          <Text>
                            <Text strong>Timeline:</Text> {service.timeline}
                          </Text>
                        </div>
                      </Col>
                    )}

                    {service.formats && (
                      <Col xs={24} md={12}>
                        <div className="flex items-center">
                          <Text>
                            <Text strong>Formats:</Text> {service.formats}
                          </Text>
                        </div>
                      </Col>
                    )}

                    {service.additional && (
                      <Col xs={24} md={12}>
                        <div className="flex items-center">
                          <Text>{service.additional}</Text>
                        </div>
                      </Col>
                    )}

                    {service.idealFor && (
                      <Col xs={24}>
                        <div className="flex items-center">
                          <Text>
                            <Text strong>Ideal for:</Text> {service.idealFor}
                          </Text>
                        </div>
                      </Col>
                    )}
                  </Row>

                  <Divider style={{ margin: "24px 0" }} />

                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link to="https://calendly.com/salessyllabus" target="_blank">
                    <Button
                      type="primary"
                      size="large"
                      style={{
                        background: "#0056b3",
                        borderColor: "#0056b3",
                        height: "44px",
                        borderRadius: "4px",
                        fontWeight: "600",
                      }}
                    >
                      {service.ctaText} <ArrowRightOutlined />
                    </Button>
                    </Link>
                  </motion.div>
                </Col>
              </Row>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ServicePageServices
