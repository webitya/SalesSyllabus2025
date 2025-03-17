import { useState } from 'react';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const HomeFAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What value sales syllabus is adding ?",
      answer: "Sales syllabus provides  real world knowledge and market insights to business to excel in sales and marketing . This enables business to do less mistakes "
    },
    {
      question: "How do I get started?",
      answer: "Contact us and tell us the area of improvement , we will suggest the best suitable solution "
    },
    {
      question: "What makes your process different?",
      answer: (
        <>
         Our mission is to minimize costly trial-and-error in sales and marketing. We conduct in-depth market research and analysis to identify patterns of success and failure, enabling us to recommend low-risk, high-impact sales and marketing models for our clients

        </>
      ),
    },
    
    {
      question: "Can I integrate your services with our existing systems?",
      answer: "Yes, our services are designed to integrate seamlessly with your existing systems. We offer flexible solutions that can be customized to fit your specific needs and ensure smooth integration."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we provide assistance through our dedicated support desk"
    },
    {
      question: "How do I get started?",
      answer: "Contact us and tell us the area of improvement , we will suggest the best suitable solution "
    },
    {
      question: "What makes your process different?",
      answer: "Our mission is to minimize costly trial-and-error in sales and marketing. We conduct in-depth market research and analysis to identify patterns of success and failure, enabling us to recommend low-risk, high-impact sales and marketing models for our clients"
    },
  ];

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section" style={{ width: '100%', padding: '50px 20px' }}>
      <h2 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '20px' }}>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} style={{ width: '100%', padding: '10px 0', borderBottom: '1px solid #ccc' }}>
          <div
            style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}
            onClick={() => toggleOpen(index)}
          >
            <h3 style={{ fontSize: '18px', margin: 0 }}>{faq.question}</h3>
            <div style={{ fontSize: '18px' }}>
              {openIndex === index ? <MinusOutlined /> : <PlusOutlined />}
            </div>
          </div>
          {openIndex === index && (
            <div style={{ marginTop: '10px', fontSize: '16px' }}>
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HomeFAQSection;
