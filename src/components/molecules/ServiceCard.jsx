import React from "react";
import styled from "styled-components";
import { Body } from "../atoms/Body";
import Card from "../atoms/Card";
import InverseButton from "../atoms/InverseButton";
import { Title } from "../atoms/Title";
import ArrowRight from "../Icons/ArrowRight";

const Container = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
`;

const CardText = styled(Body)`
  margin-bottom: 2rem;
`;

export default function ServiceCard({ title, text, icon }) {
  return (
    <Card
      width="25rem"
      height="30rem"
      flexDir="row"
      alignItems="center"
      justifyContent="center"
    >
      <Container>
        <IconContainer>{icon}</IconContainer>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
        <InverseButton secondary text="Learn More" icon={<ArrowRight />} />
      </Container>
    </Card>
  );
}