import React from "react";
import styled from "styled-components";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { breakpoint } from "../../theme";
import TeamMemberCard from "../molecules/TeamMemberCard";
import { TEAM } from "../../constants";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 90%;
  margin: auto;
`;

export default function TeamMembers() {
  const { width } = useWindowDimensions();
  return (
    <Container
      style={
        width < breakpoint
          ? {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }
          : null
      }
    >
      {TEAM.map(({ name, title, description, email, image }) => (
        <TeamMemberCard
          name={name}
          title={title}
          description={description}
          email={email}
          image={image}
        />
      ))}
    </Container>
  );
}
