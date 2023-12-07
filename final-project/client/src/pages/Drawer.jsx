import React from 'react';
import { IoMdClose } from 'react-icons/io';
import '../styles/DarkLight.css'
import '../styles/Drawer.css'

const Drawer = ({ isOpen, onClose, darkModeToggle }) => {
  return (
    <div className={`drawer ${isOpen ? 'open' : ''}`}>
      <IoMdClose
        onClick={onClose}
        className="close-icon"
        tabIndex={0}
        role="button"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onClose();
          }
        }}
      />
      <div className="links">
        < a href="/">Home</a>
        <a href="/about">About Me</a>
        <a href="/projects">Projects</a>
        <a href="/hire-me">Hire Me</a>
        <a href="/status">Status</a>
        <button onClick={darkModeToggle}>Toggle Dark Mode</button>
      </div>
    </div>
  );
};

export default Drawer;