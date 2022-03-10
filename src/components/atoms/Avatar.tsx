import React from "react";
import styled from "styled-components";
import { COLORS } from "../../theme";
interface Props {
  img: any;
  background?: string;
  size?: number | string;
  style?: object;
}

export default function Avatar({ img, size, background, style }: Props) {
  const Container = styled.div`
    width: ${size || "10rem"};
    height: ${size || "10rem"};
    position: relative;
  `;

  const Img = styled.img`
    width: ${size || "10rem"};
    height: ${size || "10rem"};
    border-radius: 50%;
    object-fit: cover;
    display: block;
  `;

  const Background = styled.div`
    width: ${size || "10rem"};
    height: ${size || "10rem"};
    background-color: ${background};
    border-radius: 50%;
    z-index: -1;
    position: absolute;
    top: 5px;
    left: 5px;
  `;

  return (
    <Container style={style}>
      <Img src={img} />
      {background && <Background />}
    </Container>
  );
}
