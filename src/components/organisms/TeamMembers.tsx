import React from "react";
import styled from "styled-components";
import TeamMemberCard from "../molecules/TeamMemberCard";
import { TEAM } from "../../constants";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { breakpoint } from "../../theme";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(250px, 1fr));
  grid-gap: 2rem;
  margin: auto;
  /* align-items: end; */
  margin-top: 5rem;
`;

export default function TeamMembers() {
  const { width } = useWindowDimensions();
  return (
    <Container style={{ width: width < breakpoint ? "100%" : "90%" }}>
      {TEAM.map(({ name, title, description, email }, index) => {
        const hasMargin = index % 2 === 1;

        return (
          <TeamMemberCard
            key={index}
            name={name}
            title={title}
            description={description}
            email={email}
            style={{
              marginTop: hasMargin && width > breakpoint ? "10rem" : 0,
              marginBottom: width < breakpoint ? "2rem" : 0,
            }}
          />
        );
      })}
    </Container>
  );
}
