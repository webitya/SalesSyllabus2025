

import React, { useState, useEffect } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import A2BrandPositioningJourney from "../../Elements/A2Markt/A2BrandJourney";
import A2ContentMarketingBenefits from "../../Elements/A2Markt/A2MarktContBenefits";
import StepsOfContentMarketingSection from "../../Elements/A2Markt/A2MrtConSteps";
import ContentMarketingSection from "../../Elements/A2Markt/A2MrtContent";
import PremiumContentAdvantageSection from "../../Elements/A2Markt/A2MrtCTA";
import LayoutEl from "../../Shared/LayoutEl";
import FooterEl from "../../Shared/FooterEl";
import A2BHero from "../../Elements/A2CommunityBuilding/A2CBHero";
import A2CBAbout from "../../Elements/A2CommunityBuilding/A2CBAbout";
import A2CBTypes from "../../Elements/A2CommunityBuilding/A2CBTypes";
import A2BCComparision from "../../Elements/A2CommunityBuilding/A2CBComparision";
import A2CBBenefits from "../../Elements/A2CommunityBuilding/A2CBBenefits";
import A2CBSales from "../../Elements/A2CommunityBuilding/A2CBSales";
import A2CBCTASection from "../../Elements/A2CommunityBuilding/A2CBCTASection";
import A2MasterClassHero from "../../Elements/A2MasterClass/A2MasterClassHero";
import A2MasterClassStrategySection from "../../Elements/A2MasterClass/A2MasterClassStrategy";
import A2WWarRoomHero from "../../Elements/A2WarRoom/A2WWarRoomHero";
import A2WWhyChooseWarRoom from "../../Elements/A2WarRoom/A2WWhyChoose";
import A2WWhatToExpect from "../../Elements/A2WarRoom/A2WWhatToExpect";
import A2WWarRoomValue from "../../Elements/A2WarRoom/A2WWarRoomValue";
import A2WWhoShouldAttend from "../../Elements/A2WarRoom/A2WWhoShouldAttend";
import A2WCTASection from "../../Elements/A2WarRoom/A2WCTASection";

const A2WarRoom = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setSidebarOpen(false); // Close sidebar on link click
  };

  const navLinks = [
    { id: "intro", label: "Why Choose" },
    { id: "content", label: "What to expect" },
    { id: "steps", label: "How to sales" },
    { id: "benefits", label: "Who should attend" },
    { id: "positioning", label: "Contact Us" },
    // { id: "premium-advantage", label: "Call To Action" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      navLinks.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          if (top <= 150 && bottom >= 150) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  return (
    <LayoutEl>
      {/* Toggle Button */}
      <button
        className="fixed top-4 left-4 z-50 bg-blue-500 text-white p-3 rounded-full shadow-lg"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {isSidebarOpen ? <CloseOutlined className="text-lg" /> : <MenuOutlined className="text-lg" />}
      </button>

      {/* Sidebar Navigation */}
      <aside
  className={`fixed top-20 left-0 h-full w-40 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out z-40 ${
    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
  } lg:translate-x-0 lg:block`}
>
  <ul className="space-y-3 py-6 px-4">
    {navLinks.map(({ id, label }) => (
      <li
        key={id}
        className={`cursor-pointer text-sm font-medium p-2 rounded-md transition-all ${
          activeSection === id
            ? "bg-blue-50 text-blue-600"
            : "text-gray-600 hover:bg-gray-50"
        }`}
        onClick={() => scrollToSection(id)}
      >
        {label}
      </li>
    ))}
  </ul>
</aside>


      {/* Main Content */}
      <main
        className={`transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "ml-40" : "ml-0"
        } lg:ml-40`}
      >
        <section id="hero">
          <A2WWarRoomHero />
        </section>
        <section id="intro">
          <A2WWhyChooseWarRoom />
        </section>
        <section id="content">
          <A2WWhatToExpect />
        </section>
        <section id="steps">
          <A2WWarRoomValue/>
        </section>
        <section id="benefits">
          <A2WWhoShouldAttend />
        </section>
        <section id="positioning">
          <A2WCTASection />
        </section>
    
        <FooterEl/>
      </main>
    </LayoutEl>
  );
};

export default A2WarRoom;
