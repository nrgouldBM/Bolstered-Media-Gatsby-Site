import * as React from "react";
import "../index.css";
import Hero from "../components/organisms/Hero";
import Navbar from "../components/organisms/Navbar";
import BrandLogos from "../components/organisms/BrandLogos";
import CaseStudy from "../components/organisms/CaseStudy";
import Services from "../components/organisms/Services";
import Experience from "../components/organisms/Experience";
import Testimonials from "../components/organisms/Testimonials";

const IndexPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Hero />
        <BrandLogos />
        <CaseStudy />
        <Services />
        <Experience />
        <Testimonials />
      </main>
    </React.Fragment>
  );
};

export default IndexPage;
