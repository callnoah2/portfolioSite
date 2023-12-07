import React from 'react';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import '../styles/DarkLight.css'

const Header = ({ isDrawerOpen, toggleDrawer }) => {
  return (
    <div className="header">
      {isDrawerOpen ? (
        <IoMdClose
          onClick={toggleDrawer}
          className="material-icons"
          tabIndex={0} // Add tabIndex to make it focusable
          role="button" // Add role to indicate it's a button
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
          tabIndex={0} // Add tabIndex to make it focusable
          role="button" // Add role to indicate it's a button
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              toggleDrawer();
            }
          }}
        />
      )}
      <span className="example-title">TBD</span>
    </div>
  );
};

export default Header;