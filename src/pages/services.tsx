import { Body } from "../components/atoms/Body";
import Card from "../components/atoms/Card";
import { SubTitle } from "../components/atoms/SubTitle";
import React from "react";
import Footer from "../components/organisms/Footer";
import NavbarDesktop from "../components/organisms/NavbarDesktop";
import NavbarMobile from "../components/organisms/NavbarMobile";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { breakpoint } from "../theme";
import { Main } from "../components/atoms/Main";
import FlexColumn from "../components/atoms/FlexColumn";
import { Title } from "../components/atoms/Title";
import FlexRow from "../components/atoms/FlexRow";

export default function Services() {
  const { width } = useWindowDimensions();

  const services = new Array(6).fill(0);
  return (
    <Main style={{ maxWidth: width }}>
      {width > breakpoint ? <NavbarDesktop /> : <NavbarMobile />}

      <FlexColumn
        justifyContent="center"
        alignItems="space-around"
        style={{ width: "90%", margin: "auto" }}
      >
        <Title>Services</Title>
        <FlexRow justifyContent="space-between" alignItems="center" wrap="wrap">
          {services.map(() => (
            <Card width={width / 4 + "px"} style={{ minWidth: "18rem" }}>
              <SubTitle>Paid Media Advertising</SubTitle>
              <Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                cupiditate tempora nulla dolorem libero deleniti quae
                perspiciatis sint quaerat hic.
              </Body>
            </Card>
          ))}
        </FlexRow>
      </FlexColumn>
      <Footer />
    </Main>
  );
}
