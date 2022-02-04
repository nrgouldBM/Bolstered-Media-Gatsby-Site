import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import HeroImage from "../../images/hero_image.png";
import Statistic from "../molecules/Statistic";
import { TextSpan } from "../atoms/TextSpan";

const StyledContainer = styled.section`
  width: 80%;
  margin: auto;
`;

const MainContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100vw;
  margin-top: 5rem;
  flex-wrap: wrap;
`;
const StyledHeroTitle = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  margin-bottom: 1rem;
  z-index: 10;
  position: relative;
`;

const StyledHeroSubTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  font-weight: 500;
  margin-bottom: 1rem;
  max-width: 30rem;
`;

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex: 1;

  @media (max-width: 750px) {
    align-items: center;
  }
`;

const StyledImageContainer = styled.div`
  flex: 1;
  @media (max-width: 750px) {
    display: none;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 3rem;
  flex-wrap: wrap;
`;

const StyledHeroImage = styled.img`
  max-width: 35rem;
`;

export default function Hero() {
  return (
    <StyledContainer>
      <MainContentContainer>
        <StyledTextContainer>
          <StyledHeroTitle>
            <TextSpan>Full Service</TextSpan> Digital <br /> Marketing Partner
          </StyledHeroTitle>
          <StyledHeroSubTitle>
            We scale e-commerce stores and influencer brands to profitability
            and beyond.
          </StyledHeroSubTitle>
          <Button secondary text="Request a proposal" />
        </StyledTextContainer>
        <StyledImageContainer>
          <StyledHeroImage src={HeroImage} />
        </StyledImageContainer>
      </MainContentContainer>
      <StatsContainer>
        <Statistic stat="$542,736" desc="Monthly Spend" />
        <Statistic stat="113,913,721" desc="Users Reached" />
        <Statistic stat="4.79%" desc="Avg. Conv. Rate" />
      </StatsContainer>
    </StyledContainer>
  );
}
