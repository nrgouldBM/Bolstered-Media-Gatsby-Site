import React from "react";
import { Title } from "../components/atoms/Title";
import TeamMembers from "../components/organisms/TeamMembers";
import { Body } from "../components/atoms/Body";
import CallToAction from "../components/organisms/CallToAction";
import Layout from "../components/organisms/Layout";
import { SubTitle } from "../components/atoms/SubTitle";
import { COLORS } from "../theme";
import TeamSVG from "../images/TeamSVG";
import FlexRow from "../components/atoms/FlexRow";

export default function Team({ data }) {
  console.log({ data });
  return (
    <Layout>
      <FlexRow
        alignItems="center"
        justifyContent="space-around"
        wrap="wrap-reverse"
      >
        <div style={{ marginBottom: "4rem", maxWidth: "40rem" }}>
          <SubTitle style={{ color: COLORS.secondary }}>Team</SubTitle>
          <Title>
            Meet our team of experts on everything digital marketing.
          </Title>
          <Body>
            The Bolstered Media team features a diverse collection of members
            that combined have over 15 years of experience in the digital
            marketing space. Together the team has helped many
            Direct-to-Consumer Brands grow their following, engagement and sales
            to new heights. Bolstered Media believes that a true team and
            collaborative approach generates the best results.
          </Body>
        </div>
        <TeamSVG />
      </FlexRow>
      <TeamMembers />
      <CallToAction />
    </Layout>
  );
}
