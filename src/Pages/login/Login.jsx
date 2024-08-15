import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {



    const navigate = useNavigate();

    const goToSetPasswordForm = () => {
    navigate('/setpasswordform');

    };


  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
      password: ''
    },
    validationSchema: Yup.object({
      phoneNumber: Yup.string()
        .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
        .required('Required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Required'),
    }),
    onSubmit: values => {
      console.log('Form data:', values);
      // Handle form submission, e.g., send data to the server
    },
  });

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>WorkMingle</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="input-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              className="input-field"
              placeholder="Phone Number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div className="error">{formik.errors.phoneNumber}</div>
            ) : null}
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className="input-field"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>
          <a href="#" className="forgot-password" onClick={goToSetPasswordForm}>Forgot password?</a>
          <button className="login-btn1" type="submit">Log in</button>
          <div className="signup-prompt">
            <p>
              Did you purchase an assembly from IKEA or sign up via Facebook or Google?{' '}
              <a href="/">Create Password</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
