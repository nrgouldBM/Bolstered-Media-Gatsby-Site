import React from "react";
import Avatar from "../atoms/Avatar";
import Profile from "../../images/profile.jpg";
import Card from "../atoms/Card";
import { Body } from "../atoms/Body";
import FlexColumn from "../atoms/FlexColumn";
import { SubTitle } from "../atoms/SubTitle";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { breakpoint } from "../../theme";

interface Props {
  description: string;
  name: string;
  title: string;
}

export default function TeamMemberCard({ description, name, title }: Props) {
  const { width } = useWindowDimensions();
  return (
    <Card
      hoverStyles
      secondary
      width={width < breakpoint ? "25rem" : width * 0.9}
      height="35rem"
      style={{ boxShadow: "none" }}
    >
      <FlexColumn
        wrap="wrap"
        alignItems="center"
        justifyContent="center"
        style={{ marginBottom: "2rem" }}
      >
        <Avatar img={Profile} />
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
          style={{
            fontSize: 16,
            textAlign: "center",
            lineHeight: "2rem",
            margin: 0,
          }}
        >
          {title}
        </SubTitle>
      </FlexColumn>
      <FlexColumn wrap="wrap" alignItems="flex-start" justifyContent="center">
        <Body
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            wordWrap: "break-word",
            maxHeight: "14rem",
            lineHeight: "2rem",
          }}
        >
          {description}
        </Body>
      </FlexColumn>
    </Card>
  );
}
