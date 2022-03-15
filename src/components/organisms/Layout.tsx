import { Main } from "../atoms/Main";
import React from "react";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { breakpoint } from "../../theme";
import Footer from "./Footer";

interface Props {
  children: JSX.Element | JSX.Element[];
  disableMargin?: boolean;
}

export default function Layout({ children, disableMargin }: Props) {
  const { width } = useWindowDimensions();
  return (
    <>
      {width > breakpoint ? <NavbarDesktop /> : <NavbarMobile />}
      <Main
        style={{
          width: disableMargin ? "100%" : "90%",
        }}
      >
        {children}
      </Main>
      <Footer />
    </>
  );
}
