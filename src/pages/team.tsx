import React from "react";
import "../index.css";
import { Helmet } from "react-helmet";
import { Title } from "../components/atoms/Title";
import TeamMembers from "../components/organisms/TeamMembers";
import { Body } from "../components/atoms/Body";
import CallToAction from "../components/organisms/CallToAction";
import Layout from "../components/organisms/Layout";
import { SubTitle } from "../components/atoms/SubTitle";
import { breakpoint, COLORS } from "../theme";
import TeamSVG from "../images/TeamSVG";
import FlexRow from "../components/atoms/FlexRow";
import WorkForUs from "../components/organisms/WorkForUs";
import styled from "styled-components";
import ButtonLink from "../components/atoms/ButtonLink";
import { useWindowDimensions } from "../hooks/useWindowDimensions";

const TextContainer = styled.div`
  flex: 1;
  margin-bottom: 4rem;
`;

const SvgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 90vw;
`;

export default function Team() {
  const { width } = useWindowDimensions();
  return (
    <Layout>
      <Helmet>
        <title>
          Team | Meet our team of experts on everything digital marketing |
          Bolstered Media
        </title>
      </Helmet>
      <FlexRow
        alignItems="center"
        justifyContent="space-between"
        wrap="wrap-reverse"
      >
        <TextContainer>
          <SubTitle style={{ color: COLORS.secondary, marginBottom: "-1rem" }}>
            Team
          </SubTitle>
          <Title
            style={{
              marginBottom: "1rem",
              fontSize: width < breakpoint ? "2.2rem" : "3rem",
              maxWidth: "35rem",
              lineHeight: width < breakpoint ? "2.8rem" : "3.5rem",
            }}
          >
            Meet our team of experts on everything digital marketing.
          </Title>
          <Body>
            The Bolstered Media team features a diverse collection of members
            that combined have over 20 years of experience in the digital
            marketing space. Together the team has helped many
            Direct-to-Consumer Brands grow their following, engagement and sales
            to new heights. Bolstered Media believes that a true team and
            collaborative approach generates the best results.
          </Body>
          <ButtonLink
            width={width < breakpoint ? "100%" : "25rem"}
            primary
            text="Speak with us"
            link="/contact"
          />
        </TextContainer>
        <SvgContainer>
          <TeamSVG />
        </SvgContainer>
      </FlexRow>
      <TeamMembers />
      <WorkForUs />
      <CallToAction />
    </Layout>
  );
}
