import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // For sending requests to the backend
import './OtpVerCust.css'; // Import the CSS file

const OTPVerification = () => {
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send OTP for verification to the backend
      const response = await axios.post('http://localhost:5000/api/cust/verify-otp', { otp });

      if (response.data.success) {
        // OTP verified successfully, redirect to dashboard or any other page
        setMessage('OTP verified successfully!');
        navigate('/dashboard');
      } else {
        setMessage('OTP verification failed. Please try again.');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      setMessage('An error occurred during verification. Please try again.');
    }
  };

  return (
    <div className="otp-verification-container">
      <div className="otp-verification-card">
        <h2 className="otp-verification-title">OTP Verification</h2>
        <form onSubmit={handleSubmit}>
          <div className="otp-input-container">
            <label htmlFor="otp" className="otp-label">Enter OTP:</label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={handleChange}
              required
              className="otp-input"
            />
          </div>
          <button type="submit" className="otp-submit-button">
            Verify OTP
          </button>
        </form>
        {message && <p className="otp-message">{message}</p>}
      </div>
    </div>
  );
};

export default OTPVerification;
