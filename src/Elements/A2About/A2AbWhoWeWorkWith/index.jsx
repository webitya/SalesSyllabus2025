import React from 'react';
import { Row, Col, Card } from 'antd';
import 'tailwindcss/tailwind.css';

const WhoWeWorkWith = () => {
  const partners = [
    {
      title: "SME Founders (₹3 Cr–₹100 Cr revenue range)",
      description: "We work closely with SME founders, guiding them to scale and build high-performing teams.",
    },
    {
      title: "Sales & Marketing Leaders",
      description: "Helping leaders who are building high-output sales and marketing teams to drive measurable results.",
    },
    {
      title: "HR Leaders",
      description: "HR leaders investing in performance-based hiring to ensure long-term growth and stability.",
    },
    {
      title: "Early-stage to Scaling Startups",
      description: "We partner with early-stage startups to scaling businesses, focusing on structured and sustainable growth.",
    },
  ];

  return (
    <section className="w-full py-16 bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Who We Work With
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            We collaborate with forward-thinking organizations and leaders dedicated to performance-driven growth.
          </p>
        </div>

        <Row gutter={[24, 24]}>
          {partners.map((partner, index) => (
            <Col xs={24} md={12} lg={6} key={index}>
              <Card
                className="bg-white rounded-2xl p-0 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex flex-col justify-between"
                bordered={false}
                style={{
                  minHeight: '300px', 
                  borderLeft: '4px solid #38bdf8', // Accent color for left border
                  background: '#f9fafb', // Lighter background
                }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{partner.title}</h3>
                <p className="text-gray-700">{partner.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
