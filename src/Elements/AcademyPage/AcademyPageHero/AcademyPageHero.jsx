"use client"
import { Button, Typography } from "antd"
import { RocketOutlined } from "@ant-design/icons"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const { Title, Paragraph } = Typography

const AcademyPageHero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <div className="inline-block bg-yellow-500 text-blue-900 font-bold px-3 py-1 rounded-full mb-4">
              Sales Syllabus Academy
            </div>
            <Title level={1} className="!text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Prepare with Real-World Knowledge. <br className="hidden md:block" />
              <span className="text-yellow-400">Grow 3x Faster.</span>
            </Title>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Paragraph className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              The only preparatory platform for B2B business professionals to fast-track career growth using real-world
              case studies, frameworks, and proven industry insights.
            </Paragraph>
            <Paragraph className="text-xl md:text-2xl font-semibold text-white mb-10">
              Make fewer mistakes. Save more time. Get promotion-ready.
            </Paragraph>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact-us" target="_blank">
              <Button
                type="primary"
                size="large"
                icon={<RocketOutlined />}
                className="h-14 px-8 text-lg font-bold rounded-lg bg-yellow-500 border-yellow-500 text-blue-900 hover:bg-yellow-400 hover:border-yellow-400 shadow-lg"
              >
                Start Your Growth Journey
              </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-16"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default AcademyPageHero
