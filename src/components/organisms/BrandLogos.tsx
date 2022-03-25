import React from "react";
import styled from "styled-components";
import UbumpLogo from "../../images/logos/ubump.png";
import PineapplesLogo from "../../images/logos/21pineapples.png";
import AshleyNicholeLogo from "../../images/logos/ashleynichole.png";
import CoastLandLogo from "../../images/logos/coastland.png";
import FTSLogo from "../../images/logos/fts.png";
import OldSouthLogo from "../../images/logos/old-south.png";
import { breakpoint, COLORS } from "../../theme";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

const Container = styled.section`
  margin: auto;
  margin-top: 5rem;
  background-color: ${COLORS.gray};
  box-sizing: border-box;
  padding: 2.5rem 0;
  max-width: 100vw;
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
  max-width: 12rem;

  @media (max-width: ${breakpoint + "px"}) {
    margin: 0 2rem 3rem 2rem;
  }
`;

const LogosText = styled.h3`
  color: ${COLORS.secondaryText};
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 2rem;
  text-align: center;
  /* padding-top: 2rem; */
`;

const LOGOS = [
  { alt: "Old South Logo", image: OldSouthLogo },
  { alt: "uBump logo", image: UbumpLogo },
  { alt: "21Pineapples Apparel Logo ", image: PineapplesLogo },
  { alt: "Ashley Nichole Logo", image: AshleyNicholeLogo },
  { alt: "Failure To Stop Logo", image: FTSLogo },
  { alt: "Coatland Apparel Logo", image: CoastLandLogo },
];

export default function BrandLogos() {
  const { width } = useWindowDimensions();
  return (
    <Container style={{ width: width }}>
      <LogosText>Trusted By These Brands And More</LogosText>
      <LogosContainer>
        {LOGOS.map(({ alt, image }, index) => (
          <Logo key={index} alt={alt} src={image} />
        ))}
      </LogosContainer>
    </Container>
  );
}
