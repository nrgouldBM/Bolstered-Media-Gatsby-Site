import { Body } from "../atoms/Body";
import React from "react";
import { Title } from "../atoms/Title";
import styled from "styled-components";
import { SubTitle } from "../atoms/SubTitle";
import ResumeSVG from "../../images/ResumeSVG";
import FlexColumn from "../atoms/FlexColumn";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { breakpoint } from "../../theme";

const Container = styled.div<{ width: number | string }>`
  margin: 8rem auto;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) =>
    props.width < breakpoint ? "center" : "space-between"};
  width: ${(props) => (props.width < breakpoint ? "90%" : "70%")};
  align-items: center;
  flex-wrap: wrap-reverse;
`;

export default function WorkForUs() {
  const { width } = useWindowDimensions();
  return (
    <Container
      width={width}
      style={{ width: width < breakpoint ? "90%" : "80%" }}
    >
      <FlexColumn
        justifyContent="center"
        alignItems={"flex-start"}
        style={{ maxWidth: "30rem" }}
      >
        <Title>Want to work for us?</Title>
        <Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          mollitia perferendis? Rerum iste temporibus nostrum delectus ipsa
          ullam dolorum velit.
        </Body>
        <SubTitle>Send an email to grow@bolsteredmedia.com</SubTitle>
      </FlexColumn>
      <ResumeSVG />
    </Container>
  );
}
