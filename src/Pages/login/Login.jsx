import React, { useState } from 'react';
import { useFormik } from 'formik';
import { z } from 'zod';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Zod schema for validation
const LoginSchema = z.object({
  email: z.string().email('Invalid email address').nonempty('Email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters').nonempty('Password is required'),
});

const validate = (values) => {
  const result = LoginSchema.safeParse(values);
  if (!result.success) {
    const errors = {};
    result.error.errors.forEach((error) => {
      errors[error.path[0]] = error.message;
    });
    return errors;
  }
  return {};
};

const Login = () => {
  const [otpSent, setOtpSent] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const goToSetPasswordForm = () => {
    navigate('/forgot-password');
  };

  const handleLogin = async (values) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email: values.email,
        password: values.password
      });

      if (response.data.otpRequired) {
        setEmail(values.email);
        setOtpSent(true);
        return;
      }

      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token);
        navigate('/dashboard');
      } else {
        alert(response.data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login. Please try again.');
    }
  };

  const handleOtpVerification = async (otp) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('authToken', data.token);
        navigate('/dashboard');
      } else {
        const errorData = await response.json();
        alert('OTP verification failed: ' + errorData.message);
      }
    } catch (error) {
      console.error('Error during OTP verification:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate,
    onSubmit: handleLogin,
  });

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Labor portal</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="input-field"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
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
          <button className="forgot-password" type="button" onClick={goToSetPasswordForm}>
            Forgot password?
          </button>
          <button className="login-btn1" type="submit">Log in</button>
        </form>

        {otpSent && (
          <div className="otp-verification">
            <h2>Verify OTP</h2>
            <input
              type="text"
              placeholder="Enter OTP"
              onChange={(e) => handleOtpVerification(e.target.value)}
            />
            <button onClick={() => handleOtpVerification()}>Verify OTP</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
