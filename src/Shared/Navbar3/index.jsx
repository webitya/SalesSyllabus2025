import { useState, useEffect } from "react";
import { Button } from "antd";
import { Link, NavLink } from "react-router-dom";
import { MenuOutlined, CloseOutlined, FormOutlined, DownOutlined, AimOutlined } from "@ant-design/icons";
import CustomDrawer from "../DrawerEl";
import "./NavbarEl3.css";



const NavbarEl3 = () => {
const [isServicesOpen, setIsServicesOpen] = useState(false)
  const menus = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Services", href: "/services" },
    // { label: "Market Analysis", href: "/market-analysis" },
    // { label: "Marketing Communication", href: "/marketing-communication" },
    // { label: "Content Marketing ", href: "/content-marketing" },
    // { label: "Reporting Framework", href: "/Sales-framework" },
  ];
  const menus1 = [
    { label: "Faqs", href: "/faqs" },
    { label: "Blogs", href: "/blog" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isResourcesOpen5, setIsResourcesOpen5] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showDescription1, setShowDescription1] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 150);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <>
      <nav
        className={`navbar ${isSticky ? "sticky-navbar" : ""}`}
        style={{
          backgroundColor: isSticky ? "white" : "white",
          boxShadow: isSticky ? "0 4px 20px rgba(0, 0, 0, 0.1)" : "none",
          position: "fixed",
          width: "100%",
          zIndex: 1000,
          transition: "all 0.3s ease",
        }}
      >
        <div className="navbar-brand">
          <NavLink to="/">
            <img src="/logobbyy.svg" alt="brand-logo" width="110px" />
          </NavLink>
        </div>

        <div className="navbar-menu sm:flex hidden">
          {menus.map((item, index) => (
            <NavLink
              key={index}
              to={item.href}
              className={({ isActive }) => (isActive ? "active-link" : "navlink")}
              style={{
                color: "#333",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              {item.label}
            </NavLink>
          ))}

          <div
      className="dropdown"
      onMouseEnter={() => setIsServicesOpen(true)}
      onMouseLeave={() => setIsServicesOpen(false)}
    >
      <span className="navlink" style={{ fontWeight: "normal", textDecoration: "none" }}>
        All Services <DownOutlined style={{ fontSize: "14px" }} />
      </span>
      {isServicesOpen && (
        <div className="dropdown-menus">
          <div className="dropdown-upper">
            <div className="dropdown-column">
              <div className="relative w-fit">
      <h1
        className="text-xl font-semibold flex items-center gap-1 cursor-pointer"
        onMouseEnter={() => setShowDescription(true)}
        onMouseLeave={() => setShowDescription(false)}
      >
        Revenue Acceleration Consulting
        <AimOutlined
          className="text-gray-400 hover:text-gray-600 cursor-pointer"
          onMouseEnter={() => setShowDescription(true)}
          onMouseLeave={() => setShowDescription(false)}
        />
      </h1>
      {showDescription && (
        <p className="absolute mt-2 text-sm text-zinc-400 bg-white p-2 rounded-lg shadow-lg w-72">
          All knowledge is derived from real-time experience and executed market data, ensuring fewer mistakes.
        </p>
      )}
    </div>
              <NavLink to="/lead-generation-process-setup" className="dropdown-item">Lead Generation Process Set Up </NavLink>
              <NavLink to="/strategic-account-management" className="dropdown-item">Strategic account management</NavLink>
              <NavLink to="/market-analysis" className="dropdown-item">Market Analysis</NavLink>
                <NavLink to="/marketing-communication" className="dropdown-item">Marketing Communication Strategy</NavLink>
                <NavLink to="/community-building" className="dropdown-item">Community Building</NavLink>
            </div>
            <hr className="dropdown-divider-1" />
            <div className="dropdown-column">
              <h1>Sales and marketing team Management solution </h1>
              
              <div className="relative w-fit">
      <NavLink
        to="/learning-centre"
        className="dropdown-item flex items-center gap-1 text-blue-600 hover:text-blue-800"
        onMouseEnter={() => setShowDescription1(true)}
        onMouseLeave={() => setShowDescription1(false)}
      >
        Learning Centre
        <AimOutlined
          className="text-gray-400 hover:text-gray-600 cursor-pointer"
          onMouseEnter={() => setShowDescription1(true)}
          onMouseLeave={() => setShowDescription1(false)}
        />
      </NavLink>
      {showDescription1 && (
        <p className="absolute mt-2 text-sm text-zinc-400 bg-white p-2 rounded-lg shadow-lg w-72">
          Knowledge hub with updated learning resources built with real market knowledge and insights.
        </p>
      )}
    </div>    <NavLink to="/academy" className="dropdown-item">Academy</NavLink>
              <NavLink to="/war-room" className="dropdown-item">Sales & Marketing War Room</NavLink>
              <NavLink to="/Sales-framework" className="dropdown-item">Reporting Framework development </NavLink>
            </div>
          </div>

          {/* Second Separator - Before Single Column Section */}
          <hr className="dropdown-divider" />

          {/* Lower Section - Single Column */}
          <div className="dropdown-lower">
            <div className="dropdown-column">
              <h1>Sales team building solution </h1>
              <NavLink to="/sales-ready-manpower" className="dropdown-item">Sales-Ready ManPower : Pre-Trained Talent for Your Organization</NavLink>
             <NavLink to="/leadership-hiring-and-mentoring" className="dropdown-item">Leadership Hiring & Mentoring</NavLink>
             
                <NavLink to="/master-class" className="dropdown-item">Master Class</NavLink>
                <NavLink to="/interview" className="dropdown-item">Interview as a services</NavLink>
                <NavLink to="/Marketing-support" className="dropdown-item">Marketing Support</NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
      {/* ====================Resources */}
          <div
            className="dropdown"
            onMouseEnter={() => setIsResourcesOpen5(true)}
            onMouseLeave={() => setIsResourcesOpen5(false)}
          >
            <span className="navlink" style={{ fontWeight: "normal", textDecoration: "none" }}>Resources <DownOutlined style={{fontSize:"13px"}}/></span>
            {isResourcesOpen5 && (
              <div className="dropdown-menu">
                {/* <NavLink to="/faqs" className="dropdown-item">FAQs</NavLink> */}
                <NavLink to="/case-studies" className="dropdown-item">Case Studies</NavLink>
                {/* <NavLink to="/blog" className="dropdown-item">Blogs</NavLink> */}
                <NavLink to="/free-resources" className="dropdown-item">Free Resources</NavLink>
              </div>
            )}
          </div>
          {menus1.map((item, index) => (
            <NavLink
              key={index}
              to={item.href}
              className={({ isActive }) => (isActive ? "active-link" : "navlink")}
              style={{
                color: "#333",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              {item.label}
            </NavLink>
          ))}
          {/* ========================= */}
         <div className="pl-44">
         <Link to="https://calendly.com/salessyllabus" target="_blank">
      <Button
        className="premium-button"
        style={{
          backgroundColor: "#007BFF",
          color: "#fff",
          fontWeight: "600",
          borderRadius: "3px",
          padding: "13px 30px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        Book Appointment <FormOutlined />
      </Button>
    </Link>
         </div>
        </div>

        <Button
          className="menu-toggle sm:hidden"
          type="text"
          aria-label={isDrawerOpen ? "Close menu" : "Open menu"}
          style={{
            color: isDrawerOpen ? "#FF0000" : "#0047FF",
            fontSize: "24px",
          }}
          onClick={toggleDrawer}
        >
          {isDrawerOpen ? <CloseOutlined /> : <MenuOutlined />}
        </Button>
      </nav>

      <CustomDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default NavbarEl3;