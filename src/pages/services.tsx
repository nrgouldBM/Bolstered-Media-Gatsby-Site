import { Body } from "../components/atoms/Body";
import Card from "../components/atoms/Card";
import { SubTitle } from "../components/atoms/SubTitle";
import React from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import FlexColumn from "../components/atoms/FlexColumn";
import { Title } from "../components/atoms/Title";
import Layout from "../components/organisms/Layout";
import CallToAction from "../components/organisms/CallToAction";
import { SERVICES } from "../constants";
import styled from "styled-components";
import { COLORS } from "../theme";

const ServiceSection = styled.section`
  background-color: ${COLORS.primary2};
  margin-bottom: 5rem;
  padding: 3rem;
  border: 2px solid #dbdbdb;
  border-radius: 4px;
`;

export default function Services() {
  const { width } = useWindowDimensions();

  return (
    <Layout>
      <FlexColumn
        justifyContent="center"
        alignItems="space-around"
        style={{ width: "90%", margin: "auto" }}
      >
        <Title>Services</Title>
        {SERVICES.map(({ title, content, id }) => (
          <ServiceSection id={id}>
            <Card
              hoverStyles={true}
              width={width / 3 + "px"}
              style={{ minWidth: "18rem", minHeight: "25rem" }}
            >
              <SubTitle>{title}</SubTitle>
              <Body>{content}</Body>
            </Card>
          </ServiceSection>
        ))}
      </FlexColumn>
      <CallToAction />
    </Layout>
  );
}
