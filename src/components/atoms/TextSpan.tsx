import styled from "styled-components";
import { COLORS } from "../../theme";
import hexRgb from "hex-rgb";

const { red, green, blue } = hexRgb(COLORS.primary);

export const TextSpan = styled.span`
  background-color: rgba(${red}, ${green}, ${blue}, 0.3);
`;
