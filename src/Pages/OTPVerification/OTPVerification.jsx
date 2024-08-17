import React from 'react';
import './OTPVerification.css';

const OTPVerificationy = () => {
  return (
    <div className="otp-verification-containery">
      <div className="otp-form-containery">
        <h2 className="otp-titley">Enter the code</h2>
        <p className="otp-subtitley">We have sent you a verification code to</p>
        <p className="otp-numbery">+92 3040422023</p>
        <div className="otp-inputsy">
          <input type="text" maxLength="1" className="otp-inputy" value="4" readOnly />
          <input type="text" maxLength="1" className="otp-inputy" value="7" readOnly />
          <input type="text" maxLength="1" className="otp-inputy" value="1" readOnly />
          <input type="text" maxLength="1" className="otp-inputy" value="1" readOnly />
        </div>
        <a href="#" className="otp-resendy">Resend OTP</a>
        <button className="otp-buttony">VERIFY</button>
      </div>
    </div>
  );
};

export default OTPVerificationy;
