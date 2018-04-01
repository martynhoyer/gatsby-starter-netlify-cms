import React from "react";
import styled from "styled-components";
import Error from "./Error";
import Label from "./Label";
import TextArea from "./TextArea";

const Container = styled.label`
  display: block;
  position: relative;
`;

const FormText = ({
  label,
  name,
  placeholder,
  value,
  error,
  touched,
  handleBlur,
  handleChange
}) => (
  <Container htmlFor={name}>
    <Label>{label}</Label>
    <TextArea
      name={name}
      placeholder={placeholder}
      value={value}
      handleBlur={handleBlur}
      handleChange={handleChange}
    />
    {error && touched && <Error>{error}</Error>}
  </Container>
);

export default FormText;
