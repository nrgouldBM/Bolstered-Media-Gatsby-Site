import React from "react";
import styled from "styled-components";
import TeamMemberCard from "../molecules/TeamMemberCard";
import { TEAM } from "../../constants";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { breakpoint } from "../../theme";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  /* width: 90%; */
  margin: auto;
`;

export default function TeamMembers() {
  const { width } = useWindowDimensions();
  return (
    <Container style={{ width: width < breakpoint ? "100%" : "90%" }}>
      {TEAM.map(({ name, title, description, email, image }, index) => {
        const hasMargin = index % 2 === 1;

        return (
          <TeamMemberCard
            name={name}
            title={title}
            description={description}
            email={email}
            image={image}
            style={{
              marginTop: hasMargin && width > breakpoint ? "8rem" : 0,
              marginBottom: width < breakpoint ? "2rem" : 0,
            }}
          />
        );
      })}
    </Container>
  );
}
