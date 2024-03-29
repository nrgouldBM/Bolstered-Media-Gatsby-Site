import * as React from "react";
import { Helmet } from "react-helmet";
import "../index.css";
import Hero from "../components/organisms/Hero";
import BrandLogosMobile from "../components/organisms/BrandLogos";
import CaseStudy from "../components/organisms/CaseStudy";
import Experience from "../components/organisms/Experience";
import Layout from "../components/organisms/Layout";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import ServicesMobile from "../components/organisms/ServicesMobile";
import ServicesAnimated from "../components/organisms/ServicesAnimated";
import ContactFormHome from "../components/organisms/ContactFormHome";
import PreferredPartners from "../components/organisms/PreferredPartners";
import Values from "../components/organisms/Values";

const IndexPage = () => {
  const { width } = useWindowDimensions();

  return (
    <Layout fullWidth>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <meta charSet="utf-8" />
        <title>Bolstered Media | Full-Service Digital Agency</title>
        <link rel="canonical" href="https://bolsteredmedia.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fff533" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="To help you grow your online store, you need an experienced team.
            While driving over $100 million in online sales, our team has scaled
            dozens of direct to consumer programs for some of the most
            recognizable brands in the world. Utilizing proven advertising
            strategies along with tested and proven tactics, we know what it
            takes to generate profitable sales."
        ></meta>
      </Helmet>
      <Hero />
      <PreferredPartners />
      <BrandLogosMobile />
      <CaseStudy />
      {/* <Values /> */}
      {width < 1100 ? <ServicesMobile /> : <ServicesAnimated />}
      <Experience />
      <ContactFormHome />
    </Layout>
  );
};

export default IndexPage;
