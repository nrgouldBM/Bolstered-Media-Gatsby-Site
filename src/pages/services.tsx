import { Body } from "../components/atoms/Body";
import React from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import FlexColumn from "../components/atoms/FlexColumn";
import { Title } from "../components/atoms/Title";
import Layout from "../components/organisms/Layout";
import CallToAction from "../components/organisms/CallToAction";
import { SERVICES } from "../constants";
import styled from "styled-components";
import { breakpoint, COLORS } from "../theme";
import { SubTitle } from "../components/atoms/SubTitle";
import ButtonLink from "../components/atoms/ButtonLink";
import ServicesSection from "../components/molecules/ServicesSection";
import ServicesSplash from "../components/molecules/ServicesSplash";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: auto;
  margin-bottom: 5rem;
  flex-wrap: wrap-reverse;

  @media (max-width: ${breakpoint + "px"}) {
    padding: 0;
    width: 90%;
    margin: auto;
    margin-bottom: 4rem;
  }
`;

export default function Services() {
  const { width } = useWindowDimensions();
  return (
    <Layout disableMargin>
      <HeaderContainer>
        <FlexColumn justifyContent="flex-start" alignItems="space-around">
          <SubTitle style={{ color: COLORS.secondary, marginBottom: "-1rem" }}>
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
            quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nam distinctio quos cupiditate velit beatae sequi sit voluptas omnis
            quod blanditiis.
          </Body>
          <ButtonLink
            style={{
              width: width < breakpoint ? "100%" : "20rem",
              marginTop: "1rem",
            }}
            primary
            text="Speak with us"
            link="/contact"
          />
        </FlexColumn>
        <ServicesSplash />
      </HeaderContainer>
      <FlexColumn justifyContent="center" alignItems="space-around">
        {SERVICES.map(({ title, content, id, icon, image }, index) => (
          <ServicesSection
            key={index}
            title={title}
            content={content}
            id={id}
            icon={icon}
            image={image}
          />
        ))}
      </FlexColumn>
      <CallToAction />
    </Layout>
  );
}
