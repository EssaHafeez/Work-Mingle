import './App.css';
import 'leaflet/dist/leaflet.css';

import UserInterface from './components/UserInterface/UserInterface';
import SelectCategory from './Pages/SelectCategory/SelectCategory';
import LoginSignup from './Pages/Login-Signup/Login-Signup';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/login/Login';
import SignupCustomer from './Pages/Signup/sinupCustomer';
import LoginCustomer from './Pages/login/loginCus';
import LoginSignupCustomer from './Pages/Login-Signup/LoginSignupCustomer';
import SetPasswordForm from './Pages/SetPasswordForm/SetPasswordForm';
import ForgotPassword from './Pages/login/ForgotPassword';
import ResetPassword from './Pages/login/ResetPassword';
import VerifyOtp from './Pages/OTPVerification/VerifyOTP';
import VerifyOtpCust from './Pages/OTPVerification/verifyCust';
import MainPage from './components/MainPage/MainPage';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/category" element={<SelectCategory />} />
        <Route path="/loginsignup" element={<LoginSignup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Customer-specific routes */}
        <Route path="/customer-loginsignup" element={<LoginSignupCustomer />} />
        <Route path="/customer-signup" element={<SignupCustomer />} />
        <Route path="/customer-login" element={<LoginCustomer />} />

        {/* Password management */}
        <Route path="/setpasswordform" element={<SetPasswordForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/resetPassword/:Token" element={<ResetPassword />} />
        
        {/* OTP verification */}
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/verify-otpCus" element={<VerifyOtpCust />} />
      </Routes>
    </Router>
  );
}

export default App;
