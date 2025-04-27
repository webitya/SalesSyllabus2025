import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Rohit Verma",
    position: "Founder, B2B SaaS Startup",
    testimonial: "With Sales Syllabus, we built a sales team that actually delivers. They understood our goals and gave us exactly the right people.",
  },
  {
    name: "Anita Desai",
    position: "Director, Manufacturing Company",
    testimonial: "Their process feels like an extension of our leadership team. Highly strategic, deeply involved, and results-focused.",
  },
];

const A2Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <div className="testimonials-wrapper py-16 bg-gray-100">
      <h2 className="text-3xl lg:text-4xl font-semibold text-center text-gray-800 mb-6">
        What Our Clients Say
      </h2>
      <div className="max-w-2xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="testimonial-box p-6 flex flex-col items-center text-center bg-white rounded-lg shadow-md border border-gray-200 mx-2"
            >
              <p className="text-lg text-gray-700 italic mb-4">"{item.testimonial}"</p>
              <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.position}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default A2Testimonials;
