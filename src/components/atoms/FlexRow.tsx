import React from "react";
import styled from "styled-components";

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(p) => p.justifyContent};
  align-items: ${(p) => p.alignItems};
  flex-wrap: ${(p) => p.wrap || "no-wrap"};
`;

export default function FlexRow({
  children,
  alignItems,
  justifyContent,
  wrap,
}) {
  return (
    <StyledRow
      alignItems={alignItems}
      justifyContent={justifyContent}
      wrap={wrap}
    >
      {children}
    </StyledRow>
  );
}
