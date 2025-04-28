"use client"

import { useState } from "react"
import { Layout, Menu, Button, Drawer } from "antd"
import { MenuOutlined, BookOutlined } from "@ant-design/icons"
import { motion } from "framer-motion"

const { Header } = Layout

const AcademyPageHeader = () => {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  const menuItems = [
    { key: "1", label: "Home" },
    { key: "2", label: "Academy" },
    { key: "3", label: "Courses" },
    { key: "4", label: "About Us" },
    { key: "5", label: "Contact" },
  ]

  return (
    <Header className="bg-white shadow-md px-4 md:px-8 flex items-center justify-between h-16 sticky top-0 z-50">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center"
      >
        <BookOutlined className="text-2xl text-blue-700 mr-2" />
        <span className="text-xl font-bold text-blue-800">Sales Syllabus</span>
      </motion.div>

      <div className="hidden md:block">
        <Menu mode="horizontal" className="border-0" items={menuItems} />
      </div>

      <div className="flex items-center">
        <Button type="primary" className="hidden md:block mr-4 bg-blue-700 hover:bg-blue-800 border-0">
          Login
        </Button>
        <Button
          type="default"
          className="hidden md:block border-blue-700 text-blue-700 hover:text-blue-800 hover:border-blue-800"
        >
          Sign Up
        </Button>
        <Button type="text" className="md:hidden text-blue-700" icon={<MenuOutlined />} onClick={showDrawer} />
      </div>

      <Drawer title="Menu" placement="right" onClose={onClose} open={visible} width={280}>
        <Menu mode="vertical" items={menuItems} />
        <div className="mt-4 flex flex-col gap-2">
          <Button type="primary" className="bg-blue-700 hover:bg-blue-800 border-0">
            Login
          </Button>
          <Button type="default" className="border-blue-700 text-blue-700 hover:text-blue-800 hover:border-blue-800">
            Sign Up
          </Button>
        </div>
      </Drawer>
    </Header>
  )
}

export default AcademyPageHeader
