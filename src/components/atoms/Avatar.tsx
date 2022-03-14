import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
interface Props {
  img: string;
  background?: string;
  size?: number;
  style?: object;
  alt: string;
}

interface StyleProps {
  size?: string | number;
  background?: string;
}

const Container = styled.div<StyleProps>`
  width: ${(props) => props.size || "10rem"};
  height: ${(props) => props.size || "10rem"};
  position: relative;
`;

const Image = styled.img<StyleProps>`
  width: ${(props) => props.size || "10rem"};
  height: ${(props) => props.size || "10rem"};
  border-radius: 50%;
  object-fit: cover;
  display: block;
`;

const Background = styled.div<StyleProps>`
  width: ${(props) => props.size || "10rem"};
  height: ${(props) => props.size || "10rem"};
  background-color: ${(props) => props.background};
  border-radius: 50%;
  z-index: -1;
  position: absolute;
  top: 5px;
  left: 5px;
`;

export default function Avatar({
  img,
  size = 200,
  background,
  style,
  alt,
}: Props) {
  console.log(img);

  return (
    <Container style={style}>
      {/* <StaticImage
        src={img}
        alt={alt}
        height={size}
        width={size}
        style={{ borderRadius: "50%" }}
        layout="constrained"
      /> */}
      <Image
        width={size}
        height={size}
        src={"../../images/profile"}
        alt={alt}
      />
      {background && <Background background={background} />}
    </Container>
  );
}
