import React from 'react';
import { Row, Col } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import 'tailwindcss/tailwind.css';

const A2AbWhatWeDoNutshell = () => {
  const services = [
    {
      title: "Sales & Marketing Hiring",
      points: [
        "Permanent and Temporary",
        "Role-based skill fit",
        "Culture-mapped",
      ],
    },
    {
      title: "ABM & Prospect Nurturing",
      points: [
        "Personalized outreach to engage high-value prospects",
        "Consistent lead generation and sales support",
      ],
    },
    {
      title: "Sales Syllabus Academy",
      points: [
        "Role-specific learning",
        "Skill-gap assessments",
        "Growth readiness for the next role",
      ],
    },
    {
      title: "Monthly Problem-Solving Sprints",
      points: [
        "Tactical guidance for leadership and sales teams",
        "Rapid resolution of business roadblocks",
      ],
    },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 py-16 font-premium">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What We Do (in a nutshell)
          </h2>
        </div>

        <Row gutter={[24, 24]}>
          {services.map((service, index) => (
            <Col xs={24} md={12} key={index}>
              <div className="bg-white p-6 rounded-xl shadow-md h-full hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 text-sm">
                      <CheckOutlined className="text-blue-500 mr-2 pt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default A2AbWhatWeDoNutshell;
