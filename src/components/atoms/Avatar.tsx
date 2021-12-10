import React from "react";
import styled from "styled-components";
import { COLORS } from "../../theme";

const Container = styled.div`
  width: ${(p) => p.size || "10rem"};
  height: ${(p) => p.size || "10rem"};
  position: relative;
`;

const Img = styled.img`
  width: ${(p) => p.size || "10rem"};
  height: ${(p) => p.size || "10rem"};
  border-radius: 50%;
  object-fit: cover;
  display: block;
`;

const Background = styled.div`
  width: ${(p) => p.size || "10rem"};
  height: ${(p) => p.size || "10rem"};
  background-color: ${COLORS.primary};
  border-radius: 50%;
  z-index: -1;
  position: absolute;
  top: 5px;
  left: 5px;
`;

interface Props {
  img: React.FC;
  background?: boolean;
  size?: number | string;
  style?: object;
}

export default function Avatar({ img, size, background, style }: Props) {
  return (
    <Container size={size} style={style}>
      <Img src={img} size={size} />
      {background && <Background size={size} />}
    </Container>
  );
}
