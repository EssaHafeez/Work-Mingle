import './App.css';
import UserInterface from './components/UserInterface/UserInterface';
import SelectCategory from './Pages/SelectCategory/SelectCategory';
import LoginSignup from './Pages/Login-Signup/Login-Signup';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import SetPasswordForm from './Pages/SetPasswordForm/SetPasswordForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserInterface />} />
        <Route path="/category" element={<SelectCategory />} />
        <Route path="/" element={<SelectCategory/>} />
        <Route path="/loginsignup" element={<LoginSignup />} />
        <Route path="/" element={<LoginSignup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setpasswordform" element={<SetPasswordForm />} />
          
    
      </Routes>
    </Router>
  );
}

export default App;
