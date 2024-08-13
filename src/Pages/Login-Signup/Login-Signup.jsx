import React from 'react';
import './Login-Signup.css';

function LoginSignup() {
  return (
    <div className="select-category-container">
      <div className="select-category-box">
        <div className="select-category-title">
          <h1>WorkMingle</h1>
        </div>
        <div className="login-signup-v2">
          <div className="login-signup-v2-button-first">
            <button className="css-u25o92">
              <span className="labour">Login</span>
            </button>
          </div>
          <div className="login-signup-v2-buttons">
            <button className="css-1vj7isi">
              <span>Signup</span>
            </button>
          </div>
        </div>
        <div className="login-signup-v2-disclaimer">
          <span>
              By signing up you agree to our{' '}
              <a target="_blank" rel="noopener noreferrer" href="/terms">
              <span style={{color:'#9ED90D'}}> Terms of Use </span>
               </a>
               and  
              <a target="_blank" rel="noopener noreferrer" href="/privacy">
              <span style={{color:'#9ED90D'}} >Privacy Policy </span>
              </a>
               . 
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
