import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { breakpoint } from "../../theme";
import Button from "../atoms/Button";
import TextInput from "../molecules/TextInput";
import DropDownInput from "../molecules/DropDownInput";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import TextArea from "../molecules/TextArea";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

interface Props {
  style?: object;
}

export default function ContactForm({ style }: Props) {
  const { width } = useWindowDimensions();
  const initialValues = {
    name: "",
    email: "",
    website: "",
    adSpend: "",
    description: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required").min(4).max(20),
    email: Yup.string().email().required("Required"),
    website: Yup.string().required("Required"),
    adSpend: Yup.string(),
    description: Yup.string(),
  });
  return (
    <React.Fragment>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting, setErrors }) => {
          try {
            console.log("submitting");
            console.log(data);
          } catch (error) {
            setErrors(error);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({
          errors,
          touched,
          values,
          handleChange,
          handleSubmit,
          handleReset,
          setFieldValue,
        }) => (
          <StyledForm style={style}>
            <FormRow>
              <TextInput
                label="Name"
                placeholder="Full Name"
                name="name"
                error={errors.name && touched.name ? errors.name : null}
                value={values.name}
                handleChange={handleChange}
                setFieldValue={setFieldValue}
              />
              <TextInput
                label="Email"
                placeholder="you@website.com"
                name="email"
                error={errors.email && touched.email ? errors.email : null}
                value={values.email}
                handleChange={handleChange}
              />
            </FormRow>
            <FormRow>
              <TextInput
                label="Website"
                name="website"
                placeholder="www.yourcompany.com"
                error={
                  errors.website && touched.website ? errors.website : null
                }
                value={values.website}
                handleChange={handleChange}
              />

              <DropDownInput name="adSpend" label="Monthly Ad Spend">
                <option hidden disabled selected>
                  – select an option –
                </option>
                <option>Less Than $2,000</option>
                <option>$2,000 - $5,000</option>
                <option>$5,000 - $10,000</option>
                <option>Greater Than $20,000</option>
              </DropDownInput>
            </FormRow>
            <TextArea
              label="Tell us about your business"
              name="description"
              placeholder="description"
            />
            <Button
              secondary
              text="Submit"
              type="submit"
              onClick={() => console.log("test")}
              style={{ width: width < breakpoint ? width / 2 : "15rem" }}
            />
          </StyledForm>
        )}
      </Formik>
    </React.Fragment>
  );
}
