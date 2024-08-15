import React from 'react';
import './UserInterface.css';  // Importing the CSS file
import logo from '../../Images/logo.png';
import headerlogo from '../../Images/headerlogo.png';
import { useNavigate } from 'react-router-dom';


function UserInterface() {

    const navigate = useNavigate();

    const goToSelectCategory = () => {
    navigate('/category');
  };

    return (
        <div className="work-mingle-container">
            <header className="header6">
                <img src={logo}  alt="Work Mingle Logo" className="logo" />
                <button  className="sign-up-button6" onClick={goToSelectCategory}>Sign up →</button>
            </header>

            <div className="content">
                <div className="text-content">
                    <h1>Empowering laborers,
                        connecting customers</h1>
                    <p>Tired of the headache of hiring laborers? Look no further than Work Mingle. 
                        Our platform offers a seamless solution for connecting customers with trustworthy
                        painters and cleaners.  With real-time communication, geolocation services, and 
                        secure payment options, Work Mingle makes hiring easy, efficient, and stress-free. 
                        Join us today and experience the difference.</p>
                    <button className="start-button">Start today →</button>
                </div>
                <div className="image-content">
                    <img src={headerlogo} alt="Laborers Tools" className="tools-image" />
                </div>
            </div>
        </div>
    );
}

export default UserInterface;
