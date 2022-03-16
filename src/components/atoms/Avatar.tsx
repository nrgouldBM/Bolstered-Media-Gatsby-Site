// import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import AlexImage from "../../images/headshots/alex.jpg";
import PatrickImage from "../../images/headshots/patrick.jpg";
import JordanImage from "../../images/headshots/jordan.jpg";
import NicholasImage from "../../images/headshots/nicholas.jpg";
import ProfileImage from "../../images/profile.jpg";
import styled from "styled-components";
interface Props {
  img: string;
  background?: string;
  size?: number;
  style?: object;
  alt: string;
  name?: string;
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
  user-select: none;
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
  name,
}: Props) {
  let source = ProfileImage;

  switch (name) {
    case "Alex Hadding":
      source = AlexImage;
      break;
    case "Patrick Gall":
      source = PatrickImage;
      break;
    case "Jordan Hadding":
      source = JordanImage;
      break;
    case "Nicholas Gould":
      source = NicholasImage;
      break;
    default:
      break;
  }

  return (
    <Container style={style}>
      {/* <StaticImage
        src={"../../images/profile.jpg"}
        alt={alt}
        height={size}
        width={size}
        style={{ borderRadius: "50%" }}
        layout="constrained"
      /> */}
      <Image width={size} height={size} src={source} alt={alt} />
      {background && <Background background={background} />}
    </Container>
  );
}
