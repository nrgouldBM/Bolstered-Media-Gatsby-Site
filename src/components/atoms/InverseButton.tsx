import React from "react";
import styled, { css } from "styled-components";
import { COLORS, SHADOW } from "../../theme";

const primaryStyles = css`
  color: ${COLORS.primary};
  &:hover {
    color: ${COLORS.primarySoft};
  }
`;

const secondaryStyles = css`
  color: ${COLORS.secondary};
  &:hover {
    color: ${COLORS.secondarySoft};
  }
`;

const iconStyles = css`
  margin-right: 5px;
  transition: all 200ms ease;
`;

const ButtonText = styled.p`
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  padding: 0;
  margin: 0;
  ${(p) => p.hasIcon && iconStyles};
`;

export const StyledButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  margin: 1rem 0;
  padding: 0;
  transition: all 200ms ease;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${(p) => p.primary && primaryStyles};
  ${(p) => p.secondary && secondaryStyles};
`;

export default function InverseButton({ text, icon, primary, secondary }) {
  const hasIcon = !!icon;
  return (
    <StyledButton hasIcon={hasIcon} primary={primary} secondary={secondary}>
      <ButtonText hasIcon={hasIcon}>{text}</ButtonText>
      {icon}
    </StyledButton>
  );
}
