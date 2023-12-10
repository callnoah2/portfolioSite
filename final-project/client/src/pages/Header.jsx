import React from 'react';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/DarkLight.css';

const Header = ({ isDrawerOpen, toggleDrawer }) => {
  return (
    <div className="header">
      {isDrawerOpen ? (
        <IoMdClose
          onClick={toggleDrawer}
          className="material-icons"
          tabIndex={0}
          role="button"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              toggleDrawer();
            }
          }}
        />
      ) : (
        <IoMdMenu
          onClick={toggleDrawer}
          className="material-icons"
          tabIndex={0}
          role="button"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              toggleDrawer();
            }
          }}
        />
      )}
      <span className="example-title">Noah Call Portfolio</span>
      {/* Add the Logout button */}
      <Link to="registration/logout" className="logout-button">
        Logout
      </Link>
    </div>
  );
};

export default Header;