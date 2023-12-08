import React, { useState, useEffect } from 'react';
import Header from './Header';
import Drawer from './Drawer';
import '../styles/DarkLight.css'
import '../index.css'

const IndexPage = () => {
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
        <h1>Noah Call Portfolio</h1>
        <p>Welcome to my personal portfolio! I'm Noah Call, a passionate web developer and cybersecurity enthusiast. This project serves as a showcase of my skills and projects. If you're looking for a passionate and skilled professional, I'm ready to bring my expertise to your team. Explore my portfolio to learn more about my experiences and capabilities, and let's connect to discuss how I can contribute to your projects.</p>
      </div>
    </div>
  );
};

export default IndexPage;