import React from "react";
import styled, { css } from "styled-components";
import { COLORS, SHADOW } from "../../theme";
import { Link } from "gatsby";

const primaryStyles = css`
  color: ${COLORS.primaryText};
  background: ${COLORS.primary};
  text-decoration: none;
  transition: all 200ms ease;

  &:hover {
    transform: scale(1.01);
    background-color: ${COLORS.primary2};
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

interface ButtonProps {
  hasIcon?: boolean;
  primary?: boolean;
  secondary?: boolean;
  fontSize?: string;
}

const ButtonText = styled.p<ButtonProps>`
  text-decoration: none;
  text-align: center;
  font-weight: 700;
  font-size: ${(p) => p.fontSize || "1rem"};
  padding: 0;
  margin: 0;
  ${(p) => p.hasIcon && iconStyles};
`;

export const StyledButton = styled(Link)<ButtonProps>`
  border: none;
  cursor: pointer;
  padding: 1rem 2.5rem;
  border-radius: 8px;
  box-shadow: ${SHADOW.normal};
  transition: all 200ms ease;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  ${(p) => p.primary && primaryStyles};
  ${(p) => p.secondary && secondaryStyles};
  text-decoration: none;
`;

interface Props {
  text: string;
  icon?: JSX.Element;
  primary?: boolean;
  secondary?: boolean;
  link: string;
  style?: object;
  fontSize?: string;
}

export default function ButtonLink({
  text,
  icon,
  primary,
  secondary,
  link,
  style,
  fontSize,
}: Props) {
  const hasIcon = !!icon;
  return (
    <StyledButton
      style={style}
      hasIcon={hasIcon}
      to={link}
      primary={primary}
      secondary={secondary}
    >
      <ButtonText fontSize={fontSize} hasIcon={hasIcon}>
        {text}
      </ButtonText>
      {icon}
    </StyledButton>
  );
}
