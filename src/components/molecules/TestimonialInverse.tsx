import React from "react";
import { SubTitle } from "../atoms/SubTitle";
import FlexColumn from "../atoms/FlexColumn";
import FlexRow from "../atoms/FlexRow";
import { Body } from "../atoms/Body";
import Avatar from "../atoms/Avatar";
import { breakpoint, COLORS } from "../../theme";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

export default function TestimonialInverse({
  img,
  name,
  title,
  company,
  text,
}) {
  const { width } = useWindowDimensions();
  return (
    <FlexRow
      style={{ width: width > breakpoint ? "60%" : "70%", margin: "auto" }}
      alignItems="center"
      justifyContent="space-evenly"
      wrap="wrap-reverse"
    >
      <FlexColumn
        style={{ transform: "rotate(-5deg)" }}
        wrap="wrap"
        alignItems="flex-start"
        justifyContent="center"
      >
        <Body
          style={{
            textAlign: width > breakpoint ? "left" : "center",
          }}
        >
          {text}
        </Body>
      </FlexColumn>
      <FlexColumn
        wrap="wrap"
        alignItems="center"
        justifyContent="center"
        style={{ marginBottom: "2rem", transform: "rotate(-5deg)" }}
      >
        <Avatar background={COLORS.brown} img={img} />
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
    </FlexRow>
  );
}
