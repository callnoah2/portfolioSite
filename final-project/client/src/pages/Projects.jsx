import React, { useState, useEffect } from 'react';
import Header from './Header';
import Drawer from './Drawer';
import '../styles/DarkLight.css'

const Projects = () => {
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
        <h1>Welcome to My PROJECTS PAGE</h1>
        <p>This is the Projects Content</p>
        {/* Add more content as needed */}
      </div>
    </div>
  );
};

export default Projects;