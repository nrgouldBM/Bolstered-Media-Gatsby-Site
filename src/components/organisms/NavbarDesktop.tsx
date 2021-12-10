import React from "react";
import styled from "styled-components";
import { StyledNavLink } from "../atoms/nav/StyledNavLink";
import { StyledNavButton } from "../atoms/nav/StyledNavButton";

const StyledNavLinks = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex: 1;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

const StyledLogo = styled.div`
  flex: 1;
`;

export default function NavbarDesktop() {
  return (
    <StyledContainer>
      <StyledLogo>
        <h2>Bolstered Media</h2>
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
