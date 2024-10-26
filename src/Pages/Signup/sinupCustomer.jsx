import React from 'react';
import { Formik, Form, Field } from 'formik';
import { z } from 'zod';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

// Zod validation schema for Signup
const signupSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const SignupCustomer = () => {
  const navigate = useNavigate();

  const handleCustomerSignup = async (values) => {
    try {
      const response = await fetch('http://localhost:5000/api/cust/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Customer signup successful', data);
        navigate('/verify-otpCus', { state: { email: values.email } });
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
        <h1>Customer Portal</h1>
        <Formik
          initialValues={{ username: '', email: '', password: '' }}
          validate={(values) => {
            try {
              signupSchema.parse(values); // Zod schema validation
            } catch (error) {
              return error.formErrors.fieldErrors; // Return Formik-style errors
            }
          }}
          onSubmit={(values) => {
            handleCustomerSignup(values);
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
                {touched.username && errors.username ? (
                  <div className="error">{errors.username}</div>
                ) : null}
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
                {touched.email && errors.email ? (
                  <div className="error">{errors.email}</div>
                ) : null}
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
                {touched.password && errors.password ? (
                  <div className="error">{errors.password}</div>
                ) : null}
              </div>

              <button type="submit" className="signup-btn">Sign up</button>
              
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignupCustomer;
