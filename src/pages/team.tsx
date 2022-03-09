import React from "react";
import { Title } from "../components/atoms/Title";
import TeamMembers from "../components/organisms/TeamMembers";
import { Body } from "../components/atoms/Body";
import CallToAction from "../components/organisms/CallToAction";
import Layout from "../components/organisms/Layout";

export default function Team({ data }) {
  console.log({ data });
  return (
    <Layout>
      <div style={{ marginBottom: "2rem" }}>
        <Title>Team</Title>
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
