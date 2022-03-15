import { Title } from "../components/atoms/Title";
import React from "react";
import ContactSection from "../components/organisms/ContactSection";
import Layout from "../components/organisms/Layout";
import FlexRow from "../components/atoms/FlexRow";
import { COLORS } from "../theme";
import { SubTitle } from "../components/atoms/SubTitle";

export default function contact() {
  return (
    <Layout>
      <FlexRow
        alignItems="center"
        justifyContent="flex-start"
        wrap="wrap-reverse"
      >
        <div style={{ marginBottom: "4rem", maxWidth: "40rem" }}>
          <SubTitle style={{ color: COLORS.secondary, marginBottom: "-1rem" }}>
            Contact
          </SubTitle>
          <Title>
            Fill out this quick form and we'll get back to you within 48 hours.
          </Title>
        </div>
      </FlexRow>
      <ContactSection />
    </Layout>
  );
}
