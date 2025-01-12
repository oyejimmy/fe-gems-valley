import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Typography, Card, Row, Col } from "antd";
import styled from "styled-components";

const { Title } = Typography;

const ExperienceWrapper = styled.div`
  padding: 30px 15px;
  background: #f9f9f9;
`;

const ExperienceTitle = styled(Title)`
  text-align: center;
  margin-bottom: 40px;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const StyledCard = styled(Card)`
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin-bottom: 15px;
    border-radius: 5px;
  }

  &:hover {
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease;
  }
`;

const ProductCategory: React.FC = () => {
  const { productName } = useParams<{ productName: string }>();
  const navigate = useNavigate();

  const categoryData = [
    { id: 1, image: "https://via.placeholder.com/200", title: "Gem 1" },
    { id: 2, image: "https://via.placeholder.com/200", title: "Gem 2" },
    { id: 3, image: "https://via.placeholder.com/200", title: "Gem 3" },
    { id: 4, image: "https://via.placeholder.com/200", title: "Gem 4" },
    { id: 5, image: "https://via.placeholder.com/200", title: "Gem 5" },
    { id: 6, image: "https://via.placeholder.com/200", title: "Gem 6" },
  ];

  const handleCardClick = (gemId: number) => {
    if (productName) {
      navigate(`/products/${productName}/${gemId}`);
    } else {
      console.error("Product name is undefined");
    }
  };

  return (
    <ExperienceWrapper>
      <ExperienceTitle level={2}>
        {productName?.toUpperCase() ?? "Unknown"} Gems
      </ExperienceTitle>
      <Row gutter={[16, 16]}>
        {categoryData.map(({ id, image, title }) => (
          <Col xs={12} sm={12} md={12} lg={12} xl={12} key={id}>
            <StyledCard hoverable onClick={() => handleCardClick(id)}>
              <img src={image} alt={title} />
              <Card.Meta title={title} />
            </StyledCard>
          </Col>
        ))}
      </Row>
    </ExperienceWrapper>
  );
};

export default ProductCategory;
