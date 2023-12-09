import React, { useState, useEffect } from 'react';
import Header from './Header';
import Drawer from './Drawer';
import HireMeForm from './HireMeForm';
import '../styles/DarkLight.css';
import '../index.css';

const HireMe = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  return (
    <div>
      <Header isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} darkModeToggle={toggleDarkMode} />

      <div className="content">
        <h1>Hire Me!</h1>
        <h3>Please fill out this form to start a quote.</h3>
        <p>* Indicates a required field</p>
        <HireMeForm />
        <p>
          Please Check the{' '}
          <a href="/status" style={{ color: '#041367', textDecoration: 'underline' }}>
            Status Page
          </a>{' '}
          to review your form.
        </p>
      </div>
    </div>
  );
};

export default HireMe;