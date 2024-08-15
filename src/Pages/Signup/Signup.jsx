import React from 'react';
import { Formik, Form, Field } from 'formik';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const navigate = useNavigate();

  const goToLoginpage = () => {
  navigate('/login');
  };
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>WorkMingle</h1>
        <Formik
          initialValues={{ username: '', phone: '', password: '' }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {() => (
            <Form>
              <div className="input-group">
                <label htmlFor="username">Username</label>
                <Field
                  id="username"
                  name="username"
                  placeholder="Username"
                  className="input-field"
                />
              </div>

              <div className="input-group">
                <label htmlFor="phone">Phone no</label>
                <Field
                  id="phone"
                  name="phone"
                  placeholder="Phone no"
                  className="input-field"
                />
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
              </div>

              <button type="submit"   onClick={goToLoginpage}className="signup-btn">Sign up</button>
              <button type="button" className="login-btn">Log In</button>   
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
