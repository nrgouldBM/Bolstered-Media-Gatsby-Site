import React from "react";
import styled from "styled-components";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { breakpoint } from "../../theme";
import TeamMemberCard from "../molecules/TeamMemberCard";

const Container = styled.div`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
  width: 90%;
  margin: auto;
  grid-wrap: wrap;
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
              alignItems: "space-around",
              justifyContent: "center",
            }
          : null
      }
    >
      <TeamMemberCard
        name="Alex"
        title="CEO"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aut quas, voluptatem nihil ex eaque ipsa iure esse praesentium nemo vero est aliquam pariatur. Distinctio, quis assumenda! Esse, repellat corporis?"
      />
      <TeamMemberCard
        name="Alex"
        title="CEO"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aut quas, voluptatem nihil ex eaque ipsa iure esse praesentium nemo vero est aliquam pariatur. Distinctio, quis assumenda! Esse, repellat corporis?"
      />
      <TeamMemberCard
        name="Alex"
        title="CEO"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aut quas, voluptatem nihil ex eaque ipsa iure esse praesentium nemo vero est aliquam pariatur. Distinctio, quis assumenda! Esse, repellat corporis?"
      />
    </Container>
  );
}
