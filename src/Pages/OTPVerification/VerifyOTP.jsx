import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './OTPVerification.css'; // Import the same CSS file

const VerifyOtp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');

  const { email } = location.state || {}; // Get email from the signup component

  const handleVerify = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ otp, email }), // Send OTP and email for verification
      });

      const result = await response.json();
      setMessage(result.message);

      if (response.ok) {
        setTimeout(() => {
          navigate('/login'); // Redirect to login after successful verification
        }, 3000);
      }
    } catch (error) {
      setMessage('Verification failed. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="otp-container">
      <div className="otp-box">
        <h2 className="otp-title">Verify OTP</h2>
        <form onSubmit={handleVerify}>
          <div className="otp-input-group">
            <label htmlFor="otp" className="otp-label">Enter OTP:</label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              className="otp-input"
            />
          </div>
          <button type="submit" className="otp-button">
            Verify OTP
          </button>
        </form>
        {message && <p className="otp-message">{message}</p>}
      </div>
    </div>
  );
};

export default VerifyOtp;
