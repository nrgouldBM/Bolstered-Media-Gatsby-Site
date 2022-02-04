import React from "react";
import styled from "styled-components";
import TeamMemberCard from "../molecules/TeamMemberCard";

const Container = styled.div`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  width: 80%;
  margin: auto;
  grid-wrap: wrap;
`;

export default function TeamMembers() {
  return (
    <Container>
      <TeamMemberCard
        name="Alex"
        title="CEO"
        description="testing 123 testing 123"
      />
      <TeamMemberCard
        name="Alex"
        title="CEO"
        description="testing 123 testing 123"
      />
      <TeamMemberCard
        name="Alex"
        title="CEO"
        description="testing 123 testing 123"
      />
    </Container>
  );
}
