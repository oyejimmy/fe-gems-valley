import { Card, Timeline, Typography } from "antd";
import styled from "styled-components";

const { Item } = Timeline;
const { Title } = Typography;

const ExperienceWrapper = styled.div`
  padding: 50px 0;
`;

const ExperienceTitle = styled(Title)`
  text-align: center;
  margin-bottom: 50px;
  color: #1a237e;
  font-weight: 600;
`;

const StyledTimelineItem = styled(Item)`
  padding: 20px 0;
  .ant-timeline-item-tail {
    left: 16px;
  }
`;

const CompanyLogo = styled.img`
  width: 50px;
  height: auto;
  margin-right: 10px;
  vertical-align: middle;
`;

const ExperienceCard = styled(Card)`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 10px;
  cursor: pointer;

  .ant-card-meta-title {
    font-size: 18px;
    color: #1a237e;
  }

  .ant-card-meta-description {
    color: #616161;
  }
`;

export {
  ExperienceWrapper,
  ExperienceTitle,
  StyledTimelineItem,
  CompanyLogo,
  ExperienceCard,
};
