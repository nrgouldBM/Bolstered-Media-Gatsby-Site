import { Field } from "formik";
import React from "react";
import styled from "styled-components";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { breakpoint, COLORS, SHADOW } from "../../theme";

const StyledField = styled(Field)`
  border-radius: 8px;
  border: 1px solid ${COLORS.border};
  padding: 0.75rem 1rem;
  box-shadow: ${SHADOW.normal};
  font-family: "sora";
  font-weight: 500;
  -webkit-appearance: none;
  &::placeholder {
    font-family: "sora";
    font-weight: 500;
  }
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
  margin-bottom: 2rem;
  justify-content: space-between;
`;

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  children?: JSX.Element | JSX.Element[];
  handleChange: any;
}

export default function DropDownInput({
  label,
  name,
  placeholder,
  children,
  handleChange,
}: Props) {
  const { width } = useWindowDimensions();
  return (
    <Container style={width < breakpoint ? null : { marginRight: 16 }}>
      <StyledLabel>{label}</StyledLabel>
      <StyledField
        style={{ width: width < breakpoint ? width / 1.3 : "15rem" }}
        name={name}
        as="select"
        placeholder={placeholder}
        onChange={handleChange}
      >
        {children}
      </StyledField>
    </Container>
  );
}
