import ContactForm from "./ContactForm";
import React from "react";
import styled from "styled-components";
import { breakpoint, COLORS } from "../../theme";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import Profile from "../../images/optimized/profile.jpg";
import TestimonialCol from "../molecules/TestimonialCol";
import Card from "../atoms/Card";
import GoogleMapReact from "google-map-react";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap-reverse;
  width: 90%;
  margin: auto;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RightContainer = styled.div`
  background-color: ${COLORS.gray};
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1;
  padding: 2rem 4rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  min-width: 25rem;
  max-width: 40rem;
`;

export default function ContactSection() {
  const { width } = useWindowDimensions();
  return (
    <Container
      style={
        width < breakpoint
          ? {
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "5rem",
            }
          : { marginBottom: "5rem" }
      }
    >
      <ContactContainer
      // style={width > breakpoint ? { marginRight: "5rem" } : null}
      >
        <Card
          width="100%"
          height="fit-content"
          justifyContent="space-between"
          alignItems="center"
        >
          <ContactForm style={{ marginBottom: "5rem" }} />
        </Card>
      </ContactContainer>
    </Container>
  );
}
