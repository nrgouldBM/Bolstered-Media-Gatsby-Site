import { Body } from "../components/atoms/Body";
import Card from "../components/atoms/Card";
import { SubTitle } from "../components/atoms/SubTitle";
import React from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import FlexColumn from "../components/atoms/FlexColumn";
import { Title } from "../components/atoms/Title";
import FlexRow from "../components/atoms/FlexRow";
import Layout from "../components/organisms/Layout";
import CallToAction from "../components/organisms/CallToAction";

export default function Services() {
  const { width } = useWindowDimensions();

  const services = new Array(6).fill(0);
  return (
    <Layout>
      <FlexColumn
        justifyContent="center"
        alignItems="space-around"
        style={{ width: "90%", margin: "auto" }}
      >
        <Title>Services</Title>
        <FlexRow justifyContent="space-around" alignItems="center" wrap="wrap">
          {services.map(() => (
            <Card
              hoverStyles={true}
              width={width / 3 + "px"}
              style={{ minWidth: "18rem", minHeight: "25rem" }}
            >
              <SubTitle>Paid Media Advertising</SubTitle>
              <Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                cupiditate tempora nulla dolorem libero deleniti quae
                perspiciatis sint quaerat hic.
              </Body>
            </Card>
          ))}
        </FlexRow>
      </FlexColumn>
      <CallToAction />
    </Layout>
  );
}
