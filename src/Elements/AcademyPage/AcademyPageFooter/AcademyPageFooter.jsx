import { Layout, Typography, Row, Col, Divider, Button } from "antd"
import { FacebookOutlined, TwitterOutlined, LinkedinOutlined, InstagramOutlined, BookOutlined } from "@ant-design/icons"

const { Footer } = Layout
const { Title, Paragraph, Text } = Typography

const AcademyPageFooter = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-4">
      <div className="container mx-auto">
        <Row gutter={[48, 32]}>
          <Col xs={24} md={8} lg={6}>
            <div className="flex items-center mb-6">
              <BookOutlined className="text-2xl text-blue-400 mr-2" />
              <Title level={4} className="m-0 text-white">
                Sales Syllabus
              </Title>
            </div>
            <Paragraph className="text-gray-400 mb-6">
              The only preparatory platform for B2B business professionals to fast-track career growth using real-world
              knowledge.
            </Paragraph>
            <div className="flex space-x-4">
              <Button
                type="text"
                shape="circle"
                icon={<FacebookOutlined />}
                className="text-gray-400 hover:text-blue-400 hover:bg-gray-800"
              />
              <Button
                type="text"
                shape="circle"
                icon={<TwitterOutlined />}
                className="text-gray-400 hover:text-blue-400 hover:bg-gray-800"
              />
              <Button
                type="text"
                shape="circle"
                icon={<LinkedinOutlined />}
                className="text-gray-400 hover:text-blue-400 hover:bg-gray-800"
              />
              <Button
                type="text"
                shape="circle"
                icon={<InstagramOutlined />}
                className="text-gray-400 hover:text-blue-400 hover:bg-gray-800"
              />
            </div>
          </Col>

          <Col xs={24} md={8} lg={6}>
            <Title level={5} className="text-white mb-4">
              Academy
            </Title>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  Learning Paths
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  Skill Assessments
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  Frameworks
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  Certifications
                </a>
              </li>
            </ul>
          </Col>

          <Col xs={24} md={8} lg={6}>
            <Title level={5} className="text-white mb-4">
              Company
            </Title>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          <Col xs={24} md={8} lg={6}>
            <Title level={5} className="text-white mb-4">
              Support
            </Title>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <Divider className="border-gray-700 mt-12 mb-8" />

        <div className="text-center">
          <Text className="text-gray-500">&copy; {currentYear} Sales Syllabus Academy. All rights reserved.</Text>
        </div>
      </div>
    </Footer>
  )
}

export default AcademyPageFooter
