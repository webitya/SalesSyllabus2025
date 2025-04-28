import { Layout } from "antd"
import MarketingSupportHero from "./MarketingSupportHero/MarketingSupportHero"
import MarketingSupportIntro from "./MarketingSupportIntro/MarketingSupportIntro"
import MarketingSupportProblem from "./MarketingSupportProblem/MarketingSupportProblem"
import MarketingSupportOutcomes from "./MarketingSupportOutcomes/MarketingSupportOutcomes"
import MarketingSupportFAQ from "./MarketingSupportFAQ/MarketingSupportFAQ"
import MarketingSupportCTA from "./MarketingSupportCTA/MarketingSupportCTA"

const { Content } = Layout

const MarketingSupport = () => {
  return (
    <Layout className="bg-white">
      <Content>
        <MarketingSupportHero />
        <MarketingSupportIntro />
        <MarketingSupportProblem />
        <MarketingSupportOutcomes />
        <MarketingSupportFAQ />
        <MarketingSupportCTA />
      </Content>
    </Layout>
  )
}

export default MarketingSupport
