"use client"
import { Layout } from "antd"
import ServicePageHero from "./ServicePageHero/ServicePageHero"
import ServicePageOverview from "./ServicePageOverview/ServicePageOverview"
import ServicePageServices from "./ServicePageServices/ServicePageServices"
import ServicePageClients from "./ServicePageClients/ServicePageClients"
import ServicePageEngagement from "./ServicePageEngagement/ServicePageEngagement"
import ServicePageFAQ from "./ServicePageFAQ/ServicePageFAQ"
import ServicePageCTA from "./ServicePageCTA/ServicePageCTA"
import { motion } from "framer-motion"

const { Content } = Layout

const ServicePage = () => {
  return (
    <Layout className="min-h-screen bg-white">
      <Content>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <ServicePageHero />
          <ServicePageOverview />
          <ServicePageServices />
          <ServicePageClients />
          <ServicePageEngagement />
          <ServicePageFAQ />
          <ServicePageCTA />
        </motion.div>
      </Content>
    </Layout>
  )
}

export default ServicePage
