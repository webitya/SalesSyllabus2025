import React from "react";
import Slider from "react-slick";
import './A2Company.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Company logos data
const companyLogos = [
  { name: "Company 1", logo: "/team1.svg", color: "#2B3C73" },
  { name: "Company 2", logo: "/team2.webp", color: "white" },
  { name: "Company 3", logo: "/team3.png", color: "white" },
  { name: "Company 4", logo: "/team4.webp", color: "white" },
  { name: "Company 5", logo: "/team5.png", color: "white" },
  { name: "Company 6", logo: "/team15.webp", color: "white" },
  { name: "Company 7", logo: "/team16.png", color: "white" },
  { name: "Company 8", logo: "/team17.png", color: "white" },
  { name: "Company 10", logo: "/team6.png", color: "white" },
  { name: "Company 11", logo: "/team7.png", color: "white" },
  { name: "Company 12", logo: "/team8.png", color: "white" },
  { name: "Company 13", logo: "/team9.png", color: "white" },
  { name: "Company 14", logo: "/team10.png", color: "white" },
  { name: "Company 15", logo: "/team11.png", color: "white" },
  { name: "Company 16", logo: "/team12.png", color: "white" },
  { name: "Company 17", logo: "/team13.png", color: "white" },
];

const A2Company = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Adjusted to 4 logos for a compact layout
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: true, // Added to pause on hover for better user control
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Shows 3 logos on medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Shows 2 logos on small screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Shows 1 logo on very small screens
        },
      },
    ],
  };

  // Function to determine the background color based on the logo color
  const getBackgroundColor = (color) => {
    return color === "white" ? "#2B3C73" : color; // Dark background for white logos
  };

  return (
    <div className="trusted-companies-wrapper py-6 pb-10 bg-gradient-to-r from-blue-800 to-blue-800">
      <h1 className="trusted-title text-3xl lg:text-4xl font-bold text-center text-white mb-4">
        Trusted by 100+ Leading Companies
      </h1>
      <p className="trusted-description text-center text-lg text-gray-300 mb-4">
      Join the growing list of organizations scaling faster with the right revenue team — across SaaS, 
      Manufacturing, B2B Services, and more
      </p>
      <div className="logo-container max-w-6xl mx-auto">
        <Slider {...settings}>
          {companyLogos.map((company, index) => (
            <div 
              key={index} 
              className="logo-box flex items-center justify-center py-6 px-4" 
              style={{ backgroundColor: getBackgroundColor(company.color), borderRadius: '10px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}
            >
              <img src={company.logo} alt={company.name} className="company-logo mx-auto h-8 lg:h-10 transition-all duration-300 ease-in-out filter grayscale hover:grayscale-0" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default A2Company;
