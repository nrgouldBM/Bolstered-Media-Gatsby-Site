import React from "react";
import { SubTitle } from "../atoms/SubTitle";
import FlexColumn from "../atoms/FlexColumn";
import FlexRow from "../atoms/FlexRow";
import { Body } from "../atoms/Body";
import Avatar from "../atoms/Avatar";

export default function Testimonial({ img, name, title, company, text }) {
  return (
    <FlexRow alignItems="center" justifyContent="space-evenly" wrap="wrap">
      <FlexColumn wrap="wrap" alignItems="center" justifyContent="center">
        <Avatar background="true" img={img} />
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
      <FlexColumn wrap="wrap" alignItems="flex-start" justifyContent="center">
        <Body>{text}</Body>
      </FlexColumn>
    </FlexRow>
  );
}
