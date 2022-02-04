import ContactForm from "./ContactForm";
import React from "react";
import styled from "styled-components";
import { breakpoint, COLORS } from "../../theme";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { Title } from "../atoms/Title";
import Profile from "../../images/profile.jpg";
import TestimonialCol from "../molecules/TestimonialCol";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  width: 80%;
  margin: auto;
`;

const ContactContainer = styled.div`
  display: flex:
  flex-direction: column;
`;

const TestimonialContainer = styled.div`
  background-color: ${COLORS.gray};
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1;
  padding: 2rem 4rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  min-width: 25rem;
`;

export default function ContactSection() {
  const { width } = useWindowDimensions();
  return (
    <Container
      style={
        width < breakpoint
          ? { alignItems: "center", justifyContent: "center" }
          : null
      }
    >
      <ContactContainer
        style={width > breakpoint ? { marginRight: "5rem" } : null}
      >
        <Title>Contact Us</Title>
        <ContactForm style={{ marginBottom: "5rem" }} />
      </ContactContainer>
      <TestimonialContainer>
        <TestimonialCol
          img={Profile}
          name="Karen Jones"
          title="CEO"
          company="company"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos cum voluptatum minus aliquam expedita pariatur animi assumenda, ea perferendis saepe?"
        />
      </TestimonialContainer>
    </Container>
  );
}
