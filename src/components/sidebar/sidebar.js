import React from 'react';
import './sidebar.css';
import {handleLogout} from '../login/logout';
const Sidebar = ({ isShifted }) => {

  const logout_clicked = ()=>{
    handleLogout();
  }
  return (
    <div className={`outter-sidebar ${isShifted ? 'shifted' : ''}`}>
        <ul className='sidebar-ul'>
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT US</a></li>
            <li><a href="#">CONTACT US</a></li>
            <li><a href="#" onClick={() => handleLogout(() => window.location.href = '/')}>LOGOUT</a></li>
          </ul>
    </div>
  );
};

export default Sidebar;
