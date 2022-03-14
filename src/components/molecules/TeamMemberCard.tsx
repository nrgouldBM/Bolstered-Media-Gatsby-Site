import React from "react";
import Avatar from "../atoms/Avatar";
import Card from "../atoms/Card";
import { Body } from "../atoms/Body";
import FlexColumn from "../atoms/FlexColumn";
import { SubTitle } from "../atoms/SubTitle";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { breakpoint, COLORS } from "../../theme";
import styled from "styled-components";
import { Link } from "gatsby";

const Email = styled(Link)`
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  color: ${COLORS.secondary};
  text-align: center;
`;

interface Props {
  description: string;
  name: string;
  title: string;
  email: string;
  image: string;
  style?: object;
}

export default function TeamMemberCard({
  description,
  name,
  title,
  email,
  image,
  style,
}: Props) {
  const { width } = useWindowDimensions();
  return (
    <Card
      hoverStyles
      secondary
      width={width < breakpoint ? "25rem" : "30rem"}
      height="fit-content"
      style={{
        boxShadow: "none",
        margin: width < breakpoint ? "1rem 0" : "2rem",
        ...style,
      }}
    >
      <FlexColumn
        wrap="wrap"
        alignItems="center"
        justifyContent="center"
        style={{ marginBottom: "2rem" }}
      >
        <Avatar img={image} alt={`${name}'s profile picture`} />
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
      <FlexColumn wrap="wrap" alignItems="center" justifyContent="center">
        <Body
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            wordWrap: "break-word",
            // maxHeight: "14rem",
            lineHeight: "2rem",
            marginBottom: "2rem",
          }}
        >
          {description}
        </Body>
        <Email to={`mailto:${email}`}>{email}</Email>
      </FlexColumn>
    </Card>
  );
}
