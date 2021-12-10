import React from "react";
import styled, { css } from "styled-components";
import { COLORS, SHADOW } from "../../theme";
import { Link } from "gatsby";

const primaryStyles = css`
  color: ${COLORS.primaryText};
  background: ${COLORS.primary};

  &:hover {
    background: ${COLORS.primarySoft};
    transform: scale(1.01);
  }
`;

const secondaryStyles = css`
  color: ${COLORS.white};
  background: ${COLORS.secondary};

  &:hover {
    background: ${COLORS.secondarySoft};
    transform: scale(1.01);
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

export const StyledButton = styled(Link)`
  border: none;
  cursor: pointer;
  padding: 1rem 2.5rem;
  border-radius: 8px;
  box-shadow: ${SHADOW.normal};
  transition: all 200ms ease;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around ${(p) => p.primary && primaryStyles};
  ${(p) => p.secondary && secondaryStyles};
`;

export default function ButtonLink({ text, icon, primary, secondary, link }) {
  const hasIcon = !!icon;
  return (
    <StyledButton
      hasIcon={hasIcon}
      to={link}
      primary={primary}
      secondary={secondary}
    >
      <ButtonText hasIcon={hasIcon}>{text}</ButtonText>
      {icon}
    </StyledButton>
  );
}
