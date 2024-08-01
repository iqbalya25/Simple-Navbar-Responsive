"use client";
import { ErrorMessage, Field, Formik, Form } from "formik";
import React from "react";
import * as Yup from "yup";

interface RegisterFormValues {
  name: string;
  email: string;
  city: string;
}

const FormSection: React.FC = () => {
  const initialValues: RegisterFormValues = {
    name: "",
    email: "",
    city: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("name is required"),
    email: Yup.string().required("email is required"),
    city: Yup.string().required("cityis required"),
  });

  const handleSubmit = async (values: RegisterFormValues) => {
    console.log("Form Value", values);
  };

  return (
    <div>
      <div className="flex flex-col justify-center">
        <h1>Form</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="flex flex-col gap-5">
              <div>
                <label htmlFor="name">Name</label>
                <br />
                <Field id="name" name="name" type="text" />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <br />
                <Field id="email" name="email" type="text" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label htmlFor="city">City</label>
                <br />
                <Field id="city" name="city" type="text" />
                <ErrorMessage
                  name="city"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div>
                <button type="submit">Submit</button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default FormSection;
