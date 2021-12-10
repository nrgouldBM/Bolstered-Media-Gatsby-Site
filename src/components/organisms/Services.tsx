import React from "react";
import styled from "styled-components";
import BackgroundSvg from "../atoms/BackgroundSvg";
import { Title } from "../atoms/Title";
import ServiceCard from "../molecules/ServiceCard";
import DollarIcon from "../Icons/DollarIcon";

const Container = styled.section`
  /* width: 80%; */
  margin: auto;
  margin-top: 10rem;
  position: relative;
`;

const CardContainer = styled.div`
  padding-left: 10rem;
  align-items: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
`;

// const BGSvg = styled(BackgroundSvg)`
//   height: 40rem;
//   position: absolute;
//   top: 0;
//   left: 0;
//   overflow: hidden;
// `;

export default function Services() {
  return (
    <Container>
      <Title style={{ marginLeft: "10rem" }}>Services</Title>
      <CardContainer>
        <ServiceCard
          icon={<DollarIcon />}
          title="Paid Media Advertising"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sapiente reprehenderit placeat. Nisi iure consequuntur quaerat doloremque laboriosam velit placeat?"
        />
        <ServiceCard
          title="Paid Media Advertising"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sapiente reprehenderit placeat. Nisi iure consequuntur quaerat doloremque laboriosam velit placeat?"
        />
        <ServiceCard
          title="Paid Media Advertising"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sapiente reprehenderit placeat. Nisi iure consequuntur quaerat doloremque laboriosam velit placeat?"
        />
        <ServiceCard
          title="Paid Media Advertising"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sapiente reprehenderit placeat. Nisi iure consequuntur quaerat doloremque laboriosam velit placeat?"
        />
      </CardContainer>
      {/* <BGSvg /> */}
    </Container>
  );
}
