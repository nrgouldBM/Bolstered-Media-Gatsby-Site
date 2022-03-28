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
  flex-direction: column;
  align-items: space-around;
  justify-content: center;
  background-color: ${COLORS.brown};
  padding: 2rem;
  flex-wrap: wrap;
`;

const FooterRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const FooterLink = styled(StyledNavLink)`
  color: ${COLORS.white};
  margin-bottom: 1rem;
  &:hover {
    color: ${COLORS.primary3};
  }
`;

const ExternalLink = styled.a`
  margin-right: 1rem;
  text-decoration: none;
  color: ${COLORS.white};

  &:hover {
    color: ${COLORS.primary};
  }
`;

const WatermarkContainer = styled.div`
  margin-top: 3rem;
  /* width: 100vw; */
  text-align: center;
`;

const WatermarkText = styled.p`
  color: white;
  font-size: 0.75rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  flex: 1 0 10rem;
`;

const ColumnTitle = styled.h3`
  font-size: 1.75rem;
  color: ${COLORS.white};
  font-weight: bold;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterRow>
        <Column>
          <ColumnTitle>Our Services</ColumnTitle>
          {SERVICES.map(({ title, id }, index) => (
            <FooterLink key={index} to={`/services#${id}`}>
              {title}
            </FooterLink>
          ))}
        </Column>
        <Column>
          <ColumnTitle>Helpful Links</ColumnTitle>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/team/">Team</FooterLink>
          <FooterLink to="/services/">Services</FooterLink>
        </Column>
        <Column>
          <ColumnTitle>Action</ColumnTitle>
          <FooterLink to="/contact">Contact Us</FooterLink>
          <FooterLink to="/team#jobs">Jobs</FooterLink>
        </Column>
        <Column>
          <ColumnTitle>Follow Us</ColumnTitle>
          <FlexRow justifyContent="space-around" alignItems="center">
            <ExternalLink
              href="https://www.instagram.com/bolsteredmedia/"
              target="_blank"
            >
              <IoLogoInstagram size={42} color={COLORS.white} />
            </ExternalLink>
            <ExternalLink
              href="https://www.facebook.com/BolsteredMedia"
              target="_blank"
            >
              <IoLogoFacebook size={42} color={COLORS.white} />
            </ExternalLink>
            <ExternalLink
              href="https://www.linkedin.com/company/bolstered-media"
              target="_blank"
            >
              <IoLogoLinkedin size={42} color={COLORS.white} />
            </ExternalLink>
          </FlexRow>
        </Column>
      </FooterRow>
      <WatermarkContainer>
        <WatermarkText>
          © {new Date().getFullYear()} Bolstered Media, All Rights Reserved
        </WatermarkText>
        <WatermarkText>www.bolsteredmedia.com</WatermarkText>
      </WatermarkContainer>
    </FooterContainer>
  );
}
