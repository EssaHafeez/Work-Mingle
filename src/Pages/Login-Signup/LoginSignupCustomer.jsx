import React from 'react';
import './Login-Signup.css';
import { useNavigate } from 'react-router-dom';

function LoginSignupCustomer() {
  const navigate = useNavigate();

  const goToCustomerSignupPage = () => {
    navigate('/customer-signup'); // Redirect to customer signup page
  };

  const goToCustomerLoginPage = () => {
    navigate('/customer-login'); // Redirect to customer login page
  };

  return (
    <div className="select-category-container">
      <div className="select-category-box">
        <div className="select-category-title">
          <h4>Customer Portal</h4>
        </div>
        <div className="login-signup-v2">
          <div className="login-signup-v2-button-first">
            <button onClick={goToCustomerLoginPage} className="css-u25o92">
              <span className="customer">Login</span>
            </button>
          </div>
          <div className="login-signup-v2-buttons">
            <button onClick={goToCustomerSignupPage} className="css-1vj7isi">
              <span>Signup</span>
            </button>
          </div>
        </div>

        <div className="login-signup-v2-disclaimer">
          <span>
            By signing up, you agree to our{' '}
            <a href="/terms">
              <span style={{ color: '#9ED90D' }}>Terms of Use</span>
            </a>{' '}
            and
            <div>
              <a target="_blank" rel="noopener noreferrer" href="/privacy">
                <span style={{ color: '#9ED90D' }}>Privacy Policy</span>
              </a>
              .
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginSignupCustomer;
