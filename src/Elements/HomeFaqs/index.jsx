import { useState } from 'react';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const HomeFAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What makes Sales Syllabus different from a recruitment agency?",
      answer: "We don’t just fill positions — we build performing revenue teams using strategic insights, training, and culture alignment."
    },
    {
      question: "How fast can we start seeing results?",
      answer: "You receive your Culture Mapping Report within 7 days. Candidate shortlists begin in week two."
    },
    {
      question: "What roles can you help us hire?",
      answer: "Sales Heads, Business Heads, Sales Managers, BDRs, Marketing Strategists, Performance Marketers, Digital Campaign Managers, and more."
    },
    {
      question: "What happens if a hire doesn’t work out?",
      answer: "We offer a 90-day replacement if the candidate leaves on their own."
    },
    {
      question: "Do you also help with ongoing prospecting and outreach?",
      answer: "Yes. Our ABM support team helps you identify, engage, and nurture B2B prospects through manual, personalized email outreach. This allows your sales team to focus on converting — not chasing."
    }
  ];

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section w-full py-16 px-6 bg-white text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
      
      <div className=" mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="border-b border-gray-300 pb-4"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleOpen(index)}
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <div className="text-xl">
                {openIndex === index ? <MinusOutlined /> : <PlusOutlined />}
              </div>
            </div>
            {openIndex === index && (
              <div className="mt-4 text-gray-600">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeFAQSection;
