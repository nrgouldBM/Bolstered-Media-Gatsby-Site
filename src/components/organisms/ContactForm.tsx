import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { SHADOW, COLORS } from "../../theme";
import Button from "../atoms/Button";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 2rem;
`;

const StyledField = styled(Field)`
  border-radius: 8px;
  border: 1px solid ${COLORS.border};
  padding: 0.75rem 1rem;
  box-shadow: ${SHADOW.normal};
  margin-bottom: 1.5rem;
`;

const StyledLabel = styled.label`
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.3rem;
  color: ${COLORS.primaryText};
`;

export default function ContactForm() {
  const initialValues = {
    name: "",
    email: "",
    website: "",
    adSpend: "",
    description: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(),
  });
  return (
    <React.Fragment>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(data) => {
          console.log(data);
        }}
      >
        {({}) => (
          <StyledForm>
            <StyledLabel>Name</StyledLabel>
            <StyledField name="name" type="text" placeholder="Full Name" />
            <StyledLabel>Email</StyledLabel>
            <StyledField name="email" type="email" placeholder="Email" />
            <StyledLabel>Website</StyledLabel>
            <StyledField
              name="website"
              type="text"
              placeholder="Company Website"
            />
            <StyledLabel>Estimated Monthly Ad Spend</StyledLabel>
            <StyledField
              name="adSpend"
              as="select"
              placeholder="Estimated Monthly Ad Spend"
            >
              <option hidden disabled selected>
                – select an option –
              </option>
              <option>Less Than $2,000</option>
              <option>$5,000</option>
              <option>$10,000</option>
              <option>Greater Than $20,000</option>
            </StyledField>
            <StyledLabel>Tell us about your business</StyledLabel>
            <StyledField
              name="description"
              as="textarea"
              placeholder="Description"
            />
            <Button primary text="Submit" type="submit" />
          </StyledForm>
        )}
      </Formik>
    </React.Fragment>
  );
}
