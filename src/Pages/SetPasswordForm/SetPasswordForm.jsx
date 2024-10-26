import React, { useState } from 'react';
import './SetPasswordForm.css';
import { useNavigate } from 'react-router-dom';

function SetPasswordForm() {

  const navigate = useNavigate();

  const goToOtppage = () => {
    navigate('/Otppage');
  };

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '') {
      setError("Can't be blank.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email.');
    } else {
      setError('');
      // Handle form submission logic for email
    }
  };

  return (
    <div className="ibackground-image">
      <div className="iset-password-form">
        <h1 className="ilogo">WorkMingle</h1>
        <h2>Set Password</h2>
        <p className="plaintext">
          <span>Enter your email and we'll send you instructions to set your password</span>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="iform-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className={error ? 'iinput-error' : ''}
            />
            {error && <span className="ierror-text">{error}</span>}
          </div>
          <button className="btn5" type="submit" disabled={!email} onClick={goToOtppage}>Set password</button>
        </form>
      </div>
    </div>
  );
}

export default SetPasswordForm;
