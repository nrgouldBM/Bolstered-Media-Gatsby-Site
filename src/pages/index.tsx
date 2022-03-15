import * as React from "react";
import "../index.css";
import Hero from "../components/organisms/Hero";
import BrandLogos from "../components/organisms/BrandLogos";
import CaseStudy from "../components/organisms/CaseStudy";
import Services from "../components/organisms/Services";
import Experience from "../components/organisms/Experience";
import Testimonials from "../components/organisms/Testimonials";
import CallToAction from "../components/organisms/CallToAction";
import Layout from "../components/organisms/Layout";

const IndexPage = () => {
  return (
    <Layout disableMargin>
      <Hero />
      <BrandLogos />
      <CaseStudy />
      <Services />
      <Experience />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
};

export default IndexPage;
