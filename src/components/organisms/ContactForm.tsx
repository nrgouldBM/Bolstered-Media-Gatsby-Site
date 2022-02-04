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

const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  flex: 1 1;
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
    name: Yup.string().required("Please enter name").min(4).max(20),
    email: Yup.string().email().required("Please enter email"),
    website: Yup.string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter valid url!"
      )
      .required("Please enter website"),
    adSpend: Yup.string(),
    description: Yup.string(),
  });
  return (
    <React.Fragment>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          try {
            console.log("submitting");
            fetch("/?no-cache=1", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: encode({ "form-name": "contact", ...values }),
            });
            console.log(values);
            console.log("success");
          } catch (error) {
            setErrors(error);
            console.log("Error");
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
          isSubmitting,
          isValid,
          dirty,
          handleReset,
        }) => (
          <StyledForm
            name="contact"
            style={style}
            onReset={handleReset}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <FormRow>
              <TextInput
                label="Name"
                placeholder="Full Name"
                name="name"
                error={errors.name && touched.name ? errors.name : null}
                value={values.name}
                handleChange={handleChange}
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

              <DropDownInput
                handleChange={handleChange}
                name="adSpend"
                label="Monthly Ad Spend"
              >
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
              handleChange={handleChange}
              value={values.description}
            />
            <Button
              secondary
              disabled={isSubmitting || !isValid || !dirty}
              text="Submit"
              type="submit"
              style={{ width: width < breakpoint ? width / 1.3 : "15rem" }}
            />
          </StyledForm>
        )}
      </Formik>
    </React.Fragment>
  );
}
