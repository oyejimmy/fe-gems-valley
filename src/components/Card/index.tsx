import { Card } from "antd";
import styled from "styled-components";

export const ProfileCard = styled(Card)`
  width: 100%;
  max-width: 600px;

  @media (max-width: 768px) {
    max-width: 400px;
  }

  @media (max-width: 480px) {
    max-width: 300px;
  }
`;
