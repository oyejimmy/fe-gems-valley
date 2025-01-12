import React from "react";
import styled from "styled-components";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;

  h1 {
    font-size: 24px;
    font-weight: bold;
  }
`;

const Content = styled.div`
  text-align: justify;
`;

const CEOSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 20px;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;

    p {
      margin: 5px 0;
    }

    a {
      color: #007bff;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
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
          Welcome to our Shop! We have been in this business since 2008. We are
          dealing in Colored Gemstones like Tourmaline, Aquamarine, Kunzite,
          Topaz, Sphene, Garnet, Quartz & Peridot, etc.
        </Paragraph>

        <Paragraph>
          We mainly deal in Gemstones from Pakistan & Afghanistan origin.
          Northern areas of Pakistan have very famous mines producing many
          unique and high-quality gemstones. We have direct access to miners to
          facilitate our valued buyers by offering them competitive quality
          prices to help them grow their businesses. Our priority is to maintain
          good relations with our customers.
        </Paragraph>

        <Paragraph>
          If you are looking for perfect colored gemstones, then you have come
          to the right place. We are well-established, professional gemstone
          dealers based in Pakistan and deal only with the highest quality
          gemstones. Our cutting and polishing meet the highest standards, along
          with symmetry. We cut with beauty being the priority and not the
          finished weight!
        </Paragraph>

        <Paragraph>
          All stones are 100% natural with accurate descriptions, highly
          magnified photographic images so that every detail is visible, and all
          treatments are fully disclosed.
        </Paragraph>
      </Content>

      <CEOSection>
        <img src="path_to_ceo_image" alt="CEO" />
        <div>
          <Paragraph>
            <strong>CEO:</strong> Hamza Gull
          </Paragraph>
          <Paragraph>
            <strong>Contact & Whatsapp:</strong> +66 618987192
          </Paragraph>
          <Paragraph>
            <strong>Email:</strong>{" "}
            <a href="mailto:finestonespk@gmail.com">finestonespk@gmail.com</a>
          </Paragraph>
          <Paragraph>
            You can also contact us on social media like Instagram & Facebook.
            All the links are at the bottom of the page.
          </Paragraph>
        </div>
      </CEOSection>
    </Container>
  );
};

export default AboutUs;
