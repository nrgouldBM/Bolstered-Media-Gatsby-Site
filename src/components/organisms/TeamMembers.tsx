import React from "react";
import styled from "styled-components";
import TeamMemberCard from "../molecules/TeamMemberCard";
import { TEAM } from "../../constants";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;
  margin: auto;
`;

export default function TeamMembers() {
  return (
    <Container>
      {TEAM.map(({ name, title, description, email, image }, index) => {
        const hasMargin = index % 2 === 1;

        return (
          <TeamMemberCard
            name={name}
            title={title}
            description={description}
            email={email}
            image={image}
            style={{ marginTop: hasMargin ? "8rem" : 0 }}
          />
        );
      })}
    </Container>
  );
}
