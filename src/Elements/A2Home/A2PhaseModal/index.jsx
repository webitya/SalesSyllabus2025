import React, { useState } from "react";
import { Modal, Button, Form, Input, message } from "antd";
import { SolutionOutlined, RocketOutlined, TeamOutlined, BarChartOutlined } from "@ant-design/icons";
import emailjs from "@emailjs/browser";

const phases = [
  { title: "Strategy Building", phase: "Phase I", icon: <SolutionOutlined className="text-blue-500 text-3xl" /> },
  { title: "Building Operational Capacity", phase: "Phase II", icon: <TeamOutlined className="text-green-500 text-3xl" /> },
  { title: "Go To Market / Go Live", phase: "Phase III", icon: <RocketOutlined className="text-yellow-500 text-3xl" /> },
  { title: "Strategic Marketing Decisions", phase: "Phase IV", icon: <BarChartOutlined className="text-red-500 text-3xl" /> }
];

const A2PhaseModal = ({ visible, onClose }) => {
  const [selectedPhase, setSelectedPhase] = useState(null);
  const [form] = Form.useForm();

  const handlePhaseSelect = (index) => {
    setSelectedPhase(index);
  };

  const handleFormSubmit = async (values) => {
    const serviceId = "your_service_id"; // Replace with EmailJS service ID
    const templateId = "your_template_id"; // Replace with EmailJS template ID
    const publicKey = "your_public_key"; // Replace with EmailJS public key

    const templateParams = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      message: values.message,
      phase: phases[selectedPhase].title
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      message.success("Your response has been sent!");
      form.resetFields();
      setSelectedPhase(null);
    } catch (error) {
      message.error("Failed to send. Please try again.");
      console.error("EmailJS Error:", error);
    }
  };

  return (
    <Modal
      title={selectedPhase === null ? "Which Phase Are You In?" : phases[selectedPhase].title}
      open={visible}
      onCancel={onClose}
      footer={null}
      centered
      className="p-6 "
    >
      {selectedPhase === null ? (
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Select the phase that best describes where you are in your sales & marketing journey.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg flex flex-col items-center justify-center cursor-pointer shadow-md hover:shadow-lg transition-all"
                onClick={() => handlePhaseSelect(index)}
              >
                {phase.icon}
                <p className="text-lg font-semibold text-gray-700 mt-2">{phase.phase}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Form form={form} layout="vertical" onFinish={handleFormSubmit} className="space-y-4">
          <Form.Item
            label={<span className="font-semibold">Name</span>}
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Enter your name" className="rounded-lg p-2 border border-gray-300 w-full" />
          </Form.Item>

          <Form.Item
            label={<span className="font-semibold">Email</span>}
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Enter a valid email" }
            ]}
          >
            <Input placeholder="Enter your email" className="rounded-lg p-2 border border-gray-300 w-full" />
          </Form.Item>

          <Form.Item
            label={<span className="font-semibold">Phone</span>}
            name="phone"
            rules={[{ required: true, message: "Please enter your phone number" }]}
          >
            <Input placeholder="Enter your phone number" className="rounded-lg p-2 border border-gray-300 w-full" />
          </Form.Item>

          <Form.Item
            label={<span className="font-semibold">Message</span>}
            name="message"
            rules={[{ required: true, message: "Please enter your message" }]}
          >
            <Input.TextArea placeholder="Enter your message" rows={3} className="rounded-lg p-2 border border-gray-300 w-full" />
          </Form.Item>

          <div className="flex justify-end space-x-3">
            <Button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg" onClick={() => setSelectedPhase(null)}>
              Back
            </Button>
            <Button  htmlType="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Book an appointment
            </Button>
          </div>
        </Form>
      )}
    </Modal>
  );
};

export default A2PhaseModal;
