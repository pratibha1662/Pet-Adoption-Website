import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { createAAdoption } from "../redux/actions/adoptions";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const validationSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required().email("Please enter a valid email"),
  address: yup.string().required(),
  phone: yup.number().positive().integer().required(),
});

const AdoptionForm = ({ closeModal }) => {
  const dispatch = useDispatch();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  };

  const handleSubmit = (values) => {
    createAAdoption({ dispatch, payload: values });
    closeModal();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Field
            as={TextField}
            name="firstName"
            label="First Name"
            fullWidth
            error={errors.firstName && touched.firstName}
            helperText={errors.firstName && touched.firstName && errors.firstName}
          />
          <Field
            as={TextField}
            name="lastName"
            label="Last Name"
            fullWidth
            error={errors.lastName && touched.lastName}
            helperText={errors.lastName && touched.lastName && errors.lastName}
          />
          <Field
            as={TextField}
            name="email"
            label="Email"
            fullWidth
            error={errors.email && touched.email}
            helperText={errors.email && touched.email && errors.email}
          />
          <Field
            as={TextField}
            name="phone"
            label="Phone Number"
            fullWidth
            error={errors.phone && touched.phone}
            helperText={errors.phone && touched.phone && errors.phone}
          />
          <Field
            as={TextField}
            name="address"
            label="Address"
            fullWidth
            error={errors.address && touched.address}
            helperText={errors.address && touched.address && errors.address}
          />
          <Button variant="contained" color="success" type="submit">
            Adopt
          </Button>
          <Button variant="contained" color="warning" onClick={closeModal}>
            Cancel
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AdoptionForm;
