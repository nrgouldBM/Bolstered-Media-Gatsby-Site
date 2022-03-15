import React from "react";
import styled from "styled-components";
import { IoBicycle } from "react-icons/io5";
import {
  FaSms,
  FaPercentage,
  FaGlobe,
  FaEnvelope,
  FaVideo,
  FaBullhorn,
} from "react-icons/fa";

const IconContainer = styled.div<{ bgColor: string; size: number }>`
  width: ${(p) => p.size + "px"};
  height: ${(p) => p.size + "px"};
  background-color: ${(p) => p.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
`;

interface Props {
  color: string;
  name: string;
  size: number;
  bgColor: string;
}

export default function Icon({ color, name, size, bgColor }: Props) {
  let icon = <IoBicycle />;

  switch (name) {
    case "paid":
      icon = <FaBullhorn color={color} size={size} />;
      break;
    case "sms":
      icon = <FaSms color={color} size={size} />;
      break;
    case "email":
      icon = <FaEnvelope color={color} size={size} />;
      break;
    case "cro":
      icon = <FaPercentage color={color} size={size} />;
      break;
    case "web":
      icon = <FaGlobe color={color} size={size} />;
      break;
    case "content":
      icon = <FaVideo color={color} size={size} />;
      break;
    default:
      break;
  }

  return (
    <IconContainer size={size * 2.4} bgColor={bgColor}>
      {icon}
    </IconContainer>
  );
}
