import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Card, Row, Col } from "antd";
import styled from "styled-components";
import { mockData } from "../../utils/helpers";

const { Title } = Typography;

const ExperienceWrapper = styled.div`
  padding: 50px 0;
  background-color: #f9f9f9;
`;

const ExperienceTitle = styled(Title)`
  text-align: center;
  margin-bottom: 40px;
  color: #333;
`;

const StyledCard = styled(Card)`
  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    margin-bottom: 15px;
    border-radius: 5px;
  }

  &:hover {
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease;
  }
`;

const Products: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (title: string) => {
    navigate(`/products/${title.toLowerCase()}`);
  };

  return (
    <ExperienceWrapper>
      <ExperienceTitle level={2}>Products</ExperienceTitle>
      <Row gutter={[16, 16]}>
        {mockData.stones.map(({ icon, title }: any, index: any) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <StyledCard hoverable onClick={() => handleCardClick(title)}>
              <img src={icon} alt={title} />
              <Card.Meta
                title={title}
                description={`I'm dealing in ${title}.`}
              />
            </StyledCard>
          </Col>
        ))}
      </Row>
    </ExperienceWrapper>
  );
};

export default Products;
