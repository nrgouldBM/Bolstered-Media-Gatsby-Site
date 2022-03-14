import { Body } from "../components/atoms/Body";
import Card from "../components/atoms/Card";
import React from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import FlexColumn from "../components/atoms/FlexColumn";
import { Title } from "../components/atoms/Title";
import Layout from "../components/organisms/Layout";
import CallToAction from "../components/organisms/CallToAction";
import { SERVICES } from "../constants";
import styled from "styled-components";
import { COLORS } from "../theme";
import { SubTitle } from "../components/atoms/SubTitle";

const ServiceSection = styled.section`
  /* background-color: ${COLORS.primary2}; */
  margin-bottom: 5rem;
  padding: 3rem;
  border: 3px solid #dbdbdb;
  border-radius: 4px;
`;

export default function Services() {
  const { width } = useWindowDimensions();

  return (
    <Layout>
      <SubTitle style={{ color: COLORS.secondary }}>Services</SubTitle>
      <Title style={{ marginBottom: "5rem" }}>How we help you grow.</Title>
      <FlexColumn
        justifyContent="center"
        alignItems="space-around"
        style={{ width: "90%", margin: "auto" }}
      >
        {SERVICES.map(({ title, content, id }) => (
          <ServiceSection id={id}>
            <Card
              width={width / 3 + "px"}
              height="fit-content"
              style={{ minWidth: "18rem", minHeight: "25rem" }}
            >
              <Title style={{ fontSize: "3rem" }}>{title}</Title>
              <Body>{content}</Body>
            </Card>
          </ServiceSection>
        ))}
      </FlexColumn>
      <CallToAction />
    </Layout>
  );
}
