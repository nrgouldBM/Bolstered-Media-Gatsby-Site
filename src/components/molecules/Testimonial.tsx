import React from "react";
import { SubTitle } from "../atoms/SubTitle";
import FlexColumn from "../atoms/FlexColumn";
import FlexRow from "../atoms/FlexRow";
import { Body } from "../atoms/Body";
import Avatar from "../atoms/Avatar";
import { breakpoint, COLORS } from "../../theme";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

export default function Testimonial({ img, name, title, company, text }) {
  const { width } = useWindowDimensions();
  return (
    <FlexRow
      style={{ width: width > breakpoint ? "70%" : "80%", margin: "auto" }}
      alignItems="center"
      justifyContent={width < breakpoint ? "center" : "space-evenly"}
      wrap="wrap"
    >
      <FlexColumn
        wrap="wrap"
        alignItems="center"
        justifyContent="center"
        style={{ marginBottom: "2rem", transform: "rotate(-5deg)" }}
      >
        <Avatar background={COLORS.brown} img={img} alt="testimonial" />
        <SubTitle
          style={{
            textAlign: "center",
            lineHeight: "2rem",
            margin: 0,
            marginTop: "1rem",
          }}
        >
          {name}
        </SubTitle>
        <SubTitle
          style={{ textAlign: "center", lineHeight: "2rem", margin: 0 }}
        >
          {`${title}, ${company}`}
        </SubTitle>
      </FlexColumn>
      <FlexColumn
        style={{ transform: "rotate(-5deg)" }}
        wrap="wrap"
        alignItems="flex-start"
        justifyContent="center"
      >
        <Body
          style={{
            textAlign: width > breakpoint ? "left" : "center",
            fontSize: "1.8rem",
            lineHeight: "3rem",
          }}
        >
          {text}
        </Body>
      </FlexColumn>
    </FlexRow>
  );
}
