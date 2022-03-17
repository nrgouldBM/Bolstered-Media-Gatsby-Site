import React from "react";
import styled from "styled-components";
import { Title } from "../atoms/Title";
import ServiceCard from "../molecules/ServiceCard";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { breakpoint } from "../../theme";
import { SERVICES } from "../../constants";
import Icon from "../molecules/Icon";
import MobileServiceCard from "../molecules/MobileServiceCard";

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

const MobileCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Services() {
  const { width } = useWindowDimensions();

  if (width < breakpoint) {
    return (
      <Container>
        <Title style={{ textAlign: "center" }}>How we get it done</Title>
        <MobileCardContainer>
          {SERVICES.map(({ title, content, id, icon }, index) => {
            return (
              <MobileServiceCard
                key={index}
                icon={
                  <Icon
                    name={icon.name}
                    color={icon.color}
                    bgColor={icon.bgColor}
                    size={42}
                  />
                }
                title={title}
                text={content}
                link={`/services#${id}`}
              />
            );
          })}
        </MobileCardContainer>
      </Container>
    );
  }

  return (
    <Container>
      <Title style={{ marginLeft: "10rem", fontSize: "3rem" }}>
        How we get it done
      </Title>
      <CardContainer>
        {SERVICES.map(({ title, content, id, icon }, index) => {
          return (
            <ServiceCard
              key={index}
              index={index}
              icon={
                <Icon
                  name={icon.name}
                  color={icon.color}
                  bgColor={icon.bgColor}
                  size={36}
                />
              }
              title={title}
              text={content}
              link={`/services#${id}`}
            />
          );
        })}
      </CardContainer>
    </Container>
  );
}
