import { useWindowDimensions } from "../hooks/useWindowDimensions";
import React from "react";
import { breakpoint } from "../theme";
import { Title } from "../components/atoms/Title";
import NavbarDesktop from "../components/organisms/NavbarDesktop";
import NavbarMobile from "../components/organisms/NavbarMobile";
import TeamMembers from "../components/organisms/TeamMembers";
import { Main } from "../components/atoms/Main";

export default function Team() {
  const { width } = useWindowDimensions();
  return (
    <React.Fragment>
      {width > breakpoint ? <NavbarDesktop /> : <NavbarMobile />}
      <Main style={{ width: "80%", margin: "auto" }}>
        <Title>Team</Title>
        <TeamMembers />
      </Main>
    </React.Fragment>
  );
}
