import React, { useState } from 'react';
import './ForgotPassword.css'; // Import the CSS file

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [message, setMessage] = useState('');
  const [otp, setOtp] = useState('');

  const handleSendOtp = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage('OTP sent to your email. Please check your inbox.');
        setOtpSent(true);
      } else {
        setMessage(result.message);
      }
    } catch (error) {
      setMessage('Error sending OTP. Please try again.');
      console.error('Error:', error);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp }),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage('OTP verified successfully. You can now reset your password.');
        // Redirect or show a reset password form here
      } else {
        setMessage(result.message);
      }
    } catch (error) {
      setMessage('Error verifying OTP. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-box">
        <h2 className="forgot-password-title">Forgot Password</h2>

        {!otpSent ? (
          <form onSubmit={handleSendOtp}>
            <div className="input-group">
              <label htmlFor="email" className="input-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-field"
                placeholder="Enter your email"
              />
            </div>
            <button type="submit" className="submit-button">Send OTP</button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp}>
            <div className="input-group">
              <label htmlFor="otp" className="input-label">OTP</label>
              <input
                type="text"
                id="otp"
                name="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                className="input-field"
                placeholder="Enter the OTP sent to your email"
              />
            </div>
            <button type="submit" className="submit-button">Verify OTP</button>
          </form>
        )}

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
