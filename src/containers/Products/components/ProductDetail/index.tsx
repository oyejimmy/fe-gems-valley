import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Table, Row, Col, Card, Tag, Space } from "antd";
import styled from "styled-components";
import { mockData } from "../../../../utils/helpers";

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

const ProductDetails: React.FC = () => {
  const { productName, gemId } = useParams<{ productName: any; gemId: any }>();
  console.log(productName, gemId);

  // Find the gemstone by name
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

  // Find the specific variation using its ID
  const selectedVariation = selectedProduct.variations.find(
    (variation): any => variation.id === parseInt(gemId)
  );
  console.log(selectedVariation);

  if (!selectedVariation) {
    return (
      <ExperienceWrapper>
        <ExperienceTitle level={2}>Variation Not Found</ExperienceTitle>
      </ExperienceWrapper>
    );
  }

  // Prepare table data
  const details = [
    { key: "Type", value: selectedVariation.type },
    { key: "Color", value: selectedVariation.color },
    { key: "Weight", value: selectedVariation.weight },
    { key: "Shape", value: selectedVariation.shape },
    { key: "Clarity", value: selectedVariation.clarity },
    {
      key: "Stock",
      value:
        selectedVariation.stock > 0 ? selectedVariation.stock : "Out of Stock",
    },
    {
      key: "Certifications",
      value: selectedVariation.certifications || "No Certification",
    },
    { key: "Description", value: selectedVariation.description },
  ];
  console.log(details);
  return (
    <ExperienceWrapper>
      <ExperienceTitle level={2}>
        {selectedVariation.name} Details
      </ExperienceTitle>
      <Row gutter={[16, 16]}>
        {/* Image Section */}
        <Col xs={24} sm={24} md={10}>
          <StyledCard bordered={false}>
            <img
              src={selectedVariation.images[0]}
              alt={selectedVariation.name}
            />
          </StyledCard>
        </Col>

        {/* Details Section */}
        <Col xs={24} sm={24} md={14}>
          <Space direction="horizontal">
            <Title level={3}>
              {selectedVariation.name} - {selectedVariation.color}
            </Title>
            <Tag style={{ fontWeight: "600" }} color="red">
              ${selectedVariation.price.toFixed(2)}
            </Tag>
          </Space>
          <DetailsTable
            columns={[
              { title: "Item Description", dataIndex: "key", key: "key" },
              { title: "Details", dataIndex: "value", key: "value" },
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
