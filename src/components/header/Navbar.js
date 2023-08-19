import React, { useEffect, useState , useRef} from 'react';
import './navbar.css'; // Make sure to create a corresponding CSS file
import 'react-bootstrap';
import logo from '../../logo_new (Custom).png';
import { handleLogout } from '../login/logout';

const  Navbar = ({ onShiftClick }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const logout_clicked = ()=>{
    handleLogout();
  }

  return (
    <>
      <div className="outter_nav">
        <nav>
          <img src={logo} alt="" />
        </nav>
        {isMobile ? (
          <div className="mobile-version" onClick={onShiftClick} style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }}>
            <div className="first"></div>
            <div className="second"></div>
            <div className="t"></div>
          </div>
        ) : (
          <ul className='navbar-ul'>
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT US</a></li>
            <li><a href="#">CONTACT US</a></li>
            <li><a href="#" onClick={() => handleLogout(() => window.location.href = '/')}>LOGOUT</a></li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
