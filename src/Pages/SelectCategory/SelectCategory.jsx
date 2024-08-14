import React from 'react';
import './SelectCategory.css';
import { useNavigate } from 'react-router-dom';

function SelectCategory() {

  const navigate = useNavigate();

    const goToLoginSignuppage = () => {
    navigate('/loginsignup');
  };
  return (
    <div className="select-category-container">
      <div className="select-category-box">
        <div className="select-category-title">
          <h1>JoinUsAs</h1>
        </div>
        <div className="login-signup-v2">
          <div className="login-signup-v2-button-first">
          <button  onClick={goToLoginSignuppage} className="css-u25o92">
              <span className='labour'>Labour</span>
            </button> 
          </div>
          <div className="login-signup-v2-buttons">
          <button onClick={goToLoginSignuppage} className="css-1vj7isi">
              <span  >Customer</span>
            </button>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default SelectCategory;
