import ButtonLink from "../atoms/ButtonLink";
import { Main } from "../atoms/Main";
import { Title } from "../atoms/Title";
import React from "react";
import FlexColumn from "../atoms/FlexColumn";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { breakpoint } from "../../theme";

interface Props {
  text?: string;
}

export default function CallToAction({
  text = " Ready to bolster your brand?",
}: Props) {
  const { width } = useWindowDimensions();
  return (
    <Main style={{ width: "90%", margin: "4rem auto 8rem auto" }}>
      <FlexColumn alignItems="center" justifyContent="center">
        <Title style={{ fontSize: "3.5rem" }}>{text}</Title>
        <ButtonLink
          style={{ width: width < breakpoint ? "90%" : "20rem" }}
          primary
          text="GET STARTED"
          link="/contact"
        />
      </FlexColumn>
    </Main>
  );
}
