import { Layout } from "antd"
import AcademyPageHero from "./AcademyPageHero/AcademyPageHero"
import AcademyPageWhy from "./AcademyPageWhy/AcademyPageWhy"
import AcademyPageRoles from "./AcademyPageRoles/AcademyPageRoles"
import AcademyPageAssessment from "./AcademyPageAssessment/AcademyPageAssessment"
import AcademyPageHowItWorks from "./AcademyPageHowItWorks/AcademyPageHowItWorks"
import AcademyPageWhoFor from "./AcademyPageWhoFor/AcademyPageWhoFor"
import AcademyPageCTA from "./AcademyPageCTA/AcademyPageCTA"
import AcademyPageHeader from "./AcademyPageHeader/AcademyPageHeader"
import AcademyPageFooter from "./AcademyPageFooter/AcademyPageFooter"

const { Content } = Layout

const AcademyPage = () => {
  return (
    <Layout className="min-h-screen bg-white">
      {/* <AcademyPageHeader /> */}
      <Content>
        <AcademyPageHero />
        <AcademyPageWhy />
        <AcademyPageRoles />
        <AcademyPageAssessment />
        <AcademyPageHowItWorks />
        <AcademyPageWhoFor />
        <AcademyPageCTA />
      </Content>
      {/* <AcademyPageFooter /> */}
    </Layout>
  )
}

export default AcademyPage
