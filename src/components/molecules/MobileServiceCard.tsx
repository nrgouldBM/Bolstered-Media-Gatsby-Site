import React from "react";
import styled from "styled-components";
import { Body } from "../atoms/Body";
import Card from "../atoms/Card";
import InverseButton from "../atoms/InverseButton";
import ArrowRight from "../Icons/ArrowRight";

const Container = styled.div`
  padding: 3rem 2rem;
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

export default function MobileServiceCard({ title, text, icon, link }: Props) {
  return (
    <Card
      width="90%"
      height="fit-content"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      style={{ minWidth: "25rem", margin: "1rem 0" }}
    >
      <Container>
        <IconContainer>{icon}</IconContainer>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
        <InverseButton
          link={link}
          secondary
          text="Learn More"
          style={{ position: "absolute", bottom: 5 }}
          icon={<ArrowRight />}
        />
      </Container>
    </Card>
  );
}
