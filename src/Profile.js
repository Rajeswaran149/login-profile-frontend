import axios from "axios";
import { Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import "./login.scss";

const initialValues = {
  age: "",
  gender: "",
  dob: "",
  mobile: "",
  address: "",
};

const validate = (values) => {
  let errors = {};
  // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  // if (!values.age) {
  //   errors.age = "Age is required";
  // } else if (!regex.test(values.age)) {
  //   errors.age = "Invalid Age";
  // }
  // if (!values.gender) {
  //   errors.gender = "Gender is required";
  // } else if (!regex.test(values.gender)) {
  //   errors.gender = "Invalid Gender";
  // }
  // if (!values.dob) {
  //   errors.dob = "DOB is required";
  // } else if (!regex.test(values.dob)) {
  //   errors.dob = "Invalid DOB";
  // }
  // if (!values.mobile) {
  //   errors.mobile = "Mobile is required";
  // } else if (!regex.test(values.mobile)) {
  //   errors.mobile = "Invalid mobile";
  // }
  // if (!values.address) {
  //   errors.address = "Address is required";
  // } else if (!regex.test(values.address)) {
  //   errors.address = "Invalid address";
  // }

  return errors;
};

const submitForm = async (values) => {
  console.log(values);
  await axios.post("http://localhost:5000/api/users/profile", values);
  // console.log(userData.data)
};

function Profile() {
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
            <h1 className="text-center">Additional Details</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  name="age"
                  id="age"
                  value={values.age}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.age && touched.age ? "input-error" : null}
                />
                {errors.age && touched.age && (
                  <span className="error">{errors.age}</span>
                )}
              </div>

              <div className="form-row">
                <label htmlFor="gender">Gender</label>
                <input
                  type="text"
                  name="gender"
                  id="gender"
                  value={values.gender}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.gender && touched.gender ? "input-error" : null
                  }
                />
                {errors.gender && touched.gender && (
                  <span className="error">{errors.gender}</span>
                )}
              </div>
              <div className="form-row">
                <label htmlFor="dob">Date Of Birth</label>
                <input
                  type="text"
                  name="dob"
                  id="dob"
                  value={values.dob}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.dob && touched.dob ? "input-error" : null}
                />
                {errors.dob && touched.dob && (
                  <span className="error">{errors.dob}</span>
                )}
              </div>
              <div className="form-row">
                <label htmlFor="mobile">Mobile Number</label>
                <input
                  type="number"
                  name="mobile"
                  id="mobile"
                  value={values.mobile}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.mobile && touched.mobile ? "input-error" : null
                  }
                />
                {errors.mobile && touched.mobile && (
                  <span className="error">{errors.mobile}</span>
                )}
              </div>
              <div className="form-row">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.address && touched.address ? "input-error" : null
                  }
                />
                {errors.address && touched.address && (
                  <span className="error">{errors.address}</span>
                )}
              </div>
              <Link to="/login">
                <button
                  type="submit"
                  className={!(dirty && isValid) ? "disabled-btn" : ""}
                  disabled={!(dirty && isValid)}
                >
                  Submit
                </button>
              </Link>
            </form>
            <Link to="/login">
              <h3 className="text-center">Signup</h3>
            </Link>
          </div>
        );
      }}
    </Formik>
  );
}

export default Profile;
