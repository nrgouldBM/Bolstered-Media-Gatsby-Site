import * as React from "react";
import "../index.css";
import Hero from "../components/organisms/Hero";
import BrandLogos from "../components/organisms/BrandLogos";
import CaseStudy from "../components/organisms/CaseStudy";
import Services from "../components/organisms/Services";
import Experience from "../components/organisms/Experience";
import Testimonials from "../components/organisms/Testimonials";
import NavbarDesktop from "../components/organisms/NavbarDesktop";
import NavbarMobile from "../components/organisms/NavbarMobile";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { breakpoint } from "../theme";

const IndexPage = () => {
  const { width, height } = useWindowDimensions();
  console.log(width);
  return (
    <React.Fragment>
      {width > breakpoint ? <NavbarDesktop /> : <NavbarMobile />}
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
