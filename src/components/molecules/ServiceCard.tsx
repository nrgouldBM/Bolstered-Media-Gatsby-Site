import React from "react";
import styled from "styled-components";
import { Body } from "../atoms/Body";
import Card from "../atoms/CardSlider";
import InverseButton from "../atoms/InverseButton";
import ArrowRight from "../Icons/ArrowRight";

const Container = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: "100%";
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  white-space: initial;
  line-height: 2rem;
`;

const CardText = styled(Body)`
  margin-bottom: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5; /* number of lines to show */
  -webkit-box-orient: vertical;
  line-clamp: 5;
`;

interface Props {
  title: string;
  text: string;
  icon?: any;
  link: string;
}

export default function ServiceCard({ title, text, icon, link }: Props) {
  return (
    <Card
      width="30rem"
      height="32rem"
      flexDir="row"
      alignItems="center"
      justifyContent="center"
    >
      <Container>
        <IconContainer>{icon}</IconContainer>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
        <InverseButton
          link={link}
          secondary
          text="Learn More"
          style={{ position: "absolute", bottom: 20 }}
          icon={<ArrowRight />}
        />
      </Container>
    </Card>
  );
}
