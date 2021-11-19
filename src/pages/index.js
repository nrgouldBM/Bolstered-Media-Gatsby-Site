import * as React from "react";
import "../index.css";
import Hero from "../components/organisms/Hero";
import Navbar from "../components/organisms/Navbar";
import BrandLogos from "../components/organisms/BrandLogos";
import CaseStudy from "../components/organisms/CaseStudy";
import Services from "../components/organisms/Services";

const IndexPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Hero />
        <BrandLogos />
        <CaseStudy />
        <Services />
      </main>
    </React.Fragment>
  );
};

export default IndexPage;
