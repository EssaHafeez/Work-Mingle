import React from 'react';
import { Formik, Form, Field } from 'formik';
import { z } from 'zod';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

// Zod schema for validation
const SignupSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters long"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

const validate = (values) => {
  const result = SignupSchema.safeParse(values);
  if (!result.success) {
    const errors = {};
    result.error.errors.forEach((error) => {
      errors[error.path[0]] = error.message;
    });
    return errors;
  }
  return {};
};

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = async (values) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Signup successful', data);
        navigate('/verify-otp', { state: { email: values.email } });
      } else {
        const errorData = await response.json();
        console.error('Signup failed', errorData);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>Labor portal</h1>
        <Formik
          initialValues={{ username: '', email: '', password: '' }}
          validate={validate}
          onSubmit={(values) => {
            handleSignup(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="input-group">
                <label htmlFor="username">Username</label>
                <Field
                  id="username"
                  name="username"
                  placeholder="Username"
                  className="input-field"
                />
                {touched.username && errors.username && (
                  <div className="error">{errors.username}</div>
                )}
              </div>

              <div className="input-group">
                <label htmlFor="email">Email</label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input-field"
                />
                {touched.email && errors.email && (
                  <div className="error">{errors.email}</div>
                )}
              </div>

              <div className="input-group">
                <label htmlFor="password">Password</label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="input-field"
                />
                {touched.password && errors.password && (
                  <div className="error">{errors.password}</div>
                )}
              </div>

              <button type="submit" className="signup-btn">Sign up</button>
              
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
