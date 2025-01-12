import { Card, Typography } from "antd";
import styled from "styled-components";

const { Title } = Typography;

// Expertise Section
const ExpertiseSection = styled.div`
  padding: 50px 0;
`;

const ExpertiseTitle = styled(Title)`
  text-align: center;
  margin-bottom: 50px;
  color: #1a237e;
  font-weight: 600;
`;

const ExpertiseCard = styled(Card)`
  height: 100%;
  transition: all 0.3s ease;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  &:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px);
  }

  .ant-card-meta-title {
    font-size: 18px;
    color: #1a237e;
    margin-bottom: 8px;
  }

  .ant-card-meta-description {
    color: #616161;
  }

  img {
    width: 40px;
    height: 40px;
    margin-bottom: 15px;
  }
`;

export { ExpertiseSection, ExpertiseTitle, ExpertiseCard };
