import React from "react";
import styled from "styled-components";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  background: linear-gradient(135deg, #fff, #f9f9f9);
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  font-family: "Playfair Display", serif;
  color: #444;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;

  h3 {
    font-size: 28px;
    font-weight: bold;
    color: #00695c;
  }
`;

const Content = styled.div`
  text-align: justify;
  font-size: 18px;
  line-height: 1.8;
`;

const Highlight = styled.span`
  color: #d81b60;
  font-weight: bold;
`;

const CEOSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  margin-top: 30px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #d81b60;
  }

  div {
    display: flex;
    flex-direction: column;

    p {
      margin: 5px 0;
      font-size: 16px;
    }

    a {
      color: #007bff;
      text-decoration: none;
      font-weight: bold;

      &:hover {
        text-decoration: underline;
        color: #d81b60;
      }
    }
  }
`;

const AboutUs = () => {
  return (
    <Container>
      <Header>
        <Title level={3}>About Us</Title>
      </Header>

      <Content>
        <Paragraph>
          Welcome to our <Highlight>Fine Stone Shop!</Highlight> We have been in
          the gemstone business since <Highlight>2008</Highlight>. We specialize
          in exquisite
          <Highlight> Colored Gemstones</Highlight> including **Tourmaline,
          Aquamarine, Kunzite, Topaz, Sphene, Garnet, Quartz, and Peridot.**
        </Paragraph>

        <Paragraph>
          Our gems originate from **Pakistan & Afghanistan**, renowned for their
          unique and high-quality stones. We collaborate directly with miners,
          ensuring the **best quality gemstones at competitive prices** to help
          our customers grow their businesses.
        </Paragraph>

        <Paragraph>
          If you are searching for **top-quality colored gemstones**, you are in
          the right place! Our stones are **100% natural**, precisely cut,
          polished, and meet the **highest industry standards** with exceptional
          symmetry.
        </Paragraph>

        <Paragraph>
          Each gemstone is showcased with **magnified, high-resolution images**
          so you can inspect every detail. All **treatments are fully
          disclosed** for complete transparency.
        </Paragraph>
      </Content>

      <CEOSection>
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="CEO Hamza Gull"
        />
        <div>
          <Paragraph>
            <strong>CEO:</strong> Hamza Gull
          </Paragraph>
          <Paragraph>
            <strong>Contact & WhatsApp:</strong>{" "}
            <Highlight>+66 618987192</Highlight>
          </Paragraph>
          <Paragraph>
            <strong>Email:</strong>{" "}
            <a href="mailto:finestonespk@gmail.com">finestonespk@gmail.com</a>
          </Paragraph>
          <Paragraph>
            You can also find us on **Instagram & Facebook.** Links are
            available at the bottom of the page.
          </Paragraph>
        </div>
      </CEOSection>
    </Container>
  );
};

export default AboutUs;
