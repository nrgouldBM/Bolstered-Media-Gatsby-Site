import React from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import NavbarDesktop from "../components/organisms/NavbarDesktop";
import NavbarMobile from "../components/organisms/NavbarMobile";
import Footer from "../components/organisms/Footer";
import { breakpoint } from "../theme";
import ContactForm from "../components/organisms/ContactForm";
import { Main } from "../components/atoms/Main";

export default function contact() {
  const { width } = useWindowDimensions();
  return (
    <React.Fragment>
      {width > breakpoint ? <NavbarDesktop /> : <NavbarMobile />}
      <Main>
        <ContactForm />
      </Main>
      <Footer />
    </React.Fragment>
  );
}
