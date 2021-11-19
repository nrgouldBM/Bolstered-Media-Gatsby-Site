import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";

const StyledContainer = styled.section`
  width: 90%;
  margin: auto;
`;
const StyledHeroTitle = styled.h1`
  font-size: 2.5rem;
`;

const StyledHeroSubTitle = styled.h2`
  font-size: 1.5rem;
`;

export default function Hero() {
  return (
    <StyledContainer>
      <StyledHeroTitle>
        <span>Full Service Digital</span> <br /> Marketing Partner
      </StyledHeroTitle>
      <StyledHeroSubTitle>
        We scale e-commerce stores and influencer brands to profitability and
        beyond.
      </StyledHeroSubTitle>
      <Button>Request a Proposal</Button>
    </StyledContainer>
  );
}
