import React, { useState } from 'react';
import './SetPasswordForm.css';
import { useNavigate } from 'react-router-dom';

function SetPasswordForm() {

  const navigate = useNavigate();

  const goToOtppage = () => {
  navigate('/Otppage');
      };
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber === '') {
      setError("Can't be blank.");
    } else {
      setError('');
      // Handle form submission logic for phone number
    }
  };

  return (
    <div className="ibackground-image">
      <div className="iset-password-form">
        <h1 className="ilogo">WorkMingle</h1>
        <h2>Set Password</h2>
        <p class="plaintext">
            <span>Enter your phone number and we'll send you instructions to set your password</span>
            </p>
        <form onSubmit={handleSubmit}>
          <div className="iform-group">
            <label htmlFor="phone">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              value={phoneNumber} 
              onChange={(e) => setPhoneNumber(e.target.value)} 
              className={error ? 'iinput-error' : ''}
            />
            {error && <span className="ierror-text">{error}</span>}
          </div>
          <button className="btn5" type="submit" disabled={!phoneNumber} onClick={goToOtppage}>Set password</button>
        </form>
      </div>
    </div>
  );
}

export default SetPasswordForm;