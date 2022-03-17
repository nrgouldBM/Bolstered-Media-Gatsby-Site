import React from "react";
import styled, { css } from "styled-components";
import { breakpoint, COLORS, SHADOW } from "../../theme";
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

const outlineStyles = css`
  color: ${COLORS.secondary};
  background: ${COLORS.white};
  border: 3px solid ${COLORS.secondary};
  box-shadow: none;

  &:hover {
    background: ${COLORS.secondary};
    color: ${COLORS.white};
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
  outline?: boolean;
  color?: string;
  bgColor?: string;
}

const ButtonText = styled.p<ButtonProps>`
  text-decoration: none;
  text-align: center;
  font-weight: 700;
  font-size: ${(p) => p.fontSize || "1rem"};
  padding: 0;
  margin: 0;
  color: ${(p) => p.color};
  ${(p) => p.hasIcon && iconStyles};

  @media (max-width: ${breakpoint + "px"}) {
    font-size: ${(p) => p.fontSize || "1.2rem"};
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledButton = styled.div<ButtonProps>`
  border: none;
  cursor: pointer;
  padding: 1.25rem 2.5rem;
  border-radius: 8px;
  box-shadow: ${SHADOW.normal};
  transition: all 500ms ease;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${(p) => p.bgColor};
  color: ${(p) => p.bgColor};
  ${(p) => p.primary && primaryStyles};
  ${(p) => p.secondary && secondaryStyles};
  ${(p) => p.outline && outlineStyles};
  text-decoration: none;

  @media (max-width: ${breakpoint + "px"}) {
    padding: 1.5rem 2.5rem;
  }
`;

interface Props {
  text: string;
  icon?: JSX.Element;
  primary?: boolean;
  secondary?: boolean;
  link: string;
  style?: object;
  fontSize?: string;
  outline?: boolean;
  color?: string;
  bgColor?: string;
}

export default function ButtonLink({
  text,
  icon,
  primary,
  secondary,
  link,
  style,
  fontSize,
  outline,
  color,
  bgColor,
}: Props) {
  return (
    <StyledLink style={style} to={link}>
      <StyledButton
        style={style}
        hasIcon={!!icon}
        primary={primary}
        secondary={secondary}
        outline={outline}
        bgColor={bgColor}
      >
        <ButtonText color={color} fontSize={fontSize} hasIcon={!!icon}>
          {text}
        </ButtonText>
        {icon}
      </StyledButton>
    </StyledLink>
  );
}
