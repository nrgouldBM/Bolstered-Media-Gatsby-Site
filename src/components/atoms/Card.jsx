import React from "react";
import styled, { css } from "styled-components";
import { COLORS, SHADOW } from "../../constants";

const flexStyles = css`
  display: flex;
  flex-direction: ${(p) => p.flexDir};
  align-items: ${(p) => p.alignItems};
  justify-content: ${(p) => p.justifyContent};
`;

const Container = styled.div`
  /* overflow: hidden; */
  border-radius: 16px;
  width: ${(p) => p.width || "20rem"};
  height: ${(p) => p.height || "30rem"};
  background-color: #fff;
  box-shadow: ${SHADOW.normal};
  ${(p) => p.flexDir && flexStyles}
  padding: 2rem 1rem;
  margin: 3rem 0;
  transition: all 200ms ease;

  &:not(:first-child) {
    margin-left: -4rem;
  }

  &:not(:last-child):hover,
  &:not(:last-child):focus-within {
    transform: translateY(-1rem);
    & ~ div {
      transform: translateX(6rem);
    }
  }
`;

export default function Card({
  width,
  height,
  children,
  flexDir,
  alignItems,
  justifyContent,
}) {
  return (
    <Container
      flexDir={flexDir}
      width={width}
      height={height}
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      {children}
    </Container>
  );
}
