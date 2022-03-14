import { StyledNavLink } from "../atoms/nav/StyledNavLink";
import React from "react";
import styled from "styled-components";
import { COLORS } from "../../theme";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoLinkedin,
} from "react-icons/io5";
import FlexRow from "../atoms/FlexRow";

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
        <ColumnTitle>Our Services</ColumnTitle>
        <FooterLink to="/services">Paid Media</FooterLink>
        <FooterLink to="/services">Email & SMS</FooterLink>
        <FooterLink to="/services">Web Development</FooterLink>
        <FooterLink to="/services">Conversion Rate Optimization</FooterLink>
        <FooterLink to="/services">Creative Content & Strategy</FooterLink>
      </Column>
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
      <Column>
        <ColumnTitle>Follow Us</ColumnTitle>
        <FlexRow justifyContent="space-around" alignItems="center">
          <FooterLink
            style={{ marginRight: "1rem" }}
            to="https://www.instagram.com/bolsteredmedia/"
            target="blank"
          >
            <IoLogoInstagram size={42} />
          </FooterLink>
          <FooterLink
            style={{ marginRight: "1rem" }}
            to="https://www.facebook.com/BolsteredMedia"
            target="blank"
          >
            <IoLogoFacebook size={42} />
          </FooterLink>
          <FooterLink
            style={{ marginRight: "1rem" }}
            to="https://www.linkedin.com/company/bolstered-media"
            target="blank"
          >
            <IoLogoLinkedin size={42} />
          </FooterLink>
        </FlexRow>
      </Column>
    </FooterContainer>
  );
}
