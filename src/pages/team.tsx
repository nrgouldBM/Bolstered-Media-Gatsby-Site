import React from "react";
import { Title } from "../components/atoms/Title";
import TeamMembers from "../components/organisms/TeamMembers";
import { Body } from "../components/atoms/Body";
import CallToAction from "../components/organisms/CallToAction";
import Layout from "../components/organisms/Layout";
import { SubTitle } from "../components/atoms/SubTitle";
import { COLORS } from "../theme";

export default function Team({ data }) {
  console.log({ data });
  return (
    <Layout>
      <div style={{ marginBottom: "5rem", maxWidth: "40rem" }}>
        <SubTitle style={{ color: COLORS.secondary }}>Team</SubTitle>
        <Title>Meet our team of experts on everything digital marketing.</Title>
        <Body>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
          voluptas sed illum optio ex reiciendis provident quas, tempore quia
          quibusdam ducimus natus distinctio atque inventore, ab magni quos
          repellendus hic quidem! Expedita sunt recusandae fuga quasi culpa odit
          sint nulla?
        </Body>
      </div>
      <TeamMembers />
      <CallToAction />
    </Layout>
  );
}
