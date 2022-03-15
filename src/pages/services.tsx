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
import ButtonLink from "../components/atoms/ButtonLink";

const ServiceSection = styled.section`
  /* background-color: ${COLORS.primary2}; */
  margin-bottom: 5rem;
  padding: 1rem;
  border: 3px solid #dbdbdb;
  border-radius: 4px;
`;

const HeaderContainer = styled.div`
  margin-bottom: 5rem;
`;

export default function Services() {
  const { width } = useWindowDimensions();

  return (
    <Layout>
      <HeaderContainer>
        <SubTitle style={{ color: COLORS.secondary, marginBottom: "-2rem" }}>
          Services
        </SubTitle>
        <Title
          style={{
            marginBottom: "1rem",
            fontSize: "3rem",
            maxWidth: "35rem",
            lineHeight: "3.5rem",
          }}
        >
          A Digital Agency Focused On Growth.
        </Title>
        <Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          reprehenderit ex rerum saepe! Non quasi optio minus totam harum
          quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          distinctio quos cupiditate velit beatae sequi sit voluptas omnis quod
          blanditiis.
        </Body>
        <ButtonLink
          style={{ width: "20rem", marginTop: "1rem" }}
          primary
          text="Speak with us"
          link="/contact"
        />
      </HeaderContainer>
      <FlexColumn
        justifyContent="center"
        alignItems="space-around"
        style={{ width: "90%", margin: "auto" }}
      >
        {SERVICES.map(({ title, content, id }) => (
          <ServiceSection id={id}>
            <Card
              width={width / 2.5 + "px"}
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
