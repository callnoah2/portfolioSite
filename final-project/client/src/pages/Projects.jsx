import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import Header from './Header';
import Drawer from './Drawer';
import '../styles/DarkLight.css';
import '../index.css';

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

  // Sample project data
  const projects = [
    {
      title: 'Quote Search',
      description: 'This web app is a mobile-first app that allows users to search for quotes and pin them.',
      path: '/quotes/',
      imagePath: '../images/Assn6',
    },
    {
      title: 'Component Library',
      description: 'This web app is a library for other developers to quickly find and implement different web components.',
      path: '/compLib/',
      imagePath: '../images/Assn5',
    },
    {
      title: 'Recipe Cards',
      description: 'This web app allows users to enter recipies and get a print-friendly, formatted recipe card.',
      path: '/recipe/',
      imagePath: '../images/Assn4',
    },
  ];

  return (
    <div>
      <Header isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} darkModeToggle={toggleDarkMode} />

      <div className="content">
        <h1>My Projects:</h1>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-section">
              <Link to={project.path}>
                <h2>{project.title}</h2>
              </Link>
              <p onClick={() => window.location.href = project.path}>
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;