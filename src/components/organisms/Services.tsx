import React from "react";
import styled from "styled-components";
import BackgroundSvg from "../atoms/BackgroundSvg";
import { Title } from "../atoms/Title";
import ServiceCard from "../molecules/ServiceCard";
import DollarIcon from "../Icons/DollarIcon";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { breakpoint } from "../../theme";
import { SERVICES } from "../../constants";

const Container = styled.section`
  /* width: 80%; */
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

export default function Services() {
  const { width } = useWindowDimensions();

  return (
    <Container>
      <Title style={{ marginLeft: width > breakpoint ? "10rem" : 0 }}>
        Services
      </Title>
      <CardContainer>
        {SERVICES.map(({ title, content, id }, index) => {
          return (
            <ServiceCard
              index={index}
              icon={<DollarIcon />}
              title={title}
              text={content}
              link={`/services/${id}`}
            />
          );
        })}
      </CardContainer>
    </Container>
  );
}
