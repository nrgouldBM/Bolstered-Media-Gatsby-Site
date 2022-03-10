import React from "react";
import styled from "styled-components";
import HeroImage from "../../images/hero_image.png";
import Statistic from "../molecules/Statistic";
import { TextSpan } from "../atoms/TextSpan";
import ButtonLink from "../atoms/ButtonLink";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { breakpoint } from "../../theme";

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
  font-size: 1.2rem;
  margin: 0;
  font-weight: 500;
  margin-bottom: 2rem;
  max-width: 30rem;
  line-height: 2rem;
`;

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex: 1;
  margin-bottom: 4rem;
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
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const StyledHeroImage = styled.img`
  max-width: 35rem;
`;

export default function Hero() {
  const { width } = useWindowDimensions();
  return (
    <StyledContainer>
      <MainContentContainer>
        <StyledTextContainer>
          <StyledHeroTitle>
            <TextSpan>Full Service</TextSpan> Digital <br /> Marketing Partner
          </StyledHeroTitle>
          <StyledHeroSubTitle>
            To help you grow your online store, you need an experienced team.
            While driving over $100 million in online sales, our team has scaled
            dozens of direct to consumer programs for some of the most
            recognizable brands in the world. Utilizing proven advertising
            strategies along with tested and proven tactics, we know what it
            takes to generate profitable sales.
          </StyledHeroSubTitle>
          <ButtonLink
            style={{ width: width > breakpoint ? "60%" : "100%" }}
            primary
            link="/contact"
            text="Speak with us!"
          />
        </StyledTextContainer>
        <StyledImageContainer>
          <StyledHeroImage src={HeroImage} />
        </StyledImageContainer>
      </MainContentContainer>
      <StatsContainer>
        <Statistic stat="$750,000" desc="Avg. Monthly Spend" />
        <Statistic stat="12,000,000" desc="Avg. Monthly Reach" />
        <Statistic stat="5.34%" desc="Avg. Conv. Rate" />
      </StatsContainer>
    </StyledContainer>
  );
}
