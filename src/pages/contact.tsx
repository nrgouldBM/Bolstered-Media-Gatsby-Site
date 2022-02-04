import React from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import NavbarDesktop from "../components/organisms/NavbarDesktop";
import NavbarMobile from "../components/organisms/NavbarMobile";
import Footer from "../components/organisms/Footer";
import { breakpoint } from "../theme";
import { Main } from "../components/atoms/Main";
import ContactSection from "../components/organisms/ContactSection";

export default function contact() {
  const { width } = useWindowDimensions();
  return (
    <React.Fragment>
      {width > breakpoint ? <NavbarDesktop /> : <NavbarMobile />}
      <Main style={{ marginTop: "5rem" }}>
        <ContactSection />
      </Main>
      <Footer />
    </React.Fragment>
  );
}
