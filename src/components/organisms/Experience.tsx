import React from "react";
import styled from "styled-components";
import { Title } from "../atoms/Title";
import { TextSpan } from "../atoms/TextSpan";
import ArrowRight from "../Icons/ArrowRight";
import { breakpoint, COLORS } from "../../theme";
import AvatarGroup from "../molecules/AvatarGroup";
import ButtonLink from "../atoms/ButtonLink";

const Container = styled.div`
  margin: 10rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: ${breakpoint + "px"}) {
    width: 90%;
    margin: 8rem auto;
  }
`;

const Box1 = styled.div`
  position: absolute;
  width: 20rem;
  height: 5rem;
  background-color: ${COLORS.gray};
  top: 0;
  left: 0;
  z-index: -1;

  @media (max-width: ${breakpoint + "px"}) {
    display: none;
  }
`;
const Box2 = styled.div`
  position: absolute;
  width: 20rem;
  height: 5rem;
  background-color: ${COLORS.gray};
  bottom: 0;
  right: 0;
  z-index: -1;

  @media (max-width: ${breakpoint + "px"}) {
    display: none;
  }
`;

export default function Experience() {
  return (
    <Container>
      <AvatarGroup />
      <Title style={{ textAlign: "center" }} size="3rem">
        Over <TextSpan>15 years</TextSpan> <br />
        of digital marketing <br />
        experience
      </Title>
      <ButtonLink
        secondary
        text="Meet The Team"
        link="/team"
        icon={<ArrowRight />}
      />
      <Box1 />
      <Box2 />
    </Container>
  );
}
