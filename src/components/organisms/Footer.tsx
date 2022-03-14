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
import { SERVICES } from "../../constants";

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
        {SERVICES.map(({ title, id }) => (
          <FooterLink to={`/services${id}`}>{title}</FooterLink>
        ))}
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
          <a
            style={{ marginRight: "1rem" }}
            href="https://www.instagram.com/bolsteredmedia/"
            target="_blank"
          >
            <IoLogoInstagram size={42} color={COLORS.white} />
          </a>
          <a
            style={{ marginRight: "1rem" }}
            href="https://www.facebook.com/BolsteredMedia"
            target="_blank"
          >
            <IoLogoFacebook size={42} color={COLORS.white} />
          </a>
          <a
            style={{ marginRight: "1rem" }}
            href="https://www.linkedin.com/company/bolstered-media"
            target="_blank"
          >
            <IoLogoLinkedin size={42} color={COLORS.white} />
          </a>
        </FlexRow>
      </Column>
    </FooterContainer>
  );
}
