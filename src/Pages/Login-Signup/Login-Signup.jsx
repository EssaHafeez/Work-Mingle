import React from 'react';
import './Login-Signup.css';
import { useNavigate } from 'react-router-dom';

function LoginSignup() {
  return (
    <div className="select-category-container">
      <div className="select-category-box">
        <div className="select-category-title">
          <h1>JoinUsAs</h1>
        </div>
        <div className="login-signup-v2">
          <div className="login-signup-v2-button-first">
          <button className="css-u25o92">
              <span className='labour'>Labour</span>
            </button> 
          </div>
          <div className="login-signup-v2-buttons">
          <button className="css-1vj7isi">
              <span >Customer</span>
            </button>
          </div>
         
        </div>
        <div className="login-signup-v2-disclaimer">
          By signing up you agree to our Terms of Use and 
          <a href="#">Privacy Policy.</a>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;