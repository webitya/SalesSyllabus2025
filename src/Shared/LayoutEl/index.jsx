import React, { useState, useEffect } from "react";
import NavbarEl3 from "../Navbar3";
import { Link } from "react-router-dom";
import { AimOutlined, DownloadOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import A2PhaseModal from "../../Elements/A2Home/A2PhaseModal";

const LayoutEl = (data) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev);
    }, 7000);

    return () => clearInterval(interval);
  }, []);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const lastSeenModalTime = localStorage.getItem("lastSeenModalTime");
    const currentTime = Date.now();
    const oneHour = 60 * 60 * 1000; // 1 hour in milliseconds
  
    if (!lastSeenModalTime || currentTime - lastSeenModalTime > oneHour) {
      const timer = setTimeout(() => {
        setIsModalVisible(true);
        localStorage.setItem("lastSeenModalTime", Date.now()); // Update last seen time
      }, 20000); // Show modal after 20 seconds
  
      return () => clearTimeout(timer);
    }
  }, []);
  
  
  return (
    <>
      <NavbarEl3 />
      {/* === */}
      


      {/* === */}
      <div style={{ paddingTop: "70px" }}></div>
      <div className="w-full bg-blue-600 text-white py-2 overflow-hidden flex items-center">
      <div className="w-full flex">
        <motion.div
          className="whitespace-nowrap text-lg font-semibold"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          We are upgrading website content, please excuse us if you find any errors. We will fix this in 24 hours.
        </motion.div>
      </div>
    </div>
      {data.children}

      {/* Free Resources Button */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          zIndex: 1000,
        }}
      >
        <Link
          to="/free-resources"
          style={{
            backgroundColor: "#007BFF",
            color: "white",
            borderRadius: "30px",
            padding: "10px 15px",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            boxShadow: "0 3px 8px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.2s ease-in-out",
          }}
          className="hover:scale-105"
        >
          <DownloadOutlined style={{ fontSize: "16px" }} />
          Free Resources
        </Link>
      </div>

      {/* War Room Marketing Button with Slide Animation */}
      <motion.div
        initial={{ x: "100%" }} // Start hidden
        animate={{ x: visible ? "0%" : "100%" }} // Slide in/out effect
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{
          position: "fixed",
          top: "25%",
          right: "0",
          transform: "translateY(-50%)",
          display: "flex",
          alignItems: "center",
          zIndex: 1000,
        }}
      >
        <Link
          to="https://calendly.com/salessyllabus" target="_blank"
          style={{
            background: "linear-gradient(135deg, #0047AB, #007BFF)",
            color: "white",
            borderRadius: "12px 0 0 12px",
            padding: "15px 12px",
            fontSize: "16px",
            fontWeight: "bold",
            writingMode: "vertical-rl",
            textOrientation: "upright",
            textTransform: "uppercase",
            letterSpacing: "1px",
            boxShadow: "0 5px 5px rgba(0, 71, 171, 0.4)",
            transition: "all 0.3s ease-in-out",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            userSelect:"none"
          }}
          className=""
          onMouseEnter={(e) => (e.target.style.boxShadow = "0 0 15px rgba(0, 123, 255, 0.8)")}
          onMouseLeave={(e) => (e.target.style.boxShadow = "0 5px 15px rgba(0, 71, 171, 0.4)")}
        >
          <AimOutlined className="pb-3"/> Book Appointment
        </Link>
      </motion.div>
      {/* <A2PhaseModal visible={isModalVisible} onClose={() => setIsModalVisible(false)} /> */}
    </>
  );
};

export default LayoutEl;
