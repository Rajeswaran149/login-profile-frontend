import axios from "axios";
import { Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import "./signup.scss";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validate = (values) => {
  let errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if (!values.name) {
    errors.name = "name is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!regex.test(values.email)) {
    errors.email = "Invalid Email";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 4) {
    errors.password = "Password too short";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "confirm Password is required";
  } else if (values.confirmPassword.length < 4) {
    errors.confirmPassword = "confirm Password too short";
  }

  return errors;
};

const submitForm = async (values) => {
  console.log(values);
  await axios.post("http://localhost:5000/api/users/signup", values);
  // console.log(userData.data)
};

function Signup() {
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={submitForm}
    >
      {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
          isValid,
          dirty,
        } = formik;
        return (
          <div className="container">
            <h1 className="text-center">Sign in to continue</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="name">User Name</label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.name && touched.name ? "input-error" : null}
                />
                {errors.email && touched.email && (
                  <span className="error">{errors.email}</span>
                )}
              </div>

              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email ? "input-error" : null
                  }
                />
                {errors.email && touched.email && (
                  <span className="error">{errors.email}</span>
                )}
              </div>

              <div className="form-row">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password ? "input-error" : null
                  }
                />
                {errors.password && touched.password && (
                  <span className="error">{errors.password}</span>
                )}
              </div>
              <div className="form-row">
                <label htmlFor="Confirm password">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.confirmPassword && touched.confirmPassword
                      ? "input-error"
                      : null
                  }
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <span className="error">{errors.confirmPassword}</span>
                )}
              </div>
              <Link to="/login">
                <button
                  type="submit"
                  className={!(dirty && isValid) ? "disabled-btn" : ""}
                  disabled={!(dirty && isValid)}
                >
                  Sign Up
                </button>
              </Link>
            </form>
            <Link to="/login">
              <h3 className="text-center">login</h3>
            </Link>
          </div>
        );
      }}
    </Formik>
  );
}

export default Signup;
