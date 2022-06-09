import "../index.css";
import { Title } from "../components/atoms/Title";
import { Helmet } from "react-helmet";
import React from "react";
import ContactSection from "../components/organisms/ContactSection";
import Layout from "../components/organisms/Layout";
import FlexRow from "../components/atoms/FlexRow";
import { COLORS } from "../theme";
import { SubTitle } from "../components/atoms/SubTitle";
import SocialLinks from "../components/molecules/SocialLinks";

export default function contact() {
  return (
    <Layout bottomMargin>
      <Helmet>
        <title>
          Contact Us | Full-Service Digital Marketing Agency | Bolstered Media
        </title>
      </Helmet>
      <FlexRow
        alignItems="center"
        justifyContent="flex-start"
        wrap="wrap-reverse"
      >
        <div
          style={{
            marginBottom: "4rem",
            maxWidth: "40rem",
          }}
        >
          <SubTitle style={{ color: COLORS.secondary, marginBottom: "-1rem" }}>
            Get In Touch
          </SubTitle>
          <Title>
            Fill out this quick form and we'll get back to you within 48 hours.
          </Title>
        </div>
      </FlexRow>
      <ContactSection />
      <SocialLinks primary />
    </Layout>
  );
}
