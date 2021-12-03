import styled from "styled-components";
import { COLORS } from "../../constants";
import hexRgb from 'hex-rgb';

console.log(hexRgb(COLORS.primary))
const { red, green, blue} = hexRgb(COLORS.primary)

export const TextSpan = styled.span`
    background-color: rgba(${red}, ${green}, ${blue}, 0.3); 
`