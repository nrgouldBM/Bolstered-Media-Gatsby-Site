import React from "react";
import styled from "styled-components";
import UbumpLogo from "../../images/logos/ubump.png";
import PineapplesLogo from "../../images/logos/21pineapples.png";
import AshleyNicholeLogo from "../../images/logos/ashleynichole.png";
import CoastLandLogo from "../../images/logos/coastland.png";
import FTSLogo from "../../images/logos/fts.png";
import OldSouthLogo from "../../images/logos/old-south.png";
import { COLORS } from "../../theme";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

const Container = styled.section`
  margin: auto
  margin-top: 5rem;
  background-color: ${COLORS.gray};
  box-sizing: border-box;
`;

const LogosContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 3rem;
  flex-wrap: wrap;
`;

const Logo = styled.img`
  max-width: 10rem;

  @media (max-width: 750px) {
    margin-bottom: 2rem;
  }
`;

const LogosText = styled.h3`
  color: ${COLORS.secondaryText};
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  padding-top: 2rem;
`;

export default function BrandLogos() {
  const { width } = useWindowDimensions();
  return (
    <Container style={{ width: width }}>
      <LogosText>Trusted By These Brands</LogosText>
      <LogosContainer>
        <Logo src={UbumpLogo} />
        <Logo src={PineapplesLogo} />
        <Logo src={AshleyNicholeLogo} />
        <Logo src={FTSLogo} />
        <Logo src={OldSouthLogo} />
        <Logo src={CoastLandLogo} />
      </LogosContainer>
    </Container>
  );
}
