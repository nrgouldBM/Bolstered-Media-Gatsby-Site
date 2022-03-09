import ButtonLink from "../atoms/ButtonLink";
import { Main } from "../atoms/Main";
import { Title } from "../atoms/Title";
import React from "react";
import FlexColumn from "../atoms/FlexColumn";

export default function CallToAction() {
  return (
    <Main style={{ width: "90%", margin: "5rem auto" }}>
      <FlexColumn alignItems="center" justifyContent="center">
        <Title style={{ fontSize: "3.5rem" }}>Ready to try us out?</Title>
        <ButtonLink primary text="GET STARTED" link="/contact" />
      </FlexColumn>
    </Main>
  );
}
