import React from 'react';
import './SelectCategory.css';

function SelectCategory() {
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
      </div>
    </div>
  );
}

export default SelectCategory;
