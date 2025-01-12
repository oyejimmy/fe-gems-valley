import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Table, Row, Col, Card, Tag, Space } from "antd";
import styled from "styled-components";

const { Title } = Typography;

// Styled Components
const ExperienceWrapper = styled.div`
  padding: 30px 15px;
  background: linear-gradient(135deg, #f9f9f9, #ffffff);
`;

const ExperienceTitle = styled(Title)`
  text-align: center;
  margin-bottom: 40px;
  color: #00695c;
  font-size: 2rem;
  font-family: "Playfair Display", serif;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const StyledCard = styled(Card)`
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 15px;
  }
`;

const DetailsWrapper = styled.div`
  margin: 20px auto;
  max-width: 1200px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

const DetailsTable = styled(Table)`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  th {
    background: #e8f5e9;
    font-weight: bold;
    color: #004d40;
  }

  td {
    color: #333;
  }
`;

const mockGemDetails = {
  title: "Gem 1",
  image: "https://via.placeholder.com/300",
  details: [
    { key: "Gem Type", value: "Tourmaline" },
    { key: "Color", value: "Green" },
    { key: "Shape", value: "Asscher" },
    { key: "Size", value: "10.8 x 10.8 x 8.0 mm" },
    { key: "Weight", value: "6.60 Carats" },
    { key: "Luster", value: "Excellent" },
    { key: "Clarity", value: "Eye Clean" },
    { key: "Treatment", value: "Natural" },
    { key: "Origin", value: "Afghanistan" },
  ],
};

const ProductDetails: React.FC = () => {
  const { gemId } = useParams<{ gemId: string }>();

  const { title, image, details } = mockGemDetails;

  return (
    <ExperienceWrapper>
      <ExperienceTitle level={2}>Gem Complete Details</ExperienceTitle>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={10}>
          <StyledCard bordered={false}>
            <img src={image} alt={title} />
          </StyledCard>
        </Col>
        <Col xs={24} sm={24} md={14}>
          <Space direction="horizontal">
            <Title level={3}>{title} Name</Title>
            <Tag style={{ fontWeight: "600" }} color="red">
              $40
            </Tag>
          </Space>
          <DetailsTable
            columns={[
              { title: "Item Description", dataIndex: "key", key: "key" },
              { title: "", dataIndex: "value", key: "value" },
            ]}
            dataSource={details}
            pagination={false}
            bordered
          />
        </Col>
      </Row>
    </ExperienceWrapper>
  );
};

export default ProductDetails;
