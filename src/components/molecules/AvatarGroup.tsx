import React from "react";
import styled from "styled-components";
import { COLORS } from "../../theme";
import AlexImage from "../../images/optimized/alex.jpg";
import PatrickImage from "../../images/optimized/patrick.jpg";

const Container = styled.div`
  display: inline-flex;
  flex-direction: row-reverse;

  &:not(:first-child) {
    margin-left: -60px;
  }
`;

const Avatar = styled.div`
  position: relative;
  border: 4px solid ${COLORS.white};
  border-radius: 50%;
  overflow: hidden;
  width: 150px;

  img {
    width: 100%;
    display: block;
  }

  &:not(:last-child) {
    margin-left: -40px;
  }
`;

export default function AvatarGroup() {
  return (
    <Container>
      <Avatar>
        <img src={PatrickImage} />
      </Avatar>
      <Avatar>
        <img src={AlexImage} />
      </Avatar>
    </Container>
  );
}
