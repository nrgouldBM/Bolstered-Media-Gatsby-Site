import { Title } from "../components/atoms/Title";
import React from "react";
import ContactSection from "../components/organisms/ContactSection";
import Layout from "../components/organisms/Layout";

export default function contact() {
  return (
    <Layout>
      <Title style={{ marginBottom: "2rem" }}>Contact Us</Title>
      <ContactSection />
    </Layout>
  );
}
