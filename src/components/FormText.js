import React from "react";
import styled from "styled-components";
import Error from "./Error";
import Label from "./Label";
import TextArea from "./TextArea";

const FormGroup = styled.label`
  display: block;
  position: relative;
  margin-top: 1rem;
`;

const FormControl = styled.div`
  margin-top: 0.25rem;
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
  <FormGroup htmlFor={name}>
    <Label>{label}</Label>
    <FormControl>
      <TextArea
        name={name}
        placeholder={placeholder}
        value={value}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
      {error && touched && <Error>{error}</Error>}
    </FormControl>
  </FormGroup>
);

export default FormText;
