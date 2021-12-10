import React from "react";
import styled from "styled-components";

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(p) => p.justifyContent};
  align-items: ${(p) => p.alignItems};
  flex-wrap: ${(p) => p.wrap || "no-wrap"};
`;

export default function FlexColumn({
  children,
  alignItems,
  justifyContent,
  wrap,
}) {
  return (
    <StyledColumn
      alignItems={alignItems}
      justifyContent={justifyContent}
      wrap={wrap}
    >
      {children}
    </StyledColumn>
  );
}
