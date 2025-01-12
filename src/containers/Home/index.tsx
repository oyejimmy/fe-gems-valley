import React from "react";
import { Row, Col, Card, Image, Typography, Carousel, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { mockData } from "../../utils/helpers";
import styled from "styled-components";
import { CarOutlined, CheckOutlined, UndoOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
// Styled components
const StyledCard = styled(Card)`
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
`;

const ImgContainer = styled.div`
  overflow: hidden;
  border-radius: 15px 0 0 15px;
  transition: transform 0.3s ease;

  &:hover img {
    transform: scale(1.1);
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
  border-radius: 15px 0 0 15px;
`;

const ContentSection = styled.div`
  padding: 30px;
  background-color: #f7f9fc;
  border-radius: 0 15px 15px 0;
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.05);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e8eff4;
  }
`;

// Styled components
const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  transition: color 0.3s ease;

  &:hover {
    color: #2980b9;
  }
`;

const SectionDescription = styled.p`
  font-size: 1.1rem;
  color: #34495e;
  line-height: 1.8;
  margin-bottom: 20px;
  transition: color 0.3s ease;

  &:hover {
    color: #2980b9;
  }
`;

const imgStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  transition: "transform 0.3s ease",
};

const HeroSection = styled.div`
  position: relative;
  text-align: center;
  color: white;
  margin-bottom: 40px;
`;

const HeroText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  margin: 0;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
`;

const HeroSubtitle = styled.p`
  font-size: 1.8rem;
  margin: 10px 0;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
`;

const HeroButton = styled.button`
  padding: 12px 24px;
  font-size: 1.2rem;
  color: white;
  background-color: #3498db;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
  }
`;

// Create a styled version of the Col component
const StyledCol = styled(Col)`
  padding: 20px;
  text-align: center;
  background-color: #ecf0f1;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color: #dfe6e9;
    transform: translateY(-5px);
  }
`;

// Styled components
const StyledCarousel = styled(Carousel)`
  .slick-slide img {
    width: 100%;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
`;

// Styled components
const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  overflow: hidden;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  text-align: center;
  color: white;
`;

const TitleH1 = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin: 0;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin: 20px 0;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
`;

const TopButton = styled(Button)`
  font-size: 1.2rem;
  color: white;
  background-color: #3498db;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;

  &:hover {
    background-color: #2980b9;
    color: white;
  }
`;

const HeroSlide = styled.div`
  width: 100%;
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  filter: brightness(70%);
`;

const Home: React.FC = () => {
  const navigate = useNavigate();

  // Handle click on the button
  const handleButtonClick = () => {
    navigate("/products");
  };

  // Handle click on the gem cards
  const handleCardClick = (gemName: string) => {
    navigate(`/products/${gemName.toLowerCase()}`);
  };

  return (
    <>
      <CarouselContainer>
        {/* Text on Top */}
        <TextContainer>
          <TitleH1>GEMS VALLEY</TitleH1>
          <Subtitle>
            Find the perfect stone, loose gemstones of all colors and shapes.
          </Subtitle>
          <TopButton onClick={handleButtonClick}>Click Here</TopButton>
        </TextContainer>

        {/* Carousel */}
        <Carousel autoplay autoplaySpeed={2500} effect="fade" infinite>
          {/* Slide 1 */}
          <HeroSlide>
            <HeroImage
              src="https://finestones.co/wp-content/uploads/2024/10/Find-Gemstone-banner_1512x.webp"
              alt="Gemstone Banner 1"
            />
          </HeroSlide>

          {/* Slide 2 */}
          <HeroSlide>
            <HeroImage
              src="https://finestones.co/wp-content/uploads/2024/10/Find-Gemstone-banner_1512x.webp"
              alt="Gemstone Banner 2"
            />
          </HeroSlide>

          {/* Slide 3 */}
          <HeroSlide>
            <HeroImage
              src="https://finestones.co/wp-content/uploads/2024/10/Find-Gemstone-banner_1512x.webp"
              alt="Gemstone Banner 3"
            />
          </HeroSlide>
        </Carousel>
      </CarouselContainer>

      <SectionTitle>Featured Gems</SectionTitle>
      <Row gutter={[32, 32]}>
        {mockData.stones.map(({ icon, title }, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <StyledCard
              hoverable
              cover={
                <Image
                  preview={false}
                  alt={title}
                  src={icon}
                  style={imgStyle}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              }
              onClick={() => handleCardClick(title)}
            >
              <Card.Meta
                title={
                  <Text strong style={{ color: "#2980b9" }}>
                    {title}
                  </Text>
                }
                description={
                  <Text
                    style={{ color: "#34495e" }}
                  >{`Beautiful ${title}`}</Text>
                }
              />
            </StyledCard>
          </Col>
        ))}
      </Row>

      <Row style={{ margin: "50px" }}>
        <Col>
          <div style={{ position: "relative", width: "100%" }}>
            {/* Image */}
            <Image
              preview={false}
              src="https://finestones.co/wp-content/uploads/2024/10/Find-Gemstone-banner_1512x.webp" // Replace with your image URL
              alt="Gemstone Collection"
              style={{
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                width: "100%",
                height: "100%",
              }}
            />

            {/* Text Overlay */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#ffffff",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              <Typography.Title
                level={3}
                style={{
                  color: "#ffffff",
                  fontWeight: "bold",
                  margin: 0,
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Text shadow for better visibility
                }}
              >
                GEMS VALLEY INTRODUCTION ☺
              </Typography.Title>
              <Typography.Paragraph
                style={{
                  color: "#ffffff",
                  fontSize: "1rem",
                  margin: "10px 0 0",
                  textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)", // Subtle text shadow
                }}
              >
                Welcome to our Shop! We have been in this business since 2016.
              </Typography.Paragraph>
              <Typography.Paragraph
                style={{
                  color: "#ffffff",
                  fontSize: "1rem",
                  margin: "10px 0 0",
                  textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)", // Subtle text shadow
                }}
              >
                We have specialized in high-quality colored gemstones, including
                Tourmaline, Aquamarine, Kunzite, Topaz, Sphene, Garnet, Quartz,
                Peridot, and more. If you're searching for the perfect colored
                gemstone, you've come to the right place. As a well-established
                and professional gemstone dealer based in Pakistan, we pride
                ourselves on offering only the finest gemstones. Our cutting and
                polishing processes meet the highest standards, with a focus on
                beauty and symmetry rather than maximizing finished weight.
              </Typography.Paragraph>
            </div>
          </div>
        </Col>
      </Row>

      <SectionTitle>WHY SHOP WITH US?</SectionTitle>
      <Row gutter={[32, 32]}>
        <StyledCol xs={24} sm={12} md={8}>
          <Title level={5} style={{ color: "#2980b9" }}>
            <CarOutlined /> Free Shipping
          </Title>
          <Text>
            Free FedEx & UPS shipping throughout the world. 100% delivery within
            5 to 7 days.
          </Text>
        </StyledCol>
        <StyledCol xs={24} sm={12} md={8}>
          <Title level={5} style={{ color: "#2980b9" }}>
            <UndoOutlined /> Return Accepted
          </Title>
          <Text>
            We accept the returns within 14 days of delivery. Buyer pays for the
            return shipping.
          </Text>
        </StyledCol>
        <StyledCol xs={24} sm={12} md={8}>
          <Title level={5} style={{ color: "#2980b9" }}>
            <CheckOutlined /> 100% Natural Gems
          </Title>
          <Text>
            All of our gemstones are 100% natural earth mined specimens.
          </Text>
        </StyledCol>
      </Row>
    </>
  );
};

export default Home;
