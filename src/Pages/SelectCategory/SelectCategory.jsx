import React from 'react';
import './SelectCategory.css';
import { useNavigate } from 'react-router-dom';

function SelectCategory() {

  const navigate = useNavigate();

    const goToLoginSignuppage = () => {
    navigate('/loginsignup');
  };
  const goToLoginSignuppageCus = () => {
    navigate('/customer-loginsignup');
  };
 
 
  return (
    <div className="select-category-container">
      <div className="select-category-box">
        <div className="select-category-title">
          <h1>Join Us As</h1>
        </div>
        <div className="login-signup-v2">
          <div className="login-signup-v2-button-first">
          <button  onClick={goToLoginSignuppage} className="css-u25o92">
              <span className='labour'>Labour</span>
            </button> 
          </div>
          <div className="login-signup-v2-buttons">
          <button onClick={goToLoginSignuppageCus} className="css-1vj7isi">
              <span  >Customer</span>
            </button>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default SelectCategory;
