import { Field } from "formik";
import React from "react";
import styled from "styled-components";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { breakpoint, COLORS, SHADOW } from "../../theme";

const StyledTextArea = styled(Field)`
  border-radius: 8px;
  border: 1px solid ${COLORS.border};
  padding: 0.75rem 1rem;
  box-sizing: border-box;
  box-shadow: ${SHADOW.normal};
  margin-bottom: 2rem;
  resize: vertical;
`;

const StyledLabel = styled.label`
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.3rem;
  color: ${COLORS.primaryText};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  style?: object;
}

export default function TextArea({ label, name, placeholder, style }: Props) {
  const { width } = useWindowDimensions();
  return (
    <Container
      style={{
        width: width < breakpoint ? width / 2 : `100%`,
        ...style,
      }}
    >
      <StyledLabel>{label}</StyledLabel>
      <StyledTextArea
        style={{
          width: width < breakpoint ? width / 2 : `calc(100% - 16px)`,
          ...style,
        }}
        name={name}
        type="textarea"
        placeholder={placeholder}
      />
    </Container>
  );
}
