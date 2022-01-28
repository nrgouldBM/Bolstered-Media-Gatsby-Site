import { useWindowDimensions } from "../hooks/useWindowDimensions";
import React from "react";
import { breakpoint } from "../theme";
import { Title } from "../components/atoms/Title";
import NavbarDesktop from "../components/organisms/NavbarDesktop";
import NavbarMobile from "../components/organisms/NavbarMobile";

export default function Team() {
  const { width } = useWindowDimensions();
  return (
    <React.Fragment>
      {width > breakpoint ? <NavbarDesktop /> : <NavbarMobile />}
      <Title>Team</Title>
    </React.Fragment>
  );
}
