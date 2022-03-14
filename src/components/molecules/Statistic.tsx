import React from "react";
import styled from "styled-components";
import { COLORS } from "../../theme";

const StatText = styled.h2`
  font-size: 2.5rem;
  color: ${COLORS.primaryText};
  margin-bottom: 0;
`;

const Description = styled.h4`
  font-size: 1rem;
  color: ${COLORS.primaryText};
  font-weight: 500;
  margin: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: 10rem;
  margin: 0.5rem 1rem;
`;

export default function Statistic({ stat, desc }) {
  return (
    <Container>
      <StatText>{stat}</StatText>
      <Description>{desc}</Description>
    </Container>
  );
}
