import React from "react";
import styled from "styled-components";
import { StyledNavLink } from "../atoms/nav/StyledNavLink";
import { StyledNavButton } from "../atoms/nav/StyledNavButton";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const StyledNavLinks = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  max-width: 35vw;
  flex: 1;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

const StyledLogo = styled(Link)`
  flex: 1;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

export default function NavbarDesktop() {
  return (
    <StyledContainer>
      <StyledLogo to="/">
        <StaticImage
          src="../../images/BM_logo.png"
          alt="Bolstered Media Logo"
          width={200}
          placeholder="blurred"
        />
      </StyledLogo>
      <StyledNavLinks>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/team/">Team</StyledNavLink>
        <StyledNavLink to="/services">Services</StyledNavLink>
        <StyledNavButton to="/contact">Contact</StyledNavButton>
      </StyledNavLinks>
    </StyledContainer>
  );
}
