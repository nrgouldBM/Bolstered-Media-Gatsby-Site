import React from "react";
import styled from "styled-components";

interface ColumnProps {
  justifyContent: string;
  wrap?: string;
  alignItems: string;
}
interface Props extends ColumnProps {
  children: any;
  style?: object;
}

export default function FlexColumn({
  children,
  alignItems,
  justifyContent,
  wrap,
  style,
}: Props) {
  const StyledColumn = styled.div<ColumnProps>`
    display: flex;
    flex-direction: column;
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    flex-wrap: ${wrap || "no-wrap"};
  `;

  return (
    <StyledColumn
      style={style}
      alignItems={alignItems}
      justifyContent={justifyContent}
      wrap={wrap}
    >
      {children}
    </StyledColumn>
  );
}
