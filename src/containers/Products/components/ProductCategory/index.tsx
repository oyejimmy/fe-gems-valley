import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Typography, Card, Row, Col } from "antd";
import styled from "styled-components";
import { mockData } from "../../../../utils/helpers";

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

  const selectedProduct = mockData.find(
    (item) => item.name.toLowerCase() === productName?.toLowerCase()
  );

  if (!selectedProduct) {
    return (
      <ExperienceWrapper>
        <ExperienceTitle level={2}>Product Not Found</ExperienceTitle>
      </ExperienceWrapper>
    );
  }

  const handleCardClick = (id: number) => {
    navigate(`/products/${productName}/${id}`);
  };

  return (
    <ExperienceWrapper>
      <ExperienceTitle level={2}>
        {productName?.toUpperCase()} Variations
      </ExperienceTitle>
      <Row gutter={[16, 16]}>
        {selectedProduct.variations.map(({ id, images, color, weight }) => (
          <Col xs={12} sm={12} md={12} lg={12} xl={12} key={id}>
            <StyledCard hoverable onClick={() => handleCardClick(id)}>
              <img src={images[0]} alt={color} />
              <Card.Meta
                title={`${color} - ${weight}`}
                description={`Explore ${color} ${selectedProduct.name}`}
              />
            </StyledCard>
          </Col>
        ))}
      </Row>
    </ExperienceWrapper>
  );
};

export default ProductCategory;
