import React from "react";
import { SubTitle } from "../atoms/SubTitle";
import FlexColumn from "../atoms/FlexColumn";
import FlexRow from "../atoms/FlexRow";
import { Body } from "../atoms/Body";
import Avatar from "../atoms/Avatar";
import { breakpoint, COLORS } from "../../theme";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import styled from "styled-components";

export const Quote = styled.p`
  font-size: 4rem;
  font-weight: bold;
  margin: 0;
`;

export default function TestimonialInverse({
  img,
  name,
  title,
  company,
  text,
}) {
  const { width } = useWindowDimensions();

  const isSmallDevice = width < breakpoint;
  return (
    <FlexRow
      style={{ width: isSmallDevice ? "80%" : "70%", margin: "auto" }}
      alignItems="center"
      justifyContent="space-evenly"
      wrap="wrap-reverse"
    >
      <FlexColumn
        style={{
          transform: isSmallDevice ? null : "rotate(-5deg)",
          position: "relative",
        }}
        wrap="wrap"
        alignItems="flex-start"
        justifyContent="center"
      >
        <Body
          style={{
            textAlign: "left",
            fontSize: "1.8rem",
            fontWeight: "700",
            lineHeight: "3rem",
          }}
        >
          <Quote style={{ position: "absolute", top: -40, left: 0 }}>"</Quote>
          {text}
          <Quote style={{ position: "absolute", bottom: -20, right: 20 }}>
            "
          </Quote>
        </Body>
      </FlexColumn>
      <FlexColumn
        wrap="wrap"
        alignItems="center"
        justifyContent="center"
        style={{
          marginBottom: "4rem",
          transform: isSmallDevice ? null : "rotate(-5deg)",
        }}
      >
        <Avatar alt="Testimonial" background={COLORS.brown} img={img} />
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
