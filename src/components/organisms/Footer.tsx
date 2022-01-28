import { StyledNavLink } from "../atoms/nav/StyledNavLink";
import React from "react";
import styled from "styled-components";
import { COLORS } from "../../theme";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  background-color: ${COLORS.brown};
  padding: 2rem;
  flex-wrap: wrap;
`;

const FooterLink = styled(StyledNavLink)`
  color: ${COLORS.white};
  margin-bottom: 1rem;
  &:hover {
    color: ${COLORS.primary};
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;

const ColumnTitle = styled.h3`
  font-size: 1.75rem;
  color: ${COLORS.white};
  font-weight: bold;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Column>
        <ColumnTitle>Helpful Links</ColumnTitle>
        <FooterLink to="/">Home</FooterLink>
        <FooterLink to="/team/">Team</FooterLink>
        <FooterLink to="/services">Services</FooterLink>
      </Column>
      <Column>
        <ColumnTitle>Action</ColumnTitle>
        <FooterLink to="/">Contact Us</FooterLink>
        <FooterLink to="/team/">Jobs</FooterLink>
      </Column>
    </FooterContainer>
  );
}
