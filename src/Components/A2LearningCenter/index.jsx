

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
import A2MasterWhoShouldAttend from "../../Elements/A2MasterClass/A2MasterWhoAttend";
import A2MasterKeyTakeaways from "../../Elements/A2MasterClass/A2MasterKeyTakeWays";
import A2MasterWhyAttend from "../../Elements/A2MasterClass/A2MasterWhyAttend";
import A2MasterWorkshopDetails from "../../Elements/A2MasterClass/A2MasterWorkshopDetails";
import A2MasterCTASection from "../../Elements/A2MasterClass/A2MasterCTASection";
import A2LeadHeroSection from "../../Elements/A2LeadGeneration/A2LeadHero";
import A2LeadWhyKeyTakeaways from "../../Elements/A2LeadGeneration/A2LeadWhyKey";
import A2LeadGenerationProcess from "../../Elements/A2LeadGeneration/A2LeadProcess";
import A2LeadDataDrivenInsights from "../../Elements/A2LeadGeneration/A2LeadDataDriven";
import A2LeadClientTestimonials from "../../Elements/A2LeadGeneration/A2LeadTestimonials";
import A2GetStartedSection from "../../Elements/A2LeadGeneration/A2LeadCTA";
import A2LeadDeliveryModels from "../../Elements/A2LeadGeneration/A2LeadModel";
import A2LeHeroSection from "../../Elements/A2LearningCenter/A2LeHeroSection";
import A2LeAboutSection from "../../Elements/A2LearningCenter/A2LeAboutUs";
import A2LeCourseOfferings from "../../Elements/A2LearningCenter/CourseOffering";
import A2LeWhyEnroll from "../../Elements/A2LearningCenter/A2LeWhyChoose";
import A2LeDeliveryModel from "../../Elements/A2LearningCenter/A2LeDeliveryModel";
import A2LeCallToAction from "../../Elements/A2LearningCenter/A2LeCTA";
import A2LeIntroLearningCentre from "../../Elements/A2LearningCenter/A2LeIntro";
import A2LeDeliveryModel01 from "../../Elements/A2LearningCenter/A2LeDeliveryModelDesc";
import A2LeContinuousLearningProgram from "../../Elements/A2LearningCenter/A2LeContinuousLearning";

const A2LeLearningCenter = () => {
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
    { id: "intro1", label: "Introduction" },
    { id: "intro", label: "About" },
    { id: "premium-advantage", label: "Types Of Learning Proogram" },
    // { id: "content", label: "Foundation Program" },
    // { id: "steps", label: "Continuous Learning Program" },
    { id: "benefits", label: "Why Enroll" },
    // { id: "premium-advantage01", label: "Our delivery model" },
    
    { id: "positioning", label: "Contact Us" },
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
          <A2LeHeroSection/>
        </section>
        <section id="intro1">
          <A2LeIntroLearningCentre />
        </section>
        <section id="intro">
          <A2LeAboutSection />
        </section>
        {/* <section id="content">
          <A2LeCourseOfferings />
        </section> */}
        <section id="premium-advantage">
          <A2LeDeliveryModel />
        </section>
        {/* <section id="steps">
          <A2LeContinuousLearningProgram/>
        </section> */}
        <section id="benefits">
          <A2LeWhyEnroll />
        </section>
        <section id="premium-advantage01">
          <A2LeDeliveryModel01 />
        </section>
   
        <section id="positioning">
          <A2LeCallToAction />
        </section>
      
        <FooterEl/>
      </main>
    </LayoutEl>
  );
};

export default A2LeLearningCenter;
