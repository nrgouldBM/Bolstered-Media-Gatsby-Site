import React from "react";
import Footer from "../components/organisms/Footer";
import NavbarDesktop from "../components/organisms/NavbarDesktop";
import NavbarMobile from "../components/organisms/NavbarMobile";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { breakpoint } from "../theme";

export default function services() {
  const { width } = useWindowDimensions();
  return (
    <div>
      {width > breakpoint ? <NavbarDesktop /> : <NavbarMobile />}
      <Footer />
    </div>
  );
}
