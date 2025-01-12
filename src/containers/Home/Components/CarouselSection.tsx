import React, { useState } from "react";
import styled from "styled-components";
import { Carousel } from "antd";

// Styled components
const Content = styled.h3`
  margin: 0;
  height: 160px;
  color: #fff;
  line-height: 160px;
  text-align: center;
  background: #364d79;
`;

const CarouselSection = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <>
      <Carousel afterChange={onChange}>
        <div>
          <Content>1</Content>
        </div>
        <div>
          <Content>2</Content>
        </div>
        <div>
          <Content>3</Content>
        </div>
        <div>
          <Content>4</Content>
        </div>
      </Carousel>
    </>
  );
};

export default CarouselSection;
