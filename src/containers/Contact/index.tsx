import React from "react";
import { Card, Typography, Form, Input, Button, message } from "antd";
import styled from "styled-components";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const { Title, Paragraph } = Typography;

const ContactCard = styled(Card)`
  max-width: 600px;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ContactForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const ContactInput = styled(Input)`
  margin-bottom: 10px;
`;

const ContactButton = styled(Button)`
  align-self: flex-end;
`;

const Contact: React.FC = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    emailjs
      .send(
        "service_hmpp34r", // Replace with your actual service ID
        "template_bii2r45", // Replace with your actual template ID
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
        },
        "SBFofcHdtrWc_f5us" // Replace with your actual user ID
      )
      .then(() => {
        message.success("Message sent successfully!");
        form.resetFields();
      })
      .catch(() => {
        message.error("Failed to send message. Please try again.");
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ContactCard>
        <Title level={2}>Contact Me</Title>
        <Paragraph>
          Have any questions or want to get in touch? Send me a message and I
          will get back to you as soon as possible.
        </Paragraph>
        <ContactForm form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <ContactInput placeholder="Your Name" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <ContactInput type="email" placeholder="Your Email" />
          </Form.Item>
          <Form.Item
            name="message"
            label="Message"
            rules={[{ required: true, message: "Please enter your message" }]}
          >
            <Input.TextArea rows={4} placeholder="Your Message" />
          </Form.Item>
          <ContactButton type="primary" htmlType="submit">
            Send
          </ContactButton>
        </ContactForm>
      </ContactCard>
    </motion.div>
  );
};

export default Contact;
