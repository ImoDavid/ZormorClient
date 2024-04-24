import React from "react";
import axios from "axios";
import { Formik, Form } from "formik"; // Import Formik and Form
import {
  Button,
  Input as MInput,
  Box,
  Stack,
  styled,
} from "@mui/material";
import { colors } from "../../styles/globals";
import { Input, TextArea } from "../../commons";
import { toast } from "react-toastify"; // Assuming you're using react-toastify for notifications
import { FormLoader } from "../loader";

const StyledButton = styled(Button)({
  marginTop: "20px",
  backgroundColor: colors.DASHPM,
  minWidth: "100px",
  "&:hover": { backgroundColor: colors.DASHPM },
});

const StyledForm = styled(Box)({
  marginTop: "1rem",
  marginBottom: "1rem",
});

const PlaceForm = () => {
  return (
    <Formik
      // validationSchema={validate}
      initialValues={{
        name: "",
        description: "",
        location: "",
        openHours: "",
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const payload = new FormData();

        if (values.image) {
          payload.append("image", values.image);
        }
        payload.append("name", values.name);
        payload.append("description", values.description);
        payload.append("location", values.location);
        payload.append("openHours", values.openHours);

        try {
          const response = await axios.post(
            "http://localhost:8080/api/add-place",
            payload,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          toast.success("parcel created successfully", {
            position: "top-right",
          });

          resetForm();
          setSubmitting(false);
        } catch (err) {
            setSubmitting(false);
            

          toast.error(err.response.data.error, {
            position: "top-right",
          });
        }
      }}
    >
      {({ isSubmitting, setFieldValue, handleBlur }) => (
        <Form encType="multipart/form-data">
          <Box my={8}>
            <Stack>
              <StyledForm>
                <Input
                  label={"Name"}
                  name="name"
                  type="text"
                  placeholder={`Enter name `}
                />
              </StyledForm>
              <StyledForm>
                <Input
                  label={"location"}
                  name="location"
                  type="text"
                  placeholder={` Enter location`}
                />
              </StyledForm>
              <StyledForm>
                <Input
                  label={"opening hours"}
                  name="openHours"
                  type="text"
                  placeholder={`8am - 12:00pm`}
                />
              </StyledForm>

              <StyledForm>
                <TextArea label={"Description"} name="description" />
              </StyledForm>

              <Box
                border={`1px solid grey`}
                p
                width={["200px", "300px"]}
                borderRadius={"10px"}
              >
                <MInput
                  type="file"
                  name="image"
                  onChange={(event) => {
                    const file = event.currentTarget.files[0];
                    setFieldValue("image", file);
                  }}
                  onBlur={handleBlur}
                />
              </Box>

              <StyledButton
                type="submit"
                variant="contained"
                disabled={isSubmitting}
              >
                {isSubmitting ? <FormLoader /> : "Add Place"}
              </StyledButton>
            </Stack>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default PlaceForm;
