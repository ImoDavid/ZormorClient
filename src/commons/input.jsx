import React from "react";
import { colors } from "../styles/globals";
import { ErrorMessage, useField, Field } from "formik";
import { Box, Typography, styled, Input as Muinput } from "@mui/material";

const StyledFormGroup = styled(Box)({
  display: "flex",
  flex: " 0 0 auto",
  flexFlow: "row wrap",
  alignItems: "center",
  marginBottom: 0,
});
const StyledInput = styled(Field)({
  "&.is-invalid": {},
  "&.form-control": {
    display: " block",
    width: "100%",
    // height: ,
    padding: ".8rem",
    fontSize: "1rem",
    lineHeight: "",
    // color: ,
    // backgroundColor:
    backgroundClip: "padding-box",
    border: `1px solid grey`,
    borderRadius: "8px",
  },
});
const StyledErrorMessage = styled(ErrorMessage)({
  "&.error": {
    color: `red`,
    fontSize: "1rem",
    fontWeight: 500,
    padding: "0.5rem",
  },
});
const Input = ({ label, touched, ...props }) => {
  const [field, meta] = useField(props);

  // const { values, handleChange } = useFormik();

  return (
    <StyledFormGroup>
      <Typography htmlFor={field.name} gutterBottom textTransform={"capitalize"} >
        {label}
      </Typography>
      <StyledInput
        {...field}
        {...props}
        name={field.name}
        id={field.name}
        //as={Muinput}
        className={`is-invalid form-control
        ${meta.touched && meta.error && `is-invalid`}`}
      />

      <StyledErrorMessage
        component="div"
        className="error"
        // color={"red"}
        name={field.name}
      />
    </StyledFormGroup>
  );
};

export default Input;
