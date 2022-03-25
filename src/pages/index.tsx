import * as React from "react";
import { Helmet } from "react-helmet";
import "../index.css";
import Hero from "../components/organisms/Hero";
import BrandLogos from "../components/organisms/BrandLogos";
import CaseStudy from "../components/organisms/CaseStudy";
import Services from "../components/organisms/Services";
import Experience from "../components/organisms/Experience";
import Testimonials from "../components/organisms/Testimonials";
import CallToAction from "../components/organisms/CallToAction";
import Layout from "../components/organisms/Layout";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { breakpoint } from "../theme";
import ServicesMobile from "../components/organisms/ServicesMobile";

const IndexPage = () => {
  const { width } = useWindowDimensions();
  return (
    <Layout disableMargin>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bolstered Media | Full-Service Digital Agency</title>
        <link rel="canonical" href="http://bolsteredmedia.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fff533" />
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
      <BrandLogos />
      <CaseStudy />
      {width < breakpoint ? <ServicesMobile /> : <Services />}
      <Experience />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
};

export default IndexPage;
